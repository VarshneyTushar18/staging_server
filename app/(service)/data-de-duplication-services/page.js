import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import FaqSection from "@/app/components/services/faqs/faqs";

export const metadata = {
  title: "Outsourcing Data De-Duplication Services | Data De-Duplication Experts",
  description:
    "Outsourcing data de-duplication services to Tech2Globe will offer you phenomenal outcomes at reasonable rates. Our team of workers who can cleanse your data with great ease.",
  keywords:
    "Data De-duplication services, outsourcing data de-duplication services, data de-duplication experts, Data De-duplication services provider company.",
  openGraph: {
    title: "Outsourcing Data De-Duplication Services | Data De-Duplication Experts",
    description:
      "Outsourcing data de-duplication services to Tech2Globe will offer you phenomenal outcomes at reasonable rates. Our team of workers who can cleanse your data with great ease.",
    url: "https://www.tech2globe.com/data-de-duplication-services",
    type: "website"
  },
  twitter: {
    card: "summary",
    description:
      "Outsourcing data de-duplication services to Tech2Globe will offer you phenomenal outcomes at reasonable rates. Our team of workers who can cleanse your data with great ease."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/data-de-duplication-services"
  }
};

const pageHeaderData = {
  title: "Data De-Duplication Services",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Restaurant Menu Entry Services", path: "/restaurant-menu-entry-services" },
  { id: 2, name: "Financial Data Entry Services", path: "/financial-data-entry-services" },
  { id: 3, name: "Catalog Management", path: "/catalog-management-services" },
  { id: 4, name: "Data Processing Services", path: "/data-processing-services" },
  { id: 5, name: "Data Product Entry", path: "/product-data-entry-services" },
];

const usefulLinks = [
  { id: 6, name: "Food Industries", path: "/food-industries-services" },
  { id: 7, name: "Non-profit Organization", path: "/non-profit-organizations-services" },
  { id: 8, name: "Medical And Health", path: "/medical-and-health-services" },
  { id: 9, name: "Translation Firms", path: "/translation-firms-services" },
];


const sidebarSections = [
  { heading: "Resources", links: resources },
  { heading: "Industries We Serve", links: usefulLinks },
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
  }
];

export default function DataDeDuplication() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Tech2Globe all about?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Tech2Globe is a pioneer in outsourcing and has been providing technology-driven outsourcing solutions to global companies from last 10 years. When you outsource to Tech2Globe you can be assured of risk-free outsourcing. Several global customers have chosen to partner with us because apart from providing services we strive to meet the business targets of our customers."
        }
      },
      {
        "@type": "Question",
        "name": "Are your services cost-effective?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes. When you outsource to Tech2Globe you be assured of saving more than 40-50% of your operating costs."
        }
      },
      {
        "@type": "Question",
        "name": "What is your TAT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "If you want your services to be delivered within a fast turnaround time, then you have come to the right place. One of the benefits that we offer our customers is our quick TAT."
        }
      },
      {
        "@type": "Question",
        "name": "How about security at Tech2Globe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "If security and privacy issues are stopping you from outsourcing, you can go ahead and start outsourcing to Tech2Globe as we ensure security, privacy & confidentiality at every level of the outsourcing process."
        }
      },
      {
        "@type": "Question",
        "name": "If I outsource to Tech2Globe, how will I be paying you?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "If I outsource to Tech2Globe, how will I be paying you?"
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
      <Breadcrumb parentName="Services" pageName="Data De Duplication Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Data De Duplication Services" imageSrc="/images/services/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Huge businesses generally have a sufficient measure of data in their databases which is a crucial part of their organization. Despite that, this data likewise may have a few mistakes which cause extra issues in the management of the data. In this manner, it is important to cleanse your database in standard time periods to maintain a strategic distance from any problem in your work. Data deduplication is a part of <a href="/data-cleansing-services" className="text-decoartion-underline text-muted">data cleansing services</a>.</p>
                <p>Outsourcing data deduplication services to Tech2Globe will offer you phenomenal outcomes at entirely reasonable rates. We have an extraordinary group of talented workers who can cleanse your data impeccably with great ease. Data deduplication will remove the chances of difficulty you may look because of various passages of similar data, duplicate sections, wrong entries under incorrect columns, and so on. Our data de-duplication experts can give you the best outcomes inside the specified time frames and furthermore offer tweaked solutions if necessary. Outsource data deduplication services and get the perfect database for your organization.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Our Data De-duplication Services Offerings</h2>
                <hr />
                <p>Our ISO-guaranteed data cleansing & profiling services guarantee that you get the best in class services without agonizing over the security of your data.</p>

                <div className={Style.ServiceCard}>
                  <div className="d-flex gap-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/merge.png" alt="Data Merge" width={50} height={50} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>Data Merge</h5>
                      <p>This service merges the data which has applicable data and supplementing data.</p>
                    </div>
                  </div>
                </div>

                <div className={Style.ServiceCard}>
                  <div className="d-flex gap-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/purge.png" alt="Data Purge" width={50} height={50} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>Data Purge</h5>
                      <p>This service cleans the merged database to remove any duplicate or different entries of similar data to make a precise database.</p>
                    </div>
                  </div>
                </div>

                <div className={Style.ServiceCard}>
                  <div className="d-flex gap-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/matching.png" alt="Data Matching" width={50} height={50} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>Data Matching</h5>
                      <p>Data matching joins the comparable data from various databases to assemble the data in a single spot as indicated by your necessities.</p>
                    </div>
                  </div>
                </div>

                <div className={Style.ServiceCard}>
                  <div className="d-flex gap-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/duplicate-entries.png" alt="Data Deduping" width={50} height={50} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>Data Deduping</h5>
                      <p>This service gives the finishing details to the perfect and exact database made for you, with all the important data accessible.</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h2>Our Data Deduplication Process Flow</h2>
                    <p>Our customer list for data de-duplication services incorporates companies just as people, small businesses and private enterprises. A good process flow incorporates the steps beneath –</p>
                    <ul>
                      <li>Client briefing and definition of data deduplication requirements</li>
                      <li>Delivery of data files to FWS</li>
                      <li>Deduplicating data by identifying potential duplicate entries and eliminating them</li>
                      <li>Quality check to monitor data accuracy and make any required revisions</li>
                      <li>Final delivery via the method specified by the client</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h2>Data Deduplication Tools</h2>
                    <p>Outsourcing your data deduplication services to an India based data de-duplication services provider company will assist you with perform this task inside the specified time spans. India has an enormous ability pool of talented specialists who have immense knowledge on this work. They with their mastery and experience can bring out better outcomes for you. The tools and equipment’s basic for the data cleansing work are likewise promptly available in India. So you can set aside your time and cash by outsourcing data deduplication services to India.</p>
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
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-3">
                    We at Tech2Globe have the skill and experience of de-duplicate data of any size. Over 10 years of experience of serving a wide assortment of organizations over the globe makes us your optimal data de-duplication services outsourcing partner.
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Pick Tech2Globe as Your Outsourcing Partner</h2>

                <p>Tech2Globe offers you top tier nature of data deduplication services. Get a statement of our world class data deduplication benefits and get profited by our offerings. Get in touch with us or visit our site today!</p>
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

      <FaqSection faqs={faqs} />

      <ClientSlider testimonials={testimonials} />

    </>
  )
};