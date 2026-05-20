"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FutureSlider({ data }) {
  return (
    <div className="image-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={15}
        navigation={false}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="future-card  h-100">
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}