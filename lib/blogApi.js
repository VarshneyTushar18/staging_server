import {
  blogPostHref,
  stripHtml,
  resolvePostImage,
  DEFAULT_BLOG_IMAGE,
  isMainBlogFilterSlug,
  getMatchingApiCategorySlugs,
} from "./blogUtils.js";

const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
const SITE =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.tech2globe.com";

export { blogPostHref, stripHtml, resolvePostImage, DEFAULT_BLOG_IMAGE };

async function fetchBlogPostsFromApi({
  page = 1,
  perPage = 6,
  category = "",
  search = "",
  sort = "recent",
  month = "",
  revalidate = 60,
} = {}) {
  const params = new URLSearchParams({
    format: "wp",
    page: String(page),
    per_page: String(perPage),
  });
  if (category) params.set("category", category);
  if (search) params.set("search", search);
  if (month) params.set("month", month);
  if (sort === "popular") params.set("sort", "popular");

  const res = await fetch(`${API}/api/blog/posts?${params}`, {
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error(`Blog list failed: ${res.status}`);
  }

  const json = await res.json();
  return {
    posts: json.data || [],
    pagination: json.pagination || null,
  };
}

async function fetchAllPostsForCategorySlug(options) {
  const firstPage = await fetchBlogPostsFromApi({ ...options, page: 1, perPage: 100 });
  const posts = [...firstPage.posts];
  const totalPages = firstPage.pagination?.totalPages || 1;

  if (totalPages > 1) {
    const otherPages = await Promise.all(
      Array.from({ length: totalPages - 1 }, (_, index) =>
        fetchBlogPostsFromApi({
          ...options,
          page: index + 2,
          perPage: 100,
        }),
      ),
    );

    for (const result of otherPages) {
      posts.push(...result.posts);
    }
  }

  return posts;
}

function sortMergedBlogPosts(posts, sort = "recent") {
  return [...posts].sort((a, b) => {
    if (sort === "popular") {
      const viewDiff = (Number(b.view_count) || 0) - (Number(a.view_count) || 0);
      if (viewDiff !== 0) return viewDiff;
    }

    return new Date(b.date || 0) - new Date(a.date || 0);
  });
}

async function fetchBlogPostsByMainCategory({
  page = 1,
  perPage = 6,
  category = "",
  search = "",
  sort = "recent",
  month = "",
  revalidate = 60,
} = {}) {
  const apiCategories = await fetchBlogCategories(revalidate);
  const matchingSlugs = getMatchingApiCategorySlugs(apiCategories, category);

  if (!matchingSlugs.length) {
    return {
      posts: [],
      pagination: {
        page,
        limit: perPage,
        total: 0,
        totalPages: 1,
      },
    };
  }

  const groupedResults = await Promise.all(
    matchingSlugs.map((slug) =>
      fetchAllPostsForCategorySlug({
        category: slug,
        search,
        month,
        sort,
        revalidate,
      }),
    ),
  );

  const uniquePosts = new Map();
  for (const posts of groupedResults) {
    for (const post of posts) {
      uniquePosts.set(post.id, post);
    }
  }

  const merged = sortMergedBlogPosts([...uniquePosts.values()], sort);
  const total = merged.length;
  const offset = (page - 1) * perPage;

  return {
    posts: merged.slice(offset, offset + perPage),
    pagination: {
      page,
      limit: perPage,
      total,
      totalPages: Math.max(1, Math.ceil(total / perPage)),
    },
  };
}

/** WordPress-shaped posts from backend (?format=wp) */
export async function fetchBlogPosts({
  page = 1,
  perPage = 6,
  category = "",
  search = "",
  sort = "recent",
  month = "",
  revalidate = 60,
} = {}) {
  if (category && isMainBlogFilterSlug(category)) {
    return fetchBlogPostsByMainCategory({
      page,
      perPage,
      category,
      search,
      sort,
      month,
      revalidate,
    });
  }

  return fetchBlogPostsFromApi({
    page,
    perPage,
    category,
    search,
    sort,
    month,
    revalidate,
  });
}

export async function fetchBlogPostBySlug(slug, revalidate = 60) {
  const res = await fetch(
    `${API}/api/blog/posts/${encodeURIComponent(slug)}?format=wp`,
    { next: { revalidate } },
  );

  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`Blog post failed: ${res.status}`);
  }

  const json = await res.json();
  return json.data || null;
}

export function blogCanonical(slug) {
  return `${SITE.replace(/\/$/, "")}/blogs/${slug}`;
}

export async function fetchBlogCategories(revalidate = 60) {
  const res = await fetch(`${API}/api/blog/public/categories`, {
    next: { revalidate },
  });
  if (!res.ok) throw new Error(`Blog categories failed: ${res.status}`);
  const json = await res.json();
  return json.data || [];
}

export async function fetchBlogArchives(revalidate = 60) {
  const res = await fetch(`${API}/api/blog/public/archives?limit=12`, {
    next: { revalidate },
  });
  if (!res.ok) throw new Error(`Blog archives failed: ${res.status}`);
  const json = await res.json();
  return json.data || [];
}

function categoriesFromPosts(posts) {
  const map = new Map();
  for (const post of posts) {
    const names = post.category_names || [];
    for (const name of names) {
      if (!name || map.has(name)) continue;
      const slug = name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      map.set(name, { id: slug, name, slug, post_count: 0 });
    }
  }
  return [...map.values()].sort((a, b) => a.name.localeCompare(b.name));
}

/** Sidebar: all widgets — original posts + categories + archives. */
export async function fetchBlogSidebarData({ currentSlug = "", revalidate = 60 } = {}) {
  let popular = { posts: [] };
  let recent = { posts: [] };
  let categories = [];
  let archives = [];

  try {
    popular = await fetchBlogPosts({ perPage: 8, sort: "popular", revalidate });
  } catch (e) {
    console.error("Sidebar most viewed:", e);
  }
  try {
    recent = await fetchBlogPosts({ perPage: 8, revalidate });
  } catch (e) {
    console.error("Sidebar recent:", e);
  }
  try {
    categories = await fetchBlogCategories(revalidate);
  } catch (e) {
    console.error("Sidebar categories:", e);
    categories = categoriesFromPosts([...popular.posts, ...recent.posts]);
  }
  try {
    archives = await fetchBlogArchives(revalidate);
  } catch (e) {
    console.error("Sidebar archives:", e);
  }

  const filterCurrent = (posts) =>
    currentSlug ? posts.filter((p) => p.slug !== currentSlug) : posts;

  return {
    mostViewed: filterCurrent(popular.posts).slice(0, 5),
    recent: filterCurrent(recent.posts).slice(0, 5),
    categories,
    archives: archives.slice(0, 12),
  };
}

export function blogCategoryHref(slug) {
  return `/blogs?category=${encodeURIComponent(slug)}`;
}

export function blogArchiveHref(month) {
  return `/blogs?month=${encodeURIComponent(month)}`;
}

export function formatBlogListDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
