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
  title: "Framework Development Services Company - Tech2Globe",
  description:
    "Tech2Globe: Your trusted framework development services company. Harness the power of robust frameworks for scalable and efficient solutions.",
  openGraph: {
    title: "Framework Development Services Company - Tech2Globe",
    description:
      "Tech2Globe: Your trusted framework development services company. Harness the power of robust frameworks for scalable and efficient solutions.",
    url: "https://www.tech2globe.com/framework-development-services",
    type: "website"
  },
  alternates: {
    canonical: "https://www.tech2globe.com/framework-development-services"
  }
};

const pageHeaderData = {
  title: "Framework Development Services",
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


export default function FrameworkDevelopment() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Framework Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Framework Development Services" imageSrc="/images/services/service-inner/custom-webdevelopment-banner.jpg" />

              <div className={Style.ContentDiv}>
                <p>
                  In reality, frameworks are the performance and efficiency boosters of your web apps, web services, and tasks of web development. Equipped with interesting features such as templates, session management, and libraries for database access, these frameworks improve the web activities excellently. As a framework development agency, Tech2Globe aims to provide the most scalable and modular solutions for development that will save you precious time.
                </p>

                <p>
                  With our easily-scalable options, we can make your web development easier. You don't have to think about business logic coding, user interface design, and database building with us, as <strong>framework development company</strong> services are enough to assure you the much-needed consistency and security of the code. Our range of <strong>framework development services</strong> will relieve you of all the tensions and difficult tasks of development. For an array of application development projects for our clients, we have used the frameworks.
                </p>

                <p>
                  The framework development services from Tech2Globe will provide you <strong>PHP framework development services</strong> with an extended range of web application functionality, these complex web directories or files can be easily handled. These frameworks can manage all aspects optimally, from error and code management to logic authentication. So, these are certainly the best instruments to use for your business expansion today.
                </p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Angular JS Development</h4>
                <p>Data binding & dependency injection, which eliminates much of the coding, is the one thing that makes ANGULAR JS extremely popular among developers. The approach that focuses exclusively on enhancing testability & efficiency is applied. As a prestigious ANGULAR JS technology company, Tech2Globe focuses purely on the latest technologies for various projects based on their needs.</p>

                <h5>Our Core Services for ANGULAR JS Development:</h5>
                <hr />
                <p className="mb-0"><FaHandPointRight /> Web Applications Development</p>
                <p className="mb-0"><FaHandPointRight /> Web Applications Development</p>
                <p className="mb-0"><FaHandPointRight /> Custom Development for Application</p>
                <p className="mb-0"><FaHandPointRight /> Plug-ins Development</p>
                <p><FaHandPointRight /> E-commerce & Shopping Cart Development</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>CakePHP Web Development</h4>
                <p>CakePHP is a well-known platform for open source web applications used to build smart web applications. CakePHP development depends on the architecture of the Model View Controller (MVC). It offers amazing functionality to support application development, maintenance, and deployment.</p>
                <p>CakePHP preserves a large measure of time for improvement and thus greatly decreases the expense of development. It is moderately simple to understand and can add a power aspect to the applications. As a web development company, we provide cost-effective pricing for custom CakePHP website development & CakePHP web application development services.</p>

                <h5>Our CakePHP Development Services Include:</h5>
                <hr />
                <p className="mb-0"><FaHandPointRight /> The CakePHP framework has significant capabilities for logging and caching, making it suitable for custom environments.</p>
                <p><FaHandPointRight /> Other major benefits of this framework are compatibility with almost all website directories and reusable coding.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Node.js Development</h4>
                <p>As the best node.js development services provider at Tech2Globe, we have a perfect blend of cutting-edge technology, trends, and innovation, resulting in fast performance and highly efficient applications. If we build a chat engine, a game, or an online e-commerce shop, we have proved our excellence.</p>

                <h5>Features of Our Node.js Development Services:</h5>
                <hr />
                <p className="mb-0"><FaHandPointRight /> REST/JSON APIs Development In Node.js</p>
                <p className="mb-0"><FaHandPointRight /> Real-time Application Development Using Node.js</p>
                <p className="mb-0"><FaHandPointRight /> Node.js Developed Server Performance Optimization</p>
                <p><FaHandPointRight /> Real-time Web Socket Programming</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Backbone Js Development</h4>
                <p>Backbone serves as the backbone of different apps Allowing developers to create advanced and structural web applications. This is a lightweight MVP or Model View Presenter-based JavaScript Application operation. It is used for designing applications that are interactive, simple, and rich. This framework helps to ensure consistent solutions as it reorganizes JavaScript coding into templates and views that minimize application development tasks.</p>

                <h5>Some basic Features of Backbone JS:</h5>
                <hr />
                <p className="mb-0"><FaHandPointRight /> This library, which has various extensions, is free and open source. The framework serves as the project's backbone, allowing the developer to efficiently organize the code.</p>
                <p><FaHandPointRight /> It provides different components for the design of the client-side web app, such as events, models, collections, routers, views, etc.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>React JS</h4>
                <p>React JS is one of the popular libraries of JavaScript that has recently been released. To a significant extent, developers like this framework. You will be able to isolate the components inside a single page in an efficient way with React JS.</p>
                <p>For the implementation of the development program, React JS is a good concept because it provides a concept that is very popular for web development. React JS follows MVC architecture's V-view design.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Tech2Globe?</h4>
                <p>Tech2Globe is a well-known <strong>framework development services India</strong> technologies, which have experts in web development as well as a diligent approach to all projects, big or small, that come our way. Our developers and designers are well-versed in how custom web design works and are working to ensure high-quality results that are deadline-oriented. We also offer extensive web solutions and enable customers to expand their audience.</p>
                <p>Our developers pay careful attention to the customer's needs and preferences and ensure that they are desirable for the final result. It is our combined experience in the industry and understanding of the field that has made us a force in the world of website development to reckon with.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Willing To Work With Us</h4>
                <p>To us, your inquiry is precious. Tech2Globe will be happy to support you with your queries. Our customer service representative will be back to you within 24 hours shortly and will be happy to do your requirement analysis.</p>
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
