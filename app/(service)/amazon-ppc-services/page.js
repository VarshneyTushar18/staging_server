import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";

export const metadata = {
    title: "Amazon PPC Services | AI-Optimized Ad Management for Maximum ROAS",
    description:
        "Tech2Globe's Amazon PPC services are powered by AI-driven bid optimization and real-time performance data. We reduce wasted ad spend and intelligently scale campaigns to deliver the highest possible return on ad spend.",
    openGraph: {
        title: "Amazon PPC Services | AI-Optimized Ad Management for Maximum ROAS",
        description:
            "Tech2Globe's Amazon PPC services are powered by AI-driven bid optimization and real-time performance data. We reduce wasted ad spend and intelligently scale campaigns to deliver the highest possible return on ad spend.",
        url: "https://stagenew.tech2globe.tech/amazon-ppc-services",
    },
    twitter: {
        card: "summary_large_image",
        title: "Amazon PPC Services | AI-Optimized Ad Management for Maximum ROAS",
        description:
            "Tech2Globe's Amazon PPC services are powered by AI-driven bid optimization and real-time performance data. We reduce wasted ad spend and intelligently scale campaigns to deliver the highest possible return on ad spend.",
    },
    alternates: {
        canonical: "https://stagenew.tech2globe.tech/amazon-ppc-services",
    },
};

const pageHeaderData = {
    title: "Amazon PPC Service",
    description:
        "Advertise smarter on Amazon with Tech2Globe’s full-cycle PPC management. Our Amazon PPC experts help you lower your Advertising Cost of Sale (ACoS), improve product visibility, and increase conversions with tailored ad campaigns.",
    buttonText: "Book Your Consultation",
    buttonLink: "/contact-us",
    backgroundImage: "/images/services/amazon-ppc-services-banner.webp",
};




const faqs = [
    {
        id: "One",
        question: "What is Amazon PPC Service and how can it help increase sales?",
        answer: "Amazon PPC Service involves managing paid advertising campaigns to help your products appear in front of relevant shoppers on Amazon. Our approach includes campaign setup, keyword research, bid optimization, search-term analysis, negative keyword management, and ongoing performance monitoring to improve visibility and generate more qualified sales.",
    },
    {
        id: "Two",
        question: "How do you optimize Amazon PPC campaigns to reduce wasted ad spend?",
        answer: "We regularly review search terms, keywords, bids, placements, and campaign performance to identify where budget is being spent without generating useful results. We then add negative keywords, adjust bids, refine targeting, and move budget toward campaigns and keywords that show stronger sales potential.",
    },
    {
        id: "Three",
        question: "What Amazon PPC campaigns should I run for my products?",
        answer: "The right campaign mix depends on your products, category, competition, sales history, and advertising goals. We can build and manage Sponsored Products, Sponsored Brands, and Sponsored Display campaigns, using different targeting strategies to capture high-intent searches, discover new keywords, and support brand visibility.",
    },
    {
        id: "Four",
        question: "How do you decide which keywords to target for Amazon PPC?",
        answer: "We combine keyword research with your product information, Amazon search behavior, competitor research, and actual campaign search-term data. This helps us identify relevant high-intent keywords and continuously refine the keyword list as the campaigns generate more data.",
    },
    {
        id: "Five",
        question: "How long does it take to see results from Amazon PPC?",
        answer: "Results vary based on factors such as product demand, competition, pricing, reviews, listing quality, budget, and historical campaign data. We normally use the initial campaign period to collect performance data and identify winning keywords, targeting, and bids before making further optimization decisions.",
    },
    {
        id: "Six",
        question: "What metrics do you monitor in Amazon PPC campaigns?",
        answer: "We monitor metrics such as impressions, clicks, CTR, CPC, spend, orders, sales, conversion rate, ACoS, and ROAS. We use these metrics together rather than focusing on one number, because reducing ACoS alone may not always be the best strategy if the goal is to increase profitable sales and overall revenue.",
    },
    {
        id: "Seven",
        question: "Can you manage Amazon PPC campaigns for multiple products or SKUs?",
        answer: "Yes. We can manage PPC campaigns across multiple products and SKUs by organizing campaigns according to product, keyword, targeting, and performance goals. This makes it easier to control budgets, identify strong and weak performers, and scale campaigns based on actual results.",
    },
];

const portfolioClients = [
    {
        initials: "GS",
        gradient: "#0b2e58",
        client: "GreenShield Supplements",
        country: "Ireland",
        project: "Full PPC Campaign Rebuild",
        desc: "Irish supplements brand that cut ACOS from 45% to 14% and doubled sales within 8 weeks through a complete PPC architecture rebuild.",
        category: "PPC Services",
        result: "ACOS: 45% → 14%",
        resultSub: "Efficiency Growth",
    },
    {
        initials: "JP",
        gradient: "#0b2e58",
        client: "JapanCraft Premium",
        country: "Japan",
        project: "Japanese Market PPC Strategy",
        desc: "Japanese premium goods seller that improved ROAS from 1.8x to 6.2x through culturally relevant keyword targeting on Amazon.co.jp campaigns.",
        category: "PPC Services",
        result: "ROAS: 1.8x → 6.2x",
        resultSub: "Performance Growth",
    },
    {
        initials: "CB",
        gradient: "#0b2e58",
        client: "CoralBay Beauty",
        country: "Australia",
        project: "Multi-Market PPC Management",
        desc: "Australian beauty brand that grew revenue 80% year-over-year while maintaining a 9% TACOS across AU, US, and UK marketplace PPC campaigns.",
        category: "PPC Services",
        result: "TACOS: 9% | +80% revenue",
        resultSub: "Profitability Growth",
    },
    {
        initials: "SF",
        gradient: "#0b2e58",
        client: "StartFit Gear",
        country: "USA",
        project: "Launch PPC Strategy (New Brand)",
        category: "PPC Services",
        result: "#1 sponsored position",
        resultSub: "Market Position",
    },
    {
        initials: "LH",
        gradient: "#0b2e58",
        client: "LuxeHome UK",
        country: "UK",
        project: "PPC + Sponsored Brands Video",
        category: "PPC Services",
        result: "+250% video impressions",
        resultSub: "Visibility Growth",
    },
];

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.webp",
        text: "Tech2Globe's PPC team is phenomenal. They rebuilt our entire campaign architecture with laser-focused keyword targeting. ACOS dropped from 45% to 14% and our sales doubled within 8 weeks.",
        name: "Liam O'Connor | GreenShield Supplements",
        location: "Ireland",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.webp",
        text: "Our Amazon.co.jp PPC was completely inefficient with Japanese keyword targeting. Tech2Globe's specialists rebuilt our campaigns with culturally relevant keywords. ROAS improved from 1.8x to 6.2x.",
        name: "Akira Watanabe | JapanCraft Premium",
        location: "Japan",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.webp",
        text: "Tech2Globe manages all our PPC across AU, US, and UK marketplaces. Their cross-marketplace PPC expertise is outstanding. Combined TACOS maintained at 9% while revenue grew 80% year-over-year.",
        name: "Amelia Roberts | CoralBay Beauty",
        location: "Australia",
    },
];


export default function AmazonPPCServices() {

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.tech2globe.com/amazon-ppc-services#webpage",
                "url": "https://www.tech2globe.com/amazon-ppc-services",
                "name": "Amazon PPC Services",
                "description": "Tech2Globe provides Amazon PPC Services including campaign setup, keyword research, bid optimization, search-term analysis, negative keyword management, and ongoing campaign performance optimization.",
                "isPartOf": {
                    "@id": "https://www.tech2globe.com/#website"
                },
                "about": {
                    "@id": "https://www.tech2globe.com/amazon-ppc-services#service"
                },
                "publisher": {
                    "@id": "https://www.tech2globe.com/#organization"
                },
                "breadcrumb": {
                    "@id": "https://www.tech2globe.com/amazon-ppc-services#breadcrumb"
                },
                "inLanguage": "en-US"
            },
            {
                "@type": "Service",
                "@id": "https://www.tech2globe.com/amazon-ppc-services#service",
                "name": "Amazon PPC Services",
                "serviceType": "Amazon PPC Advertising",
                "description": "Amazon PPC Services including campaign setup and management, keyword research, bid optimization, search-term analysis, negative keyword management, Sponsored Products, Sponsored Brands, Sponsored Display, and ongoing performance monitoring.",
                "provider": {
                    "@id": "https://www.tech2globe.com/#organization"
                },
                "areaServed": {
                    "@type": "Place",
                    "name": "Worldwide"
                },
                "url": "https://www.tech2globe.com/amazon-ppc-services"
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tech2globe.com/amazon-ppc-services#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.tech2globe.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Amazon PPC Services",
                        "item": "https://www.tech2globe.com/amazon-ppc-services"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tech2globe.com/amazon-ppc-services#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is Amazon PPC Service and how can it help increase sales?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Amazon PPC Service involves managing paid advertising campaigns to help your products appear in front of relevant shoppers on Amazon. Our approach includes campaign setup, keyword research, bid optimization, search-term analysis, negative keyword management, and ongoing performance monitoring to improve visibility and generate more qualified sales."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do you optimize Amazon PPC campaigns to reduce wasted ad spend?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We regularly review search terms, keywords, bids, placements, and campaign performance to identify where budget is being spent without generating useful results. We then add negative keywords, adjust bids, refine targeting, and move budget toward campaigns and keywords that show stronger sales potential."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What Amazon PPC campaigns should I run for my products?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The right campaign mix depends on your products, category, competition, sales history, and advertising goals. We can build and manage Sponsored Products, Sponsored Brands, and Sponsored Display campaigns, using different targeting strategies to capture high-intent searches, discover new keywords, and support brand visibility."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do you decide which keywords to target for Amazon PPC?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We combine keyword research with your product information, Amazon search behavior, competitor research, and actual campaign search-term data. This helps us identify relevant high-intent keywords and continuously refine the keyword list as the campaigns generate more data."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long does it take to see results from Amazon PPC?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Results vary based on factors such as product demand, competition, pricing, reviews, listing quality, budget, and historical campaign data. We normally use the initial campaign period to collect performance data and identify winning keywords, targeting, and bids before making further optimization decisions."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What metrics do you monitor in Amazon PPC campaigns?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We monitor metrics such as impressions, clicks, CTR, CPC, spend, orders, sales, conversion rate, ACoS, and ROAS. We use these metrics together rather than focusing on one number, because reducing ACoS alone may not always be the best strategy if the goal is to increase profitable sales and overall revenue."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can you manage Amazon PPC campaigns for multiple products or SKUs?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. We can manage PPC campaigns across multiple products and SKUs by organizing campaigns according to product, keyword, targeting, and performance goals. This makes it easier to control budgets, identify strong and weak performers, and scale campaigns based on actual results."
                        }
                    }
                ]
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
            <Breadcrumb parentName="Services" pageName="Amazon Ppc Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    
                    <h2 className="text-center">Achieve Success with Our Amazon PPC Management Services

                    </h2>
                    <hr />
                    <p className="text-center">Boost Your Amazon Sales With Tech2Globe&apos;s Custom Amazon PPC Campaigns.

                    </p>
                    <p className="text-center">Creating a profitable PPC campaign and increasing your Amazon sales takes time, so sellers new to PPC advertising on Amazon should be patient. Finding the optimal approach to managing your <strong>Amazon PPC Management</strong> campaigns is more like a long run than a quick fix because it requires implementation of different strategies.
                    </p>
                    <p className="text-center">Lots of things go into making a PPC campaign work, like making sure your product listings are optimized so that people who click on your ad are more likely to buy. Moreover, picking the right keywords so that your ads are seen by Amazon customers who are most likely to buy your product. Because of this, more and more sellers on the Amazon marketplace are opting to work with an Amazon PPC management company instead of doing it themselves. On the other hand, an Amazon wholesale seller can do everything for you on Amazon, such as shipping, marketing, and advertising your products.
                    </p>
                    <p className="text-center">Optimization of <Link href="/amazon-seo-listing-optimization" className="text-decoration-underline fw-normal">Amazon listings</Link> and Amazon PPC campaigns are the forte of <strong>Amazon PPC Management Services</strong>. Our expertise and experience save you the trouble of learning by doing the trial and error that usually goes into making a good PPC campaign. Plus, you can save a lot of time because you won&apos;t have to manage and optimize the campaigns by yourself.
                    </p>
                    <div className={Style.partnersArea}>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-12 col-md-offset-1  d-none d-sm-block">
                                <ul className={Style.partners}>
                                    <li><img src="/images/clients/hp.webp" alt="tool-logo" width="300px" className={Style.partner} /></li>
                                    <li><img src="/images/clients/nike.webp" alt="tool-logo" width="300px" className={Style.partner} /></li>
                                    <li><img src="/images/clients/mahmayi.webp" alt="tool-logo" width="300px" className={Style.partner} /></li>
                                    <li><img src="/images/clients/abrams.webp" alt="tool-logo" width="300px" className={Style.partner} /></li>
                                    <li><img src="/images/clients/creative-arcades.webp" alt="tool-logo" width="300px" className={Style.partner} /></li>
                                    <li><img src="/images/clients/legend-logo_140x.webp" alt="tool-logo" width="300px" className={Style.partner} /></li>
                                    <li><img src="/images/clients/ss-mediacl.webp" alt="tool-logo" width="300px" className={Style.partner} /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center pb-5"><a href="/contact-us" className="btn btn-danger">Start Now</a></div>
                    <div className="row col-sm-12 mb-5 d-flex justify-content-center pb-5">
                        <div className="row justify-content-center">
                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12 text-left mb-4">
                                <div className="card h-100 p-3 shadow-sm">
                                    <h3 className={`${Style.headingText} text-danger`}>Improve Product Visibility
                                    </h3>
                                    <p className="text-left">Shine on with customized PPC for Amazon campaigns from Tech2Globe. Our Amazon experts use advanced digital marketing methods to attract the right consumers by highlighting the uniqueness of your brand. Our motive is not just to make you visible but also to make you stand out!
                                    </p>
                                    <img src="/images/services/amazon-sponsored-products.webp" className="img-responsive" alt />
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12 text-left mb-4">
                                <div className="card h-100 p-3 shadow-sm">
                                    <h3 className={`${Style.headingText} text-danger`}>Boost Brand Awareness
                                    </h3>
                                    <p className="text-left">Build your brand&apos;s recognition on Amazon with our innovative PPC for <Link href="/amazon-account-management" className="text-decoration-underline fw-normal">Amazon management services</Link>. We&apos;ll raise your brand&apos;s awareness by creating targeted campaigns, which will highlight your company&apos;s unique selling features.
                                    </p>
                                    <img src="/images/services/amazon-sponsored-brands.webp" className="img-responsive" alt />
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12 text-left mb-4">
                                <div className="card h-100 p-3 shadow-sm">
                                    <h3 className={`${Style.headingText} text-danger`}>Elevate Product Listings
                                    </h3>
                                    <p className="text-left">Take your product listings to new heights with Tech2Globe&apos;s customized Amazon advertising campaigns. As an Amazon PPC service company, our team of experts implements innovative <a href="/digital-marketing-services" className="text-decoration-underline">digital marketing</a> strategies to optimize your product listings and create eye-catching ads, driving more sales on the platform as a result.
                                    </p>
                                    <img src="/images/services/amazon-sponsored-display-ads.webp" className="img-responsive" alt />
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12 text-left mb-4">
                                <div className="card h-100 p-3 shadow-sm">
                                    <h3 className={`${Style.headingText} text-danger`}>Strengthen Brand Recognition
                                    </h3>
                                    <p className="text-left">If you are tired of blending into the background, then our creative ad campaigns are here to assist you. We will be your guide to tell your story in a way that grabs attention, sets you apart from the competition, and positions you as a leader in your industry. Partner with our <strong>Amazon PPC Management</strong> service experts and drive sales through compelling advertising strategies.
                                    </p>
                                    <img src="/images/services/Strengthen-Brand-Recognition.webp" className="img-responsive" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row col-sm-12 mb-5  text-center content d-flex justify-content-center pb-5">
                        <h2 className="main-heading text-center"><span style={{ color: '#c8020f' }}>Discover </span> <span style={{ color: '#080405' }}>The Power Of Amazon PPC Management Services
                        </span></h2>
                        <p className="text-center">The Innovative Platform To Unlock Your Business&apos;s Full Potential On Amazon
                        </p>
                        <div className="row">
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
                                <div className={`${Style.itemBox} h-100`}>
                                    <h5 className="text-white fs-1">$ 1M</h5>
                                    <p className={`${Style.itemText} text-white text-center`}>Unparalleled ad optimization</p>
                                </div>
                            </div>

                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
                                <div className={`${Style.itemBox} h-100`}>
                                    <h5 className="text-white fs-1">10X</h5>
                                    <p className={`${Style.itemText} text-white text-center`}>Maximized ROI</p>
                                </div>
                            </div>

                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
                                <div className={`${Style.itemBox} h-100`}>
                                    <h5 className="text-white fs-1">Fixed Price</h5>
                                    <p className={`${Style.itemText} text-white text-center`}>Driven exponential growth</p>
                                </div>
                            </div>
                        </div>

                        <p>Tech2Globe&apos;s Amazon PPC specialist can help you make your items discoverable and convert listing visits into active consumers. To compete on Amazon and reach the most customers, businesses must look beyond the organic SEO approach. Here&apos;s where our Amazon PPC Services USA may help. With well-executed PPC management campaigns, we raise product awareness, sales, and customer acquisition and provide you with a competitive advantage in the market.
                        </p>
                    </div>
                    <div className="pb-5">
                        <h2 className="text-center">How It Works: Unleashing The Power Of Amazon PPC Management Experts</h2>
                        <hr />
                        <p className="text-center">Get ready, because now is the time to take your Amazon business to the next level of success with our expert <strong>Amazon PPC Management</strong> team. Our Team Of Dedicated <Link href="/ppc-services" className="text-decoration-underline fw-normal">PPC Experts</Link> Will Go Above And Beyond To Deliver Exceptional Results.
                        </p>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-6 stepstyle mb-4">
                                <div className="card p-3 shadow-sm h-100">
                                    <h5 className="fs-1" style={{ color: '#c9000b' }}>01.</h5>
                                    <strong>Boost Sales and Increase Profits
                                    </strong>
                                    <p>Our Amazon PPC agency is focused on maximizing your profitability. Through <strong>Amazon PPC Management</strong> creative strategies we work smartly to increase conversions and ensure that you earn more for each advertising cycle.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 stepstyle mb-4">
                                <div className="card p-3 shadow-sm h-100">
                                    <h5 className="fs-1" style={{ color: '#c9000b' }}>02.</h5>
                                    <strong>Increase Visibility of your Amazon Business
                                    </strong>
                                    <p>As a team of <Link href="/amazon-marketing-services" className="text-decoration-underline fw-normal">Amazon advertising</Link> experts, our focus is to constantly search for the latest tools and strategies and give your amazon advertising campaign the edge. We work to bring your product among interested buyers and increase its reach.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 stepstyle mb-4">
                                <div className="card p-3 shadow-sm h-100">
                                    <h5 className="fs-1" style={{ color: '#c9000b' }}>03.</h5>
                                    <strong>Maximize Your Advertising Budget with Smart Bidding
                                    </strong>
                                    <p>Every penny counts in advertising, and no one knows this better than us. This is the prime reason why our team regularly monitors the bidding strategies and accordingly makes the adjustments to ensure you&apos;re getting the best returns.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 stepstyle mb-4">
                                <div className="card p-3 shadow-sm h-100">
                                    <h5 className="fs-1" style={{ color: '#c9000b' }}>04.</h5>
                                    <strong>Stay Update with Regular Tracking and Reporting
                                    </strong>
                                    <p>We will keep you updated with the regular reports. These reports are easy to understand and will give you correct information about how your Amazon PPC management is doing. This way, you can keep track of the progress, and make the right decisions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pb-5">
                        <h2 className="main-heading text-center mt-3 py-5">Major Categories <span> We Work For Amazon PPC Service</span></h2>
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
                        <div className={Style.inner}>
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
                    <div className="pb-5">
                        <h5 className="text-center mb-3">The Secret Ingredient of Tech2Globe Services Experts
                        </h5>
                        <div className="row">
                            <div className="col-md-4 text-center mb-4">
                                <div className="card h-100 p-3 d-flex justify-content-center align-items-center">
                                    <img src="/images/services/cashier.v2.svg" className="p-ppc__list2-icon loading loaded mx-auto" loading="lazy" width={60} height={60} alt="Icon 7." aria-hidden="true" />
                                    <span className="text-bold" style={{ fontSize: 25 }}><strong>The Amazon Alchemy</strong></span>
                                    <p className="text-center">Revolutionizing Advertising Campaigns and Strategy for Sellers</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center mb-4">
                                <div className="card h-100 p-3 d-flex justify-content-center align-items-center">
                                    <img src="/images/services/amazone-ppc-monitor-graph.svg" className="p-ppc__list2-icon loading loaded mx-auto" loading="lazy" width={60} height={60} alt="Icon 8." aria-hidden="true" />
                                    <span className="text-bold" style={{ fontSize: 25 }}><strong>Dominate Your Niche</strong> </span>
                                    <p className="text-center">Outsmarting Competitors in Amazon Categories</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center mb-4">
                                <div className="card h-100 p-3 d-flex justify-content-center align-items-center">
                                    <img src="/images/services/amazone-ppc-dollar-in-circle.svg" className="p-ppc__list2-icon loading loaded mx-auto" loading="lazy" width={60} height={60} alt="Icon 9." aria-hidden="true" />
                                    <span className="text-bold" style={{ fontSize: 25 }}><strong>The Power of Perception</strong></span>
                                    <p className="text-center"> Elevating Brand Recognition with Sales and Lower ACoS</p>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive mt-3">
                            <table className="table table-bordered">
                                <thead>
                                    <tr className="table-light" style={{ backgroundColor: '#ffffff', fontWeight: 800 }}>
                                        <th>Time period</th>
                                        <th>Clicks</th>
                                        <th>Cost per Click</th>
                                        <th>Click Through Rate</th>
                                        <th>Time ACOS</th>
                                        <th>Conversions</th>
                                        <th>Sales Revenue</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>4 months before Tech2globe Services</td>
                                        <td>36,700</td>
                                        <td>$2.02</td>
                                        <td>0.22%</td>
                                        <td>40.53%</td>
                                        <td>7.370</td>
                                        <td>$183.235.09</td>
                                    </tr>
                                    <tr>
                                        <td>4 months after Tech2globe Services</td>
                                        <td>62,482</td>
                                        <td>$1.87</td>
                                        <td>0.38%</td>
                                        <td>37.01%</td>
                                        <td>13.110</td>
                                        <td>$314.247.55</td>
                                    </tr>
                                    <tr className="table-success" style={{ backgroundColor: '#4caf5042 !important' }}>
                                        <td>Percentage change</td>
                                        <td>+70%</td>
                                        <td>-7%</td>
                                        <td>+73%</td>
                                        <td>-8.68%</td>
                                        <td>+78%</td>
                                        <td>+72%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-4" style={{ backgroundColor: '#e9f3fc' }}>
                    <div>
                        <h3 className="text-danger text-center">Amazon PPC Services Case Studies</h3>
                        <div className={`${Style.galleryContainer} pb-5 pt-3 container mx-auto`}>
                            <div className={`${Style.tzGallery}`}>
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                                        <a className="lightbox" href="images/services/amazon-map-pricing-surveillance.webp">
                                            <img src="images/services/amazon-map-pricing-surveillance.webp" alt="Bridge" className="img-fluid" />
                                        </a>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                                        <a className="lightbox" href="images/services/amazon-map-pricing-surveillance-1.webp">
                                            <img src="images/services/amazon-map-pricing-surveillance-1.webp" alt="Park" className="img-fluid" />
                                        </a>
                                    </div>
                                </div>
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
