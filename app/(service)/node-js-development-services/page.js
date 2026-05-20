import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import { FaHandPointRight } from "react-icons/fa";
import Image from "next/image";


export const metadata = {
  title: "Node JS Development Company | Node JS Development Services | Tech2globe",
  description:
    "Tech2globe is the best NodeJS development company providing quality NodeJS development services to build secure, scalable, user-friendly and faster web applications.",
  keywords:
    "node.js app development, node.js android development, node.js development company, node.js development services, node web development, node.js development company india, node.js mobile development",
  openGraph: {
    title: "Node JS Development Company | Node JS Development Services | Tech2globe",
    description:
      "Tech2globe is the best NodeJS development company providing quality NodeJS development services to build secure, scalable, user-friendly and faster web applications.",
    url: "https://www.tech2globe.com/node-js-development-services",
    siteName: "Tech2Globe",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Node JS Development Company | Node JS Development Services| Tech2globe",
    description:
      "Tech2globe is the best NodeJS development company providing quality NodeJS development services to build secure, scalable, user-friendly and faster web applications.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/node-js-development-services",
  },
};

const pageHeaderData = {
  title: "Node JS Development Services",
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


export default function NodeJSDevelopment() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Node JS Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Node JS Development Services" imageSrc="/images/services/service-inner/custom-webdevelopment-banner.jpg" />
              <div className={Style.ContentDiv}>
                <p>Tech2Globe is one of the best <strong>Node.JS development company</strong> that provides the ablest solution for developing high performance, and scalable web and mobile applications. Would you like to create a Mobile app in full detail, but can&apos;t decide which technology to choose? The answer is Node.js. And the first name that comes to mind is Tech2Globe when it comes to Node.JS development! We have a trusted <strong>Node.JS Developers & experts</strong> who providing top-notch services for Node.JS development.</p>
                <p>Tech2Globe provides flexible and powerful applications that your clients will enjoy. Leveraging the advantages of the Node.JS. We provide the most stable and trusted Node.JS technology. We also have a team of full-stack developers who work on multiple app development frameworks with advanced knowledge & experience.</p>
                <p>Our expert developers at Node.js have a vast knowledge of both JavaScript and JavaScript libraries. To create cost-effective and fast web creation for Node JS, we have sufficient resources at our disposal. Node.JS, PHP&apos;s leading competitor ensures faster development and deployment in a run-time environment.</p>
                <p>The latest <strong>Node.JS application developments</strong> in the field of this technology are kept updated by our <strong>Node.JS Developers & experts</strong> so that you get the best web application using Node JS technology. Work with Tech2Globe for your business requirements to achieve successful Node.js growth. <strong>Node.JS developers</strong> take control of architecting, creating, and deploying the technicalities of Node.js, adding scalability throughout the process of development. Trust our team for successful <strong>Node.JS development services.</strong></p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Node JS Development Services by Tech2Globe Include:</h4>
                <hr />
                <p>Get Node.JS end-to-end development services from basic consumer applications to involved business solutions</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <h5>1. Business Application Development</h5>
                    <p>Our Node.JS developers can provide not only stable but also highly responsive, efficient, and result-oriented business applications. This ultimately contributes to a development opportunity for your business.</p>

                    <h5>2. Advanced Node.Js Programming</h5>
                    <p>We have the technical skills and experience to create advanced programming features for Node. JS that can give your website a whole new dimension, making it more important to your business needs.</p>

                    <h5>3. Ecommerce Application Development</h5>
                    <p>By using this innovative technology, our highly talented Node JS developers know how to build amazing E-Commerce applications. You get an application that is incredibly safe and secure and helps create a loyal customer base.</p>

                    <h5>4. Custom Node.JS Application Development</h5>
                    <p>We modify and sync Node.JS technology&apos;s functionality and functionalities with your business needs. We develop out-of-the-box solutions for our customers with the help of custom Node JS programming.</p>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <h5>5. UI/UX Development</h5>
                    <p>Tech2Globe include talented team of developers of Node Js has the expertise to provide real-time services. They can supply state-of-the-art and scintillating UI/UX with the help of the Node JS technology.</p>

                    <h5>6. Node.JS Plugin Development</h5>
                    <p>Different plugins are available that can optimize the website and increase its performance. We will create high-quality Node JS plugins that will provide visitors with a superior website user experience.</p>

                    <h5>7. Node.JS Consultation</h5>
                    <p>We have a team of developers from Node JS who can analyze your business needs and provide superior consulting services for Node JS as to what your business needs are and how Node. JS technology can help you out.</p>

                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Tech2Globe has the following Expertise in Node.JS Development Services</h4>
                <p className="mb-0"><FaHandPointRight /> The company backed by Certification 9001:2008 </p>
                <p className="mb-0"><FaHandPointRight /> Node.JS Distribution Solutions for development since 2008 </p>
                <p className="mb-0"><FaHandPointRight /> Done 100+ Successful Projects </p>
                <p className="mb-0"><FaHandPointRight /> Tech2Globe has 90% Customer Satisfaction </p>
                <p className="mb-0"><FaHandPointRight /> 365 Days Availability </p>
                <p className="mb-0"><FaHandPointRight /> High-Quality Development in Node Js </p>
                <p><FaHandPointRight /> Tech2Globe has 25+ Customer-Based Countries </p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why to Choose Tech2Globe?</h4>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <p className="mb-0"><FaHandPointRight /> Tech2Globe is a leading development company for Node.JS that aims to provide the best services for web development. Your app will help you hit the top of the market faster than you&apos;d expect, with our selection of modern tools and clean coding. Our team provides outsource <strong>Node.JS development</strong> services and solutions to improve your business.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <p className="mb-0"><FaHandPointRight /> We have a team of experienced and qualified experts to make every project we undertake a success. In technologies such as .NET, PHP, and Share point, our offshore Node.js development company provides expert Node.js consulting on the development, customization, deployment & more of Node.JS. We have key certifications.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <p className="mb-0"><FaHandPointRight /> Since 2014, Tech2Globe provides the best software for developing services in India. Tech2Globe is what makes us a team that works hard to provide our customers with complete solutions, management that assures effective project execution, and a cooperative effort to form long-lasting relationships with our customers.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <p className="mb-0"><FaHandPointRight /> Our Tech2GLobe team ensures that you are a winner among the competitors and in the market with quality development services. Our Node.JS developers to help you create the ideal <strong>Custom Node.js development</strong> software to satisfy all your business requirements for your extra unique business needs.</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Discuss Your Project with Our Team</h4>
                <p>Need of Node.JS developers to work on your project? Contact us now to start creating your apps with all advantages.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>We Expertise in All Major Technologies</h2>
                <ul>
                  <li>Cake PHP Development</li>
                  <li>Nopcommerce Development </li>
                  <li>Joomla Development</li>
                  <li>Drupal Development</li>
                  <li>Responsive Web Design</li>
                  <li>Mailchimp Template Design</li>
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

      <ClientSlider testimonials={testimonials} />

    </>
  )
};
