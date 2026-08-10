"use client";

import {
  FiLayout,
  FiRefreshCw,
  FiCode,
  FiSearch,
  FiTrendingUp,
  FiBriefcase,
  FiHeadphones,
  FiCpu,
} from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const SERVICES = [
  {
    icon: FiLayout,
    title: "Custom Shopify & Shopify Plus Theme Development",
    description:
      "Bespoke, mobile-first storefronts built to your brand, not a modified stock theme.",
  },
  {
    icon: FiRefreshCw,
    title: "Shopify Store Migration",
    description:
      "Move from WooCommerce, Magento, Squarespace or BigCommerce to Shopify with zero lost SEO equity or order history.",
  },
  {
    icon: FiCode,
    title: "Shopify App Development & Integration",
    description:
      "Custom apps and integrations for AfterPay, Zip, ShipStation, local postal carriers, Xero and local ERPs.",
  },
  {
    icon: FiSearch,
    title: "Shopify SEO & Technical Optimisation",
    description:
      "Site structure, page speed and schema built for local search behaviour and local intent keywords.",
  },
  {
    icon: FiTrendingUp,
    title: "Conversion Rate Optimisation (CRO)",
    description:
      "Checkout, cart and product page testing tuned to shopper behaviour and device mix.",
  },
  {
    icon: FiBriefcase,
    title: "Shopify Plus Enterprise Support",
    description:
      "Multi-currency, wholesale channels and B2B storefronts for scaling national retailers.",
  },
  {
    icon: FiHeadphones,
    title: "Ongoing Maintenance & Support",
    description:
      "Local business-hours (AEST) support, theme updates, and EOFY/Black Friday load readiness.",
  },
  {
    icon: FiCpu,
    title: "Headless Shopify & Custom Storefronts",
    description:
      "React/Next.js headless builds for brands that have outgrown standard Liquid themes.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="sp-services"
      aria-labelledby="services-heading"
    >
      <div className="sp-container">
        <ScrollReveal className="sp-section-head">
          <p className="sp-label">What We Do</p>
          <h2 id="services-heading" className="sp-title">
            Full-Service Shopify Development for Growing Brands
          </h2>
        </ScrollReveal>

        <div className="sp-services__grid">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={(i % 4) + 1}>
                <article className="sp-service-card">
                  <div className="sp-icon sp-icon--lg">
                    <Icon aria-hidden />
                  </div>
                  <h3 className="sp-service-card__title">{service.title}</h3>
                  <p className="sp-service-card__desc">{service.description}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
