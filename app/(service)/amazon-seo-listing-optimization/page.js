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
    title: "Amazon SEO Optimization & Listing Optimization Services",
    description:
        "Get Amazon product listing and amazon SEO consulting services. Convert Your Visitors To Customers & Increase Your Products Visibility.",
    keywords:
        "Amazon listing product optimization service, Amazon listing optimization, Amazon Product Listing Optimization, Amazon SEO consultant",
    openGraph: {
        title: "Amazon SEO Optimization & Listing Optimization Services",
        siteName: "Tech2Globe web Solutions LLP",
        description:
            "Get Amazon product listing and amazon SEO consulting services. Convert Your Visitors To Customers & Increase Your Products Visibility.",
        url: "https://www.tech2globe.com/amazon-seo-listing-optimization",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "Tech2Globe",
        title: "Amazon SEO Optimization & Listing Optimization Services",
        description:
            "Get Amazon product listing and amazon SEO consulting services. Convert Your Visitors To Customers & Increase Your Products Visibility.",
    },
    alternates: {
        canonical: "https://www.tech2globe.com/amazon-seo-listing-optimization",
    },
};

const pageHeaderData = {
    title: "Amazon SEO & Listing Optimization",
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
    { id: 6, name: "Amazon seller consulting", path: "/amazon-consulting-services" },
    { id: 7, name: "Amazon account management services", path: "/amazon-account-management" },
    { id: 8, name: "Amazon seo optimization", path: "/amazon-seo-listing-optimization" },
    { id: 9, name: "Amazon listing optimization", path: "/amazon-seo-listing-optimization" },
    { id: 10, name: "Amazon dropshipping services", path: "/amazon-dropshipping" },
    { id: 11, name: "Amazon store creation", path: "/store-creation" },
    { id: 12, name: "Amazon storefront design services", path: "/guest-posting-services" }
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


export default function AmazonSeoListingOptimization() {
    return (

        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Amazon SEO Listing Optimization" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Amazon SEO Listing Optimization" imageSrc="/images/services/service-inner/amazon-virtual-assistant-top-banner2.jpg" />
                            <div className={Style.ContentDiv}>
                                <p>With quality Amazon <a href="/seo-services" className="fw-bold text-decoration-underline">SEO services</a> from Tech2Globe, you can reach out to people who are interested in your brand and appear in the top search results for potential purchasers. We provide good exposure to your business with a team of SEO specialists and a wide variety of Amazon listing optimization services. Doing business on the world&apos;s largest and most customer-friendly internet marketplace has massive potential.</p>

                                <p>As an Amazon seller, you know that your product listings are crucial to your success on the Amazon platform. The closer they are to the search engine&apos;s algorithm, the higher chances are for increased sales. We aim to achieve this with a diverse range of <strong>Amazon listing optimization tips</strong> and optimization services and a dynamic team of professional personnel.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/increase.png" alt="" className={Style.InnerIcon} /> Improve Amazon Listing Optimization and SEO Services to Increase Conversions</h5>
                                <p>One-time solutions do not do well on Amazon because of its ever-changing ranking system, and therefore sellers must constantly adjust. Our Amazon SEO professionals know how this platform&apos;s product listing assessment works and leverage that information to boost your listings higher in the SERPs. Our Amazon product page optimization services are built to put you ahead of the pack. We provide the Amazon SEO services that cover every area and facet with delicacy, from appraising your product and target consumers to building a highly customized plan.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/list.png" alt="" className={Style.InnerIcon} /> How To Optimize Amazon Listing?</h5>
                                <ul>
                                    <li>Keyword research in detail.</li>
                                    <li>Search phrase optimization on the backend.</li>
                                    <li>SEO friendly product names.</li>
                                    <li>Headings and descriptions that grab attention.</li>
                                    <li>Competitor analysis.</li>
                                    <li>Precise product research and presentation.</li>
                                </ul>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/customer-acatalog.png" alt="" className={Style.InnerIcon} /> Services For Amazon Listing Optimization</h5>

                                <p>The following are some of our Amazon listing optimization Services:</p>

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
                                                Product Titles That Are SEO-Friendly
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
                                                    We understand the importance of product titles in customer behavior as an <strong>Amazon listing optimization service</strong> provider. Our copywriters optimize Amazon product titles and produce headers relevant to the user&apos;s purpose while also being friendly to the search engine.
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
                                                Services For Writing Product Descriptions
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
                                                    We build product descriptions and bullet points that increase retention after thorough buyer persona study and competition page analyses. With consistent description writing services, our Amazon product listing optimization services help companies reach their intended conversion rate.
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
                                                Management Of Brand Presentation
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
                                                    Our Amazon store optimization services include creating techniques that abide by your brand&apos;s tone, <strong>how to add a variation to an existing Amazon listing</strong>, and ensuring regular brand interaction across all streams.
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
                                                Image Processing of High-Quality Products
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
                                                    Stay ahead of the competition with high-quality photographs that highlight your goods from all aspects, edited and tweaked to create a professional, sophisticated, but effective front. We analyze real-life product images as part of our Amazon listing optimization services to improve listing value.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Accordion 4 */}
                                    <div className={`${Style.AccordionItem} accordion-item`}>
                                        <h2 className="accordion-header" id="headingFive">
                                            <button
                                                className={`${Style.AccordionButton} accordion-button collapsed`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive"
                                                aria-expanded="false"
                                                aria-controls="collapseFive"
                                            >
                                                Amazon Content Solutions with Improvements
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseFive"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingFive"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="para-text">
                                                    As part of our Amazon search optimization service, we improve the attractiveness of your listings with complete EBC content solutions. We increase brand affinity and assure a premium portrayal of your brand and products by optimizing text and picture placement.
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/amazon-icon.png" alt="" className={Style.InnerIcon} /> Services For Amazon SEO</h5>

                                <p>The following are some of our Amazon SEO Services:</p>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/magnifier.png"
                                                alt="Keyword Research on A Large Scale"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Keyword Research on A Large Scale</h5>
                                                <p>Our <strong>Amazon SEO optimization</strong> solution includes keyword research as a standard feature.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/detail.png"
                                                alt="Search Term Optimization on Amazon"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Search Term Optimization on Amazon</h5>
                                                <p>We optimize your product pages for higher traffic by inserting relevant keywords into the backend of your site.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/megaphone.png"
                                                alt="Competitor Analysis"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Competitor Analysis</h5>
                                                <p>Our <strong>Amazon SEO optimization</strong> solution includes keyword research as a standard feature.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/shopping-bag.png"
                                                alt="Marketing With Content"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Marketing With Content</h5>
                                                <p>We distribute contextual content, implement targeted marketing strategies & increase your shop visibility.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/clicker.png" alt="" className={Style.InnerIcon} /> Why Choose Us?</h5>
                                <p>
                                    We assist businesses in attracting targeted traffic and carving out a distinct brand identity in this hyper-competitive sector as an <strong>Amazon listing optimization agency</strong>. With a diverse team of Amazon SEO professionals, we improve <strong>Amazon SEO listing</strong> and develop SEO strategies. We have worked to build a track record of providing quantifiable outcomes to Amazon sellers all across the world.
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
                <PortfolioTabs data={portfolio} title={'Our Amazon Portfolio'} description={'With over 500+ clients across the world, Tech2globe has delivered hundreds of cost effective and high-quality solutions for a wide range of industries and domains including consumer and business development, e-Commerce, retail, manufacturing & many others.'}/>
            </div>

            <CaseStudiesService caseStudies={caseStudies} />
        </>
    )
};