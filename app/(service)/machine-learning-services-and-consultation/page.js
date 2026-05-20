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
  title: "Machine Learning Services And Consultation Services - Tech2globe",
  description:
    "With our Machine Learning Development, we make your applications smarter. We provide reliable Machine Learning Services And Consultation to help your business thrive.",
  keywords:
    "Machine Learning Services, Machine Learning Consultation, ML Development Services, Machine Learning Company",
  openGraph: {
    title: "Machine Learning Services And Consultation Services - Tech2globe",
    description:
      "With our Machine Learning Development, we make your applications smarter. We provide reliable Machine Learning Services And Consultation to help your business thrive.",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/machine-learning-services-and-consultation",
    type: "website"
  },
  twitter: {
    card: "Tech2Globe",
    title: "Machine Learning Services And Consultation Services - Tech2globe",
    description:
      "With our Machine Learning Development, we make your applications smarter. We provide reliable Machine Learning Services And Consultation to help your business thrive."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/machine-learning-services-and-consultation"
  }
};

const pageHeaderData = {
  title: "Machine Learning Services And Consultation",
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


export default function MachineLearningServicesAndConsultation() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Machine Learning Services And Consultation" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Machine Learning Services And Consultation" imageSrc="/images/services/emerging-technologies-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Immersive experience driven by personalization and intelligent operations opens up new possibilities for any industry in the age of connected devices. Today many organizations rely on machine learning to rely on data trends for the tracking, analysis, and prediction of customer/machine behavior.</p>
                <p><strong>Machine Learning Services and Consultation</strong> from Tech2Globe help management to create customized solutions based on proprietary algorithms/frameworks or open source that process data and run sophisticated cloud and edge algorithms. That means that organizations make quicker decisions, improve efficiency, simplify business processes, and identify defects more quickly.</p>
                <p>Equipment manufacturers like you are deluged by growing information gathered from IoT sensors, machines, and businesses and intelligent use of such data can help optimize business operations, increase productivity, and allow accelerated business outcomes. However, integrating machine learning applications in your company is a crucial challenge such as predictive analysis, asset health monitoring and customer analytics.</p>
                <p>Our experts assist these companies in the field of machine learning development. Our roadmap and development strategy for the study are established. Our teams help you during your data travel, from navigation to complicated data challenges and development of a prototype to company-wide learning.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="mb-3">Machine Learning Services</h4>
                <p>The technical experts at Tech2Globe give technical and business consultation on solutions for machine learning based on your specific needs, case implementations and particularities of your datasets.</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5 className="mb-3">Our Machine Learning Consulting Services</h5>
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/data-analysis.png" width={55} height={55} alt="Conducting Exploratory Data Analysis (EDA)" />
                      <div className="context">
                        <h5>Conducting Exploratory Data Analysis (EDA)</h5>
                        <p>Starting from EDA, we engage in step-by-step collaboration with organizations, beginning with modelling and preparation. With EDA, our customers can receive useful reports and recommendations based on their results.</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/data-collection.png" width={55} height={55} alt="Identification of issues and data collection opportunities" />
                      <div className="context">
                        <h5>Identification of issues and data collection opportunities</h5>
                        <p>For further research by companies, we are well aware of the problems of data processing and data storage. We enable organizations to define critical issues and identify relevant opportunities by compiling data collection requirements.</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/machine-learning.png" width={55} height={55} alt="Implementing Machine Learning Algorithms" />
                      <div className="context">
                        <h5>Implementing Machine Learning Algorithms</h5>
                        <p>Whatever the problems and tasks of a client, our team is here to help integrate machine learning algorithms in your business process. We provide the best method for the implementation and processing of the data submitted by evaluating the customer information.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h5 className="mb-3">Our Machine Learning Development Services</h5>
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/deep-learning.png" width={55} height={55} alt="" />
                      <div className="context">
                        <h5>Deep Learning Solutions Development</h5>
                        <p>By improving the performance of artificial neural networks driven algorithms, we provide our clients with quality <strong>Machine Learning services & solutions</strong> and significantly improving business metrics.</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/enterprise-ml.png" width={55} height={55} alt="Enterprise Machine Learning as a Service" />
                      <div className="context">
                        <h5>Enterprise Machine Learning as a Service</h5>
                        <p>Our selected Machine Learning service providers is designing machine learning tools for businesses to help company owners simplify and improve business processes by extracting useful insights from raw data with the elimination of human interference.</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/web-design.png" width={55} height={55} alt="Custom Web Application Development" />
                      <div className="context">
                        <h5>Custom Web Application Development</h5>
                        <p>Our customers receive expert support for machine-specific learning services to boost their business performance and produce unseen outcomes previously.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="mt-3 mb-3">Our Expertise in Machine Learning</h4>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Vertical experience in the vast and deep industry.</p>
                    <p className="mb-0"><FaHandPointRight /> Collection and exploration of detailed data.</p>
                    <p className="mb-0"><FaHandPointRight /> Services of expert evaluation strategies/opportunity.</p>
                    <p className="mb-0"><FaHandPointRight /> Comprehensive business case and solutions for road mapping.</p>
                    <p className="mb-0"><FaHandPointRight /> Full-stack application development.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Teams in-house implementation of machine learning technology</p>
                    <p className="mb-0"><FaHandPointRight /> Services for measuring importance and efficiency</p>
                    <p className="mb-0"><FaHandPointRight /> Experienced consultants provide strategies to improve business processes.</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="mt-3 mb-3">Why Choose Tech2Globe for Machine Learning Services?</h4>
                <p>Here are just a few of how we stand out as a company in the field of machine learning and the development of digital experiences.</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Machine learning on structured and unstructured data supervised/semi-supervised/unsupervised.</p>
                    <p className="mb-0"><FaHandPointRight /> Tech2Globe&apos;s&apos; deep learning & AI solutions enable companies to identify highly-customized solutions running on advanced machine learning.</p>
                    <p className="mb-0"><FaHandPointRight /> Model deployment and checking performance with such tools as TensorBoard and What-If.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Models: Decision Trees, Regression, Hidden Markov, Inception, Identification of artefacts, NLP.</p>
                    <p className="mb-0"><FaHandPointRight /> DataBase: SQL, NoSQL: image, sensor (accelerometer, microphone etc.) data source, audio, video, text support database, database: CSV, Excel and data type:</p>
                    <p className="mb-0"><FaHandPointRight /> Model development, training, optimization & validation via TensorFlow, SparkML, OpenCV and Python, C++, Java-like languages</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Looking for a Valuable Machine Learning Agency?</h4>
                <p>Tech2Globe is a leading company, and machine learning has given you another field in which digital technologies can be created and distributed, eventually creating new value for customers.</p>
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
