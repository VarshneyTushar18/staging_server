"use client";

import {
  FiSearch,
  FiMap,
  FiCpu,
  FiActivity,
  FiMessageSquare,
  FiDatabase,
  FiShield,
  FiLifeBuoy,
} from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const SERVICES = [
  {
    title: "AI Readiness & Opportunity Audit",
    icon: FiSearch,
    description:
      "A clear-eyed assessment of where AI can save time, cut cost or grow revenue in your business, ranked by effort and impact.",
    colSpan: true,
  },
  {
    title: "AI Strategy & Roadmap Development",
    icon: FiMap,
    description:
      "A practical, board-ready AI roadmap tied to business outcomes, not technology for its own sake.",
    colSpan: false,
  },
  {
    title: "Generative AI & LLM Integration",
    icon: FiCpu,
    description:
      "Custom GPT-style assistants, internal knowledge tools and Claude/OpenAI-powered features built into your existing systems.",
    colSpan: true,
  },
  {
    title: "Workflow & Process Automation",
    icon: FiActivity,
    description:
      "Automating manual, repetitive back-office and operations work across finance, support, sales and logistics.",
    colSpan: false,
  },
  {
    title: "AI-Powered Customer Experience",
    icon: FiMessageSquare,
    description:
      "Chatbots, virtual agents and support automation trained on your own data and tone of voice.",
    colSpan: false,
  },
  {
    title: "Data Strategy & AI Readiness Infrastructure",
    icon: FiDatabase,
    description:
      "Cleaning, structuring and governing your data so it's actually usable for AI and analytics.",
    colSpan: false,
  },
  {
    title: "AI Governance, Privacy & Compliance",
    icon: FiShield,
    description:
      "Responsible AI use aligned to the Privacy Act, the Australian Privacy Principles and your industry's regulatory requirements.",
    colSpan: false,
  },
  {
    title: "Ongoing AI Advisory & Support",
    icon: FiLifeBuoy,
    description:
      "Local business-hours (AEST) advisory, model performance monitoring, and continuous improvement as AI tools evolve.",
    colSpan: false,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 scroll-mt-24"
      aria-labelledby="services-heading"
    >
      <div className="ai-container">
        <ScrollReveal className="max-w-3xl mb-14">
          <p className="text-[var(--ai-purple)] font-semibold text-sm uppercase tracking-wide mb-3">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--ai-ink)]"
          >
            Full-Service AI Consulting for Growing Businesses
          </h2>
        </ScrollReveal>

        <div className="ai-bento-grid">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollReveal
                key={service.title}
                delay={Math.min((i % 3) + 1, 3)}
                className={service.colSpan ? "ai-bento-col-2" : ""}
              >
                <article className="ai-bento-card ai-glow-border-light">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="ai-bento-icon">
                        <Icon size={22} aria-hidden />
                      </div>
                      <span className="ai-bento-num" aria-hidden>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[var(--ai-ink)] mb-2">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--ai-muted)] leading-relaxed m-0">
                    {service.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
