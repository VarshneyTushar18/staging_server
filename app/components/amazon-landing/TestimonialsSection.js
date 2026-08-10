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
      "We'd wasted nearly $40k on unmanaged Amazon ads before Tech2Globe stepped in. Within three months our ACOS dropped from 58% to 21% and we finally understood what we were spending and why.",
    role: "Operations Director",
    brand: "Home & Living Brand, Melbourne",
    initials: "OD",
  },
  {
    quote:
      "Launching on Amazon AU felt overwhelming — GST registration, FBA setup, listing copy, ad strategy. Tech2Globe handled everything end-to-end. We hit Amazon's Choice on our hero SKU within 90 days.",
    role: "Founder",
    brand: "Skincare Brand, Sydney",
    initials: "SB",
  },
  {
    quote:
      "What sets Tech2Globe apart is that they actually know the Australian market. Not just Amazon theory copied from US guides — real local knowledge that shaped our keyword strategy and review approach.",
    role: "Ecommerce Manager",
    brand: "Pet Accessories Brand, Brisbane",
    initials: "PM",
  },
];

export default function TestimonialsSection() {
  const [swiper, setSwiper] = useState(null);

  return (
    <section
      id="testimonials"
      className="amz-testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="amz-container">
        <ScrollReveal className="amz-section-head">
          <p className="amz-label">Client Testimonials</p>
          <h2 id="testimonials-heading" className="amz-title">
            What Australian Amazon Sellers Say About Us
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="amz-testimonials__wrap">
            <button
              type="button"
              className="amz-testimonial-nav amz-testimonial-prev"
              aria-label="Previous testimonial"
              onClick={() => swiper?.slidePrev()}
            >
              <FiChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="amz-testimonial-nav amz-testimonial-next"
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
              className="amz-testimonial-swiper"
            >
              {TESTIMONIALS.map((t) => (
                <SwiperSlide key={t.brand}>
                  <article className="amz-testimonial-card">
                    <div
                      className="amz-testimonial-quote-mark"
                      aria-hidden
                    >
                      &ldquo;
                    </div>

                    <div
                      className="amz-testimonial-stars"
                      aria-label="5 star rating"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FiStar key={i} size={16} fill="currentColor" />
                      ))}
                    </div>

                    <blockquote>
                      <p className="amz-testimonial-quote">{t.quote}</p>
                    </blockquote>

                    <div className="amz-testimonial-author">
                      <div
                        className="amz-testimonial-avatar"
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
        </ScrollReveal>
      </div>
    </section>
  );
}
