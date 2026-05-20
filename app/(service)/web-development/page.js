import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Image from "next/image";
import { FaAngleRight, FaHandPointRight } from "react-icons/fa";
import Link from "next/link";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";

export const metadata = {
  title: "Best Web Development | Tech2Globe",
  description:
    "Web development refers to building and maintaining websites. It includes web design, web publishing, web programming, and database management.",
  keywords: [
    "Best Web Development",
    "Tech2Globe Web Development Services"
  ],
  openGraph: {
    title: "Best Web Development | Tech2Globe",
    description:
      "Web development refers to building and maintaining websites. It includes web design, web publishing, web programming, and database management.",
    url: "https://www.tech2globe.com/web-development",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Web Development | Tech2Globe",
    description:
      "Web development refers to building and maintaining websites. It includes web design, web publishing, web programming, and database management."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/web-development"
  }
};

const pageHeaderData = {
  title: "Web Development",
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


export default function ResponsiveWebDesign() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Web Development" />
      <BrandSection />

      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Web Development" imageSrc="/images/services/service-inner/custom-webdevelopment-banner.jpg" />
              <div className={Style.ContentDiv}>
                <p>Tech2Globe computing solution, a figured organization, has settled their business for taking care of all digital marketing ethics. Alongside development work, our master is offering a stunning design with eye-getting graphics. Our accomplished <strong>web development services</strong> group trusts in light code made site superfluous to the quantity of pages.</p>
                <p>Subsequently, you can't experience an alternate view on the diverse width and screen devices. Our main concern is to give a less coding site without influencing the functionality of the back-end. Both pre and post planned <strong>web design and development services</strong> offer the most promising outcome to their end-user. While we are transforming the key idea of an end-user into expected to be the result, you would barely get any creeping effect which prevents to return at this portal again.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Website Development Company: Passionate to Develop Bug-Free Website</h4>
                <p>Tech2Globe has been an improved dedicated designer for making an attractive layout to audience. Our group lean towards the clutter-free and bold design style for acquiring the standard increase for the new and changed site. Subsequently, the recently evolved site supports an outstanding search engine ranking position. It's anything but a serious deal to build the invincible conversion rate.</p>
                <p>As an outstanding web design and development services, we are doing the best for gaining a transparent online business presence. A decent functionality site will assist you with catching a substantial hike in the general promoting. That is the reason it's anything but an optional necessity for building up your site. Concern of the best web development services is quintessential. Else, you would be prepared to hold up under some financial loss for not drawing the consideration of users.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Our Web Development Process</h4>
                <p>We have rich and severe proficiency and broad experience with making responsive and proficient sites for a wide range of organizations. We have made 100+ successful sites and we have a list of 100 cheerful users. <strong>Our professional web development services</strong> are exceptional, well-informed and appropriately composed to match with each customer's needs and business objectives.</p>

                <h5>Research & Planning</h5>
                <p>Above all else, we comprehend the customer's needs and business objectives and gather the necessary data. Our web development experts get ready to begin deal with the customer's project and discover established truths which should be done appropriately.</p>

                <h5>Planning Perfection</h5>
                <p>Keeping user's desires, business objectives and planning trends & concepts, we begin to plan your site. Our website developers have great proficiency and rich experience to choose the theme, trends, and shadings to make an eye-getting, responsive and professional plan.</p>

                <h5>Clean Coding</h5>
                <p>In this stage, we change the design into the coding where we utilize the freshest site development technologies and applications. Our web developers plan the responsive and expert design that is entirely coordinating with your business objectives.</p>

                <h5>Launch & Maintenance</h5>
                <p>After testing and optimizing on the top programs, the site is totally ready for dispatching with its full functionalities. Our SEO specialists will do optimization to make your website visible in Google to get online users.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Brands Choose Tech2Globe for Web Development?</h4>
                <p>Here are some of the manners in which that we stand apart as a <strong>professional website design company</strong> with regards to what our experience is with sites and making digital experiences.</p>

                <ul className="list-unstyled">
                  <li className="mb-0">
                    <FaHandPointRight className="me-2" />
                    Agile website architecture and development method
                  </li>
                  <li className="mb-0">
                    <FaHandPointRight className="me-2" />
                    Award-winning web solutions and destinations
                  </li>
                  <li className="mb-0">
                    <FaHandPointRight className="me-2" />
                    Competitive rates for website architecture and development talent
                  </li>
                  <li className="mb-0">
                    <FaHandPointRight className="me-2" />
                    Cross-functional group of 300+ specialists across the Americas, Europe, and Asia
                  </li>
                  <li className="mb-0">
                    <FaHandPointRight className="me-2" />
                    In-house front-end specialists: Business Analysts, UX/UI Specialists, and Designers
                  </li>
                  <li className="mb-0">
                    <FaHandPointRight className="me-2" />
                    Friendly, open, and transparent collaboration with customers
                  </li>
                  <li className="mb-0">
                    <FaHandPointRight className="me-2" />
                    Proven track record of successful web design and development project delivery
                  </li>
                  <li className="mb-0">
                    <FaHandPointRight className="me-2" />
                    Rigorous quality assurance (QA) testing before go-live
                  </li>
                  <li className="mb-0">
                    <FaHandPointRight className="me-2" />
                    Shorter development timelines resulting in lower costs
                  </li>
                  <li className="mb-0">
                    <FaHandPointRight className="me-2" />
                    Unparalleled open innovation skills and experience
                  </li>
                </ul>


                <p>Complete the form, email us at <Link href="mailto:info@tech2globe.com;" className="fw-bold text-decoartion-underline"> info@tech2globe.com</Link> or get in touch with us directly by a call at one of our numerous worldwide office areas to discuss your next or an up and coming project. Need more convincing? Simply investigate our customer list to see only a portion of the brand names that Tech2Globe has helped many customers.</p>
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
