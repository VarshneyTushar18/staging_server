"use client";

import ScrollReveal from "./ScrollReveal";

const WHAT_WE_DID = [
  "Full listing rebuild with A10-optimised copy and A+ Content modules across 6 SKUs",
  "Launched Sponsored Products with tight exact-match campaigns to anchor rank quickly",
  "Restructured FBA inbound shipments to reduce oversize storage fees by 34%",
  "Implemented automated review request sequence aligned with Amazon guidelines",
];

const RESULTS = [
  { value: "Top 3", label: "BSR in category within 90 days" },
  { value: "21%", label: "ACOS achieved (down from 58%)" },
  { value: "3.4x", label: "Revenue multiple in 6 months" },
  { value: "6 SKUs", label: "Amazon's Choice badges earned" },
];

export default function CaseStudySection() {
  return (
    <section
      id="case-studies"
      className="amz-case"
      aria-labelledby="case-heading"
    >
      <div className="amz-container">
        <ScrollReveal className="amz-section-head">
          <p className="amz-label">Case Study</p>
          <h2 id="case-heading" className="amz-title">
            From Page 4 to Category Bestseller
          </h2>
          <p className="amz-sub">
            A Melbourne home goods brand came to us buried on page 4 with an
            unmanaged ad account and no A+ Content. Here&apos;s what happened next.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="amz-case__card">
            <div className="amz-case__left">
              <p className="amz-case__subtitle">What We Did</p>
              <ul className="amz-case__list">
                {WHAT_WE_DID.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="amz-case__compare">
                <p className="amz-case__compare-label">Before vs After (Month 1 → Month 6)</p>
                <div className="amz-case__compare-grid">
                  <div className="amz-case__compare-box">
                    <p className="amz-case__compare-tag">Before</p>
                    <p className="amz-case__compare-num">58%</p>
                    <p className="amz-case__compare-desc">ACOS</p>
                  </div>
                  <div className="amz-case__compare-box amz-case__compare-box--after">
                    <p className="amz-case__compare-tag">After</p>
                    <p className="amz-case__compare-num">21%</p>
                    <p className="amz-case__compare-desc">ACOS</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="amz-case__right">
              <h3>Results After 6 Months</h3>
              <div className="amz-case__metrics">
                {RESULTS.map((r) => (
                  <div key={r.label} className="amz-case__metric">
                    <div className="amz-case__metric-value">{r.value}</div>
                    <div className="amz-case__metric-label">{r.label}</div>
                  </div>
                ))}
              </div>
              <div className="amz-case__cta">
                <a href="#contact" className="amz-btn amz-btn-primary">
                  Get Similar Results
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
