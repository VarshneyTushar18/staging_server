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
  title: "ShopClues Seller Central Management | ShopClues Seller | Tech2Globe",
  description:
    "Tech2globe offers you ShopClues Seller Central Management services & assures you one of the finest seller experiences & helps to reach out to millions of users.",
  keywords: [
    "ShopClues Seller Central Management services",
    "ShopClues Seller",
    "ShopClues Seller registration",
    "ShopClues Seller account",
  ],
  openGraph: {
    title:
      "ShopClues Seller Central Management | ShopClues Seller | Tech2Globe",
    description:
      "Tech2globe offers you ShopClues Seller Central Management services & assures you one of the finest seller experiences & helps to reach out to millions of users.",
    url: "https://www.tech2globe.com/online-business-management-shopclues",
    siteName: "Tech2Globe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ShopClues Seller Central Management | ShopClues Seller | Tech2Globe",
    description:
      "Tech2globe offers you ShopClues Seller Central Management services & assures you one of the finest seller experiences & helps to reach out to millions of users.",
  },
  alternates: {
    canonical:
      "https://www.tech2globe.com/online-business-management-shopclues",
  },
};

const pageHeaderData = {
  title: "Shopclues Seller Central Management",
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


export default function OnlineBusinessManagementShopclues() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Online Business Management Shopclues" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Online Business Management Shopclues" imageSrc="/images/services/service-inner/ecommerce-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>ShopClues.com is India’s first online Managed Marketplace that connects buyers and sellers online. Tech2Globe helps to increase your business growth and provide you a platform to enhance your business activity on ShopClues. We have a complete team of Ecommerce Marketplace Experts who have many years of experience in Ecommerce sector to provide you the right and complete solutions. Tech2Globe provides the best experience to the clients from our best industry experts combined with superior technology.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Services to deliver Effective Results</h2>
                <hr />
                <strong>Registration & Create Seller Account</strong>
                <p>To start selling on ShopClues, the first step is to complete registration process and create Seller Account. Our team of Ecommerce experts complete your registration process and setup your seller account on ShopClues.</p>
                <strong>Web Store Setup</strong>
                <p>After complete the registration process and setup account. Another step is to setup your web-store on ShopClues. We have a specialized team to fulfill your web-store setup requirements with 100% effectiveness.</p>
                <strong>Online Catalog Management</strong>
                <p>Our team take-care of your all catalog process. Manage all Product Listing to fill and update complete information about the product. Our <Link href="/catalog-management-services" className="text-decoration-underline text-muted">Catalog Management Services</Link> helps to increase your sales and target more customers. Catalog Management Services include complete Product Listing, Product Description and uploading Product Images.</p>
                <strong>Product Description </strong>
                <p>Product Description is the main thing to update that’s why we have a separate team of Content Writers, especially trained and experienced in Ecommerce sector to create rich and consistent product description that helps to understand better any product.</p>
                <strong>Product Images Shoot & Editing </strong>
                <p>We have complete resources to conduct Product Images Shoot for every individual product with different and right angles. And experienced team of Photo Editors to done all photo editing process and helps to grab customer’s attention.</p>
                <strong>Order Status Tracking </strong>
                <p>Our experts track and manage your order and provide you the complete reports of Real Time Order Status. Order status notification will automatically send an order tracking alert email to the seller’s email address.</p>
                <strong>Daily Order Reports </strong>
                <p>Our team of Ecommerce experts handle your Daily Order and provide you complete information about the order on daily basis in the form of Daily Order Reports or Daily Sales Report.</p>
                <strong>Returns & Claims</strong>
                <p>We have experienced professionals to handle and manage your all products returns, if happen. And provide you the complete protection from the fraud buyers.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Why Tech2Globe to complete your ShopClues needs?</h2>
                <ul>
                  <li>Trusted name.</li>
                  <li>Highly experienced team.</li>
                  <li>Effective results with great technology.</li>
                  <li>Best Customer Service</li>
                  <li>Perfect Fulfillment</li>
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