
import Style from "./style.module.css";
import Image from "next/image";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import { FaBookOpen, FaCalendarCheck, FaCamera, FaCube, FaDesktop, FaHome, FaImages, FaShareAlt, FaShieldAlt, FaShoppingCart, FaStar, FaStore, FaUsersCog, FaVrCardboard } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import "swiper/css";
import "swiper/css/pagination";
import "./custom.css";
import FurnitureModelingSlider from "@/app/components/services/modeling-rendering/ModelingRendering";
import BeforeAfterSlider from "@/app/components/services/BeforeAfterSlider/BeforeAfterSlider";

export const metadata = {
    title: "3D Furniture Modeling Services & Rendering | Tech2Globe",
    description:
        "Get professional 3D furniture modeling and rendering services for eCommerce, catalogs, AR/VR, product visualization, and marketing. Get a quote today.",
    keywords:
        "3D furniture modeling services, furniture 3D rendering, outsource 3D furniture modeling, 3D product modeling, furniture visualization, 3D rendering company",
    openGraph: {
        title: "3D Furniture Modeling Services & Rendering | Tech2Globe",
        description:
            "Get professional 3D furniture modeling and rendering services for eCommerce, catalogs, AR/VR, product visualization, and marketing. Get a quote today.",
        url: "https://stagenew.tech2globe.tech/3d-furniture-modeling-rendering-services",
        siteName: "Tech2Globe Web Solutions LLP",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "3D Furniture Modeling Services & Rendering | Tech2Globe",
        description:
            "Get professional 3D furniture modeling and rendering services for eCommerce, catalogs, AR/VR, product visualization, and marketing. Get a quote today.",
    },
    alternates: {
        canonical:
            "https://stagenew.tech2globe.tech/3d-furniture-modeling-rendering-services",
    },
};

const resources = [
    { id: 1, name: "Case Studies", path: "/case-studies" },
    { id: 2, name: "Clients", path: "/clients" },
    { id: 3, name: "Testimonial", path: "/testimonial" },
];

const sidebarSections = [
    { heading: "Resources", links: resources },
];

export default function FurnitureModeling() {

    const productsmodeling = [
        {
            image: "/images/services/service-inner/upholstered-furniture-.webp",
            title: "Upholstered Furniture",
            description: "Sofas, lounge chairs, ottomans, recliners, and other upholstered products with detailed fabrics, cushions, stitching, and finishes.",
        },
        {
            image: "/images/services/service-inner/outdoor-furniture.webp",
            title: "Outdoor Furniture",
            description: "Patio furniture, outdoor seating, tables, loungers, and other products designed for exterior environments.",
        },
        {
            image: "/images/services/service-inner/bedroom-furniture-.webp",
            title: "Bedroom Furniture",
            description: "Beds, nightstands, wardrobes, dressers, and other bedroom products.",
        },
        {
            image: "/images/services/service-inner/office--furniture-.webp",
            title: "Office Furniture",
            description: "Office chairs, desks, workstations, storage units, conference tables, and related products.",
        },
        {
            image: "/images/services/service-inner/bathroom-furniture-.webp",
            title: "Bathroom Furniture",
            description: "Bathroom cabinets, vanities, storage units, mirrors, and related furniture products.",
        },
        {
            image: "/images/services/service-inner/cabinet-furniture-.webp",
            title: "Cabinet Furniture",
            description: "Kitchen cabinets, storage cabinets, display units, and custom cabinetry.",
        },
        {
            image: "/images/services/service-inner/wooden-furniture-.webp",
            title: "Wooden Furniture",
            description: "Tables, chairs, beds, cabinets, shelves, and other wooden furniture with detailed material and surface textures.",
        },
        {
            image: "/images/services/service-inner/rugs-and-carpets.webp",
            title: "Lighting and Home Decor",
            description: "Lighting fixtures, decorative products, rugs, carpets, fabrics, and other products that complement furniture collections.",
        },
    ];

    const usecases = [
        {
            icon: <FaShoppingCart />,
            title: "eCommerce Product Pages",
            description: "Use realistic product renders and interactive 3D assets to give customers a better understanding of furniture before purchase.",
        },
        {
            icon: <FaStore />,
            title: "Amazon and Marketplace Content",
            description: "Create product visuals, A+ graphics, lifestyle imagery, and other digital assets for marketplace listings.",
        },
        {
            icon: <FaBookOpen />,
            title: "Product Catalogs",
            description: "Generate consistent product imagery for digital and print catalogs without arranging separate photography sessions for every product variation.",
        },
        {
            icon: <FaHome />,
            title: "Virtual Showrooms",
            description: "Present furniture inside digital environments where customers can explore products and different configurations.",
        },
        {
            icon: <FaShareAlt />,
            title: "Social Media Marketing",
            description: "Create lifestyle renders, product visuals, animations, and promotional content for social media campaigns.",
        },
        {
            icon: <FaDesktop />,
            title: "Sales Presentations",
            description: "Use detailed 3D furniture visuals in presentations, pitches, trade shows, and product demonstrations.",
        },
        {
            icon: <FaVrCardboard />,
            title: "AR and Virtual Product Experiences",
            description: "Use optimized 3D models to create interactive experiences that allow customers to explore furniture digitally and visualize products within their surroundings.",
        },
    ];

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.tech2globe.com/#organization",
                name: "Tech2Globe",
                url: "https://www.tech2globe.com/",
                email: "info@tech2globe.com",
                telephone: ["+1-516-858-5840", "+91-9899675039"],
                contactPoint: [
                    {
                        "@type": "ContactPoint",
                        contactType: "sales",
                        email: "info@tech2globe.com",
                        telephone: "+1-516-858-5840",
                        availableLanguage: ["English"],
                    },
                ],
            },
            {
                "@type": "WebSite",
                "@id": "https://www.tech2globe.com/#website",
                url: "https://www.tech2globe.com/",
                name: "Tech2Globe",
                publisher: {
                    "@id": "https://www.tech2globe.com/#organization",
                },
                inLanguage: "en",
            },
            {
                "@type": "WebPage",
                "@id": "https://www.tech2globe.com/3d-furniture-modeling-rendering-services#webpage",
                url: "https://www.tech2globe.com/3d-furniture-modeling-rendering-services",
                name: "3D Furniture Modeling Services & Rendering | Tech2Globe",
                description:
                    "Get professional 3D furniture modeling and rendering services for eCommerce, catalogs, AR/VR, product visualization, and marketing. Get a quote today.",
                isPartOf: {
                    "@id": "https://www.tech2globe.com/#website",
                },
                about: {
                    "@id": "https://www.tech2globe.com/3d-furniture-modeling-rendering-services#service",
                },
                publisher: {
                    "@id": "https://www.tech2globe.com/#organization",
                },
                breadcrumb: {
                    "@id": "https://www.tech2globe.com/3d-furniture-modeling-rendering-services#breadcrumb",
                },
                inLanguage: "en",
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tech2globe.com/3d-furniture-modeling-rendering-services#breadcrumb",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: "https://www.tech2globe.com/",
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "3D Furniture Modeling & Rendering Services",
                        item: "https://www.tech2globe.com/3d-furniture-modeling-rendering-services",
                    },
                ],
            },
            {
                "@type": "Service",
                "@id": "https://www.tech2globe.com/3d-furniture-modeling-rendering-services#service",
                name: "3D Furniture Modeling and Rendering Services",
                serviceType: "3D Furniture Modeling and Rendering Services",
                url: "https://www.tech2globe.com/3d-furniture-modeling-rendering-services",
                description:
                    "Create detailed, realistic 3D furniture models for eCommerce, product visualization, catalogs, marketing, AR, and virtual experiences. Tech2Globe provides professional 3D furniture modeling and rendering services that turn sketches, CAD drawings, product images, and design specifications into high-quality digital assets.",
                provider: {
                    "@id": "https://www.tech2globe.com/#organization",
                },
                mainEntityOfPage: {
                    "@id": "https://www.tech2globe.com/3d-furniture-modeling-rendering-services#webpage",
                },
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tech2globe.com/3d-furniture-modeling-rendering-services#faq",
                url: "https://www.tech2globe.com/3d-furniture-modeling-rendering-services",
                name: "3D Furniture Modeling & Rendering Services FAQs",
                isPartOf: {
                    "@id": "https://www.tech2globe.com/3d-furniture-modeling-rendering-services#webpage",
                },
                mainEntity: [
                    {
                        "@type": "Question",
                        name: "What is 3D furniture modeling?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "3D furniture modeling is the process of creating a digital three-dimensional representation of a furniture product. The model can include the product's shape, dimensions, materials, textures, colors, and other design details.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "What files do you need for 3D furniture modeling?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "You can provide CAD drawings, sketches, product photographs, technical specifications, reference images, dimensions, or existing 3D files. Our team reviews the available information and determines the best approach for creating the model.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Can you create 3D furniture models from photographs?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Yes. We can create furniture models using product photographs and reference images when suitable technical drawings or CAD files are not available. Additional dimensions and product specifications can help improve accuracy.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "What is the difference between 3D furniture modeling and rendering?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "3D modeling involves creating the digital three-dimensional furniture asset. Rendering uses the model to produce realistic images or visual scenes. A single model can be used to create multiple renders, views, animations, and other digital assets.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Can 3D furniture models be used for eCommerce?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Yes. 3D furniture models can support eCommerce product images, interactive product viewers, lifestyle scenes, product configurators, AR experiences, and other digital shopping experiences.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Can you create AR and VR-ready furniture models?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Yes. We create optimized 3D furniture assets for AR and VR applications based on project requirements. Supported formats can include GLB, USDZ, FBX, and OBJ.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "How long does 3D furniture modeling take?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "The timeline depends on product complexity, number of models, level of detail, materials, revisions, and required deliverables. After reviewing your project requirements, we can provide an estimated delivery timeline.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "How much do 3D furniture modeling services cost?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Pricing depends on the complexity of the furniture design, level of detail, number of products, materials, textures, rendering requirements, and final output. Contact our team with your requirements for a project-specific quote.",
                        },
                    },
                ],
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <div className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active position-relative">
                        <img src="images/services/service-inner/a-high-quality-3d-rendered-interior-scene.webp" className="d-block w-100" alt="Professional 3D Furniture Modeling" />
                        <div className="slide-overlay-2"></div>
                        <div className="carousel-caption centered-content">
                            <h2>Professional 3D Furniture Modeling Solutions</h2>
                            <p>Enhance buyer engagement and drive higher conversion rates with our high-quality 3D furniture rendering services.</p>
                            <a href="/contact-us" className="button-red mt-2 mx-0">
                                <span className="d-inline-flex align-items-center gap-2">
                                    <FaCalendarCheck aria-hidden="true" />
                                    Book Your Consultation
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <Breadcrumb parentName="Services" pageName="3d furniture modeling rendering services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className={Style.ContentDiv}>
                                <h2>3D Furniture Modeling Services</h2>
                                <p>Create detailed, realistic 3D furniture models for eCommerce, product visualization, .catalogs, marketing, AR, and virtual experiences. Tech2Globe provides professional 3D furniture modeling and rendering services that turn sketches, CAD drawings, product images, and design specifications into high-quality digital assets.</p>
                                <p>From individual furniture pieces to complete collections, our 3D artists create accurate models with realistic dimensions, materials, textures, colors, and finishes. These models can be used across websites, online stores, product catalogs, advertising campaigns, virtual showrooms, and AR/VR experiences.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h2>3D Furniture Modeling Services for eCommerce</h2>
                                <p>Selling furniture online can be challenging when customers cannot physically see or touch the product. High-quality 3D furniture models help bridge this gap by giving shoppers a clearer view of the product, its design, dimensions, materials, and finishes.</p>
                                <p>Our 3D furniture modeling services help furniture brands, manufacturers, retailers, and eCommerce businesses create reusable digital product assets. A single 3D model can support product images, lifestyle scenes, interactive product views, animations, AR experiences, and other marketing materials.</p>
                                <p>Whether you need a model for a sofa, chair, table, bed, cabinet, outdoor furniture, or an entire product collection, we create assets based on your specifications and intended use.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Outsource 3D Furniture Modeling Services to Tech2Globe</h2>
                                <p>Get accurate and market-ready furniture models without investing in an in-house 3D production team. Tech2Globe creates detailed 3D furniture models from CAD drawings, sketches, product photographs, reference images, technical specifications, and existing design files.</p>
                                <p>Our team can handle both simple and highly detailed furniture designs while maintaining consistency across multiple products and variations. We can also create different materials, colors, finishes, and configurations from the same base model.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <div className={`${Style.ProcessContainer} mb-3 pt-3 pb-1`}>

                                    <div className={Style.ProcessColumnInput}>
                                        <div className={Style.ColumnTitle}>What You Share</div>
                                        <div className={Style.Item}>Product reference images</div>
                                        <div className={Style.Item}>Sketches or CAD drawings</div>
                                        <div className={Style.Item}>Product dimensions</div>
                                        <div className={Style.Item}>Design specifications</div>
                                        <div className={Style.Item}>Material and finish references</div>
                                        <div className={Style.Item}>Existing 3D files, when available</div>
                                    </div>

                                    <div className={Style.Arrow}>→</div>

                                    <div className={Style.ProcessColumnOutput}>
                                        <div className={Style.ColumnTitle}>What We Deliver</div>
                                        <div className={Style.Item}>Detailed 3D furniture models</div>
                                        <div className={Style.Item}>Photorealistic product renders</div>
                                        <div className={Style.Item}>Web-ready 3D models</div>
                                        <div className={Style.Item}>AR and VR compatible models</div>
                                        <div className={Style.Item}>Multiple product views</div>
                                        <div className={Style.Item}>Lifestyle visualization assets</div>
                                        <div className={Style.Item}>Animation-ready models</div>
                                    </div>

                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <BeforeAfterSlider />
                            </div>

                            <div className={Style.ContentDiv}>
                                <div className="col-md-12">
                                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-5 pt-5 mb-0 mob-icon-list px-2 align-items-stretch">
                                        <div className="col px-1 mb-2">
                                            <div className={`${Style.WhiteDashedBox} h-100 px-2 mb-2`}>
                                                <h3><FaImages className="me-2" />Create Consistent Product Visuals</h3>
                                                <p className="mb-0">Use the same accurate 3D model across product pages, catalogs, advertisements, social media, presentations, and other marketing channels. This helps maintain a consistent appearance across your brand.</p>
                                            </div>
                                        </div>
                                        <div className="col px-1 mb-2">
                                            <div className={`${Style.WhiteDashedBox} h-100 px-2 mb-2`}>
                                                <h3><FaCube className="me-2" />Show Products Before Production</h3>
                                                <p className="mb-0">3D models allow furniture brands to visualize and present products before physical samples are produced. Designers and manufacturers can review the form, proportions, materials, and finishes digitally.</p>
                                            </div>
                                        </div>
                                        <div className="col px-1 mb-2">
                                            <div className={`${Style.WhiteDashedBox} h-100 px-2 mb-2`}>
                                                <h3><FaCamera className="me-2" />Reduce Photography Requirements</h3>
                                                <p className="mb-0">Instead of arranging a new photoshoot for every color, finish, or product variation, you can create multiple visual variations from an existing 3D model.</p>
                                            </div>
                                        </div>
                                        <div className="col px-1 mb-2">
                                            <div className={`${Style.WhiteDashedBox} h-100 px-2 mb-2`}>
                                                <h3><FaVrCardboard className="me-2" />Support Interactive Shopping Experiences</h3>
                                                <p className="mb-0">3D assets can be adapted for interactive product viewers, virtual showrooms, product configurators, and AR experiences where customers can explore furniture digitally.</p>
                                            </div>
                                        </div>
                                        <div className="col px-1 mb-2">
                                            <div className={`${Style.WhiteDashedBox} h-100 px-2 mb-2`}>
                                                <h3><FaShareAlt className="me-2" />Create More Marketing Assets</h3>
                                                <p className="mb-0">One model can be used to create product renders, lifestyle scenes, animations, catalog images, social media creatives, and other promotional content.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Is 3D Furniture Modeling a Costly Investment?</h2>
                                <p>The cost of 3D furniture modeling depends on factors such as product complexity, level of detail, number of models, materials, textures, required output, and the type of visualization needed.</p>
                                <p>For many furniture businesses, 3D modeling can reduce the need for repeated photography and physical product setups. Once the digital model is created, it can be reused for different colors, materials, angles, scenes, campaigns, and digital experiences.</p>
                                <p>This makes 3D furniture models useful as long-term digital assets rather than one-time marketing images.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">3D Furniture Rendering Services at Tech2Globe</h2>
                                <p>Once a furniture model is created, it can be rendered into high-quality images for different marketing and sales requirements. Our 3D furniture rendering services help businesses present their products in realistic environments and product-focused compositions.</p>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="images/services/service-inner/3d-rendering-oval-sofa-blueprint_725890-1053.avif" className={`${Style.CardImgTop} mb-2`} alt="Wireframe to 3D Modeling" />
                                                <h5 className="card-title">Wireframe to 3D Modeling</h5>
                                                <p className="card-text">We can convert wireframes, technical drawings, and design references into detailed 3D furniture models that form the foundation for further visualization.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="images/services/service-inner/brown-sofa-with-picture-it_1194-6648.avif" className={`${Style.CardImgTop} mb-2`} alt="Silo Furniture Rendering" />
                                                <h5 className="card-title">Silo Furniture Rendering</h5>
                                                <p className="card-text">Show furniture clearly against clean backgrounds for eCommerce product pages, catalogs, marketplaces, and other product-focused applications. Multiple angles and close-up views can be created to highlight important details.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="images/services/service-inner/eric-eggen-giraffe-edit09.jpg" className={`${Style.CardImgTop} mb-2`} alt="Low-Poly and High-Poly Furniture Models" />
                                                <h5 className="card-title">Low-Poly and High-Poly Furniture Models</h5>
                                                <p className="card-text">Low-poly models can be created for applications where performance and file size are important, while high-poly models can be developed for detailed renders, animations, and high-resolution visual presentations.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="images/services/service-inner/flat-lay-3d-furniture-rendering-showcasing-variou.webp" className={`${Style.CardImgTop} mb-2`} alt="3D Flat-Lay Product Visuals" />
                                                <h5 className="card-title">3D Flat-Lay Product Visuals</h5>
                                                <p className="card-text">Display furniture collections or coordinated products from a top-down perspective. Flat-lay visuals can help present multiple products or design combinations within a single composition.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="images/services/service-inner/empty-chairs-table-home_1048944-3435727.avif" className={`${Style.CardImgTop} mb-2`} alt="Interior 3D Lifestyle Visualization" />
                                                <h5 className="card-title">Interior 3D Lifestyle Visualization</h5>
                                                <p className="card-text">Place furniture inside realistic interior environments to show how products can look within living rooms, bedrooms, dining areas, offices, and other spaces.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="images/services/service-inner/metal-nature-vintage-arrangement-setting_1203-6277.avif" className={`${Style.CardImgTop} mb-2`} alt="Outdoor Furniture Visualization" />
                                                <h5 className="card-title">Outdoor Furniture Visualization</h5>
                                                <p className="card-text">Create realistic outdoor scenes that show furniture in appropriate environments with suitable lighting, materials, textures, and surroundings.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="images/services/service-inner/a-modern--high-end-furniture-promo-animation-scene.webp" className={`${Style.CardImgTop} mb-2`} alt="Promotional 3D Animation Videos" />
                                                <h5 className="card-title">Promotional 3D Animation Videos</h5>
                                                <p className="card-text">Show furniture features, configurations, movements, and product details through engaging 3D animations for websites, campaigns, presentations, and social media.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="images/services/service-inner/tanner-workshop_1098-12741.avif" className={`${Style.CardImgTop} mb-2`} alt="Furniture Assembly Animation" />
                                                <h5 className="card-title">Furniture Assembly Animation</h5>
                                                <p className="card-text">Create step-by-step 3D assembly videos that explain how furniture components fit together. These visuals can make installation instructions easier to understand.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="images/services/service-inner/minimalist-living-room-displayed-tablet-device-screen_38013-29361.avif" className={`${Style.CardImgTop} mb-2`} alt="AR and VR Ready 3D Furniture Models" />
                                                <h5 className="card-title">AR and VR Ready 3D Furniture Models</h5>
                                                <p className="card-text">Prepare optimized furniture models for AR and VR applications. Depending on the project requirements, assets can be delivered in formats such as GLB, USDZ, FBX, and OBJ.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="images/services/service-inner/modern-studio-with-sofa_1048-2935.avif" className={`${Style.CardImgTop} mb-2`} alt="3D Cinemagraphs" />
                                                <h5 className="card-title">3D Cinemagraphs</h5>
                                                <p className="card-text">Combine static product imagery with subtle motion to create attention-grabbing visual content for digital marketing and promotional campaigns.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <div className="container call-cta text-white py-4 px-3 rounded mb-4 d-flex justify-content-between align-items-center flex-column flex-md-row">
                                    <div className="text-center text-md-start mb-3 mb-md-0">
                                        <h4 className="fw-bold mb-1 text-white">Connect with Our 3D Furniture Modeling Experts!</h4>
                                        <p className="mb-0 text-white">Get tailor-made 3D visualization solutions for your furniture design
                                            and marketing needs.</p>
                                    </div>
                                    <a href="mailto:info@tech2globe.com" className="btn btn-light text-primary fw-bold px-4 py-2">
                                        Enquire Now
                                    </a>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Furniture 3D Visualization Across Different Tools</h2>
                                <p>Our team works with industry-standard 3D and visualization tools to create furniture models, textures, renders, animations, and interactive assets.</p>
                                <p>Our workflow can involve tools such as:</p>
                                <div className={`${Style.TechStacks} row pb-3`}>
                                    <div className="col-6 col-md-3 col-lg-2 d-flex flex-column justify-content-center align-items-center">
                                        <img src="images/services/service-inner/maya.png" alt="Autodesk Maya" className="img-fluid mb-3" />
                                        <p>Autodesk Maya</p>
                                    </div>
                                    <div className="col-6 col-md-3 col-lg-2 d-flex flex-column justify-content-center align-items-center">
                                        <img src="images/services/service-inner/blender.png" alt="Blender" className="img-fluid mb-3" />
                                        <p>Blender</p>
                                    </div>
                                    <div className="col-6 col-md-3 col-lg-2 d-flex flex-column justify-content-center align-items-center">
                                        <img src="images/services/service-inner/autodesk max.png" alt="Autodesk 3ds Max" className="img-fluid mb-3" />
                                        <p>Autodesk 3ds Max</p>
                                    </div>
                                    <div className="col-6 col-md-3 col-lg-2 d-flex flex-column justify-content-center align-items-center">
                                        <img src="images/services/service-inner/adobe-substance.png" alt="Adobe Substance" className="img-fluid mb-3" />
                                        <p>Adobe Substance</p>
                                    </div>
                                    <div className="col-6 col-md-3 col-lg-2 d-flex flex-column justify-content-center align-items-center">
                                        <img src="images/services/service-inner/threejs.png" alt="Three.js" className="img-fluid mb-3" />
                                        <p>Three.js</p>
                                    </div>
                                    <div className="col-6 col-md-3 col-lg-2 d-flex flex-column justify-content-center align-items-center">
                                        <img src="images/services/service-inner/zbrush.png" alt="ZBrush" className="img-fluid mb-3" />
                                        <p>ZBrush</p>
                                    </div>
                                </div>
                                <p>The tools used for your project depend on the required output, product complexity, level of detail, and final application.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Use Cases of 3D Furniture Modeling and Rendering</h2>
                                <p>3D furniture assets can support different stages of product development, sales, and marketing.</p>
                                <div className="row g-4 pb-3">
                                    {usecases.map((item, index) => (
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12" key={index}>
                                            <div className={Style.UsecaseCard}>
                                                <div className={Style.UsecaseContent}>
                                                    <div className={Style.UsecaseIcon}>
                                                        {item.icon}
                                                    </div>
                                                    <h6>{item.title}</h6>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <FurnitureModelingSlider productsmodeling={productsmodeling} />

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Our 3D Furniture Modeling Process</h2>
                                <p>We follow a structured process to maintain accuracy and consistency throughout the project.</p>
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 pb-3">
                                    <div className="col">
                                        <div className={Style.BorderedWrapper}>
                                            <div className={Style.CustomCard}>
                                                <div>
                                                    <h5>1. Collect Product References</h5>
                                                    <p className="mb-0">We review your CAD files, drawings, photographs, sketches, dimensions, specifications, and material references.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className={Style.BorderedWrapper}>
                                            <div className={Style.CustomCard}>
                                                <div>
                                                    <h5>2. Define Scope and Deliverables</h5>
                                                    <p className="mb-0">We confirm the required models, level of detail, materials, textures, output formats, renders, views, and final applications.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className={Style.BorderedWrapper}>
                                            <div className={Style.CustomCard}>
                                                <div>
                                                    <h5>3. Build the 3D Model</h5>
                                                    <p className="mb-0">Our artists create the furniture model based on the supplied references and approved specifications.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className={Style.BorderedWrapper}>
                                            <div className={Style.CustomCard}>
                                                <div>
                                                    <h5>4. Apply Materials and Textures</h5>
                                                    <p className="mb-0">We add realistic materials, colors, finishes, fabrics, wood grains, metals, and other surface details according to the product requirements.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className={Style.BorderedWrapper}>
                                            <div className={Style.CustomCard}>
                                                <div>
                                                    <h5>5. Review and Refine</h5>
                                                    <p className="mb-0">Drafts are shared for review so that dimensions, details, materials, and other elements can be adjusted based on feedback.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className={Style.BorderedWrapper}>
                                            <div className={Style.CustomCard}>
                                                <div>
                                                    <h5>6. Render and Optimize</h5>
                                                    <p className="mb-0">The approved model is prepared for its intended use, whether that means high-resolution rendering, web visualization, animation, AR, or another application.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className={Style.BorderedWrapper}>
                                            <div className={Style.CustomCard}>
                                                <div>
                                                    <h5>7. Deliver Final Assets</h5>
                                                    <p className="mb-0">We provide the final approved files and visual assets in the required formats.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Why Partner With Tech2Globe?</h2>
                                <p>Tech2Globe combines 3D visualization expertise with extensive experience in eCommerce and digital business support. Our 3D furniture modeling and rendering services are designed to help furniture brands create consistent digital assets for sales, marketing, and product presentation.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <div className="row pt-3 pb-3">
                                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                        <div className={`${Style.IcoGreyCard} p-4 shadow-sm rounded bg-light h-100`}>
                                            <FaUsersCog />
                                            <h5 className="fw-bold">Scalable Production</h5>
                                            <p className="mb-0">Whether you need a single product model or a large furniture catalog, our team can support projects of different sizes and requirements.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                        <div className={`${Style.IcoGreyCard} p-4 shadow-sm rounded bg-light h-100`}>
                                            <FaStar />
                                            <h5 className="fw-bold">Brand-Aligned Visuals</h5>
                                            <p className="mb-0">We create models and renders that follow your product specifications and visual guidelines to maintain consistency across your digital presence.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                        <div className={`${Style.IcoGreyCard} p-4 shadow-sm rounded bg-light h-100`}>
                                            <FaShieldAlt />
                                            <h5 className="fw-bold">Secure Project Handling</h5>
                                            <p className="mb-0">We follow secure processes and can work under NDA requirements when your furniture designs or product information need confidentiality.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                        <div className={`${Style.IcoGreyCard} p-4 shadow-sm rounded bg-light h-100`}>
                                            <FaCube />
                                            <h5 className="fw-bold">Flexible Deliverables</h5>
                                            <p className="mb-0">From individual 3D models and product renders to AR-ready assets, animations, and complete visualization packages, deliverables can be adapted to your requirements.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 pb-3">Frequently Asked Questions</h2>
                                <div className={`${Style.FaqAccordion} accordion`} id="faqAccordion">

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="faqOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne">
                                                What is 3D furniture modeling?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                3D furniture modeling is the process of creating a digital three-dimensional representation of a furniture product. The model can include the product&apos;s shape, dimensions, materials, textures, colors, and other design details.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="faqTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo">
                                                What files do you need for 3D furniture modeling?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                You can provide CAD drawings, sketches, product photographs, technical specifications, reference images, dimensions, or existing 3D files. Our team reviews the available information and determines the best approach for creating the model.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="faqThree">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                                Can you create 3D furniture models from photographs?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Yes. We can create furniture models using product photographs and reference images when suitable technical drawings or CAD files are not available. Additional dimensions and product specifications can help improve accuracy.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="faqFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour">
                                                What is the difference between 3D furniture modeling and rendering?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                3D modeling involves creating the digital three-dimensional furniture asset. Rendering uses the model to produce realistic images or visual scenes. A single model can be used to create multiple renders, views, animations, and other digital assets.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="faqFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive">
                                                Can 3D furniture models be used for eCommerce?
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Yes. 3D furniture models can support eCommerce product images, interactive product viewers, lifestyle scenes, product configurators, AR experiences, and other digital shopping experiences.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="faqSix">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseSix">
                                                Can you create AR and VR-ready furniture models?
                                            </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Yes. We create optimized 3D furniture assets for AR and VR applications based on project requirements. Supported formats can include GLB, USDZ, FBX, and OBJ.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="faqSeven">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseSeven">
                                                How long does 3D furniture modeling take?
                                            </button>
                                        </h2>
                                        <div id="collapseSeven" className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                The timeline depends on product complexity, number of models, level of detail, materials, revisions, and required deliverables. After reviewing your project requirements, we can provide an estimated delivery timeline.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="faqEight">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseEight">
                                                How much do 3D furniture modeling services cost?
                                            </button>
                                        </h2>
                                        <div id="collapseEight" className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Pricing depends on the complexity of the furniture design, level of detail, number of products, materials, textures, rendering requirements, and final output. Contact our team with your requirements for a project-specific quote.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Bring Your Furniture Designs to Life</h2>
                                <p>Have furniture designs that need accurate 3D models, realistic renders, or digital-ready assets? Our 3D furniture modeling experts can help you turn your product designs into high-quality digital assets for eCommerce, catalogs, marketing, AR, and virtual experiences.</p>
                                <a href="mailto:info@tech2globe.com" className="btn btn-danger px-4 py-2 text-decoration-none">
                                    Talk to Our 3D Furniture Experts
                                </a>
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

        </>
    )
};
