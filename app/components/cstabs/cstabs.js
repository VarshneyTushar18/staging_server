"use client";
 
import CaseStudiesCard from "../cscard/cscard";
import Style from "./cstabs.module.css";
 
export default function CaseStudiesTabs({
  data = [],
  title = "Case Studies",
  description = null,
}) {
  return (
    <div className="container pb-5">
      {title && <h2 className="text-danger text-center mb-3">{title}</h2>}
      {description && <p className="text-center">{description}</p>}
 
      {/* ==== Main Tabs ==== */}
      <ul
        className={`${Style.PorfolioTab} nav nav-tabs mb-5 justify-content-center flex-wrap`}
      >
        {Array.isArray(data) &&
          data.map((tab, i) => (
            <li className="nav-item m-1" key={i}>
              <a
                href={`#tab${i}`}
                className={`nav-link ${i === 0 ? "active" : ""}`}
                data-bs-toggle="tab"
              >
                {tab.title}
              </a>
            </li>
          ))}
      </ul>
 
      {/* ==== Tab Content ==== */}
      <div className="tab-content">
        {Array.isArray(data) &&
          data.map((tab, i) => (
            <div
              key={i}
              id={`tab${i}`}
              className={`tab-pane fade ${i === 0 ? "show active" : ""}`}
            >
              {/* 🔥 fallback if items missing */}
              <CaseStudiesGrid
                items={tab.items || []}
                category={tab.title}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
 
/* ================= GRID FIXED ================= */
function CaseStudiesGrid({ items = [], category }) {
  return (
    <div className="row g-4">
      {Array.isArray(items) && items.length > 0 ? (
        items?.map((item, k) => (
          <div
            className="col-lg-4 col-md-6 col-sm-12 d-flex"
            key={item.id || k}
          >
            <div className="w-100">
              {/* ✅ FIXED HERE */}
              <CaseStudiesCard item={item} category={category} />
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">No items found</div>
      )}
    </div>
  );
}