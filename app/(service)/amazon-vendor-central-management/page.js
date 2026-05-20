import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import Link from "next/link";

export const metadata = {
    title: "Amazon Product Cataloging Services | Amazon Listing Optimization",
    description:
        "Get professional Amazon product cataloging services with Tech2Globe. Optimize listings, SKUs, images and descriptions to boost visibility, sales and ROI.",
    keywords: [
        "best Amazon listing optimization service",
        "Amazon listing experts",
        "Amazon product page optimization",
        "Amazon catalog services",
        "Amazon premium catalog service US",
        "Amazon catalog management services"
    ],
    openGraph: {
        title: "Amazon Product Cataloging Services | Amazon Listing Optimization",
        siteName: "Tech2Globe web Solutions LLP",
        description:
            "Get professional Amazon product cataloging services with Tech2Globe. Optimize listings, SKUs, images and descriptions to boost visibility, sales and ROI.",
        url: "https://www.tech2globe.com/amazon-product-catalog"
    },
    twitter: {
        card: "summary_large_image",
        title: "Amazon Product Cataloging Services | Amazon Listing Optimization",
        description:
            "Get professional Amazon product cataloging services with Tech2Globe. Optimize listings, SKUs, images and descriptions to boost visibility, sales and ROI."
    },
    alternates: {
        canonical: "https://www.tech2globe.com/amazon-product-catalog"
    }
};

const pageHeaderData = {
    title: "Amazon Vendor Central Management",
    backgroundImage: "/images/services/skyscraper.jpg",
    shortBanner: true
};

const resources = [
    { id: 1, name: "Case Studies", path: "/case-studies" },
    { id: 2, name: "Portfolio", path: "/portfolio" },
    { id: 3, name: "Testimonial", path: "/testimonial" },
];

const usefulLinks = [
    {
        "id": 1,
        "name": "SEO On Page Services",
        "path": "/seo-services"
    },
    {
        "id": 2,
        "name": "E-Commerce SEO Services",
        "path": "/ecommerce-seo-services"
    },
    {
        "id": 3,
        "name": "Link building Services",
        "path": "/link-building-services"
    },
    {
        "id": 4,
        "name": "PPC Management Services",
        "path": "/ppc-management-services"
    },
    {
        "id": 5,
        "name": "Social media Marketing Services",
        "path": "/social-media-marketing-services"
    },
    {
        "id": 6,
        "name": "Email Marketing Services",
        "path": "/email-marketing-services"
    },
    {
        "id": 7,
        "name": "Online Reputation Management",
        "path": "/online-reputation-management-services"
    },
    {
        "id": 8,
        "name": "Content Marketing",
        "path": "/content-marketing"
    },
    {
        "id": 9,
        "name": "Guest Posting",
        "path": "/guest-posting-services"
    }
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


export default function AmazonVendorCentralManagement() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Amazon Vendor Central Management" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Amazon Vendor Central Management" imageSrc={"/images/services/service-inner/amazon-virtual-assistant-top-banner2.jpg"} />
                            <div className={Style.ContentDiv}>
                                <p className="para-text">Vendors can use Amazon Vendor Central to sell on the Amazon marketplace. It is a by-invitation-only process. This platform allows users to handle orders rapidly, manage inventories, and track product details. As an Amazon seller, you are naturally concerned with getting your items in front of the right people, and we will help you accomplish just that! With our <strong>Amazon Vendor Services</strong>, you may enhance sales by increasing shop exposure and gaining helpful information. Our team of data managers, content professionals, and marketing experts will assist you in getting the most out of the Amazon Vendor Central platform.</p>

                                <p className="para-text">With a complete selection of <strong>vendor account management</strong> services from Tech2Globe, you can boost your store exposure, increase sales, improve conversions, and receive essential eCommerce analytics. We help clients make full use of <strong>the Amazon vendor account</strong> and the myriad of different chances it offers, thanks to a diversified team of data, content, graphics, SEO, and marketing professionals.</p>

                                <ul>
                                    <li><strong>Amazon Vendor Consulting</strong> Solutions that are tailored to your needs.</li>
                                    <li>A+ Content Creation that is Search Engine Optimized.</li>
                                    <li>Complete Amazon Listing Optimization and Search Engine Optimization.</li>
                                    <li>Advertising and Marketing Services on Amazon.</li>
                                    <li>Management of Inventory and Orders.</li>
                                    <li>Support for evaluation and ratings.</li>
                                </ul>

                                <h2 className={`${Style.headingText} pb-3`}>
                                    <img className={`${Style.innerIcons} lazyload pr-20 content-imag`} src="/images/services/service-inner/amazon-icon.png" alt="Amazon Vendor Central Premium A+ Content Support" />
                                    Amazon Vendor Central Premium A+ Content Support
                                </h2>
                                <p className="para-text">Improved user experiences, multimedia modules, and a fantastic purchase process can help your Amazon business convert more customers. A+ Product Detail Pages for Amazon that are well-optimized increase consumer engagement, brand value propositions, brand reputation guarantees, and encourage more significant ROIs.</p>

                                <ul>
                                    <li>Reduce the bounce rate of the listing.</li>
                                    <li>Boost customers’ trust in your brand</li>
                                    <li>CTR (Click-through Rate) for listings could be improved.</li>
                                    <li>Reduce the number of product returns.</li>
                                    <li>Decrease negative feedback.</li>
                                </ul>

                                <p>We at Tech2Globe assist you with <strong>Amazon vendor central help</strong> by providing comprehensive support for producing Premium A+ Brand Content, <strong>Amazon vendor registration</strong>, and listing optimization. With complex SEO & keyword integrations, data-supported above-the-fold optimization, and unique storefront designs, our professional copywriters, digital marketing specialists, and wordsmiths provide an engaging consumer experience like no other.</p>

                                <p>Every customer of Tech2Globe benefits from cutting-edge technology, advanced industry practices, and day-to-day management by the top advertising brains in the industry. Our <strong>Amazon vendor central consultant</strong> works 24*7 to eliminate vulnerabilities and improve the popularity and performance of your eStore.</p>

                                <h2 className={`${Style.headingText} pb-3`}>
                                    <img className={`${Style.innerIcons} lazyload pr-20 content-imag`} src="/images/services/amazon-icon.png" alt="Our Vendor Central Management Services For Amazon" />
                                    Our Vendor Central Management Services For Amazon
                                </h2>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/settings.png"
                                                alt="Setup A New Item (NIS)"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Setup A New Item (NIS)</h5>
                                                <p>Our vendor specialist Amazon helps you put up new items, optimize listings, verify ASINs (Amazon Standard Identification Numbers), fix barcode issues.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/list.png"
                                                alt="Content For Listings and Search Engine Optimization"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Content For Listings and Search Engine Optimization</h5>
                                                <p>Our staff can handle everything including high-ranking keyword integration in your Amazon listings.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/management-1.png"
                                                alt="Management Of Inventory"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Management Of Inventory</h5>
                                                <p>We use demand-driven operational architecture for effective inventory tracking, management & replenishment to maximize product availability.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/inventory.png"
                                                alt="Order Management"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Order Management</h5>
                                                <p>Highly experienced Amazon VAS maintain track of all your Amazon orders, handle buyer relations, manage packing and shipping logistics.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/handshake.png"
                                                alt="Support For Advertising and Marketing"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Support For Advertising and Marketing</h5>
                                                <p>We drive your items to the top of the SERPs, target appropriate audiences, capture competitors’ keywords, improve brand popularity.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/eye.png"
                                                alt="Negotiations With Vendors on Annual Basis"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Negotiations With Vendors on Annual Basis</h5>
                                                <p>We assist you in maintaining your vendor account management agreement with Amazon.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/megaphone.png"
                                                alt="Monitoring The Account's Health "
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Monitoring The Account's Health </h5>
                                                <p>We regularly analyze our Amazon vendor account to keep track of operational performance, assure order fulfillment and customer satisfaction.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/megaphone-1.png"
                                                alt="Product Promotion on Amazon "
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Product Promotion on Amazon </h5>
                                                <p>Tech2Globe offers Amazon's ongoing specials and promotions, to help you boost your sales.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/api.png"
                                                alt="Integration With Amazon's Dropshipping API "
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Integration With Amazon's Dropshipping API </h5>
                                                <p> Tech2Globe's API allows for a fully automated Amazon Dropshipping solution.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h2 className={`${Style.headingText} pb-3`}>
                                    <img className={`${Style.innerIcons} lazyload pr-20 content-imag`} src="/images/services/clicker.png" alt="Why Choose Us?" />
                                    Why Choose Us?
                                </h2>
                                <p className="para-text">We provide prompt and quick support to our clients for every possible demand as a leading outsourcing partner for Amazon Vendor Central administration services and portal management. With our <strong>Amazon vendor account management</strong> services, you may quickly reach out to consumers, get a competitive advantage in the market, and profit from a more straightforward and effective operating model. Our eCommerce, data, content, and marketing experts have a thorough grasp of the Vendor Central interface, making it simpler to work past potential flaws such as EDI compliance, expensive chargebacks, and logistics rigidity.</p>



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