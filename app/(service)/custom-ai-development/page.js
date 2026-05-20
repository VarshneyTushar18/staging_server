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
    title: "Initial Consultation",
    description:
      "We analyze your business objectives, operational challenges, and data ecosystem.",
    icon: <FaComment />,
  },
  {
    id: 2,
    title: "Requirement Analysis",
    description:
      "Detailed documentation of technical specifications and expected outcomes.",
    icon: <FaClipboardList />,
  },
  {
    id: 3,
    title: "Architecture & Strategy Design",
    description:
      "Designing scalable frameworks aligned with performance and security requirements.",
    icon: <FaProjectDiagram />,
  },
  {
    id: 4,
    title: "Model Development & Testing",
    description:
      "Building intelligent systems and validating them through structured testing protocols.",
    icon: <FaRobot />,
  },
  {
    id: 5,
    title: "Deployment & Integration",
    description:
      "Ensuring smooth integration within your current infrastructure.",
    icon: <FaCloudUploadAlt />,
  },
  {
    id: 6,
    title: "Performance Monitoring & Optimization",
    description:
      "Continuous monitoring, model refinement, and performance improvements.",
    icon: <FaChartLine />,
  },
  {
    id: 7,
    title: "Ongoing Support",
    description:
      "Regular updates, maintenance, and scalability enhancements.",
    icon: <FaHeadset />,
  },
];

const futureData = [
  {
    title: "AI Application Development",
    desc: "We build smart applications that analyze data, predict outcomes, and automate workflows. Our team ensures seamless integration with your existing infrastructure while maintaining high security and performance standards.",
  },
  {
    title: "Generative AI Solutions",
    desc: "Leverage advanced generative models to create content, automate customer interactions, generate insights, and improve operational efficiency. Our solutions are designed to deliver measurable business impact.",
  },
  {
    title: "Prompt Engineering Services",
    desc: "Maximize the performance of language models with structured prompts and optimized interaction frameworks. We design and refine prompts to ensure accurate, consistent, and goal oriented outputs.",
  },
  {
    title: "AI API Integration",
    desc: "We integrate powerful APIs into your platforms to enable automation, predictive analytics, natural language processing, and intelligent recommendations without disrupting your existing systems.",
  },
  {
    title: "AI Chatbot Development",
    desc: "Enhance customer engagement with intelligent chatbots that provide real time support, automate responses, and improve user satisfaction across websites, mobile apps, and messaging platforms.",
  },
];

const services = [
  {
    title: "AI Strategy & Consulting",
    desc: "Our AI experts work with your team to develop a comprehensive AI strategy tailored to your business goals. We help identify areas where AI can drive the most impact, and then we create a roadmap for implementing AI solutions that align with your objectives.",
    points: [
      "Identifying AI opportunities",
      "Business impact analysis",
      "Roadmap creation",
      "Technical feasibility studies",
    ],
  },
  {
    title: "Machine Learning Development",
    desc: "We build custom machine learning models that enable businesses to make smarter, data driven decisions. Whether you need predictive analytics, recommendation systems, or anomaly detection models, we’ll tailor the right machine learning algorithms to meet your needs.",
    points: [
      "Supervised and unsupervised learning models",
      "Predictive analytics and forecasting",
      "Data mining and clustering",
      "Custom recommendation systems",
    ],
  },
  {
    title: "Natural Language Processing (NLP)",
    desc: "Natural Language Processing (NLP) allows computers to understand, interpret, and respond to human language. We develop custom NLP solutions that help businesses improve customer service, automate content generation, and gain insights from unstructured text data.",
    points: [
      "Sentiment analysis",
      "Chatbots and virtual assistants",
      "Text classification and summarization",
      "Language translation models",
    ],
  },
  {
    title: "AI Powered Automation",
    desc: "We help businesses integrate AI into their workflows to automate routine tasks, optimize operations, and enhance productivity. Custom AI powered automation solutions can help you reduce manual intervention and increase efficiency.",
    points: [
      "Workflow automation",
      "Robotic Process Automation (RPA)",
      "Intelligent process automation (IPA)",
      "Real-time decision making automation",
    ],
  },
  {
    title: "Computer Vision Development",
    desc: "Computer vision enables machines to interpret and understand visual data from the world. We develop custom computer vision applications for industries such as manufacturing, healthcare, and retail, helping businesses automate processes and enhance visual data analysis.",
    points: [
      "Object recognition and tracking",
      "Image classification and segmentation",
      "Video analytics",
      "Facial recognition and biometric systems",
    ],
  },
  {
    title: "Custom AI Integration & Implementation",
    desc: "We ensure seamless integration of AI solutions into your existing systems, applications, and workflows. Our team works with your infrastructure to ensure that AI tools are fully integrated and functional, offering support throughout the entire implementation process.",
    points: [
      "Integration with existing platforms (CRM, ERP, etc.)",
      "Cloud-based AI infrastructure setup",
      "API development for AI services",
      "End-to-end solution implementation",
    ],
  },
  {
    title: "AI Maintenance & Support",
    desc: "AI systems require ongoing monitoring, optimization, and maintenance to ensure peak performance. Our team provides continuous support for the AI solutions we develop, offering regular updates, model retraining, and troubleshooting to ensure your AI tools evolve with your business needs.",
    points: [
      "Model retraining and optimization",
      "Ongoing performance monitoring",
      "Support for scaling and system upgrades",
      "Troubleshooting and bug fixing",
    ],
  },
];

const industryData = [
  {
    left: {
      title: "Healthcare",
      desc: "Improve patient data management, diagnostic accuracy, and predictive healthcare analytics.",
    },
    right: {
      title: "Retail & E-commerce",
      desc: "Enhance personalization, demand forecasting, pricing optimization, and inventory planning.",
    },
  },
  {
    left: {
      title: "Finance",
      desc: "Strengthen fraud detection systems, automate compliance processes, and improve forecasting accuracy.",
    },
    right: {
      title: "Education",
      desc: "Enable adaptive learning models, personalized content delivery, and performance analysis tools.",
    },
  },
  {
    left: {
      title: "Manufacturing",
      desc: "Optimize supply chain processes, implement predictive maintenance systems, and improve production efficiency.",
    },
    right: {
      title: "Logistics",
      desc: "Improve route optimization, shipment tracking, and operational forecasting.",
    },
  },
];


const ctaData = [
  {
    title: "Contact Us for Custom AI Development Services",
    description: [
      "Partner with Tech2Globe to design intelligent, scalable solutions tailored to your business. Our experienced development team is ready to help you streamline operations, enhance customer experiences, and unlock the full potential of your data.",
      "Let’s build smarter systems that drive measurable growth."
    ],
    buttonText: "Get in Touch",
    buttonLink: "/contact-us"
  }
];

const faqData = [
  {
    question: "What is Custom AI Development?",
    answer:
      "Custom AI Development refers to building intelligent systems tailored specifically to a company’s operational needs rather than using pre built generic platforms.",
  },
  {
    question: "How long does a typical project take for AI Development?",
    answer:
      "Project timelines vary depending on complexity, integration requirements, and scalability goals. Small scale systems may take weeks, while enterprise level projects may take several months.",
  },
  {
    question: "Can these systems integrate with existing business software?",
    answer:
      "Yes. Our solutions are designed to integrate seamlessly with CRM platforms, ERP systems, and other enterprise software.",
  },
  {
    question: "Is data security maintained during development?",
    answer:
      "Absolutely. We implement strict encryption protocols, access controls, and compliance standards to ensure data protection.",
  },
  {
    question: "Do you provide post launch support?",
    answer:
      "Yes. We offer ongoing monitoring, maintenance, optimization, and feature enhancements after deployment.",
  },
  {
    question: "Which industries benefit the most from Custom AI Development?",
    answer:
      "Healthcare, finance, retail, e commerce, education, manufacturing, and logistics are among the industries that benefit significantly from intelligent automation and predictive analytics.",
  },
  {
    question: "Can the system scale as my business grows?",
    answer:
      "Yes. Our architecture is built with scalability in mind, allowing your solution to evolve with increased users, data volumes, and operational complexity.",
  },
];


export default function CustomAiDevelopment() {
  return (

    <>
      <Breadcrumb parentName="Services" pageName="Custom AI Development" />
      <BrandSection />
      <div className="container">

        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 page-content">
            <div className="cardblock">
              <h2>Custom AI Development Services</h2>
              <h5 className="fw-normal mb-3">Transform Your Operations with Intelligent, Scalable Digital Solutions</h5>
              <p>Businesses today operate in a fast moving digital environment where automation, accuracy, and data driven strategies determine long term success. Custom AI Development enables organizations to design intelligent systems tailored specifically to their operations, helping them streamline processes, improve efficiency, and unlock smarter decision making.</p>
              <p>At Tech2Globe, we build customized intelligent AI solutions that align with your business objectives rather than offering one size fits all platforms. Our approach focuses on solving real operational challenges using advanced technologies, structured architecture, and scalable development practices.</p>
              <p>From initial consultation to final deployment, our team ensures that every system integrates seamlessly into your existing infrastructure. We prioritize minimal disruption, high performance, and long term scalability so your organization can innovate confidently while maintaining operational stability.</p>
              <p>Whether your goal is to automate internal workflows, enhance customer experiences, or leverage data for strategic advantage, our Custom AI Development services are designed to support measurable growth and sustained competitive advantage.</p>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 page-content">
            <div className="cardimage">
              <img src="/images/custom-ai-image.webp" className="img-fluid" alt="Custom AI Development Services" />
            </div>
            <div className="cta-btn">
              <h5 className="fw-normal mb-4">Talk To Our Experts Now!</h5>
              <a href="/contact-us" className="btn btn-danger">Get in Touch With Us</a>
            </div>
          </div>
        </div>



        <div className="row pt-5 whychoosesection">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 page-content">
            <h2>Why Choose Custom AI Development?</h2>
            <p>AI is revolutionizing industries by automating processes, enhancing decision making, and providing innovative customer solutions. However, to truly harness the power of AI, businesses need <strong>customized solutions</strong> that are tailored to their specific needs. Here’s why custom AI development is the future of business:</p>
          </div>


          <div className="row pt-3 pb-3">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3" >
              <div className="whychoosebox h-100 mb-3">
                <h5 className="fw-medium mb-3">Tailored Solutions for Your Unique Business Needs</h5>
                <p>Every business is unique, and so are its challenges. Off the shelf AI solutions may not fully address your specific requirements. Custom AI development allows you to design a solution that’s built specifically for your business, with personalized features and functionalities to solve your exact problems.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 ">
                <h5 className="fw-medium mb-3">Greater Efficiency and Automation</h5>
                <p>AI driven automation can optimize repetitive tasks, streamline operations, and reduce human error. Custom AI development ensures that automation is seamlessly integrated into your processes, boosting operational efficiency and freeing up resources for more strategic tasks.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 ">
                <h5 className="fw-medium mb-3">Scalability and Flexibility</h5>
                <p>As your business grows, your AI solution should be able to scale alongside it. Custom AI solutions are designed with scalability in mind, ensuring that they can adapt to increasing data volumes and more complex requirements over time, providing long term value.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 ">
                <h5 className="fw-medium mb-3">Competitive Advantage</h5>
                <p>Custom AI development empowers your business to gain a competitive edge. By leveraging AI in a way that’s unique to your business model, you can unlock new revenue streams, improve decision making, and provide personalized experiences that set you apart from competitors.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 ">
                <h5 className="fw-medium mb-3">Advanced Analytics and Insights</h5>
                <p>Custom AI solutions enable businesses to analyze vast amounts of data, uncover patterns, and make data driven decisions. With the right AI tools, businesses can gain real time insights, optimize performance, and forecast future trends.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
              <div className="whychoosebox h-100 p-0">
                <img src="/images/whychoose-image.webp" className="img-fluid" alt="Why Choose Custom AI Development" />
              </div>
            </div>
          </div>
        </div>


        <div className="row pt-5">
          <div className="col-md-12">
            <h2>Our Custom AI Development Services</h2>
            <p>At Tech2Globe, we offer a wide range of Custom AI Development Services that are designed to fit the specific needs of your business. Whether you’re looking to develop AI powered applications, enhance your data analysis capabilities, or integrate machine learning algorithms into your workflows, we’ve got you covered.</p>
          </div>
        </div>
        <ServiceSlider services={services} />


        <div className="mb-3 pt-3 pb-1">
          <h2> How We Approach Custom AI Development
          </h2>
          <p className="mb-0"> At Tech2Globe, we follow a structured approach to ensure the success of every custom AI project. From initial consultation to post implementation support, our team is committed to delivering AI solutions that meet your business needs.</p>

          <div className="py-5">
            <div className="container">
              <div className="row text-center g-4">

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaFileContract />
                    </div>
                    <h5 className="fw-bold">Discovery & Requirement Analysis</h5>
                    <p className="mb-0">We begin by understanding your business challenges, objectives, and vision. Our team works closely with your stakeholders to gather detailed requirements and define the scope of the project. This step ensures that we develop a solution that aligns with your business goals.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaUsersCog />
                    </div>
                    <h5 className="fw-bold">Solution Design & Prototyping</h5>
                    <p className="mb-0">Once we understand your needs, our AI experts design a solution tailored to your specifications. We build prototypes to showcase potential AI models, workflows, and application interfaces to get feedback and make necessary adjustments before development.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaCode />
                    </div>
                    <h5 className="fw-bold">Development & Implementation</h5>
                    <p className="mb-0">Our development team begins building the AI solution, using the latest technologies and frameworks. We ensure seamless integration with your existing systems and applications, and the solution is built to scale and perform efficiently in real world environments.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaVial />
                    </div>
                    <h5 className="fw-bold">Testing & Optimization</h5>
                    <p className="mb-0">Every AI model and application goes through rigorous testing to ensure accuracy, scalability, and security. We optimize performance, address any bugs or issues, and validate that the solution meets the original business objectives.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaRocket />
                    </div>
                    <h5 className="fw-bold">Deployment & Monitoring</h5>
                    <p className="mb-0">After successful testing, we deploy the custom AI solution into your live environment. We monitor its performance closely to ensure it operates smoothly, making adjustments as needed to maximize its effectiveness.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="p-4 shadow-sm rounded bg-light h-100">
                    <div className="mb-3 text-primary fs-2">
                      <FaSyncAlt />
                    </div>
                    <h5 className="fw-bold">Continuous Improvement</h5>
                    <p className="mb-0">AI is an evolving field, and so are your business needs. We offer ongoing support, optimization, and retraining of AI models to ensure the solution continues to deliver value and adapt to new challenges.</p>
                  </div>
                </div>


              </div>
            </div>
          </div>

        </div>

        <div className="row pt-5 pb-5 whychoosedev">
          <div className="col-md-12">
            <h2 className="mb-4">Why Choose Tech2Globe for Custom AI Development?</h2>
            <p>Choosing the right partner for your custom AI development needs is crucial to the success of your project. At Tech2Globe, we offer a unique blend of technical expertise, industry knowledge, and innovative thinking to deliver AI solutions that create real value for your business.</p>
          </div>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="bordered-card-wrapper">
                <div className="custom-card">
                  <h5>Expertise in AI Technologies</h5>
                  <p>Our team of AI developers is skilled in a wide range of AI technologies, including machine learning, deep learning, NLP, computer vision, and automation, ensuring that we can tackle any AI challenge.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bordered-card-wrapper">
                <div className="custom-card">
                  <h5>Proven Track Record</h5>
                  <p>With years of experience, we’ve helped businesses across various sectors implement AI solutions that drive measurable results. Our portfolio showcases the success stories of clients who’ve benefited from our custom AI development services.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bordered-card-wrapper">
                <div className="custom-card">
                  <h5>Collaborative Approach</h5>
                  <p>We work closely with your team throughout the entire development process, ensuring that your input is always valued, and the solution meets your expectations.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bordered-card-wrapper">
                <div className="custom-card">
                  <h5>Scalable & Future Proof Solutions</h5>
                  <p>Our custom AI solutions are designed to grow with your business. We focus on scalability, ensuring that the solution can handle future needs and adapt to technological advancements.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="bordered-card-wrapper">
                <div className="custom-card">
                  <h5>End to End Support</h5>
                  <p>From initial strategy and design to post deployment maintenance, we offer comprehensive support at every stage of the project lifecycle, ensuring your AI solution remains effective and up to date.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <IndustryApplication data={industryData} />

        <div className="row pt-5 pb-5 invest-section">
          <div className="col-md-12">
            <h2>Why Businesses Invest in Custom AI Development</h2>
            <p className="mb-4">Organizations across industries are adopting intelligent systems to enhance operational performance and maintain a strategic edge.</p>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4 mb-2">
                <div className="white-dashed-box h-100 mb-2">
                  <h3><FaCog className="me-2" /> Operational Efficiency</h3>
                  <p className="mb-0">Automation reduces manual intervention, accelerates task completion, and eliminates redundant processes.</p>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div className="white-dashed-box h-100 mb-2">
                  <h3><FaBrain className="me-2" /> Strategic Decision Support</h3>
                  <p className="mb-2">Data driven insights empower leadership teams to make informed decisions based on predictive analysis rather than assumptions.</p>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div className="white-dashed-box h-100 mb-2">
                  <h3><FaUserCheck className="me-2" /> Enhanced Customer Experience</h3>
                  <p className="mb-2">Personalization engines, smart communication systems, and recommendation models improve engagement and retention.</p>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div className="white-dashed-box h-100 mb-2">
                  <h3><FaCoins className="me-2" /> Cost Optimization</h3>
                  <p className="mb-2">By automating routine processes, businesses reduce overhead costs and improve resource allocation.</p>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div className="white-dashed-box h-100 mb-2">
                  <h3><FaTrophy className="me-2" /> Competitive Differentiation</h3>
                  <p className="mb-2">Custom built systems provide capabilities that generic solutions cannot replicate, helping businesses stand out in competitive markets.</p>
                </div>
              </div>

              <div className="col-md-4 mb-2">
                <div className="white-dashed-box h-100 mb-2">
                  <h3><FaRocket className="me-2" /> Future Ready Infrastructure</h3>
                  <p className="mb-2">Our architecture is designed to accommodate technological advancements and organizational expansion.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="row pt-5 pb-5 bg-integration">
          <div className="col-md-6">
            <div className="block-fixed">
              <h2 className="text-white">Seamless Integration with Business Infrastructure</h2>
              <h4 className="text-white fw-normal mb-5">Ensuring Secure and Smooth Implementation</h4>
              <img src="images/Seamless-Integration.jpg" className="img-fluid integrationImg" alt="Seamless Integration with Business Infrastructure" />
            </div>
          </div>
          <div className="col-md-6">
            <p className="mb-5">Implementation is a critical phase in any development project. Our AI integration strategy focuses on maintaining operational continuity while introducing advanced capabilities.</p>
            <div className="int-card mb-3">
              <h5 className="mb-3">Minimal Disruption</h5>
              <p>Deployment is carefully planned to prevent downtime and workflow interruptions.</p>
            </div>
            <div className="int-card mb-3">
              <h5 className="mb-3">Custom API Development</h5>
              <p>Secure APIs facilitate smooth communication between systems.</p>
            </div>
            <div className="int-card mb-3">
              <h5 className="mb-3">System Compatibility</h5>
              <p>Solutions are designed to integrate with CRM, ERP, and third party platforms.</p>
            </div>
            <div className="int-card mb-3">
              <h5 className="mb-3">Scalable Architecture</h5>
              <p>Systems can handle increasing data volumes, users, and expanding operational requirements.</p>
            </div>
            <div className="int-card">
              <h5 className="mb-3">Data Security & Compliance</h5>
              <p>We implement encryption protocols, access controls, and regulatory standards to ensure data protection.</p>
            </div>
          </div>
        </div>

        <div className="row pt-5 pb-5 development-process-section">
          <div className="col-md-12 text-center">
            <h2>Our Development Process</h2>
            <h5 className="fw-normal mb-3">
              A Structured Roadmap to Intelligent Transformation
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

        <div class="row pt-5 pb-5">
          <div class="col-md-12">
            <div class="future-wrapper">
              <div class="row">
                <div class="col-md-12">
                  <h2 class="mb-4">Future Proof Your Business with Custom AI Development</h2>
                  <p>Digital transformation is not a one time initiative; it is an ongoing evolution. By investing in Custom AI Development, organizations position themselves to adapt quickly to changing market dynamics, technological advancements, and customer expectations.</p>
                  <p>Our solutions are designed not only to solve today’s challenges but also to prepare your business for future innovation.</p>
                </div>
              </div>

              <div class="row pt-3">
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
