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
  title: "Software Development company | Software Development Services",
  description:
    "Tech2Globe is a leading software development company that provides software development services for completing software developing needs and provides you wide range of solutions.",
  keywords:
    "software development, software development company, software development services, software development India, software company",
  alternates: {
    canonical: "https://www.tech2globe.com/software-development",
  },
  openGraph: {
    title: "Software Development company | Software Development Services",
    description:
      "Tech2Globe is a leading software development company that provides software development services for completing software developing needs and provides you wide range of solutions.",
    url: "https://www.tech2globe.com/software-development",
    siteName: "Tech2Globe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development company | Software Development Services",
    description:
      "Tech2Globe is a leading software development company that provides software development services for completing software developing needs and provides you wide range of solutions.",
  }
};

const pageHeaderData = {
  title: "Software Development",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "E-Commerce Development", path: "/e-commerce-development" },
  { id: 2, name: "Enterprise Portal Development", path: "/enterprise-portal-development" },
  { id: 3, name: "Content Management System", path: "/content-management-system" },
  { id: 4, name: "Web Application Development", path: "/web-application-development" },
  { id: 5, name: "Ruby On Rails Development", path: "/ruby-on-rails-development" },
  { id: 6, name: "Phonegap Development Services", path: "/phonegap-development-services" },
  { id: 7, name: "eCommerce Solutions", path: "/complete-ecommerce-solution-india" },
];

const sidebarSections = [
  { heading: "Resources", links: resources }
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


export default function SoftwareDevelopment() {

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
      <Breadcrumb parentName="Services" pageName="Software Development" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Software Development" imageSrc="/images/services/service-inner/ui-ux-banner-1.jpg" />
              <div className={Style.ContentDiv}>

                <h4>Software Development Company in Delhi</h4>

                <p>As an IT Outsourcing Partner, Tech2Globe provides software development services for completing software developing needs. We have in-built team of software developers for fulfill requirements of every industry’s needs. We have experienced and skilled developers with more than 7 years of experience in developing field.</p>
                <p>From 2014 of established Tech2Globe, our core focus to provide effective and affordable developing services to the clients and that’s why we have many satisfied clients from different sectors or different industries such as Healthcare, Banking and Finance, Telecom, Retail and Ecommerce, Hospitality, Transport and other industries.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Software Development Services</h4>
                <p><Link href="/e-commerce-development" className="text-decoration-underline fw-bold">Ecommerce Development</Link> This service includes full development of Ecommerce activities like process modelling, portal architecture design, UI design & prototyping, data base design and much more. Through the technologies Ajax, Java, FX, Flex and Silverlight to provide effective results and solutions.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Enterprise Portal Development</h4>
                <p><strong>Content Management System (CMS)</strong> Tech2Globe will provide you with the best and easy-to-use solutions to communicate over web dealing from corporate websites to multi-level extranet. It includes <Link href="/content-management-system" className="text-decoration-underline fw-normal">web content management</Link> , document management, knowledge management, media & digital asset management and much more.</p>

                <p><strong>Web Application Development</strong> Tech2Globe has experts and well qualified to creating world class web 2.0 application. Our team is experienced in the development of advanced system. Tech2Globe specialist use up-to-date technologies and latest industry trends to deliver technically complex.</p>

                <p><strong>SharePoint Web Development</strong> With the use of many services on SharePoint such as custom sharepoint development, migration to sharepoint 2010, sharepoint consultancy, sharepoint integration, sharepoint deployment and sharepoint maintenance services to create robust solutions.</p>

                <p><strong>Ruby On Rails Development</strong> Tech2Globe provides you the best platform to build a website. This platform includes lots of things to require developing fantastic applications. This kind of web development gets more popularity and provides efficiency.</p>

                <p><strong>Phonegap Development</strong> Phonegap is the best mobile-oriented apps improvement platforms. It is an open-source cross-platform. We have well qualified and experienced team to complete your all related issues regarding phonegap development.</p>

                <p><strong>Ecommerce Solutions</strong> Our professionals provide you the front to end full ecommerce solutions from product information to content creation, from banners, product’s images to develop email, <Link href="/search-engine-optimization" className="text-decoration-underline fw-normal">SEO</Link>, PPC, social media and complete solutions that helps to enhance ecommerce activities</p>
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

      <ClientSlider testimonials={testimonials} />
    </>
  )
};