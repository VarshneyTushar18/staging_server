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
  title: "Joomla Web Development | Joomla Development Services - Tech2Globe",
  description:
    "Tech2Globe offers expert Joomla web development services. Elevate your online presence with our tailored Joomla solutions for your business.",
  alternates: {
    canonical: "https://www.tech2globe.com/joomla-web-development",
  },
  openGraph: {
    title: "Joomla Web Development | Joomla Development Services - Tech2Globe",
    description:
      "Tech2Globe offers expert Joomla web development services. Elevate your online presence with our tailored Joomla solutions for your business.",
    url: "https://www.tech2globe.com/joomla-web-development",
    type: "website",
    siteName: "Tech2Globe",
  },
  twitter: {
    title: "Joomla Web Development | Joomla Development Services - Tech2Globe",
    description:
      "Tech2Globe offers expert Joomla web development services. Elevate your online presence with our tailored Joomla solutions for your business.",
    card: "summary_large_image",
  },
};

const pageHeaderData = {
  title: "Joomla Web Development",
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


export default function JoomlaWebDevelopment() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Joomla Web Development" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Joomla Web Development" imageSrc="/images/services/service-inner/custom-webdevelopment-banner.jpg" />
              <div className={Style.ContentDiv}>
                <p>Joomla is an award-winning open-source CMS that is used for the development of highly secure and scalable websites. To add the desired features and characteristics to the online store, it has thousands of extensions available. Joomla is connected to a wide group of coders and developers who improve, whenever required. Joomla is a mobile-friendly CMS, so users should expect this CMS to be a mobile-friendly website. Tech2Globe provides <strong>Joomla CMS development</strong> customers with a complete selection of Joomla web design and production services. An efficient online presence is offered by a <strong>Joomla development services India</strong> professionally built company website and attracts the target audience to the website.</p>
                <p>In Joomla programming, our Joomla developers are professional and talented and can create cost-effective solutions, with years of experience in the Joomla development services, we have supported thousands of customers worldwide with outstanding Joomla CMS solutions. Our developers have extensive experience and expertise in executing any complex or basic customer requirement for Joomla.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Services Tech2Globe Offer For Joomla Web Development</h4>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <div className={Style.ServiceCardIcon}>
                        <Image src="/images/services/service-inner/web.png" alt="	" width={50} height={50} />
                      </div>
                      <div className={Style.ServiceCardContent}>
                        <h5>Joomla Component Development</h5>
                        <p>Our team of experienced Joomla developers produces high-quality and stable websites that boost user experience to keep your website visitors engaged, our device is consistent and punctual delivery.</p>
                      </div>
                    </div>

                    <div className="d-flex gap-3">
                      <div className={Style.ServiceCardIcon}>
                        <Image src="/images/services/service-inner/cms.png" alt="	" width={50} height={50} />
                      </div>
                      <div className={Style.ServiceCardContent}>
                        <h5>Joomla Component Development</h5>
                        <p>We provide custom Joomla plugin creation business support services looking for a customized CMS solution. Joomla has a default module feature. These features are used to render the functionality of the website rich and user-friendly. These components are created and personalized and we transform your website.</p>
                      </div>
                    </div>

                    <div className="d-flex gap-3">
                      <div className={Style.ServiceCardIcon}>
                        <Image src="/images/services/service-inner/mobile-app.png" alt="Joomla CMS Installation" width={50} height={50} />
                      </div>
                      <div className={Style.ServiceCardContent}>
                        <h5>Joomla CMS Installation</h5>
                        <p>Joomla is a versatile CMS that can be used as well as a difficult, interactive one to create a simple website. Our team tailors Joomlato to your unique specifications and according to your budget. Build strong Joomla web applications with this open-source content management platform's built-in validation features.</p>
                      </div>
                    </div>

                    <div className="d-flex gap-3">
                      <div className={Style.ServiceCardIcon}>
                        <Image src="/images/services/service-inner/online-shop.png" alt="Joomla eCommerce Development" width={50} height={50} />
                      </div>
                      <div className={Style.ServiceCardContent}>
                        <h5>Joomla eCommerce Development</h5>
                        <p>Do you want to use Joomla CMS to build your online eCommerce store? With customized themes and features, we can do it. We are the complete solution for your eCommerce business to succeed through our growth.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">


                    <div className="d-flex gap-3">
                      <div className={Style.ServiceCardIcon}>
                        <Image src="/images/services/service-inner/web-design.png" alt="Joomla Template Development" width={50} height={50} />
                      </div>
                      <div className={Style.ServiceCardContent}>
                        <h5>Joomla Template Development</h5>
                        <p>To make your business solution stand out in the crowd, we design and create artistic Joomla CMS templates. Our experts build personalized templates built on the Joomla platform for your website. Such models come in several forms and boost the website.</p>
                      </div>
                    </div>

                    <div className="d-flex gap-3">
                      <div className={Style.ServiceCardIcon}>
                        <Image src="/images/services/service-inner/mobile-app.png" alt="Mobile App Development" width={50} height={50} />
                      </div>
                      <div className={Style.ServiceCardContent}>
                        <h5>Mobile App Development</h5>
                        <p>Our Joomla development company team is an expert in developing notch apps within the time frame for your smartphones. Our strategy for mobile app development progresses to manage your company not only for current growth but also for potential growth.</p>
                      </div>
                    </div>

                    <div className="d-flex gap-3">
                      <div className={Style.ServiceCardIcon}>
                        <Image src="/images/services/service-inner/computer.png" alt="Joomla Integration" width={50} height={50} />
                      </div>
                      <div className={Style.ServiceCardContent}>
                        <h5>Joomla Integration</h5>
                        <p>No matter which platform you need, any Joomla integration requirements can be met by our team of experts.</p>
                      </div>
                    </div>

                    <div className="d-flex gap-3">
                      <div className={Style.ServiceCardIcon}>
                        <Image src="/images/services/service-inner/web-maintenance.png" alt="Joomla Maintenance Service" width={50} height={50} />
                      </div>
                      <div className={Style.ServiceCardContent}>
                        <h5>Joomla Maintenance Service</h5>
                        <p>End of maintenance and service by our competent Joomla developers so that you can handle it on the go. We provide ongoing maintenance and support after the warranty expires, so your website runs properly without any hitches.</p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>How Can Tech2Globe Help You?</h4>
                
                <h5>Excellence Delivered in Time</h5>
                <p>For each level of our Joomla Web development process, we carry out strong testing procedures. We deploy a dedicated QA team on each project, especially during implementation, which ensures bug-free, quality Joomla development.</p>

                <h5>Solutions for Businesses</h5>
                <p>Regardless of their phases, we assist startups of all sizes to nurture, create, and improve their amazing mobile and web ideas.</p>

                <h5>SEO-friendly applications constructed-in</h5>
                <p>Joomla has Search Engine Friendly URLs built-in. Enabling you to select your web pages' meta keywords and meta descriptions. Images Referencing</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h4>Technology Build With Joomla By Tech2Globe</h4>

                    <p className="mb-0"><FaHandPointRight /> eCommerce</p>
                    <p className="mb-0"><FaHandPointRight /> Medical and Healthcare</p>
                    <p className="mb-0"><FaHandPointRight /> Manufacturing</p>
                    <p className="mb-0"><FaHandPointRight /> Real Estate and Property</p>
                    <p className="mb-0"><FaHandPointRight /> Education and E-learning</p>
                    <p className="mb-0"><FaHandPointRight /> Retail and Consumer Sector</p>
                    <p><FaHandPointRight /> Joomla websites for small enterprises</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h4>Our Expertise For Joomla Development</h4>

                    <p className="mb-0"><FaHandPointRight /> Joomla Implementation and Installation Application</p>
                    <p className="mb-0"><FaHandPointRight /> Joomla Core Modules and Plugin Customization</p>
                    <p className="mb-0"><FaHandPointRight /> Joomla Theme Designing and Integration</p>
                    <p className="mb-0"><FaHandPointRight /> Develop Custom Extensions and Plugins</p>
                    <p className="mb-0"><FaHandPointRight /> Joomla Code Snippets Integration and Customization</p>
                    <p><FaHandPointRight /> Joomla Upgrade Management</p>
                  </div>
                </div>

              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Tech2Globe for Joomla Web Development?</h4>
                <p>Our different and unique solutions are specially designed to fit your business requirements and market trends. To manage the content efficiently, we create highly scalable, interactive websites for you. Learning the needs of the customer and customizing the expectations is what we do best. Since 2014, for our global clients, we have built a broad range of websites dealing in various industrial verticals such as education, healthcare, banking, real estate, etc. To provide high-quality, personalized, and customer-centric outcomes, our <strong>Joomla developers</strong> use validated methodology along with their expertise and experience.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Want to grow your enterprise with Tech2Globe?</h4>
                <p>For all your Joomla web application development requirements, Tech2Globe is a one-stop solution. We can do everything from Joomla template design to Joomla custom extension creation and shopping cart integration to the development of multiple product catalogues.</p>
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
