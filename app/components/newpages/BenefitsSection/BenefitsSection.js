"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import {
    FaShieldAlt,
    FaBrain,
    FaLayerGroup,
    FaEye,
    FaUserShield,
    FaBell,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const benefits = [
    {
        icon: FaShieldAlt,
        title: "Proactive Smart Detection",
        description:
            "Our AI-powered video analytics system doesn’t just record, it analyzes live footage in real time to detect threats such as loitering or tailgating for faster response.",
    },
    {
        icon: FaBrain,
        title: "99%+ Deep Learning Accuracy",
        description:
            "Trained on millions of images, the system delivers highly accurate detection of people, vehicles, and objects even in rain, fog, or low-light conditions.",
    },
    {
        icon: FaLayerGroup,
        title: "Effortless Scalability & Integration",
        description:
            "From retail stores to large-scale smart city networks, the platform integrates smoothly with existing infrastructure and scales without friction.",
    },
    {
        icon: FaEye,
        title: "Behavioral Intelligence",
        description:
            "Advanced AI analytics go beyond motion detection by identifying suspicious patterns like unauthorized access, loitering, and geo-fencing violations.",
    },
    {
        icon: FaUserShield,
        title: "Privacy-First Surveillance",
        description:
            "Built with GDPR compliance, role-based access, face masking, and secure on-device processing to ensure responsible surveillance operations.",
    },
    {
        icon: FaBell,
        title: "Instant Alerts & Insights",
        description:
            "Receive real-time alerts through SMS, email, or integrated applications whenever predefined risk thresholds are triggered.",
    },
];

export default function BenefitsSection() {
    return (
        <section className="w-full py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">
                        What Sets Us Apart
                    </h2>

                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                        We ensure your AI-powered video monitoring infrastructure grows
                        according to your operational requirements with scalable and
                        future-ready solutions.
                    </p>
                </div>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    className="pb-14"
                >
                    {benefits.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <SwiperSlide key={index}>
                                <div className="benefit-card">

                                    <Icon />


                                    <h3>
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 leading-7">
                                        {item.description}
                                    </p>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
}