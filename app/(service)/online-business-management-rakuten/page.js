import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import Link from "next/link";

export const metadata = {
  title: "Rakuten Product Listing Services | Rakuten Product Entry Services",
  description:
    "Rakuten is one of the largest Ecommerce site from Japan. Tech2globe provide uploading product data and selling items on Rakuten marketplace to boost sales. We provide Best quality services to our clients.",
  keywords: [
    "Rakuten product listing services",
    "Buy.com product data entry services",
    "Buy.com product listing services",
    "Rakuten bulk product upload services",
    "Rakuten product catalog management",
  ],
  openGraph: {
    title: "Rakuten Product Listing Services | Rakuten Product Entry Services",
    description:
      "Rakuten is one of the largest Ecommerce site from Japan. Tech2globe provide uploading product data and selling items on Rakuten marketplace to boost sales. We provide Best quality services to our clients.",
    url: "https://www.tech2globe.com/online-business-management-rakuten",
    siteName: "Tech2Globe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakuten Product Listing Services | Rakuten Product Entry Services",
    description:
      "Rakuten is one of the largest Ecommerce site from Japan. Tech2globe provide uploading product data and selling items on Rakuten marketplace to boost sales. We provide Best quality services to our clients.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/online-business-management-rakuten",
  },
};

const pageHeaderData = {
  title: "RAKUTEN.COM",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Amazon Consulting Services", path: "/amazon-consulting-services" },
  { id: 2, name: "Flipkart", path: "/flipkart-seller-account-management" },
  { id: 3, name: "Amazon India", path: "/online-business-management-amazon-in" },
  { id: 4, name: "eBay India", path: "/eBay-management" },
  { id: 5, name: "Snapdeal", path: "/online-business-management-snapdeal" },
  { id: 6, name: "ShopClues", path: "/online-business-management-shopclues" },
  { id: 7, name: "Paytm", path: "/online-business-management-paytm" },
  { id: 8, name: "Amazon Marketplaces", path: "/amazon-seller-central-management" },
  { id: 9, name: "eBay Marketplaces", path: "/eBay-management" },
  { id: 10, name: "Sears", path: "/online-business-management-sears" },
  { id: 11, name: "Newegg", path: "/newegg-marketplace-management" },
  { id: 12, name: "Rakuten", path: "/online-business-management-rakuten" }
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


export default function OnlineBusinessManagementRakuten() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Online Business Management Rakuten" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Online Business Management Rakuten" imageSrc="/images/services/service-inner/ecommerce-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Rakuten is one of the largest Ecommerce site from Japan. Tech2Globe will help you to setup your business on Rakuten Marketplace. We have experienced Ecommerce experts to provide effective and industries best solutions. From 2014, Tech2Globe always focusing on to providing best results under an affordable price. We have a complete resources that helps to generate more and effective productivity.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Services for Rakuten Marketplace</h2>
                <hr/>
                <strong>Done Registration & Setup Account</strong>
                <p>First step is to complete the registration process and setup your Seller account on Rakuten and after the verification your account will ready to sell products.</p>
                <strong>Catalog Management</strong>
                <p>We will help you <Link href="/catalog-management-services" className="text-decoration-underline text-muted">manage your catalog</Link>. Tech2Globe will handle and resolve the queries related to catalog on the behalf of you.</p>
                <strong>Product Description</strong>
                <p>Here, at Tech2Globe, we have a separate team of <Link href="/content-marketing" className="text-decoration-underline text-muted">Content Writers</Link> helps to generate quality product’s description.</p>
                <strong>Product Image Shoot</strong>
                <p>Tech2Globe has complete resources to conduct image shoot of your available products with different and right angles.</p>
                <strong>Product Image Editing</strong>
                <p>Once complete the product’s image shoot after the time to work of our <Link href="/photo-editing-services" className="text-decoration-underline text-muted">photo editors</Link> for complete the editing process and make your product’s images attractive.</p>
                <strong>Product Listing</strong>
                <p>After complete the product’s description, image shoot and editing work, now it’s time to list your products for selling purpose.</p>
                <strong>Order Management</strong>
                <p>After generate the order, our team will inform you and provide you complete transparency and schedule the date of order shipping.</p>
                <strong>Inventory Management</strong>
                <p>Tech2Globe will provide you full support from front to end complete solutions. Our team of experts will manage your all Inventory and solve your all queries.</p>
                <strong>Daily Report</strong>
                <p>Tech2Globe’s team of experts will provide you daily reports of your sales and daily reports on daily activity that our experts perform.</p>
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