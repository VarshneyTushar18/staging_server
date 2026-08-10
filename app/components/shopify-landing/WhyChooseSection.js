"use client";

import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const FEATURES = [
  "Shopify-certified developers who build for tax-inclusive pricing and local consumer protection law compliance out of the box",
  "Experience integrating the payment and delivery stack shoppers expect — AfterPay, Zip, and other trusted local carriers",
  "Category experience across fashion, beauty, homewares, food & beverage and B2B wholesale — the categories driving Shopify growth for our clients",
  "Transparent reporting on real conversion rate, page speed and revenue-per-visitor — not vanity metrics",
  "Flexible engagement — from a single Shopify build to an ongoing Shopify Plus retainer with ongoing CRO support",
];

export default function WhyChooseSection() {
  return (
    <section className="sp-why" aria-labelledby="why-heading">
      <div className="sp-container">
        <div className="sp-why__grid">
          <ScrollReveal>
            <div className="sp-why__image">
              <Image
                src="/images/landingpageimages/home-page-about.webp"
                alt="Ecommerce team collaborating on a Shopify project"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover", opacity: 0.9 }}
              />
              <div className="sp-why__image-overlay" />
              <div className="sp-why__image-caption">
                <strong>Local retail knowledge. Global Shopify expertise.</strong>
                <span>Strategy, UX, and engineering in one team</span>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <p className="sp-label">Why Brands Choose Us</p>
              <h2 id="why-heading" className="sp-title">
                Local Retail Knowledge. Global Shopify Expertise.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <ul className="sp-why__list">
                {FEATURES.map((feature) => (
                  <li key={feature} className="sp-why__item">
                    <span className="sp-check sp-check--soft">
                      <FiCheck size={14} strokeWidth={3} aria-hidden />
                    </span>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
