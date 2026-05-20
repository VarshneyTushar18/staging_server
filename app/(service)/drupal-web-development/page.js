import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import { FaHandPointRight } from "react-icons/fa";


export const metadata = {
  title: "Drupal Web Development | Drupal Web Development Company - Tech2Globe",
  description:
    "Tech2Globe: Your go-to Drupal web development company. Elevate your online presence with our expert Drupal solutions tailored to your needs.",
  openGraph: {
    title: "Drupal Web Development | Drupal Web Development Company - Tech2Globe",
    description:
      "Tech2Globe: Your go-to Drupal web development company. Elevate your online presence with our expert Drupal solutions tailored to your needs.",
    url: "https://www.tech2globe.com/drupal-web-development",
    siteName: "Tech2Globe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drupal Web Development | Drupal Web Development Company - Tech2Globe",
    description:
      "Tech2Globe: Your go-to Drupal web development company. Elevate your online presence with our expert Drupal solutions tailored to your needs.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/drupal-web-development",
  },
};

const pageHeaderData = {
  title: "Drupal Web Development",
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


export default function DrupalWebDevelopment() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Drupal Web Development" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Drupal Web Development" imageSrc="/images/services/service-inner/custom-webdevelopment-banner.jpg" />
              <div className={Style.ContentDiv}>
                <p>Drupal is the open-source CMS which powers millions of websites and apps. Drupal&apos;s CMS is completely scalable, versatile, and stable. To build accessible and advanced business websites & web applications, Tech2Globe has been providing best-in-class <strong>Drupal development services.</strong></p>

                <p>With a global appeal, we create fascinating concepts & web content that are functional masterpieces. Tech2Globe is a top <strong>Drupal web development company</strong>, that offers consulting, solution, and service provider companies for full-service Drupal. We offer the best of access to <strong>expert Drupal developers</strong> at Tech2Globe. With our extensive industry knowledge, we dedicate our clients to quality improvement in their projects. We are one of the well-known <strong>Drupal web development companies</strong> that offer dedicated solution support, for Drupal.</p>

                <p>Tech2Globe&apos;s outsourcing of a Drupal project offers additional return and every solution we provide is also supported by result-oriented project management, 100 percent satisfaction, timely end-product delivery, bug-free deployment, and technical support round-the-clock.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Services Tech2Globe Offer For Drupal Web Development</h4>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5 className="fw-normal">Drupal API Integration</h5>
                    <p>We will brilliantly integrate the third-party API into it to improve the security and functionality of your site. More power and flexibility will be added to your websites with our supplied Drupal solutions.</p>

                    <h5 className="fw-normal">Drupal Development</h5>
                    <p>Our <strong>Drupal web development company</strong>, experts use their experience and skills to create robust web apps and modules in the Drupal development framework. This has helped us meet the different demands of the variety of efficient companies.</p>

                    <h5 className="fw-normal">Module Development & Integrations</h5>
                    <p>Drupal is an exceptional tool for building a feature-rich, well-integrated platform for customer experience. To improve and improve your user experience, our Drupal developers are experts in both developing custom modules and engineering flawless third-party integrations, including with your other preferred platforms.</p>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5 className="fw-normal">Drupal Migration and Upgrade</h5>
                    <p>We are proficient in the backup and migration processes of Drupal. We can handle everything smoothly, regardless of the type, size, and complexity of the migration. Before shifting content and databases effectively, our developers use the proper backup.</p>

                    <h5 className="fw-normal">Drupal Theme Development</h5>
                    <p>We have extensive experience in developing multilingual and feature-enriched themes as a leading Drupal web development business. We make sure that your brand image is well provided by our custom themes.</p>
                  </div>

                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>How Can Tech2Globe Help You?</h4>
                <h5>Scalability</h5>
                <p>We build scalable Drupal sites that modify easily to increasing company requirements.</p>
                <h5>Quality of the high-grade</h5>
                <p>We are experts in the development of web applications that have fast load time and provide users with a smooth browsing experience.</p>
                <h5>Secured Solutions</h5>
                <p>We have considerable experience in the development of secure Drupal sites which strictly comply with the latest standards of development.</p>
                <h5>Latest tech Stack</h5>
                <p>We have a strong grip on advanced and modern technologies that can help us to provide excellent solutions.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Technologies You Can Build with Drupal</h4>
                <p>Drupal has been used by Tech2Globe as a more standardized, more accessible content management framework. Drupal can be built on effortlessly. It makes it easier for businesses to implement new features and functionality as per trend or technological changes. For the following things, we have built Drupal:</p>
                <ul className={Style.TwoCol}>
                  <li>Platforms for file storage</li>
                  <li>Apps for social networks</li>
                  <li>Platforms for micro-blogging</li>
                  <li>Websites for video-sharing</li>
                  <li>Portals for news</li>
                  <li>Network with blog</li>
                  <li>Websites for image-sharing</li>
                  <li>Website for corporate business</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Tech2Globe&apos;s Expertise For Drupal</h4>
                <ul>
                  <li>E-commerce Website with CMS</li>
                  <li>CMS Website for Social Networking</li>
                  <li>Installing Module</li>
                  <li>Website Drupal CMS Auction</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Tech2Globe?</h4>
                <p>Tech2Globe provides a wide range of <strong>Drupal Web development services</strong> to clients with different business needs. Since 2014, Our strong experience in building feature-rich, modular, scalable, and highly optimized websites for different business needs to ensure that your project is in safe hands. To meet the business requirements and the goals to help you achieve sales & revenue for your business operation, our team follows the best industry standards.</p>
                <p>We are proficient in everything, whether it is Drupal website development, theme development, support and maintenance services, custom Drupal applications, or Drupal migration services. Our team of highly experienced developers from Drupal is ready to provide the best <strong>Drupal development services & solutions.</strong></p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Looking for solutions for Drupal Development?</h4>
                <p>For your Drupal project, are you looking for dedicated developers? Hire Drupal developers from Tech2Globe and meet all your business needs!</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>We Expertise in All Major Technologies</h2>
                <ul>
                  <li>Cake PHP Development</li>
                  <li>Zend Framework Development</li>
                  <li>Nopcommerce Development </li>
                  <li>SharePoint Web Development</li>
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
