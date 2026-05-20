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
 title:
    "ECommerce Social Media Marketing Service | Best ECommerce SEO agency",

  description:
    "Want to drive more Ecommerce conversions from paid social ads? Our Social Media Marketing specializes in connecting brands with their target consumers online. Watch your business grow with the help of our E-commerce social media marketing agency.",

  keywords: [
    "ecommerce agency",
    "ecommerce marketing agency",
    "social media marketing agency for ecommerce",
    "ecommerce digital marketing agency",
  ],

  alternates: {
    canonical:
      "https://www.tech2globe.com/ecommerce-social-media-marketing",
  },

  openGraph: {
    title:
      "ECommerce Social Media Marketing Service | Best ECommerce SEO agency",
    description:
      "Want to drive more Ecommerce conversions from paid social ads? Our Social Media Marketing specializes in connecting brands with their target consumers online. Watch your business grow with the help of our E-commerce social media marketing agency.",
    url: "https://www.tech2globe.com/ecommerce-social-media-marketing",
    siteName: "Tech2Globe web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary",
    title:
      "social media marketing agency for ecommerce | ecommerce digital marketing agency",
    description:
      "Want to drive more Ecommerce conversions from paid social ads? Our Social Media Marketing specializes in connecting brands with their target consumers online. Watch your business grow with the help of our E-commerce social media marketing agency.",
  },
};

const pageHeaderData = {
    title: "E-commerce Social Media Marketing Service",
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
    { heading: "Related Services", links: usefulLinks },
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


export default function EcommerceSocialMediaMarketing() {
    return (

        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Ecommerce Social Media Marketing" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Ecommerce Social Media Marketing" imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg" />
                            <div className={Style.ContentDiv}>
                                <p>With 3.4 billion individuals active on social media globally, it is critical to know how to interact with online audiences and convert them into buyers! Social media may help you create your brand and grow your business. With a clear plan and using the right techniques, effective social media marketing can help your business grow. For brands and sellers, social media can serve as crossroads for boosting sales, and much more. As a result, Tech2Globe, the <strong>best ecommerce SEO agency in the USA</strong>, can assist!</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h2 className="text-danger pt-3 pb-2"><img src="/images/services/service-inner/trolley.png" alt="" className={Style.InnerIcon} /> E-commerce Social Media Marketing Advantages</h2>
                                <p>Millions of individuals worldwide have an Amazon account, and are comfortable buying from Amazon. Using your social media presence and posts to drive traffic to your Amazon product listings or Amazon Brand Store may help you convert more customers and complement your advertising approach. It also provides a location for customers to identify your brand if they can utilize your items.</p>
                                <p>Compelling social media profiles, like an A+ detail page or a branded store, may teach customers more about your brand and urge them to follow for updates on new items and information. Customers may use it to collect information before making a purchase, discover more about your company and much more. You can achieve it with the help of an <strong>ecommerce digital marketing agency</strong>.</p>
                            </div>

                             <div className={Style.ContentDiv}>
                                <h2 className=" text-danger pt-3 pb-2"><img src="/images/services/service-inner/like.png" alt="" className={Style.InnerIcon} /> We Create a Successful Social Media Plan</h2>
                                <p>As the popularity of online buying has been growing year after year, now is the time to make sure your social media performance is in sync with your sales funnel. Tech2Globe's social media team specializes in connecting brands with their target consumers online – and ensuring that they convert! We always provide targeted <strong>social media integration with ecommerce</strong> to help guarantee that your social strategy is effective online and delivers that all-important ROI.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="text-danger pt-3 pb-2"><img src="/images/services/service-inner/question.png" alt="" className={Style.InnerIcon} /> How Do We Succeed In Social Media Ecommerce?</h2>
                               
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/aim.png"
                                                alt="CLTV (Customer Lifetime Value)"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Setting Objectives</h5>
                                                <p>Setting quantifiable objectives is the greatest way to know where you are heading before you can get there.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/lightbulb.png"
                                                alt="DPVR (Detailed Page View Rate)"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Development Of a Strategy</h5>
                                                <p>We create an eCommerce social media marketing plan that will help you achieve your objective based on effective strategies.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/list.png"
                                                alt="Total ACoS"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Ads And Content That Work</h5>
                                                <p>We provide you best <strong>ecommerce PPC services</strong> by visually creating rich pieces that people want to share and encourage customers.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/aim.png"
                                                alt="Rates Of Repeat Purchases"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>A/B Split Testing and Audience Targeting</h5>
                                                <p>We find the adverts that attract customers & achieve effective click-through rates through A/B split testing.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/pin.png"
                                                alt="AOV (Average Order Value)"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Tracking And Optimizing Conversions</h5>
                                                <p>We can adjust the content, language, call-to-action, tone, or audience of your advertising appropriately.</p>
                                            </div>
                                        </div>
                                    </div>                                   
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="text-danger pt-3 pb-2"><img src="/images/services/service-inner/clicker.png" alt="" className={Style.InnerIcon} /> Why Choose Us?</h2>
                                <p>We have years of expertise and a track record of success in <strong>ecommerce Social Media services</strong>. This market knowledge has equipped us to help clients achieve success through improved product sales. We excel at tailoring our services to the demands of each of our clients' distinct industries. We understand that the same e-commerce social media marketing approach will not work for every eCommerce business. Therefore, we create a plan that is unique for you to provide the <strong>best ecommerce SEO services</strong>.</p>
                                <p>We pair you with an in-house social media expert who has eCommerce and advertising expertise and knows the latest <strong>social media ecommerce trend</strong>. We also provide the extra services required to set your eCommerce business apart from the competition, such as designing your online store and assisting search engines.</p>
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