import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaChartBar, FaChartLine, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaHandshake, FaLightbulb, FaSearch, FaShieldAlt, FaTag, FaTimesCircle, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import "./custom.css";
import Link from "next/link";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";
import AmazonQuoteFab from "@/app/components/landingpage/AmazonQuoteFab";
import AmazonOnboardingHashRedirect from "@/app/components/landingpage/AmazonOnboardingHashRedirect";

export const metadata = {
    title: "Amazon Marketing Services | AI-Driven PPC, SEO & Storefront Growth",
    description:
        "Grow your brand with expert Amazon Marketing Services, including PPC, SEO, listing optimization, and Storefront support to improve visibility and sales.",
    keywords: [
        "Amazon marketing services",
        "Amazon marketing",
        "amazon marketing service",
        "amazon marketing services agency",
        "amazon ppc marketing services",
        "amazon store marketing services",
        "amazon digital marketing services",
        "amazon email marketing service",
        "amazon marketing services consultant",
    ],
    openGraph: {
        title: "Amazon Marketing Services | AI-Driven PPC, SEO & Storefront Growth",
        siteName: "Tech2Globe web Solutions LLP",
        description:
            "Grow your brand with expert Amazon Marketing Services, including PPC, SEO, listing optimization, and Storefront support to improve visibility and sales.",
        url: "https://stagenew.tech2globe.tech/amazon-marketing-services",
    },
    twitter: {
        card: "summary_large_image",
        title: "Amazon Marketing Services | AI-Driven PPC, SEO & Storefront Growth",
        description:
            "Grow your brand with expert Amazon Marketing Services, including PPC, SEO, listing optimization, and Storefront support to improve visibility and sales.",
    },
    alternates: {
        canonical: "https://stagenew.tech2globe.tech/amazon-marketing-services",
    },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What are Amazon Marketing Services and how can they help my business?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Amazon Marketing Services help brands improve their visibility and sales on Amazon through PPC advertising, Amazon SEO, product listing optimization, keyword research, and other growth strategies. The right approach depends on your products, competition, budget, and sales goals."
            }
        },
        {
            "@type": "Question",
            "name": "How can I increase sales on Amazon?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "To increase Amazon sales, you need to work on both visibility and conversion. Amazon Marketing Services can help through PPC campaigns, keyword targeting, listing optimization, competitive research, and ongoing performance analysis."
            }
        },
        {
            "@type": "Question",
            "name": "Does Amazon PPC help improve product visibility?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Amazon PPC can place products in relevant search results and on product detail pages, helping brands reach shoppers who are actively looking for similar products. As part of Amazon Marketing Services, PPC can be optimized through keyword selection, bids, budgets, and search-term analysis."
            }
        },
        {
            "@type": "Question",
            "name": "How do I optimize my Amazon product listing for better rankings?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Start with relevant keyword research and use those terms naturally across important parts of the listing, including the title, product description, and other relevant fields. Amazon Marketing Services can also include listing optimization to improve product discoverability while keeping the content useful and compliant with Amazon's guidelines."
            }
        },
        {
            "@type": "Question",
            "name": "How does Amazon SEO work?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Amazon SEO focuses on helping your products appear for relevant customer searches. Amazon Marketing Services may use keyword research, optimized product content, accurate product information, and performance data to improve organic visibility. Amazon also recommends using relevant search terms and avoiding keyword stuffing."
            }
        },
        {
            "@type": "Question",
            "name": "How much should I spend on Amazon PPC advertising?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "There is no fixed Amazon PPC budget that works for every business. Your budget should consider your product margins, competition, sales targets, and advertising performance. With Amazon Marketing Services, campaigns can be monitored and budgets adjusted based on metrics such as clicks, conversions, advertising spend, and ROAS."
            }
        },
        {
            "@type": "Question",
            "name": "How do I know if my Amazon marketing strategy is working?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Look beyond sales alone. Amazon Marketing Services can be evaluated using metrics such as impressions, clicks, conversions, advertising cost of sales (ACOS), ROAS, organic visibility, and overall sales growth. Reviewing these metrics regularly helps identify what is working and where campaigns or listings need improvement."
            }
        }
    ]
};

const pageHeaderData = {
    title: "Accelerate Your Brand Growth With The #1 Amazon Marketing Services",
    description:
        "Our Amazon marketing services agency specializes in driving sales, building brands, and engaging customers on the platform. Cost-per-click and cost-per-mile ad solutions can help you achieve your business goals.",
    buttonText: "Book Your Consultation",
    buttonLink: "/amazon-marketing-services/questionnaire",
    backgroundImage: "/images/services/amazon-marketing-services-desktop-banner.webp", // your banner image
};

const resources = [
    { id: 1, name: "Portfolio", path: "/portfolio" },
    { id: 2, name: "Case Studies", path: "/case-studies" },
    { id: 3, name: "Testimonial", path: "/testimonial" },
    { id: 4, name: "Clients", path: "/clients" },
];

const usefulLinks = [
    { id: 5, name: "SEO On Page Services", path: "/seo-services" },
    { id: 6, name: "E-Commerce SEO Services", path: "/ecommerce-seo-services" },
    { id: 7, name: "Link building Services", path: "/link-building-services" },
    { id: 8, name: "PPC Management Services", path: "/ppc-management-services" },
    { id: 9, name: "Social media Marketing Services", path: "/social-media-marketing-services" },
    { id: 10, name: "Email Marketing Services", path: "/email-marketing-services" },
    { id: 11, name: "Online Reputation Management", path: "/online-reputation-management-services" },
    { id: 12, name: "Content Marketing", path: "/content-marketing" },
    { id: 13, name: "Guest Posting", path: "/guest-posting-services" }
];


const sidebarSections = [
    { heading: "Resources", links: resources },
    { heading: "Useful Links", links: usefulLinks },
];

const certifications = [
    // { src: "/images/certifications/amazon-spn.webp", alt: "Amazon SPN" },
    { src: "/images/certifications/ebay.webp", alt: "Ebay" },
    { src: "/images/certifications/flipkart.webp", alt: "Flipkart" },
    // { src: "/images/certifications/AWS-Partner-Network.webp", alt: "AWS Partner Network" },
    // { src: "/images/certifications/amazon-advertising-logo.webp", alt: "Amazon Advertising" },
    // { src: "/images/certifications/tool-106.webp", alt: "Amazon Global Selling" },
    { src: "/images/certifications/cer-1.webp", alt: "Dmca-protected" },
    { src: "/images/certifications/cer-2.webp", alt: "Hubspot certified partner" },
    { src: "/images/certifications/cer-3.webp", alt: "clutch-certified" },
    { src: "/images/certifications/cer-7.webp", alt: "ISO-certified" },
    { src: "/images/certifications/cer-5.webp", alt: "Red-Herring-Global-Winner" },
    { src: "/images/certifications/cer-6.webp", alt: "Top-rated-organic-seo-agency" }
];

const Tools = [
    "/images/clients/tool-1.webp",
    "/images/clients/tool-2.webp",
    "/images/clients/tool-3.webp",
    "/images/clients/tool-4.webp",
    "/images/clients/tool-5.webp",
    "/images/clients/tool-6.webp",
    "/images/clients/tool-7.webp",
    "/images/clients/tool-9.webp",
    "/images/clients/tool-10.webp",
    "/images/clients/tool-11.webp",
    "/images/clients/tool-100.webp",
    "/images/clients/tool-101.webp",
    "/images/clients/tool-102.webp",
    "/images/clients/tool-103.webp",
    "/images/clients/tool-104.webp"
];


const clients = [
    { src: "/images/clients/aqua-tech-water-proofing-logo.webp", alt: "Waterproofing", title: "Waterproofing" },
    { src: "/images/clients/ba-logo.webp", alt: "BA_logo", title: "BA_logo" },
    { src: "/images/clients/bluebird-solar.webp", alt: "bluebird-solar", title: "bluebird-solar" },
    { src: "/images/clients/docib-logo.webp", alt: "docib-logo", title: "docib-logo" },
    { src: "/images/clients/du-vert-paris.webp", alt: "DuVert-Paris", title: "DuVert-Paris" },
    { src: "/images/clients/epos.webp", alt: "Epos", title: "Epos" },
    { src: "/images/clients/focus.webp", alt: "Focus", title: "Focus" },
    { src: "/images/clients/frontier.webp", alt: "Frontier", title: "Frontier" },
    { src: "/images/clients/getkart.webp", alt: "getkart1920X700", title: "getkart1920X700" },
    { src: "/images/clients/intas-logo.webp", alt: "Intas_Logo", title: "Intas_Logo" },
    { src: "/images/clients/kodak-logo-logotype-wordmark.webp", alt: "wordmark", title: "wordmark" },
    { src: "/images/clients/patanjali_logo.webp", alt: "Patanjali_Logo", title: "Patanjali_Logo" },
    { src: "/images/clients/pickzon.webp", alt: "Pickzon", title: "Pickzon" },
    { src: "/images/clients/tp-link.webp", alt: "Tp-link", title: "Tp-link" },
    { src: "/images/clients/wooden-street-logo.webp", alt: "street", title: "street" }
];


const portfolio = [
    {
        title: "CATALOGUING",
        items: [
            {
                title: "Alvish",
                link: "https://www.amazon.com/dp/B07M8VYY4L",
                img: "/images/services/portfolio-img/alvish.jpg",
            },
            {
                title: "Teliaoils",
                link: "https://www.amazon.co.uk/dp/B00IVNC114/",
                img: "/images/services/portfolio-img/teliaoils.webp",
            },
            {
                title: "Joe Kitchen",
                link: "https://www.amazon.de/dp/B07G8MT1C9",
                img: "/images/services/portfolio-img/joejis-kitchen.jpg",
            },
            {
                title: "Elegent",
                link: "https://www.amazon.in/dp/B078HWPJSJ",
                img: "/images/services/portfolio-img/elegant.jpg",
            },
            {
                title: "Jabra",
                link: "https://www.amazon.co.uk/dp/B00548P1DE",
                img: "/images/services/portfolio-img/jabra.webp",
            },
            {
                title: "Logitech",
                link: "https://www.amazon.co.uk/dp/B01BGBJ8Y0",
                img: "/images/services/portfolio-img/logitech.webp",
            },
        ],
    },
    {
        title: "EBC/A+",
        items: [
            {
                title: "Hopwater",
                link: "https://www.amazon.com/dp/B07FM6DPMG",
                img: "/images/services/portfolio-img/hopwater.webp",
            },
            {
                title: "Djmate",
                link: "https://www.amazon.in/dp/B07KKM37T4",
                img: "/images/services/portfolio-img/djmate.webp",
            },
            {
                title: "Glomania",
                link: "https://www.amazon.com/dp/B00E1P4BRS",
                img: "/images/services/portfolio-img/glomania.jpg",
            },
            {
                title: "Greenyi",
                link: "https://www.amazon.com/dp/B07C7Q2R6D",
                img: "/images/services/portfolio-img/greenyi.webp",
            },
            {
                title: "Lesenz",
                link: "https://www.amazon.co.uk/dp/B019VE5S98",
                img: "/images/services/portfolio-img/lesenz.webp",
            },
            {
                title: "K-Linda",
                link: "https://www.amazon.com/dp/B071FTW381",
                img: "/images/services/portfolio-img/k-linda.webp",
            },
            {
                title: "CHZ",
                link: "https://www.amazon.com/dp/B07QTCFLFC",
                img: "/images/services/portfolio-img/chz.webp",
            },
        ],
    },
    {
        title: "STORES",
        items: [
            {
                title: "Tulimed",
                link: "https://www.amazon.com/tulimed",
                img: "/images/services/portfolio-img/tulimed-store.jpg",
            },
            {
                title: "Weavely",
                link: "https://www.amazon.com/stores/page/A6347872-5FA2-4541-90CB-E2386113006F",
                img: "/images/services/portfolio-img/weavely-store.jpg",
            },
            {
                title: "Le Mirch",
                link: "https://www.amazon.com/lemirch",
                img: "/images/services/portfolio-img/le-mirch-store.jpg",
            },
        ],
    },
    {
        title: "INFOGRAPHIC",
        items: [
            {
                title: "Demarkt",
                link: "https://www.amazon.co.uk/dp/B01N5227U7",
                img: "/images/services/portfolio-img/demarkt.jpg",
            },
            {
                title: "Maxboost",
                link: "https://www.amazon.com/dp/B073DLZWX7",
                img: "/images/services/portfolio-img/maxboost.jpg",
            },
            {
                title: "Mpow",
                link: "https://www.e-panneur.ca/",
                img: "/images/services/portfolio-img/mpow.jpg",
            },
            {
                title: "720° Dgree",
                link: "https://www.amazon.fr/dp/B072FJXFBW",
                img: "/images/services/portfolio-img/720-dgree.jpg",
            },
        ]
    },
    {
        title: "RATING & REVIEWS",
        items: [
            {
                title: "Elegent",
                link: "https://www.amazon.in/dp/B078HWPJSJ",
                img: "/images/services/portfolio-img/elegant.jpg",
            },
            {
                title: "Logitech",
                link: "https://www.amazon.co.uk/dp/B01BGBJ8Y0",
                img: "/images/services/portfolio-img/logitech.webp",
            },
            {
                title: "Belkin",
                link: "https://www.amazon.co.uk/dp/B00AYNRLFA",
                img: "/images/services/portfolio-img/belkin.webp",
            },
        ],
    }
]

const portfolioClients = [
    {
        initials: "WB",
        gradient: "#0b2e58",
        client: "WildCraft Brewing",
        country: "USA",
        project: "Full Amazon Marketing Build-Out",
        desc: "US craft brewing brand that built its full Amazon marketing engine from scratch, achieving a 90% conversion rate increase within three months.",
        category: "Marketing Services",
        result: "+90% conversion rate",
        resultSub: "Conversion Growth",
    },
    {
        initials: "ZU",
        gradient: "#0b2e58",
        client: "ZaraHome UK",
        country: "UK",
        project: "Sponsored Brands Video Strategy",
        desc: "UK home brand that doubled year-over-year revenue through Sponsored Brands video ads, brand storytelling, and seasonal promotion management.",
        category: "Marketing Services",
        result: "2x YoY revenue",
        resultSub: "Revenue Growth",
    },
    {
        initials: "TJ",
        gradient: "#0b2e58",
        client: "TokyoTrails Japan",
        country: "Japan",
        project: "Japan Marketplace Marketing",
        desc: "Japanese outdoor gear brand that gained a competitive edge through a comprehensive Amazon marketing strategy tailored for the local marketplace.",
        category: "Marketing Services",
        result: "#1 BSR in category",
        resultSub: "Category Leadership",
    },
    {
        initials: "GO",
        gradient: "#0b2e58",
        client: "GreenPath Organics",
        country: "Canada",
        project: "Amazon Posts + Brand Content",
        category: "Marketing Services",
        result: "+55% brand followers",
        resultSub: "Audience Growth",
    },
    {
        initials: "TL",
        gradient: "#0b2e58",
        client: "TechHome Living",
        country: "Germany",
        project: "Amazon Storefront + Posts Strategy",
        category: "Marketing Services",
        result: "+4K monthly store visits",
        resultSub: "Traffic Growth",
    },
];

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.webp",
        text: "Tech2Globe built our entire Amazon marketing engine from scratch — Sponsored Ads, Stores, Posts, A+ content, and email follow-ups. We saw a 90% increase in our overall conversion rate in 3 months.",
        name: "Connor Walsh | WildCraft Brewing",
        location: "USA",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.webp",
        text: "A truly full-service Amazon marketing team. Tech2Globe managed our Sponsored Brands video ads, brand storytelling, and seasonal promotions with exceptional results. Revenue doubled year-over-year.",
        name: "Zara Kadir | ZaraHome UK",
        location: "UK",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.webp",
        text: "Tech2Globe's Amazon marketing strategy for our outdoor gear brand was comprehensive and effective. Their understanding of the Japanese marketplace gave us a significant competitive edge.",
        name: "Yuki Yamamoto | TokyoTrails Japan",
        location: "Japan",
    },
];

const faqs = [
    {
        id: "One",
        question: "What are Amazon Marketing Services and how can they help my business?",
        answer: "Amazon Marketing Services help brands improve their visibility and sales on Amazon through PPC advertising, Amazon SEO, product listing optimization, keyword research, and other growth strategies. The right approach depends on your products, competition, budget, and sales goals.",
    },
    {
        id: "Two",
        question: "How can I increase sales on Amazon?",
        answer: "To increase Amazon sales, you need to work on both visibility and conversion. Amazon Marketing Services can help through PPC campaigns, keyword targeting, listing optimization, competitive research, and ongoing performance analysis.",
    },
    {
        id: "Three",
        question: "Does Amazon PPC help improve product visibility?",
        answer: "Yes. Amazon PPC can place products in relevant search results and on product detail pages, helping brands reach shoppers who are actively looking for similar products. As part of Amazon Marketing Services, PPC can be optimized through keyword selection, bids, budgets, and search-term analysis.",
    },
    {
        id: "Four",
        question: "How do I optimize my Amazon product listing for better rankings?",
        answer: "Start with relevant keyword research and use those terms naturally across important parts of the listing, including the title, product description, and other relevant fields. Amazon Marketing Services can also include listing optimization to improve product discoverability while keeping the content useful and compliant with Amazon's guidelines.",
    },
    {
        id: "Five",
        question: "How does Amazon SEO work?",
        answer: "Amazon SEO focuses on helping your products appear for relevant customer searches. Amazon Marketing Services may use keyword research, optimized product content, accurate product information, and performance data to improve organic visibility. Amazon also recommends using relevant search terms and avoiding keyword stuffing.",
    },
    {
        id: "Six",
        question: "How much should I spend on Amazon PPC advertising?",
        answer: "There is no fixed Amazon PPC budget that works for every business. Your budget should consider your product margins, competition, sales targets, and advertising performance. With Amazon Marketing Services, campaigns can be monitored and budgets adjusted based on metrics such as clicks, conversions, advertising spend, and ROAS.",
    },
    {
        id: "Seven",
        question: "How do I know if my Amazon marketing strategy is working?",
        answer: "Look beyond sales alone. Amazon Marketing Services can be evaluated using metrics such as impressions, clicks, conversions, advertising cost of sales (ACOS), ROAS, organic visibility, and overall sales growth. Reviewing these metrics regularly helps identify what is working and where campaigns or listings need improvement.",
    },
];

export default function AmazonMarketing() {
    return (

        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Amazon Marketing Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Amazon Marketing Services" imageSrc="/images/services/service-inner/amazon-virtual-assistant-top-banner2.webp" />
                            <div className={Style.ContentDiv}>
                                <p><strong>Amazon Marketing Services</strong> help you grow faster on the world&apos;s largest marketplace. With targeted <strong>PPC ads, sponsored products, sponsored brands, and display ads</strong>, you can reach millions of active shoppers. Our Amazon marketing experts improve <strong>product visibility, brand awareness, and conversions</strong> with strategies tailored to your business. Take your sales to the next level with data-driven Amazon SEO, optimized product listings, and powerful advertising campaigns that deliver real results.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-3"><img src="/images/services/service-inner/list.webp" alt="" className={Style.InnerIcon} /> Optimize your Amazon listing with our Amazon Marketing Services Agency</h5>
                                <p>As a well-established <strong>Amazon marketing services agency</strong>, we improve the descriptions and images of your Amazon products. We handle everything from start to finish and know how to promote Amazon products, organic rankings, and sales. Several <strong>Amazon product listings</strong> are not optimized properly, resulting in a significant loss of revenue. Our Amazon professionals ensure that you get the most out of your investment from the start. Our Amazon marketing agency will help you to:</p>
                                <ul>
                                    <li>Enhance the quality of your images and material.</li>
                                    <li>Ascertain that your product is shown in the appropriate category.</li>
                                    <li>We do keyword research within that area to determine which words or phrases are the most profitable and will result in the highest organic results.</li>
                                    <li>They give you appropriate descriptions to help you boost conversion rates.</li>
                                    <li>Utilize Amazon&apos;s 200-character limit to optimize your titles with relevant keywords and phrasing that converts clicks into sales.</li>
                                    <li>Ensure that your photographs are high-quality, professional images and are appropriately scaled, presented, and framed to increase sales through your marketing activities.</li>
                                </ul>

                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-3"><img src="/images/services/service-inner/place.webp" alt="" className={Style.InnerIcon} /> Unlocking Success with <strong>Amazon Marketing Services</strong> with Tech2Globe</h5>
                                <p>Our Amazon marketing agency is committed to accelerating your e-Commerce business by delivering customized strategies to boost visibility, grow sales, and ensure brand consistency. We make the process seamless and create tangible results through expert strategies and committed support. Here is how we work:</p>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaCogs />
                                            </div>
                                            <h5 className="fw-bold mb-2">Setup & Optimization</h5>
                                            <p className="text-muted medium">Our <strong>Amazon marketing services agency</strong> will ensure that your business is SEO optimized and operational on Amazon. Our AMS team will guide you on every step through the whole process, from an Amazon seller setup to improving your rating and conversions.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaChartLine />
                                            </div>
                                            <h5 className="fw-bold mb-2">Campaign Management</h5>
                                            <p className="text-muted medium">We will manage all aspects of Amazon advertising, including auditing accounts, analyzing competition, keyword research and crafting optimized, clear, and concise product descriptions to drive conversions and provide high-quality <strong>Amazon advertising services</strong>.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaTag />
                                            </div>
                                            <h5 className="fw-bold mb-2">Price Monitoring</h5>
                                            <p className="text-muted medium">Our Amazon marketing services (AMS) team will monitor Amazon&apos;s <strong>minimum-advertised-price</strong> (MAP) regulations, tracking MAP pricing across the platform. We will notify you of any violations and ensure your brand&apos;s MAP is acknowledged and implemented.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaHandshake />
                                            </div>
                                            <h5 className="fw-bold mb-2">MAP Agreement</h5>
                                            <p className="text-muted medium">Our AMS team can assist sellers with MAP agreements and discussions on Amazon. For people who sell in multiple locations, MAP contracts and agreements are essential, and your brand will not be diluted as a result of MAP agreements.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <img src="/images/services/service-inner/amazon-map-pricing-surveillance.webp" alt width={"100%"} />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <img src="/images/services/service-inner/amazon-map-pricing-surveillance-1.webp" alt width={"100%"} />
                                    </div>
                                </div>
                                <p>With our expertise in <strong>Amazon marketing services</strong>, we&apos;re here to help you address any violations of MAP price agreements.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-3"><img src="/images/services/service-inner/list.webp" alt="" className={Style.InnerIcon} /> Why You Need Amazon Marketing Services Consultant</h5>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                        <div className={`${Style.ConsCard} h-100 p-4 border rounded bg-white text-center`}>
                                            <div className={`${Style.IcoHolder} d-inline-flex justify-content-center align-items-center bg-primary text-white rounded-circle`}>
                                                <FaChartLine />
                                            </div>
                                            <h5 className="mb-3">Competition</h5>
                                            <p className="mb-0 text-muted">Amazon has millions of sellers, making it hard to stand out. Our agency offers insights and strategies to help you rank higher and gain visibility.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                        <div className={`${Style.ConsCard} h-100 p-4 border rounded bg-white text-center`}>
                                            <div className={`${Style.IcoHolder} d-inline-flex justify-content-center align-items-center bg-warning text-white rounded-circle`}>
                                                <FaCogs />
                                            </div>
                                            <h5 className="mb-3">Complexity</h5>
                                            <p className="mb-0 text-muted">Amazon advertising is complex and ever-changing. We specialize in tools and optimization to ensure your product stands out.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                        <div className={`${Style.ConsCard} h-100 p-4 border rounded bg-white text-center`}>
                                            <div className={`${Style.IcoHolder} d-inline-flex justify-content-center align-items-center bg-danger text-white rounded-circle`}>
                                                <FaClock />
                                            </div>
                                            <h5 className="mb-3">Time Consuming</h5>
                                            <p className="mb-0 text-muted">Managing Amazon marketing takes time. We handle it all—from setup to reporting—so you can focus on your business.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-3"><img src="/images/services/service-inner/list.webp" alt="" className={Style.InnerIcon} /> Best Amazon Digital Marketing Services for your business</h5>
                                <p>Amazon is not a well-kept secret. Instead, it is a seller&apos;s market that is overcrowded. As a result, you will frequently have to pay to play. Top sellers leverage <strong>Amazon PPC agency services</strong>, including sponsored items management, sponsored brand management, Amazon display ads, video ads, Amazon Vendor Central management, and Amazon AI advertising management, to succeed.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-3"><img src="/images/services/service-inner/list.webp" alt="" className={Style.InnerIcon} /> Branding and Amazon Storefront</h5>
                                <p><strong>Amazon digital marketing services</strong> empower small and medium-sized enterprises through Amazon Storefronts, a particular area dedicated to small enterprises. Our professionals know how to set up and create a visually appealing Amazon Storefront and place your items for optimum exposure using Amazon-enhanced marketing content. We include A+ material to your product description page to improve sales, including high-quality photographs and EBC design and development.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-3"><img src="/images/services/service-inner/list.webp" alt="" className={Style.InnerIcon} /> How Does Amazon Marketing Services Work?</h5>
                                <p>As an expert <strong>Amazon advertising services agency</strong>, our Amazon Marketing Services to increase product visibility for their clients through Pay-Per-Click products. These self-service options, now branded as Get Started, give sellers a chance to change shoppers&apos; minds when they are about to buy a competitor&apos;s product, which is a powerful tool for sellers to increase their reach on Amazon. With our expert guidance and strategies, sellers can maximize their return on investment and achieve their sales goals on Amazon.</p>
                                <ul>
                                    <li>Sponsored Products</li>
                                    <li>Sponsored Brands (previously Headline Search Ads, HSA).</li>
                                    <li>Sponsored Display</li>
                                    <li>Stores (previously Brand Pages).</li>
                                    <li>Products that operate via PPC (Cost-Per-Click)</li>
                                    <li>Products that operate via impressions (Cost-Per-Thousand).</li>
                                </ul>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 pb-3">Our Engagement Models</h2>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                        <div className="card p-3 border h-100">
                                            <h5>Dedicated Team</h5>
                                            <p>For Large and complex projects, we give our resources to those who work dedicatedly on client projects.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                        <div className="card p-3 border h-100">
                                            <h5>Fixed Price</h5>
                                            <p>For fixed cost projects we analyze the requirements and then give the fixed cost based on the efforts needed.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                        <div className="card p-3 border h-100">
                                            <h5>Hourly Price</h5>
                                            <p>Pay on hourly costs where clients have small requirements and no fixed scope.</p>
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

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-3">
                            <div className={Style.ContentDiv}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3">
                                        <h5 className="pb-3">Amazon Search Engine Optimization (SEO)</h5>
                                        <p>We get your e-Commerce business operating on Amazon rapidly as a full-service Amazon SEO team. Our Amazon marketing consultant will walk you through every step of the process, from Amazon seller setup to improving your rating and conversions. We take care of every step along the route, including an Amazon account audit, competition analysis, keyword research, and optimized, clear, and brief descriptions.</p>
                                        <img src="/images/services/service-inner/new/Amazon_SEO.webp" alt className="img-fluid" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3">
                                        <h5 className="pb-3">Amazon Analytics and Reporting</h5>
                                        <p>With detailed data analytics, we keep every customer informed about their business and engagement. Monthly Amazon advertising reports with expenditure, return on ad spend (ROAS), advertising cost of sales (ACoS), and detailed pay-per-click (PPC) data are provided to clients. Monthly Amazon business reports, including goods per sale, sales over time, reviews, customer happiness, and Amazon listing optimization, are also provided to clients. We strive to give customers an in-depth analysis of Fulfillment by <Link href="/amazon-fba-consulting" className="text-decoration-underline fw-normal">Amazon (FBA)</Link> expenses as part of our Amazon marketing services, flushing out any hidden charges.</p>
                                        <img src="/images/services/service-inner/amazon-analytics-and-reporting.webp" alt className="img-fluid" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3">
                                        <h5 className="pb-3">Amazon Advertising/PPC</h5>
                                        <p>Amazon is not a well-kept secret. Instead, it is a seller&apos;s market that is overcrowded. As a result, you will frequently have to pay to play. To set themselves apart, top sellers use PPC campaigns and tactics. With sponsored items management, sponsored brand management, <strong>Amazon display ads</strong>, video ads, Amazon Vendor Central management, and Amazon AI advertising management, our Amazon advertising professionals put you in the game.</p>
                                        <img src="/images/services/service-inner/new/pay-per-clicks.webp" alt className="img-fluid" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3">
                                        <h5 className="pb-3">Branding and Amazon Storefront</h5>
                                        <p>Amazon Storefronts focuses on keeping small and medium-sized enterprises relevant, and Amazon has a particular area dedicated to small enterprises. Our professionals know how to set up and create a visually appealing Amazon Storefront and place your items for optimum exposure using <strong>Amazon enhanced marketing content</strong>. We include A+ material to your product description page to improve sales, including high-quality photographs and EBC design and development.</p>
                                        <img src="/images/services/service-inner/new/amazon-store.webp" alt className="img-fluid" />
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-3"><img src="/images/services/service-inner/badge.webp" alt="" className={Style.InnerIcon} /> How Does Amazon Marketing Services Work?</h5>
                                <p>Tech2Globe leverages the power of Amazon Marketing Services to increase product visibility for their clients through Pay-Per-Click products. These self-service options now branded as Get Started give sellers a chance to change shoppers&apos; minds when they are about to buy a competitor&apos;s product which is a powerful tool for sellers to increase their reach on Amazon. With our expert guidance and strategies, sellers can maximize their return on investment and achieve their sales goals on Amazon.</p>
                                <ul className={Style.ThreeList}>
                                    <li>Sponsored Products</li>
                                    <li>Sponsored Brands (previously Headline Search Ads, HSA).</li>
                                    <li>Sponsored Display</li>
                                    <li>Stores (previously Brand Pages).</li>
                                    <li>Products that operate via PPC (Cost-Per-Click)</li>
                                    <li>Products that operate via impressions (Cost-Per-Thousand).</li>
                                </ul>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <img src="/images/services/service-inner/amazon-sponsored-products.webp" alt className="img-fluid" />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <img src="/images/services/service-inner/amazon-sponsored-brands.webp" alt className="img-fluid" />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <img src="/images/services/service-inner/amazon-sponsored-display-ads.webp" alt className="img-fluid" />
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-5 pb-4 text-danger text-center section-heading">Partner Onboarding Process</h2>
                                <div className="steps-timeline text-center">
                                    <div className="steps-one">
                                        <h3>Step 1</h3>
                                        <div className="end-circle back-orange"></div>
                                        <div className="step-wrap">
                                            <div className="steps-stops">
                                                <div className="verticle-line back-orange"></div>
                                            </div>
                                        </div>

                                        <div className="inverted-pane-warp back-blue">
                                            <div className="inverted-steps-pane">
                                                <p className="text-white">Enquiry Received</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="steps-two">
                                        <h3>Step 2</h3>
                                        <div className="step-wrap">
                                            <div className="steps-stops">
                                                <div className="verticle-line back-orange"></div>
                                            </div>
                                        </div>
                                        <div className="inverted-pane-warp back-orange">
                                            <div className="inverted-steps-pane">
                                                <p className="text-white">Analysis And Plan</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="steps-three">
                                        <h3>Step 3</h3>
                                        <div className="step-wrap">
                                            <div className="steps-stops">
                                                <div className="verticle-line back-orange"></div>
                                            </div>
                                        </div>
                                        <div className="inverted-pane-warp back-blue">
                                            <div className="inverted-steps-pane">
                                                <p className="text-white">NDA Signed</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="steps-four">
                                        <h3>Step 4</h3>
                                        <div className="step-wrap">
                                            <div className="steps-stops">
                                                <div className="verticle-line back-orange"></div>
                                            </div>
                                        </div>
                                        <div className="inverted-pane-warp back-orange">
                                            <div className="inverted-steps-pane">
                                                <p className="text-white">Sample Job</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="steps-five">
                                        <h3>Step 5</h3>
                                        <div className="step-wrap">
                                            <div className="steps-stops">
                                                <div className="verticle-line back-orange"></div>
                                            </div>
                                        </div>
                                        <div className="inverted-pane-warp back-blue">
                                            <div className="inverted-steps-pane">
                                                <p className="text-white">MOU Signed</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="steps-six">
                                        <h3>Step 6</h3>
                                        <div className="inverted-end-circle back-orange"></div>
                                        <div className="step-wrap">
                                            <div className="steps-stops">
                                                <div className="verticle-line back-orange"></div>
                                            </div>
                                        </div>
                                        <div className="inverted-pane-warp back-blue">
                                            <div className="inverted-steps-pane">
                                                <p className="text-white">Project Kick-OFF</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-5 pb-4 text-danger text-center">Why Tech2globe for Amazon Marketing Services</h2>
                                <div className={`${Style.IcoCardTwo} row`}>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <img src="/images/services/service-inner/user-headset.webp" alt className="img-fluid mb-3" />
                                        <h5>24 X 7 SUPPORT</h5>
                                        <p>Our clients receive comprehensive support on all topics regarding Amazon. We&apos;re in constant communication with our clients via email, phone, and web conferencing. Tech2globe Amazon Consulting integrates services seamlessly into our clients&apos; businesses by working hand in hand with their internal employees.</p>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <img src="/images/services/service-inner/rocket.webp" alt className="img-fluid mb-3" />
                                        <h5>SPEED - 40% Average Increase In Total Product Sales</h5>
                                        <p>Whether you&apos;re entering the marketplace or a veteran seller on Amazon, Tech2globe Consulting gets your seller account up to speed fast. Clients are fully on-boarded, listed appropriately, and <Link href="/amazon-advertising-services" className="text-decoration-underline fw-normal">advertised on Amazon</Link>.</p>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <img src="/images/services/service-inner/light-bulb-6.webp" alt className="img-fluid mb-3" />
                                        <h5>15+ YEARS OF EXPERTISE</h5>
                                        <p>We have worked with a wide breadth of businesses and sales models, including 1P and 3P sellers. We understand the pros and cons of these business models thoroughly. We help our clients accelerate their current business model, pivot into a new one, or operate hybrid models.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={Style.ContentDiv}>
                <h2 className="pt-3 pb-4 text-danger text-center">Major Categories We Work For</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className={Style.inner}>
                                <div className={`${Style.commonInner} inner1`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/health-care.webp" alt />
                                    </div>
                                    <div className={`${Style.title} mx-auto`}>
                                        Healthcare
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner2`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/skin-care-1-1.webp" alt />
                                    </div>
                                    <div className={`${Style.title} mx-auto`}>
                                        Beauty
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner3`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/food.webp" alt />
                                    </div>
                                    <div className={`${Style.title} mx-auto`}>
                                        Food
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner4`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/home-1-1.webp" alt />
                                    </div>
                                    <div className={`${Style.title} mx-auto`}>
                                        Home &amp; Kitchen
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner9`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/sports-1.webp" alt />
                                    </div>
                                    <div className={`${Style.title} mx-auto`}>
                                        Sports
                                    </div>
                                </div>
                            </div>
                            <div className={Style.inner2}>
                                <div className={`${Style.commonInner} inner5`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/fashion.webp" alt />
                                    </div>
                                    <div className={`${Style.title} mx-auto`}>
                                        Fashion
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner6`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/open-book-1.webp" alt />
                                    </div>
                                    <div className={`${Style.title} mx-auto`}>
                                        Kindle &amp; Books
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner7`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/elec.webp" alt />
                                    </div>
                                    <div className={`${Style.title} mx-auto`}>
                                        Electronics
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner8`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/software.webp" alt />
                                    </div>
                                    <div className={`${Style.title} mx-auto`}>
                                        Software
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner10`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/all-1.webp" alt />
                                    </div>
                                    <div className={`${Style.title} mx-auto`}>
                                        All
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-5 pb-5">
                <div className="container">
                    <div className="row certifications-container">
                        <h2 className="main-heading mb-4 text-danger text-center">
                            Our Certifications
                        </h2>
                        {certifications.map((c, i) => (
                            <div
                                key={i}
                                className="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-12"
                            >
                                <a className={Style.CertificationCard}>
                                    <div className="center">
                                        <Image
                                            src={c.src}
                                            alt={c.alt}
                                            width={200}
                                            height={200}
                                            className="img-responsive img-fluid"
                                            style={{ objectFit: "contain" }}
                                        />
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="pt-3 pb-5">
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-lg-11 col-md-11 col-sm-12 col-xs-12 ">
                            <h2 className="main-heading mb-4 text-danger text-center">
                                Our Tools Expertise
                            </h2>


                            <div className="row d-flex justify-content-center gap-3">
                                {Tools.map((src, i) => (
                                    <div key={i} className={`${Style.SingleItem} col-md-2`}>
                                        <div className="item">
                                            <div className={Style.Thumb}>
                                                <Image
                                                    src={src}
                                                    alt="tool-logo"
                                                    width={200}
                                                    height={200}
                                                    className="img-fluid"
                                                    style={{ objectFit: "contain" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="StoreCreationTabs">
                <PortfolioTabs data={portfolio} title={'Our Amazon Portfolio'} description={'With over 500+ clients across the world, Tech2globe has delivered hundreds of cost effective and high-quality solutions for a wide range of industries and domains including consumer and business development, e-Commerce, retail, manufacturing & many others.'} />
            </div>

            <div className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h2 className="main-heading mb-4 text-danger text-center">
                                Our Clients
                            </h2>


                            <div className="row d-flex justify-content-center">
                                {clients.map((c, i) => (
                                    <div key={i} className={Style.ClientOuter}>
                                        <div className={Style.Clientlg}>
                                            <Image
                                                src={c.src}
                                                alt={c.alt}
                                                title={c.title}
                                                width={145}
                                                height={73}
                                                style={{ objectFit: "contain" }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

            <ClientPortfolio clients={portfolioClients} />
            <ClientSlider testimonials={testimonials} />
            <FaqSection faqs={faqs} />
            <AmazonOnboardingHashRedirect />
            <AmazonQuoteFab />
        </>
    )
};
