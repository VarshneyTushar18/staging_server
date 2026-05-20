import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Link from "next/link";


export const metadata = {
  title:
    'E-Commerce Development Services | Web Development Services - Tech2Globe',

  description:
    'Tech2Globe offers expert E-Commerce and Web Development services, ensuring seamless online experiences. Trust us for innovative solutions and responsive designs.',

  keywords: [
    'best e commerce websites development company',
    'ecommerce web development company in delhi',
    'ecommerce web development company',
    'ecommerce web development company in india',
    'Ecommerce development services',
    'Ecommerce Website Development Company',
  ],

  alternates: {
    canonical: 'https://www.tech2globe.com/e-commerce-development',
  },

  openGraph: {
    title:
      'E-Commerce Development Services | Web Development Services - Tech2Globe',

    description:
      'Tech2Globe offers expert E-Commerce and Web Development services, ensuring seamless online experiences. Trust us for innovative solutions and responsive designs.',

    url: 'https://www.tech2globe.com/e-commerce-development',

    siteName: 'Tech2Globe',

    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Ecommerce Website Development Company | Ecommerce Development Services',

    description:
      'Tech2Globe offers expert E-Commerce and Web Development services, ensuring seamless online experiences. Trust us for innovative solutions and responsive designs.',
  },
}

const pageHeaderData = {
  title: "E Commerce Development",
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

export default function EcommerceDevelopment() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="E Commerce Development" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row pb-5">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="E Commerce Development" imageSrc="/images/services/mobileandwebd-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p><strong>Tech2Globe</strong> provides full-cycle service and project activities support to its clients. The activities include consulting and business analysis, process modeling, portal architecture design, UI design and prototyping, Data modeling, data flow modeling and data base design/integration. We also have portal applications, modules development, and portal integration with third party software and web services. Our services also include deployment and stabilization, maintenance and support, continuous improvement and portal integration with business application like CRM, ERP, SCM, etc. When it comes to e-commerce development, Tech2Globe specializes majorly on this area.<br /><br /> The work of highly functional solution development for marketplace, billing systems, payment processing, web stores etc are looked after by our team. We are highly experienced in building solutions for product types which includes consumer goods, downloadable content, media distribution, food ordering, business services and customer cares with a lot more.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h3>Advanced solutions for ambitious projects</h3>
                <hr />
                <p>
                  With the growing business, Tech2Globe has developed an understanding of the technology and skill required in <a href="web-development" className="text-decoration-underline fw-normal">web-development</a> to produce the major effective results and solutions. Through the technologies like Ajax, Java FX, Flex and Silverlight, Tech2Globe offers RIA development to deliver organic interactivity. We work keeping in mind the efficiency of our customers, so for their business growth and scalability requirements, we suggest solutions (including SOA based ones) that could be extended and integrated with other software as well.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <h4><img src="images/update.png" alt="On-the-fly updates" /> On-the-fly updates</h4>
                    <p>With the demand of new features growing in the marketplace, we keep upgrading our visual designs which help you run your business smoothly online without any interruptions. These practices have helped the e-commerce solution to grow in all directions.</p>
                  </div>
                  <div className="col-md-6">
                    <h4><img src="images/Scalability.png" alt="Scalability" /> Scalability</h4>
                    <p>The growing number of visitors, user accounts, catalog records and transactions require high scalability. We are highly experienced in multi-tier application development and database modeling resulting in excellent scalability results.</p>
                  </div>
                  <div className="col-md-6">
                    <h4><img src="images/Integration.png" alt="Integration" /> Integration</h4>
                    <p>The integration services provided at Tech2Globe for e-commerce solutions which include payment gateways, logistic management systems, Warehouse management systems, CRM systems and corporate accounting systems.</p>
                  </div>
                  <div className="col-md-6">
                    <h4><img src="images/Security.png" alt="Security and performance" /> Security and performance</h4>
                    <p>We at Tech2Globe keep a strict check on security and performance as e-commerce software which handles sensitive data and transactions. We use the pre-certification services of software security consulting and OWASP and PCI DSS. We have developed load-resistant architecture to avoid SPOFs.</p>
                  </div>
                </div>
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

      </section >
    </>
  )
};