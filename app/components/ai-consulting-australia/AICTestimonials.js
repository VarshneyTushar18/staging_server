"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import AICScrollReveal from "./AICScrollReveal";

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

export default function AICTestimonials() {
  const [swiper, setSwiper] = useState(null);

  return (
    <section
      id="testimonials"
      className="aic-testimonials"
      aria-labelledby="aic-testimonials-heading"
    >
      <div className="aic-container">
        <AICScrollReveal className="aic-section-head">
          <p className="aic-label">Client Testimonials</p>
          <h2 id="aic-testimonials-heading" className="aic-title aic-title--light">
            What Australian Businesses Say About Us
          </h2>
          <span className="aic-cyan-bar" />
        </AICScrollReveal>

        <AICScrollReveal>
          <div className="aic-testimonials__wrap" style={{ position: "relative" }}>
            <button
              type="button"
              className="aic-testimonial-nav aic-testimonial-prev"
              aria-label="Previous testimonial"
              onClick={() => swiper?.slidePrev()}
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="aic-testimonial-nav aic-testimonial-next"
              aria-label="Next testimonial"
              onClick={() => swiper?.slideNext()}
            >
              <FiChevronRight size={20} />
            </button>

            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              slidesPerView={1}
              spaceBetween={0}
              loop
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              onSwiper={setSwiper}
              className="aic-testimonial-swiper"
            >
              {TESTIMONIALS.map((t) => (
                <SwiperSlide key={t.brand}>
                  <article className="aic-testimonial-card">
                    <div
                      className="aic-testimonial-quote-mark"
                      aria-hidden
                    >
                      &ldquo;
                    </div>

                    <div
                      className="aic-testimonial-stars"
                      aria-label="5 star rating"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FiStar key={i} size={16} fill="currentColor" />
                      ))}
                    </div>

                    <blockquote>
                      <p className="aic-testimonial-quote">{t.quote}</p>
                    </blockquote>

                    <div className="aic-testimonial-author">
                      <div
                        className="aic-testimonial-avatar"
                        aria-hidden
                      >
                        {t.initials}
                      </div>
                      <div>
                        <cite>{t.role}</cite>
                        <span>{t.brand}</span>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </AICScrollReveal>
      </div>
    </section>
  );
}
