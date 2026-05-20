import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaChartBar, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaLightbulb, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "Sales Support Service Provider Company | Tech2Globe",
  description:
    "We give end-to-end Outsource Sales Support Services directly from finding contact to lead age. Our masters will help you in building your sales with gainful qualified leads.",
  keywords:
    "Sales Support Services, Sales and marketing support services, Sale support service provider company, Marketing and sales support services.",
  alternates: {
    canonical: "https://www.tech2globe.com/sales-support-services",
  },
  openGraph: {
    title: "Sales Support Service Provider Company | Tech2Globe",
    description:
      "We give end-to-end Outsource Sales Support Services directly from finding contact to lead age.",
    url: "https://www.tech2globe.com/sales-support-services",
    siteName: "Tech2Globe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Support Service Provider Company | Tech2Globe",
    description:
      "We give end-to-end Outsource Sales Support Services directly from finding contact to lead age.",
  }
};

const pageHeaderData = {
  title: "Sales Support Services",
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
  { heading: "Useful Links", links: usefullinks },
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
    question: "How to get to your server and transfer my records?",
    answer: `
        We will make an FTP site for you and provide for its login and password subtle elements. Likewise, we will give you the path to transfer your records.
      `,
  },
  {
    id: "Two",
    question: " How will you return the documents to me?",
    answer: `
        We send completed documents by uploading the finished documents to a safe FTP server, or sending finished documents as an email connection.
      `,
  },
  {
    id: "Three",
    question: "What is your TAT?",
    answer: `
        Speedier TAT separates us from our competitors and depends on the undertaking and customer requirements.
      `,
  },
  {
    id: "Four",
    question: "Do you have any quality assurance process?",
    answer: `
        Yes. We take after stringent quality confirmation courses of action to guarantee that our clients are furnished with precise information.
      `,
  },
  {
    id: "Five",
    question: "Do you have the base to help data management services?",
    answer: `
        Yes. At Tech2Globe, we utilize the latest technology and infrastructure.
      `,
  },
];

export default function IndexingServices() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
       {
      "@type": "Question",
      name: "How to get to your server and transfer my records?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We will make an FTP site for you and provide for its login and password subtle elements. Likewise, we will give you the path to transfer your records.",
      },
    },
    {
      "@type": "Question",
      name: "How will you return the documents to me?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We send completed documents by uploading the finished documents to a safe FTP server, or sending finished documents as an email connection.",
      },
    },
    {
      "@type": "Question",
      name: "What is your TAT?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Speedier TAT separates us from our competitors and depends on the undertaking and customer requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have any quality assurance process?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. We take after stringent quality confirmation courses of action to guarantee that our clients are furnished with precise information.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have the base to help data management services?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. At Tech2Globe, we utilize the latest technology and infrastructure.",
      },
    },
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Sales Support Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Sales Support Services" />
              <div className={Style.ContentDiv}>

                <p>At Tech2Globe, we give end-to-end outsourced sales-support services directly from finding contact to lead age. Our masters not just help you in building your sales pipeline yet additionally help your income with gainful qualified leads. By strengthening your sales funnel with our proficient and compelling sales support services, we empower you to boost your sales and promoting ROI.</p>
                <p>Our talented, insightful and highly competent <Link href="/lead-generation-services" className="text-decoration-underline fw-bold">lead generation</Link> groups utilize superior blend of cutting-edge technology, inventive thoughts and demonstrated procedures. To assemble an on-going relationship with decision makers, we make right strategy and planning before execution. With our marketing and sales support services, we recognize and convey you just most qualified leads to improve the effectiveness of your sales teams.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Our sales support service offerings include:</h2>
                <p>Our sales support experts encourage you in accomplishing short and long term objectives in timely manner and bringing sales to close arrangements capably by keeping up a healthy relationship with your clients. Here are some key features of our sales support services:</p>
                
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card shadow-sm text-center p-3 h-100">
                      <div className="m-auto">
                        <Image src="/images/services/service-inner/search.png" alt="Contact Discovery Services" width={55} height={55} className="img-fluid"/>
                      </div>
                      <h4>Contact Discovery Services</h4>
                      <p>Finding the correct contact in a target enterprise requires high-level business insight. Tech2Globe gives profoundly tweaked contact discovery services, in view of our comprehension of your products or services and your objective market.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card shadow-sm text-center p-3 h-100">
                      <div className="m-auto">
                        <Image src="/images/services/service-inner/writing.png" alt="Appointment Setting Services" width={55} height={55} className="img-fluid"/>
                      </div>
                      <h4>Appointment Setting Services</h4>
                      <p>We assist you with booking meetings for your business group. With our appointment setting services, we ensure that you have a steady and strong flow of qualified business commitment.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card shadow-sm text-center p-3 h-100">
                      <div className="m-auto">
                        <Image src="/images/services/service-inner/undertaking.png" alt="Lead Qualification Services" width={55} height={55} className="img-fluid"/>
                      </div>
                      <h4>Lead Qualification Services</h4>
                      <p>To enable your sales to group, meet up with possibilities that are pre-qualified, we utilize best practices and our demonstrated technique including checking and approving the prompts separate basic inquiries from sales ready leads.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card shadow-sm text-center p-3 h-100">
                      <div className="m-auto">
                        <Image src="/images/services/service-inner/undertaking.png" alt="Account Profiling Services" width={55} height={55} className="img-fluid"/>
                      </div>
                      <h4>Account Profiling Services</h4>
                      <p>With our altered output and profiling of your targeted account in your destination market, we support you in continually refining your product solutions for optimal demand generation, and fitting your sales and marketing messages to increase serious positioning.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card shadow-sm text-center p-3 h-100">
                      <div className="m-auto">
                        <Image src="/images/services/service-inner/undertaking.png" alt="Event Data Management Services" width={55} height={55} className="img-fluid"/>
                      </div>
                      <h4>Event Data Management Services</h4>
                      <p>With event <Link href="/data-management-services" className="text-decoration-underline fw-bold">data management services</Link> at Tech2Globe, draw noteworthy ROI other than increasing huge crowds for your courses and online courses, and fully-packed meeting stalls and auditoriums, and meeting lobbies.</p>
                    </div>
                  </div>
                </div>

                <p>If you outsource sales and marketing support services to us, you take favorable circumstances of our web research forms, industry-explicit databases and other orderly approaches. To meet your particular requirements, we can tweak our business support procedures and practices.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Tools</h2>
                <p>Sales tools refer to digital tools utilized by sales proficient to make their work simpler. Sales tool classes incorporate <Link href="/oracle-applications" className="text-decoration-underline fw-bold">customer relationship management</Link> (CRM), sales knowledge, sales acceleration, sales gamification, sales examination, video conferencing, e-signature, account-based promoting, marketing automation, and client service softwares.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Our Experts Know All Languages</h2>
                <p>Tech2Globe offers the larger and most cost-efficient answers for online and offline data entry. We execute a heavy diversity of online data entry services in numerous languages - English, German, Dutch, French, Spanish, Italian and many more that’s why we are called as bilingual operators.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Why Tech2Globe?</h2>
                <ul>
                  <li><strong>Experienced -</strong> We have 10 years involvement with managing more than 300 solutions for change your business through powerful data analytics, refined procedures and cloud CRM solutions.</li>
                  <li><strong>Consistent -</strong> Our devoted services have made us a trusted and suggested specialist organization in the business.</li>
                  <li><strong>Creative -</strong> Our broad scope of integrated unique business solutions fits into coordinate complicated customer requirements.</li>
                  <li><strong>Adaptable -</strong> Our incorporated solutions are adaptable to change in accordance with the distinctive needs and business imperatives.</li>
                </ul>
                <p>Try out our free trial run of the sale support service provider company before initiating any project. Contact our customer support team and get the first-class statement of our data entry services today!</p>
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