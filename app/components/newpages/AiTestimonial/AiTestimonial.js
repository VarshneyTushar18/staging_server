"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        title: "The smartest upgrade we made this year.",
        description:
            "Our factory surveillance went from basic recording to real-time alerts and analytics. We now track intrusions, safety gear, and even employee traffic without expanding our security team.",
        initials: "AM",
        name: "Ankit Mehra",
        designation: "Plant Head, Orion Manufacturing Pvt. Ltd.",
        bgColor: "#212529",
        rating: 5,
    },
    {
        title: "Now we act before problems occur.",
        description:
            "With AI video analytics, we're not just watching footage — we're seeing trends. It helped us reduce safety incidents and improve workflow by spotting risky behaviors early.",
        initials: "PS",
        name: "Priya Sharma",
        designation: "Operations Manager, CityBuild Construction",
        bgColor: "#6c757d",
        rating: 5,
    },
    {
        title: "Fewer false alarms, better security.",
        description:
            "We used to get overwhelmed by irrelevant alerts. Since switching to Tech2Globe, our system filters false positives and focuses only on real threats.",
        initials: "RS",
        name: "Ravi Sinha",
        designation: "Security Head, NextMart Warehousing",
        bgColor: "#0d6efd",
        rating: 5,
    },
    {
        title: "Game-changer for event safety.",
        description:
            "Managing large crowds is now easier with real-time movement tracking and behavior analysis. We can prevent congestion before it becomes a problem.",
        initials: "KM",
        name: "Kunal Mehta",
        designation: "Event Director, LiveSphere",
        bgColor: "#dc3545",
        rating: 4.5,
    },
    {
        title: "Unmatched detection accuracy.",
        description:
            "The system detects people, vehicles, and objects accurately even in foggy weather or at night. Our security workflow has become significantly smarter.",
        initials: "AS",
        name: "Anjali Saxena",
        designation: "CTO, SafeGrid Homes",
        bgColor: "#198754",
        rating: 5,
    },
    {
        title: "Smarter retail operations.",
        description:
            "In just two months, our shrinkage dropped by over 30%. We also gained insights into customer movement and peak shopping hours.",
        initials: "VD",
        name: "Vivek Dahiya",
        designation: "Store Manager, MegaMart",
        bgColor: "#ffc107",
        rating: 5,
    },
];

const RatingStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className="flex items-center gap-1 text-warning  ">
            {Array.from({ length: fullStars }).map((_, index) => (
                <FaStar key={index} className="w-4 h-4" />
            ))}

            {hasHalfStar && <FaStarHalfAlt className="w-4 h-4" />}
        </div>
    );
};

export default function AiTestimonial() {
    return (
        <section>
            <div className="container">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    spaceBetween={24}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                    }}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial-item px-3">
                                <div className="h-100">
                                    <RatingStars rating={item.rating} />

                                    <h6 className="font-bold text-lg text-gray-900 mb-3">
                                        {item.title}
                                    </h6>

                                    <p className="text-muted small mb-6">
                                        “{item.description}”
                                    </p>

                                    <div className="d-flex align-items-center mt-3">
                                        <div
                                            className="rounded-circle text-white text-center fw-bold me-3 flex-shrink-0"
                                            style={{
                                                backgroundColor: item.bgColor,
                                                width: "40px",
                                                height: "40px",
                                                lineHeight: "40px"
                                            }}
                                        >
                                            {item.initials}
                                        </div>

                                        <div>
                                            <div className="font-semibold author text-gray-900">
                                                {item.name}
                                            </div>

                                            <div className="text-sm  designaition text-gray-500">
                                                {item.designation}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}