"use client";

import {
  FiLock,
  FiLink,
  FiLayers,
  FiBarChart2,
  FiTool,
  FiMapPin,
} from "react-icons/fi";
import AICScrollReveal from "./AICScrollReveal";

const REASONS = [
  {
    Icon: FiLock,
    title: "Privacy-First by Design",
    desc: "AI consultants who build for data privacy, security and Australian Privacy Principles compliance out of the box.",
  },
  {
    Icon: FiLink,
    title: "Integrates With What You Use",
    desc: "Experience integrating the tools businesses already run on — Microsoft 365, Google Workspace, Xero, HubSpot, Shopify and local ERPs.",
  },
  {
    Icon: FiLayers,
    title: "Deep Category Experience",
    desc: "Retail, professional services, healthcare admin, logistics and B2B wholesale — the sectors seeing the fastest AI-driven efficiency gains.",
  },
  {
    Icon: FiBarChart2,
    title: "Transparent ROI Reporting",
    desc: "Real reporting on time saved, cost reduction and revenue impact — not vanity AI demos or slide decks.",
  },
  {
    Icon: FiTool,
    title: "Flexible Engagement",
    desc: "From a single AI audit to an ongoing AI advisory retainer with hands-on implementation support.",
  },
  {
    Icon: FiMapPin,
    title: "Local Team, AEST Hours",
    desc: "A local Australian team who understand local business context, regulatory environment and how to actually get things done.",
  },
];

export default function AICWhyUs() {
  return (
    <section
      id="why-us"
      className="aic-why-us"
      aria-labelledby="aic-why-heading"
    >
      <div className="aic-container">
        <AICScrollReveal className="aic-section-head">
          <p className="aic-label" style={{ color: "var(--aic-cyan)" }}>
            Why Tech2Globe
          </p>
          <h2
            id="aic-why-heading"
            className="aic-title aic-title--light"
          >
            What Makes Us Different
          </h2>
          <span className="aic-cyan-bar" />
        </AICScrollReveal>

        <div className="aic-why-us__grid">
          {REASONS.map((r, i) => {
            const Icon = r.Icon;
            return (
              <AICScrollReveal key={r.title} delay={Math.min((i % 3) + 1, 4)}>
                <div className="aic-why-card">
                  <div className="aic-why-card__icon">
                    <Icon size={20} aria-hidden />
                  </div>
                  <p className="aic-why-card__title">{r.title}</p>
                  <p className="aic-why-card__desc">{r.desc}</p>
                </div>
              </AICScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
