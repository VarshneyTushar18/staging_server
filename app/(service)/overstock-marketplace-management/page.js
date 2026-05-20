import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import { FaHeadset, FaBullseye, FaUserTie } from "react-icons/fa";

export const metadata = {
    title: "",
    description:
        "",
    keywords: [
        ""
    ],
    openGraph: {
        title: "",
        siteName: "Tech2Globe Web Solutions LLP",
        description:
            "",
        url: ""
    },
    twitter: {
        card: "summary_large_image",
        title: "",
        description:
            ""
    },
    alternates: {
        canonical: ""
    }
};

const pageHeaderData = {
    title: "Overstock Marketplace Management",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};

const usefulLinks = [
    { id: 1, name: "Amazon Consulting Services", path: "/amazon-consulting-services" },
    { id: 2, name: "Flipkart", path: "/online-business-management-flipkart" },
    { id: 3, name: "Amazon India", path: "/online-business-management-amazon-in" },
    { id: 4, name: "eBay India", path: "/eBay-management" },
    { id: 5, name: "Snapdeal", path: "/online-business-management-snapdeal" },
    { id: 6, name: "ShopClues", path: "/online-business-management-shopclues" },
    { id: 7, name: "Paytm", path: "/online-business-management-paytm" },
    { id: 8, name: "Amazon Marketplaces", path: "/online-business-management-amazon-com" },
    { id: 9, name: "eBay Marketplaces", path: "/online-business-management-ebay-com" },
    { id: 10, name: "Sears", path: "/online-business-management-sears" },
    { id: 11, name: "Newegg", path: "/online-business-management-newegg" },
    { id: 12, name: "Rakuten", path: "/online-business-management-rakuten" },
];



const sidebarSections = [
    { heading: "Useful Links", links: usefulLinks },
];


const portfolio = [
    {
        title: "Product Uploading",
        items: [
            {
                title: "Lacanvas",
                tech: "PHP, Mysql, Jquery",
                link: "http://www.lacanvas.com/",
                img: "/images/services/portfolio-img/lacanvas.jpg",
            },
            {
                title: "Linkcycle",
                tech: "PHP, Mysql, Jquery",
                link: "http://www.linkcycle.com/",
                img: "/images/services/portfolio-img/linkcycle.jpg",
            },
            {
                title: "Silver Goldinto Cash",
                tech: "PHP, Mysql",
                link: "http://www.silvergoldintocash.com/",
                img: "/images/services/portfolio-img/silvergoldintocash.jpg",
            },
            {
                title: "Travel Blue",
                tech: "PHP, Mysql, Jquery",
                link: "http://www.travel-blue.com/",
                img: "/images/services/portfolio-img/travel-blue.jpg",
            },
            {
                title: "Windsor One",
                tech: "PHP, Mysql, Jquery",
                link: "http://www.windsorone.com/",
                img: "/images/services/portfolio-img/windsorone.jpg",
            },
            {
                title: "Zphotoedit",
                tech: "PHP, Mysql, Jquery",
                link: "http://www.zphotoedit.com/",
                img: "/images/services/portfolio-img/zphotoedit.jpg",
            },
            {
                title: "Luiolei",
                tech: "Asp.net, C#,SQL Server , Jquery.",
                link: "https://www.luiolei.com/",
                img: "/images/services/portfolio-img/luiolei.jpg",
            },
            {
                title: "Plaza Surf Sports",
                tech: "Asp.net, C#,SQL Server , Jquery.",
                link: "http://www.plazasurfsports.com/",
                img: "/images/services/portfolio-img/plazasurfsports.jpg",
            },
            {
                title: "Shopaloo",
                tech: "Asp.net, C#,SQL Server , Jquery.",
                link: "https://shopaloo.com/",
                img: "/images/services/portfolio-img/shopaloo.jpg",
            },
            {
                title: "Sports456",
                tech: "Asp.net, C#,SQL Server , Jquery.",
                link: "https://www.sports456.com/",
                img: "/images/services/portfolio-img/sports456.jpg",
            }
        ],
    },
    {
        title: "Web Stores Design & Dev",
        items: [
            {
                title: "Consult for PPP",
                tech: "Asp.net, C#, SQL Server, Jquery.",
                link: "https://consultforppp.com/",
                img: "/images/services/portfolio-img/consultforppp.jpg",
            },
            {
                title: "Devouttechs",
                tech: "Asp.net, C#, SQL Server, Jquery.",
                link: "http://devouttechs.com/",
                img: "/images/services/portfolio-img/devouttechs.jpg",
            },
            {
                title: "Geturkart",
                tech: "Asp.net, C#, SQL Server, Jquery.",
                link: "https://geturkart.com/",
                img: "/images/services/portfolio-img/geturkart.jpg",
            },
            {
                title: "Nopextensions",
                tech: "Asp.net, C#, SQL Server, Jquery.",
                link: "http://nopextensions.com/",
                img: "/images/services/portfolio-img/nopextensions.jpg",
            },
            {
                title: "Shopaloo",
                tech: "Asp.net, C#,SQL Server , Jquery.",
                link: "https://shopaloo.com/",
                img: "/images/services/portfolio-img/shopaloo.jpg",
            },
            {
                title: "Sports456",
                tech: "Asp.net, C#,SQL Server , Jquery.",
                link: "https://www.sports456.com/",
                img: "/images/services/portfolio-img/sports456.jpg",
            },
            {
                title: "Luiolei",
                tech: "Asp.net, C#,SQL Server , Jquery.",
                link: "https://www.luiolei.com/",
                img: "/images/services/portfolio-img/luiolei.jpg",
            },
            {
                title: "Plaza Surf Sports",
                tech: "Asp.net, C#,SQL Server , Jquery.",
                link: "http://www.plazasurfsports.com/",
                img: "/images/services/portfolio-img/plazasurfsports.jpg",
            }
        ],
    },
    {
        title: "Indian Ecomm MarketPlace",
        items: [
            {
                title: "Windsor One",
                tech: "PHP, Mysql, Jquery",
                link: "http://www.windsorone.com/",
                img: "/images/services/portfolio-img/windsorone.jpg",
            },
            {
                title: "Zphotoedit",
                tech: "PHP, Mysql, Jquery",
                link: "http://www.zphotoedit.com/",
                img: "/images/services/portfolio-img/zphotoedit.jpg",
            },
            {
                title: "My Orthosoft",
                tech: "Cake PHP",
                link: "http://www.myorthosoft.com/",
                img: "/images/services/portfolio-img/myorthosoft.jpg",
            },
            {
                title: "Saleswarp",
                tech: "Cake PHP",
                link: "https://saleswarp.com/",
                img: "/images/services/portfolio-img/saleswarp.jpg",
            },
            {
                title: "Webmallng",
                tech: "PHP, Mysql, Jquery.",
                link: "https://www.webmallng.com/",
                img: "/images/services/portfolio-img/webmallng.jpg",
            },
            {
                title: "UnotechonLine",
                tech: "PHP, Mysql, Jquery.",
                link: "https://www.unotechonline.com/",
                img: "/images/services/portfolio-img/unotechonline.jpg",
            },
            {
                title: "Lacanvas",
                tech: "PHP, Mysql, Jquery.",
                link: "http://www.lacanvas.com/",
                img: "/images/services/portfolio-img/lacanvas.jpg",
            },
            {
                title: "Linkcycle",
                tech: "PHP, Mysql, Jquery",
                link: "http://www.linkcycle.com/",
                img: "/images/services/portfolio-img/linkcycle.jpg",
            },
            {
                title: "Silver Goldinto Cash",
                tech: "PHP, Mysql",
                link: "http://www.silvergoldintocash.com/",
                img: "/images/services/portfolio-img/silvergoldintocash.jpg",
            },
            {
                title: "Travel Blue",
                tech: "PHP, Mysql, Jquery",
                link: "http://www.travel-blue.com/",
                img: "/images/services/portfolio-img/travel-blue.jpg",
            },
        ],
    },
    {
        title: "International Ecomm Marketplace",
        subTabs: [
            {
                title: "Shopify",
                items: [
                    {
                        title: "Shop Modern Accessory",
                        tech: "Shopify",
                        link: "http://shopmodernaccessory.com/",
                        img: "/images/services/portfolio-img/shopmodernaccessory.jpg",
                    },
                    {
                        title: "Donna Bella Jewelry",
                        tech: "Shopify",
                        link: "http://www.donnabellajewelry.dk/",
                        img: "/images/services/portfolio-img/donnabellajewelry.jpg",
                    },
                    {
                        title: "E-Panneur",
                        tech: "Shopify",
                        link: "http://e-panneur.ca/",
                        img: "/images/services/portfolio-img/e-panneur.jpg",
                    },
                ],
            },
            {
                title: "Magento",
                items: [
                    {
                        title: "Sports456",
                        tech: "Magento",
                        link: "http://www.sports456.com/",
                        img: "/images/services/portfolio-img/sports456.jpg",
                    },
                    {
                        title: "All Extreme",
                        tech: "Magento",
                        link: "http://www.allextreme.in/",
                        img: "/images/services/portfolio-img/allextreme.jpg",
                    },
                    {
                        title: "Shoesuite",
                        tech: "Magento",
                        link: "https://www.shoesuite.ie/",
                        img: "/images/services/portfolio-img/shoesuite.jpg",
                    },
                    {
                        title: "Atkins",
                        tech: "Magento",
                        link: "https://www.atkins.ie/",
                        img: "/images/services/portfolio-img/atkins.jpg",
                    },
                    {
                        title: "Director Derblinds",
                        tech: "Magento",
                        link: "https://www.directorderblinds.co.uk/",
                        img: "/images/services/portfolio-img/directorderblinds.jpg",
                    },
                ],
            },
            {
                title: "BigCommerce",
                items: [
                    {
                        title: "Coovy Sports",
                        tech: "BigCommerce",
                        link: "https://coovysports.com/",
                        img: "/images/services/portfolio-img/coovysports.jpg",
                    },
                ],
            },
            {
                title: "NopCommerce",
                items: [
                    {
                        title: "Luiolei",
                        tech: "NopCommerce",
                        link: "http://www.luiolei.com/",
                        img: "/images/services/portfolio-img/luiolei.jpg",
                    },
                    {
                        title: "Plaza Surf Sports",
                        tech: "NopCommerce",
                        link: "http://www.plazasurfsports.com/",
                        img: "/images/services/portfolio-img/plazasurfsports.jpg",
                    },
                    {
                        title: "Home Turph",
                        tech: "NopCommerce",
                        link: "https://www.hometurph.com/",
                        img: "/images/services/portfolio-img/hometurph.jpg",
                    },
                ],
            },
        ],
    },
]



export default function OverstockMarketplaceManagement() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Overstock Marketplace Management" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Overstock Marketplace Management" imageSrc={"/images/services/service-inner/ecommerce-banner-1.jpg"} />
                            <div className={Style.ContentDiv}>
                                <h2 className="mb-3">Overstock Marketplace Services: Comprehensive E-Commerce Solutions</h2>
                                <p>Get Expert Support Every Step of the Way with Our Dedicated Team of E-Commerce Specialists</p>

                                <h2 className="mb-3">Maximise Your Brand's Potential on Overstock with Tech2Globe's Data Entry Services</h2>
                                <p>Tech2Globe's ecommerce product data entry services provide an incredible brand-building opportunity for businesses that specialise in high-profile products and top-of-the-line goods. Our team can help you effortlessly sell on Overstock.com by expanding your product listings, increasing brand visibility, and managing orders, shipping, and returns. We create unique and engaging content for your <strong>Overstock product listings</strong> and offer personalised support while working within your budget and time constraints.</p>

                                <p>With <strong>Overstock Marketplace</strong> being recognized as one of the hundred most trustworthy companies in America, we ensure to leverage our understanding of the market's structure, implement valid process techniques, and inspire higher sales. Take advantage of this opportunity and watch your business thrive on Overstock.com with Tech2Globe's Overstock data entry services.</p>



                                <h2 className="mb-3">Partner with Tech2Globe for High-Quality Overstock Product Data Entry Services</h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4>Comprehensive Overstock Marketplace Services</h4>
                                        <p>Our services are designed to help you sell on Overstock.com with ease. We offer a range of services, including product data entry, order management, shipping and returns management, and more.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>High-Quality Data Entry</h4>
                                        <p>Our team of experienced professionals ensures that your product data is entered accurately and efficiently, helping you to improve your <strong>Overstock Bulk Data Entry Services</strong> and increase sales.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Brand Building Opportunities</h4>
                                        <p>Overstock.com is a popular online marketplace for high-profile products and top-of-the-line goods. Partnering with Tech2Globe for Overstock Product Upload Services can help you build your brand and expand your visibility in the marketplace.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Customised Solutions</h4>
                                        <p>We understand that every business is unique, which is why we offer customised solutions that are tailored to your specific needs and requirements.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Cost-Effective Services</h4>
                                        <p>Our services are affordable and designed to help you save money while maximising your returns on investment and also help you with your <strong>Overstock account management</strong>.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Quick Turnaround Time</h4>
                                        <p>We understand the importance of time in the eCommerce industry, which is why we ensure quick turnaround times for our services .</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Personalised Support</h4>
                                        <p>Our team offers personalised support to ensure that you get the most out of our services. We are always available to answer your queries and provide assistance whenever you need it.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Enhanced Sales</h4>
                                        <p>Our services are designed to help you enhance your sales and boost your profitability. By partnering with Tech2Globe, you can get <strong>Overstock Listing Services</strong> and take your business to the next level and achieve your goals in Overstock.</p>
                                    </div>
                                </div>

                            </div>


                            <div className={Style.ContentDiv}>
                                <h2 className="mb-3">Streamline Your Overstock Inventory Integration And Product Pricing with Our Help</h2>
                                <p>Our pricing experts can help you simplify the complex process of pricing and repricing your Overstock products. We offer a customised pricing strategy to ensure your profits aren't dampened by platform fees, shipping charges, taxes, or competition. With a cost-based, value-based, or competition-based pricing model, we guarantee a decent return on investment. Our product listing services include monitoring for website pricing errors, penalties, and obligations to protect against losses from pricing inconsistencies. Let us simplify your <strong>Overstock Product Upload</strong> and product pricing, so you can focus on growing your business. Partner with us today for maximum profits!</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="mb-3">Choose Tech2Globe for Optimal Overstock Marketplace Success</h2>
                                <ul className="inner-list ps-0 pb-2">
                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Simplify Your Overstock Experience
                                        </strong>
                                        <p className="mb-0">
                                            With Tech2Globe by your side, you don't have to worry about the complexities of managing your Overstock product listings. We make the process simple and streamlined, so you can focus on growing your business as an <strong>Overstock seller</strong>.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Experience the Latest Technologies and Best Practices
                                        </strong>
                                        <p className="mb-0">
                                            Our team of experts is constantly staying up-to-date with the latest technologies and best practices in the industry. We use advanced tools and techniques to ensure that your listings are optimised for maximum visibility and sales with Tech2Globe’s <strong>Overstock Product Listing Services</strong>.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Exceptional Customer Service
                                        </strong>
                                        <p className="mb-0">
                                            We are committed to providing exceptional customer service, and we go above and beyond to ensure that our clients are satisfied with our work. We are available around the clock to answer any questions or concerns you may have and work closely with you to understand your unique needs and goals with our <strong>Overstock Consulting Services</strong>.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Achieve Your Growth and Profitability Goals
                                        </strong>
                                        <p className="mb-0">
                                            Partnering with Tech2Globe for your Overstock needs is a smart investment in your business's success. Let us help you take your listings to the next level and achieve your growth and profitability goals.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Creative Solutions for Your Business
                                        </strong>
                                        <p className="mb-0">
                                            We understand that every business is unique, which is why we offer creative solutions tailored to your specific needs. Whether you need help with pricing, marketing, product listings, or <strong>product data entry on Overstock</strong>, we have the expertise and experience to help you succeed.
                                        </p>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                            <div className={Style.StickyTop}>
                                <ServiceSidebar sections={sidebarSections} />
                            </div>
                        </div>
                    </div>
                </div>
            </section >


            <div className="StoreCreationTabs">
                <PortfolioTabs data={portfolio} />
            </div>
        </>
    )
};