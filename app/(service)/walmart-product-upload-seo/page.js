import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaArrowRight, FaChartBar, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaLightbulb, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import "./custom.css";

export const metadata = {
    title: "Best Walmart Advertising Agency | Walmart PPC Service",
    description:
        "Drive more sales on Walmart with Tech2Globe's Walmart PPC advertising. Trusted as the best Walmart advertising agency for professional, results-driven campaigns.",
    keywords:
        "Amazon translation services, Amazon translation services in india, amazon translate",
    openGraph: {
        title: "Best Walmart Advertising Agency | Walmart PPC Service",
        siteName: "Tech2Globe Web Solutions LLP",
        description:
            "Drive more sales on Walmart with Tech2Globe's Walmart PPC advertising. Trusted as the best Walmart advertising agency for professional, results-driven campaigns.",
        url: "https://www.tech2globe.com/walmart-advertisement",
    },
    twitter: {
        card: "Best Walmart Advertising Agency | Walmart PPC Service",
        title: "Best Walmart Advertising Agency | Walmart PPC Service",
        description:
            "Drive more sales on Walmart with Tech2Globe's Walmart PPC advertising. Trusted as the best Walmart advertising agency for professional, results-driven campaigns.",
    },
    alternates: {
        canonical: "https://www.tech2globe.com/walmart-advertisement",
    },
};

const pageHeaderData = {
    title: "Walmart Product Upload & SEO: Enhance your marketplace success",
    description:
        "Ready to optimize your Walmart Marketplace visibility? Partner with Tech2Globe for effective product uploads and SEO strategies to boost your success.",
    buttonText: "Contact us",
    buttonLink: "/cpntact-us",
    backgroundImage: "/images/services/walmart.jpg", // your banner image
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


const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe did a phenomenal job uploading and optimizing our Walmart product listings. Their SEO practices helped our items appear in top search results and increased daily traffic significantly.",
        name: "Sofia Mendes",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "We struggled with Walmart product uploads until we hired Tech2Globe. Their team ensured accurate product data, keyword-rich titles, and image standards were met. The results were outstanding.",
        name: "Ravi Mehta",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "From bulk product uploads to SEO optimization, Tech2Globe handled everything smoothly. Their attention to detail and use of strategic keywords helped our catalog gain more traction on Walmart.",
        name: "Claire Donovan",
    },
];


export default function WalmartProductUploadSeo() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb pageName="Walmart Product Upload Seo" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className={Style.ContentDiv}>
                                <h2 className="pb-3">Why effective Product Upload and SEO matters?</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCard}>
                                            <div className={Style.WaIcon}>
                                                <img
                                                    src="/images/services/service-inner/High-visibility.png"
                                                    alt="High Visibility With Low Competition"
                                                    width="100%"
                                                />
                                            </div>
                                            <h4>High Visibility With Low Competition</h4>
                                            <p>Uploading your products on Walmart Marketplace with SEO optimized listing can leverage its low competition landscape. Optimized listing can boost your search rankings and get you more conversions.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCard}>
                                            <div className={Style.WaIcon}>
                                                <img
                                                    src="/images/services/service-inner/High-Customer-Engagement.png"
                                                    alt="High Customer Engagement"
                                                    width="100%"
                                                />
                                            </div>
                                            <h4>High Customer Engagement</h4>
                                            <p>With good titles, better descriptions, high-quality images and accurate attributes that are in line with customer's search queried, you can improve click-through rates and conversions for wider reach in customers.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCard}>
                                            <div className={Style.WaIcon}>
                                                <img
                                                    src="/images/services/service-inner/Cost-Effective-Growth.png"
                                                    alt="Cost-Effective Growth"
                                                    width="100%"
                                                />
                                            </div>
                                            <h4>Cost-Effective Growth</h4>
                                            <p>Walmart Marketplace has no upfront costs and has a pay-per-sale transaction model, makes it an attractive marketplace. Optimized listings, targeted ads & campaigns can maximize return-on-investment (ROI) and help you scale quickly.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Walmart Product Upload</h2>
                                <p>The <sup>1st</sup> step is to upload products on Walmart Marketplace by using Seller Centre. Uploading products accurately is the most important step and it ensures the product is visible in searches. This is how you do it:</p>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card border-0 shadow-sm p-2">
                                            <h5 className="borderleft">Log In</h5>
                                            <p>Access Walmart Seller Centre account on Walmart, then go to 'Items & Inventory', and select 'Manage Items' - 'Add New Items'.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card border-0 shadow-sm p-2">
                                            <h5 className="borderleft">Upload Items</h5>
                                            <p>Put details like product title, description, price, images, attributes and stock keeping units (SKU) for compliance. Upload and track status in Activity Feed. Processing takes up to 24 hours.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card border-0 shadow-sm p-2">
                                            <h5 className="borderleft">Correct Practices</h5>
                                            <p>Categorize products correctly using Walmart category options. Fill out all details to match customer filters. Check data to reduce errors and ensure compliance of Walmart guidelines are met.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Walmart Seo: Optimizing for Higher Ranking Online</h2>
                                <p>Optimizing your listings for higher ranking in searches is the next step. This can boost your visibility and sales among the large customer base. Keep in mind the following steps in order to optimize effectively:</p>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="card border-0 shadow-sm p-2">
                                            <h5 className="borderleft">Keyword Research</h5>
                                            <p>Utilize useful tactics like autocomplete suggestions and third party tools like Semrush and Google Keyword searches to figure out high-traffic keywords on Walmart. You can also analyze your competitor's listings to get ideas for relevant Keywords.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="card border-0 shadow-sm p-2">
                                            <h5 className="borderleft">Product Titles</h5>
                                            <p>Create short titles, preferably less than 60 characters. Use this format: Brand name - Product name - Model - Key Attributes. For example: Sony Wireless Earbuds WF-1000XM4 - Black. By using primary keywords, you can increase their visibility.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="card border-0 shadow-sm p-2">
                                            <h5 className="borderleft">Descriptions & Features</h5>
                                            <p>Writing an appealing description will highlight unique attributes and improves search visibility. Write a description within 150 to 300 words range with organic keywords and focusing on benefits and use examples.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="card border-0 shadow-sm p-2">
                                            <h5 className="borderleft">High Quality Images</h5>
                                            <p>Uploading high-quality images will attract customers towards that product. Upload 4 to 7 high pixels images, preferably with white-background, multiple angles, and regular usage photographs is necessary.</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="card border-0 shadow-sm p-2">
                                            <h5 className="borderleft">Categories & Attributes</h5>
                                            <p>Putting products in the right category is important for customer filters and Walmart algorithm. Customers can find your products easily if they are properly categorized with full attributes. For example, Home - Kitchen Appliances - Utensils.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Monitoring and Optimizing Performance</h2>
                                <p>Walmart Seller Center tools, like Search Insights and Catalog Performance reports can be used to track keyword performance, clicks and conversion rates. It is important that the data is analysed and the listings are updated regularly for the product to appear higher in search rankings. Maintain competitive pricing and reviewing feedbacks can go a long way to improve rankings and boosting sales. Doing regular inventory updates can prevent stocks from being emptied and improving sales.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Why Choose to Partner With Tech2globe?</h2>
                                <p>By partnering with us, you can ensure your Walmart business thrive and scale quickly. Our expertise has generated rapid growth for business by utilizing our:</p>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/list.png"
                                                alt="Comprehensive Services"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Comprehensive Services</h5>
                                                <p>We will handle uploading product listing with SEO optimized keywords, ads, and performance analytics, making sure that you have maximum Walmart marketplace visibility in front of your customers.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/dollar.png"
                                                alt="Cost-Effective Solutions"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Cost-Effective Solutions</h5>
                                                <p>You can maximize your return-on-investments (ROI) with targeted ads and campaigns. We will help you optimize your bidding process, reducing your excess expenditure.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/performance.png"
                                                alt="Proven Results"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Proven Results</h5>
                                                <p>We have expert professionals who have given exceptional results. They have achieved a 40% sales increase for a tool retailer in 3 months via optimized listings and Walmart PPC Campaigns.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/aim.png"
                                                alt="Audience Targeting"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Audience Targeting</h5>
                                                <p>We will customize strategies and target audiences based on data analysis of sales performance and customer feedbacks. By boosting reach with Google Ads and social media, we can drive traffic to your listings.</p>
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

            <ClientSlider testimonials={testimonials} />

        </>
    )
};