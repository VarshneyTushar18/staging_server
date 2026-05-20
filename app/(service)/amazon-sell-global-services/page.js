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
import "./custom.css";

export const metadata = {
    title: "Amazon Global Selling | International Selling Strategy | Tech2globe",
    description:
        "If Amazon Global Selling is right for you. Tech2globe is the best Amazon Global Selling Solutions Providers Network. We help Amazon Sellers.",
    keywords: [
        "Amazon Sell Global Services",
        "Amazon Global Selling",
        "Selling Internationally On Amazon",
        "Amazon Sell",
        "Amazon Global"
    ],
    openGraph: {
        title: "Amazon Global Selling | International Selling Strategy | Tech2globe",
        description:
            "If Amazon Global Selling is right for you. Tech2globe is the best Amazon Global Selling Solutions Providers Network. We help Amazon Sellers.",
        siteName: "Tech2Globe web Solutions LLP",
        url: "https://www.tech2globe.com/amazon-sell-global-services"
    },
    twitter: {
        card: "summary",
        title: "Amazon Global Selling | International Selling Strategy | Tech2globe",
        description:
            "If Amazon Global Selling is right for you. Tech2globe is the best Amazon Global Selling Solutions Providers Network. We help Amazon Sellers."
    },
    alternates: {
        canonical: "https://www.tech2globe.com/amazon-sell-global-services"
    }
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
    title: "Amazon Sell Global Services",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
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


export default function AmazonSellGlobal() {
    return (

        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Amazon Sell Global Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Amazon Sell Global Services" imageSrc="/images/services/service-inner/amazon-virtual-assistant-top-banner2.jpg" />
                            <div className={Style.ContentDiv}>
                                <p>Your sales network extends outside your country. Extending your reach to markets outside of your nation may have a significant impact on your company. Whether you&apos;ve done business internationally before or have never done so, Amazon makes it simple to sell internationally. We at Tech2Globe can assist you in navigating the Amazon Global Selling environment and determine the best opportunity for your company. Our experts assist you in identifying new markets to sell in and expand abroad. Sell your products all around the world.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-3"><img src="/images/services/service-inner/graph-icon.png" alt="" className={Style.InnerIcon} /> The Benefits of Having an Amazon Global Account</h5>
                                <p>You may benefit from Amazon Global Selling in the following ways:</p>
                                <ul>
                                    <li>Increase your foreign sales by using Amazon&apos;s renowned global brand.</li>
                                    <li>Expand your business by using Amazon&apos;s foreign marketplaces to reach millions of new consumers.</li>
                                    <li>Taking advantage of peak seasons in other nations may improve your cash flow and avoid low sales times.</li>
                                </ul>
                                <p>While these advantages may make Amazon&apos;s international sales appear to be straightforward, keep in mind that each of Amazon&apos;s international marketplaces has its own set of challenges. Despite these challenges, most organizations find that the benefits of cross-border trade surpass the price of getting started.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-3"><img src="/images/services/service-inner/headset.png" alt="" className={Style.InnerIcon} /> Working Of Amazon Global Selling</h5>
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
                                                Choose Where and What to Sell
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
                                                    Before determining where you want to do business and what items you want to sell, be sure you grasp the selling landscape of each possible area. Before investing in any overseas market, think about the local taxes and laws. Our staff collaborates with Amazon to present you with personalized suggestions based on the products you already sell, product type reviews, and comparable item sales.
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
                                                Create An Account and Begin Listing Items
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
                                                    Even if you have a seller account on another Amazon marketplace, you must create a Seller Central account in the marketplaces you intend to sell before doing business worldwide. The European market is the sole exception. Thanks to Amazon&apos;s unified accounts for European marketplaces, you can sell across Europe with a single Seller Central account.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Accordion 3 */}
                                    <div className={`${Style.AccordionItem} accordion-item`}>
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className={`${Style.AccordionButton} accordion-button collapsed`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                            >
                                                Begin Shipping and Completing Orders
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="para-text">
                                                    Customer happiness is dependent on efficient order fulfillment. Understanding the subtleties of international shipping and fulfillment in various foreign marketplaces, such as shipping prices, time, and restrictions, is critical to your business. Want to make things easier by delegating order fulfillment to someone else? Our staff sets up worldwide Fulfillment by Amazon (FBA) for you on various marketplaces. You can swiftly deliver your items to clients worldwide with the aid of Amazon fulfillment services.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Accordion 4 */}
                                    <div className={`${Style.AccordionItem} accordion-item`}>
                                        <h2 className="accordion-header" id="headingFour">
                                            <button
                                                className={`${Style.AccordionButton} accordion-button collapsed`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour"
                                                aria-expanded="false"
                                                aria-controls="collapseFour"
                                            >
                                                Maintain Consistent Customer Service and Returns
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseFour"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingFour"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="para-text">
                                                    Once your purchases are finalized, you should promptly resolve client complaints, product concerns, or returns. You may either conduct customer support yourself or delegate it to Amazon. Your Global Sales Summary allows you to examine all of your marketplaces&apos; sales, orders, and buyer messages in one location.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-3"><img src="/images/services/service-inner/worldwide.png" alt="" className={Style.InnerIcon} /> Get Started Selling Internationally on Amazon</h5>
                                <p>Seek a consultation from us if you&apos;re interested in setting up an international Amazon Seller Central account or want to learn more about Amazon Global Selling. We will answer your questions and learn more about your company at that time.</p>
                                <p>Following that, we work with you to understand your product(s), identify your target customer, and decide whether an international business is a good fit for your firm. We will then suggest which of our services would be best for you, and utilize that information to develop a formal quote for your approval. In case you have any questions or concerns, you can directly contact our Amazon consultant team.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-3"><img src="/images/services/service-inner/clicker.png" alt="" className={Style.InnerIcon} /> Why Choose Us?</h5>
                                <p>With changing market demands, creative and digital strategies must be used, which is why our team works to provide effective solutions that ensure every aspect of the foreign sale is executed efficiently. We are here to make sure it fits well with local customs and practices because we are familiar with the language and informal speech, which is common in many countries. Our aim is simple, i.e., to do things right and deal with all the details, including packaging and labeling, walk-in VAT, cash, tax returns, and order processing.</p>
                                <p>Keywords are equally vital for sales, and keeping the keywords up to date is no less important. It is critical to talk to all nations in their language, and we ensure that all keywords stand out and are effective, thanks to our skilled international keyword research team. When managing your global sales, we utilize Amazon&apos;s helpful checklist for an effective international company as guidance. Use our services today and see how much your sales increase tomorrow!</p>
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