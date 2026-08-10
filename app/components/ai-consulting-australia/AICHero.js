"use client";

import AnimatedCounter from "@/app/components/shopify-landing/AnimatedCounter";
import AICScrollReveal from "./AICScrollReveal";

const STATS = [
  { end: 80, suffix: "+", label: "AI strategy & automation projects" },
  { end: 3.4, suffix: "x", decimals: 1, label: "Avg. productivity uplift" },
  { end: 14, suffix: "+", label: "Years combined AI & data engineering" },
  { custom: "AEST", label: "Local team, local business hours" },
];

function AIOpsPanel() {
  return (
    <div className="aic-dashboard" aria-hidden="true">
      <div className="aic-dash-top">
        <span className="aic-dash-dot aic-dash-dot--r" />
        <span className="aic-dash-dot aic-dash-dot--y" />
        <span className="aic-dash-dot aic-dash-dot--g" />
        <span className="aic-dash-label">AI Ops · Live Dashboard</span>
      </div>

      <div className="aic-dash-body">
        <div className="aic-dash-row">
          <div className="aic-dash-card aic-dash-card--wide">
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
              <p className="aic-dash-card__muted">Workflows Automated</p>
              <span className="aic-dash-card__badge">+41%</span>
            </div>
            <p className="aic-dash-card__value">247</p>
            <div className="aic-chart-bars">
              {[30, 44, 38, 60, 55, 72, 68, 85, 80, 100].map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}%`, animationDelay: `${i * 0.07}s` }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="aic-dash-row">
          <div className="aic-dash-card">
            <p className="aic-dash-card__muted">Model Accuracy</p>
            <p className="aic-dash-card__value aic-dash-card__value--sm">
              94.7%
            </p>
            <div className="aic-dash-progress">
              <span style={{ width: "94.7%" }} />
            </div>
          </div>
          <div className="aic-dash-card">
            <p className="aic-dash-card__muted">Time Saved</p>
            <p className="aic-dash-card__value aic-dash-card__value--sm">
              1,840h
            </p>
            <p className="aic-dash-card__accent">This quarter</p>
          </div>
        </div>

        <div className="aic-dash-row">
          <div className="aic-dash-card">
            <p className="aic-dash-card__muted">Active AI Agents</p>
            <p className="aic-dash-card__value aic-dash-card__value--sm">12</p>
            <p className="aic-dash-card__accent">All healthy</p>
          </div>
          <div className="aic-dash-card">
            <p className="aic-dash-card__muted">Cost Reduction</p>
            <p className="aic-dash-card__value aic-dash-card__value--sm">
              38%
            </p>
            <p className="aic-dash-card__accent">Ops overhead</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AICHero() {
  return (
    <section className="aic-hero" aria-labelledby="aic-hero-heading">
      <div className="aic-container">
        <div className="aic-hero__grid">
          <div>
            <AICScrollReveal>
              <p className="aic-hero__label">
                AI Consulting Services · Australia
              </p>
              <h1 id="aic-hero-heading" className="aic-hero__headline">
                The AI Consulting Team That{" "}
                <span className="aic-hero__highlight">Ships Working Systems</span>
                , Not Slide Decks
              </h1>
            </AICScrollReveal>

            <AICScrollReveal delay={1}>
              <p className="aic-hero__sub">
                Tech2Globe helps growing Australian businesses cut through the AI
                noise and actually implement AI that pays for itself — AI
                readiness audits, custom AI strategy, generative AI and LLM
                integration, workflow automation, and AI-powered customer
                experience, delivered by a team that understands local
                compliance, data sovereignty expectations, and how Australian
                businesses actually operate.
              </p>
            </AICScrollReveal>

            <AICScrollReveal delay={2}>
              <div className="aic-hero__actions">
                <a href="#contact" className="aic-btn aic-btn-primary">
                  Book a Free AI Opportunity Audit
                </a>
                <a href="#process" className="aic-btn aic-btn-outline-cyan">
                  How We Work
                </a>
              </div>
            </AICScrollReveal>
          </div>

          <AICScrollReveal delay={2}>
            <AIOpsPanel />
          </AICScrollReveal>
        </div>

        <div className="aic-hero__stats">
          {STATS.map((stat, i) => (
            <AICScrollReveal key={stat.label} delay={Math.min(i + 1, 4)}>
              <div className="aic-stat-card">
                <p className="aic-stat-card__num">
                  {stat.custom ? (
                    stat.custom
                  ) : (
                    <AnimatedCounter
                      end={stat.end}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                    />
                  )}
                </p>
                <span className="aic-stat-card__label">{stat.label}</span>
              </div>
            </AICScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
