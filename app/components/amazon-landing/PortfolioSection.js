"use client";

import {
  FiHome,
  FiDroplet,
  FiHeart,
  FiActivity,
} from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const PROJECTS = [
  {
    Icon: FiHome,
    brand: "Home & Living Brand",
    location: "Melbourne",
    service: "Listing Optimisation · PPC · FBA Management",
    resultNum: "3.4x",
    resultLabel: "Revenue growth in 6 months",
    iconBg: "#FFF4E0",
    iconColor: "#E69500",
  },
  {
    Icon: FiDroplet,
    brand: "Skincare Brand",
    location: "Sydney",
    service: "A+ Content · Sponsored Brands · Brand Store",
    resultNum: "2.1x",
    resultLabel: "Conversion rate uplift",
    iconBg: "#FFF4E0",
    iconColor: "#E69500",
  },
  {
    Icon: FiHeart,
    brand: "Pet Accessories Brand",
    location: "Brisbane",
    service: "PPC Restructure · ACOS Optimisation",
    resultNum: "19%",
    resultLabel: "ACOS (down from 52%)",
    iconBg: "#FFF4E0",
    iconColor: "#E69500",
  },
  {
    Icon: FiActivity,
    brand: "Activewear Brand",
    location: "Perth",
    service: "Multi-SKU launch · Amazon's Choice strategy",
    resultNum: "$1M+",
    resultLabel: "Annual Amazon revenue milestone",
    iconBg: "#FFF4E0",
    iconColor: "#E69500",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="amz-portfolio"
      aria-labelledby="portfolio-heading"
    >
      <div className="amz-container">
        <ScrollReveal className="amz-section-head">
          <p className="amz-label">Client Results</p>
          <h2 id="portfolio-heading" className="amz-title">
            Brands We&apos;ve Grown Across Australia
          </h2>
          <p className="amz-sub">
            Real results for real Australian businesses — across categories,
            cities and account sizes.
          </p>
        </ScrollReveal>

        <div className="amz-portfolio__grid">
          {PROJECTS.map((project, i) => {
            const Icon = project.Icon;
            return (
              <ScrollReveal key={project.brand} delay={Math.min((i % 4) + 1, 4)}>
                <div className="amz-portfolio-card">
                  <div
                    className="amz-portfolio-card__icon"
                    style={{
                      background: project.iconBg,
                      color: project.iconColor,
                    }}
                  >
                    <Icon size={20} aria-hidden />
                  </div>
                  <p className="amz-portfolio-card__brand">{project.brand}</p>
                  <p className="amz-portfolio-card__location">{project.location}</p>
                  <p className="amz-portfolio-card__service">{project.service}</p>
                  <div className="amz-portfolio-card__result">
                    <p className="amz-portfolio-card__result-num">
                      {project.resultNum}
                    </p>
                    <p className="amz-portfolio-card__result-label">
                      {project.resultLabel}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
