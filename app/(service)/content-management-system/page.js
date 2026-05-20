import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";

export const metadata = {
  title: "Content Management System Services | CMS Services | Tech2Globe",
  description:
    "Tech2Globe provide website design and development services by using content management System services. We have a team of web developer experts for WordPress, Joomla & more.",
  keywords: [
    "what is content managemant system",
    "content management system for webiste",
    "Content Management System Services",
    "CMS Services",
    "Content management system",
  ],
  openGraph: {
    title: "Content Management System Services | CMS Services | Tech2Globe",
    description:
      "Tech2Globe provide website design and development services by using content management System services. We have a team of web developers experts for WordPress, Joomla & more.",
    url: "https://www.tech2globe.com/content-management-system",
    siteName: "Tech2Globe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Management System Services | CMS Services | Tech2Globe",
    description:
      "Tech2Globe provide website design and development services by using content management System services. We have a team of web developers experts for WordPress, Joomla & more.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/content-management-system",
  },
};

const pageHeaderData = {
  title: "Content Management System (CMS)",
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
  { heading: "Resources", links: resources },
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

export default function OnlineBusinessManagementShopclues() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Content Management System" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Content Management System" imageSrc="/images/services/mobileandwebd-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>To help businesses manage and to distribute the information faster, effectively and efficiently, content management solutions are required. And they are very important to any organization. Tech2Globe will provide you with the best and easy-to-use solutions to communicate over web dealing from corporate websites to multi-level extranet.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Content management solutions</h4>
                <hr />
                <p>Our content management solutions include Web content management, document management, knowledge management, business process management, collaborations and media and digital asset management.</p>
               
               <ul>
                <li>Web Content Management</li>
                <li>Document Management</li>
                <li>Knowledge Management</li>
                <li>Media and Digital Asset Management</li>
                <li>Business Process Management</li>
                <li>Collaboration</li>
               </ul>
               
               <p>Depending on your requirements, we integrate a set of modules that provide a new level of information control and help you manage your data effectively.</p>
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>
          </div>
        </div>

         <ClientSlider testimonials={testimonials} />
      </section>

    </>
  )
};