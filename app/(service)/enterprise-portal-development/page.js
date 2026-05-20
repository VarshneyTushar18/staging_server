import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";

export const metadata = {
  title: "Enterprise Portal Development Services | Web Portal Development Company",
  description:
    "Tech2Globe is a trustworthy enterprise portal development company offering robust and scalable enterprise portal development services for your individual needs at an effective rate.",
  keywords: [
    "enterprise portal",
    "web and portal development",
    "web portal India",
    "software development",
    "enterprise application development",
    "enterprise portal development services",
    "web portal development company"
  ],
  openGraph: {
    title: "Enterprise Portal Development Services | Web Portal Development Company",
    description:
      "Tech2Globe is a trustworthy enterprise portal development company offering robust and scalable enterprise portal development services for your individual needs at an effective rate.",
    url: "https://www.tech2globe.com/enterprise-portal-development",
    siteName: "Tech2Globe",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Portal Development Services | Web Portal Development Company",
    description:
      "Tech2Globe is a trustworthy enterprise portal development company offering robust and scalable enterprise portal development services for your individual needs at an effective rate."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/enterprise-portal-development"
  }
};

const pageHeaderData = {
  title: "Enterprise Portal Development",
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

export default function EnterprisePortalDevelopment() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Enterprise Portal Development" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row pb-5">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Enterprise Portal Development" imageSrc="/images/services/mobileandwebd-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Tech2Globe builds effective Enterprise portals to ease the life of clients in various businesses. Tech2Globe provides full-cycle service and project activities support to its clients. The activities include consulting and business analysis, process modeling, portal architecture design, UI design and prototyping, Data modeling, data flow modeling and data base design/integration. We also have portal applications, modules development, and portal integration with third party software and web services. Our services also include deployment and stabilization, maintenance and support, continuous improvement and portal integration with business application like CRM, ERP, SCM, etc.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h3>Below are some areas which we focus while building and enterprise solution</h3>
                <hr />
                <ul>
                  <li>Consulting and business analysis</li>
                  <li>Modeling</li>
                  <li>Portal architecture design</li>
                  <li>UI design and prototyping</li>
                  <li>Data modeling, data flow modeling and database design/integration</li>
                  <li>Portal applications and modules development</li>
                  <li>Portal integration with third-party software and web services</li>
                  <li>Portal integration with business applications (like CRM, ERP, SCM, etc.)</li>
                  <li>Deployment and stabilization</li>
                  <li>Maintenance and support</li>
                  <li>Continuous improvement</li>
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

      </section >
    </>
  )
};