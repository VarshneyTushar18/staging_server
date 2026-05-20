import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";


export const metadata = {
  title: "Outsource Catalog Processing Services Company | Tech2Globe",

  description:
    "Tech2Globe Provides the Catalog Processing Services directly from the most fundamental ecommerce product catalog processing outsourcing services like product data entry & more.",

  keywords: [
    "Catalog Processing Services",
    "Outsource catalog processing services",
    "eCommerce Product Catalog Processing Outsourcing Services",
    "Outsource catalog processing services company",
    "Online catalog processing services",
    "ecommerce catalog processing services",
    "Outsource eCommerce Product Catalog Processing Services",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/catalog-processing-services",
  },

  openGraph: {
    title: "Outsource Catalog Processing Services Company | Tech2Globe",
    description:
      "Tech2Globe Provides the Catalog Processing Services directly from the most fundamental ecommerce product catalog processing outsourcing services like product data entry & more.",
    url: "https://www.tech2globe.com/catalog-processing-services",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Outsource Catalog Processing Services Company | Tech2Globe",
    description:
      "Tech2Globe Provides the Catalog Processing Services directly from the most fundamental ecommerce product catalog processing outsourcing services like product data entry & more.",
  },
};

const pageHeaderData = {
  title: "Catalog Processing Services",
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
    text: "They have excellent service and management, this is honest review after a month of experience with them, team is hardworking, knowledgeable and do every task on time. I hope they continue to deliver me same output.",
    name: "Roxel- Account Management India",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Excellent Team, good results in sales",
    name: "Andriana- Amazon Sponsored Ads USA",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Excellent service by Tech2globe, brilliant service and hardworking",
    name: "Neo Global- Vendor Account Management UK",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Courteous, professional, quality work, best bang for your buck",
    name: " Medi Hub- Amazon Store Creations USA",
  },
  {
    id: 5,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Very professional and creative team. They patiently worked on changes I asked for and delivered on time. Thank you.",
    name: "Teliamed- Amazon Enhance Brand Content USA",
  },
];

const faqs = [
  {
    id: "One",
    question: "What kind of clients and industries have you worked for?",
    answer: `
        Tech2Globe have worked for an assortment of clients from industries such as medical, real estate, ecommerce, insurance, travel, education, banking, energy, personal care, motorsport, etc.
      `,
  },
  {
    id: "Two",
    question: "How experienced are you?",
    answer: `
        We have been serving global clients since last 10 years. In more than 10 years, we have delivered diverse complexity data projects successfully.
      `,
  },
  {
    id: "Three",
    question: "Where do you have your client base?",
    answer: `
        Our clients are based in USA, UK, Europe, Australia, South Africa, New Zealand, Malaysia and Japan. But we are happy to work with any client from anywhere in world
      `,
  },
  {
    id: "Four",
    question: "What is your turnaround time?",
    answer: `
        At Tech2Globe, our clients set deadlines and we make efforts to meet goals. We have ample workforce with years of experience to manage small as well as large scale projects comfortably in deadlines recommended by clients.
      `,
  },
  {
    id: "Five",
    question: "Do you sign non-disclosure agreements and SLAs?",
    answer: `
        Yes. We sign non-disclosure agreements and service level agreements for every customer who outsources to Tech2Globe. Outsource to Tech2Globe and experience worry-free outsourcing.
      `,
  },
];

export default function CatalogProcessing() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        name: "What kind of clients and industries have you worked for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tech2Globe have worked for an assortment of clients from industries such as medical, real estate, ecommerce, insurance, travel, education, banking, energy, personal care, motorsport, etc.",
        },
      },
      {
        "@type": "Question",
        name: "How experienced are you?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We have been serving global clients since last 10 years. In more than 10 years, we have delivered diverse complexity data projects successfully.",
        },
      },
      {
        "@type": "Question",
        name: "Where do you have your client base?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our clients are based in USA, UK, Europe, Australia, South Africa, New Zealand, Malaysia and Japan. But we are happy to work with any client from anywhere in world.",
        },
      },
      {
        "@type": "Question",
        name: "What is your turnaround time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "At Tech2Globe, our clients set deadlines and we make efforts to meet goals. We have ample workforce with years of experience to manage small as well as large scale projects comfortably in deadlines recommended by clients.",
        },
      },
      {
        "@type": "Question",
        name: "Do you sign non-disclosure agreements and SLAs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We sign non-disclosure agreements and service level agreements for every customer who outsources to Tech2Globe. Outsource to Tech2Globe and experience worry-free outsourcing.",
        },
      }
    ]
  };

  return (

    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Catalog Processing Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Catalog Processing Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Transform your online store with our catalog processing services. We offer accurate product data management and image optimization at affordable pricing. Partner with us for expert catalog building, conversion, and indexing.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Business with Outsource Catalog Processing Services</h2>

                <p>Catalog processing is the way to arrange all the items along with their particular brands, features, costs, offers, discounts, and so forth for an e-commerce website. In addition, it is one of the most positive ways to advance the product in the market and to captivate the clients. So, if you have a web-based business or an online store and are searching for an outsourcing company that can give quality catalog processing services at sensible costs, then Tech2Globe addresses your issues. We have more than ten years of experience in catalog processing services. When you <strong>outsource catalog processing services</strong> to us, you ensure your products are presented in the best possible light, enhancing their appeal to potential customers.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Why Your Online Business Needs Catalog Processing Services?</h2>
                <p>The catalog processing services at Tech2Globe are designed, remembering, adaptability and affordability. The thought behind this approach is to guarantee that our services meet the requirements of all of our customers and their divergent tasks.</p>
                <p>If you are into the e-commerce business, then our web based business <strong>catalog processing services</strong> can assist you with transforming your online store into a triumph with modern data. Tech2Globe will enable you to make, keep up, and intermittently update your product databases with the latest and most precise data.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Catalog Processing Services we offer</h2>
                <p>Directly from the most fundamental eCommerce product catalog processing outsourcing services like <Link href="product-data-entry-services" className="text-decoration-underline fw-bold">product data entry</Link> to advanced services like catalog transformation, ordering or building, we are a one-stop goal for an inventory preparing service that you may require. Here is a sneak look at what you can get when you pick our <strong>eCommerce catalog processing services:</strong></p>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <ul>
                      <li>Magento Product Catalog Upload Services</li>
                      <li>osCommerce Catalog Data Entry Services</li>
                      <li>Zen Cart Product Upload Services</li>
                      <li>X-Cart Product Entry Services</li>
                      <li>Shopify Catalog Data Upload services</li>
                      <li>BigCommerce Catalog Data Entry Services</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <ul>
                      <li>3dCart eCommerce Product Entry Services</li>
                      <li>Volusion Product Upload Services</li>
                      <li>NetSuite Data Entry Services</li>
                      <li>Catalog Data Entry Services for OpenCart</li>
                      <li>Catalog Data Entry and processing for custom made eCommerce Stores</li>
                    </ul>
                  </div>
                </div>

                <p>At Tech2Globe, we relieve your security worries by ensuring that our document sharing strategies are GDPR compliant, permit settings for granular permissions, and grant notifications and activity logs to recognize unapproved access. <strong>Outsource catalog processing services</strong> to us, and you can trust that your data will be handled with the highest level of security.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Our Outsource Catalog Processing Services Process</h2>
                <p>Tech2Globe is known for the efficient techniques used to perform non-core operations for worldwide customers and follows the same processes for <strong>eCommerce catalog processing services</strong> as demonstrated below:</p>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 shadow-sm h-100">
                      <img src="/images/services/service-inner/search.png" alt="Research" width="55" height="55" />
                      <h5>Research</h5>
                      <p>Before starting some other thing, we direct thorough research on the projects to discover the sorts of items and services you sell that make sense of the classification of your e-store, and your business strategy.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 shadow-sm h-100">
                      <img src="/images/services/service-inner/training.png" alt="Project-based Training" width="55" height="55" />
                      <h5>Project-based Training</h5>
                      <p>With all the important data in our hands, we train our classifying experts according to the particular needs of the task.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 shadow-sm h-100">
                      <img src="/images/services/service-inner/writing.png" alt="Content Creation" width="55" height="55" />
                      <h5>Content Creation</h5>
                      <p>Text and picture content is the essential necessity of all catalog processing projects. Our copywriting group gives great attention that titles and descriptions are fresh and SEO.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 shadow-sm h-100">
                      <img src="/images/services/service-inner/process-2.png" alt="Updating and Maintenance" width="55" height="55" />
                      <h5>Updating and Maintenance</h5>
                      <p>We add your information to catalogs carefully so the critical snippets of data arrive at the proposed buyers without fail.</p>
                    </div>
                  </div>

                  <p>The advantage when you <strong>outsource catalog processing services</strong> is that you can save your employees' time. Plus, this allows them to focus on core tasks.</p>

                </div>
              </div>
            </div>


            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <h2>Tools</h2>
                <p>Your product catalog is something your clients definitely focus on, but it is also the heart of your company. Which catalog management tool is most necessary for the management of your product information? We'll show you the essential tools:</p>
                <ul>
                  <li>Product Catalog Management</li>
                  <li>Product Information Management</li>
                  <li>Catalog Designer</li>
                </ul>
                <p>For any query related to <Link href="/data-entry-services" className="fw-bold text-decoartion-underline"> data entry</Link> or eCommerce catalog processing services you can contact us anytime without any second thought and we will be right at your help.</p>
              </div>
            </div>
          </div>
        </div>

      </section >

      <FaqSection faqs={faqs} />

      <ClientSlider testimonials={testimonials} />

    </>
  )
};