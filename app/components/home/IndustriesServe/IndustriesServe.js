"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Style from "./IndustriesServe.module.css";
import Image from "next/image";
import './custom.css';
import { FaAngleLeft, FaAngleRight, FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";


const industries = [
    { name: "Manufacturing", img: "/images/homepage/manufacturing.png" },
    { name: "Retail", img: "/images/homepage/retail.png" },
    { name: "Ecommerce", img: "/images/homepage/ecommerce.png" },
    { name: "Logistics", img: "/images/homepage/logistics.png" },
    { name: "Healthcare", img: "/images/homepage/healthcare.png" },
    { name: "Insurance", img: "/images/homepage/insurance.png" },
    { name: "Finance", img: "/images/homepage/finance.png" },
    { name: "Real Estate", img: "/images/homepage/real-estate.png" },
    { name: "Legal", img: "/images/homepage/legal.png" },
    { name: "FMCG", img: "/images/homepage/fmcg.png" },
    { name: "Automobiles", img: "/images/homepage/automobiles.png" },
    { name: "Education", img: "/images/homepage/education.png" },
    { name: "Human Resource", img: "/images/homepage/human-resource.png" },
    { name: "Hospitality & Tourism", img: "/images/homepage/hospitality-tourism.png" },
    { name: "BPO/KPO", img: "/images/homepage/bpo-kpo.png" },
    { name: "Startups", img: "/images/homepage/startups.png" },
];



export default function IndustriesServe() {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <section className={Style.IndustriesServe}>
            <div className="container m-auto" data-="fade-up" data--duration="800">
                <div className="title-section text-center m-auto">
                    <p className="sub-title text-uppercase">INDUSTRIES WE SERVE</p>
                    <h2 className="title">
                        We&apos;re Dedicated to Serve You <strong>All The Time</strong>
                    </h2>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    loop
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                    onSwiper={(swiper) => {
                        setTimeout(() => {
                            if (!swiper.destroyed) {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.destroy();
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }
                        });
                    }}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        1024: { slidesPerView: 7 },
                    }}
                >
                    {industries.map((ind, index) => (
                        <SwiperSlide key={index}>
                            <div className={Style.IndustriesCard}>
                                <div className={Style.IndustriesIcon}>
                                    <Image
                                        width={80}
                                        height={80}
                                        src={ind.img}
                                        alt={`${ind.name} Industry`}
                                        title={`${ind.name} Industry`}
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className={Style.IndustriesTitle}>{ind.name}</h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Arrows */}
                {/* <div className="arrowblock">
                    <div className="custom-prev" ref={prevRef}><FaChevronLeft /></div>
                    <div className="custom-next" ref={nextRef}><FaChevronRight /></div>
                </div> */}
            </div>
        </section>
    );
}