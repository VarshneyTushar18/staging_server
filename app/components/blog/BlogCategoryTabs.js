import Link from "next/link";
import Style from "./BlogCategoryTabs.module.css";

function tabHref({ category, search, month }) {
  const q = new URLSearchParams();
  if (category) q.set("category", category);
  if (search) q.set("search", search);
  if (month) q.set("month", month);
  const s = q.toString();
  return s ? `/blogs?${s}` : "/blogs";
}

export default function BlogCategoryTabs({
  categories = [],
  activeCategory = "",
  search = "",
  month = "",
}) {
  if (categories.length === 0) return null;

  const sorted = [...categories].sort(
    (a, b) => (b.post_count || 0) - (a.post_count || 0),
  );

  const isAllActive = !activeCategory;

  return (
    <nav className={Style.tabsWrap} aria-label="Filter posts by category">
      <div className={Style.tabsScroll}>
        <Link
          href={tabHref({ search, month })}
          className={`${Style.tab} ${isAllActive ? Style.tabActive : ""}`}
          aria-current={isAllActive ? "page" : undefined}
        >
          All
        </Link>
        {sorted.map((cat) => {
          const isActive =
            activeCategory === cat.slug ||
            activeCategory === cat.name?.toLowerCase();
          return (
            <Link
              key={cat.id}
              href={tabHref({ category: cat.slug, search, month })}
              className={`${Style.tab} ${isActive ? Style.tabActive : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              {cat.name}
              {cat.post_count != null ? (
                <span className={Style.tabCount}>{cat.post_count}</span>
              ) : null}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
