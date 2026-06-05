/** Client-safe blog helpers (no fetch). */

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
