"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import ScrollReveal from "./ScrollReveal";

const TESTIMONIALS = [
  {
    quote:
      "We'd tried three different Shopify freelancers before Tech2Globe. They were the first team that actually understood how our customers check out, not just generic best practice.",
    role: "Founder",
    brand: "Homewares Brand",
    initials: "HB",
  },
  {
    quote:
      "The migration off Squarespace was seamless. No lost rankings, no downtime, and our mobile conversion rate nearly tripled within four months.",
    role: "Ecommerce Manager",
    brand: "Beauty Brand",
    initials: "BB",
  },
  {
    quote:
      "Having a dev team in our own time zone made a real difference. Issues got fixed same-day, not after a 12-hour delay.",
    role: "Operations Lead",
    brand: "Activewear Brand",
    initials: "AB",
  },
];

export default function TestimonialsSection() {
  const [swiper, setSwiper] = useState(null);

  return (
    <section
      id="testimonials"
      className="sp-testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="sp-container">
        <ScrollReveal className="sp-section-head">
          <p className="sp-label">Client Testimonials</p>
          <h2 id="testimonials-heading" className="sp-title">
            What Our Clients Say About Working With Us
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="sp-testimonials__wrap">
            <button
              type="button"
              className="sp-testimonial-nav sp-testimonial-prev"
              aria-label="Previous testimonial"
              onClick={() => swiper?.slidePrev()}
            >
              <FiChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="sp-testimonial-nav sp-testimonial-next"
              aria-label="Next testimonial"
              onClick={() => swiper?.slideNext()}
            >
              <FiChevronRight size={22} />
            </button>

            <Swiper
              modules={[Autoplay, Pagination, Navigation, EffectFade]}
              slidesPerView={1}
              spaceBetween={0}
              loop
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              onSwiper={setSwiper}
              className="sp-testimonial-swiper"
            >
              {TESTIMONIALS.map((t) => (
                <SwiperSlide key={t.brand}>
                  <article className="sp-testimonial-card">
                    <div className="sp-testimonial-quote-mark" aria-hidden>
                      &ldquo;
                    </div>

                    <div className="sp-testimonial-stars" aria-label="5 star rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FiStar key={i} size={16} fill="currentColor" />
                      ))}
                    </div>

                    <blockquote>
                      <p className="sp-testimonial-quote">{t.quote}</p>
                    </blockquote>

                    <div className="sp-testimonial-author">
                      <div className="sp-testimonial-avatar" aria-hidden>
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
        </ScrollReveal>
      </div>
    </section>
  );
}
