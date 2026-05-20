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
  FaImages,
  FaFileAlt,
  FaMusic,
  FaVideo,
} from "react-icons/fa";
import ServiceSlider from "@/app/components/ai-pages/ServiceSlider/ServiceSlider";
import IndustryApplication from "@/app/components/ai-pages/IndustryApplication/IndustryApplication";
import FutureSlider from "@/app/components/ai-pages/FutureSlider/FutureSlider";



export const metadata = {
  title: "AI Data Annotation Services - Training Data for Intelligent Systems | Tech2Globe",
  description:
    "Transform raw data into structured intelligence with Tech2Globe's AI Data Annotation services. High-quality labeled datasets for machine learning, computer vision, NLP, and automation systems. Image, text, audio, and video annotation solutions.",
  keywords: "AI data annotation, data labeling, training data, machine learning datasets, image annotation, text annotation, data annotation services, annotation outsourcing",

  openGraph: {
    title: "AI Data Annotation Services - Tech2Globe",
    description:
      "Professional AI Data Annotation services covering image, text, audio, and video annotation for ML systems, automation, and intelligent applications.",
    url: "https://tech2globe.com/ai-data-annotation-services",
    siteName: "Tech2Globe",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Data Annotation Services - Tech2Globe",
    description:
      "High-quality data annotation solutions to train intelligent systems and improve model accuracy across industries.",
  },

  alternates: {
    canonical: "https://tech2globe.com/ai-data-annotation-services",
  },
};


const developmentProcess = [
  {
    id: 1,
    title: "Requirement Analysis",
    description:
      "We understand your system goals, dataset structure, and business requirements to ensure annotation aligns with your objectives.",
    icon: <FaComment />,
  },
  {
    id: 2,
    title: "Data Preparation",
    description:
      "Raw datasets are cleaned and standardized before labeling begins to ensure consistency and quality.",
    icon: <FaClipboardList />,
  },
  {
    id: 3,
    title: "Annotation Execution",
    description:
      "Specialized teams label datasets based on predefined guidelines to ensure contextual accuracy and relevance.",
    icon: <FaProjectDiagram />,
  },
  {
    id: 4,
    title: "Quality Review",
    description:
      "Multi-level validation ensures contextual accuracy and maintains consistency across all annotated datasets.",
    icon: <FaVial />,
  },
  {
    id: 5,
    title: "Final Delivery",
    description:
      "Datasets are delivered in formats compatible with your systems for seamless integration and immediate use.",
    icon: <FaCloudUploadAlt />,
  },
];

const futureData = [
  {
    title: "Improved Operational Performance",
    desc: "Well-annotated datasets enable systems to recognize patterns more accurately, automating processes and reducing operational errors across your organization.",
  },
  {
    title: "Enhanced Customer Engagement",
    desc: "High-quality training data improves recommendation engines and personalization systems, creating more relevant and engaging customer experiences.",
  },
  {
    title: "Strengthened Decision-Making",
    desc: "Accurate annotations support predictive analytics and data-driven insights, enabling leadership teams to make informed strategic decisions.",
  },
  {
    title: "Support for Innovation",
    desc: "Structured datasets enable continuous learning and adaptation, supporting system evolution and innovation as business needs change.",
  },
  {
    title: "Reduced Operational Risk",
    desc: "Properly annotated data trains fraud detection and anomaly identification systems, strengthening risk management and compliance capabilities.",
  },
];

const services = [
  {
    title: "Image Annotation",
    desc: "Image annotation involves labeling objects, shapes, and features within visual data so systems can recognize patterns and elements in images. By accurately tagging visual elements, businesses enable systems to interpret visual environments with precision.",
    points: [
      "Object detection for retail inventory tracking",
      "Medical imaging analysis for diagnostics",
      "Facial recognition systems for security",
      "Autonomous systems for navigation",
    ],
  },
  {
    title: "Text Annotation",
    desc: "Text annotation helps systems understand written language by identifying meaning, sentiment, and contextual relationships. This enables improved communication, better customer insights, and more efficient document processing.",
    points: [
      "Sentiment analysis for customer feedback",
      "Intent recognition for conversational systems",
      "Content classification for document management",
      "Entity recognition for data extraction",
    ],
  },
  {
    title: "Audio Annotation",
    desc: "Audio annotation involves labeling sound patterns, speech segments, and voice elements for system training. This enhances communication systems and improves user interaction experiences.",
    points: [
      "Voice-enabled interfaces",
      "Speech recognition systems",
      "Call analysis platforms",
      "Virtual assistants and voice commands",
    ],
  },
  {
    title: "Video Annotation",
    desc: "Video annotation involves labeling motion, objects, and sequences within video data. Video annotation supports systems in understanding dynamic environments and extracting meaningful insights from visual sequences.",
    points: [
      "Surveillance monitoring",
      "Traffic analysis and pattern recognition",
      "Behavioral analysis for security",
      "Industrial safety tracking and monitoring",
    ],
  },
  {
    title: "Structured Data Annotation",
    desc: "We label and organize structured datasets including transaction records, customer data, and operational metrics. This ensures systems can understand relationships, identify patterns, and support decision-making processes.",
    points: [
      "Transaction labeling for fraud detection",
      "Customer behavior tagging",
      "Risk classification and scoring",
      "Compliance and regulatory categorization",
    ],
  },
  {
    title: "Quality Assurance & Validation",
    desc: "Our multi-level validation process ensures all annotated datasets meet quality standards and maintain consistency. We implement structured review mechanisms to verify accuracy and contextual relevance.",
    points: [
      "Multi-layer accuracy verification",
      "Consistency monitoring across datasets",
      "Error detection and correction",
      "Continuous performance feedback",
    ],
  },
];

const industryData = [
  {
    left: {
      title: "Healthcare",
      desc: "Annotated medical images improve diagnostic systems and predictive healthcare tools for better patient outcomes.",
    },
    right: {
      title: "Retail & E-commerce",
      desc: "Customer behavior tagging enables recommendation engines and demand forecasting for improved sales.",
    },
  },
  {
    left: {
      title: "Finance",
      desc: "Transaction labeling supports fraud detection and compliance automation for enhanced security.",
    },
    right: {
      title: "Logistics",
      desc: "Shipment tracking and route analysis annotation improve operational efficiency and delivery performance.",
    },
  },
  {
    left: {
      title: "Manufacturing",
      desc: "Equipment monitoring annotation helps predict maintenance requirements and prevent downtime.",
    },
    right: {
      title: "Education",
      desc: "Learning behavior tagging supports personalized education platforms and adaptive learning experiences.",
    },
  },
];


const ctaData = [
  {
    title: "Partner with Tech2Globe for AI Data Annotation Services",
    description: [
      "Transform your raw data into structured intelligence that powers accurate, reliable intelligent systems. Our expert annotation team ensures high-quality labeled datasets that accelerate system development and improve performance.",
      "Let's build the foundation for smarter systems that drive results."
    ],
    buttonText: "Get in Touch",
    buttonLink: "/contact-us"
  }
];

const faqData = [
  {
    question: "What is AI Data Annotation and why is it important for business systems?",
    answer:
      "AI Data Annotation is the process of labeling raw data such as text, images, videos, or audio so that intelligent systems can understand and interpret it correctly. Without properly annotated data, systems cannot learn patterns or make accurate decisions. Businesses rely on annotation to train automation tools, recommendation engines, fraud detection systems, and predictive models. It improves accuracy, reduces operational errors, and ensures systems respond effectively to real-world scenarios.",
  },
  {
    question: "How does AI Data Annotation improve model performance?",
    answer:
      "Well-annotated data directly impacts how accurately systems learn from inputs. When data is labeled with clear context and relationships, systems can identify patterns faster and make better predictions. This reduces confusion during training and improves overall output reliability. High-quality annotation enables intelligent platforms to understand intent, detect anomalies, and automate processes efficiently across industries.",
  },
  {
    question: "What types of data can be annotated?",
    answer:
      "AI Data Annotation can be applied across multiple formats including text, images, audio, and video. Text annotation supports sentiment analysis and intent recognition. Image annotation enables object detection and classification. Audio annotation improves speech recognition, while video annotation supports motion tracking and behavioral analysis. Businesses can annotate structured and unstructured datasets depending on their system requirements.",
  },
  {
    question: "Can AI Data Annotation be customized for industry-specific use cases?",
    answer:
      "Yes, annotation frameworks can be tailored according to business needs and industry requirements. Healthcare organizations may require medical imaging annotation, while retail companies may focus on customer behavior tagging. Financial firms often need transaction labeling for fraud detection. Customized annotation ensures that systems are trained on relevant and meaningful data aligned with operational objectives.",
  },
  {
    question: "How do you ensure data quality during annotation?",
    answer:
      "Maintaining accuracy and consistency is critical in annotation. We implement structured review mechanisms, validation checks, and quality assurance processes throughout the labeling lifecycle. Each dataset is monitored for consistency and contextual accuracy to ensure reliable training outcomes. Continuous feedback loops help refine annotation standards and maintain long-term dataset usability.",
  },
  {
    question: "Is AI Data Annotation scalable for growing businesses?",
    answer:
      "Yes, scalable annotation frameworks allow businesses to expand their datasets as operational needs grow. Whether working with small pilot projects or enterprise-level systems, annotation processes can be adapted to accommodate increasing data volumes and complexity. This ensures long-term usability and future system enhancements.",
  },
];


export default function AiDataAnnotationServices() {
  return (

    <>
      <Breadcrumb parentName="Services" pageName="AI Data Annotation Services" />
      <BrandSection />
      <div className="container">

        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 page-content">
            <div className="cardblock">
              <h2>AI Data Annotation Services</h2>
              <h5 className="fw-normal mb-3">Turning Raw Data into Structured Intelligence</h5>
              <p>Modern intelligent systems rely heavily on high-quality training data to perform accurately and consistently. AI Data Annotation plays a critical role in transforming raw, unstructured information into meaningful datasets that systems can interpret, learn from, and act upon. Without properly labeled data, even the most advanced models struggle to deliver reliable outcomes.</p>
              <p>At Tech2Globe, we provide structured and scalable AI Data Annotation services that help organizations build smarter systems, improve automation accuracy, and enable better decision-making. Our approach focuses on precision, contextual understanding, and industry-specific relevance to ensure that your systems learn effectively from real-world scenarios.</p>
              <p>Whether you are developing predictive platforms, recommendation engines, conversational tools, or automation systems, our annotation services help establish the foundation required for long-term system performance.</p>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 page-content">
            <div className="cardimage">
              <img src="/images/custom-ai-image.webp" className="img-fluid" alt="AI Data Annotation Services" />
            </div>
            <div className="cta-btn">
              <h5 className="fw-normal mb-4">Talk To Our Experts Now!</h5>
              <a href="/contact-us" className="btn btn-danger">Get in Touch With Us</a>
            </div>
          </div>
        </div>



        <div className="row pt-5 whychoosesection">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 page-content">
            <h2>What is AI Data Annotation?</h2>
            <p>AI Data Annotation is the process of labeling datasets so that intelligent systems can recognize patterns, interpret inputs, and generate accurate outputs. These datasets may include text, images, audio files, video streams, or structured records. Through annotation, raw data is enriched with contextual information such as object identification, sentiment classification, behavioral tagging, contextual relationships, and event recognition. This structured data enables systems to understand what they are processing, allowing them to make informed predictions and decisions. <strong>Without proper annotation, systems lack clarity and often produce inconsistent or unreliable outcomes.</strong></p>
          </div>


          <div className="row pt-3 pb-3">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3" >
              <div className="whychoosebox h-100 mb-3">
                <h5 className="fw-medium mb-3">Improve System Accuracy</h5>
                <p>Clearly labeled data reduces ambiguity, enabling systems to interpret inputs correctly and generate reliable outputs.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 ">
                <h5 className="fw-medium mb-3">Enable Automation</h5>
                <p>Annotated datasets allow systems to automate repetitive processes such as document classification, transaction analysis, and customer interaction management.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 ">
                <h5 className="fw-medium mb-3">Strengthen Decision-Making</h5>
                <p>Structured data enhances predictive capabilities, allowing organizations to forecast trends and identify potential risks.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 ">
                <h5 className="fw-medium mb-3">Enhance Customer Experience</h5>
                <p>Well-trained systems can personalize interactions, improve response times, and deliver more relevant recommendations.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 ">
                <h5 className="fw-medium mb-3">Reduce Operational Risk</h5>
                <p>Annotation supports anomaly detection and fraud identification, strengthening risk management strategies.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 p-0">
                <img src="/images/whychoose-image.webp" className="img-fluid" alt="Why AI Data Annotation" />
              </div>
            </div>
          </div>
        </div>


        <div className="row pt-5">
          <div className="col-md-12">
            <h2>Types of AI Data Annotation We Offer</h2>
            <p>Different industries require different types of data interpretation. Our services cover a wide range of annotation formats designed to support diverse operational needs. Our data annotation services cover multiple data formats to ensure our clients can build intelligent systems tailored to their business.</p>
          </div>
        </div>
        <ServiceSlider services={services} />


        <div className="mb-3 pt-3 pb-1">
          <h2> Our AI Data Annotation Process
          </h2>
          <p className="mb-0"> At Tech2Globe, we follow a structured workflow to ensure quality, consistency, and scalability in every annotation project. From initial analysis to final delivery, our team ensures precision and contextual relevance.</p>

          <div className="py-5">
            <div className="container">
              <div className="row text-center g-4">

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaFileContract />
                    </div>
                    <h5 className="fw-bold">Requirement Analysis</h5>
                    <p className="mb-0">We understand your system goals, dataset structure, and business requirements. Our team works closely with your stakeholders to gather detailed specifications and define the scope of annotation.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaClipboardList />
                    </div>
                    <h5 className="fw-bold">Data Preparation</h5>
                    <p className="mb-0">Raw datasets are cleaned, deduplicated, and standardized before labeling begins. This preparation phase ensures consistency and quality throughout the annotation process.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaUsersCog />
                    </div>
                    <h5 className="fw-bold">Annotation Execution</h5>
                    <p className="mb-0">Specialized teams label datasets according to predefined guidelines and contextual specifications. Each annotation is executed with precision to ensure systems receive accurate training inputs.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaVial />
                    </div>
                    <h5 className="fw-bold">Quality Review</h5>
                    <p className="mb-0">Multi-level validation ensures contextual accuracy and consistency across all datasets. We implement structured review mechanisms to verify labeling integrity and maintain quality standards.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaCloudUploadAlt />
                    </div>
                    <h5 className="fw-bold">Final Delivery</h5>
                    <p className="mb-0">Annotated datasets are delivered in formats compatible with your systems and ready for immediate integration. We provide documentation and support to ensure seamless implementation into your workflows.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        <div className="row pt-5 pb-5 whychoosedev">
          <div className="col-md-12">
            <h2 className="mb-4">Benefits of Partnering with Tech2Globe</h2>
            <p>Choosing the right annotation partner directly impacts system performance and project timelines. At Tech2Globe, we offer a unique blend of technical expertise, industry knowledge, and quality assurance processes to deliver annotation services that create real value for your business.</p>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="bordered-card-wrapper">
                <div className="custom-card">
                  <h5>Scalability</h5>
                  <p>Our services support both small pilot projects and enterprise-level datasets. We scale annotation processes to accommodate growing data volumes and increasing complexity.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bordered-card-wrapper">
                <div className="custom-card">
                  <h5>Accuracy</h5>
                  <p>Context-driven labeling improves system learning outcomes. Our multi-level validation ensures datasets meet quality standards for reliable model training.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bordered-card-wrapper">
                <div className="custom-card">
                  <h5>Industry Expertise</h5>
                  <p>We tailor annotation strategies to specific business needs and industry requirements, ensuring systems are trained on relevant and meaningful data.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bordered-card-wrapper">
                <div className="custom-card">
                  <h5>Secure Handling</h5>
                  <p>Data protection and compliance are maintained throughout the annotation process. We implement encryption protocols and access controls to ensure security.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bordered-card-wrapper">
                <div className="custom-card">
                  <h5>Faster Deployment</h5>
                  <p>Well-annotated datasets accelerate system readiness and time-to-market. Our efficient processes ensure projects move from annotation to deployment quickly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <IndustryApplication data={industryData} />

        <div className="row pt-5 pb-5 invest-section">
          <div className="col-md-12">
            <h2>Why Businesses Invest in AI Data Annotation</h2>
            <p className="mb-4">Organizations across industries are prioritizing high-quality data annotation to build intelligent systems that deliver measurable results and maintain competitive advantage.</p>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 mb-2">
                <div className="white-dashed-box h-100 mb-2">
                  <h3><FaCog className="me-2" /> Improved System Accuracy</h3>
                  <p className="mb-0">Well-annotated data enables systems to recognize patterns accurately, reducing errors and delivering reliable outputs.</p>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div className="white-dashed-box h-100 mb-2">
                  <h3><FaBrain className="me-2" /> Enhanced Decision Support</h3>
                  <p className="mb-2">Quality datasets train systems to provide predictive insights and support informed strategic decision-making.</p>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div className="white-dashed-box h-100 mb-2">
                  <h3><FaUserCheck className="me-2" /> Better Customer Experience</h3>
                  <p className="mb-2">Annotated training data improves personalization, recommendation systems, and customer interaction quality.</p>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div className="white-dashed-box h-100 mb-2">
                  <h3><FaCoins className="me-2" /> Process Automation</h3>
                  <p className="mb-2">High-quality annotations enable reliable automation of repetitive tasks, reducing manual effort and operational costs.</p>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div className="white-dashed-box h-100 mb-2">
                  <h3><FaTrophy className="me-2" /> Competitive Differentiation</h3>
                  <p className="mb-2">Custom annotated datasets train systems to solve business-specific challenges that generic solutions cannot address.</p>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div className="white-dashed-box h-100 mb-2">
                  <h3><FaRocket className="me-2" /> Future Ready Systems</h3>
                  <p className="mb-2">Structured annotations support continuous learning and system evolution as business needs and market conditions change.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="row pt-5 pb-5 bg-integration">
          <div className="col-md-6">
            <div className="block-fixed">
              <h2 className="text-white">Ensuring Accuracy and Consistency in Data Annotation</h2>
              <h4 className="text-white fw-normal mb-5">Multi-Layered Quality Assurance Processes</h4>
              <img src="images/Seamless-Integration.jpg" className="img-fluid integrationImg" alt="Data Annotation Quality Assurance" />
            </div>
          </div>
          <div className="col-md-6">
            <p className="mb-5">High-quality annotation requires more than simple labeling. It involves structured validation processes, contextual understanding, and continuous monitoring to ensure datasets remain reliable for training purposes.</p>
            <div className="int-card mb-3">
              <h5 className="mb-3">Multi-Level Review Process</h5>
              <p>Every dataset undergoes multiple review stages to ensure labeling accuracy and contextual alignment.</p>
            </div>
            <div className="int-card mb-3">
              <h5 className="mb-3">Consistency Validation</h5>
              <p>We ensure uniform tagging standards across datasets so systems receive stable learning inputs.</p>
            </div>
            <div className="int-card mb-3">
              <h5 className="mb-3">Error Detection</h5>
              <p>Structured workflows identify inconsistencies early and correct them before final delivery.</p>
            </div>
            <div className="int-card mb-3">
              <h5 className="mb-3">Continuous Monitoring</h5>
              <p>Ongoing performance insights help refine annotation quality and maintain long-term dataset usability.</p>
            </div>
            <div className="int-card">
              <h5 className="mb-3">Context-Driven Accuracy</h5>
              <p>We maintain contextual integrity throughout annotation to ensure systems receive meaningful training data.</p>
            </div>
          </div>
        </div>

        <div className="row pt-5 pb-5 development-process-section">
          <div className="col-md-12 text-center">
            <h2>Converting Raw Information into Actionable Intelligence</h2>
            <h5 className="fw-normal mb-3">
              A Structured Approach to Annotation Excellence
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
                  <h2 className="mb-4">Future-Proof Your Intelligent Systems</h2>
                  <p>Reliable annotation enables systems to move beyond automation into predictive intelligence. As businesses evolve and operational needs change, annotation quality directly impacts system performance and business outcomes.</p>
                  <p>By investing in structured AI Data Annotation, organizations can improve operational performance, enhance customer engagement, strengthen decision-making, and support continuous innovation.</p>
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