"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const FAQS = [
  {
    q: "Do I need an ABN to sell on Amazon AU?",
    a: "An ABN is not mandatory for all sellers, but it is strongly recommended if you are an Australian resident or operating a local business. It simplifies GST registration, builds trust with Amazon and is required for certain vendor arrangements. We help you understand what applies to your specific situation during the free audit.",
  },
  {
    q: "When does GST registration become compulsory for Amazon sellers?",
    a: "You are required to register for GST once your annual GST turnover reaches $75,000 or more. Amazon also collects GST on behalf of overseas sellers for digital goods, but physical goods sold by local businesses are subject to different rules. We flag this threshold for you and work alongside your accountant to ensure compliance.",
  },
  {
    q: "How does Amazon AU ranking (A10 algorithm) differ from Amazon US?",
    a: "Amazon AU's A10 algorithm places stronger weight on organic sales velocity, conversion rate and external traffic compared to earlier versions. Keyword relevance, review recency and listing completeness also differ in weighting. A strategy built purely on US best practice often underperforms in the AU marketplace — which is why local expertise matters.",
  },
  {
    q: "How long does it take to see meaningful results?",
    a: "Most clients see measurable improvements in impressions and click-through rates within 2–4 weeks of listing optimisation. Organic rank improvements typically show within 45–90 days. PPC profitability (ACOS reduction) is usually visible within the first billing cycle. We set realistic milestones during the strategy session.",
  },
  {
    q: "Can you work with completely new brands launching on Amazon?",
    a: "Absolutely. New brand launches are one of our strongest services. We handle everything from ASIN creation and Brand Registry enrollment to launch PPC campaigns, early review strategy and A+ Content — giving your products the best possible start against established competitors.",
  },
  {
    q: "Which cities do you cover for Amazon PPC and management services?",
    a: "We work with Amazon sellers across all major Australian cities including Sydney, Melbourne, Brisbane and Perth, as well as regional businesses shipping nationally. Our team is fully remote-capable, so location is never a barrier to getting started.",
  },
  {
    q: "What is the difference between FBA and FBM for Australian sellers?",
    a: "FBA (Fulfilled by Amazon) means your stock is stored in Amazon's fulfilment centres — Amazon handles picking, packing, shipping and returns. FBM (Fulfilled by Merchant) means you handle logistics yourself. FBA typically wins the Buy Box more consistently and qualifies for Prime, but has storage fees. We help you model the right mix based on your margins and product dimensions.",
  },
  {
    q: "Is the initial Amazon account audit genuinely free?",
    a: "Yes — completely free, no obligation and no credit card required. We review your current listings, ad account structure, BSR position, review profile and competitor landscape. You receive a written summary with priority recommendations whether you proceed with us or not.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section id="faq" className="amz-faq" aria-labelledby="faq-heading">
      <div className="amz-container">
        <ScrollReveal className="amz-section-head">
          <p className="amz-label">Common Questions</p>
          <h2 id="faq-heading" className="amz-title">
            Frequently Asked Questions
          </h2>
          <p className="amz-sub">
            Everything you need to know about selling on Amazon AU — from GST to
            algorithm strategy.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="amz-faq__list" role="list">
            {FAQS.map((faq, i) => (
              <div
                key={faq.q}
                className={`amz-faq-item${openIdx === i ? " is-open" : ""}`}
                role="listitem"
              >
                <button
                  type="button"
                  className="amz-faq-btn"
                  aria-expanded={openIdx === i}
                  onClick={() => toggle(i)}
                >
                  {faq.q}
                  <FiChevronDown size={20} aria-hidden />
                </button>
                <div
                  className="amz-faq-panel"
                  aria-hidden={openIdx !== i}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
