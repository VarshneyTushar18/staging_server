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
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";

export const metadata = {
    title: "Walmart Advertising Agency | AI-Optimized PPC Campaigns for Maximum Sales",
    description:
        "Drive more Walmart sales with Tech2Globe's AI-optimized Walmart advertising services. Our intelligent PPC management system continuously refines bids, targets high-intent shoppers, and maximizes your return on every ad dollar spent.",
    keywords:
        "Amazon translation services, Amazon translation services in india, amazon translate",
    openGraph: {
        title: "Walmart Advertising Agency | AI-Optimized PPC Campaigns for Maximum Sales",
        siteName: "Tech2Globe Web Solutions LLP",
        description:
            "Drive more Walmart sales with Tech2Globe's AI-optimized Walmart advertising services. Our intelligent PPC management system continuously refines bids, targets high-intent shoppers, and maximizes your return on every ad dollar spent.",
        url: "https://stagenew.tech2globe.tech/walmart-advertisement",
    },
    twitter: {
        card: "Walmart Advertising Agency | AI-Optimized PPC Campaigns for Maximum Sales",
        title: "Walmart Advertising Agency | AI-Optimized PPC Campaigns for Maximum Sales",
        description:
            "Drive more Walmart sales with Tech2Globe's AI-optimized Walmart advertising services. Our intelligent PPC management system continuously refines bids, targets high-intent shoppers, and maximizes your return on every ad dollar spent.",
    },
    alternates: {
        canonical: "https://stagenew.tech2globe.tech/walmart-advertisement",
    },
};

const pageHeaderData = {
    title: "Walmart Advertising",
    description:
        "Tech2Globe provides services for Walmart advertising, including strategizing, campaign management, performance tracking, automation and optimization. Join us to boost your brand's online visibility.",
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
        initials: "TZ",
        gradient: "#0b2e58",
        client: "TechZone USA",
        country: "USA",
        project: "PPC Campaign Rebuild & Optimization",
        desc: "US electronics retailer that boosted Walmart ROAS from 2.1x to 7.4x in 8 weeks through AI-driven bid management and full PPC account restructuring.",
        category: "Walmart Advertising",
        result: "ROAS improved from 2.1x to 7.4x",
        resultSub: "ROAS Growth",
    },
    {
        initials: "BL",
        gradient: "#0b2e58",
        client: "BrightLeaf Home",
        country: "UK",
        project: "Sponsored Products Launch Strategy",
        desc: "UK home brand that tripled ad-driven sales and cut CPC by 42% after Tech2Globe rebuilt its entire Walmart advertising strategy from scratch.",
        category: "Walmart Advertising",
        result: "3x ad-driven sales in 60 days",
        resultSub: "Sales Growth",
    },
    {
        initials: "MC",
        gradient: "#0b2e58",
        client: "MapleCart Retail",
        country: "Canada",
        project: "Full Funnel Ad Campaign Management",
        desc: "Canadian retail brand that achieved peak Walmart brand visibility through expertly managed Sponsored Products, Sponsored Brands, and display campaigns.",
        category: "Walmart Advertising",
        result: "CPC reduced by 42%",
        resultSub: "Cost Reduction",
    },
    {
        initials: "WW",
        gradient: "#0b2e58",
        client: "WinterWear Direct",
        country: "USA",
        project: "Seasonal Peak Ad Campaign",
        category: "Walmart Advertising",
        result: "Best Q4 ROAS ever recorded",
        resultSub: "Seasonal Success",
    },
    {
        initials: "NC",
        gradient: "#0b2e58",
        client: "NatureCare Labs",
        country: "Australia",
        project: "Brand Visibility & Display Ads",
        category: "Walmart Advertising",
        result: "+180% branded search impressions",
        resultSub: "Brand Awareness",
    },
];


const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe's Walmart advertising team is phenomenal. They restructured our entire PPC account, eliminated wasted ad spend, and boosted our ROAS from 2.1x to 7.4x in just 8 weeks. Their AI-driven bid management is something truly special.",
        name: "Michael T. Barnes | TechZone USA",
        location: "USA",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "We were burning money on Walmart ads with no clear strategy. Tech2Globe audited our campaigns, rebuilt them from scratch, and implemented a data-driven approach. Our CPC dropped by 42% and sales from ads tripled within 2 months.",
        name: "Emma Harrington | BrightLeaf Home ",
        location: "UK",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Exceptional advertising management! Tech2Globe handles our Walmart Sponsored Products, Sponsored Brands, and display campaigns with precision. Our brand visibility on Walmart has never been higher, and our ad spend ROI keeps improving every month.",
        name: "Lucas Beaumont | MapleCart Retail ",
        location: "Canada",
    },
];


const faqs = [
    {
        id: "One",
        question: "Does Walmart Have PPC Advertising?",
        answer: `
        Walmart Advertising offers pay-per-click (PPC) advertising through Sponsored Search Ads, including Sponsored Products, Sponsored Brands, and Sponsored Videos, which appear in search results, product pages, or high-traffic areas on Walmart.com and the app with the advertisers paying only when ads are clicked.
      `,
    },
    {
        id: "Two",
        question: "What are the costs and requirements for Walmart advertising?",
        answer: `
        Sponsored Search Ads require a minimum $1000 monthly budget and a $100 daily budget, with cost fluctuating based on bidding strategy, product relevance, and competitive factors. Advertisers are charged only when customers click their ads, operating on a pay-per-click (PPC) model.
      `,
    },
    {
        id: "Three",
        question: "How can social media campaigns be integrated with Walmart advertising?",
        answer: `
        Walmart Connect supports social media campaigns on platforms like X (Twitter), Instagram, or Tik Tok, using sponsored posts, videos, or influencers content to engage Walmart's customers. These campaigns will be managed by Tech2Globe, helping you scale up quickly.
      `,
    },
];

export default function WalmartAdvertising() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb pageName="Walmart Advertising" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className={Style.ContentDiv}>
                                <h2 className="pb-3">Why Use Walmart Advertising?</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCard}>
                                            <div className={Style.WaIcon}>
                                                <img
                                                    src="/images/services/service-inner/Global-reach-icon.png"
                                                    alt="Global Reach"
                                                    width="100%"
                                                />
                                            </div>
                                            <h4>Global Reach</h4>
                                            <p>With more than 140 million weekly customers across Walmart&apos;s 4600 stores in US alone and in other countries like Canada, Mexico, etc., Walmart.com and mobile app, gives you unprecedented reach across the world.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCard}>
                                            <div className={Style.WaIcon}>
                                                <img
                                                    src="/images/services/service-inner/Audience-Targeting-Icon.png"
                                                    alt="Audience Targeting"
                                                    width="100%"
                                                />
                                            </div>
                                            <h4>Audience Targeting</h4>
                                            <p>Walmart Advertising gives you first party data which includes purchase history, browsing behavior, regional data, etc. for precise targeting the right customers.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCard}>
                                            <div className={Style.WaIcon}>
                                                <img
                                                    src="/images/services/service-inner/Multiple-platforms-icon.png"
                                                    alt="Multiple Platforms for Ads"
                                                    width="100%"
                                                />
                                            </div>
                                            <h4>Multiple Platforms for Ads</h4>
                                            <p>Walmart advertising allows you to showcase your ads and Walmart advertising campaigns in-store through various digital screens and endcaps, online ads including sponsored products and banners, and TV channels via Walmart 2024 Vizio acquisition.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCard}>
                                            <div className={Style.WaIcon}>
                                                <img
                                                    src="/images/services/service-inner/Walmart-PPC-icon.png"
                                                    alt="Walmart PPC Advertising"
                                                    width="100%"
                                                />
                                            </div>
                                            <h4>Walmart PPC Advertising</h4>
                                            <p>Walmart uses pay-per-click (PPC) model for advertising through Walmart Connect&apos;s sponsored search ads. Here advertisers bid on keywords to display ads in search results, paying only when uses click. By utilizing Walmart PPC advertising, your brand can reach a broader range of customers and budget flexibility to enhance your brand&apos;s visibility.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 pb-3">What Are The Different Types of Walmart Ads?</h2>
                                <p>Walmart provides its advertisers a set of tools such as Walmart Connect, Walmart keyword tools, Walmart Clean Room, and third-party tools like Helium 10, Sellics, etc. for increasing their brand visibility and sales performance. Walmart Connect follows pay-per-click (PPC) model for Walmart advertising. At Tech2Globe, we utilize these tools to craft promotions and Walmart advertising campaigns that are appealing to customers and drive up conversion rate:</p>

                                <div className={Style.AdSection}>
                                    <h4>Walmart Sponsored Products Ads</h4>
                                    <p>These ads appear on Walmart&apos;s website and app, ideal for promoting electronics,
                                        groceries, and organic products.</p>
                                    <div className="row">
                                        <div className={`${Style.AdType} col-md-4`}>
                                            <h5>Search-In-Grid<br className="d-sm-none" /> Ads</h5>
                                            <p>Enhance your product&apos;s visibility in search results and category pages. These ads
                                                can appear on the first 3 pages of Walmart&apos;s search listings.</p>
                                        </div>
                                        <div className={`${Style.AdType} col-md-4`}>
                                            <h5>Carousel<br className="d-sm-none" /> Ads</h5>
                                            <p>Showcase multiple product images in a rotating carousel format at the top of
                                                search results to capture user attention effectively.</p>
                                        </div>
                                        <div className={`${Style.AdType} col-md-4`}>
                                            <h5>Walmart Buy Box<br className="d-sm-none" /> Placement</h5>
                                            <p>Place your product as the default buying option with a direct “Add to Cart”
                                                feature to boost conversions and visibility.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={Style.AdSection}>
                                    <h4>Walmart In-Store Ads</h4>
                                    <p>Showcase your products within Walmart stores using digital screens, audio stations, and
                                        kiosks. Leverage Walmart Connect&apos;s data for targeted in-store promotions.</p>
                                </div>

                                <div className={Style.AdSection}>
                                    <h4>Walmart Display Ads</h4>
                                    <p>Display digital ads on Walmart.com, mobile apps, social media, and third-party websites
                                        using Walmart Connect. Formats include banners, videos, sponsored listings, and carousel
                                        ads.</p>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 pb-3">Walmart Advertising Services Offered by Tech2Globe</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Sponsored Ads Management</h5>
                                            <p>We manage Walmart PPC campaigns with strategic keyword optimization and audience
                                                targeting to improve product visibility across platforms:</p>
                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Search-In-Grid
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Search Carousel
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Buy Box
                                                    Placement</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Optimized
                                                    Keywords</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Data Analysis &
                                                    Reports</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Audience
                                                    Targeting</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Onsite Display Ads</h5>
                                            <p>
                                                Boost product discoverability with custom-designed onsite banner, carousel,
                                                audio and video ads tailored for Walmart&apos;s digital platform.
                                            </p>
                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Banner Ads</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Audio Ads</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Video Ads</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Carousel Ads</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Offsite Display Ads</h5>
                                            <p>
                                                We execute offsite strategies with data-driven targeting, RTB, and audience
                                                analytics to run effective Walmart display ads on third-party platforms.
                                            </p>
                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Digital Ads</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Third-party Website Ads</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Viewer & Click Tracking</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Automation</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Real-time Bidding</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Connected TV (CTV) & Streaming Ads</h5>
                                            <p>
                                                Reach audiences through video ads on streaming services and smart TVs with CTV
                                                advertising solutions customized for brand storytelling.
                                            </p>
                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Vizio TVs</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Hulu</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Disney+</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Roku</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Social Media Campaigns</h5>
                                            <p>
                                                We drive Walmart traffic through social media strategies across multiple platforms
                                                using metrics, creative content, and conversion tracking.
                                            </p>
                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Instagram</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; X (Twitter)</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; TikTok</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; YouTube</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 pb-3">Why Work With Tech2globe?</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/account.png"
                                                alt="Planning & Optimization Expertise"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Planning & Optimization Expertise</h5>
                                                <p>At Tech2Globe, we can bring you our expertise and services suitable to your needs. Our Walmart advertising agency can make your advertising campaigns more appealing and helping you boost your online visibility.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/paint-palette.png"
                                                alt="Ads Design & Development"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Ads Design & Development</h5>
                                                <p>We can craft visually appealing ads showcasing your brand&apos;s products in different formats across various platforms. We will ensure that the ads align with your brand&apos;s vision and identity to enhance community engagement.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/account.png"
                                                alt="Advertising Management"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Advertising Management</h5>
                                                <p>Our Walmart ad agency is adept at managing complex ad campaigns across Walmart Connect&apos;s offsite display ads, CTV & Streaming ads, and social media platforms by using various tools to scale campaigns and optimizing real-time bidding for maximum reach and return-on-investment (ROI).</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/performance.png"
                                                alt="Analytics & Attribution"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Analytics & Attribution</h5>
                                                <p>Our firm provides in-depth analysis which utilizes solutions like Walmart Connect&apos;s closed loop attribution which tracks customer Ad interactions, connects online and offline sales, and provides detailed insights on campaign performance allowing us to analyze best performing ads. By utilizing ads performance we will help you boost your ROI by optimizing campaigns and utilizing budget properly.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/dollar.png"
                                                alt="Cost-Effective & Efficient"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Cost-Effective & Efficient</h5>
                                                <p>By working with Tech2Globe, you can free yourself from tasks which require significant expertise and are tools and time intensive. We will handle you campaign setup, planning, monitoring and optimization and you can focus on performing core operations for your brand.</p>
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
