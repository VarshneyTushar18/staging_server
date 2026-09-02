/** Client-safe blog helpers (no fetch). */

export const DEFAULT_BLOG_IMAGE = "/images/blog-bg.webp";

function normalizeBlogCategoryKey(value = "") {
  return String(value)
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function apiCategorySlug(cat) {
  return normalizeBlogCategoryKey(cat?.slug || cat?.name);
}

/** Main service categories for blog tabs (mapped to real blog category slugs). */
export const MAIN_BLOG_FILTER_CATEGORIES = [
  {
    id: "amazon-walmart-consulting",
    name: "Amazon & Walmart Consulting",
    slug: "amazon-walmart-consulting",
    match: (slug) =>
      slug.startsWith("amazon-") ||
      slug.startsWith("walmart-") ||
      ["sell-on-amazon", "become-an-amazon-seller", "myntra-account-management"].includes(
        slug,
      ),
  },
  {
    id: "ecommerce",
    name: "Ecommerce",
    slug: "ecommerce",
    match: (slug) => slug === "ecommerce" || slug.startsWith("ecommerce-"),
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    slug: "digital-marketing",
    match: (slug) =>
      slug === "digital-marketing" ||
      slug.startsWith("digital-marketing-") ||
      [
        "seo",
        "social-media-marketing",
        "social-media",
        "content-marketing",
        "email-marketing",
        "google-ads",
        "google-adwords",
        "facebook-ads",
        "linkedin-ads",
        "marketing",
        "advertising",
        "influencer-marketing-services",
        "local-seo",
        "generative-engine-optimization",
        "guest-posting",
        "b2b-marketing",
        "link-building",
        "link-building-package",
        "lead-generation",
        "promote-your-brand-on-social-media",
        "push-pull-marketing",
        "effects-of-social-media",
      ].includes(slug),
  },
  {
    id: "data-management",
    name: "Data Management",
    slug: "data-management",
    match: (slug) =>
      slug === "data-management" ||
      slug.startsWith("data-entry") ||
      slug.startsWith("data-extraction") ||
      slug.startsWith("data-mining") ||
      slug === "data-conversions" ||
      slug === "document-processing" ||
      slug.startsWith("menu-data-entry") ||
      slug.startsWith("restaurant-menu") ||
      slug === "offline-data-entry" ||
      slug === "online-data-entry-services",
  },
  {
    id: "bpo-kpo",
    name: "BPO - KPO",
    slug: "bpo-kpo",
    match: (slug) =>
      slug.startsWith("call-centre") ||
      [
        "inbound-call-center",
        "customer-support",
        "outsourcing",
        "virtual-assistant-services",
        "cctv-monitoring-services",
        "technical-support-services",
        "insurance-claim",
        "insurance-claims-processing",
      ].includes(slug),
  },
  {
    id: "data-analytics-for-iot",
    name: "Data Analytics for IOT",
    slug: "data-analytics-for-iot",
    match: (slug) =>
      ["data-analytics", "artificial-intelligence", "video-analytics"].includes(
        slug,
      ),
  },
  {
    id: "finance-accounting",
    name: "Finance & Accounting",
    slug: "finance-accounting",
    match: () => false,
  },
  {
    id: "graphic-video",
    name: "Graphic & Video",
    slug: "graphic-video",
    match: (slug) =>
      ["graphic-designing", "video-marketing", "video-analytics"].includes(slug),
  },
];

/** Always returns all main tabs with aggregated counts from API categories. */
export function buildMainBlogFilterCategories(apiCategories = []) {
  return MAIN_BLOG_FILTER_CATEGORIES.map((main) => {
    const post_count = apiCategories.reduce((sum, cat) => {
      const slug = apiCategorySlug(cat);
      return main.match(slug) ? sum + (Number(cat.post_count) || 0) : sum;
    }, 0);

    return {
      id: main.id,
      name: main.name,
      slug: main.slug,
      post_count,
    };
  });
}

export function isMainBlogFilterSlug(slug = "") {
  return MAIN_BLOG_FILTER_CATEGORIES.some((main) => main.slug === slug);
}

export function getMatchingApiCategorySlugs(apiCategories = [], groupSlug = "") {
  const main = MAIN_BLOG_FILTER_CATEGORIES.find((item) => item.slug === groupSlug);
  if (!main) return [];

  return apiCategories
    .filter((cat) => main.match(apiCategorySlug(cat)))
    .map((cat) => cat.slug)
    .filter(Boolean);
}

const SITE_ORIGIN =
  (typeof process !== "undefined" &&
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")) ||
  "https://www.tech2globe.com";

const LEGACY_BLOG_HOST =
  /https?:\/\/(?:blog\.tech2globe\.com|(?:www\.)?tech2globe\.com\/blog)/gi;

export function blogPostHref(post) {
  if (post?.slug) return `/blogs/${post.slug}`;
  const link = post?.link || "";
  if (link.startsWith("/blogs/")) return link;
  try {
    const u = new URL(link);
    return u.pathname || "/blogs";
  } catch {
    return "/blogs";
  }
}

export function stripHtml(html = "") {
  return String(html)
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&#8217;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

export function extractFirstImageFromHtml(html = "") {
  const source = String(html || "");
  const match =
    source.match(/<img[^>]+src=["']([^"']+)["']/i) ||
    source.match(/url\(["']?([^"')]+)["']?\)/i);
  return match?.[1]?.trim() || "";
}

/** Rewrite legacy WordPress blog host → main site (or Cloudinary URLs from API). */
export function normalizeBlogImageUrl(url = "") {
  const trimmed = String(url || "").trim();
  if (!trimmed) return "";

  let resolved = trimmed.replace(LEGACY_BLOG_HOST, SITE_ORIGIN);

  if (resolved.startsWith("/wp-content/") || resolved.startsWith("/uploads/")) {
    return `${SITE_ORIGIN}${resolved}`;
  }

  if (/^https?:\/\/www\.tech2globe\.com\/wp-content\//i.test(resolved)) {
    return resolved;
  }

  if (resolved.startsWith("//")) {
    return `https:${resolved}`;
  }

  return resolved;
}

/** Best image for cards/slider: featured → SEO → first in-body image → default. */
export function resolvePostImage(post) {
  const candidates = [
    post?.featured_image,
    post?.yoast_head_json?.og_image,
    post?.seo?.og_image,
    post?.yoast_head_json?.twitter_image,
    post?.seo?.twitter_image,
    extractFirstImageFromHtml(post?.excerpt?.rendered),
    extractFirstImageFromHtml(post?.content?.rendered),
    extractFirstImageFromHtml(post?.excerpt),
    extractFirstImageFromHtml(post?.content),
  ];

  for (const candidate of candidates) {
    const normalized = normalizeBlogImageUrl(candidate);
    if (normalized) return normalized;
  }

  return DEFAULT_BLOG_IMAGE;
}

/** Rewrite in-article image URLs away from the old WordPress blog host. */
export function rewriteBlogContentImages(html = "") {
  if (!html || typeof html !== "string") return html;

  return html
    .replace(LEGACY_BLOG_HOST, SITE_ORIGIN)
    .replace(
      /src=(["'])(\/wp-content\/[^"']+)\1/gi,
      (_, quote, path) => `src=${quote}${SITE_ORIGIN}${path}${quote}`,
    )
    .replace(/<img(?![^>]*\bloading=)/gi, '<img loading="lazy"');
}
