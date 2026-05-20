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
  title: "Azure Development Services | Leading Microsoft Partner",
  description:
    "Microsoft Azure is a great tool for process automation. We provides azure development services in USA, UK, Germany, India and other countries.",
  openGraph: {
    title: "Azure Development Services | Leading Microsoft Partner",
    description:
      "Microsoft Azure is a great tool for process automation. We provides azure development services in USA, UK, Germany, India and other countries.",
    url: "https://www.tech2globe.com/azure-development-services",
    siteName: "Tech2Globe web Solutions LLP",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "DAzure Development Services | Leading Microsoft Partner",
    description:
      "Microsoft Azure is a great tool for process automation. We provides azure development services in USA, UK, Germany, India and other countries."
  },
  alternates: {
    canonical:
      "https://www.tech2globe.com/azure-development-services"
  }
};

const pageHeaderData = {
  title: "Azure Development Services",
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


export default function AzureDevelopment() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Azure Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Azure Development Services" imageSrc="/images/services/service-inner/custom-webdevelopment-banner.jpg" />

              <div className={Style.ContentDiv}>
                <p>Tech2Globe is a leading development company for Azure applications and has a large team of Azure experts who can deliver immersive <strong>Azure Development Services</strong> with their valuable experience and knowledge. With the finest software architectures, we build Azure apps and deploy extensive <strong>Azure cloud development services</strong> for different industries & verticals.</p>

                <p><strong>Hire Azure Developers</strong> for an incredibly easy-to-use cloud computing infrastructure that helps, in addition to deploying and managing, cloud-based applications to be created. You can design, create, and run business development software. We offer strategy architects, pre-built development methodologies, and an open platform to explore Azure operations to accelerate time-to-value.</p>

                <p>We at Tech2Globe understand your company's specific requirements and offer full <strong>Azure Development Services</strong> to match them. In a stable cloud environment, we provide sophisticated <strong>Microsoft Azure development services</strong> that involve developing and deploying applications. Additionally, along with the PaaS, IaaS, and SaaS models, we can apply highly sophisticated Azure production solutions.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Benefits of Microsoft Azure Development Services</h4>
                <p>Delivering high deployment, operational, and scalability speeds. Faster cycles of growth that increase the agility of a company. Enables global scope with the huge global presence of Microsoft. The world of integrated production makes it a developer-friendly—centralized distribution pipeline under one umbrella with all the equipment. Inside the cloud environment, high standards of protection and privacy. A model of pay-as-you-go makes it cost-effective to scale up or down to meet changing requirements.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="mb-3">Our Windows Azure Application Development Services</h4>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-4 shadow-sm h-100">
                      <div className="d-flex gap-3">
                        <div className={Style.ServiceCardIcon}>
                          <Image src="/images/services/service-inner/custom-app-dev.png" alt="Custom Application Development" width={65} height={65} />
                        </div>
                        <div className={Style.ServiceCardContent}>
                          <h5 className="fw-medium">Custom Application Development</h5>
                          <p className="mb-0">Add an extra advantage to your business with agile, flexible, and value-driven custom product creation for web, mobile, cloud, and desktop applications customized just for your company.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-4 shadow-sm h-100">
                      <div className="d-flex gap-3">
                        <div className={Style.ServiceCardIcon}>
                          <Image src="/images/services/service-inner/security-azure.png" alt="AZURE Security" width={65} height={65} />
                        </div>
                        <div className={Style.ServiceCardContent}>
                          <h5 className="fw-medium">AZURE Security</h5>
                          <p className="mb-0">In every aspect of Azure, Tech2Globe is your go-to technology partner to provide the necessary protection. By securing your data applications, we assist you with infrastructure by providing you with built-in security services to detect and address any emerging threats.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-4 shadow-sm h-100">
                      <div className="d-flex gap-3">
                        <div className={Style.ServiceCardIcon}>
                          <Image src="/images/services/service-inner/machine-learning.png" alt="AZURE Stack Services" width={65} height={65} />
                        </div>
                        <div className={Style.ServiceCardContent}>
                          <h5 className="fw-medium">AZURE Stack Services</h5>
                          <p className="mb-0">Stay tuned with the technology that is here to help you in your on-site process gets the requisite boost in performance, flexibility, and productivity. AI and Machine Learning Services a step forward in time, with our integrated Ai and Machine learning techniques to plan, build, and experiment with business models at cloud scale, get advanced analytics and data management.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-4 shadow-sm h-100">
                      <div className="d-flex gap-3">
                        <div className={Style.ServiceCardIcon}>
                          <Image src="/images/services/service-inner/QL.png" alt="AZURE QL" width={65} height={65} />
                        </div>
                        <div className={Style.ServiceCardContent}>
                          <h5 className="fw-medium">AZURE QL</h5>
                          <p className="mb-0">The Azure SQL Database is a cloud database that allows you to use the familiar SQL database engine to accelerate app data. Without disrupting your product and operation, we help you migrate your SQL Server databases.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-4 shadow-sm h-100">
                      <div className="d-flex gap-3">
                        <div className={Style.ServiceCardIcon}>
                          <Image src="/images/services/service-inner/cognitive-services.png" alt="Cognitive Services" width={65} height={65} />
                        </div>
                        <div className={Style.ServiceCardContent}>
                          <h5 className="fw-medium">Cognitive Services</h5>
                          <p className="mb-0">We are an Azure software company that offers you the ability to change your apps, smart algorithm websites that provide you with high-end BI solutions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-4 shadow-sm h-100">
                      <div className="d-flex gap-3">
                        <div className={Style.ServiceCardIcon}>
                          <Image src="/images/services/service-inner/mobile-app.png" alt="Mobile App Services" width={65} height={65} />
                        </div>
                        <div className={Style.ServiceCardContent}>
                          <h5 className="fw-medium">Mobile App Services</h5>
                          <p className="mb-0">At Tech2Globe, we provide your enterprise with outstanding mobile app solutions with MBaaS capabilities on a cloud platform to gain the needed mobility in your enterprise processes.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Choose Tech2Globe?</h4>
                <p>The total range of services access the full spectrum of Microsoft Azure services for all your company's cloud-related requirements</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5>Hybrid IT Environment</h5>
                    <p>Discover the flexibility of a hybrid IT environment, which brings together the on-premises IT resources and the cloud.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5>Full Experience</h5>
                    <p>Improve the company with our vast experience working with clients from different verticals and varying infrastructure demands.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5>Committed Team</h5>
                    <p>Have a completely committed team of specialist advisors and specialists working exclusively on your project.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5>Client-centric Strategy</h5>
                    <p>Get custom Azure production services and solutions that we tailor to your specifications.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5>Verified Expertise</h5>
                    <p>Improve your company with our demonstrated experience in empowering companies with advanced solutions from Microsoft Azure.</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Hire Experienced Azure Developers from Tech2Globe</h4>
                <p>With an incredible support service, we offer Azure application development services at competitive rates.
                  We have in-depth programming abilities and are results-focused with about ten years of experience in Azure application development.</p>
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
