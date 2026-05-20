import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaClock, FaCube, FaLightbulb, FaShieldAlt, FaUsers } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
    title: "Outsource Data Mining Services Companies Providers",
    description:
        "Enhance business insights with Tech2Globe. Outsource data mining services companies providers outsourcing data mining services for accurate, timely results.",
    keywords: [
        "Outsourcing Data Mining Services",
        "Data Mining Companies",
        "Outsource Data Mining Services",
        "Data Mining Service Providers"
    ],
    openGraph: {
        title: "Outsource Data Mining Services Companies Providers",
        siteName: "Tech2Globe Web Solutions LLP",
        description:
            "Enhance business insights with Tech2Globe. Outsource data mining services companies providers outsourcing data mining services for accurate, timely results.",
        url: "https://www.tech2globe.com/data-mining-services"
    },
    twitter: {
        card: "summary_large_image",
        title: "Outsource Data Mining Services Companies Providers",
        description:
            "Enhance business insights with Tech2Globe. Outsource data mining services companies providers outsourcing data mining services for accurate, timely results."
    },
    alternates: {
        canonical: "https://www.tech2globe.com/data-mining-services"
    }
};

const pageHeaderData = {
    title: "Data Mining Services",
    description:
        "Trust Tech2Globe for a top-quality data mining firm that provides professional guidance for navigating huge data repositories and delivering accurate and timely information. Our services for data mining allow the efficient search and aggregation of important information from multiple sources.",
    buttonText: "Contact us",
    buttonLink: "#",
    backgroundImage: "/images/services/data-mining-services-banner.jpg", // your banner image
};


const caseStudies = [
    {
        id: 1,
        title: "CRM for Health Industry",
        image: "/images/services/service-inner/data-mining-on-crm-for-health-Industry.png",
        description:
            "The client has worked in a system where they have a team dedicated to improving the lives of patients and their families...",
        docLink: "https://www.tech2globe.com/casestudies-docs1/Data%20Mining%20on%20CRM%20for%20Health%20Industry%20-%20Case%20Study%20(1).pdf",
    },
    {
        id: 2,
        title: "Data Mining",
        image: "/images/services/service-inner/data-mining-bn-2.jpg",
        description:
            "Most businesses wish they could take better advantage of their data to make better, more informed decisions — but that is much easier said than done....",
        docLink: "https://www.tech2globe.com/casestudies-docs1/CASE%20STUDY-%20Data%20Mining%20Service-main.pdf",
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
        answer: `
        <strong>Data mining services</strong> aid organizations in accurately interpreting data, enabling informed business decisions, process improvement, improved quality standards, and customer satisfaction. These services require trained resources and technical expertise to extract valuable information from large amounts of raw data. Our experienced analysts can manage and extract relevant information from any size, industry, and timeframe.
      `,
    },
    {
        id: "Two",
        question: "What kinds of data are suitable for data mining?",
        answer: `
        Data mining can be carried out on various data kinds, including unstructured data (such as text documents and social media posts) and structured data (such as databases, spreadsheets). We use a variety of data sources to offer thorough insights.
      `,
    },
    {
        id: "Three",
        question: "How can data mining help my company?",
        answer: `
        Data mining can be beneficial to your company in various ways, including decision-making, market trend identification, cost savings, improved customer experience, and acquiring a competitive edge. It allows you to successfully and strategically use data to your advantage.
      `,
    },
    {
        id: "Four",
        question: "What industries can benefit from data mining services?",
        answer: `
        Data mining techniques include mobile service providers, retail, gaming, social media analysis, crime prevention, customer satisfaction, research and engineering, and many more.
      `,
    },
    {
        id: "Five",
        question: "How long does a typical data mining project take?",
        answer: `
        The duration depends on the kind of project and on different <strong>web data mining companies.</strong> Usually, a data mining project's duration relies on several variables, including the data's complexity, the project's scope, and the particular requirements. We engage with our clients to set realistic deadlines and ensure prompt project delivery.
      `,
    },
    {
        id: "Six",
        question: "Can you assist with analyzing the data mining findings?",
        answer: `
        Our professionals help with both the data mining and the interpretation of the findings. Based on the findings of our investigation, we offer comprehensive insights and practical suggestions.
      `,
    },
    {
        id: "Seven",
        question: "What are the benefits of data mining services?",
        answer: `
        Data mining benefits include helping companies by offering reliable, efficient, and cost-effective solutions for gathering information, enabling profitable production and operational adjustments.
      `,
    },
    {
        id: "Eight",
        question: "How does machine learning relate to data mining?",
        answer: `
        Machine learning relates to data mining as its techniques can be applied to data mining. Machine learning algorithms may assist detect patterns, forecast outcomes, and extract useful insights from vast datasets, all of which are necessary elements in the data mining process.
      `,
    },
];

export default function DataEntry() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                name: "How long does a typical data mining project take?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "A data mining project’s duration depends on several factors, including data complexity, project scope, and specific client requirements. We collaborate with our clients to set realistic timelines and ensure on-time delivery."
                }
            },
            {
                "@type": "Question",
                name: "What kinds of data are suitable for data mining?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Data mining can be performed on both structured data (like databases and spreadsheets) and unstructured data (such as text documents and social media posts). Our team utilizes diverse data sources to deliver comprehensive insights."
                }
            },
            {
                "@type": "Question",
                name: "Is my data safe and secure with Tech2Globe Web Solutions?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Absolutely! The security and confidentiality of your data are top priorities. We follow strict data protection standards and implement advanced measures to keep your data safe. We also offer related services like data management and data entry for added value."
                }
            },
            {
                "@type": "Question",
                name: "Can you assist with analysing the data mining findings?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Yes, our experts not only perform data mining but also help interpret the results. We provide detailed insights and actionable recommendations based on our analysis to support better business decisions."
                }
            },
            {
                "@type": "Question",
                name: "How can data mining help my company?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text:
                        "Data mining enhances business operations by uncovering patterns, predicting trends, optimizing costs, improving customer experience, and giving you a competitive edge. It helps you leverage data for smarter, strategic decisions."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb pageName="Data Mining Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="data mining services" />
                            <div className={Style.ContentDiv}>
                                <h2 className="pb-3">Enhancing Business Performance Through Strategic Data Mining Services</h2>
                                <p>The process of identifying patterns, connections, patterns, and other insights from vast databases is known by the term data mining. A vast amount of unstructured and structured data is required to be analyzed and collected to detect trends, forecast outcomes, and make business decisions. With our data mining solutions, we aid you in making use of the power of your data to uncover useful insights that can spur the development of your business and encourage innovation.</p>
                                <p>Our data mining firm specializes in supplying businesses with outstanding data mining services needed to uncover valuable insights in their vast data storage. Our experienced professionals make use of cutting-edge methodologies and technology to analyze, extract and interpret data efficiently. This allows you to make informed choices and get an edge in the current data-driven environment.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 pb-3">Our Comprehensive Solutions in data mining services</h2>
                                <p>Being one of the most reputable companies for data mining, we employ the latest techniques and tools to forecast patterns, detect trends and collect market data. When you outsource data mining services with us, you will be assured of quality results that are aligned with your company&apos;s objectives. Here are the solutions we offer:</p>

                                <div className="row pt-3 pb-3">
                                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/Web-Data-Mining-Services.jpg"
                                                alt="Web Data Mining Services"
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
                                        <h5>1.Web Data Mining Services:</h5>
                                        <p>To collect relevant data about your business from sources such as public and private businesses catalogs of business online review sites, and competitors&apos; websites, we use both manual and automated web scraping techniques for data.</p>
                                    </div>
                                </div>

                                <div className="row pt-3 pb-3">
                                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/lead-data-ming-Comprehensive-Solutions.jpg"
                                                alt="Lead Data Mining"
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
                                        <h5>2.Lead Data Mining:</h5>
                                        <p>We aid businesses in getting optimal lists of prospective clients by collecting their contact details from different sources of all sizes and shapes and putting them in an effective database for customer outreach.</p>
                                    </div>
                                </div>

                                <div className="row pt-3 pb-3">
                                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/Social-Media-Data-Analysis.jpg"
                                                alt="Social Media Data Analysis"
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
                                        <h5>3. Social Media Data Analysis:</h5>
                                        <p>With Tech2Globe&apos;s data mining tools, you can search through millions of interactions, post users&apos; profiles and brands&apos; mentions, and even locate the information you require.</p>
                                    </div>
                                </div>


                                <div className="row pt-3 pb-3">
                                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/image-data-mining-comprehensive-solutions.jpg"
                                                alt="Image Data Mining"
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
                                        <h5>4.Image Data Mining:</h5>
                                        <p>Clients are able to retrieve and analyze images from different databases with the Image Data Mining service. We&apos;ve assisted customers with real estate-related services as well as weather forecasting, maps analysis, investigations into criminals, medical image inspection and many other services.</p>
                                    </div>
                                </div>

                                <div className="row pt-3 pb-3">
                                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/Excel-img-2.jpg"
                                                alt="Excel Data Mining"
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
                                        <h5>5. Excel Data Mining:</h5>
                                        <p>Being one of the top suppliers of data mining solutions, We have access to an expert team who can either create a new or modify the existing Excel database and employ various formulas and models. Businesses should make use of this data for financial and business planning.</p>
                                    </div>
                                </div>

                                <div className="row pt-3 pb-3">
                                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/Mining-Data-From-Online-Marketplaces.jpg"
                                                alt="Mining Data From Online Marketplaces"
                                                width={100}
                                                height={100}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
                                        <h5>6. Mining Data From Online Marketplaces:</h5>
                                        <p>We are among the most experienced companies in web data mining. We are able to extract massive amounts of information from online marketplaces and websites by using automated techniques that are already in use or by creating new techniques.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                            <div className={Style.StickyTop}>
                                <ServiceSidebar sections={sidebarSections} />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-3">
                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 pb-3">Advantages Of Our Data Mining Services</h2>
                                <p>The job of a company that is data mining is to provide customers with the best possible service. The ability to understand your data could increase flexibility, quality of process and customer loyalty, as well as cost savings and, eventually, an increase in revenue for your organization. However, internal data mining is costly and time-consuming to execute. So outsourcing the data mining process is a great choice to let you concentrate on the business aspects.</p>
                                <p>If your data mining is outsourced to a third party, you reap numerous benefits such as:</p>
                                <div className="row pt-5 pb-5">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.CardBox} h-100`}>
                                            <div className="content-box d-flex justify-content-start align-items-center gap-3">
                                                <Image
                                                    src="/images/services/service-inner/practical-Insights1.jpg"
                                                    alt="Practical Insights"
                                                    width={50}
                                                    height={50}
                                                />
                                                <h3>Practical Insights</h3>
                                            </div>
                                            <p>Our mining experts are skilled in identifying important patterns and trends in huge data sets. We help you make intelligent decisions that boost the productivity and growth of your business by acquiring actionable data.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.CardBox} h-100`}>
                                            <div className="content-box d-flex justify-content-start align-items-center gap-3">
                                                <Image
                                                    src="/images/services/service-inner/better-%20Decision-Making1.png"
                                                    alt="Better Decision-Making"
                                                    width={50}
                                                    height={50}
                                                />
                                                <h3>Better Decision-Making</h3>
                                            </div>
                                            <p>You are able to make educated choices based on the facts instead of speculation by analyzing precise and reliable information. With our data mining services, you can create strategies that give you an edge over your other competitors.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.CardBox} h-100`}>
                                            <div className="content-box d-flex justify-content-start align-items-center gap-3">
                                                <Image
                                                    src="/images/services/service-inner/cost-Savings1.png"
                                                    alt="Cost Savings"
                                                    width={50}
                                                    height={50}
                                                />
                                                <h3>Cost Savings</h3>
                                            </div>
                                            <p>Through identifying inefficiencies, streamlining processes and reducing costs, data mining could help you save money. We help you improve your overall efficiency by reviewing your data. This can save you money in the long run.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.CardBox} h-100`}>
                                            <div className="content-box d-flex justify-content-start align-items-center gap-3">
                                                <Image
                                                    src="/images/services/service-inner/improved-Customer-Experience1.png"
                                                    alt="Improved Customer Experience"
                                                    width={50}
                                                    height={50}
                                                />
                                                <h3>Improved Customer Experience</h3>
                                            </div>
                                            <p>Your success is contingent on understanding your client&apos;s desires and requirements. With our data mining solutions, you can learn more about customer behavior, purchasing habits, and levels of satisfaction. This information can be used to improve customer service, personalize your marketing campaigns and enhance the overall shopping experience.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.CardBox} h-100`}>
                                            <div className="content-box d-flex justify-content-start align-items-center gap-3">
                                                <Image
                                                    src="/images/services/service-inner/competitive-Advantage1.png"
                                                    alt="Competitive Advantage"
                                                    width={50}
                                                    height={50}
                                                />
                                                <h3>Competitive Advantage</h3>
                                            </div>
                                            <p>Knowledge of your customers and the market is crucial to stay ahead in today&apos;s highly competitive business world, by utilizing these data and data mining to gain an edge over your competitors and position your business to be successful over the long term.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 pb-3">Benefits of Data Mining Companies</h2>
                                <p>Data mining companies provide a variety of advantages through their extensive services in data mining. They help various industries comprehend their target audience to identify patterns and adjust to changes. Data that is consistent can aid your business in determining when the inventory needs to be replaced or if it is necessary to increase staff to handle a large volume of customer requests. This will ensure that business operations are uninterrupted and the proper expenditure on needs.</p>
                                <p>It&apos;s your responsibility to select the top web-based companies for data mining that can assist you with the necessary services. Selecting reputable companies for data mining will ensure that you will have an edge in today&apos;s highly data-driven business world.</p>
                                <p>Outsourcing Data Mining Services To Tech2Globe Web Solutions</p>
                                <p>Are you looking to outsource your services to a reputable data mining firm? Do not look any further. We&apos;re ready to provide the highest quality data mining services that provide exact results.</p>

                                <div className="row pt-3 pb-3">
                                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                                        <div className={Style.IconBox}>
                                            <FaLightbulb />
                                        </div>
                                    </div>
                                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
                                        <div className={Style.IconContext}>
                                            <h3>Knowledge And Experience:</h3>
                                            <p>Our team is made up of individuals who are highly skilled in data mining. We have successfully carried out projects in data mining for clients across a variety of industries and have produced outstanding results.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row pt-3 pb-3">
                                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                                        <div className={Style.IconBox}>
                                            <FaCube />
                                        </div>
                                    </div>
                                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
                                        <div className={Style.IconContext}>
                                            <h3>Cutting-Edge Technologies:</h3>
                                            <p>We stay up to date with the latest advancements in technology and tools for data mining. We guarantee accurate and efficient data analysis and provide the most effective results to our clients through the use of the most advanced algorithms and technologies.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row pt-3 pb-3">
                                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                                        <div className={Style.IconBox}>
                                            <FaUsers />
                                        </div>
                                    </div>
                                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
                                        <div className={Style.IconContext}>
                                            <h3>Customized Solutions:</h3>
                                            <p>We recognize that each organization has specific needs. Our data mining services are personalized to meet your unique requirements, guaranteeing that you get specialized solutions that support your corporate objectives.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row pt-3 pb-3">
                                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                                        <div className={Style.IconBox}>
                                            <FaShieldAlt />
                                        </div>
                                    </div>
                                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
                                        <div className={Style.IconContext}>
                                            <h3>Security And Confidentiality:</h3>
                                            <p>We place a high priority on maintaining the security and confidentiality of your data. Thanks to our stringent data security procedures, including secure data transfer methods and limited access controls, your information is kept secure and private.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row pt-3 pb-3">
                                    <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4 col-4">
                                        <div className={Style.IconBox}>
                                            <FaClock />
                                        </div>
                                    </div>
                                    <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
                                        <div className={Style.IconContext}>
                                            <h3>Timely Delivery:</h3>
                                            <p>We respect your time and work to complete our tasks by the specified timeframe. We can meet deadlines and surpass client expectations thanks to our effective project management procedures and devoted employees.</p>
                                        </div>
                                    </div>
                                </div>

                                <p>Thinking about how to outsource data mining services to Tech2Globe? Contact us, and we will be there to explain everything about our data mining services from A to Z.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CaseStudiesService caseStudies={caseStudies} />
            <ClientSlider testimonials={testimonials} />
            <FaqSection faqs={faqs} />
        </>
    )
};