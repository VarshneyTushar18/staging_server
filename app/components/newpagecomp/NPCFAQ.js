"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function NPCFAQ({ faqs }) {
  const [open, setOpen] = useState(null);

  return (
    <section className="npc-faq" id="faq" aria-label="Frequently Asked Questions">
      <div className="npc-container npc-faq__inner">
        <ScrollReveal className="npc-faq__header">
          <div className="npc-section-label">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="npc-section-title">
            AI Consulting <span className="npc-text-gradient">FAQs</span>
          </h2>
          <p className="npc-section-sub">
            Common questions from Australian businesses exploring AI.
          </p>
        </ScrollReveal>

        <div className="npc-faq__list" role="list">
          {faqs.map((item, i) => (
            <ScrollReveal key={item.q} delay={(i % 4) + 1}>
              <div
                className={`npc-faq__item${open === i ? " npc-faq__item--open" : ""}`}
                role="listitem"
              >
                <button
                  type="button"
                  className="npc-faq__question"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span>{item.q}</span>
                  <span className="npc-faq__icon" aria-hidden="true">
                    {open === i ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    )}
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  className="npc-faq__answer"
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
