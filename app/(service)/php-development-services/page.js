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
  title: "PHP Development Services | PHP development company | Tech2Globe",
  description:
    "Tech2Globe offers you bespoken PHP development services. With our PHP development company, your business gains admittance to maximum functionality & great programming.",
  keywords: [
    "PHP development services",
    "custom PHP development company",
    "PHP development company",
    "PHP developers",
    "PHP web development services"
  ],
  openGraph: {
    title: "PHP Development Services | PHP development company | Tech2Globe",
    description:
      "Tech2Globe offers you bespoken PHP development services. With our PHP development company, your business gains admittance to maximum functionality & great programming.",
    url: "https://www.tech2globe.com/php-development-services",
    siteName: "Tech2Globe",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PHP Development Services | PHP development company | Tech2Globe",
    description:
      "Tech2Globe offers you bespoken PHP development services. With our PHP development company, your business gains admittance to maximum functionality & great programming."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/php-development-services"
  }
};

const pageHeaderData = {
  title: "PHP Development Services",
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


export default function PHPWebDevelopment() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="PHP Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="PHP Development Services" imageSrc="/images/services/service-inner/custom-webdevelopment-banner.jpg" />
              <div className={Style.ContentDiv}>
                <p>PHP is one of the oldest programming mechanisms of setting up over the web. Implementing PHP for website development engages your business with a thorough set-up of highlight possibilities.</p>
                <p>Tech2Globe offers you bespoken <strong>PHP development services</strong>. Hire our <strong>PHP developers</strong> and programmers who accompany center competency and aptitude in PHP consulting services. We utilize imaginative technologies with proven strategies and progressed infrastructure to make PHP software in the most ideal blends. With our PHP development company (India), your business gains admittance to maximum functionality and great programming in a financially savvy way.</p>
                <p>Tech2Globe is a leading <strong>custom PHP development company</strong>  that means to give strong web and app development services to the worldwide customer base. The organization is generally known for conveying master PHP solutions that are customized to accommodate your particular business need and draw in clients while meeting coding standards.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Our PHP Development Services</h4>
                <hr />
                <p>Tech2Globe gives full-cycle PHP development services. It is more gainful to work with a single vendor who has strong expertise in all aspects of software development compared and a few organizations barely centered either on front-end or back-end sides. Moreover, it&apos;s harder to deal with a few providers.</p>

                <p>Our services include:</p>
                
                <p className="mb-0"><FaHandPointRight /> Custom PHP development (from scratch).</p>
                <p className="mb-0"><FaHandPointRight /> Refinement of existing solutions.</p>
                <p className="mb-0"><FaHandPointRight /> UI/UX design.</p>
                <p className="mb-0"><FaHandPointRight /> Consulting and business analysis.</p>
                <p className="mb-0"><FaHandPointRight /> QA and testing.</p>
                <p className="mb-0"><FaHandPointRight /> Long-term support and maintenance.</p>
                <p><FaHandPointRight /> Migration to the latest PHP version.</p>

                <p>Our group of more than 250 in-house IT experts is knowledgeable in all significant current technologies. To complement the PHP group, you can likewise hire mobile developers to work hand-in-hand with them. Consistent participation permits us to viably create portable arrangements associated with <strong>PHP web development services.</strong></p>

              </div>

              <div className={Style.ContentDiv}>
                <h4>Hire committed PHP team from us</h4>
                <p>You can employ skilled PHP developers from Tech2Globe either as a growth to existing in-house staff or as a completely practical software team joined by a single goal. The developers are handpicked to coordinate the necessities of the customer, who has full command over their working activities. We can build groups of 5-40 experts. Until this point in time, our biggest activities include 7-10 PHP developers cooperating. Additionally, with our committed groups, it is conceivable to diminish costs by 40%.</p>

                <p>More than 10 years, Tech2Globe has assembled priceless mastery in reformist staff preparing and giving five star devoted groups to a huge assortment of tasks. Development and customization of SaaS stage for protection agents, custom LMS for an ed-tech organization, custom EHR - these are just some of the activities we are glad for.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Choose Us As Your PHP Development Partner?</h4>
                <p>PHP is an open-source web development scripting language with high-grade customization abilities that permits web designers to make exceptionally scalable and flexible web solutions. All of our PHP solutions are &apos;Quality Tested&apos; to guarantee a mistake free direction. Our PHP development organization follow dexterous work processes to convey the best final result.</p>

                <p className="mb-0"><FaHandPointRight /> PHP experts with the privilege range of abilities and mastery</p>
                <p className="mb-0"><FaHandPointRight /> Rich involvement in numerous PHP projects delivered surprisingly</p>
                <p className="mb-0"><FaHandPointRight /> Extensive utilization of the latest development tools and most recent technologies</p>
                <p className="mb-0"><FaHandPointRight /> Customer-driven solutions which coordinate the particular business needs of customers</p>
                <p className="mb-0"><FaHandPointRight /> Commitment to finishing projects inside the specified time spans</p>
                <p className="mb-0"><FaHandPointRight /> Dedicated project managers who deal with the activities and guarantee quality</p>
                <p className="mb-0"><FaHandPointRight /> Availability for steady communication and standard revealing about the venture</p>
                <p><FaHandPointRight /> Expert PHP developers to be employed on an hourly, part-time, or full-time premise</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Free Trial</h4>
                <p>Our PHP website development services help our customers across differing industries quickly explore innovation changes and drive digital change. We offer great help with complimentary help and upkeep services for a month and reasonable support packages a short time later.</p>
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
