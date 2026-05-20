import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import { FaAngleRight, FaHandPointRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";


export const metadata = {
  title: "Dot Net Development Company | Asp Dot NET Software Development",
  description:
    "Tech2globe is a leading dot net development company in the USA, Australia, Netherlands, Canada, Dubai, and India. We offer ASP.NET web and application development services that are outstanding and perfect for any business.",
  openGraph: {
    title: "Dot Net Development Company | Asp Dot NET Software Development",
    description:
      "Tech2globe is a leading dot net development company in the USA, Australia, Netherlands, Canada, Dubai, and India. We offer ASP.NET web and application development services that are outstanding and perfect for any business.",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/dot-net-development-services",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Dot Net Development Company | Asp Dot NET Software Development",
    description:
      "Tech2globe is a leading dot net development company in the USA, Australia, Netherlands, Canada, Dubai, and India. We offer ASP.NET web and application development services that are outstanding and perfect for any business."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/dot-net-development-services"
  }
};

const pageHeaderData = {
  title: "Dot NET Development Services",
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


export default function DotNetDevelopment() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Dot Net Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Dot Net Development Services" imageSrc="/images/services/service-inner/custom-webdevelopment-banner.jpg" />

              <div className={Style.ContentDiv}>
                <p>With the <strong>.NET Application Development Services</strong> and other Microsoft products, we build mission-critical applications. Our <strong>ASP.Net Development Company</strong> focused on MS include portals, mobile applications, BI tools, chatbots, data collection, CRM Dynamics, and Azure cloud services. We know how to build the .NET for all vertical industries with over ten years of system integration experience.</p>

                <p>Tech2Globe has .NET domain expertise and has created numerous mobile and desktop apps for various sectors and verticals, including retail, eCommerce, industry, IT, media, travel, healthcare, etc. Tech2Globe can provide you with custom solutions with more than ten years of experience in .NET application development, and outsourcing your .NET development requirements to us can give you access to the following benefits.</p>

                <p>Tech2Globe is a valuable <strong>Dot Net Development Company Services</strong> where you will find that our team will be a great candidate for your tasks if you need <strong>ASP.net Development Services</strong>. We are experts in any form of application creation that you may need and can handle it.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="mb-3">Our ASP.NET Development Services</h4>
                <hr />
                <p><strong>Hire .Net Developers</strong> from Tech2Globe to have extensive experience in the development of large-scale ASP.NET web applications and high-performance ASP.NET websites with the new ASP.NET flavors such as ASP.NET 4.5, ASP.NET MVC 4, and ASP.NET Core.</p>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-4 shadow-sm h-100">
                      <div className="d-flex gap-3">
                        <div className={Style.ServiceCardIcon}>
                          <Image src="/images/services/service-inner/desktop-app-icon.png" alt=".NET Desktop Application Development Services" width={50} height={50} />
                        </div>
                        <div className={Style.ServiceCardContent}>
                          <h5 className="fw-medium">.NET Desktop Application Development Services</h5>
                          <p className="mb-0">In designing Windows GUI applications (Windows Forms or WinForms), Windows Console applications, Windows Smart Client applications using Windows Presentation Foundation (WPF) and Windows Store Software for Windows 8, Tech2Globe's .NET desktop application development team is experienced.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-4 shadow-sm h-100">
                      <div className="d-flex gap-3">
                        <div className={Style.ServiceCardIcon}>
                          <Image src="/images/services/service-inner/migration.png" alt=".NET Application Migration" width={50} height={50} />
                        </div>
                        <div className={Style.ServiceCardContent}>
                          <h5 className="fw-medium">.NET Application Migration</h5>
                          <p className="mb-0">Modernization of .NET migration / Legacy Framework Modernization has been one of the criteria we have faced across various scenarios. You can leverage our Expertise for migrating your current legacy or web application into .Net.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-4 shadow-sm h-100">
                      <div className="d-flex gap-3">
                        <div className={Style.ServiceCardIcon}>
                          <Image src="/images/services/service-inner/app-dev.png" alt="Custom .NET App Development" width={50} height={50} />
                        </div>
                        <div className={Style.ServiceCardContent}>
                          <h5 className="fw-medium">Custom .NET App Development</h5>
                          <p className="mb-0">Taking advantage of the.net framework and the .NET IDE, we can build custom and multi-platform mobile applications on the .NET platform. To build enterprise-level solutions, we use the best practices accepted by Microsoft and leverage frameworks, including MVC5.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-4 shadow-sm h-100">
                      <div className="d-flex gap-3">
                        <div className={Style.ServiceCardIcon}>
                          <Image src="/images/services/service-inner/asp.png" alt=".NET MVC Development" width={50} height={50} />
                        </div>
                        <div className={Style.ServiceCardContent}>
                          <h5 className="fw-medium">.NET MVC Development</h5>
                          <p className="mb-0">One of the three models supported by ASP.NET, a lightweight, highly testable MVC system, is the Model View Controller (MVC). We use it to maintain and manage MVC applications forASP.NET, achieve clean separation of concerns, and exercise full control over made HTML.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-4 shadow-sm h-100">
                      <div className="d-flex gap-3">
                        <div className={Style.ServiceCardIcon}>
                          <Image src="/images/services/service-inner/computer.png" alt=".NET Integration" width={50} height={50} />
                        </div>
                        <div className={Style.ServiceCardContent}>
                          <h5 className="fw-medium">.NET Integration</h5>
                          <p className="mb-0">We integrate the ASP.Net solutions with suitable business applications, including CRM, ERP, APIs, extensions, etc., to ensure improved functionality, seamless usability, maximized comfort, and streamlined yet rapid growth.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-4 shadow-sm h-100">
                      <div className="d-flex gap-3">
                        <div className={Style.ServiceCardIcon}>
                          <Image src="/images/services/service-inner/app-testing.png" alt=".NET Application Testing" width={50} height={50} />
                        </div>
                        <div className={Style.ServiceCardContent}>
                          <h5 className="fw-medium">.NET Application Testing</h5>
                          <p className="mb-0">Each business module goes through rigorous testing to check and validate expected application actions in response to various inputs to create an exact match between ASP.Net production & company operations.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-4 shadow-sm h-100">
                      <div className="d-flex gap-3">
                        <div className={Style.ServiceCardIcon}>
                          <Image src="/images/services/service-inner/cms.png" alt=".NET CMS Development" width={50} height={50} />
                        </div>
                        <div className={Style.ServiceCardContent}>
                          <h5 className="fw-medium">.NET CMS Development</h5>
                          <p className="mb-0">Simplify the design, delivery, and output of website and app content with our .Net web development company's cutting-edge CMS. We develop stable, exclusive, and robust systems for content management tailored to fit your audience and needs.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-4 shadow-sm h-100">
                      <div className="d-flex gap-3">
                        <div className={Style.ServiceCardIcon}>
                          <Image src="/images/services/service-inner/web-maintenance.png" alt=".Net Solution Maintenance" width={50} height={50} />
                        </div>
                        <div className={Style.ServiceCardContent}>
                          <h5 className="fw-medium">.Net Solution Maintenance</h5>
                          <p className="mb-0">Tech2Globe offers complete pre and post-development assistance, including project maintenance, glitch resolution, analytics, reporting, and quality assurance after deployment, as a leadingASP.Net development business.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Our Expertise in .Net</h4>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <h5>ASP.NET MVC</h5>
                    <p><strong>Hire .Net developers</strong> with high command over ASP.Net MVC for quicker and scalable web applications. The ASP.Net MVC is a highly trusted structure and an alternative to the traditional ASP.NET Web types.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <h5>3RD Party .NET Customization</h5>
                    <p>Development of Asp.NET apps using custom controls and other toolsets to render web applications and mobile applications using the ASP platform for improved user experience and usability of web applications.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <h5>Web APIS</h5>
                    <p>With ASP.NET reaching billions of users and making it easier for <strong>ASP.Net web development services</strong> to build HTTP services, we can create an app platform with added protection, scalability, and high performance.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <h5>End-to-End ERP Solution</h5>
                    <p>Due to excellent solutions using Microsoft toolset for your business's storage & management, ERP or enterprise resource planning is simpler. Our development services for asp.net enable you to have an updated view of key business processes.</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Choose Tech2Globe?</h4>
                <p>Join Tech2Globe and get access to Microsoft-qualified ASP.Net experts and seasoned professionals with a carefully sourced talent pool. Tech2Globe, a leading.Net development company, work with your in-house team exclusively and in tandem to increase productivity and time-efficiency.</p>
                <p>Using our wide variety of specialized .Net services, <strong>Outsource Dot Net Development services</strong> from Tech2Globe to create optimized solutions and speed up your business with a smart Dot Net App. Our .Net development services have produced profitable returns for a global clientele across diverse industry verticals with the required Expertise, tried-and-tested processes, and the latest technological infrastructure.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Build Your Successful Application with Tech2Globe</h4>
                <p>To ensure that their services are offered at the best affordable cost, a good .Net software company can build complex and successful website applications. Quality, trustworthiness, and reliability are all important, and we ensure that you get what you need while exceeding your final delivery standards.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="mt-5">We Expertise in All <span className="text-danger">Major Technologies</span></h2>

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
