import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import { FaChartBar, FaChartLine, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaHandshake, FaLightbulb, FaSearch, FaShieldAlt, FaTag, FaTimesCircle, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";

export const metadata = {
    title: "Amazon Seller Pricing Strategies | Amazon Seller Pricing",
    description:
        "An optimized amazon seller pricing strategies is key to growing your sales on the marketplace. Learn about amazons dynamic pricing, guidelines.",
    keywords:
        "Amazon Seller Pricing Strategies, Amazon Product & Pricing Strategy, Amazon Product Strategy, Amazon Pricing Strategy, Amazon Seller Strategies",
    alternates: {
        canonical: "https://stagenew.tech2globe.tech/amazon-product-pricing-strategy",
    },
    openGraph: {
        title: "Amazon Seller Pricing Strategies | Amazon Seller Pricing",
        description:
            "An optimized amazon seller pricing strategies is key to growing your sales on the marketplace. Learn about amazons dynamic pricing, guidelines.",
        siteName: "Tech2Globe",
        url: "https://stagenew.tech2globe.tech/amazon-product-pricing-strategy",
        type: "website",
    },
    twitter: {
        card: "Amazon Seller Pricing Strategies | Amazon Seller Pricing",
        title: "Amazon Seller Pricing Strategies | Amazon Seller Pricing",
        description:
            "An optimized amazon seller pricing strategies is key to growing your sales on the marketplace. Learn about amazons dynamic pricing, guidelines.",
    },
};
const pageHeaderData = {
    title: "Amazon Product & Pricing Strategy",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};

const resources = [
    { id: 1, name: "Portfolio", path: "/portfolio" },
    { id: 2, name: "Case Studies", path: "/case-studies" },
    { id: 3, name: "Testimonial", path: "/testimonial" },
];

const usefulLinks = [
    { id: 4, name: "SEO On Page Services", path: "/seo-services" },
    { id: 5, name: "E-Commerce SEO Services", path: "/ecommerce-seo-services" },
    { id: 6, name: "Link building Services", path: "/link-building-services" },
    { id: 7, name: "PPC Management Services", path: "/ppc-management-services" },
    { id: 8, name: "Social media Marketing Services", path: "/social-media-marketing-services" },
    { id: 9, name: "Email Marketing Services", path: "/email-marketing-services" },
    { id: 10, name: "Online Reputation Management", path: "/online-reputation-management-services" },
    { id: 11, name: "Content Marketing", path: "/content-marketing" },
    { id: 12, name: "Guest Posting", path: "/guest-posting-services" }
];


const sidebarSections = [
    { heading: "Resources", links: resources },
    { heading: "Useful Links", links: usefulLinks },
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
                img: "/images/services/portfolio-img/teliaoils.jpg",
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
                img: "/images/services/portfolio-img/jabra.jpg",
            },
            {
                title: "Logitech",
                link: "https://www.amazon.co.uk/dp/B01BGBJ8Y0",
                img: "/images/services/portfolio-img/logitech.jpg",
            },
        ],
    },
    {
        title: "EBC/A+",
        items: [
            {
                title: "Hopwater",
                link: "https://www.amazon.com/dp/B07FM6DPMG",
                img: "/images/services/portfolio-img/hopwater.jpg",
            },
            {
                title: "Djmate",
                link: "https://www.amazon.in/dp/B07KKM37T4",
                img: "/images/services/portfolio-img/djmate.jpg",
            },
            {
                title: "Glomania",
                link: "https://www.amazon.com/dp/B00E1P4BRS",
                img: "/images/services/portfolio-img/glomania.jpg",
            },
            {
                title: "Greenyi",
                link: "https://www.amazon.com/dp/B07C7Q2R6D",
                img: "/images/services/portfolio-img/greenyi.jpg",
            },
            {
                title: "Lesenz",
                link: "https://www.amazon.co.uk/dp/B019VE5S98",
                img: "/images/services/portfolio-img/lesenz.jpg",
            },
            {
                title: "K-Linda",
                link: "https://www.amazon.com/dp/B071FTW381",
                img: "/images/services/portfolio-img/k-linda.jpg",
            },
            {
                title: "CHZ",
                link: "https://www.amazon.com/dp/B07QTCFLFC",
                img: "/images/services/portfolio-img/chz.jpg",
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
                img: "/images/services/portfolio-img/logitech.jpg",
            },
            {
                title: "Belkin",
                link: "https://www.amazon.co.uk/dp/B00AYNRLFA",
                img: "/images/services/portfolio-img/belkin.jpg",
            },
        ],
    }
]

const caseStudies = [
    {
        "id": 1,
        "title": "Product Visibility & Drive Sales 0.1",
        "image": "/images/services/service-inner/untitled-design-20.png",
        "description": "The client has been in the lighting business since 2011, specializing...",
        "docLink": "https://stagenew.tech2globe.tech/casestudies-docs1/Case Study 2 - Sales Increase in different categories-converted.pdf"
    },
    {
        "id": 2,
        "title": "EBC and Storefront",
        "image": "/images/services/service-inner/ebca.png",
        "description": "Client deals in Health & Household items and Pet Supplies products on Amazon and wants...",
        "docLink": "https://stagenew.tech2globe.tech/casestudies-docs1/Case Study 3 - EBC and Storefront-converted.pdf"
    },
    {
        "id": 3,
        "title": "Amazon PPC",
        "image": "/images/services/service-inner/amazon-ppc.png",
        "description": "Clients came to us with a range of Amazon PPC management difficulties....",
        "docLink": "https://stagenew.tech2globe.tech/casestudies-docs1/Amazon PPC-converted.pdf"
    },
    {
        "id": 4,
        "title": "Product Visibility & Drive Sales",
        "image": "/images/services/service-inner/untitled-design-18.png",
        "description": "Client has been in the business of selling fine grooming products for over 15 years......",
        "docLink": "https://stagenew.tech2globe.tech/casestudies-docs1/Case Study 1 - Sales Increase in different categories-converted.pdf"
    },
    {
        "id": 5,
        "title": "e-Commerce Store for Luxury Goods",
        "image": "/images/services/service-inner/e-commerce-store-for-luxury-goods.png",
        "description": "It is the ultimate luxury fashion destination for the distribution and retail of Italian, French…",
        "docLink": "https://stagenew.tech2globe.tech/casestudies-docs1/E-Commerce Store for Luxury Goods-converted.pdf"
    },
    {
        "id": 6,
        "title": "Amazon Sale Boost",
        "image": "/images/services/service-inner/amazon-sale-boost.jpg",
        "description": "Find out the most important areas where our team required utmost attention to showcase the work from day one …",
        "docLink": "https://stagenew.tech2globe.tech/casestudies-docs1/amazon-india-case-study.pdf"
    },
    {
        "id": 7,
        "title": "About Drop shipping",
        "image": "/images/services/service-inner/about-drop-shipping.jpg",
        "description": "Drop shipping is an e-retail term where someone facilitates the selling and delivery of an online product without …",
        "docLink": "https://stagenew.tech2globe.tech/casestudies-docs1/Case-Study-Drop-Shipping.pdf"
    },
    {
        "id": 8,
        "title": "Migration from Sooq to Amazon.ae",
        "image": "/images/services/service-inner/migration-from-sooq-to-amazon-ae.jpg",
        "description": "Forgiving the best solution to our client and comprehensive support is our specialty which we successfully …",
        "docLink": "https://stagenew.tech2globe.tech/casestudies-docs1/Migration-from-Sooq-to-AmazonAE.pdf"
    },
    {
        "id": 9,
        "title": "e-Commerce Multivendor Store 1.0",
        "image": "/images/services/service-inner/e-commerce-multivendor-store-1-0.jpg",
        "description": "Our client approached us for Ecommerce services that included multi-vendor customized solutions along with …",
        "docLink": "https://stagenew.tech2globe.tech/casestudies-docs1/E-commerce version upgrade (1).pdf"
    },
    {
        "id": 10,
        "title": "e-Commerce Store Version Upgrade",
        "image": "/images/services/service-inner/e-commerce-store-version-upgrade.jpg",
        "description": "The previous version had issues with accepting payments via credit cards, so one of the improvement areas was to set …",
        "docLink": "https://stagenew.tech2globe.tech/casestudies-docs/E-commerce version upgrade.pdf"
    },
    {
        "id": 11,
        "title": "Promotion of 2 x Shopify Stores",
        "image": "/images/services/service-inner/promotion-of-2-x-shopify-stores.png",
        "description": "In 2.5 periods of month projects handling, we’ve generated more than 6,000 Facebook Page Followers on “Fashion & Cosmetic”…",
        "docLink": "https://stagenew.tech2globe.tech/casestudies-docs1/Promotion of 2 x Shopify Stores-converted.pdf"
    }
]


const portfolioClients = [
    {
        initials: "IS",
        gradient: "#0b2e58",
        client: "IrishCraft Spirits",
        country: "Ireland",
        project: "Pricing Audit & Repricing Strategy",
        desc: "Irish spirits brand that improved Buy Box win rate from 45% to 88% after repricing strategy corrected overpricing across 30% of its catalog.",
        category: "Pricing Strategy",
        result: "Buy Box: 45% → 88%",
        resultSub: "Buy Box Growth",
    },
    {
        initials: "SH",
        gradient: "#0b2e58",
        client: "SwedenStyle Home",
        country: "Sweden",
        project: "Dynamic Pricing Automation",
        desc: "Swedish home brand that adopted automated 24/7 dynamic repricing, remaining competitive on Amazon without sacrificing profit margins.",
        category: "Pricing Strategy",
        result: "Margins protected 24/7",
        resultSub: "Margin Protection",
    },
    {
        initials: "SE",
        gradient: "#0b2e58",
        client: "SpiceRoute Exports",
        country: "India",
        project: "Competitive Pricing Analysis",
        desc: "India-based export brand that found the ideal balance between market competitiveness and profitability through a structured pricing audit strategy.",
        category: "Pricing Strategy",
        result: "+35% profit margin",
        resultSub: "Profit Growth",
    },
    {
        initials: "TP",
        gradient: "#0b2e58",
        client: "TechAccessories Pro",
        country: "USA",
        project: "Bundle Pricing Strategy",
        category: "Pricing Strategy",
        result: "+50% average order value",
        resultSub: "AOV Growth",
    },
    {
        initials: "WC",
        gradient: "#0b2e58",
        client: "WinterWear Canada",
        country: "Canada",
        project: "Seasonal Pricing Calendar",
        category: "Pricing Strategy",
        result: "+90% Q4 revenue",
        resultSub: "Revenue Growth",
    },
];

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe's competitive pricing analysis revealed we were overpriced on 30% of our catalog. After their repricing strategy, our Buy Box win rate jumped from 45% to 88% within a month.",
        name: "Kevin O'Sullivan | IrishCraft Spirits",
        location: "Ireland",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Dynamic pricing on Amazon was something we had no expertise in. Tech2Globe set up an automated repricing tool and strategy that keeps us competitive 24/7 without sacrificing margins.",
        name: "Nina Larsson | SwedenStyle Home",
        location: "Sweden",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe's pricing audit and competitive strategy helped us find the sweet spot between being competitive and protecting our profit margins. Best pricing consultants we've worked with.",
        name: "Amit Sharma | SpiceRoute Exports",
        location: "India",
    },
];


export default function AmazonProductPricingStrategy() {
    return (

        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Amazon Product Pricing Strategy" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Amazon Product Pricing Strategy" imageSrc="/images/services/service-inner/amazon-virtual-assistant-top-banner2.jpg" />
                            <div className={Style.ContentDiv}>
                                <p>One of Amazon&apos;s key objectives is to maintain pricing lower than competitors such as Target and Walmart. Amazon also maintains a close eye on the prices of similar items on other websites and tries its best to deliver the best available offers. Before you begin selling on Amazon, develop an Amazon Product & Pricing Strategy to assist you in determining which product ranges you should include in your store.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/amazon-icon.png" alt="" className={Style.InnerIcon} /> Why Is Amazon Pricing So Important?</h5>
                                <p>The way you price your goods may make – or break – your company&apos;s online visibility and trustworthiness. Most Amazon sales are made through search, with more than 70% of transactions occurring on the first page of Amazon search results. Hence, it would be best if you spent some time improving your product detail page, always following Amazon&apos;s product detail page criteria, so that shoppers can locate your items more easily and quickly.</p>
                                <p>Many sellers find applying an <strong>Amazon pricing strategy in India</strong> difficult, especially when there is so much competition. As a result, you may wish to think about selling Private Label items via <a href="/amazon-fba-consulting" className="text-decoration-undeline fw-bold">Amazon FBA</a>. It will lessen competition, allow you to personalize your brand so that people remember you, and even allow you to create your website to improve your visibility and attract more consumers.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/dollar.png" alt="" className={Style.InnerIcon} /> You Need to Price Realistically</h5>
                                <p>So, if you want to compete on Amazon, you need to know how to price a product on Amazon. Customers will see your competitors&apos; prices when you make your items available to the general market. Before buying something, most people do their homework and choose the product that best matches their budget. Most Amazon listings provide a pricing table that customers can see if your product is more expensive than others. Customers should be aware that, in some situations, they will additionally be responsible for shipping fees as well.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/security.png" alt="" className={Style.InnerIcon} />Amazon Sellers&apos; Pricing Strategies</h5>

                                <div className={`${Style.PageAccordion} accordion`} id="accordionSection1">

                                    {/* Accordion 1 */}
                                    <div className={`${Style.AccordionItem} accordion-item`}>
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className={`${Style.AccordionButton} accordion-button`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                            >
                                                Dynamic Pricing on Amazon
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="para-text">
                                                    You have most likely heard about Amazon Dynamic Pricing. It is a standard pricing method in which a product&apos;s price fluctuates in response to market conditions and supply and demand. It implies that pricing on Amazon might vary every few minutes owing to fierce competition among sellers and fluctuating customer demands. Price modifications are more frequent in a more dynamic market. Thanks to machine intelligence, you can now alter your rates to attract new customers, and sellers can do market research to determine the best price points.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Accordion 2 */}
                                    <div className={`${Style.AccordionItem} accordion-item`}>
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button
                                                className={`${Style.AccordionButton} accordion-button collapsed`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                Customer-Centric or Personalized Pricing
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="para-text">
                                                    Many businesses gather information from their customers to provide personalized rates based on their location, search, purchasing history, preferences, and other factors. It gives the impression that the prices are being changed just for them, leading them to click the Buy Box. Remember that your goal is to make as many purchases as possible while also receiving excellent product ratings by delivering excellent customer service.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/question.png" alt="" className={Style.InnerIcon} /> Why Do You Need Pricing Strategies?</h5>
                                <p>Pricing isn&apos;t just a component in consumer purchases; it is also a factor in Amazon&apos;s ranking. If this is correct, you will win the &apos;Buy Box,&apos; but you will lose sales to the competitors if you do it wrong. In other words, if you make your pricing too high, people will be hesitant to click on your listings. It also implies that you are in danger of losing your Buy Box to competitors selling the same item. Setting a product&apos;s pricing too low brings its own set of issues.</p>
                                <p>After all, a cheap product price may help you sell more, but if your margins are too narrow, it won&apos;t be profitable. In other words, establishing an <strong>Amazon Product & Pricing Strategy</strong> will aid in determining the profit margins connected with each product. It will also help you in determining whether that price is reasonable for selling on Amazon.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/clicker.png" alt="" className={Style.InnerIcon} /> Why Choose Us?</h5>
                                <p>Tech2Globe is here with tailored, one-of-a-kind solution for your company to give a smooth experience of Amazon price policy and administration. What you desire, the number of things we&apos;ll be working with, our degree of engagement with your company is what we plan for you to establish an <strong>Amazon pricing strategy</strong>. You will never be able to utilize a standard pricing sheet since your company and items are unique. We appreciate what we do, and our primary purpose is to teach you <strong>how to set product prices on Amazon</strong> to get good value compared to other service providers.</p>
                                <p>Our staff knows how to boost Amazon sales and can help you refocus your efforts if your Amazon strategy isn&apos;t working. Our team will build a practical, feasible, and <strong>best Amazon pricing strategy</strong> for existing and new items. We can assist you with anything from determining which of your items and product categories should be put to your marketplace to setting an <strong>Amazon pricing strategy for sellers</strong>.</p>
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


            {/* <div className="StoreCreationTabs">
                <PortfolioTabs data={portfolio} title={'Our Amazon Portfolio'} description={'With over 500+ clients across the world, Tech2globe has delivered hundreds of cost effective and high-quality solutions for a wide range of industries and domains including consumer and business development, e-Commerce, retail, manufacturing & many others.'} />
            </div> */}

            

            <ClientPortfolio clients={portfolioClients} />
            <CaseStudiesService caseStudies={caseStudies} />
            <ClientSlider testimonials={testimonials} />
        </>
    )
};
