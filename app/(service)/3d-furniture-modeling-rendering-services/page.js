
import Style from "./style.module.css";
import Image from "next/image";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import { FaChartBar, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaFileContract, FaLightbulb, FaSearch, FaShieldAlt, FaStar, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import "swiper/css";
import "swiper/css/pagination";
import "./custom.css";
import FurnitureModelingSlider from "@/app/components/services/modeling-rendering/ModelingRendering";
import BeforeAfterSlider from "@/app/components/services/BeforeAfterSlider/BeforeAfterSlider";

export const metadata = {
    title: "Outsource 3D Furniture Modeling Services",
    description:
        "Bring your furniture designs to life with Tech2Globe's outsource 3D furniture modeling services. Accurate, realistic, and high-quality 3D models delivered fast.",
    keywords:
        "3D furniture modeling services, furniture 3D rendering, outsource 3D furniture modeling, 3D product modeling, furniture visualization, 3D rendering company",
    openGraph: {
        title: "Outsource 3D Furniture Modeling Services",
        description:
            "Bring your furniture designs to life with Tech2Globe's outsource 3D furniture modeling services. Accurate, realistic, and high-quality 3D models delivered fast.",
        url: "https://www.tech2globe.com/3d-furniture-modeling-rendering-services",
        siteName: "Tech2Globe Web Solutions LLP",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Outsource 3D Furniture Modeling Services",
        description:
            "Bring your furniture designs to life with Tech2Globe's outsource 3D furniture modeling services. Accurate, realistic, and high-quality 3D models delivered fast.",
    },
    alternates: {
        canonical:
            "https://www.tech2globe.com/3d-furniture-modeling-rendering-services",
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
        },
        {
            image: "/images/services/service-inner/outdoor-furniture.webp",
            title: "Outdoor Furniture",
        },
        {
            image: "/images/services/service-inner/bedroom-furniture-.webp",
            title: "Bedroom Furniture",
        },
        {
            image: "/images/services/service-inner/office--furniture-.webp",
            title: "Office Furniture",
        },
        {
            image: "/images/services/service-inner/bathroom-furniture-.webp",
            title: "Bathroom Furniture",
        },
        {
            image: "/images/services/service-inner/cabinet-furniture-.webp",
            title: "Lighting Fixtures",
        },
        {
            image: "/images/services/service-inner/flooring-with-some-furnitures.webp",
            title: "Cabinet Furniture",
        },
        {
            image: "/images/services/service-inner/rugs-and-carpets.webp",
            title: "Rugs and Carpets",
        },
        {
            image: "/images/services/service-inner/wooden-furniture-.webp",
            title: "Wooden Furniture",
        },
        {
            image: "/images/services/service-inner/flooring-with-some-furnitures.webp",
            title: "Flooring",
        },
        {
            image: "/images/services/service-inner/fabrics.webp",
            title: "Fabrics",
        },
    ];

    return (
        <>

            <div className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active position-relative">
                        <img src="images/services/service-inner/a-high-quality-3d-rendered-interior-scene.webp" className="d-block w-100" alt="Professional 3D Furniture Modeling" />
                        <div className="slide-overlay-2"></div>
                        <div className="carousel-caption centered-content">
                            <h2>Professional 3D Furniture Modeling Solutions</h2>
                            <p>Enhance buyer engagement and drive higher conversion rates with our high-quality 3D furniture
                                rendering services.</p>
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
                                <h2>Elevate Your eCommerce Store with 3D Furniture Modeling & Texturing</h2>
                                <p>Shopping for furniture online can be tricky. It&apos;s hard for customers to imagine how a piece will look and feel in their own space especially without being able to see the size, fabric, or finish up close. That&apos;s where our 3D furniture modeling services come in. We help bridge the gap between in-store and online shopping by making the experience more interactive and realistic leading to better engagement and higher conversions.</p>
                                <p>With photorealistic 3D renders and immersive AR/VR features, your customers can view furniture from every angle, explore textures, and even place it in their rooms virtually. Whether they want to check if the size fits or experiment with different colors and materials, they can do it all right from their screen.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Outsource 3D Furniture Modeling Services to Tech2Globe</h2>
                                <p>Save time and cut down on the high costs of traditional product photography by switching to photorealistic 3D imagery. At Tech2Globe, we create high-quality visual assets for both digital and print marketing-whether your furniture designs are simple or highly intricate.</p>
                                <p>Our services include everything from 3D furniture modeling and CAD-to-3D conversions to transforming wireframes into detailed, market-ready 3D models-all delivered within a competitive timeline.</p>
                                <p>Deliver a richer, more engaging shopping experience that helps turn browsers into buyers with our 3D furniture modeling and rendering solutions.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <div className={`${Style.ProcessContainer} mb-3 pt-3 pb-1`}>

                                    <div className={Style.ProcessColumnInput}>
                                        <div className={Style.ColumnTitle}>What You Share</div>
                                        <div className={Style.Item}>Product Reference Images</div>
                                        <div className={Style.Item}>Sketches / CAD drawings</div>
                                        <div className={Style.Item}>Design Specifications</div>
                                    </div>

                                    <div className={Style.Arrow}>→</div>

                                    <div className={Style.ProcessColumnOutput}>
                                        <div className={Style.ColumnTitle}>What We Deliver</div>
                                        <div className={Style.Item}>Photorealistic CGI</div>
                                        <div className={Style.Item}>3D Models for Web</div>
                                        <div className={Style.Item}>AR &amp; VR compatible 3D Models</div>
                                    </div>

                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <BeforeAfterSlider />
                            </div>

                            <div className={Style.ContentDiv}>
                                <div className="col-md-12">
                                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-5 pt-5 mb-0 mob-icon-list px-2">
                                        <div className="col px-1 mb-2">
                                            <div className={`${Style.WhiteDashedBox} h-100 px-2 mb-2`}>
                                                <h3><svg className="svg-inline--fa fa-chart-line me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path></svg>Boost User Engagement</h3>
                                                <p className="mb-0">Immersive 3D renders and interactive web views create engaging
                                                    digital experiences, encouraging users to stay longer on your platform.</p>
                                            </div>
                                        </div>
                                        <div className="col px-1 mb-2">
                                            <div className={`${Style.WhiteDashedBox} h-100 px-2 mb-2`}>
                                                <h3><svg className="svg-inline--fa fa-bolt me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bolt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M317.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224C.9 240.7-2.6 254.8 2 267.3S18.7 288 32 288H143.5L66.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H240.5L317.4 44.6z"></path></svg>Enhance Conversion Rates</h3>
                                                <p className="mb-2">With 3D AR visualization, customers can see products in their own
                                                    spaces, which builds confidence and leads to more sales.</p>
                                            </div>
                                        </div>
                                        <div className="col px-1 mb-2">
                                            <div className={`${Style.WhiteDashedBox} h-100 px-2 mb-2`}>
                                                <h3><svg className="svg-inline--fa fa-rotate-left me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rotate-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M32.5 224H24c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L82.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L169 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H32.5z"></path></svg>Reduce Product Returns</h3>
                                                <p className="mb-2">Realistic 3D and AR previews set accurate expectations, resulting in
                                                    fewer returns and higher customer satisfaction.</p>
                                            </div>
                                        </div>
                                        <div className="col px-1 mb-2">
                                            <div className={`${Style.WhiteDashedBox} h-100 px-2 mb-2`}>
                                                <h3><svg className="svg-inline--fa fa-shield-halved me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield-halved" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M240 0c4.6 0 9.2 1 13.4 2.9L441.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.7 363.2c-16.7 8-36.1 8-52.8 0C41.3 420.7 .5 239.2 0 140c-.1-26.2 16.3-47.9 38.3-57.2L226.7 2.9C230.8 1 235.4 0 240 0zm0 66.8V444.8C378 378 415.1 230.1 416 141.4L240 66.8l0 0z"></path></svg>Strengthen Brand Trust</h3>
                                                <p className="mb-2">Furniture businesses using high-quality 3D visuals project a more
                                                    professional image and build credibility with potential buyers.</p>
                                            </div>
                                        </div>
                                        <div className="col px-1 mb-2">
                                            <div className={`${Style.WhiteDashedBox} h-100 px-2 mb-2`}>
                                                <h3><svg className="svg-inline--fa fa-money-bill-wave me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="money-bill-wave" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M0 112.5V422.3c0 18 10.1 35 27 41.3c87 32.5 174 10.3 261-11.9c79.8-20.3 159.6-40.7 239.3-18.9c23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3C462 15.9 375 38.1 288 60.3C208.2 80.6 128.4 100.9 48.7 79.1C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96s80 43 80 96s-35.8 96-80 96zM64 352c35.3 0 64 28.7 64 64H64V352zm64-208c0 35.3-28.7 64-64 64V144h64zM512 304v64H448c0-35.3 28.7-64 64-64zM448 96h64v64c-35.3 0-64-28.7-64-64z"></path></svg>Lower Operational Costs</h3>
                                                <p className="mb-2">Save on shipping, studio setups, and photography by using versatile
                                                    3D models across various platforms and campaigns.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Is 3D Furniture Modeling a Costly Investment?</h2>
                                <p>The pricing for 3D furniture modeling services depends on several factors, including the complexity of the design, level of detail, and the type of output required—whether it&apos;s photorealistic renders, AR-ready models, or CAD-to-3D conversions.</p>
                                <p>That said, 3D modeling is often more cost-effective than traditional product photography. It eliminates expenses related to location rentals, decor setup, storage, shipping, and hiring photographers or editors. Moreover, a single 3D asset can be repurposed across multiple platforms—websites, social media, eCommerce listings, virtual showrooms, email marketing, and print campaigns. This reusability significantly increases your ROI while lowering your overall content production costs.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">3D Furniture Rendering Services at Tech2Globe</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="images/services/service-inner/3d-rendering-oval-sofa-blueprint_725890-1053.avif" className={`${Style.CardImgTop} mb-2`} alt="Wireframe Modeling Solutions" />
                                                <h5 className="card-title">Wireframe Modeling Solutions</h5>
                                                <p className="card-text">Wireframe models offer a basic 3D representation of furniture
                                                    dimensions, serving as the foundation for detailed 3D models. We provide
                                                    wireframe modeling and wireframe-to-3D conversion services for architects and
                                                    designers to support the complete rendering process.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="images/services/service-inner/brown-sofa-with-picture-it_1194-6648.avif" className={`${Style.CardImgTop} mb-2`} alt="Silo Furniture Renderings" />
                                                <h5 className="card-title">Silo Furniture Renderings</h5>
                                                <p className="card-text">Silo renders, ideal for eCommerce, feature furniture on plain white backgrounds to emphasize details. We produce multiple angles including hero shots, close-ups, exploded views, and dimensional renderings to enhance product presentation.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="images/services/service-inner/eric-eggen-giraffe-edit09.jpg" className={`${Style.CardImgTop} mb-2`} alt="Low & High-Poly Furniture Models" />
                                                <h5 className="card-title">Low & High-Poly Furniture Models</h5>
                                                <p className="card-text">Whether you need lightweight low-poly models for games and AR or detailed high-poly models for animations and product highlights, we tailor 3D modeling to your usage—be it interactive environments or high-resolution visuals.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="images/services/service-inner/flat-lay-3d-furniture-rendering-showcasing-variou.webp" className={`${Style.CardImgTop} mb-2`} alt="3D Flat-Lay Product Visuals" />
                                                <h5 className="card-title">3D Flat-Lay Product Visuals</h5>
                                                <p className="card-text">Flat-lay renderings offer a bird&apos;s-eye view of product combinations. This layout is perfect for displaying design collections or coordinating furniture sets, offering a cohesive, styled image in a single frame.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="images/services/service-inner/empty-chairs-table-home_1048944-3435727.avif" className={`${Style.CardImgTop} mb-2`} alt="Interior 3D Lifestyle Visualization" />
                                                <h5 className="card-title">Interior 3D Lifestyle Visualization</h5>
                                                <p className="card-text">Place your furniture within lifelike interior scenes to captivate potential buyers. Our 3D lifestyle images highlight the product as part of a natural, decorative environment with compelling angles and styling.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="images/services/service-inner/metal-nature-vintage-arrangement-setting_1203-6277.avif" className={`${Style.CardImgTop} mb-2`} alt="3D Outdoor Lifestyle Scenes" />
                                                <h5 className="card-title">3D Outdoor Lifestyle Scenes</h5>
                                                <p className="card-text">Show how your furniture performs outdoors through vivid 3D environments. We add realistic lighting, textures, and surroundings to give a true-to-life feel that boosts product desirability.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="images/services/service-inner/a-modern--high-end-furniture-promo-animation-scene.webp" className={`${Style.CardImgTop} mb-2`} alt="Promotional 3D Animation Videos" />
                                                <h5 className="card-title">Promotional 3D Animation Videos</h5>
                                                <p className="card-text">3D promo videos elevate product marketing by showcasing all features in motion. We create compelling animations that visualize real-life use, configurations, and USPs for websites, campaigns, and social media.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="images/services/service-inner/tanner-workshop_1098-12741.avif" className={`${Style.CardImgTop} mb-2`} alt="Assembly Animation Videos" />
                                                <h5 className="card-title">Assembly Animation Videos</h5>
                                                <p className="card-text">Streamline product setup with step-by-step 3D installation videos. These videos enhance the customer experience, reduce confusion, and minimize post-sale support requests and returns.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="images/services/service-inner/minimalist-living-room-displayed-tablet-device-screen_38013-29361.avif" className={`${Style.CardImgTop} mb-2`} alt="AR/VR-Optimized 3D Models" />
                                                <h5 className="card-title">AR/VR-Optimized 3D Models</h5>
                                                <p className="card-text">Enhance customer interaction with immersive AR/VR-ready 3D models. We deliver high-performance assets optimized for devices like Android, iPhone, and headsets, in formats such as GLB, USDZ, FBX, and OBJ.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <img src="images/services/service-inner/modern-studio-with-sofa_1048-2935.avif" className={`${Style.CardImgTop} mb-2`} alt="Assembly Animation Videos" />
                                                <h5 className="card-title">3D Cinemagraph Production</h5>
                                                <p className="card-text">3D cinemagraphs blend static imagery with subtle animation to create eye-catching visuals. These hybrid visuals are perfect for drawing attention to specific features while maintaining a premium aesthetic.</p>
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
                                <h2 className="pt-3">Furniture 3D Rendering Service: Leverage our Expertise across Tools</h2>
                                <div className={`${Style.TechStacks} row pb-3`}>
                                    <div className="col-6 col-md-3 col-lg-2 d-flex flex-column justify-content-center align-items-center">
                                        <img src="images/services/service-inner/maya.png" alt="Autodesk Maya" className="img-fluid mb-3" />
                                        <p>Autodesk Maya
                                        </p>
                                    </div>
                                    <div className="col-6 col-md-3 col-lg-2 d-flex flex-column justify-content-center align-items-center">
                                        <img src="images/services/service-inner/blender.png" alt="Blender" className="img-fluid mb-3" />
                                        <p>Blender
                                        </p>
                                    </div>
                                    <div className="col-6 col-md-3 col-lg-2 d-flex flex-column justify-content-center align-items-center">
                                        <img src="images/services/service-inner/autodesk max.png" alt="Autodesk 3ds Max" className="img-fluid mb-3" />
                                        <p>Autodesk 3ds Max
                                        </p>
                                    </div>
                                    <div className="col-6 col-md-3 col-lg-2 d-flex flex-column justify-content-center align-items-center">
                                        <img src="images/services/service-inner/adobe-substance.png" alt="Adobe Substance" className="img-fluid mb-3" />
                                        <p>Adobe Substance
                                        </p>
                                    </div>
                                    <div className="col-6 col-md-3 col-lg-2 d-flex flex-column justify-content-center align-items-center">
                                        <img src="images/services/service-inner/threejs.png" alt="Three.js" className="img-fluid mb-3" />
                                        <p>Three.js
                                        </p>
                                    </div>
                                    <div className="col-6 col-md-3 col-lg-2 d-flex flex-column justify-content-center align-items-center">
                                        <img src="images/services/service-inner/zbrush.png" alt="Zbrush" className="img-fluid mb-3" />
                                        <p>Zbrush
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Use Cases of 3D Furniture Rendering Services</h2>
                                <p>Enhance your marketing strategies, boost customer interaction, and increase conversions across various channels all while staying within budget. Partner with our expert 3D furniture modeling team for end-to-end support.</p>
                                <div className="row g-4 pb-3">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                        <div className={Style.UsecaseCard}>
                                            <div className={Style.UsecaseContent}>
                                                <div className={Style.UsecaseIcon}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width={32} height={32} x={0} y={0} viewBox="0 0 60 60" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className>
                                                        <g>
                                                            <path d="M19 15a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0-4a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM36.495 25.673a2.062 2.062 0 0 0-2.989 0l-6.549 7.366-2.543-2.539a2.047 2.047 0 0 0-2.828 0l-4.707 4.7A2.98 2.98 0 0 0 16 37.323V39a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-3.745a3 3 0 0 0-.758-1.992zM42 39H18v-1.677a1.007 1.007 0 0 1 .293-.707L23 31.909l2.544 2.544a2.154 2.154 0 0 0 1.472.584 2.011 2.011 0 0 0 1.436-.671L35 27l6.747 7.591a1 1 0 0 1 .253.664zM19.5 29a3.5 3.5 0 1 0-3.5-3.5 3.5 3.5 0 0 0 3.5 3.5zm0-5a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5z" fill="#234268" opacity={1} data-original="#000000" className />
                                                            <path d="M14 45h32a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H14a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4zm32-2H14a2 2 0 0 1-2-2V19h36v22a2 2 0 0 1-2 2zM14 7h32a2 2 0 0 1 2 2v8H12V9a2 2 0 0 1 2-2zM14 51a4 4 0 1 0 4-4 4 4 0 0 0-4 4zm6 0a2 2 0 1 1-2-2 2 2 0 0 1 2 2zM26 51a4 4 0 1 0 4-4 4 4 0 0 0-4 4zm6 0a2 2 0 1 1-2-2 2 2 0 0 1 2 2zM38 51a4 4 0 1 0 4-4 4 4 0 0 0-4 4zm6 0a2 2 0 1 1-2-2 2 2 0 0 1 2 2z" fill="#234268" opacity={1} data-original="#000000" className />
                                                            <path d="M26 11h8a1 1 0 0 0 0-2h-8a1 1 0 0 0 0 2zM26 15h5a1 1 0 0 0 0-2h-5a1 1 0 0 0 0 2zM5.318 31.731a1 1 0 0 0 1.364-1.462L2.1 26l4.585-4.269a1 1 0 0 0-1.364-1.462L.58 24.68a1.792 1.792 0 0 0 0 2.64zM54.682 20.269a1 1 0 0 0-1.364 1.462L57.9 26l-4.585 4.269a1 1 0 1 0 1.364 1.462l4.741-4.411a1.792 1.792 0 0 0 0-2.64z" fill="#234268" opacity={1} data-original="#000000" className />
                                                        </g>
                                                    </svg>
                                                </div>
                                                <h6>Website Carousels</h6>
                                                <p>Integrate interactive 3D carousels on your site, allowing users to rotate and zoom products in AR/VR for detailed exploration and improved product visualization.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                        <div className={Style.UsecaseCard}>
                                            <div className={Style.UsecaseContent}>
                                                <div className={Style.UsecaseIcon}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width={32} height={32} x={0} y={0} viewBox="0 0 140 140" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className>
                                                        <g>
                                                            <path fill="#234268" d="M104.805 82.516a6.438 6.438 0 0 0-.222-.408c-2.985-3.812-5.979-7.078-5.979-14.418V43.213c0-10.332.821-19.853-6.788-26.916-6.249-5.702-16.041-7.885-23.653-7.885h-3.265c-13.855.805-28.528 6.792-31.806 23.924-.539 2.182 1.099 2.994 2.182 3.263L50.5 37.503c1.629-.274 2.448-1.638 2.718-2.985 1.353-5.983 6.249-8.977 11.681-9.526h1.092c3.267 0 6.8 1.361 8.699 4.086 2.172 3.259 1.903 7.616 1.903 11.428v2.172c-3.534.268-7.617.536-11.694 1.072-6.25.827-12.5 1.913-17.66 4.362-10.059 4.08-16.856 12.782-16.856 25.556 0 3.287.452 6.224 1.253 8.849 3.109 10.186 11.744 15.359 22.131 15.359 4.346 0 7.877-.553 11.133-1.356 5.176-1.637 9.514-4.628 14.679-10.071 2.99 4.079 3.815 5.992 8.974 10.341 1.363.534 2.722.534 3.802-.27 3.267-2.725 8.98-7.622 11.966-10.336 1.222-.984 1.119-2.407.484-3.668zM64.897 56.262c3.531-.812 7.619-1.085 11.694-1.085v3.266c0 6.253.269 11.146-2.99 16.587-1.904 3.803-5.173 6.253-8.704 7.078-.536 0-1.355.27-2.175.27-5.973 0-9.506-4.624-9.506-11.421.001-8.709 5.16-12.781 11.681-14.695z" opacity={1} data-original="#33363a" className />
                                                            <path d="M104.805 82.516a6.438 6.438 0 0 0-.222-.408c-2.985-3.812-5.979-7.078-5.979-14.418V43.213c0-10.332.821-19.853-6.788-26.916-6.249-5.702-16.041-7.885-23.653-7.885h-3.265c-13.855.805-28.528 6.792-31.806 23.924-.539 2.182 1.099 2.994 2.182 3.263L50.5 37.503c1.629-.274 2.448-1.638 2.718-2.985 1.353-5.983 6.249-8.977 11.681-9.526h1.092c3.267 0 6.8 1.361 8.699 4.086 2.172 3.259 1.903 7.616 1.903 11.428v2.172c-3.534.268-7.617.536-11.694 1.072-6.25.827-12.5 1.913-17.66 4.362-10.059 4.08-16.856 12.782-16.856 25.556 0 3.287.452 6.224 1.253 8.849 3.109 10.186 11.744 15.359 22.131 15.359 4.346 0 7.877-.553 11.133-1.356 5.176-1.637 9.514-4.628 14.679-10.071 2.99 4.079 3.815 5.992 8.974 10.341 1.363.534 2.722.534 3.802-.27 3.267-2.725 8.98-7.622 11.966-10.336 1.222-.984 1.119-2.407.484-3.668zM64.897 56.262c3.531-.812 7.619-1.085 11.694-1.085v3.266c0 6.253.269 11.146-2.99 16.587-1.904 3.803-5.173 6.253-8.704 7.078-.536 0-1.355.27-2.175.27-5.973 0-9.506-4.624-9.506-11.421.001-8.709 5.16-12.781 11.681-14.695z" style={{ strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }} fill="none" stroke="#234268" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={1} data-original="#33363a" opacity={1} className />
                                                            <path fill="#234268" d="M67.851 119.069c-.469.015-.95.015-1.406.015-12.39.008-23.38-3.522-33.863-8.378H17.546v-7.772c-1.473-.814-2.944-1.632-4.417-2.45-.579-.303-1.181-.463-1.762-.463-.744 0-1.513.281-2.069.803a2.833 2.833 0 0 0-.885 2.067c-.008 1.005.536 1.932 1.299 2.534 15.603 13.561 32.713 26.15 55.721 26.163.445 0 .904-.013 1.361-.021 14.635-.327 31.182-5.275 44.032-13.349l.078-.049a44.724 44.724 0 0 0 4.946-3.421c.987-.73 1.666-1.875 1.666-3.063a3.48 3.48 0 0 0-.172-.979H106.7c-12.885 5.093-26.357 8.093-38.849 8.363z" opacity={1} data-original="#fa9826" className />
                                                            <path fill="#234268" d="M117.345 110.706h-10.644c-12.886 5.094-29.192 14.381-41.688 14.649-.47.016-.947.016-1.406.016-12.39.007-20.543-2.11-31.026-6.968l-12.584-6.444a30.72 30.72 0 0 1-6.835-3.582c14.69 12.376 30.943 23.2 52.271 23.211.445 0 .904-.013 1.361-.021 14.635-.327 31.182-5.275 44.032-13.349l.078-.049a44.724 44.724 0 0 0 4.946-3.421c.987-.73 1.666-1.875 1.666-3.063a3.48 3.48 0 0 0-.171-.979zM118.603 103.809c1.103-.008 2.093.072 2.776.215.338.074.593.162.727.233a.316.316 0 0 1 .112.052c.028.094.072.34.066.682.014 1.303-.535 3.724-1.3 6.086-.736 2.36-1.638 4.73-2.229 6.305a3.154 3.154 0 0 0-.239 1.194c-.013.63.246 1.398.8 1.905a2.662 2.662 0 0 0 1.807.709h.031c.87-.006 1.609-.354 2.244-.855 6.01-5.405 8.106-14.041 8.189-18.903l-.011-.774v-.008c-.061-1.281-.329-2.261-.863-3.07l-.058-.081-.063-.079c-.546-.596-1.066-.819-1.632-1.066-1.688-.651-4.143-.999-7.097-1.007a33.33 33.33 0 0 0-3.766.224v8.249c.168-.004.343-.011.506-.011z" opacity={1} data-original="#ea7b0c" className />
                                                            <g fill="#fa9826">
                                                                <path d="M113.751 108.149a4.248 4.248 0 0 0-1.832.412c-.66.26-1.333.564-1.97.833l-.937.394-1.214.484v.014c-.362.148-.73.277-1.098.42h10.644c-.482-1.554-1.98-2.557-3.593-2.557zM32.581 110.706c-5.096-2.361-10.074-5.033-15.035-7.772v7.772zM115.04 95.903l-2.367.79-.042.022-1.344.435v.058a20.996 20.996 0 0 0-4.32 2.427c-.827.616-1.511 1.436-1.543 2.69-.022.68.322 1.463.896 1.926.572.465 1.24.623 1.825.623.14 0 .271-.005.386-.029l.117-.008.084-.015c1.16-.244 2.846-.411 4.824-.688 1.519-.17 3.108-.29 4.542-.316v-8.249c-.999.114-2.025.269-3.05.494z" fill="#234268" opacity={1} data-original="#fa9826" className>
                                                                </path>
                                                            </g>
                                                            <g style={{ fill: 'none', stroke: '#33363a', strokeWidth: 3, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }}>
                                                                <path d="M131.576 100.657v-.008c-.061-1.281-.329-2.261-.863-3.07l-.058-.081-.063-.079c-.546-.596-1.066-.819-1.632-1.066-1.688-.651-4.143-.999-7.097-1.007a33.33 33.33 0 0 0-3.766.224c-.999.114-2.025.269-3.05.494l-.008-.16-2.367.79-.042.022-1.344.435v.058a20.996 20.996 0 0 0-4.32 2.427c-.827.616-1.511 1.436-1.543 2.69-.022.68.322 1.463.896 1.926.572.465 1.24.623 1.825.623.14 0 .271-.005.386-.029l.117-.008.084-.015c1.16-.244 2.846-.411 4.824-.688 1.519-.17 3.108-.29 4.542-.316.167-.002.343-.009.505-.009 1.103-.008 2.093.072 2.776.215.338.074.593.162.727.233a.316.316 0 0 1 .112.052c.028.094.072.34.066.682.014 1.303-.535 3.724-1.3 6.086-.736 2.36-1.638 4.73-2.229 6.305a3.154 3.154 0 0 0-.239 1.194c-.013.63.246 1.398.8 1.905a2.662 2.662 0 0 0 1.807.709h.031c.87-.006 1.609-.354 2.244-.855 6.01-5.405 8.106-14.041 8.189-18.903z" fill="#234268" opacity={1} data-original="#000000" className>
                                                                </path>
                                                                <path d="M113.751 108.149a4.248 4.248 0 0 0-1.832.412c-.66.26-1.333.564-1.97.833l-.937.394-1.214.484v.014c-.362.148-.73.277-1.098.42-12.886 5.094-26.358 8.094-38.851 8.363-.469.015-.95.015-1.406.015-12.39.008-23.38-3.522-33.863-8.378-5.096-2.361-10.074-5.033-15.035-7.772-1.473-.814-2.944-1.632-4.417-2.45-.579-.303-1.181-.463-1.762-.463-.744 0-1.513.281-2.069.803a2.833 2.833 0 0 0-.885 2.067c-.008 1.005.536 1.932 1.299 2.534 15.603 13.561 32.713 26.15 55.721 26.163.445 0 .904-.013 1.361-.021 14.635-.327 31.182-5.275 44.032-13.349l.078-.049a44.724 44.724 0 0 0 4.946-3.421c.987-.73 1.666-1.875 1.666-3.063a3.48 3.48 0 0 0-.172-.979c-.481-1.554-1.979-2.557-3.592-2.557z" fill="#234268" opacity={1} data-original="#000000" className>
                                                                </path>
                                                            </g>
                                                        </g>
                                                    </svg>

                                                </div>
                                                <h6>Amazon A+ Graphics</h6>
                                                <p>Enhance your Amazon listings with 3D visuals and videos, plus AR-ready models that help users preview items in their real space before purchasing.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                        <div className={Style.UsecaseCard}>
                                            <div className={Style.UsecaseContent}>
                                                <div className={Style.UsecaseIcon}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width={512} height={512} x={0} y={0} viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className>
                                                        <g>
                                                            <path d="M511 82.728c0-.071-.008-.14-.008-.211a30.905 30.905 0 0 0-.068-1.716C507.706 30.194 378.075 2.912 256 2.912S4.277 30.198 1.076 80.81a30.58 30.58 0 0 0-.068 1.708c0 .07-.008.139-.008.209 0 .034.004.066.005.1 0 .158-.007.316-.005.474v216.381c0 36.889 66.058 56.773 105.433 65.342.962.21 1.921.313 2.868.313 2.931 0 5.737-.993 8.109-2.903 3.143-2.529 4.873-6.145 4.873-10.18V247.441c38.381-7.316 82.837-11.308 129.089-11.558a7.977 7.977 0 0 0 2.321-.358c.73.22 1.504.341 2.307.341 47.943 0 93.998 3.999 133.717 11.574v104.814c0 4.035 1.73 7.65 4.87 10.178 2.375 1.912 5.183 2.905 8.113 2.905.945 0 1.904-.104 2.865-.312C444.942 356.456 511 336.571 511 299.682V83.283c.002-.152-.005-.305-.005-.457 0-.033.005-.065.005-.099zm-441.38 38.64v-8.331h33.853v17.885c0 .024-.003.048-.004.073-12.419-2.9-23.756-6.141-33.849-9.626zm41.853-24.331h-32.15V82.76H243.33v14.277zm91.706 16v17.885c0 9.333-7.594 16.926-16.927 16.926s-16.926-7.593-16.926-16.926v-17.885zm40.15 106.926c-15.701.229-31.17.892-46.263 1.954v-23.026c0-11.381-9.26-20.641-20.641-20.641h-30.2c-11.381 0-20.641 9.26-20.641 20.641v31.673c-1.106.197-2.205.398-3.302.601v-70.502a32.728 32.728 0 0 0 14.116 3.186c9.954 0 18.884-4.446 24.927-11.449 6.042 7.003 14.972 11.449 24.926 11.449s18.884-4.446 24.927-11.449c6.043 7.003 14.972 11.449 24.927 11.449 2.482 0 4.897-.285 7.224-.808v56.923zm159.062-87.576a16.384 16.384 0 0 0-3.865 1.368c.436-1.242.685-2.571.685-3.959v-22.823c.072-.62.071-1.24 0-1.851V56.766c0-6.617-5.383-12-12-12h-90.967c-6.617 0-12 5.383-12 12v73.03c0 6.616 5.383 11.999 12 11.999h90.967c1.453 0 2.84-.273 4.13-.748a16.172 16.172 0 0 0-1.625 7.079v37.766c-3.367-2.624-7.585-4.203-12.174-4.203-10.952 0-19.862 8.911-19.862 19.863 0 8.105 4.886 15.081 11.862 18.166v8.089a685.95 685.95 0 0 0-37.795-4.538v-10.655c6.976-3.085 11.862-10.061 11.862-18.166 0-10.952-8.91-19.862-19.862-19.862s-19.862 8.91-19.862 19.862c0 8.105 4.886 15.081 11.862 18.166v9.354c-18.324-1.308-37.22-2.011-56.419-2.084v-65.646c5.99-5.966 9.703-14.216 9.703-23.317v-25.885a8 8 0 0 0-8-8h-1.703v-14.49c0-8.705-7.082-15.787-15.786-15.787H79.109c-8.705 0-15.787 7.082-15.787 15.787v14.49H61.62a8 8 0 0 0-8 8v10.153c-23.351-10.125-36.752-21.635-36.613-32.596.003-.277.023-.556.043-.834l.004-.073v-.014c1.141-14.57 25.816-30.209 66.523-42.046C129.524 26.268 190.758 18.91 255.999 18.91s126.475 7.357 172.422 20.716c40.707 11.836 65.382 27.476 66.523 42.046v.014c0 .019.002.043.004.063.021.292.043.584.045.876.21 17.937-35.865 37.374-92.604 49.76zm-35.31-48.532a8 8 0 0 0-9.067 1.007l-10.98 9.58-11.812-9.828a8.003 8.003 0 0 0-9.505-.54l-25.472 16.711v-40.02h82.967v31.82l-16.13-8.73zm-81.554 293.122a72.511 72.511 0 0 0 37.606-38.605c9.607-2.534 16.712-11.296 16.712-21.689v-25.58c0-12.368-10.062-22.43-22.43-22.43h-2.078c-13.625-19.322-35.482-30.726-59.338-30.726s-45.712 11.404-59.338 30.726h-2.078c-12.368 0-22.43 10.062-22.43 22.43v25.58c0 10.393 7.106 19.155 16.714 21.689a72.502 72.502 0 0 0 37.605 38.605c-52.741 12.674-93.517 58.458-97.724 114.544-.34 4.534 1.229 9.036 4.306 12.351a16.4 16.4 0 0 0 11.992 5.217h221.906c4.547 0 8.918-1.902 11.994-5.218s4.645-7.817 4.304-12.35c-4.208-56.086-44.983-101.87-97.724-114.544zm-90.943-53.865a6.438 6.438 0 0 1-6.43-6.43v-25.58a6.438 6.438 0 0 1 6.43-6.43H317.417a6.438 6.438 0 0 1 6.43 6.43v25.58a6.438 6.438 0 0 1-6.43 6.43c-24.605 0-29.791-5.178-34.806-10.185-6.09-6.081-11.916-10.732-26.61-10.732s-20.52 4.651-26.609 10.731c-5.015 5.008-10.2 10.186-34.807 10.186zm12.178 15.526c19.522-1.667 27.065-7.53 33.935-14.389 3.909-3.903 6.062-6.054 15.304-6.054s11.396 2.15 15.305 6.054c6.869 6.859 14.412 12.721 33.934 14.389-9.926 17.455-28.573 28.599-49.239 28.599s-39.312-11.143-49.238-28.599zm160.456 154.351c-.065.07-.143.099-.265.099H145.047c-.089 0-.183-.012-.264-.099-.065-.07-.088-.149-.079-.271 4.343-57.892 53.229-103.239 111.296-103.239s106.953 45.348 111.296 103.24c.009.122-.014.2-.078.271z" fill="#234268" opacity={1} data-original="#000000" />
                                                        </g>
                                                    </svg>
                                                </div>
                                                <h6>Virtual Showrooms</h6>
                                                <p>Let customers browse your furniture in virtual environments, where they can change materials, angles, and configurations in real time using 3D renders.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                        <div className={Style.UsecaseCard}>
                                            <div className={Style.UsecaseContent}>
                                                <div className={Style.UsecaseIcon}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width={512} height={512} x={0} y={0} viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className>
                                                        <g>
                                                            <path d="M34 53V35H10a3 3 0 0 1-3-3V14a3 3 0 0 1 3-3h27v-1a3 3 0 0 1 6 0v1h3a3 3 0 0 1 2.47 1.29 3 3 0 0 1 4.24 4.24L49 20.24V31.8a6 6 0 0 1 5-.46V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v54a3 3 0 0 0 3 3h33.68A11 11 0 0 1 34 53zM16 6h18a1 1 0 0 1 0 2H16a1 1 0 0 1 0-2zm-4 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM8 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm18 44H14a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2zm0-4H14a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2zm0-4H14a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z" fill="#234268" opacity={1} data-original="#000000" className />
                                                            <path d="M47 31.09v-8.86a2.93 2.93 0 0 1-1.78.81A6 6 0 0 1 46 26v5a5.47 5.47 0 0 1 1 .09zM10 13a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h24v-7a5.91 5.91 0 0 1 .78-3 3 3 0 0 1-1.85-.87l-5.66-5.66a3 3 0 0 1-.54-3.47zm11 13a1 1 0 0 1-2 0v-.5h-2v.5a1 1 0 0 1-2 0v-4.5a2.42 2.42 0 0 1 2.33-2.5h1.34A2.42 2.42 0 0 1 21 21.5zm5.67-7A2.42 2.42 0 0 1 29 21.5v3a2.42 2.42 0 0 1-2.33 2.5H24a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1zM37 13h-4.76L37 17.76z" fill="#234268" opacity={1} data-original="#000000" className />
                                                            <path d="M18.67 21h-1.34c-.15 0-.33.21-.33.5v2h2v-2c0-.29-.18-.5-.33-.5zM42 20.27h-.05zM27 24.5v-3c0-.29-.18-.5-.33-.5H25v4h1.67c.15 0 .33-.21.33-.5zM38.09 20.31h-.05v.06zM46 13h-3v4.76l4-4a1 1 0 0 0-1-.76zM60.83 34.17a4 4 0 0 0-5.83.19l-.17-.19a4 4 0 0 0-5.83.19l-.17-.19a4 4 0 0 0-4.83-.63V26a4 4 0 0 0-8 0v27a9 9 0 0 0 9 9h8a9 9 0 0 0 9-9V37a4 4 0 0 0-1.17-2.83zM53 60h-8a7 7 0 0 1-7-7V26a2 2 0 0 1 2-2 2 2 0 0 1 2 2v21a1 1 0 0 0 2 0V37a2 2 0 0 1 2-2 2 2 0 0 1 2 2v10a1 1 0 0 0 2 0V37a2 2 0 0 1 2-2 2 2 0 0 1 2 2v10a1 1 0 0 0 2 0V37a2 2 0 0 1 2-2 2 2 0 0 1 1.41.59L60 53a7 7 0 0 1-7 7zM39 10v8a1 1 0 0 0 2 0v-8a1 1 0 0 0-2 0zM51.31 13.69a1 1 0 0 0-1.41 0l-5.66 5.65a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.65-5.66a1 1 0 0 0 0-1.41zM35.76 20.76a1 1 0 0 0 0-1.42l-5.66-5.65a1 1 0 0 0-1.41 1.41l5.65 5.66a1 1 0 0 0 1.42 0z" fill="#234268" opacity={1} data-original="#000000" className />
                                                        </g>
                                                    </svg>
                                                </div>
                                                <h6>Social Media Creatives</h6>
                                                <p>Use photorealistic lifestyle renders to increase reach and engagement on social media. Great for highlighting features, bundles, or special promotions.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                        <div className={Style.UsecaseCard}>
                                            <div className={Style.UsecaseContent}>
                                                <div className={Style.UsecaseIcon}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width={512} height={512} x={0} y={0} viewBox="0 0 510 510" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" fillRule="evenodd" className>
                                                        <g>
                                                            <path d="M112.582 331.949H25a17 17 0 0 1-17-17v-127.31a17 17 0 0 1 17-17h87.582V15a7 7 0 0 1 7-7h270.836a7 7 0 0 1 7 7v155.639H485a17 17 0 0 1 17 17v127.31a17 17 0 0 1-17 17h-87.582V495a7 7 0 0 1-7 7H119.582a7 7 0 0 1-7-7zm47.105-147.31H25c-.796 0-1.559.316-2.121.879a2.996 2.996 0 0 0-.879 2.121v127.31c0 .796.316 1.559.879 2.121a2.996 2.996 0 0 0 2.121.879h87.582v-44.228H79.814a7 7 0 0 1-7-7v-30.854a7 7 0 0 1 7-7h90.741c-6.939-13.218-10.866-28.265-10.868-44.228zm223.731-14V22H126.582v148.639h34.124c6.769-45.999 46.412-81.32 94.301-81.32 47.875 0 87.518 35.321 94.287 81.32zm14 147.31H485c.796 0 1.559-.316 2.121-.879a2.996 2.996 0 0 0 .879-2.121v-127.31c0-.796-.316-1.559-.879-2.121a2.996 2.996 0 0 0-2.121-.879H350.313c-.002 15.963-3.929 31.01-10.867 44.228h90.74a7 7 0 0 1 7 7v30.854a7 7 0 0 1-7 7h-32.768zm-270.836-75.082v217.727l53.237-58.22a7 7 0 0 1 10.331 0l36.738 40.176 77.582-86.695a7 7 0 0 1 10.432 0l68.516 76.563V242.867h-52.962a96.114 96.114 0 0 1-5.789 6.808l23.843 41.309a6.999 6.999 0 0 1-7.449 10.36l-29.734-6.009-9.661 28.749a7 7 0 0 1-12.697 1.271l-26.394-45.706a96.474 96.474 0 0 1-15.147 0l-26.383 45.705a6.999 6.999 0 0 1-12.697-1.268l-9.672-28.751-29.737 6.009a7 7 0 0 1-7.448-10.361l23.848-41.303a95.779 95.779 0 0 1-5.794-6.813zm0 238.473V488h122.895l-64.492-70.529zM268.448 488h114.97v-34.588l-73.732-82.392-73.303 81.913zM112.582 242.867H86.814v16.854h25.768zM314.116 259.4a94.97 94.97 0 0 1-36.729 17.902l15.949 27.619 6.687-19.9a7 7 0 0 1 8.022-4.632l20.587 4.161zm-81.498 17.901a94.962 94.962 0 0 1-36.727-17.898l-14.519 25.146 20.583-4.16a7 7 0 0 1 8.021 4.63l6.697 19.905zm164.8-17.58h25.768v-16.854h-25.768zM78.017 198.237c4.7 0 8.516 3.816 8.516 8.516s-3.816 8.516-8.516 8.516-8.515-3.816-8.515-8.516 3.815-8.516 8.515-8.516zm-29.218 0c4.7 0 8.515 3.816 8.515 8.516s-3.815 8.516-8.515 8.516-8.516-3.816-8.516-8.516 3.816-8.516 8.516-8.516zM166.687 69.311c-3.864 0-7-3.137-7-7 0-3.864 3.136-7 7-7h176.626c3.864 0 7 3.136 7 7 0 3.863-3.136 7-7 7zm88.32 34.008c-44.909 0-81.32 36.41-81.32 81.307 0 44.909 36.41 81.32 81.32 81.32 44.896 0 81.306-36.411 81.306-81.32 0-44.896-36.41-81.307-81.306-81.307zM255 249.754c-35.866 0-65.125-29.251-65.125-65.125 0-35.866 29.259-65.118 65.125-65.118s65.125 29.252 65.125 65.118c0 35.874-29.259 65.125-65.125 65.125zm0-14c28.156 0 51.125-22.963 51.125-51.125 0-28.156-22.969-51.118-51.125-51.118s-51.125 22.962-51.125 51.118c0 28.162 22.969 51.125 51.125 51.125zm26.857-75.321a7.004 7.004 0 0 1 9.847 1.022 7.003 7.003 0 0 1-1.022 9.846l-46.207 37.524a7.002 7.002 0 0 1-10.224-1.532l-16.332-24.322a7.004 7.004 0 0 1 1.909-9.714 7.004 7.004 0 0 1 9.714 1.909l12.058 17.959zm-54.913 183.239c15.615 0 28.293 12.678 28.293 28.294s-12.678 28.294-28.293 28.294c-15.616 0-28.294-12.678-28.294-28.294s12.678-28.294 28.294-28.294zm0 14c-7.889 0-14.294 6.405-14.294 14.294s6.405 14.294 14.294 14.294c7.888 0 14.293-6.405 14.293-14.294s-6.405-14.294-14.293-14.294z" fill="#234268" opacity={1} data-original="#000000" className />
                                                        </g>
                                                    </svg>
                                                </div>
                                                <h6>Print-Ready Images</h6>
                                                <p>Repurpose 3D renders for print marketing like catalogs or brochures. Models can be adjusted for color and material without needing another shoot.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                        <div className={Style.UsecaseCard}>
                                            <div className={Style.UsecaseContent}>
                                                <div className={Style.UsecaseIcon}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" width={512} height={512} x={0} y={0} viewBox="0 0 64 64" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className>
                                                        <g>
                                                            <path d="M11 42a11 11 0 1 0 11 11 11.012 11.012 0 0 0-11-11Zm0 20a9 9 0 1 1 9-9 9.01 9.01 0 0 1-9 9Z" fill="#234268" opacity={1} data-original="#000000" className />
                                                            <path d="M12.745 49.447a.822.822 0 0 1 .255.53A1 1 0 0 0 13.95 51a1.032 1.032 0 0 0 1.048-.95 2.797 2.797 0 0 0-.8-1.978A3.678 3.678 0 0 0 12 47.062V47a1 1 0 0 0-2 0v.085a3.445 3.445 0 0 0 0 6.832v2.99a1.576 1.576 0 0 1-.745-.354.841.841 0 0 1-.255-.506 1 1 0 0 0-1.998-.096 2.797 2.797 0 0 0 .8 1.977A3.677 3.677 0 0 0 10 58.938V59a1 1 0 0 0 2 0v-.085a3.445 3.445 0 0 0 0-6.832v-2.989a1.573 1.573 0 0 1 .745.353ZM9 50.5A1.421 1.421 0 0 1 10 49.143v2.716a1.423 1.423 0 0 1-.999-1.359Zm3.998 5A1.421 1.421 0 0 1 12 56.856v-2.716a1.423 1.423 0 0 1 .999 1.359ZM63 57h-5V15a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v42h-4V21a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v36h-4V27a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v16.21a1 1 0 0 0 2 0V28h6v29h-3.93a1 1 0 1 0 0 2H62v3H20.79a1 1 0 0 0 0 2H63a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM50 16h6v41h-6Zm-14 6h6v35h-6ZM7 40.58a1 1 0 0 0 1-1V33h6v6.58a1 1 0 0 0 2 0V32a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v7.58a1 1 0 0 0 1 1ZM10.999 25l.048-.001C28.967 24.145 46.52 8.673 52 3.404V10a1 1 0 0 0 2 0V1l-.002-.012A1.024 1.024 0 0 0 53 0h-9a1 1 0 0 0 0 2h6.554C45.165 7.119 27.92 22.193 10.953 23.001A1 1 0 0 0 10.999 25Z" fill="#234268" opacity={1} data-original="#000000" className />
                                                        </g>
                                                    </svg>
                                                </div>
                                                <h6>Sales & Marketing Presentations</h6>
                                                <p>Use immersive 3D visuals at trade shows or pitches to demonstrate product features, encourage interaction, and leave a lasting impression on your audience.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <FurnitureModelingSlider productsmodeling={productsmodeling} />

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">3D Furniture Modeling for eCommerce: Our Process</h2>
                                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3 pb-3">
                                    <div className="col">
                                        <div className={Style.BorderedWrapper}>
                                            <div className={Style.CustomCard}>
                                                <p>Collect client-provided references.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className={Style.BorderedWrapper}>
                                            <div className={Style.CustomCard}>
                                                <p>Confirm scope and deliverables.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className={Style.BorderedWrapper}>
                                            <div className={Style.CustomCard}>
                                                <p>Share drafts for client approval.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className={Style.BorderedWrapper}>
                                            <div className={Style.CustomCard}>
                                                <p>Design, render, and test models.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className={Style.BorderedWrapper}>
                                            <div className={Style.CustomCard}>
                                                <p>Deliver final assets and apply feedback.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Advantages of Partnering with Tech2Globe for 3D Furniture Modeling and Rendering</h2>
                                <p>Tech2Globe is an ISO-certified provider known for its commitment to quality and information security. With over 25 years of experience in the IT outsourcing space, we bring deep expertise in eCommerce store management and product image editing. Our photorealistic 3D furniture modeling services are designed to complement this wide range of solutions, offering enhanced growth potential for global eCommerce businesses. We are also a trusted Shopify partner, CMMI Level 3 and HIPAA certified, and a recognized member of the Amazon SPN network.</p>
                                <p>Beyond improving the visual appeal of your product listings and boosting your marketing returns, our 3D furniture rendering services deliver several additional benefits.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <div className="row pt-3 pb-3">
                                    <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12">
                                        <div className={`${Style.IcoGreyCard} p-4 shadow-sm rounded bg-light h-100`}>
                                            <FaFileContract />
                                            <h5 className="fw-bold">NDA Protection</h5>
                                            <p className="mb-0">We prioritize your confidentiality with legally binding non-disclosure agreements and secure processes.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12">
                                        <div className={`${Style.IcoGreyCard} p-4 shadow-sm rounded bg-light h-100`}>
                                            <FaUsersCog />
                                            <h5 className="fw-bold">Skilled & Scalable Team</h5>
                                            <p className="mb-0">Tech2Globe efficiently manages projects of all sizes with a large, experienced team to meet every deadline.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12">
                                        <div className={`${Style.IcoGreyCard} p-4 shadow-sm rounded bg-light h-100`}>
                                            <FaStar />
                                            <h5 className="fw-bold">Brand-Aligned Results</h5>
                                            <p className="mb-0">Every 3D output we deliver reflects your brand’s identity and aesthetic with precision and consistency.</p>
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
                                                How much does 3D furniture rendering typically cost?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                The pricing depends on project scope, design complexity, and rendering
                                                detail. We offer custom quotes based on your requirements.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="faqTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo">
                                                Is 3D furniture modeling considered costly?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                The cost varies depending on the detail level and model complexity. We
                                                ensure competitive pricing tailored to your business needs.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="faqThree">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                                What is the usual delivery time for photorealistic furniture renders?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Turnaround time typically ranges from 3 to 7 business days depending on the
                                                project complexity and number of renders needed.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="faqFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour">
                                                What resolution formats do you provide?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                We deliver renders in standard HD, 4K, and custom resolutions as needed.
                                                Maximum resolution depends on your intended usage.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="faqFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive">
                                                What files do I need to share to get started?
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                CAD drawings, sketches, images, or product specs help us begin the modeling
                                                process. The more details, the better.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="faqSix">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseSix">
                                                Can you create custom furniture models based on my designs?
                                            </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse"
                                            data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Yes, we offer fully customized 3D modeling based on your unique furniture
                                                concepts, sketches, or technical specifications.
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

        </>
    )
};