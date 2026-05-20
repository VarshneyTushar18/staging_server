"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServiceSlider({ services }) {
    return (
      
            <div className="row pb-5">
                {/* Slider */}
                <div className="col-md-7">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={15}
                        slidesPerView={1}
                        loop={true}
                        navigation={false}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className="servicecardslide">
                                    <h5>{service.title}</h5>
                                    <p dangerouslySetInnerHTML={{ __html: service.desc }} />
                                    <ul className="mb-0">
                                        {service.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Image */}
                <div className="col-md-5">
                    <Image
                        src="/images/ai-development-servics.webp"
                        alt="Custom AI Development Services"
                        width={500}
                        height={400}
                        className="img-fluid rounded"
                    />
                </div>
            </div>
 
    );
}