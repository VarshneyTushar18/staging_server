import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import { FaHandPointRight } from "react-icons/fa";

export const metadata = {
  title: "WooCommerce Development Services & Experts | Tech2Globe",
  description:
    "Unlock the power of WooCommerce with our expert developers. Get custom eCommerce solutions, seamless integration, and top-notch WooCommerce development services.",

  keywords: [
    "woocommerce development services",
    "woocommerce development company",
    "woocommerce experts",
    "woocommerce ecommerce development",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/woocommerce-development-services",
  },

  openGraph: {
    title: "WooCommerce Development Services & Experts | Tech2Globe",
    description:
      "Unlock the power of WooCommerce with our expert developers. Get custom eCommerce solutions, seamless integration, and top-notch WooCommerce development services.",
    url: "https://www.tech2globe.com/woocommerce-development-services",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WooCommerce Development Services & Experts | Tech2Globe",
    description:
      "Unlock the power of WooCommerce with our expert developers. Get custom eCommerce solutions, seamless integration, and top-notch WooCommerce development services.",
  },
};

const pageHeaderData = {
  title: "WooCommerce Development Services",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "WooCommerce", path: "/woocommerce-development" },
  { id: 2, name: "Shopify", path: "/shopify-development-company" },
  { id: 3, name: "Volusion", path: "/volusion-development-services" },
  { id: 4, name: "Multivendor & B2B Solutions", path: "/multi-vendor-b2b-solution" },
  { id: 5, name: "E-Commerce Apps", path: "/e-commerce-mobile-apps-development-services" }
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


export default function WoocommerceDevelopmentServices() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="WooCommerce Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="WooCommerce Development Services" imageSrc="/images/services/service-inner/ecommerce-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Tech2Globe is a respected <strong>WooCommerce development Company</strong> that offers personalized and scalable <strong>WooCommerce development Services</strong>. WooCommerce is the most commonly used open-source framework, specifically built for web creation, and easy to use as it can be integrated into HTML. In-built templates, plugins, tools, and powerful support for libraries allow us to easily carry out web development processes.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Hire Dedicated WooCommerce Developer</h4>
                <p>Would you like to hire WooCommerce developers to create a popular digital eCommerce store? Tech2Globe a <strong>WooCommerce development company services</strong> that is recognized as an important and large industry experience in delivering effective solutions for eCommerce.</p>

                <p>Our qualified <strong>Wooexperts</strong> were experienced in helping numbers of entrepreneurs to create an eCommerce store from start by powering their goals. We serve our ever-growing customers with satisfaction by using modern WooCommerce developer tools and methodologies with result-oriented techniques.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why WooCommerce is the First Choice of the World?</h4>
                <hr />
                <p><strong>User-friendliness -</strong> If you are familiar with WordPress already, it won't be a difficult task for WooCommerce.</p>

                <p><strong>Security -</strong> It is easy to find bug fixes and security patches.</p>

                <p><strong>Community Support -</strong> WooCommerce offers outstanding customer service with an overwhelming user base.</p>

                <p><strong>SEO Optimized -</strong> WooCommerce, implemented with simple customization, helps boost.</p>

                <p><strong>Options for plugins -</strong> WooCommerce, thanks to its availability of plugins and resources ensure your development.</p>

                <p><strong>Easy Analytics -</strong> Choice to quickly evaluate your eCommerce with analytics integrated.</p>

                <p><strong>Customized Options -</strong> With thousands of themes available, WooCommerce can easily be transformed.</p>

                <p><strong>Mobile-Friendly -</strong> A mobile-friendly plugin base is backed by WooCommerce.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Benefits to Hire WooCommerce Developers from India</h4>
                <hr />
                <p>Hire WooCommerce developers who build highly customized and great eCommerce storefronts for businesses around the world.</p>
                <div className="d-flex gap-3">
                  <Image src="/images/services/service-inner/check.png" width={35} height={35} alt="Easy Set-up" />
                  <div className="context">
                    <h5>Easy Set-up</h5>
                    <p>If you use it, the woo-commerce plugin can be easily applied to the WordPress platform. It takes only a few minutes to incorporate your homepage design, site layout, menus, payment, and shipping options inside it.</p>
                  </div>
                </div>

                <div className="d-flex gap-3">
                  <Image src="/images/services/service-inner/check.png" width={35} height={35} alt="Safe and Flexible Payments" />
                  <div className="context">
                    <h5>Safe and Flexible Payments</h5>
                    <p>WooCommerce provides 140 region-specific gateways that include PayPal, Stripe, Square, Apple Pay, and Amazon Pay to choose from and integrate with. The freedom to accept big debit cards, credit cards, and bank transfers (BACS) come bundled with it.</p>
                  </div>
                </div>

                <div className="d-flex gap-3">
                  <Image src="/images/services/service-inner/check.png" width={35} height={35} alt="Commerce and Content" />
                  <div className="context">
                    <h5>Commerce and Content</h5>
                    <p>This plugin offers WooCommerce Blocks that allow the owners of the store to modularly choose and view items. It offers them the options to add to the dashboard bestsellers, new items, top-rated products, and hand-picked products to view.</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Services for WooCommerce Development</h4>
                <hr />
                <p>Explore the <strong>WooCommerce Development Services</strong>, customized, flexible, and quality-driven.</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5>WooCommerce Web Development</h5>
                    <p>Build personalized apps to match your vision and meet the needs of the customer for your online store</p>
                    <h5>WooCommerce Ecommerce Development</h5>
                    <p>Extend a wide range of functions into a productive eCommerce store production with attractive design features</p>
                    <h5>WooCommerce Custom Plugin Development</h5>
                    <p>To improve the great possibilities of your WooCommerce website, we build custom extensions and plugins.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5>Integration and Upgradation</h5>
                    <p>Upgrade the latest website with pleasant features and functionality to increase productivity.</p>
                    <h5>WooCommerce Migration</h5>
                    <p>We have a safe and quick migration from any other platform to WooCommerce solutions for your existing e-commerce stores</p>
                    <h5>Maintenance and Security</h5>
                    <p>Get continuous support and updates from our expert developers for your WooCommerce websites to stay ahead of us.</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Process of WooCommerce Development Services</h4>
                <p>We believe in transparent working models and modules of step-by - step-growth; that's why recurring steps are involved in our development cycle. Let's take a quick look at our models of process and engagement.</p>
                <p className="mb-0"><FaHandPointRight /> Collect Requirements for Clients</p>
                <p className="mb-0"><FaHandPointRight /> Analysis of Projects</p>
                <p className="mb-0"><FaHandPointRight /> Develop and implement a strategy</p>
                <p className="mb-0"><FaHandPointRight /> Develops UI / UX</p>
                <p><FaHandPointRight /> Testing</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Advantages to Hire Tech2Globe For WooCommerce Development</h4>
                <p>Your idea is secure with us because your privacy is valued by us. Our teams work transparently and respect strict terms and conditions. Our <strong>WooCommerce development experts</strong> are experienced & knowledgeable with development rewards. We provide you with a no-cost estimate once you share your project proposal, usually within 24 working hours. We are working on the new advancements and frameworks to cater to your requirements with new, safe, scalable, and user-friendly business solutions.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Hire WooCommerce Experts from Tech2Globe</h4>
                <p>With relevant details and proper documentation, our service team will reach you.</p>
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