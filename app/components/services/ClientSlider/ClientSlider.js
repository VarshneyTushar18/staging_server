"use client";
import { useRef, useState, useEffect } from "react";
import Style from "./ClientSlider.module.css";
import Image from "next/image";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaStar, FaMapMarkerAlt, FaQuoteLeft } from "react-icons/fa";

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
              576: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 1, spaceBetween: 25 },
              992: { slidesPerView: 2, spaceBetween: 28 },
              1200: { slidesPerView: 2, spaceBetween: 32 },
              1400: { slidesPerView: 2, spaceBetween: 36 },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={`${Style.TestimonialCard} h-100`}>
                  {/* Quote Icon */}
                  <div className={Style.QuoteIcon}>
                    <FaQuoteLeft size={28} />
                  </div>

                  {/* Star Rating */}
                  <div className={Style.StarRow}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        size={20}
                        className={
                          star <= (item.rating || 5)
                            ? Style.StarFilled
                            : Style.StarEmpty
                        }
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className={Style.TestimonialText}>{item.text}</p>

                  {/* Divider */}
                  <div className={Style.CardDivider}></div>

                  {/* Client Info */}
                  <div className={Style.ClientInfo}>
                    {/* Avatar / Quote Image */}
                    {item.quote && (
                      <div className={Style.AvatarWrap}>
                        <Image
                          src={item.quote}
                          alt={item.name || "client"}
                          width={52}
                          height={52}
                          className={Style.AvatarImg}
                        />
                      </div>
                    )}

                    <div className={Style.ClientMeta}>
                      <h3 className={Style.ClientName}>{item.name}</h3>

                      {/* Company Location */}
                      {(item.location || item.company) && (
                        <div className={Style.ClientLocation}>
                          <FaMapMarkerAlt size={13} className={Style.LocationIcon} />
                          <span>{item.location || item.company}</span>
                        </div>
                      )}
                    </div>
                  </div>
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
