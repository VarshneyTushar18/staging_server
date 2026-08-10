"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./custom.css";

export default function TestimonialSlider({ testimonials }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      speed={2000}
      className="testimonial-swiper"
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="d2c_card_wrapper">
            <img
              src="/images/landingpage/Stars.webp"
              alt="reviews"
              className="starimg"
            />

            <h5>{item.review}</h5>

            <div className="profile-block d-flex gap-2 align-items-center">
              <div
                className="profile-avatar"
                style={{ backgroundColor: item.color }}
              >
                {item.initials}
              </div>

              <div className="profile-block-name">
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}