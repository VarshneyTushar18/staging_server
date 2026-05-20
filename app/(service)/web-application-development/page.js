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
  title: "Web Application Development services | Web App development company",
  description:
    "Tech2Globe offers web application development services. Our development team build powerful web applications with scalable features & process to full-fill key challenge.",

  keywords: [
    "Web Application Development",
    "web app development",
    "software development",
    "open source development",
    "nopcommerce development",
    "oscommerce development",
    "web design company",
    "Web Application Development services",
    "Web app development company",
  ],

  openGraph: {
    title:
      "Web Application Development services | Web App development company",
    description:
      "Tech2Globe offers web application development services. Our development team build powerful web applications with scalable features & process to full-fill key challenge",
    url: "https://www.tech2globe.com/web-application-development",
    siteName: "Tech2Globe",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Web Application Development services | Web App development company",
    description:
      "Tech2Globe offers web application development services. Our development team build powerful web applications with scalable features & process to full-fill key challenge",
  },

  alternates: {
    canonical:
      "https://www.tech2globe.com/web-application-development",
  },
};

const pageHeaderData = {
  title: "Web Application Development",
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


export default function WebApplicationDevelopment() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Web Application Development" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Web Application Development" imageSrc="/images/services/mobileandwebd-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p><strong>Tech2Globe</strong> provides service in web application development, mainly focused on building world class web 2.0 solutions by the use of latest technologies.</p>

                <p>Today, we are in a time when the methods of doing business have become more creative and the opportunities have become more lucrative. These days we make use of the best web applications development to make the web portal look more attractive and alluring. Tech2Globe has experts who are well qualified in creating world class web 2.0 application development solutions for our venerated clients. We use state-of-art custom web application development services which helps our customers to reach a wide audience globally.</p>

                <p>Our team is experienced in the development of advanced systems which have complex business logic deals. We supply our client an innovative and trustworthy web applications.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Our Technical Expertise</h4>
                <hr/>
                <p>Tech2Globe specialists use up-to-date technologies and latest industry trends to deliver technically complex and yet easy-to-use solutions with the optimal cost/performance ratio. Our procedures development and deployment are state of the art, using proven methodologies and highly efficient techniques.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>LAMP (PHP/MySQL)</h4>
                <hr/>
                <h5>PHP Development Services</h5>
                <p className="mb-0"><strong>FRAMEWORKS:</strong> CakePHP, CodeIgniter (CI), Zend, Symfony, YII</p>
                <p className="mb-0"><strong>OPEN SOURCE:</strong> Joomla, Magento, Drupal, WordPress</p>
                <p><strong>DATABASES:</strong> MySQL 5.x</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Microsoft ASP.NET (C# & VB.NET)</h4>
                <hr/>
                <h5>ASP.NET Development Services</h5>
                <p className="mb-0"><strong>OPEN SOURCE:</strong> NHibernate, Log4Net, Spring.NET, Quartz.NET</p>
                <p className="mb-0"><strong>DATABASES:</strong> SQL Server 2005/2008</p>
                <p className="mb-0"><strong>WEB AND DESKTOP APPLICATIONS:</strong>  ASP.NET (MVC3), ASP.NET 3.5/4.0 (C# / VB.NET) Web Services, AJAX, Windows Workflow Foundation, Silverlight, Sharepoint</p>
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

    </>
  )
};
