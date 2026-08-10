"use client";

import ContactForm from "@/app/components/contact/ContactForm/ContactForm";
import ScrollReveal from "./ScrollReveal";

export default function FinalCTASection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 hero-section text-white py-20 md:py-28"
      style={{ background: "var(--ai-gradient-cosmic)" }}
      aria-labelledby="cta-heading"
    >
      <div className="hero-grid-overlay" aria-hidden />

      <div className="ai-container relative">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <ScrollReveal>
              <h2
                id="cta-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight"
              >
                Ready to Put AI to Work in{" "}
                <span className="ai-gradient-text">Your Business?</span>
              </h2>
              <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
                Get a free, no-obligation AI Opportunity Audit and a tailored roadmap from
                Tech2Globe&apos;s AI consulting team.
              </p>
              <div className="mt-4">
                <a href="#audit-form" className="ai-btn ai-btn-white">
                  Book Your Free AI Audit Today
                </a>
              </div>
              <ul
                className="mt-5 space-y-3"
                style={{
                  listStyleType: "none",
                  paddingLeft: 0,
                  fontSize: "0.9rem",
                  color: "rgba(255, 255, 255, 0.85)"
                }}
              >
                <li style={{ display: "flex", gap: "0.5rem" }} className="mb-2">✓ Free AI Opportunity Audit</li>
                <li style={{ display: "flex", gap: "0.5rem" }} className="mb-2">✓ Tailored implementation roadmap</li>
                <li style={{ display: "flex", gap: "0.5rem" }} className="mb-2">✓ No obligation · AEST business hours support</li>
              </ul>
            </ScrollReveal>
          </div>

          <div className="col-lg-6">
            <ScrollReveal delay={1}>
              <div
                id="audit-form"
                className="scroll-mt-28"
                style={{
                  background: "rgba(255, 255, 255, 0.92)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(139, 92, 246, 0.25)",
                  boxShadow: "var(--ai-shadow-lg), var(--ai-shadow-glow)",
                  borderRadius: "var(--ai-radius-lg)",
                  padding: "2.5rem 2rem",
                  color: "var(--ai-ink)"
                }}
              >
                <h3 className="text-xl font-bold text-[var(--ai-ink)] mb-1" style={{ fontFamily: "var(--ai-font-heading)" }}>
                  Book Your Free AI Audit
                </h3>
                <p className="text-xs text-[var(--ai-muted)] mb-4" style={{ fontWeight: "500" }}>
                  Tell us about your business — we&apos;ll follow up within 24 hours.
                </p>
                <ContactForm
                  variant="faq"
                  source="AI Consulting landing page — Free AI Opportunity Audit"
                  successRedirect="/thank-you"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
