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
  title: "UI/UX Design Services Agency - Tech2Globe",
  description:
    "Tech2Globe: Your premier UI/UX design services agency. Elevate your digital presence with our innovative and user-centric design solutions.",

  openGraph: {
    title: "UI/UX Design Services Agency - Tech2Globe",
    description:
      "Tech2Globe: Your premier UI/UX design services agency. Elevate your digital presence with our innovative and user-centric design solutions.",
    url: "https://www.tech2globe.com/ui-ux-design-services",
    type: "website",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/ui-ux-design-services",
  },
};

const pageHeaderData = {
  title: "UI/UX Design Services",
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


export default function UIUXDesign() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="UI/UX Design Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="UI/UX Design Services" imageSrc="/images/services/graphics-design-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Tech2Globe is India's best UX/UI service provider specializing in handcrafting beautiful UI/UX designs that fulfil the vision and objectives of our clients. For us, it goes beyond being user-centered to offer outstanding UX; it is primarily about being content-centric. UI UX Design Services Provider Company</p>

                <p>Using the latest tools and innovations, we provide extensive UI/UX services that include branding, responsive web design, mobile app design, user interface consulting, and promotional designs. We build <strong>complete UI & UX services</strong> with uniform cross-platform usability through a unique combination of current technology and innovative approaches. We help consumers succeed by simplifying designs that can have a lasting effect on users' minds, growing brand recognition and loyalty in turn.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>User-Friendly Web Design and UI UX Services</h4>
                <hr/>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/web-design.png" width={55} height={55} alt="Customized Web Design Services" />
                      <div className="context">
                        <h5>Customized Web Design Services</h5>
                        <p>Tech2Globe, <strong>a UI UX design services provider company,</strong> build a project prototype according to your business needs and have the best solutions for the design. Our professional design developers supply services that are both flexible and easy to implement.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/front-end-icon.png" width={55} height={55} alt="Front End Development:" />
                      <div className="context">
                        <h5>Front End Development:</h5>
                        <p>For our customers, we make sure to create graphical products that are compatible with any platform of their choosing. As a leading user interface organization, we are focused on writing code that increases the company's productivity.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/ux-design.png" width={55} height={55} alt="Design of Interface for Mobile App" />
                      <div className="context">
                        <h5>Design of Interface for Mobile App</h5>
                        <p>Mobile apps are all about user experience, and our highly dynamic team creates <strong>UI/UX designs</strong> that resonate favorably to attract the user's interest.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/android-app-design.png" width={55} height={55} alt="iOS and Android App Designs" />
                      <div className="context">
                        <h5>iOS and Android App Designs</h5>
                        <p>To provide the iOS and Android apps with a seamless look and feel, we design each interface with the utmost care, and the entire development process is done faultlessly by our interface designers.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/web.png" width={55} height={55} alt="Web Design Services" />
                      <div className="context">
                        <h5>Web Design Services</h5>
                        <p>You are creating a wider window for you to communicate online with your clients. To extend your business scope, we bring an outstanding web experience design.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/e-commerce-app-design.png" width={55} height={55} alt="E-Commerce App Design" />
                      <div className="context">
                        <h5>E-Commerce App Design</h5>
                        <p>Creation of immersive and feature-rich e-commerce apps to provide a user-friendly experience for customers and increase rates of user engagement.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Areas of expertise</h4>
                <p>With the development of HTML5, Front End developers depend on one of the Front End scripting languages, which are a subset of programming languages to a large extent.</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <p className="mb-0"><strong>User research:</strong></p>
                    <p className="mb-0"><FaHandPointRight /> Understanding users’ needs and behavior</p>
                    <p className="mb-0"><FaHandPointRight /> User interviews</p>
                    <p className="mb-0"><FaHandPointRight /> Usability tests</p>
                    <p className="mb-0"><FaHandPointRight />  Customer journey mapping</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <p className="mb-0"><strong>UI/UX design:</strong></p>
                    <p className="mb-0"><FaHandPointRight /> Prototyping</p>
                    <p className="mb-0"><FaHandPointRight /> Information architecture</p>
                    <p className="mb-0"><FaHandPointRight /> UI kit and design system</p>
                    <p className="mb-0"><FaHandPointRight /> Visual design</p>
                    <p className="mb-0"><FaHandPointRight /> Front-end development</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Process We Follow</h4>
                <p>Our method of Interface Design has proved itself time and again. For every design we make, we take the following steps:</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Market Research & Analysis</h6>
                    <p>By collecting, evaluating, and defining criteria to understand user goals and emotions, we begin the UX process.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Prototype</h6>
                    <p>Even before it is ultimately designing, our comprehensive clickable prototypes show the fundamental flaw of the entire product.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Information Architecture</h6>
                    <p>Users must be able to locate what they are searching for quickly. We arrange and organize the idea of 'findability' based on information.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>User Interface Design</h6>
                    <p>The philosophy of design is to create interfaces that align the user knows and correspond to each of his actions.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Wireframes</h6>
                    <p>These blueprints show the whole product's intended layout. It illustrates where the real estate on a website goes.</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Tech2Globe for UI/UX Design Service?</h4>
                <p>Tech2Globe, a leading <strong>UI/UX solutions provider company USA</strong> builds products for client-specified platforms, cross-platform applications, and provides a continuous user experience.</p>
                <p>We will work with your team during the entire development process, from working on the layout to the wireframes, Cross-Platform App <strong>UI/UX design services</strong>, interaction and <strong> UX design services</strong>, designing model designs, making custom images and translating the designs to code.</p>
                <div className="row pb-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Expertise in creating Native and Cross-Platform applications</p>
                    <p className="mb-0"><FaHandPointRight /> The choice to pick from an expert team the best resources</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Flexible engagement model and transparent process</p>
                    <p className="mb-0"><FaHandPointRight /> Dedicated Project Manager and Account Manager</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Get Innovative UX/UI Design and Development Services from Us?</h4>
                <p>To build creative design experiences, our team of UX strategists, knowledge architects, visual designers and content strategists look at the broader constellation of touchpoints with audiences.</p>
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
