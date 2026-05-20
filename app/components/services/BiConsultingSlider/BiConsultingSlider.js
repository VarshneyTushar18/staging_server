"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';

import Style from "./BiConsultingSlider.module.css";

export default function BiConsultingSlider() {

    const steps = [
        {
            title: 'Step 1: Understand Your Business Goals',
            desc: 'We start by engaging with stakeholders to define reporting objectives, KPIs, and operational challenges—ensuring our <strong>Power BI consulting services</strong> focus on solving the right problems from day one.'
        },
        {
            title: 'Step 2: Assess Your Data Landscape',
            desc: 'Our consultants review your existing data sources, infrastructure, and integrations to identify strengths, gaps, and opportunities—preparing your systems for a seamless <strong>Power BI implementation</strong>.'
        },
        {
            title: 'Step 3: Design a Scalable BI Framework',
            desc: 'We architect a robust and secure <strong>business intelligence framework</strong> that defines data flows, user access levels, and how insights will be delivered consistently across your organization.'
        },
        {
            title: 'Step 4: Develop & Refine Dashboards',
            desc: 'Through agile sprints, we build and iterate Power BI dashboards and reports—focusing on accuracy, usability, and visualization best practices to create meaningful insights for end-users.'
        },
        {
            title: 'Step 5: Deploy with Confidence',
            desc: 'Once thoroughly tested, we roll out the solution in your environment with minimal disruption. Our deployment ensures stability, performance, and compliance for enterprise-ready analytics.'
        },
        {
            title: 'Step 6: Empower & Upskill Your Team',
            desc: 'We provide end-user training, documentation, and ongoing <strong>Power Bi Support</strong> —helping your teams adopt self-service analytics and gain long-term confidence in data-driven decision-making.'
        }
    ];

    return (
        <div className="container w-100 py-5 bg-white">
            <div className="text-center mb-5 px-3">
                <h2 className={Style.Heading3}>
                    Our Proven Approach to Microsoft Power BI Consulting
                </h2>
                <p className="text-muted mx-auto mt-3">
                    At Tech2Globe, we follow a structured, step-by-step methodology to deliver 
                    <strong> Power BI solutions </strong> 
                    that align with your business goals, enhance data-driven decision-making, 
                    and ensure long-term scalability.
                </p>
            </div>

            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
            >
                {steps.map((step, i) => (
                    <SwiperSlide key={i}>
                        <div className={Style.StepCard}>
                            <h3>{step.title}</h3>
                            <p
                                className="text-secondary small lh-base"
                                dangerouslySetInnerHTML={{ __html: step.desc }}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
