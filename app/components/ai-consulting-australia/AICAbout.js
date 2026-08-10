"use client";

import {
  FiSearch,
  FiLock,
  FiZap,
  FiMapPin,
} from "react-icons/fi";
import AICScrollReveal from "./AICScrollReveal";

const CARDS = [
  {
    Icon: FiSearch,
    title: "Cut Through the Noise",
    desc: "We replace vendor demos with clear-eyed assessments of where AI actually delivers value in your specific business.",
  },
  {
    Icon: FiLock,
    title: "Privacy-First by Default",
    desc: "Every implementation is aligned to the Privacy Act and Australian Privacy Principles from day one, not as an afterthought.",
  },
  {
    Icon: FiZap,
    title: "Results in Months",
    desc: "Measurable ROI in a focused pilot — not a year-long consulting engagement with no delivery.",
  },
  {
    Icon: FiMapPin,
    title: "Local Team, AEST Hours",
    desc: "Real humans, in your timezone, who understand how Australian businesses operate.",
  },
];

export default function AICAbout() {
  return (
    <section id="about" className="aic-about" aria-labelledby="aic-about-heading">
      <div className="aic-container">
        <div className="aic-about__grid">
          <AICScrollReveal>
            <p className="aic-about__label">THE AI OPPORTUNITY</p>
            <h2 id="aic-about-heading" className="aic-about__title">
              Every Business Is Talking About AI — Few Have Actually Implemented
              It Properly
            </h2>
            <div className="aic-about__body">
              <p>
                Boards and leadership teams are under pressure to &ldquo;do
                something with AI,&rdquo; but most businesses are stuck between
                generic chatbot demos and vendor pitches that don&apos;t map to
                how their operations actually run.
              </p>
              <p>
                Meanwhile the businesses pulling ahead are the ones quietly
                automating back-office work, embedding AI into customer service
                and sales, and using their own data — safely and compliantly —
                to make faster decisions.
              </p>
              <p>
                Tech2Globe builds AI strategy and AI systems around how your
                business actually operates — data readiness, workflow
                automation, safe and compliant use of generative AI, and
                integration with the tools your team already uses — so you get
                measurable results in months, not an endless pilot program.
              </p>
            </div>
            <div className="aic-about__cta">
              <a href="#contact" className="aic-btn aic-btn-primary">
                Book a Free AI Opportunity Audit
              </a>
            </div>
          </AICScrollReveal>

          <AICScrollReveal delay={1}>
            <div className="aic-about__cards">
              {CARDS.map(({ Icon, title, desc }) => (
                <div key={title} className="aic-about-card">
                  <div className="aic-about-card__icon">
                    <Icon size={18} />
                  </div>
                  <p className="aic-about-card__title">{title}</p>
                  <p className="aic-about-card__desc">{desc}</p>
                </div>
              ))}
            </div>
          </AICScrollReveal>
        </div>
      </div>
    </section>
  );
}
