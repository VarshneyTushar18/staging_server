import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import { FaClipboardCheck, FaEye, FaLightbulb, FaListOl, FaListUl, FaSearch, FaUserCog } from "react-icons/fa";

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
    title: "Noon Marketplace Management",
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


export default function NoonMarketplaceManagement() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Noon Marketplace Management" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Noon Marketplace Management" imageSrc={"/images/services/service-inner/ecommerce-banner-1.jpg"} />
                            <div className={Style.ContentDiv}>
                                <p>Establish your brand presence on Noon to generate more sales! Contact us now for customised solutions that your business wants.</p>
                                <h2>Get Sales, Revenue, and Growth on Noon</h2>
                                <p>Taking business online is the first thought of every retailer and merchant in today's digital ecosystem. If you are one of those, then setting up your eStore on Noon marketplace can be advantageous. Noon is one of the biggest online marketplaces in the Middle East with over 20 million active customers. Furthermore, it provides service models that are especially created to assist sellers in getting more for their money. With Noon, all businesses can access a free international sales channel because. Moreover, it offers comprehensive customer support, returns management, product storage, packaging, and delivery to customers for vendors. You may access this enormous consumer base as well as the tools and resources you require for success by partnering with us.</p>

                                <div className="row">
                                    <div className="col-md-4 pt-3 pb-3">
                                        <div className={Style.IconStyle}>
                                            <FaListUl className="text-primary" />
                                        </div>
                                        <h6 className="text-center">Optimised Noon Product Listing</h6>
                                        <p className="text-center">Reaching the customers and the correct demographics of your products is attainable by optimised product listing for online vendors. Our experts will optimise product titles, images, and descriptions to accurately list products.</p>
                                    </div>
                                    <div className="col-md-4 pt-3 pb-3">
                                        <div className={Style.IconStyle}>
                                            <FaLightbulb className="text-warning" />
                                        </div>
                                        <h6 className="text-center">Product Strategy</h6>
                                        <p className="text-center">Although coming up with product strategies can be a challenge, we'll make it simple for you. Our experts will develop a new and competitive pricing strategy at Noon to maximise your profits.</p>
                                    </div>
                                    <div className="col-md-4 pt-3 pb-3">
                                        <div className={Style.IconStyle}>
                                            <FaSearch className="text-success" />
                                        </div>
                                        <h6 className="text-center">eCommerce SEO</h6>
                                        <p className="text-center">For creating an eCommerce SEO plan, keyword research is a crucial first step. We optimise your search engine presence by using keywords and product copy that best define your products.</p>
                                    </div>
                                    <div className="col-md-4 pt-3 pb-3">
                                        <div className={Style.IconStyle}>
                                            <FaUserCog className="text-danger" />
                                        </div>
                                        <h6 className="text-center">Noon Account Management</h6>
                                        <p className="text-center">You may access a large consumer base throughout the UAE and other middle-eastern nations with our all-inclusive Noon account management and boost profits by increasing efficiencies.</p>
                                    </div>
                                    <div className="col-md-4 pt-3 pb-3">
                                        <div className={Style.IconStyle}>
                                            <FaClipboardCheck className="text-info" />
                                        </div>
                                        <h6 className="text-center">Audit Account</h6>
                                        <p className="text-center">While we take on all the complexities, you can focus on more important factors. Whether your sales are dropping or rising, our professionals will examine accounts and keep you updated on a routine basis.</p>
                                    </div>
                                    <div className="col-md-4 pt-3 pb-3">
                                        <div className={Style.IconStyle}>
                                            <FaEye className="text-gray" />
                                        </div>
                                        <h6 className="text-center">Visual Appeal</h6>
                                        <p className="text-center">Every piece of content and creative you put out there is your brand’s identity. Trust our tailored solution to present products in a captivating way and persuade potential customers to buy from you.</p>
                                    </div>
                                </div>


                                <h2 className="mb-3">What Do We Do Differently?</h2>
                                <p>Maximise Your Sales Potential and Consumer Bandwidth with Tech2Globe’s <strong>Noon Marketplace Management!</strong></p>
                                <ul className="inner-list ps-0 pb-2 d-flex flex-wrap ">
                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">Scalability</strong>
                                        <p className="pe-2"> Our Noon marketing services are geared towards helping your organisation scale quickly and efficiently. If you're looking to grow your business and meet market demand, our expert team at Tech2Globe is here to assist. We provide stellar <strong>Noon consulting services</strong> that are designed to scale your business and skyrocket sales.</p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">More Consumers</strong>
                                        <p className="pe-2"> Noon marketplace offers the potential to reach new customers. Our Noon seller management services are curated to increase your visibility and help you effectively manage your seller account. We'll help you get more leads and convert them into customers, giving you the edge you need to succeed.</p>
                                    </li>
                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">Productive Operations</strong>
                                        <p className="pe-2"> It’s always good to reach new customers, but providing exceptional customer service is equally vital. Our expert team, and <strong>Noon product data entry</strong> and account management services will ensure that your Noon account, orders, history, and tracking information is well maintained to hand out best possible service and experience.</p>
                                    </li>
                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Account Analytics
                                        </strong>
                                        <p className="pe-2">
                                            With our aptitude and experience, you can easily measure and evaluate marketing campaigns, sales effectiveness, product mix, inventory shifts, customer sales effectiveness, and customer engagement, giving you the insights you need to make informed business decisions.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Brand Awareness
                                        </strong>
                                        <p className="pe-2">
                                            You can create a strong seller portfolio and make your products available to a mass audience, increasing your visibility and driving sales with Tech2Globe’s services, performance, and prowess.
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