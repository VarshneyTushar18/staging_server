"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const steps = [
    {
        title: "Step 1: Business Discovery & Goal Alignment",
        description:
            "We collaborate with your leadership and key stakeholders to uncover reporting needs, define KPIs, and align Tableau strategy with your business priorities—ensuring every dashboard delivers impact.",
    },
    {
        title: "Step 2: Data Assessment & Readiness Check",
        description:
            "Our Tableau experts evaluate your data sources, integrations, and governance practices. We identify gaps, standardize processes, and prepare your ecosystem for a smooth Tableau rollout.",
    },
    {
        title: "Step 3: Blueprint a Scalable BI Architecture",
        description:
            "We design a future-ready business intelligence framework with secure data pipelines, role-based access, and scalable structures—enabling consistent, reliable analytics across the enterprise.",
    },
    {
        title: "Step 4: Dashboard Design & Iteration",
        description:
            "Using Tableau best practices, we craft interactive dashboards that simplify complex data, highlight trends, and drive engagement—refined through iterative feedback to maximize usability.",
    },
    {
        title: "Step 5: Deployment & Performance Optimization",
        description:
            "We ensure seamless Tableau deployment with minimal disruption to your operations. Our optimization approach guarantees speed, accuracy, and compliance at scale.",
    },
    {
        title: "Step 6: Training, Support & Self-Service Enablement",
        description:
            "Beyond implementation, we empower your teams with hands-on Tableau training, documentation, and ongoing support—driving adoption and enabling long-term self-service analytics success.",
    },
];

export default function ProcessSlider() {
    return (
        <div className="process-slider">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                navigation={false}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {steps.map((step, index) => (
                    <SwiperSlide key={index}>
                        <div className="card-step">
                            <h4>{step.title}</h4>
                            <p>{step.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}