"use client";

import AnimatedCounter from "@/app/components/shopify-landing/AnimatedCounter";
import ScrollReveal from "./ScrollReveal";

const STATS = [
  { end: 80, suffix: "%+", label: "Average sales uplift for managed accounts" },
  { end: 30, suffix: "+", label: "Amazon brands managed across Australia" },
  { end: 14, suffix: "+", label: "Years combined marketplace experience" },
  { end: 0, suffix: "", custom: "24/7", label: "AU-based account monitoring" },
];

function SellerCentralMockup() {
  return (
    <div className="amz-dashboard" aria-hidden="true">
      <div className="amz-dash-top">
        <span className="amz-dash-dot amz-dash-dot--r" />
        <span className="amz-dash-dot amz-dash-dot--y" />
        <span className="amz-dash-dot amz-dash-dot--g" />
        <span className="amz-dash-label">Seller Central · Live Dashboard</span>
      </div>

      <div className="amz-dash-grid">
        <div className="amz-dash-card">
          <div className="amz-dash-card__row">
            <p className="amz-dash-card__muted">Ordered Revenue</p>
            <span className="amz-dash-card__badge">+38%</span>
          </div>
          <p className="amz-dash-card__value">$94,820</p>
          <div className="amz-chart-bars">
            {[35, 50, 43, 65, 58, 80, 72, 88, 82, 100].map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}%`, animationDelay: `${i * 0.06}s` }}
              />
            ))}
          </div>
        </div>

        <div className="amz-dash-col">
          <div className="amz-dash-card">
            <p className="amz-dash-card__muted">ACOS</p>
            <p className="amz-dash-card__value amz-dash-card__value--sm">21%</p>
            <div className="amz-dash-progress">
              <span />
            </div>
          </div>
          <div className="amz-dash-card">
            <p className="amz-dash-card__muted">BSR Rank</p>
            <p className="amz-dash-card__value amz-dash-card__value--sm">
              Top 3
            </p>
            <div className="amz-dash-rank">
              <span className="amz-dash-rank-badge">#1</span>
              <span className="amz-dash-card__accent">Category Best Seller</span>
            </div>
          </div>
        </div>
      </div>

      <div className="amz-dash-bottom">
        <div className="amz-dash-card">
          <p className="amz-dash-card__muted">Active Listings</p>
          <p className="amz-dash-card__value amz-dash-card__value--sm">48</p>
          <p className="amz-dash-card__accent">A+ Content live</p>
        </div>
        <div className="amz-dash-card">
          <p className="amz-dash-card__muted">Review Score</p>
          <p className="amz-dash-card__value amz-dash-card__value--sm">4.8★</p>
          <p className="amz-dash-card__accent">Amazon&apos;s Choice</p>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="amz-hero" aria-labelledby="hero-heading">
      <div className="amz-container">
        <div className="amz-hero__grid">
          <div>
            <ScrollReveal>
              <p className="amz-label">Amazon Marketplace Management</p>
              <h1 id="hero-heading" className="amz-hero__headline">
                Grow Your Amazon Store With a Team That Actually Understands the
                Local Market
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p className="amz-hero__sub">
                Tech2Globe manages Seller Central and Vendor Central for
                brands across Sydney, Melbourne, Brisbane and Perth — from
                listing optimisation and A10 SEO to Amazon PPC, FBA logistics,
                GST/ABN compliance and storefront design. Everything under one
                roof, built for local sellers.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="amz-hero__actions">
                <a href="#contact" className="amz-btn amz-btn-primary">
                  Book Free Audit
                </a>
                <a href="#case-studies" className="amz-btn amz-btn-secondary">
                  View Case Study
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={2}>
            <SellerCentralMockup />
          </ScrollReveal>
        </div>

        <div className="amz-hero__stats">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={Math.min(i + 1, 4)}>
              <div className="amz-stat-card">
                <p className="amz-stat-card__num">
                  {stat.custom ? (
                    stat.custom
                  ) : (
                    <AnimatedCounter
                      end={stat.end}
                      suffix={stat.suffix}
                      decimals={0}
                    />
                  )}
                </p>
                <span className="amz-stat-card__label">{stat.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
