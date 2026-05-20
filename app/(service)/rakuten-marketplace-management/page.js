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
    title: "Rakuten Marketplace Management",
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



export default function RakutenMarketplaceManagement() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Rakuten Marketplace Management" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Rakuten Marketplace Management" imageSrc={"/images/services/service-inner/ecommerce-banner-1.jpg"} />
                            <div className={Style.ContentDiv}>
                                <h2 className="mb-3">Rakuten Marketplace Management: Your Key to Success in the E-Commerce World!</h2>
                                <p>Let Our Rakuten Account Management Experts Take Your Business to the Next Level: From Optimising Listings to Boosting Sales, We've Got You Covered!</p>

                                <h2 className="mb-3">Choose Tech2Globe’s Rakuten Marketplace Services for Unmatched E-commerce Opportunities</h2>
                                <p>If you're looking to expand your online business and tap into the vast Japanese market, look no further than Rakuten, one of the world's largest e-commerce sites. And the good news is, Tech2Globe can help you get set up and initiate to <strong>sell on Rakuten Marketplace</strong> quickly and easily. Our team of experienced e-commerce experts will provide you with top-notch solutions tailored to your specific needs and goals. We've been in the business since 2014, and our track record speaks for itself: we've consistently delivered outstanding results to our clients at affordable prices. With our extensive resources and cutting-edge strategies, we can help you generate more sales, increase your productivity, and take your business to new heights on <strong>Rakuten Marketplace seller account</strong>. Don't miss out on this incredible opportunity – contact us today to learn more!</p>



                                <h2 className="mb-3">Why Rakuten Marketplace Services are the Future of E-commerce</h2>
                                <ul className="inner-list ps-0 pb-2 d-flex flex-wrap">
                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Huge Customer Base:
                                        </strong>
                                        <p className="pe-2">
                                            With over 105 million registered members, <strong>Rakuten marketplace seller account</strong> has a massive customer base that's just waiting to discover your products.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Global Reach:
                                        </strong>
                                        <p className="pe-2">
                                            Rakuten operates in 29 countries and regions, giving your business the opportunity to expand its reach and sell products worldwide.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Personalised Service:
                                        </strong>
                                        <p className="pe-2">
                                            Rakuten offers personalised support to its merchants, including customised marketing campaigns, data analysis, <strong>Rakuten Consulting Services</strong>, and strategic advice to help your business grow.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Low Fees:
                                        </strong>
                                        <p className="pe-2">
                                            Rakuten charges lower fees than many other marketplaces, so you can keep more of your profits.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Easy Setup:
                                        </strong>
                                        <p className="pe-2">
                                            Rakuten makes it easy to set up and start selling on its platform, with a user-friendly interface and step-by-step guidance.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Trusted Brand:
                                        </strong>
                                        <p className="pe-2">
                                            Rakuten is a well-known and respected brand that customers trust, which can help boost your credibility as a seller or on the <strong>Rakuten seller portal</strong>.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Diverse Product Categories:
                                        </strong>
                                        <p className="pe-2">
                                            Rakuten Marketplace offers a wide variety of product categories, from electronics to fashion to home goods, so there's a place for every type of business.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Secure Payments:
                                        </strong>
                                        <p className="pe-2">
                                            Rakuten ensures secure payments for both merchants and customers, so you can rest assured that your transactions are safe.
                                        </p>
                                    </li>
                                </ul>

                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="mb-3">Stand out from the competition with our creative Rakuten Consulting Services.</h2>
                                <ul className="inner-list ps-0 pb-2 d-flex flex-wrap">
                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Eye-catching Storefront Design:
                                        </strong>
                                        <p className="pe-2">
                                            The first impression is crucial, and that's why we'll design a storefront that is not just visually stunning but also unique and captivating. Our designers will craft a storefront that will leave your customers in awe and make them want to explore every corner of your store.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Smart Product Listing Optimization:
                                        </strong>
                                        <p className="pe-2">
                                            Listing your products is just the first step; the real game is optimising them to make them stand out from the rest. Our team will optimise your Rakuten Product Listing Services to make them more engaging, informative, and visible to potential customers, which will result in more sales for your business.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Automated Inventory Management:
                                        </strong>
                                        <p className="pe-2">
                                            Managing inventory can be a daunting task, but not anymore. We'll use our automated inventory management system to ensure that your product inventory is always up-to-date, which means no more stockouts and your customers can always buy what they want, when they want it.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Streamlined Order Processing:
                                        </strong>
                                        <p className="pe-2">
                                            Processing orders can be a time-consuming task, but not with our streamlined order processing system. We'll help you process orders quickly and efficiently, ensuring that your customers receive their products on time and in good condition.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Creative Marketing Campaigns:
                                        </strong>
                                        <p className="pe-2">
                                            Marketing is the key to success, and we'll develop unique and creative marketing campaigns that capture the attention of Rakuten marketplace customers. Our marketing campaigns will drive more traffic and sales to your rakuten seller portal and storefront to make your brand a household name.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Responsive Customer Support:
                                        </strong>
                                        <p className="pe-2">
                                            Customer satisfaction is our top priority, and that's why our team provides fast and friendly customer support. We'll help you resolve any issues or questions your customers may have, ensuring their satisfaction with your products and services.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Actionable Analytics And Insights:
                                        </strong>
                                        <p className="pe-2">
                                            Data is the new gold, and we'll provide you with valuable insights and data analytics that you can use to make informed decisions about your strategy to sell on Rakuten Marketplace. Our actionable analytics and insights will enable you to optimise your sales and grow your business.
                                        </p>
                                    </li>
                                </ul>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="text-center pt-3 pb-3">
                                            <FaHeadset size={40} className="mb-3 text-primary" />
                                            <h4>24/7 Support</h4>
                                            <p>Open round the clock for convenience, quick and easy</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="text-center pt-3 pb-3">
                                            <FaBullseye size={40} className="mb-3 text-primary" />
                                            <h4>98.9% Accuracy</h4>
                                            <p>Cost-efficient, comprehensive services</p>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="text-center pt-3 pb-3">
                                            <FaUserTie size={40} className="mb-3 text-primary" />
                                            <h4>Professionals</h4>
                                            <p>Qualified team for quality services.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="mb-3">Experience Excellence with Tech2Globe's Services to Sell on Rakuten Marketplace</h2>
                                <ul className="inner-list ps-0 pb-2 d-flex flex-wrap">
                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Expert Rakuten Services For Success:
                                        </strong>
                                        <p className="pe-2">
                                            Our team at Tech2Globe is composed of seasoned experts in Rakuten marketplace services who have a deep understanding of the platform and its users.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Optimise Storefront, Listings, And Marketing:
                                        </strong>
                                        <p className="pe-2">
                                            Our comprehensive services include optimising your product listings, making them engaging and visible to potential customers. We will also create unique and creative marketing campaigns that effectively capture customers' attention, resulting in increased traffic and sales for your storefront.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Automated Inventory Management:
                                        </strong>
                                        <p className="pe-2">
                                            We understand the importance of having up-to-date and accurate product inventory on the Rakuten marketplace. That's why we offer an automated inventory management system that tracks your inventory in real-time, avoiding stockouts and ensuring that your customers can buy what they want, when they want it.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Efficient Order Processing:
                                        </strong>
                                        <p className="pe-2">
                                            At Tech2Globe, we know that efficient order processing is crucial to the success of your business. Our team will help you process orders quickly and efficiently, ensuring that your customers receive their products on time and in good condition.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Unique Marketing Campaigns:
                                        </strong>
                                        <p className="pe-2">
                                            Our team will develop creative and unique marketing campaigns that are tailored to your business and target audience. These campaigns will capture the attention of customers, driving more traffic and sales to your storefront.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Fast And Friendly Customer Support:
                                        </strong>
                                        <p className="pe-2">
                                            Our team of experts is always available to provide fast and friendly customer support. We understand that customer satisfaction is key to the success of your business, and we'll help you resolve any issues or questions your customers may have.
                                        </p>
                                    </li>

                                    <li className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <strong className="text-dark fw-bold py-1">
                                            Valuable Analytics For Growth:
                                        </strong>
                                        <p className="pe-2">
                                            We provide valuable insights and data analytics that you can use to make informed decisions about your Rakuten marketplace strategy. Our analytics will enable you to optimise your sales and grow your business, making sure that you stay ahead of the competition.
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
            </section>


            <div className="StoreCreationTabs">
                <PortfolioTabs data={portfolio} />
            </div>
        </>
    )
};