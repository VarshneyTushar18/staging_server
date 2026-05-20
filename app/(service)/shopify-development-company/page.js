import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaChartBar, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaLightbulb, FaPaintBrush, FaPalette, FaPalfed, FaScrewdriver, FaSearch, FaShieldAlt, FaStore, FaUsers, FaUsersCog, FaVial } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ShopifySlider from "@/app/components/services/shopifypageslider/shopifypageslider";

export const metadata = {
    title: "Best Shopify Website Development Company in USA - Tech2Globe",
    description:
        "Shopify Development Company: Hire the best Shopify web development company in USA. Elevate your brand with Shopify development services for your online success.",
    keywords: [
        "shopify development company",
        "shopify app development company",
        "shopify web development company",
        "shopify website development company",
        "shopify development company india",
        "shopify development company in india",
        "best shopify development company",
        "shopify development company in usa",
        "best shopify development companies"
    ],
    openGraph: {
        title: "Best Shopify Website Development Company in USA - Tech2Globe",
        siteName: "Tech2Globe web Solutions LLP",
        description:
            "Shopify Development Company: Hire the best Shopify web development company in USA. Elevate your brand with Shopify development services for your online success.",
        url: "https://www.tech2globe.com/shopify-development-company"
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Shopify Website Development Company in USA - Tech2Globe",
        description:
            "Shopify Development Company: Hire the best Shopify web development company in USA. Elevate your brand with Shopify development services for your online success."
    },
    alternates: {
        canonical: "https://www.tech2globe.com/shopify-development-company"
    }
};

const pageHeaderData = {
    title: "Best Shopify Development Company In USA",
    description:
        "Tech2Globe is a trusted Shopify Development Services Company in the market with a successful track record of providing services to international customers. ",
    buttonText: "Contact us",
    buttonLink: "#",
    backgroundImage: "/images/services/data-mining-services-banner.jpg", // your banner image
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

const caseStudies = [
    {
        id: 1,
        title: "Shopify website for Buxaz",
        image: "/images/services/service-inner/buxaz-case-study.png",
        description:
            "We believe amazing products should be sold in amazing stores. We are accredited Shopify Experts with a proven track....",
        docLink: "https://www.tech2globe.com/casestudies-docs1/Buxaz%20case%20study.pdf",
    },
    {
        id: 2,
        title: "nopCommerce platform",
        image: "/images/services/service-inner/nopcommerce-development.jpg",
        description:
            "Besteleasy.nl based on Netherlands and offers best quality electronic gadgets in the entire location of Europe, especially wireless speakers, data cables & headphones.....",
        docLink: "https://www.tech2globe.com/casestudies-docs1/Case%20Study%20-%20Besteleasy.nl%20(FINAL%20CASE%20STUDY).pdf",
    },
    {
        id: 3,
        title: "Textiles Shopify Store",
        image: "/images/services/service-inner/workshop-internal-employees-400x300.png",
        description:
            "Vichitra Collection based on New Delhi, India and offers best quality traditional textiles and arts outlet. Company established in 1996 and running their business offline.....",
        docLink: "https://www.tech2globe.com/casestudies-docs1/Case%20Study%20-%20VichitraCollection.pdf",
    },
    {
        id: 4,
        title: "Shopify Multi Currency Checkout",
        image: "/images/services/service-inner/promotion-of-2-x-shopify-stores.png",
        description:
            "This website is a well-established brand in the USA, and they are dealing into women beauty & grooming products. They owned 100% women-oriented products....",
        docLink: "https://www.tech2globe.com/casestudies-docs1/Case%20Study_%20Shopify%20Multi%20Currency%20Checkout%20.pdf",
    },
    {
        id: 5,
        title: "Rebuilt & Redesign",
        image: "/images/services/service-inner/OnlineBusinessGrowth.png",
        description:
            "Ellie Bianca is a proudly Canadian, all-natural, environmentally sustainable, socially conscious, luxury skin care....",
        docLink: "https://www.tech2globe.com/casestudies-docs1/ellie%20bianca.pdf",
    },
];

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe took my online store idea and turned it into reality. Their team is friendly and knowledgeable, guiding me through the process and making everything user-friendly. My store looks great and runs smoothly.!",
        name: "Sarah Jones, Boutique Owner",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "We needed a revamp for our Shopify store, but didn't have the time or expertise. Tech2Globe stepped in and saved the day! They updated the design, optimized for mobile, and even integrated new features to boost sales. Now our store is converting like crazy. Thanks to their team!",
        name: "David Kim, Ecommerce Manager",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "They understand the platform inside and out, customizing our store to meet our exact needs. They helped us streamline the checkout process and even set up automated marketing campaigns.",
        name: "Dr. Lee Garcia, CEO",
    },
    {
        id: 4,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe's experts impressed us with their ability to handle complex functionalities for our Shopify store. Their communication was clear throughout the project, and they were always available to answer our questions. A reliable partner for our online business!",
        name: " Michael Hernandez, Marketing Director",
    },
    {
        id: 5,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Their team is reliable and keeps our store running smoothly. They handle everything from design updates to technical issues. Now, we have more time to focus on growing our business!",
        name: "Emily Garcia, Store Owner",
    },
];

const faqs = [
    {
        id: "One",
        question: "How to Hire a Shopify Development Team?",
        answer: `
        You can explore partner categories or search by service using Google Search. You may also hire experts from freelance platforms and marketplaces. If you are looking for the <strong>best shopify development company</strong>, then Tech2Globe can be your partner. We offer skilled services to all types of businesses.
      `,
    },
    {
        id: "Two",
        question: "How can Shopify help me grow my online store?",
        answer: `
        Shopify helps in marketing products on social media platforms, building mobile-friendly stores, optimizing stores, retaining customers and more. With Tech2Globe, which is now established as a shopify development corporation, you can create and develop several attractive shopify themes and grow your online store.
      `,
    },
    {
        id: "Three",
        question: "How do I choose a company for Shopify development?",
        answer: `
        To choose the best <strong>shopify web development company</strong>, you must prepare an outline of your project requirements, analyze your budget, search for Shopify experts, and be keen to examine their portfolio and testimonials. We have SEO specialists at Tech2Globe who can help you with shopify web development, store design and management.
      `,
    },
    {
        id: "Four",
        question: "What services does your Shopify Development firm offer?",
        answer: `
        With Tech2Globe's service you can seamlessly create your own brand. Our <strong>shopify website development </strong> offers the best services, including PSD to Shopify, Theme Development, Store Development, Store Maintenance, SEO implementation, Quality Analysis and Testing, etc.
      `,
    },
    {
        id: "Five",
        question: "Can a Shopify Development firm customize the look and feel of my online store?",
        answer: `
        Yes, a Development Company for Shopify helps you customize the look and feel of your online store. Our <strong>shopify development company in USA</strong> offers a comprehensive set of solutions, which help you in shopify development services including shopify store design, store optimization and SEO implementation.
      `,
    },
];

export default function ShopifyDevelopment() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "How to Hire a Shopify Development Team?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can explore partner categories or search by service using Google Search. You may also hire experts from freelance platforms and marketplaces. If you are looking for the best shopify development company, then Tech2Globe can be your partner. We offer skilled services to all types of businesses."
                }
            },
            {
                "@type": "Question",
                name: "How can Shopify help me grow my online store?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Shopify helps in marketing products on social media platforms, building mobile-friendly stores, optimizing stores, retaining customers and more. With Tech2Globe, which is now established as a shopify development corporation, you can create and develop several attractive shopify themes and grow your online store."
                }
            },
            {
                "@type": "Question",
                name: "How do I choose a company for Shopify development?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "To choose the best shopify web development company, you must prepare an outline of your project requirements, analyze your budget, search for Shopify experts, and be keen to examine their portfolio and testimonials. We have SEO specialists at Tech2Globe who can help you with shopify web development, store design and management."
                }
            },
            {
                "@type": "Question",
                name: "What services does your Shopify Development firm offer?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "With Tech2Globe's service you can seamlessly create your own brand. Our shopify website development company offers the best services, including PSD to Shopify, Theme Development, Store Development, Store Maintenance, SEO implementation, Quality Analysis and Testing, etc."
                }
            },
            {
                "@type": "Question",
                name: "Can a Shopify Development firm customize the look and feel of my online store?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, a Development Company for Shopify helps you customize the look and feel of your online store. Our shopify development company in USA offers a comprehensive set of solutions, which help you in shopify development services including shopify store design, store optimization and SEO implementation."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb pageName="Shopify Development Company" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Shopify Development Company" imageSrc="/images/services/service-inner/cms-banner2.jpg" />
                            <div className={Style.ContentDiv}>
                                <h2>Best Shopify Development Company In USA for your Dream Store</h2>
                                <p>Tech2Globe is a trusted Shopify Development Services Company in the market with a successful track record of providing services to international customers. We understand the importance of high-quality design, development, and quality check requirements before delivering any solution. Our team of expert developers is well trained and certified in eCommerce platform development as per the requirements of the customers.</p>
                                <p>As the top <strong>Shopify development company</strong>, we are making your online business dream a reality with the help of extensive eCommerce service. At Tech2Globe, our aim is to build a competitive web store for your company using Shopify&apos;s sophisticated themes and broad functionality.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h2>Why do you need Shopify Website Development Services?</h2>
                                <p>Not every business owner has the time or ability to design an e-commerce platform in order to establish their e-commerce store. Shopify development services give you access to professionally designed online solutions, user-centric experiences, scalable solutions, and much more. These services are essential for businesses and organizations that want to reach a larger audience, get more sales, and make a sustainable business. Tech2Globe, a prominent <strong>Shopify Development Company</strong>, can provide you with the best development services to help you throughout your Shopify journey.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h2>Various Shopify Development Services offered by Tech2Globe</h2>
                                <p>Shopify, used by over 1,000,000 businesses globally, simplifies online store configuration, management, and sales. Our <strong>Shopify Web Development Company</strong> excels in Shopify Development Services. We ensure that your Shopify site stands out in the competitive e-commerce industry by designing unique themes and integrating third-party apps. We&apos;re your one-stop shop for beginning a new eCommerce company or redesigning an existing online store. Partner with a top <strong>Shopify Website Development Company</strong> like us to revitalize your business on the world&apos;s most popular eCommerce platform.</p>
                                <div className="row pb-5">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-3">
                                        <div className={`${Style.Card} card h-100 p-3 position-relative`}>
                                            <div className={Style.CardNumber}>01</div>
                                            <div className={Style.CardContent}>
                                                <div className={Style.IconBox}><FaPaintBrush /></div>
                                                <h5> <strong>PSD to Shopify</strong></h5>
                                                <p>Interactive Website design is the online image of the brands. We will help you turn your PSD designs
                                                    into fully functioning Shopify stores with our comprehensive website design and development services.
                                                    It generates a responsive site-design such as compatibility across devices. As a result, you can
                                                    improve user acquisition, interaction, and retention rates.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-3">
                                        <div className={`${Style.Card} card h-100 p-3 position-relative`}>
                                            <div className={Style.CardNumber}>02</div>
                                            <div className={Style.CardContent}>
                                                <div className={Style.IconBox}><FaStore /></div>
                                                <h5> <strong>Shopify Store Development</strong></h5>
                                                <p>Get started with your online business with our <a href="https://www.tech2globe.com/e-commerce-development">eCommerce website design and development services</a> for the Shopify platform in a fast and simple way. We plan our development according to your eCommerce goals and provide the ideal eStore. You can count on us to set up your store and make it market-ready without missing a beat.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-3">
                                        <div className={`${Style.Card} card h-100 p-3 position-relative`}>
                                            <div className={Style.CardNumber}>03</div>
                                            <div className={Style.CardContent}>
                                                <div className={Style.IconBox}><FaPalette /></div>
                                                <h5> <strong>Shopify Theme Development</strong></h5>
                                                <p>Are you looking to redesign your current Shopify Store, or do you need help to modify your website design looks to leverage more clients? With relevant work and usable Shopify Theme Development, our team of expert Shopify Developers can support you. We provide reliable support by following Shopify standards while designing and developing mobile-ready themes that compliment your brand&apos;s voice.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-3">
                                        <div className={`${Style.Card} card h-100 p-3 position-relative`}>
                                            <div className={Style.CardNumber}>04</div>
                                            <div className={Style.CardContent}>
                                                <div className={Style.IconBox}><FaScrewdriver /></div>
                                                <h5> <strong>Shopify Store Maintenance</strong></h5>
                                                <p>Shopify Store Maintenance requires website monitoring, updating information, and resolving any errors/issues that arise. To build up production value, our team of qualified professionals can handle any kind of Shopify Store maintenance services and technical assistance required, whether it is fixing bugs or upgrading your current website to newer versions.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-3">
                                        <div className={`${Style.Card} card h-100 p-3 position-relative`}>
                                            <div className={Style.CardNumber}>05</div>
                                            <div className={Style.CardContent}>
                                                <div className={Style.IconBox}><FaSearch /></div>
                                                <h5> <strong>Shopify SEO Implementation</strong></h5>
                                                <p>Shopify&apos;s value lies in its quick but robust offering of features. Implementing SEO (<a href="https://www.tech2globe.com/seo-services">Search Engine Optimization</a>) is essential for growing visibility in search engine results for a Shopify site. With our Shopify SEO implementation solution, you can grab the limelight, rise above the crowd, and attract an infinite stream of clients.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-3">
                                        <div className={`${Style.Card} card h-100 p-3 position-relative`}>
                                            <div className={Style.CardNumber}>06</div>
                                            <div className={Style.CardContent}>
                                                <div className={Style.IconBox}><FaVial /></div>
                                                <h5> <strong>Shopify Quality Analysis and Testing</strong></h5>
                                                <p>Quality Analysis and Testing involves a number of stages and considerations to guarantee that your online business operates smoothly and provides excellent customer service. Web experts of our <strong>Shopify Web Development Company</strong> regularly receive updates regarding the success of your store as well as suggestions which will help you to enhance traffic for the same.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="text-danger">Shopify Development Company in USA - Why Choose Tech2Globe?</h2><hr />
                                <p>Our website development services are powered by years of experience and skill, allowing us to fulfill deadlines without breaking a sweat. As a respected and dependable <strong>Shopify Website Development Company</strong>, we have been blessed with the pleasure of servicing over 7,000+ clients worldwide, including B2B and B2C clients.</p>
                                <p>Hiring Tech2Globe as your <strong>Shopify Web Development Company</strong> can offer you several advantages, as we offer a point of contact for communication who is always accessible to answer your questions. Additionally, we help you meet highly scalable needs with real-time resource availability.</p>
                            </div>

                            <div className={Style.ContentDivNew}>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <h3>Different Industries We Serve For Shopify Development</h3>
                                        <p>Tech2globe, a Shopify Website Development Company has specialized development services directed to a variety of industries, including:</p>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                        <ShopifySlider />
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pb-3">Tech2globe Expertise in Shopify eCommerce Development</h2>
                                <p className="mb-0"><strong>Simplest and effective solutions</strong></p>
                                <p>One of the easiest and best solutions in the web development area is Shopify. Along with a built-in website optimizer, it offers plentiful technical models and custom Shopify themes.</p>
                                <p className="mb-0"><strong>Setup & Configuration Store</strong></p>
                                <p>Within the defined budget and timeline, our team of innovative and professional Shopify developers helps you create interactive and engaging e-commerce stores.</p>
                                <p className="mb-0"><strong>Leveraging SEO to improve the popularity of search engines</strong></p>
                                <p>We have developed a range of scalable and elegant Shopify portals and applications designed to suit our clientele&apos;s unique requirements.</p>
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

            <CaseStudiesService caseStudies={caseStudies} />
            <ClientSlider testimonials={testimonials} />
            <FaqSection faqs={faqs} />
        </>
    )
};