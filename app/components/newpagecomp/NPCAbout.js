"use client";

import ScrollReveal from "./ScrollReveal";

export default function NPCAbout({ about, cards }) {
  return (
    <section className="npc-about" id="about" aria-label="About Section">
      <div className="npc-container">
        <ScrollReveal>
          <div className="npc-section-label">{about.label}</div>
          <h2 className="npc-section-title">
            {about.title}{" "}
            <span className="npc-text-gradient">{about.titleHighlight}</span>
          </h2>
        </ScrollReveal>

        <div className="npc-about__grid">
          <ScrollReveal className="npc-about__body">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className={i === 0 ? "npc-about__lead" : "npc-about__text"}
              >
                {p}
              </p>
            ))}
            <a
              href="#contact"
              className="npc-btn npc-btn--primary npc-btn--md npc-about__cta"
            >
              Start With a Free Audit
            </a>
          </ScrollReveal>

          <div className="npc-about__cards">
            {cards.map((card, i) => (
              <ScrollReveal key={card.title} delay={(i % 4) + 1}>
                <div className="npc-about__card">
                  <span className="npc-about__card-icon" aria-hidden="true">
                    {card.icon}
                  </span>
                  <div>
                    <h3 className="npc-about__card-title">{card.title}</h3>
                    <p className="npc-about__card-desc">{card.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
