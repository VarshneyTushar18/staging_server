"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {
  blogPostHref,
  blogCategoryHref,
  blogArchiveHref,
  stripHtml,
  formatBlogListDate,
} from "@/lib/blogApi";
import Style from "./BlogSidebar.module.css";

function formatViews(count) {
  const n = Number(count) || 0;
  return n.toLocaleString("en-US");
}

/** Most viewed — title + (count) on one line like WordPress */
function MostViewedItem({ post, currentSlug }) {
  if (post.slug === currentSlug) return null;
  const href = blogPostHref(post);
  const title = stripHtml(post.title?.rendered || post.title || "");
  const views = formatViews(post.view_count);
  const date = formatBlogListDate(post.date);

  return (
    <li className={Style.linkItem}>
      <Link href={href} className={Style.postLink}>
        {title}
      </Link>{" "}
      <span className={Style.viewCountInline}>({views})</span>
      {date ? <span className={Style.postDateLine}>{date}</span> : null}
    </li>
  );
}

/** Recent — title + date below */
function RecentItem({ post, currentSlug }) {
  if (post.slug === currentSlug) return null;
  const href = blogPostHref(post);
  const title = stripHtml(post.title?.rendered || post.title || "");
  const date = formatBlogListDate(post.date);

  return (
    <li className={Style.recentItem}>
      <Link href={href} className={Style.postLink}>
        {title}
      </Link>
      {date ? <span className={Style.recentDate}>{date}</span> : null}
    </li>
  );
}

export default function BlogSidebar({
  mostViewed = [],
  recent = [],
  categories = [],
  archives = [],
  currentSlug = "",
  activeCategory = "",
  activeMonth = "",
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) {
      router.push("/blogs");
      return;
    }
    router.push(`/blogs?search=${encodeURIComponent(q)}`);
  };

  const visibleMostViewed = mostViewed.filter((p) => p.slug !== currentSlug);
  const visibleRecent = recent.filter((p) => p.slug !== currentSlug);

  return (
    <aside className={Style.sidebar}>
      {/* 1. Search — original */}
      <div className={Style.widget}>
        <form onSubmit={onSearch} className={Style.searchForm}>
          <input
            type="search"
            className={Style.searchInput}
            placeholder="Type & Enter..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search blog posts"
          />
        </form>
      </div>

      {/* 2. Categories — visible without long scroll */}
      <div className={Style.widget}>
        <h3 className={Style.widgetTitle}>Categories</h3>
        {categories.length > 0 ? (
          <>
            <ul className={Style.categoryList}>
              {categories.map((cat) => {
                const href = blogCategoryHref(cat.slug);
                const isActive =
                  activeCategory === cat.slug ||
                  activeCategory === cat.name?.toLowerCase();
                return (
                  <li key={cat.id} className={Style.categoryItem}>
                    <Link
                      href={href}
                      className={`${Style.categoryLink} ${isActive ? Style.active : ""}`}
                    >
                      {cat.name}
                    </Link>
                    <span className={Style.catCount}>({cat.post_count})</span>
                  </li>
                );
              })}
            </ul>
            {activeCategory ? (
              <Link href="/blogs" className={Style.clearFilter}>
                View all posts
              </Link>
            ) : null}
          </>
        ) : (
          <p className={Style.emptyNote}>Categories loading…</p>
        )}
      </div>

      {/* 3. Most Viewed Posts */}
      <div className={Style.widget}>
        <h3 className={Style.widgetTitle}>Most Viewed Posts</h3>
        {visibleMostViewed.length > 0 ? (
          <ul className={Style.linkList}>
            {visibleMostViewed.map((post) => (
              <MostViewedItem key={post.id} post={post} currentSlug={currentSlug} />
            ))}
          </ul>
        ) : (
          <p className={Style.emptyNote}>No posts yet.</p>
        )}
      </div>

      {/* 4. Recent Posts */}
      <div className={Style.widget}>
        <h3 className={Style.widgetTitle}>Recent Posts</h3>
        {visibleRecent.length > 0 ? (
          <ul className={`${Style.linkList} ${Style.recentList}`}>
            {visibleRecent.map((post) => (
              <RecentItem key={post.id} post={post} currentSlug={currentSlug} />
            ))}
          </ul>
        ) : (
          <p className={Style.emptyNote}>No posts yet.</p>
        )}
      </div>

      {/* 5. Archives */}
      <div className={Style.widget}>
        <h3 className={Style.widgetTitle}>Archives</h3>
        {archives.length > 0 ? (
          <>
            <ul className={Style.archiveList}>
              {archives.map((item) => {
                const href = blogArchiveHref(item.month);
                const isActive = activeMonth === item.month;
                return (
                  <li key={item.month} className={Style.archiveItem}>
                    <Link
                      href={href}
                      className={`${Style.archiveLink} ${isActive ? Style.active : ""}`}
                    >
                      {item.label}
                    </Link>
                    <span className={Style.catCount}>({item.post_count})</span>
                  </li>
                );
              })}
            </ul>
            {activeMonth ? (
              <Link href="/blogs" className={Style.clearFilter}>
                View all posts
              </Link>
            ) : null}
          </>
        ) : (
          <p className={Style.emptyNote}>Archives loading…</p>
        )}
      </div>
    </aside>
  );
}
