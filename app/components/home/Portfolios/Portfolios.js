"use client";

import { useRef,useEffect,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Portfolios.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faExpand } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const portfolioItems = [
    {
        title: "Cantabil",
        img: "/images/portfolio-images/cantabilshop.com__.webp",
        description: "The CANTABIL brand offers a complete range of formal, party, casual & ultracasual clothing for Men and Women.",
        link: "https://www.cantabilinternational.com/",
    },
    {
        title: "Blue bird solar",
        img: "/images/portfolio-images/bluebirdsolar.com__.webp",
        description: "Bluebird Solar is one of India's leading solar panel manufacturers.",
        link: "https://bluebirdsolar.com/",
    },
    {
        title: "Flawless Cleaning",
        img: "/images/portfolio-images/flawlesscleaning.co.nz__.webp",
        description: "Sparkle like royalty with Flawless - premier cleaning services for impeccable shine.",
    },
    {
        title: "Frontier Biscuit",
        img: "/images/portfolio-images/frontierbiscuit.com__.webp",
        description: "Nutritious and crispy, our products have found a home in many hearts across the whole country.",
        link: "https://frontierbiscuit.com/",
    },
    {
        title: "Kartar truck lines",
        img: "/images/portfolio-images/kartartrucklines.com__.webp",
        description: "The trusted ally for all your trucking needs.",
        link: "https://kartartrucklines.com/",
    },
    {
        title: "Sparsh Group",
        img: "/images/portfolio-images/sparshgroup.in_sparsh-group__.webp",
        description: "Sparsh is a young, progressive and fast-growing group having vision to provide complete packaging solutions.",
        link: "https://sparshgroup.in/",
    },
];

export default function PortfolioSection() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperReady, setSwiperReady] = useState(false);
    useEffect(() => {
        // allow refs to be attached before initializing navigation
        setSwiperReady(true);
    }, []);
    return (
        <section id="service-portfolio" className={styles.ServicePortfolio}>
            <div className={`container ${styles.mContainer}`}>
                <div className="row p-3 pb-0">
                    <div className="col-md-6 col-lg-4 col-xxl-3">
                        <p className="sub-title text-uppercase">OUR PORTFOLIO</p>
                        <h2 className={styles.title}>A showcase of our best work</h2>
                        <p className={`text-muted ${styles.portfolioDescription}`}>
                            For its lifetime, Tech2Globe has delivered hundreds of cost-effective and high-quality software solutions for a wide range of industries and domains, including consumer and business software development, e-commerce, retail, manufacturing, real estate, community services and many others.
                        </p>
                    </div>
                    <div className="col-md-6 col-lg-8 col-xxl-9">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            loop={true}
                            spaceBetween={20}
                            slidesPerView={2}
                            slidesPerGroup={2}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1.5, slidesPerGroup: 1 },
                                768: { slidesPerView: 2, slidesPerGroup: 2 },
                                1200: { slidesPerView: 4.5, slidesPerGroup: 2 },
                            }}
                        >
                            {portfolioItems.map((item, idx) => (
                                <SwiperSlide key={idx} className={styles.slideItem}>
                                    <div className={styles.card}>
                                        <a
                                            href={item.img}
                                            className="glightbox"
                                            data-glightbox="project-gallery"
                                            data-title={item.title}
                                        >
                                            <Image width={200} height={250} src={item.img} className="img-fluid" alt={item.title} />
                                            <div className={`${styles.cardImgOverlay} d-flex flex-column justify-content-center align-items-center`}>
                                                <FontAwesomeIcon icon={faExpand} className={styles.expandIcon} />
                                            </div>
                                        </a>
                                        <div className={`glightbox-desc ${styles.gslideDesc}`}>
                                            <p>{item.description}</p>
                                            {item.link && (
                                                <a href={item.link} className="btn btn-danger text-white text-decoration-none">
                                                    View Project
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className="row p-3 pt-md-1 align-items-center">
                    <div className="col-md-6 col-lg-4 col-xxl-3 text-center text-md-start mt-2 mt-md-0 order-2 order-md-1">
                        <a href="/portfolio" className="button-red m-0">
                            VIEW ALL
                        </a>
                    </div>
                    <div className={`${styles.portfolioCustomNav} col-md-6 col-lg-8 col-xxl-9 m-auto text-center order-1 order-md-2 d-flex justify-content-center gap-2`}>
                        <button ref={prevRef} className="p-0" aria-label="Previous">
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button ref={nextRef} className="p-0" aria-label="Next">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
