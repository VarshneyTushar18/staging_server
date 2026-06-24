import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";


export const metadata = {
  title: "Woocommerce Product Upload Services | Product Data Entry",
  description:
    "Reliable WooCommerce product upload and data entry services to enhance your store with accurate, optimized, and detailed product listings for increased sales.",
  keywords: [
    "woocommerce data entry",
    "woocommerce back office",
    "woocommerce product upload",
    "woocommerce product data entry",
    "woocommerce product data management"
  ],
  openGraph: {
    title: "Woocommerce Product Upload Services | Product Data Entry",
    description:
      "Reliable WooCommerce product upload and data entry services to enhance your store with accurate, optimized, and detailed product listings for increased sales.",
    url: "https://stagenew.tech2globe.tech/woocommerce-product-upload-services",
    siteName: "Tech2Globe",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Woocommerce Product Upload Services | Product Data Entry",
    description:
      "Reliable WooCommerce product upload and data entry services to enhance your store with accurate, optimized, and detailed product listings for increased sales."
  },
  alternates: {
    canonical: "https://stagenew.tech2globe.tech/woocommerce-product-upload-services"
  }
};

const pageHeaderData = {
  title: "WooCommerce Product Upload Services",
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
    text: "Tech2Globe helped us launch our WooCommerce store with over 2,500 products fully uploaded and categorized. They understood our WordPress theme requirements, handled variable products expertly, and made sure all product images were properly formatted. Fantastic service.",
    name: "Oliver Bennett | GreenLeaf",
    location: "United Kingdom",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Our WooCommerce store had messy, inconsistent product data from years of manual entry. Tech2Globe cleaned everything up, restructured our categories, and re-uploaded products with proper SEO titles, descriptions, and tags. The improvement in our search rankings was immediate.",
    name: "Deepa Krishnan | OrganicMart",
    location: "India",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "I was skeptical about outsourcing WooCommerce product uploads, but Tech2Globe put all my concerns to rest. They worked directly in our WordPress admin with great care, added proper schema markup, and set up product attributes that made filtering much easier for our customers.",
    name: "Hans Zimmermann | FreshFoods",
    location: "Germany",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We had over 7,000 products to upload as part of our WooCommerce rebuild. Tech2Globe delivered the entire project on time and with zero errors. Their team clearly understood WooCommerce inside out and needed minimal hand-holding throughout the process.",
    name: "Grace Thompson | PetPals",
    location: "Australia",
  },
  {
    id: 5,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe manages all product updates on our WooCommerce store on a monthly retainer basis. Their team is always responsive, the quality of work is consistently high, and they proactively flag any issues they spot in our catalog. I couldn't ask for a better partner.",
    name: "Youssef El Amine | HomeStyle",
    location: "Morocco",
  },
];


const faqs = [
    {
        id: "One",
        question: "What are WooCommerce product data entry services?",
        answer: `
        <strong>WooCommerce product data entry services</strong> include several tasks, such as entering, managing, and optimizing product information. These services are delegated to experts who perform these tasks on your behalf.
      `,
    },
    {
        id: "Two",
        question: "What information is required for WooCommerce product data entry?",
        answer: `
        The information that is must for WooCommerce product data entry includes product details such as titles, descriptions, SKUs and prices. Using pertinent keywords, meta tags, and descriptions, our professionals optimize product listings for search engine exposure to maximize their visibility.
      `,
    },
    {
        id: "Three",
        question: "Why should I use WooCommerce product upload services?",
        answer: `
        When businesses outsource the process of uploading products to WooCommerce, they can save time, assure accuracy, and concentrate on their primary activities. By leveraging the knowledge of specialized individuals, companies can also effectively manage product data while simultaneously maximizing their operational efficiency and production.
      `,
    },
    {
        id: "Four",
        question: "Can you handle bulk product uploads in WooCommerce?",
        answer: `
        Yes, we are particularly well-equipped to work on bulk product uploads on WooCommerce having years of experience. This entails efficient handling of vast inventories so that there is accuracy and timely updates to make your online stores efficient.
      `,
    },
    {
        id: "Five",
        question: "How long does it take to complete a WooCommerce product upload?",
        answer: `
        It will take a shorter time to upload WooCommerce products and completion of the process depends on factors such as the number of products and the complexity as well as the availability of data. Normally, we work with the goal of doing it faster but with good quality and no or little error.
      `,
    },
];

const portfolioClients = [
  {
    initials: "AC",
    gradient: "#0b2e58",
    client: "Artisan Craft Cooperative",
    country: "PT",
    project: "WooCommerce Handmade Marketplace",
    desc: "Managed marketplace for artisan products on WooCommerce with individual creator profiles. Implemented vendor rating systems and commission tracking. Created custom product fields for artisan stories and product origin documentation.",
    category: "WooCommerce Development",
    result: "5,200+ artisan products catalogued",
    resultSub: "Marketplace Growth",
  },
  {
    initials: "ON",
    gradient: "#0b2e58",
    client: "Organic & Natural Products",
    country: "GR",
    project: "WooCommerce Niche E-Commerce",
    desc: "Processed organic and natural product catalog with certification validation and supply chain tracking. Implemented organic certification badges and source documentation. Created detailed product sourcing information and sustainability metrics display.",
    category: "WooCommerce Development",
    result: "8,900+ organic products uploaded",
    resultSub: "Certification Compliance",
  },
  {
    initials: "LF",
    gradient: "#0b2e58",
    client: "Local Farm Products Network",
    country: "Ireland",
    project: "WooCommerce Community Commerce",
    desc: "Managed farm products catalog for local agricultural network on WooCommerce. Implemented seasonal product availability and dynamic inventory. Created farmer profiles and origin story integration with product pages.",
    category: "WooCommerce Development",
    result: "12,000+ farm products managed",
    resultSub: "Community Commerce",
  },
  {
    initials: "SF",
    gradient: "#0b2e58",
    client: "Sports & Fitness Equipment",
    country: "Denmark",
    project: "WooCommerce Product Variants",
    desc: "Configured WooCommerce for fitness equipment retailer with extensive size, weight, and color variants. Implemented subscription-based product offerings for supplements and accessories. Created workout guide integration and equipment comparison tools.",
    category: "WooCommerce Development",
    result: "6,800+ fitness products",
    resultSub: "Variant System Setup",
  },
  {
    initials: "VC",
    gradient: "#0b2e58",
    client: "Vintage & Collectibles",
    country: "Sweden",
    project: "WooCommerce Unique Item Management",
    desc: "Managed unique vintage inventory on WooCommerce with individual item descriptions and provenance documentation. Implemented auction capabilities for rare collectibles. Created detailed authentication documentation and condition reporting systems.",
    category: "WooCommerce Development",
    result: "14,500+ vintage items catalogued",
    resultSub: "Inventory Structuring",
  },
];

export default function WooCommerceProductUploadServices() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Woocommerce Product Upload Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Woocommerce Product Upload Services" imageSrc="/images/services/service-inner/ecommerce-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Our expert <strong>WooCommerce product upload services</strong> ensure accurate and high-quality bulk or individual listings. Save time and enhance your online store with our fast and reliable support.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="mb-3">The Power of Woocommerce Product Upload Service</h2>
                <p>When maintaining an ECommerce business, picking the best shopping platform for your site is urgent. That is the reason Tech2Globe inclines toward WooCommerce for Wordpress E-Commerce sites. WooCommerce is a ground-breaking WordPress plugin that will permit you to sell anything; however, starting this procedure by transferring all your product data can be more complicated than just keeping up your <a href="/product-data-entry-services" className="text-muted">product data</a>. That is the place we come in! Tech2Globe offers <strong>WooCommerce product data entry</strong> to prepare your items to sell on the web. It is our objective that you don&apos;t need to stress over whether your items are listed in the right format on your site.</p>
                <p>WooCommerce is a #1 choice for transforming a WordPress site into an E-Commerce site; jumping on-boarded can be quick and simple. We should talk about how to begin selling on your website today. Tech2Globe is well-talented with administrative force. You simply need to provide us with the item SKU, and the remaining work, including our <strong>WooCommerce product upload services</strong>, will be started and performed correctly by our skilled team with no mistakes. </p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="mb-3">Key Features of Woocommerce Product Upload Services</h2>
                <p>Tech2Globe offers an exhaustive range of WooCommerce product data entry services to keep our eCommerce business people peaceful and stay focused on their objectives. Here are some of the sections, which our WooCommerce product upload experts can manage cleverly:</p>

                <ul className="ps-3 mb-3">
                  <li>Product Category Management</li>
                  <li>WooCommerce Product Entry</li>
                  <li>WooCommerce Bulk Product Upload</li>
                  <li>Product Image Editing and Enhancement</li>
                  <li>Description and Review Writing</li>
                  <li>Up-Sell and Cross-Sell Merchandising</li>
                  <li>WooCommerce Back-Office Support</li>
                </ul>
                <p>Our <strong>WooCommerce product upload services</strong> ensure your online store is updated and managed efficiently, enhancing your overall business performance.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="mb-3">Accurate, Fast, Reliable: The Ultimate woocommerce product data entry</h2>
                <p><strong>WooCommerce product data entry</strong> requires precise attention to detail. By partnering together with Tech2Globe, you can save money on time, cash and efforts without settling on the quality norm and delivery schedules. Our WooCommerce product entry services experts are focused on offering 99.95% exactness with complete information security. We have longer than a time of involvement with eCommerce catalog management services, and our insight encourages us to deal with the type of products.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="mb-3">Benefits of Woo Commerce Data Entry Services</h2>
                <ul className="ps-3 mb-3">
                  <li>Tech2Globe render service that includes the whole idea of management and making product groups, an expansion of cross-selling and up-sell, setting up item qualities, URL rewrites, and so forth.</li>
                  <li>At Tech2Globe, we render support benefits that help development for the online business.</li>
                  <li>We modify the solutions and WooCommerce Product Upload services according to the necessities of the customers.</li>
                  <li>We order the items insightfully with the goal that the online customers won&apos;t get confused.</li>
                  <li>Tech2Globe alters the product descriptions to be SEO friendly with the goal that the WooCommerce product pages would get the top rankings.</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="mb-3">Outsource WooCommerce Product Entry Services to the Expert</h2>
                <p><strong>WooCommerce product data entry</strong> is our key service area, which entails accurate entry of products such as descriptions, prices, images, and specifications for eCommerce businesses across the world. We also specialize in category and tag creation, management and inventory data, and product attribute augmentation of the client’s WooCommerce product listing for improved web and mobile presence.</p>
                <p>We begin our process by consulting with our clients to understand their needs and goals. By examining the existing data, we can determine which parts are irrelevant or contain errors; this data is then cleansed and normalized. This process is performed systematically, and our team creates product descriptions, optimizing the listings under relevant keywords and meta tags for better search engine ranking.</p>
                <p>Quality control is still a major concern in the document, with regular quality assurance to be performed and stability of data format to be ensured by adhering to the proper formatting guidelines. The company’s quality checking and assurance audit of all products for their presentation is always calculated with a remarkable 99% accuracy. Choose us as the partner for your <strong>WooCommerce product entry</strong> and experience the improvement of your business.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="mb-3">Talk About Your woocommerce product data entry Project with Us!</h2>
                <p>Smart product data entry is critical to your WooCommerce store product support achievement. We have the capabilities to deal with all details of <a href="/bulk-product-upload-services" className="text-muted">product data upload</a> and management.</p>
                <p>Are you interested in looking at our skills? You can search for all the office work and back up help from us at Tech2Globe. We are here to develop your business on the Ecommerce platform. Get in touch with us for <strong>WooCommerce product data entry</strong> whenever you want. Our services are accessible 24X7 consistently.</p>
                <p>Do connect with us to know more and talk about your project with us.</p>
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

      <FaqSection faqs={faqs} />

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
