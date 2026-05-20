import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaArrowRight, FaChartBar, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaLightbulb, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
    title: "Best Walmart Advertising Agency | Walmart PPC Service",
    description:
        "Drive more sales on Walmart with Tech2Globe's Walmart PPC advertising. Trusted as the best Walmart advertising agency for professional, results-driven campaigns.",
    keywords:
        "Amazon translation services, Amazon translation services in india, amazon translate",
    openGraph: {
        title: "Best Walmart Advertising Agency | Walmart PPC Service",
        siteName: "Tech2Globe Web Solutions LLP",
        description:
            "Drive more sales on Walmart with Tech2Globe's Walmart PPC advertising. Trusted as the best Walmart advertising agency for professional, results-driven campaigns.",
        url: "https://www.tech2globe.com/walmart-advertisement",
    },
    twitter: {
        card: "Best Walmart Advertising Agency | Walmart PPC Service",
        title: "Best Walmart Advertising Agency | Walmart PPC Service",
        description:
            "Drive more sales on Walmart with Tech2Globe's Walmart PPC advertising. Trusted as the best Walmart advertising agency for professional, results-driven campaigns.",
    },
    alternates: {
        canonical: "https://www.tech2globe.com/walmart-advertisement",
    },
};

const pageHeaderData = {
    title: "Walmart Marketplace Management",
    description:
        "Stand out from your competitors by partnering with Tech2Globe. We offer Walmart Marketplace Management, handling everything from product listings and content production, to advertising and WFS integration to drive sales. With low marketing cost, wider customer reach, proven strategies and advantage of low competition.",
    buttonText: "Contact us",
    buttonLink: "#",
    backgroundImage: "/images/services/walmart.jpg", // your banner image
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
        text: "Tech2Globe's marketplace management team helped us optimize our Walmart product listings and streamline order management. Their expertise in compliance and platform policies saved us a lot of time and errors.",
        name: "Daniel Foster",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "We partnered with Tech2Globe for Walmart Marketplace Management and saw instant improvements in our catalog accuracy, shipping performance, and seller rating. Their support is proactive and dependable.",
        name: "Fatima Noor",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Managing Walmart Marketplace was overwhelming until Tech2Globe stepped in. Their full coverage—inventory sync, dispute handling, and backend operations—helped us focus on scaling our brand.",
        name: "Christopher Allen",
    },
];

const faqs = [
    {
        id: "One",
        question: "What is Walmart Marketplace?",
        answer: `
        Walmart's e-commerce footprint has been growing rapidly in recent years. Walmart Marketplace allows e-commerce retailers to become approved Walmart Marketplace Sellers and offer products online at Walmart.
      `,
    },
    {
        id: "Two",
        question: "Why is Walmart Marketplace Management more effective than on other platforms?",
        answer: `
       Walmart's low-competition platform allows for higher rankings and visibility with less ad expenditure. Management services leverage this advantage, using targeted ads and SEO to reach 110-120 million online visitors, driving faster results.
      `,
    },
    {
        id: "Three",
        question: "How does Walmart Marketplace Management ensure compliance with platform rules?",
        answer: `
        Agencies ensure listings adhere to Walmart's prohibited product policy and maintain high Listing Quality Scores by using accurate GTINs, categories, and attributes. They monitor for policy violations, avoiding penalties like delisting, and keep your product visible to online visitors in a low competition marketplace.
      `,
    },
    {
        id: "Four",
        question: "What are the advertising options on Walmart Marketing?",
        answer: `
        Walmart offers 4 main advertising formats:
        <ul>
            <li>Sponsored products - paid ads that show in the in-grid search results and in the "sponsored products" section</li>
            <li>Native banner ads - shown at the top of main product category pages on Walmart's website</li>
            <li>Catapult ads - appear at the top of a product listing and include "featured item" text</li>
            <li>Site search feature ads - an option to promote your brand on a product page and link to a page that features all of your products.</li>
        </ul>
      `,
    },
];

export default function WalmartMarketplaceManagement() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb pageName="Walmart Marketplace Management" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className={Style.ContentDiv}>
                                <h2 className="pb-3">Walmart Marketing: A Smarter Way to Scale Your Brand</h2>
                                <p>With more than 255 million weekly customers across 19 countries, Walmart provides enormous access to global market.</p>

                                <p>Walmart supports both e-commerce and physical stores, with huge product diversity across food, tools, appliances, and exclusive brands, it offer its brands versatile marketing strategies. You can tailor your market outreach method to reach wide range of customers, from low to mid-range earners, from rural to urban areas.</p>

                                <p>Walmart offers affordable rates and promotional offers, positioning it as an inviting platform for businesses to reach various buyers. With no upfront or monthly charges sellers only pay when sales have occurred, making Walmart cost-effective. Against a less competitive platform than Amazon, merchants achieve greater visibility, making Walmart more desirable.</p>

                            </div>


                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 pb-3">Walmart Marketplace Services Offered At Tech2Globe:</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Walmart Marketplace Account Setup</h5>
                                            <p>We help you with registering and optimizing your account on Walmart marketplace along with:</p>

                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Setting Up Seller Center</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Product Listings
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Pricing & Shipment Settings
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Basic Functions & Attributes
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Walmart Content Development</h5>
                                            <p>Creating appealing content for the customer, focusing on:</p>

                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; High-Quality Images</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Detailed Description</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Highlighting Features</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Walmart SEO & Keyword Research</h5>
                                            <p>Optimizing search results ranking and sales performance by using:</p>
                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; SEO Titles & Description</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Keyword Optimization</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Competitor's Listing Analysis</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Walmart Ads & Campaigns</h5>
                                            <p>Boosting your visibility and sales of your products by using tools such as Walmart Ad Centre analytics and third party tools to create and monitor:</p>

                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Sponsored Ads</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Sponsored Brands</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Basic Bid Optimization</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Walmart Account Management & Analytics</h5>
                                            <p>Using Walmart Seller Center's inventory performance dashboard for insights and analyzing:</p>
                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Track Ads & Sales</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Customer Feedback</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Search Term Reports</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 pb-3">Why Choose to Partner With Tech2globe for Walmart Marketplace Management?</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/list.png"
                                                alt="Adaptable E-Commerce Solutions"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Adaptable E-Commerce Solutions</h5>
                                                <p>At Tech2Globe, we offer adaptable e-commerce solutions according to your business's needs for Walmart marketplace management services. We will optimize product listing, ad management, sales, and performance analytics. We will monitor your account and give regular reports with Walmart marketplace management services. Our services include inventory management and order fulfilment, ensuring compliance with Walmart's policies with seamless operations. As you scale further, we'll fuel your growth with customized solutions and promote your operations on Walmart.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/dollar.png"
                                                alt="Cost-Effective Advertising Solutions"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Cost-Effective Advertising Solutions</h5>
                                                <p>We will provide you with cost-effective ad solutions, adapted to your objectives, to reach as many customers as you can. By optimizing your investment through smart bidding, targeted campaigns, and continuous performance tracking, we will maximize your return-on-ad-spend (ROAS) and drive sales with targeted Walmart Connect ads and smart bidding in low-competition marketplace.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/aim.png"
                                                alt="Comprehensive Audience Targeting"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Comprehensive Audience Targeting</h5>
                                                <p>Our customised strategies will make sure your product reaches the right buyers. By examining customer data like age, gender, rural & urban areas, and interests, we will target audience to engage the most suitable buyers. Our targeted campaigns will be crafted to satisfy your customers’ interests. We will aim to increase your conversion rates, cut unnecessary costs, and optimize your promotional campaigns.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/badge.png"
                                                alt="Proven Expertise in Walmart Marketplace Management"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Proven Expertise in Walmart Marketplace Management</h5>
                                                <p>With proven expertise, our Walmart marketing agency will uplift your business quickly. By utilizing data-driven campaigns and operations, we will strategize steps that will increases online visibility, sales performance and assist you with long term support. We will develop creative and appealing visuals, ad campaigns and use insights to create excellent results. We will elevate your Walmart account by using efficient, analyzed and proven strategies to ensure rapid growth in the competitive market.</p>
                                            </div>
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
                    </div>
                </div>
            </section>

            <ClientSlider testimonials={testimonials} />
            <FaqSection faqs={faqs} />
        </>
    )
};