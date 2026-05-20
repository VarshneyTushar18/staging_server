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

export const metadata = {
    title: "Copywriting for Amazon | Amazon Copywriting Service",
    description:
        "Crafting compelling product descriptions that boost sales. Our Amazon copywriting experts optimize listings with SEO-rich copy that captivates shoppers.",
    keywords:
        "Amazon copywriting services, Amazon product listing copywriting, Amazon copywriting, copywriting for Amazon",
    openGraph: {
        title: "Copywriting for Amazon | Amazon Copywriting Service",
        siteName: "Tech2Globe web Solutions LLP",
        description:
            "Crafting compelling product descriptions that boost sales. Our Amazon copywriting experts optimize listings with SEO-rich copy that captivates shoppers.",
        url: "https://www.tech2globe.com/amazon-copywriting",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "Tech2Globe",
        title: "Copywriting for Amazon | Amazon Copywriting Service",
        description:
            "Crafting compelling product descriptions that boost sales. Our Amazon copywriting experts optimize listings with SEO-rich copy that captivates shoppers.",
    },
    alternates: {
        canonical: "https://www.tech2globe.com/amazon-copywriting",
    },
};

const pageHeaderData = {
    title: "Amazon Copywriting",
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
        "docLink": "https://tech2globe.com/casestudies-docs1/Case Study 2 - Sales Increase in different categories-converted.pdf"
    },
    {
        "id": 2,
        "title": "EBC and Storefront",
        "image": "/images/services/service-inner/ebca.png",
        "description": "Client deals in Health & Household items and Pet Supplies products on Amazon and wants...",
        "docLink": "https://tech2globe.com/casestudies-docs1/Case Study 3 - EBC and Storefront-converted.pdf"
    },
    {
        "id": 3,
        "title": "Amazon PPC",
        "image": "/images/services/service-inner/amazon-ppc.png",
        "description": "Clients came to us with a range of Amazon PPC management difficulties....",
        "docLink": "https://tech2globe.com/casestudies-docs1/Amazon PPC-converted.pdf"
    },
    {
        "id": 4,
        "title": "Product Visibility & Drive Sales",
        "image": "/images/services/service-inner/untitled-design-18.png",
        "description": "Client has been in the business of selling fine grooming products for over 15 years......",
        "docLink": "https://tech2globe.com/casestudies-docs1/Case Study 1 - Sales Increase in different categories-converted.pdf"
    },
    {
        "id": 5,
        "title": "e-Commerce Store for Luxury Goods",
        "image": "/images/services/service-inner/e-commerce-store-for-luxury-goods.png",
        "description": "It is the ultimate luxury fashion destination for the distribution and retail of Italian, French…",
        "docLink": "https://tech2globe.com/casestudies-docs1/E-Commerce Store for Luxury Goods-converted.pdf"
    },
    {
        "id": 6,
        "title": "Amazon Sale Boost",
        "image": "/images/services/service-inner/amazon-sale-boost.jpg",
        "description": "Find out the most important areas where our team required utmost attention to showcase the work from day one …",
        "docLink": "https://tech2globe.com/casestudies-docs1/amazon-india-case-study.pdf"
    },
    {
        "id": 7,
        "title": "About Drop shipping",
        "image": "/images/services/service-inner/about-drop-shipping.jpg",
        "description": "Drop shipping is an e-retail term where someone facilitates the selling and delivery of an online product without …",
        "docLink": "https://tech2globe.com/casestudies-docs1/Case-Study-Drop-Shipping.pdf"
    },
    {
        "id": 8,
        "title": "Migration from Sooq to Amazon.ae",
        "image": "/images/services/service-inner/migration-from-sooq-to-amazon-ae.jpg",
        "description": "Forgiving the best solution to our client and comprehensive support is our specialty which we successfully …",
        "docLink": "https://tech2globe.com/casestudies-docs1/Migration-from-Sooq-to-AmazonAE.pdf"
    },
    {
        "id": 9,
        "title": "e-Commerce Multivendor Store 1.0",
        "image": "/images/services/service-inner/e-commerce-multivendor-store-1-0.jpg",
        "description": "Our client approached us for Ecommerce services that included multi-vendor customized solutions along with …",
        "docLink": "https://tech2globe.com/casestudies-docs1/E-commerce version upgrade (1).pdf"
    },
    {
        "id": 10,
        "title": "e-Commerce Store Version Upgrade",
        "image": "/images/services/service-inner/e-commerce-store-version-upgrade.jpg",
        "description": "The previous version had issues with accepting payments via credit cards, so one of the improvement areas was to set …",
        "docLink": "https://tech2globe.com/casestudies-docs/E-commerce version upgrade.pdf"
    },
    {
        "id": 11,
        "title": "Promotion of 2 x Shopify Stores",
        "image": "/images/services/service-inner/promotion-of-2-x-shopify-stores.png",
        "description": "In 2.5 periods of month projects handling, we’ve generated more than 6,000 Facebook Page Followers on “Fashion & Cosmetic”…",
        "docLink": "https://tech2globe.com/casestudies-docs1/Promotion of 2 x Shopify Stores-converted.pdf"
    }
]


export default function AmazonCopywriting() {
    return (

        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Amazon Copywriting" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Amazon Copywriting" imageSrc="/images/services/service-inner/amazon-virtual-assistant-top-banner2.jpg" />
                            <div className={Style.ContentDiv}>
                                <p>
                                    Amazon is a well-known online marketplace with a large number of merchants and shoppers. It implies a strong competition among vendors to sell their items and position them at the top of the search results to grab the buyer&apos;s attention. Every Amazon seller has the same template when making their product listings, but you can make yours stand out with the right <strong>Amazon Copywriting</strong>. It is critical to have strong content to attract more clients. A <strong>professional Amazon copywriter</strong> will get you the results you&apos;re looking for.
                                </p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/amazon-icon.png" alt="" className={Style.InnerIcon} /> Our Copywriting Service for Amazon</h5>
                                <p>With thousands of items to select from, your listings must stand out and sell your products faster than your competitors. We use B+ content (above the fold material) to showcase the product&apos;s USPs in punchy bullet points. Additionally, there is A+ material below the fold to elaborate on the product and communicate the brand narrative.</p>
                                <p>We have a thorough grasp of Amazon&apos;s platform and have collaborated with several different vendors. Our understanding goes beyond standard copywriting talents because we take the time to understand your product better than anybody else. For us, <strong>Amazon product listing copywriting</strong> is more than simply writing. The content we write is not only for Amazon; it is also for search engines. Because well-optimized Amazon listings display on search engine results pages. Drafting material with this in mind can help you generate sales not only from Amazon directly but also from a search engine like Google or Bing.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/amazon-icon.png" alt="" className={Style.InnerIcon} />What Can We Do to Assist You?</h5>

                                <p>The following are the steps of our <strong>Amazon Copywriting</strong> process, which we are proud of:</p>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/globe.png"
                                                alt="Discovering New Products"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Discovering New Products</h5>
                                                <p>Learning about the features of your product, your target customer, and your unique selling proposition.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/medical-research.png"
                                                alt="Research Into the Market"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Research Into the Market</h5>
                                                <p>We undertake extensive market research to learn about your audience & critical pain issues to address.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/keywords.png"
                                                alt="Keyword Research"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Keyword Research</h5>
                                                <p>To get your product listings to rank on the first page of search results, we do extensive keyword research.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/analytics.png"
                                                alt="Competitive Research"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Competitive Research</h5>
                                                <p>Another aspect of market research is to look at top competitors&apos; listings & make a list of items they forgot to include.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/keywords.png"
                                                alt="Services For Content Targeting"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Services For Content Targeting</h5>
                                                <p>We look at the demographics, gender, age, location, and language that are most appropriate for your products.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/analytics.png"
                                                alt="Content And Photography"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Content And Photography</h5>
                                                <p>Use appealing pictures and videos to enhance your content. On Amazon, copy does not work by itself.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/amazon-icon.png" alt="" className={Style.InnerIcon} /> How Do We Help?</h5>

                                <p>We will make sure to send the right message to your audience in a brand-consistent manner after we have a clear grasp of the market gap your product fills. Our primary aim is to provide a return on investment for your business within a few months of working on optimizing your account for Amazon&apos;s A9 ranking algorithm. When calculating your listing&apos;s rating, the A9 algorithm considers two factors: product listing optimization and organic sales velocity. Our <strong>Amazon Copywriting</strong> service aims to create <a href="/search-engine-optimization" className="text-decoration-underline fw-bold">search engine optimization</a> listings while maintaining a sense of user experience.</p>

                                <p>Although we recognize Amazon as a platform, it was created by humans for humans. If your product has a solid emotional purchasing side, or if it has a feature that your competitors don&apos;t have, or if you have excellent customer service, let us express that message in the most effective way possible. A single adjustment in a sentence can have a significant impact on conversion rates. Let us see what we can do for you and how we can make the most of the traffic you get every day.</p>

                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/clicker.png" alt="" className={Style.InnerIcon} /> Why Should You Choose Us?</h5>
                                <p>
                                    The professional Amazon copywriting services provided by Tech2Globe seek to develop SEO-friendly listings while keeping a feeling of client connection. Our marketing services will boost the number of people who view your Amazon items, while our <strong>Amazon product listing copywriting</strong> services will boost the conversion rate. We provide easy-to-read, accurate, to-the-point, and persuasive copywriting for <a href="/amazon-seo-listing-optimization" className="text-decoration-underline fw-bold">Amazon SEO</a>. You&apos;ll see a massive rise in conversions when your customers know and understand your brand better.
                                </p>
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


            <div className="StoreCreationTabs">
                <PortfolioTabs data={portfolio} title={'Our Amazon Portfolio'} description={'With over 500+ clients across the world, Tech2globe has delivered hundreds of cost effective and high-quality solutions for a wide range of industries and domains including consumer and business development, e-Commerce, retail, manufacturing & many others.'} />
            </div>

            <CaseStudiesService caseStudies={caseStudies} />
        </>
    )
};