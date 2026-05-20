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
  title: "Laravel Development Company | Top Services | Tech2globe",
  description:
    "Tech2globe is a trusted Laravel development company, renowned for offering feature-packed web apps. Grow with our best Laravel development services.",
  openGraph: {
    title: "Laravel Development Company | Top Services | Tech2globe",
    description:
      "Tech2globe is a trusted Laravel development company, renowned for offering feature-packed web apps. Grow with our best Laravel development services.",
    url: "https://www.tech2globe.com/laravel-development-services",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Laravel Development Company | Top Services | Tech2globe",
    description:
      "Tech2globe is a trusted Laravel development company, renowned for offering feature-packed web apps. Grow with our best Laravel development services."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/laravel-development-services"
  }
};

const pageHeaderData = {
  title: "Laravel Development Services",
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


export default function LaravelDevelopment() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Laravel Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Laravel Development Services" imageSrc="/images/services/service-inner/custom-webdevelopment-banner.jpg" />

              <div className={Style.ContentDiv}>
                <p>Tech2Globe provides our customers with a wide range of flawless Laravel custom solutions. Laravel is a PHP-based open-source platform that provides a simple and stable structure that makes it very easy to use. Top-quality website structures are provided by our Laravel development company developers. We work closely with our customers at Tech2Globe to develop scalable web applications using Laravel to boost your business through high-quality web applications.</p>

                <p>Would you like to move your existing project into the framework of Laravel Development Services?</p>

                <p>Our <strong>Laravel development company India</strong> has 10 years of experience moving from other frameworks or standard PHP and <strong>outsource Laravel PHP development services</strong>. Laravel has proven its position as one of the best PHP frameworks available, offering superior code foundations, simple maintenance, and resilient features.</p>

                <p>Our professional <strong>Laravel developers</strong> will help you structure a comprehensive strategy for your company to build Laravel driven websites and applications. Hire the expert developers of Tech2Globe to get high-quality solutions at affordable prices.</p>

                <p>To meet the various business requirements of our corporate clients, Tech2Globe provides <strong>outsource Laravel development services</strong> and end-to-end Laravel development services:</p>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Laravel Migration Solutions</p>
                    <p className="mb-0"><FaHandPointRight /> Third-party App Integration</p>
                    <p className="mb-0"><FaHandPointRight /> Laravel Extension Development and Integration</p>
                    <p className="mb-0"><FaHandPointRight /> Laravel RESTful Application Development</p>
                    <p><FaHandPointRight /> Template Design Development</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Web Application Development</p>
                    <p className="mb-0"><FaHandPointRight /> Social Networking Development</p>
                    <p className="mb-0"><FaHandPointRight /> Laravel Theme Design and Integration</p>
                    <p className="mb-0"><FaHandPointRight /> Laravel eCommerce Development</p>
                    <p><FaHandPointRight /> Laravel Cloud Development</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Advantages of Using Laravel PHP Framework</h4>
                <hr />
                <h5>Top Security:</h5>
                <p>One of the most important advantages of choosing Laravel for your web app development is its ability to provide Superior-class security of Laravel web application development services. Laravel itself is a security framework that does not allow malware or security threats to enter the system.</p>
                <h5>Enhanced Performance:</h5>
                <p>Another stronger reason for choosing Laravel is its ability to deliver excellent web app performance. Sometimes the performance of the web is influenced by such features and functionality. But Laravel is coming up with the Different tools that help developers improve the efficiency of the web app.</p>
                <h5>Open Source & Powerful Community:</h5>
                <p>One of the other advantages of choosing Laravel is that it is an open source. But that is enough for you to make your decision about PHP over other frameworks. Travel, however, has a powerful community of developers and production companies that are actively and continually expanding.</p>
                <h5>Developer-friendly Code:</h5>
                <p>The Laravel system uses libraries, applications, and even templates that make the lives of developers simple for web application development.</p>
                <h5>MVC Architecture:</h5>
                <p>Laravel is a PHP based framework that uses the architecture of the Model View Controller (MVC). Because of this MVC architecture, Laravel is said to be the best framework to use for your web application development. The MVC architecture offers built-in features that can be used most efficiently by developers when building your web app.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Models of Engagement</h4>
                <hr />
                <h5>Specified Price:</h5>
                <p>For small projects, this model fits well, since it is a low-risk model for clients. When we complete the checkpoints, you pay for milestones.</p>
                <h5>Hire Developer:</h5>
                <p>For complex and long-term projects, this model is ideal, as it saves a lot of money. It is used by B2B customers, startups, and established companies.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Reason to Choose Tech2Globe for Outsource Laravel Development Services</h4>
                <p>By leveraging its versatile framework, our highly experienced team of Laravel developers provide an invaluable solution for Laravel integration, customization, and implementation. We capture the true essence of modern, functional, and sensitive enterprise web solutions and restful web services through Laravel framework growth.</p>
                <p>Through our Laravel Development solutions, it is our continuous effort to meet coding standards and reduce technical risks with smart, fault-resistant, reusable, professional, stable, and highly optimized code.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Hire Exclusive Quality Laravel Developer</h4>
                <p>By investing heavily in recruitment, packages, training, and updating our Laravel developers, Tech2Globe has gathered real Laravel talent. So, if you are going to hire an expectation System developer Laravel, you are going to bet on brilliance.</p>
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
