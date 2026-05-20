import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import { FaAngleRight, FaHandPointRight } from "react-icons/fa";
import Link from "next/link";


export const metadata = {
  title: "Java Development Services | Java Development Company | Tech2Globe",
  description:
    "At Tech2Globe, our expert Java developers help you set up and run Java applications flawlessly. We tailor our Java development services to best fit your business needs.",
  keywords: [
    "Java development services",
    "Java development company",
    "Java development solutions",
    "Custom Java application development services"
  ],
  openGraph: {
    title: "Java Development Services | Java Development Company | Tech2Globe",
    description:
      "At Tech2Globe, our expert Java developers help you set up and run Java applications flawlessly. We tailor our Java development services to best fit your business needs.",
    url: "https://www.tech2globe.com/java-development-services",
    siteName: "Tech2Globe web Solutions LLP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Java Development Services | Java Development Company | Tech2Globe",
    description:
      "At Tech2Globe, our expert Java developers help you set up and run Java applications flawlessly. We tailor our Java development services to best fit your business needs."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/java-development-services"
  }
};

const pageHeaderData = {
  title: "Java Development Services",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "PHP", path: "/php-development-services" },
  { id: 2, name: "Java", path: "/java-development-services" },
  { id: 3, name: "Angular JS", path: "/angular-js-development-services" },
  { id: 4, name: "Node JS", path: "/node-js-development-services" },
  { id: 5, name: "React JS", path: "/react-js-development-services" },
  { id: 6, name: "Ruby On Rails", path: "/ruby-on-rails-development" },
  { id: 7, name: "Laravel", path: "/laravel-development-services" },
  { id: 8, name: "Codeigniter", path: "/codeigniter-development-services" },
  { id: 9, name: "CakePHP", path: "/cake-php-web-development" },
  { id: 10, name: "Joomla", path: "/joomla-web-development" },
  { id: 11, name: "Drupal", path: "/drupal-web-development" },
  { id: 12, name: "WordPress", path: "/wordpress-development" },
  { id: 13, name: "Dot Net", path: "/dot-net-development-services" },
  { id: 14, name: "Azure", path: "/azure-development-services" },
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


export default function JavaWebDevelopment() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Java Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Java Development Services" imageSrc="/images/services/service-inner/custom-webdevelopment-banner.jpg" />
              <div className={Style.ContentDiv}>
                <p>Java application development services infer the designing of incredible web and mobile applications, web benefits, and installed software solutions ready to run on any stage with the Java language and systems.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Custom Java Software Development</h4>
                <p>Our group of Java experts comprising of UI/UX designers, developers, and QA testers will make an extraordinary Java application according to your requirements. They can make complex financial systems, ERPs, huge scope undertaking applications, and other software solutions that require very good quality security. We modify our Java development services as best fit for your business needs.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Java App Support and Maintenance</h4>
                <p>At Tech2Globe, our expert Java developers help you to set up and run your Java application flawlessly. Our java development solutions organization offers tailored support and maintenance services to guarantee agility, performance, and similarity of your application.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Integration Services</h4>
                <p>Our developers hold trustworthy working experience on all the latest Java developments, and have a sharp understanding of development life cycle, directly from design plan to implementation. Our skill set in this domain hence subsumes:</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Integration Services</h4>
                <p>Our developers hold trustworthy working experience on all the latest Java developments, and have a sharp understanding of development life cycle, directly from design plan to implementation. Our skill set in this domain hence subsumes:</p>

                <h4>Java API Development</h4>
                <p>Wide B2B additions, pre-built applications extension and customization.</p>

                <h4>Web Services Integration</h4>
                <p>
                  Custom web app integrations into the working atmosphere.
                </p>

                <h4>Data Connectors</h4>
                <p>Custom connectors for uninterrupted statement with SAP/Oracle, MS ERP systems.</p>

                <h4>Enterprise Service Bus</h4>
                <p>Effective, dependable and safe data exchange between many enterprises apps.</p>

                <h4>Architecture Reliability By Design</h4>
                <p>&nbsp;</p>

                <h4>Productive and Stable Performance</h4>
                <p>Accomplished through smart database architecture, SQL transactions optimization and seamless connection to app logic and workflows.</p>

                <h4>Robust, Multi-Level Security</h4>
                <p>Carefully drawn at application, user and network levels at outset of architecture design.</p>

                <h4>Loose Coupling And High Cohesion</h4>
                <p>Confirmed when constructing highly loaded distributed systems and wandering legacy solutions to micro services planning.</p>

                <h4>Code Quality Assurance</h4>
                <p>Java is a mature object-oriented language, which permits making measured projects and reusable code. The natural set of APIs comes as some other time-kicker. Programming in Java tangibly shortens the general improvement time and reduces the expenses.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Tech2Globe has following Expertise in Java Application Development</h4>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card shadow-sm p-3 h-100">
                      <h5 className="fw-medium">ENTERPRISE</h5>
                      <p>Our java application development company solely makes Java Enterprise solutions by utilizing the J2EE platform. We are a reliable enterprise Java web application Development Company and build rich applications for all little, medium, and large enterprises. Our <strong>Java application development services</strong> give applications that give your business an edge in the market.</p>
                      <p className="mb-0"><FaHandPointRight /> Business Intelligence</p>
                      <p className="mb-0"><FaHandPointRight /> Corporate Intranet / Extranet</p>
                      <p className="mb-0"><FaHandPointRight /> Customer Relationship Management</p>
                      <p className="mb-0"><FaHandPointRight /> Enterprise Content Management</p>
                      <p className="mb-0"><FaHandPointRight /> Inventory Management</p>
                      <p className="mb-0"><FaHandPointRight /> Finance & Accounting</p>
                      <p className="mb-0"><FaHandPointRight /> Records Management</p>
                      <p><FaHandPointRight /> Task Management</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card shadow-sm p-3 h-100">
                      <h5 className="fw-medium">WEB</h5>
                      <p>We make web applications utilizing flexible, reliable and secure Java Spring Framework. There are alternatives to make either a flexible REST API with a mix of any UI system or an exemplary MVC application with a mix of Thymeleaf or Fromage worker side Java format motor. We have been offering specialized help and working with standard clients for more than 10 years.</p>
                      <p className="mb-0"><FaHandPointRight /> E-commerce and online ordering</p>
                      <p className="mb-0"><FaHandPointRight /> Payment processing systems</p>
                      <p className="mb-0"><FaHandPointRight /> Social networking solutions</p>
                      <p className="mb-0"><FaHandPointRight /> Multi-media portals</p>
                      <p className="mb-0"><FaHandPointRight /> Digital repositories and storage management systems</p>
                      <p className="mb-0"><FaHandPointRight /> E-learning management systems</p>
                      <p><FaHandPointRight /> Online gaming</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Java App Development For IOT And Mobile</h4>
                <p>You may be surprised to discover that Java, the durable and ever helpful web programming language, is even still around. <strong>Custom Java application development services</strong> are correspondingly well known, as Java is utilized in smartphones, wearable tech, and numerous other IoT devices. At Tech2Globe, we will likely surpass guidelines in all aspects of web development, and Java is one of the numerous choices we give our clients. If you need a <strong>Java development company,</strong> look no further.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Teams Of Java Developers</h4>
                <p>Tech2Globe offers devoted Java designers to help your group. Top organizations and new companies pick Tech2Globe devoted Java experts for their crucial software projects.</p>
                <p className="mb-0"><FaHandPointRight /> Dedicated Java Programmers.</p>
                <p className="mb-0"><FaHandPointRight /> 10+ years of experience.</p>
                <p className="mb-0"><FaHandPointRight /> Flexible engagement models.</p>
                <p className="mb-0"><FaHandPointRight /> Save up to 60% on the development cost.</p>
                <p className="mb-0"><FaHandPointRight /> Engagement of domain experts to cover specific project requirements.</p>
                <p><FaHandPointRight /> Every team member can be pre-screened and interviewed by the customer.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Technology Stack</h4>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> GWT</p>
                    <p className="mb-0"><FaHandPointRight /> Vaadin</p>
                    <p className="mb-0"><FaHandPointRight /> JSF</p>
                    <p className="mb-0"><FaHandPointRight /> Spring</p>
                    <p className="mb-0"><FaHandPointRight /> Tomcat</p>
                    <p className="mb-0"><FaHandPointRight /> JBoss</p>
                    <p className="mb-0"><FaHandPointRight /> Glassfish</p>
                    <p className="mb-0"><FaHandPointRight /> AWS</p>
                    <p className="mb-0"><FaHandPointRight /> Google Cloud</p>
                    <p><FaHandPointRight /> Digital Ocean</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Oracle</p>
                    <p className="mb-0"><FaHandPointRight /> PostgreSQL</p>
                    <p className="mb-0"><FaHandPointRight /> MongoDB</p>
                    <p className="mb-0"><FaHandPointRight /> MySQL</p>
                    <p className="mb-0"><FaHandPointRight /> Maven</p>
                    <p className="mb-0"><FaHandPointRight /> Ant</p>
                    <p className="mb-0"><FaHandPointRight /> Gradle</p>
                    <p className="mb-0"><FaHandPointRight /> Jenkins</p>
                    <p className="mb-0"><FaHandPointRight /> AI</p>
                    <p><FaHandPointRight /> Machine Learning</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Chatboot</p>
                    <p className="mb-0"><FaHandPointRight /> Spring System</p>
                    <p className="mb-0"><FaHandPointRight /> QueryDSL</p>
                    <p className="mb-0"><FaHandPointRight /> Liferay</p>
                    <p className="mb-0"><FaHandPointRight /> Play System</p>
                    <p className="mb-0"><FaHandPointRight /> Apache Solr</p>
                    <p className="mb-0"><FaHandPointRight /> Gradle</p>
                    <p className="mb-0"><FaHandPointRight /> GIT</p>
                    <p className="mb-0"><FaHandPointRight /> Memcache</p>
                    <p><FaHandPointRight /> Groovy Grails</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Ready To Get Started</h4>
                <p>From deep-domain experience in ideating, engineering, and deployment of JAVA and JEE applications for various industries to after-sales support, we are one of the top-notch software companies with 10+ years of experience managing web development projects.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>We Expertise in All <span className="text-danger">Major Technologies</span></h2>

                <p><FaAngleRight /> <Link href="/cake-php-development" className="text-decoration-none fw-normal">Cake Php Development </Link></p>
                <p><FaAngleRight /> <Link href="/nop-commerce-development-services" className="text-decoration-none fw-normal">Nopcommerce Development</Link> </p>
                <p><FaAngleRight /> <Link href="/joomla-development" className="text-decoration-none fw-normal">Joomla Development</Link></p>
                <p><FaAngleRight /> <Link href="/drupal-development" className="text-decoration-none fw-normal">Drupal Development </Link></p>
                <p><FaAngleRight /> <Link href="/responsive-web-design" className="text-decoration-none fw-normal">Reponsive Web Design </Link></p>
                <p><FaAngleRight /> <Link href="/mailchimp-template-design" className="text-decoration-none fw-normal">Mailchimp Template Design </Link></p>
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
