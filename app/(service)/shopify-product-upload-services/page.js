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

export const metadata = {
  title: "Shopify Product Upload Services | Shopify Product Listing",
  description:
    "Shopify bulk product upload services by Tech2Globe ensure experienced experts, 100% quality, and on-time project delivery to help scale your online store.",
  keywords: [
    "Shopify Product Upload Services",
    "Shopify Product Upload",
    "Shopify Product Listing",
    "Shopify Product Listing Services"
  ],
  openGraph: {
    title: "Shopify Product Upload Services | Shopify Product Listing",
    description:
      "Shopify bulk product upload services by Tech2Globe ensure experienced experts, 100% quality, and on-time project delivery to help scale your online store.",
    url: "https://www.tech2globe.com/shopify-product-upload-services",
    siteName: "Tech2Globe web Solutions LLP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Product Upload Services & Shopify Product Listing Services",
    description:
      "We provide the best Shopify product upload and listing services worldwide. Our Shopify experts help entrepreneurs manage, grow, and scale their online stores and businesses."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/shopify-product-upload-services"
  }
};

const pageHeaderData = {
  title: "Shopify Product Upload Services",
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


export default function ShopifyProductUploadServices() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Shopify Product Upload Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Shopify Product Upload Services" imageSrc="/images/services/service-inner/ecommerce-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Shopify stores favor little, medium, huge and a wide range of businesses. You need proficient assistance with Shopify product management. Opening a site dependent on Shopify is an easy task yet keeping up the different tasks on the platform isn't simple in any way. To stay away from that tough street, companies decide to outsource Shopify product upload services so as to set aside cash and workforce while raising the quality of online work.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Services we offer as a component of our Shopify Product Upload Services:</h4>
                <ul>
                  <li>Shopify Data Entry</li>
                  <li>Products Category Management</li>
                  <li>Adding Product Attributes</li>
                  <li>Shopify Product Image Editing/Enhancement</li>
                  <li>Shopify Product Description Writing</li>
                  <li>Shopify Bulk Upload Management</li>
                  <li>Order Processing Services</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h4>What Tech2Globe can do for you?</h4>
                <p>Online work is a dull activity and a single error can cost your heck of cash inside no time. If you don't outsource product upload services or <Link href="/data-entry-services" className="text-decoration-underline fw-bold"> data entry services</Link>, it might cost you a great deal as far as recruiting experts, training them according to necessity, cash, and so forth. Though, if you outsource Shopify bulk product upload services to Tech2Globe, you can get ensured and experienced experts around the same time. You can anticipate 100% quality and on-time project delivery from the experts who will hold everything together and keep your site running easily.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Choose Tech2Globe for your Shopify Product Upload Services?</h4>
                <p>For Shopify product upload, you would require somebody who is knowledgeable with the topics that it comprises of. This is the place we come to act and help you splendidly. Tech2Globe would include everything about your items and furthermore keep the details valid.</p>
                <ul>
                  <li>With longer than a decade of experience with offering Shopify product data entry services we are completely fit for taking care of your Shopify Product Catalog in an effective and SEO friendly way.</li>
                  <li>We can transfer items to your Shopify Shopping Cart from an assortment of sources, viz., maker's site, web sources, print catalogues, and so on.</li>
                  <li>Tech2Globe can help you in <Link href="/photo-editing-services" className="text-decoration-underline fw-normal">image editing and enhancement</Link> of your items before transferring it to your Shopify Store.</li>
                  <li>Given our moderate Shopify product import services and committed groups working at the Shopify eCommerce platform, we hold your billable time to the base.</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Talk about Your Project with Us</h4>
                <p>At Tech2Globe, we realize that choosing the best supplier to outsource Shopify product upload services is no simple necessity.</p>
                <p>We will be more than happy to begin our relationship soon, wherein you can attempt to experience our Shopify data upload services and Shopify listing services first before focusing on a drawn out relationship.</p>
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

    </>
  )
};