"use client";

import ScrollReveal from "./ScrollReveal";

export default function NPCHero({ stats }) {
  return (
    <section className="npc-hero" id="hero" aria-label="Hero Section">
      <div className="npc-hero__mesh" aria-hidden="true" />
      <div className="npc-hero__orb npc-hero__orb--1" aria-hidden="true" />
      <div className="npc-hero__orb npc-hero__orb--2" aria-hidden="true" />

      <div className="npc-container npc-hero__inner">
        <ScrollReveal>
          <div className="npc-hero__badge">
            <span className="npc-badge-dot" aria-hidden="true" />
            AI Consulting Services · Australia
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h1 className="npc-hero__headline">
            The AI Consulting Team That{" "}
            <span className="npc-text-gradient">Ships Working Systems</span>,
            Not Slide Decks
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <p className="npc-hero__sub">
            Tech2Globe helps growing Australian businesses cut through the AI
            noise and actually implement AI that pays for itself — AI readiness
            audits, custom AI strategy, generative AI and LLM integration,
            workflow automation, and AI-powered customer experience, delivered
            by a team that understands local compliance, data sovereignty
            expectations, and how Australian businesses actually operate.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={3}>
          <div className="npc-hero__actions">
            <a href="#contact" className="npc-btn npc-btn--primary npc-btn--lg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
              </svg>
              Book a Free AI Opportunity Audit
            </a>
            <a href="#process" className="npc-btn npc-btn--ghost npc-btn--lg">
              How We Work
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={4}>
          <div className="npc-hero__stats">
            {stats.map((stat, i) => (
              <div key={stat.label} className="npc-hero__stat-wrap">
                {i > 0 && (
                  <div className="npc-stat-divider" aria-hidden="true" />
                )}
                <div className="npc-stat">
                  <span className="npc-stat__num">
                    {stat.value}
                    {stat.suffix && (
                      <span className="npc-stat__suffix">{stat.suffix}</span>
                    )}
                  </span>
                  <span className="npc-stat__label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
