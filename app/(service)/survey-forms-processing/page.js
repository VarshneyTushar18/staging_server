import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaHandPointRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "Outsource Survey Forms Processing Services | Forms Data Processing",
  description:
    "Tech2Globe gives productive Survey Data Processing Services to enable organizations to catch, process, and manage research data precisely. Get a free consultation today with us.",
  keywords: [
    "Survey Forms Processing Services",
    "Outsource Survey Forms Processing Services",
    "Form and Survey Processing Services",
    "Survey Processing Services",
    "Form data processing services",
    "Survey Forms Processing in Delhi"
  ],
  openGraph: {
    title: "Outsource Survey Forms Processing Services | Forms Data Processing",
    description:
      "Tech2Globe gives productive Survey Data Processing Services to enable organizations to catch, process, and manage research data precisely. Get a free consultation today with us.",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/survey-forms-processing",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Outsource Survey Forms Processing Services | Forms Data Processing",
    description:
      "Tech2Globe gives productive Survey Data Processing Services to enable organizations to catch, process, and manage research data precisely. Get a free consultation today with us."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/survey-forms-processing"
  }
};

const pageHeaderData = {
  title: "Survey Forms Processing",
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
    question: "Are your services cost-effective?",
    answer: `
        Yes. When you outsource to Tech2Globe you be assured of saving more than 40-50% of your operating costs.
      `,
  },
  {
    id: "Two",
    question: "How about security at Tech2Globe?",
    answer: `
        If security and privacy issues are stopping you from outsourcing, you can go ahead and start outsourcing to Tech2Globe as we ensure security, privacy & confidentiality at every level of the outsourcing process.
      `,
  },
  {
    id: "Three",
    question: "Does Tech2Globe possess long-term viability?",
    answer: `
        Yes, we consider our long-term viability to be excellent. You need not have any reservations about teaming up with us, as we are completely debt-free.
      `,
  },
  {
    id: "Four",
    question: "What modes of payment do you accept?",
    answer: `
        Once the project is completed and you are satisfied with the results, you can pay us either by wire transfer or by check.
      `,
  },
  {
    id: "Five",
    question: "How can I benefit by working with Tech2Globe?",
    answer: `
        At Tech2Globe, we can assure you that your project will be completed on schedule, within budget and in accordance with international quality standards.
      `,
  },
];

export default function SurveyFormsProcessing() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
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
        "name": "How about security at Tech2Globe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "If security and privacy issues are stopping you from outsourcing, you can go ahead and start outsourcing to Tech2Globe as we ensure security, privacy & confidentiality at every level of the outsourcing process."
        }
      },
      {
        "@type": "Question",
        "name": "Does Tech2Globe possess long-term viability?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes, we consider our long-term viability to be excellent. You need not have any reservations about teaming up with us, as we are completely debt-free."
        }
      },
      {
        "@type": "Question",
        "name": "What modes of payment do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Once the project is completed and you are satisfied with the results, you can pay us either by wire transfer or by check."
        }
      },
      {
        "@type": "Question",
        "name": "How can I benefit by working with Tech2Globe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "At Tech2Globe, we can assure you that your project will be completed on schedule, within budget and in accordance with international quality standards."
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
      <Breadcrumb parentName="Services" pageName="Survey Forms Processing" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Survey Forms Processing" imageSrc="/images/services/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>To encourage development, each organization needs to understand how its clients and customers get it and there is no preferable feedback tool for this over surveys. You can get data about your goods and services that can manage you in choosing your future strategy. This makes survey <Link href="/data-management-services" className="text-decoration-underline text-muted">data management</Link> a significant part of business activities. Efficient survey data handling permits you to assess the needs of your possible customers and serve them appropriately, putting you in front of the competition.</p>
                <p>Tech2Globe gives productive survey <Link href="/data-processing-services" className="text-decoration-underline text-muted">data processing services</Link> to enable organizations to catch, process, and manage research data precisely; empowering them to pick up bits of knowledge into the market they are serving and know clients&apos; behavior, needs, and desires. Our profoundly qualified experts assist you with drawing explicit data from survey forms and polls, process, confirm, design, and sort out the data in a simple to get to editable electronic format.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Data&apos;s Survey Scanning Services</h4>
                <p>Tech2Globe has the resources, technology and ability to convey top notch overview filtering services and bolster entrepreneurs in changing surveys into important data, along these lines empowering you increase simple access to business-basic data and lessen storage costs.</p>
                <p>Our specialists are additionally capable at ordering the digital documents to make it simple for the customers to recover relevant data, as and when the need emerges.</p>
                <div className="row pb-3">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="p-3 rounded border shadow-sm h-100">
                      <Image src="/images/services/verify.png" width={55} height={55} alt="Survey checking" className="img-fluid" />
                      <h4>Survey checking</h4>
                      <p>With our ability in Optical Character acknowledgment (OCR) and Intelligent Character Recognition (ICR), we are competent to rapidly change data hold various formats. As we additionally give OCR and ICR services and through better access to the right tools.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="p-3 rounded border shadow-sm h-100">
                      <Image src="/images/services/service-inner/data-entry-1.png" width={55} height={55} alt="Survey data entry" className="img-fluid" />
                      <h4>Survey data entry</h4>
                      <p>The following technique incorporates entering data into exceed expectations spreadsheets or databases. This empowers for unrivaled scrutiny and data removal.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="p-3 rounded border shadow-sm h-100">
                      <Image src="/images/services/service-inner/customer-support.png" width={55} height={55} alt="Survey data analysis and reporting" className="img-fluid" />
                      <h4>Survey data analysis and reporting</h4>
                      <p>This depends on the range of your project, we complete factual tests like relationship tests, Tech2Globe examining or cross table analysis. In different cases, we enquiry databases to excavate data.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Review Processing: Our Approach</h4>
                <p>To advance survey data, you can outsource survey handling services to Tech2Globe. Sponsored by effective ability pool and updated technology, we can help organizations in catching and handling research data precisely.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Survey Set-up</h4>
                <ul>
                  <li>Analyzing your business procedure and formulating exact questions.</li>
                  <li>Strategizing the correct technique for gathering information, including interviews, mailing lists, and polls.</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Data Capturing</h4>
                <p>Matching the accessible data with your plan of action and catching perfect and valuable data.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Survey Report</h4>
                <p>Building a report dependent on the research analyses and submitting it to you.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Tools</h4>
                <p>We took a look to many survey tools accessible on the web and assessed them to think of our eight top choices:</p>
                <ul>
                  <li>SoGoSurvey</li>
                  <li>Survey Monkey</li>
                  <li>Typeform</li>
                  <li>Google Forms</li>
                  <li>Client Heartbeat</li>
                  <li>Zoho Survey</li>
                  <li>Survey Gizmo</li>
                  <li>Survey Planet</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Getting Started</h4>
                <p>To help you make the most out of the valuable data and data contained in your survey forms and questionnaires, Tech2Globe provides a rich array of survey scanning services at cost-effective prices. To learn how we can help you gain the maximum out of your research material, kindly contact us today. You can drop us a line at info@tech2globe.com to know more about our survey scanning services.</p>
              </div>


            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
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
