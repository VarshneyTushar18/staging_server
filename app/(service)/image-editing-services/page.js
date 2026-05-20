import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";

export const metadata = {
    title: "Amazon Image Editing services | Photo Editing Experts",
    description:
        "Tech2Globe offer an amazon product image editing service. We have been providing Amazon image editing service for seller to our customers for over 8 years",
    keywords: [
        "amazon product image editing services",
        "amazon product photo editing service",
        "amazon image editing service for vendors",
        "Amazon image editing service for seller",
        "Amazon Photo Editing Services",
    ],
    openGraph: {
        title: "Amazon Image Editing services | Photo Editing Experts",
        description:
            "Tech2Globe offer an amazon product image editing service. We have been providing Amazon image editing service for seller to our customers for over 8 years",
        siteName: "Tech2Globe web Solutions LLP",
        url: "https://www.tech2globe.com/image-editing-services",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Amazon Image Editing services | Photo Editing Experts",
        description:
            "Tech2Globe offer an amazon product image editing service. We have been providing Amazon image editing service for seller to our customers for over 8 years",
    },
    alternates: {
        canonical: "https://www.tech2globe.com/image-editing-services",
    },
};

const pageHeaderData = {
    title: "Image Editing Services",
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
        question: "What is the Amazon Product Image Editing Service?",
        answer: `
        The Amazon product image editing service makes your product photos look like they were taken by a professional. As part of this service, our professionals will help you to get rid of cluttered backgrounds, fix color differences, and get rid of flaws. Also, they will crop and resize your pictures so that they look great on Amazon's website.
      `,
    },
    {
        id: "Two",
        question: "Why should I use this service for my Amazon listings?",
        answer: `
        High-quality product images are like silent salespeople on Amazon. Images with good visuals are likely to grab attention and showcase your product's best features. Moreover, it builds trust among potential buyers. This can lead to more clicks and increased interest.
      `,
    },
    {
        id: "Three",
        question: "What are Amazon's image requirements?",
        answer: `
        According to Amazon’s image requirements, it is accurate to use .tiff, .gif, .jpg, or .png file extensions. Also, pictures ought to be a minimum of 1000 pixels in width and height. Ultimately, the color space needs to be either sRGB or CMYK.
      `,
    },
    {
        id: "Four",
        question: "What types of editing services are offered?",
        answer: `
        We offer expert Amazon product photo editing services, including removing backgrounds, enhancing lighting, ensuring your images meet Amazon's standards, and more. Our experts are here to help your products stand out and convert more sales.
      `,
    },
    {
        id: "Five",
        question: "How do I contact customer support?",
        answer: `
        You can contact <a href="/customer-support">customer support</a> through online chat. Simply visit the official site of Amazon and select "Something else" followed by "I need more help." This will open a chat window where you can speak with a representative.
      `,
    },
];

export default function ImageEditingServices() {
    return (

        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Image Editing Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Image Editing Services" imageSrc="/images/services/service-inner/amazon-virtual-assistant-top-banner2.jpg" />
                            <div className={Style.ContentDiv}>
                                <p>We offer a wide range of <strong>image editing services</strong>, including expert Amazon product photo editing, to enhance your e-commerce visuals and boost sales.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2>Boost Your Business with Amazon Photo Editing for Instant Results</h2>
                                <p>E-commerce is a platform on which everyone relies only on product photographs or images, often enhanced by an <strong>Amazon product photo editing service</strong>. Effective and appealing product visuals calm the customer and persuade them to buy it. &quot;A good image is one that communicates a fact, strikes the heart, and leaves the spectator a changed person as a result of seeing it,&quot; as the saying goes. We at Tech2Globe offer Amazon product photo editing service from the experts to help you out.</p>
                                <p>As we all know, an internet visitor may gaze at the image and fantasize about it. As a result, the most crucial component of engaging and attracting online users to your goods is e-commerce photographs.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/phone.png" alt="" className={Style.InnerIcon} /> Give us a call now for excellent image editing services</h5>
                                <p>For years, Tech2Globe, Amazon image editing service for vendors, has provided product picture modification services to our customers as an Amazon Services Provider. We alter any product photographs or images for e-commerce. Commercial editing services are provided by our professionals for a wide range of items, including jewelry, apparels, furniture, automobiles, food, <a href="/real-estate-photo-enhancement" className="text-decoration-underline fw-bold">real estate</a>, fashion, and many more. Our staff ensures that the true image is at its best level by removing distracting backdrop, low lighting, color vision impairment, and objectionable distractions. We have been providing <strong>Amazon image editing services</strong> for sellers to our customers for over 8 years.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/photo-camera.png" alt="" className={Style.InnerIcon} /> Requirements for Amazon Product Photo Editing Service</h5>
                                <p>Some of the most important technical Amazon picture criteria for product photographs, which can be met using <strong>Amazon product photo editing service</strong>, include file formats, image pixel size, color modes, and file names. You must use TIFF, JPEG, PNG, or GIF file formats, as per Amazon’s picture requirements. You must use an image pixel size of 1000 or greater in either width or height. Also, the suggested color modes are sRGB or CMYK.</p>
                                <p>The pictures must be a true photograph of the object being offered, as per Amazon. It forbids the use of the product’s vectors or visual images.</p>
                                <p>Amazon sellers should avoid including any distracting components or extra items that aren’t directly linked to the offering. Make sure the product image is in focus and captured with appropriate lighting to meet Amazon’s photo criteria.</p>
                                <p>According to Amazon design experts, you should occupy at least 85 percent or more of the image frame. We help you to achieve this by offering premium quality Amazon Photo Editing Service USA.</p>
                                <p>Although there are several free online picture editors accessible, Amazon has specified requirements that must be met in order to sell on their marketplace. Using an <strong>Amazon image editing service</strong> ensures these standards are met. Choosing one of the free online photo editors, on the other hand, may result in a reduction in image quality.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/eraser.png" alt="" className={Style.InnerIcon} /> How to Remove the Background from Product Photo</h5>
                                <p>The greatest technique to bring attention to your goods while simultaneously increasing page loading speed is to remove the backdrop from your product image. That is when Amazon <a href="/photo-editing-services" className="text-decoartion-underline fw-bold">photo editing services</a> can be helpful to ensure that product images meet Amazon’s requirements</p>
                                <p>According to Amazon’s photo guidelines, you must remove your image backdrops. To eliminate the backdrop of your product images, you may utilize numerous free online photo editors.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/eraser.png" alt="" className={Style.InnerIcon} /> Increase Your Listings with Professional Amazon Product Image Editing Services</h5>
                                <p>High-quality product images are crucial for Amazon sellers. In fact, poor product photos can lead to a significant drop in conversions. Thus, don’t let poor product images hold you back—choose our professional <strong>Amazon product image editing services</strong>.</p>
                                <p>By investing in <strong>Amazon photo editing services</strong>, you can achieve the optimal product listings and grab the attention of potential buyers. Here’s how:</p>
                                <ul>
                                    <li><strong>Professional editing:</strong> It gets rid of distracting backgrounds, makes sure lighting is consistent, and fixes color balance. Customers that can enlarge and have a closer look at your product will trust your brand more.</li>
                                    <li><strong>Better Clarity:</strong> Our editors sharpen and improve your photos so that every detail is visible. This lets customers zoom in and get a better look at your product, which builds trust in your brand.</li>
                                    <li><strong>Standardized Formatting:</strong> We make sure that your images are the right size and format for Amazon. This stops listings from being turned down and makes sure your products are shown correctly.</li>
                                    <li><strong>Multiple Angle Focus:</strong> Our experts can make more product views from different angles. As a result, buyers can see your products from every angle.They will also be completely able to comprehend its appearance and operation. We take the aforementioned actions to assist you in improving your listings and conversions so that you may have more sales and a successful online presence.</li>
                                </ul>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/clicker.png" alt="" className={Style.InnerIcon} />  Why choose us?</h5>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/paint-palette.png"
                                                alt="A group of graphic designers who specialize in Amazon product visuals"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>A group of graphic designers who specialize in Amazon product visuals</h5>
                                                <p>We keep up to date on all of Amazon&apos;s image needs & get you on the track.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/dollar.png"
                                                alt="Affordable and good value price"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Affordable and good value price</h5>
                                                <p>You will receive individual customer support from an account manager from our Amazon image editing services.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/clock.png"
                                                alt="More work in a few days"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>More work in a few days</h5>
                                                <p>You can trust us to provide the best Amazon product graphics on days when you need them urgently.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/badge.png"
                                                alt="A Full-Service Facility"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>A Full-Service Facility</h5>
                                                <p>We can take care of all elements of your Amazon product graphics, from designing the visuals to uploading them straight to your product pages.</p>
                                            </div>
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

                </div>
            </section>


            <div className="StoreCreationTabs">
                <PortfolioTabs data={portfolio} />
            </div>

            <CaseStudiesService caseStudies={caseStudies} />

            <FaqSection faqs={faqs} />
        </>
    )
};