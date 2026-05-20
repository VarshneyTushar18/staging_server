import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";
import { FaHandPointRight } from "react-icons/fa";


export const metadata = {
  title: "Best Manual Testing Services | Tech2globe",
  description:
    "At TestingXperts, we provide best manual testing services and solutions to our clients in order to deliver flawless performance of projects with zero defects.",
  keywords:
    "Shopify Development Company, Shopify development services, Shopify eCommerce store development services, Shopify SEO Services, Shopify Theme Development",
  openGraph: {
    title: "shopify Development company",
    siteName: "Tech2Globe web Solutions LLP",
    description:
      "At TestingXperts, we provide best manual testing services and solutions to our clients in order to deliver flawless performance of projects with zero defects.",
    url: "https://www.tech2globe.com/manual-testing-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Manual Testing Services | Tech2globe",
    description:
      "At TestingXperts, we provide best manual testing services and solutions to our clients in order to deliver flawless performance of projects with zero defects.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/manual-testing-services",
  },
};

const pageHeaderData = {
  title: "Manual Testing Services",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Automation", path: "/automation-testing-services" },
  { id: 2, name: "Manual Testing", path: "/manual-testing-services" },
  { id: 3, name: "E-Commerce", path: "/ecommerce-testing-services" },
  { id: 4, name: "Mobile App", path: "/mobile-application-design-services" },
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


export default function ManualTesting() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Manual Testing Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Manual Testing Services" imageSrc="/images/services/web-and-mobile-testing-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Businesses face specific challenges in functional testing to achieve the right&apos; level of output for software as applications and systems become more complex. Corporations need the right domain expertise with robust testing processes and technology experience. For carrying out successful functional testing.</p>

                <p>To ensure that the product is produced without defects in an accelerated time frame, Tech2Globe a valuable <strong>Manual testing company</strong> brings a unique combination of testing processes, tools and technology experience, and domain awareness. With a base of mature test procedures, in-house accelerators, and knowledge with all industry-leading functional testing tools, Tech2Globe offers end-to-end <strong>Manual testing services</strong> for your practical testing needs.</p>

                <p>From creating an optimized test plan to post-production support, we take complete responsibility for the testing activities. We adopt a user-centric approach to testing, delivering our engagements with continuous value improvement. We ensure that the business requirements are fully traceable to the test cases designed and executed for comprehensive test coverage. We provide detailed reporting with personalized dashboards at regular intervals as a professional <strong>Manual testing company</strong> to keep you on top of the success and defects of the testing.</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className={Style.ContentDiv}>
                      <h4 className="pb-3">Manual Software Testing Services</h4>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="card text-center mb-3 h-100">
                      <img className="card-img-top ls-is-cached lazyloaded" alt="Manual Testing for Mobile" src="/images/services/service-inner/mobile-app-testing.jpg" />
                      <div className="card-body">
                        <h5 className="card-title h5">Manual Testing for Mobile</h5>
                        <p className="card-text mb-0">Do you have a mobile app that needs testing? We have extensive experience on all platforms and the most popular devices in <strong>Mobile applications testing. Manual software testing</strong> helps to simulate user behaviour when using your mobile app and to detect the most common errors before testing for automation. Our specialists can cope with this task effectively and prepare your product for the next stages of testing.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="card text-center mb-3 h-100">
                      <img className="card-img-top ls-is-cached lazyloaded" alt="Manual Testing for Desktop Application" src="/images/services/service-inner/desktop-applications.png" />
                      <div className="card-body">
                        <h5 className="card-title h5">Manual Testing for Desktop Application</h5>
                        <p className="card-text mb-0">Our professional QA team will manually check several of your desktop app features under various conditions. There are several benefits to <strong>best QA Manual software testing services</strong>, one of which is versatility in data sets and testing the results during the testing process. For your desktop applications, we provide quality <strong>software manual testing services</strong> and are ready to apply all our experience to give you the best result.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="card text-center mb-3 h-100">
                      <img className="card-img-top ls-is-cached lazyloaded" alt="Manual Testing for Web Application" src="/images/services/service-inner/web-application-development.jpg" />
                      <div className="card-body">
                        <h5 className="card-title h5">Manual Testing for Web Application</h5>
                        <p className="card-text mb-0">Finding bugs still at the development stage of your web app will reduce the cost of repairing them, improving the productivity and efficiency of the application as well. Applying the latest <strong>Manual testing service</strong> at work, we test functionality, usability, security, and other aspects. Trust our trained testing specialists with manual QA testing to be confident in the high quality of your web service!</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3 pb-3">Tech2Globe’s Expertise in Manual Testing Service</h4>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Expertise in a large variety of applications, such as web, desktop, mobile, packaged products, etc.</p>
                    <p className="mb-0"><FaHandPointRight /> Support different methodologies of development, such as Agile, Waterfall, DevOps, and Hybrid models and communicate with the development teams.</p>
                    <p className="mb-0"><FaHandPointRight /> Organize research methodology and arrangement of test cases to facilitate repeatability.</p>
                    <p className="mb-0"><FaHandPointRight /> Techniques for test criteria to ensure Bi-Directional traceability.</p>
                    <p className="mb-0"><FaHandPointRight /> Expertise in all leading tools for the management of application lifecycles, test management, defect management, management of test data, etc.</p>
                    <p className="mb-0"><FaHandPointRight /> Structured project communications, including regular, weekly, and monthly progress updates via a personalized dashboard with comprehensive test execution status and analysis.</p>
                  </div>
                </div>
              </div>


              <div className={Style.ContentDiv}>
                <h4 className="pt-3 pb-3">Why Choose Tech2Globe for Manual Testing Service?</h4>
                <h5>Technical Expertise</h5>
                <p>With only a single push of code and automated rollbacks, we have demonstrated experience in helping businesses implement Agile, and ship code into the market in style. For your benefit, qualified expertise in the handling of open source and commercial DevOps toolsets would work.</p>

                <h5>Industry Expertise</h5>
                <p>Tech2Globe experts have industry domain experience acquired from serving e-Commerce e-Learning, gaming, high-tech, media, publishing and other sectors that are widely and digitally transforming their businesses.</p>

                <h5>Quality Testers</h5>
                <p>Our testers are coders at the expert level and are self-motivated, result-oriented and advisory.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3 pb-3">Hire Manual Tester from Tech2Globe</h4>
                <p>Tech2Globe, <strong>a best Manual software testing service provider company</strong>, offers some of the best testing experts in the industry with years of experience and a track record behind us as a manual testing company. We benefit from a well-versed team of testers with the latest research methods, time-tested methodologies for testing, and a solid track record.</p>
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
