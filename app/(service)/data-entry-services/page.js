import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import {
    FaBuilding,
    FaCheckCircle,
    FaClipboardList,
    FaCogs,
    FaDatabase,
    FaFileAlt,
    FaFileExcel,
    FaFilePdf,
    FaHandshake,
    FaHeartbeat,
    FaHome,
    FaImages,
    FaLayerGroup,
    FaLightbulb,
    FaSearch,
    FaShieldAlt,
    FaShoppingCart,
    FaSyncAlt,
    FaUniversity,
    FaUpload,
    FaUsers,
} from "react-icons/fa";

export const metadata = {
    title: "Data Entry Services | Accurate & Scalable Outsourcing",
    description:
        "Get accurate, scalable data entry services for documents, databases, ecommerce and business data. Outsource data entry to Tech2Globe today.",
    keywords: [
        "Outsource Data Entry Services",
        "Data Entry Outsourcing Company",
        "Outsourcing Data Entry Services",
        "Data Entry Services Outsourcing",
        "Outsource Data Entry",
        "Data Entry Outsourcing",
    ],
    openGraph: {
        title: "Data Entry Services | Accurate & Scalable Outsourcing",
        siteName: "Tech2Globe Web Solutions LLP",
        description:
            "Get accurate, scalable data entry services for documents, databases, ecommerce and business data. Outsource data entry to Tech2Globe today.",
        url: "https://stagenew.tech2globe.tech/data-entry-services",
    },
    twitter: {
        card: "summary_large_image",
        title: "Data Entry Services | Accurate & Scalable Outsourcing",
        description:
            "Get accurate, scalable data entry services for documents, databases, ecommerce and business data. Outsource data entry to Tech2Globe today.",
    },
    alternates: {
        canonical: "https://stagenew.tech2globe.tech/data-entry-services",
    },
};

const pageHeaderData = {
    title: "Data Entry Services for Accurate and Scalable Business Data Management",
    description:
        "Tech2Globe provides professional data entry services that help businesses capture, organize, verify, and maintain data accurately at scale — from documents and databases to ecommerce product information.",
    buttonText: "Get a Free Quote",
    buttonLink: "/contact-us",
    backgroundImage: "/images/services/data_management_services_feature.jpg",
};

const resources = [
    { id: 1, name: "Case Studies", path: "/case-studies" },
    { id: 2, name: "Clients", path: "/clients" },
    { id: 3, name: "Testimonial", path: "/testimonial" },
    { id: 4, name: "Financial Data Entry Services", path: "/financial-data-entry-services" },
    { id: 5, name: "Catalog Management", path: "/catalog-management-services" },
    { id: 6, name: "Data Processing Services", path: "/data-processing-services" },
    { id: 7, name: "Data Product Entry", path: "/data-product-entry" },
    { id: 8, name: "Financial Data Entry", path: "/financial-data-entry" },
    { id: 9, name: "Image Data Entry", path: "/image-data-entry-services" },
    { id: 10, name: "Insurance Claims Data Entry", path: "/insurance-claims-data-entry-services" },
    { id: 11, name: "Offline Data Entry", path: "/offline-data-entry-services" },
    { id: 12, name: "Online Data Entry", path: "/online-data-entry-services" },
    { id: 13, name: "PDF Data Entry", path: "/pdf-data-entry-services" },
    { id: 14, name: "Product Data Entry", path: "/product-data-entry-services" },
    { id: 15, name: "Yellow & White Pages Data Entry", path: "/yellow-and-white-pages-data-entry-services" },
    { id: 16, name: "Accounting Data Entry", path: "/accounting-data-entry-services" },
];

const usefulLinks = [
    { id: 17, name: "Catalog Processing", path: "/catalog-processing-services" },
    { id: 18, name: "Data Conversion", path: "/data-conversion-services" },
    { id: 19, name: "Data Extraction", path: "/data-extraction-services" },
    { id: 20, name: "Document Processing", path: "/document-processing-services" },
    { id: 21, name: "Forms Processing", path: "/forms-processing-services" },
    { id: 22, name: "Insurance Claims Processing", path: "/insurance-claims-processing-services" },
    { id: 23, name: "Invoice Processing", path: "/invoice-processing-services" },
    { id: 24, name: "Order Processing", path: "/order-processing-services" },
    { id: 25, name: "Survey Forms Processing", path: "/survey-forms-processing" },
];

const sidebarSections = [
    { heading: "Resources", links: resources },
    { heading: "Useful Links", links: usefulLinks },
];

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Our organization is pleased to collaborate with Tech2Globe. We are completely delighted with your data input services, which are always meeting our changing requirements.",
        name: "Catherine Adams, Procurement Manager",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Their team pays close attention to detail and precision in every assignment they complete. They not only complete assignments on time, but they go above and beyond to guarantee that the data submitted is of the best quality.",
        name: "Jennifer Smith, Project Manager",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "We applaud your prompt response to our demands and appreciate your eagerness to learn our processes and standards.",
        name: "Daniel Evans, Project Manager",
    },
    {
        id: 4,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe delivered the results on schedule, followed instructions/requests closely, and supplied output in a professional manner. Overall, I was extremely impressed with their team and will not hesitate to hire them again for future projects.",
        name: " Rachel Carter, Operations Coordinator",
    },
    {
        id: 5,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "They have a skilled staff with exceptional attention to detail and response to our online research needs. I definitely recommend them to anyone looking for economical, high-quality online research work.",
        name: "Sophia Martinez, Research Analyst",
    },
];

const faqs = [
    {
        id: "One",
        question: "What are data entry services?",
        answer:
            "Data entry services involve entering, updating, organizing, validating, and maintaining information in digital systems such as spreadsheets, databases, websites, applications, and business platforms.",
    },
    {
        id: "Two",
        question: "What types of data can be outsourced?",
        answer:
            "Businesses can outsource documents, forms, spreadsheets, product information, customer records, invoices, databases, scanned records, and other structured or unstructured information.",
    },
    {
        id: "Three",
        question: "What is data entry outsourcing?",
        answer:
            "Data entry outsourcing means assigning data entry and related processing tasks to an external service provider instead of completing all the work with an internal team.",
    },
    {
        id: "Four",
        question: "Why should businesses outsource data entry?",
        answer:
            "Outsourcing can help businesses reduce repetitive workload, process large volumes of information, improve operational efficiency, and allow internal employees to focus on core business activities.",
    },
    {
        id: "Five",
        question: "How do you ensure data entry accuracy?",
        answer:
            "Accuracy can be supported through standardized instructions, data validation, verification, quality checks, duplicate checking, and project specific review procedures.",
    },
    {
        id: "Six",
        question: "Can you handle high volume data entry projects?",
        answer:
            "Yes. Data entry projects can be structured around the volume, complexity, turnaround time, and workflow requirements of the business.",
    },
    {
        id: "Seven",
        question: "Can you handle confidential business data?",
        answer:
            "Yes. Data handling procedures and confidentiality requirements can be defined according to the requirements of the project before processing begins.",
    },
    {
        id: "Eight",
        question: "How can I outsource my data entry project to Tech2Globe?",
        answer:
            "You can share your project requirements, data volume, source format, expected output, and turnaround requirements with our team. We can then recommend an appropriate data entry workflow.",
    },
];

const dataSources = [
    "PDF documents",
    "Scanned documents",
    "Images",
    "Microsoft Excel files",
    "Word documents",
    "Online forms",
    "Paper records",
    "Business databases",
    "Product catalogs",
    "Customer records",
    "Invoices and transaction records",
];

const serviceAccordionItems = [
    {
        id: "One",
        title: "Online Data Entry",
        paragraphs: [
            "We enter and update information directly into websites, databases, online forms, business platforms, and other web based systems.",
            "This can include customer information, registration records, product information, directories, and other structured data.",
        ],
        link: { href: "/online-data-entry-services", label: "Online Data Entry Services" },
    },
    {
        id: "Two",
        title: "Offline Data Entry",
        paragraphs: [
            "Our teams can process information from documents, spreadsheets, images, scanned records, and other offline sources and convert it into the required digital format.",
        ],
        link: { href: "/offline-data-entry-services", label: "Offline Data Entry Services" },
    },
    {
        id: "Three",
        title: "Document Data Entry",
        paragraphs: [
            "We extract and enter information from business documents into spreadsheets, databases, applications, or other systems.",
        ],
    },
    {
        id: "Four",
        title: "PDF Data Entry",
        paragraphs: [
            "PDF files often contain valuable information that businesses need to transfer into editable or structured formats. Our teams can process PDF based information according to your required format.",
        ],
        link: { href: "/pdf-data-entry-services", label: "PDF Data Entry Services" },
    },
    {
        id: "Five",
        title: "Image Data Entry",
        paragraphs: [
            "We can capture relevant information from images and scanned records and enter it into structured digital files.",
        ],
        link: { href: "/image-data-entry-services", label: "Image Data Entry Services" },
    },
    {
        id: "Six",
        title: "Form Data Entry",
        paragraphs: [
            "We process information collected through application forms, surveys, registration forms, feedback forms, and other business forms.",
        ],
    },
    {
        id: "Seven",
        title: "Database Data Entry",
        paragraphs: [
            "Our data entry teams can update existing records, add new information, maintain databases, and organize information according to predefined requirements.",
        ],
    },
    {
        id: "Eight",
        title: "Data Capture and Digitization",
        paragraphs: [
            "We help businesses convert information from physical or unstructured sources into organized digital records that are easier to access and manage.",
        ],
    },
];

const ecommerceTasks = [
    "Product title and description entry",
    "Product attribute updates",
    "SKU and product code entry",
    "Pricing and inventory updates",
    "Category assignment",
    "Product image information",
    "Product catalog management",
    "Marketplace data entry",
    "Bulk product uploads",
    "Product information updates",
];

const industries = [
    {
        icon: <FaHeartbeat />,
        title: "Healthcare",
        text: "Support for medical records, patient information, forms, reports, and other healthcare related data.",
    },
    {
        icon: <FaUniversity />,
        title: "Finance and Accounting",
        text: "Data entry support for financial records, invoices, transaction information, spreadsheets, and accounting documents.",
    },
    {
        icon: <FaShieldAlt />,
        title: "Insurance",
        text: "Processing insurance forms, policy information, claims related records, and other structured information.",
    },
    {
        icon: <FaHome />,
        title: "Real Estate",
        text: "Data entry for property records, listings, customer information, documents, and real estate databases.",
    },
    {
        icon: <FaShoppingCart />,
        title: "Retail and Ecommerce",
        text: "Product information, catalogs, inventory records, customer information, and marketplace data.",
    },
    {
        icon: <FaBuilding />,
        title: "Other Industries",
        text: "We can also support businesses in logistics, education, professional services, and other sectors that handle large volumes of business data.",
    },
];

const processSteps = [
    {
        icon: <FaSearch />,
        title: "1. Understand Your Requirements",
        text: "We first review your data, instructions, expected output, volume, and required turnaround time.",
    },
    {
        icon: <FaClipboardList />,
        title: "2. Prepare the Data",
        text: "The source information is organized according to the requirements of the project.",
    },
    {
        icon: <FaUpload />,
        title: "3. Enter and Process Information",
        text: "Our data entry team processes the information using the agreed format, system, spreadsheet, database, or platform.",
    },
    {
        icon: <FaDatabase />,
        title: "4. Validate the Data",
        text: "Entered information is reviewed for missing fields, formatting problems, inconsistencies, and other potential errors.",
    },
    {
        icon: <FaCheckCircle />,
        title: "5. Quality Check",
        text: "The completed work goes through defined quality control procedures before delivery.",
    },
    {
        icon: <FaSyncAlt />,
        title: "6. Final Delivery",
        text: "The processed data is delivered in the required format or updated directly within the agreed system.",
    },
];

const accuracyItems = [
    "Clearly defined data entry instructions",
    "Standardized formats",
    "Data validation",
    "Duplicate checks",
    "Field level verification",
    "Quality control reviews",
    "Sample based checking",
    "Error correction before final delivery",
];

const whyChooseItems = [
    {
        icon: <FaUsers />,
        title: "Experienced Data Entry Teams",
        text: "Our teams handle different types of business data and follow project specific instructions.",
    },
    {
        icon: <FaLayerGroup />,
        title: "Scalable Support",
        text: "You can outsource a specific project or use ongoing data entry support based on your operational requirements.",
    },
    {
        icon: <FaCheckCircle />,
        title: "Quality Focused Processing",
        text: "Defined validation and quality checking procedures help reduce errors and inconsistencies.",
    },
    {
        icon: <FaCogs />,
        title: "Flexible Workflows",
        text: "Projects can be structured around your preferred formats, systems, processes, and delivery requirements.",
    },
    {
        icon: <FaBuilding />,
        title: "Multi Industry Experience",
        text: "We support data intensive operations across ecommerce, finance, healthcare, insurance, retail, real estate, and other industries.",
    },
    {
        icon: <FaHandshake />,
        title: "Cost Efficient Outsourcing",
        text: "Outsourcing repetitive data entry work can help businesses reduce internal workload and allocate employees to more strategic activities.",
    },
];

const outsourcingBenefits = [
    "Reduce repetitive administrative work",
    "Process large volumes of information",
    "Improve data consistency",
    "Keep databases updated",
    "Organize unstructured information",
    "Reduce internal workload",
    "Support ecommerce catalog operations",
    "Scale data processing when requirements increase",
    "Allow internal teams to focus on core business activities",
];

const whoCanOutsource = [
    "Small businesses",
    "Growing companies",
    "Ecommerce businesses",
    "Online retailers",
    "Enterprises",
    "Agencies",
    "Healthcare organizations",
    "Financial businesses",
    "Real estate companies",
    "Professional service providers",
];

export default function DataEntry() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.tech2globe.com/#organization",
                name: "Tech2Globe",
                url: "https://www.tech2globe.com/",
            },
            {
                "@type": "WebSite",
                "@id": "https://www.tech2globe.com/#website",
                url: "https://www.tech2globe.com/",
                name: "Tech2Globe",
                publisher: {
                    "@id": "https://www.tech2globe.com/#organization",
                },
            },
            {
                "@type": "WebPage",
                "@id": "https://www.tech2globe.com/data-entry-services#webpage",
                url: "https://www.tech2globe.com/data-entry-services",
                name: "Data Entry Services | Accurate & Scalable Outsourcing",
                description:
                    "Get accurate, scalable data entry services for documents, databases, ecommerce and business data. Outsource data entry to Tech2Globe today.",
                isPartOf: {
                    "@id": "https://www.tech2globe.com/#website",
                },
                about: {
                    "@id": "https://www.tech2globe.com/data-entry-services#service",
                },
                breadcrumb: {
                    "@id": "https://www.tech2globe.com/data-entry-services#breadcrumb",
                },
                mainEntity: {
                    "@id": "https://www.tech2globe.com/data-entry-services#service",
                },
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tech2globe.com/data-entry-services#breadcrumb",
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
                        name: "Data Entry Services",
                        item: "https://www.tech2globe.com/data-entry-services",
                    },
                ],
            },
            {
                "@type": "Service",
                "@id": "https://www.tech2globe.com/data-entry-services#service",
                name: "Data Entry Services",
                serviceType: [
                    "Online data entry",
                    "Offline data entry",
                    "Document data entry",
                    "PDF data entry",
                    "Image data entry",
                    "Form data entry",
                    "Database data entry",
                    "Data capture and digitization",
                    "Ecommerce data entry",
                ],
                description:
                    "Tech2Globe provides professional data entry services to help businesses capture, organize, verify, and maintain documents, spreadsheets, databases, forms, product information, records, and other business data.",
                url: "https://www.tech2globe.com/data-entry-services",
                provider: {
                    "@id": "https://www.tech2globe.com/#organization",
                },
                mainEntityOfPage: {
                    "@id": "https://www.tech2globe.com/data-entry-services#webpage",
                },
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tech2globe.com/data-entry-services#faq",
                url: "https://www.tech2globe.com/data-entry-services",
                isPartOf: {
                    "@id": "https://www.tech2globe.com/data-entry-services#webpage",
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
            <Breadcrumb pageName="Data Entry Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Data Entry Services" />
                            <div className={Style.ContentDiv}>
                                <h1 className={`${Style.headingText} pb-3`}>
                                    Data Entry Services for Accurate and Scalable Business Data Management
                                </h1>
                                <p className="para-text">
                                    Businesses rely on accurate data to manage customers, products, documents, transactions, and daily operations. But entering and maintaining large amounts of information can take significant time and resources.
                                </p>
                                <p className="para-text">
                                    Tech2Globe provides professional <strong>data entry services</strong> that help businesses capture, organize, verify, and maintain data accurately at scale. Our teams can handle documents, spreadsheets, databases, forms, product information, records, and other business data according to your requirements.
                                </p>
                                <p className="para-text">
                                    Whether you need ongoing data entry support or assistance with a high volume project, our data entry outsourcing services can help reduce repetitive workload, improve data quality, and allow your internal team to focus on higher value activities.
                                </p>

                                <div className={`${Style.CtaBlock} text-center my-4 py-4`}>
                                    <a href="/contact-us" className={Style.CtaButton}>
                                        Get a Free Quote
                                    </a>
                                </div>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaLightbulb />
                                    </span>
                                    Outsourced Data Entry Services for Businesses
                                </h2>
                                <p className="para-text">
                                    Outsourcing data entry allows businesses to process large volumes of information without placing the entire workload on their internal employees.
                                </p>
                                <p className="para-text">
                                    Tech2Globe works with businesses that need reliable support for routine data entry, database updates, document processing, ecommerce data management, and other data intensive tasks.
                                </p>
                                <p className="para-text">
                                    Our data entry teams can work with different data sources and formats, including:
                                </p>
                                <ul className={Style.SourceList}>
                                    {dataSources.map((source) => (
                                        <li className={Style.SourceItem} key={source}>
                                            <span aria-hidden="true">
                                                {source.includes("PDF") ? (
                                                    <FaFilePdf />
                                                ) : source.includes("Excel") ? (
                                                    <FaFileExcel />
                                                ) : source.includes("Image") ? (
                                                    <FaImages />
                                                ) : source.includes("database") || source.includes("Database") ? (
                                                    <FaDatabase />
                                                ) : (
                                                    <FaFileAlt />
                                                )}
                                            </span>
                                            <span>{source}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="para-text">
                                    We follow defined instructions and quality checks to help maintain consistency across large data sets.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaLayerGroup />
                                    </span>
                                    Our Data Entry Services
                                </h2>
                                <p className="para-text">
                                    Tech2Globe offers a range of data entry solutions based on the type, volume, and complexity of your information.
                                </p>
                                <div className={`${Style.PageAccordion} accordion`} id="accordionDataEntryServices">
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
                                                    data-bs-parent="#accordionDataEntryServices"
                                                >
                                                    <div className={`${Style.AccordionBody} accordion-body`}>
                                                        {item.paragraphs.map((paragraph, pIndex) => (
                                                            <p
                                                                key={pIndex}
                                                                className={`para-text${
                                                                    !item.link &&
                                                                    pIndex === item.paragraphs.length - 1
                                                                        ? " mb-0"
                                                                        : ""
                                                                }`}
                                                            >
                                                                {paragraph}
                                                            </p>
                                                        ))}
                                                        {item.link && (
                                                            <p className="para-text mb-0">
                                                                <a href={item.link.href}>{item.link.label}</a>
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <p className="para-text">
                                    Explore our individual data entry services to find the solution that matches your requirements.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaShoppingCart />
                                    </span>
                                    Ecommerce Data Entry Services
                                </h2>
                                <p className="para-text">
                                    Ecommerce businesses frequently need to manage thousands of product records across websites and marketplaces.
                                </p>
                                <p className="para-text">
                                    Tech2Globe provides ecommerce data entry support for tasks such as:
                                </p>
                                <ul className={Style.ListColTwo}>
                                    {ecommerceTasks.map((task) => (
                                        <li key={task}>{task}</li>
                                    ))}
                                </ul>
                                <p className="para-text">
                                    Our ecommerce data entry services can help businesses keep product information organized and consistent across their online sales channels.
                                </p>
                                <div className={Style.InternalLinks}>
                                    <a href="/product-data-entry-services">Product Data Entry Services</a>
                                    <a href="/bulk-product-upload-services">Bulk Product Upload Services</a>
                                    <a href="/ecommerce-back-office-support">Ecommerce Services</a>
                                </div>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaBuilding />
                                    </span>
                                    Industry Specific Data Entry Solutions
                                </h2>
                                <p className="para-text">
                                    Different industries work with different types of information and documentation. Our data entry services can be adapted to the specific requirements of your business.
                                </p>
                                <div className="row">
                                    {industries.map((industry) => (
                                        <div
                                            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3"
                                            key={industry.title}
                                        >
                                            <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                                <div className={Style.Icon}>{industry.icon}</div>
                                                <h5 className="fw-bold mb-2">{industry.title}</h5>
                                                <p className="text-muted medium mb-0">{industry.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaCogs />
                                    </span>
                                    Our Data Entry Process
                                </h2>
                                <p className="para-text">
                                    A structured workflow helps maintain consistency when processing large amounts of information.
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
                                    How We Maintain Data Entry Accuracy
                                </h2>
                                <p className="para-text">
                                    Data accuracy is important because incorrect information can affect business operations, reporting, customer records, and decision making.
                                </p>
                                <p className="para-text">Our approach can include:</p>
                                <ul className={Style.ListColTwo}>
                                    {accuracyItems.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                                <p className="para-text">
                                    The exact quality control process can be adapted according to the complexity, volume, and accuracy requirements of your project.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaShieldAlt />
                                    </span>
                                    Secure Data Entry Outsourcing
                                </h2>
                                <p className="para-text">
                                    Businesses may need to share confidential information when outsourcing data entry. Data handling requirements should therefore be defined before a project begins.
                                </p>
                                <p className="para-text">
                                    Tech2Globe can work according to client specific requirements for handling business information, access permissions, file sharing, and data processing.
                                </p>
                                <p className="para-text">
                                    For projects involving sensitive or confidential information, the appropriate security and confidentiality requirements can be established as part of the engagement.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaHandshake />
                                    </span>
                                    Why Choose Tech2Globe for Data Entry Services?
                                </h2>
                                <p className="para-text">
                                    Choosing a data entry partner is about more than processing information. Businesses also need consistency, communication, scalability, and quality control.
                                </p>
                                <p className="para-text">Tech2Globe provides:</p>
                                <div className="row">
                                    {whyChooseItems.map((item) => (
                                        <div
                                            className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3"
                                            key={item.title}
                                        >
                                            <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                                <div className={Style.Icon}>{item.icon}</div>
                                                <h5 className="fw-bold mb-2">{item.title}</h5>
                                                <p className="text-muted medium mb-0">{item.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaUsers />
                                    </span>
                                    Benefits of Outsourcing Data Entry
                                </h2>
                                <p className="para-text">
                                    A professional data entry outsourcing partner can help businesses:
                                </p>
                                <ul className={Style.ListColTwo}>
                                    {outsourcingBenefits.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                                <p className="para-text">
                                    The right outsourcing model depends on your data volume, complexity, turnaround requirements, and internal resources.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaBuilding />
                                    </span>
                                    Who Can Outsource Data Entry?
                                </h2>
                                <p className="para-text">Our data entry services can support:</p>
                                <ul className={Style.ListColTwo}>
                                    {whoCanOutsource.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                                <p className="para-text">
                                    Whether you have a one time data conversion project or require ongoing data entry support, the workflow can be structured around your business requirements.
                                </p>

                                <div className={`${Style.CtaBlock} text-center my-4 py-4`}>
                                    <h3>Get Reliable Data Entry Support for Your Business</h3>
                                    <p className="mb-2">
                                        Have a large volume of documents, records, product information, or business data that needs to be processed?
                                    </p>
                                    <p className="mb-3">
                                        Tech2Globe can help you manage repetitive data entry work with structured workflows, quality checks, and scalable support.
                                    </p>
                                    <a href="/contact-us" className={Style.CtaButton}>
                                        Talk to Our Data Entry Experts
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
