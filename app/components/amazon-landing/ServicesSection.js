"use client";

import {
  FiShoppingCart,
  FiTrendingUp,
  FiTarget,
  FiLayout,
  FiPackage,
  FiFileText,
  FiStar,
  FiGlobe,
} from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const SERVICES = [
  {
    Icon: FiShoppingCart,
    title: "Seller & Vendor Central Management",
    desc: "End-to-end account management — health monitoring, case management, policy compliance and performance metrics for both Seller and Vendor Central.",
  },
  {
    Icon: FiTrendingUp,
    title: "Listing Optimisation & A10 SEO",
    desc: "Keyword research, title engineering, bullet points, backend search terms and A+ content built around the A10 algorithm signals that drive AU organic rank.",
  },
  {
    Icon: FiTarget,
    title: "Amazon PPC Management",
    desc: "Sponsored Products, Sponsored Brands and Sponsored Display campaigns engineered for the lowest possible ACOS with consistent top-of-search positioning.",
  },
  {
    Icon: FiLayout,
    title: "Brand Store & Storefront Design",
    desc: "Custom Amazon Brand Stores designed to convert — product showcases, lifestyle imagery and store pages that build brand equity and repeat purchases.",
  },
  {
    Icon: FiPackage,
    title: "FBA & Inventory Management",
    desc: "FBA inbound planning, reorder triggers, stranded inventory fixes and 3PL coordination so you never run out of stock or pay unnecessary storage fees.",
  },
  {
    Icon: FiFileText,
    title: "GST & ABN Compliance Guidance",
    desc: "We work alongside your accountant to help you understand GST thresholds, ABN obligations and Amazon tax collection settings for AU sellers.",
  },
  {
    Icon: FiStar,
    title: "Review & Reputation Management",
    desc: "Ethical review acquisition strategies, automated follow-up sequences and reputation monitoring to protect your seller feedback score.",
  },
  {
    Icon: FiGlobe,
    title: "Multi-Marketplace Expansion",
    desc: "Ready to expand beyond Amazon AU? We manage cross-border listings for Amazon US, UK and more — with localised content and currency/compliance support.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="amz-services" aria-labelledby="services-heading">
      <div className="amz-container">
        <ScrollReveal className="amz-section-head">
          <p className="amz-label">What We Manage</p>
          <h2 id="services-heading" className="amz-title">
            Full-Service Amazon Management — Every Channel, Every Lever
          </h2>
          <p className="amz-sub">
            From account setup to category leadership, our team handles every
            aspect of your Amazon presence so you can focus on your product.
          </p>
        </ScrollReveal>

        <div className="amz-services__grid">
          {SERVICES.map((svc, i) => {
            const Icon = svc.Icon;
            return (
              <ScrollReveal key={svc.title} delay={Math.min((i % 4) + 1, 4)}>
                <div className="amz-service-card">
                  <div className="amz-service-card__icon">
                    <Icon size={20} aria-hidden />
                  </div>
                  <h3 className="amz-service-card__title">{svc.title}</h3>
                  <p className="amz-service-card__desc">{svc.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
