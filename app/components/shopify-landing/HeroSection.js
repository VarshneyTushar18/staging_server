"use client";

import AnimatedCounter from "./AnimatedCounter";
import ScrollReveal from "./ScrollReveal";

const STATS = [
  { end: 120, suffix: "+", label: "Shopify stores built & migrated" },
  {
    end: 2.8,
    suffix: "x",
    decimals: 1,
    label: "Avg. conversion rate uplift for our clients",
  },
  { end: 10, suffix: "+", label: "Years combined Shopify dev experience" },
  {
    end: 0,
    suffix: "",
    label: "Local team, local business hours support",
    custom: "AEST",
  },
];

function DashboardMockup() {
  return (
    <div className="sp-dashboard" aria-hidden="true">
      <div className="sp-dash-top">
        <span className="sp-dash-dot sp-dash-dot--r" />
        <span className="sp-dash-dot sp-dash-dot--y" />
        <span className="sp-dash-dot sp-dash-dot--g" />
        <span className="sp-dash-label">Shopify Admin · Live</span>
      </div>

      <div className="sp-dash-grid">
        <div className="sp-dash-card">
          <div className="sp-dash-card__row">
            <p className="sp-dash-card__muted">Total sales</p>
            <span className="sp-dash-card__badge">+24%</span>
          </div>
          <p className="sp-dash-card__value">$128,450</p>
          <div className="sp-chart-bars">
            {[40, 55, 48, 70, 62, 85, 78, 92, 88, 100].map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}%`, animationDelay: `${i * 0.06}s` }}
              />
            ))}
          </div>
        </div>

        <div className="sp-dash-col">
          <div className="sp-dash-card">
            <p className="sp-dash-card__muted">Conversion</p>
            <p className="sp-dash-card__value sp-dash-card__value--sm">4.8%</p>
            <div className="sp-dash-progress">
              <span />
            </div>
          </div>
          <div className="sp-dash-card">
            <p className="sp-dash-card__muted">Checkout</p>
            <p className="sp-dash-card__value sp-dash-card__value--sm">
              Frictionless
            </p>
            <p className="sp-dash-card__accent">AfterPay · Zip ready</p>
          </div>
        </div>
      </div>

      <div className="sp-dash-bottom">
        <div className="sp-dash-card">
          <p className="sp-dash-card__muted">Storefront preview</p>
          <div className="sp-dash-thumbs">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="sp-phone">
          <div className="sp-phone__notch" />
          <div className="sp-phone__screen">
            <span className="sp-phone__line" />
            <span className="sp-phone__block" />
            <span className="sp-phone__line2" />
            <span className="sp-phone__line3" />
            <span className="sp-phone__cta" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="sp-hero" aria-labelledby="hero-heading">
      <div className="sp-container">
        <div className="sp-hero__grid">
          <div>
            <ScrollReveal>
              <p className="sp-label">Shopify Development Agency</p>
              <h1 id="hero-heading" className="sp-hero__headline">
                The Shopify Development Team for Brands That Want to Actually
                Sell
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p className="sp-hero__sub">
                Tech2Globe designs, builds and scales Shopify and Shopify Plus
                stores for growing brands — from DTC labels to national
                warehouses shipping nationwide. Custom theme development, app
                integrations, Shopify SEO, and ongoing CRO support from a team
                that understands the local retail calendar, AfterPay-driven
                checkout expectations, and how your shoppers actually buy
                online.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="sp-hero__actions">
                <a href="#contact" className="sp-btn sp-btn-primary">
                  Book a Free Shopify Store Audit
                </a>
                <a href="#case-studies" className="sp-btn sp-btn-secondary">
                  View Case Studies
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={2}>
            <DashboardMockup />
          </ScrollReveal>
        </div>

        <div className="sp-hero__stats">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={Math.min(i + 1, 4)}>
              <div className="sp-stat-card">
                <p className="sp-stat-card__num">
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
                <span className="sp-stat-card__label">{stat.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
