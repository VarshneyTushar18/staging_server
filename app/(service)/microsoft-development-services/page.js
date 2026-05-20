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
  title:
    "Microsoft Development Services | Microsoft Technology Solution - Tech2Globe",
  description:
    "Tech2Globe delivers top-notch Microsoft development services and solutions. Harness the power of Microsoft technologies for your business success.",
  openGraph: {
    title:
      "Microsoft Development Services | Microsoft Technology Solution - Tech2Globe",
    description:
      "Tech2Globe delivers top-notch Microsoft development services and solutions. Harness the power of Microsoft technologies for your business success.",
    url: "https://www.tech2globe.com/microsoft-development-services",
    type: "website"
  },
  alternates: {
    canonical: "https://www.tech2globe.com/microsoft-development-services"
  }
};

const pageHeaderData = {
  title: "Microsoft Development Services",
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


export default function MicrosoftDevelopment() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Microsoft Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Microsoft Development Services" imageSrc="/images/services/service-inner/custom-webdevelopment-banner.jpg" />

              <div className={Style.ContentDiv}>
                <p>
                  Via modern software development and even revolutionizing legacy technologies, <strong>Microsoft development services</strong> help companies accelerate creativity, metamorphosis, and novelty. Microsoft software also supports users and processes within the business, marketplace, and supply chains. In short, Microsoft is a global desktop and web application building framework that is versatile, reliable, and scalable. Microsoft develops the most efficient, robust, and usable technology solutions & platforms to improve efficiency and productivity.
                </p>

                <p>
                  To use the new and updated Microsoft stack & develop stable and designed applications to operate across all types of devices, Tech2Globe has prior experience and comprehensive knowledge. For the development and deployment of web-based software, Windows applications, workflow applications, Windows applications & mixed-mode applications, Tech2Globe offers Microsoft dot net development & testing services.
                </p>

                <p>
                  If you have some idea in your business mind and want to take advantage of the advanced Microsoft technologies to accelerate development in real life, meet our experts at the coffee table right now. We are waiting to hear your proposal eagerly.
                </p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Our Microsoft Development Technology Services</h2>
                <hr />
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card h-100">
                      <Image src="/images/services/service-inner/ajax.jpg" alt="Ajax jQuery Development" width={1200} height={600} className="img-fluid" />
                      <div className="card-body">
                        <h5 className="text-danger">Ajax jQuery Development</h5>
                        <p>The development of Ajax jQuery enables code cooperation between different pages without reloading the current page.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card h-100">
                      <Image src="/images/services/service-inner/sharepoint.jpg" alt="SharePoint Development" width={1200} height={600} className="img-fluid" />
                      <div className="card-body">
                        <h5 className="text-danger">SharePoint Development</h5>
                        <p>The SharePoint platform allows developers to create a content-driven, collaborative, scalable application.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card h-100">
                      <Image src="/images/services/service-inner/dotnet.jpg" alt=".Net Application" width={1200} height={600} className="img-fluid" />
                      <div className="card-body">
                        <h5 className="text-danger">.Net Application</h5>
                        <p>The .NET Framework's programming model allows developers to create Web-based applications, smart client applications, and applications for XML Web services.</p>
                      </div>
                    </div>
                  </div>
                </div>
     
              </div>

              <div className={Style.ContentDiv}>
                <h4>Custom Microsoft Software Development:</h4>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                     <p className="mb-0"><FaHandPointRight /> Enterprise Application Integration</p>
                     <p className="mb-0"><FaHandPointRight /> C# (Csharp) Development</p>
                     <p className="mb-0"><FaHandPointRight /> Software Maintenance and Support</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                     <p className="mb-0"><FaHandPointRight /> Software Integration</p>
                     <p className="mb-0"><FaHandPointRight /> Dot Net development</p>
                     <p className="mb-0"><FaHandPointRight /> Silverlight Development Services</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Dot NET Development Services:</h4>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                     <p className="mb-0"><FaHandPointRight /> Developing Web, Mobile and Cloud Applications</p>
                     <p className="mb-0"><FaHandPointRight /> Application Development based on ERP</p>
                     <p className="mb-0"><FaHandPointRight /> System for Content Management</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                     <p className="mb-0"><FaHandPointRight /> Application Integration of Legacy Systems</p>
                     <p className="mb-0"><FaHandPointRight /> Application Development B2B & B2C</p>
                     <p className="mb-0"><FaHandPointRight /> Support for End-to-End application development</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Microsoft Cloud Services:</h4>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                     <p className="mb-0"><FaHandPointRight /> Switching Access Oriented solutions to Service-based Solutions</p>
                     <p className="mb-0"><FaHandPointRight /> IaaS, PaaS, Development for Application Programs</p>
                     <p className="mb-0"><FaHandPointRight /> Consulting, Development, and Implementation for Azure</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                     <p className="mb-0"><FaHandPointRight /> Cloud Service Collaboration with Third Party</p>
                     <p className="mb-0"><FaHandPointRight /> Services for Cloud Migration</p>
                     <p className="mb-0"><FaHandPointRight /> Maintenance, Monitoring & Support</p>
                  </div>
                </div>
              </div>


              <div className={Style.ContentDiv}>
                <h4>Our Expertise</h4>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <p><strong>Azure:</strong> Transform your thoughts with cloud services into solutions. Create and deploy where you want, as you wish.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <p><strong>.NET:</strong> .NET is an open-source, free, cross-platform developer platform for constructing several different applications.</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Tech2Globe?</h4>
                <p>Tech2Globe is a professional Microsoft Company with more than a decade of <strong>Microsoft technology solution</strong> experience. For our strategic expertise in Microsoft technology and in-depth knowledge of working with customers in our target verticals, businesses select Tech2Globe for <strong>Microsoft Services and Solutions</strong>. Tech2Globe, together with Microsoft, has helped customers transform their companies by transforming their processes, improving employee efficiency, offering valuable feedback, and enabling them to provide their end-customers with better experiences.</p>
                <p>Our <strong>Microsoft Consulting Services</strong> provide our customers with creative and high-impact solutions across the entire Microsoft technology stack, including smart business apps, modern teamwork in the workplace, data & analytics, growth, and Azure cloud. As a solution provider in <strong>Microsoft Technology Development</strong>, Tech2Globe has rich expertise in <strong>Microsoft Technology Development</strong> , including design systems, the architecture of business solutions, Windows communications system, web service solutions, web portal pages, enterprise reporting, workflow engines, collaboration portals, solutions for office integration, and other Microsoft Solutions.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Begin Your New Project with Us</h4>
                <p>We provide the experience and techniques of technology to develop creative solutions that help to adapt innovations to increase the expansion of the market and business performance. By empowering businesses and their people through Microsoft technologies, our services help clients improve productivity.</p>
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
