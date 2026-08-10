"use client";

import {
  FiHome,
  FiActivity,
  FiDroplet,
  FiPackage,
} from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const ROWS = [
  {
    brand: "Homewares Brand",
    service: "Shopify Plus migration + CRO",
    result: "$100K+",
    resultLabel: "Monthly revenue in Q1",
    icon: FiHome,
    accent: "#2d5a27",
  },
  {
    brand: "Activewear Brand",
    service: "Custom theme development",
    result: "2.6x",
    resultLabel: "Mobile conversion rate",
    icon: FiActivity,
    accent: "#66b032",
  },
  {
    brand: "Beauty Brand",
    service: "Shopify SEO + app integration",
    result: "3.1x",
    resultLabel: "Organic traffic growth",
    icon: FiDroplet,
    accent: "#2d5a27",
  },
  {
    brand: "B2B Wholesale Brand",
    service: "Headless Shopify build",
    result: "40%",
    resultLabel: "Reduction in page load time",
    icon: FiPackage,
    accent: "#66b032",
  },
];

export default function PortfolioSection() {
  return (
    <section className="sp-portfolio" aria-labelledby="portfolio-heading">
      <div className="sp-container">
        <ScrollReveal className="sp-section-head">
          <p className="sp-label">Client Portfolio</p>
          <h2 id="portfolio-heading" className="sp-title">
            Brands We&apos;ve Built on Shopify
          </h2>
        </ScrollReveal>

        <div className="sp-portfolio__grid">
          {ROWS.map((row, i) => {
            const Icon = row.icon;
            return (
              <ScrollReveal key={row.brand} delay={Math.min(i + 1, 4)}>
                <article className="sp-portfolio-card">
                  <span
                    className="sp-portfolio-card__icon"
                    style={{
                      backgroundColor: `${row.accent}1a`,
                      color: row.accent,
                    }}
                  >
                    <Icon size={20} aria-hidden />
                  </span>
                  <h3 className="sp-portfolio-card__brand">{row.brand}</h3>
                  <p className="sp-portfolio-card__service">{row.service}</p>
                  <div className="sp-portfolio-card__result">
                    <p
                      className="sp-portfolio-card__result-num"
                      style={{ color: row.accent }}
                    >
                      {row.result}
                    </p>
                    <p className="sp-portfolio-card__result-label">
                      {row.resultLabel}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
