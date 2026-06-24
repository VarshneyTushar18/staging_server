import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import { FaHandPointRight } from "react-icons/fa";
import Link from "next/link";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";

export const metadata = {
  title: "BigCommerce App Development | Custom App Solutions - Tech2Globe",

  description:
    "Get expert BigCommerce development services to build, optimize, and enhance your online store for improved performance and sustained sales growth.",

  keywords: [
    "BigCommerce Development Services",
    "BigCommerce Design Services",
    "BigCommerce Store Development",
    "BigCommerce App Development",
  ],

  alternates: {
    canonical: "https://stagenew.tech2globe.tech/bigcommerce-development-services",
  },

  openGraph: {
    title: "BigCommerce App Development | Custom App Solutions - Tech2Globe",
    description:
      "Get expert BigCommerce development services to build, optimize, and enhance your online store for improved performance and sustained sales growth.",
    url: "https://stagenew.tech2globe.tech/bigcommerce-development-services",
    siteName: "Tech2Globe",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BigCommerce App Development | Custom App Solutions - Tech2Globe",
    description:
      "Get expert BigCommerce development services to build, optimize, and enhance your online store for improved performance and sustained sales growth.",
  },
};

const pageHeaderData = {
  title: "BigCommerce Development Services",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Joomla Development", path: "/joomla-development" },
  { id: 2, name: "Drupal Development", path: "/drupal-development" },
  { id: 3, name: "WordPress Development", path: "/wordPress-development" },
  { id: 4, name: "Shopify Development ", path: "/shopify-development" },
  { id: 5, name: "Bigcommerce Development", path: "/bigcommerce-development" }
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
    text: "Tech2Globe migrated our large catalog from Magento to BigCommerce and the results exceeded all expectations. They built a custom Stencil theme, integrated our ERP, and implemented advanced faceted search. Page load speed improved by 60% and our monthly revenue on the platform increased by 44% within six months. Truly exceptional work.",
    name: "Sarah Mitchell | Mitchell Home Furnishings",
    location: "United States",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe developed our BigCommerce store with a stunning Scandinavian-inspired theme, multi-currency support, and seamless integration with our Klarna and Swish payment processors. The checkout funnel is buttery smooth and our conversion rate has improved significantly. Their BigCommerce expertise is genuinely impressive.",
    name: "Natalie Johansson | Nordic Style Living AB",
    location: "Sweden",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We chose Tech2Globe to build our BigCommerce store for our specialty food export business. They handled everything including custom product options, bulk pricing tiers, and B2B buyer portal development. The platform integrates perfectly with our logistics partners. Sales from international buyers have grown by 52% since launch.",
    name: "Marco Bianchi | Bianchi Fine Foods",
    location: "Italy",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe built a sophisticated BigCommerce storefront for our multi-brand fashion group. The headless commerce architecture they recommended allows us to deliver blazing-fast page loads while maintaining full design flexibility. The team's technical knowledge is outstanding and their project management kept us on track at every milestone.",
    name: "Catherine Bouchard | Bouchard Fashion Group",
    location: "Canada",
  },
];

const portfolioClients = [
  {
    initials: "MH",
    gradient: "#0b2e58",
    client: "Mitchell Home Furnishings",
    country: "USA",
    project: "Magento to BigCommerce Migration & Custom Stencil Theme",
    desc: "Migrated 18,000 products to BigCommerce with a custom Stencil theme, advanced search functionality, and seamless ERP integration.",
    category: "BigCommerce Development",
    result: "44% Increase",
    resultSub: "Monthly Revenue",
  },
  {
    initials: "NS",
    gradient: "#0b2e58",
    client: "Nordic Style Living AB",
    country: "Sweden",
    project: "BigCommerce Custom Store with Scandinavian Design & Payment Integration",
    desc: "Custom BigCommerce storefront featuring Scandinavian-inspired design, multi-currency support, and localized payment integrations for European customers.",
    category: "BigCommerce Development",
    result: "37% Improvement",
    resultSub: "Conversion Rate",
  },
  {
    initials: "BF",
    gradient: "#0b2e58",
    client: "Bianchi Fine Foods",
    country: "Italy",
    project: "BigCommerce B2B Portal for Specialty Food Exports",
    desc: "Built a BigCommerce B2B portal with bulk pricing, buyer-specific access controls, freight integrations, and multi-currency checkout capabilities.",
    category: "BigCommerce Development",
    result: "52% Growth",
    resultSub: "B2B Orders",
  },
  {
    initials: "BG",
    gradient: "#0b2e58",
    client: "Bouchard Fashion Group",
    country: "Canada",
    project: "Headless BigCommerce Architecture for Multi-Brand Fashion",
    desc: "Delivered a headless BigCommerce solution with Next.js storefronts, shared inventory management, and centralized content administration.",
    category: "BigCommerce Development",
    result: "48% Increase",
    resultSub: "Organic Traffic",
  },
  {
    initials: "AF",
    gradient: "#0b2e58",
    client: "Atlas Fitness Equipment",
    country: "UK",
    project: "BigCommerce Store Launch & Wholesale Channel Setup",
    desc: "Launched a dual-channel BigCommerce store with wholesale portals, POS integration, and synchronized inventory across retail locations.",
    category: "BigCommerce Development",
    result: "18 Days",
    resultSub: "Store Launch",
  },
];

export default function bigcommercedevelopment() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Bigcommerce Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Bigcommerce Development Services" imageSrc="/images/services/ecommerce-banner-1.jpg" />


              <div className={Style.ContentDiv}>
                <h4>Certified BigCommerce Professionals to build Advanced E-Store</h4>
                <p>The BigCommerce is one of the best hosted eCommerce development platform that fulfill your all eCommerce needs and delivering impressive experience to your customers. It empowers you to sell your products, manage orders, process payments and offers wide range of marketing tools to optimize and scale up your store.</p>
                <p>In today’s time, businesses face many challenges while running an <Link href="https://blog.tech2globe.com/every-ecommerce-store-must-have-these-features-to-increase-sales/"> eCommerce store</Link> of delivering an Omnichannel experience to user-end. There are multiple complications involves such as catalog management, payment integration, security, user management and much more to manage an eCommerce store. To solve these obstacles, we are here to make your eCommerce shopping cart simpler and easy to access and drive the fruitful results by developing it on BigCommerce platform.</p>
                <p>At Tech2Globe, we have certified team of BigCommerce Designers & Developers to provide high-end BigCommerce solutions across the globe. Our professionals provide top-notch BigCommerce services, in order to create some appealing templates that reflect your business, develop your entire store with free codes, create business logo or other graphics work, provide a minor customization and connect you with merchant account services to begin accepting credit cards online as well as provide updates that help to increase ROI and escalated your business growth.</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/10226505.png" width={55} height={55} alt="BigCommerce Store Development & Configuration" />
                      <div className="context">
                        <h5>BigCommerce Store Development & Configuration</h5>
                        <p>Our certified professionals support startups and enterprises to setup their professional eStore on BigCommerce platform with configure all the benefits and features that provide a unique and elegant experience to store visitors in result improvement in conversions rate and higher customer satisfaction.</p>
                      </div>
                    </div>
                  </div>

                  
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/8099464.png" width={55} height={55} alt=" BigCommerce Store Customization" />
                      <div className="context">
                        <h5> BigCommerce Store Customization</h5>
                        <p>With our in-depth eCommerce proficiency, our BigCommerce professionals have expertise in designing and developing BigCommerce eStore with custom functionalities according to your needs. We can deliver custom-made themes, plugins, payment gateway and much more that helps to enhance your overall store functionality.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/4944618.png" width={55} height={55} alt="Premium Theme Design from PSD" />
                      <div className="context">
                        <h5>Premium Theme Design from PSD</h5>
                        <p>We assign BigCommerce designers’ team to design and create well-responsive themes having all the desired features as per BigCommerce standards and latest protocols. Our all themes are well defining your business and fully optimized design, created from hi-tech software/tools that result in improves overall user experience.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/2335265.png" width={55} height={55} alt=" BigCommerce App Development & Customization" />
                      <div className="context">
                        <h5> BigCommerce App Development & Customization</h5>
                        <p>Profound years of experience in developing powerful BigCommerce apps for your store by using compelling technologies and integrated with shipping, orders, payments and other features that helps to extend the usability of your online store. Along with, we also offer customization services to customized existing apps and make ready as per your store.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/3234094.png" width={55} height={55} alt="Store Migration to BigCommerce" />
                      <div className="context">
                        <h5>Store Migration to BigCommerce</h5>
                        <p>With migrated over 30+ eCommerce stores on BigCommerce platform without loss any single e-file. Our BigCommerce professionals help you to migrate your existing eCommerce store on BigCommerce platform with having all the products & customer database and with critical information.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/3201479.png" width={55} height={55} alt=" BigCommerce Stencil Framework" />
                      <div className="context">
                        <h5> BigCommerce Stencil Framework</h5>
                        <p>BigCommerce Stencil is the next generation platform with full-fledged flexibility and clout for your BigCommerce store as well as flexible enough to work with. Tech2Globe helps you to adopt and create stunning, dynamic and powerful storefront with this new approach</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/9094405.png" width={55} height={55} alt=" API Integration & Module Management Services" />
                      <div className="context">
                        <h5> API Integration & Module Management Services</h5>
                        <p>Our coders have demonstrated excellence in developing and integrated third-party APIs and module management with your store that process requests and ensures seamless functioning of enterprise systems. Our solutions help your business to generate more productivity and also integrate with other solutions.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/4802380.png" width={55} height={55} alt=" BigCommerce Payment Gateway" />
                      <div className="context">
                        <h5> BigCommerce Payment Gateway</h5>
                        <p>At Tech2Globe, we care your every need in order to create and integrate your store with the most popular payment gateways that authorizes credit card or direct payments processing. Additionally, we can also customized payment gateways as per your needs that powerful and keeping your eCommerce transactions safe.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/10298745.png" width={55} height={55} alt=" Support & Maintenance & Updates" />
                      <div className="context">
                        <h5> Support & Maintenance & Updates</h5>
                        <p>Our BigCommerce services enable you to get the full support from our experts at 24 hours availability paired with website or app monitoring, rectifying errors and execute changes accordingly and maintaining online store as per your needs. Along with, we also be liable to possess latest updates.</p>
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
      </section>


      {/* <div className="StoreCreationTabs">
        <PortfolioTabs data={portfolio} />
      </div> */}

      <ClientPortfolio clients={portfolioClients} />

      <ClientSlider testimonials={testimonials} />
    </>
  )
};
