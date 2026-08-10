"use client";

import {
  FiSearch,
  FiMap,
  FiCode,
  FiSmartphone,
  FiSend,
} from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    icon: FiSearch,
    title: "Free Store & Conversion Audit",
    description:
      "We review your current Shopify store (or your launch brief) against your competitors and Core Web Vitals benchmarks.",
  },
  {
    icon: FiMap,
    title: "UX & Local Market Strategy",
    description:
      "Wireframes and information architecture built around how your shoppers browse and buy.",
  },
  {
    icon: FiCode,
    title: "Theme Build & App Integration",
    description:
      "Custom Liquid development, checkout logic, and local payment/shipping integrations.",
  },
  {
    icon: FiSmartphone,
    title: "QA, Speed & Mobile Testing",
    description:
      "Tested across real devices and mobile network conditions before launch.",
  },
  {
    icon: FiSend,
    title: "Launch & Ongoing Optimisation",
    description:
      "Post-launch CRO, monthly reporting, and a dedicated account manager.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="sp-process"
      aria-labelledby="process-heading"
    >
      <div className="sp-container">
        <ScrollReveal className="sp-section-head">
          <p className="sp-label">How We Work</p>
          <h2 id="process-heading" className="sp-title">
            Our Shopify Build Process
          </h2>
        </ScrollReveal>

        <div className="sp-process__track">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.title} delay={Math.min(i + 1, 4)}>
                <article className="sp-step">
                  <div className="sp-step__num" aria-hidden>
                    {i + 1}
                  </div>
                  <div className="sp-step__icon">
                    <Icon size={18} aria-hidden />
                  </div>
                  <h3 className="sp-step__title">{step.title}</h3>
                  <p className="sp-step__desc">{step.description}</p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
