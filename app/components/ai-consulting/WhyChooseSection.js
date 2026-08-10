"use client";

import { FiShield, FiLayers, FiBriefcase, FiBarChart2, FiRefreshCw } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const FEATURES = [
  {
    icon: FiShield,
    text: "AI consultants who build for data privacy, security and Australian Privacy Principles compliance out of the box",
  },
  {
    icon: FiLayers,
    text: "Experience integrating the tools businesses already run on — Microsoft 365, Google Workspace, Xero, HubSpot, Shopify and local ERPs",
  },
  {
    icon: FiBriefcase,
    text: "Category experience across retail, professional services, healthcare admin, logistics and B2B wholesale — the sectors seeing the fastest AI-driven efficiency gains",
  },
  {
    icon: FiBarChart2,
    text: "Transparent reporting on real time saved, cost reduction and revenue impact — not vanity AI demos",
  },
  {
    icon: FiRefreshCw,
    text: "Flexible engagement — from a single AI audit to an ongoing AI advisory retainer with hands-on implementation support",
  },
];

export default function WhyChooseSection() {
  return (
    <section
      id="why-us"
      className="choose-section py-20 md:py-28 scroll-mt-24 text-white"
      aria-labelledby="why-heading"
    >
      <div className="ai-container">
        <ScrollReveal className="max-w-3xl mb-14">
          <p className="text-[var(--ai-cyan)] font-semibold text-sm uppercase tracking-wide mb-3">
            Why Businesses Choose Us
          </p>
          <h2
            id="why-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
          >
            Local Business Knowledge. <span className="ai-gradient-text">Practical AI Expertise.</span>
          </h2>
        </ScrollReveal>

        <div className="row g-4 justify-content-center">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            // For bootstrap grid, we can make them 4-cols on lg (3 cards per row) and 6-cols on md (2 cards per row)
            // The last card (index 4) can take a wider size or align center.
            const isLast = i === FEATURES.length - 1;
            const gridClass = isLast ? "col-md-12 col-lg-4" : "col-md-6 col-lg-4";
            
            return (
              <ScrollReveal
                key={f.text}
                delay={Math.min(i + 1, 3)}
                className={`${gridClass} d-flex`}
              >
                <article className="choose-card ai-glow-border d-flex flex-column align-items-start w-100">
                  <div className="choose-icon-wrapper mb-4">
                    <Icon size={22} aria-hidden />
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed m-0">{f.text}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
