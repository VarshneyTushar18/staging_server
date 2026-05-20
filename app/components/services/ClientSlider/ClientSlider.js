"use client";
import { useRef, useState, useEffect } from "react";
import Style from "./ClientSlider.module.css";
import Image from "next/image";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ClientSlider({ testimonials }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // State will store DOM nodes *after* mount
  const [navReady, setNavReady] = useState(false);

  useEffect(() => {
    // When refs are attached, enable Swiper navigation
    if (prevRef.current && nextRef.current) {
      setNavReady(true);
    }
  }, []);

  return (
    <div className="py-5 bg-light relative">
      <div className={`${Style.ClientSlider} text-center container`}>
        <div className="testimonial-outer relative">
          <h2 className="main-heading text-danger pb-5">
            Clients <span>Testimonial</span>
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: false }}
            navigation={
              navReady
                ? {
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }
                : false
            }
            onSwiper={(swiper) => {
              if (navReady) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 1, spaceBetween: 25 },
              992: { slidesPerView: 1, spaceBetween: 30 },
              1400: { slidesPerView: 1, spaceBetween: 40 },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className={`${Style.TestimonialSlide} testimonial-slide text-center px-3`}
                >
                  <span className="quote-outer d-block mb-3">
                    <Image
                      src={item.quote}
                      alt="quote icon"
                      width={60}
                      height={60}
                      className="mx-auto"
                    />
                  </span>
                  <p className="mb-3">{item.text}</p>
                  <h3 className="text-dark fw-semibold">- {item.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            ref={prevRef}
            className={`${Style.navBtn} ${Style.prevBtn}`}
            aria-label="Previous"
          >
            <FaChevronLeft size={20} />
          </button>

          <button
            ref={nextRef}
            className={`${Style.navBtn} ${Style.nextBtn}`}
            aria-label="Next"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
