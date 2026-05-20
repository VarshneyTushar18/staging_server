import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaChartBar, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaLightbulb, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
    title: "Outsource Data Cleansing Services",
    description:
        "Ensure clean and accurate data with Tech2Globe's outsource data cleansing services. Improve analysis, reporting, and decision-making for your business.",
    keywords: [
        "Data Cleansing Services",
        "Outsource data cleansing services",
        "Top data cleansing service provider",
        "Data cleansing experts",
        "data cleansing solutions",
        "data cleansing professionals",
        "Database cleansing services"
    ],
    openGraph: {
        title: "Outsource Data Cleansing Services",
        siteName: "Tech2Globe Web Solutions LLP",
        description:
            "Ensure clean and accurate data with Tech2Globe's outsource data cleansing services. Improve analysis, reporting, and decision-making for your business.",
        url: "https://www.tech2globe.com/data-cleansing-services"
    },
    twitter: {
        card: "summary_large_image",
        title: "Outsource Data Cleansing Services",
        description:
            "Ensure clean and accurate data with Tech2Globe's outsource data cleansing services. Improve analysis, reporting, and decision-making for your business."
    },
    alternates: {
        canonical: "https://www.tech2globe.com/data-cleansing-services"
    }
};

const pageHeaderData = {
    title: "Data Cleansing Services",
    description:
        "The adequacy of your business choices to a great extent relies on the quality of data you are analyzing. Regardless of how big is your database, it won't increase the value of your business except if it is modern and free from any repetitive data. ",
    buttonText: "Contact us",
    buttonLink: "#",
    backgroundImage: "/images/services/data-mining-services-banner.jpg", // your banner image
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
        question: "What makes Tech2Globe unique?",
        answer: `
        Our years of experience in outsourcing, combined with our low operating cost, flexibility, expertise, reliability, and integrity make us the best in the offshore market.
      `,
    },
    {
        id: "Two",
        question: "Are your services cost-effective?",
        answer: `
        Yes. When you outsource to Tech2Globe you be assured of saving more than 40-50% of your operating costs. Although we provide our customers with cost-competitive services, we do not compromise on quality. Outsource now and get access to quality solutions while cutting down costs.
      `,
    },
    {
        id: "Three",
        question: "What is your TAT?",
        answer: `
        If you want your services to be delivered within a fast turnaround time, then you have come to the right place. One of the benefits that we offer our customers is our quick TAT. Outsource to Tech2Globe and get the advantage of your services being delivered ahead of schedule.
      `,
    },
    {
        id: "Four",
        question: "How can I be assured of high quality in my project?",
        answer: `
        We have a specially designed workflow along with highly qualified QA professionals whose aim is to deliver only premium quality services. You can test and verify the quality of our work throughout the course of the project.
      `,
    },
    {
        id: "Five",
        question: "Does Tech2Globe possess long-term viability?",
        answer: `
        Yes, we consider our long-term viability to be excellent. You need not have any reservations about teaming up with us, as we are completely debt-free. To ensure our viability, we always make it a point to sign outsourcing contracts or agreements.
      `,
    },
    {
        id: "Six",
        question: "What modes of payment do you accept?",
        answer: `
        Once the project is completed and you are satisfied with the results, you can pay us either by wire transfer or by check. In case you wish to pay us through any other method, you can let our customer support team know, and they will guide you appropriately.
      `,
    },
];

export default function DataCleansing() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What makes Tech2Globe unique?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "Our years of outsourcing experience, low operating cost, flexibility, expertise, reliability, and integrity make us a strong competitor in the offshore market."
                }
            },
            {
                "@type": "Question",
                "name": "Are your services cost-effective?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "Yes. Outsourcing to Tech2Globe can help you save 40–50% of your operating costs. We offer competitive pricing without compromising quality."
                }
            },
            {
                "@type": "Question",
                "name": "What is your TAT?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "We offer fast turnaround times. One key benefit of working with us is that your projects are often delivered ahead of schedule."
                }
            },
            {
                "@type": "Question",
                "name": "How can I be assured of high quality in my project?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "Our workflow is designed for quality. Skilled QA specialists verify the accuracy and consistency of your data throughout the project."
                }
            },
            {
                "@type": "Question",
                "name": "Does Tech2Globe possess long-term viability?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "Yes, we are fully debt-free and financially stable. We strengthen long-term viability by signing outsourcing contracts and agreements."
                }
            },
            {
                "@type": "Question",
                "name": "What modes of payment do you accept?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "Payments can be made by wire transfer or check once the project is completed. If you prefer another method, our support team can guide you."
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
            <Breadcrumb pageName="Data Cleansing Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Data Cleansing Services" />
                            <div className={Style.ContentDiv}>
                                <p>The adequacy of your business choices to a great extent relies on the quality of data you are analyzing. Regardless of how big is your database, it won&apos;t increase the value of your business except if it is modern and free from any repetitive data. Tech2Globe holds a place of expert in data cleansing services. With our in-depth knowledge on the latest data cleansing methods and years of experience, we can clean, <a href="/data-de-duplication-services" class="text-decoration-underline">de-duplicate</a>, normalize, standardize, confirm and validate data of any size.</p>
                                <p>The well trained and experienced data cleansing experts at Tech2Globe manually check the records, clean and update them at ordinary intervals, paying little mind to the volume and complexity of the project. With hands-on experience of taking into account various industry verticals including retail, insurance, banking, promoting, transportation and media transmission, and our data cleansing experts are fit for conveying customized services. Tech2Globe&apos;s adaptable and scalable outsourcing model guarantees that you get quality services at a reasonable cost.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Data Cleansing Services We Offer</h2>
                                <p>Our ISO-guaranteed data cleansing & profiling services guarantee that you get the best in class services without agonizing over the security of your data.</p>

                                <div className="row pb-3">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/filter.png"
                                                alt="Filter records"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Filter records</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/removing.png"
                                                alt="Remove typos, spelling errors"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Remove typos, spelling errors</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/missing.png"
                                                alt="Complete missing entries"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Complete missing entries</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/mailing-list.png"
                                                alt="Cleanse mailing lists"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Cleanse mailing lists</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/normalize-database.png"
                                                alt="Normalize database"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Normalize database</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/standardize-database.png"
                                                alt="Standardize database"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Standardize database</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/verify.png"
                                                alt="Verify and Validate Data"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Verify and Validate Data</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/duplicate-entries.png"
                                                alt="De-duplicate entries"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>De-duplicate entries</h6>
                                        </div>
                                    </div>

                                </div>

                                <p>Once the project is complete, we provide you the file in a suitable digital format such as JPEG, MS WORD, MS EXCEL, PDF, etc.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Process</h2>
                                <p>When you outsource data cleaning services to Tech2Globe, you access talented data passage experts, robust infrastructure and a consistent work process that incorporates the following steps -</p>

                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/project.png"
                                                alt="Project Definition"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Project Definition</h6>
                                            <p>Characterize data cleansing necessity dependent on customer inputs</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/trial.png"
                                                alt="Trial"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Trial</h6>
                                            <p>Deliver a trial project to set quality and value desires whenever required</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/undertaking.png"
                                                alt="Undertaking SLA"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Undertaking SLA</h6>
                                            <p>On approval of trial, draft SLA conclude venture finishing time, required assets, estimating and etc with the customer</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/assignment.png"
                                                alt="Project Assignment"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Project Assignment</h6>
                                            <p>Assign the necessary assets, allocates tasks and chooses a project manager</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/import-data.png"
                                                alt="Import Data"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Import Data</h6>
                                            <p>Unclean data from your system is brought into our cleansing system in an Excel, CSV, or Tab-Separated Text record position</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/duplicate-entries.png"
                                                alt="Undertaking SLA"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>De-Duplicate data</h6>
                                            <p>Identify potential duplicate entries. For strategic data, these outcomes are physically assessed and the database updated accordingly</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/export-icon.png"
                                                alt="Export Data"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Export Data</h6>
                                            <p>Export data in various formats Excel, XML, PDF, or as required</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/quality.png"
                                                alt="Quality Check"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Quality Check</h6>
                                            <p>Quality Check led to guarantee accuracy</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/delivery.png"
                                                alt="Delivery"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Delivery</h6>
                                            <p>Required yield is conveyed in the customer&apos;s strategy for decision</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                            <div className={Style.StickyTop}>
                                <ServiceSidebar sections={sidebarSections} />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pt-5">
                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Tools</h2>
                                <p>Tech2Globe is a top data cleansing service provider. In addition to data cleansing services, our international team of data cleansing professionals can help with specialized tasks such as visual analytics, industry analysis and packaging design services and uses following tools:</p>
                                <ul className={Style.ToolsList}>
                                    <li>Open Refine</li>
                                    <li>Trifacta Wrangler</li>
                                    <li>Drake</li>
                                    <li>TIBCO Clarity</li>
                                    <li>Winpure</li>
                                    <li>Data Ladder</li>
                                    <li>Data Cleaner</li>
                                    <li>Cloudingo</li>
                                    <li>Reifier</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pt-5">
                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Why Choose Tech2Globe?</h2>
                                <p>We offer a free trial on data cleansing, where you can become acquainted with our work quality. Account managers are conversant in English - in addition to a lot more languages. We have broad skills in managing tasks of fluctuating sizes. We have confidentiality agreements with our workers set up to make sure about your data. Connect with us today to outsource database cleansing services and we&apos;ll be glad to help you.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <ClientSlider testimonials={testimonials} />
            <FaqSection faqs={faqs} />
        </>
    )
};