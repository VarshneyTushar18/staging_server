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
  title: "Magento Development Services | Magento Development Company",
  description:
    "Hire expert Magento developers for eCommerce solutions. Our Magento development company offers reliable services for website design and development.",

  keywords: [
    "magento development services",
    "magento development company",
    "expert magento developers",
    "magento website development services",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/magento-development-company",
  },

  openGraph: {
    title: "Magento Development Services | Magento Development Company",
    description:
      "Hire expert Magento developers for eCommerce solutions. Our Magento development company offers reliable services for website design and development.",
    url: "https://www.tech2globe.com/magento-development-company",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Magento Development Services | Magento Development Company",
    description:
      "Hire expert Magento developers for eCommerce solutions. Our Magento development company offers reliable services for website design and development.",
  },
};

const pageHeaderData = {
  title: "Magento Development Company",
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


export default function VolusionDevelopment() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Magento Development Company" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Magento Development Company" imageSrc="/images/services/cms-banner2.jpg" />
              <div className={Style.ContentDiv}>
                <p>Tech2Globe is one of India's most popular and professionally run web development & web design companies. Our <strong>expert Magento developers</strong> offer the best solutions for PHP development, e-commerce, mobile applications, and digital marketing.</p>
                <p>Tech2Globe is a well-established and experienced company that offers customized <strong>Magento development services</strong> at affordable rates. We provide Magento configuration and customize it according to your needs.</p>
                <p><strong>As an acclaimed Magento Website Production service provider, we offer a wide range of Magento services.</strong></p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <div className="card shadow-sm p-3 mb-3 h-100">
                      <div className="d-flex gap-3">
                        <Image src="/images/services/service-inner/web.png" width={55} height={55} alt="Magento Website Development Services" />
                        <div className="context">
                          <h5>Magento Website Development Services</h5>
                          <p className="mb-0">We provide end-to-end website creation services for the Magento platform. Our experts help to create Magento Ecommerce stores for your business with full functionality and using third-party plug-ins wherever required.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <div className="card shadow-sm p-3 mb-3 h-100">
                      <div className="d-flex gap-3">
                        <Image src="/images/services/service-inner/custom-commerce.png" width={55} height={55} alt="Customized Ecommerce Solution" />
                        <div className="context">
                          <h5>Customized Ecommerce Solution</h5>
                          <p className="mb-0">We offer customized solutions for all your ecommerce needs. To evaluate your current and potential business requirements, we offer Custom Magento development services and provide strategies that fit your budget and timeline.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <div className="card shadow-sm p-3 mb-3 h-100">
                      <div className="d-flex gap-3">
                        <Image src="/images/services/service-inner/web-design.png" width={55} height={55} alt="Magento Theme Development Services" />
                        <div className="context">
                          <h5>Magento Theme Development Services</h5>
                          <p className="mb-0">In Magento, there are a variety of themes available. Our experts develop the theme that best represents your product and improves the overall look of your website which enhances your customers' user experience.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <div className="card shadow-sm p-3 mb-3 h-100">
                      <div className="d-flex gap-3">
                        <Image src="/images/services/service-inner/module-dev.png" width={55} height={55} alt="Magento Module Development Services" />
                        <div className="context">
                          <h5>Magento Module Development Services</h5>
                          <p className="mb-0">Based on your specifications, our experts create custom modules. Some of these are easy to install and ready-to-use. You can easily modify any changes in your website with these modules.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <div className="card shadow-sm p-3 mb-3 h-100">
                      <div className="d-flex gap-3">
                        <Image src="/images/services/service-inner/custom-dev.png" width={55} height={55} alt="Custom Magento eCommerce Development" />
                        <div className="context">
                          <h5>Custom Magento eCommerce Development</h5>
                          <p className="mb-0">Our specialists incorporate the latest designs and trends that make your Magento Webstore attractive and offer you a competitive advantage.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <div className="card shadow-sm p-3 mb-3 h-100">
                      <div className="d-flex gap-3">
                        <Image src="/images/services/service-inner/shopping-cart-dev.png" width={55} height={55} alt="Magento Shopping Cart Development Services" />
                        <div className="context">
                          <h5>Magento Shopping Cart Development Services</h5>
                          <p className="mb-0">An integral part of our service is to add a Magento shopping cart into your e-Commerce store. The most significant page where the overall price is calculated along with discount coupons and taxes is the shopping cart.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <div className="card shadow-sm p-3 mb-3 h-100">
                      <div className="d-flex gap-3">
                        <Image src="/images/services/service-inner/extension-dev.png" width={55} height={55} alt="Custom Extension Development Services" />
                        <div className="context">
                          <h5>Custom Extension Development Services</h5>
                          <p className="mb-0">We offer custom extension creation services as per your specifications. It helps to add more functionality and make it more usable for your website.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <div className="card shadow-sm p-3 mb-3 h-100">
                      <div className="d-flex gap-3">
                        <Image src="/images/services/service-inner/web-maintenance.png" width={55} height={55} alt="Support and Maintenance" />
                        <div className="context">
                          <h5>Support and Maintenance</h5>
                          <p className="mb-0">During and after the project execution, our expert team assists you in using the developed ecommerce store. In addition, we provide attractive packages for continuous service and repair after the warranty duration is over.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Tech2Globe's Expertise in Magento Development</h2>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <div className="card p-3 h-100">
                      <h5>ECommerce communications</h5>
                      <p>Our experts can easily connect many channels and boost user experience with their expertise in Ecommerce communications. Tech2Globe combines distinct distribution and promotional platforms to build best marketing strategies for your store.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <div className="card p-3 h-100">
                      <h5>Multi-Vendor ECommerce</h5>
                      <p>We can turn your shop into a marketplace like Amazon or eBay with ease. The process involves transforming all data in the shortest possible time and leading you in the right direction.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <div className="card p-3 h-100">
                      <h5>Magento Security Audit</h5>
                      <p>Our Magento development experts review and monitor Magento codebase, server setup, PCI compliance audit, etc. We identify and eliminate any data breach bugs in your ecommerce store.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <div className="card p-3 h-100">
                      <h5>Magento Speed Optimization</h5>
                      <p>You can rely on our services for optimization of speed in your ecommerce store.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">How Tech2Globe Helps to Improve Your Business?</h2>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5>Inbuilt Marketing Tools</h5>
                    <p>We direct our clients to the advantages of Magento and make them aware of our built-in marketing tools. On their website, we incorporate these tools so that they can customize the platform's pricing rules on their own and can easily build marketing campaigns and promotions.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5>Analytics and Reporting</h5>
                    <p>We provide our customers with Magento's integrated analytics tool that allows them to access comprehensive website sales reports, best-purchased products, new order RSS feeds, most viewed products, as well as product review survey reports.</p>
                  </div>
                </div>

              </div>

              <div className={Style.ContentDiv}>
                <h4>Why choose Tech2Globe?</h4>
                <p>Our <strong>Magento development company</strong> provides dedicated interfacing features of Magento business growth to ensure the strongest commercial presence in the web domain. We are a leading Magento software company that supports your business presence through our e-commerce development experience. Our motto is to provide our customers with robust storefront models. We allow the access of our clients to their store so that they can add and expand features to improve your scalability.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Begin Your New Project With tech2Globe</h4>
                <p>Connect with us to learn more about how Tech2Globe Web Solutions will help your company to meet all your requirements.</p>
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