import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import { FaAngleRight, FaHandPointRight } from "react-icons/fa";
import Link from "next/link";


export const metadata = {
  title: "WordPress Development Services Company",

  description:
    "Get seamless, scalable websites with Tech2Globe, a premier WordPress Development Services Company focused on delivering quality and performance.",

  openGraph: {
    title: "WordPress Development Services Company",
    description:
      "Get seamless, scalable websites with Tech2Globe, a premier WordPress Development Services Company focused on delivering quality and performance.",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/wordPress-development",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "WordPress Development Services Company",
    description:
      "Get seamless, scalable websites with Tech2Globe, a premier WordPress Development Services Company focused on delivering quality and performance.",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/wordPress-development",
  },
};

const pageHeaderData = {
  title: "WordPress Development",
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


export default function WordpressDevelopment() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="WordPress Development" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="WordPress Development" imageSrc="/images/services/service-inner/custom-webdevelopment-banner.jpg" />
              <div className={Style.ContentDiv}>
                <p>The most powerful CMS in the world has everything you need to build wonderful websites. A fully functional and feature-laden website can help you reach more viewers, which is why 35% of the internet is powered by WordPress today.</p>

                <p>Tech2Globe is a <strong>WordPress development services company</strong> that solves complex WordPress projects for your business needs. According to your specifications, our developer provides <strong>custom WordPress development services</strong> to customize them and make them look fine. As an ideal choice for small budgets, we prefer WordPress. Our WordPress Developers expert team is well informed about the latest technology and developments that make them provide top-notch WordPress development services.</p>

                <p>Tech2Globe's outsourcing of a Drupal project offers additional return and every solution we provide is also supported by result-oriented project management, 100 percent satisfaction, timely end-product delivery, bug-free deployment, and technical support round-the-clock.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Tech2Globe's Best Things of WordPress Development</h2>
                <hr />
                <p className="mb-0"><strong>WordPress Development For Your Business</strong></p>
                <p>It is important to consider the specific challenges and requirements of customers when it comes to developing result-oriented websites and to come up with optimized solutions to match them. We are a partner you can trust if you want to make sure that your company website increases the value of the brand. We not only build websites but also take the correct approach to preserve them. Work with us and carry your company to new heights.</p>

                <p className="mb-0"><strong>Development of WordPress- Always On-time & On-budget</strong></p>
                <p>We are the right choice if you are looking for a partner who understands WordPress design and production better than anyone else. We have created several WordPress websites for different domains over the years Our process is well-established and with every website we create, our experience grows.</p>

                <p className="mb-0"><strong>Tools for good production and collaboration</strong></p>
                <p>As we leverage trusted project management instruments that allow better execution and collaboration, you can expect high-quality standards from us. We make sure that everything is smooth and on-time, whether it is about contact, feedback, reporting, or distribution!</p>

                <p className="mb-0"><strong>Our Wide Services of WordPress Development</strong></p>
                <p>With high conversion rates, our team creates mobile-first WordPress websites, our wide service includes:</p>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5 className="text-danger">Custom Development for WP</h5>
                    <p>We fulfill everything, whether it is a custom theme or plugin, and support you by analyzing and envisioning your business needs with easy, performance-driven WordPress customization.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5 className="text-danger">WP Theme Development</h5>
                    <p>The responsive theme has become the need of everyone, so our team of WordPress development company is experts in WordPress believes in creating highly responsive WP themes.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5 className="text-danger">Enterprise WordPress development</h5>
                    <p>We build a rich digital WordPress experience with proven WordPress developers by delivering professional WordPress projects at the enterprise level that bring maximum lead and ROI.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5 className="text-danger">WordPress Upgradation</h5>
                    <p>By updating it to the latest version, we upgrade the WordPress core, plugins, address bugs, and issues of your current WordPress site to make your WP website run smoothly.</p>
                  </div>

                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Form of Websites on WordPress We have Developed</h2>
                <hr />
                <p>We have diversified skills in crafting beautiful WordPress websites with 10 + years of experience.</p>

                <div className="row pb-3">
                  <div className="col-md-4">
                    <p className="mb-0"><FaHandPointRight /> Educational/School Websites</p>
                    <p className="mb-0"><FaHandPointRight /> Real Estate Website</p>
                    <p className="mb-0"><FaHandPointRight /> Business Portfolio Website</p>
                    <p className="mb-0"><FaHandPointRight /> Digital Publishing Website</p>
                    <p className="mb-0"><FaHandPointRight /> Website Development</p>
                  </div>
                  <div className="col-md-4">
                    <p className="mb-0"><FaHandPointRight /> Configuration & Installation</p>
                    <p className="mb-0"><FaHandPointRight /> Theme Design</p>
                    <p className="mb-0"><FaHandPointRight /> PSD To WordPress</p>
                    <p className="mb-0"><FaHandPointRight /> Third-Party Integration</p>
                    <p className="mb-0"><FaHandPointRight /> Blogging Solutions</p>
                  </div>
                  <div className="col-md-4">
                    <p className="mb-0"><FaHandPointRight /> Plugin Development</p>
                    <p className="mb-0"><FaHandPointRight /> Maintenance & Support</p>
                    <p className="mb-0"><FaHandPointRight /> WordPress Upgrading</p>
                    <p className="mb-0"><FaHandPointRight /> WordPress Customization</p>
                    <p className="mb-0"><FaHandPointRight /> WooCommerce Store</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Reason Why Should you choose Tech2Globe?</h2>
                <hr />
                <p className="mb-0"><strong>Knowledgeable Experts</strong></p>
                <p>Our developers have in-depth knowledge and experience with custom WordPress website design and development services, different frameworks, plugins, versions, and theme customization relevant to WordPress.</p>

                <p className="mb-0"><strong>Focus on Security for Websites</strong></p>
                <p>Our developers build a safe and secure website integrated with advanced security measures, including SSL, data encryption, two-factor authentication, etc.</p>

                <p className="mb-0"><strong>High Performance & Speed</strong></p>
                <p>To make your brand gain a competitive advantage, our team of WordPress customization service specialist designs quick loading, high-yield, high-performance, mobile-first WordPress website.</p>

                <p className="mb-0"><strong>Contributions of Open source</strong></p>
                <p>As a leading contributor to open-source website growth, we harness WordPress' power to code a beautiful and fully functional WordPress site.</p>

                <p className="mb-0"><strong>Hire a Skilled Developer From Tech2Globe?</strong></p>
                <p>We can tweak your WordPress website in any way you want, our web development solutions for WordPress are quite versatile and perfect for all kinds of websites. You can expect to have the best value for your money with our WordPress web development services.</p>
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
