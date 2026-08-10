"use client";

import {
  FiSearch,
  FiMap,
  FiCpu,
  FiSettings,
  FiMessageSquare,
  FiDatabase,
  FiShield,
  FiHeadphones,
} from "react-icons/fi";
import AICScrollReveal from "./AICScrollReveal";

const SERVICES = [
  {
    Icon: FiSearch,
    title: "AI Readiness & Opportunity Audit",
    desc: "A clear-eyed assessment of where AI can save time, cut cost or grow revenue in your business, ranked by effort and impact.",
  },
  {
    Icon: FiMap,
    title: "AI Strategy & Roadmap Development",
    desc: "A practical, board-ready AI roadmap tied to business outcomes, not technology for its own sake.",
  },
  {
    Icon: FiCpu,
    title: "Generative AI & LLM Integration",
    desc: "Custom GPT-style assistants, internal knowledge tools and Claude/OpenAI-powered features built into your existing systems.",
  },
  {
    Icon: FiSettings,
    title: "Workflow & Process Automation",
    desc: "Automating manual, repetitive back-office and operations work across finance, support, sales and logistics.",
  },
  {
    Icon: FiMessageSquare,
    title: "AI-Powered Customer Experience",
    desc: "Chatbots, virtual agents and support automation trained on your own data and tone of voice.",
  },
  {
    Icon: FiDatabase,
    title: "Data Strategy & AI Readiness Infrastructure",
    desc: "Cleaning, structuring and governing your data so it's actually usable for AI and analytics.",
  },
  {
    Icon: FiShield,
    title: "AI Governance, Privacy & Compliance",
    desc: "Responsible AI use aligned to the Privacy Act, the Australian Privacy Principles and your industry's regulatory requirements.",
  },
  {
    Icon: FiHeadphones,
    title: "Ongoing AI Advisory & Support",
    desc: "Local business-hours (AEST) advisory, model performance monitoring, and continuous improvement as AI tools evolve.",
  },
];

export default function AICServices() {
  return (
    <section
      id="services"
      className="aic-services"
      aria-labelledby="aic-services-heading"
    >
      <div className="aic-container">
        <AICScrollReveal className="aic-section-head">
          <p className="aic-label">What We Do</p>
          <h2 id="aic-services-heading" className="aic-title">
            AI Consulting Services for Australian Businesses
          </h2>
          <span className="aic-cyan-bar" />
        </AICScrollReveal>

        <div className="aic-services__grid">
          {SERVICES.map((svc, i) => {
            const Icon = svc.Icon;
            return (
              <AICScrollReveal key={svc.title} delay={Math.min((i % 4) + 1, 4)}>
                <div className="aic-service-card">
                  <div className="aic-service-card__icon">
                    <Icon size={20} aria-hidden />
                  </div>
                  <p className="aic-service-card__title">{svc.title}</p>
                  <p className="aic-service-card__desc">{svc.desc}</p>
                </div>
              </AICScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
