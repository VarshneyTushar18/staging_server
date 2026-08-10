"use client";

import AICScrollReveal from "./AICScrollReveal";

const STEPS = [
  {
    num: "01",
    title: "Free AI Opportunity Audit",
    desc: "We review your current operations, data and tech stack to find where AI delivers real, measurable value.",
    tag: "Free & No Obligation",
  },
  {
    num: "02",
    title: "Strategy & Roadmap",
    desc: "A prioritised roadmap mapped to your budget, team capability and business goals.",
    tag: "Board-Ready Output",
  },
  {
    num: "03",
    title: "Pilot Build",
    desc: "A scoped pilot (chatbot, automation, internal tool) built and tested against real workflows and real data.",
    tag: "4–8 Weeks",
  },
  {
    num: "04",
    title: "Governance, Testing & Compliance Review",
    desc: "Privacy, security and accuracy testing before anything goes near your customers or your data.",
    tag: "Privacy Act Aligned",
  },
  {
    num: "05",
    title: "Rollout & Ongoing Optimisation",
    desc: "Full rollout, staff training, monthly reporting, and a dedicated AI advisor.",
    tag: "AEST Support",
  },
];

export default function AICProcess() {
  return (
    <section
      id="process"
      className="aic-process"
      aria-labelledby="aic-process-heading"
    >
      <div className="aic-container">
        <AICScrollReveal className="aic-section-head">
          <p className="aic-label">How It Works</p>
          <h2 id="aic-process-heading" className="aic-title">
            From Audit to AI That Actually Works
          </h2>
          <p className="aic-sub">
            A structured, no-jargon process that takes you from identifying
            where AI helps to having it running in your business.
          </p>
          <span className="aic-cyan-bar" />
        </AICScrollReveal>

        <div className="aic-process__steps">
          {STEPS.map((step, i) => (
            <AICScrollReveal key={step.num} delay={Math.min(i + 1, 4)}>
              <div className="aic-process-step">
                <div className="aic-process-step__num">{step.num}</div>
                <p className="aic-process-step__title">{step.title}</p>
                <p className="aic-process-step__desc">{step.desc}</p>
                <span className="aic-process-step__tag">{step.tag}</span>
              </div>
            </AICScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
