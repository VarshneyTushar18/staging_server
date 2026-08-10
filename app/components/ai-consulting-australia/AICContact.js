"use client";

import { FiCheck } from "react-icons/fi";
import ContactForm from "@/app/components/contact/ContactForm/ContactForm";
import AICScrollReveal from "./AICScrollReveal";

const BENEFITS = [
  "Clear-eyed assessment of your AI opportunities",
  "Prioritised roadmap ranked by effort and impact",
  "Fixed-scope quote — no surprise costs",
  "AEST business-hours support from a local team",
];

export default function AICContact() {
  return (
    <section
      id="contact"
      className="aic-contact"
      aria-labelledby="aic-contact-heading"
    >
      <div className="aic-container">
        <div className="aic-contact__grid">
          <AICScrollReveal>
            <p className="aic-contact__left-label">BOOK YOUR FREE AUDIT</p>
            <h2 id="aic-contact-heading" className="aic-contact__title">
              Ready to Put AI to Work in{" "}
              <span>Your Business?</span>
            </h2>
            <p className="aic-contact__desc">
              Get a free, no-obligation AI Opportunity Audit and a tailored
              roadmap from Tech2Globe&apos;s AI consulting team.
            </p>
            <div className="aic-contact__benefits">
              {BENEFITS.map((b) => (
                <div key={b} className="aic-contact__benefit">
                  <span className="aic-contact__benefit-icon">
                    <FiCheck size={12} />
                  </span>
                  {b}
                </div>
              ))}
            </div>
          </AICScrollReveal>

          <AICScrollReveal delay={1}>
            <div id="audit-form" className="aic-contact__form">
              <div className="aic-contact__form-header">
                <h3>Book Your Free AI Opportunity Audit</h3>
                <p>No obligation · Response within 24 hours · AEST hours</p>
              </div>
              <div className="aic-contact__form-body">
                <ContactForm
                  variant="faq"
                  source="AI Consulting Australia — Free AI Opportunity Audit"
                  successRedirect="/thank-you"
                />
              </div>
            </div>
          </AICScrollReveal>
        </div>
      </div>
    </section>
  );
}
