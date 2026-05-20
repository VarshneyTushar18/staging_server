import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaAngleRight } from "react-icons/fa";

export const metadata = {
  title:
    "Outsource Accounting Data Entry Services | Data Entry Services",

  description:
    "Outsource accounting data entry services & bookkeeping data entry services to the most trusted company in India with Tech2Globe avail quick, accurate, and reliable services at highly and cost-effective rates.",

  keywords: [
    "accounting data entry",
    "accounts receivable data entry",
    "accounting data entry",
    "global data entry",
    "data entry company",
    "accounting data entry services",
    "outsource accounting data entry",
    "outsourcing accounting data entry services",
    "accounting data entry solution",
    "auditing data entry",
    "outsource accounting data entry services",
    "bookkeeping data entry",
    "accounts payable data entry",
    "outsource accounts receivable data entry",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/accounting-data-entry-services",
  },

  openGraph: {
    title:
      "Outsource Accounting Data Entry Services | Data Entry Services",
    description:
      "Outsource accounting data entry services & bookkeeping data entry services to the most trusted company in India with Tech2Globe avail quick, accurate, and reliable services at highly and cost-effective rates.",
    url: "https://www.tech2globe.com/accounting-data-entry-services",
    siteName: "Tech2Globe",
    type: "website",
  },

  twitter: {
    card: "summary",
    title:
      "Outsource Accounting Data Entry Services | Data Entry Services",
    description:
      "Outsource accounting data entry services & bookkeeping data entry services to the most trusted company in India with Tech2Globe avail quick, accurate, and reliable services at highly and cost-effective rates.",
  },
};

const faqs = [
  {
    id: "One",
    question: "What accounting services can I outsource to Tech2globe?",
    answer: `
        Invoice generation, tracking accounts receivable, sending reminders, generating accounts receivable reports, entering bills of vendors and tracking accounts payable, aging analysis, general ledger maintenance, customized reports, reconciliation of checking and credit card accounts, payroll processing services, data entry, claims service and more.
      `,
  },
  {
    id: "Two",
    question: "What is the best time to contact you?",
    answer: `
        Tech2globe leverage the best communication technology to ensure that our finance and accounting services team is constantly available over phone, Duo, hangout, e-mail, Skype, and chat to answer your queries and address your requirements at all times.
      `,
  },
  {
    id: "Three",
    question: "What are your payment modes?",
    answer: `
        Tech2globe accept payments through PayPal, Credit Card, Check within USA, and Wire Transfer.
      `,
  },
  {
    id: "Four",
    question: "Does Tech2globe provide a free trial?",
    answer: `
        Yes, we do offer a free trial of our data entry services. After you are satisfied with the quality of our services, you can sign the contract with us.
      `,
  },
  {
    id: "Five",
    question: "In which parts of the world are your clients based?",
    answer: `
        We provide a quick response for our data entry service, and promise a turnaround time of 24 hours in most cases. However, the project turnaround time will also depend on the volume of work, project difficulty, and urgency.
      `,
  },
];

const pageHeaderData = {
  title: "Accounting Data Entry Services",
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

export default function AccountingDataEntry() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What accounting services can I outsource to Tech2globe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Invoice generation, tracking accounts receivable, sending reminders, generating accounts receivable reports, entering bills of vendors and tracking accounts payable, aging analysis, general ledger maintenance, customized reports, reconciliation of checking and credit card accounts, payroll processing services, data entry, claims service and more."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best time to contact you?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tech2globe leverage the best communication technology to ensure that our finance and accounting services team is constantly available over phone, Duo, hangout, e-mail, Skype, and chat to answer your queries and address your requirements at all times."
        }
      },
      {
        "@type": "Question",
        "name": "What are your payment modes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tech2globe accept payments through PayPal, Credit Card, Check within USA, and Wire Transfer."
        }
      },
      {
        "@type": "Question",
        "name": "Does Tech2globe provide a free trial?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we do offer a free trial of our data entry services. After you are satisfied with the quality of our services, you can sign the contract with us."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to complete a project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide a quick response for our data entry service, and promise a turnaround time of 24 hours in most cases. However, the project turnaround time will also depend on the volume of work, project difficulty, and urgency."
        }
      }
    ]
  };

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Accounting Data Entry Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Accounting Data Entry Services" imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg" />
              <div className={Style.ContentDiv}>

                <p>All type of organization, whether huge or little need to manage huge amounts of finance and account statements, which may require an immense in-house group of data entry operators with sound accounting background. Outsourcing this tedious task of accounting <Link href="/data-entry-services">data entry services</Link> will assist you with sparing time and exertion and cut down on operational overheads. Data entry of account statements requires an extremely significant level of accuracy, speed and expertise as it includes a short pivot time.</p>
                <p>Tech2globe offer tailor made solutions for take into account your particular bookkeeping and accounting needs consequently permitting you to advance your in-house assets for basic business tasks. We offer a scope of bookkeeping & accounting data entry services for a wide range of organizations and are well skilled to deal with bulk orders in the most brief pivot time at alluring rates.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h2>Advantages of Outsourcing Invoice Data Entry Services</h2>
                <ul>
                  <li>Our expert group comprises of certified accountants and managers, financial pros, accounting software experts, and bookkeeping controllers with many years of experience.</li>
                  <li>Tech2globe can remove the basic information for your business from any financial reports, financial statements and comparable significant archives and convey it in appropriate organizations, for example, PDF, Text, HTML, Word, and more.</li>
                  <li>Our <Link href="/financial-data-entry-services" className="fw-normal">financial accounting data entry services</Link> likewise incorporate furnishing customers with significant insights concerning the kinds of stocks, districts, monetary forms, fiscal values, and then some.</li>
                  <li>Tech2globe deal with a wide range of bookkeeping records, for example, the organization's annual reports, merger obtaining papers, trading reports, and more.</li>
                  <li>Our services incorporate the management of invoicing just as monthly statements for the matter of every customer.</li>
                  <li>Tech2globe likewise manage finance reports and stock reports for our customers.</li>
                  <li>We make a point to follow explicit specialized methods so as to guarantee the safety and security of the customer's information in each bookkeeping data entry services we give.</li>
                  <li>Tech2globe propose you attempt our free trial run before allotting your project to us and allow us to give you how we will finish your work with high efficiency and best outcomes.</li>
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

        <div className={Style.ContentDiv}>
          <div className="bg-dark mt-5 pt-5 pb-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-white">
                  <div className="leftaccblock">
                    <h4>Our Experts Understand You and Speak Multilingual Languages</h4>
                    <p>Tech2globe provide help through well trained, capable and devoted staff that is willing to lend you a hand to cut through the language barrier like German, French, Korean, English, Thai, Hindi, Chinese, etc. so that you can convey your opinions through e-mail and chat support. We understand that unless you carry the message with the correct meaning, you cannot expand your business.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-white">
                  <div className="rightaccblock">
                    <h4>Our Process for Accounting Data Entry Services</h4>
                    <p>Tech2globe utilizes the updated data entry technology to offer quality is driven and exact outcomes to our customers. We have worked for customers from different nations including the USA, UK, Australia, France, and so forth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container">
          <div className={Style.ContentDiv}>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p className="mt-5">Our full scope of accounting data entry services incorporates the following:</p>
              <div className="row pb-4">
                <div className="col-12 mb-3">
                  <div className="card shadow rounded p-4 d-flex flex-row align-items-start gap-4">

                    <div className="text-center">
                      <Image src="/images/services/service-inner/accounting.png" width={55} height={55} alt="Gather Accounting Data" />
                    </div>
                    <div className="context">
                      <h5>Gather Accounting Data</h5>
                      <p>Tech2globe gather your bookkeeping information before choosing fitting tools and strategies to continue with the work.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <div className="card shadow rounded p-4 d-flex flex-row align-items-start gap-4">

                    <div className="text-center">
                      <Image src="/images/services/service-inner/data-entry-1.png" width={55} height={55} alt="Data Entry Process" />
                    </div>
                    <div className="context">
                      <h5>Data Entry Process</h5>
                      <p>After confirming the necessities, we process the data entry work in a careful manner. Special emphasis is on designating obligations to the project managers and guaranteeing that the talented accounting group carries out the responsibility in order to keep up the exactness of your work. All the bookkeeping & accounting data entry services at our end are appropriately prepared to give required excellence and speedy turnaround time.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <div className="card shadow rounded p-4 d-flex flex-row align-items-start gap-4">

                    <div className="text-center">
                      <Image src="/images/services/service-inner/quality.png" width={55} height={55} alt="Quality Check" />
                    </div>
                    <div className="context">
                      <h5>Quality Check</h5>
                      <p>Tech2Globe will then import the handled information into your accounts payable system, in the format of your decision, by means of our secure FTP.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <div className="card shadow rounded p-4 d-flex flex-row align-items-start gap-4">

                    <div className="text-center">
                      <Image src="/images/services/service-inner/delivery.png" width={55} height={55} alt="Delivery and Feedback" />
                    </div>
                    <div className="context">
                      <h5>Delivery and Feedback</h5>
                      <p>Your input and recommendations are acknowledged to enhance our auditing data entry services.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className={Style.ContentDiv}>
              <h4>Tools we use in Accounting Data Entry Services</h4>
              <p>Outsource accounting data entry services implies having the latest devices accessible gifted work force, state of the art hardware and software, timely information, and access. Servers and systems of Tech2globe are consistently the latest and the best, with experienced support and steady upgrading. We highly value utilizing the below devices to complete your activity.</p>
              <p className={Style.Twolist}>
                <p className="mb-0"><FaAngleRight />Sage Accounting</p>
                <p className="mb-0"><FaAngleRight />FreshBooks</p>
                <p className="mb-0"><FaAngleRight />QuickBooks Online</p>
                <p className="mb-0"><FaAngleRight />Xero</p>
                <p className="mb-0"><FaAngleRight />Sage 300</p>
                <p className="mb-0"><FaAngleRight />Sighted</p>
                <p className="mb-0"><FaAngleRight />WagePoint</p>
                <p className="mb-0"><FaAngleRight />Gusto</p>
              </p>
              <p>For such tedious work, outsourcing these invoice data entry bodes well with tools.</p>
            </div>
            <div className={Style.ContentDiv}>
              <h4>Discuss Your Project with Us</h4>
              <p>Get in touch with us whenever and get dependable services at cost effective prices, you can profit the advantage of our quality oriented data entry services today!</p>
              <p>We at Tech2Globe have the skill and experience of de-duplicate data of any size. Over 10 years of experience of serving a wide assortment of organizations over the globe makes us your optimal data de-duplication services outsourcing partner.</p>
            </div>

            <div className={Style.ContentDiv}>
              <h4>Pick Tech2Globe as Your Outsourcing Partner</h4>
              <p>Tech2Globe offers you top tier nature of data deduplication services. Get a statement of our world class data deduplication benefits and get profited by our offerings. Get in touch with us or visit our site today!</p>
            </div>

          </div>
        </div>


      </section >


      <FaqSection faqs={faqs} />

    </>
  )
};