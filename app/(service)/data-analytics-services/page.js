import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import {
    FaBullhorn,
    FaChartBar,
    FaChartLine,
    FaCheckCircle,
    FaCogs,
    FaDatabase,
    FaDownload,
    FaHeartbeat,
    FaIndustry,
    FaLaptopCode,
    FaLayerGroup,
    FaLightbulb,
    FaBriefcase,
    FaRocket,
    FaSearch,
    FaShieldAlt,
    FaShoppingCart,
    FaSyncAlt,
    FaTruck,
    FaUniversity,
    FaUsers,
    FaUsersCog,
} from "react-icons/fa";

export const metadata = {
    title: "Data Analytics Services | Business Data Analytics Company",
    description:
        "Get reliable data analytics services to turn business data into actionable insights. Tech2Globe provides data analysis, reporting, visualization and more.",
    keywords: [
        "Data analytic services provider",
        "Data analytics experts",
        "Data analytics support services",
        "Big data analytics solutions",
    ],
    openGraph: {
        title: "Data Analytics Services | Business Data Analytics Company",
        siteName: "Tech2Globe Web Solutions LLP",
        description:
            "Get reliable data analytics services to turn business data into actionable insights. Tech2Globe provides data analysis, reporting, visualization and more.",
        url: "https://stagenew.tech2globe.tech/data-analytics-services",
    },
    twitter: {
        card: "summary_large_image",
        title: "Data Analytics Services | Business Data Analytics Company",
        description:
            "Get reliable data analytics services to turn business data into actionable insights. Tech2Globe provides data analysis, reporting, visualization and more.",
    },
    alternates: {
        canonical: "https://stagenew.tech2globe.tech/data-analytics-services",
    },
};

const pageHeaderData = {
    title: "Data Analytics Services for Smarter Business Decisions",
    description:
        "Tech2Globe provides data analytics services that help businesses organize, analyze and understand their data. We turn complex datasets into clear reports, dashboards and actionable insights that support better planning, performance tracking and decision making.",
    buttonText: "Book Your Consultation",
    buttonLink: "/contact-us",
    backgroundImage: "/images/services/data-mining-services-banner.jpg",
};

const resources = [
    { id: 1, name: "Restaurant Menu Entry Services", path: "/restaurant-menu-entry-services" },
    { id: 2, name: "Financial Data Entry Services", path: "/financial-data-entry-services" },
    { id: 3, name: "Catalog Management", path: "/catalog-management-services" },
    { id: 4, name: "Data Processing Services", path: "/data-processing-services" },
    { id: 5, name: "Data Product Entry", path: "/product-data-entry-services" },
];

const usefulLinks = [
    { id: 6, name: "Food Industries", path: "/food-industries-services" },
    { id: 7, name: "Non-profit Organization", path: "/non-profit-organizations-services" },
    { id: 8, name: "Medical And Health", path: "/medical-and-health-services" },
    { id: 9, name: "Translation Firms", path: "/translation-firms-services" },
];

const sidebarSections = [
    { heading: "Resources", links: resources },
    { heading: "Industries We Serve", links: usefulLinks },
];

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "They have excellent service and management, this is honest review after a month of experience with them, team is hardworking, knowledgeable and do every task on time. I hope they continue to deliver me same output.",
        name: "Roxel- Account Management India",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Excellent Team, good results in sales",
        name: "Andriana- Amazon Sponsored Ads USA",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Excellent service by Tech2globe, brilliant service and hardworking",
        name: "Neo Global- Vendor Account Management UK",
    },
    {
        id: 4,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Courteous, professional, quality work, best bang for your buck",
        name: " Medi Hub- Amazon Store Creations USA",
    },
    {
        id: 5,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Very professional and creative team. They patiently worked on changes I asked for and delivered on time. Thank you.",
        name: "Teliamed- Amazon Enhance Brand Content USA",
    },
];

const faqs = [
    {
        id: "One",
        question: "What are data analytics services?",
        answer:
            "Data analytics services help businesses collect, prepare, analyze and interpret data to identify trends, measure performance and generate actionable insights.",
    },
    {
        id: "Two",
        question: "What does a data analytics company do?",
        answer:
            "A data analytics company helps businesses work with data from different sources, clean and analyze that data, and present the findings through reports, dashboards and visualizations.",
    },
    {
        id: "Three",
        question: "What types of data can you analyze?",
        answer:
            "Data analytics projects can involve sales, customer, financial, marketing, ecommerce, operational, product, workforce and other business data.",
    },
    {
        id: "Four",
        question: "How can data analytics help a business?",
        answer:
            "Data analytics can help businesses understand performance, identify trends, measure KPIs, find operational issues, understand customers and support data-driven decisions.",
    },
    {
        id: "Five",
        question: "Do you provide ecommerce data analytics?",
        answer:
            "Yes. Ecommerce data can be analyzed to understand sales, products, customers, orders, revenue, marketing performance and other ecommerce metrics.",
    },
    {
        id: "Six",
        question: "Can you create dashboards and reports?",
        answer:
            "Yes. Data analytics projects can include custom reports and dashboards designed around the KPIs and information required by the business.",
    },
    {
        id: "Seven",
        question: "What is the difference between data analytics and data mining?",
        answer:
            "Data analytics focuses on examining data to generate insights and support decisions. Data mining focuses more specifically on discovering patterns and relationships within large datasets.",
    },
    {
        id: "Eight",
        question: "Do you provide ongoing data analytics support?",
        answer:
            "Yes. Analytics support can be structured as a one-time project or an ongoing engagement depending on the business requirement.",
    },
    {
        id: "Nine",
        question: "How do you ensure data accuracy?",
        answer:
            "Data can be checked and prepared through processes such as validation, duplicate identification, consistency checks, missing-value checks and data cleaning before analysis.",
    },
    {
        id: "Ten",
        question: "How long does a data analytics project take?",
        answer:
            "The timeline depends on the volume and complexity of the data, number of data sources, analytical requirements and reporting needs.",
    },
];

const serviceAccordionItems = [
    {
        id: "One",
        title: "Business Data Analytics",
        paragraphs: [
            "Analyze business and operational data to understand performance, identify trends and support strategic planning. We can work with sales, revenue, operational and performance data to create meaningful business insights.",
        ],
    },
    {
        id: "Two",
        title: "Customer Data Analytics",
        paragraphs: [
            "Understand customer behavior, preferences, purchasing patterns and engagement. Customer analytics can help businesses improve segmentation, retention strategies and customer experiences.",
        ],
    },
    {
        id: "Three",
        title: "Ecommerce Data Analytics",
        paragraphs: [
            "Analyze ecommerce and marketplace data to understand sales performance, product performance, customer behavior, pricing and other important business metrics.",
            "Our ecommerce analytics services can support analysis of:",
        ],
        listItems: [
            "Product sales",
            "Revenue",
            "Conversion performance",
            "Customer behavior",
            "Product performance",
            "Marketplace data",
            "Order data",
            "Marketing performance",
        ],
    },
    {
        id: "Four",
        title: "Marketing Data Analytics",
        paragraphs: [
            "Bring marketing data together to understand campaign performance, traffic, leads, conversions and customer acquisition. Analytics can help identify which channels and campaigns are contributing to business growth.",
        ],
    },
    {
        id: "Five",
        title: "Financial Data Analytics",
        paragraphs: [
            "Analyze financial and transactional data to identify trends, monitor performance and support financial planning. Businesses can use financial analytics to understand revenue, expenses, profitability and other key financial indicators.",
        ],
    },
    {
        id: "Six",
        title: "Supply Chain Analytics",
        paragraphs: [
            "Use operational and supply chain data to identify patterns in inventory, purchasing, orders, logistics and fulfillment. This can help businesses improve visibility across their supply chain.",
        ],
    },
    {
        id: "Seven",
        title: "HR Analytics",
        paragraphs: [
            "Analyze workforce data to understand employee trends, recruitment performance, workforce planning and other HR metrics.",
        ],
    },
    {
        id: "Eight",
        title: "Predictive Analytics",
        paragraphs: [
            "Use historical data and analytical models to identify patterns and estimate potential future outcomes. Predictive analytics can support forecasting, demand planning, customer analysis and business planning.",
        ],
    },
    {
        id: "Nine",
        title: "Data Visualization and Reporting",
        paragraphs: [
            "Turn complex datasets into easy-to-understand dashboards and reports. We can help businesses present important KPIs, trends and performance metrics through structured visual reports.",
        ],
    },
];

const analyticsQuestions = [
    "What is driving sales growth or decline?",
    "Which products or services perform best?",
    "What are customers purchasing or engaging with?",
    "Which marketing channels generate better results?",
    "Where are operational inefficiencies occurring?",
    "What trends can affect future business performance?",
];

const analyticsTypes = [
    {
        icon: <FaChartBar />,
        title: "Descriptive Analytics",
        text: "Descriptive analytics explains what happened by analyzing historical data and performance metrics. For example, a business can use descriptive analytics to understand monthly sales, website traffic or product performance.",
    },
    {
        icon: <FaSearch />,
        title: "Diagnostic Analytics",
        text: "Diagnostic analytics helps identify why something happened. It looks deeper into data to identify relationships, patterns and possible causes behind changes in performance.",
    },
    {
        icon: <FaChartLine />,
        title: "Predictive Analytics",
        text: "Predictive analytics uses historical patterns and analytical techniques to estimate what may happen in the future. Businesses can use it for demand forecasting, customer behavior analysis and performance planning.",
    },
    {
        icon: <FaLightbulb />,
        title: "Prescriptive Analytics",
        text: "Prescriptive analytics goes a step further by helping businesses evaluate possible actions based on available data and analytical findings.",
    },
];

const dataSources = [
    "CRM systems",
    "ERP systems",
    "Ecommerce platforms",
    "Marketplace platforms",
    "Websites",
    "Marketing platforms",
    "Sales systems",
    "Financial systems",
    "Databases",
    "Excel and CSV files",
    "APIs",
    "Operational systems",
    "Customer databases",
];

const processSteps = [
    {
        icon: <FaSearch />,
        title: "1. Define Business Objectives",
        text: "We first understand what the business wants to achieve and which questions the analytics solution needs to answer.",
    },
    {
        icon: <FaDownload />,
        title: "2. Identify and Collect Data",
        text: "We identify relevant data sources and collect the information required for analysis.",
    },
    {
        icon: <FaDatabase />,
        title: "3. Clean and Prepare Data",
        text: "Raw data may contain duplicates, missing values, inconsistent formats or other quality issues. We prepare and organize the data before analysis.",
    },
    {
        icon: <FaChartBar />,
        title: "4. Analyze the Data",
        text: "The prepared data is analyzed to identify trends, relationships, patterns and performance indicators relevant to the business objective.",
    },
    {
        icon: <FaCogs />,
        title: "5. Build Reports and Visualizations",
        text: "We convert analytical findings into reports, dashboards and visualizations that make important information easier to understand.",
    },
    {
        icon: <FaRocket />,
        title: "6. Deliver Actionable Insights",
        text: "The final results are presented in a way that helps business teams understand their data and use the findings for planning and decision making.",
    },
];

const businessNeeds = [
    {
        name: "Sales Analytics",
        icon: <FaChartLine />,
        text: "Understand sales trends, product performance, revenue and customer purchasing patterns.",
    },
    {
        name: "Customer Analytics",
        icon: <FaUsers />,
        text: "Identify customer segments, behavior patterns and engagement trends.",
    },
    {
        name: "Marketing Analytics",
        icon: <FaBullhorn />,
        text: "Measure campaign performance, traffic, leads, conversions and customer acquisition.",
    },
    {
        name: "Operational Analytics",
        icon: <FaCogs />,
        text: "Analyze operational performance and identify areas where processes can be improved.",
    },
    {
        name: "Ecommerce Analytics",
        icon: <FaShoppingCart />,
        text: "Understand product, order, customer and marketplace performance to support ecommerce growth.",
    },
    {
        name: "Financial Analytics",
        icon: <FaUniversity />,
        text: "Analyze revenue, expenses, profitability and financial trends.",
    },
];

const whyChooseFocus = [
    "Business-focused data analysis",
    "Structured data preparation",
    "Data quality and validation",
    "Custom reporting",
    "Data visualization",
    "Ecommerce and marketplace analytics",
    "Scalable analytics support",
    "Industry-specific requirements",
    "Actionable business insights",
];

const industries = [
    { name: "Ecommerce and retail", icon: <FaShoppingCart /> },
    { name: "Healthcare", icon: <FaHeartbeat /> },
    { name: "Finance", icon: <FaUniversity /> },
    { name: "Manufacturing", icon: <FaIndustry /> },
    { name: "Logistics", icon: <FaTruck /> },
    { name: "Technology", icon: <FaLaptopCode /> },
    { name: "Marketing", icon: <FaBullhorn /> },
    { name: "Professional services", icon: <FaBriefcase /> },
];

const serviceHighlightImages = [
    {
        src: "/images/services/service-inner/workforces.png",
        alt: "Business Data Analytics",
        title: "Business Data Analytics",
    },
    {
        src: "/images/services/service-inner/analysis.png",
        alt: "Customer Data Analytics",
        title: "Customer Analytics",
    },
    {
        src: "/images/services/service-inner/data-entry-1.png",
        alt: "Supply Chain Analytics",
        title: "Supply Chain Analytics",
    },
    {
        src: "/images/services/service-inner/hr-human-resource.png",
        alt: "HR Analytics",
        title: "HR Analytics",
    },
    {
        src: "/images/services/service-inner/search.png",
        alt: "Marketing Data Analytics",
        title: "Marketing Analytics",
    },
    {
        src: "/images/services/service-inner/design.png",
        alt: "Data Visualization and Reporting",
        title: "Data Visualization",
    },
    {
        src: "/images/services/service-inner/consulting-icon.png",
        alt: "Financial Data Analytics",
        title: "Financial Analytics",
    },
    {
        src: "/images/services/service-inner/data-normal.png",
        alt: "Predictive Analytics",
        title: "Predictive Analytics",
    },
    {
        src: "/images/services/service-inner/health.png",
        alt: "Healthcare Analytics",
        title: "Healthcare Analytics",
    },
    {
        src: "/images/services/service-inner/customer-support.png",
        alt: "Ongoing Analytics Support",
        title: "Ongoing Support",
    },
];

export default function DataAnalytics() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.tech2globe.com/#organization",
                name: "Tech2Globe",
                url: "https://www.tech2globe.com/",
                email: "info@tech2globe.com",
                telephone: ["+1-516-858-5840", "+91-9899675039"],
                contactPoint: [
                    {
                        "@type": "ContactPoint",
                        contactType: "sales",
                        email: "info@tech2globe.com",
                        telephone: "+1-516-858-5840",
                        availableLanguage: ["English"],
                    },
                ],
            },
            {
                "@type": "WebSite",
                "@id": "https://www.tech2globe.com/#website",
                url: "https://www.tech2globe.com/",
                name: "Tech2Globe",
                publisher: {
                    "@id": "https://www.tech2globe.com/#organization",
                },
                inLanguage: "en",
            },
            {
                "@type": "WebPage",
                "@id": "https://www.tech2globe.com/data-analytics-services#webpage",
                url: "https://www.tech2globe.com/data-analytics-services",
                name: "Data Analytics Services | Business Data Analytics Company",
                description:
                    "Get reliable data analytics services to turn business data into actionable insights. Tech2Globe provides data analysis, reporting, visualization and more.",
                isPartOf: {
                    "@id": "https://www.tech2globe.com/#website",
                },
                about: {
                    "@id": "https://www.tech2globe.com/data-analytics-services#service",
                },
                publisher: {
                    "@id": "https://www.tech2globe.com/#organization",
                },
                breadcrumb: {
                    "@id": "https://www.tech2globe.com/data-analytics-services#breadcrumb",
                },
                inLanguage: "en",
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tech2globe.com/data-analytics-services#breadcrumb",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: "https://www.tech2globe.com/",
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Data Analytics Services",
                        item: "https://www.tech2globe.com/data-analytics-services",
                    },
                ],
            },
            {
                "@type": "Service",
                "@id": "https://www.tech2globe.com/data-analytics-services#service",
                name: "Data Analytics Services",
                serviceType: "Data Analytics Services",
                url: "https://www.tech2globe.com/data-analytics-services",
                description:
                    "Businesses generate data from websites, ecommerce platforms, CRM systems, financial systems, marketing campaigns, customer interactions and daily operations. Without the right analysis, this data can be difficult to use for meaningful business decisions.",
                provider: {
                    "@id": "https://www.tech2globe.com/#organization",
                },
                mainEntityOfPage: {
                    "@id": "https://www.tech2globe.com/data-analytics-services#webpage",
                },
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tech2globe.com/data-analytics-services#faq",
                url: "https://www.tech2globe.com/data-analytics-services",
                name: "Data Analytics Services FAQs",
                isPartOf: {
                    "@id": "https://www.tech2globe.com/data-analytics-services#webpage",
                },
                mainEntity: faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                    },
                })),
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb pageName="Data Analytics Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="data analytics services" />
                            <div className={Style.ContentDiv}>
                                <h1 className={`${Style.headingText} pb-3`}>
                                    Data Analytics Services for Smarter Business Decisions
                                </h1>
                                <p className="para-text">
                                    Businesses generate data from websites, ecommerce platforms, CRM systems, financial systems, marketing campaigns, customer interactions and daily operations. Without the right analysis, this data can be difficult to use for meaningful business decisions.
                                </p>
                                <p className="para-text">
                                    Tech2Globe provides <strong>data analytics services</strong> that help businesses organize, analyze and understand their data. We turn complex datasets into clear reports, dashboards and actionable insights that support better planning, performance tracking and decision making.
                                </p>
                                <p className="para-text">
                                    From data preparation and analysis to visualization and reporting, our team can support your analytics requirements based on your business goals, data sources and reporting needs.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaLightbulb />
                                    </span>
                                    What Are Data Analytics Services?
                                </h2>
                                <p className="para-text">
                                    Data analytics services involve collecting, preparing, analyzing and interpreting data to identify patterns, measure performance and generate actionable business insights.
                                </p>
                                <p className="para-text">
                                    A data analytics company can help businesses answer questions such as:
                                </p>
                                <ul>
                                    {analyticsQuestions.map((question) => (
                                        <li key={question}>{question}</li>
                                    ))}
                                </ul>
                                <p className="para-text">
                                    Tech2Globe combines data analysis, reporting and visualization to help businesses make decisions based on reliable information rather than assumptions.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaLayerGroup />
                                    </span>
                                    Our Data Analytics Services
                                </h2>
                                <div className="row pb-4">
                                    {serviceHighlightImages.map((item) => (
                                        <div
                                            className="col-lg-3 col-md-3 col-sm-6 col-xs-12 pb-3"
                                            key={item.title}
                                        >
                                            <div className={Style.ImageBox}>
                                                <Image
                                                    src={item.src}
                                                    alt={item.alt}
                                                    width={55}
                                                    height={55}
                                                />
                                                <h6>{item.title}</h6>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className={`${Style.PageAccordion} accordion`} id="accordionDataAnalyticsServices">
                                    {serviceAccordionItems.map((item, index) => {
                                        const collapseId = `collapse${item.id}`;
                                        const headingId = `heading${item.id}`;
                                        const isFirst = index === 0;
                                        return (
                                            <div className={`${Style.AccordionItem} accordion-item`} key={item.id}>
                                                <h2 className="accordion-header" id={headingId}>
                                                    <button
                                                        className={`${Style.AccordionButton} accordion-button${isFirst ? "" : " collapsed"}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${collapseId}`}
                                                        aria-expanded={isFirst ? "true" : "false"}
                                                        aria-controls={collapseId}
                                                    >
                                                        {item.title}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={collapseId}
                                                    className={`accordion-collapse collapse${isFirst ? " show" : ""}`}
                                                    aria-labelledby={headingId}
                                                    data-bs-parent="#accordionDataAnalyticsServices"
                                                >
                                                    <div className={`${Style.AccordionBody} accordion-body`}>
                                                        {item.paragraphs.map((paragraph, pIndex) => (
                                                            <p
                                                                key={pIndex}
                                                                className={`para-text${
                                                                    !item.listItems &&
                                                                    pIndex === item.paragraphs.length - 1
                                                                        ? " mb-0"
                                                                        : ""
                                                                }`}
                                                            >
                                                                {paragraph}
                                                            </p>
                                                        ))}
                                                        {item.listItems && (
                                                            <ul className="mb-0">
                                                                {item.listItems.map((listItem) => (
                                                                    <li key={listItem}>{listItem}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaChartBar />
                                    </span>
                                    Types of Data Analytics
                                </h2>
                                <p className="para-text">
                                    Businesses can use different types of analytics depending on the question they need to answer.
                                </p>
                                <div className="row">
                                    {analyticsTypes.map((type) => (
                                        <div
                                            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3"
                                            key={type.title}
                                        >
                                            <div className={Style.WaCardTwo}>
                                                <div className={Style.CardIcon} aria-hidden="true">
                                                    {type.icon}
                                                </div>
                                                <div className={Style.WaCardBody}>
                                                    <h5>{type.title}</h5>
                                                    <p>{type.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaDatabase />
                                    </span>
                                    Data Sources We Analyze
                                </h2>
                                <p className="para-text">
                                    Businesses collect information from many different systems. Our data analytics services can work with data from sources such as:
                                </p>
                                <ul>
                                    {dataSources.map((source) => (
                                        <li key={source}>{source}</li>
                                    ))}
                                </ul>
                                <p className="para-text">
                                    The exact data sources depend on the business and analytics requirements.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaCogs />
                                    </span>
                                    Our Data Analytics Process
                                </h2>
                                <p className="para-text">
                                    We follow a structured approach to turn raw data into useful business insights.
                                </p>
                                <div className="row">
                                    {processSteps.map((step) => (
                                        <div
                                            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3"
                                            key={step.title}
                                        >
                                            <div className={Style.WaCardTwo}>
                                                <div className={Style.CardIcon} aria-hidden="true">
                                                    {step.icon}
                                                </div>
                                                <div className={Style.WaCardBody}>
                                                    <h5>{step.title}</h5>
                                                    <p>{step.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaUsersCog />
                                    </span>
                                    Data Analytics for Different Business Needs
                                </h2>
                                <p className="para-text">
                                    Data analytics can support different departments and business functions.
                                </p>
                                <div className="row">
                                    {businessNeeds.map((need) => (
                                        <div
                                            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3"
                                            key={need.name}
                                        >
                                            <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                                <div className={Style.Icon}>{need.icon}</div>
                                                <h5 className="fw-bold mb-2">{need.name}</h5>
                                                <p className="text-muted medium mb-0">{need.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaShieldAlt />
                                    </span>
                                    Data Quality and Validation
                                </h2>
                                <p className="para-text">
                                    Accurate analytics depends on reliable data. Poor quality data can lead to misleading reports and incorrect business decisions.
                                </p>
                                <p className="para-text">
                                    Our analytics workflow can include data validation, duplicate identification, missing-value checks, format standardization and consistency checks before analysis.
                                </p>
                                <p className="para-text">
                                    This helps create a stronger foundation for reporting and business intelligence.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaCheckCircle />
                                    </span>
                                    Why Choose Tech2Globe for Data Analytics Services?
                                </h2>
                                <p className="para-text">
                                    Tech2Globe provides data analytics support based on the specific requirements of each business.
                                </p>
                                <p className="para-text">Our approach focuses on:</p>
                                <ul>
                                    {whyChooseFocus.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                                <p className="para-text">
                                    Whether you need a one-time analytics project or ongoing analytics support, we can structure the engagement around your data sources, reporting requirements and business objectives.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaUsers />
                                    </span>
                                    Industries We Support
                                </h2>
                                <p className="para-text">
                                    Our data analytics solutions can be adapted for businesses across industries such as:
                                </p>
                                <div className={Style.IndustryGrid}>
                                    {industries.map((industry) => (
                                        <div className={Style.IndustryItem} key={industry.name}>
                                            <span className={Style.IndustryIcon} aria-hidden="true">
                                                {industry.icon}
                                            </span>
                                            <span>{industry.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="para-text">
                                    The analytics approach can be customized according to the data available and the business questions that need to be answered.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaSyncAlt />
                                    </span>
                                    Data Analytics and Business Intelligence
                                </h2>
                                <p className="para-text">
                                    Data analytics and business intelligence work closely together but serve different purposes.
                                </p>
                                <p className="para-text">
                                    Data analytics focuses on examining data to identify patterns, trends and insights.
                                </p>
                                <p className="para-text">
                                    Business intelligence focuses on organizing and presenting business information through reports, dashboards and other tools to support decision making.
                                </p>
                                <p className="para-text">
                                    Tech2Globe can support businesses across both areas, from preparing and analyzing data to creating structured reports and dashboards.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaChartLine />
                                    </span>
                                    Data Analytics Case Study
                                </h2>
                                <h4>Turning Business Data Into Actionable Insights</h4>
                                <p className="para-text mb-0">
                                    Tech2Globe has experience supporting businesses with data-related requirements involving data collection, processing, analysis and reporting.
                                </p>

                                <div className={`${Style.CtaBlock} text-center my-4 py-4`}>
                                    <h3>Turn Your Data Into Actionable Insights</h3>
                                    <p className="mb-3">
                                        Make better business decisions with accurate data analysis, clear reporting, and meaningful insights tailored to your business goals.
                                    </p>
                                    <a href="/contact-us" className={Style.CtaButton}>
                                        Get a Data Analytics Consultation
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <div className={Style.StickyTop}>
                                <ServiceSidebar sections={sidebarSections} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ClientSlider testimonials={testimonials} />
            <FaqSection faqs={faqs} />
        </>
    );
}
