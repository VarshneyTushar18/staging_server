"use client";

import ScrollReveal from "./ScrollReveal";

export default function NPCProcess({ steps }) {
  return (
    <section className="npc-process" id="process" aria-label="Our AI Consulting Process">
      <div className="npc-container">
        <ScrollReveal>
          <div className="npc-section-label">HOW WE WORK</div>
          <h2 className="npc-section-title">Our AI Consulting Process</h2>
          <p className="npc-section-sub">
            A proven five-step framework — from first conversation to live,
            working AI systems.
          </p>
        </ScrollReveal>

        <div className="npc-process__track">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={(i % 3) + 1}>
              <div className="npc-process__step">
                <div className="npc-process__step-num">{step.num}</div>
                <div className="npc-process__step-content">
                  <div className="npc-process__step-tag">{step.tag}</div>
                  <h3 className="npc-process__step-title">{step.title}</h3>
                  <p className="npc-process__step-desc">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="npc-process__connector" aria-hidden="true" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="npc-process__cta">
            <a href="#contact" className="npc-btn npc-btn--primary npc-btn--lg">
              Start Step 1 — Free Audit
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
