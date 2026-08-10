import Link from "next/link";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import BlogSidebar from "@/app/components/blog/BlogSidebar";
import BlogPostImage from "@/app/components/blog/BlogPostImage";
import {
  fetchBlogPostBySlug,
  fetchBlogSidebarData,
  blogCanonical,
  blogCategoryHref,
  stripHtml,
  formatBlogListDate,
} from "@/lib/blogApi";
import { rewriteBlogContentImages } from "@/lib/blogUtils";
import Style from "../blogs.module.css";

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);
  if (!post) {
    return { title: "Blog | Tech2Globe" };
  }

  const seo = post.yoast_head_json || post.seo || {};
  const title =
    stripHtml(seo.meta_title || post.title?.rendered || "") ||
    "Blog | Tech2Globe";
  const description =
    stripHtml(seo.meta_description || post.excerpt?.rendered || "") ||
    "Tech2Globe blog";

  const robots = seo.robots_noindex
    ? { index: false, follow: !seo.robots_nofollow }
    : { index: true, follow: true };

  return {
    title,
    description,
    alternates: {
      canonical: seo.canonical_url || blogCanonical(slug),
    },
    robots,
    openGraph: {
      title: stripHtml(seo.og_title || title),
      description: stripHtml(seo.og_description || description),
      images: seo.og_image ? [{ url: seo.og_image }] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: stripHtml(seo.twitter_title || seo.og_title || title),
      description: stripHtml(
        seo.twitter_description || seo.og_description || description,
      ),
      images:
        seo.twitter_image || seo.og_image
          ? [seo.twitter_image || seo.og_image]
          : [],
    },
  };
}

function stripDuplicateTitleFromContent(html, titleText) {
  if (!html || !titleText) return html;
  const plain = stripHtml(titleText).toLowerCase();
  if (!plain) return html;
  return html.replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, (match) => {
    const inner = stripHtml(match).toLowerCase();
    return inner === plain || inner.includes(plain.slice(0, 40)) ? "" : match;
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const [post, sidebar] = await Promise.all([
    fetchBlogPostBySlug(slug),
    fetchBlogSidebarData({ currentSlug: slug }),
  ]);

  if (!post) {
    return (
      <div className="container py-5">
        <p>Post not found.</p>
        <Link href="/blogs">Back to blog</Link>
      </div>
    );
  }

  const title = post.title?.rendered || "";
  const titlePlain = stripHtml(title);
  const content = rewriteBlogContentImages(
    stripDuplicateTitleFromContent(
      post.content?.rendered || "",
      titlePlain,
    ),
  );
  const date = formatBlogListDate(post.date);
  const author = post.author || "Tech2globe";
  const categoryNames = post.category_names || [];
  const activeCategory =
    categoryNames.length > 0
      ? categoryNames[0]
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "")
      : "";

  return (
    <>
      <Breadcrumb
        parentName="Blog"
        parentHref="/blogs"
        pageName={titlePlain}
      />
      <section className={`${Style.section} ${Style.postSection} py-5`}>
        <div className="container">
          <div className={`row g-4 ${Style.postLayoutRow}`}>
            <div className="col-lg-8">
              <article className={Style.articleWrap}>
                <div
                  className="position-relative mb-4"
                  style={{ minHeight: 240 }}
                >
                  <BlogPostImage
                    post={post}
                    variant="hero"
                    priority
                    className={Style.featuredHero}
                  />
                </div>

                <header className={Style.articleHeader}>
                  <h1
                    className={Style.articleTitle}
                    dangerouslySetInnerHTML={{ __html: title }}
                  />
                  <p className={Style.articleMeta}>
                    <span>{date}</span>
                    <span className={Style.metaSep}>·</span>
                    <span>posted by {author}</span>
                    <span className={Style.metaSep}>·</span>
                    <span>0 Replies</span>
                  </p>
                  {categoryNames.length > 0 ? (
                    <p className={Style.articleCategories}>
                      {categoryNames.map((name, i) => {
                        const catSlug = name
                          .toLowerCase()
                          .trim()
                          .replace(/[^a-z0-9]+/g, "-")
                          .replace(/(^-|-$)/g, "");
                        return (
                          <span key={name}>
                            {i > 0 ? ", " : null}
                            <Link href={blogCategoryHref(catSlug)}>{name}</Link>
                          </span>
                        );
                      })}
                    </p>
                  ) : null}
                </header>

                <div
                  className={Style.articleContent}
                  dangerouslySetInnerHTML={{ __html: content }}
                />

                <div className="mt-5">
                  <Link href="/blogs" className="btn button-red rounded-0">
                    ← All posts
                  </Link>
                </div>
              </article>
            </div>

            <div className={`col-lg-4 ${Style.sidebarCol}`}>
              <BlogSidebar
                mostViewed={sidebar.mostViewed}
                recent={sidebar.recent}
                categories={sidebar.categories}
                archives={sidebar.archives}
                currentSlug={slug}
                activeCategory={activeCategory}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
