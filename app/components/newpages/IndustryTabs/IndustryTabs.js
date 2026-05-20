"use client";
import { useState } from "react";

const IndustryTabs = () => {
    const [activeTab, setActiveTab] = useState("smartCitiesIndustry");

    return (
        <div
            className="container py-3 py-lg-4"
            data-aos="fade-up"
            data-aos-duration="600"
        >
            <div className="section-header" data-aos="fade-down">
                <h2>
                    Smarter Security – Built for <span>Every Business</span>.
                </h2>

                <p>
                    Tech2Globe believes in customised solutions and not in uniformity.
                    Our AI-powered video monitoring software is built for adaptability and
                    deep customization, engineered to learn and evolve across all
                    industries. Whether in busy cities or isolated mining sites, our
                    AI-powered video analytics system offers security, insights and
                    control where it is most needed.
                </p>
            </div>

            <div className="container industryTabs mt-4 mt-lg-5">
                {/* Tabs */}
                <div
                    className="tabs-container p-0"
                    data-aos="fade-right"
                    data-aos-delay="100"
                >
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`tab ${activeTab === tab.id ? "active" : ""
                                }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.icon}
                            {tab.label}
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="content-container">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`tab-content ${activeTab === tab.id ? "active" : ""
                                }`}
                        >
                            <div className="content-text">
                                <div className="problem-box">
                                    <div className="box-header">
                                        {icons.problem}
                                        <h3>Industry Challenge</h3>
                                    </div>

                                    {tab.problem.map((item, index) => (
                                        <p key={index}>{item}</p>
                                    ))}
                                </div>
                            </div>

                            <div className="content-text">
                                <div className="solution-box">
                                    <div className="box-header">
                                        {icons.solution}
                                        <h3>Our Solution</h3>
                                    </div>

                                    <p>{tab.solution}</p>

                                    <div className="solution-stats">
                                        <p>
                                            <strong>Key Benefits:</strong>
                                        </p>

                                        <div className="stats-grid">
                                            {tab.benefits.map((benefit, index) => (
                                                <div className="stat-item" key={index}>
                                                    {icons.check}
                                                    {benefit}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const tabs = [
    {
        id: "smartCitiesIndustry",
        label: "Smart Cities",
        icon: (
            <i className="fa-solid fa-city me-2"></i>
        ),
        problem: [
            "With urban centers becoming increasingly complex, growing population density, inconsistent traffic patterns and the need of effective emergency response are compelling city administrators to adopt smarter, quicker and more scalable monitoring systems.",
            "Conventional CCTV setups are without any analytical tools and depend on human supervision, resulting in blind spots and slow responses. Maintaining safety and operational efficiency in multiple public areas is a constant challenge.",
        ],
        solution:
            "Tech2Globe enhances urban management with License Plate Recognition and Crowd Density Monitoring, optimize traffic flow, reduce crime, and enforce safety measures effectively.",
        benefits: [
            "Live threat detection",
            "30% less crime potential",
            "Improved traffic management",
            "Data-based city planning",
        ],
    },

    {
        id: "constructionSitesIndustry",
        label: "Construction Sites",
        icon: (
            <i className="fa-solid fa-helmet-safety me-2"></i>
        ),
        problem: [
            "Construction zones are filled with active machinery, costly equipment, and large groups of workers in constant motion. Controlling such active zones carries serious risks of injuries, theft and delayed projects.",
            "Manual oversight of large sites is resource intensive and prone to mistakes. Traditional monitoring systems lacks automated features to stop accidents instantly and struggle to prevent unauthorized entry, increasing risks.",
        ],
        solution:
            "Our systems utilizes slip & fall detection and intrusion detection to protect workers and secure high risk zones from unauthorized entry.",
        benefits: [
            "40% decrease in workplace accidents.",
            "Fewer insurance claims",
            "24/7 site visibility",
            "Advanced access management",
        ],
    },

    {
        id: "retailAndMallsIndustry",
        label: "Retail & Malls",
        icon: (
            <i className="fa-solid fa-store me-2"></i>
        ),
        problem: [
            "Retail businesses are facing rising expectations to provide smooth, safe and data centric customer experience. Losses from shoplifting, slow queue management, and inadequate customer flow can substantially reduce sales and customer trust.",
            "Old systems and disconnected monitoring systems limit store managers’ access to real time customer behavior data, leading to reduced sales and increased security risks.",
        ],
        solution:
            "Our AI video analytics system combines Queue Management with Object Left Detection to optimize customer flow and minimize inventory loss.",
        benefits: [
            "35% decline in store theft",
            "Enhanced retail floor plans",
            "Live crowd monitoring alerts",
            "Increased transaction success rates",
        ],
    },

    {
        id: "manufacturingIndustry",
        label: "Manufacturing",
        icon: (
            <i className="fa-solid fa-gears me-2"></i>
        ),
        problem: [
            "Manufacturing plants need to achieve high productivity levels while maintaining a safe workplace and avoiding downtime. Equipment failures, unnoticed fires, or violation of PPE protocols can stop production and result in harms or significant losses.",
            "Old monitoring systems lack smart alerts and predictive analysis needed for immediate response. This lack of capability puts both employee security and operational efficiency.",
        ],
        solution:
            "Utilizing PPE Detection, Fire & Smoke Monitoring, and AI powered video analytics system, we cut downtime and enforce workplace safety measures.",
        benefits: [
            "99.8% accuracy in detecting safety risks",
            "50% reduction in shutdowns",
            "Instant alerts for incidents",
            "Improved system runtime",
        ],
    },

    {
        id: "miningIndustry",
        label: "Mining Operations",
        icon: (
            <i className="fa-solid fa-mountain me-2"></i>
        ),
        problem: [
            "Mining operations typically involve large, hazardous areas with limited visibility and elevated risks. Safety is a major concern in both surface and underground zones due to heavy equipment movements, limited lighting and dusty environment.",
            "Standard cameras are ineffective at monitoring or responding to wrong-way traffic, high speed vehicles, or faulty equipment instantly, causing accidents and downtime.",
        ],
        solution:
            "We deploy Speed Detection and Wrong-Way Detection systems to avoid incidents and ensure consistent visibility, including underground conditions.",
        benefits: [
            "Low accident rates",
            "Machine performance tracking",
            "Instant alerts in remote zones",
            "Improved underground safety",
        ],
    },

    {
        id: "criticalInfrastructureIndustry",
        label: "Critical Infrastructure",
        icon: (
            <i className="fa-solid fa-shield-halved me-2"></i>
        ),
        problem: [
            "Power plants, water systems, and data centers face continuous risk from both physical and cyber-attacks. Minor security breaches can interrupt operations and result in catastrophic repercussions.",
            "Traditional systems often lack the ability to proactively recognize tampering or unauthorized access. Slow response and failure to follow standards puts critical infrastructure at substantial risk.",
        ],
        solution:
            "Our system integrates Tampering Detection and Intrusion Detection to protect infrastructure, comply with regulations and maintain consistent operations.",
        benefits: [
            "24/7 security monitoring",
            "Instant alerts for security breach",
            "Meeting regulatory requirements",
            "Consistent operational uptime",
        ],
    },
];

const icons = {
    problem: (
        <i className="fa-solid fa-circle-exclamation me-2"></i>
    ),

    solution: (
        <i className="fa-solid fa-lightbulb me-2"></i>
    ),

    check: (
        <i className="fa-solid fa-circle-check me-2"></i>
    ),
};

export default IndustryTabs;