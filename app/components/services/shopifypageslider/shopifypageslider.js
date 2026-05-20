"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Style from "./shopifypageslider.module.css";

    const slides = [
        {
            src: "/images/services/service-inner/medium-shot-woman.jpg",
            label: "Health and Beauty"
        },
        {
            src: "/images/services/service-inner/In-manufacturing.png",
            label: "Automotive and Accessories"
        },
        {
            src: "/images/services/service-inner/In-Media-Entertainment.png",
            label: "Entertainment and Media"
        },
        {
            src: "/images/services/service-inner/In-fashion.png",
            label: "Fashion and Apparel"
        },
        {
            src: "/images/services/service-inner/In-retail.png",
            label: "Retail store and e-commerce"
        },
        {
            src: "/images/services/service-inner/In-food-and-beverages.png",
            label: "Food and Beverage"
        }
    ];


export default function ShopifySlider() {
        return (
            <>
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        576: { slidesPerView: 2 },
                        992: { slidesPerView: 3 }
                    }}
                >
                    {slides.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="newindus-slide">
                                <div className={Style.SlideImg}>
                                    <Image
                                        src={item.src}
                                        alt={item.label}
                                        width={500}
                                        height={400}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className={Style.IndusBtn}>{item.label}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        );
    }