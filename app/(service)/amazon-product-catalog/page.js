import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import {
    FaClipboardList,
    FaExchangeAlt,
    FaTags,
    FaSitemap,
    FaClock,
    FaSyncAlt,
    FaExclamationTriangle,
} from "react-icons/fa";

export const metadata = {
    title: "Amazon Catalog Management Services | Tech2Globe",
    description:
        "Keep your Amazon product catalog accurate and organized with Tech2Globe. Get expert catalog management, SKU updates, product data, and error resolution.",
    keywords: [
        "Amazon catalog management services",
        "Amazon product catalog management",
        "Amazon SKU management",
        "Amazon catalog updates",
        "Amazon product data management",
        "Amazon catalog error resolution",
        "Amazon variation management"
    ],
    openGraph: {
        title: "Amazon Catalog Management Services | Tech2Globe",
        siteName: "Tech2Globe web Solutions LLP",
        description:
            "Keep your Amazon product catalog accurate and organized with Tech2Globe. Get expert catalog management, SKU updates, product data, and error resolution.",
        url: "https://stagenew.tech2globe.tech/amazon-product-catalog"
    },
    twitter: {
        card: "summary_large_image",
        title: "Amazon Catalog Management Services | Tech2Globe",
        description:
            "Keep your Amazon product catalog accurate and organized with Tech2Globe. Get expert catalog management, SKU updates, product data, and error resolution."
    },
    alternates: {
        canonical: "https://stagenew.tech2globe.tech/amazon-product-catalog"
    }
};

const pageHeaderData = {
    title: "Amazon Catalog Management Services",
    description:
        "Keep your Amazon product catalog accurate and organized with Tech2Globe. Get expert catalog management, SKU updates, product data, and error resolution.",
    buttonText: "Contact us",
    buttonLink: "/contact-us",
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

const faqs = [
    {
        "id": "One",
        "question": "What is Amazon catalog management?",
        "answer": "Amazon catalog management involves creating, organizing, updating, reviewing, and maintaining product information within an Amazon catalog."
    },
    {
        "id": "Two",
        "question": "Why is Amazon catalog management important?",
        "answer": "Accurate catalog information helps businesses maintain consistent product data, organize SKUs, reduce errors, and provide shoppers with clearer product information."
    },
    {
        "id": "Three",
        "question": "Can you manage large Amazon catalogs?",
        "answer": "Yes. Catalog management processes can be structured around large product ranges, including businesses with hundreds or thousands of SKUs."
    },
    {
        "id": "Four",
        "question": "Can you update existing Amazon product information?",
        "answer": "Yes. Product information can be reviewed and updated when details such as descriptions, specifications, attributes, images, or other listing information change."
    },
    {
        "id": "Five",
        "question": "Do you manage product variations?",
        "answer": "Yes. Variation-related information can be reviewed and managed to help maintain accurate relationships between products and their available options."
    },
    {
        "id": "Six",
        "question": "Can you help resolve catalog errors?",
        "answer": "Yes. We can review catalog information to identify issues such as missing data, inconsistent attributes, categorization problems, and other product information errors, then work through the required corrections."
    },
    {
        "id": "Seven",
        "question": "How often should an Amazon catalog be updated?",
        "answer": "There is no single schedule that works for every business. Catalogs should be reviewed whenever products, specifications, pricing-related information, packaging, images, or other relevant details change. Businesses with large or frequently changing catalogs may benefit from ongoing maintenance."
    },
    {
        "id": "Eight",
        "question": "Can catalog management be outsourced?",
        "answer": "Yes. Outsourcing catalog operations can give businesses access to dedicated resources for repetitive and detail-oriented product data tasks while internal teams focus on strategy and growth."
    }
];

const portfolioClients = [
    {
        initials: "PD",
        gradient: "#0b2e58",
        client: "ProGear Direct USA",
        country: "USA",
        project: "1,000+ ASIN Catalog Management",
        desc: "US sports gear brand with 1,000+ ASINs that relies on Tech2Globe for listing creation, variation setups, updates, and complete catalog health maintenance.",
        category: "Catalog Management",
        result: "Ongoing monthly management",
        resultSub: "Scalable Operations",
    },
    {
        initials: "TH",
        gradient: "#0b2e58",
        client: "TokyoHome Goods",
        country: "Japan",
        project: "Full Catalog Error Fix",
        desc: "Japanese home goods seller that eliminated all suppressed listings after Tech2Globe cleaned errors, fixed attributes, and fully rebuilt the product catalog.",
        category: "Catalog Management",
        result: "Zero suppressed listings",
        resultSub: "Catalog Health",
    },
    {
        initials: "IL",
        gradient: "#0b2e58",
        client: "IrishLinen House",
        country: "Ireland",
        project: "Ongoing Catalog Maintenance",
        desc: "Irish linen brand that maintains a 100% healthy Amazon catalog with efficient handling of launches, seasonal updates, and variation merges.",
        category: "Catalog Management",
        result: "100% catalog health",
        resultSub: "System Stability",
    },
    {
        initials: "NK",
        gradient: "#0b2e58",
        client: "NordicKids Denmark",
        country: "Denmark",
        project: "New Launch Catalog Setup",
        category: "Catalog Management",
        result: "50 new ASINs/month",
        resultSub: "Launch Velocity",
    },
    {
        initials: "SA",
        gradient: "#0b2e58",
        client: "StyleMax Australia",
        country: "Australia",
        project: "Variation Tree Consolidation",
        category: "Catalog Management",
        result: "Parent-child fixed for 300 SKUs",
        resultSub: "Structure Optimization",
    },
];

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe manages our entire product catalog of 1,000+ ASINs. Listing creation, updates, variation setups, and catalog health maintenance — all handled with precision and speed. Truly a game-changer.",
        name: "Ethan Walsh | ProGear Direct USA",
        location: "USA",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Our catalog had hundreds of errors — wrong attributes, missing images, incorrect categories. Tech2Globe cleaned everything up and rebuilt our catalog properly. Zero suppressed listings since.",
        name: "Hana Kobayashi | TokyoHome Goods",
        location: "Japan",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Catalog management was our biggest bottleneck. Tech2Globe's team handles all new product launches, seasonal updates, and variation merges efficiently and accurately. Our catalog is always 100% healthy.",
        name: "Sandra O'Brien | IrishLinen House",
        location: "Ireland",
    },
];

export default function AmazonProductCatalog() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Amazon Catalog Management" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Amazon Catalog Management" imageSrc={"/images/services/service-inner/amazon-virtual-assistant-top-banner2.jpg"} />
                            <div className={Style.ContentDiv}>
                                <h2 className={`${Style.headingText} pb-3`}>
                                    Amazon Catalog Management Services for Accurate Product Data
                                </h2>
                                <p className="para-text">
                                    Managing an Amazon catalog becomes increasingly difficult as your product range grows. New SKUs need to be added, product information changes, variations need to stay organized, and errors can appear across listings. Even a small mistake in product data can create confusion for shoppers or make it harder to manage your catalog efficiently.
                                </p>
                                <p className="para-text">
                                    Tech2Globe provides <strong>Amazon catalog management services</strong> to help brands keep their product information accurate, organized, consistent, and up to date.
                                </p>
                                <p className="para-text">
                                    From product data and SKU organization to catalog updates, categorization, content maintenance, and error resolution, our team helps businesses manage the operational side of their Amazon catalog while they focus on growing their marketplace presence.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <img className={`${Style.innerIcons} lazyload pr-20 content-imag`} src="/images/services/customer-acatalog.png" alt="What Is Amazon Catalog Management" />
                                    What Is Amazon Catalog Management?
                                </h2>
                                <p className="para-text">
                                    Amazon catalog management is the process of creating, organizing, maintaining, and updating the product information associated with a brand&apos;s Amazon listings.
                                </p>
                                <p className="para-text">
                                    A product catalog can include information such as product titles, descriptions, images, specifications, variations, categories, attributes, identifiers, and other listing data.
                                </p>
                                <p className="para-text">
                                    For a business with a handful of products, managing this information may be relatively simple. But when a catalog contains hundreds or thousands of SKUs, keeping everything accurate becomes a continuous operational task.
                                </p>
                                <p className="para-text">
                                    A structured approach helps ensure that product information remains consistent and that changes are handled correctly across the catalog.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <img className={`${Style.innerIcons} lazyload pr-20 content-imag`} src="/images/services/service-inner/detail.png" alt="Why Accurate Amazon Catalog Data Matters" />
                                    Why Accurate Amazon Catalog Data Matters
                                </h2>
                                <p className="para-text">
                                    Think about a customer searching for a product and finding incomplete specifications, the wrong variation, outdated information, or inconsistent images.
                                </p>
                                <p className="para-text">
                                    Even when the product itself is good, poor catalog information can create doubt.
                                </p>
                                <p className="para-text">
                                    Accurate product data helps shoppers understand what they are considering before they make a purchase. It also makes the catalog easier for businesses to manage as products, variations, and information change.
                                </p>
                                <p className="para-text">Effective catalog management can help businesses:</p>
                                <ul>
                                    <li>Keep product information current</li>
                                    <li>Maintain consistent listing content</li>
                                    <li>Organize products and variations properly</li>
                                    <li>Reduce catalog errors</li>
                                    <li>Improve product discoverability</li>
                                    <li>Make large catalogs easier to manage</li>
                                    <li>Maintain a consistent brand presentation</li>
                                    <li>Support smoother day-to-day Amazon operations</li>
                                </ul>
                                <p className="para-text">
                                    Catalog quality is therefore not just an administrative concern. It is part of the overall customer experience.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <img className={`${Style.innerIcons} lazyload pr-20 content-imag`} src="/images/services/clicker.png" alt="Our Amazon Catalog Management Services" />
                                    Our Amazon Catalog Management Services
                                </h2>
                                <p className="para-text">
                                    Every catalog has its own structure and challenges. Our approach is designed around the size, complexity, and requirements of your product range.
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
                                                Product Data Management
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
                                                    Product information needs to be accurate and consistent across the catalog.
                                                </p>
                                                <p className="para-text">
                                                    We can manage and update key product details, including titles, descriptions, specifications, attributes, identifiers, and other relevant information.
                                                </p>
                                                <p className="para-text mb-0">
                                                    Our team works with the available product data to help maintain a clean and organized catalog.
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
                                                SKU and Catalog Organization
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
                                                    Large catalogs can quickly become difficult to control when products and variations are not organized properly.
                                                </p>
                                                <p className="para-text">
                                                    We help structure product information and manage SKU-level details so that products, variations, and related information are easier to maintain.
                                                </p>
                                                <p className="para-text mb-0">
                                                    This is particularly useful for businesses managing extensive product ranges or frequent catalog changes.
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
                                                Product Categorization
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
                                                    Correct categorization helps keep products organized and can make catalog management more efficient.
                                                </p>
                                                <p className="para-text">
                                                    We review product information and assign relevant categories and attributes based on the applicable Amazon requirements and available catalog structure.
                                                </p>
                                                <p className="para-text mb-0">
                                                    The objective is to make sure products are represented as accurately as possible within the marketplace.
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
                                                Listing Content Updates
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
                                                    Product information changes over time.
                                                </p>
                                                <p className="para-text">
                                                    A product may receive a new specification, packaging update, feature, image, or description. Seasonal information may also need to be updated.
                                                </p>
                                                <p className="para-text mb-0">
                                                    We can help manage these changes so that your Amazon catalog remains aligned with your latest product information.
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
                                                Variation Management
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
                                                    Products with different sizes, colors, styles, pack quantities, or other options require careful organization.
                                                </p>
                                                <p className="para-text mb-0">
                                                    We help manage variation-related information and review product relationships to support a clearer shopping experience and cleaner catalog structure.
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
                                                Catalog Audits and Error Resolution
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
                                                    Catalog problems can be difficult to identify when you&apos;re managing hundreds of products.
                                                </p>
                                                <p className="para-text">
                                                    We can review product information to identify inconsistencies, missing data, incorrect attributes, categorization issues, and other catalog-related problems.
                                                </p>
                                                <p className="para-text mb-0">
                                                    Where appropriate, we then work through the required updates or corrections.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <img className={`${Style.innerIcons} lazyload pr-20 content-imag`} src="/images/services/service-inner/customer-acatalog.png" alt="How Our Amazon Catalog Management Process Works" />
                                    How Our Amazon Catalog Management Process Works
                                </h2>
                                <p className="para-text">
                                    Managing a catalog efficiently requires a repeatable process rather than occasional updates.
                                </p>

                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/examine.png"
                                                alt="Catalog Assessment"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Catalog Assessment</h5>
                                                <p>We begin by reviewing the existing catalog and understanding its size, structure, product types, variations, and current requirements. This helps identify areas that need attention.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/medical-research.png"
                                                alt="Data Collection and Validation"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Data Collection and Validation</h5>
                                                <p>We gather the relevant product information and review it for completeness and consistency. Where information is missing or unclear, we identify it for clarification before making updates.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/action-plan.png"
                                                alt="Catalog Updates"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Catalog Updates</h5>
                                                <p>Once the information is validated, the required product data, categorization, attributes, content, and other details are updated according to the project requirements.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/anti-virus.png"
                                                alt="Quality Checks"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Quality Checks</h5>
                                                <p>Changes are reviewed to catch inconsistencies, formatting issues, missing information, or other errors before the catalog is considered complete.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/strategy.png"
                                                alt="Ongoing Maintenance"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Ongoing Maintenance</h5>
                                                <p>Amazon catalogs are not static. New products are added, existing products change, and marketplace requirements can evolve. Ongoing support helps keep the catalog accurate as your business grows.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <img className={`${Style.innerIcons} lazyload pr-20 content-imag`} src="/images/services/service-inner/list.png" alt="Common Amazon Catalog Problems" />
                                    Common Amazon Catalog Problems We Help With
                                </h2>
                                <p className="para-text">
                                    Managing product information at scale can lead to a variety of issues. Some common challenges include:
                                </p>
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaClipboardList />
                                            </div>
                                            <h5 className="fw-bold mb-2">Incomplete product information</h5>
                                            <p className="text-muted medium mb-0">Important attributes or specifications may be missing from listings.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaExchangeAlt />
                                            </div>
                                            <h5 className="fw-bold mb-2">Inconsistent product data</h5>
                                            <p className="text-muted medium mb-0">Different products may use inconsistent formats, terminology, or descriptions.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaTags />
                                            </div>
                                            <h5 className="fw-bold mb-2">Incorrect categorization</h5>
                                            <p className="text-muted medium mb-0">Products may be assigned to categories or attributes that don&apos;t accurately represent them.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaSitemap />
                                            </div>
                                            <h5 className="fw-bold mb-2">Variation issues</h5>
                                            <p className="text-muted medium mb-0">Products with multiple options may not be organized clearly.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaClock />
                                            </div>
                                            <h5 className="fw-bold mb-2">Outdated content</h5>
                                            <p className="text-muted medium mb-0">Product information may no longer match the current product.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaSyncAlt />
                                            </div>
                                            <h5 className="fw-bold mb-2">Large-scale updates</h5>
                                            <p className="text-muted medium mb-0">Updating hundreds or thousands of products manually can consume significant time and resources.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaExclamationTriangle />
                                            </div>
                                            <h5 className="fw-bold mb-2">Catalog errors</h5>
                                            <p className="text-muted medium mb-0">Existing errors can be difficult to identify without a systematic review.</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="para-text">
                                    A dedicated catalog management process can make these challenges easier to identify and resolve.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <img className={`${Style.innerIcons} lazyload pr-20 content-imag`} src="/images/services/service-inner/goal.png" alt="Benefits of Professional Amazon Catalog Management" />
                                    Benefits of Professional Amazon Catalog Management
                                </h2>
                                <p className="para-text">
                                    Managing your catalog internally can become increasingly demanding as your product range expands.
                                </p>
                                <p className="para-text">Professional support can help your business maintain:</p>
                                <ul>
                                    <li>More consistent product information</li>
                                    <li>Better-organized SKUs</li>
                                    <li>Cleaner catalog structures</li>
                                    <li>More accurate product attributes</li>
                                    <li>Faster handling of catalog updates</li>
                                    <li>Better visibility into catalog issues</li>
                                    <li>A more consistent customer experience</li>
                                </ul>
                                <p className="para-text">
                                    It can also free your internal team from repetitive catalog tasks and allow them to focus on broader marketplace and business priorities.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <img className={`${Style.innerIcons} lazyload pr-20 content-imag`} src="/images/services/service-inner/clicker.png" alt="Why Choose Tech2Globe" />
                                    Why Choose Tech2Globe?
                                </h2>
                                <p className="para-text">
                                    Tech2Globe combines <a href="/e-commerce-development" className="text-decoration-underline fw-normal">ecommerce</a> experience, Amazon marketplace knowledge, catalog operations, content management, and quality control to support businesses with complex product catalogs.
                                </p>
                                <p className="para-text">
                                    We understand that catalog management is not simply about changing product information. It requires attention to detail, consistency, process management, and an understanding of how individual product records fit into the wider catalog.
                                </p>
                                <p className="para-text">
                                    Whether you are launching a new product range, managing a growing catalog, correcting existing data issues, or looking for ongoing operational support, our team can adapt the workflow to your requirements.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <img className={`${Style.innerIcons} lazyload pr-20 content-imag`} src="/images/services/service-inner/flag.png" alt="Keep Your Amazon Catalog Accurate and Organized" />
                                    Keep Your Amazon Catalog Accurate and Organized
                                </h2>
                                <p className="para-text">
                                    A well-managed catalog gives your Amazon business a stronger operational foundation.
                                </p>
                                <p className="para-text">
                                    When product information is accurate, variations are organized, and updates are handled consistently, your team can spend less time dealing with repetitive catalog problems and more time focusing on growth.
                                </p>
                                <p className="para-text">
                                    Need help managing a growing Amazon catalog?{" "}
                                    <Link href="/contact-us" className="text-decoration-underline fw-bold">
                                        Contact Tech2Globe
                                    </Link>{" "}
                                    to discuss your product range and catalog management requirements.
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
