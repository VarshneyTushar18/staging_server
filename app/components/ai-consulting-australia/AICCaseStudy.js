"use client";

import AICScrollReveal from "./AICScrollReveal";

const ACTIONS = [
  "Ran a full AI Opportunity Audit across sales, support and operations workflows",
  "Built a custom AI assistant to triage and draft responses to incoming customer emails",
  "Automated order-entry and stock-reconciliation workflows using generative AI and existing ERP data",
  "Delivered a live AI-powered reporting dashboard replacing manual spreadsheet reporting",
];

const METRICS = [
  { value: "60%", label: "Faster order processing" },
  { value: "24h→2h", label: "Customer email response time" },
  { value: "3 days→same-day", label: "Reporting turnaround" },
  { value: "1.5 FTE", label: "Manual work reallocated to higher-value tasks" },
];

export default function AICCaseStudy() {
  return (
    <section
      id="case-study"
      className="aic-case-study"
      aria-labelledby="aic-case-heading"
    >
      <div className="aic-container">
        <AICScrollReveal className="aic-section-head">
          <p className="aic-label">Case Study</p>
          <h2 id="aic-case-heading" className="aic-title">
            From Manual Back-Office to 60% Faster Order Processing
          </h2>
          <span className="aic-cyan-bar" />
        </AICScrollReveal>

        <div className="aic-case-study__grid">
          <AICScrollReveal>
            <span className="aic-case-study__tag">
              Logistics &amp; Wholesale Distribution
            </span>

            <h3 className="aic-case-study__title">
              Drowning in manual work, email chaos and spreadsheet reporting
            </h3>

            <p className="aic-case-study__context">
              A national logistics and wholesale distribution business
              approached Tech2Globe with an operations team drowning in manual
              order entry, email-based customer support and spreadsheet-based
              reporting that took days to compile.
            </p>

            <p className="aic-case-study__actions-title">What we did</p>
            <div className="aic-case-study__actions">
              {ACTIONS.map((action) => (
                <div key={action} className="aic-case-study__action">
                  {action}
                </div>
              ))}
            </div>
          </AICScrollReveal>

          <AICScrollReveal delay={1}>
            <div className="aic-case-study__results">
              <p className="aic-case-study__results-title">
                Measurable Results
              </p>
              <div className="aic-metrics">
                {METRICS.map((m) => (
                  <div key={m.label} className="aic-metric">
                    <span className="aic-metric__value">{m.value}</span>
                    <span className="aic-metric__label">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </AICScrollReveal>
        </div>
      </div>
    </section>
  );
}
