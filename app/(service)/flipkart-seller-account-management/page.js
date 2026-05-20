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
    title: "Flipkart Seller Account Management",
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


export default function FlipkartSellerAccountManagement() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Flipkart Seller Account Management" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Flipkart Seller Account Management" imageSrc={"/images/services/service-inner/ecommerce-banner-1.jpg"} />
                            <div className={Style.ContentDiv}>
                                <p>Flipkart is one of the most used ecommerce platform by customers for purchase any products or goods. Even it is the India’s favorite place to sell online product or goods. Tech2Globe has a key certification to provide Flipkart Marketplace Services. We have a separate team of Flipkart experts to deliver the effective results. Tech2Globe helps you in selling online in the Indian leading ecommerce marketplace whether you are Vendor, Supplier or Manufacturer. Tech2Globe provides end to end services with the team of vastly experience in Ecommerce to go online in Flipkart.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="text-danger">Start Selling with our Services</h2>
                                <hr />
                                <ul>
                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Account Setup First thing is to get register your business on Flipkart and create Seller account in 3 steps:
                                        </strong>
                                        <p className="pe-2">
                                            <ul type="square">
                                                <li>First step is to create account with your info and your business category.</li>
                                                <li>Second step is to complete your Verification Details of your contact number, address and your business category (like – lifestyle, FMCG, home and etc.).</li>
                                                <li>Final step is to complete Seller Information and fill your complete business details, like – business name, PAN, TAN or GSTIN ID and bank account details and with your store details and description.</li>
                                            </ul>
                                        </p>
                                    </li>


                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Brand & Category Approval
                                        </strong>
                                        <p className="pe-2">
                                            Once setup your selling account and verify all the details. Next step is to upload Brand Authorization Letter or Trademark that you already have from the Brand and get the approval from Flipkart on brand and category that the products you want to sell.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Listings & Catalog Management
                                        </strong>
                                        <p className="pe-2">
                                            Manage your product listing and catalog. In which, our Flipkart Experts provide you step-by-step process of listing to fill your all product details and products images with all necessary information that helps consumer to find your products easily.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Product Description
                                        </strong>
                                        <p className="pe-2">
                                            At Tech2Globe, we have a team of professional Flipkart Experts along with Content Writers having very rich experience only in Ecommerce Marketplace that handle your product description and present in an attractive way.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Product Images Shoot & Editing
                                        </strong>
                                        <p className="pe-2">
                                            We have complete resources to conduct your Photo Image Shoot with different and right angles along with a team of professional Photo Editors that handle your all product image editing process. Product Images Shoot & Image Editing process helps to look attractive your product image and give amazing experience to the consume rs.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Order Management
                                        </strong>
                                        <p className="pe-2">
                                            Our Experts give you full support and handle your all Order Management process with 100% accuracy and transparency with you. Once order generate then our experts will inform you. And schedule the date of shipping when shipping agent comes to you and collect product and deliver to the right person.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Returns & Seller Protection
                                        </strong>
                                        <p className="pe-2">
                                            Our team will manage and handle your all returns process. And provide you complete protection against fraud buyers through Seller Protection Fund (SPF). In future, any frauds will happen then our professionals helps you to get the compensation according to the case & category and claim through SPF to Flipkart on the behal f of you.
                                        </p>
                                    </li>
                                </ul>



                            </div>

                            <div className={Style.ContentDiv}>
                                <h4>Setup business on flipkart is really easy</h4>
                                <hr />
                                <p>With Flipkart’s easy-to-use portal, sellers can register their accounts, upload product listings, and manage orders without any hassle. The platform also offers a range of tools and resources to help sellers grow their business, including advertising options, analytics dashboards, and seller support services.</p>

                                <ul>
                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Step-1. Set-up you’re Account
                                        </strong>
                                        <p className="pe-2">
                                            Firstly create your seller account with your personal details like- name, contact info, address and other details and fill your store/business detail like- PAN, GSTIN ID and bank details.
                                        </p>
                                    </li>
                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Step-2. Listing Products
                                        </strong>
                                        <p className="pe-2">
                                            Our experts helps to upload your products with attractive product description and eye-catching product images.
                                        </p>
                                    </li>
                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Step-3. Start Selling
                                        </strong>
                                        <p className="pe-2">
                                            Selling is the first motive for every entrepreneur or for every business. With promotions & advertising and analytics support your business can target more customers.
                                        </p>
                                    </li>
                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Step-4. Easy Shipping
                                        </strong>
                                        <p className="pe-2">
                                            Once order is done. The shipping service agent pick-up products from you and deliver to the customer.
                                        </p>
                                    </li>
                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Step-5. Big Earning
                                        </strong>
                                        <p className="pe-2">
                                            Through Flipkart, you can sell your products and target more customers and earn big income.
                                        </p>
                                    </li>
                                </ul>
                            </div>


                            <div className={Style.ContentDiv}>
                                <h4>Feel free to contact us</h4>
                                <p>If you need any free consulting advice from our Ecommerce experts related to or any query related to Flipkart Marketplace or get to know more about our services, please feel free to contact us sales@tech2globe.com We are happy assist you.</p>
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