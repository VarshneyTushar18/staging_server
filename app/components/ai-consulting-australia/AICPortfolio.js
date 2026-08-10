"use client";

import AICScrollReveal from "./AICScrollReveal";

const CARDS = [
  {
    icon: "🚚",
    category: "Logistics & Wholesale Distribution",
    service: "AI audit + workflow automation",
    result: "60% faster order processing",
  },
  {
    icon: "💼",
    category: "Professional Services Firm",
    service: "Generative AI knowledge assistant",
    result: "40% reduction in research time",
  },
  {
    icon: "🛍️",
    category: "Retail & Ecommerce Brand",
    service: "AI customer support chatbot",
    result: "3x faster response times",
  },
  {
    icon: "🏥",
    category: "Healthcare Admin Provider",
    service: "Data strategy + AI governance",
    result: "Fully compliant AI rollout in 8 weeks",
  },
];

export default function AICPortfolio() {
  return (
    <section className="aic-portfolio" aria-labelledby="aic-portfolio-heading">
      <div className="aic-container">
        <AICScrollReveal className="aic-section-head">
          <p className="aic-label">Client Results</p>
          <h2 id="aic-portfolio-heading" className="aic-title">
            AI Implementations Across Australian Sectors
          </h2>
          <span className="aic-cyan-bar" />
        </AICScrollReveal>

        <div className="aic-portfolio__grid">
          {CARDS.map((card, i) => (
            <AICScrollReveal key={card.category} delay={Math.min(i + 1, 4)}>
              <div className="aic-portfolio-card">
                <span className="aic-portfolio-card__icon">{card.icon}</span>
                <p className="aic-portfolio-card__category">{card.category}</p>
                <p className="aic-portfolio-card__service">{card.service}</p>
                <p className="aic-portfolio-card__result">{card.result}</p>
              </div>
            </AICScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
