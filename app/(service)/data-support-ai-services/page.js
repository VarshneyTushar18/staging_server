import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import {
  FaBrain,
  FaBullseye,
  FaChartBar,
  FaCheckCircle,
  FaCogs,
  FaDatabase,
  FaGraduationCap,
  FaHandshake,
  FaHeadset,
  FaHeartbeat,
  FaIndustry,
  FaLaptopCode,
  FaLayerGroup,
  FaLightbulb,
  FaListAlt,
  FaMedal,
  FaPaperPlane,
  FaRocket,
  FaRocketchat,
  FaSearch,
  FaShoppingCart,
  FaStore,
  FaTruck,
  FaUniversity,
  FaBriefcase,
  FaUsers,
} from "react-icons/fa";

export const metadata = {
  title: "AI Data Services | AI Data Management & Processing",
  description:
    "Get reliable AI data services for data management, processing, preparation, quality checks, transformation, and ongoing AI data support. Talk to our experts.",
  keywords: [
    "AI-Based Data Support Services",
    "AI Data Management",
    "AI Data Processing Services",
    "AI Automation Solutions",
    "AI Data Analytics",
    "AI Data Entry Support",
  ],
  openGraph: {
    title: "AI Data Services | AI Data Management & Processing",
    siteName: "Tech2Globe Web Solutions LLP",
    description:
      "Get reliable AI data services for data management, processing, preparation, quality checks, transformation, and ongoing AI data support. Talk to our experts.",
    url: "https://stagenew.tech2globe.tech/data-support-ai-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Data Services | AI Data Management & Processing",
    description:
      "Get reliable AI data services for data management, processing, preparation, quality checks, transformation, and ongoing AI data support. Talk to our experts.",
  },
  alternates: {
    canonical: "https://stagenew.tech2globe.tech/data-support-ai-services",
  },
};

const pageHeaderData = {
  title: "AI Data Services for Smarter AI Operations",
  description:
    "Tech2Globe provides AI data services that help businesses prepare, process, manage, validate, and maintain data for AI applications. Our team supports data management, processing, preparation, quality checks, transformation, and ongoing data operations.",
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
    question: "What are AI data services?",
    answer:
      "AI data services include data preparation, processing, management, quality checking, validation, transformation, and other activities required to support AI applications and data workflows.",
  },
  {
    id: "Two",
    question: "What types of AI data support does Tech2Globe provide?",
    answer:
      "Tech2Globe provides AI data management, data processing, data preparation, data quality and validation, data transformation, and ongoing AI data operations support.",
  },
  {
    id: "Three",
    question: "Why is data quality important for AI?",
    answer:
      "AI applications depend on the quality of the data they use. Inaccurate, incomplete, or inconsistent data can affect processing, analysis, and the reliability of AI outputs.",
  },
  {
    id: "Four",
    question: "Can Tech2Globe handle large AI data projects?",
    answer:
      "Yes. Our AI data services can be structured according to project requirements, data volume, workflows, timelines, and ongoing operational needs.",
  },
  {
    id: "Five",
    question: "Can AI data services be customized?",
    answer:
      "Yes. We can customize the workflow based on your data sources, business requirements, AI application, processing requirements, quality standards, and expected output.",
  },
  {
    id: "Six",
    question: "Do you provide ongoing AI data support?",
    answer:
      "Yes. Businesses can use our AI data support services for ongoing data processing, management, quality checks, preparation, and other operational requirements.",
  },
];

const serviceAccordionItems = [
  {
    id: "One",
    title: "AI Data Management",
    paragraphs: [
      "Effective AI data management helps businesses organize and maintain the data required for AI applications. We can help structure data workflows, maintain data consistency, organize information, and support ongoing data operations.",
      "Our data management services can help businesses improve accessibility and maintain better control over the information used across their AI workflows.",
    ],
  },
  {
    id: "Two",
    title: "AI Data Processing",
    paragraphs: [
      "Large volumes of raw data often need to be processed before they can be used effectively by AI systems. Our AI data processing services help businesses handle, organize, clean, and transform data according to project requirements.",
      "We support structured and unstructured data processing workflows and help prepare information for downstream AI applications, analytics, and automation.",
    ],
  },
  {
    id: "Three",
    title: "AI Data Preparation",
    paragraphs: [
      "Data preparation is an important step before data can be used for AI and machine learning applications. Our team can help organize source data, remove unnecessary information, standardize formats, and prepare datasets according to defined requirements.",
      "Proper data preparation can help improve data usability and create a more reliable foundation for AI applications.",
    ],
  },
  {
    id: "Four",
    title: "AI Data Quality and Validation",
    paragraphs: [
      "Data quality directly affects the reliability of AI outputs. Inconsistent, incomplete, duplicated, or incorrect information can create problems during processing and analysis.",
      "Our AI data support services include data quality checks and validation activities designed to identify inconsistencies and improve the overall quality of datasets.",
    ],
  },
  {
    id: "Five",
    title: "AI Data Transformation",
    paragraphs: [
      "Businesses often receive data from multiple systems and sources. This information may need to be transformed into a consistent format before it can be used by AI applications.",
      "Our team can support data transformation activities to help businesses organize information into formats that are easier to process, analyze, and integrate into existing workflows.",
    ],
  },
  {
    id: "Six",
    title: "AI Data Operations Support",
    paragraphs: [
      "Managing AI related data can become an ongoing operational requirement. Tech2Globe provides AI data support for businesses that need regular assistance with data processing, quality checks, organization, and maintenance.",
      "Our flexible approach allows businesses to use dedicated support for specific projects or ongoing data operations.",
    ],
  },
];

const businessBenefits = [
  {
    icon: <FaMedal />,
    title: "Improve Data Quality",
    text: "Reliable AI starts with reliable data. Data quality processes help identify errors, inconsistencies, duplicates, and missing information that could affect downstream applications.",
  },
  {
    icon: <FaDatabase />,
    title: "Prepare Data for AI Applications",
    text: "Raw business data is not always ready for AI use. Data preparation helps organize and structure information so it can be used more effectively across AI workflows.",
  },
  {
    icon: <FaListAlt />,
    title: "Streamline Data Processing",
    text: "Manual data processing can consume significant time when businesses work with large datasets. Structured AI data workflows can help reduce repetitive work and improve operational efficiency.",
  },
  {
    icon: <FaBrain />,
    title: "Support AI and Machine Learning Workflows",
    text: "AI and machine learning applications require suitable data throughout their lifecycle. Our services can support data preparation, processing, validation, and ongoing management requirements.",
  },
  {
    icon: <FaRocket />,
    title: "Scale Data Operations",
    text: "As businesses expand their AI initiatives, their data requirements can increase quickly. Outsourcing selected data operations can help businesses handle growing workloads without putting additional pressure on internal teams.",
  },
];

const applications = [
  {
    icon: <FaLightbulb />,
    title: "Generative AI",
    text: "Generative AI applications require relevant and well organized data to support different workflows. We can help businesses prepare and manage data used across generative AI related projects.",
  },
  {
    icon: <FaBrain />,
    title: "Machine Learning",
    text: "Machine learning applications depend on suitable data for development and ongoing operations. Our team can support data preparation, processing, quality checks, and related data activities.",
  },
  {
    icon: <FaHeadset />,
    title: "AI Customer Support",
    text: "AI powered customer support systems can work with customer and business information from different sources. Data management and validation can help maintain better quality information for these workflows.",
  },
  {
    icon: <FaShoppingCart />,
    title: "Ecommerce AI",
    text: "Ecommerce businesses generate large amounts of product, customer, order, and behavioral data. Our services can support data processing and organization for AI based ecommerce applications.",
  },
  {
    icon: <FaChartBar />,
    title: "Business Intelligence",
    text: "Businesses use data to identify trends, understand performance, and make informed decisions. Proper data processing and management can help create a stronger foundation for analytics and business intelligence workflows.",
  },
];

const processSteps = [
  {
    icon: <FaSearch />,
    title: "1. Data Requirements Analysis",
    text: "We first understand your business objectives, data sources, application requirements, volume, formats, and expected outcomes.",
  },
  {
    icon: <FaDatabase />,
    title: "2. Data Collection and Preparation",
    text: "Relevant data is collected and prepared according to the defined project requirements. This can include organizing, cleaning, formatting, and structuring information.",
  },
  {
    icon: <FaCogs />,
    title: "3. Data Processing",
    text: "The prepared data is processed according to the required workflow. Our team follows the defined specifications to maintain consistency throughout the process.",
  },
  {
    icon: <FaCheckCircle />,
    title: "4. Quality Checks",
    text: "Data is reviewed for potential errors, inconsistencies, missing information, duplicates, and other quality issues based on the project requirements.",
  },
  {
    icon: <FaPaperPlane />,
    title: "5. Delivery and Ongoing Support",
    text: "Once the required work is completed, the processed data is delivered according to the agreed format. We can also provide ongoing AI data support services for businesses that require continuous assistance.",
  },
];

const whyChooseFocus = [
  "Structured data workflows",
  "Data quality and validation",
  "Scalable data processing",
  "Flexible project support",
  "Ongoing data operations",
  "Business specific requirements",
  "Support for AI and machine learning workflows",
];

const industries = [
  { name: "Ecommerce", icon: <FaShoppingCart /> },
  { name: "Retail", icon: <FaStore /> },
  { name: "Healthcare", icon: <FaHeartbeat /> },
  { name: "Finance", icon: <FaUniversity /> },
  { name: "Logistics", icon: <FaTruck /> },
  { name: "Technology", icon: <FaLaptopCode /> },
  { name: "Manufacturing", icon: <FaIndustry /> },
  { name: "Education", icon: <FaGraduationCap /> },
  { name: "Professional services", icon: <FaBriefcase /> },
  { name: "Customer service", icon: <FaHeadset /> },
];

const portfolio = [
  {
    title: "Product Uploading",
    items: [
      {
        title: "Lacanvas",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.lacanvas.com/",
        img: "/images/services/portfolio-img/lacanvas.jpg",
      },
      {
        title: "Linkcycle",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.linkcycle.com/",
        img: "/images/services/portfolio-img/linkcycle.jpg",
      },
      {
        title: "Silver Goldinto Cash",
        tech: "PHP, Mysql",
        link: "http://www.silvergoldintocash.com/",
        img: "/images/services/portfolio-img/silvergoldintocash.jpg",
      },
      {
        title: "Travel Blue",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.travel-blue.com/",
        img: "/images/services/portfolio-img/travel-blue.jpg",
      },
      {
        title: "Windsor One",
        tech: "PHP, Mysql, Jquery.",
        link: "https://windsorone.com/",
        img: "/images/services/portfolio-img/windsorone.jpg",
      },
      {
        title: "Travel Blue",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.travel-blue.com/",
        img: "/images/services/portfolio-img/travel-blue.jpg",
      },
    ],
  },
  {
    title: "Web Stores Design & Dev",
    items: [
      {
        title: "Consult for PPP",
        tech: "Asp.net, C#, SQL Server, Jquery",
        link: "https://consultforppp.com/",
        img: "/images/services/portfolio-img/consultforppp.jpg",
      },
      {
        title: "Devouttechs",
        tech: "Asp.net, C#, SQL Server, Jquery",
        link: "http://devouttechs.com/",
        img: "/images/services/portfolio-img/devouttechs.jpg",
      },
      {
        title: "Geturkart",
        tech: "Asp.net, C#, SQL Server, Jquery",
        link: "https://geturkart.com/",
        img: "/images/services/portfolio-img/geturkart.jpg",
      },
      {
        title: "Nopextensions",
        tech: "Asp.net, C#, SQL Server, Jquery",
        link: "http://nopextensions.com/",
        img: "/images/services/portfolio-img/nopextensions.jpg",
      },
    ],
  },
  {
    title: "Indian Ecomm MarketPlace",
    items: [
      {
        title: "Windsor One",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.windsorone.com/",
        img: "/images/services/portfolio-img/windsorone.jpg",
      },
      {
        title: "Zphotoedit",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.zphotoedit.com/",
        img: "/images/services/portfolio-img/zphotoedit.jpg",
      },
      {
        title: "My Orthosoft",
        tech: "Cake PHP",
        link: "http://www.myorthosoft.com/",
        img: "/images/services/portfolio-img/myorthosoft.jpg",
      },
      {
        title: "Saleswarp",
        tech: "Cake PHP",
        link: "https://saleswarp.com/",
        img: "/images/services/portfolio-img/saleswarp.jpg",
      },
    ],
  },
  {
    title: "International Ecomm Marketplace",
    subTabs: [
      {
        title: "Shopify",
        items: [
          {
            title: "Shop Modern Accessory",
            tech: "Shopify",
            link: "http://shopmodernaccessory.com/",
            img: "/images/services/portfolio-img/shopmodernaccessory.jpg",
          },
          {
            title: "Donna Bella Jewelry",
            tech: "Shopify",
            link: "http://www.donnabellajewelry.dk/",
            img: "/images/services/portfolio-img/donnabellajewelry.jpg",
          },
          {
            title: "E-Panneur",
            tech: "Shopify",
            link: "http://e-panneur.ca/",
            img: "/images/services/portfolio-img/e-panneur.jpg",
          },
        ],
      },
      {
        title: "Magento",
        items: [
          {
            title: "Sports456",
            tech: "Magento",
            link: "http://www.sports456.com/",
            img: "/images/services/portfolio-img/sports456.jpg",
          },
          {
            title: "All Extreme",
            tech: "Magento",
            link: "http://www.allextreme.in/",
            img: "/images/services/portfolio-img/allextreme.jpg",
          },
          {
            title: "Shoesuite",
            tech: "Magento",
            link: "https://www.shoesuite.ie/",
            img: "/images/services/portfolio-img/shoesuite.jpg",
          },
          {
            title: "Atkins",
            tech: "Magento",
            link: "https://www.atkins.ie/",
            img: "/images/services/portfolio-img/atkins.jpg",
          },
        ],
      },
      {
        title: "BigCommerce",
        items: [
          {
            title: "Coovy Sports",
            tech: "BigCommerce",
            link: "https://coovysports.com/",
            img: "/images/services/portfolio-img/coovysports.jpg",
          },
        ],
      },
      {
        title: "NopCommerce",
        items: [
          {
            title: "Luiolei",
            tech: "NopCommerce",
            link: "http://www.luiolei.com/",
            img: "/images/services/portfolio-img/luiolei.jpg",
          },
          {
            title: "Plaza Surf Sports",
            tech: "NopCommerce",
            link: "http://www.plazasurfsports.com/",
            img: "/images/services/portfolio-img/plazasurfsports.jpg",
          },
          {
            title: "Home Turph",
            tech: "NopCommerce",
            link: "https://www.hometurph.com/",
            img: "/images/services/portfolio-img/hometurph.jpg",
          },
        ],
      },
    ],
  },
];

export default function DataSupportAiServices() {
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
        "@id": "https://www.tech2globe.com/data-support-ai-services#webpage",
        url: "https://www.tech2globe.com/data-support-ai-services",
        name: "AI Data Services | AI Data Management & Processing",
        description:
          "Get reliable AI data services for data management, processing, preparation, quality checks, transformation, and ongoing AI data support. Talk to our experts.",
        isPartOf: {
          "@id": "https://www.tech2globe.com/#website",
        },
        about: {
          "@id": "https://www.tech2globe.com/data-support-ai-services#service",
        },
        breadcrumb: {
          "@id": "https://www.tech2globe.com/data-support-ai-services#breadcrumb",
        },
        mainEntity: {
          "@id": "https://www.tech2globe.com/data-support-ai-services#service",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.tech2globe.com/data-support-ai-services#breadcrumb",
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
            name: "AI Data Services",
            item: "https://www.tech2globe.com/data-support-ai-services",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://www.tech2globe.com/data-support-ai-services#service",
        name: "AI Data Services",
        serviceType: [
          "AI data management",
          "AI data processing",
          "AI data preparation",
          "AI data quality and validation",
          "AI data transformation",
          "AI data operations support",
        ],
        description:
          "Tech2Globe provides AI data services to help businesses prepare, process, manage, validate, transform, and maintain data for AI applications, machine learning models, automation, analytics, and other data-driven solutions.",
        url: "https://www.tech2globe.com/data-support-ai-services",
        provider: {
          "@id": "https://www.tech2globe.com/#organization",
        },
        mainEntityOfPage: {
          "@id": "https://www.tech2globe.com/data-support-ai-services#webpage",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tech2globe.com/data-support-ai-services#faq",
        url: "https://www.tech2globe.com/data-support-ai-services",
        isPartOf: {
          "@id": "https://www.tech2globe.com/data-support-ai-services#webpage",
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
      <Breadcrumb pageName="Data Support Ai Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner
                pageName="Data Support Ai Services"
                imageSrc="/images/services/service-inner/data-support-for-ai-banner.jpg"
              />
              <div className={Style.ContentDiv}>
                <h1 className={`${Style.headingText} pb-3`}>
                  AI Data Services for Smarter AI Operations
                </h1>
                <p className="para-text">
                  AI systems depend on accurate, organized, and usable data. Poor quality or incomplete data can affect AI performance, slow down workflows, and make it harder for businesses to use AI effectively. Tech2Globe provides <strong>AI data services</strong> that help businesses prepare, process, manage, validate, and maintain data for AI applications.
                </p>
                <p className="para-text">
                  Our team supports businesses with data management, data processing, data preparation, quality checks, data transformation, and ongoing data operations. We help organizations build reliable data workflows that support AI applications, machine learning models, automation, analytics, and other data driven solutions.
                </p>
                <p className="para-text">
                  Whether you need support with a single AI data project or ongoing data operations, our services can be customized according to your business requirements.
                </p>

                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                  <span className={Style.HeadingIcon} aria-hidden="true">
                    <FaLightbulb />
                  </span>
                  What Are AI Data Services?
                </h2>
                <p className="para-text">
                  AI data services are professional services that help businesses collect, organize, process, prepare, validate, and manage data used by AI systems.
                </p>
                <p className="para-text">
                  AI applications require data that is accurate, structured, consistent, and relevant to their intended use. Our AI data services help businesses manage these requirements while reducing the manual effort involved in handling large volumes of data.
                </p>
                <p className="para-text">
                  From data preparation and processing to quality checks and ongoing management, Tech2Globe helps create efficient data workflows for different AI applications.
                </p>

                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                  <span className={Style.HeadingIcon} aria-hidden="true">
                    <FaLayerGroup />
                  </span>
                  Our AI Data Services
                </h2>
                <div className={`${Style.PageAccordion} accordion`} id="accordionAiDataServices">
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
                          data-bs-parent="#accordionAiDataServices"
                        >
                          <div className={`${Style.AccordionBody} accordion-body`}>
                            {item.paragraphs.map((paragraph, pIndex) => (
                              <p
                                key={pIndex}
                                className={`para-text${
                                  pIndex === item.paragraphs.length - 1 ? " mb-0" : ""
                                }`}
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                  <span className={Style.HeadingIcon} aria-hidden="true">
                    <FaBullseye />
                  </span>
                  How AI Data Services Help Businesses
                </h2>
                <div className="row">
                  {businessBenefits.map((benefit) => (
                    <div
                      className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-3"
                      key={benefit.title}
                    >
                      <div className={Style.ImageBox}>
                        <div className="d-flex gap-3 align-items-center mb-2">
                          {benefit.icon}
                          <h5 className="mb-0">{benefit.title}</h5>
                        </div>
                        <p className="mb-0">{benefit.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                  <span className={Style.HeadingIcon} aria-hidden="true">
                    <FaRocketchat />
                  </span>
                  AI Data Services for Different Applications
                </h2>
                <p className="para-text">
                  Our AI data services can support different types of AI and data driven applications.
                </p>
                <div className="row">
                  {applications.map((app) => (
                    <div
                      className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3"
                      key={app.title}
                    >
                      <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                        <div className={Style.Icon}>{app.icon}</div>
                        <h5 className="fw-bold mb-2">{app.title}</h5>
                        <p className="text-muted medium mb-0">{app.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                  <span className={Style.HeadingIcon} aria-hidden="true">
                    <FaCogs />
                  </span>
                  Our AI Data Services Process
                </h2>
                <p className="para-text">
                  We follow a structured approach to understand your requirements and provide suitable data support.
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
                    <FaHandshake />
                  </span>
                  Why Choose Tech2Globe for AI Data Services?
                </h2>
                <p className="para-text">
                  Choosing the right data support partner can help businesses manage growing AI data requirements more effectively.
                </p>
                <p className="para-text">
                  Tech2Globe provides flexible AI data services based on project requirements, data volumes, workflows, and business objectives.
                </p>
                <p className="para-text">Our approach focuses on:</p>
                <ul>
                  {whyChooseFocus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="para-text">
                  We can work as an extension of your internal team and provide support for specific data projects or ongoing operational requirements.
                </p>

                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                  <span className={Style.HeadingIcon} aria-hidden="true">
                    <FaUsers />
                  </span>
                  Industries We Serve
                </h2>
                <p className="para-text">
                  Our AI data support capabilities can be adapted for businesses across different industries, including:
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
                  The exact workflow can be customized based on the data type, business process, AI application, and project objectives.
                </p>

                <div className={`${Style.CtaBlock} text-center my-4 py-4`}>
                  <h3>Get Expert Support for Your AI Data Requirements</h3>
                  <p className="mb-2">
                    Need reliable support for preparing, processing, managing, or validating data for your AI applications?
                  </p>
                  <p className="mb-3">
                    Talk to our AI data experts to discuss your requirements and build a data support workflow suited to your business.
                  </p>
                  <a href="/contact-us" className={Style.CtaButton}>
                    Talk to Our AI Data Experts
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

      <PortfolioTabs data={portfolio} />
      <ClientSlider testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </>
  );
}
