"use client";

import AnimatedCounter from "@/app/components/shopify-landing/AnimatedCounter";
import ScrollReveal from "./ScrollReveal";

const STATS = [
  { end: 80, suffix: "+", label: "AI strategy & automation projects delivered" },
  {
    end: 3.4,
    suffix: "x",
    decimals: 1,
    label: "Avg. productivity uplift on automated workflows",
  },
  { end: 14, suffix: "+", label: "Years combined AI & data engineering experience" },
  { end: 0, suffix: "", label: "Local team, local business hours support", custom: "AEST" },
];

function AIPanelMockup() {
  return (
    <div className="ai-panel ai-float" aria-hidden="true">
      <div className="ai-panel-header">
        <div className="ai-panel-dots">
          <span className="ai-panel-dot" style={{ backgroundColor: "#ef4444" }} />
          <span className="ai-panel-dot" style={{ backgroundColor: "#f59e0b" }} />
          <span className="ai-panel-dot" style={{ backgroundColor: "#10b981" }} />
        </div>
        <div className="ai-panel-title-bar">
          AI Ops Console · Live
        </div>
        <div className="ai-panel-badge-live">
          <span className="ai-pulse-dot" /> AEST Operations
        </div>
      </div>

      <div className="ai-panel-grid">
        <div className="ai-panel-card">
          <p className="ai-panel-card-title">Workflow Automation</p>
          <p className="ai-panel-card-value">+3.4x</p>
          <p className="ai-panel-card-subtitle">Productivity Uplift</p>
          
          <div className="ai-panel-bar-group">
            {[
              { name: "Email Triage", pct: 70 },
              { name: "Order Entry", pct: 80 },
              { name: "Reporting Automation", pct: 90 }
            ].map((item) => (
              <div key={item.name} className="ai-panel-bar-item">
                <div className="ai-panel-bar-info">
                  <span className="ai-panel-bar-label">{item.name}</span>
                  <span className="ai-panel-bar-value">{item.pct}%</span>
                </div>
                <div className="ai-panel-bar-bg">
                  <div
                    className="ai-panel-bar-fill"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div className="ai-panel-card" style={{ flex: 1 }}>
            <p className="ai-panel-card-title">LLM Assistants</p>
            <p className="ai-panel-card-value" style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
              Knowledge & Support
            </p>
            <span className="ai-badge ai-badge-purple">Claude · OpenAI Ready</span>
          </div>
          
          <div className="ai-panel-card" style={{ flex: 1 }}>
            <p className="ai-panel-card-title">Compliance Guard</p>
            <p className="ai-panel-card-value" style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
              Privacy Act Aligned
            </p>
            <span className="ai-badge ai-badge-green">APP Sovereign Data</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="hero-section pt-28 md:pt-36 pb-16 md:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="hero-grid-overlay" aria-hidden />

      <div className="ai-container relative">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <ScrollReveal>
              <p className="text-[var(--ai-cyan)] font-semibold tracking-wide text-sm uppercase mb-3">
                Tech2Globe · AI Strategy & Delivery
              </p>
              <h1
                id="hero-heading"
                className="text-2xl sm:text-3xl lg:text-[2.15rem] xl:text-[2.6rem] font-bold leading-[1.2] tracking-tight text-white"
              >
                The AI Consulting Team That Ships{" "}
                <span className="ai-gradient-text">Working Systems</span>, Not Slide Decks
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p className="mt-4 text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
                Tech2Globe helps growing Australian businesses cut through the AI noise and
                actually implement AI that pays for itself — AI readiness audits, custom AI
                strategy, generative AI and LLM integration, workflow automation, and
                AI-powered customer experience, delivered by a team that understands local
                compliance, data sovereignty expectations, and how Australian businesses
                actually operate.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="ai-hero-ctas">
                <a href="#contact" className="ai-btn ai-btn-primary">
                  Book a Free AI Opportunity Audit
                </a>
                <a href="#case-study" className="ai-btn ai-btn-outline-white">
                  View Case Study
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="col-lg-6">
            <ScrollReveal delay={2}>
              <AIPanelMockup />
            </ScrollReveal>
          </div>
        </div>

        <div className="ai-stats-grid">
          {STATS.map((stat, i) => (
            <ScrollReveal
              key={stat.label}
              delay={Math.min(i + 1, 4)}
              className="h-full"
            >
              <div className="ai-stat-card stat-card-gradient">
                <p className="ai-stat-value">
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
                <p className="ai-stat-label">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
