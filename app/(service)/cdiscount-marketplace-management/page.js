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
    title: "CDiscount Marketplace Management",
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



export default function CdiscountMarketplaceManagement() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Cdiscount Marketplace Management" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Cdiscount Marketplace Management" imageSrc={"/images/services/service-inner/ecommerce-banner-1.jpg"} />
                            <div className={Style.ContentDiv}>
                                <h2 className="mb-3">Every Brand Need Online Exposure</h2>
                                <p>Elevate Your Business with <strong>cDiscount Marketplace Management's</strong> Winning Edge</p>

                                <h2 className="mb-3">Maximising Profitability with Tech2Globe's cDiscount Integration Services</h2>

                                <p>Cdiscount is a force to be reckoned with in the e-commerce industry, boasting an impressive turnover of 1.6 billion euros in 2013. As the leading France-based website for online shopping, Cdiscount offers an extensive array of products spanning cultural goods, high-tech gadgets, household appliances, and even food.</p>

                                <p>In today's fast-paced e-commerce world, it's crucial to choose the right platform to maximise profitability. Whether you're a small business owner looking to expand your sales channels or simply seeking to enhance your current sales strategy, the experts at Tech2Globe can help. Our specialised <strong>cDiscount consulting services</strong> offer seamless integration with Cdiscount, including catalogue export functionality, automated updates for stocks and costs, order management, and more. Let us help you simplify and optimise your online selling experience for long-term success.</p>

                                <h2 className="mb-3">Discover the Power of cDiscount Marketplace Management:</h2>
                                <p><strong>Unbeatable Features for Your E-commerce Success!</strong></p>

                                <ul className="inner-list ps-0 pb-2">
                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            WatchDog 360 Manager:
                                        </strong>
                                        <p className="mb-0">
                                            Get a bird's-eye view of everything that's happening at your Cdiscount Store with our centralised integration and automated dashboard.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Ingenious Inventory Manager:
                                        </strong>
                                        <p className="mb-0">
                                            Keep your online inventory and store updated with ease. Our Cdiscount Integration feature synchronises them automatically.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Order Management Monitoring:
                                        </strong>
                                        <p className="mb-0">
                                            Effortlessly manage orders with our centralised order management solution and <strong>CDiscount Product Management Services</strong>, putting everything you need at your fingertips.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Bulk Product Upload:
                                        </strong>
                                        <p className="mb-0">
                                            Save time and effort by uploading multiple products in one go with Cdiscount's bulk product uploading feature.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Instant Order Notification:
                                        </strong>
                                        <p className="mb-0">
                                            Stay informed with real-time updates on your store's activities, including newly received or rejected orders.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Customer Support:
                                        </strong>
                                        <p className="mb-0">
                                            With Tech2Globe's highly efficient customer support, you can get help with any Cdiscount solution at any time.
                                        </p>
                                    </li>
                                </ul>

                                <h2 className="mb-3">Maximise Your Product Potential: How Tech2Globe's Data-Driven Approach Enhances Product Visibility</h2>


                                <ul className="inner-list ps-0 pb-2">
                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Product Listing Optimization
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe provides a comprehensive approach to product listing optimization, using data-driven strategies to enhance product visibility and attract more buyers. From keyword research to image optimization, Tech2Globe's team of experts ensures that every product listing is optimised to its fullest potential.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Order Management
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe streamlines the order management process, allowing sellers to focus on growing their business rather than worrying about logistics. Tech2Globe handles everything from order fulfilment to tracking and returns, ensuring that every customer is satisfied with their purchase from <strong>CDiscount Marketplace</strong>.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Inventory Management
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe helps sellers manage their inventory efficiently, keeping track of stock levels and ensuring that products are always in stock. With real-time inventory updates, sellers can make informed decisions about pricing and promotions, while avoiding overselling or stockouts.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Pricing Strategy
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe works with sellers to develop pricing strategies that are both competitive and profitable. By analysing market trends and buyer behaviour, Tech2Globe helps sellers set prices that maximise revenue and minimise costs, while keeping customers happy.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Marketing and Advertising
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe helps sellers promote their products through targeted marketing and advertising campaigns. From social media to email marketing, Tech2Globe's team of experts knows how to reach the right audience and generate more sales with high-quality <strong>CDiscount Product Upload</strong>.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Customer Service
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe provides exceptional customer service, handling all inquiries and complaints promptly and professionally. With a team of trained professionals available 24/7, sellers can be confident that their customers are in good hands.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Data Analytics
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe uses advanced data analytics tools to help sellers make informed business decisions. By analysing sales data, market trends, and customer behaviour, Tech2Globe provides actionable insights about <strong>CDiscount account management</strong> that help sellers optimise their sales and grow their business.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Multilingual Support
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe provides multilingual support, helping sellers reach a global audience and expand their business beyond borders. With support for multiple languages, Tech2Globe makes it easy for sellers to communicate with customers from around the world.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Platform Integration
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe integrates with multiple platforms, making it easy for sellers to manage their online sales from a single dashboard. With seamless integration with CDiscount and other popular e-commerce platforms, sellers can manage their business more efficiently and effectively.
                                        </p>
                                    </li>

                                    <li className="pb-3">
                                        <strong className="text-dark fw-bold">
                                            Performance Monitoring
                                        </strong>
                                        <p className="mb-0">
                                            Tech2Globe monitors seller performance and provides recommendations for improving sales and customer satisfaction. By analysing metrics such as order volume, customer reviews, and return rates, Tech2Globe helps sellers identify areas for improvement and take action to drive growth.
                                        </p>
                                    </li>
                                </ul>



                                <h2 className="mb-3">Tech2Globe - Your Ultimate Partner for CDiscount Marketplace Success</h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6><FaHandPointRight /> Expertise that Drives Results:</h6>
                                        <p>Tech2Globe's team of seasoned professionals use their expertise to help you maximise your sales potential on CDiscount.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h6><FaHandPointRight /> A Comprehensive Approach:</h6>
                                        <p>Tech2Globe takes a holistic approach to CDiscount marketplace services, covering everything from <strong>CDiscount Product Upload Services</strong>, product listing optimization to performance monitoring.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h6><FaHandPointRight /> Customised Solutions:</h6>
                                        <p>Tech2Globe tailors its solutions to fit the unique needs of each individual seller, ensuring maximum effectiveness and ROI.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h6><FaHandPointRight /> Seamless Integration:</h6>
                                        <p>Tech2Globe seamlessly integrates with CDiscount to give you a better understanding of <strong>CDiscount marketplace management</strong> and other popular e-commerce platforms, making it easy for sellers to manage their online business from one central location.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h6><FaHandPointRight />  Multilingual Support:</h6>
                                        <p>With Tech2Globe's multilingual support, sellers can expand their reach and connect with a global audience.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h6><FaHandPointRight /> Exceptional Customer Service:</h6>
                                        <p>Tech2Globe provides top-notch customer service, ensuring that sellers and their customers are always satisfied.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h6><FaHandPointRight /> Advanced Analytics:</h6>
                                        <p>Tech2Globe uses advanced data analytics tools to provide actionable insights that help sellers optimise their sales and grow their business.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h6><FaHandPointRight /> Collaborative Partnership:</h6>
                                        <p>Tech2Globe values collaboration and partnership, working closely with sellers to achieve their goals and drive growth.</p>
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