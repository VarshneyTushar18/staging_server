"use client";

import { FiCheck } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const LOCAL_POINTERS = [
  "Amazon AU algorithm and A10 ranking signals differ from Amazon US — local SEO strategy matters",
  "GST obligations apply once revenue exceeds $75,000; we guide you through setup and compliance",
  "Local shipping carriers and FBA network knowledge shortens fulfilment times and cuts costs",
  "Review acquisition strategies built for AU consumer law and Amazon's community guidelines",
  "Experience across Sydney, Melbourne, Brisbane and Perth retail calendars and buying patterns",
];

export default function AboutSection() {
  return (
    <section id="about" className="amz-about" aria-labelledby="about-heading">
      <div className="amz-container">
        <div className="amz-about__grid">
          <ScrollReveal>
            <p className="amz-label">Marketplace Opportunity</p>
            <h2 id="about-heading" className="amz-title">
              The Australian Amazon Land-Grab Is Happening Right Now
            </h2>
            <p className="amz-about__text">
              Amazon launched in Australia in 2017 and has grown rapidly — yet
              most local brands still treat it as an afterthought. The sellers
              who move now, with a proper listing, PPC and SEO strategy, are
              claiming category positions that will be far harder to take once
              the market matures.
            </p>
            <p className="amz-about__text">
              Tech2Globe works exclusively with local businesses to build
              sustainable Amazon presences. We understand the nuances of the AU
              marketplace, from GST thresholds and ABN requirements to the
              seasonal demand patterns that only local market knowledge reveals.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <div className="amz-local-card">
              <p className="amz-local-card__summary">
                Why local expertise matters on Amazon AU
              </p>
              <ul className="amz-check-list">
                {LOCAL_POINTERS.map((point) => (
                  <li key={point} className="amz-check-list__item">
                    <span className="amz-check-icon">
                      <FiCheck size={13} strokeWidth={3} aria-hidden />
                    </span>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
