import Link from "next/link";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import BlogCard from "@/app/components/blog/BlogCard";
import BlogCategoryTabs from "@/app/components/blog/BlogCategoryTabs";
import {
  fetchBlogPosts,
  fetchBlogCategories,
} from "@/lib/blogApi";
import { MAIN_BLOG_FILTER_CATEGORIES } from "@/lib/blogUtils";
import Style from "./blogs.module.css";

export const metadata = {
  title: "Blog | Tech2Globe",
  description:
    "Latest insights, guides, and updates from Tech2Globe on technology, e-commerce, and digital marketing.",
  alternates: {
    canonical: "https://www.tech2globe.com/blogs",
  },
};

export const revalidate = 60;

function blogsQueryString({ search, category, month, page }) {
  const q = new URLSearchParams();
  if (search) q.set("search", search);
  if (category) q.set("category", category);
  if (month) q.set("month", month);
  if (page > 1) q.set("page", String(page));
  const s = q.toString();
  return s ? `/blogs?${s}` : "/blogs";
}

export default async function BlogsPage({ searchParams }) {
  const params = await searchParams;
  const search = String(params?.search || params?.q || "").trim();
  const category = String(params?.category || "").trim();
  const month = String(params?.month || "").trim();
  const page = Math.max(Number(params?.page) || 1, 1);

  let posts = [];
  let pagination = null;
  let categories = [];

  try {
    const [listResult, cats] = await Promise.all([
      fetchBlogPosts({ perPage: 24, page, search, category, month }),
      fetchBlogCategories().catch(async () => {
        const fallback = await fetchBlogPosts({ perPage: 50 });
        const map = new Map();
        for (const p of fallback.posts) {
          for (const name of p.category_names || []) {
            if (!name || map.has(name)) continue;
            const slug = name
              .toLowerCase()
              .trim()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/(^-|-$)/g, "");
            map.set(name, { id: slug, name, slug, post_count: 0 });
          }
        }
        return [...map.values()];
      }),
    ]);
    posts = listResult.posts;
    pagination = listResult.pagination;
    categories = cats;
  } catch (err) {
    console.error("Blogs page fetch error:", err);
  }

  const hasFilter = search || category || month;
  const activeCategoryLabel =
    MAIN_BLOG_FILTER_CATEGORIES.find((item) => item.slug === category)?.name ||
    category.replace(/-/g, " ");

  return (
    <>
      <Breadcrumb pageName="Blog" />
      <section className={`${Style.section} py-5`}>
        <div className="container">
          <div className="title-section text-center mb-4">
            <p className="sub-title text-uppercase">FROM THE BLOG</p>
            <h1 className="title">Latest Insights and Updates</h1>
            {search ? (
              <p className="text-muted">
                Search results for: <strong>{search}</strong>
              </p>
            ) : null}
            {category ? (
              <p className="text-muted">
                Category: <strong>{activeCategoryLabel}</strong>
              </p>
            ) : null}
            {month ? (
              <p className="text-muted">
                Archive: <strong>{month}</strong>
              </p>
            ) : null}
            {hasFilter ? (
              <Link href="/blogs" className={Style.clearFiltersLink}>
                ← View all posts
              </Link>
            ) : null}
          </div>

          <BlogCategoryTabs
            categories={categories}
            activeCategory={category}
            search={search}
            month={month}
          />

          {posts.length === 0 ? (
            <p className="text-center">No blog posts found.</p>
          ) : (
            <div
              className={`row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ${Style.cardGrid}`}
            >
              {posts.map((post, index) => (
                <div key={post.id} className="col d-flex">
                  <BlogCard post={post} priority={index < 3} />
                </div>
              ))}
            </div>
          )}

          {pagination && pagination.totalPages > 1 ? (
            <nav
              className={`${Style.pagination} ${Style.paginationCentered}`}
              aria-label="Blog pages"
            >
              {page > 1 ? (
                <Link
                  href={blogsQueryString({
                    search,
                    category,
                    month,
                    page: page - 1,
                  })}
                  className={Style.pageLink}
                >
                  ← Previous
                </Link>
              ) : (
                <span />
              )}
              <span className={Style.pageInfo}>
                Page {pagination.page} of {pagination.totalPages}
              </span>
              {page < pagination.totalPages ? (
                <Link
                  href={blogsQueryString({
                    search,
                    category,
                    month,
                    page: page + 1,
                  })}
                  className={Style.pageLink}
                >
                  Next →
                </Link>
              ) : (
                <span />
              )}
            </nav>
          ) : null}
        </div>
      </section>
    </>
  );
}
