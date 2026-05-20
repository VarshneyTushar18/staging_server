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
    title: "Walmart Full Service Marketing Agency",
    description:
        "Tech2Globe is a Walmart full service marketing agency, delivering expert strategies to boost brand visibility, sales, and online performance efficiently.",
    openGraph: {
        title: "Walmart Full Service Marketing Agency",
        siteName: "Tech2Globe Web Solutions LLP",
        description:
            "Tech2Globe is a Walmart full service marketing agency, delivering expert strategies to boost brand visibility, sales, and online performance efficiently.",
        url: "https://www.tech2globe.com/walmart-full-service-management",
    },
    twitter: {
        card: "Walmart Full Service Marketing Agency",
        title: "Walmart Full Service Marketing Agency",
        description:
            "Tech2Globe is a Walmart full service marketing agency, delivering expert strategies to boost brand visibility, sales, and online performance efficiently.",
    },
    alternates: {
        canonical: "https://www.tech2globe.com/walmart-full-service-management",
    },
};

const pageHeaderData = {
    title: "Walmart Full Service Management",
    description:
        "We offer Walmart Full Service Management, handling everything from product listings and content production, to advertising and fulfillment services. With low marketing cost, wider customer reach, proven strategies and minimum cost, you can stand out from your competitors by partnering with Tech2Globe.",
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
        text: "Tech2Globe has been instrumental in managing our Walmart account. From listing to inventory and advertising, their full-service approach allowed us to focus on scaling while they handled the backend.",
        name: "Anita Desai",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Their Walmart full-service management is top-notch. We saw immediate improvements in order flow, product ranking, and seller metrics. The team is responsive and always ahead of deadlines.",
        name: "Robert Kim",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "We outsourced our Walmart store to Tech2Globe and never looked back. Their end-to-end management gave us a competitive edge in listings, pricing, reviews, and fulfillment. Total game-changer!",
        name: "Melissa Grant",
    },
];

const faqs = [
    {
        id: "One",
        question: "What is a Walmart marketing agency?",
        answer: `
        It is a company that helps Walmart sellers launch, optimize and grow their operations. Common services include account management, market and competitor analysis, store and advertising strategy development, and customer acquisition and retention to name a few.
      `,
    },
    {
        id: "Two",
        question: "Can I use Social Media to enhance my Walmart marketing for economical buyers?",
        answer: `
        Yes, using platforms like Instagram and Facebook to promote Walmart listings with targeted ads or organic posts highlights deals. This attract customers and drives traffic to your sites.
      `,
    },
    {
        id: "Three",
        question: "What does Walmart marketing strategy means?",
        answer: `
        Walmart marketing strategy focuses on reaching relevant and high-intent customers through online campaigns and sponsored advertising. It entails customizing product listings with SEO.
      `,
    },
    {
        id: "Four",
        question: "How does Walmart helps sellers promote their products?",
        answer: `
        Walmart offers advertising tools like Sponsored Ads through Walmart Connect, letting sellers reach millions of shoppers with targeted campaigns. These tools boost product visibility and sales on a platform with far fewer sellers than platforms like Amazon.
      `,
    },
];

export default function WalmartManagement() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb pageName="Walmart Full Service Management" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className={Style.ContentDiv}>
                                <h2 className="pb-3">Walmart Marketing: A Smarter Way to Scale Your Brand</h2>
                                <p>With over 255 million weekly customers across 19 countries and 9 out of 10 people in USA living within 10 mile radius of a its store, Walmart offers an unprecedented <i>global market reach</i>.</p>
                                <p>Supporting both e-commerce and physical stores, with massive <i>product diversity</i> across food, tools, appliances, and exclusive brands, Walmart offer its sellers <i>flexible marketing strategies</i>. You can customize your marketing strategy to reach all kinds of people, from low to middle income families, from countryside to city.</p>
                                <p>Walmart offers low pricing and seasonal discounts making it an attractive platform for sellers to reach economical buyers. With no setup or monthly fees, sellers only <i>pay-per-sale model</i>, makes Walmart cost-effective. Facing <i>less competition</i> than on Amazon, sellers get more visibility, further enhances Walmart&apos;s appeal.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 pb-3">Walmart Marketing Services We Offer:</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Walmart Account Setup & Optimization</h5>
                                            <p>We help you with registering and optimizing your account on Walmart marketplace along with:</p>
                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Business Details
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Setting Up Seller Center
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Payment And Shipment Settings
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Product Listings
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Walmart Content Development</h5>
                                            <p>
                                                Creating appealing content for the customer, focusing on:
                                            </p>
                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; High-quality Images & Videos</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Detailed Description</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Highlighting Features</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Web Design</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Copywriting</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Walmart SEO & Keyword Research</h5>
                                            <p>
                                                Optimizing search results ranking and sales performance by using:
                                            </p>
                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Seo Titles & Description</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Keyword Optimization</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Appropriate Product Titles</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Competitor&apos;s Listing Analysis</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Walmart Ads & Campaigns</h5>
                                            <p>
                                                Boosting your visibility and sales of your products by using tools such as Walmart Ad Centre analytics and third party tools to create and monitor:
                                            </p>
                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Sponsored Ads</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Pay-Per-Click (PPC)</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Sponsored Brands</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Display & In-Store Ads</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Social Media Marketing</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Monitoring ROAS</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Walmart Account Management & Analytics</h5>
                                            <p>
                                                Using Walmart Seller Center&apos;s inventory performance dashboard for insights and analyzing:
                                            </p>
                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Track Sales & Stock Level</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Customer Feedback</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Monitoring High Listing Quality Score (LQS)</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Campaign Metrics</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Search Term Reports</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Walmart Fulfilment Service Reports</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Third-Party Tools</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Walmart Fulfilment Services</h5>
                                            <p>
                                                Boosting sales by streamlining your logistics to ensure fast 2-day shipping and other services including:
                                            </p>
                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Inventory Setup</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Compliance</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Returns</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Reliable Delivery</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Tracking Order</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Customer Support</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 pb-3">Why Choose to Partner With Tech2globe for Walmart Marketing?</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/boxes.png"
                                                alt="Customised E-commerce Services"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Customised E-commerce Services</h5>
                                                <p>At Tech2Globe, we offer customized e-commerce services according to your business&apos;s needs for Walmart full service management. From listing optimization and ad management to fulfillment integration and performance analytics, we will provide full service management. Our services are designed to boost visibility, increase conversions, and make your operations easier. Whether you are just starting or scaling, we will help you grow bigger and faster.</p>
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
                                                <p>We will provide you with cost-effective advertising solutions customised to your vision. We will optimize your investment through smart bidding, targeted campaigns, and continuous performance tracking. Our focus would be on maximizing your return-on-ad-spend (ROAS) and minimizing your over- expenditure.</p>
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
                                                <p>We will help your products reach the right customers who require them. Through data-analysis and studying customer behavior such as age, gender, location and interest, we target the most suitable customers. Your campaigns are tailored to match your customer&apos;s intent. Our goal is to get more conversion rates and reduce waste and over expenditure.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/badge.png"
                                                alt="Proven Expertise"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Proven Expertise</h5>
                                                <p>Our Walmart marketing agency is proven expert in helping business grow quickly. With 14+ years of working experience, our team uses strategies that increases visibility ranking, sales and long term support. Our team creates creative content, appealing advertisements, and data driven analysis to deliver results. We can scale accounts from start with efficient and precise strategies.</p>
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