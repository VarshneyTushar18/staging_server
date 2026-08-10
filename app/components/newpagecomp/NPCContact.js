"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function NPCContact({ contact }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="npc-contact" id="contact" aria-label="Book a Free AI Audit">
      <div className="npc-container npc-contact__inner">
        <ScrollReveal className="npc-contact__left">
          <div className="npc-section-label">{contact.label}</div>
          <h2 className="npc-contact__title">
            {contact.title}{" "}
            <span className="npc-text-gradient">{contact.titleHighlight}</span>
          </h2>
          <p className="npc-contact__desc">{contact.description}</p>
          <ul className="npc-contact__benefits" aria-label="What you get">
            {contact.benefits.map((b) => (
              <li key={b}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
          <div className="npc-contact__trust">
            {contact.trustBadges.map((badge) => (
              <span key={badge}>{badge}</span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={2} className="npc-contact__right">
          {submitted ? (
            <div className="npc-contact__success" role="alert">
              <div className="npc-contact__success-icon" aria-hidden="true">
                ✓
              </div>
              <h3>Audit Request Received!</h3>
              <p>
                Our team will be in touch within one business day (AEST). We
                look forward to mapping AI to your business.
              </p>
            </div>
          ) : (
            <form
              className="npc-form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="AI Audit Request Form"
            >
              <div className="npc-form__row">
                <div className="npc-form__group">
                  <label htmlFor="npc-name" className="npc-form__label">
                    Full Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="npc-name"
                    className="npc-form__input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="npc-form__group">
                  <label htmlFor="npc-email" className="npc-form__label">
                    Work Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="npc-email"
                    className="npc-form__input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com.au"
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="npc-form__row">
                <div className="npc-form__group">
                  <label htmlFor="npc-company" className="npc-form__label">
                    Company Name
                  </label>
                  <input
                    id="npc-company"
                    className="npc-form__input"
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Pty Ltd"
                    autoComplete="organization"
                  />
                </div>
                <div className="npc-form__group">
                  <label htmlFor="npc-phone" className="npc-form__label">
                    Phone
                  </label>
                  <input
                    id="npc-phone"
                    className="npc-form__input"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+61 4XX XXX XXX"
                    autoComplete="tel"
                  />
                </div>
              </div>
              <div className="npc-form__group">
                <label htmlFor="npc-message" className="npc-form__label">
                  Tell Us About Your Business
                </label>
                <textarea
                  id="npc-message"
                  className="npc-form__textarea"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What does your business do? What's your biggest operational pain point? Any AI experiments you've tried?"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="npc-btn npc-btn--primary npc-btn--lg npc-form__submit"
              >
                Book Your Free AI Audit Today
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
              </button>
              <p className="npc-form__note">
                No spam. No commitment. Just a clear-eyed conversation about AI
                in your business.
              </p>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
