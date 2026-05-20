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
  title: "Codeigniter Web Development Services",
  description:
    "Tech2Globe offers Codeigniter web development services to build secure, scalable, and user-friendly websites that engage and convert visitors",
  openGraph: {
    title: "Codeigniter Web Development Services",
    description:
      "Tech2Globe offers Codeigniter web development services to build secure, scalable, and user-friendly websites that engage and convert visitors",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/codeigniter-development-services",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Codeigniter Web Development Services",
    description:
      "Tech2Globe offers Codeigniter web development services to build secure, scalable, and user-friendly websites that engage and convert visitors"
  },
  alternates: {
    canonical: "https://www.tech2globe.com/codeigniter-development-services"
  }
};

const pageHeaderData = {
  title: "Codeigniter Development Services",
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


export default function CodeigniterDevelopment() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Codeigniter Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Codeigniter Development Services" imageSrc="/images/services/service-inner/custom-webdevelopment-banner.jpg" />

              <div className={Style.ContentDiv}>
                <p>
                  To build full-featured web applications, Tech2Globe is a well-known PHP CodeIgniter Web Framework Development Company, which offers CodeIgniter framework development services. Based on the popular model-view-controller (MVC) development pattern, <strong>our CodeIgniter development company</strong> team creates dynamic web sites with PHP. <strong>Our CodeIgniter web development services</strong> team has capabilities in CodeIgniter to support customers in their industries to lead the transformation.
                </p>

                <p>
                  As the top web development company for CodeIgniter, we build web applications by leveraging the CodeIgniter framework functionality. Our aim is to drive innovation in web applications with new strategies in CodeIgniter web development.
                </p>

                <p>
                  To deliver results-oriented web applications, our experienced CodeIgniter developers provide high-quality web solutions optimized for speed with a variety of powerful PHP framework features.
                </p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Tech2Globe Developers Offer CodeIgniter Development Services</h4>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <div className={Style.ServiceCardIcon}>
                        <Image src="/images/services/service-inner/web-design.png" alt="CodeIgniter Customization Services:" width={65} height={65} />
                      </div>
                      <div className={Style.ServiceCardContent}>
                        <h5>CodeIgniter Customization Services:</h5>
                        <p className="mb-0">To amplify the functionality of the application, we create highly functional and client applications with a suite of features such as custom templates, plugins, and modules.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <div className={Style.ServiceCardIcon}>
                        <Image src="/images/services/service-inner/seo.png" alt="CodeIgniter Upgrade Services:" width={65} height={65} />
                      </div>
                      <div className={Style.ServiceCardContent}>
                        <h5>CodeIgniter Upgrade Services:</h5>
                        <p className="mb-0">We offer CodeIgniter customization services to change the plugins by having the new version to ensure that your web app functions robustly.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <div className={Style.ServiceCardIcon}>
                        <Image src="/images/services/service-inner/web.png" alt="CodeIgniter Web Development:" width={65} height={65} />
                      </div>
                      <div className={Style.ServiceCardContent}>
                        <h5>CodeIgniter Web Development:</h5>
                        <p className="mb-0">Expertise in the development of high-quality CodeIgniter web applications and advanced portals that are completely functional and add value to a business enterprise.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <div className={Style.ServiceCardIcon}>
                        <Image src="/images/services/service-inner/web-plugin.png" alt="Module & Plugin Development:" width={65} height={65} />
                      </div>
                      <div className={Style.ServiceCardContent}>
                        <h5>Module & Plugin Development:</h5>
                        <p className="mb-0">Create dynamic, interactive, and customized modules and plugins to enhance web apps and increase user experiences for customers across diverse industry verticals.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <div className={Style.ServiceCardIcon}>
                        <Image src="/images/services/service-inner/web-maintenance.png" alt="CodeIgniter Migration Solutions:" width={65} height={65} />
                      </div>
                      <div className={Style.ServiceCardContent}>
                        <h5>CodeIgniter Migration Solutions:</h5>
                        <p className="mb-0">Smooth and hassle-free migration services within the minimum time of the CodeIgniter app and the powerful characteristics of the CodeIgniter framework.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <div className={Style.ServiceCardIcon}>
                        <Image src="/images/services/service-inner/online-shop.png" alt="CodeIgniter eCommerce Development:" width={65} height={65} />
                      </div>
                      <div className={Style.ServiceCardContent}>
                        <h5>CodeIgniter eCommerce Development:</h5>
                        <p className="mb-0">Creating a secure and flexible eCommerce open-source website CodeIgniter with browsing, checkout, secure payments, integration of shipping, and more.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Benefits of CodeIgniter</h4>
                <p>The advanced web development services have provided sufficient space for expansion companies are always on the lookout for skilled ways to increase revenue. The better the online services, the greater the customer engagement, which further increases companies. We list some of these advantages below.</p>
                <p>This provides the easiest way for PHP developers to use modular programs and get a particular feature through the framework.</p>
                <p>Nearly all platforms, operating systems, and web servers are compatible with it.</p>

                <p className="mb-0"><FaHandPointRight /> CodeIgniter's in-built libraries and tools help PHP developers build a web application with high-end functionality and additional features.</p>
                <p className="mb-0"><FaHandPointRight /> This framework helps programmers to safely build web applications.</p>
                <p className="mb-0"><FaHandPointRight /> With the help of CodeIgniter, a developer can build both the rear and the front end of the application.</p>
                <p className="mb-0"><FaHandPointRight /> <strong>CodeIgniter PHP developers</strong> help you reduce the amount of code necessary to create a PHP application and allow you to concentrate on the project</p>
                <p className="mb-0"><FaHandPointRight /> PHP CodeIgniter development services help you to reduce the amount of code required to create a PHP application and allow you to concentrate on the project.</p>
                <p className="mb-0"><FaHandPointRight /> It provides hassle-free server-to-server migration and simple file customization and configuration.</p>
                <p><FaHandPointRight /> When managing models, CodeIgniter uses a direct approach. CodeIgniter's operations are very simple and accessible, so what is happening is easy to understand and therefore easy to use.</p>
              </div>


              <div className={Style.ContentDiv}>
                <h4>Why Tech2Globe?</h4>
                <p>Our dedicated CodeIgniter programmers are technology-conscious and can be a supporting hand for your many web developments projects. Hire CodeIgniter developers to get ultra-modern technologies, trend-industry-leading instruments, and approaches to increase the value of your brand.</p>
                <p>All you need to do is let us know what you're thinking, and a technology-rich, Scalable-Rich, and Reliable-rich Web Development Solutions will be built by our high-performance experienced dedicated CodeIgniter developers.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Looking to Hire CodeIgniter Developers Web Development?</h4>
                <p>We empower companies based on their specific needs with versatile engagement models. At fair costs, our strength lies in top-class technology and consulting services. Try us for fast deliverables, full-fledged applications, or consulting with technology.</p>
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
