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
  title: "Emerging Technology Services Solutions With Tech2Globe",
  description:
    "Explore Tech2Globe’s comprehensive solutions in emerging technologies. Stay ahead with our innovative services tailored to your business needs.",
  openGraph: {
    title: "Emerging Technology Services Solutions With Tech2Globe",
    description:
      "Explore Tech2Globe’s comprehensive solutions in emerging technologies. Stay ahead with our innovative services tailored to your business needs.",
    url: "https://www.tech2globe.com/emerging-technology",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/emerging-technology",
  },
};

const pageHeaderData = {
  title: "Emerging Technology",
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


export default function EmergingTechnology() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Emerging Technology" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Emerging Technology" imageSrc="/images/services/emerging-technologies-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p><strong>Emerging Technology in India</strong> can disrupt and almost overnight change a market. A core part of the business strategy of any organization should be new technology. Tech2Globe&apos;s team offers specialist guidance, leadership, and insight. For our customers, we make technology advancement possible, collaborating to guarantee excellent delivery.</p>
                <p>No company can afford to disregard the increasingly increasing technology development environment of emerging technologies that will influence any aspect of the business landscape. Our comprehensive reports help you stay ahead of the curve so that you know how to counter risks and take advantage of new opportunities ranging from technologies to Artificial Intelligence and Machine Learning and Augmented Reality.</p>
                <ul>
                  <li>Analysis of new technologies and potentially disruptive ones</li>
                  <li>Proprietary barometers that easily demonstrate the value of each technology field and the pace of progress</li>
                  <li>Graphical overview of the <strong>Blockchain and Smart Contract Audit</strong></li>
                  <li>Analyses of Day in Life&apos; to illustrate how innovations could be implemented in the real world.</li>
                </ul>
                <p>The term Emerging Technologies includes new and potentially powerful technologies that enable organizations to achieve business excellence through enabling technology. We have identified five strategic focus areas at Tech2Globe in the emerging technology space that are expected to produce substantial social and economic benefits. As follows, the priority areas are:</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className={Style.ContentDiv}>
                      <h6>Robotic Process Automation</h6>
                      <p>The way companies manage everything from finance and accounting to logistics, and human resources are quickly transformed by Robotic Process Automation (RPA). RPA solutions unlock the opportunity to do things quicker, easier, and cheaper compared to what they used to be. Today, with fast ROI, these innovations have become easy to access and deploy.</p>

                      <p>Automated business processes assure consistency, effectiveness, and efficiency. Our RPA solutions are governed not only by technology but also by the business logic of Tech2Globe and your inputs. In automating the business processes, we will help you and incorporate human activities into digital structures.</p>

                      <h6>Augmented Reality (AR) & Virtual Reality (VR)</h6>
                      <p>AR/VR-based technologies allow various proportions of the virtual and real-world to be combined to achieve a degree of immersion that no virtual equipment can offer. They boost the perception of the natural world of stuff in our surroundings and beyond.</p>

                      <p>AR/VR can be embraced by companies&apos; mainstream business criteria, including training, communications, customer support, digital marketing, simulation of industrial & operations, sports science, etc.</p>

                      <h6>Blockchain</h6>
                      <p>Technology tools are used by Blockchain, a distributed electronic ledger, to record and validate transactions. It is possible to share the event record generated in the Blockchain between multiple parties. It is necessary to remember that details can not be changed until inserted into this ledger. It has been assessed that the mechanism is accurate and anonymous.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className={Style.ContentDiv}>
                      <h6>Internet of Things (IoT)</h6>
                      <p>IoT is a network where wireless or wired internet connections link physical objects (with sensors inside or connected to them to the internet. Devices that are IoT enabled may be remotely monitored or managed by the user. One&apos;s imagination limits the applicability of the IoT. Thus, offering endless possibilities, we at Tech2Globe are here to assist in this transformation at every step. Industrial IoT in the industry refers to its use in the industrial and manufacturing industries.</p>

                      <h6>Artificial Intelligence & Machine Learning</h6>
                      <p>The task of crunching large data sets, finding patterns, and developing new solutions by applying the resulting knowledge is machine learning. When the machine discovers patterns using a complex collection of algorithms, predictions are made. Neural networks are constructs of the various algorithms used in Machine Learning that can imitate the human brain at a superficial stage.</p>
                      <p>Artificial intelligence is the machine learning implementation of neural network-based algorithms. At times, artificial intelligence is an alternative solution to machine learning when business cases become too complicated.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Choose Tech2Globe?</h4>
                <p>Tech2Globe can help you cut through the clutter of technology so that you can concentrate on the right long-term investments. We can help you understand how digital clients can better be advertised, sold, and served. We will collaborate with you to develop a multi-year Strategy & Implementation Plan for New Technology that is closely related to your overall business priorities and objectives and ensures the long-term digital sustainability of your company. We are ideally qualified to make this difference by:</p>

                <p className="mb-0"><FaHandPointRight /> Proven methodologies of execution and support</p>
                <p className="mb-0"><FaHandPointRight /> An approach focused on metrics to drive good performance</p>
                <p className="mb-0"><FaHandPointRight /> 100% objectivity from all technology providers & execution partners</p>
                <p className="mb-0"><FaHandPointRight /> An interaction model that uses experienced administrators, not mid-to-lower tier workers</p>
                <p><FaHandPointRight /> A tradition of success with world-class, multinational organizations in B2B and B2C</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Emerging Technology Development with Tech2Globe</h4>
                <p>We have a dedicated team working on emerging technologies that conceptualize and create <strong>big data and securing the data lake</strong> use cases for the enterprise, <strong>security for smart City</strong> social & economic benefits of public and private sector organizations.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>We Expertise in All Major Technologies</h2>
                <p>Tech2Globe is a top data scrubbing service provider. In addition to data cleansing services, our international team of data scrubbing professionals can help with specialized tasks such as visual analytics, industry analysis and packaging design services and uses following tools:</p>
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
