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
  title: "Software Automation Testing Services | Automation Testing - Tech2globe",
  description:
    "Tech2globe Software Testing Automation Services enables you to increase productivity, expands test coverage and achieve faster time-to-market. Our home-grown automation testing framework increases efficiency in the overall process.",
  keywords:
    "Software Automation Testing Services, Automation Testing, Automation Testing Company, QA Automation Services",
  openGraph: {
    title: "Software Automation Testing Services | Automation Testing - Tech2globe",
    description:
      "Tech2globe Software Testing Automation Services enables you to increase productivity, expands test coverage and achieve faster time-to-market. Our home-grown automation testing framework increases efficiency in the overall process.",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/automation-testing-services",
    type: "website"
  },
  twitter: {
    card: "Tech2Globe",
    title: "Software Automation Testing Services | Automation Testing - Tech2globe",
    description:
      "Tech2globe Software Testing Automation Services enables you to increase productivity, expands test coverage and achieve faster time-to-market. Our home-grown automation testing framework increases efficiency in the overall process."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/automation-testing-services"
  }
};

const pageHeaderData = {
  title: "Automation Testing Services",
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


export default function AutomationTesting() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Automation Testing Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Automation Testing Services" imageSrc="/images/services/web-and-mobile-testing-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p> The <strong>Automation development service</strong> of Tech2Globe offers solutions for complex problems in the industry, IT and DevOps. Using the latest tools for automation and orchestration, such as StackStorm, ServiceNow, Puppet, Ansible, and Terraform, using languages such as Python, JavaScript, and Ruby, Encore will introduce various solutions for several different problems associated with IT.</p>
                <p>In today&apos;s modern business environment, automated software testing is the key to success. To get it right, you need to hire top testers who use the latest technologies to introduce creative automation frameworks. As experts in test automation, Tech2Globe provides a broad range of <strong>test automation services</strong> to fulfil the objective of increasing speed across the lifecycle of software development.</p>
                <p>By designing an Automation plan consistent with enterprise priorities, our test automation solutions support your business goals. To suggest an optimized product inventory to fit your needs and budget, we perform a detailed tool evaluation exercise.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="mb-3">Services that we provide in test automation</h4>
                <hr />
                <p>The <strong>Automation Testing Services</strong> of Tech2Globe is a full-stack approach dealing with test automation consultancy, best practices procedures and the necessary technologies to improve the efficiency of the application industry independently.</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Web Automation Testing Services</h6>
                    <p>
                      In a fully automated environment, our experts can assess the functionality of websites and applications. To ensure in-depth test coverage, speed and accuracy, we also design and conduct cross-device, cross-browser, cross-platform, compatibility tests.
                    </p>

                    <h6>Mobile Automation Testing Services</h6>
                    <p>
                      To automatically test complex mobile applications across all major mobile devices and platforms, our QA experts use frameworks. To build and deploy usable, system integration, UI level test suites for disclosing bugs and vulnerabilities of your mobile app, we use automated testing tools.
                    </p>

                    <h6>Desktop Automation Testing Services</h6>
                    <p>
                      Using commercial and open-source instruments, we can provide desktop automation testing services. From the setup of the test automation system to the automated production of scripts, we can all understand the application to accelerate regression test efforts cost-effectively.
                    </p>

                    <h6>API Automation Testing Services</h6>
                    <p>
                      Our experts use the automation system for API level tests to ensure that the APIs perform properly and help avoid technical defects in the development cycle.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Automated Regression Service</h6>
                    <p>
                      By running the test scripts to get accurate results, quickly find & fix problems and increase your time-to-market, We&apos;ll help you gain web, software, web services, mobile apps, APIs, and more automated regression testing services.
                    </p>

                    <h6>Performance Testing</h6>
                    <p>
                      We use numerous advanced tools, such as LoadRunner, open-source Tech Stacks, to define, design new cases, run test scripts and help set software application benchmarks before the release of the app in the development process.
                    </p>

                    <h6>Localization Testing</h6>
                    <p>
                      Our experts find software bugs, including usability, protection, reliability, performance, UI, front-end and back-end, in all aspects of a software product. Our team tests user interfaces translation, content, warning and error messages, and helps validate the documents.
                    </p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="mt-3 mb-3">Our Test Automation services include</h4>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p class="mb-0"><FaHandPointRight /> Selection of useful test tools</p>
                    <p class="mb-0"><FaHandPointRight /> Identifying test conditions that should be automated</p>
                    <p class="mb-0"><FaHandPointRight /> Setting up the Automation test environment</p>
                    <p class="mb-0"><FaHandPointRight /> Compatibility with a test browser and device features</p>
                    <p class="mb-0"><FaHandPointRight /> Software testing on multiple platforms with different configurations</p>
                    <p class="mb-0"><FaHandPointRight /> Generation of Test Report for Automation</p>
                    <p class="mb-0"><FaHandPointRight /> Maintenance of Test Script</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Why Tech2Globe Test Automation Services?</h4>
                <hr />
                <h6>Strong Quality Engineering Expertise</h6>
                <p>To help you achieve efficient and predictable implementation and release readiness, we have a dedicated QA team of quality assurance engineers, inspection experts, accredited analysts and quality management specialists following industry-standard software testing models and techniques.</p>

                <h6>Clienteles across diverse geographies</h6>
                <p>We provide customers across different domestic and international geographies with tools and platform-enabled services and solutions.</p>

                <h6>On-time Delivery</h6>
                <p>Under the timeline and with excellent efficiency, we deliver all our projects.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Get a Valuable Automation testing services from Tech2Globe</h4>
                <p>Tech2Globe is one of the leading <strong>automation testing companies</strong> that creates the value you always wanted through test automation, with the experience of advising customers on test automation and architecting their automation journey.</p>
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
