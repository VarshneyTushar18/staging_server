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
  title: "Data Standardization Services | Outsource Data Standardization",
  description:
    "Tech2globe empowers businesses to make timely and well-informed decisions by providing customized data standardization services at an affordable cost.",
  keywords:
    "Data Standardization services, Address standardization services, outsource data standardization services, Ecommerce product Data Standardization services.",
  openGraph: {
    title: "Data Standardization Services | Outsource Data Standardization",
    description:
      "Tech2globe empowers businesses to make timely and well-informed decisions by providing customized data standardization services at an affordable cost.",
    url: "https://www.tech2globe.com/data-standardization-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Standardization Services | Outsource Data Standardization",
    description:
      "Tech2globe empowers businesses to make timely and well-informed decisions by providing customized data standardization services at an affordable cost.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/data-standardization-services",
  },
};

const pageHeaderData = {
  title: "Data Standardization Services",
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
    question: "What is Tech2Globe all about?",
    answer: `
        Tech2Globe is a pioneer in outsourcing and has been providing technology-driven outsourcing solutions to global companies from last 10 years. When you outsource to Tech2Globe you can be assured of risk-free outsourcing. Several global customers have chosen to partner with us because apart from providing services we strive to meet the business targets of our customers.
      `,
  },
  {
    id: "Two",
    question: "Are your services cost-effective?",
    answer: `
        Yes. When you outsource to Tech2Globe you be assured of saving more than 40-50% of your operating costs.
      `,
  },
  {
    id: "Three",
    question: "What is your TAT?",
    answer: `
        If you want your services to be delivered within a fast turnaround time, then you have come to the right place. One of the benefits that we offer our customers is our quick TAT.
      `,
  },
  {
    id: "Four",
    question: "How about security at Tech2Globe?",
    answer: `
        If security and privacy issues are stopping you from outsourcing, you can go ahead and start outsourcing to Tech2Globe as we ensure security, privacy & confidentiality at every level of the outsourcing process.
      `,
  },
  {
    id: "Five",
    question: "If I outsource to Tech2Globe, how will I be paying you?",
    answer: `
        You can pay us either by check or by wire transfer. If you would like to make payments by any other mode, then you can contact one of our sales executives.
      `,
  },
];

export default function DataScrubbing() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Tech2Globe all about?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tech2Globe is a pioneer in outsourcing and has been providing technology-driven outsourcing solutions to global companies from last 10 years. When you outsource to Tech2Globe you can be assured of risk-free outsourcing. Several global customers have chosen to partner with us because apart from providing services we strive to meet the business targets of our customers."
        }
      },
      {
        "@type": "Question",
        "name": "Are your services cost-effective?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. When you outsource to Tech2Globe you be assured of saving more than 40-50% of your operating costs."
        }
      },
      {
        "@type": "Question",
        "name": "What is your TAT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you want your services to be delivered within a fast turnaround time, then you have come to the right place. One of the benefits that we offer our customers is our quick TAT."
        }
      },
      {
        "@type": "Question",
        "name": "How about security at Tech2Globe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If security and privacy issues are stopping you from outsourcing, you can go ahead and start outsourcing to Tech2Globe as we ensure security, privacy & confidentiality at every level of the outsourcing process."
        }
      },
      {
        "@type": "Question",
        "name": "If I outsource to Tech2Globe, how will I be paying you?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can pay us either by check or by wire transfer. If you would like to make payments by any other mode, then you can contact one of our sales executives."
        }
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
      <Breadcrumb parentName="Services" pageName="Data Standardization Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Data Standardization Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Having an agreed-upon data standard in any organization seems like a good thought. However, in reality it&apos;s hard to actualize and keep up. You can&apos;t control how your clients present the records (through your eCommerce platforms, or the contact-request-form on your site), how your merchants deliver data, how your HR or sales power key-in data, or the integration of business lists and registries that your business advancement groups download from different sources, or inconsistent imports from CRM, ERP and other organizational databases.</p>
                <p>Data quality issues can frustrate your business forms, consequently making it fundamental to have simple access to perfect, predictable data that lead to operational efficiencies. To assist you with accomplishing that, Tech2Globe offers data standardization services at practical costs.</p>
                <p>Our experts understand, decipher and compose data productively to give you spotless, consistent data that can be shared over the association. We hold experience of 10 years and a half in adjusting global customers across various industry verticals and niches.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>As a part of our data standardization services, we perform</h2>
                <p>Our address standardization services experts have long periods of involvement with managing diverse kind of data normalization projects. We utilize best in class data scouring, data coordinating and <Link href="data-de-duplication-services" className="text-decoration-underline text-muted">de-duplication strategies</Link> to make your data spotless and steady. Here is a partial list of activities, we perform while data standardization process:</p>
                <ul className={Style.TwoCol}>
                  <li>Proper case formatting</li>
                  <li>Job titles standardization</li>
                  <li>State and country values standardization</li>
                  <li>Address values standardization</li>
                  <li>Prefix values standardization</li>
                  <li>Normalization of supplier and manufacturer data</li>
                  <li>Business and financial data normalization</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h2>Key Features of our Data standardization services</h2>
                    <p>We convey an total extent of data standardization services to give clear data that the customers can without a very easily understand, while promising it is consistent and trustworthy so it tends to be looked for and recognized using regular wording and configuration. Using a cutting edge data purifying data refining and organizing systems, our masters cautiously normalize terms, words and furthermore specific characteristics, as for the volume and sophistication.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h2>Data Standardization Tools</h2>
                    <p>The tools and equipment’s basic for the data cleansing work are likewise promptly available in India. So you can set aside your time and cash by outsourcing data standardization services to India.</p>
                    <ul className={Style.TwoCol}>
                      <li>NetApp</li>
                      <li>Data Domain</li>
                      <li>EMC</li>
                      <li>WinPure</li>
                      <li>Sepaton</li>
                      <li>Netrics</li>
                      <li>Revinetix</li>
                      <li>Exagrid</li>
                    </ul>
                  </div>
                </div>
                <p>We at Tech2Globe have the skill and experience of ecommerce product data standardization services of any size. Over 10 years of experience of serving a wide assortment of organizations over the globe makes us your optimal data de-duplication services outsourcing partner.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>The Need to Hire an Ecommerce Product Data Standardization Expert</h2>
                <p>It is significant that the organization of data on your online business store stays steady all through. Normalizing data across platforms or applications like ERP, CRM, online business store, and so forth will help give perfect, reliable and easy-to-understand data to the clients. Our data standardization service India offers the top notch help with exact planning and we seek after the global standards to convey and process these services. The insightful and famously talented representatives of SPGS accept the demand of keeping up this unwieldy procedure in to an effectively conquerable task.</p>
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <h2>Getting Started</h2>
                <p>Thus, if your database contains inaccurate, conflicting and non-standardized data that is hampering your business procedures and marketing campaigns, Tech2Globe can help! Outsource data standardization services today to know how we can assist you with data standardization services. You can write into us at info@tech2globe.com to know more.</p>
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
