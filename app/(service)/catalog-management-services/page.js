import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import Link from "next/link";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";

export const metadata = {
  title: "ECommerce Catalog Management Services | Content Management Company",
  description:
    "Tech2Globe delivers ecommerce catalog management services in time. We offer catalog management and brochure design services and more for eCommerce and retail businesses. Consult with us today.",
  keywords: [
    "ecommerce catalog management services",
    "catalog management services",
    "brochure design",
    "brochure design company",
    "brochure design service",
    "catalogue design",
    "professional brochure design",
    "logo design company",
    "catalog management services India",
  ],
  openGraph: {
    title:
      "ECommerce Catalog Management Services | Content Management Company",
    description:
      "Tech2Globe delivers ecommerce catalog management services in time. We offer catalog management and brochure design services and more for eCommerce and retail businesses. Consult with us today.",
    url: "https://stagenew.tech2globe.tech/catalog-management-services",
    siteName: "Tech2Globe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ECommerce Catalog Management Services | Content Management Company",
    description:
      "Tech2Globe delivers ecommerce catalog management services in time. We offer catalog management and brochure design services and more for eCommerce and retail businesses. Consult with us today.",
  },
  alternates: {
    canonical: "https://stagenew.tech2globe.tech/catalog-management-services",
  },
};

const pageHeaderData = {
  title: "Catalog Management",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Restaurant Menu Entry Services", path: "/restaurant-menu-entry-services" },
  { id: 2, name: "Financial Data Entry Services", path: "/financial-data-entry" },
  { id: 3, name: "Catalog Management", path: "/catalog-management-services" },
  { id: 4, name: "Data Processing Services", path: "/data-processing-services" },
  { id: 5, name: "Data Product Entry", path: "/product-data-entry-services" },
];

const usefullinks = [
  { id: 1, name: "Food Industries", path: "/food-industries-services" },
  { id: 2, name: "Non-profit Organization", path: "/non-profit-organizations-services" },
  { id: 3, name: "Medical And Health", path: "/medical-and-health-services" },
  { id: 4, name: "Translation Firms", path: "/translation-firms-services" },
];

const sidebarSections = [
  { heading: "Resources", links: resources },
  { heading: "Industries We Serve", links: usefullinks },
];

const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Managing over 50,000 SKUs was an absolute nightmare before we engaged Tech2Globe. Their catalog management team brought structure, consistency, and accuracy to our entire product database. Every product now has complete attributes, optimized descriptions, and correctly mapped categories. Our site search results improved and conversions went up by 22%. A remarkable turnaround in just two months.",
    name: "James Whitfield | HomeDécor Direct Inc.",
    location: "United States",
},
{
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Our multi-channel catalog was a mess — different formats, missing attributes, and inconsistent naming conventions across platforms. Tech2Globe cleaned up everything and put a robust taxonomy in place. Now our product data is uniform across our Shopify store, Amazon, and wholesale portals. The team worked efficiently and communicated well throughout. We are thoroughly impressed.",
    name: "Chiara Romano | BellaVita Fashion Group",
    location: "Italy",
},
{
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We distribute electronic products across Southeast Asia and maintaining an accurate catalog is essential. Tech2Globe managed our catalog with exceptional precision — product specifications, compatibility data, and regulatory information were all handled correctly. They also set up a content update workflow so our catalog stays current with new product launches. A professional, efficient team.",
    name: "Ravi Shankar | AsiaElect Distributors Pte. Ltd.",
    location: "Singapore",
},
{
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe's catalog management service helped us clean up years of inconsistent product data. They worked through our entire catalog methodically — removing duplicates, standardizing attribute sets, and filling in missing data. The result was a 30% improvement in organic search rankings and a noticeable boost in add-to-cart rates. Their attention to quality is commendable.",
    name: "Olena Kovalenko | EuroMart Online Store",
    location: "Ukraine",
},
{
    id: 5,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "As a pet supply retailer with over 20,000 products, we struggled to keep catalog data accurate and up to date. Tech2Globe took over our catalog operations and delivered consistent, well-structured product listings across all categories. Filtering options on our website became far more effective, leading to better customer experiences. We are delighted with their work and ongoing support.",
    name: "André Dubois | MaplePet Supplies Corp.",
    location: "Canada",
},
];

const portfolioClients = [
  {
    initials: "IN",
    gradient: "#0b2e58",
    client: "Indian E-commerce Brand",
    country: "India",
    project: "Multi-Channel Catalog Synchronization",
    desc: "Managed product catalog for Indian e-commerce brand across multiple marketplaces ensuring consistent pricing, inventory, and real-time multi-platform synchronization.",
    category: "Product Catalog Management",
    result: "25,000+ SKUs managed • 99.3% accuracy",
},

{
    initials: "AE",
    gradient: "#0b2e58",
    client: "UAE B2B Marketplace",
    country: "UAE",
    project: "Global B2B Marketplace Catalog Management",
    desc: "Handled catalog operations for UAE B2B marketplace managing supplier listings, search optimization, pricing compliance, and structured product hierarchy.",
    category: "B2B Catalog Operations",
    result: "40,000+ listings • 97% listing quality",
},

{
    initials: "BR",
    gradient: "#0b2e58",
    client: "Brazilian Marketplace",
    country: "Brazil",
    project: "Marketplace Content Enrichment Initiative",
    desc: "Enhanced product content for Brazilian marketplace improving descriptions, keywords, multilingual attributes, SEO performance, and conversion rates.",
    category: "Product Content Management",
    result: "35,000+ products enriched • 55% conversion increase",
},

{
    initials: "ZA",
    gradient: "#0b2e58",
    client: "South African Retailer",
    country: "ZA",
    project: "Specialty Retail Catalog Overhaul",
    desc: "Optimized catalog for South African retailer standardizing SKUs, pricing, attributes, and improving search relevance and customer experience.",
    category: "Retail Catalog Optimization",
    result: "18,000+ SKUs organized • 100% price consistency",
},

{
    initials: "MX",
    gradient: "#0b2e58",
    client: "Mexican Subscription Platform",
    country: "Mexico",
    project: "Subscription Platform Catalog Management",
    desc: "Managed dynamic catalog for Mexican subscription platform updating weekly inventory, pricing, availability, and multi-warehouse coordination.",
    category: "Dynamic Catalog Management",
    result: "12,000+ items • 31% sales growth",
},
];

export default function CatalogManagementServices() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Catalog Management Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Catalog Management Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>If your company is thinking of getting connected to the customers through this wide world of internet, then our company is one such place, where you can get it done. We will provide you with online catalogs, through which customers all around the world can have an access to the line of products that you have, at any point of time. We keep in mind the essentials required to make an online store a great success, and the basic thing is to have are appropriate images and apparent sub headings, which makes it easy for the customers to access. We can assure you that we will provide you with the desired online store. Our priority is your satisfaction, and our executives have comprehensive knowledge of making the online store look attractive and appealing. Give us an opportunity to serve you and we are sure to fulfill your expectations.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2> Catalog Indexing and Building</h2>
                <p>If your firm is planning to expand its horizons, and become a part of this wide world of internet, then for that purpose you can rely on us. We will provide you with various services like <Link href="/bulk-product-upload-services" className="text-decoration-underline text-muted">bulk product uploading</Link> on ecommerce platforms, ecommerce solutions, <Link href="/data-processing-services" className="text-decoration-underline text-muted">data processing services</Link>, bulk uploading through excel and many such services. All you need to do is just send a hard copy of your catalog, and for rest of it we will handle keeping in mind your requirements. Our team of experts will go through the catalog and as they are well acquainted with the appropriate knowledge of indexing a catalog, they will design it accordingly. We will bulk upload through CSV file, through excel and through excel templates. Indexing is an essential part, so they will divide the headings and subheadings properly, so as to make it user friendly.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Catalog Updation Services</h2>
                <p>Catalog updating is a tiring and a time consuming task, but our company will provide you with the service of catalog updating. This service will surely enhance your business since every time the customer visits your online store, they will have something new to explore. This will develop their interest and they may feel to visit your store again and again and also shop frequently. You only have to provide us with the regular updates about your new launches, and we will update it for you on regular basis. You can provide us the catalog in any format, and then it is our duty to bulk upload through flat CSV file or product uploading through excel templates.</p>
              </div>

               <div className={Style.ContentDiv}>
                <h2>Catalog Processing Services</h2>
                <p>Catalog building and recording and updating it is not just all. We will also provide you the service of catalog processing. This is a human nature that it gets attracted to things that appeals the sense, and that&apos;s what we will be targeting at. Though uploading perfect photos is not an easy task but with our team of experts we will upload the pictures after editing them, and we will also set the tone of the picture by manipulating its brightness, contrast and saturation level, and making them in contrast with the background and at the same time make them look appealing and attractive. As products will look appealing, therefore then they tend to attract more customers, which will definitely prove to be a major factor for the hike in sales.</p>
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

      <ClientPortfolio clients={portfolioClients} />

      <ClientSlider testimonials={testimonials} />

    </>
  )
};
