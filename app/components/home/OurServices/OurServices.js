"use client";

import { useState } from "react";
import Link from "next/link";
import {
    faLaptopCode,
    faBullhorn,
    faDatabase,
    faHeadset,
    faMicrochip,
    faBroomBall,
    faChartLine,
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import {
    faAmazon,
    faOpencart,
    faAppStoreIos,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./OurServices.module.css";

const services = [
    {
        title: "Software Development",
        icon: faLaptopCode,
        image: "/images/services/software-bg.webp",
        description:
            "At Tech2Globe, we are dedicated to delivering software solutions that meet a business's specific industry needs. Using technologies like Ruby on Rails, PHP, Hybrid App, and Microsoft, we create professional, business-orientated software systems that are high-quality and easily expandable. Our specialists complement our development services by presenting creatively designed structures with compelling graphics. Moreover, our skilled team of web developers has always aimed to write clean code that loads well no matter how many pages a site has.",
        tags: [
            { "label": "Laravel", "link": "/laravel-development-services" },
            { "label": "CodeIgniter", "link": "/codeigniter-development-services" },
            { "label": "WordPress", "link": "/wordPress-development" },
            { "label": "DotNet", "link": "/dot-net-development-services" },
            { "label": "Angular JS", "link": "/angular-js-development-services" },
            { "label": "Node JS", "link": "/node-js-development-services" },
            { "label": "React JS", "link": "/react-js-development-services" },
            { "label": "Ruby on Rails", "link": "/ruby-on-rails-development" },
            { "label": "Drupal", "link": "/drupal-development" }
        ]
    },
    {
        title: "E-commerce",
        icon: faOpencart,
        image: "/images/services/ecom-service-bg.png",
        description:
            "Ecommerce solutions from our team at Tech2Globe are one of a kind. We lead organisations to success in the digital world by offering the best services in web development, marketing, and consultancy. Our specialised focus on services like Magento, WooCommerce, and Shopify guarantees easy online shopping. We offer a comprehensive package for store development and design, product enhancement, marketing strategies, and other related services.",
        tags: [
            { "label": "Magento", "link": "/magento-product-upload-services" },
            { "label": "Bigcommerce", "link": "/bigcommerce-product-upload-services" },
            { "label": "WooCommerce", "link": "/woocommerce-product-upload-services" },
            { "label": "Shopify", "link": "/shopify-product-upload-services" },
            { "label": "Walmart", "link": "/walmart-product-upload-services" },
            { "label": "nopCommerce", "link": "/nop-commerce-development-services" },
            { "label": "Magento", "link": "/magento-development-company" },
            { "label": "Shopify", "link": "/shopify-development-company" },
            { "label": "WooCommerce", "link": "/woocommerce-development" },
            { "label": "eBay", "link": "/ebay-store-design-services" },
            { "label": "BigCommerce", "link": "/bigcommerce-development" },
            { "label": "Volusion", "link": "/volusion-development" },
            { "label": "3Dcart", "link": "/3dcart-development-services" },
            { "label": "Opencart", "link": "/open-cart-development-services" }
        ],
    },
    {
        title: "Digital Marketing",
        icon: faBullhorn,
        image: "/images/services/digital-marketing-bg.png",
        description:
            "We at Tech2Globe have been involved in digital marketing for many years to ensure that our client’s online presence is well enhanced. Our services cover search engine optimisation, pay-per-click, social media marketing, content writing, and online reputation management. Our approach to campaigning is embedded in data that we apply to increase the efficacy of your campaigns and drive your business’ success. Whether you want to attract more visitors, gain more interaction, or drive more sales, our custom-built digital marketing services will help you achieve it.",
        tags: [
            { "label": "Search Engine Optimization", "link": "/search-engine-optimization" },
            { "label": "Pay Per click (PPC)", "link": "/ppc-management-services" },
            { "label": "Social Media Optimization", "link": "/social-media-optimization" },
            { "label": "Content Marketing", "link": "/content-marketing-services" },
            { "label": "Influencer Marketing", "link": "/influencer-marketing-agency" },
            { "label": "Brand Reputation", "link": "/online-reputation-management-services" }
        ],
    },
    {
        title: "Amazon Consulting",
        icon: faAmazon,
        image: "/images/services/amazon-consulting-bg.png",
        description:
            "Whether you are considering expanding your presence on Amazon or have issues with your existing strategy, our Amazon consulting services are intended to meet your needs and solve your problems. The means of collaboration, analysis of competitors, and goals of Amazon promotion help gather the necessary information about your customers and critical factors that influence their decision-making. Like many business owners, the idea of having to manage every aspect of the business is stressful, and that is why our team is here to support and help you understand how Amazon works.",
        tags: [
            { "label": "Amazon Consulting", "link": "/amazon-consulting-services" },
            { "label": "Amazon PPC", "link": "/amazon-ppc-services" },
            { "label": "Amazon Dropshipping", "link": "/amazon-dropshipping" },
            { "label": "Amazon Store", "link": "/store-creation" },
            { "label": "Amazon EBC", "link": "/amazon-ebc-services" },
            { "label": "Vendor Account Management", "link": "/vendor-account-management" },
            { "label": "Amazon Virtual Assistance", "link": "/amazon-virtual-assistance" },
            { "label": "Amazon Transparency", "link": "/amazon-transparency-program" }

        ],
    },
    {
        title: "Data Management",
        icon: faDatabase,
        image: "/images/services/data-management-bg.png",
        description:
            "Tech2Globe provides comprehensive data management services that include data entry and processing, data cleansing and enhancement, data extraction and scraping, as well as data conversion and integration. We guarantee your data is accurate and easily accessible, allowing your business to make the right decisions at the right time. We also provide suitable data protection services and secure management solutions for all your data to give you the most secure management service possible.",
        tags: [
            { "label": "Data Entry", "link": "/data-entry-services" },
            { "label": "Document Processing", "link": "/document-processing-services" },
            { "label": "Data Mining", "link": "/data-mining-services" },
            { "label": "Data Analysis", "link": "/data-analytics-services" },
            { "label": "Data Processing", "link": "/data-processing-services" },
            { "label": "Virtual Assistant Services", "link": "/virtual-assistant-services" },
            { "label": "Product Data Entry", "link": "/data-entry-services" },
            { "label": "Healthcare Data Mining", "link": "/healthcare-data-mining-services" },
            { "label": "Data Cleansing", "link": "/data-cleansing-services" },
            { "label": "Data Extraction", "link": "/data-extraction-services" }
        ],
    },
    {
        title: "BPO/KPO Consulting",
        icon: faHeadset,
        image: "/images/services/bpo-bg.png",
        description:
            "Tech2Globe delivers exceptional backend service solutions through our BPO and KPO offerings, empowering businesses to focus on achieving their goals. We provide customer care solutions, data conversion services, and order management solutions in our BPO sector to achieve value and quality. On the KPO front, we offer high-end, knowledge-intensive services like market research, data analytics, and financial.",
        tags: [
            { "label": "Inbound Call Center", "link": "/inbound-call-center" },
            { "label": "Outbound Call Center", "link": "/outbound-call-center-solutions" },
            { "label": "Telemarketing", "link": "/telemarketing-services" },
            { "label": "Lead Generation", "link": "/lead-generation-services" },
            { "label": "Customer Support", "link": "/customer-support" },
            { "label": "Virtual Assistant", "link": "/virtual-assistant-services" },
            { "label": "CCTV Monitoring", "link": "/cctv-monitoring-services" }
        ],
    },
    {
        title: "IoT Devices Data Support",
        icon: faMicrochip,
        image: "/images/services/iot-bg.png",
        description:
            "Tech2Globe specialises in first-rate data support services, focusing on IoT-connected technology to help businesses understand the ultimate value of IoT devices. By handling the enormous data produced by IoT devices, we can efficiently collect, manage, store, and analyse the data. Furthermore, largely relying on the best professionals and innovative ideas, our experts provide clients with IoT devices developed specifically to meet their needs, as well as offering consultation and prototyping, integration, deployment, and maintenance of the devices, which are up to standard.",
        tags: [
            { "label": "Data Migration Services", "link": "/customer-data-migration-services" },
            { "label": "Project Implementation", "link": "/project-implementation-services" },
            { "label": "Customer Onboarding", "link": "/customer-onboarding-services" },
            { "label": "Chat Support", "link": "/chat-support-services" },
            { "label": "Voice Support", "link": "/voice-support-for-ai-products" },
            { "label": "Reporting And Analytics", "link": "/reporting-and-analytics" }
        ],
    },
    {
        title: "Graphic & Video",
        icon: faBroomBall,
        image: "/images/services/editing-bg.png",
        description:
            "Visual communication is vital for any company, as it contributes to both the creation of your company image and the advertising content. We are aware that clients require different levels of design solutions ranging from standard to complex services. Only some businesses may have avant-garde design solutions, but Tech2Globe is here to offer you only the best choices in graphic design services.",
        tags: [
            { "label": "Photo Editing", "link": "/photo-editing-services" },
            { "label": "Video Editing", "link": "/video-editing" },
            { "label": "Image Enhancement", "link": "/photo-enhancement-services" },
            { "label": "Logo Design", "link": "/graphic-design-services" },
            { "label": "Amazon EBC", "link": "/amazon-ebc-services" },
            { "label": "Real Estate Image Editing", "link": "/real-estate-photo-enhancement" }
        ],
    },
    {
        title: "App Development",
        icon: faAppStoreIos,
        image: "/images/services/app-dev-bg.png",
        description:
            "At Tech2Globe, we aim to deliver quality app development solutions that are unique and flexible enough to suit your business model. Our specialisation covers mobile, web, and cross-functional application development, guaranteeing the best performance and usability. UI/UX design, backend creation, integration, and testing are offered to fulfil set goals of successful apps. Whether you need a high-functioning e-commerce application, an efficient enterprise application, or a purpose-orientated customer-facing mobile application that can always be enhanced, we use state-of-the-art technologies and industry standards to deliver on your vision.",
        tags: [
            { label: "iOS", link: "/ios-app-development" },
            { label: "Android", link: "/android-app-development" },
            { label: "React Native", link: "/react-native-development" },
        ],
    },
    {
        title: "Finance and Accounting",
        icon: faChartLine,
        image: "/images/services/finance-bg.png",
        description:
            "Tech2Globe provides businesses with various financial and accounting solutions to help them prevent costly mistakes and meet regulatory requirements. Our service offerings include bookkeeping, tax consulting & compliance, accounting and review & analysis, planning & forecasting, reporting & budgeting, and controlling. Using superior technologies and our professional experience, we offer efficient and relevant solutions to your exact specifications. Our team assists with careful financial planning for all sorts of clients, from small businesses to large enterprises, thus protecting, enhancing, and facilitating cash flow while ensuring complete transparency.",
        tags: [
            { label: "Bookkeeping", link: "/bookkeeping" },
            { label: "Taxation", link: "/taxation" },
            { label: "Payroll", link: "/payroll" },
        ],
    },
];

export default function OurServices() {
    const [activeIndex, setActiveIndex] = useState(0);
    const prevService = () => {
        setActiveIndex((prev) =>
            prev === 0 ? services.length - 1 : prev - 1
        );
    };

    const nextService = () => {
        setActiveIndex((prev) =>
            prev === services.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <section className={styles.ourServicesSection}>
            <div className="container" data-aos="fade-up" data-aos-duration="800">
                <p className="sub-title text-uppercase">WHAT WE DO</p>
                <h2 className="title">Your Complete IT &amp; ITeS Consulting Partner</h2>

                <div className="row justify-content-between mt-5">
                    {/* Left Sidebar */}
                    <div className="col-lg-4 col-xl-3 mb-3 mb-lg-0">
                        <div className={styles.serviceList}>
                            {services.map((service, index) => (
                                <a
                                    key={index}
                                    href="#!"
                                    onClick={() => setActiveIndex(index)}
                                    className={`${styles.serviceLink} ${activeIndex === index ? styles.active : ""
                                        }`}
                                    aria-label={`${service.title} Service`}
                                >
                                    <FontAwesomeIcon icon={service.icon} /> {service.title}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="col-lg-8 col-xl-8 position-relative">
                        {/* Left Arrow */}
                        <button
                            onClick={prevService}
                            className={styles.arrowBtn + " " + styles.leftArrow}
                            aria-label="Previous Service"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>

                        {/* Right Arrow */}
                        <button
                            onClick={nextService}
                            className={styles.arrowBtn + " " + styles.rightArrow}
                            aria-label="Next Service"
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>

                        <div
                            className={styles.item}
                            style={{
                                backgroundImage: `url(${services[activeIndex].image})`,
                            }}
                        >
                            <div className={styles.serviceOverlay}>
                                <h3>{services[activeIndex].title}</h3>
                                <p>{services[activeIndex].description}</p>
                                <div className="d-flex flex-wrap gap-2">
                                    {services[activeIndex].tags.map((tag, tIndex) => (
                                        <Link
                                            key={tIndex}
                                            href={tag.link}
                                            aria-label={`Learn more about ${tag.label}`}
                                        >
                                            <span className={`${styles.badge} badge p-2 text-bg-light`}>{tag.label}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
