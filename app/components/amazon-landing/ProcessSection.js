"use client";

import {
  FiSearch,
  FiMap,
  FiEdit3,
  FiZap,
  FiRefreshCw,
} from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    num: "01",
    Icon: FiSearch,
    title: "Free Account Audit",
    desc: "We analyse your current listings, ad spend, BSR, review profile and competitor gaps — no cost, no obligation.",
  },
  {
    num: "02",
    Icon: FiMap,
    title: "Strategy & Keyword Mapping",
    desc: "Category-specific keyword research, competitor reverse-engineering and a 90-day growth roadmap tailored to your products.",
  },
  {
    num: "03",
    Icon: FiEdit3,
    title: "Listing Build & A+ Content",
    desc: "Fully optimised titles, bullets, descriptions, backend terms and A+ content with lifestyle imagery and brand story modules.",
  },
  {
    num: "04",
    Icon: FiZap,
    title: "Launch & PPC Activation",
    desc: "Campaign architecture across Sponsored Products, Brands and Display — with aggressive launch bids that dial back as organic rank improves.",
  },
  {
    num: "05",
    Icon: FiRefreshCw,
    title: "Ongoing Management",
    desc: "Weekly bid optimisation, monthly strategy reviews, inventory alerts and continuous listing iteration to compound your results over time.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="amz-process" aria-labelledby="process-heading">
      <div className="amz-container">
        <ScrollReveal className="amz-section-head">
          <p className="amz-label">How We Work</p>
          <h2 id="process-heading" className="amz-title">
            From Audit to Category Leadership in Five Steps
          </h2>
          <p className="amz-sub">
            A structured, repeatable process that removes guesswork and gives
            your brand a compounding edge on Amazon AU.
          </p>
        </ScrollReveal>

        <div className="amz-process__track">
          {STEPS.map((step, i) => {
            const Icon = step.Icon;
            return (
              <ScrollReveal key={step.num} delay={Math.min(i + 1, 4)}>
                <div className="amz-step">
                  <div className="amz-step__num" aria-hidden="true">
                    {step.num}
                  </div>
                  <div className="amz-step__icon">
                    <Icon size={18} aria-hidden />
                  </div>
                  <h3 className="amz-step__title">{step.title}</h3>
                  <p className="amz-step__desc">{step.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
