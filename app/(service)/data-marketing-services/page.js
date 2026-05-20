import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import { FaHandPointRight } from "react-icons/fa";
import Image from "next/image";
import FaqSection from "@/app/components/services/faqs/faqs";

export const metadata = {
  title: "Outsource Data Marketing Services | Database Marketing Services",
  description:
    "Our Data Marketing Services offer complete answers for assisting you with accomplishing noteworthy market immersion. Build up your present customer relationships with Tech2Globe.",
  keywords: [
    "Data marketing services",
    "Outsource data marketing services",
    "Database marketing services",
  ],
  alternates: {
    canonical: "https://www.tech2globe.com/data-marketing-services",
  },
  openGraph: {
    title: "Outsource Data Marketing Services | Database Marketing Services",
    description:
      "Our Data Marketing Services offer complete answers for assisting you with accomplishing noteworthy market immersion. Build up your present customer relationships with Tech2Globe.",
    url: "https://www.tech2globe.com/data-marketing-services",
    siteName: "Tech2Globe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outsource Data Marketing Services | Database Marketing Services",
    description:
      "Tech2Globe offers you the most ideal method of streamlining your list enhancement initiative with a particular Custom List Building Services. With our B2B list building services, you can boost your marketing efforts & reduce your customer acquisition cost.",
  },
};

const pageHeaderData = {
  title: "Data Marketing Services",
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
    question: "How to get to your server and transfer my records?",
    answer: `
      We will make an FTP site for you and provide for its login and password subtle elements. Likewise, we will give you the path to transfer your records.
    `,
  },
  {
    id: "Two",
    question: " How will you return the documents to me?",
    answer: `
      We send completed documents by:
      <ul>
      <li>Uploading the finished documents to a safe FTP server; or</li>
      <li>Sending finished documents as an email connection; or</li>
      <li> If we get to the documents from your electronic application, we will finish the work on the same applicatiom</li>
      </ul>
    `,
  },
  {
    id: "Three",
    question: "What is your TAT?",
    answer: `
      Speedier TAT separates us from our competitors, and it depends completely on the undertaking and customers' prerequisites. When you outsource data management services, you might be guaranteed that our turnaround time would surpass your desires.
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
  {
    id: "Six",
    question: "Who can use Amazon PPC?",
    answer: `
      Amazon PPC is available for all third-party vendors on the Amazon platform. 
      It enables sellers to set up campaigns for their product ads, paying only when a potential buyer clicks on the advertisement.
    `,
  },
];

export default function DataMarketing() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How to get to your server and transfer my records?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We will make an FTP site for you and provide for its login and password subtle elements. Likewise, we will give you the path to transfer your records."
        }
      },
      {
        "@type": "Question",
        "name": "How will you return the documents to me?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We send completed documents by uploading them to a safe FTP server, sending them as an email attachment, or completing work on your application if access is provided."
        }
      },
      {
        "@type": "Question",
        "name": "What is your TAT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our turnaround time depends on the project scope and client requirements. We ensure faster TAT than industry standards."
        }
      },
      {
        "@type": "Question",
        "name": "Do you have any quality assurance process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We follow stringent quality assurance processes to deliver accurate data."
        }
      },
      {
        "@type": "Question",
        "name": "Do you have the base to help data management services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We use the latest technology and infrastructure to support data management services."
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
      <Breadcrumb parentName="Services" pageName="Data Marketing Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Data Marketing Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Tech2Globe Helping you influence your customers’ data to convey more customized, significant and effective marketing messages to them, data marketing services are incredibly basic for organizations that are sharp about knowing their clients. Amassing customer information and analyzing it, is a progressing battle for most organizations. While some think that it’s simple to seek after “big data” to the detriment of the correct information, others think that it’s hard since their significant spotlight is on relevant data.</p>
                <p>With Tech2Globe, improve the viability of your campaign, focus on the correct audience, and take advantage of your marketing dollars. Take a look at our key marketing database services.</p>
              </div>


              <div className={Style.ContentDiv}>
                <h2>What we offer on Typing and Transcription Services?</h2>
                <p>When you outsource typing and transcription to Tech2Globe, you get easy to use verbatim transcripts with an assurance of high-quality and accuracy. Our experts utilize advanced transcription software to transcribe data into all around formatted records.</p>
                <ul className={Style.TwoCol}>
                  <li>Email Campaigning</li>
                  <li>Custom List Building</li>
                  <li>Personalized Email Campaigns</li>
                  <li>Email Campaign Analysis</li>
                  <li>List Management</li>
                  <li>Sales Support Services</li>
                  <li>Contact Discovery</li>
                  <li>Account Profiling</li>
                  <li>Event Data Management</li>
                  <li>Lead Qualification</li>
                  <li>List Processing</li>
                  <li>List Building</li>
                  <li>Data Enrichment</li>
                  <li>Web Research</li>
                </ul>
              </div>


              <div className={Style.ContentDiv}>
                <h2>Process</h2>
                <p><strong>Our process incorporates the accompanying list and promoting database solutions:</strong></p>
                <ul>
                  <li>Customer securing ability from our group of expert brokerage specialists.</li>
                  <li>Advanced marketing research that recognizes likely clients by demographics, geological district, buying patterns, and online interests.</li>
                  <li>Revenue age got from able adapting of your customer database by our database marketing consultants.</li>
                  <li>Access to a huge number of business, purchaser, and nonprofit managed lists and databases.</li>
                  <li>Insert media opportunities for cost-adequately expanding your client reach.</li>
                  <li>Creation of a significant revenue stream for you from creation and management of addition media programs</li>
                  <li>Multichannel marketing systems that draw on data got from top-level advertising database suppliers.</li>
                  <li>In-depth analytics that let you go past figures to understand what your potential clients need and need from your organization.</li>
                  <li>Data the board through our restrictive database showcasing framework</li>
                </ul>
                <p>At Tech2Globe, we give answers that can help your organization's efficiency and productivity. Our marketing database solutions offer complete answers for assisting you with accomplishing noteworthy market immersion and touch off your publicizing and deals battles, permitting you to arrive at a more extensive client base while holding and building up your present customer relationships.</p>
              </div>


              <div className={Style.ContentDiv}>
                <h2>Tools</h2>
                <p>Implementing an effective database marketing strategy requires investing in the right tools. The company should have important features that promote personalization and campaign measurement.</p>
                <ul>
                  <li>Marketo</li>
                  <li>Stirista</li>
                  <li>Adestra</li>
                  <li>Oracle Eloqua</li>
                  <li>HubSpot</li>
                </ul>
                <p>If you are looking for such a database marketing consulting partner, then Tech2Globe is the right choice. Tech2Globe will deep dive into your data collection processes - data collection strategies, employee education, data analysis to boost marketing campaigns - and ensure you have the correct data to do the job well.</p>
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
