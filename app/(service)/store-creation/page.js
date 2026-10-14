import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";
import Link from "next/link";
import {
    FaSearch,
    FaSitemap,
    FaPaintBrush,
    FaStore,
    FaClipboardCheck,
    FaRocket,
    FaCogs,
    FaShoppingBag,
    FaLightbulb,
    FaLayerGroup,
    FaStar,
    FaTrophy,
    FaHandshake,
} from "react-icons/fa";

export const metadata = {
    title: "Amazon Store Setup Service | Amazon Brand Store | Tech2Globe",
    description:
        "Get a professional Amazon Store setup service from Tech2Globe. Build a branded Amazon Store with strategic design, product organization, and a better shopping experience.",
    keywords: [
        "Amazon store setup service",
        "Amazon Brand Store",
        "Amazon store creation",
        "Amazon storefront design services",
        "Amazon brand store creation",
        "amazon store front service"
    ],
    openGraph: {
        title: "Amazon Store Setup Service | Amazon Brand Store | Tech2Globe",
        siteName: "Tech2Globe web Solutions LLP",
        description:
            "Get a professional Amazon Store setup service from Tech2Globe. Build a branded Amazon Store with strategic design, product organization, and a better shopping experience.",
        url: "https://stagenew.tech2globe.tech/store-creation"
    },
    twitter: {
        card: "summary_large_image",
        title: "Amazon Store Setup Service | Amazon Brand Store | Tech2Globe",
        description:
            "Get a professional Amazon Store setup service from Tech2Globe. Build a branded Amazon Store with strategic design, product organization, and a better shopping experience."
    },
    alternates: {
        canonical: "https://stagenew.tech2globe.tech/store-creation"
    }
};

const pageHeaderData = {
    title: "Amazon Store Setup Service",
    description:
        "Get a professional Amazon Store setup service from Tech2Globe. Build a branded Amazon Store with strategic design, product organization, and a better shopping experience.",
    buttonText: "Book Your Consultation",
    buttonLink: "/contact-us",
    backgroundImage: "/images/services/data-mining-services-banner.jpg",
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

const sidebarSections = [
    { heading: "Resources", links: resources },
    { heading: "Useful Links", links: usefulLinks },
];

const faqs = [
    {
        id: "One",
        question: "What is an Amazon Brand Store?",
        answer: "An Amazon Brand Store is a dedicated destination on Amazon where eligible brands can showcase products, organize categories, communicate their brand story, and help customers explore their offerings.",
    },
    {
        id: "Two",
        question: "Who can create an Amazon Brand Store?",
        answer: "Eligibility depends on Amazon's current requirements and available brand programs. Brands should meet the applicable requirements before creating a Store.",
    },
    {
        id: "Three",
        question: "How much does an Amazon Store setup cost?",
        answer: "The cost of professional setup depends on factors such as the number of pages, catalog size, design requirements, content, and level of customization. Eligible brands can create an Amazon Brand Store without paying Amazon a separate Store creation fee, while professional design and setup services have their own costs.",
    },
    {
        id: "Four",
        question: "How long does it take to set up an Amazon Store?",
        answer: "The timeline depends on the size and complexity of the Store, the number of products and pages, content requirements, and the review process. A simple Store generally requires less work than a large multi-category experience.",
    },
    {
        id: "Five",
        question: "Can an existing Amazon Store be redesigned?",
        answer: "Yes. An existing Store can be reviewed and redesigned to improve its navigation, visual presentation, product organization, messaging, and overall customer experience.",
    },
    {
        id: "Six",
        question: "Can an Amazon Brand Store help customers discover products?",
        answer: "A well-organized Store gives shoppers another way to browse a brand's products through categories, collections, and other sections. This can make it easier for customers to explore products beyond the listing they initially discovered.",
    },
    {
        id: "Seven",
        question: "Can the Store be updated after launch?",
        answer: "Yes. Brands can update their Store as products, collections, campaigns, and business priorities change. Regular reviews can help keep the experience current and relevant.",
    },
];

const portfolioClients = [
    {
        initials: "LB",
        gradient: "#0b2e58",
        client: "LuminaBrand UK",
        country: "UK",
        project: "Multi-Page Amazon Brand Store",
        desc: "UK brand that saw a 3x increase in Amazon Store visits within the first month after a full storefront build with rich media and brand story.",
        category: "Store Creation",
        result: "3x store visits month 1",
        resultSub: "Traffic Growth",
    },
    {
        initials: "IE",
        gradient: "#0b2e58",
        client: "ItalianEssence Brand",
        country: "Italy",
        project: "Premium Lifestyle Storefront",
        desc: "Italian premium brand that doubled sales from store visits after Tech2Globe delivered a world-class Amazon storefront with lifestyle imagery.",
        category: "Store Creation",
        result: "2x sales from store visits",
        resultSub: "Conversion Growth",
    },
    {
        initials: "SS",
        gradient: "#0b2e58",
        client: "SeoulStyle Fashion",
        country: "South Korea",
        project: "K-Fashion Category Store",
        desc: "Korean fashion brand that reduced bounce rates significantly with a custom category-specific Amazon Store layout that drives higher shopper engagement.",
        category: "Store Creation",
        result: "Bounce rate -40%",
        resultSub: "UX Improvement",
    },
    {
        initials: "NA",
        gradient: "#0b2e58",
        client: "NordPeak Athletics",
        country: "Sweden",
        project: "Sports Brand Storefront",
        category: "Store Creation",
        result: "+5K monthly store visitors",
        resultSub: "Traffic Growth",
    },
    {
        initials: "TT",
        gradient: "#0b2e58",
        client: "TinyTales UK",
        country: "UK",
        project: "Baby & Kids Brand Store",
        category: "Store Creation",
        result: "4-page store, full brand story",
        resultSub: "Brand Building",
    },
];

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe designed our Amazon Store from scratch and it looks absolutely stunning. The modular layout, brand story integration, and product categorization are perfect. Store visits increased 3x in the first month.",
        name: "Diana Faulkner | LuminaBrand UK",
        location: "UK",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "We needed an Amazon Store that reflected our premium brand identity. Tech2Globe delivered a world-class storefront with rich media, lifestyle imagery, and excellent navigation. Sales from store visits doubled.",
        name: "Marco Bianchi | ItalianEssence Brand",
        location: "Italy",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Our Amazon Store built by Tech2Globe is our best brand asset on the platform. The custom page layout for each product category drives higher engagement and our bounce rate dropped dramatically.",
        name: "Rachel Kim | SeoulStyle Fashion",
        location: "South Korea",
    },
];

export default function StoreCreation() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Amazon Store Setup" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Amazon Store Setup" imageSrc="/images/services/service-inner/amazon-virtual-assistant-top-banner2.jpg" />
                            <div className={Style.ContentDiv}>
                                <h2 className={`${Style.headingText} pb-3`}>
                                    Amazon Store Setup Service for a Stronger Brand Presence
                                </h2>
                                <p className="para-text">
                                    Selling on Amazon gives your products access to millions of shoppers, but getting noticed in a crowded marketplace can be difficult. A well-designed Amazon Brand Store gives your business a dedicated space to present its products, tell its story, and help customers discover more of what you offer.
                                </p>
                                <p className="para-text">
                                    Tech2Globe provides <strong>Amazon store setup service</strong> for brands that want a professional, organized, and engaging presence on Amazon. From planning the Store structure and designing its pages to organizing products and preparing the final experience for launch, we bring strategy, creative design, and ecommerce expertise together.
                                </p>
                                <p className="para-text">
                                    The goal is simple: create an Amazon Store that feels like a natural extension of your brand while making the shopping journey easier for customers.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaShoppingBag />
                                    </span>
                                    What Is an Amazon Brand Store?
                                </h2>
                                <p className="para-text">
                                    An Amazon Brand Store is a dedicated destination within Amazon where eligible brands can showcase their products and create a branded shopping experience.
                                </p>
                                <p className="para-text">
                                    Instead of relying only on individual product listings, a Store allows customers to explore different products, categories, collections, and brand content in one place. It can also give brands more room to communicate their identity and guide shoppers toward relevant products.
                                </p>
                                <p className="para-text">
                                    Creating an effective Store involves more than adding products to a page. The structure, navigation, imagery, messaging, and product organization all influence how easily customers can understand and explore your brand.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaLightbulb />
                                    </span>
                                    Why Create an Amazon Store for Your Brand?
                                </h2>
                                <p className="para-text">
                                    Imagine a shopper discovers one of your products and wants to see what else your brand offers.
                                </p>
                                <p className="para-text">
                                    Without a clear destination, they may have to search through Amazon themselves. A well-organized Brand Store gives them a simpler way to continue exploring.
                                </p>
                                <p className="para-text">A professionally planned Store can help you:</p>
                                <ul>
                                    <li>Present your brand in a consistent way</li>
                                    <li>Organize products into logical categories</li>
                                    <li>Introduce shoppers to your wider product range</li>
                                    <li>Highlight new launches and collections</li>
                                    <li>Tell your brand story</li>
                                    <li>Create a more organized shopping experience</li>
                                    <li>Provide a destination for relevant Amazon advertising traffic</li>
                                </ul>
                                <p className="para-text">
                                    It can also help turn a collection of individual listings into a more connected brand experience.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaLayerGroup />
                                    </span>
                                    Our Amazon Store Setup Services
                                </h2>
                                <p className="para-text">
                                    Every brand has a different catalog, audience, and visual identity. That&apos;s why we don&apos;t use the same Store structure for everyone.
                                </p>

                                <div className={`${Style.PageAccordion} accordion`} id="accordionSection1">
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
                                                Store Strategy and Structure
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionSection1"
                                        >
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="para-text">
                                                    We start by understanding your products, brand positioning, target audience, and business objectives.
                                                </p>
                                                <p className="para-text mb-0">
                                                    From there, we plan the Store architecture, categories, navigation, and page hierarchy. The objective is to make it easy for shoppers to understand where they are and where they can go next.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

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
                                                Custom Store Design
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionSection1"
                                        >
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="para-text">
                                                    Your Store should look like your brand, not a generic Amazon template.
                                                </p>
                                                <p className="para-text">
                                                    Our designers work with your existing brand identity to create a consistent visual experience across the Store. This includes page layouts, imagery, typography, colors, content placement, and product presentation.
                                                </p>
                                                <p className="para-text mb-0">
                                                    The design is created with both aesthetics and usability in mind.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

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
                                                Product and Category Organization
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionSection1"
                                        >
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="para-text">
                                                    A growing catalog can become difficult to navigate without a clear structure.
                                                </p>
                                                <p className="para-text">
                                                    We organize products into meaningful categories and collections based on how customers are likely to browse. This can help shoppers move from one product to related products without feeling lost.
                                                </p>
                                                <p className="para-text mb-0">
                                                    Where appropriate, we can also highlight best sellers, new products, seasonal collections, or specific product ranges.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

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
                                                Brand Storytelling
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseFour"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingFour"
                                            data-bs-parent="#accordionSection1"
                                        >
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="para-text">
                                                    People don&apos;t only buy products. They also connect with the brands behind them.
                                                </p>
                                                <p className="para-text">
                                                    Your Amazon Store gives you an opportunity to communicate what your business stands for and what makes your products different.
                                                </p>
                                                <p className="para-text mb-0">
                                                    We use clear messaging, product-focused visuals, lifestyle imagery, and other creative elements to tell your story without taking attention away from the products.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

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
                                                Store Build and Launch
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseFive"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingFive"
                                            data-bs-parent="#accordionSection1"
                                        >
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="para-text">
                                                    Once the strategy, design, and content are approved, the Store is built using Amazon&apos;s available Store features and content modules.
                                                </p>
                                                <p className="para-text mb-0">
                                                    Before launch, we review the complete experience to identify issues with navigation, product links, content, imagery, layout, and overall consistency.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${Style.AccordionItem} accordion-item`}>
                                        <h2 className="accordion-header" id="headingSix">
                                            <button
                                                className={`${Style.AccordionButton} accordion-button collapsed`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSix"
                                                aria-expanded="false"
                                                aria-controls="collapseSix"
                                            >
                                                Ongoing Store Updates
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseSix"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingSix"
                                            data-bs-parent="#accordionSection1"
                                        >
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="para-text">
                                                    Your Amazon presence should evolve with your business.
                                                </p>
                                                <p className="para-text">
                                                    New products are launched. Collections change. Seasonal campaigns come and go. Your Store should be able to keep up.
                                                </p>
                                                <p className="para-text mb-0">
                                                    We can help refresh Store content and organization as your catalog and <a href="/amazon-marketing-services" className="text-decoration-underline fw-normal">marketing</a> priorities develop.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaCogs />
                                    </span>
                                    How Our Amazon Store Setup Process Works
                                </h2>
                                <p className="para-text">
                                    A clear process keeps the project organized and helps ensure that the final Store reflects your business goals.
                                </p>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <div className={Style.CardIcon} aria-hidden="true">
                                                <FaSearch />
                                            </div>
                                            <div className={Style.WaCardBody}>
                                                <h5>Understand Your Brand</h5>
                                                <p>We review your brand, products, catalog, audience, competitors, and objectives.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <div className={Style.CardIcon} aria-hidden="true">
                                                <FaSitemap />
                                            </div>
                                            <div className={Style.WaCardBody}>
                                                <h5>Plan the Experience</h5>
                                                <p>We determine how the Store should be organized, including categories, navigation, pages, and product groupings.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <div className={Style.CardIcon} aria-hidden="true">
                                                <FaPaintBrush />
                                            </div>
                                            <div className={Style.WaCardBody}>
                                                <h5>Create the Design</h5>
                                                <p>Our creative team develops the visual direction and content structure based on your brand identity and customer journey.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <div className={Style.CardIcon} aria-hidden="true">
                                                <FaStore />
                                            </div>
                                            <div className={Style.WaCardBody}>
                                                <h5>Build the Store</h5>
                                                <p>The approved layouts and content are implemented within Amazon&apos;s Store environment.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <div className={Style.CardIcon} aria-hidden="true">
                                                <FaClipboardCheck />
                                            </div>
                                            <div className={Style.WaCardBody}>
                                                <h5>Review and Test</h5>
                                                <p>We check product links, navigation, content accuracy, visual consistency, page layouts, and the overall shopping experience.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <div className={Style.CardIcon} aria-hidden="true">
                                                <FaRocket />
                                            </div>
                                            <div className={Style.WaCardBody}>
                                                <h5>Launch and Improve</h5>
                                                <p>After publishing, the Store can be reviewed using available performance data to identify opportunities for future improvements.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaStar />
                                    </span>
                                    What Makes an Effective Amazon Brand Store?
                                </h2>
                                <p className="para-text">
                                    A good Store should make browsing feel effortless.
                                </p>
                                <p className="para-text">
                                    That starts with clear navigation. Customers should be able to understand the different sections without having to search for what they need.
                                </p>
                                <p className="para-text">
                                    It also needs consistent branding. Your colors, imagery, tone, and messaging should work together across every page.
                                </p>
                                <p className="para-text">
                                    Product organization matters just as much. Related products should be grouped logically so customers can discover more of your catalog.
                                </p>
                                <p className="para-text">
                                    Finally, every section should have a purpose. Instead of filling the Store with unnecessary graphics or text, the content should help customers understand your products, your brand, or their next step.
                                </p>
                                <p className="para-text">
                                    The best Store experiences balance brand storytelling with practical shopping functionality.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaTrophy />
                                    </span>
                                    Benefits of Professional Amazon Store Design
                                </h2>
                                <p className="para-text">
                                    Setting up an Amazon Brand Store may look straightforward, but creating a useful experience requires more than uploading products.
                                </p>
                                <p className="para-text">A professional approach can help your brand create:</p>
                                <ul>
                                    <li>A stronger presence on Amazon</li>
                                    <li>Better product organization</li>
                                    <li>A consistent visual identity</li>
                                    <li>Easier product discovery</li>
                                    <li>A clearer customer journey</li>
                                    <li>A more effective destination for relevant campaigns</li>
                                    <li>A Store structure that can grow with your catalog</li>
                                </ul>
                                <p className="para-text">
                                    It also gives your business an opportunity to move beyond individual product listings and create a more complete brand experience within Amazon.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaHandshake />
                                    </span>
                                    Why Choose Tech2Globe?
                                </h2>
                                <p className="para-text">
                                    Tech2Globe combines ecommerce knowledge, Amazon marketplace experience, creative design, content, and optimization to create Store experiences around real business objectives.
                                </p>
                                <p className="para-text">
                                    We look beyond individual pages and consider how your Store fits into your wider Amazon strategy, including your catalog, brand identity, customer journey, and advertising activity.
                                </p>
                                <p className="para-text">
                                    Whether you&apos;re launching your first Brand Store or looking to improve an existing one, our team can help transform your product catalog into a structured and engaging shopping destination.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaStore />
                                    </span>
                                    Build Your Amazon Brand Store With Tech2Globe
                                </h2>
                                <p className="para-text">
                                    Your Amazon Store should be more than a collection of product pages. It should give shoppers a clear path through your brand and make it easier to discover what you offer.
                                </p>
                                <p className="para-text">
                                    If you&apos;re ready to create a new Store or improve an existing one,{" "}
                                    <Link href="/contact-us" className="text-decoration-underline fw-bold">
                                        talk to Tech2Globe
                                    </Link>{" "}
                                    about your Amazon Store setup requirements. Our team can help you plan the structure, create the experience, and build a Store that supports your broader Amazon growth strategy.
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

            <ClientPortfolio clients={portfolioClients} />
            <ClientSlider testimonials={testimonials} />
            <FaqSection faqs={faqs} />
        </>
    )
};
