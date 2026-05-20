"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import styles from "./CaseStudies.module.css";

const caseStudies = [
    {
        href: "/case-study/ellie-bianca",
        image: "/images/case-studies/software-case-study-bg.png",
        alt: "Ellie Bianca website redesign and rebuilding case study",
        title: "Rebuilt & Redesign - Ellie Bianca",
        category: "Software Development",
    },
    {
        href: "/case-study/consult-for-ppp",
        image: "/images/case-studies/guest-posting-blog-writing-case-study.png",
        alt: "PPP consulting and digital marketing strategies case study",
        title: "Consult for PPP",
        category: "Digital Marketing",
    },
    {
        href: "/case-study/online-business-growth",
        image: "/images/case-studies/ecommerce-case-study-bg.png",
        alt: "Online business growth strategies case study",
        title: "Online Business Growth",
        category: "Ecommerce",
    },
    {
        href: "/case-study/restaurant-menu-data-entry-for-delivery-hero",
        image: "/images/case-studies/restaurant-menu-data-entry-case-study.png",
        alt: "Restaurant menu data entry for Delivery Hero case study",
        title: "Restaurant Menu Data Entry for Delivery Hero",
        category: "Data Management",
    },
];

export default function CaseStudies() {
    return (
        <section className={styles.caseStudiesSection}>
            <div className="container m-auto text-center">
                <div className="title-section text-center m-auto">
                    <p className="sub-title text-uppercase">CASE STUDIES</p>
                    <h2 className="title">Experiences of Our Global Clients</h2>
                </div>

                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    spaceBetween={0}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        600: { slidesPerView: 3 },
                        1000: { slidesPerView: 4 },
                    }}
                    className="mt-4"
                >
                    {caseStudies.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.caseStudyCard}>
                                <Link
                                    href={item.href}
                                    aria-label={`Read detailed case study on ${item.title}`}
                                    className="stretched-link"
                                />
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    width={500}
                                    height={300}
                                    className="img-fluid h-100"
                                    loading="lazy"
                                />
                                <div className={styles.cardOverlay}>
                                    <h5 className={styles.caseStudyTitle}>{item.title}</h5>
                                    <span className={styles.badgeCategory}>{item.category}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Link
                    href="/case-studies"
                    className="button-red mt-4 text-center d-inline-block"
                    aria-label="View all case studies showcasing our successful projects"
                >
                    VIEW ALL
                </Link>
            </div>
        </section>
    );
}
