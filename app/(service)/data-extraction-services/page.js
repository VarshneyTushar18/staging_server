import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import {
    FaChartBar,
    FaChartLine,
    FaCheckCircle,
    FaClipboardList,
    FaCogs,
    FaDatabase,
    FaFileAlt,
    FaFileExcel,
    FaFilePdf,
    FaFolderOpen,
    FaGlobe,
    FaHandshake,
    FaHome,
    FaLayerGroup,
    FaLightbulb,
    FaRocket,
    FaSearch,
    FaShoppingCart,
    FaSyncAlt,
    FaTasks,
    FaUniversity,
    FaUsers,
} from "react-icons/fa";

export const metadata = {
    title: "Data Extraction Services for Accurate, Structured Business Data | Tech2Globe",
    description:
        "Tech2Globe provides professional data extraction services to collect, organize, clean, and deliver business data from websites, documents, PDFs, images, and other sources in a structured format.",
    keywords: [
        "Data Extraction Service",
        "Outsource Data Extraction Services",
        "Data Extraction Services Company",
        "Web Data Extraction Services",
        "Best Data Extraction Services",
    ],
    openGraph: {
        title: "Data Extraction Services for Accurate, Structured Business Data | Tech2Globe",
        siteName: "Tech2Globe Web Solutions LLP",
        description:
            "Tech2Globe provides professional data extraction services to collect, organize, clean, and deliver business data from websites, documents, PDFs, images, and other sources in a structured format.",
        url: "https://stagenew.tech2globe.tech/data-extraction-services",
    },
    twitter: {
        card: "summary_large_image",
        title: "Data Extraction Services for Accurate, Structured Business Data | Tech2Globe",
        description:
            "Tech2Globe provides professional data extraction services to collect, organize, clean, and deliver business data from websites, documents, PDFs, images, and other sources in a structured format.",
    },
    alternates: {
        canonical: "https://stagenew.tech2globe.tech/data-extraction-services",
    },
};

const pageHeaderData = {
    title: "Data Extraction Services for Accurate, Structured Business Data",
    description:
        "Businesses rely on accurate data to understand customers, research markets, monitor competitors, manage products, and make informed decisions. Tech2Globe provides professional data extraction services to collect, organize, clean, and deliver business data in a structured and usable format.",
    buttonText: "Book Your Consultation",
    buttonLink: "/contact-us",
    backgroundImage: "/images/services/data-mining-services-banner.jpg",
};

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

const caseStudies = [
    {
        id: 1,
        title: "Data Extraction Services",
        image: "/images/services/service-inner/data-extraction-services-bn-1.jpg",
        description:
            "The client was unable to efficiently extract customer information from its portal. Our team reviewed and classified the available data, created an SQL database for existing customers, and established a structured process for entering new customer records with multi-level quality control.",
        docLink:
            "https://stagenew.tech2globe.tech/casestudies-docs1/Data%20Extraction%20services-converted%20(1).pdf",
    },
];

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "I needed to extract product data from several competitor websites. Tech2Globe's data extraction service was a great help to get all the information I needed in a clean and organized format. It saved me a ton of time and effort.",
        name: "John S., Market Research Analyst",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "As a Content Creator, I use a lot of data for my work, but pulling it from various sources can be tedious. Tech2Globe’s team helped me gather information from social media platforms for a recent project.",
        name: "Sarah M., Content Creator",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe's team was very professional and ensured a smooth extraction process. They were also able to handle some unexpected formatting issues we encountered.",
        name: "David L., Web Developer",
    },
    {
        id: 4,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Keeping track of industry trends is crucial for my work as a Financial Advisor. Their staff helped me gather relevant data from financial news websites.",
        name: "Lisa K., Financial Advisor",
    },
    {
        id: 5,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Their data extraction service was accurate and GDPR compliant, which was important to us. They provided us with a clean list that helped us reach the right people.",
        name: "Michael J., Marketing Manager",
    },
];

const faqs = [
    {
        id: "One",
        question: "What are data extraction services?",
        answer:
            "Data extraction services involve collecting information from websites, documents, images, databases, and other permitted sources and converting it into a structured format. Businesses use extracted data for research, analytics, ecommerce, competitor analysis, reporting, and business operations.",
    },
    {
        id: "Two",
        question: "What is the difference between data extraction and web scraping?",
        answer:
            "Data extraction is a broader process of collecting and structuring information from different sources. Web scraping is specifically focused on collecting data from websites. Data extraction can include web data, documents, PDFs, images, databases, and other sources.",
    },
    {
        id: "Three",
        question: "What types of data can you extract?",
        answer:
            "We can extract different types of structured and unstructured information, including product data, pricing, business information, market research data, competitor information, document data, PDF data, image text, and other project specific information.",
    },
    {
        id: "Four",
        question: "Can you extract data from PDFs and scanned documents?",
        answer:
            "Yes. We can extract relevant information from PDFs and scanned documents. OCR based techniques can be used where the required information is available as readable text within images or scanned documents.",
    },
    {
        id: "Five",
        question: "Can you extract ecommerce product data?",
        answer:
            "Yes. Depending on the project requirements and permitted sources, ecommerce product data can include product names, descriptions, prices, SKUs, specifications, categories, ratings, reviews, and availability information.",
    },
    {
        id: "Six",
        question: "What formats can you deliver extracted data in?",
        answer:
            "Extracted data can be delivered in formats such as Excel, CSV, JSON, SQL, XML, or another agreed format depending on your requirements and how the data will be used.",
    },
    {
        id: "Seven",
        question: "Can you handle recurring data extraction projects?",
        answer:
            "Yes. Recurring data extraction can be structured around the required sources, fields, update frequency, validation process, and delivery format. The workflow can be designed for periodic data collection where the source and requirements support it.",
    },
    {
        id: "Eight",
        question: "How do you maintain data accuracy?",
        answer:
            "We use defined extraction requirements, structured data processing, cleaning, validation, and quality checks. For larger projects, additional quality control stages can be included based on the project requirements.",
    },
    {
        id: "Nine",
        question: "Is data extraction secure?",
        answer:
            "Data handling procedures depend on the project, source, and information involved. We can establish appropriate access controls, secure data transfer procedures, and project specific security requirements during the engagement.",
    },
];

const serviceAccordionItems = [
    {
        id: "One",
        title: "Web Data Extraction",
        paragraphs: [
            "Our web data extraction services help businesses collect relevant information from websites and online sources. Depending on the project, data may include product information, prices, specifications, business details, reviews, ratings, categories, listings, and other publicly available information.",
            "We structure the collected information according to the fields and format defined for your project.",
        ],
    },
    {
        id: "Two",
        title: "Ecommerce Product Data Extraction",
        paragraphs: [
            "Keeping track of product information across ecommerce websites and marketplaces can require significant manual effort.",
            "Our ecommerce data extraction services can help collect information such as:",
        ],
        listItems: [
            "Product names and descriptions",
            "Product categories",
            "Prices and discounts",
            "SKUs and product attributes",
            "Product specifications",
            "Ratings and reviews",
            "Availability information",
            "Images and related product information",
        ],
        closing:
            "The extracted information can support catalog management, competitor research, pricing analysis, and market research.",
    },
    {
        id: "Three",
        title: "Document Data Extraction",
        paragraphs: [
            "Businesses often store important information in large numbers of documents. Manually reviewing these files can slow down operations and increase the possibility of errors.",
            "We extract relevant information from documents such as:",
        ],
        listItems: [
            "PDF files",
            "Word documents",
            "Excel spreadsheets",
            "Forms",
            "Reports",
            "Invoices",
            "Catalogs",
            "Business documents",
            "Research documents",
        ],
        closing:
            "The extracted information can then be organized into spreadsheets, databases, or other required formats.",
    },
    {
        id: "Four",
        title: "PDF Data Extraction",
        paragraphs: [
            "PDF files may contain tables, text, forms, product information, financial information, or other business data.",
            "Our PDF data extraction services help convert relevant information from PDF documents into structured datasets that are easier to search, analyze, update, and manage.",
        ],
    },
    {
        id: "Five",
        title: "Image and OCR Data Extraction",
        paragraphs: [
            "Important information is often available in scanned documents, photographs, forms, receipts, catalogs, and other images.",
            "Using OCR based data extraction techniques, we can identify and convert readable text from images and scanned documents into digital data.",
            "This can be useful for organizations that need to process large volumes of printed or scanned information.",
        ],
    },
    {
        id: "Six",
        title: "Business and Lead Data Extraction",
        paragraphs: [
            "Businesses often need structured information about companies, markets, locations, products, and potential customers for research and business development.",
            "We can collect relevant publicly available business information based on the fields and sources defined for your project and organize it into a usable dataset.",
        ],
    },
    {
        id: "Seven",
        title: "Competitor Data Extraction",
        paragraphs: [
            "Competitor information can help businesses understand market positioning, pricing, product offerings, promotions, and other publicly available information.",
            "Our competitor data extraction services can collect relevant information from defined sources and organize it for competitive research and analysis.",
        ],
    },
    {
        id: "Eight",
        title: "Social Media Data Extraction",
        paragraphs: [
            "Social platforms contain large amounts of publicly available information that can support market and audience research.",
            "We can help extract relevant information from permitted sources based on your project requirements, including publicly available posts, profiles, engagement information, and other defined data points.",
        ],
    },
    {
        id: "Nine",
        title: "Market Research Data Extraction",
        paragraphs: [
            "Market research often requires information from multiple online sources.",
            "Our team can collect and organize relevant market information from websites, directories, publications, product pages, competitor sources, and other permitted sources.",
            "The data can then be cleaned, categorized, and validated to support further research and analysis.",
        ],
    },
];

const dataTypes = [
    "Product information",
    "Pricing data",
    "Business information",
    "Company information",
    "Contact information where publicly available and permitted",
    "Product specifications",
    "Reviews and ratings",
    "Category information",
    "Market information",
    "Competitor information",
    "Location information",
    "Document data",
    "PDF data",
    "Image and scanned text",
    "Research data",
    "Social media information",
    "Catalog information",
    "Structured and semi structured datasets",
];

const businessNeeds = [
    {
        name: "Ecommerce and Retail",
        icon: <FaShoppingCart />,
        text: "Extract product and marketplace information for catalog management, competitor research, pricing research, and product analysis.",
    },
    {
        name: "Market Research",
        icon: <FaSearch />,
        text: "Collect information from multiple sources to support market studies, industry research, competitor analysis, and customer research.",
    },
    {
        name: "Sales and Marketing",
        icon: <FaChartLine />,
        text: "Build structured datasets containing relevant business and market information to support research, prospecting, and marketing activities.",
    },
    {
        name: "Real Estate",
        icon: <FaHome />,
        text: "Collect property related information such as listings, locations, specifications, prices, and other relevant publicly available details.",
    },
    {
        name: "Finance and Insurance",
        icon: <FaUniversity />,
        text: "Extract information from defined documents, reports, websites, and other permitted sources for research, processing, and business operations.",
    },
    {
        name: "Business Intelligence",
        icon: <FaChartBar />,
        text: "Collect information from different sources and convert it into structured datasets that can be used for reporting, analysis, and decision making.",
    },
];

const processSteps = [
    {
        icon: <FaSearch />,
        title: "1. Requirement Analysis",
        text: "We understand what information you need, where the data is available, which fields need to be collected, how frequently the data needs to be updated, and how the final data should be delivered.",
    },
    {
        icon: <FaClipboardList />,
        title: "2. Source Identification",
        text: "We identify the relevant websites, documents, databases, APIs, files, or other permitted sources based on your requirements.",
    },
    {
        icon: <FaDatabase />,
        title: "3. Data Extraction",
        text: "Our team uses suitable extraction methods based on the source and project requirements. Depending on the project, this may include automated extraction, API based collection, OCR, or manual processes.",
    },
    {
        icon: <FaSyncAlt />,
        title: "4. Data Cleaning and Structuring",
        text: "Raw data may contain duplicates, inconsistent formats, missing values, or unnecessary information. We organize and clean the extracted data according to the agreed requirements.",
    },
    {
        icon: <FaCheckCircle />,
        title: "5. Data Validation",
        text: "Quality checks are performed to identify missing, duplicate, inconsistent, or incorrect records. Where required, multiple levels of quality control can be included in the workflow.",
    },
    {
        icon: <FaRocket />,
        title: "6. Data Delivery",
        text: "The completed dataset is delivered in the agreed format and structure. Depending on the project, this may include Excel, CSV, database formats, JSON, or another required format.",
    },
];

const cleaningItems = [
    "Duplicate removal",
    "Data formatting",
    "Field standardization",
    "Missing data identification",
    "Data categorization",
    "Accuracy checks",
    "Quality control",
    "Data validation",
    "Database structuring",
];

const dataFormats = [
    { name: "Excel", icon: <FaFileExcel /> },
    { name: "CSV", icon: <FaFileAlt /> },
    { name: "JSON", icon: <FaCogs /> },
    { name: "SQL databases", icon: <FaDatabase /> },
    { name: "XML", icon: <FaFolderOpen /> },
    { name: "Structured spreadsheets", icon: <FaTasks /> },
    { name: "Other agreed formats", icon: <FaLayerGroup /> },
];

const whyChooseItems = [
    {
        image: "/images/services/service-inner/why-choose-data-extraction-img1.jpg",
        alt: "14+ Years of Experience",
        title: "14+ Years of Experience",
        text: "Tech2Globe has more than 14 years of experience supporting businesses with data and outsourcing requirements.",
    },
    {
        image: "/images/services/service-inner/why-choose-data-extraction-img4.jpg",
        alt: "Flexible Project Sizes",
        title: "Flexible Project Sizes",
        text: "We can support defined data extraction projects as well as larger recurring requirements, depending on the volume, sources, and complexity involved.",
    },
    {
        image: "/images/services/service-inner/why-choose-data-extraction-img3.jpg",
        alt: "Quality Control",
        title: "Quality Control",
        text: "Our data workflows can include structured quality checks and validation processes to help maintain data accuracy and consistency.",
    },
    {
        image: "/images/services/service-inner/why-choose-data-extraction-img2.jpg",
        alt: "Structured Data Delivery",
        title: "Structured Data Delivery",
        text: "We organize extracted information according to the fields and format required for your project instead of providing unstructured raw information.",
    },
    {
        image: "/images/services/service-inner/why-choose-data-extraction-img5.jpg",
        alt: "Business Specific Solutions",
        title: "Business Specific Solutions",
        text: "Every data project has different requirements. We customize the extraction workflow based on your data sources, required fields, volume, frequency, and delivery format.",
    },
];

export default function DataExtraction() {
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
                "@id": "https://www.tech2globe.com/data-extraction-services#webpage",
                url: "https://www.tech2globe.com/data-extraction-services",
                name: "Data Extraction Services | Web & Document Data Extraction",
                description:
                    "Get accurate data extraction services for websites, documents, PDFs, images, ecommerce and market research. Receive clean, structured data tailored to your business needs.",
                isPartOf: {
                    "@id": "https://www.tech2globe.com/#website",
                },
                about: {
                    "@id": "https://www.tech2globe.com/data-extraction-services#service",
                },
                publisher: {
                    "@id": "https://www.tech2globe.com/#organization",
                },
                breadcrumb: {
                    "@id": "https://www.tech2globe.com/data-extraction-services#breadcrumb",
                },
                inLanguage: "en",
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tech2globe.com/data-extraction-services#breadcrumb",
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
                        name: "Data Extraction Services",
                        item: "https://www.tech2globe.com/data-extraction-services",
                    },
                ],
            },
            {
                "@type": "Service",
                "@id": "https://www.tech2globe.com/data-extraction-services#service",
                name: "Data Extraction Services",
                serviceType: "Data Extraction Services",
                url: "https://www.tech2globe.com/data-extraction-services",
                description:
                    "Businesses rely on accurate data to understand customers, research markets, monitor competitors, manage products, and make informed decisions. But collecting information from websites, documents, images, databases, and other sources can be time consuming when done manually.",
                provider: {
                    "@id": "https://www.tech2globe.com/#organization",
                },
                mainEntityOfPage: {
                    "@id": "https://www.tech2globe.com/data-extraction-services#webpage",
                },
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tech2globe.com/data-extraction-services#faq",
                url: "https://www.tech2globe.com/data-extraction-services",
                name: "Data Extraction Services FAQs",
                isPartOf: {
                    "@id": "https://www.tech2globe.com/data-extraction-services#webpage",
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
            <Breadcrumb pageName="Data Extraction Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="data extraction services" />
                            <div className={Style.ContentDiv}>
                                <h1 className={`${Style.headingText} pb-3`}>
                                    Data Extraction Services for Accurate, Structured Business Data
                                </h1>
                                <p className="para-text">
                                    Businesses rely on accurate data to understand customers, research markets, monitor competitors, manage products, and make informed decisions. But collecting information from websites, documents, images, databases, and other sources can be time consuming when done manually.
                                </p>
                                <p className="para-text">
                                    Tech2Globe provides professional <strong>data extraction services</strong> to collect, organize, clean, and deliver business data in a structured and usable format. Our team works with different data sources and project requirements to help businesses turn scattered information into reliable datasets.
                                </p>
                                <p className="para-text">
                                    With 14+ years of experience in data and business process services, we support projects ranging from specific data extraction requirements to large scale recurring data collection.
                                </p>
                                <p className="para-text">
                                    Get accurate, structured data without spending hours collecting it manually.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaLightbulb />
                                    </span>
                                    What Are Data Extraction Services?
                                </h2>
                                <p className="para-text">
                                    Data extraction services involve collecting relevant information from different sources and converting it into a structured format that businesses can use for analysis, research, operations, or decision making.
                                </p>
                                <p className="para-text">
                                    Data can be extracted from websites, documents, PDFs, spreadsheets, images, scanned records, online marketplaces, social platforms, and other permitted sources.
                                </p>
                                <p className="para-text">
                                    For example, an ecommerce business may need product names, prices, specifications, ratings, and availability from multiple websites. A market research company may need information about competitors, products, locations, and market trends. A business may also need information from thousands of documents converted into a structured database.
                                </p>
                                <p className="para-text">
                                    Tech2Globe helps collect this information, organize it according to your requirements, perform quality checks, and deliver the final data in a suitable format.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaLayerGroup />
                                    </span>
                                    Our Data Extraction Services
                                </h2>
                                <p className="para-text">
                                    We provide data extraction solutions for different data sources, industries, and business requirements.
                                </p>
                                <div className={`${Style.PageAccordion} accordion`} id="accordionDataExtractionServices">
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
                                                    data-bs-parent="#accordionDataExtractionServices"
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
                                        <FaDatabase />
                                    </span>
                                    What Types of Data Can We Extract?
                                </h2>
                                <p className="para-text">
                                    The type of data we extract depends on your business requirements and the source being used.
                                </p>
                                <p className="para-text">Common data types include:</p>
                                <ul>
                                    {dataTypes.map((type) => (
                                        <li key={type}>{type}</li>
                                    ))}
                                </ul>
                                <p className="para-text">
                                    Before starting a project, we define the required fields, sources, output format, and validation requirements.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaUsers />
                                    </span>
                                    Data Extraction for Different Business Needs
                                </h2>
                                <p className="para-text">
                                    Data extraction can support several business functions and industries.
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

                                <div className={`${Style.CtaBlock} text-center my-4 py-4`}>
                                    <h3 className={Style.headingText}>Need Specific Data Extracted?</h3>
                                    <p className="para-text mb-3">
                                        Tell us your data source, required fields, and volume. Our team will suggest the right extraction approach.
                                    </p>
                                    <a href="/contact-us" className={Style.CtaButton}>
                                        Discuss Your Data Requirements
                                    </a>
                                </div>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaCogs />
                                    </span>
                                    Our Data Extraction Process
                                </h2>
                                <p className="para-text">
                                    We follow a structured process to maintain consistency and data quality throughout the project.
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
                                        <FaCheckCircle />
                                    </span>
                                    Data Cleaning and Validation
                                </h2>
                                <p className="para-text">
                                    Extracting information is only one part of a successful data project. The final dataset also needs to be organized and checked before it can be used effectively.
                                </p>
                                <p className="para-text">Our data extraction workflow can include:</p>
                                <ul>
                                    {cleaningItems.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                                <p className="para-text">
                                    This helps businesses work with cleaner and more consistent information.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaFileExcel />
                                    </span>
                                    Data Formats We Support
                                </h2>
                                <p className="para-text">
                                    We can deliver extracted data according to your operational requirements.
                                </p>
                                <p className="para-text">Common formats include:</p>
                                <ul className={Style.FormatList}>
                                    {dataFormats.map((format) => (
                                        <li className={Style.FormatItem} key={format.name}>
                                            <span className={Style.FormatIcon} aria-hidden="true">
                                                {format.icon}
                                            </span>
                                            <span>{format.name}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="para-text">
                                    The delivery format can be discussed during the requirement stage so the final data fits your existing workflow.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaHandshake />
                                    </span>
                                    Why Choose Tech2Globe for Data Extraction?
                                </h2>

                                {whyChooseItems.map((item) => (
                                    <div className="row mb-3" key={item.title}>
                                        <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-4 col-4">
                                            <div className={Style.ImageBox}>
                                                <Image
                                                    src={item.image}
                                                    alt={item.alt}
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xxl-11 col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12">
                                            <h4>{item.title}</h4>
                                            <p className="para-text mb-0">{item.text}</p>
                                        </div>
                                    </div>
                                ))}

                                <div className="row mb-3">
                                    <div className="col-xxl-1 col-xl-1 col-lg-1 col-md-1 col-sm-4 col-4">
                                        <div className={Style.ImageBox}>
                                            <span className={Style.FallbackIcon} aria-hidden="true">
                                                <FaGlobe />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-xxl-11 col-xl-11 col-lg-11 col-md-12 col-sm-12 col-12">
                                        <h4>Global Client Support</h4>
                                        <p className="para-text mb-0">
                                            Tech2Globe supports businesses across different markets and industries through its global operations and data processing capabilities.
                                        </p>
                                    </div>
                                </div>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaFilePdf />
                                    </span>
                                    Data Extraction Case Study
                                </h2>
                                <p className="para-text">
                                    Tech2Globe has handled data extraction projects involving large customer datasets.
                                </p>
                                <p className="para-text">
                                    In one project, the client was unable to efficiently extract customer information from its portal. Our team reviewed and classified the available data, created an SQL database for existing customers, and established a structured process for entering new customer records.
                                </p>
                                <p className="para-text">
                                    The project also included a ticketing workflow and two levels of quality control involving the internal team and client approval. Reporting was created on weekly, monthly, quarterly, and annual schedules.
                                </p>

                                <div className={`${Style.CtaBlock} text-center my-4 py-4`}>
                                    <h3 className={Style.headingText}>Get a Data Extraction Quote</h3>
                                    <p className="para-text mb-3">
                                        Share your sources, data requirements, and preferred output format to receive a tailored quote.
                                    </p>
                                    <a href="/contact-us" className={Style.CtaButton}>
                                        Request a Data Extraction Quote
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

            <CaseStudiesService caseStudies={caseStudies} />
            <ClientSlider testimonials={testimonials} />
            <FaqSection faqs={faqs} />
        </>
    );
}
