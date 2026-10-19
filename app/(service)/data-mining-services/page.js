import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import {
    FaSearch,
    FaBuilding,
    FaUsers,
    FaChartLine,
    FaDatabase,
    FaCogs,
    FaLightbulb,
    FaHandshake,
    FaTrophy,
    FaClipboardList,
    FaCheckCircle,
    FaLayerGroup,
    FaRocket,
    FaExpandArrowsAlt,
    FaClock,
    FaUserCheck,
    FaSyncAlt,
    FaTasks,
    FaShoppingCart,
    FaHome,
    FaHeartbeat,
    FaUniversity,
    FaBullhorn,
    FaIndustry,
    FaTruck,
    FaPlane,
    FaLaptopCode,
    FaBriefcase,
} from "react-icons/fa";

export const metadata = {
    title: "Data Mining Services | Data Mining Company | Tech2Globe",
    description:
        "Get reliable data mining services from Tech2Globe. Outsource data mining for business, customer, market research, web, and lead data needs.",
    keywords: [
        "Outsourcing Data Mining Services",
        "Data Mining Companies",
        "Outsource Data Mining Services",
        "Data Mining Service Providers",
    ],
    openGraph: {
        title: "Data Mining Services | Data Mining Company | Tech2Globe",
        siteName: "Tech2Globe Web Solutions LLP",
        description:
            "Get reliable data mining services from Tech2Globe. Outsource data mining for business, customer, market research, web, and lead data needs.",
        url: "https://stagenew.tech2globe.tech/data-mining-services",
    },
    twitter: {
        card: "summary_large_image",
        title: "Data Mining Services | Data Mining Company | Tech2Globe",
        description:
            "Get reliable data mining services from Tech2Globe. Outsource data mining for business, customer, market research, web, and lead data needs.",
    },
    alternates: {
        canonical: "https://stagenew.tech2globe.tech/data-mining-services",
    },
};

const pageHeaderData = {
    title: "Data Mining Services",
    description:
        "Trust Tech2Globe for a top-quality data mining firm that provides professional guidance for navigating huge data repositories and delivering accurate and timely information. Our services for data mining allow the efficient search and aggregation of important information from multiple sources.",
    buttonText: "Book Your Consultation",
    buttonLink: "/contact-us",
    backgroundImage: "/images/services/data-mining-services-banner.jpg",
};

const caseStudies = [
    {
        id: 1,
        title: "CRM for Health Industry",
        image: "/images/services/service-inner/data-mining-on-crm-for-health-Industry.png",
        description:
            "The client has worked in a system where they have a team dedicated to improving the lives of patients and their families...",
        docLink:
            "https://stagenew.tech2globe.tech/casestudies-docs1/Data%20Mining%20on%20CRM%20for%20Health%20Industry%20-%20Case%20Study%20(1).pdf",
    },
    {
        id: 2,
        title: "Data Mining",
        image: "/images/services/service-inner/data-mining-bn-2.jpg",
        description:
            "Most businesses wish they could take better advantage of their data to make better, more informed decisions — but that is much easier said than done....",
        docLink:
            "https://stagenew.tech2globe.tech/casestudies-docs1/CASE%20STUDY-%20Data%20Mining%20Service-main.pdf",
    },
];

const resources = [
    { id: 1, name: "Case Studies", path: "/case-studies" },
    { id: 2, name: "Clients", path: "/clients" },
    { id: 3, name: "Testimonial", path: "/testimonial" },
];

const usefulLinks = [
    { id: 4, name: "Catalog Processing", path: "/catalog-processing-services" },
    { id: 5, name: "Data Conversion", path: "/data-conversion-services" },
    { id: 6, name: "Data Extraction", path: "/data-extraction-services" },
    { id: 7, name: "Document Processing", path: "/document-processing-services" },
    { id: 8, name: "Forms Processing", path: "/forms-processing-services" },
    { id: 9, name: "Insurance Claims Processing", path: "/insurance-claims-processing-services" },
    { id: 10, name: "Invoice Processing", path: "/invoice-processing-services" },
    { id: 11, name: "Order Processing", path: "/order-processing-services" },
    { id: 12, name: "Survey Forms Processing", path: "/survey-forms-processing" },
];

const sidebarSections = [
    { heading: "Resources", links: resources },
    { heading: "Useful Links", links: usefulLinks },
];

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Their expertise and mastery of data mining and predictive analytics revealed crucial trends in our data that others had missed.",
        name: "Sarah Anderson, Chief Data Officer",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Their team helped our organization gain useful insights from difficult datasets. Their skill in data mining has surely contributed to our company's growth, and we hope to continue working with them in the future.",
        name: "Michael Brown, CEO, states",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Their team is diligent, thorough, and always goes the extra mile to ensure we have the information we need to succeed.",
        name: "Jessica Taylor, Business Analyst",
    },
    {
        id: 4,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "We are grateful as they've helped us identify new opportunities and optimize our strategies.",
        name: " Rebecca Johnson, Marketing Director",
    },
    {
        id: 5,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe's data mining services have become an essential part of our decision-making process. Their team is skilled at identifying patterns and trends, allowing us to make the right decision.",
        name: "David Miller, Operations Manager",
    },
];

const faqs = [
    {
        id: "One",
        question: "What are data mining services?",
        answer: "Data mining services involve collecting, processing, organizing, and analyzing data to identify useful patterns, trends, relationships, and insights. Businesses can use these insights for research, marketing, sales, operations, business development, and decision making.",
    },
    {
        id: "Two",
        question: "What does a data mining company do?",
        answer: "A data mining company helps businesses collect and process relevant information from different sources. The services can include data collection, web data mining, lead data mining, customer data mining, market research, data cleaning, organization, validation, and delivery.",
    },
    {
        id: "Three",
        question: "What is a data mining service provider?",
        answer: "A data mining service provider is a company that helps businesses collect, organize, process, and prepare data according to their requirements. Tech2Globe provides customized data mining services for different business and research needs.",
    },
    {
        id: "Four",
        question: "What is data mining outsourcing?",
        answer: "Data mining outsourcing involves hiring an external service provider to manage some or all data collection, processing, organization, or research activities. It can help businesses reduce internal workload and access specialized resources.",
    },
    {
        id: "Five",
        question: "Why should I outsource data mining services?",
        answer: "Businesses may choose to outsource data mining services when they need to process large amounts of information, reduce manual work, access specialized resources, or establish an ongoing data collection workflow.",
    },
    {
        id: "Six",
        question: "What types of data can you mine?",
        answer: "We can work with different types of structured and unstructured information, including website data, business information, customer data, product information, marketplace data, social media information, text data, images, spreadsheets, and other datasets based on project requirements.",
    },
    {
        id: "Seven",
        question: "What is business data mining?",
        answer: "Business data mining involves collecting and analyzing business related information to identify useful patterns and insights. It can include company information, market information, competitor data, product information, pricing, and other relevant business datasets.",
    },
    {
        id: "Eight",
        question: "What is customer data mining?",
        answer: "Customer data mining involves analyzing relevant customer datasets to identify patterns related to customer behavior, preferences, purchasing activity, feedback, and segmentation.",
    },
    {
        id: "Nine",
        question: "What is market research data mining?",
        answer: "Market research data mining involves collecting and organizing information about markets, products, competitors, pricing, customer preferences, and industry trends to support research and business planning.",
    },
    {
        id: "Ten",
        question: "What is text data mining?",
        answer: "Text data mining involves collecting and analyzing information from large volumes of text based content such as websites, documents, reviews, surveys, and other relevant sources.",
    },
    {
        id: "Eleven",
        question: "What is big data mining?",
        answer: "Big data mining involves working with large and complex datasets to identify useful patterns, relationships, and insights. The approach depends on the size, structure, sources, and purpose of the dataset.",
    },
    {
        id: "Twelve",
        question: "Can you provide customized data mining solutions?",
        answer: "Yes. Our data mining solutions can be customized according to your target data, sources, industry, geography, required fields, project volume, output format, and business objectives.",
    },
    {
        id: "Thirteen",
        question: "Do you provide data mining consulting?",
        answer: "Yes. Our data mining consulting services can help businesses define their data requirements, identify relevant sources, determine required fields, and develop an appropriate data collection and processing workflow.",
    },
    {
        id: "Fourteen",
        question: "How do you ensure data quality?",
        answer: "We use defined processes for data collection, cleaning, organization, and validation. The exact validation process depends on the type of data and requirements of each project.",
    },
    {
        id: "Fifteen",
        question: "Can you handle ongoing data mining projects?",
        answer: "Yes. We can support both one time projects and ongoing data collection requirements depending on the scope, frequency, and workflow required by the business.",
    },
    {
        id: "Sixteen",
        question: "How long does a data mining project take?",
        answer: "The timeline depends on the volume and complexity of the data, number of sources, required fields, validation requirements, and overall project scope. The expected timeline can be determined after reviewing your requirements.",
    },
    {
        id: "Seventeen",
        question: "How can I get started with Tech2Globe?",
        answer: "Share your data requirements, target sources, required fields, preferred output format, and project objectives with our team. We can review your requirements and suggest a suitable data mining approach.",
    },
];

const serviceAccordionItems = [
    {
        id: "One",
        title: "Web Data Mining Services",
        paragraphs: [
            "Our web data mining services help businesses collect relevant information from websites, online directories, marketplaces, product catalogs, review platforms, and other publicly available online sources.",
            "Depending on your requirements, we can collect information such as company details, product information, pricing, reviews, locations, business categories, and other relevant data.",
            "The collected information can be cleaned, organized, validated, and delivered in a structured format for research, analysis, marketing, sales, or business development.",
        ],
    },
    {
        id: "Two",
        title: "Lead Data Mining",
        paragraphs: [
            "Build targeted prospect databases with our lead data mining services. We collect and organize relevant business and contact information from appropriate online sources according to your target market and requirements.",
            "Our team can organize information based on industry, location, company type, business size, and other criteria to help you develop focused prospect lists.",
        ],
    },
    {
        id: "Three",
        title: "Business Data Mining",
        paragraphs: [
            "Our business data mining services help organizations collect and analyze information related to companies, industries, products, markets, competitors, pricing, and other business factors.",
            "Business data mining can help organizations identify market opportunities, understand competitive activity, support business research, and improve strategic planning.",
            "Whether you need information for a specific research project or require ongoing data collection, we can develop a workflow based on your business requirements.",
        ],
    },
    {
        id: "Four",
        title: "Customer Data Mining",
        paragraphs: [
            "Understanding customer behavior can help businesses improve products, services, marketing, and customer experiences.",
            "Our customer data mining services help businesses identify useful patterns from relevant customer datasets. Depending on the project, we can work with information related to purchasing behavior, product preferences, customer segments, feedback, and other relevant data.",
            "These insights can help businesses understand customer needs, identify customer segments, improve marketing activities, and support more informed business decisions.",
        ],
    },
    {
        id: "Five",
        title: "Market Research Data Mining",
        paragraphs: [
            "Make your market research more data driven with our market research data mining services.",
            "We collect and organize relevant information about markets, products, competitors, pricing, customer preferences, and industry activity to support research and business planning.",
        ],
        listIntro: "Our market research data mining services can support:",
        listItems: [
            "Market opportunity research",
            "Competitor research",
            "Product research",
            "Pricing research",
            "Customer preference research",
            "Industry research",
            "Market trend research",
        ],
        closing:
            "The collected information can be structured according to your research objectives and delivered in a format that makes further analysis easier.",
    },
    {
        id: "Six",
        title: "Social Media Data Mining",
        paragraphs: [
            "Social media contains large volumes of information that can provide useful insights into customers, brands, products, and market conversations.",
            "Our social media data mining services help businesses collect relevant publicly available information and organize it for research and analysis.",
            "Depending on the project, we can work with information related to brand mentions, product discussions, customer feedback, public content, and other relevant social media data.",
        ],
    },
    {
        id: "Seven",
        title: "Image Data Mining",
        paragraphs: [
            "Our image data mining services help businesses work with information contained within image based datasets.",
            "We can support projects involving product images, real estate images, maps, visual datasets, and other image based information where structured collection, classification, or analysis is required.",
            "The workflow can be customized according to the type of images, information required, and intended use of the data.",
        ],
    },
    {
        id: "Eight",
        title: "Text Data Mining",
        paragraphs: [
            "Large amounts of business information are available in text based formats such as websites, reviews, documents, surveys, and publicly available online content.",
            "Our text data mining services help businesses collect, organize, categorize, and analyze relevant text based information to identify topics, trends, customer feedback, product discussions, and other useful patterns.",
            "Text data mining can be particularly useful when businesses need to process large volumes of written information and convert it into structured datasets.",
        ],
    },
    {
        id: "Nine",
        title: "Big Data Mining",
        paragraphs: [
            "Organizations working with large datasets need efficient processes for collecting, organizing, and analyzing information.",
            "Our big data mining services support projects involving large volumes of structured and unstructured data from multiple sources. We can help organize large datasets and identify relevant patterns and information according to the requirements of the project.",
            "The data workflow can be customized according to the size, complexity, sources, and intended use of the data.",
        ],
    },
    {
        id: "Ten",
        title: "Excel Data Mining",
        paragraphs: [
            "We help businesses organize and process information stored in Excel spreadsheets and other related data formats.",
            "Our team can work with large spreadsheets, identify inconsistencies, organize information, remove duplicate records where applicable, and structure data according to your requirements.",
            "This can support reporting, research, operational analysis, financial planning, and other business activities.",
        ],
    },
    {
        id: "Eleven",
        title: "Online Marketplace Data Mining",
        paragraphs: [
            "Online marketplaces contain valuable information about products, sellers, prices, categories, reviews, and market activity.",
            "Our online marketplace data mining services help businesses collect relevant marketplace information and organize it into structured datasets.",
            "This information can support product research, competitor analysis, pricing research, assortment analysis, and ecommerce decision making.",
        ],
    },
];

const industries = [
    { name: "Ecommerce and Retail", icon: <FaShoppingCart /> },
    { name: "Real Estate", icon: <FaHome /> },
    { name: "Healthcare", icon: <FaHeartbeat /> },
    { name: "Finance and Banking", icon: <FaUniversity /> },
    { name: "Marketing and Advertising", icon: <FaBullhorn /> },
    { name: "Manufacturing", icon: <FaIndustry /> },
    { name: "Logistics", icon: <FaTruck /> },
    { name: "Travel and Hospitality", icon: <FaPlane /> },
    { name: "Technology", icon: <FaLaptopCode /> },
    { name: "Research and Consulting", icon: <FaBriefcase /> },
];

const processSteps = [
    {
        icon: <FaSearch />,
        title: "Requirement Analysis",
        text: "We understand your business objectives, target data, required fields, data sources, geography, industry, volume, and preferred output format.",
    },
    {
        icon: <FaClipboardList />,
        title: "Data Source Identification",
        text: "We identify relevant data sources according to your requirements and determine the appropriate approach for collecting the required information.",
    },
    {
        icon: <FaDatabase />,
        title: "Data Collection",
        text: "Our team collects the required information using suitable data collection and research methods.",
    },
    {
        icon: <FaSyncAlt />,
        title: "Data Cleaning",
        text: "The collected information is reviewed and cleaned to help remove duplicate, incomplete, irrelevant, or inconsistent records where applicable.",
    },
    {
        icon: <FaTasks />,
        title: "Data Organization",
        text: "The information is structured according to your requirements and can be delivered in formats such as Excel, CSV, database files, or other agreed formats.",
    },
    {
        icon: <FaCheckCircle />,
        title: "Data Validation",
        text: "We review the collected information against the defined project requirements to improve consistency and usability.",
    },
    {
        icon: <FaRocket />,
        title: "Data Delivery",
        text: "The completed dataset is delivered in the agreed format so your team can use it for research, analysis, reporting, marketing, sales, or other business activities.",
    },
];

export default function DataMiningServices() {
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
                "@id": "https://www.tech2globe.com/data-mining-services#webpage",
                url: "https://www.tech2globe.com/data-mining-services",
                name: "Data Mining Services | Data Mining Company | Tech2Globe",
                description:
                    "Get reliable data mining services from Tech2Globe. Outsource data mining for business, customer, market research, web, and lead data needs.",
                isPartOf: {
                    "@id": "https://www.tech2globe.com/#website",
                },
                about: {
                    "@id": "https://www.tech2globe.com/data-mining-services#service",
                },
                publisher: {
                    "@id": "https://www.tech2globe.com/#organization",
                },
                breadcrumb: {
                    "@id": "https://www.tech2globe.com/data-mining-services#breadcrumb",
                },
                inLanguage: "en",
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tech2globe.com/data-mining-services#breadcrumb",
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
                        name: "Data Mining Services",
                        item: "https://www.tech2globe.com/data-mining-services",
                    },
                ],
            },
            {
                "@type": "Service",
                "@id": "https://www.tech2globe.com/data-mining-services#service",
                name: "Data Mining Services",
                serviceType: "Data Mining Services",
                url: "https://www.tech2globe.com/data-mining-services",
                description:
                    "Turn complex data into meaningful business insights with professional data mining services from Tech2Globe. We help businesses collect, organize, process, and analyze data from multiple sources to identify patterns, trends, customer behavior, market opportunities, and competitive insights.",
                provider: {
                    "@id": "https://www.tech2globe.com/#organization",
                },
                mainEntityOfPage: {
                    "@id": "https://www.tech2globe.com/data-mining-services#webpage",
                },
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tech2globe.com/data-mining-services#faq",
                url: "https://www.tech2globe.com/data-mining-services",
                name: "Data Mining Services FAQs",
                isPartOf: {
                    "@id": "https://www.tech2globe.com/data-mining-services#webpage",
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
            <Breadcrumb parentName="Services" pageName="Data Mining Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Data Mining Services" />
                            <div className={Style.ContentDiv}>
                                <h1 className={`${Style.headingText} pb-3`}>Data Mining Services</h1>
                                <p className="para-text">
                                    Turn complex data into meaningful business insights with professional <strong>data mining services</strong> from Tech2Globe. We help businesses collect, organize, process, and analyze data from multiple sources to identify patterns, trends, customer behavior, market opportunities, and competitive insights.
                                </p>
                                <p className="para-text">
                                    As an experienced data mining company, we provide customized data mining solutions for businesses that need accurate and well structured information for research, marketing, sales, operations, and strategic decision making. From web and lead data mining to customer, business, marketplace, and market research data, our team can build data workflows around your specific requirements.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaLightbulb />
                                    </span>
                                    Data Mining Solutions for Smarter Business Decisions
                                </h2>
                                <p className="para-text">
                                    Businesses generate large amounts of data every day, but raw information is valuable only when it can be organized and converted into useful insights.
                                </p>
                                <p className="para-text">
                                    Our data mining solutions help businesses discover patterns, relationships, trends, and opportunities within large datasets. We collect relevant information, clean and organize the data, and prepare it in a structured format that can support further analysis and decision making.
                                </p>
                                <p className="para-text">
                                    Our services can support business intelligence, competitive intelligence, customer research, market research, product research, lead generation, and other data driven business activities.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaLayerGroup />
                                    </span>
                                    Our Data Mining Services
                                </h2>
                                <div className={`${Style.PageAccordion} accordion`} id="accordionDataMiningServices">
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
                                                    data-bs-parent="#accordionDataMiningServices"
                                                >
                                                    <div className={`${Style.AccordionBody} accordion-body`}>
                                                        {item.paragraphs.map((paragraph, pIndex) => (
                                                            <p
                                                                key={pIndex}
                                                                className={`para-text${
                                                                    !item.listItems &&
                                                                    pIndex === item.paragraphs.length - 1 &&
                                                                    !item.closing
                                                                        ? " mb-0"
                                                                        : ""
                                                                }`}
                                                            >
                                                                {paragraph}
                                                            </p>
                                                        ))}
                                                        {item.listIntro && (
                                                            <p className="para-text">{item.listIntro}</p>
                                                        )}
                                                        {item.listItems && (
                                                            <ul>
                                                                {item.listItems.map((listItem) => (
                                                                    <li key={listItem}>{listItem}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                        {item.closing && (
                                                            <p className="para-text mb-0">{item.closing}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaCogs />
                                    </span>
                                    Data Mining Process
                                </h2>
                                <p className="para-text">
                                    We follow a structured data mining process designed around the objectives and requirements of each project.
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
                                        <FaDatabase />
                                    </span>
                                    Data Mining Techniques and Tools
                                </h2>
                                <p className="para-text">
                                    Different projects require different approaches to collecting and analyzing information. Our data mining workflows can include techniques for data collection, classification, organization, pattern identification, trend analysis, and data validation depending on the project requirements.
                                </p>
                                <p className="para-text">
                                    Our approach can be customized based on the type of data, volume of information, data sources, required output, and intended business use.
                                </p>
                                <p className="para-text">
                                    The objective is not simply to collect large amounts of information, but to organize relevant data so that it can provide meaningful business value.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaHandshake />
                                    </span>
                                    Data Mining Outsourcing Services
                                </h2>
                                <p className="para-text">
                                    Managing large scale data projects internally can require considerable time, resources, technology, and specialized expertise. Data mining outsourcing allows businesses to work with an external team while their internal resources focus on core business activities.
                                </p>
                                <p className="para-text">
                                    Tech2Globe provides flexible data mining outsourcing services for businesses with different data collection and processing requirements.
                                </p>
                                <p className="para-text">
                                    Whether you want to outsource data mining, require outsource data mining services for a specific project, or need ongoing support, we can develop a workflow around your requirements.
                                </p>
                                <p className="para-text">Our outsourcing data mining services can include:</p>
                                <ul>
                                    <li>Web data mining</li>
                                    <li>Business data mining</li>
                                    <li>Lead data mining</li>
                                    <li>Customer data mining</li>
                                    <li>Market research data mining</li>
                                    <li>Competitor data research</li>
                                    <li>Marketplace data mining</li>
                                    <li>Data cleaning and organization</li>
                                    <li>Ongoing data collection</li>
                                </ul>
                                <p className="para-text">
                                    Our data mining outsourcing services can be scaled according to project volume, data requirements, frequency, and business objectives.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaUserCheck />
                                    </span>
                                    Data Mining Consulting and Solutions
                                </h2>
                                <p className="para-text">
                                    Businesses often need more than data collection. They may also need help defining what information should be collected, which sources are relevant, how the data should be structured, and how it can support their business objectives.
                                </p>
                                <p className="para-text">
                                    Our data mining consulting services help businesses define their data requirements and develop practical approaches for data collection, organization, and analysis.
                                </p>
                                <p className="para-text">We can help you identify:</p>
                                <ul>
                                    <li>What data your business needs</li>
                                    <li>Relevant data sources</li>
                                    <li>Required data fields</li>
                                    <li>Suitable collection methods</li>
                                    <li>Data organization requirements</li>
                                    <li>Data validation requirements</li>
                                    <li>Appropriate delivery formats</li>
                                    <li>Potential business applications of the collected data</li>
                                </ul>
                                <p className="para-text">
                                    This consulting approach can be combined with our broader data mining solutions to create a workflow aligned with your business objectives.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaTrophy />
                                    </span>
                                    Why Choose Tech2Globe as Your Data Mining Service Provider?
                                </h2>
                                <p className="para-text">
                                    Choosing the right data mining service provider is important when the quality, structure, and relevance of collected information can directly affect business decisions.
                                </p>
                                <p className="para-text">
                                    Tech2Globe combines data collection, web research, data processing, and business research capabilities to provide customized data mining services.
                                </p>
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaCogs />
                                            </div>
                                            <h5 className="fw-bold mb-2">Customized Data Mining Solutions</h5>
                                            <p className="text-muted medium mb-0">
                                                Every business has different data requirements. We customize our workflows according to your sources, required fields, industry, geography, volume, output format, and project objectives.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaUsers />
                                            </div>
                                            <h5 className="fw-bold mb-2">Experienced Data Mining Team</h5>
                                            <p className="text-muted medium mb-0">
                                                Our team works with different data collection, research, processing, organization, and analysis requirements across multiple business use cases.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaExpandArrowsAlt />
                                            </div>
                                            <h5 className="fw-bold mb-2">Scalable Data Processing</h5>
                                            <p className="text-muted medium mb-0">
                                                Whether you need a small research dataset or a large volume of business information, the workflow can be structured according to your project requirements.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaCheckCircle />
                                            </div>
                                            <h5 className="fw-bold mb-2">Data Quality and Validation</h5>
                                            <p className="text-muted medium mb-0">
                                                We follow defined processes for data cleaning, organization, and validation to improve the quality and usability of the delivered information.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaClock />
                                            </div>
                                            <h5 className="fw-bold mb-2">Flexible Engagement</h5>
                                            <p className="text-muted medium mb-0">
                                                You can work with Tech2Globe for a one time data mining project or establish an ongoing data collection and processing workflow.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaChartLine />
                                            </div>
                                            <h5 className="fw-bold mb-2">Business Focused Approach</h5>
                                            <p className="text-muted medium mb-0">
                                                We focus on understanding why the data is required and how it will be used. This allows us to structure the collection and delivery process around your actual business objectives.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaRocket />
                                    </span>
                                    Benefits of Data Mining Services
                                </h2>
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaLightbulb />
                                            </div>
                                            <h5 className="fw-bold mb-2">Better Business Insights</h5>
                                            <p className="text-muted medium mb-0">
                                                Organized data can help businesses identify patterns, trends, relationships, and opportunities that may not be visible in raw datasets.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaCheckCircle />
                                            </div>
                                            <h5 className="fw-bold mb-2">Improved Decision Making</h5>
                                            <p className="text-muted medium mb-0">
                                                Reliable and structured information can support better decisions across marketing, sales, operations, research, and business development.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaUsers />
                                            </div>
                                            <h5 className="fw-bold mb-2">Better Customer Understanding</h5>
                                            <p className="text-muted medium mb-0">
                                                Customer data mining can help businesses understand customer behavior, preferences, purchasing patterns, and relevant customer segments.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaSearch />
                                            </div>
                                            <h5 className="fw-bold mb-2">Market and Competitive Intelligence</h5>
                                            <p className="text-muted medium mb-0">
                                                Market research and competitor data can help businesses understand market activity and monitor relevant changes within their industry.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaClock />
                                            </div>
                                            <h5 className="fw-bold mb-2">Reduced Manual Work</h5>
                                            <p className="text-muted medium mb-0">
                                                Outsourcing data mining can reduce the time internal teams spend manually collecting, organizing, and processing large volumes of information.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaExpandArrowsAlt />
                                            </div>
                                            <h5 className="fw-bold mb-2">Scalable Data Operations</h5>
                                            <p className="text-muted medium mb-0">
                                                Professional data mining workflows can be expanded according to changing business requirements and project volumes.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaBuilding />
                                    </span>
                                    Industries We Serve
                                </h2>
                                <p className="para-text">
                                    Our data mining services can be customized for businesses across different industries and use cases, including:
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
                                    The data sources, collection methods, and workflow depend on the requirements of each project.
                                </p>
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

            <CaseStudiesService caseStudies={caseStudies} />
            <ClientSlider testimonials={testimonials} />
            <FaqSection faqs={faqs} />
        </>
    );
}
