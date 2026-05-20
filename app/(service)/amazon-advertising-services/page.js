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
  title: "Amazon Advertising Services | Amazon Advertising Agency",
  description:
    "Our Amazon advertising services help you to boost your Amazon sales. We are one spot solution for Amazon advertising agencies with various ads experts.",
  keywords:
    "Amazon Advertising Services, Amazon Advertising Agency, Amazon Marketing Experts, amazon ppc management agency",
  alternates: {
    canonical: "https://www.tech2globe.com/amazon-advertising-services",
  },
  openGraph: {
    title: "Amazon Advertising Services | Amazon Advertising Agency",
    description:
      "Our Amazon advertising services help you to boost your Amazon sales. We are one spot solution for Amazon advertising agencies with various ads experts.",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/amazon-advertising-services",
    type: "website",
  },
  twitter: {
    card: "Tech2Globe",
    title: "Amazon Advertising Services | Amazon Advertising Agency",
    description:
      "Our Amazon advertising services help you to boost your Amazon sales. We are one spot solution for Amazon advertising agencies with various ads experts.",
  },
};

const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How does AMS work?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text":
                    "AMS allows sellers to create and run sponsored product ads, sponsored brand ads, and product display ads on Amazon. Sellers can target their ads to keywords, products, or categories and pay only when someone clicks."
            }
        },
        {
            "@type": "Question",
            "name": "Can I set a budget for my AMS ads?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text":
                    "Yes. Sellers can set a daily or lifetime budget to control ad spend."
            }
        },
        {
            "@type": "Question",
            "name": "How do I track the performance of my AMS ads?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text":
                    "The AMS dashboard shows impressions, clicks, conversions, and lets sellers optimize campaigns."
            }
        },
        {
            "@type": "Question",
            "name": "Can I target my AMS ads to specific regions or countries?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. AMS ads can be targeted to specific regions or countries."
            }
        },
        {
            "@type": "Question",
            "name": "Is AMS only available to professional sellers?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. AMS is available to both individual and professional sellers."
            }
        },
        {
            "@type": "Question",
            "name": "What is the difference between AMS and Amazon Advertising?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text":
                    "Amazon Advertising is the umbrella for all Amazon ad services, including AMS, Amazon DSP, and more."
            }
        },
        {
            "@type": "Question",
            "name": "How do I get started with AMS?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text":
                    "You need an active seller account and a product detail page. Then you can build ads using the AMS ad builder."
            }
        },
        {
            "@type": "Question",
            "name": "What pricing model is used for AMS?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text":
                    "AMS uses a pay-per-click model. You pay only when a shopper clicks your ad."
            }
        },
        {
            "@type": "Question",
            "name": "Can I cancel my contract at any time?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text":
                    "Cancellation terms depend on the agreement you sign. Always review your contract carefully."
            }
        },
        {
            "@type": "Question",
            "name": "Can you manage campaigns for all Amazon categories?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text":
                    "Yes. Even categories with special rules can be managed by our team."
            }
        }
    ]
};

const pageHeaderData = {
    title: "Amazon Advertising Services",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};

const resources = [
    { id: 1, name: "Portfolio", path: "/portfolio" },
    { id: 2, name: "Case Studies", path: "/case-studies" },
    { id: 3, name: "Testimonial", path: "/testimonial" },
];

const usefulLinks = [
    { id: 4, name: "Amazon Marketing services", path: "/amazon-marketing-services" },
    { id: 5, name: "Amazon vendor account management", path: "/ecommerce-marketplace-management" },
    { id: 6, name: "Amazon Consulting Services", path: "/amazon-consulting-services" },
    { id: 7, name: "Amazon Account Management", path: "/amazon-account-management" },
    { id: 8, name: "Amazon SEO & Listing Optimization", path: "/amazon-seo-listing-optimization" },
    { id: 9, name: "Amazon Dropshipping", path: "/amazon-dropshipping" },
    { id: 10, name: "Store Creation", path: "/store-creation" },
    { id: 11, name: "Guest Posting Services", path: "/guest-posting-services" },
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


export default function AmazonAdvertising() {
    return (

        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Amazon Advertising Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Amazon Advertising Services" imageSrc="/images/services/service-inner/amazon-virtual-assistant-top-banner2.jpg" />
                            <div className={Style.ContentDiv}>
                                <p><strong>Our Amazon Advertising Services</strong> target and generate results for your business, as well as increase the efficiency of your marketing campaigns. We optimize your advertisements for improved performance, higher rankings, effective conversions, and more sales.</p>
                                <p>All Amazon advertising services are meant to increase sales, either directly or indirectly. Our staff is skilled in managing ad campaigns, increasing brand awareness, providing consistent performance reports, and analyzing the competitive environment to place your company in a position to expand in multiples.</p>
                                <p>Learn more about our Amazon eCommerce advertising services, technological know-how, and a thorough understanding of e-commerce by scrolling down.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/amazon-icon.png" alt="" className={Style.InnerIcon} /> What Is Amazon Advertising Services and How Does It Work?</h5>
                                <p>Amazon-sponsored ads are comparable to those on the Google Shopping Network. They are keyword-based and operate on a pay-per-click basis. When you run Amazon advertisements, you pay for your items to be highlighted or appear higher in search results for relevant terms. You may experiment with a variety of Amazon PPC campaign options, such as headline search advertisements, sponsored ads, product display ads, video ads, native ads, and more. Depending on the product type, market circumstances, demands, and other factors, you may select the most appropriate ones.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/keyword-acatalog.png" alt="" className={Style.InnerIcon} /> End-to-End Amazon Advertising Managed Service</h5>

                                <p>As a trusted <strong>Amazon Advertising Managed Service Provider</strong>, we offer you customized solutions to maximize your advertising performance and drive sales growth. Our Amazon advertising services are designed to accurately target and provide success for your company.</p>

                                <p>The comprehensive <strong>Amazon Advertising Management Services</strong> we provide is intended for advertisers who want access to <a href="/amazon-dsp" className="fw-bold text-decoration-underline">Amazon DSP</a> with consulting services or who have minimal programmatic advertising expertise. Budget minimums apply. To learn more, contact our Amazon Ads account executive and experience the difference our End-to-End <strong>Amazon Advertising Managed Service</strong> can make for your business.</p>

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
                                                Best Marketing practices
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
                                                    Whether you need Amazon Marketing Services, Amazon Listing Optimization, or help with your business on any other online platform, our professionals can deliver customized solutions.
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
                                                A Whole-Body Approach
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
                                                    We are well-versed in Amazon marketplace administration and advertising tactics for online companies on a variety of platforms. This enables us to provide comprehensive support to you.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/customer-acatalog.png" alt="" className={Style.InnerIcon} /> How can we help you?</h5>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/campaign.png"
                                                alt="Advertisement Campaigns"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Advertisement Campaigns</h5>
                                                <p>Our Amazon PPC services start with an analysis of your current ad campaigns & then restructure to improve sales & product rankings.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/keywords.png"
                                                alt="Analysis of Keywords"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Analysis of Keywords</h5>
                                                <p>Our Amazon PPC professionals employ technologies to select the ideal keywords that assure increased exposure.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/analytics.png"
                                                alt="Reporting"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Reporting</h5>
                                                <p>We deliver reports which includes in-depth examination of income, expense, (CPC), & CTR Percentage.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/tiles.png"
                                                alt="Creating A Comprehensive and Appealing Catalog"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Creating A Comprehensive and Appealing Catalog</h5>
                                                <p>We provide full Amazon services, including catalog creation, enrichment, and administration.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/medical-research.png"
                                                alt="Product Research on Amazon"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Product Research on Amazon</h5>
                                                <p>We will help you find the correct goods with high sales and strong profits and undertake a detailed examination various aspects.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/clicker.png" alt="" className={Style.InnerIcon} /> Why Outsource Amazon Marketing Services To Tech2Globe</h5>
                                <ul>
                                    <li>Optimization of the listing and improved ranking for <strong>amazon headline search ads</strong>.</li>
                                    <li>Comprehensive Catalog management.</li>
                                    <li>Increased Product visibility and Conversion rate.</li>
                                    <li>A catalog that is informative, relevant, and interesting.</li>
                                    <li>The best shopping and browsing experience.</li>
                                    <li>Quality assurance that is backed up by six sigma procedures.</li>
                                    <li>Data security and integrity are ensured.</li>
                                </ul>
                                <p>We can assist you with any cataloging requirements you may have, whether you want to list and launch new items or improve your existing library on Amazon. Contact us to see how we can help you revamp your catalog and prepare it for more sales and conversions <strong>through Amazon Advertising Service</strong>.</p>
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