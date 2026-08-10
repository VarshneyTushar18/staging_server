"use client";

import ScrollReveal from "./ScrollReveal";

export default function NPCCaseStudy({ caseStudy }) {
  return (
    <section className="npc-case" id="case-study" aria-label="Case Study">
      <div className="npc-container">
        <ScrollReveal>
          <div className="npc-section-label">CASE STUDY</div>
          <h2 className="npc-section-title">
            From Manual Back-Office to{" "}
            <span className="npc-text-gradient">60% Faster Order Processing</span>
          </h2>
        </ScrollReveal>

        <div className="npc-case__grid">
          <ScrollReveal className="npc-case__context">
            <div className="npc-case__industry-badge">
              <span aria-hidden="true">{caseStudy.industryIcon}</span>
              {caseStudy.industry}
            </div>
            <p className="npc-case__context-text">{caseStudy.context}</p>
            <div className="npc-case__what-we-did">
              <h3 className="npc-case__subtitle">What We Did</h3>
              <ul className="npc-case__list">
                {caseStudy.actions.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2} className="npc-case__results">
            <div className="npc-case__results-header">
              <h3 className="npc-case__subtitle">Results in 4 Months</h3>
            </div>
            <div className="npc-case__metrics">
              {caseStudy.metrics.map((m) => (
                <div key={m.label} className="npc-metric">
                  <span className="npc-metric__num">{m.value}</span>
                  <span className="npc-metric__label">{m.label}</span>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="npc-btn npc-btn--primary npc-btn--md npc-case__cta"
            >
              Get Similar Results
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
