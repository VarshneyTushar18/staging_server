"use client";

import { FiCheck } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const POINTERS = [
  "Boards feel pressure to “do something with AI,” but most teams are stuck between chatbot demos and vendor pitches.",
  "Leaders pulling ahead quietly automate back-office work and embed AI into service and sales.",
  "They use their own data — safely and compliantly — to make faster decisions.",
  "Tech2Globe builds AI around how your business actually operates: readiness, automation, generative AI, and tool integration.",
  "You get measurable results in months — not an endless pilot program.",
];

export default function AboutSection() {
  return (
    <section
      id="opportunity"
      className="py-20 md:py-28 scroll-mt-24 bg-[var(--ai-bg)]"
      aria-labelledby="opportunity-heading"
    >
      <div className="ai-container">
        <div className="row g-5 align-items-stretch">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <ScrollReveal>
              <p className="text-[var(--ai-purple)] font-semibold text-sm uppercase tracking-wide mb-3">
                The AI Opportunity
              </p>
              <h2
                id="opportunity-heading"
                className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[var(--ai-ink)]"
              >
                Every Business Is Talking About AI —{" "}
                <span className="ai-gradient-text-light">Few Have Actually Implemented It</span> Properly
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p className="mt-4 text-[var(--ai-muted)] leading-relaxed text-base">
                Boards and leadership teams are under pressure to &quot;do something with
                AI,&quot; but most businesses are stuck between generic chatbot demos and
                vendor pitches that don&apos;t map to how their operations actually run.
                Meanwhile the businesses pulling ahead are the ones quietly automating
                back-office work, embedding AI into customer service and sales, and using
                their own data — safely and compliantly — to make faster decisions.
              </p>
              <p className="mt-4 text-[var(--ai-muted)] leading-relaxed text-base">
                Tech2Globe builds AI strategy and AI systems around how your business
                actually operates — data readiness, workflow automation, safe and compliant
                use of generative AI, and integration with the tools your team already uses
                — so you get measurable results in months, not an endless pilot program.
              </p>
            </ScrollReveal>
          </div>

          <div className="col-lg-6">
            <ScrollReveal delay={1} className="h-full">
              <div className="ai-split-card ai-glow-border-light h-full d-flex flex-column justify-content-center">
                <p className="text-xs font-bold text-[var(--ai-purple)] uppercase tracking-wider mb-4">
                  What changes when AI is done properly
                </p>
                <ul style={{ listStyleType: "none", paddingLeft: 0, margin: 0 }} className="space-y-4">
                  {POINTERS.map((text, i) => (
                    <li key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }} className="mb-3">
                      <span className="mt-1 w-6 h-6 rounded-md bg-[var(--ai-purple-soft)] text-[var(--ai-purple)] d-grid place-items-center flex-shrink-0" style={{ display: "grid", placeItems: "center" }}>
                        <FiCheck size={14} strokeWidth={3} aria-hidden />
                      </span>
                      <p className="text-sm text-[var(--ai-muted)] leading-relaxed m-0">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
