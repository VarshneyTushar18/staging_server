import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";

export const metadata = {
  title: "Walmart Product Upload Services | Walmart Product Data Entry",
  description:
    "Professional Walmart product upload and data entry services. Optimize listings, enhance visibility, and boost sales with accurate, detailed product information.",

  keywords: [
    "walmart product data entry",
    "walmart product data entry outsourcing",
    "walmart product upload services",
    "walmart product listing services",
    "walmart product data listing outsource services",
  ],

  alternates: {
    canonical: "https://stagenew.tech2globe.tech/walmart-product-upload-services",
  },

  openGraph: {
    title: "Walmart Product Upload Services | Walmart Product Data Entry",
    description:
      "Professional Walmart product upload and data entry services. Optimize listings, enhance visibility, and boost sales with accurate, detailed product information.",
    url: "https://stagenew.tech2globe.tech/walmart-product-upload-services",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Walmart Product Upload Services | Walmart Product Data Entry",
    description:
      "Professional Walmart product upload and data entry services. Optimize listings, enhance visibility, and boost sales with accurate, detailed product information.",
  }
};

const pageHeaderData = {
  title: "Walmart Product Upload Services",
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

const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Getting products live on Walmart Marketplace can be extremely tricky due to their strict content guidelines. Tech2Globe's team navigated all the requirements flawlessly — item setup forms, spec sheets, image compliance, and category approvals. Our products went live faster than expected.",
    name: "Kevin Carter | BestDealz USA",
    location: "United States",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We had hundreds of item setup rejections on Walmart before engaging Tech2Globe. Their specialists understood exactly what Walmart's system requires and resolved all errors systematically. Since then, our rejection rate has dropped to near zero.",
    name: "Amina Joshi | GlobalKart India",
    location: "India",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe helped us upload and optimize 3,000+ products on Walmart Marketplace, including proper attribute mapping, rich media content, and Walmart SEO best practices. Our product visibility has improved significantly and sales have followed.",
    name: "Brandon Walsh | HomeComfort USA",
    location: "United States",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "The Tech2Globe team is extremely well-versed in Walmart's Seller Center. They managed our entire product upload process including variant listing, pricing setup, and fulfillment option configuration. Their expertise saved us significant time and resources.",
    name: "Mei Lin | AsiaGoods USA",
    location: "United States",
  },
  {
    id: 5,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We engaged Tech2Globe when we were expanding to Walmart Marketplace for the first time. They guided us through the onboarding, handled all product data submissions, and ensured our listings met Walmart's content score requirements. A truly professional team.",
    name: "Patricia Olson | NaturalWell USA",
    location: "United States",
  },
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

const portfolioClients = [
  {
    initials: "GS",
    gradient: "#0b2e58",
    client: "General Merchandise Supplier",
    country: "Canada",
    project: "Walmart Marketplace Integration",
    desc: "Managed large-scale product uploads to Walmart Marketplace with compliance to Walmart product data standards. Configured seller account, implemented inventory management, and set up fulfillment partnerships. Managed product price optimization and promotional catalog updates.",
    category: "Walmart Marketplace",
    result: "$2.5M annual GMV",
    resultSub: "Revenue Growth",
  },
  {
    initials: "HG",
    gradient: "#0b2e58",
    client: "Home & Garden Distributor",
    country: "USA",
    project: "Walmart Omnichannel Retail",
    desc: "Integrated home and garden products across Walmart omnichannel platform including in-store inventory. Managed product content updates for both marketplace and Walmart.com. Implemented seasonal product promotions and coordinated with warehouse fulfillment.",
    category: "Walmart Marketplace",
    result: "35% growth in Walmart channel",
    resultSub: "Channel Expansion",
  },
  {
    initials: "PC",
    gradient: "#0b2e58",
    client: "Personal Care Products Manufacturer",
    country: "Mexico",
    project: "Walmart International Expansion",
    desc: "Managed product uploads for Walmart Mexico operations with bilingual compliance. Handled import/export documentation and cross-border fulfillment logistics. Configured regional pricing strategies and managed product assortment variations.",
    category: "Walmart Marketplace",
    result: "18,000+ SKUs across Mexico Walmart",
    resultSub: "Catalog Scale",
  },
  {
    initials: "ED",
    gradient: "#0b2e58",
    client: "Electronics Distributor Network",
    country: "Brazil",
    project: "Walmart Electronics Category Management",
    desc: "Managed electronics category on Walmart Brazil with technical specifications and warranty administration. Implemented product certification tracking and compliance documentation. Coordinated with multiple warehouse facilities for inventory management.",
    category: "Walmart Marketplace",
    result: "98.2% on-time delivery",
    resultSub: "Operational Reliability",
  },
  {
    initials: "FB",
    gradient: "#0b2e58",
    client: "Food & Beverage Supplier",
    country: "UK",
    project: "Walmart Grocery Operations",
    desc: "Processed grocery and food products for Walmart UK with strict temperature and shelf-life management. Implemented GTIN synchronization and nutritional information compliance. Managed promotional pricing and bundle offerings for grocery category.",
    category: "Walmart Marketplace",
    result: "35,000+ grocery items",
    resultSub: "Catalog Volume",
  },
];


export default function WalmartProductUploadServices() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Walmart Product Upload Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Walmart Product Upload Services" imageSrc="/images/services/service-inner/ecommerce-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Listing your product on Walmart gives your store visibility to a huge number of customers online. Large platforms give more space to sip benefit by bringing more footfalls. Walmart is one of the biggest retail chains in the world has some severe dealer necessities set up, which isn't so natural to follow. The biggest contender of Amazon, Walmart caters wide chances to the sellers and wholesalers by displaying your products to the assorted buyers around the world. Walmart is one of the mammoth retail chains in the world, started in the USA.</p>
                <p>Tech2Globe can enable you, bulk upload product data, pictures and content to Walmart without any difficulty and precision. Tech2Globe can assist you with getting onboard Walmart in speediest turnaround time conceivable. We can assist you with incorporating your store with Walmart product upload services and make it a consistent experience for you. We set up your product listings done Walmart's EDI system to ensure that your listings are in obedience from the minute they get uploaded.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Is Walmart A Great Alternative to Amazon?</h4>
                <ul>
                  <li><strong>Pitch Up Online Sales</strong></li>
                  <p>Do you realize that with charming and educational product descriptions which are supported by rich media can support your online deals up to 10%?</p>
                  <li><strong>A Great Influencer</strong></li>
                  <p>With the precise and complete data about the item, clients will be more affected and push up the purchase percentage.</p>
                  <li><strong>Speedy and Easy</strong></li>
                  <p>With trained and experienced group of experts, the set up on Walmart is really quick than other on ones</p>
                </ul>
                <p>Experience the most affordable approach to help your business with Walmart product listing services with Tech2Globe. By utilizing UPC codes to existing things, we upload the items and specifications very quick and precisely on the commercial center. The customers simply need to provide us with the list of UPC codes of the items, pricing, and sundry. Let’s get started then.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Deal with your Walmart Product Catalog with Tech2Globe</h4>
                <p>Tech2Globe has a group of profoundly talented Walmart listing services providers in catalog processing on various channels. Here is the complete list of Walmart product uploading services:</p>
                <ul>
                  <li>Walmart Data entry Services</li>
                  <li>Walmart Catalog processing services</li>
                  <li>Walmart Product data entry services</li>
                  <li>Walmart Content management services</li>
                  <li>Walmart Product listing services</li>
                  <li>Walmart image editing services</li>
                  <li>Walmart SEO</li>
                  <li>Walmart product description writing services</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Outsource Walmart Product Upload Services to Tech2Globe?</h4>
                <p>Tech2Globe has a demonstrated reputation in managing Walmart data entry product upload for an assortment of enterprises including yet not limited to paintings, apparels, car, hardware, car parts, toys, furniture, lightning, and some more. We have a rich experience of dealing with huge volumes of sku's and we have chipped away at all significant marketplaces.</p>
                <p>Tech2Globe have a group of dedicated information people and we have the bandwidth to build the number of people without prior warning. We acknowledge payment by means of all inclusive accepted and most safe choice. We have a standard quality checking system set up and we give dedicated PM to converse with our customer so no data is missed. Outsource Walmart product data entry services to us now. We are confident that we would have worked on your specialty also.</p>
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
