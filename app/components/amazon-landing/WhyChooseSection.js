"use client";

import {
  FiMapPin,
  FiAward,
  FiTrendingUp,
  FiShield,
  FiUsers,
} from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const FEATURES = [
  {
    Icon: FiMapPin,
    title: "True Local Market Knowledge",
    desc: "We understand AU consumer behaviour, seasonal retail calendars and the Amazon AU algorithm — not just best practice lifted from US playbooks.",
  },
  {
    Icon: FiAward,
    title: "Dedicated Amazon-Only Specialists",
    desc: "Our team focuses exclusively on Amazon. No split attention between platforms — just deep, current expertise in everything from A10 SEO to DSP.",
  },
  {
    Icon: FiTrendingUp,
    title: "Data-Driven PPC With Proven ACOS Targets",
    desc: "We benchmark against category averages and set realistic ACOS targets from day one — with transparent weekly reporting you can actually understand.",
  },
  {
    Icon: FiShield,
    title: "GST, ABN & Compliance Guidance Built In",
    desc: "We flag GST registration thresholds, ABN requirements and tax remittance rules before they become problems — protecting your account health.",
  },
  {
    Icon: FiUsers,
    title: "Flexible Engagements — No Lock-In",
    desc: "Monthly retainers, project-based listing builds or full account management — we scope to your budget and scale up as results arrive.",
  },
];

const METRICS = [
  { num: "80%+", label: "Avg revenue uplift" },
  { num: "21%", label: "Avg ACOS achieved" },
  { num: "30+", label: "AU brands managed" },
  { num: "3.4x", label: "Best revenue multiple" },
];

const TRUST_BARS = [
  { label: "Listing optimisation", pct: 95 },
  { label: "PPC profitability", pct: 88 },
  { label: "Review growth", pct: 82 },
];

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="amz-why" aria-labelledby="why-heading">
      <div className="amz-container">
        <div className="amz-why__grid">
          <div className="amz-why__left">
            <ScrollReveal>
              <p className="amz-label amz-label--white">Why Choose Us</p>
              <h2 id="why-heading" className="amz-title amz-title--white">
                Local Understanding. Global Marketplace Expertise.
              </h2>
              <p className="amz-why__sub">
                Anyone can run Amazon ads. We build category-dominant brands by
                combining local market insight with specialist Amazon strategy
                that compounds month over month.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <ul className="amz-why__list">
                {FEATURES.map((feature) => {
                  const Icon = feature.Icon;
                  return (
                    <li key={feature.title} className="amz-why__item">
                      <span className="amz-why__item-icon">
                        <Icon size={16} aria-hidden />
                      </span>
                      <div>
                        <strong>{feature.title}</strong>
                        <p>{feature.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="amz-why__cta">
                <a href="#contact" className="amz-btn amz-btn-primary">
                  Book Free Amazon Audit
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={1}>
            <div className="amz-why__panel">
              <p className="amz-why__panel-title">Our Results At a Glance</p>

              <div className="amz-why__metrics">
                {METRICS.map((m) => (
                  <div key={m.label} className="amz-why__metric">
                    <div className="amz-why__metric-num">{m.num}</div>
                    <div className="amz-why__metric-label">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="amz-why__trust">
                {TRUST_BARS.map((bar) => (
                  <div key={bar.label} className="amz-why__trust-row">
                    <span className="amz-why__trust-label">{bar.label}</span>
                    <div className="amz-why__trust-bar">
                      <div
                        className="amz-why__trust-fill"
                        style={{ width: `${bar.pct}%` }}
                      />
                    </div>
                    <span className="amz-why__trust-val">{bar.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
