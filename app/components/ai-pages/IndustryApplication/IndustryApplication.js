"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function IndustryApplication({ data }) {
  return (
    <div className="row pb-5 industry-applications-section">
    
      {/* Center Image (same as your HTML) */}
      <div className="application-image text-center mb-4">
        <Image
          src="/images/ai-robot.webp"
          alt="Industry Applications"
          width={300}
          height={300}
          className="img-fluid"
        />
      </div>

      {/* Slider */}
      <div className="col-md-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          {data.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="item">
                <div className="row">
                  
                  {/* Left Card */}
                  <div className="col-md-4">
                    <div className="application-card h-100">
                      <h5>{slide.left.title}</h5>
                      <p>{slide.left.desc}</p>
                    </div>
                  </div>

                  {/* Empty Middle Column (IMPORTANT - preserved) */}
                  <div className="col-md-4"></div>

                  {/* Right Card */}
                  <div className="col-md-4">
                    <div className="application-card h-100">
                      <h5>{slide.right.title}</h5>
                      <p>{slide.right.desc}</p>
                    </div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}