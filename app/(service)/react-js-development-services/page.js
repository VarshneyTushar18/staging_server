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
  title: "React JS App Development Services | React js Development Company",
  description:
    "Tech2globe is a leading React.js Development Company in India & USA. We offers custom react app development services and React js consulting services at affordable rate.",
  keywords: "reactjs development company, reactjs development services",
  openGraph: {
    title: "React JS App Development Services | React js Development Company",
    description:
      "Tech2globe is a leading React.js Development Company in India & USA. We offers custom react app development services and React js consulting services at affordable rate.",
    url: "https://www.tech2globe.com/react-js-development-services",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "React JS App Development Services | React js Development Company",
    description:
      "Tech2globe is a leading React.js Development Company in India & USA. We offers custom react app development services and React js consulting services at affordable rate."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/react-js-development-services"
  }
};

const pageHeaderData = {
  title: "React Js Development Services",
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


export default function ReactJsDevelopment() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="React Js Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="React Js Development Services" imageSrc="/images/services/service-inner/custom-webdevelopment-banner.jpg" />

              <div className={Style.ContentDiv}>
                <p>Build a fast, robust, and scalable user interface with Tech2Globe, our unmatched <strong>React JS development services</strong> for your web and mobile applications.</p>

                <p>React JS didn't even look back and is responsible for bringing a huge shift in web and mobile growth right from its inception in 2013 by Facebook. We harness the power of this technology to create feature-rich, robust web, and mobile applications for our global customers at tech2globe, a leading React JS development company.</p>

                <p>Tech2Globe <strong>ReactJS Development Company</strong> which has professional React developers with extensive experience in the development of Netflix, Instagram, Discovery VR, Whatsapp, Airbnb, and Discord, the best and highly usable React JS applications. With seamless integration of third-party APIs that are adaptable to changes or updates, we create a state-of-the-art, lightweight React solutions.</p>

                <p>React JS is the latest open-source JavaScript library to create client-side user interfaces with a focus on an incredible performance in rendering. With its ability to effectively make massive data sets, React JS stands out because of its architecture around reactive data flow.</p>

                <h4>Working With us for different categories to grow your application:</h4>
                <hr />

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Platforms of eLearning</p>
                    <p className="mb-0"><FaHandPointRight /> E-Places on the Market</p>
                    <p className="mb-0"><FaHandPointRight /> Platforms for Social Networking</p>
                    <p className="mb-0"><FaHandPointRight /> Video streaming online</p>
                    <p className="mb-0"><FaHandPointRight /> Messaging cross-platform</p>
                    <p><FaHandPointRight /> IP services voice-over</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Services hosting files</p>
                    <p className="mb-0"><FaHandPointRight /> Email services</p>
                    <p className="mb-0"><FaHandPointRight /> Network security platforms</p>
                    <p className="mb-0"><FaHandPointRight /> Content management platforms</p>
                    <p className="mb-0"><FaHandPointRight /> Team management platforms</p>
                    <p className="mb-0"><FaHandPointRight /> Online forums</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Our Services for React JS Development</h4>
                <p>Here are the reasons why React JS is our first choice for the production of 'beauty with brilliance' applications.</p>
                <h5>Super-Performance Apps</h5>
                <p>Libraries such as dash, combined with React, help build fast-loading apps that can manage a huge amount of data manipulation that would be very inefficient otherwise. Hosted mostly on CDNs, React applications are also easy to load.</p>
                <h5>Quick Rendering</h5>
                <p>Applications for React are usually pre-rendered. Most of these can be hosted on CDNs without the need for a server that communicates with APIs, resulting in superior loading times, some partially and others completely.</p>
                <h5>Flexible with Other Frameworks</h5>
                <p>React plays very well with other frameworks, such as Ruby on Rails, ExpressJS, and other frameworks, as a library without state management and routing, to help handle their frontend requirements.</p>
                <h5>Better UX and SEO</h5>
                <p>The overall experience for the end-user is significantly enhanced due to fast-loading as well as low reaction times, such as the time taken to sort data in a large table. In terms of SEO, this enhanced user experience benefits the product as well.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Our Expertise for React Development</h4>
                <hr/>
                <p>We give <strong>outsource ReactJS development</strong> services to our customers around the globe a broad range of React JS development services as follows:</p>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card h-100">
                      <Image src="/images/services/service-inner/web-application-development.jpg" alt="ReactJS Web App Development" width={1200} height={600} className="img-fluid" />
                      <div className="card-body">
                        <h5 className="text-center fw-medium">ReactJS Web App Development</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card h-100">
                      <Image src="/images/services/service-inner/android-app-development.jpg" alt="ReactJS Mobile App Development" width={1200} height={600} className="img-fluid" />
                      <div className="card-body">
                        <h5 className="text-center fw-medium">ReactJS Mobile App Development</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card h-100">
                      <Image src="/images/services/service-inner/migration-services.jpg" alt="ReactJS Migration Services" width={1200} height={600} className="img-fluid" />
                      <div className="card-body">
                        <h5 className="text-center fw-medium">ReactJS Migration Services</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card h-100">
                      <Image src="/images/services/service-inner/plugin-development.png" alt="ReactJS Plugin Development" width={1200} height={600} className="img-fluid" />
                      <div className="card-body">
                        <h5 className="text-center fw-medium">ReactJS Plugin Development</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card h-100">
                      <Image src="/images/services/service-inner/front-end-development.png" alt="ReactJS Front-End Development" width={1200} height={600} className="img-fluid" />
                      <div className="card-body">
                        <h5 className="text-center fw-medium">ReactJS Front-End Development</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card h-100">
                      <Image src="/images/services/service-inner/consulting.jpg" alt="ReactJS Consulting" width={1200} height={600} className="img-fluid" />
                      <div className="card-body">
                        <h5 className="text-center fw-medium">ReactJS Consulting</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card h-100">
                      <Image src="/images/services/service-inner/template-creation.png" alt="React JS Template Creation" width={1200} height={600} className="img-fluid" />
                      <div className="card-body">
                        <h5 className="text-center fw-medium">React JS Template Creation</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card h-100">
                      <Image src="/images/services/service-inner/ui-development.jpg" alt="React JS Interactive UI Development" width={1200} height={600} className="img-fluid" />
                      <div className="card-body">
                        <h5 className="text-center fw-medium">React JS Interactive UI Development</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card h-100">
                      <Image src="/images/services/service-inner/app-development.png" alt="Custom React JS App Development" width={1200} height={600} className="img-fluid" />
                      <div className="card-body">
                        <h5 className="text-center fw-medium">Custom React JS App Development</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Tech2Globe?</h4>
                <p>Hire ReactJS developers team of Tech2Globe ReactJS Development Services Company India. Tech2Globe offers expertise in developing start-up technologies where time to the market is key, as well as enterprise-grade applications where performance, scalability, and security are paramount.</p>
                <h5>Experience</h5>
                <p>For over 10 years now, we have used JS / React to build applications for companies and products with hundreds of thousands of users. We have designed applications ranging from healthcare, fintech to static sites-we love to design and build great-looking apps.</p>
                <h5>Full-Stack Frontend Devs</h5>
                <p>Tech2Globe's front end developers are well equipped with both HTML / CSS and Javascript / Typescript skills, making them suitable for working on projects That allow them to work in a team.</p>
                <h5>Test-Driven Development</h5>
                <p>For many projects, especially those products that have a comparatively stable project roadmap, we have embraced TDD. This helps us to boost our supplies' quality and efficiency, reducing the need for regression testing.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Looking for a dedicated React js developer for your next project?</h4>
                <p>Tech2Globe provide trustable <strong>React js services</strong>, we follow Extreme Programming best practices that include code review, pair programming, test-driven development, continuous integration, and automated testing to produce products of the highest quality. Check out what you get with us.</p>
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
