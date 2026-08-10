"use client";

import {
  FiSearch,
  FiMap,
  FiCpu,
  FiShield,
  FiSend,
} from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    icon: FiSearch,
    title: "Free AI Opportunity Audit",
    description:
      "We review your current operations, data and tech stack to find where AI delivers real, measurable value.",
  },
  {
    icon: FiMap,
    title: "Strategy & Roadmap",
    description:
      "A prioritised roadmap mapped to your budget, team capability and business goals.",
  },
  {
    icon: FiCpu,
    title: "Pilot Build",
    description:
      "A scoped pilot (chatbot, automation, internal tool) built and tested against real workflows and real data.",
  },
  {
    icon: FiShield,
    title: "Governance, Testing & Compliance Review",
    description:
      "Privacy, security and accuracy testing before anything goes near your customers or your data.",
  },
  {
    icon: FiSend,
    title: "Rollout & Ongoing Optimisation",
    description:
      "Full rollout, staff training, monthly reporting, and a dedicated AI advisor.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-20 md:py-28 scroll-mt-24 bg-[var(--ai-bg)]"
      aria-labelledby="process-heading"
    >
      <div className="ai-container">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[var(--ai-purple)] font-semibold text-sm uppercase tracking-wide mb-3">
            How We Work
          </p>
          <h2
            id="process-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--ai-ink)]"
          >
            Our AI Consulting Process
          </h2>
          <p className="mt-4 text-[var(--ai-muted)] text-base">
            A clear path from audit to rollout — built for measurable value, not endless pilots.
          </p>
        </ScrollReveal>

        <div className="row g-4 justify-content-center">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            // 5 steps: 3 in first row, 2 in second row on lg screens
            const isLastRow = i >= 3;
            const gridClass = isLastRow ? "col-md-6 col-lg-5" : "col-md-6 col-lg-4";
            
            return (
              <ScrollReveal
                key={step.title}
                delay={Math.min(i + 1, 3)}
                className={`${gridClass} d-flex`}
              >
                <article className="ai-step-card ai-glow-border-light d-flex flex-column justify-content-between w-100">
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                      <span className="ai-step-icon">
                        <Icon size={20} aria-hidden />
                      </span>
                      <span className="ai-step-watermark" aria-hidden>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--ai-purple)] mb-2">
                      Step {i + 1}
                    </p>
                    <h3 className="font-bold text-[var(--ai-ink)] text-lg mb-2">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--ai-muted)] leading-relaxed m-0">
                    {step.description}
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
