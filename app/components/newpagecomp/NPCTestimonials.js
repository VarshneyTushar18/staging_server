"use client";

import ScrollReveal from "./ScrollReveal";

export default function NPCTestimonials({ testimonials }) {
  return (
    <section
      className="npc-testimonials"
      id="testimonials"
      aria-label="Client Testimonials"
    >
      <div className="npc-container">
        <ScrollReveal>
          <div className="npc-section-label">CLIENT TESTIMONIALS</div>
          <h2 className="npc-section-title">
            What Our Clients Say{" "}
            <span className="npc-text-gradient">About Working With Us</span>
          </h2>
        </ScrollReveal>

        <div className="npc-testimonials__grid">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={(i % 3) + 1}>
              <article className="npc-testimonial">
                <div className="npc-testimonial__quote-icon" aria-hidden="true">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <blockquote className="npc-testimonial__text">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <footer className="npc-testimonial__footer">
                  <div className="npc-testimonial__avatar" aria-hidden="true">
                    {t.initial}
                  </div>
                  <div>
                    <cite className="npc-testimonial__name">{t.name}</cite>
                    <span className="npc-testimonial__company">{t.company}</span>
                  </div>
                </footer>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
