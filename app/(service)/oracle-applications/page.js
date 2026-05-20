import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "Oracle Services & Solutions | Oracle Applications | Tech2Globe",
  description:
    "We offer solutions across all the applications in Oracle. such as CRM, SCM, or PLM. Tech2globe is well equipped and thoroughly trained with professional knowledge and experience",
  keywords:
    "Oracle Services, Oracle Solutions, Oracle Applications",
  openGraph: {
    title: "Oracle Services & Solutions | Oracle Applications | Tech2Globe",
    description:
      "We offer solutions across all the applications in Oracle. such as CRM, SCM, or PLM. Tech2globe is well equipped and thoroughly trained with professional knowledge and experience",
    url: "https://www.tech2globe.com/oracle-applications",
    type: "website"
  },
  twitter: {
    card: "summary",
    description:
      "We offer solutions across all the applications in Oracle. such as CRM, SCM, or PLM. Tech2globe is well equipped and thoroughly trained with professional knowledge and experience"
  },
  alternates: {
    canonical: "https://www.tech2globe.com/oracle-applications"
  }
};

const pageHeaderData = {
  title: "Oracle Applications",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Oracle Applications", path: "/oracle-applications" },
  { id: 2, name: "Oracle Technology", path: "/oracle-technology" },
  { id: 3, name: "Customer Experience", path: "/customer-support" },
  { id: 4, name: "Infrastructure Modernization", path: "/infrastructure" },
  { id: 5, name: "Security", path: "/security" },
  { id: 6, name: "Paperless Office", path: "/translation-firms-services" },
];

const sidebarSections = [
  { heading: "Resources", links: resources },
];


export default function OracleApplications() {
  return (

    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Oracle Applications" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Oracle Applications" imageSrc="/images/services/mobileandwebd-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>The term” Oracle E-Business Suite” primarily refers to all those inclusive worldwide applications which in some way or the other enable the clients in managing the complex business environments irrespective of the overall size of an organization. Apart from the many products being offered by the Oracle application family for instance Agile PLM, Siebel, much more complex modules like Product Configurator and People soft, all of these software’s have been specifically designed in such a manner that these are capable of resolving any multifarious challenges and even come handy for providing solutions which are automated in nature. The only given being that all of these applications have to be implemented in a proper phased out manner in order to work as designed and accurately.</p>

                <p>We at <strong>Tech2globe.com</strong> are well equipped and are thoroughly trained with professional knowledge and experience to handle the various tools and are backed up with a deep insight of the functioning of the tools of the Oracle applications family.</p>

                <p>We offer solutions across all the applications in Oracle, such as in Customer Relationship Management (CRM), Supply Chain Management (SCM) and Product Lifecycle Management (PLM) apart from the main Oracle E-Business Suite modules. Apart from providing and designing solutions for Oracle we also excel in providing solutions for various industries such as communications, life science industries, industrial manufacturing and high technology.</p>

                <p>By virtue of our strong end-to-end proficiency in the fields of Oracle Configuration, Oracle E-Business Suite, and Complex Ordering and Selling processes we have over the years delivered and performed various implementations for all our clients and our team of professionals have been successful in designing very valuable measures which have resulted in solutions which are save time, quote to cash, quote to order, procure-to-pay and order to cash solutions.</p>

                <p>All our clients look forward to Tech2globe.com for facilitating deploying across various business processes which many a times involve an approach which is conducted in a proper phased out manner and the solutions enable them to catch up on the time lost and thereby reduce the overall business impact or risk and these are often held at a very large level.</p>

                <ul>
                  <li>CRM (Opportunity and Quote)</li>
                  <li>Enterprise Financials Oracle E-Business Suite 11i/R12 Implementation, Reimplementation, Upgrade, and extending/enhancing functionality to already deployed functionality</li>
                  <li>ERP (Order Management, Configuration Management, Pricing Management, Contracts Management, Complex Selling and Configuration)</li>
                  <li>Product Lifecycle Management (Agile PLM)</li>
                  <li>Supply Chain Management (Manufacturing, Shipping, Order-to-Cash, Procure-to-Pay)</li>
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
      </section>
    </>
  )
};