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
    title: "Bestbuy Marketplace Management",
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



export default function BestbuyMarketplaceManagement() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Bestbuy Marketplace Management" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Bestbuy Marketplace Management" imageSrc={"/images/services/service-inner/ecommerce-banner-1.jpg"} />
                            <div className={Style.ContentDiv}>
                                <h2 className="mb-3">Amplify Your Sales with Best Buy Marketplace Services by Tech2Globe</h2>
                                <p>Tech2Globe’s Comprehensive Solutions Help You Streamline Order Management, Optimise Product Listings, and Maximise Revenue on Best Buy</p>

                                <h2 className="mb-3">Why Best Buy Marketplace is the Perfect Choice for Your E-commerce Business</h2>


                                <ul className="inner-list ps-0 pb-2">
                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Reach a vast customer base
                                        </strong>
                                        <p className="mb-0">
                                            Best Buy attracts millions of customers each year, making it an ideal platform to showcase your products and increase your brand visibility.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Benefit from brand recognition
                                        </strong>
                                        <p className="mb-0">
                                            Best Buy is a household name when it comes to electronic goods, and being associated with this brand can enhance your credibility and reputation.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Access to powerful marketing tools
                                        </strong>
                                        <p className="mb-0">
                                            Best Buy offers various marketing tools, such as promotions and product recommendations, to help increase your sales and reach a larger audience as best <strong>buy marketplace seller</strong>.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Competitive pricing
                                        </strong>
                                        <p className="mb-0">
                                            Best Buy offers competitive pricing, which can help you stay competitive and attract more customers.
                                        </p>
                                    </li>

                                    <li className="pb-0">
                                        <strong className="text-dark fw-bold">
                                            Reliable payment and shipping options
                                        </strong>
                                        <p className="mb-0">
                                            Best Buy offers secure payment and shipping options, which can help build trust with your customers and ensure a positive shopping experience.
                                        </p>
                                    </li>
                                </ul>

                                <p>Partner with Tech2Globe to unleash the full potential of <strong>Best Buy Marketplace</strong>. Our certified product listing services and Best Buy integration services can help you streamline your operations, optimise your product listings, and maximise your revenue on Best Buy. Let us help you achieve your ecommerce sales goals and take your business to the next level.</p>

                                <h2 className="mb-3">Unleashing the Full Potential of Best Buy Marketplace with Tech2Globe's Comprehensive Services</h2>


                                <ul className="inner-list ps-0 pb-2">
                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Catalogue Management
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe provides end-to-end catalogue management services that include product data entry, content creation, image editing, and product categorization. With their extensive experience in handling a variety of product categories, Tech2Globe ensures that the product listings are accurate, complete, and optimised for search engines.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Inventory Management
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe's inventory management services help businesses keep track of their stock levels, update product information, and manage pricing and promotions. With their real-time inventory updates, businesses can avoid overselling and underselling products, which can negatively impact their reputation on Best <strong>Buy Marketplace USA</strong>.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Order Management
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe's order management services ensure that businesses can fulfil orders promptly and accurately. They provide order tracking and management, shipping label printing, and handling of returns and refunds. With Tech2Globe's streamlined processes, businesses can focus on delivering an exceptional customer experience.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Marketing Services
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe's marketing services help businesses increase their visibility and sales on Best Buy Marketplace. They provide search engine optimization, pay-per-click advertising, and social media marketing services. With their data-driven approach, businesses can reach their target audience and generate more revenue. They also help you with Best Buy Product Upload to deliver high-quality images.
                                        </p>
                                    </li>

                                    <li className="pb-0">
                                        <strong className="text-dark fw-bold">
                                            Analytics and Reporting
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe provides comprehensive analytics and reporting services that help businesses track their performance on Best Buy Marketplace. They provide insights on sales, customer behaviour, and marketplace trends. With this information, businesses can make data-driven decisions and optimise their strategies for better results.
                                        </p>
                                    </li>
                                </ul>



                                <h2 className="mb-3">Enhance Your Best Buy Marketplace Presence with Tech2Globe's Expertise and Customised Solutions.</h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4>Extensive Experience</h4>
                                        <p>Tech2Globe has extensive experience in handling various product categories on Best Buy Marketplace. They have a team of experts who can manage all aspects of your marketplace presence, from catalogue management to order fulfilment and marketing. With Tech2Globe, you can rest assured that your <strong>Best Buy account management</strong> operations are in good hands.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Customised Solutions</h4>
                                        <p>Tech2Globe provides customised solutions tailored to the unique needs of each business. They understand that each business has its own challenges and requirements, and they work closely with their clients to deliver the best results. Whether you need help with catalogue management, inventory management, order management, or marketing, Tech2Globe can provide a solution that meets your specific needs.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Cost-effective Service</h4>
                                        <p>Tech2Globe provides cost-effective services that can help businesses save money on their <strong>Best Buy Marketplace Management</strong>. They offer flexible pricing plans and transparent billing, so you know exactly what you're paying for. With Tech2Globe, you can get high-quality services without breaking the bank.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Streamlined Processes</h4>
                                        <p>Tech2Globe's streamlined processes can help businesses save time and effort on their Best Buy Marketplace operations. They use advanced tools and technologies to automate tasks and improve efficiency. This means that businesses can focus on their core operations while Tech2Globe handles the marketplace operations.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Data-driven Approach</h4>
                                        <p>Tech2Globe's data-driven approach can help businesses make informed decisions about their Best Buy Marketplace operations. They provide comprehensive analytics and reporting services that give insights into sales, customer behaviour, and marketplace trends. With this information, businesses can optimise their strategies for better results.</p>
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
            </section >


            <div className="StoreCreationTabs">
                <PortfolioTabs data={portfolio} />
            </div>
        </>
    )
};