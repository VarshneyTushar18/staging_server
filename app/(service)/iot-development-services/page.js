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
  title: "IOT Application Development | IOT App Development Services -Tech2globe",
  description:
    "We are one of the leading IoT service providers. At Tech2globe, we offer a complete suite of IoT consulting services and solutions to empower businesses of all sizes.",

  openGraph: {
    title: "IOT Application Development | IOT App Development Services -Tech2globe",
    description:
      "We are one of the leading IoT service providers. At Tech2globe, we offer a complete suite of IoT consulting services and solutions to empower businesses of all sizes.",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/iot-development-services",
  },

  twitter: {
    card: "Tech2Globe",
    title: "IOT Application Development | IOT App Development Services -Tech2globe",
    description:
      "We are one of the leading IoT service providers. At Tech2globe, we offer a complete suite of IoT consulting services and solutions to empower businesses of all sizes.",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/iot-development-services",
  },
};

const pageHeaderData = {
  title: "IoT Development Services",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Emerging Technologies", path: "/emerging-technology" },
  { id: 2, name: "AI Chatbot Development", path: "/ai-chatbot-development" },
  { id: 3, name: "AR / VR Development", path: "/ar-vr-app-development-company" },
  { id: 4, name: "AWS Development", path: "/aws-development-services" },
  { id: 5, name: "BlockChain Development", path: "/blockchain-development-services" },
  { id: 6, name: "IoT Development", path: "/iot-development-services" },
  { id: 7, name: "iWatch App Development", path: "/iwatch-application-development-services" },
  { id: 8, name: "Wearable App Development", path: "/wearable-app-development-services" },
  { id: 9, name: "Machine Learning", path: "/machine-learning-services-and-consultation" },
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


export default function IotDevelopment() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Iot Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Iot Development Services" imageSrc="/images/services/emerging-technologies-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Businesses can leverage our IoT solutions and services to improve operating performance, boost customer experiences and develop a digital organization by integrating people, processes and knowledge.</p>
                <p>To support smart initiatives in different industries from security to home automation to industrial IoT that can transform business activities and improve people&apos;s lives, Tech2Globe provides business and consumer Internet applications.</p>
                <p>We create intelligent, connected products, using advanced analytics and machine learning to help you become more effective, delivering integrated IoT <strong>application development service</strong>, and managing them.</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className={Style.ContentDiv}>
                      <h4>Our IoT development services</h4>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className={Style.ContentDiv}>
                      <h6>Business Pain Point Identification</h6>
                      <p>The recognition of pain points is a significant challenge for every organization. It may be a difficult challenge to identify the places where the Industrial Internet of Things (IIoT) can be used. We help you identify the pain points for the company, where IIoT can be used as a solution.</p>

                      <h6>Creating an IoT Roadmap according to Market Outcomes</h6>
                      <p>To be successful, each IoT implementation requires a roadmap. To keep the company performance in mind, we build an action plan to establish an industrial Internet of Things project from scratch to implementation.</p>

                      <h6>User-Centric Business Process Transformation</h6>
                      <p>With user-centric focus, we design and reshape the business processes. Our IoT consulting service incorporates a range of technology and focuses on easy to use projects, automates and streamlines your IoT journey</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className={Style.ContentDiv}>
                      <h6>Proof of Concept and Technology Roadmap</h6>
                      <p>Our <strong>IoT development services</strong> involve designing a POC Strategy to support organizational priorities and business requirements in the context of the proposed product or service. Our IoT consulting services include the development of a technology roadmap for strategic and long-term planning and short and long-term priorities for an organization with unique technical solutions.</p>

                      <h6>Custom Application Development</h6>
                      <p>We give your controllers IoT consulting services. Only connect your control with the cloud. You have to do everything. Our qualified IoT team builds tailor-made apps that fit your specific target. For the data obtained, we deliver comprehensive analytics. With the one strong programme, have full control of your controller.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Our Expertise in IoT Development Services</h4>
                <p>Tech2Globe a trusted <strong>IoT app development service in India</strong> delivers end-to-end <strong>IoT application development services</strong> and helps companies find new applications for custom solutions.</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/consulting-icon-new.png" width={55} height={55} alt="IoT Consulting" />
                      <div className="context">
                        <h5>IoT Consulting</h5>
                        <p>Strategize with the IoT-company consulting services of Tech2Globe. We make it easier to assess your corporate IoT preparation, build a roadmap, use case description, design solution and marketing strategy.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/data-analytics.png" width={55} height={55} alt="Data Analytics" />
                      <div className="context">
                        <h5>Data Analytics</h5>
                        <p>Unleash the full potential of real-time data obtained with advanced analytics and machine learning from connected devices. Through using efficient analytical engines, we can use analytical intelligence close to IoT devices in almost real-time.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/testing.png" width={55} height={55} alt="" />
                      <div className="context">
                        <h5>IoT Testing</h5>
                        <p>Hire top developers for IoT software from us who make sure the hardware, the software and an actual connected experience work together. We have the know-how to provide thorough and affordable IoT research.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/extension.png" width={55} height={55} alt="IoT Extension" />
                      <div className="context">
                        <h5>IoT Extension</h5>
                        <p>By having you select sensors, speedy model prototyping, full-stack creation and security logs, and management of firmware updates, we can transform existing hardware into smart IoT-enabled devices.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Reasons for choosing Tech2Globe</h4>
                <p>Internet of Things is a highly dynamic market. It provides endless business opportunities and is ensured that every business enhances productivity, accountability and security. However, the implementation of IoT also includes addressing a variety of difficulties — problems with communication, lack of guidelines, security issues, etc. To resolve these challenges and create genuinely good IoT systems, we rely on over ten years of experience and in-depth knowledge of business and technologies.</p>

                <h6>IoT Center of Excellence:</h6>
                <p>By taking top IoT experts to a dedicated Center of Excellence (CoE), our customers help clear project obstacles quickly. Our IoT CoE contains experienced professionals who can take care of your business concerns in addition to their daily activities.</p>

                <h6>Vast AI and ML skillset:</h6>
                <p>To develop computer algorithms for the prediction and risk elimination, we use the mathematical knowledge and scientific method. Our R&D skills range from analysis to the development and incorporation of full AI and ML models in your business solution.</p>

                <h6>Ingenious UI/UX designers:</h6>
                <p>Our design team is positively associated with engineering processes to ensure consistent user experience for Internet applications, mobile solutions, human-machine interfaces and other user-orientated products is closely aligned with our front-end developers.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Hire Tech2Globe to Get Valuable IoT Development Services and Solutions</h4>
                <p>We have an expert team with outstanding experience in the field. Without compromising on quality, we deliver cost-efficient solutions. We render enterprise-grade wearable applications with our IoT expertise, and you can count on us to find the most innovative solutions.</p>
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
