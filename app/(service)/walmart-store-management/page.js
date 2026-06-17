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
import "./custom.css";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";

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
        url: "https://stagenew.tech2globe.tech/walmart-advertisement",
    },
    twitter: {
        card: "Best Walmart Advertising Agency | Walmart PPC Service",
        title: "Best Walmart Advertising Agency | Walmart PPC Service",
        description:
            "Drive more sales on Walmart with Tech2Globe's Walmart PPC advertising. Trusted as the best Walmart advertising agency for professional, results-driven campaigns.",
    },
    alternates: {
        canonical: "https://stagenew.tech2globe.tech/walmart-advertisement",
    },
};

const pageHeaderData = {
    title: "Walmart Store Management Services",
    description:
        "With Tech2Globe, streamline your Walmart store management services such as store setups, ad optimization, and marketing strategies to enhance visibility and drive up sales on Walmart.",
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


const portfolioClients = [
    {
        initials: "CN",
        gradient: "#0b2e58",
        client: "CozyNest Home",
        country: "USA",
        project: "Dedicated Store Management (12 months)",
        desc: "US home brand that grew Walmart store revenue by 95% through daily performance monitoring, promotions management, and seamless ongoing store operations.",
        category: "Store Management",
        result: "+95% store revenue YoY",
        resultSub: "Revenue Growth",
    },
    {
        initials: "AP",
        gradient: "#0b2e58",
        client: "AsiaPure Wellness",
        country: "Singapore",
        project: "Remote Walmart Store Management",
        desc: "Singapore wellness brand that overcame cross-border management challenges with Tech2Globe handling all listings, inventory, and customer service operations.",
        category: "Store Management",
        result: "100% operational uptime",
        resultSub: "Operational Excellence",
    },
    {
        initials: "DT",
        gradient: "#0b2e58",
        client: "DubaiTech Gadgets",
        country: "UAE",
        project: "Store Management + Growth Strategy",
        desc: "UAE tech gadgets brand that made Walmart its number-one sales channel through proactive store management, issue flagging, and consistent metric optimization.",
        category: "Store Management",
        result: "Walmart became #1 sales channel",
        resultSub: "Channel Growth",
    },
    {
        initials: "WW",
        gradient: "#0b2e58",
        client: "WinterWear Plus",
        country: "Canada",
        project: "Seasonal Promotions & Store Calendar",
        category: "Store Management",
        result: "Best seasonal sales on record",
        resultSub: "Seasonal Success",
    },
    {
        initials: "BH",
        gradient: "#0b2e58",
        client: "BestHealth Pharma",
        country: "Australia",
        project: "Performance Monitoring & Recovery",
        category: "Store Management",
        result: "Seller score maintained at 99",
        resultSub: "Account Health",
    },
];


const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe manages our Walmart store like a true extension of our team. They monitor our store performance daily, respond to customer queries, manage promotions, and keep everything running seamlessly. Our store revenue is up 95% since we partnered with them.",
        name: "Patricia L. Evans | CozyNest Home",
        location: "USA",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Managing a Walmart store from overseas was a major challenge until we found Tech2Globe. Their dedicated store management team handles everything — from listings and inventory to promotions and customer service. We have complete peace of mind now.",
        name: "Wei Lin Tan | AsiaPure Wellness ",
        location: "Singapore",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe's Walmart store management team is outstanding. They proactively identify growth opportunities, flag issues before they escalate, and keep our store metrics in the green at all times. Our Walmart store has become our #1 sales channel.",
        name: "Omar Al-Rasheed | DubaiTech Gadgets ",
        location: "UAE",
    },
];

const faqs = [
    {
        id: "One",
        question: "What is Walmart Store Management?",
        answer: `
        Walmart Store Management services involves overseeing the operations of Walmart retail locations, including staff management, inventory control, customer service, and store performance.
      `,
    },
    {
        id: "Two",
        question: "Why is Walmart Marketplace Management more effective than on other platforms?",
        answer: `
        At Tech2Globe, our Walmart store management services include:
        <ul>
            <li>Walmart Store Setup</li>
            <li>Product & Supplier Research</li>
            <li>Order & Inventory Management</li>
            <li>Performance Optimization</li>
            <li>Walmart Fulfillment Services</li>
            <li>Analytics and Reporting</li>
        </ul>
      `,
    },
    {
        id: "Three",
        question: "How can our services can help to increase your sales?",
        answer: `
        Our Walmart Advertising Agency will boost your product sales by optimizing product visibility through targeted Walmart Advertising campaigns. Our expertise in analyzing and researching marketing trends, product listing optimization, and ads on multiple platform will drive up your sales and maximize your ROI.
      `,
    },
];

export default function WalmartStoreManagement() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb pageName="Walmart Store Management" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className={Style.ContentDiv}>
                                <h2 className="pb-3">Why Walmart store management is important?</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCard}>
                                            <div className={Style.WaIcon}>
                                                <img
                                                    src="/images/services/service-inner/High-visibility.png"
                                                    alt="Increased product visibility"
                                                    width="100%"
                                                />
                                            </div>
                                            <h4>Increased product visibility</h4>
                                            <p>Walmart Marketplace offers its sellers store management services which ensure that the products are displayed prominently in store on digital screens, endcaps, or sampling solutions and online through Walmart Connect. With optimized product listings for Walmart advertising campaigns, your product's search ranking will be boosted. Tech2Globe, a Walmart advertising agency will improve your visibility for better sales performance.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCard}>
                                            <div className={Style.WaIcon}>
                                                <img
                                                    src="/images/services/service-inner/High-Customer-Engagement.png"
                                                    alt="Maximum sales conversion rates"
                                                    width="100%"
                                                />
                                            </div>
                                            <h4>Maximum sales conversion rates</h4>
                                            <p>Walmart Marketing offers its advertisers with strategies which will optimize the customers shopping experience. Walmart stores will display banners, product samples, competitive prices, and full stocks to drive high conversion rate. Tech2Globe, will use Walmart Connect to obtain customer data such as purchase history and interests that will allow us to target them with personalized ads to attract those customers.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCard}>
                                            <div className={Style.WaIcon}>
                                                <img
                                                    src="/images/services/service-inner/Cost-Effective-Growth.png"
                                                    alt="Strengthen brand presence"
                                                    width="100%"
                                                />
                                            </div>
                                            <h4>Strengthen brand presence</h4>
                                            <p>With consistent and proper store management, advertisers will accumulate recognition and trust for their brands on Walmart Advertising. Memorable ad formats such as video displays, sampling systems, endcaps, and online ad campaigns will increase customer engagement, making brands household names. Tech2Globe will assist you by maintain high-quality listings, competitive prices and craft engaging promotions to maximize sales and build brand loyalty.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 pb-3">Services offered by Tech2Globe</h2>

                                <div class="ws-featurecard">
                                    <div class="ws-iconblock">
                                        <img src="/images/services/service-inner/Store-Setup-Icon-blue.png" alt="" />
                                    </div>
                                    <div class="ws-contentblock">
                                        <h5>Walmart Store Setup</h5>
                                        <p>Tech2Globe will setup your seller account on Walmart Marketplace. We will craft optimized product listings, integrate with Walmart Connect for advertising and configure store settings such as in-stock status and pricing to comply with Walmart's guidelines. </p>
                                    </div>
                                </div>

                                <div class="ws-featurecard">
                                    <div class="ws-iconblock">
                                        <img src="/images/services/service-inner/Supplier-Research-Icon-blue.png" alt="" />
                                    </div>
                                    <div class="ws-contentblock">
                                        <h5>Product &amp; Supplier Research</h5>
                                        <p>To support in-store and online visibility, we conduct market and competitor research &amp; analysis to find out which products are in high demand and which suppliers are reliable. We will ensure the customer's preferences are fulfilled by analyzing data regarding customer's needs to ensure the products are relevant and competitive. </p>
                                    </div>
                                </div>

                                <div class="ws-featurecard">
                                    <div class="ws-iconblock">
                                        <img src="/images/services/service-inner/Inventory-Management-Icon-blue.png" alt="" />
                                    </div>
                                    <div class="ws-contentblock">
                                        <h5>Order &amp; Inventory Management</h5>
                                        <p>We will optimize inventory levels to prevent stock-outs so that the products are available for customers both in-store and online. We will manage order fulfillment process and work with Walmart Fulfillment Services (WFS) to ensure fast, reliable delivery to support customer's requirements and boost customer satisfaction.</p>
                                    </div>
                                </div>

                                <div class="ws-featurecard">
                                    <div class="ws-iconblock">
                                        <img src="/images/services/service-inner/Performance-Optimization-Icon-blue.png" alt="" />
                                    </div>
                                    <div class="ws-contentblock">
                                        <h5>Performance Optimization</h5>
                                        <p>We will use optimized keywords, bids and create ads to enhance your campaign performance. We will place ads in both in-store and online to maximize product visibility and enhance conversion rate based on analyzing customer data to maximize ROI.</p>
                                    </div>
                                </div>

                                <div class="ws-featurecard">
                                    <div class="ws-iconblock">
                                        <img src="/images/services/service-inner/Fulfillment-Solutions-Icon-blue.png" alt="" />
                                    </div>
                                    <div class="ws-contentblock">
                                        <h5>Walmart Fulfillment Solutions</h5>
                                        <p>We will create optimized product listings, incorporate with Walmart Connect for advertising and configure store settings, such as inventory and pricing to comply with Walmart Fulfillment Services (WFS) guidelines. We will manage logistics, offering storage, packing, and shipping solutions that will boost delivery speed and customer satisfaction.</p>
                                    </div>
                                </div>

                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 pb-3">Cross Industry Walmart Store Development Expertise:</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>E-Commerce</h5>

                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Jewelry
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Clothing
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Furniture
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Auto
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Retail &
                                                    E-commerce</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Food & Beverage
                                                    Targeting</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Finance & Insurance</h5>
                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Crypto</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Banking</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Accounting</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Financial Advice</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Insurance</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Amazon</h5>
                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Handmade</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Home, Garden & Tools</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Food & Grocery</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Beauty & Wellness</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Toys, Kids & Baby</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Etsy</h5>
                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Handmade</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Beauty & Wellness</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Pet Supplies</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Wood & Leather</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Jewelry</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Ebay</h5>
                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Handmade</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Toys</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Antique & Collectibles</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Mobile</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Information Technology</h5>
                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; SaaS</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; For Software Companies</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Healthcare</h5>
                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Family Practices</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; For Hospitals</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 pb-3">Why Work With Us?</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/account.png"
                                                alt="Expertise in Store Management"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Expertise in Store Management</h5>
                                                <p>Our Walmart marketing agency is expert in managing advertising campaigns and promotions to drive brand's visibility and sales performance. We can craft optimized product listing with SEO optimized content, inventory & order management, review & reputation management, and compliance & policy support to help your brand grow faster and scale efficiently.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/paint-palette.png"
                                                alt="Product Performance Reports"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Product Performance Reports</h5>
                                                <p>Tech2Globe will provide you with regular reports regarding products performance such as sale, ad performance and customer engagement across all platforms. As a Walmart Marketing Agency, we will give you detailed analysis of ongoing market trends and competitor analysis to ensure your product is more visible with competitive pricing to boost your brand's reputation and loyalty.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/account.png"
                                                alt="Fulfillment & Order Analytics"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Fulfillment & Order Analytics</h5>
                                                <p>We will analyze order and fulfillment data to improve storage, order processing, shipping, returns and customer support. We will help you analyze which products are best selling products, customer buying behavior, fulfillment issues, inventory turnover and profit margin per product to support better customer experience across all platforms of Walmart.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/performance.png"
                                                alt="Cost Effective Solutions"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Cost Effective Solutions</h5>
                                                <p>We will provide you with smart solutions and strategies that will help you grow further with minimal expenditure. We will ensure every dollar you spend, brings you maximum return, whether you are a startup or established business. We will ensure your budget is used according to the data analysed and focus on strategies which brings most return-on-investment (ROI).</p>
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
            <ClientPortfolio clients={portfolioClients} />
            <ClientSlider testimonials={testimonials} />
            <FaqSection faqs={faqs} />
        </>
    )
};
