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
  title: "Angular JS Development Services | Angular JS Development Solutions - Tech2Globe",
  description:
    "Tech2Globe provides AngularJS development services and solutions tailored to your needs. Harness the power of AngularJS for your projects.",
  openGraph: {
    title:
      "Angular JS Development Services | Angular JS Development Solutions - Tech2Globe",
    description:
      "Tech2Globe provides AngularJS development services and solutions tailored to your needs. Harness the power of AngularJS for your projects.",
    url: "https://www.tech2globe.com/angular-js-development-services",
    type: "website"
  },
  alternates: {
    canonical:
      "https://www.tech2globe.com/angular-js-development-services"
  }
};

const pageHeaderData = {
  title: "Angular Js Development Services",
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


export default function AngularJsDevelopment() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Angular Js Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Angular Js Development Services" imageSrc="/images/services/service-inner/custom-webdevelopment-banner.jpg" />

              <div className={Style.ContentDiv}>
                <p>Tech2Globe is a prominent place to hire AngularJS developers who have active involvement in the framework in creating web applications from simple music streaming application to performing multitasking e-commerce. Our skilled <strong>AngularJS developers</strong> have the nature of conveying web and mobile applications according to the latest coding guidelines.</p>

                <p>Tech2Globe understand the changing innovation trends and the need to send AngularJS extensions to a current web or mobile application. Aside from that, we offer <strong>custom Angular JS Development Services India</strong> for our customers also. With an intention to understand the business needs and convert it into the best client experience to permit clients to have the benefit of the business functions over a device.</p>

                <p>We have best group of experienced and committed AngularJS developers who offer brilliant solutions for the AngularJS projects. Our exceptionally gifted developers have been conveyed numerous successful <strong>Angular JS Development Services</strong> to different customers around the world according to their business essentials. So what are you hanging tight for? Hire AngularJS engineers from the Tech2globe Web Solutions and make great application for your business.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h6>Comprehensive service funnel has rich features such as</h6>
                <p className="mb-0"><FaHandPointRight /> Responsive</p>
                <p className="mb-0"><FaHandPointRight /> Upgradation</p>
                <p className="mb-0"><FaHandPointRight /> Security</p>
                <p className="mb-0"><FaHandPointRight /> Maintenance</p>
                <p className="mb-0"><FaHandPointRight /> Migrations</p>
                <p className="mb-0"><FaHandPointRight /> PWA</p>
                <p className="mb-0"><FaHandPointRight /> Write less code</p>
                <p className="mb-0"><FaHandPointRight /> Dependency Injection</p>
                <p className="mb-0"><FaHandPointRight /> Reusable HTML components</p>
                <p className="mb-0"><FaHandPointRight /> Easy synchronization</p>
                <p><FaHandPointRight /> Localization</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="mb-3">Tech2Globe Services for AngularJS Development</h4>
                <hr />
                <p>At Tech2Globe, we have assets and ability in a wide range of AngularJS development solutions that are one of a kind, and of high caliber.</p>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-4 shadow-sm h-100">
                      <div className="d-flex gap-3">
                        <div className={Style.ServiceCardIcon}>
                          <Image src="/images/services/service-inner/web.png" alt="Single Page Applications (SPAs)" width={65} height={65} />
                        </div>
                        <div className={Style.ServiceCardContent}>
                          <h5>Single Page Applications (SPAs)</h5>
                          <p className="mb-0">At Tech2Globe, we have a group of top AngularJS developers, who can create smooth and effective single page web applications, that performs well on all search engines.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-4 shadow-sm h-100">
                      <div className="d-flex gap-3">
                        <div className={Style.ServiceCardIcon}>
                          <Image src="/images/services/service-inner/web-plugin.png" alt="AngularJS Plugins" width={65} height={65} />
                        </div>
                        <div className={Style.ServiceCardContent}>
                          <h5>AngularJS Plugins</h5>
                          <p className="mb-0">Hire Angularjs Developers to strive novel answers for make your site remarkable. They have skill in adding plugins that upgrade the presentation of your web application.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-4 shadow-sm h-100">
                      <div className="d-flex gap-3">
                        <div className={Style.ServiceCardIcon}>
                          <Image src="/images/services/service-inner/mobile-app.png" alt="AngularJS Dynamic UI/UX" width={65} height={65} />
                        </div>
                        <div className={Style.ServiceCardContent}>
                          <h5>AngularJS Dynamic UI/UX</h5>
                          <p className="mb-0">Our specialists strive to create innovative, dynamic, and responsive UI/UX formats for your sites and web applications that can help in the effective development of your business.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-4 shadow-sm h-100">
                      <div className="d-flex gap-3">
                        <div className={Style.ServiceCardIcon}>
                          <Image src="/images/services/service-inner/web-design.png" alt="AngularJS Migration Solutions" width={65} height={65} />
                        </div>
                        <div className={Style.ServiceCardContent}>
                          <h5>AngularJS Migration Solutions</h5>
                          <p className="mb-0">Being an all around the world eminent AngularJS web development organization, we realize how to rapidly and proficiently move your current application to the latest version from another platform.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-4 shadow-sm h-100">
                      <div className="d-flex gap-3">
                        <div className={Style.ServiceCardIcon}>
                          <Image src="/images/services/service-inner/web-design.png" alt="AngularJS Web App Development" width={65} height={65} />
                        </div>
                        <div className={Style.ServiceCardContent}>
                          <h5>AngularJS Web App Development</h5>
                          <p className="mb-0">With AngularJS, web applications that weren't even conceivable before would now be able to be a reality. Our group has experience and skills to create them for both little scope and large-scale businesses.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-4 shadow-sm h-100">
                      <div className="d-flex gap-3">
                        <div className={Style.ServiceCardIcon}>
                          <Image src="/images/services/service-inner/web-maintenance.png" alt="AngularJS Support and Maintenance" width={65} height={65} />
                        </div>
                        <div className={Style.ServiceCardContent}>
                          <h5>AngularJS Support and Maintenance</h5>
                          <p className="mb-0">Our services simply don't end with the development of your site; we have a different group to bring to the table help and maintenance services to guarantee that your site runs productively.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why to Choose Tech2Globe?</h4>
                <p>Tech2Globe is an ideal web development company in India to create web applications or sites that profoundly intuitive and created utilizing different stages and innovations utilizing AngularJS frameworks (angular 1 and rakish 2). Alongside this latest technology, our group is fit for broadening HTML vocabulary and building all around organized and rich applications. We have built up various applications with refined highlights fitting extensive business necessities.</p>

                <p>We have confidence in the values of integrity and honesty and guarantee that our customers are constantly educated about the advancement of their task consistently. This way they can measure the performance of our team consistently bringing about improved execution and yield. A definitive objective of utilizing this innovation is to make on-going applications to convey greatest client fulfilment. <strong>Angular JS development solutions</strong> took care of by the specialists of Tech2Globe helps in making a superb constant application experience.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Our Expertise</h4>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                     <p className="mb-0"><FaHandPointRight /> ISO 9001:2008 Certification</p>
                     <p className="mb-0"><FaHandPointRight /> Delivering Angular JS development solutions since 2008</p>
                     <p className="mb-0"><FaHandPointRight /> 100+ Projects Delivered</p>
                     <p className="mb-0"><FaHandPointRight /> 98% Customer Satisfaction</p>
                     <p className="mb-0"><FaHandPointRight /> 365 Days Availability</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                     <p className="mb-0"><FaHandPointRight /> High-Quality Development</p>
                     <p className="mb-0"><FaHandPointRight /> In-depth Analysis</p>
                     <p className="mb-0"><FaHandPointRight /> Valid Coding Standards</p>
                     <p className="mb-0"><FaHandPointRight /> Privacy Guaranteed</p>
                     <p className="mb-0"><FaHandPointRight /> Client Satisfaction</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Discuss Your Project with Our Team</h4>
                <p>Looking for a trusted company for your web and mobile solutions?</p>
              </div>

              <div className={Style.ContentDiv}>
                <Link href="/contact-us" className="button-red text-decoration-none">Drop Us A Line</Link>
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
