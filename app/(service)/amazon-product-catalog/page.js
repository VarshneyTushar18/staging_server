import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import FaqSection from "@/app/components/services/faqs/faqs";
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
    title: "Amazon Product Cataloging Services",
    description:
        "Managing thousands of SKUs across Amazon can be overwhelming. Sellers need accurate, SEO-friendly catalogs that not only meet Amazon’s requirements but also convert shoppers into buyers. At Tech2Globe, we provide complete Amazon product cataloging and listing optimization services—from product research and keyword-rich descriptions to high-quality images and A+ content. Our experts ensure your catalog is well-organized, accurate, and optimized for visibility and sales.",
    buttonText: "Contact us",
    buttonLink: "#",
    backgroundImage: "/images/services/skyscraper.jpg",
    overlay: true
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

const faqs = [
    {
        "id": "One",
        "question": "What is Amazon product cataloging?",
        "answer": "Amazon product cataloging is the process of creating and managing product listings with accurate data, titles, descriptions, images, and keywords. A well-optimized catalog improves visibility and sales on Amazon."
    },
    {
        "id": "Two",
        "question": "Why is Amazon catalog management important?",
        "answer": "Amazon catalog management ensures that product information is accurate, SEO-friendly, and up-to-date. This improves discoverability, avoids listing errors, and boosts customer trust, leading to higher conversions."
    },
    {
        "id": "Three",
        "question": "How can Amazon product cataloging services increase sales?",
        "answer": "Professional cataloging services optimize product titles, descriptions, and images with the right keywords. This improves ranking in Amazon search results, drives more traffic, and increases conversions."
    },
    {
        "id": "Four",
        "question": "What’s the difference between basic and detailed cataloging?",
        "answer": "Basic cataloging includes essential details like product name, SKU, and price. Detailed cataloging adds SEO-rich descriptions, bullet points, attributes, images, and A+ content for better customer engagement."
    },
    {
        "id": "Five",
        "question": "Do I need experts for Amazon product cataloging?",
        "answer": "Yes. Amazon has strict guidelines, and errors can lead to suppressed listings. Expert cataloging services ensure compliance, keyword optimization, and high-quality content that attracts buyers."
    }
];

export default function AmazonProductCatalog() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Amazon Product Catalog" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Amazon Product Catalog" imageSrc={"/images/services/service-inner/amazon-virtual-assistant-top-banner2.jpg"} />
                            <div className={Style.ContentDiv}>
                                <p className="para-text">As sellers must usually manage a huge number of SKUs, handling a multichannel inventory like on Amazon with many products can be challenging. However, Amazon’s cataloging requirements pose some obstacles to managing product data as they are stringent and require accuracy. Furthermore, the problem may worsen given the constant requirement of your catalog always being appealing and current. An informative, appealing catalog is quite a challenge for vendors since they have to be experts in their subjects, understand technology, and the e-commerce sector.</p>

                                <p className="para-text">Insufficient resources, skill sets, and technology usually limits sellers&apos; ability to create and maintain a diverse product catalog. Partner with Tech2Globe, an industry leader that offers a suite of Amazon vendor cataloging and <Link href="/content-management-system" className="text-decoration-underline fw-bold">content management services</Link>  to make selling on Amazon simpler. Our Amazon catalog processing services maintain an organized, up-to-date, and informative product catalog, creating SEO-friendly, informative, and engaging content. We offer shopping experience with a well-managed checkout procedure, providing the <Link href="/amazon-seo-listing-optimization" className="text-decoration-underline fw-bold">best Amazon listing optimization service</Link>, and much more.</p>

                                <h2 className={`${Style.headingText} pb-3`}>
                                    <img className={`${Style.innerIcons} lazyload pr-20 content-imag`} src="/images/services/customer-acatalog.png" alt="A+ Cataloging" />
                                    A+ CatalogingOur Complete Amazon Seller Account Management Services
                                </h2>
                                <p className="para-text">
                                    At Tech2Globe, we understand that catalog management is critical for increasing traffic, boosting conversion, and retaining consumers on Amazon, but it can be time-consuming and demands dedication. As a result, our Amazon list management services provide list generation, enrichment and management. We work to create listings that are SEO-friendly, engaging, and informative, leaving you less time to focus on other important business tasks.
                                </p>
                                <p className="para-text">
                                    Our inventory services are provided by experienced copywriters, ecommerce specialists, Amazon listing specialists, and inventory managers with years of experience. We provide a positive shopping experience for your customers by making it possible to have consistent and innovative listings that increase sales and exposure. Use our Amazon product page optimization and content management services to develop accurate, engaging, and detailed product catalogs and provide the best shopping experience.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <img className={`${Style.innerIcons} lazyload pr-20 content-imag`} src="images/services/amazon-icon.png" alt="A+ Cataloging" />
                                    A+ CatalogingCataloging Services Offered by Tech2Globe
                                </h2>
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
                                                Product Research on Amazon
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
                                                    Amazon&apos;s success crucially depends upon a suitable product having high demand.
                                                    Researching and identifying products that sell well and have minimal competition is an
                                                    intense effort that takes time, talent and experience. The Amazon product optimization
                                                    service from Tech2Globe can help you find the proper selection of items that sell well and
                                                    have strong margins, even if you have a restricted budget. We use analytical tools, market
                                                    research expertise, and best practices to conduct detailed analysis of other markets,
                                                    competitors, pricing strategies, customer demand behavior, and past sales data. We can
                                                    help you identify requirements and narrow down potential suppliers. Our staff recommends
                                                    competitive pricing strategies and calculates FBA fees and net profit accurately.
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
                                                Product Listing on Amazon
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
                                                    It&apos;s critical to list your items precisely and systematically while ensuring that your
                                                    catalog complies with all of Amazon&apos;s requirements and standards. Our{" "}
                                                    <strong>Amazon listing specialist</strong> will assist you in managing your{" "}
                                                    <strong>Amazon product list</strong> from start to finish. Comprehensive data management,
                                                    classification, bulk product upload, and feed development are among our offered services.
                                                    We also make changes to product titles, price, description photos, SKUs, and availability,
                                                    among other things. To comply with Amazon&apos;s criteria and increase conversion, we maintain
                                                    and optimize inventory and alter photos.
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
                                                Basic Cataloging
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
                                                    Your product catalog should be up-to-date, accurate, and full down to the last detail to
                                                    increase traffic and convert visitors. That is why our <strong>Amazon SEO expert</strong>{" "}
                                                    will provide all necessary assistance to guarantee that all basic categorization tasks are
                                                    completed quickly. Classifying goods, establishing proper names, generating product
                                                    information, developing SEO-rich product descriptions, optimizing content, and gathering
                                                    relevant photographs and videos are all part of our basic cataloging service. To enable
                                                    browsing, search, and commerce, we standardize product information and metadata.
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
                                                Detailed Cataloging
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
                                                    Product content management is crucial to an Amazon store&apos;s long-term success. Tech2Globe
                                                    provides thorough cataloging services to assist sellers in creating rich catalogs with
                                                    search-optimized keywords and optional features to improve product exposure, ranking, and
                                                    searchability. We improve and expand your product catalog by using high search volume
                                                    keywords based on detailed keyword research. It allows your consumers to find, connect
                                                    with, and buy things easily, giving you a competitive advantage.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <img className={`${Style.innerIcons} lazyload pr-20 content-imag`} src="/images/services/clicker.png" alt="A+ Cataloging" />
                                    Why Should You Work with Us?
                                </h2>
                                <p className="para-text">
                                    When you work with Tech2Globe for Amazon product content management services, we can help you create an optimized <strong>Amazon product list</strong> with details like: SKUs, product names, brand names, manufacturer part numbers, description, pictures, pricing, and more, so you can improve your search engine rankings and sales.
                                </p>
                                <p className="para-text">
                                    Our <strong>Amazon catalog services</strong> team generates exact and unique product descriptions that entice visitors to complete the transaction. We can assist you with any <strong>Amazon premium catalog service US</strong> requirements you may have, whether you want to list and launch new items or improve your existing library on Amazon.
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
            <FaqSection faqs={faqs} />
        </>
    )
};