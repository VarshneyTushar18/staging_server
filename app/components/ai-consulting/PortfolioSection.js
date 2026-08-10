"use client";

import ScrollReveal from "./ScrollReveal";

const ROWS = [
  {
    brand: "Logistics & Wholesale Distribution",
    service: "AI audit + workflow automation",
    result: "60%",
    resultLabel: "Faster order processing",
  },
  {
    brand: "Professional Services Firm",
    service: "Generative AI knowledge assistant",
    result: "40%",
    resultLabel: "Reduction in research time",
  },
  {
    brand: "Retail & Ecommerce Brand",
    service: "AI customer support chatbot",
    result: "3x",
    resultLabel: "Faster response times",
  },
  {
    brand: "Healthcare Admin Provider",
    service: "Data strategy + AI governance",
    result: "8 wks",
    resultLabel: "Fully compliant AI rollout",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--ai-bg)]" aria-labelledby="portfolio-heading">
      <div className="ai-container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[var(--ai-purple)] font-semibold text-sm uppercase tracking-wide mb-3">
            Client Portfolio
          </p>
          <h2
            id="portfolio-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--ai-ink)]"
          >
            Businesses We&apos;ve Helped Implement AI
          </h2>
        </div>

        <div className="row g-4 justify-content-center">
          {ROWS.map((row, i) => (
            <div key={row.brand} className="col-md-6 col-lg-3 d-flex">
              <ScrollReveal delay={Math.min(i + 1, 3)} className="w-100">
                <article className="ai-portfolio-card ai-glow-border-light d-flex flex-column justify-content-between h-100">
                  <div>
                    <h3 className="font-bold text-[var(--ai-ink)] text-lg mb-2">
                      {row.brand}
                    </h3>
                    <p className="text-sm text-[var(--ai-muted)] leading-snug">
                      <span className="font-semibold text-[var(--ai-ink)]/70">Service: </span>
                      {row.service}
                    </p>
                  </div>
                  <div className="pt-4 mt-4" style={{ borderTop: "1px solid var(--ai-border)" }}>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--ai-muted)] mb-1">
                      Result
                    </p>
                    <p className="text-3xl font-extrabold text-[var(--ai-purple)] m-0">
                      {row.result}
                    </p>
                    <p className="mt-1 text-sm text-[var(--ai-muted)] m-0 font-medium">{row.resultLabel}</p>
                  </div>
                </article>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
