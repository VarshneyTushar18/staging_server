"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import styles from "./ClientSection.module.css";
import Image from "next/image";

const row1 = [
  "/images/clients/ministry-of-ayush.webp",
  "/images/clients/ministry-of-defence.webp",
  "/images/clients/ministry-of-jal-shakti.webp",
  "/images/clients/amazon-usa.webp",
  "/images/clients/aquatech.webp",
  "/images/clients/bluebird.webp",
  "/images/clients/cantabil.webp",
  "/images/clients/sales-warp.webp",
  "/images/clients/shikhar-group.webp",
  "/images/clients/snapdeal.webp",
  "/images/clients/sparsh-logo.webp",
  "/images/clients/nike.webp",
  "/images/clients/patanjali.webp",
];

const row2 = [
  "/images/clients/ecommerce-guru.webp",
  "/images/clients/epos.webp",
  "/images/clients/follett.webp",
  "/images/clients/foodora.webp",
  "/images/clients/swiggy.webp",
  "/images/clients/unacademy.webp",
  "/images/clients/wow.webp",
  "/images/clients/wellist.webp",
  "/images/clients/sports.webp",
  "/images/clients/ss-medical.webp",
];

const row3 = [
  "/images/clients/hp.webp",
  "/images/clients/indiaSoft.webp",
  "/images/clients/instas.webp",
  "/images/clients/legend.webp",
  "/images/clients/creative-arcades.webp",
  "/images/clients/deliveryhero.webp",
  "/images/clients/frontier.webp",
  "/images/clients/getkart.webp",
  "/images/clients/wooden-street.webp",
  "/images/clients/luiolui.webp",
];

export default function ClientSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRefs = useRef([]);

  const handlePrev = () => swiperRefs.current.forEach(swiper => swiper?.slidePrev());
  const handleNext = () => swiperRefs.current.forEach(swiper => swiper?.slideNext());

  const swiperSettings = {
    modules: [Navigation, Autoplay],
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    allowTouchMove: true,
    navigation: false,
    breakpoints: {
      0: { slidesPerView: 2 },
      576: { slidesPerView: 2.5 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
    },
  };

  return (
    <section className={styles["client-section"]}>
      <div className="container" data-="fade-up" data--duration={1200}>
        <div className="row justify-content-between">
          {/* Left Section - Sliders */}
          <div className="col-lg-7 order-2 order-lg-1 position-relative">
            {[row1, row2, row3].map((logos, index) => (
              <Swiper
                key={index}
                {...swiperSettings}
                onSwiper={(swiper) => (swiperRefs.current[index] = swiper)}
                className={`mb-3 ${styles["client-carousel"]} ${index === 1 ? styles["row-2-offset"] : ""}`}
              >
                {logos.map((src, i) => (
                  <SwiperSlide key={i} style={{ width: "auto" }}>
                    <div className={styles["client-box"]}>
                      <Image src={src} alt={`Client logo ${i + 1}`} width={200} height={100} loading="lazy" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ))}

            {/* Centralized Navigation */}
            <div className={`${styles["carousel-nav"]} d-flex justify-content-center mt-3`}>
              <button
                ref={prevRef}
                onClick={handlePrev}
                className="btn mx-2"
                aria-label="Previous Slide"
              >
                <FontAwesomeIcon icon={faChevronLeft} size="2xl" />
              </button>
              <button
                ref={nextRef}
                onClick={handleNext}
                className="btn mx-2"
                aria-label="Next Slide"
              >
                <FontAwesomeIcon icon={faChevronRight} size="2xl" />
              </button>
            </div>
          </div>

          {/* Right Section - Title */}
          <div className="col-lg-4 d-flex flex-column align-items-start justify-content-center order-1 order-lg-2 mb-4 mb-lg-0">
            <p className="sub-title text-uppercase">OUR CLIENTS</p>
            <h2 className="title">Partnered with Clients Worldwide</h2>
            <p>
              Over the years, Tech2Globe has served these clients, building the prominence of its
              services and trust.
            </p>
            <a href="/clients" className="button-red mt-2" aria-label="View all Clients">
              VIEW ALL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
