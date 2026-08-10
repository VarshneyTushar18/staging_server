"use client";

import ContactForm from "@/app/components/contact/ContactForm/ContactForm";
import { FiCheck } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const BENEFITS = [
  "Free Amazon account & listing audit — no obligation",
  "Tailored growth plan from our Amazon specialist team",
  "Fixed-scope quote with transparent pricing",
  "AEST business-hours support from your dedicated account manager",
];

export default function FinalCTASection() {
  return (
    <section
      id="contact"
      className="amz-contact"
      aria-labelledby="cta-heading"
    >
      <div className="amz-container">
        <div className="amz-contact__grid">
          <ScrollReveal>
            <p className="amz-label amz-label--white">Start Here</p>
            <h2 id="cta-heading" className="amz-contact__title">
              Ready to Grow on Amazon?
            </h2>
            <p className="amz-contact__desc">
              Get a free, no-obligation Amazon account audit and a tailored
              marketplace strategy from Tech2Globe&apos;s dedicated Amazon team.
            </p>
            <ul className="amz-contact__benefits">
              {BENEFITS.map((b) => (
                <li key={b}>
                  <span className="amz-contact__check">
                    <FiCheck size={11} strokeWidth={3} aria-hidden />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div id="audit-form" className="amz-contact__form">
              <div
                className="amz-contact__form-accent"
                aria-hidden="true"
              />
              <h3 className="amz-contact__form-title">
                Book Your Free Amazon Audit
              </h3>
              <p className="amz-contact__form-sub">
                Tell us about your store — we&apos;ll follow up within one business
                day.
              </p>
              <ContactForm
                variant="faq"
                source="Amazon Consulting Australia — Free Account Audit"
                successRedirect="/thank-you"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
