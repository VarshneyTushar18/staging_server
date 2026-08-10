"use client";

import ScrollReveal from "./ScrollReveal";

const ACTIONS = [
  "Ran a full AI Opportunity Audit across sales, support and operations workflows",
  "Built a custom AI assistant to triage and draft responses to incoming customer emails",
  "Automated order-entry and stock-reconciliation workflows using generative AI and existing ERP data",
  "Delivered a live AI-powered reporting dashboard replacing manual spreadsheet reporting",
];

const RESULTS = [
  { value: "60%", label: "Order processing time reduced" },
  { value: "< 2 hrs", label: "Email response (from 24 hrs)" },
  { value: "Same-day", label: "Reporting (from 3 days)" },
  { value: "1.5 FTE", label: "Manual work reallocated" },
];

export default function CaseStudySection() {
  return (
    <section
      id="case-study"
      className="py-20 md:py-28 scroll-mt-24"
      aria-labelledby="case-heading"
    >
      <div className="ai-container">
        <ScrollReveal className="max-w-3xl mb-12">
          <p className="text-[var(--ai-purple)] font-semibold text-sm uppercase tracking-wide mb-3">
            Case Study
          </p>
          <h2
            id="case-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--ai-ink)]"
          >
            From Manual Back-Office to{" "}
            <span className="ai-gradient-text-light">60% Faster Order Processing</span>
          </h2>
          <p className="mt-4 text-[var(--ai-muted)] leading-relaxed text-base">
            A national logistics and wholesale distribution business approached Tech2Globe
            with an operations team drowning in manual order entry, email-based customer
            support and spreadsheet-based reporting that took days to compile.
          </p>
        </ScrollReveal>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7">
            <ScrollReveal className="h-full">
              <div className="ai-split-card ai-glow-border-light h-full d-flex flex-column justify-content-center">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--ai-purple)] mb-4">
                  What we did
                </h3>
                <ul style={{ listStyleType: "none", paddingLeft: 0, margin: 0 }} className="space-y-3">
                  {ACTIONS.map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }} className="mb-3">
                      <span className="text-[var(--ai-purple)] font-bold mt-0.5" style={{ fontSize: "1.1rem", lineHeight: "1" }}>→</span>
                      <p className="text-sm text-[var(--ai-muted)] leading-relaxed m-0">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <div className="col-lg-5">
            <ScrollReveal delay={1} className="h-full">
              <div
                className="ai-glow-border h-full"
                style={{
                  background: "var(--ai-gradient-cosmic)",
                  borderRadius: "var(--ai-radius-lg)",
                  padding: "2.25rem 2rem",
                  color: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#B6A2BB] mb-4">
                  Results in 4 months
                </h3>
                <div className="row g-3">
                  {RESULTS.map((r, i) => (
                    <div key={i} className="col-6">
                      <div
                        className="h-full"
                        style={{
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                          borderRadius: "1rem",
                          padding: "1.25rem",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "var(--ai-font-heading)",
                            fontSize: "1.8rem",
                            fontWeight: "800",
                            margin: 0,
                            color: "var(--ai-cyan)",
                            lineHeight: "1.1",
                          }}
                        >
                          {r.value}
                        </p>
                        <p
                          className="m-0 mt-2 text-white/70"
                          style={{ fontSize: "0.75rem", lineHeight: "1.3", fontWeight: "500" }}
                        >
                          {r.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
