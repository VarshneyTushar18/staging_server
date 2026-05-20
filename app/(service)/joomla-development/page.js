import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Image from "next/image";
import { FaAngleRight, FaHandPointRight } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title: "Joomla CMS Development Services | Joomla Web Development Company",
  description:
    "Tech2Globe is a leading Joomla web development company in India. Our Joomla theming services include creating new themes, customizing themes, theme modification, and more.",

  keywords: [
    "Joomla CMS Development",
    "Joomla Web Development Company",
    "Joomla Development Services",
    "Joomla Solutions",
    "Custom Joomla Web Development Services",
    "Joomla Development Company India",
    "Joomla Website Design",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/Joomla-development",
  },

  openGraph: {
    title: "Joomla CMS Development Services | Joomla Web Development Company",
    description:
      "Tech2Globe is a leading Joomla web development company in India. Our Joomla theming services include creating new themes, customizing themes, theme modification, and more.",
    url: "https://www.tech2globe.com/Joomla-development",
    siteName: "Tech2Globe",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Joomla CMS Development Services | Joomla Web Development Company",
    description:
      "Tech2Globe is a leading Joomla web development company in India. Our Joomla theming services include creating new themes, customizing themes, theme modification, and more.",
  },
};

const pageHeaderData = {
  title: "Joomla CMS Development",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Joomla Development", path: "/joomla-development" },
  { id: 2, name: "Drupal Development", path: "/drupal-development" },
  { id: 3, name: "WordPress Development", path: "//wordpress-development" },
  { id: 4, name: "Shopify Development", path: "/shopify-development" },
  { id: 5, name: "BigCommerce Development", path: "/bigcommerce-development" },
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


export default function JoomlaDevelopement() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Joomla Development" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Joomla Development" imageSrc="/images/services/mobile-application-banner-2.jpg" />
              <div className={Style.ContentDiv}>
                <p>Joomla is a powerful open source Content Management System (CMS) for publishing contents Online. Joomla is written in PHP using OOPs concept (Object Oriented Programming). It’s an easy, more user-friendly, reliable and reasonably priced CMS used to meet any complex business desires. It has a wide-range of in-built plug-ins which creates the development process easier. Tech2Globe has huge expertise and experience in developing easy and complex websites and web application in Joomla.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Joomla Custom Development Services</h4>
                <p>Tech2Globe delivers Custom Joomla website development services which include a multitude of Joomla website development, design, website consulting and related services. Our development group of expert developers and designers in Joomla allows us to develop any kind of functionality to fulfil the various business needs of our clients. Joomla open source is based on a modular architecture plugins can be simply integrated to improve its basic functionalities. Tech2Globe provide the following custom development facilities in Joomla:</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h4>Custom development facilities in Joomla</h4>
                    <p>Joomla template design and custom design services</p>
                    <p><FaAngleRight/> Joomla module and component development</p>
                    <p><FaAngleRight/> Joomla eCommerce development</p>
                    <p><FaAngleRight/> Joomla Integration with web applications</p>
                    <p><FaAngleRight/> Joomla theming</p>
                    <p><FaAngleRight/> Hire Joomla designer, Hire Joomla Developer and Programmer</p>
                    <p><FaAngleRight/> Joomla search engine optimization (SEO) Services</p>

                    <h4>Joomla Theming</h4>
                    <p>The Joomla theming allows you to changing the look and feel of websites developed in Joomla. Tech2Globe offers various theming facilities in Joomla to our clients. Our Joomla theming services or facility contain creating new themes, customizing theme, theme modification and rebuild the existing themes etc.</p>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h4>Features</h4>
                    <p> <FaAngleRight/> <strong>Open Source:</strong> Joomla is an open source Content Management System with in-built text editor which permits stress-free editing and formatting of the contents.</p>
                    <p> <FaAngleRight/> <strong>Simple:</strong> Joomla is simple to install, easy to handle and reliable CMS.</p>
                    <p> <FaAngleRight/> <strong>Database:</strong> Joomla open source is a database driven CMS where the images, templates, (elements) etc. and stored in a centralized database.</p>
                    <p> <FaAngleRight/> <strong>Extendible and Modular:</strong> Joomla offers features such as RSS feeds, Page caching, news flashes, printable versions of pages, ratting, reviews, polls, blogs, and website searching etc.</p>
                    <p> <FaAngleRight/> <strong>Website Template Management:</strong> It is template driven Content Management System where each and every module in a website is connected with a separate template.</p>
                    <p> <FaAngleRight/> <strong>Generate Report:</strong> Also offer extensive tools to generate and view user statistics reports.</p>
                    <p> <FaAngleRight/> <strong>Joomla Search:</strong> It helps people navigate through most searched items and delivers the admin with search report or statistics.</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2>We Expertise in All <span className="text-danger">Major Technologies</span></h2>
                
                  <p><FaAngleRight/> <Link href="/cake-php-development" className="text-decoration-none fw-normal">Cake PHP Development</Link> </p>
                  <p><FaAngleRight/> <Link href="/nop-commerce-development-services" className="text-decoration-none fw-normal">Nopcommerce Development </Link></p>
                  <p><FaAngleRight/> <Link href="/joomla-development" className="text-decoration-none fw-normal">Joomla Development</Link></p>
                  <p><FaAngleRight/> <Link href="/drupal-development" className="text-decoration-none fw-normal">Drupal Development </Link></p>
                  <p><FaAngleRight/> <Link href="/responsive-web-design" className="text-decoration-none fw-normal">Responsive Web Design </Link></p>
                  <p><FaAngleRight/> <Link href="/mailchimp-template-design" className="text-decoration-none fw-normal">Mailchimp Template Design </Link></p>
  
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

      <ClientSlider testimonials={testimonials} />

    </>
  )
};
