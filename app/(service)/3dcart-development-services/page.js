import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";

export const metadata = {
    title: "3dcart Development Services | 3dcart Store Development",
    description:
        "Professional 3dcart development services to build and enhance your online store. Get best solutions and support for seamless 3dcart store development.",
    keywords: [
        "3Dcart Development",
        "3Dcart Custom Theme Development",
        "3dcart Website Design",
        "3dcart Development Services",
        "3dcart Store Development"
    ],
    openGraph: {
        title: "3dcart Development Services | 3dcart Store Development",
        description:
            "Professional 3dcart development services to build and enhance your online store. Get best solutions and support for seamless 3dcart store development.",
        url: "https://stagenew.tech2globe.tech/3dcart-development-services",
        siteName: "Tech2Globe",
        type: "website"
    },
    twitter: {
        card: "summary",
        title: "3dcart Development Services | 3dcart Store Development",
        description:
            "Professional 3dcart development services to build and enhance your online store. Get best solutions and support for seamless 3dcart store development."
    },
    alternates: {
        canonical: "https://stagenew.tech2globe.tech/3dcart-development-services"
    }
};

const pageHeaderData = {
    title: "3Dcart Development",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};

const resources = [
    { id: 1, name: "Nopcommerce Development", path: "/nop-commerce-development-services" },
    { id: 2, name: "Volusion Development", path: "/volusion-development-services" },
    { id: 3, name: "3Dcart Development", path: "/3dcart-development-services" },
    { id: 4, name: "Open Cart Development", path: "/open-cart-development-services" },
    { id: 5, name: "Amazon Webstore Design & Development", path: "/amazon-webstore-design-development-services" },
    { id: 6, name: "eBay Store Design", path: "/ebay-store-design-services" }
];

const sidebarSections = [
    { heading: "Resources", links: resources },
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

const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe built our 3dcart store with a custom theme that highlights our supplement brand beautifully. They integrated our preferred payment processors, subscription order system, and automated email marketing workflows. The project was delivered on time and within budget. Our online revenue has grown by 39% since switching to the new store.",
    name: "Michael O'Connor | O'Connor Sports Nutrition",
    location: "United States",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We engaged Tech2Globe to redesign and optimize our 3dcart store. They redesigned our product pages, improved internal linking, and configured all SEO settings within 3dcart's backend. The improvements led to a 28% increase in organic traffic within 90 days. Their team is knowledgeable about the 3dcart platform inside and out.",
    name: "Charlotte Davies | Davies Home Décor Ltd.",
    location: "United Kingdom",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe migrated our store to 3dcart from a legacy platform and the experience was seamless. They transferred all product data, customer records, and order history without any loss. The new storefront is fast, modern, and fully mobile-responsive. Our repeat purchase rate has increased and customer satisfaction scores are at an all-time high.",
    name: "Stefan Kowalski | Kowalski Auto Accessories",
    location: "Poland",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "As a growing natural skincare brand targeting the European and North American markets, we needed a professional 3dcart store that conveyed trust and quality. Tech2Globe delivered exactly that — a clean design, optimized checkout, and seamless integration with our shipping partners. Our international orders have increased by 47% since launch.",
    name: "Amara Osei | Osei Naturals Co.",
    location: "Ghana",
  },
];

const portfolioClients = [
  {
    initials: "OS",
    gradient: "#0b2e58",
    client: "O'Connor Sports Nutrition",
    country: "USA",
    project: "3dcart Custom Store with Subscription & Email Automation",
    desc: "Custom 3dcart store with subscription ordering, automated email workflows, and conversion-focused product pages to drive recurring revenue growth.",
    category: "3dcart Development",
    result: "39% Growth",
    resultSub: "Online Revenue",
  },
  {
    initials: "DH",
    gradient: "#0b2e58",
    client: "Davies Home Décor Ltd.",
    country: "UK",
    project: "3dcart Store Redesign & On-Page SEO Optimization",
    desc: "Redesigned 3dcart storefront with SEO optimization, improved site structure, and enhanced product pages to increase visibility and conversions.",
    category: "3dcart Development",
    result: "28% Increase",
    resultSub: "Organic Traffic",
  },
  {
    initials: "KA",
    gradient: "#0b2e58",
    client: "Kowalski Auto Accessories",
    country: "PL",
    project: "Legacy Platform to 3dcart Migration & Store Launch",
    desc: "Migrated legacy ecommerce platform to 3dcart with multilingual support, multi-currency functionality, and a fully responsive storefront.",
    category: "3dcart Development",
    result: "27% Increase",
    resultSub: "Repeat Purchases",
  },
  {
    initials: "ON",
    gradient: "#0b2e58",
    client: "Osei Naturals Co.",
    country: "Ghana",
    project: "3dcart Store Launch for International D2C Beauty Brand",
    desc: "Built an international 3dcart storefront with shipping integrations, SEO-focused content, and trust-building features for global customers.",
    category: "3dcart Development",
    result: "47% Increase",
    resultSub: "International Orders",
  },
  {
    initials: "BK",
    gradient: "#0b2e58",
    client: "Beaumont Kitchenware",
    country: "France",
    project: "3dcart Custom Theme & B2B Wholesale Channel",
    desc: "Custom 3dcart theme with B2B wholesale portal, automated pricing rules, and streamlined order management for professional buyers.",
    category: "3dcart Development",
    result: "60 Clients",
    resultSub: "Onboarded in 60 Days",
  },
];

export default function CartDevelopment() {
    return (

        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="3dcart Development Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="3dcart Development Services" imageSrc="/images/services/service-inner/ecommerce-banner-1.jpg" />
                            <div className={Style.ContentDiv}>
                                <p>One of the trendiest shopping carts available is 3dcart. 3dcart has been serving online stores for about over 10 years now. For an easy accessibility for the users you can completely modify the store with the help of 3dcart. 3dcart is a trustworthy application on which online traders can completely depend.</p>
                                <p>3dcart is application software which can enhance the existing online store or can help in creating even new stores. For operating the 3dcart one must not possess any prior knowledge about HTML language or programming, you can simultaneously gather orders and at the same time form and run online e store. 3dcart development is the most convenient way through which you can retail and publicize your items online.</p>
                                <p>Here at Tech2Globe we have a team of experts who have experience working with 3dcart, and they will provide with the best solutions that will definitely help in an increase in the returns. We value your time, therefore we always provide you with best solutions that suits your demands on time with the minimum effective cost. We provide with our services of 3dcart to all types of businesses be it e learning, shipping, real estate or any such industry.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <h4>Features and advantages of 3dcart:</h4>
                                        <ul>
                                            <li> To save time we <a href="/bulk-product-upload-services" class="text-decoration-underline fw-medium">bulk upload your products</a></li>
                                            <li>Control on the inventories, so that you can keep a check on <span class="leftSpace">the stock available</span> </li>
                                            <li>For existing e commerce stores we create mobile versions</li>
                                            <li>Keeping in mind about your need, we customize it for you</li>
                                            <li>Options available for monetary transactions</li>
                                            <li>You can zoom it/zoom out the product, or read the <a href="/amazon-review-rating" class="text-decoration-underline fw-medium">product review</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
                                        <img src="/images/services/service-inner/3d-cart.jpg" alt="3dcart" width="60%" />
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
                                        <img src="/images/services/service-inner/3dcart-services.jpg" alt="3dcart" width="60%" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <h4>3dcart services include:</h4>
                                        <ul>
                                            <li>3Dcart migration</li>
                                            <li>3Dcart SEO</li>
                                            <li>3Dcart assimilation and modification</li>
                                            <li>3Dcart design assimilation and design modification</li>
                                            <li>3Dcart hosting and server management</li>
                                            <li>3Dcart up gradation, upkeep and sustenance</li>
                                            <li>3Dcart importing and exporting of database </li>
                                            <li>3Dcart professionals are hired</li>
                                            <li>3Dcart multiple payment options</li>
                                        </ul>
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


            {/* <div className="StoreCreationTabs">
                <PortfolioTabs data={portfolio} />
            </div> */}

            <ClientPortfolio clients={portfolioClients} />

            <ClientSlider testimonials={testimonials} />
        </>
    )
};
