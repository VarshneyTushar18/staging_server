"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Style from "./ModelingRendering.module.css";

export default function FurnitureModelingSlider({ productsmodeling }) {
    return (
        <div className={Style.ContentDiv}>
            <h2 className="pt-3">3D Furniture Modeling for Different Products and Styles</h2>

            <p>
                We create 3D models for a wide range of furniture and home-related products.
            </p>

            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <Swiper
                        className={Style.Slider}
                        modules={[Autoplay, Pagination]}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{ delay: 3000 }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: { slidesPerView: 1, slidesPerGroup: 1, pagination: false },
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 4 },
                        }}
                    >
                        {productsmodeling?.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className={Style.ProductCard}>
                                    <div className={Style.ImageWrapper}>
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={300}
                                            height={200}
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className={Style.Title}>{item.title}</div>
                                    {item.description ? (
                                        <p className={Style.Description}>{item.description}</p>
                                    ) : null}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
