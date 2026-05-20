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
    title: "Data analytics services | Big Data Services Providers | Tech2Globe",
    description:
        "By Outsourcing Business Data Analytics Services with Tech2Globe you can beat all these difficulties at a reasonable cost & make a strong foundation for development.",
    keywords: [
        "Data analytic services provider",
        "Data analytics experts",
        "Data analytics support services",
        "Big data analytics solutions"
    ],
    openGraph: {
        title: "Data analytics services | Big Data Services Providers | Tech2Globe",
        siteName: "Tech2Globe Web Solutions LLP",
        description:
            "By Outsourcing Business Data Analytics Services with Tech2Globe you can beat all these difficulties at a reasonable cost & make a strong foundation for development.",
        url: "https://www.tech2globe.com/data-analytics-services"
    },
    twitter: {
        card: "summary_large_image",
        title: "Data Analytic Services Provider | Data Analytics Experts | Tech2Globe",
        description:
            "By Outsourcing Business Data Analytics Services with Tech2Globe you can beat all these difficulties at a reasonable cost & make a strong foundation for development."
    },
    alternates: {
        canonical: "https://www.tech2globe.com/data-analytics-services"
    }
};

const pageHeaderData = {
    title: "Data Analytics Services",
    description:
        "Data is a valuable resource in the present business world. Organizations depend intensely on data analytics to quick and all around educated choices, minimize risks, and maximize benefits.",
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
        question: "Since how long are you in the outsourcing field?",
        answer: `
        We have experience of 10 years in data entry outsourcing field and have successfully accomplished various projects of clients across the world. We have wide experience of working on different types of data entry projects.
      `,
    },
    {
        id: "Two",
        question: "How are fees structured - hourly rate or per-unit pricing?",
        answer: `
        In general fees are charged on a per unit basis. This is the simplest for everyone to understand and assures you are not paying for inefficiencies. It is also easiest to audit when you receive each invoice. In very rare circumstances will consider an hourly billing.
      `,
    },
    {
        id: "Three",
        question: "How will I get the completed work files?",
        answer: `
        We assure the quality of final files are up to your standards and then send the files to you via email or through the online applications. Depending on the file size, we can also send the files or data via the secured FTP server.
      `,
    },
    {
        id: "Four",
        question: "What are your working hours?",
        answer: `
        We work from Monday to Saturday 07:00 AM (Morning) IST to 11:30 AM (Night) IST. In case of work urgency and on the basis of client's request, we also work on Sundays.
      `,
    },
    {
        id: "Five",
        question: "Does Tech2Globe work on weekends and holidays?",
        answer: `
        Yes. Our data entry operators work different schedules, and many of them prefer weekends. Some holidays, particularly Thanksgiving and Christmas, are more challenging to achieve full production and may entail to incentivize the operators.
      `,
    },
];

export default function DataAnalytics() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Since how long are you in the outsourcing field?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "We have 10 years of experience in the data entry outsourcing field and have successfully completed various projects for clients across the world. Our team has wide experience handling different types of data entry tasks."
                }
            },
            {
                "@type": "Question",
                "name": "How are fees structured – hourly rate or per-unit pricing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "Our fees are generally charged on a per-unit basis, which ensures transparency and avoids paying for inefficiencies. It is also easy to audit. In rare cases, we may consider hourly billing."
                }
            },
            {
                "@type": "Question",
                "name": "How will I get the completed work files?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "Once quality checks are completed, we send the final files to you via email or online applications. For large files, we can also deliver through a secure FTP server."
                }
            },
            {
                "@type": "Question",
                "name": "What are your working hours?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "We operate from Monday to Saturday, 07:00 AM IST to 11:30 PM IST. If there's an urgent requirement, we can also work on Sundays based on the client’s request."
                }
            },
            {
                "@type": "Question",
                "name": "Does Tech2Globe work on weekends and holidays?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "Yes. Many of our operators work weekends by preference. On holidays like Thanksgiving and Christmas, production may be limited and may require additional incentives for operators."
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
            <Breadcrumb pageName="Data Analytics Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="data analytics services" />
                            <div className={Style.ContentDiv}>
                                <p>Data is a valuable resource in the present business world. Organizations depend intensely on data analytics to quick and all around educated choices, minimize risks, and maximize benefits.</p>
                                <p>In any case, organizations like to outsource data analytics services because executing data analytics in-house has a lot of challenges.</p>
                                <ul>
                                    <li>You need hands-on understanding of the latest tools and innovation utilized all the while.</li>
                                    <li>You need to manage issues of privacy and data security.</li>
                                    <li>You need a devoted group to deal with the continuous data analytics process.</li>
                                    <li>You need to combine and synchronize unstructured data from divergent sources.</li>
                                </ul>
                                <p>All these components add to your cost and hampers efficiency. By outsourcing business data analytics services and solutions for Tech2Globe, you can beat all of these difficulties at a reasonable cost.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h4 className="pt-3">Our data analytics consulting services</h4>
                                <p>When you outsource typing and transcription to Tech2Globe, you get easy to use verbatim transcripts with an assurance of high-quality and accuracy. Our experts utilize advanced transcription software to transcribe data into all around formatted records.</p>

                                <div className="row pb-5">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/workforces.png"
                                                alt="Business and Financial research"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Business and Financial research</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/health.png"
                                                alt="Healthcare research"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Healthcare research</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/hr-human-resource.png"
                                                alt="HR analytics services"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>HR analytics services</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/analysis.png"
                                                alt="Customer analytics"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Customer analytics</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/data-entry-1.png"
                                                alt="Supply chain data analytics services"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Supply chain data analytics services</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/consulting-icon.png"
                                                alt="Effective data intelligence, reporting, and presentation"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Effective data intelligence, reporting, and presentation</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/search.png"
                                                alt="Market research"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Market research</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/data-normal.png"
                                                alt="Domain-based analytics in multiple verticals"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Domain-based analytics in multiple verticals</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/design.png"
                                                alt="Well-designed visualization solutions"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Well-designed visualization solutions</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                                        <div className={Style.ImageBox}>
                                            <Image
                                                src="/images/services/service-inner/customer-support.png"
                                                alt="Remote/ offshore data analytics support services"
                                                width={55}
                                                height={55}
                                            />
                                            <h6>Remote/ offshore data analytics support services</h6>
                                        </div>
                                    </div>

                                </div>

                                <p>By considering the volume and assortment of your developing data stores, we streamline your data processing system to open concealed bits of knowledge while lessening costs. By employing Tech2Globe as your data analytics consulting services, your business gets the benefit of information management, modified data analytics solutions, and propelled choice science, in addition to other things.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                            <div className={Style.StickyTop}>
                                <ServiceSidebar sections={sidebarSections} />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-3">
                            <div className={Style.ContentDiv}>
                                <h4 className="pt-3">Our Process</h4>
                                <p>Our data analysis process is oriented towards drawing maximum value out of each choice made in each department of your organization. Tech2Globe strive to convey analytics, reports, BI and predictions of expanding accuracy to take care of your issues, some of the time even before they crop up.</p>
                                <div className="row pb-5">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.IconBox} h-100`}>
                                            <FaSearch />
                                            <h3>Define Data Requirements</h3>
                                            <p>Data is accessible in abundance. We have to know what to search for. To start this procedure, we define the data necessities of the business and the issues to be tended to.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.IconBox} h-100`}>
                                            <FaDownload />
                                            <h3>Data Collection</h3>
                                            <p>Once the business objectives are expressed, we start to assemble significant data from existing databases, data warehouses, and different other inner and outer sources.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.IconBox} h-100`}>
                                            <FaDatabase />
                                            <h3>Data Cleaning</h3>
                                            <p>This is an imperative preliminary stage where the collected data is cleaned and approved to enhance its quality just as accuracy.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.IconBox} h-100`}>
                                            <FaChartBar />
                                            <h3>Data Analysis</h3>
                                            <p>It is currently an ideal opportunity to explore and exploit the data through analytics, plotting, and displaying to spot patterns, draw comparisons and create valuable experiences.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.IconBox} h-100`}>
                                            <FaCogs />
                                            <h3>Data Optimization</h3>
                                            <p>Based on expert statistical analysis, the data models are assessed and a prescient procedure is utilized to decide future results.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.IconBox} h-100`}>
                                            <FaUsersCog />
                                            <h3>Deployment and Monitoring</h3>
                                            <p>The solution inferred in the optimization stage is presently actualized in the business, in accordance with predefined targets.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4>Tools we use in Data Analytics Services</h4>
                                <p>Strategic partnerships with market-leading technology companies allow us to combine best-in-class skills with cutting-edge tools and resources. Key tools for data analytics support services include:</p>
                                <ul>
                                    <li>Splunk</li>
                                    <li>Rapidminer</li>
                                    <li>Elasticsearch</li>
                                    <li>Apache Spark</li>
                                    <li>Hadoop</li>
                                </ul>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4>Our Developers Know All Languages</h4>
                                <p className="pb-3">Tech2Globe offers the larger and most cost-efficient answers for online and <a href="/offline-data-entry-services">offline data entry</a>. We execute a heavy diversity of <a href="/online-data-entry-services">online data entry services</a> in numerous languages - English, German, Dutch, French, Spanish, Italian and many more that&apos;s why we are called as bilingual operators.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4>Turn Your Data into Actionable Insights with Tech2Globe</h4>
                                <p>By identifying and settling the most well-known cognitive biases in data analytics processes, data specialists at Tech2Globe quicken your business&apos; performance. Our data analytics solutions assist associations with taking advantage of their data, convey targeted solutions, and make a strong foundation for development. If you are searching for practical data enhancement and analytics services and a reliable service provider, if it&apos;s not too much trouble send your necessities to us at info@tech2globe.com.</p>
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