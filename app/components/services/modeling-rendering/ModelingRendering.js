"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Style from "./ModelingRendering.module.css"; // make your own CSS module

export default function FurnitureModelingSlider({ productsmodeling }) {
    return (
        <div className={Style.ContentDiv}>
            <h2 className="pt-3">3D Furniture Modeling for Every Style and Product</h2>

            <p>
                We create detailed, high-quality 3D models of furniture and home decor for all types
                of products and categories. Whether you&apos;re selling modern sofas or vintage tables,
                our realistic models help your items stand out online. With a strong focus on visual
                appeal, we make sure your products look their best and support your marketing and
                sales goals.
            </p>

            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <Swiper
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
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}