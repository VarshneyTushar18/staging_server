import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaCheckSquare, FaExclamationCircle, FaHandshake, FaQuestion, FaUserFriends, FaUserLock } from "react-icons/fa";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";


export const metadata = {
    title:
        "Amazon Marketing Services USA | Product Listing Services",

    description:
        "Use our Amazon Marketing Services to increase sales in the United States. To improve exposure and increase traffic to your listings, professional services.",

    keywords: [
        "amazon product upload services",
        "amazon listing services usa",
        "amazon product listing services",
    ],

    alternates: {
        canonical:
            "https://www.tech2globe.com/online-business-management-amazon-in",
    },

    openGraph: {
        title:
            "Amazon Marketing Services USA | Product Listing Services",
        description:
            "Use our Amazon Marketing Services to increase sales in the United States. To improve exposure and increase traffic to your listings, professional services.",
        url:
            "https://www.tech2globe.com/online-business-management-amazon-in",
        type: "website",
    },

    twitter: {
        card: "summary",
        title:
            "Amazon Marketing Services USA | Product Listing Services",
        description:
            "Use our Amazon Marketing Services to increase sales in the United States. To improve exposure and increase traffic to your listings, professional services.",
    },
};

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

const pageHeaderData = {
    title: "Amazon India Seller Central Management",
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
    { id: 12, name: "Rakuten", path: "/online-business-management-rakuten" },
];


const sidebarSections = [
    { heading: "Resources", links: resources },
];



export default function BusinessManagementAmazon() {

    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Online Business Management Amazon In" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">

                            <div className={Style.ContentDiv}>
                                <h2>Our Amazon Services</h2>
                                <hr />
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                        <div className="card border-0 p-3 shadow-sm mb-3 h-100">
                                            <div className="text-center">
                                                <img src="\images\services\service-inner\consulting.png" className="img-fluid img-responsive" alt="Amazon Consulting" />
                                            </div>
                                            <div className="context mt-2">
                                                <h5 className="text-center">Amazon Consulting</h5>
                                                <ul>
                                                    <li>Brand Registry</li>
                                                    <li>Training</li>
                                                    <li>Amazon Account Audit</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                        <div className="card border-0 p-3 shadow-sm mb-3 h-100">
                                            <div className="text-center">
                                                <img src="\images\services\service-inner\image editing-1.png" className="img-fluid img-responsive" alt="Image Editing" />
                                            </div>
                                            <div className="context mt-2">
                                                <h5 className="text-center">Image Editing</h5>
                                                <ul>
                                                    <li><Link href="/image-editing-services" className="text-decoration-underline">Amazon Image Editing</Link></li>
                                                    <li>Amazon Product Enhancement</li>
                                                    <li>Image Cropping and Resizing</li>
                                                    <li><Link href="/image-masking-services" className="text-decoration-underline">Image Masking</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                        <div className="card border-0 p-3 shadow-sm mb-3 h-100">
                                            <div className="text-center">
                                                <img src="\images\services\service-inner\catelog.png" className="img-fluid img-responsive" alt="Cataloging" />
                                            </div>
                                            <div className="context mt-2">
                                                <h5 className="text-center">Cataloging</h5>
                                                <ul>
                                                    <li>Images</li>
                                                    <li>Title</li>
                                                    <li>Bullet Points</li>
                                                    <li>Product Description</li>
                                                    <li>Variation</li>
                                                    <li>Keywords</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                        <div className="card border-0 p-3 shadow-sm mb-3 h-100">
                                            <div className="text-center">
                                                <img src="\images\services\service-inner\account manag.png" className="img-fluid img-responsive" alt="Account Management" />
                                            </div>
                                            <div className="context mt-2">
                                                <h5 className="text-center">Account Management</h5>
                                                <ul>
                                                    <li>Complete Account Management</li>
                                                    <li>Brand Protection Services</li>
                                                    <li>FBA Upgrade</li>
                                                    <li>Shipping Upgrade</li>
                                                    <li>Buy Box Winning</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                        <div className="card border-0 p-3 shadow-sm mb-3 h-100">
                                            <div className="text-center">
                                                <img src="\images\services\service-inner\advertising.png" className="img-fluid img-responsive" alt="Advertising Optimization" />
                                            </div>
                                            <div className="context mt-2">
                                                <h5 className="text-center">Advertising Optimization</h5>
                                                <ul>
                                                    <li>Sponsored Products</li>
                                                    <li>Headline Search Ads</li>
                                                    <li>Enhanced Brand Content</li>
                                                    <li>EBC Product Videos</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                        <div className="card border-0 p-3 shadow-sm mb-3 h-100">
                                            <div className="text-center">
                                                <img src="\images\services\service-inner\enhance.png" className="img-fluid img-responsive" alt="Enhanced Brand Content" />
                                            </div>
                                            <div className="context mt-2">
                                                <h5 className="text-center">Enhanced Brand Content</h5>
                                                <ul>
                                                    <li>Template creation</li>
                                                    <li>All design art work</li>
                                                    <li>Content creation</li>
                                                    <li>Image keyword suggestions</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                        <div className="card border-0 p-3 shadow-sm mb-3 h-100">
                                            <div className="text-center">
                                                <img src="\images\services\service-inner\saller.png" className="img-fluid img-responsive" alt="Seller Reinstatement" />
                                            </div>
                                            <div className="context mt-2">
                                                <h5 className="text-center">Seller Reinstatement</h5>
                                                <ul>
                                                    <li>Evaluate the Case</li>
                                                    <li>Find-Out the Reasons</li>
                                                    <li>Outline Plan of Action</li>
                                                    <li>Image keyword suggestions</li>
                                                    <li>Appeal & Prevention Strategy</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                        <div className="card border-0 p-3 shadow-sm mb-3 h-100">
                                            <div className="text-center">
                                                <img src="\images\services\service-inner\store.png" className="img-fluid img-responsive" alt="Store Creation" />
                                            </div>
                                            <div className="context mt-2">
                                                <h5 className="text-center">Store Creation</h5>
                                                <ul>
                                                    <li>Keyword and product research</li>
                                                    <li>Categories and subcategories</li>
                                                    <li>Banners and category descriptions</li>
                                                    <li>Image processing</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                        <div className="card border-0 p-3 shadow-sm mb-3 h-100">
                                            <div className="text-center">
                                                <img src="\images\services\service-inner\amazon training-3.png" className="img-fluid img-responsive" alt="Amazon Training" />
                                            </div>
                                            <div className="context mt-2">
                                                <h5 className="text-center">Amazon Training</h5>
                                                <ul>
                                                    <li>How to sell on Amazon?</li>
                                                    <li>Best products to sell on Amazon?</li>
                                                </ul>
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



                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-5">
                            <div className="row">
                                <div className={Style.ContentDiv}>
                                    <h2 className="text-center">Our Packages</h2>
                                    <div class="table-responsive">
                                        <table class="table table-striped amazone-services table-bordered">

                                            <tbody><tr class="mytable">
                                                <td>
                                                    <h2 class="pt-5 pb-0 mb-0">Tasks</h2>
                                                </td>
                                                <td>
                                                    <h2 class="pt-5 pb-0 mb-0"> Description</h2>
                                                </td>

                                                <td class="text-danger">
                                                    <h2>Gold</h2>
                                                    <b class="text-danger">Recommended for</b><br /> inventory up to 100 products
                                                </td>
                                                <td class="text-danger">
                                                    <h2>Platinum</h2>
                                                    <b class="text-danger">Recommended for</b><br /> inventory more than 100 products
                                                </td>
                                            </tr>
                                            </tbody><tbody>
                                                <tr class="mytr">
                                                    <th rowspan="2">
                                                        <h5>Product listing &amp;<br /> optimization</h5>
                                                    </th>
                                                    <td>New listings</td>
                                                    <td>Up to 20 listings</td>

                                                    <td>Up to 200 listings</td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td> Optimization of existing listings </td>
                                                    <td>Bi- weekly </td>

                                                    <td>Ongoing </td>
                                                </tr>
                                                <tr class="mytr">
                                                    <th rowspan="12" class="tth">
                                                        <h5>Account health and<br /> ratings</h5>
                                                    </th>
                                                    <td>Manage claims</td>

                                                    <td>Yes</td>
                                                    <td>Yes</td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td>Manage returns and refunds</td>

                                                    <td>Yes</td>
                                                    <td>Yes</td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td>ODR management and order processing
                                                        **only 1 time for guidance, excluding scheduling order
                                                    </td>

                                                    <td>Yes</td>
                                                    <td>Yes</td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td>Taking feedbacks from buyers via emails &amp; calls (if required)</td>

                                                    <td>Yes</td>
                                                    <td>Yes</td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td> Manage notification of amazon tat 24 hours (mon-fri)
                                                        **client must email us if he/she received any notification on his registered email id from amazon.
                                                    </td>

                                                    <td>Yes </td>
                                                    <td>Yes </td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td>Comparing price with competitors </td>

                                                    <td>Yes </td>
                                                    <td>Yes </td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td>Infringement </td>

                                                    <td>Yes </td>
                                                    <td>Yes </td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td>Price &amp; quantity updating </td>

                                                    <td>Yes </td>
                                                    <td>Yes </td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td>Case logs</td>

                                                    <td>Yes </td>
                                                    <td>Yes </td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td>FBA - shipment, inventory, removal, reconciliation</td>

                                                    <td>Yes </td>
                                                    <td>Yes </td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td>Brand registry</td>

                                                    <td>Yes </td>
                                                    <td>Yes </td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td>Category approval</td>

                                                    <td>Yes </td>
                                                    <td>Yes </td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td colspan="5"></td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td rowspan="3" class="thh">
                                                        <h5>Product listing SEO<br /> and PPC strategy</h5>
                                                    </td>
                                                    <td>Campaign creation</td>

                                                    <td>Yes</td>
                                                    <td>Yes</td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td>Creating promotions</td>

                                                    <td>Yes</td>
                                                    <td>Yes</td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td>Keywords</td>

                                                    <td>Yes</td>
                                                    <td>Yes</td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td rowspan="9" class="tthh">
                                                        <h5>Tech2globe support</h5>
                                                    </td>
                                                    <td>Phone</td>

                                                    <td>No (Add On)</td>
                                                    <td>Yes</td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td>Email</td>

                                                    <td>Within 24 hours</td>
                                                    <td>Within working day</td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td>Skype</td>

                                                    <td>Yes</td>
                                                    <td>Yes</td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td>Reports - work</td>

                                                    <td>Weekly</td>
                                                    <td>Weekly and on demand</td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td>Report - merchant tax report</td>

                                                    <td>Yes, if req</td>
                                                    <td>Yes, if req</td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td>Reports - return</td>

                                                    <td>Yes, if req</td>
                                                    <td>Yes, if req</td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td>Reports - sales</td>

                                                    <td>Yes, if req</td>
                                                    <td>Yes, if req</td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td>Report - FBA</td>

                                                    <td>Yes, if req</td>
                                                    <td>Yes, if req</td>
                                                </tr>
                                                <tr class="mytr">
                                                    <td>WhatsApp</td>

                                                    <td>No (Add On)</td>
                                                    <td>Yes</td>
                                                </tr>
                                                <tr class="mytr">
                                                    <th colspan="2">Prices (per month)</th>

                                                    <th><Link href="/contact-us">Contact Us</Link></th>
                                                    <th><Link href="/contact-us">Contact Us</Link></th>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-5">
                            <div className="row">
                                <div className={Style.ContentDiv}>
                                    <h2 className="text-danger text-center mb-4">What Our Clients Say</h2>
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                                            <iframe width="100%" height="" src="https://www.youtube.com/embed/KROMIUnGsmI" title="Amazon Seller Acccout Setup with Cataloging | Image Shoot and Listing" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                                            <iframe width="100%" height="" src="https://www.youtube.com/embed/b1njt1DI7SQ" title="Amazon Reinstate of Seller Account - Tec2Globe" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                                            <iframe width="100%" height="" src="https://www.youtube.com/embed/5NhgYJmi8vA" title="Amazon Account Management - Day-to-Day operations" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                                            <iframe width="100%" height="" src="https://www.youtube.com/embed/dIyTKuCd1cE" title="Sales Boost | Account Management" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-5">
                            <div className="row">
                                <div className={Style.ContentDiv}>
                                    <h2 className="text-danger text-center mt-4 mb-4">Tech2Globe Amazon Portfolio</h2>
                                    <div class="table-responsive">
                                        <table class="table table-striped amazone-services table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Cataloguing</th>
                                                    <th>EBC/A+</th>
                                                    <th>Stores</th>
                                                    <th>Infographic</th>
                                                    <th>Rating &amp; Reviews</th>
                                                </tr>
                                            </thead>
                                            <tbody class="mytbody">
                                                <tr>
                                                    <td><a href="https://www.amazon.com/dp/B07M8VYY4L" class="mylink">https://www.amazon.com/dp/B07M8VYY4L</a></td>
                                                    <td><a href="https://www.amazon.com/dp/B07FM6DPMG" class="mylink">https://www.amazon.com/dp/B07FM6DPMG</a></td>
                                                    <td><a href="https://www.amazon.com/tulimed" class="mylink">https://www.amazon.com/tulimed </a></td>
                                                    <td><a href="https://www.amazon.in/dp/B01M06ICNA" class="mylink">https://www.amazon.in/dp/B01M06ICNA</a></td>
                                                    <td><a href="https://www.amazon.in/dp/B078HWPJSJ" class="mylink"> https://www.amazon.in/dp/B078HWPJSJ</a> </td>
                                                </tr>
                                                <tr>
                                                    <td><a href="https://www.amazon.co.uk/dp/B00IVNC114" class="mylink">https://www.amazon.co.uk/dp/B00IVNC114</a></td>
                                                    <td><a href="https://www.amazon.in/dp/B07KKM37T4" class="mylink"> https://www.amazon.in/dp/B07KKM37T4</a></td>
                                                    <td><a href="https://www.amazon.com/stores/page/A6347872-5FA2-4541-90CB-E2386113006F" class="mylink">https://www.amazon.com/stores/page/<br />A6347872-5FA2-4541-90CB-E2386113006F</a></td>
                                                    <td><a href="https://www.amazon.co.uk/dp/B01N5227U7" class="mylink">https://www.amazon.co.uk/dp/B01N5227U7 </a></td>
                                                    <td><a href="https://www.amazon.co.uk/dp/B01BGBJ8Y0" class="mylink">https://www.amazon.co.uk/dp/B01BGBJ8Y0</a></td>
                                                </tr>
                                                <tr>
                                                    <td><a href="https://www.amazon.de/dp/B07G8MT1C9" class="mylink">https://www.amazon.de/dp/B07G8MT1C9</a></td>
                                                    <td><a href="https://www.amazon.com/dp/B00E1P4BRS" class="mylink">https://www.amazon.com/dp/B00E1P4BRS</a></td>
                                                    <td><a href="https://www.amazon.com/lemirch" class="mylink">https://www.amazon.com/lemirch </a></td>
                                                    <td><a href="https://www.amazon.com/dp/B073DLZWX7" class="mylink">https://www.amazon.com/dp/B073DLZWX7 </a></td>
                                                    <td><a href="https://www.amazon.co.uk/dp/B00AYNRLFA" class="mylink">https://www.amazon.co.uk/dp/B00AYNRLFA </a></td>
                                                </tr>
                                                <tr>
                                                    <td><a href="https://www.amazon.in/dp/B078HWPJSJ" class="mylink">https://www.amazon.in/dp/B078HWPJSJ </a></td>
                                                    <td><a href="https://www.amazon.com/dp/B07C7Q2R6D" class="mylink">https://www.amazon.com/dp/B07C7Q2R6D</a></td>
                                                    <td><a href="#">-</a></td>
                                                    <td><a href="https://www.amazon.com/dp/B07LBDGXQ3" class="mylink">https://www.amazon.com/dp/B07LBDGXQ3</a></td>
                                                    <td><a href="#">-</a></td>
                                                </tr>
                                                <tr>
                                                    <td><a href="https://www.amazon.co.uk/dp/B00548P1DE" class="mylink">https://www.amazon.co.uk/dp/B00548P1DE </a></td>
                                                    <td><a href="https://www.amazon.co.uk/dp/B019VE5S98" class="mylink">https://www.amazon.co.uk/dp/B019VE5S98</a></td>
                                                    <td><a href="#">-</a></td>
                                                    <td><a href="https://www.amazon.fr/dp/B072FJXFBW" class="mylink">https://www.amazon.fr/dp/B072FJXFBW </a></td>
                                                    <td><a href="#">-</a></td>
                                                </tr>
                                                <tr>
                                                    <td><a href="https://www.amazon.co.uk/dp/B01BGBJ8Y0" class="mylink">https://www.amazon.co.uk/dp/B01BGBJ8Y0 </a></td>
                                                    <td><a href="https://www.amazon.com/dp/B071FTW381" class="mylink">https://www.amazon.com/dp/B071FTW381</a></td>
                                                    <td><a href="#">-</a></td>
                                                    <td><a href="#">-</a></td>
                                                    <td><a href="#">-</a></td>
                                                </tr>
                                                <tr>
                                                    <td><a href="https://www.amazon.ae/dp/B07RGTTJ4V" class="mylink">https://www.amazon.ae/dp/B07RGTTJ4V </a></td>
                                                    <td><a href="https://www.amazon.com/dp/B07QTCFLFC" class="mylink">https://www.amazon.com/dp/B07QTCFLFC</a></td>
                                                    <td><a href="#">-</a></td>
                                                    <td><a href="#">-</a></td>
                                                    <td><a href="#">-</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
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
}