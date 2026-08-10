"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import ScrollReveal from "./ScrollReveal";

const TESTIMONIALS = [
  {
    quote:
      "We didn't want another AI vendor selling us a demo. Tech2Globe actually mapped AI to our operations and showed us the return before we spent a dollar.",
    role: "Operations Director",
    brand: "Logistics & Distribution",
    initials: "OD",
  },
  {
    quote:
      "Having a team that understood Australian privacy requirements from day one meant we didn't have to slow down for a compliance review later.",
    role: "General Manager",
    brand: "Professional Services Firm",
    initials: "GM",
  },
  {
    quote:
      "The chatbot actually sounds like us. Our customers don't feel like they're talking to a generic bot, and our support team finally has room to breathe.",
    role: "Ecommerce Manager",
    brand: "Retail Brand",
    initials: "EM",
  },
];

export default function TestimonialsSection() {
  const [swiper, setSwiper] = useState(null);

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-[var(--ai-bg)] scroll-mt-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="ai-container">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[var(--ai-purple)] font-semibold text-sm uppercase tracking-wide mb-3">
            Client Testimonials
          </p>
          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--ai-ink)]"
          >
            What Our Clients Say About Working With Us
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative max-w-3xl mx-auto" style={{ paddingInline: "1rem" }}>
            <button
              type="button"
              className="ai-testimonial-nav ai-testimonial-prev"
              aria-label="Previous testimonial"
              onClick={() => swiper?.slidePrev()}
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="ai-testimonial-nav ai-testimonial-next"
              aria-label="Next testimonial"
              onClick={() => swiper?.slideNext()}
            >
              <FiChevronRight size={20} />
            </button>

            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              slidesPerView={1}
              loop
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              onSwiper={setSwiper}
              className="ai-testimonial-swiper"
            >
              {TESTIMONIALS.map((t, idx) => (
                <SwiperSlide key={idx}>
                  <article className="ai-testimonial-card ai-glow-border-light">
                    <div
                      style={{ display: "flex", justifyContent: "center", gap: "0.25rem" }}
                      className="mb-4"
                      aria-label="5 star rating"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FiStar key={i} size={16} fill="#f59e0b" stroke="#f59e0b" />
                      ))}
                    </div>
                    <blockquote>
                      <p className="ai-testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                    </blockquote>
                    <div className="ai-testimonial-author">
                      <div className="ai-testimonial-avatar" aria-hidden>
                        {t.initials}
                      </div>
                      <div className="text-start">
                        <cite className="not-italic font-bold text-[var(--ai-ink)]" style={{ display: "block", fontSize: "0.95rem" }}>
                          {t.role}
                        </cite>
                        <span className="text-xs text-[var(--ai-muted)] font-medium">{t.brand}</span>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
