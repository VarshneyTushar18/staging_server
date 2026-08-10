"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const FAQS = [
  {
    q: "Do we need to already have an AI or data strategy in place?",
    a: "No — most clients start with little to no AI strategy. Our free AI Opportunity Audit is designed to identify where AI can help even if you're starting from scratch.",
  },
  {
    q: "Is our business data safe if we use generative AI tools?",
    a: "Yes. We design every AI implementation with data privacy and security first, aligned to the Privacy Act and the Australian Privacy Principles, and we're transparent about where your data is stored and processed.",
  },
  {
    q: "How much does AI consulting cost?",
    a: "Pricing depends on scope — an audit, a single automation build, or an ongoing advisory retainer all differ in cost. We provide a fixed-scope quote after your free AI Opportunity Audit so there are no surprise costs partway through.",
  },
  {
    q: "Will AI replace our staff?",
    a: "Our focus is augmentation, not replacement — automating repetitive manual work so your team can spend time on higher-value, judgement-based tasks.",
  },
  {
    q: "Do you work with our existing software and systems?",
    a: "Yes — we build AI solutions that integrate with the tools you already run on, including Microsoft 365, Google Workspace, Xero, HubSpot, Shopify and most common ERPs.",
  },
  {
    q: "How long does a typical AI project take?",
    a: "A scoped pilot (chatbot, automation, internal tool) typically takes 4-8 weeks from strategy to launch; broader AI roadmaps and multi-workflow rollouts can run 3-6 months depending on complexity.",
  },
  {
    q: "Do you offer ongoing support after implementation?",
    a: "Yes — our retainer clients get local AEST business-hours advisory, model performance monitoring, and continuous optimisation as your business and AI tools evolve.",
  },
  {
    q: "Do you offer a free AI audit before we commit?",
    a: "Yes — every engagement starts with a free AI Opportunity Audit so you can see exactly where the value is before deciding to work with us.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(0);

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-[var(--ai-bg)] scroll-mt-24"
      aria-labelledby="faq-heading"
    >
      <div className="ai-container max-w-3xl" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <ScrollReveal className="text-center mb-14">
          <p className="text-[var(--ai-purple)] font-semibold text-sm uppercase tracking-wide mb-3">
            Frequently Asked Questions
          </p>
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--ai-ink)]"
          >
            AI Strategy & Consulting FAQs
          </h2>
        </ScrollReveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }} role="list">
          {FAQS.map((faq, i) => {
            const isOpen = openId === i;
            return (
              <ScrollReveal key={faq.q} delay={Math.min(i, 3)}>
                <div
                  className={`ai-faq-item ${isOpen ? "is-open" : ""}`}
                  role="listitem"
                >
                  <h3 style={{ margin: 0 }}>
                    <button
                      type="button"
                      className="ai-faq-btn"
                      aria-expanded={isOpen}
                      aria-controls={`ai-faq-panel-${i}`}
                      id={`ai-faq-btn-${i}`}
                      onClick={() => setOpenId(isOpen ? -1 : i)}
                    >
                      <span>{faq.q}</span>
                      <FiChevronDown
                        size={18}
                        className="flex-shrink-0 text-[var(--ai-purple)]"
                        style={{
                          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                          transform: isOpen ? "rotate(180deg)" : "none",
                        }}
                        aria-hidden
                      />
                    </button>
                  </h3>
                  <div
                    id={`ai-faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`ai-faq-btn-${i}`}
                    className="ai-faq-panel"
                  >
                    <p className="text-sm leading-relaxed m-0" style={{ paddingBottom: "1.25rem" }}>
                      {faq.a}
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
