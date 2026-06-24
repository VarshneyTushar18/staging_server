import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";

export const metadata = {
    title: "Magento product upload Services | Magento Data Entry Services",
    description:
        "Magento product upload and data entry services to streamline your eCommerce operations, ensuring accurate and optimized product listings for better sales.",
    keywords:
        "magento product entry, magento data entry, magento product image upload, magento product data entry services, magento bulk product upload, outsource magento product entry, Magento Product Upload, Magento Product Upload Services, Magento Product Listing, Magento Product Listing Services",
    openGraph: {
        title: "Magento product upload Services | Magento Data Entry Services",
        siteName: "Tech2Globe Web Solutions",
        url: "https://stagenew.tech2globe.tech/magento-product-upload-services",
        description:
            "Magento product upload and data entry services to streamline your eCommerce operations, ensuring accurate and optimized product listings for better sales.",
        images: ["https://stagenew.tech2globe.tech/images/services/magentoproductUpload.jpg"],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Magento product upload Services | Magento Data Entry Services",
        description:
            "Magento product upload and data entry services to streamline your eCommerce operations, ensuring accurate and optimized product listings for better sales.",
        images: ["https://stagenew.tech2globe.tech/images/services/magentoproductUpload.jpg"],
    },
    alternates: {
        canonical: "https://stagenew.tech2globe.tech/magento-product-upload-services",
    },
};

const pageHeaderData = {
    title: "Magento Product Upload Services",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};

const resources = [
    { id: 1, name: "Portfolio", path: "/portfolio" },
    { id: 2, name: "Case Studies", path: "/case-studies" },
    { id: 3, name: "Testimonial", path: "/testimonial" },
];

const usefulLinks = [
    { id: 4, name: "Restaurant Menu Entry Services", path: "/restaurant-menu-entry-services" },
    { id: 5, name: "Financial Data Entry Services", path: "/financial-data-entry-services" },
    { id: 6, name: "Translation Services", path: "/translation-services" },
    { id: 7, name: "Catalog Management", path: "/catalog-management-services" },
    { id: 8, name: "Data Processing Services", path: "/data-processing-services" },
    { id: 9, name: "Data Product Entry", path: "/product-data-entry-services" },
    { id: 10, name: "Data Entry Services", path: "/data-entry-services" },
    { id: 11, name: "Data Mining Services", path: "/data-mining-services" },
    { id: 12, name: "Data Conversion Services", path: "/data-conversion-services" },
    { id: 13, name: "Indexing Services", path: "/indexing-services" },
    { id: 14, name: "Data Analytics Services", path: "/data-analytics-services" },
    { id: 15, name: "Order Processing Services", path: "/order-processing-services" },
    { id: 16, name: "Magento Product Upload Services", path: "/magento-product-upload-services" }
];


const sidebarSections = [
    { heading: "Resources", links: resources },
    { heading: "Useful Links", links: usefulLinks },
];

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Magento is a powerful but complex platform, and Tech2Globe proved they know it exceptionally well. They uploaded our 5,000+ products including configurable and grouped product types with perfect attribute mapping. Our catalog is now structured better than ever before.",
        name: "Neil Robertson | BuildPro Australia",
        location: "Australia",
      },
      {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "We were dealing with frequent errors from our previous data entry vendor on our Magento store. Switching to Tech2Globe was transformative. Their Magento specialists ensured all products were uploaded with correct custom attributes, tier pricing, and category assignments.",
        name: "Fatima Al-Rashid | ElectroSouq Saudi Arabia",
        location: "Saudi Arabia",
      },
      {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe handled a bulk upload of over 20,000 SKUs onto our Magento 2 store. The process was smooth, their team asked the right questions upfront, and the final result was a perfectly organized product catalog with zero duplicate or missing data.",
        name: "David Klaassen | FashionFirst Netherlands",
        location: "Netherlands",
      },
      {
        id: 4,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Our Magento store required multi-store product setups across three regions. Tech2Globe managed the complexity brilliantly — different pricing, different descriptions, and different category hierarchies for each region. Their expertise saved us months of internal effort.",
        name: "Pooja Nair | GlobalGoods India",
        location: "India",
      },
      {
        id: 5,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "I've worked with several outsourcing vendors for Magento product uploads, but Tech2Globe stands out. Their quality checks are thorough, they follow our style guide religiously, and the SEO optimization on each listing has clearly helped our organic traffic grow.",
        name: "Marc Dubois | MaisonPlus France",
        location: "France",
      },
];


const portfolioClients = [
    {
        initials: "ER",
        gradient: "#0b2e58",
        client: "Enterprise Retail Corporation",
        country: "Mexico",
        project: "Large-Scale Magento Implementation",
        desc: "Managed enterprise-level Magento installation with advanced product configurations. Set up hierarchical category structures, managed 200+ product attributes, and implemented custom product types. Optimized database performance and configured multi-language product presentations.",
        category: "Magento Development",
        result: "35,000+ products configured",
        resultSub: "Performance Optimization",
      },
      {
        initials: "IE",
        gradient: "#0b2e58",
        client: "Industrial Equipment Supplier",
        country: "Brazil",
        project: "B2B Magento Commerce",
        desc: "Configured B2B Magento store with complex pricing structures and customer-specific catalogs. Implemented custom product attributes for technical specifications and bulk order management. Integrated ERP system for real-time inventory and order processing.",
        category: "Magento Development",
        result: "12,000+ industrial products catalogued",
        resultSub: "B2B Automation",
      },
      {
        initials: "HP",
        gradient: "#0b2e58",
        client: "Healthcare Products Distributor",
        country: "ZA",
        project: "Regulated Product Management",
        desc: "Managed healthcare product catalog with strict compliance and certification requirements. Implemented batch/lot tracking, expiration date management, and regulatory documentation. Configured country-specific pricing and shipping restrictions for HIPAA compliance.",
        category: "Magento Development",
        result: "8,500+ healthcare products uploaded",
        resultSub: "Compliance Management",
      },
      {
        initials: "CE",
        gradient: "#0b2e58",
        client: "Consumer Electronics Marketplace",
        country: "UAE",
        project: "Magento Multi-Store Platform",
        desc: "Set up multi-store Magento architecture serving Middle East and North Africa regions. Configured region-specific currencies, languages, and payment methods. Implemented dynamic pricing based on regional demand and managed inventory across warehouse locations.",
        category: "Magento Development",
        result: "22,000+ electronics SKUs",
        resultSub: "Multi-Store Architecture",
      },
      {
        initials: "PD",
        gradient: "#0b2e58",
        client: "Pharmaceutical Distribution Network",
        country: "India",
        project: "Complex B2B Product Management",
        desc: "Developed sophisticated Magento setup for pharmaceutical distributor with serialization and traceability requirements. Implemented custom order management, wholesale pricing tiers, and compliance documentation workflows. Integrated with supply chain management system.",
        category: "Magento Development",
        result: "15,000+ pharmaceutical products",
        resultSub: "Supply Chain Optimization",
      },
];

export default function MagentoProductUploadServices() {
    return (

        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Magento Product Upload Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Magento Product Upload Services" imageSrc="/images/services/service-inner/ecommerce-banner-1.jpg" />
                            <div className={Style.ContentDiv}>
                                <p>Today&apos;s hot items in your online store are often tomorrow&apos;s obsolete items. Your product offerings and ‘What’s new’ need to be updated almost on daily basis. New categories and SKUs are added all the time on your ecommerce store. Managing of hundreds of thousands of products with dynamic features in your Magento store is no mean task. What you need is, a skilled team with proven methodology in <strong>Magento product upload services</strong>.</p>
                                <p>With huge experience of over 5 years, the team of Magento product entry experts at Tech2Globe, can enable your store visitors enriching and wholesome online shopping experience. Tech2Globe is utterly adept at inserting and updating products to your Magento eCommerce Store, setting up categories and sub-categories, customizing product and price attributes, providing product descriptions paired with edited and enhanced images, handling specials, etc., to effectively communicate and engage your end-users and raise the conversion rate of your eCommerce store.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"> Key features of our Magento product upload and management include:</h5>
                                <p>Creating and Managing Categories : We help you in creating and adding new categories to your online store. Additionally, we manage the prevailing categories in your Magento catalog.</p>
                                <p>We input the category name and category description besides the images, and display choices to switch the display order of your categories. We also help you to edit, delete, and move the categories to effectively manage and display your inventory.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2">Magento Product Upload</h5>
                                <p>We help you add new products to make them ready to sell on by inputting your Magento catalog. We quickly and efficiently enter all the required data and information specific to the product, viz., product’s name, long and short descriptions, weight, availability status of the product, item price, special price and tax class if the item is taxable, product’s image, product’s URL, etc., to attract the visitor to the specific information page of the product.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2">Managing Product Types</h5>
                                <p>We have the required expertise in configuring complex products. We help you manage your product types, including:</p>
                                <ul>
                                    <li>Simple products comprising physical articles, largely sold as single units or in fixed numbers</li>
                                    <li>Grouped products that are sold as a set</li>
                                    <li>Bundled items composed of simple product sets, sold together</li>
                                    <li>Configurable products involving variations in terms of color, size, etc.</li>
                                    <li>Gift card articles that are redeemable in your Magento store for products. They can be virtual, physical, or both.</li>
                                    <li>Virtual/downloadable items</li>
                                </ul>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2">Customizing Products Attributes</h5>
                                <p>We customize the product attributes to provide your store visitors a better and more user centered shopping experience. Our highly skilled Magento <a href="/online-data-entry-services" className="text-decoration-underline fw-bold">data entry experts</a> create a master options list including, size, color, model, version, manufacturing details, listing items for upselling and cross-selling, along with creating any other attributes that clearly define your product.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2">Creating ‘Special offers’ in Magento</h5>
                                <p>Our Magento experts can create ‘Special product offers’ in Magento. To effectively promote your business and engaging your customers to the store, Tech2Globe can set up special discounts for your store visitors in terms of promotional prices or seasonal discounts, etc.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2">End to End Magento Back Office Support</h5>
                                <p>Besides taking care of your required <a href="/content-management-system" className="text-decoration-underline fw-bold">content management</a> including adding /updating product descriptions, editing and retouching your product images, we also assist you with effective order entry, processing and order tracking, inventory support and management, accounting/book keeping, transaction, customer support services including email, phone and chat support, adding / moderating product reviews, competitor price monitoring, etc., These things helps you to keep your day-to-day store operations smooth and systematic.</p>
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
        </>
    )
};
