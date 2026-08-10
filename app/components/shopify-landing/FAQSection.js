"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const FAQS = [
  {
    q: "Do you only work with local businesses?",
    a: "No — our team understands the local retail market and builds Shopify stores for brands nationally and internationally. Being local simply means we build with local payment methods, shipping expectations and compliance requirements in mind from day one.",
  },
  {
    q: "How much does a custom Shopify store cost?",
    a: "Pricing depends on scope — a custom theme build, app integrations, and migration complexity all factor in. We provide a fixed-scope quote after your free store audit so there are no surprise costs partway through the build.",
  },
  {
    q: "Can you migrate our existing store to Shopify without losing our SEO rankings?",
    a: "Yes. Migration includes a full redirect map, metadata transfer and structured data rebuild so search rankings and historic order data carry across cleanly.",
  },
  {
    q: "Do you work with Shopify Plus for larger or wholesale brands?",
    a: "Yes — we support Shopify Plus builds including multi-currency storefronts, B2B/wholesale channels and custom checkout scripting for scaling retailers.",
  },
  {
    q: "How long does a typical Shopify build take?",
    a: "A standard custom store typically takes 6-10 weeks from strategy to launch; Shopify Plus and headless builds can run 10-16 weeks depending on integration complexity.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes — our retainer clients get local AEST business-hours support, theme updates, and proactive load testing ahead of EOFY and Black Friday/Cyber Monday sale periods.",
  },
  {
    q: "Do you offer a free store audit before we commit?",
    a: "Yes — every engagement starts with a free Shopify store and conversion audit so you can see exactly where the gaps are before deciding to work with us.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(0);

  return (
    <section id="faq" className="sp-faq" aria-labelledby="faq-heading">
      <div className="sp-container">
        <ScrollReveal className="sp-section-head">
          <p className="sp-label">Frequently Asked Questions</p>
          <h2 id="faq-heading" className="sp-title">
            Shopify Development FAQs
          </h2>
        </ScrollReveal>

        <div className="sp-faq__list" role="list">
          {FAQS.map((faq, i) => {
            const isOpen = openId === i;
            return (
              <ScrollReveal key={faq.q} delay={Math.min(i, 3)}>
                <div
                  className={`sp-faq-item${isOpen ? " is-open" : ""}`}
                  role="listitem"
                >
                  <h3>
                    <button
                      type="button"
                      className="sp-faq-btn"
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-btn-${i}`}
                      onClick={() => setOpenId(isOpen ? -1 : i)}
                    >
                      <span>{faq.q}</span>
                      <FiChevronDown size={20} aria-hidden />
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    className="sp-faq-panel"
                  >
                    <p>{faq.a}</p>
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
