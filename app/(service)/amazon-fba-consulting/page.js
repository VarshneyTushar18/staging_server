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
  title: "Amazon FBA Consulting | Amazon Seller Services | Tech2Globe",
  description:
    "Working with an experienced Amazon FBA consultancy service agency will help you navigate the various complexities of Amazon FBA. Explore our Amazon FBA services.",
  keywords:
    "fulfillment by amazon-3, amazon fba consulting, amazon seller services, amazon fba services, Amazon FBA Agency, Amazon seller central consultants",
  alternates: {
    canonical: "https://www.tech2globe.com/amazon-fba-consulting",
  },
  openGraph: {
    title: "Amazon FBA Consulting | Amazon Seller Services | Tech2Globe",
    description:
      "Working with an experienced Amazon FBA consultancy service agency will help you navigate the various complexities of Amazon FBA. Explore our Amazon FBA services.",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/amazon-fba-consulting",
    type: "website",
  },
  twitter: {
    card: "Tech2Globe",
    title: "Amazon FBA Consulting | Amazon Seller Services | Tech2Globe",
    description:
      "Working with an experienced Amazon FBA consultancy service agency will help you navigate the various complexities of Amazon FBA. Explore our Amazon FBA services.",
  },
};
const pageHeaderData = {
    title: "Amazon FBA Consulting",
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
        question: "What is Fulfillment by Amazon (FBA)?",
        answer: `
        Fulfillment by Amazon, or FBA, is a service that Amazon offers to sellers. It stores inventory, handles returns and even helps with customer service. When sellers use FBA, they can focus on other parts of their business while Amazon stores, picks, packs, and ships orders.
      `,
    },
    {
        id: "Two",
        question: "What services do Amazon FBA consultants provide?",
        answer: `
        Fulfillment by Amazon (FBA) is what an Amazon FBA consultant does all day. Their services are mostly about managing your products and ensuring they get to the right place on time. They help ensure customers have a good experience and that stores have enough products to meet customer needs.
      `,
    },
    {
        id: "Three",
        question: "How do I get started with FBA?",
        answer: `
        Sign up for an Amazon selling account and pick a selling plan before you can use FBA. Then, you can add your selling account to FBA and either make new listings for the program or change listings that are already there to FBA. To sign up for FBA: In Seller Central, move your mouse over the gear icon and click on Account info.
      `,
    },
    {
        id: "Four",
        question: "What is Amazon Seller Central?",
        answer: `
        The central location for your Amazon selling account is known as Seller Central. The management of products, the modification of prices, the fulfillment of customer orders, and the maintenance of settings for your business operations are all handled by this one-stop shop.
      `,
    },
    {
        id: "Five",
        question: "How do FBA consultants help with inventory management?",
        answer: `
        There may be extra fees you need to pay, like long-term storage fees. FBA consultants will show you how to manage your FBA inventory well, which can help you lower the costs of being an FBA seller.
      `,
    },
];

export default function AmazonFbaConsulting() {
    return (

        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Amazon FBA Consulting" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Amazon FBA Consulting" imageSrc="/images/services/service-inner/amazon-virtual-assistant-top-banner2.jpg" />
                            <div className={Style.ContentDiv}>
                                <p>Explore the benefits of <strong>Fulfillment by Amazon</strong> and simplify your Amazon sales strategy. Let us handle storing, packing, and shipping so you can focus on your business growth.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h3 className="pt-3 pb-2"> Unlock Your Company&apos;s Potential with Amazon FBA Services</h3>
                                <p>Amazon FBA is one of the numerous programs offered by Amazon to its merchants, and it is likely the most beneficial. Therefore, you can benefit from our <strong>Amazon FBA services</strong>, which can help you streamline fulfillment and enhance your selling experience on Amazon.</p>
                                <p>Fulfillment By Amazon (FBA) does exactly what it says. Once you have signed up for Amazon FBA, you will be able to send your items in bulk to Amazon&apos;s fulfillment centers. When a buyer buys your goods on Amazon, then Amazon becomes in charge of packaging and sending them to the customer. Enrolling in Amazon FBA is a terrific method to relieve yourself of obligations like order fulfillment and refunds. Still, the program has a lot of complexity that you must master if you want to succeed. Thankfully, Tech2Globe can assist.</p>
                                <p>When you deal with an Amazon FBA agency, you can expect help to navigate the difficult transition from <strong>Vendor to Seller Central</strong>, as well as help you manage your Amazon FBA items in the most cost-effective way possible. Because the FBA program includes several fees, such as storage fees, that grow the longer your items are unsold. Having a good inventory management plan is critical if you want to keep your costs down. Amazon seller central consultants, on the other hand, are knowledgeable about <strong>how to manage FBA products</strong> so that the program&apos;s various expenditures are maintained to a minimum.</p>
                                <p>Working with an experienced <a href="/amazon-consulting-services" className="fw-bold text-decoration-underline">Amazon consultancy service agency</a> will help you navigate the various complexities of Amazon FBA. It is undoubtedly an excellent option to consider if you want to reduce your burden of responsibilities as an Amazon seller while maintaining the highest profit margins possible.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/setting.png" alt="" className={Style.InnerIcon} /> Our Services</h5>

                                <p>Tech2Globe can assist you with FBA in a variety of ways:</p>

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
                                                Eligibility For the FBA And Projections
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
                                                    Tech2Globe will assist you with ensuring that your items are FBA qualified and that no enrollment hurdles, such as hazmat review, exist. Through <strong>Amazon FBA Consulting</strong>, we&apos;ll run a profit forecast because FBA charges extra costs in addition to Amazon&apos;s usual fees. We can anticipate your margin and total return after enrollment with high accuracy. We can also help you enroll in specialized programs with cheaper rates for particular sorts of things.
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
                                                Design And Implementation Of FBA
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
                                                    As a certified <strong>Amazon FBA Agency</strong>, we will build FBA-compliant Product Listings (ASINs) and ensure the relevant information is sent to Amazon for fulfillment. It accompanies paper and packaging design, which comprise exterior packaging, size, weight, and labeling. These are important for FBA&apos;s success and ensure correct logistics within Amazon&apos;s supply chain.
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
                                                Fees & Optimization For FBA
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
                                                    We will audit your FBA fees as part of our <strong>Amazon Seller Services</strong> if you have been using them. Many hidden costs exist on Amazon, which is difficult to see through Seller Central. Tech2Globe can collect more specific fee data via API access to calculate your lowest prices and negotiate these fees on your behalf. Because Amazon frequently misclassifies weights and sizes, all listings should be double-checked and compared to FBA shipments.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                             <div className={Style.ContentDiv}>
                                <h3 className="pt-3 pb-2">Boost Your Sales with Expert Amazon Seller Central Consultants</h3>
                                <p>Increasing sales and optimizing presence on the biggest online marketplace need partnering with <strong>Amazon Seller Central Consultants</strong>, such as those at Amazon.</p>
                                <p>Our Amazon Consultants work to maximize product visibility by means of improved listings and focused advertising campaigns. Additionally, our staff knows a great deal about Amazon&apos;s algorithms and good SEO techniques, which can increase the product&apos;s visibility and generate significant sales. We have expertise in writing engaging product descriptions to carefully arrange pertinent keywords.</p>
                                <p>We also specialize in overseeing <strong>Fulfillment by Amazon</strong> (FBA) logistics, guaranteeing effective inventory control that reduces storage expenses and avoids stockouts. We focus on strengthening the brand presence by emphasizing on improving branding and maximizing customer experience.</p>
                                <p>Moreover, we provide continuous assistance as well as a current understanding of Amazon&apos;s changing policies and best practices. Working together, we will optimize your processes and set up your company for long-term expansion.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h3 className="pt-3 pb-2">Boost Your E-commerce Success with a Professional Amazon FBA Agency</h3>
                                <p>Utilizing the services of our <strong>Amazon FBA Agency</strong> can assist you in navigating the challenging aspects of selling on Amazon, allowing you to experience rapid expansion of your business. The optimization of listings, mastery of marketing, and development of your brand are all ways in which we simplify things for you.</p>
                                <p>As a result, you will have more time to work on different and new ideas. Because our Amazon FBA Services provide you with access to advanced analytics, best practices in the industry, and the ability to grow, we will fulfill our role as a strategic partner in your success with Amazon.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/customer-acatalog.png" alt="" className={Style.InnerIcon} /> How Can We Help?</h5>

                                <p>While the e-commerce environment has evolved since Amazon began, engaging with a consulting firm, offering <a href="https://www.tech2globe.com/amazon-consulting-services" className="fw-bold text-decoration-underline">Amazon seller services</a>, with substantial e-commerce expertise, such as Tech2Globe, may offer various benefits for your organization.</p>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/increase.png"
                                                alt="Increased Sales"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Increased Sales</h5>
                                                <p>You can design a sensible and competitive strategy for increasing product orders by partnering with us.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/headset.png"
                                                alt="Better Guidance"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Better Guidance</h5>
                                                <p>Our knowledge and enthusiasm enable us to provide excellent advice for your company&apos;s web strategy.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/dollar.png"
                                                alt="A Higher Return"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>A Higher Return</h5>
                                                <p>The benefits of increased sales and better guidance frequently result in a higher ROI.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/clicker.png" alt="" className={Style.InnerIcon} /> Why Choose Us?</h5>
                                <p>We pride ourselves at Tech2Globe on our ability to form long-term partnerships with a bespoke package of services based on your unique company goals, budget, and current team resources. As a third-party seller, we take care of all Amazon administration so that you may focus on other aspects of your business. The skilled team at Tech2Globe can assist you with continuing marketing and SEO optimization on your product pages, as well as a full-service Amazon FBA consulting firm that can take you through every stage of launching, optimizing, and marketing a product on Amazon.</p>
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