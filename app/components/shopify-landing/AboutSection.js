"use client";

import { FiArrowRight } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const JOURNEY = [
  { label: "Customer Journey", sub: "Discover & browse" },
  { label: "Shopify Store", sub: "Brand experience" },
  { label: "Checkout", sub: "Local payments" },
  { label: "Order Success", sub: "Repeat purchase" },
];

export default function AboutSection() {
  return (
    <section id="about" className="sp-about" aria-labelledby="about-heading">
      <div className="sp-container">
        <div className="sp-about__grid">
          <div>
            <ScrollReveal>
              <p className="sp-label">The Ecommerce Opportunity</p>
              <h2 id="about-heading" className="sp-title">
                Today&apos;s Shoppers Expect a Fast, Local, Mobile-First Store —
                Generic Themes Don&apos;t Cut It
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p className="sp-about__text">
                The online retail market moves fast, and shopper expectations
                are shaped by the biggest names in local eCommerce — fast
                delivery across major metro areas, AfterPay and Zip at checkout,
                GST-inclusive pricing shown up front, and mobile-first browsing
                on the go. A stock Shopify theme with a plugged-in app stack
                rarely holds up once real traffic and real EOFY sale volume hit
                it.
              </p>
              <p className="sp-about__text">
                Tech2Globe builds Shopify and Shopify Plus stores around how
                your customers actually shop — fast page speed on mobile
                networks, local payment methods, freight logic tuned to your
                delivery zones, and checkout flows tested against real local
                traffic patterns — so your store converts from day one, not
                after months of trial and error.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={1}>
            <div
              className="sp-journey"
              aria-label="Customer journey from browse to order success"
            >
              <p className="sp-journey__summary">
                Customer Journey → Shopify Store → Checkout → Order Success
              </p>

              <ol className="sp-journey__list">
                {JOURNEY.map((step, i) => (
                  <li key={step.label} className="sp-journey__item">
                    <div className="sp-journey__rail">
                      <span className="sp-journey__num" aria-hidden>
                        {i + 1}
                      </span>
                      {i < JOURNEY.length - 1 && (
                        <span className="sp-journey__line" aria-hidden />
                      )}
                    </div>
                    <div className="sp-journey__content">
                      <p className="sp-journey__title">
                        {step.label}
                        {i < JOURNEY.length - 1 && (
                          <FiArrowRight
                            className="sp-journey__arrow"
                            size={14}
                            aria-hidden
                          />
                        )}
                      </p>
                      <p className="sp-journey__sub">{step.sub}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
