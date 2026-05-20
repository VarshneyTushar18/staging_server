import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import { FaHeadset, FaBullseye, FaUserTie, FaHandPointRight } from "react-icons/fa";

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
    title: "Lazada Marketplace Management",
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



export default function LazadaMarketplaceManagement() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Lazada Marketplace Management" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Lazada Marketplace Management" imageSrc={"/images/services/service-inner/ecommerce-banner-1.jpg"} />
                            <div className={Style.ContentDiv}>
                                <h2 className="mb-3">Tech2Globe's Lazada Marketplace Services - Where Innovation Meets Results</h2>
                                <p>Our streamlined processes and cost-effective pricing plans can help you save time and money on your Lazada Marketplace operations, while still achieving your business goals.</p>

                                <h2 className="mb-3">Mastering Lazada: Tech2Globe's Guide to E-Commerce Dominance</h2>

                                <p>Looking to tap into Southeast Asia's e-commerce behemoth, Lazada, and its 130 million annual consumers? Tech2Globe is here to help! Our comprehensive guide simplifies the sign-up process and offers expert advice on how to maximise your profits. Stay ahead of the competition by understanding your rivals and showcasing your products with impeccable quality images. And remember, the customer is king! With Tech2Globe's guidance, you'll keep your customers happy and come back for more. Don't miss out on this golden opportunity to conquer <strong>Lazada Marketplace Management</strong> and expand your business. Partner with Tech2Globe today and unlock your full potential!</p>

                                <h2 className="mb-3">Get Your Lazada Seller Center Account Up and Running with Tech2Globe's Account Creation Assistance</h2>
                                <p>Tech2Globe is a company that offers a wide range of services to help you succeed as a seller on Lazada. Here are some of the services we offer:</p>

                                <ul className="inner-list ps-0 pb-2">
                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Account Creation Assistance:
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe can assist you with setting up your Lazada seller account, regardless of whether you're a local seller in Singapore or based abroad. We'll guide you through the sign-up process and provide support as needed to ensure that your account is up and running in no time.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Product Listing Support:
                                        </strong>
                                        <p className="mb-0">
                                            Creating product listings that comply with Lazada's strict requirements can be challenging, but Tech2Globe can help. We have a team of experts who know the ins and outs of Lazada's rules and regulations, and we can assist you in creating product listings that comply with all of the platform's requirements.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Optimization Services:
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe can help optimise your product listings for maximum visibility and sales. We can assist with keyword research, product title and description optimization, and <strong>Lazada Product Upload</strong> optimization to make sure your listings stand out from the competition.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Marketing Support:
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe can help you promote your products on Lazada through various marketing channels, including sponsored product ads, flash sales, and social media marketing. We can assist with campaign planning, targeting, and optimization to help you reach your target audience and increase sales.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Inventory Management:
                                        </strong>
                                        <p className="mb-0">
                                            <strong>Lazada Inventory Management</strong> can be time-consuming, but Tech2Globe can help. We can assist with inventory tracking, forecasting, and replenishment to ensure that your products are always in stock and ready to sell.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Order Management:
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe can help you manage your orders on Lazada, from order processing and fulfilment to shipping and delivery. We can assist with order tracking and management to ensure that your customers receive their orders on time and with minimal hassle.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Payment and Financial Management:
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe can help you manage your payments and finances on Lazada, from setting up your Seller Wallet to reconciling your sales and expenses. We can assist with payment gateway integration, transaction monitoring, and financial reporting to help you stay on top of your business's finances.
                                        </p>
                                    </li>
                                </ul>

                                <h2 className="mb-3">Join Forces with Tech2Globe for Effortless Lazada Marketplace Management</h2>
                                <p>If you're looking to sell on Lazada, Tech2Globe is a great choice for your e-commerce needs. Here are some reasons why you might want to choose Tech2Globe for Lazada marketplace services:</p>


                                <ul className="inner-list ps-0 pb-2">
                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Expertise and Experience:
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe has a team of experts with years of experience in e-commerce and a deep understanding of the Lazada platform. We can help you navigate the platform and optimise your store for maximum sales and can provide you <strong>Lazada Consulting Services</strong>.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Customised Services:
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe offers customised services tailored to your specific needs and goals. Whether you need help with account creation, product listing, optimization, marketing, inventory and order management, or payment and financial management, Tech2Globe can provide the services you need.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Time and Cost Savings:
                                        </strong>
                                        <p className="mb-0">
                                            By outsourcing your <strong>Lazada Marketplace Management</strong> services to Tech2Globe, you can save time and money that would otherwise be spent on hiring and training in-house staff. Tech2Globe can handle all aspects of your Lazada store, leaving you free to focus on growing your business.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Multilingual Support:
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe provides multilingual support to help you overcome language barriers and reach a wider audience. We offer services in multiple languages, including English, Mandarin, Malay, Thai, and Vietnamese.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Comprehensive Support:
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe provides comprehensive support throughout the entire process of setting up and managing your Lazada store. We can help you with everything from <strong>Lazada Integration</strong> to account creation, product listing to marketing, fulfilment, and financial management.
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