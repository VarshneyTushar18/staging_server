"use client";

import ScrollReveal from "./ScrollReveal";

export default function NPCWhyUs({ reasons }) {
  return (
    <section className="npc-why" id="why-us" aria-label="Why Choose Tech2Globe">
      <div className="npc-container">
        <ScrollReveal>
          <div className="npc-section-label">WHY BUSINESSES CHOOSE US</div>
          <h2 className="npc-section-title">
            Local Business Knowledge.{" "}
            <span className="npc-text-gradient">Practical AI Expertise.</span>
          </h2>
          <p className="npc-section-sub">
            We&apos;re not a generic AI vendor with a global playbook — we&apos;re
            an Australian team building for Australian businesses.
          </p>
        </ScrollReveal>

        <div className="npc-why__grid">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={(i % 3) + 1}>
              <article className="npc-why__card">
                <span className="npc-why__card-icon" aria-hidden="true">
                  {r.icon}
                </span>
                <h3 className="npc-why__card-title">{r.title}</h3>
                <p className="npc-why__card-desc">{r.desc}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
