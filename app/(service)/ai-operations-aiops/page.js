import Style from "./style.module.css";
import Image from "next/image";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import "./custom.css";
import FaqSection from "@/app/components/ai-pages/faqs/faqsection";
import CTASection from "@/app/components/ai-pages/cta/CTASection";
import {
  FaChartLine, FaClipboardList, FaCloudUploadAlt, FaComment, FaHeadset, FaProjectDiagram, FaRobot, FaBrain,
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
  title: "",
  description:
    "",
  keywords: "",

  openGraph: {
    title: "",
    description:
      "",
    url: "",
    siteName: "Tech2Globe",
  },

  twitter: {
    card: "summary_large_image",
    title: "",
    description:
      "",
  },

  alternates: {
    canonical: "",
  },
};


const developmentProcess = [
  {
    id: 1,
    title: "Assessment & Strategy",
    description:
      "We conduct a comprehensive assessment of your current IT challenges. We identify pain points, inefficiencies, and opportunities for improvement, tailoring a strategic plan that aligns with your business objectives.",
    icon: <FaComment />,
  },
  {
    id: 2,
    title: "Architecture Design",
    description:
      "We focus on building a scalable and adaptable monitoring framework that can support your organization's growing IT environment. Our expert architects design a custom solution that integrates seamlessly with your existing infrastructure.",
    icon: <FaClipboardList />,
  },
  {
    id: 3,
    title: "Data Integration",
    description:
      "Data is at the core of AIOps. In this phase, we consolidate and integrate data from various operational sources, including logs, metrics, and events. This ensures that all relevant data is available for real-time analysis.",
    icon: <FaProjectDiagram />,
  },
  {
    id: 4,
    title: "Model Development",
    description:
      "Using advanced machine learning algorithms, we develop predictive analytics models that detect patterns and anomalies within your operational data. These models provide valuable insights for proactive issue detection.",
    icon: <FaRobot />,
  },
  {
    id: 5,
    title: "Automation Setup",
    description:
      "Automation is key to maximizing AIOps effectiveness. We implement automated workflows that streamline repetitive IT tasks, from incident management to system monitoring, improving operational efficiency.",
    icon: <FaCloudUploadAlt />,
  },
  {
    id: 6,
    title: "Continuous Optimization",
    description:
      "Our work doesn't stop after implementation. We continuously refine performance based on real-time insights, ensuring your AIOps solution evolves to meet your changing business needs.",
    icon: <FaChartLine />,
  },
];

const futureData = [
  {
    title: "Real-Time Monitoring & Analytics",
    desc: "Our systems continuously monitor infrastructure performance, applications, and network activity to provide real-time operational visibility. This enables IT teams to detect unusual patterns early and respond before issues escalate.",
  },
  {
    title: "Predictive Incident Detection",
    desc: "Using advanced analytics, our AIOps solutions identify potential system failures before they occur. This allows organizations to address vulnerabilities proactively and minimize operational disruptions.",
  },
  {
    title: "Root Cause Analysis",
    desc: "Rather than responding to multiple alerts individually, our systems correlate data across sources to identify the actual root cause of issues. This significantly reduces troubleshooting time and enhances operational efficiency.",
  },
  {
    title: "Automated Incident Management",
    desc: "We implement intelligent automation workflows that trigger predefined actions when anomalies are detected. This reduces manual intervention and accelerates issue resolution.",
  },
  {
    title: "Capacity Planning",
    desc: "AIOps analyzes resource usage trends to forecast future infrastructure requirements, ensuring optimal resource allocation and preventing performance bottlenecks.",
  },
];

const services = [
  {
    title: "Real-Time Monitoring & Analytics",
    desc: "Our systems continuously monitor infrastructure performance, applications, and network activity to provide real-time operational visibility. This enables IT teams to detect unusual patterns early and respond before issues escalate.",
    points: [
      "Continuous infrastructure monitoring",
      "Real-time performance metrics",
      "Pattern detection and alerting",
      "Operational visibility dashboards",
    ],
  },
  {
    title: "Predictive Incident Detection",
    desc: "Using advanced analytics, our AIOps solutions identify potential system failures before they occur. This allows organizations to address vulnerabilities proactively and minimize operational disruptions.",
    points: [
      "Advanced analytics models",
      "System failure prediction",
      "Vulnerability identification",
      "Proactive issue addressing",
    ],
  },
  {
    title: "Root Cause Analysis",
    desc: "Rather than responding to multiple alerts individually, our systems correlate data across sources to identify the actual root cause of issues. This significantly reduces troubleshooting time and enhances operational efficiency.",
    points: [
      "Data correlation across sources",
      "Alert consolidation",
      "Issue identification",
      "Reduced troubleshooting time",
    ],
  },
  {
    title: "Automated Incident Management",
    desc: "We implement intelligent automation workflows that trigger predefined actions when anomalies are detected. This reduces manual intervention and accelerates issue resolution.",
    points: [
      "Automated incident workflows",
      "Anomaly-triggered actions",
      "Reduced manual intervention",
      "Faster issue resolution",
    ],
  },
  {
    title: "Capacity Planning",
    desc: "AIOps analyzes resource usage trends to forecast future infrastructure requirements, ensuring optimal resource allocation and preventing performance bottlenecks.",
    points: [
      "Resource usage analysis",
      "Future forecasting",
      "Infrastructure optimization",
      "Performance bottleneck prevention",
    ],
  },
  {
    title: "Performance Optimization",
    desc: "Continuous data analysis helps identify inefficiencies in system operations, enabling performance tuning and infrastructure optimization.",
    points: [
      "System efficiency analysis",
      "Performance tuning",
      "Infrastructure optimization",
      "Continuous improvement",
    ],
  },
];

const industryData = [
  {
    left: {
      title: "Banking & Finance",
      desc: "AIOps is crucial for improving system reliability and ensuring the smooth operation of transaction processing systems. By monitoring transaction flows and detecting anomalies, AIOps plays a vital role in preventing fraud and ensuring compliance.",
    },
    right: {
      title: "Healthcare",
      desc: "AIOps helps healthcare organizations maintain the availability of critical digital health systems such as electronic health records (EHRs) and telemedicine platforms. By proactively monitoring infrastructure, it minimizes downtime.",
    },
  },
  {
    left: {
      title: "Retail & E-commerce",
      desc: "For retail and e-commerce businesses, AIOps ensures the smooth operation of infrastructure, which is essential for handling high transaction volumes, especially during peak shopping periods.",
    },
    right: {
      title: "Telecommunications",
      desc: "AIOps is revolutionizing telecommunications by monitoring network performance and swiftly detecting service disruptions. With AIOps, telecom companies can automatically identify network faults and address issues in real time.",
    },
  },
  {
    left: {
      title: "Manufacturing",
      desc: "In the manufacturing industry, AIOps enhances the operational efficiency of connected systems, such as IoT-enabled devices and automated production lines. By continuously monitoring system performance, AIOps helps detect potential faults early.",
    },
    right: {
      title: "Technology & Cloud",
      desc: "AIOps supports complex IT environments with comprehensive monitoring, predictive analytics, and automated responses that ensure continuous service delivery and optimal resource utilization.",
    },
  },
];


const ctaData = [
  {
    title: "Contact Us for AIOps Solutions",
    description: [
      "Partner with Tech2Globe to implement intelligent IT operations that enhance reliability, improve performance, and support long-term growth.",
      "Let's transform your IT operations with intelligent automation and predictive insights."
    ],
    buttonText: "Get in Touch",
    buttonLink: "/contact-us"
  }
];

const faqData = [
  {
    question: "What is AIOps?",
    answer:
      "AIOps (Artificial Intelligence for IT Operations) enhances IT operations by leveraging advanced data analysis, machine learning, and automation. It enables businesses to monitor, manage, and optimize IT environments in real-time, predicting and addressing issues before they impact performance.",
  },
  {
    question: "How does AIOps improve efficiency?",
    answer:
      "AIOps improves efficiency by automating monitoring, incident management, and system diagnostics. It enables IT teams to detect issues proactively, reducing downtime and manual intervention. By automating repetitive tasks, IT professionals can focus on more strategic initiatives.",
  },
  {
    question: "Can AIOps integrate with cloud platforms?",
    answer:
      "Yes, AIOps is designed to support hybrid IT environments, including both on-premise and cloud platforms. It seamlessly integrates with various cloud services, ensuring comprehensive visibility and control over all systems.",
  },
  {
    question: "Is AIOps secure?",
    answer:
      "Security is a top priority for AIOps solutions. We implement robust compliance measures, encryption protocols, and access controls to safeguard your data and IT systems. AIOps helps detect security threats and vulnerabilities in real-time.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we provide continuous optimization and support to ensure your AIOps solution delivers long-term value. Our team helps refine system performance, resolve emerging issues, and scale the solution as your IT environment evolves.",
  },
  {
    question: "What is the implementation timeline for AIOps?",
    answer:
      "Implementation timelines vary depending on your current infrastructure complexity, data integration requirements, and customization needs. Typically, projects range from a few weeks for smaller implementations to several months for large-scale enterprise deployments.",
  },
];


export default function AiOperationsAiops() {
  return (

    <>
      <Breadcrumb parentName="Services" pageName="AI Operations (AIOps)" />
      <BrandSection />
      <div className="container">

        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 page-content">
            <div className="cardblock">
              <h2>Transform IT Operations with Intelligent, Predictive, and Self-Optimizing Systems</h2>
              <h5 className="fw-normal mb-3">Converting Operational Data into Intelligent Decision-Making</h5>
              <p>Modern IT environments are becoming increasingly complex due to hybrid infrastructures, cloud adoption, microservices architecture, and continuously evolving digital ecosystems. Managing such dynamic environments through traditional monitoring and manual processes often leads to inefficiencies, delayed responses, and operational risks.</p>
              <p>AI Operations (AIOps) enables organizations to intelligently monitor, analyze, and optimize IT systems by transforming vast volumes of operational data into actionable insights. At Tech2Globe, we help organizations modernize their IT operations by implementing intelligent automation frameworks that detect anomalies, predict failures, and streamline incident management.</p>
              <p>AIOps empowers enterprises to move beyond reactive troubleshooting toward proactive performance optimization, ensuring system reliability and business continuity. Our AIOps solutions are designed to reduce noise from monitoring tools, identify root causes of issues faster, and automate repetitive operational tasks.</p>
              <p>Whether your objective is to strengthen system resilience, optimize resource utilization, improve incident response, or achieve operational scalability, our AIOps solutions provide a structured pathway toward efficient and future-ready IT management.</p>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 page-content">
            <div className="cardimage">
              <img src="/images/aiops-image.webp" className="img-fluid" alt="AI Operations (AIOps) Services" />
            </div>
            <div className="cta-btn">
              <h5 className="fw-normal mb-4">Talk To Our Experts Now!</h5>
              <a href="/contact-us" className="btn btn-danger">Get in Touch With Us</a>
            </div>
          </div>
        </div>



        <div className="row pt-5 whychoosesection">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 page-content">
            <h2>Why Businesses Invest in AIOps</h2>
            <p>As businesses embrace digital transformation, the complexity of IT environments continues to rise. To manage this complexity and ensure smooth, uninterrupted service delivery, organizations are increasingly turning to AIOps. AIOps leverages advanced machine learning and data analytics to automate and optimize IT operations, leading to significant business benefits.</p>
          </div>


          <div className="row pt-3 pb-3">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3" >
              <div className="whychoosebox h-100 mb-3">
                <h5 className="fw-medium mb-3">Reduced Downtime</h5>
                <p>AIOps utilizes predictive analytics to identify potential system failures before they occur. By anticipating issues and addressing them proactively, AIOps helps reduce downtime, thereby improving system uptime and overall operational stability. This leads to fewer disruptions and better service reliability.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 ">
                <h5 className="fw-medium mb-3">Faster Incident Resolution</h5>
                <p>With AIOps, IT teams benefit from automated analysis of incidents. By quickly identifying the root cause of problems, AIOps accelerates troubleshooting processes, minimizing response time and improving incident resolution. This allows businesses to restore services faster.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 ">
                <h5 className="fw-medium mb-3">Improved Operational Efficiency</h5>
                <p>AIOps automates routine and repetitive IT tasks, such as system monitoring, patch management, and log analysis. This automation frees up valuable time for IT teams, allowing them to focus on more strategic initiatives like system optimization and innovation.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 ">
                <h5 className="fw-medium mb-3">Enhanced Visibility</h5>
                <p>AIOps platforms offer unified dashboards that provide a comprehensive, real-time view of system performance. This centralized visibility enables IT teams to monitor, analyze, and respond to issues more effectively, enhancing decision-making and overall IT management.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 ">
                <h5 className="fw-medium mb-3">Cost Optimization</h5>
                <p>By automating tasks, reducing downtime, and improving operational efficiency, AIOps helps businesses optimize costs. The reduction in manual workloads and faster issue resolution leads to a more efficient use of resources and a decrease in operational costs.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 p-0">
                <img src="/images/whychoose-aiops-image.webp" className="img-fluid" alt="Why Invest in AIOps" />
              </div>
            </div>
          </div>
        </div>


        <div className="row pt-5">
          <div className="col-md-12">
            <h2>Core Capabilities of Our AIOps Solutions</h2>
            <p>Enabling Smarter IT Operations Through Intelligent Automation. We design and deploy AIOps frameworks that support scalable and reliable IT environments.</p>
          </div>
        </div>
        <ServiceSlider services={services} />


        <div className="mb-3 pt-3 pb-1">
          <h2> Our AIOps Implementation Process
          </h2>
          <p className="mb-0"> Structured Deployment for Operational Excellence. At the heart of our AIOps implementation process is a structured approach that ensures operational excellence and long-term value.</p>

          <div className="py-5">
            <div className="container">
              <div className="row text-center g-4">

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaFileContract />
                    </div>
                    <h5 className="fw-bold">Assessment & Strategy</h5>
                    <p className="mb-0">We conduct a comprehensive assessment of your current IT challenges. We identify pain points, inefficiencies, and opportunities for improvement, tailoring a strategic plan that aligns with your business objectives, setting a solid foundation for AIOps integration.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaUsersCog />
                    </div>
                    <h5 className="fw-bold">Architecture Design</h5>
                    <p className="mb-0">We focus on building a scalable and adaptable monitoring framework that can support your organization's growing IT environment. Our expert architects design a custom solution that integrates seamlessly with your existing infrastructure, ensuring all critical systems are covered.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaCode />
                    </div>
                    <h5 className="fw-bold">Data Integration</h5>
                    <p className="mb-0">Data is at the core of AIOps. We consolidate and integrate data from various operational sources, including logs, metrics, and events. This ensures that all relevant data is available for real-time analysis, providing a comprehensive view of your IT operations.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaVial />
                    </div>
                    <h5 className="fw-bold">Model Development</h5>
                    <p className="mb-0">Using advanced machine learning algorithms, we develop predictive analytics models that detect patterns and anomalies within your operational data. These models provide valuable insights, enabling proactive issue detection and performance optimization.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaRocket />
                    </div>
                    <h5 className="fw-bold">Automation Setup</h5>
                    <p className="mb-0">Automation is key to maximizing AIOps effectiveness. We implement automated workflows that streamline repetitive IT tasks, from incident management to system monitoring, improving operational efficiency and reducing human intervention.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaSyncAlt />
                    </div>
                    <h5 className="fw-bold">Continuous Optimization</h5>
                    <p className="mb-0">Our work doesn't stop after implementation. We continuously refine performance based on real-time insights, ensuring your AIOps solution evolves to meet your changing business needs and delivers ongoing value.</p>
                  </div>
                </div>


              </div>
            </div>
          </div>

        </div>

        <div className="row pt-5 pb-5 whychoosedev">
          <div className="col-md-12">
            <h2 className="mb-4">Seamless Integration with IT Ecosystems</h2>
            <p>Ensuring Secure and Scalable Deployment. Our AIOps solutions are designed to integrate smoothly with your existing IT management platforms, ensuring a seamless deployment that enhances operational efficiency and security.</p>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="bordered-card-wrapper">
                <div className="custom-card">
                  <h5>Cloud & On-Premise Integration</h5>
                  <p>Our AIOps solutions are designed to support both cloud and on-premise environments, providing flexibility for businesses operating in hybrid infrastructure settings. We ensure that your systems remain integrated and synchronized.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bordered-card-wrapper">
                <div className="custom-card">
                  <h5>Security Compliance</h5>
                  <p>Security is a top priority. Our AIOps solutions adhere to industry standards and implement strong access controls and data protection protocols. We ensure compliance with relevant regulations such as GDPR and HIPAA.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bordered-card-wrapper">
                <div className="custom-card">
                  <h5>API Connectivity</h5>
                  <p>To ensure smooth communication between your various IT systems, we provide seamless API connectivity. This allows AIOps to integrate with your existing tools and platforms, providing efficient cross-platform communication.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bordered-card-wrapper">
                <div className="custom-card">
                  <h5>Scalable Architecture</h5>
                  <p>Our AIOps solutions are built with scalability in mind, supporting growing operational demands. As your business expands, the solution can easily adapt to handle increased workloads and additional systems.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bordered-card-wrapper">
                <div className="custom-card">
                  <h5>Real-Time Monitoring</h5>
                  <p>Continuous monitoring and performance insights provide real-time visibility into your IT operations. Our systems detect issues early and provide actionable recommendations for optimization and improvement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <IndustryApplication data={industryData} />

        <div className="row pt-5 pb-5 invest-section">
          <div className="col-md-12">
            <h2>Technologies Behind AI Operations (AIOps)</h2>
            <p className="mb-4">Powering Intelligent IT Management. Our AIOps solutions harness the power of multiple advanced technologies to provide accurate, scalable operational insights.</p>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 mb-2">
                <div className="white-dashed-box h-100 mb-2">
                  <h3><FaCog className="me-2" /> Machine Learning Models</h3>
                  <p className="mb-0">Machine learning models are at the core of AIOps. These models analyze large volumes of operational data to detect patterns and predict future system behavior.</p>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div className="white-dashed-box h-100 mb-2">
                  <h3><FaBrain className="me-2" /> Big Data Analytics</h3>
                  <p className="mb-2">Big data analytics plays a crucial role in AIOps by processing and analyzing vast amounts of data from various sources to provide comprehensive visibility across entire IT ecosystems.</p>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div className="white-dashed-box h-100 mb-2">
                  <h3><FaUserCheck className="me-2" /> Event Correlation Engines</h3>
                  <p className="mb-2">Event correlation engines are essential for reducing the noise from numerous system alerts by consolidating alerts from multiple sources and prioritizing them.</p>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div className="white-dashed-box h-100 mb-2">
                  <h3><FaCoins className="me-2" /> Intelligent Automation Frameworks</h3>
                  <p className="mb-2">Automation is a key component of AIOps, streamlining routine operational tasks such as system monitoring, patching, and incident management.</p>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div className="white-dashed-box h-100 mb-2">
                  <h3><FaTrophy className="me-2" /> Cloud Monitoring Tools</h3>
                  <p className="mb-2">As more businesses migrate to cloud environments, AIOps incorporates cloud monitoring tools to seamlessly track and manage cloud-native infrastructures.</p>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div className="white-dashed-box h-100 mb-2">
                  <h3><FaRocket className="me-2" /> Real-Time Insights</h3>
                  <p className="mb-2">With real-time insights, businesses can make data-driven decisions and improve operational efficiency across their entire IT infrastructure.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="row pt-5 pb-5 bg-integration">
          <div className="col-md-6">
            <div className="block-fixed">
              <h2 className="text-white">Why AIOps Transforms IT Operations</h2>
              <h4 className="text-white fw-normal mb-5">Future-Ready IT Operations</h4>
              <img src="images/aiops-integration.jpg" className="img-fluid integrationImg" alt="AIOps Transformation" />
            </div>
          </div>
          <div className="col-md-6">
            <p className="mb-5">AIOps represents the next evolution in IT management by enabling organizations to transition from reactive maintenance to proactive optimization. As digital infrastructures expand, intelligent operational frameworks become essential for maintaining stability and performance.</p>
            <div className="int-card mb-3">
              <h5 className="mb-3">Proactive Problem Resolution</h5>
              <p>Detect and resolve issues before they impact operations and user experience.</p>
            </div>
            <div className="int-card mb-3">
              <h5 className="mb-3">Reduced Operational Costs</h5>
              <p>Automation and efficiency improvements lead to significant cost savings and better resource utilization.</p>
            </div>
            <div className="int-card mb-3">
              <h5 className="mb-3">Improved System Reliability</h5>
              <p>Enhanced visibility and predictive capabilities ensure higher uptime and service availability.</p>
            </div>
            <div className="int-card mb-3">
              <h5 className="mb-3">Faster Response Times</h5>
              <p>Automated incident management and root cause analysis accelerate resolution and reduce MTTR.</p>
            </div>
            <div className="int-card">
              <h5 className="mb-3">Strategic IT Enablement</h5>
              <p>IT teams can focus on strategic initiatives rather than reactive firefighting and manual monitoring.</p>
            </div>
          </div>
        </div>

        <div className="row pt-5 pb-5 development-process-section">
          <div className="col-md-12 text-center">
            <h2>Our AIOps Implementation Approach</h2>
            <h5 className="fw-normal mb-3">
              Structured Deployment for Operational Excellence
            </h5>
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
                  <h2 className="mb-4">Core Capabilities of Our AIOps Solutions</h2>
                  <p>Enabling Smarter IT Operations Through Intelligent Automation. We design and deploy AIOps frameworks that support scalable and reliable IT environments.</p>
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
  )
};
