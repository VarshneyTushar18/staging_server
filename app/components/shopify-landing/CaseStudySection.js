"use client";

import { FiArrowRight } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const WHAT_WE_DID = [
  "Migrated the full catalogue to Shopify Plus with zero SEO ranking loss during transition",
  "Built a custom mobile-first theme with AfterPay and Zip integrated at checkout",
  "Restructured product pages around local search-intent keywords for your buyers",
  "Integrated live shipping rate feeds and ShipStation for fulfilment automation",
];

const RESULTS = [
  { label: "Checkout abandonment", value: "78% → 41%" },
  { label: "Mobile conversion rate", value: "Up 2.6x" },
  { label: "Organic traffic (local search)", value: "Up 3.1x" },
  { label: "Monthly revenue (Q1)", value: "$100K+" },
];

export default function CaseStudySection() {
  return (
    <section
      id="case-studies"
      className="sp-case"
      aria-labelledby="case-heading"
    >
      <div className="sp-container">
        <ScrollReveal className="sp-section-head">
          <p className="sp-label">Case Study</p>
          <h2 id="case-heading" className="sp-title">
            From Squarespace to a 6-Figure Shopify Plus Store
          </h2>
          <p className="sp-sub">
            A homewares brand approached Tech2Globe after outgrowing Squarespace,
            with checkout drop-off above 78% and no mobile optimisation strategy
            in place.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <article className="sp-case__card">
            <div className="sp-case__left">
              <h3 className="sp-case__subtitle">What we did</h3>
              <ul className="sp-case__list">
                {WHAT_WE_DID.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="sp-case__compare">
                <p className="sp-case__compare-label">Results in 4 months</p>
                <div className="sp-case__compare-grid">
                  <div className="sp-case__compare-box">
                    <p className="sp-case__compare-tag">Before</p>
                    <p className="sp-case__compare-num">78%</p>
                    <p className="sp-case__compare-desc">Checkout abandonment</p>
                    <div className="sp-case__bar">
                      <span style={{ width: "78%" }} />
                    </div>
                  </div>
                  <div className="sp-case__compare-box sp-case__compare-box--after">
                    <p className="sp-case__compare-tag">After</p>
                    <p className="sp-case__compare-num">41%</p>
                    <p className="sp-case__compare-desc">Checkout abandonment</p>
                    <div className="sp-case__bar">
                      <span style={{ width: "41%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sp-case__right">
              <h3>Results</h3>
              <div className="sp-case__metrics">
                {RESULTS.map((r) => (
                  <div key={r.label} className="sp-case__metric">
                    <p className="sp-case__metric-value">{r.value}</p>
                    <p className="sp-case__metric-label">{r.label}</p>
                  </div>
                ))}
              </div>
              <a href="#contact" className="sp-btn sp-btn-white sp-case__cta">
                View Case Study
                <FiArrowRight aria-hidden />
              </a>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
}
