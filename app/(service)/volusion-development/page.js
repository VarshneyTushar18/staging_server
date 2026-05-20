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
  title: "Volusion Development Services | Volusion Experts",
  description:
    "Our Volusion developers are experts in Volusion store design, Volusion templates, and Volusion custom integration. Contact us today to see how we can help.",

  keywords: [
    "volusion experts",
    "volusion development",
    "volusion website design",
    "volusion custom design",
    "volusion developers",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/volusion-development",
  },

  openGraph: {
    title: "Volusion Development Services | Volusion Experts",
    description:
      "Our Volusion developers are experts in Volusion store design, Volusion templates, and Volusion custom integration. Contact us today to see how we can help.",
    url: "https://www.tech2globe.com/volusion-development",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Volusion Development Services | Volusion Experts",
    description:
      "Our Volusion developers are experts in Volusion store design, Volusion templates, and Volusion custom integration. Contact us today to see how we can help.",
  },
};

const pageHeaderData = {
  title: "Volusion Development Services",
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


export default function VolusionDevelopment() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Volusion Development" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Volusion Development" imageSrc="/images/services/cms-banner2.jpg" />
              <div className={Style.ContentDiv}>
                <p>Volusion is known as the most secure solution for eCommerce and provides all the key components and features that are essential for setting up an eCommerce shop. Not only it is the best eCommerce store site, but it also has the most outstanding online store, shopping cart, and Volusion development services and development environment that can support the most critical sales applications. It helps you to create friendly shopping cart solutions for search engines. There has been a huge demand for talented Volusion store design and growth as a full eCommerce solution, Tech2Globe satisfies this demand excellently.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Our Services for Volusion Development</h2>
                <hr />
                <h4>Custom Template for Ecommerce </h4>
                <p><strong>Volusion custom web design &amp; development services,</strong> a competent and exclusive brand. For online success, we craft beautiful templates with practical and scalable e-stores. With creative architecture, we help you achieve more sales.</p>

                <h4>Templates For Ecommerce </h4>
                <p>Get access to hundreds of models that deliver results and sales that are responsive, mobile-friendly, and stunning. Both designs seek to improve the selling power of your Volusion eCommerce customization store with fluid UI and UX.</p>

                <h4>Volusion Programming </h4>
                <p>Tech2Globs developers are skilled in the creation &amp; programming of Custom Volusion. Turn your e-stores into a good machine for money-making. Get customized shops that suit your requirements.</p>

                <h4>Oriented Technology </h4>
                <p>Give your clients the experience they deserve, no matter what computer or screen size. For a fluid viewing experience, Volusion &apos;s responsive architecture gives your e-stores cross-screen size compatibility.</p>

                <h4>Integration with Volusion API </h4>
                <p>Integration of the Volusion API is a powerful function that can expand your volume. Beyond the fast shopping cart solution, shop we sell powerful Volusion products Integration API services for our customers.</p>

                <h4>Hire Qualified Volusion Developer</h4>
                <p>We have expert developers who design and build Volusion stores that are full of features. Our developers are always able to help you find better ROI opportunities. The creators of our Volusion store have years of experience and excellence, and they believe in making your concept a reality. Hire Volusion developer with years of experience, any difficulty that comes their way can be handled. Put trust in our developers and plan for the best of volume shop product manufacturing.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>How can Tech2Globe Help You to Improve your Project?</h4>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <h5>Solutions for Entrepreneurs</h5>
                    <p>Half of the work completed is a decent start. We allow business people to transform their business ideas into state-of-the-art practice.</p>

                    <p className="mb-0"><FaHandPointRight />  E-Trade Commerce</p>
                    <p className="mb-0"><FaHandPointRight />  Automation Restaurant</p>
                    <p className="mb-0"><FaHandPointRight />  Lending of Capital</p>
                    <p className="mb-0"><FaHandPointRight />  Ordering Food</p>
                    <p className="mb-0"><FaHandPointRight />  Event Booking Ticket</p>

                    <h5 className="mt-3">Business Solutions</h5>
                    <p>With a high performing solution, we empower your business. We&apos;re going to help push the limits on the production and profitability of your company.</p>

                    <p className="mb-0"><FaHandPointRight />  Company Plan</p>
                    <p className="mb-0"><FaHandPointRight />  Solutions for E-business</p>
                    <p className="mb-0"><FaHandPointRight />  Creation of market applications</p>
                    <p className="mb-0"><FaHandPointRight />  Analysis of Market Method</p>
                    <p className="mb-0"><FaHandPointRight />  Intelligence for company</p>

                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <h5>Enterprise Solutions</h5>
                    <p>By using our in-depth knowledge of Corporate Solutions and years of experience, we deliver solutions that have achieved professional results.</p>

                    <p className="mb-0"><FaHandPointRight />  Content Management System for Business</p>
                    <p className="mb-0"><FaHandPointRight />  Relationship Management for Consumers</p>
                    <p className="mb-0"><FaHandPointRight />  Planning for Enterprise Capital</p>
                    <p className="mb-0"><FaHandPointRight />  Control of Human Resources</p>
                    <p className="mb-0"><FaHandPointRight />  Portals for E-Commerce</p>

                    <h5 className="mt-3">Consumer Solutions</h5>
                    <p>We know all of the many barriers facing consumers. We create the exact solution that your business needs to engage customers and enhance your job.</p>

                    <p className="mb-0"><FaHandPointRight />  Management of the supply chain</p>
                    <p className="mb-0"><FaHandPointRight />  Regulation of the product lifecycle</p>
                    <p className="mb-0"><FaHandPointRight />  Control of revenue</p>
                    <p className="mb-0"><FaHandPointRight />  Integration of Analytics</p>
                    <p className="mb-0"><FaHandPointRight />  The logistics</p>

                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Choose Developers From Tech2Globe?</h4>
                <p>Tech2Globe is a <strong>Volusion development services company</strong> to satisfy your particular project requirements; our Volusion developers provide services. We provide clients who need technical specialization and experience for their projects with our dedicated Volusion developers. Not only are our dedicated Volusion developer&apos;s coding experts, but they also understand exactly what customer needs are, and they are committed to delivering high - quality service as needed.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Hire Volusion Experts from Tech2Globe</h4>
                <p>We have the best developers of the <strong>Volusion development company</strong> in the market. We succeed in Providing top-class facilities for the growth of volume stores.</p>
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