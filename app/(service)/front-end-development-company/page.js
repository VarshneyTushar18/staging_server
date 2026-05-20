import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Image from "next/image";
import { FaAngleRight, FaHandPointRight } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title: "Front End Development Company & Custom Development Services - Tech2Globe",
  description:
    "Tech2Globe: Your front-end development experts providing custom services tailored to your needs. Elevate your digital presence today!",

  openGraph: {
    title: "Front End Development Company & Custom Development Services - Tech2Globe",
    description:
      "Tech2Globe: Your front-end development experts providing custom services tailored to your needs. Elevate your digital presence today!",
    url: "https://www.tech2globe.com/front-end-development-company",
    type: "website",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/front-end-development-company",
  },
};

const pageHeaderData = {
  title: "Front End Development Company",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "UI/UX Design Services", path: "/ui-ux-design-services" },
  { id: 2, name: "Front End Designing", path: "/front-end-development-company" },
  { id: 3, name: "Responsive Web Designing", path: "/responsive-web-design" },
  { id: 4, name: "Graphic Design", path: "/graphic-design-services" },
  { id: 5, name: "Corporate Branding", path: "/corporate-branding" },
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


export default function FrontEndDevelopment() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Front End Development Company" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Front End Development Company" imageSrc="/images/services/service-inner/custom-webdevelopment-banner.jpg" />
              <div className={Style.ContentDiv}>
                <p>Tech2Globe is one of the <strong>best front-end technology development services in India</strong> with more than a decade of experience. Our professional <strong>Front End development & designing services</strong> team knows how to build a consistent UI experience that provides your web and mobile apps with uninterrupted transitions and seamless navigation.</p>

                <p>Our front-end software development experience includes both web and mobile projects that ensure seamless connectivity across platforms in line with your strategic priorities and user-centric plans. We know how to highlight your brand as unique and give you a competitive advantage, being the chosen front-end web development company for both growing start-ups and existing companies.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Best Front End Development Services We Offer</h4>
                <p>Tech2Globe specializes <strong>Front End Development companies</strong> in designing top-notch solutions for the creation of front-end websites using the latest technologies such as Angular, React & Vue.js. To achieve your product vision, drive sales, and have a better customer experience,  <strong>hire Angular JS developers</strong>.</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/ui.png" width={55} height={55} alt="UI-UX Designing" />
                      <div className="context">
                        <h5>UI-UX Designing</h5>
                        <p>We help companies manage every part of the digital world, not only now, but also for the future, leading the way in fluid and user-focused UI/UX design. With our intuitive and sensitive UI/UX design services, clear the online clutter and build an edge that helps you grow visually attractive and fully functional products, increase your brand awareness and meet the needs of your customers.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/js.png" width={55} height={55} alt="JavaScript Frameworks" />
                      <div className="context">
                        <h5>JavaScript Frameworks</h5>
                        <p>Use our user-friendly and power-packed JavaScript frameworks to turn the tedious website creation phase into a complete breeze. With this at any stage, you won't have to produce devices, write complex codes, and test them. Leave all the heavy lifting to us as we make website development stable, scalable, and interoperable with our ready-to-use codes.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/html-css.png" width={55} height={55} alt="HTML5 & CSS3 Development" />
                      <div className="context">
                        <h5>HTML5 & CSS3 Development</h5>
                        <p>We have helped our global customers develop online experiences that consumers enjoy, backed by extensive experience in the development of interactive and ingenious web and mobile apps using the right combination of HTML5 and CSS3. We thrive on our strong track record of providing engaging and immersive development services that strengthen the content of your brand, captivate your audience, and provide a cohesive user experience.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/web-maintenance.png" width={55} height={55} alt="Maintenance & Re-designing" />
                      <div className="context">
                        <h5>Maintenance & Re-designing</h5>
                        <p>With a feature-rich tech stack, Tech2Globe provides end-to-end support so that you can outperform even in a highly competitive IT environment. With our futuristic solutions that help you rank higher, improve conversions, drive revenue, and improve the end-user experience, we continue to add value to our client's success. Accelerate the company's growth with our end-to-end services.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Our expertise in the development of Front End</h4>
                <p>With the development of HTML5, Front End developers depend on one of the Front End scripting languages, which are a subset of programming languages to a large extent.</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <p className="mb-0"><FaHandPointRight /> Bootstrap</p>
                    <p className="mb-0"><FaHandPointRight /> jQuery</p>
                    <p className="mb-0"><FaHandPointRight /> AngularJS</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <p className="mb-0"><FaHandPointRight /> Node.js</p>
                    <p className="mb-0"><FaHandPointRight /> ReactJS</p>
                    <p className="mb-0"><FaHandPointRight /> Consistency</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Enterprises We Represent</h4>
                <p>Technological strategies for overcoming specific obstacles and creating value for companies in various industries.</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <p className="mb-0"><FaHandPointRight /> Education & E-learning</p>
                    <p className="mb-0"><FaHandPointRight /> Healthcare & Wellness</p>
                    <p className="mb-0"><FaHandPointRight /> Real Estate & Construction</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <p className="mb-0"><FaHandPointRight /> Logistic & Transportation</p>
                    <p className="mb-0"><FaHandPointRight /> Travel & Hospitality</p>
                    <p className="mb-0"><FaHandPointRight /> Media & Entertainment</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Client Choose Us For the Developing</h4>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Full-Cycle Apps</h6>
                    <p>Tech2Globe is proud of its diverse front-end website development team, diversified portfolio, long-standing relationships and an established track record of high-efficiency projects being completed on time. We have you covered with our expert range of <strong>Custom Development, front end testing & migration services,</strong> design, implementation, testing, and maintenance.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Transparent Communications</h6>
                    <p>We go the extra mile with a customer-first approach to ensure client satisfaction and progress on any project. From start to finish, we are customer-focused and show this culture through our processes, promises, and programs. From conception to completion and beyond, we keep you informed and active in each aspect of your project.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Mobile-First Approach</h6>
                    <p>The only industry standard we know is mobile-first, so you can be sure in any area of your project that agility and responsiveness will be incorporated. Backed by international certifications and a full-service portfolio of technology & business solutions, even in a competitive IT world, we have everything you need to embrace change and keep pace.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Best-in-class Customer Experience</h6>
                    <p>We are constantly learning, growing, and meeting new challenges. We actively find out how to make things run easier and faster. Our strong front-end web development skills enable us to provide intelligent solutions that address your specific business problems and help your customers have the best experience.</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Looking for a Front End Developer</h4>
                <p>With Tech2Globe's unrivalled experience in the development of reliable and robust front-end software solutions, savour clean coding, consistent development, error-free UI/UX design, and great aesthetic value.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>We Expertise in All <span className="text-danger">Major Technologies</span></h2>

                <p><FaAngleRight /> <Link href="/cake-php-development" className="text-decoration-none fw-normal">Cake PHP Development</Link> </p>
                <p><FaAngleRight /> <Link href="/nop-commerce-development-services" className="text-decoration-none fw-normal">Nopcommerce Development </Link></p>
                <p><FaAngleRight /> <Link href="/joomla-development" className="text-decoration-none fw-normal">Joomla Development</Link></p>
                <p><FaAngleRight /> <Link href="/drupal-development" className="text-decoration-none fw-normal">Drupal Development </Link></p>
                <p><FaAngleRight /> <Link href="/responsive-web-design" className="text-decoration-none fw-normal">Responsive Web Design </Link></p>
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
