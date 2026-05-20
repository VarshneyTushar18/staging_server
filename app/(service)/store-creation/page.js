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
  title: "Amazon Store Creation Services | Storefront Design & Setup Experts",
  description:
    "Amazon Store Creation services for brand growth. Tech2Globe builds custom Amazon storefronts, A+ content, and optimized designs to boost visibility and sales.",
  keywords: [
    "Amazon store creation",
    "Amazon storefront design services",
    "Amazon brand store creation",
    "amazon store front service"
  ],
  openGraph: {
    title: "Amazon Store Creation Services | Storefront Design & Setup Experts",
    siteName: "Tech2Globe web Solutions LLP",
    description:
      "Amazon Store Creation services for brand growth. Tech2Globe builds custom Amazon storefronts, A+ content, and optimized designs to boost visibility and sales.",
    url: "https://www.tech2globe.com/store-creation"
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Store Creation Services | Storefront Design & Setup Experts",
    description:
      "Amazon Store Creation services for brand growth. Tech2Globe builds custom Amazon storefronts, A+ content, and optimized designs to boost visibility and sales."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/store-creation"
  }
};

const pageHeaderData = {
    title: "Amazon Store Creation services",
    description:
        "Amazon drives over 40% of all online sales, making it the most powerful marketplace for brands. With Tech2Globe’s Amazon Store creation and storefront design services, you can build a custom brand shop that tells your story, showcases your products, and converts browsers into loyal buyers.",
    buttonText: "Contact us",
    buttonLink: "#",
    backgroundImage: "/images/services/data-mining-services-banner.jpg", // your banner image
};

const resources = [
    { id: 1, name: "Case Studies", path: "/case-studies" },
    { id: 2, name: "Portfolio", path: "/portfolio" },
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
        id: 1,
        title: "Product Visibility & Drive Sales 0.1",
        image: "/images/services/service-inner/untitled-design-20.png",
        description:
            "The client has been in the lighting business since 2011, specializing...",
        docLink: "https://www.tech2globe.com/casestudies-docs1/Case%20Study%202%20-%20Sales%20Increase%20in%20different%20categories-converted.pdf",
    },
    {
        id: 2,
        title: "EBC and Storefront",
        image: "/images/services/service-inner/ebca.png",
        description:
            "Client deals in Health & Household items and Pet Supplies products on Amazon and wants...",
        docLink: "https://www.tech2globe.com/casestudies-docs1/Case%20Study%203%20-%20EBC%20and%20Storefront-converted.pdf",
    },
    {
        id: 3,
        title: "Amazon PPC",
        image: "/images/services/service-inner/amazon-ppc.png",
        description:
            "Clients came to us with a range of Amazon PPC management difficulties....",
        docLink: "https://www.tech2globe.com/casestudies-docs1/Amazon%20PPC-converted.pdf",
    },
    {
        id: 4,
        title: "Product Visibility & Drive Sales",
        image: "/images/services/service-inner/untitled-design-18.png",
        description:
            "Client has been in the business of selling fine grooming products for over 15 years......",
        docLink: "https://www.tech2globe.com/casestudies-docs1/Case%20Study%201%20-%20Sales%20Increase%20in%20different%20categories-converted.pdf",
    },
    {
        id: 5,
        title: "e-Commerce Store for Luxury Goods",
        image: "/images/services/service-inner/e-commerce-store-for-luxury-goods.png",
        description:
            "It is the ultimate luxury fashion destination for the distribution and retail of Italian, French…",
        docLink: "https://www.tech2globe.com/casestudies-docs1/E-Commerce%20Store%20for%20Luxury%20Goods-converted.pdf",
    },
    {
        id: 6,
        title: "Amazon Sale Boost",
        image: "/images/services/service-inner/amazon-sale-boost.jpg",
        description:
            "Find out the most important areas where our team required utmost attention to showcase the work from day one …",
        docLink: "https://www.tech2globe.com/casestudies-docs1/amazon-india-case-study.pdf",
    },
    {
        id: 7,
        title: "About Drop shipping",
        image: "/images/services/service-inner/about-drop-shipping.jpg",
        description:
            "Drop shipping is an e-retail term where someone facilitates the selling and delivery of an online product without …",
        docLink: "https://www.tech2globe.com/casestudies-docs1/Case%20Study%202%20-%20Sales%20Increase%20in%20different%20categories-converted.pdf",
    },
    {
        id: 8,
        title: "Migration from Sooq to Amazon.ae",
        image: "/images/services/service-inner/migration-from-sooq-to-amazon-ae.jpg",
        description:
            "Forgiving the best solution to our client and comprehensive support is our specialty which we successfully …",
        docLink: "https://www.tech2globe.com/casestudies-docs1/E-Commerce%20Store%20for%20Luxury%20Goods-converted.pdf",
    },
    {
        id: 9,
        title: "e-Commerce Multivendor Store 1.0",
        image: "/images/services/service-inner/e-commerce-multivendor-store-1-0.jpg",
        description:
            "Our client approached us for Ecommerce services that included multi-vendor customized solutions along with …",
        docLink: "https://www.tech2globe.com/casestudies-docs1/E-commerce%20version%20upgrade%20(1).pdf",
    },
    {
        id: 10,
        title: "e-Commerce Store Version Upgrade",
        image: "/images/services/service-inner/e-commerce-store-version-upgrade.jpg",
        description:
            "The previous version had issues with accepting payments via credit cards, so one of the improvement areas was to set …",
        docLink: "https://www.tech2globe.com/casestudies-docs/E-commerce%20version%20upgrade.pdf",
    },
    {
        id: 11,
        title: "Promotion of 2 x Shopify Stores",
        image: "/images/services/service-inner/promotion-of-2-x-shopify-stores.png",
        description:
            "In 2.5 periods of month projects handling, we've generated more than 6,000 Facebook Page Followers on “Fashion & Cosmetic”…",
        docLink: "https://www.tech2globe.com/casestudies-docs1/Promotion%20of%202%20x%20Shopify%20Stores-converted.pdf",
    }
];

const sidebarSections = [
    { heading: "Resources", links: resources },
    { heading: "Useful Links", links: usefulLinks },
];


const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "They have excellent service and management, this is honest review after a month of experience with them, team is hardworking, knowledgeable and do every task on time. I hope they continue to deliver me same output.",
        name: "Roxel- Account Management India",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Excellent Team, good results in sales",
        name: "Andriana- Amazon Sponsored Ads USA",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Excellent service by Tech2globe, brilliant service and hardworking",
        name: "Neo Global- Vendor Account Management UK",
    },
    {
        id: 4,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Courteous, professional, quality work, best bang for your buck",
        name: " Medi Hub- Amazon Store Creations USA",
    },
    {
        id: 5,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Very professional and creative team. They patiently worked on changes I asked for and delivered on time. Thank you.",
        name: "Teliamed- Amazon Enhance Brand Content USA",
    },
];

const faqs = [
    {
        id: "One",
        question: "What is Amazon Store Creation?",
        answer: `
        Amazon Store Creation is the process of designing and setting up a branded storefront on Amazon. It allows sellers to showcase their products, build brand identity, and provide a better shopping experience that increases visibility and sales.
      `,
    },
    {
        id: "Two",
        question: "Why should I create an Amazon Storefront?",
        answer: `
        Creating an Amazon Storefront helps you stand out from competitors by offering a dedicated space for your brand. It builds trust, improves customer engagement, and increases conversions with SEO-optimized product displays and enhanced brand storytelling.
      `,
    },
    {
        id: "Three",
        question: "How much does the Amazon Store setup cost? ",
        answer: `
        The cost of Amazon Store setup depends on the design complexity and services required. At Tech2Globe, we offer customized Amazon store creation packages tailored to your business goals, ensuring affordable pricing with maximum ROI.            
      `,
    },
    {
        id: "Four",
        question: "Can an Amazon Store improve my product visibility?",
        answer: `
        Yes. Amazon Stores are SEO-optimized and appear in Amazon search results. By using A+ content, keyword-rich product listings, and store analytics, sellers can drive more traffic and improve product discoverability.
      `,
    },
    {
        id: "Five",
        question: "Do I need experts for Amazon Store creation?",
        answer: `
        Yes. Professional Amazon Store consultants help design a store that's visually appealing, SEO-friendly, and aligned with Amazon's guidelines. This reduces errors, saves time, and ensures your storefront is optimized to drive sales.
      `,
    },
];

export default function StoreCreation() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Store Creation" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Store Creation" imageSrc="/images/services/service-inner/amazon-virtual-assistant-top-banner2.jpg" />
                            <div className={Style.ContentDiv}>
                                <p>Amazon is a website that accounts for more than 40% of all online sales. Almost half of the people around the globe go to Amazon when looking for a new item. Businesses can&apos;t ignore Amazon&apos;s enormous value, which is why having an Amazon Store is crucial. Tech2Globe can help you reach your goals on the world&apos;s largest eCommerce website, whether you are new to the Amazon marketplace and need assistance creating your Amazon Store or you&apos;re an established organization and require help optimizing your Amazon Store.</p>
                                <p>Our <strong>Amazon store creation consultants</strong> design Amazon Web Stores that allow merchants to communicate their brands&apos; stories and sell their wares. They provide <strong>Amazon store optimization services</strong> to meet the demands of <strong>Amazon store SEO</strong>. We create bespoke-designed brand shops that cover the most selling area on the Amazon platform. We help create custom URL and page statistics to measure the growth in sales. Our <strong>Amazon store consultant</strong> can assist you in more successfully creating your Amazon Store by finishing the Amazon template design by using trending layouts, aesthetically attractive graphics, and multimedia content.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h5><Image src="/images/services/service-inner/amazon-icon.png" alt="" width={30} height={30} className={Style.ImgIco} /> Our Store Creation Services</h5>
                                <p>When you choose Tech2Globe to set up and maintain your Amazon Store, you get a comprehensive set of deliverables to help you achieve maximum success on Amazon. It can help you improve sales and revenue while also increasing your online presence in Amazon search results. Here are our Amazon Store management services:</p>

                                <div className={`${Style.PageAccordion} accordion`} id="accordionSection1">

                                    <div className={`${Style.AccordionItem} accordion-item`}>
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className={`${Style.AccordionButton} accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Creating An Amazon Store
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="para-text">If your business is new to Amazon, our award-winning designers will develop a unique Amazon storefront for you. We help you succeed with <strong>Amazon storefront design services</strong> that provide the most pleasing user experience and the best showcasing of your brands and items.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${Style.AccordionItem} accordion-item`}>
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className={`${Style.AccordionButton} accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Amazon Store Optimization Services
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="para-text">Our team examines and optimizes your shop for generating sales and brand exposure for businesses that already have an Amazon presence. These improvements might range from a comprehensive makeover to a storefront update on your featured goods. By improving your listings, we increase the online exposure of your Amazon Store and your items. If you&apos;re new to Amazon, our experts will help set up your shop for you. We improve your items by writing captivating product descriptions and categorizing them correctly into categories and subcategories.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${Style.AccordionItem} accordion-item`}>
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className={`${Style.AccordionButton} accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Analyze The Competitors
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="para-text">Your personal <a href="/amazon-marketing-services" className="text-decoration-underline">Amazon Marketing</a> Specialist helps with in-depth research into your Amazon competition before developing or improving your shop. We examine their goods, marketing, and storefronts to devise a design and optimization approach that makes you their most formidable competitors.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className={Style.ContentDiv}>
                                <h5><Image src="/images/services/service-inner/amazon-icon.png" alt="" width={30} height={30} className={Style.ImgIco} /> Why Should You Consider Amazon Store Management?</h5>
                                <p>Are you pondering whether or not to invest in an <strong>Amazon store setup service in the USA</strong> for your business? There are several reasons to think about Amazon and an Amazon shop, mainly because the site handles 40% of all online transactions. Businesses are also investing in the creation of Amazon stores for the following reasons:</p>

                                <div className={`${Style.PageAccordion} accordion`} id="accordionSection1">

                                    <div className={`${Style.AccordionItem} accordion-item`}>
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className={`${Style.AccordionButton} accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                                Boost Amazon Sales
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="para-text">With half of the market looking for a new product on Amazon, businesses need to have a presence there. An Amazon Store shows that your business is active on the platform and that it is well-established. <i>Your Amazon Store demonstrates that a brand and a corporation back your products</i>. It may persuade customers to add your goods to their cart rather than a competitor&apos;s.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${Style.AccordionItem} accordion-item`}>
                                        <h2 className="accordion-header" id="headingFive">
                                            <button className={`${Style.AccordionButton} accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                Boost Customer Loyalty
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="para-text">Your Amazon shop serves as a website for your business. You&apos;ll get a unique URL as well as a place to promote your business and products. <i>Even better</i>, your Amazon Store can also include social network connections. As a consequence, you may see an increase in interaction across all of your <a href="https://www.tech2globe.com/social-media-marketing-services">social media</a> channels. It may also increase these customers&apos; loyalty. When you debut a new product, for example, you may inform your social media followers about it and include a link to your Amazon listing.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${Style.AccordionItem} accordion-item`}>
                                        <h2 className="accordion-header" id="headingSix">
                                            <button className={`${Style.AccordionButton} accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                Create Amazing Shopping Experiences
                                            </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="para-text">You create an engaging shopping experience when you invest in our <strong>Amazon store creation service in the </strong>. They may go over your products without being distracted by search results, almost as if they were on your website. You may enhance not just your sales but also your brand recognition by providing this type of experience. Better brand recognition can lead to the increased social media participation and consumer loyalty.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3"><Image src="/images/services/service-inner/amazon-icon.png" alt="" width={30} height={30} className={Style.ImgIco} /> Why Choose Us?</h5>
                                <p>Seller Storefront adds flair to your brand and listings by enhancing your brand story and establishing a solid presence on the platform. An appealing and SEO-friendly store allows merchants to promote their products internationally and provide a multi-page buying experience, allowing them to enhance product exposure and conversion rates while also driving traffic with advertising. In terms of <strong>Amazon storefront design services</strong> in India, we are the finest.</p>
                                <p>Our services have several beneficial points, resulting in a consistent increase in ROI and company sustainability. Feel free to discuss your Amazon business needs with us. Our experts can assist you with the <strong>Amazon store setup service in India</strong> or manage your Amazon Store, allowing you to improve your sales on the eCommerce platform.</p>
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
                <PortfolioTabs data={portfolio} description="With over 500+ clients across the world, Tech2globe has delivered hundreds of cost effective and high-quality solutions for a wide range of industries and domains including consumer and business development, e-Commerce, retail, manufacturing & many others." />
            </div>

            <CaseStudiesService caseStudies={caseStudies} />
            <FaqSection faqs={faqs} />
        </>
    )
};