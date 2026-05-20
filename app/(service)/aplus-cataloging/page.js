import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import FaqSection from "@/app/components/services/faqs/faqs";

export const metadata = {
  title: "Amazon A+ Cataloging Services | Amazon Aplus Cataloging",
  description:
    "Amazon A+ Content is a unique feature in Seller Central that enables brand owners to generate visually appealing Amazon product descriptions for their listings.",
  keywords:
    "Amazon A+ cataloging services-6, Amazon enhanced brand content design-5, Amazon A+ catalog-4",

  openGraph: {
    title: "Amazon A+ Cataloging Services | Amazon Aplus Cataloging",
    description:
      "Amazon A+ Content is a unique feature in Seller Central that enables brand owners to generate visually appealing Amazon product descriptions for their listings.",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/aplus-cataloging",
  },

  twitter: {
    card: "summary_large_image",
    title: "Amazon A+ Cataloging Services | Amazon Aplus Cataloging",
    description:
      "Amazon A+ Content is a unique feature in Seller Central that enables brand owners to generate visually appealing Amazon product descriptions for their listings.",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/aplus-cataloging",
  },
};

const pageHeaderData = {
    title: "Amazon A+ Content",
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


const faqs = [
    {
        id: "One",
        question: "What is Amazon A+ Content?",
        answer: `
        <strong>Amazon A+ Content</strong> is a unique feature in Seller Central that enables brand owners to generate visually appealing Amazon product descriptions for their listings. A+ material, previously known as Enhanced Brand material, is accessible for brand-registered third-party sellers and all vendors.
      `,
    },
    {
        id: "Two",
        question: "What are the benefits of using A+ Content on Amazon?",
        answer: `
        Amazon A+ content enables companies to provide improved material in the product description portion of their listings. They may select from a range of layouts and then add eye-catching photos and graphics.
      `,
    },
    {
        id: "Three",
        question: "How can I access A+ Content on Amazon?",
        answer: `
        To take advantage of A+ Content, your brand needs to be registered under Amazon's Brand Registry Program. Eligibility Requirements: Brands must have a registered and active text (word mark) or image-based trademark (design mark). This trademark must also appear on your products or packaging.
      `,
    },
    {
        id: "Four",
        question: "Can A+ Content include videos?",
        answer: `
        A product listing with A+ Content can include more than just a basic text description and a typical photo reel; it can also incorporate high-quality multimedia photographs and videos, as well as eye-catching information, to tell the product narrative rather than simply its look.
      `,
    },
    {
        id: "Five",
        question: "What services are offered for Amazon A+ Content?",
        answer: `
        Tech2Globe offers a comprehensive range of services for Amazon A+ Content, including A+ Content authoring, A+ Content design, enhanced product descriptions, custom images, keyword selection, including the creation and delivery of content to Vendor Central presentation pages.
      `,
    },
    {
        id: "Six",
        question: "How do I optimize A+ Content for better results?",
        answer: `
        To achieve Amazon A+ content, ensure it is easy to read and absorb, include diverse product images, incorporate the most searched category keywords, highlight your product's unique selling point, and pair descriptive text with images.
      `,
    },
    {
        id: "Seven",
        question: "Is there a premium version of Amazon A+ Content?",
        answer: `
        Yes, <strong>premium A+ content amazon</strong> enables you to tell your brand's narrative on your product detail pages with better images and more interesting text. Premium A+ content may help you differentiate yourself from the competition, boost conversion rates, and increase revenue.
      `,
    },
];

export default function AmazonDSP() {
    return (

        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Aplus Cataloging" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Aplus Cataloging" imageSrc="/images/services/service-inner/amazon-virtual-assistant-top-banner2.jpg" />
                            <div className={Style.ContentDiv}>
                                <p>Brand owners can leverage <strong>A+ Content on Amazon</strong> to showcase product benefits extensively, incorporating detailed explanations, infographics, videos, high-quality photos, and custom content (e.g., brand stories). The <strong>A+ Content</strong> tool is intended to assist sellers and vendors in increasing traffic, conversions, and purchases. Suppose you&apos;ve been on Amazon for a long time. In that case, you may be familiar with A+ Content as Amazon Enhanced Brand Content or Amazon Enhanced Marketing Content, depending on whether you are a seller or a vendor. The name currently reads Amazon A+ Content for sellers and suppliers, but the concept remains the same.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h2> Amazon A+ Content Writing Services</h2>
                                <p>Our professional <a href="/premium-plus-content-services" className="text-decoration-underline fw-bold text-muted">Amazon a+ content</a> writing services will help you raise your Amazon presence. With a team of specialists, we create a kind of content that meets Amazon standards and increases your product visibility. Also, our primary focus is on keyword optimization and engaging storytelling to make sure your <strong>a+ content on Amazon</strong> stands out. Whether you need detailed presentations, engaging infographics, or brand information, we&apos;ve got you covered. Trust us to help you grow your <strong>a+ content on Amazon</strong> and reach your marketing goals.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-2 pb-2"><img src="/images/services/service-inner/amazon-icon.png" alt="" className={Style.InnerIcon} /> Amazon A+ Content: Elevate Your Product with Enhanced Amazon A+ Content</h5>
                                <p>Make use of Tech2Globe&apos;s considerable knowledge and skill in providing Amazon A+ content writing services and developing unique Amazon-enhanced brand content design for eCommerce businesses selling on Amazon. Our professionals create fascinating, engaging content that gives online customers all the information they need to make a purchase. As part of our <strong>A+ content Amazon</strong> services, we develop everything from click-to-enlarge photos and extensive product descriptions to comparison charts and buying recommendations.</p>
                                <p>Our professionals follow Amazon&apos;s criteria to produce Amazon A+ cataloging pages, include keyword-rich material, and ensure that photos are the proper size, resolution, and style, allowing you to stand out from the crowd and enhance conversion rates. We at Tech2Globe assist in creating extremely appealing, keyword-rich Amazon A+ cataloging pages that provide clear communication and meaningful search, resulting in increased sales and conversion rates.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-2 pb-2"><img src="/images/services/service-inner/customer-acatalog.png" alt="" className={Style.InnerIcon} /> A Plus Content Amazon Services We Offer</h5>
                                <p>Our improved A+ product writing services aim to boost customer confidence, increase conversion rates and assist online merchants in creating A+ sites. In addition, these pages are aimed at providing buyers with a wealth of information.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-2 pb-2"><img src="/images/services/service-inner/content-acatalog.png" alt="" className={Style.InnerIcon} /> Amazon A+ Premium Content</h5>
                                <p>Tech2Globe expert writers will develop high-quality content to boost and enhance the experience of potential customers. ASINs, rich photos, videos, graphics, and texts will be used in Amazon enhanced brand content design.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-2 pb-2"><img src="/images/services/service-inner/layout-acatalog.png" alt="" className={Style.InnerIcon} /> Amazon A+ Content Layout of The Detail Page</h5>
                                <p>The best Amazon A+ detail pages display a variety of items, along with their descriptions, all available at an attractive low price. Our Amazon A+ Content Services will help to create the A+ detail page layout so that the customers can see all of the priority goods in one location. Trust our experts to enhance your Amazon catalog management to increase product visibility.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-2 pb-2"><img src="/images/services/service-inner/image-acatalog.png" alt="" className={Style.InnerIcon} /> A+ Cataloging Optimized, High-Resolution Images</h5>
                                <p>Our product image editors adhere to Amazon&apos;s high-quality photo requirements. In addition, Amazon product image optimization considers all technical image requirements while also communicating crucial product information to shoppers.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-2 pb-2"><img src="/images/services/service-inner/product-acatalog.png" alt="" className={Style.InnerIcon} /> Premium A+ Content SEO-Friendly Product Descriptions on Amazon</h5>
                                <p>Experts will do keyword research to determine the most SEO-friendly keyword to include in your product descriptions. Our A+ content writers know how to utilize words to communicate the correct information and sell the product to clients.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-2 pb-2"><img src="/images/services/service-inner/keyword-acatalog.png" alt="" className={Style.InnerIcon} /> A+ Cataloging Keyword And Metadata Selection</h5>
                                <p>Our professionals deal with all three forms of Metadata: descriptive, structural, and administrative. Metadata indicates the consistency of your material as well as vital keywords. To swiftly target the right audience, we choose long-tail and high-volume keywords.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-2 pb-2"><img src="/images/services/service-inner/product-acatalog.png" alt="" className={Style.InnerIcon} /> A+ Cataloging Creating And Uploading Content to The Vendor Central Detail Page</h5>
                                <p>Our exclusive obligation is to create Amazon A+ content video material for you and upload it to the appropriate locations. We upload all of your items, along with their pertinent information, to the Amazon detail page. Your overall revenue will increase as a result of this. Our specialists employ custom paragraph headings, unique pictures and text layouts to develop impactful a Plus Content Amazon cataloging while providing A+ content writing services. The following will be included in our premium Amazon A+ content:</p>
                                <ul className="mb-0">
                                    <li>Enhanced Q/A listings with an engaging style to promote client confidence.</li>
                                    <li>Product photos and movies that are well-edited and show off product features and applications.</li>
                                    <li>Mobile-friendly product information pages with innovative technical features.</li>
                                    <li>Hotspot modules with the ability to answer consumers&apos; questions about product features.</li>
                                </ul>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/clicker.png" alt="" className={Style.InnerIcon} /> A+ Amazon Content Why Should You Choose Us?</h5>
                                <p>Tech2Globe has been developing the most successful Amazon A+ cataloging for numerous merchants around the country for more than a couple of years. There are more reasons to use our Amazon enhanced brand content service, such as:</p>
                                <ul>
                                    <li>We can assist you in reducing wasteful spending.</li>
                                    <li>Our clients have access to technical help 24*7.</li>
                                    <li>Boost the accuracy of your Amazon product pages.</li>
                                    <li>We are dedicated to the timely completion of jobs.</li>
                                    <li>Your important Amazon business data is safe and secure with us.</li>
                                </ul>
                                <p>Contact us immediately for more information about the best Amazon A+ detail pages.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 pb-2">Why Choose Tech2Globe as Your Amazon A+ Content Services Partner?</h2>
                                <p>Tech2Globe is a top choice for <strong>Amazon A+ Content services</strong> due to several reasons. Starting with providing high-quality Amazon A+ content management services to our customers to understanding the importance of standing out on the crowded Amazon platform. With us, you can expect commitment to excellence in every aspect of your <strong>A+ Content Amazon</strong> strategy. Partner with us to experience our expertise in A+ content services that can make a difference to your business.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 pb-2">Our Amazon Portfolio</h2>
                                <p>With over 500+ clients across the world, Tech2globe has delivered hundreds of cost-effective and high-quality solutions for a wide range of industries and domains including consumer and business development, e-Commerce, retail, manufacturing, and many others. Our services also include <a href="/amazon-marketing-services" className="text-decoration-underline fw-bold text-muted">Amazon marketing service</a>, ensuring comprehensive support for your business needs.</p>
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

            <FaqSection faqs={faqs} />

            <div className="StoreCreationTabs">
                <PortfolioTabs data={portfolio} title={'Our Amazon Portfolio'} description={'With over 500+ clients across the world, Tech2globe has delivered hundreds of cost effective and high-quality solutions for a wide range of industries and domains including consumer and business development, e-Commerce, retail, manufacturing & many others.'} />
            </div>

            <CaseStudiesService caseStudies={caseStudies} />
        </>
    )
};