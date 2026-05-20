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
  title: "Data Reporting and Analysis Services | Data Analysis services",
  description:
    "Our experts help directly from gathering basic information to analysing it, recognizing sales & revealing opportunities for development with Data Reporting & Analysis Services.",
  keywords: [
    "Data Reporting and Analysis Services",
    "Data reporting services",
    "Data Analysis services",
  ],
  alternates: {
    canonical: "https://www.tech2globe.com/reporting-and-analysis-services",
  },
  openGraph: {
    title: "Data Reporting and Analysis Services | Data Analysis services",
    description:
      "Our experts help directly from gathering basic information to analysing it, recognizing sales & revealing opportunities for development with Data Reporting & Analysis Services.",
    url: "https://www.tech2globe.com/reporting-and-analysis-services",
    siteName: "Tech2Globe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Reporting and Analysis Services | Data Analysis services",
    description:
      "Our experts help directly from gathering basic information to analysing it, recognizing sales & revealing opportunities for development with Data Reporting & Analysis Services.",
  }
};

const pageHeaderData = {
  title: "Reporting And Analysis",
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
    question: "How experienced are you?",
    answer: `
        We have been serving global clients since 2009. In more than 10 years, we have delivered diverse complexity data projects successfully.
      `,
  },
  {
    id: "Two",
    question: " What is the quality assurance process you follow?",
    answer: `
        We do three steps quality checking on each data project. Firstly, our operators check their everyday completed work for errors and fix. Secondly, Project Managers check completed work randomly for quality. Finally, QA teams verify all data thoroughly before delivery to client.
      `,
  },
  {
    id: "Three",
    question: "What is your turnaround time?",
    answer: `
        At Tech2Globe, our clients set deadlines and we make efforts to meet goals. We have ample workforce with years of experience to manage small as well as large scale projects comfortably in deadlines recommended by clients.
      `,
  },
  {
    id: "Four",
    question: "Do you offer free trials?",
    answer: `
        Yes, we are happy to offer a trial work for you to earn your confidence. This sample work would be totally free of cost without expecting any commitment from your end. You can award us project after your quality satisfaction.
      `,
  },
  {
    id: "Five",
    question: "How do I receive a finished project?",
    answer: `
        You will receive a finished project via email, secure FTP server, CD or DVD, etc. preferred by you.
      `,
  },
];

export default function ReportingAndAnalysis() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How experienced are you?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We have been serving global clients since 2009. In more than 10 years, we have delivered diverse complexity data projects successfully.",
        },
      },
      {
        "@type": "Question",
        name: "What is the quality assurance process you follow?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "We do three steps quality checking on each data project. Operators check work first, Project Managers review randomly, and QA teams verify thoroughly before delivery.",
        },
      },
      {
        "@type": "Question",
        name: "What is your turnaround time?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Clients set deadlines and we work efficiently with an experienced workforce to meet timelines for both small and large-scale projects.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer free trials?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Yes, we offer free trial work to earn your confidence with no commitment required.",
        },
      },
      {
        "@type": "Question",
        name: "How do I receive a finished project?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "You will receive the finished project via email, secure FTP server, CD, DVD, or any preferred method.",
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
      <Breadcrumb parentName="Services" pageName="Reporting And Analysis Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Reporting And Analysis Services" />
              <div className={Style.ContentDiv}>

                <p>While the correct information is required to settle on informed decisions, the correct analysis of data is important to help the effectiveness of marketing campaigns. Offering a complete suite of data reporting and analysis services, Tech2Globe can assist you with simply that. We plan to support businesses in refining basic data into important, actionable insights that engage their decision-making procedure and supports marketing funnel.</p>
                <p>Our experts help directly from gathering basic information to analyzing it, recognizing sales trends and revealing opportunities for development. With data reporting and analysis services, we give you the insights that you require to use information and focus on the correct audience. Our specialists fill in as an expansion of the customer's in-house group to decide their requirements and convey custom reports that help their decision making procedure.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Reporting Services Provided by Tech2Globe</h4>
                <p>In a series to make on advanced choices and improvise your business' development, we focus on collecting data to additionally managing final products. We have an advanced reporting team which works intimately with you and guarantees quality insights.</p>
                <p>We offer a broad scope of reporting services -</p>
                <ul>
                  <li>Forecasting Reports</li>
                  <li>User Behavior Analysis Report</li>
                  <li>Channel Performance Report</li>
                  <li>Macro to Micro Level Reports</li>
                  <li>Productivity Check Reports</li>
                  <li>Logistics / Inventory Status Reports</li>
                  <li>Custom / Flexible / Need Based Reports</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Our procedure for Reporting and Analysis Service</h4>
                <p>Data analysis contains examining information followed by cleaning, transforming and demonstrating it to stress significant pieces of data, which empowers you to settle on significant choices identified with your business. Data analysis services is significant for the success of your business considering the way that it advises you about the both opportunities just as risks your business is facing. When meticulously sorted, displayed and introduced, it is a very useful tool with regards to settling on choices within your organization.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Tools we use for Reporting and Analysis</h4>
                <p>Tech2Globe makes use of several statistical tools to examine the data sets. Based on the kind of analysis being done and what results you require, we will use a combination of the tools, such as Cluster Analysis, Factor Analysis, F and T Test, Correlations, Frequent Analysis and many more. To perform data reporting services and advertise the findings, we make use of various software tools including Microsoft Excel.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Master in All Languages</h4>
                <p>Our transcriptionists are fluent in English, French, German, Spanish, Hindi, Arabic, Russian, and Bengali and are well-acquainted with idioms, phrases, vocabulary, and different accents, at par with any native speaker.</p>
                <p>As a major aspect of data analysis services / data reporting services, we help you:</p>
                <ul>
                  <li>Understand clients and break down their conduct for goal-based optimization</li>
                  <li>Evaluate contender's marketing strategies and recognize holes</li>
                  <li>Assess the marketing channel – where and how the leads were created, the way they follow, how they convert, and so forth.</li>
                  <li>Set-up static and intelligent dashboard/scorecard that supports instinctive revealing and raises strategic decision making process</li>
                </ul>
                <p>Our data reporting and analysis services are planned for supporting organizations in assessing sales trends, settling on powerful business choices and taking advantage of lucky breaks for development by having exact and easy-to-access information readily available.</p>
                <p>Get in touch with us today to get a no-obligation quote for our scope of reporting and analysis services. You can likewise send us email at info@tech2globe.com and our experts will hit you up right away.</p>
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