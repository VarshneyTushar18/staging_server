import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import { FaAngleRight } from "react-icons/fa";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";


export const metadata = {
  title: "Nopcommerce Website Development | Nopcommerce Web Service",
  description:
    "Expert Nopcommerce website development and web services. Create robust, customized e-commerce solutions to enhance user experience and boost your online sales.",
  keywords: [
    "Nopcommerce website developmen",
    "nopcommerce development company",
    "nopcommerce development services"
  ],
  openGraph: {
    title: "Nopcommerce Website Development | Nopcommerce Web Service",
    description:
      "Expert Nopcommerce website development and web services. Create robust, customized e-commerce solutions to enhance user experience and boost your online sales.",
    url: "https://stagenew.tech2globe.tech/nop-commerce-development-services",
    siteName: "Tech2Globe",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Nopcommerce Website Development | Nopcommerce Web Service",
    description:
      "Expert Nopcommerce website development and web services. Create robust, customized e-commerce solutions to enhance user experience and boost your online sales."
  },
  alternates: {
    canonical: "https://stagenew.tech2globe.tech/nop-commerce-development-services"
  }
};

const pageHeaderData = {
  title: "Nop Commerce Web Development Services",
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
    text: "Tech2Globe developed a highly customized nopCommerce solution for our industrial parts distribution business. They built custom plugins for complex pricing rules, customer-specific catalogs, and ERP integration. The .NET-based platform has been rock-solid and our B2B clients love the intuitive interface. Truly expert nopCommerce developers.",
    name: "William Patterson | Patterson Industrial Solutions",
    location: "United States",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We hired Tech2Globe to build a nopCommerce store for our luxury interior design products. They created a visually stunning theme, custom product configurator, and integrated our preferred European payment gateways. The store's performance is exceptional and our clients appreciate the elegant, easy-to-navigate experience.",
    name: "Isabella Rossi | Rossi Luxury Interiors",
    location: "Italy",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe built our nopCommerce multi-store platform serving customers across Eastern Europe. They handled localization, multi-currency, and complex tax rules for each country with impressive expertise. The custom shipping module they developed saved us hours of manual work every week.",
    name: "Alexander Petrov | Petrov Tech Retail",
    location: "Russia",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe migrated our legacy platform to nopCommerce and rebuilt the entire store with a modern responsive design. They developed a custom affiliate management module, loyalty program, and integrated our warehouse management system. Our online sales have grown by 58% year-over-year since the migration.",
    name: "Nadia Benali | Benali Beauty Distribution",
    location: "France",
  }
];

const portfolioClients = [
  {
    initials: "PI",
    gradient: "#0b2e58",
    client: "Patterson Industrial Solutions",
    country: "USA",
    project: "Custom nopCommerce B2B Platform with ERP Integration",
    desc: "Built a custom nopCommerce B2B platform with ERP integration, customer-specific catalogs, advanced pricing rules, and streamlined bulk ordering.",
    category: "nopCommerce Development",
    result: "67% Increase",
    resultSub: "B2B Order Volume",
  },
  {
    initials: "RL",
    gradient: "#0b2e58",
    client: "Rossi Luxury Interiors",
    country: "Italy",
    project: "nopCommerce Custom Theme & Product Configurator for Luxury Brand",
    desc: "Designed a premium nopCommerce store with a custom product configurator, luxury-focused user experience, and integrated European payment gateways.",
    category: "nopCommerce Development",
    result: "34% Increase",
    resultSub: "Average Order Value",
  },
  {
    initials: "PT",
    gradient: "#0b2e58",
    client: "Petrov Tech Retail",
    country: "Russia",
    project: "nopCommerce Multi-Country Platform with Tax & Localization",
    desc: "Developed a multi-country nopCommerce platform with automated VAT handling, localization features, and custom shipping automation.",
    category: "nopCommerce Development",
    result: "44% Growth",
    resultSub: "Regional Revenue",
  },
  {
    initials: "BB",
    gradient: "#0b2e58",
    client: "Benali Beauty Distribution",
    country: "France",
    project: "nopCommerce Platform Migration, Affiliate Module & WMS Integration",
    desc: "Migrated to nopCommerce with custom affiliate management, WMS integration, loyalty features, and automated fulfillment workflows.",
    category: "nopCommerce Development",
    result: "58% Growth",
    resultSub: "Online Sales",
  },
  {
    initials: "TZ",
    gradient: "#0b2e58",
    client: "TechZone Electronics ME",
    country: "UAE",
    project: "nopCommerce Arabic Store with Multi-Currency & Vendor Portal",
    desc: "Built a bilingual nopCommerce marketplace with Arabic RTL support, multi-currency checkout, and vendor management capabilities.",
    category: "nopCommerce Development",
    result: "AED 1.2M",
    resultSub: "Revenue in 6 Months",
  },
];

export default function NopCommerceDevelopmentServices() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Nop Commerce Web Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Nop Commerce Web Development Services" imageSrc="/images/services/service-inner/ecommerce-banner-1.jpg" />

              <div className={Style.ContentDiv}>
                <p>NopCommerce is the most popular platform these days, and here at Tech2Globe we can create one such site for your company. There are huge number of online shops which are assisted through nop commerce. We provide our Nopcommerce services not only to the companies selling their products in bulk but also to new start-up companies and you can avail these services at very reasonable prices only at Tech2Globe. We help you assimilate your new website with the one which already exists, and we also cater to all the changes that you require.</p>
              </div>

              <div className={Style.ContentDiv}>
                <p className="mb-0"><strong><FaAngleRight /> Online shopping made easy</strong></p>
                <p>We provide an easy access to the website not only to you but also your customers as well. We provide you with a simple outlook which is easy to access, and this will help customers to search for the desired product, and this will help to get an increase in your sales. We provide you and your customers with various payment options which add an advantage to your company. Various payment options like Paypal, Sagepay, Google Checkout and many others are included in this.</p>
              </div>

              <div className={Style.ContentDiv}>
                <p className="mb-0"><strong><FaAngleRight /> Powerful administration</strong></p>
                <p>From your database, catalogues and spread sheets we will extract the list of already of your products which have already been existing. And all of this is only possible because of our great and hardworking back end administrative staff.</p>
              </div>

              <div className={Style.ContentDiv}>
                <p className="mb-0"><strong><FaAngleRight /> Optimized for natural visibility</strong></p>
                <p>It is due to the Nopcommerce platform that search engines are able to optimize your webpages. Hence search engines like Bing, Yahoo, and Google are able to add your webpages to their index, which will definitely help to increase the sales of your product.</p>
              </div>

              <div className={Style.ContentDiv}>
                <p className="mb-0"><strong><FaAngleRight /> It&apos;s looking great</strong></p>
                <p>Once your website will start looking attractive then it will definitely lead to an increase in the number of customers. We will customize your website according to the specifications that you provide. We try to cater to all your needs. The outlook and utility of the website will accordingly be customized according to your needs. You can initiate your own design or else we will do it on our own, so as to provide you with best outcomes. For any other assistance or more information on nopcommerce, you can contact us.</p>
              </div>

              <div className={Style.ContentDiv}>

                <h4 className="pt-3 pb-3">Our feature projects in nopcommerce</h4>

                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className={`${Style.PortfolioCard} h-100 pb-0 d-flex flex-column`}>
                      <a href="http://www.attractivecostumes.com/" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/services/portfolio-img/attractivecostumes.jpg"
                          alt="Costumes"
                          width={400}
                          height={300}
                          className="img-fluid"
                        />
                        <div className="blackBg"></div>
                      </a>
                      <h3 className={Style.PortfolioTitle}>Costumes</h3>
                      <p>
                        <span className="contactBottominfo">Technology:</span> Asp.net, C#,SQL Server , Jquery.
                      </p>
                      <div className="text-right mt-auto">
                        <a
                          href="http://www.attractivecostumes.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={Style.PortfolioLink}
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className={`${Style.PortfolioCard} h-100 pb-0 d-flex flex-column`}>
                      <a href="http://www.beency.com/" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/services/portfolio-img/beency.JPG"
                          alt="Beency"
                          width={400}
                          height={300}
                          className="img-fluid"
                        />
                        <div className="blackBg"></div>
                      </a>
                      <h3 className={Style.PortfolioTitle}>Beency</h3>
                      <p>
                        <span className="contactBottominfo">Technology:</span> Asp.net, C#,SQL Server , Jquery.
                      </p>
                      <div className="text-right mt-auto">
                        <a
                          href="http://www.beency.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={Style.PortfolioLink}
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className={`${Style.PortfolioCard} h-100 pb-0 d-flex flex-column`}>
                      <a href="https://www.carhookups.com/" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/services/portfolio-img/carhookups.jpg"
                          alt="Car Hookups"
                          width={400}
                          height={300}
                          className="img-fluid"
                        />
                        <div className="blackBg"></div>
                      </a>
                      <h3 className={Style.PortfolioTitle}>Car Hookups</h3>
                      <p>
                        <span className="contactBottominfo">Technology:</span> Asp.net, C#,SQL Server , Jquery.
                      </p>
                      <div className="text-right mt-auto">
                        <a
                          href="https://www.carhookups.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={Style.PortfolioLink}
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className={`${Style.PortfolioCard} h-100 pb-0 d-flex flex-column`}>
                      <a href="http://www.dhamaka99.com/" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/services/portfolio-img/dhamaka99.jpg"
                          alt="Dhamaka99"
                          width={400}
                          height={300}
                          className="img-fluid"
                        />
                        <div className="blackBg"></div>
                      </a>
                      <h3 className={Style.PortfolioTitle}>Dhamaka99</h3>
                      <p>
                        <span className="contactBottominfo">Technology:</span> Asp.net, C#,SQL Server , Jquery.
                      </p>
                      <div className="text-right mt-auto">
                        <a
                          href="http://www.dhamaka99.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={Style.PortfolioLink}
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className={`${Style.PortfolioCard} h-100 pb-0 d-flex flex-column`}>
                      <a href="https://www.luiolei.com/" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/services/portfolio-img/luiolei.jpg"
                          alt="Luiolei"
                          width={400}
                          height={300}
                          className="img-fluid"
                        />
                        <div className="blackBg"></div>
                      </a>
                      <h3 className={Style.PortfolioTitle}>Luiolei</h3>
                      <p>
                        <span className="contactBottominfo">Technology:</span> Asp.net, C#,SQL Server , Jquery.
                      </p>
                      <div className="text-right mt-auto">
                        <a
                          href="https://www.luiolei.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={Style.PortfolioLink}
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className={`${Style.PortfolioCard} h-100 pb-0 d-flex flex-column`}>
                      <a href="http://www.plazasurfsports.com/" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/services/portfolio-img/plazasurfsports.jpg"
                          alt="Plaza Surf Sports"
                          width={400}
                          height={300}
                          className="img-fluid"
                        />
                        <div className="blackBg"></div>
                      </a>
                      <h3 className={Style.PortfolioTitle}>Plaza Surf Sports</h3>
                      <p>
                        <span className="contactBottominfo">Technology:</span> Asp.net, C#,SQL Server , Jquery.
                      </p>
                      <div className="text-right mt-auto">
                        <a
                          href="http://www.plazasurfsports.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={Style.PortfolioLink}
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className={`${Style.PortfolioCard} h-100 pb-0 d-flex flex-column`}>
                      <a href="http://www.replaysportsny.com/" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/services/portfolio-img/replaysportsny.jpg"
                          alt="RePlay SportsNY"
                          width={400}
                          height={300}
                          className="img-fluid"
                        />
                        <div className="blackBg"></div>
                      </a>
                      <h3 className={Style.PortfolioTitle}>RePlay SportsNY</h3>
                      <p>
                        <span className="contactBottominfo">Technology:</span> Asp.net, C#,SQL Server , Jquery.
                      </p>
                      <div className="text-right mt-auto">
                        <a
                          href="http://www.replaysportsny.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={Style.PortfolioLink}
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className={`${Style.PortfolioCard} h-100 pb-0 d-flex flex-column`}>
                      <a href="https://shopaloo.com/" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/services/portfolio-img/shopaloo.jpg"
                          alt="Shopaloo"
                          width={400}
                          height={300}
                          className="img-fluid"
                        />
                        <div className="blackBg"></div>
                      </a>
                      <h3 className={Style.PortfolioTitle}>Shopaloo</h3>
                      <p>
                        <span className="contactBottominfo">Technology:</span> Asp.net, C#,SQL Server , Jquery.
                      </p>
                      <div className="text-right mt-auto">
                        <a
                          href="https://shopaloo.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={Style.PortfolioLink}
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className={`${Style.PortfolioCard} h-100 pb-0 d-flex flex-column`}>
                      <a href="https://www.sports456.com/" target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/images/services/portfolio-img/sports456.jpg"
                          alt="Sports456"
                          width={400}
                          height={300}
                          className="img-fluid"
                        />
                        <div className="blackBg"></div>
                      </a>
                      <h3 className={Style.PortfolioTitle}>Sports456</h3>
                      <p>
                        <span className="contactBottominfo">Technology:</span> Asp.net, C#,SQL Server , Jquery.
                      </p>
                      <div className="text-right mt-auto">
                        <a
                          href="https://www.sports456.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={Style.PortfolioLink}
                        >
                          View Project
                        </a>
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
      </section >

      {/* <div className="StoreCreationTabs">
        <PortfolioTabs data={portfolio} />
      </div> */}

      <ClientPortfolio clients={portfolioClients} />

      <ClientSlider testimonials={testimonials} />

      <section className="our-customers-parent container text-center pb-5 d-flex justify-content-center align-items-center flex-column">
        <div className="row">
          <h2 className="text pb-5 fw-1">Our <span className="text-danger">Customers</span></h2>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
            <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-1.jpg" alt="Tulimed Logo" /></div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
            <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-2.jpg" alt="Mid West Logo" /></div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
            <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-3.jpg" alt="Magic Opener Logo" /></div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
            <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-4.jpg" alt="hop water logo" /></div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
            <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-5.jpg" alt="teliaoils logo" /></div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
            <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-6.jpg" alt="Leaato Logo" /></div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
            <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-7.jpg" alt="Greenyi Logo" /></div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
            <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-8.jpg" alt="Tastee Treasures Logo" /></div>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 px-0">
            <div className="card m-2 border border-warning shadow-sm rounded p-3"><img className="w-100" src="/images/our-customers/logo-9.jpg" alt="Jucos Logo" /></div>
          </div>
        </div>
      </section>
    </>
  )
};
