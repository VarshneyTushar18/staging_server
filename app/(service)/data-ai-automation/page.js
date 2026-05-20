import Style from "./style.module.css";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import "./custom.css";
import FaqSection from "@/app/components/ai-pages/faqs/faqsection";
import CTASection from "@/app/components/ai-pages/cta/CTASection";
import {
  FaChartLine,
  FaClipboardList,
  FaCloudUploadAlt,
  FaComment,
  FaHeadset,
  FaProjectDiagram,
  FaRobot,
  FaBrain,
  FaUserCheck,
  FaCoins,
  FaTrophy,
  FaRocket,
  FaCog,
  FaFileContract,
  FaUsersCog,
  FaCode,
  FaVial,
  FaSyncAlt,
} from "react-icons/fa";
import ServiceSlider from "@/app/components/ai-pages/ServiceSlider/ServiceSlider";
import IndustryApplication from "@/app/components/ai-pages/IndustryApplication/IndustryApplication";
import FutureSlider from "@/app/components/ai-pages/FutureSlider/FutureSlider";

export const metadata = {
  title: "Data & AI Automation | Tech2Globe",
  description:
    "Empower your business with Data & AI Automation solutions that streamline workflows, improve decision making, and unlock operational efficiency.",
  keywords: "Data AI Automation, AI automation solutions, predictive analytics, workflow automation, data integration",
  openGraph: {
    title: "Data & AI Automation | Tech2Globe",
    description:
      "Revolutionize business operations with intelligent automation, data-driven workflows, and AI solutions built for efficiency.",
    url: "https://www.tech2globe.com/service/data-ai-automation",
    siteName: "Tech2Globe",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data & AI Automation | Tech2Globe",
    description:
      "Transform operations with Data & AI Automation services designed to improve accuracy, speed, and business outcomes.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/service/data-ai-automation",
  },
};

const developmentProcess = [
  {
    id: 1,
    title: "Discovery & Strategy",
    description:
      "We evaluate your data landscape, identify automation opportunities, and define a strategy that aligns with your business goals.",
    icon: <FaComment />,
  },
  {
    id: 2,
    title: "Data Assessment & Integration",
    description:
      "Our team maps data sources, integrates systems, and builds pipelines to ensure your AI automation solution has a reliable foundation.",
    icon: <FaCloudUploadAlt />,
  },
  {
    id: 3,
    title: "Model Design & Validation",
    description:
      "We design AI models and automation workflows, then validate them through testing to ensure accuracy and reliability.",
    icon: <FaProjectDiagram />,
  },
  {
    id: 4,
    title: "Implementation & Deployment",
    description:
      "We deploy AI automation alongside your existing infrastructure with minimal disruption and continuous operational support.",
    icon: <FaRocket />,
  },
  {
    id: 5,
    title: "Monitoring & Optimization",
    description:
      "Our team monitors performance, refines algorithms, and optimizes workflows to ensure lasting business value.",
    icon: <FaChartLine />,
  },
  {
    id: 6,
    title: "User Adoption & Training",
    description:
      "We provide training and tools to help your team adopt the solution quickly and operate it with confidence.",
    icon: <FaHeadset />,
  },
  {
    id: 7,
    title: "Ongoing Support",
    description:
      "Continuous maintenance, feature updates, and data governance support keep your AI automation running smoothly.",
    icon: <FaSyncAlt />,
  },
];

const futureData = [
  {
    title: "Intelligent Workflow Automation",
    desc: "Automate end-to-end workflows that connect data, applications, and business processes to deliver faster outcomes and reduce manual effort.",
  },
  {
    title: "Predictive Business Intelligence",
    desc: "Use machine learning to forecast trends, detect anomalies, and provide insight-driven recommendations for smarter decision making.",
  },
  {
    title: "Enterprise AI Integrations",
    desc: "Create seamless API-based connections between AI systems and your CRM, ERP, analytics, and operational platforms.",
  },
  {
    title: "NLP-Powered Communication",
    desc: "Leverage natural language processing to automate document handling, customer interactions, and sentiment intelligence.",
  },
  {
    title: "Real-Time Reporting Dashboards",
    desc: "Deliver up-to-date analytics and KPI dashboards that keep stakeholders informed without manual reporting tasks.",
  },
];

const services = [
  {
    title: "Data Collection & Integration Automation",
    desc: "Automate data gathering from databases, APIs, IoT devices, and third-party systems to ensure accurate and consistent data flow.",
    points: [
      "Streamlined data ingestion",
      "Real-time synchronization",
      "CRM and ERP connectivity",
      "Centralized analytics-ready storage",
    ],
  },
  {
    title: "Data Cleaning & Preprocessing Automation",
    desc: "Improve data quality with AI-driven cleaning, deduplication, normalization, and validation that prepares your datasets for analysis.",
    points: [
      "Error and outlier detection",
      "Data standardization",
      "Duplicate removal",
      "Quality checks across platforms",
    ],
  },
  {
    title: "AI Powered Predictive Analytics",
    desc: "Leverage machine learning to forecast demand, customer behavior, market trends, and risk factors for proactive decision making.",
    points: [
      "Sales and trend forecasting",
      "Customer segmentation",
      "Risk detection",
      "Performance prediction",
    ],
  },
  {
    title: "Intelligent Decision Automation",
    desc: "Automate complex business decisions by combining AI models with business rules for real-time recommendations and actions.",
    points: [
      "Rule-based automation",
      "AI-driven recommendations",
      "Operational optimization",
      "Decision workflow orchestration",
    ],
  },
  {
    title: "Workflow & Process Automation",
    desc: "Streamline customer interactions, document handling, and operational tasks with intelligent workflows and virtual assistant automation.",
    points: [
      "Chatbots and virtual assistants",
      "Document data extraction",
      "Cross-department workflows",
      "Automated task orchestration",
    ],
  },
  {
    title: "Real-Time Reporting & Dashboards",
    desc: "Automate report generation and dashboard updates to deliver clear performance insights without manual intervention.",
    points: [
      "Live KPI tracking",
      "Visual analytics",
      "Automated distribution",
      "AI-generated insights",
    ],
  },
];

const industryData = [
  {
    left: {
      title: "Ecommerce",
      desc: "Automate inventory planning, personalization, and fraud detection to improve conversions and operational speed.",
    },
    right: {
      title: "Healthcare",
      desc: "Enable efficient patient data processing, predictive diagnostics, and smarter care workflows through AI automation.",
    },
  },
  {
    left: {
      title: "Finance",
      desc: "Use automation to speed transaction processing, detect anomalies, and support forecasting with secure analytics.",
    },
    right: {
      title: "Manufacturing",
      desc: "Improve predictive maintenance, production planning, and quality control with intelligent automation systems.",
    },
  },
  {
    left: {
      title: "Retail",
      desc: "Optimize merchandising, customer experiences, and supply chain operations with data-driven automation.",
    },
    right: {
      title: "Logistics",
      desc: "Automate route planning, shipment tracking, and operational forecasting for faster, more reliable delivery.",
    },
  },
];

const ctaData = [
  {
    title: "Contact Us to Hire AI Developers for Data & AI Automation",
    description: [
      "By hiring skilled AI developers, you can unlock the full potential of data and AI automation, optimizing your business processes, improving efficiency, and driving long term success.",
    ],
    buttonText: "Get in Touch",
    buttonLink: "/contact-us",
  },
];

const faqData = [
  {
    question: "What benefits can data & AI automation bring to businesses?",
    answer:
      "AI automation streamlines business processes, reduces operational costs, improves decision making, and enhances productivity by automating routine tasks and optimizing workflows.",
  },
  {
    question: "How does AI help with process optimization?",
    answer:
      "AI automates and optimizes processes by analyzing data, identifying inefficiencies, and providing recommendations to improve resource allocation, task scheduling, and overall performance.",
  },
  {
    question: "Can AI automation improve customer personalization?",
    answer:
      "Yes, AI driven automation enhances customer personalization by analyzing customer behavior and preferences, allowing businesses to deliver tailored marketing messages and product recommendations.",
  },
  {
    question: "What industries can benefit from AI automation?",
    answer:
      "Industries such as ecommerce, healthcare, finance, manufacturing, and retail can benefit from AI automation to optimize operations, improve decision making, and enhance customer experiences.",
  },
  {
    question: "How does AI improve data analysis?",
    answer:
      "AI automates the process of analyzing large volumes of data, providing actionable insights and predictive analytics that help businesses make more informed, data driven decisions.",
  },
  {
    question: "What support is provided after implementing AI automation solutions?",
    answer:
      "We offer post launch support, including performance monitoring, bug fixes, system updates, and continuous improvements to ensure your AI automation solution remains effective and relevant.",
  },
];

export default function DataAiAutomation() {
  return (
    <>
      <Breadcrumb parentName="Services" pageName="Data & AI Automation" />
      <BrandSection />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 page-content">
            <div className="cardblock">
              <h2>Data & AI Automation</h2>
              <h5 className="fw-normal mb-3">Empower Your Business with Data Driven Automation</h5>
              <p>Hire expert AI developers to revolutionize your business operations through data driven AI automation. With intelligent automation, you can streamline workflows, enhance decision making, and achieve operational efficiency across various business processes.</p>
              <p>Our AI solutions are designed to unlock the potential of your data, ensuring faster and smarter decision making while driving growth and maximizing efficiency. Through a seamless integration process, our AI automation solutions work alongside your existing infrastructure, ensuring minimal disruption and continuous business operations.</p>
              <p>Tech2Globe Data & AI Automation solutions empower businesses to transform raw data into actionable workflows that improve efficiency, accuracy, and decision-making. By combining intelligent automation with structured data processes, organizations can streamline operations, reduce manual effort, and gain better control over their business functions.</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 page-content">
            <div className="cardimage">
              <img src="/images/custom-ai-image.webp" className="img-fluid" alt="Data & AI Automation" />
            </div>
            <div className="cta-btn">
              <h5 className="fw-normal mb-4">Talk To Our Experts Now!</h5>
              <a href="/contact-us" className="btn btn-danger">Get in Touch With Us</a>
            </div>
          </div>
        </div>

        <div className="row pt-5 whychoosesection">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 page-content">
            <h2>Why is Data & AI Automation Essential for Businesses?</h2>
            <p>Businesses need to process and analyze large volumes of data efficiently. AI automation helps organizations move faster, reduce errors, and make better decisions in real time.</p>
          </div>
          <div className="row pt-3 pb-3">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 mb-3">
                <h5 className="fw-medium mb-3">Improved Efficiency and Productivity</h5>
                <p>AI automation reduces the time spent on repetitive data processing tasks, freeing employees to focus on strategic, value-generating work.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100">
                <h5 className="fw-medium mb-3">Enhanced Accuracy and Reduced Error</h5>
                <p>Automating data processing minimizes human error and ensures more reliable analysis, reporting, and decision-making outcomes.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100">
                <h5 className="fw-medium mb-3">Real Time Insights and Decisions</h5>
                <p>With automated data workflows, businesses get instant access to key insights that support faster, smarter decisions.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100">
                <h5 className="fw-medium mb-3">Scalability and Adaptability</h5>
                <p>AI automation scales with your business and handles growing data volumes without needing significant manual intervention.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 p-0">
                <img src="/images/whychoose-image.webp" className="img-fluid" alt="Why Data & AI Automation" />
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-md-12">
            <h2>Our Data & AI Automation Solutions</h2>
            <p>At Tech2Globe, we offer tailored Data & AI Automation solutions designed to help businesses manage data effectively, automate routine tasks, and leverage AI for better decision making.</p>
          </div>
        </div>
        <ServiceSlider services={services} />

        <div className="row pt-5 pb-5 whychoosedev">
          <div className="col-md-12">
            <h2 className="mb-4">What Does Hiring AI Developers for Data & AI Automation Entail?</h2>
            <p>Our AI developers bring advanced technology expertise and practical automation experience to design solutions that support your business goals.</p>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="bordered-card-wrapper">
                <div className="custom-card">
                  <h5>Machine Learning</h5>
                  <p>Predict future trends, optimize processes, and automate decision-making with machine learning models designed for your data.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bordered-card-wrapper">
                <div className="custom-card">
                  <h5>Natural Language Processing</h5>
                  <p>Use NLP to automate text analysis, customer interactions, and document processing for faster business communication.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bordered-card-wrapper">
                <div className="custom-card">
                  <h5>Robotic Process Automation</h5>
                  <p>Eliminate repetitive tasks like data entry, report generation, and processing through reliable RPA solutions.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bordered-card-wrapper">
                <div className="custom-card">
                  <h5>Predictive Analytics</h5>
                  <p>Forecast outcomes, assess risk, and plan with confidence using AI-powered predictive analytics capabilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <IndustryApplication data={industryData} />

        <div className="row pt-5 pb-5 bg-integration">
          <div className="col-md-6">
            <div className="block-fixed">
              <h2 className="text-white">Integrating AI Automation Seamlessly</h2>
              <h4 className="text-white fw-normal mb-5">Smooth implementation with minimal disruption</h4>
              <img src="/images/Seamless-Integration.jpg" className="img-fluid integrationImg" alt="Seamless Integration with Business Systems" />
            </div>
          </div>
          <div className="col-md-6">
            <p className="mb-5">Our integration process focuses on ensuring your existing systems continue to operate while AI automation is introduced smoothly and securely.</p>
            <div className="int-card mb-3">
              <h5 className="mb-3">Minimal Disruption</h5>
              <p>Deployment is carefully planned to prevent downtime and maintain business continuity.</p>
            </div>
            <div className="int-card mb-3">
              <h5 className="mb-3">Custom APIs</h5>
              <p>We develop APIs that enable seamless communication between AI systems and your current platforms.</p>
            </div>
            <div className="int-card mb-3">
              <h5 className="mb-3">System Compatibility</h5>
              <p>Solutions are designed to complement your existing ERP, CRM, and backend systems.</p>
            </div>
            <div className="int-card mb-3">
              <h5 className="mb-3">Scalability</h5>
              <p>As your business grows, your AI automation systems grow with it, handling larger data volumes and demands.</p>
            </div>
            <div className="int-card">
              <h5 className="mb-3">Regulatory Compliance</h5>
              <p>We follow data protection and privacy standards to safeguard your business and customer data.</p>
            </div>
          </div>
        </div>

        <div className="row pt-5 pb-5 development-process-section">
          <div className="col-md-12 text-center">
            <h2>Our Development Process</h2>
            <h5 className="fw-normal mb-3">A structured roadmap to successful AI automation</h5>
          </div>
          <div className="row justify-content-center pt-3">
            {developmentProcess.map((item) => (
              <div key={item.id} className="col-md-4 mb-3">
                <div className="usecase-card">
                  <div className="card-content">
                    <div className="icon" style={{ fontSize: "30px" }}>
                      {item.icon}
                    </div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <span>{item.id}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row pt-5 pb-5">
          <div className="col-md-12">
            <div className="future-wrapper">
              <div className="row">
                <div className="col-md-12">
                  <h2>How We Ensure Seamless Collaboration for Data & AI Automation Projects</h2>
                  <h5 className="mb-4 fw-normal">A Comprehensive Approach to Building AI Automation Solutions</h5>
                  <p>Our structured process for delivering AI powered automation solutions ensures your business objectives are met. Here’s how we collaborate with you:</p>
                </div>
              </div>
              <div className="row pt-3">
                <FutureSlider data={futureData} />
              </div>
            </div>
          </div>
        </div>

        <CTASection data={ctaData} />
        <FaqSection faqs={faqData} />
      </div>
    </>
  );
}
