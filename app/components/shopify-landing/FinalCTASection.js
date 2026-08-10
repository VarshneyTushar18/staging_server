"use client";

import ContactForm from "@/app/components/contact/ContactForm/ContactForm";
import { FiCheck } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const BENEFITS = [
  "Free conversion & technical store audit",
  "Tailored growth plan from our Shopify team",
  "Fixed-scope quote — no surprise costs",
  "Local AEST business-hours support",
];

export default function FinalCTASection() {
  return (
    <section
      id="contact"
      className="sp-contact"
      aria-labelledby="cta-heading"
    >
      <div className="sp-container">
        <div className="sp-contact__grid">
          <ScrollReveal>
            <h2 id="cta-heading" className="sp-contact__title">
              Ready to Build a Shopify Store That Converts?
            </h2>
            <p className="sp-contact__desc">
              Get a free, no-obligation Shopify store audit and a tailored
              growth plan from Tech2Globe&apos;s development team.
            </p>
            <ul className="sp-contact__benefits">
              {BENEFITS.map((b) => (
                <li key={b}>
                  <span className="sp-check">
                    <FiCheck size={12} strokeWidth={3} aria-hidden />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div id="audit-form" className="sp-contact__form">
              <div className="sp-contact__form-accent" aria-hidden="true" />
              <h3 className="sp-contact__form-title">
                Book Your Free Shopify Audit Today
              </h3>
              <p className="sp-contact__form-sub">
                Tell us about your store — we&apos;ll follow up with next steps.
              </p>
              <ContactForm
                variant="faq"
                source="Shopify Agency Sydney — Free Store Audit"
                successRedirect="/thank-you"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
