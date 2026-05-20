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
  title: "Open Source Development Services - Tech2Globe",
  description:
    "Tech2Globe offers expert open-source development services tailored to your needs. Leverage the power of open-source solutions for your business growth.",
  openGraph: {
    title: "Open Source Development Services - Tech2Globe",
    description:
      "Tech2Globe offers expert open-source development services tailored to your needs. Leverage the power of open-source solutions for your business growth.",
    url: "https://www.tech2globe.com/open-source-development-services",
    siteName: "Tech2Globe web Solutions LLP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Source Development Services - Tech2Globe",
    description:
      "Tech2Globe offers expert open-source development services tailored to your needs. Leverage the power of open-source solutions for your business growth."
  },
  alternates: {
    canonical:
      "https://www.tech2globe.com/open-source-development-services"
  }
};

const pageHeaderData = {
  title: "Open Source Development Services",
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


export default function OpenSourceDevelopment() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Open Source Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Open Source Development Services" imageSrc="/images/services/service-inner/custom-webdevelopment-banner.jpg" />

              <div className={Style.ContentDiv}>
                <p>Open source development defines the process in which software development has a publicly accessible source code. Such software is available under an open-source license with its source code to sample, modify, and enhance its architecture. One of the open source's best features is that users can be co-developers and help identify vulnerabilities and even recommend strengthening its functionality and design.</p>

                <p>Open source development is the most beneficial choice for companies today, with a lower total cost of ownership, powerful & wealthy performance, and unparalleled functionality. With the future growth of customer-centric and integrated applications with open source web development, the possibilities of revamping your business make it a preferred option for small companies and enterprises.</p>

                <p>And open source development has never been so versatile & customizable with Tech2Globe's open-source IT software solutions. The particular internet booms are not unexpected, and that's what you get with a leading <strong>Open Source Software Development Company in India</strong>, such as Tech2Globe. It is what we do for you with a creative approach to providing top-notch services.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Technical expertise:</h4>
                <p>Tech2Globe has expertise in the entire stack of technologies for open source LAMP, namely –</p>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Apache (web server)</p>
                    <p><FaHandPointRight /> MySQL (database management system)</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> PHP5 (programming language)</p>
                    <p><FaHandPointRight /> Linux (operating system)</p>
                  </div>
                </div>
                <p>Using open-source software, our <strong>open source developers</strong> team has constructed several simple and complex applications and web based solutions. Also, using Joomla, Drupal, Ruby on Rails, MEAN, and leveraged DotNetNuke for web content management and SugarCRM for customer relationship management, they have developed many open source applications.</p>
                <p>With the open-source software development solutions of Tech2Globe, you can:</p>
                <p className="mb-0"><FaHandPointRight /> Minimize time for development</p>
                <p className="mb-0"><FaHandPointRight /> Reduce the cost of the product significantly</p>
                <p className="mb-0"><FaHandPointRight /> Develop an application on several platforms and environments that can run</p>
                <p className="mb-0"><FaHandPointRight /> Enabling flexibility and adaptability in your application</p>
                <p><FaHandPointRight /> Get sophisticated features at low investment levels</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Our Open source development services</h4>
                <hr/>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <div className={Style.ServiceCardIcon}>
                        <Image src="/images/services/service-inner/e-commerce.png" alt="Open Source Ecommerce Development" width={65} height={65} />
                      </div>
                      <div className={Style.ServiceCardContent}>
                        <h5 className="fw-medium">Open Source Ecommerce Development</h5>
                        <p>We provide solutions for developing open-source e-commerce that offers full flexibility and control over online platforms, creating websites that provide a well-rounded customer experience using engine optimization, catalog management, and different marketing tools.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <div className={Style.ServiceCardIcon}>
                        <Image src="/images/services/service-inner/software-solutions.png" alt="Open Source Software Solutions" width={65} height={65} />
                      </div>
                      <div className={Style.ServiceCardContent}>
                        <h5 className="fw-medium">Open Source Software Solutions</h5>
                        <p><strong>Open Source Customization</strong> software solutions developed by Tech2Globe, including websites, web apps, web services, databases, business intelligence, analytics, cloud technologies, networking, CRM, containers, ERP, testing automation, distributed systems, and more. Our solutions are flexible according to market and technology requirements.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <div className={Style.ServiceCardIcon}>
                        <Image src="/images/services/service-inner/crm.png" alt="Open Source CRM Solutions" width={65} height={65} />
                      </div>
                      <div className={Style.ServiceCardContent}>
                        <h5 className="fw-medium">Open Source CRM Solutions</h5>
                        <p>We build Customer Relationship Management (CRM) open-source solutions that manage processes, speed up, facilitate communication platform collaboration, and automate day-to-day functions such as data capture, e-mail communications, internal alerts, and reports and insights.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Choose Tech2Globe?</h4>
                <p>Our enthusiasm for the growth of brilliant web applications has led us to be the market pioneers in the open-source development team. A long-lasting relationship ensures a group of strong website developers and proven leadership. How we do this is not rocket science, but primary responsibilities we still fulfill:</p>
                <ul>
                  <li>With extensive testing on specially built testbeds, we make sure that each bug is hand-selected.</li>
                  <li>We get access to the new open source technology and software through <strong>open source web development services</strong>. We are dedicated to modern and trendy solutions for web growth.</li>
                  <li>Open source development allows us to create user-friendly solutions, but it inherently will enable us to develop websites valued by web crawlers.</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Are You Looking for the Best Developer for Your New Project?</h4>
                <p>Your business idea is brilliant, and we will help you be a market leader with our web solution expertise. Offering our experience and creative ideas at affordable prices, we give you unparalleled services as <strong>open source development services.</strong></p>
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
