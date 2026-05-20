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
  title:
    "Ebay Account Management services | Ebay Management Agency- Tech2globe",

  description:
    "Tech2Globe has experienced resources for eBay management. We have expertise in manual product listing, bulk uploading through Excel/Turbolister for eBay marketplace",

  keywords: [
    "ebay inventory management",
    "product listing",
    "image editing",
    "retouching images",
    "uploading through excel",
    "Ebay management",
    "ebay inventory management system",
    "ebay account management",
    "Ebay order management system",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/eBay-management",
  },

  openGraph: {
    title:
      "Ebay Account Management services | Ebay Management Agency- Tech2globe",
    description:
      "Tech2Globe has experienced resources for eBay management. We have expertise in manual product listing, bulk uploading through Excel/Turbolister for eBay marketplace",
    url: "https://www.tech2globe.com/eBay-management",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary",
    title:
      "Ebay Account Management services  | Ebay Management",
    description:
      "Tech2Globe has experienced resources for eBay management. We have expertise in manual product listing, bulk uploading through Excel/Turbolister for eBay marketplace",
  },
};

const pageHeaderData = {
  title: "EBay Account Management",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Amazon Consulting Services", path: "/amazon-consulting-services" },
  { id: 2, name: "Flipkart", path: "/flipkart-seller-account-management" },
  { id: 3, name: "Amazon India", path: "/online-business-management-amazon-in" },
  { id: 4, name: "eBay India", path: "/eBay-management" },
  { id: 5, name: "Snapdeal", path: "/online-business-management-snapdeal" },
  { id: 6, name: "Shopclues", path: "/online-business-management-shopclues" },
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


export default function eBayManagement() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="EBay Management" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="EBay Management" imageSrc="/images/services/service-inner/ecommerce-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Tech2Globe has experienced resources for eBay management. We have expertise in manual product listing, bulk uploading through Excel/Turbolister for eBay marketplace. If you want us to perform research on competition prices, we could do that for you. This is not all; we could also help you in order management. By hiring dedicated administrator with us, we would provide you a person with complete knowledge on all these things and you could focus on your core area i.e. business. Subsequently, it will ease the pressure on you and reduce the cost of having staff onshore. You could also hire a <Link href="/customer-support" className="fw-normal">customer service</Link> person with us who would handle all the queries of EBay. If you do not currently sell on eBay, we could help you in opening your account and complete the eBay account with all the listings.</p>

                <p>For successful online selling, you have to make your products more visible and stand out among the peers on various marketplaces. A clear product title, detailed attributes and engaging product description, will attract more search traffic to your product pages and lead to more conversions. High resolution images and appropriate categorization is must for boosting your conversions. Tech2Globe as an e-commerce services provider enables sellers to create their product listings quickly and upload them on multiple marketplaces in matter of clicks. If buyers can’t find your product, they won’t buy it! So, if you have still not uploaded your products online, or you are in search of the right tool, that scales up your listing process and makes you more efficient, your wait is over. Try Tech2Globe today, contact us now!</p>

              </div>

              <div className={Style.ContentDiv}>
                <h5 className="text-danger">*Prices may vary as per category and number of products</h5>
                <div class="table-responsive">
                  <table class="table table-striped amazone-services">
                    <thead>
                      <tr>
                        <th>SERVICES</th>
                        <th>DESCRIPTION</th>
                        <th class="text-center">PRICE (IN INR)</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <th colspan="1">
                          3000 (including 10 listings)
                        </th>
                      </tr>

                      <tr>
                        <td>Catalogue Writing</td>
                        <td>Creating a product listing (Title, specifications, description)</td>
                        <td class="text-center">20 per/listing</td>
                      </tr>

                      <tr>
                        <td>Image Background cleaning (per image)</td>
                        <td>Cleaning the background of images</td>
                        <td class="text-center">22</td>
                      </tr>

                      <tr>
                        <td rowspan="2">Image Editing (per image)</td>
                        <td>For Non Reflective products (Clothing, Footwear, Computers etc.)</td>
                        <td class="text-center">40</td>
                      </tr>

                      <tr>
                        <td>For products with reflective surfaces (Watches, Jewellery etc.)</td>
                        <td class="text-center">60</td>
                      </tr>

                      <tr>
                        <td>Photo-shoot with Model (3 images)</td>
                        <td>Photo-shoot with Indian or Foreign Model</td>
                        <td>Please contact Tech2globe for pricing.</td>
                      </tr>

                      <tr>
                        <td rowspan="4">
                          Photo-shoot (Mannequin Shoot)<br/>(3 Images)
                        </td>
                        <td>Casual &amp; Formal Wear</td>
                        <td class="text-center">290</td>
                      </tr>

                      <tr>
                        <td>Ethnic Wear (Salwar Kameez, Fabric, etc.)</td>
                        <td class="text-center">290</td>
                      </tr>

                      <tr>
                        <td>Saree</td>
                        <td class="text-center">290</td>
                      </tr>

                      <tr>
                        <td>Lingerie</td>
                        <td class="text-center">290</td>
                      </tr>

                      <tr>
                        <td rowspan="2">Photo-shoot (3 Images)</td>
                        <td>
                          Non Reflective Products (Footwear, Handbags, Toys, Belts,
                          Home &amp; Living, Jewellery)
                        </td>
                        <td class="text-center">290</td>
                      </tr>

                      <tr>
                        <td>
                          Reflective Products (Watches, Sunglasses, Jewellery)
                        </td>
                        <td class="text-center">290</td>
                      </tr>

                      <tr>
                        <td colspan="3">
                          <strong>
                            For account Management you can hire an External Resources from Tech2globe
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>


              <div className={Style.ContentDiv}>
                <h4>Product Listing Services</h4>
                <ul>
                  <li>Create <Link href="/amazon-seo-listing-optimization" className="fw-normal">product listings</Link> as per marketplaces guidelines.</li>
                  <li>Provide clear titles that help customers to identify products.</li>
                  <li>Upload good quality product images with white background.</li>
                  <li>Research for more product attributes and enhance the catalog.</li>
                  <li>Advanced listing tools like Turbo Lister, Selling Manager etc. are used.</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Tech2Globe For Ebay Management?</h4>
                <p>At Tech2Globe, we want our clients to expand their business globally. If clients are not currently selling on marketplaces, we could help them in setting up their accounts, which would enhance their selling capacity. Admittedly, selling at own website gives more profit but goodwill and high customer satisfaction rate of these marketplaces encourage huge number of customers to buy from marketplaces instead of private websites. Also, if you currently sell on one country EBay Account, expanding your business to different countries will help you in growing globally.</p>
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