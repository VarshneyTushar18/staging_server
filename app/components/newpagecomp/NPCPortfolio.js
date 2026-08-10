"use client";

import ScrollReveal from "./ScrollReveal";

export default function NPCPortfolio({ items }) {
  return (
    <section className="npc-portfolio" id="portfolio" aria-label="Client Portfolio">
      <div className="npc-container">
        <ScrollReveal>
          <div className="npc-section-label">CLIENT PORTFOLIO</div>
          <h2 className="npc-section-title">
            Businesses We&apos;ve{" "}
            <span className="npc-text-gradient">Helped Implement AI</span>
          </h2>
        </ScrollReveal>

        <div className="npc-portfolio__grid">
          {items.map((p, i) => (
            <ScrollReveal key={p.category} delay={(i % 4) + 1}>
              <article className="npc-portfolio__card">
                <div className="npc-portfolio__card-icon" aria-hidden="true">
                  {p.icon}
                </div>
                <div className="npc-portfolio__card-body">
                  <h3 className="npc-portfolio__card-cat">{p.category}</h3>
                  <p className="npc-portfolio__card-service">
                    <span className="npc-portfolio__label">Service: </span>
                    {p.service}
                  </p>
                  <div className="npc-portfolio__card-result">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {p.result}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
