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
  title: "Ruby on Rails Development Company | RoR Development Agency -Tech2globe",
  description:
    "Hire Rails programmers at Tech2globe to get flexible and robust web application for business development and growth. Our RoR developers can create a powerful web application for your business boost and growth in several days using standard tools of Rails programming.",
  keywords:
    "Ruby on Rails Development Company, RoR Development Agency, Ruby on Rails Development Services, Ruby on Rails Development Agency",
  openGraph: {
    title:
      "Ruby on Rails Development Company | RoR Development Agency -Tech2globe",
    description:
      "Hire Rails programmers at Tech2globe to get flexible and robust web application for business development and growth. Our RoR developers can create a powerful web application for your business boost and growth in several days using standard tools of Rails programming.",
    url: "https://www.tech2globe.com/ruby-on-rails-development",
    type: "website"
  },
  twitter: {
    card: "summary",
    title:
      "Ruby on Rails Development Company | RoR Development Agency -Tech2globe",
    description:
      "Hire Rails programmers at Tech2globe to get flexible and robust web application for business development and growth. Our RoR developers can create a powerful web application for your business boost and growth in several days using standard tools of Rails programming."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/ruby-on-rails-development"
  }
};

const pageHeaderData = {
  title: "Ruby On Rails Development",
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


export default function RubyOnRailsDevelopment() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Ruby On Rails Development" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Ruby On Rails Development" imageSrc="/images/services/service-inner/custom-webdevelopment-banner.jpg" />

              <div className={Style.ContentDiv}>
                <p><strong>Ruby on Rails development consulting services</strong> will help you quickly build high-performing applications. If you are looking for a great <strong>ROR development company</strong> for Ruby on Rails, then look no further! Tech2Globe has vast Ruby and Rails Development experience. We are qualified specialists in <strong>Ruby on Rails development service</strong> who produce code that is effective, secure, scalable, portable, and maintainable.</p>

                <p>During the complete process of application development, Tech2Globe provide continuous support, while helping our customers increase efficiency, reduce costs, and remain ahead of the competition.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Our Ruby on Rails Development Services</h4>
                <p>For web services and web-based apps, See our Web application development services for Ruby on Rails.</p>
                <hr />
                <div className="row">

                  <div className="d-flex gap-3 mb-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/mobile-app.png" alt="Mobile App Development" width={65} height={65} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>Mobile App Development</h5>
                      <p className="mb-0">At Tech2Globe, using the power of Ruby Motion technology, we create scalable, stable, and high-performing mobile app solutions for both Android and iOS operating systems.</p>
                    </div>
                  </div>

                  <div className="d-flex gap-3 mb-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/web.png" alt="Web App Development" width={65} height={65} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>Web App Development</h5>
                      <p className="mb-0">Our RoR developers have extensive experience working with Rails for quality server-side development, helping them to build a web portal that is easier to use and scalable.</p>
                    </div>
                  </div>

                  <div className="d-flex gap-3 mb-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/cms.png" alt="CMS Development" width={65} height={65} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>CMS Development</h5>
                      <p className="mb-0">As the top-rated web development company for Ruby on Rails, Tech2Globe offers unique CMS solutions with custom templates and flexibility, depending on your business needs.</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Integration</h4>
                <p>Our team of Tech2Globe provides seamless RoR integration with third-party apps and APIs, including payment gateways, elastic cloud computing (EC2), and many other services.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Audit Code and recompilation</h4>
                <p>To identify its flaws and weaknesses, our QA experts will evaluate the code and will come up with a solution to deal with the current problems. We help you ensure that your apps are running at their best.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Enterprise App Development</h4>
                <p>Tech2Globe can help, if you need software to allow easy communication between employees or for successful process management across your organization. To provide solutions that are easy to use and perfect fit with your economic situation, we provide custom Ruby on rails enterprise application development services.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>How Can Tech2Globe help you?</h4>
                <p>Tech2Globe has opened up to new opportunities for companies of all sizes and categories and has only been better than ever for websites and mobile apps.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h5>Scale-built software</h5>
                <p>We develop a structural style that allows for distributed systems that are highly versatile. Three architectural trends, Clean Architecture, and Domain-Driven Design make it simpler for us to transfer from a unitary or three-tier architecture to a service-oriented architecture and microservices in turn.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Development faster and cost-effectively</h4>
                <p>We use open-source software frameworks for RoR application development, We are speeding up web creation and reducing costs in this way. Ruby on Rails itself is also a technology for the quick production of goods.</p>
              </div>

              <div className={Style.ContentDiv}>

                <h2 className="text-danger">Our Ruby on Rails competence:</h2>

                <hr />

                <h4>E-commerce Web Development</h4>
                <p>Due to its multi-user support, e-commerce apps are the most valuable player in <strong>RoR development</strong>, and our top RoR developers can make it work just as you want.</p>

                <h4>Media and Entertainment</h4>
                <p>For media and entertainment companies from all over the world, Tech2Globe creates feature-rich and visually stunning apps. We offer software that helps our clients achieve their business goals, from personalized industry-specific ERPs and CRMs to digital asset management systems and streaming applications.</p>

                <h4>Manufacturing Software Development</h4>
                <p>Tech2Globe develops software for manufacturing companies, we can help if you want to automate a business process, make the supply chain more transparent, or improve the management of enterprise assets.</p>

                <h4>Reason to choose Tech2Globe</h4>
                <p>As an established software company for Ruby on Rails, Tech2Globe offers services to organizations of all sizes and diverse market fields and develops personalized solutions specifically customized. Our team ensures that your budget and schedule specifications are met to allow for a quick and cost-effective device phase without sacrificing the final product's quality.</p>

                <p>You get customizable feature-packed solutions that are easy to manage and modify by the goals you set when partnering with us for Ruby on Rails app development.</p>

                <p>We make for a transparent <strong>outsource Ruby on Rails development service</strong> process of project creation and provide informative reports to our customers to keep them updated. You can depend on our experience and knowledge, whether you need to add new features or want to migrate to a different platform.</p>

                <h4>Interactive, portable and efficient Ruby on Rails applications for business</h4>
                <p>Tech2Globe is India's leading <strong>Ruby on Rails Development Company</strong> that offers the best to its customers across India and abroad. This feature-rich platform has been utilized by our knowledgeable and experienced. <strong>Ruby on Rails developers</strong> team to respond to a wide client base for high-end web applications. We concentrate on designing applications that discuss and add unmatched value to the particular problems of the business of the client.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="mt-5">We Expertise in All <span className="text-danger">Major Technologies</span></h2>

                <p><FaAngleRight /> <Link href="/e-commerce-development" className="text-decoration-none fw-normal">E-Commerce Development </Link></p>
                <p><FaAngleRight /> <Link href="/enterprise-portal-development" className="text-decoration-none fw-normal">Enterprise Portal Developmentt</Link> </p>
                <p><FaAngleRight /> <Link href="/content-management-system" className="text-decoration-none fw-normal">Content Management System</Link></p>
                <p><FaAngleRight /> <Link href="/web-application-development" className="text-decoration-none fw-normal">Web Application Development </Link></p>
                <p><FaAngleRight /> <Link href="/android-application-development-services" className="text-decoration-none fw-normal">Android Apps Development</Link></p>
                <p><FaAngleRight /> <Link href="/iphone-ipad-application-development-services" className="text-decoration-none fw-normal">iPhone iPad Apps Development </Link></p>
                <p><FaAngleRight /> <Link href="/mobile-application-development-services" className="text-decoration-none fw-normal">Mobile Apps Development</Link></p>
                <p><FaAngleRight /> <Link href="/windows-application-development-services" className="text-decoration-none fw-normal">Windows Apps Development </Link></p>
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
