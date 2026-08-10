"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import AICScrollReveal from "./AICScrollReveal";

const FAQS = [
  {
    q: "Do we need to already have an AI or data strategy in place?",
    a: "No — most clients start with little or no AI strategy. Our free AI Opportunity Audit is designed to identify where AI can help even if you're starting from scratch.",
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
    a: "A scoped pilot (chatbot, automation, internal tool) typically takes 4–8 weeks from strategy to launch; broader AI roadmaps and multi-workflow rollouts can run 3–6 months depending on complexity.",
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

export default function AICFAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section id="faq" className="aic-faq" aria-labelledby="aic-faq-heading">
      <div className="aic-container">
        <AICScrollReveal className="aic-section-head">
          <p className="aic-label">Common Questions</p>
          <h2 id="aic-faq-heading" className="aic-title">
            Frequently Asked Questions
          </h2>
          <p className="aic-sub">
            Everything you need to know about AI consulting for Australian
            businesses — from privacy to timelines.
          </p>
          <span className="aic-cyan-bar" />
        </AICScrollReveal>

        <AICScrollReveal>
          <div className="aic-faq__list" role="list">
            {FAQS.map((faq, i) => (
              <div
                key={faq.q}
                className={`aic-faq-item${openIdx === i ? " is-open" : ""}`}
                role="listitem"
              >
                <button
                  type="button"
                  className="aic-faq-btn"
                  aria-expanded={openIdx === i}
                  onClick={() => toggle(i)}
                >
                  {faq.q}
                  <FiChevronDown size={20} aria-hidden />
                </button>
                <div
                  className="aic-faq-panel"
                  aria-hidden={openIdx !== i}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </AICScrollReveal>
      </div>
    </section>
  );
}
