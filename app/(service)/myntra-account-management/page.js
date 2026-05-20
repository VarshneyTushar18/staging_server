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
    title: "Myntra Account Management",
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


export default function MyntraAccountManagement() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Myntra Account Management" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Myntra Account Management" imageSrc={"/images/services/service-inner/ecommerce-banner-1.jpg"} />
                            <div className={Style.ContentDiv}>
                                <h2>From cataloging to advertising, Tech2Globe provides complete account management services for Myntra suppliers.</h2>
                                <p>Selling seamlessly on Myntra can be tough to keep, but if you are well at handling account management issues, it is very likely that you can rank better on the platform. Tech2Globe offers complete account management services that help a Myntra seller to become one of the top sellers on the platform.</p>

                                <p>Our clients enjoy working with us as we help them build their online business on Myntra to the maximum possible extent. From addressing daily account issues to any rare instance, we come up with the best solutions for the sellers.</p>

                                <p>Managing a brand on Myntra requires more than just uploading products. Our Myntra Account Management services are designed to help fashion and lifestyle brands grow consistently on the platform. From onboarding to performance optimization, we handle everything needed to build a strong presence and improve sales on Myntra.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2>How To Create A Myntra Seller Account?</h2>
                                <p>To begin selling on Myntra, you must first complete a short registration process that is entirely free. After registering, you can start exhibiting your products and accepting online orders from all possible buyers across India (Myntra only charges a fee for processing orders as a facilitator).</p>

                                <p>With professional Myntra marketplace management, we take care of daily account operations, catalog updates, pricing strategy, inventory coordination, and policy compliance. Our goal is to ensure your store runs smoothly while maintaining high performance standards set by the platform.</p>

                            </div>

                            <div className={Style.ContentDiv}>
                                <h2>Who can become a Myntra Seller?</h2>
                                <ul>
                                    <li>Any organization or an individual can become a Myntra seller by completing the registration form and submitting the appropriate information.</li>
                                    <li>Any company formed with two or more individuals can register their account on Myntra. But make sure you are registered with the Ministry of Corporate Affairs to kick start selling on the Myntra platform.</li>
                                    <li>If a business is registered as a one-person company, it can also work as an independent Myntra seller.</li>
                                    <li>As an experienced Myntra onboarding agency, we assist new sellers with documentation, catalog preparation, brand approval, and initial setup. We simplify the entire onboarding process so you can start selling without unnecessary delays or confusion.</li>
                                </ul>

                            </div>


                            <div className={Style.ContentDiv}>
                                <h2>Documents Required For Myntra Seller Registration:</h2>
                                <ol>
                                    <li>Canceled cheque book</li>
                                    <li>Aadhaar card of the directors or the partners</li>
                                    <li>Individual, LLP, Or Company PAN Card</li>
                                    <li>Bank Account Details</li>
                                </ol>
                                <p>Note - You need to share your current bank account details that match with your business information.</p>
                                <p>Following are the documents that are required to open a bank account:</p>
                                <ul>
                                    <li>Individuals, corporations, and limited liability partnerships (LLPs) must have a PAN card.</li>
                                    <li>Address proof</li>
                                    <li>In the event of a firm, a Certificate of Incorporation is required, as is an LLP Bank Form.</li>
                                    <li>Documents of Partnership (if there is any).</li>
                                    <li>Valid email address.</li>
                                    <li>You will need to mention all the directors of the company or LLP as it acts as the main entities proof</li>
                                    <li>After the bank account is created, a checkbook with the account number will be sent to the account holder’s address.</li>
                                </ul>


                            </div>


                            <div className={Style.ContentDiv}>
                                <h2>Steps That You Need To Go Through To Become A Full-Time Myntra Sellers</h2>
                                <p>Our complete Myntra seller account management services cover performance tracking, order management, return handling, and customer rating improvement. With structured Myntra seller account management, we help brands maintain strong account health and scale their operations efficiently.</p>
                                <ul>
                                    <li>Stay ready with the above-listed documents.</li>
                                    <li>Choose the items you wish to sell and make a list of them.</li>
                                    <li>Obtain a catalog of all of the products. You may hire a professional to create a list for your product with images and complete descriptions. Or you can even engage with different business models to demonstrate the effect for a better customer experience, such as in the case of ready-made apparel.</li>
                                    <li>After that, go to <a href="https://www.myntra.com/" className="text-decoration-underline"> www.myntra.com </a> and fill out the "Register Now" form before clicking the Sell Now button to complete your Myntra seller registration.</li>
                                    <li>After completing the registration process, update your profile and build a product catalog.</li>
                                    <li>Prepare the goods for delivery after receiving orders. The goods will be picked up and delivered to the final customers via Myntra courier partners.</li>
                                </ul>

                            </div>


                            <div className={Style.ContentDiv}>
                                <h2>Why Choose Tech2Globe To Become A Myntra Seller?</h2>
                                <p>Tech2Globe assists merchants of all kinds in expanding and breaking down distance barriers. With its extensive array of options, such as business registration and GST services, Tech2Globe can assist you in getting your business ready.</p>

                                <p>With the help of our professionals, you can increase your sales. Tech2Globe is a 14-year-old company specializing in e-commerce platforms such as B2B and B2C portals. We have ecommerce experts who know how to boost your sales. So, if you want to give your business a boost, fill out the inquiry form, and one of our specialists will contact you as soon as possible.</p>

                                <p>Our Myntra product listing services focus on creating optimized listings that improve visibility and conversions. From writing clear product descriptions to selecting the right attributes and categories, we ensure your listings meet Myntra’s guidelines and appeal to buyers. We also manage Myntra product listing ads to boost product reach within the marketplace.</p>

                                <p>As a reliable Myntra advertising agency, we plan and manage performance-driven campaigns to increase product visibility and sales. Our team monitors ad performance, optimizes bids, and adjusts targeting strategies to maximize return on ad spend while keeping costs under control.</p>
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