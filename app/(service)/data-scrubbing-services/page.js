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
  title: "Outsource Data Scrubbing Services | Data Scrubbing Company | Tech2Globe",
  description:
    "Tech2Globe offers data scrubbing services and gives help with checking & adjusting your business-critical information & we assist you with keeping up a perfect database.",
  keywords:
    "Data Scrubbing Services, Outsource Data Scrubbing Services, Data Scrubbing Services providers, Outsourcing data scrubbing services to India.",
  openGraph: {
    title: "Outsource Data Scrubbing Services | Data Scrubbing Company | Tech2Globe",
    description:
      "Tech2Globe offers data scrubbing services and gives help with checking & adjusting your business-critical information & we assist you with keeping up a perfect database.",
    url: "https://www.tech2globe.com/data-scrubbing-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outsource Data Scrubbing Services | Data Scrubbing Company | Tech2Globe",
    description:
      "Tech2Globe offers data scrubbing services and gives help with checking & adjusting your business-critical information & we assist you with keeping up a perfect database.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/data-scrubbing-services",
  },
};

const pageHeaderData = {
  title: "Data Scrubbing Services",
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
    question: "Since how long are you in the outsourcing field?",
    answer: `
        We have experience of 10 years in data entry outsourcing field and have successfully accomplished various projects of clients across the world. We have wide experience of working on different types of data entry projects.
      `,
  },
  {
    id: "Two",
    question: "How are fees structured – hourly rate or per-unit pricing?",
    answer: `
        In general fees are charged on a per unit basis. This is the simplest for everyone to understand and assures you are not paying for inefficiencies. It is also easiest to audit when you receive each invoice. In very rare circumstances will consider an hourly billing.
      `,
  },
  {
    id: "Three",
    question: "How will I get the completed work files?",
    answer: `
        We assure the quality of final files are up to your standards and then send the files to you via email or through the online applications. Depending on the file size, we can also send the files or data via the secured FTP server.
      `,
  },
  {
    id: "Four",
    question: "What are your working hours?",
    answer: `
        We work from Monday to Saturday 07:00 AM (Morning) IST to 11:30 AM (Night) IST. In case of work urgency and on the basis of client’s request, we also work on Sundays.
      `,
  },
  {
    id: "Five",
    question: "Does Tech2Globe work on weekends and holidays?",
    answer: `
        Yes. Our data entry operators work different schedules, and many of them prefer weekends. Some holidays, particularly Thanksgiving and Christmas, are more challenging to achieve full production and may entail to incentivize the operators.
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
        "name": "Since how long are you in the outsourcing field?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have experience of 10 years in data entry outsourcing field and have successfully accomplished various projects of clients across the world. We have wide experience of working on different types of data entry projects."
        }
      },
      {
        "@type": "Question",
        "name": "How are fees structured – hourly rate or per-unit pricing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In general fees are charged on a per unit basis. This is the simplest for everyone to understand and assures you are not paying for inefficiencies. It is also easiest to audit when you receive each invoice. In very rare circumstances will consider an hourly billing."
        }
      },
      {
        "@type": "Question",
        "name": "How will I get the completed work files?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We assure the quality of final files are up to your standards and then send the files to you via email or through the online applications. Depending on the file size, we can also send the files or data via the secured FTP server."
        }
      },
      {
        "@type": "Question",
        "name": "What are your working hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work from Monday to Saturday 07:00 AM (Morning) IST to 11:30 AM (Night) IST. In case of work urgency and on the basis of client’s request, we also work on Sundays."
        }
      },
      {
        "@type": "Question",
        "name": "Does Tech2Globe work on weekends and holidays?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our data entry operators work different schedules, and many of them prefer weekends. Some holidays, particularly Thanksgiving and Christmas, are more challenging to achieve full production and may entail to incentivize the operators."
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
      <Breadcrumb parentName="Services" pageName="Data Scrubbing Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Data Scrubbing Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Data Scrubbing, likewise called data cleansing, is the way toward recognizing incorrect, invalid, obsolete, incomplete, and out-dated data from a database and correcting it to guarantee that the dataset is precise, current, and complete. Companies and organizations with huge databases need to invest a lot of time and cash in doing this resource-intensive task. Tech2Globe is an ISO certified service provider that brings to you qualified and experienced data cleaning specialists who work solely for you.</p>
                <p>At Tech2Globe, we give excellent data scrubbing services at financially savvy costs to help data concentrated organizations, for example, banking, retail, insurance, transportation, and telecommunication in the management of their databases. With an ideal mix of talented professionals, cutting edge innovation and attempted and tried techniques, we assist you with keeping up a perfect database. Our staff can productively deal with all parts of data scrubbing and data cleansing, guaranteeing that it is without mistake and up-to-date.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Our key data scrubbing services include</h2>
                <p>While outsource data scrubbing services Tech2Globe, have gotten the chance to work with numerous data-intensive businesses in the field of account and banking, market research, telecommunications and media, retail, insurance and healthcare, legal, publishing, instruction, transportation, recognizing and remediating data quality issues, and tidying up the data put away in their database.</p>
                <ul className={Style.TwoCol}>
                  <li>Correcting customers&apos; records</li>
                  <li>De-duplicating data</li>
                  <li>Adding missing data</li>
                  <li>Standardizing data</li>
                  <li>Normalizing data</li>
                  <li>Verifying and enriching data</li>
                </ul>
                <p>Once your database is de-duplicated, verified, validated, formatted and cleansed, we send you the file in your preferred format including Excel, CSV, PDF, SQL database, XML, TIFF, etc.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Our Process</h2>
                <p>Tech2Globe offers data scrubbing services, and gives help with checking and adjusting your business-critical information. Data scrubbing services providers can scour your client database, containing names and contact details of existing just as expected clients, ensuring that you generally capitalize on your database. We update your database with exact, modern information that is free from duplicity.</p>
                <p>Our Data Cleansing/Data Scrubbing process incorporates:</p>

                <div className={Style.ServiceCard}>
                  <div className="d-flex gap-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/analysis.png" alt="Analysis of Data" width={50} height={50} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>Analysis of Data</h5>
                      <p>Our group of specialists analyzes your data to distinguish its structure, substance, and quality. We start purging the data by correcting essential spelling mistakes, checking the data against reliable sources, and giving you exact and exceptional data.</p>
                    </div>
                  </div>
                </div>

                <div className={Style.ServiceCard}>
                  <div className="d-flex gap-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/duplicate-entries.png" alt="Data Deduplication" width={50} height={50} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>Data Deduplication</h5>
                      <p>During this phase, our specialists follow match, merge, and purge procedure to evacuate excess in the data and guarantee that all sections in the database are one of a kind, thereby keeping up data consistency.</p>
                    </div>
                  </div>
                </div>

                <div className={Style.ServiceCard}>
                  <div className="d-flex gap-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/standardization-data.png" alt="Standardization of Data" width={50} height={50} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>Standardization of Data</h5>
                      <p>We define, format, and structure your data appropriately in all data layers, and allocate exact properties or create schema as a major aspect of data standardization.</p>
                    </div>
                  </div>
                </div>

                <div className={Style.ServiceCard}>
                  <div className="d-flex gap-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/data-normal.png" alt="Data Normalization" width={50} height={50} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>Data Normalization</h5>
                      <p>We complete the normalization procedure to guarantee a reliable data structure. The procedure incorporates limiting excess, disposing of erroneous data, and sorting out the data effectively.</p>
                    </div>
                  </div>
                </div>

                <div className={Style.ServiceCard}>
                  <div className="d-flex gap-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/quality.png" alt="Quality Check" width={50} height={50} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>Quality Check</h5>
                      <p>Our quality assurance group conducts visit checks, guaranteeing precision of data at all stages, and furnishing you with error-free, steady and confirmed data.</p>
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
          </div>
        </div>

        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <h2>Tools</h2>
                <p>Tech2Globe is a top data scrubbing service provider. In addition to data cleansing services, our international team of data scrubbing professionals can help with specialized tasks such as visual analytics, industry analysis and packaging design services and uses following tools:</p>
                <ul className={Style.TwoCol}>
                  <li>OpenRefine</li>
                  <li>Trifacta Wrangler</li>
                  <li>Drake</li>
                  <li>TIBCO Clarity</li>
                  <li>Winpure</li>
                  <li>Data Ladder</li>
                  <li>Winpure</li>
                  <li>Data Ladder</li>
                  <li>Cloudingo</li>
                  <li>Reifier</li>
                  <li>IBM Infosphere Quality Stage</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <h2>Get Tech2Globe Data&apos;s Free Data Trial</h2>
                <p>With data cleansing services, we give you precise and cutting-edge data that encourages you improve operational productivity. Outsourcing data scrubbing services to India to examine your task necessities and find a free example line of work at no-cost-commitment premise. You can likewise send in to us at info@tech2globe.com to find out about our data scrubbing services.</p>
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
