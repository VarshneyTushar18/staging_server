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
  title: "Chatbot Development Services | AI Chatbot Development  | Tech2globe",
  description:
    "Tech2globe is an AI-Based Chatbot Development provides industry specifc chatbots to improve customer engagement and business efficiency. We can integrated across multiple platforms and reduce overall operational costs. Get a FREE consultation today!",

  openGraph: {
    title: "Chatbot Development Services | AI Chatbot Development  | Tech2globe",
    description:
      "Tech2globe is an AI-Based Chatbot Development provides industry specifc chatbots to improve customer engagement and business efficiency. We can integrated across multiple platforms and reduce overall operational costs. Get a FREE consultation today!",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/ai-chatbot-development",
  },

  twitter: {
    card: "Tech2Globe",
    title: "Chatbot Development Services | AI Chatbot Development  | Tech2globe",
    description:
      "Tech2globe is an AI-Based Chatbot Development provides industry specifc chatbots to improve customer engagement and business efficiency. We can integrated across multiple platforms and reduce overall operational costs. Get a FREE consultation today!",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/ai-chatbot-development",
  },
};

const pageHeaderData = {
  title: "AI Chatbot Development",
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


export default function AwsDevelopment() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="AI Chatbot Development" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="AI Chatbot Development" imageSrc="/images/services/emerging-technologies-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Highly-trained machine developers at Tech2Globe build chatbots that help companies win. We use the latest state-of-the-art Artificial Intelligence & Machine Learning technologies to create smart chatbots for global companies that act, chat & react like a human.</p>
                <p>Tech2Globe is one of the <strong>best AI Chatbots Development Company</strong> providing <strong>Custom AI chatbot development</strong> in India. At Tech2Globe, we provide various companies with chatbot production facilities. Our chatbots are trained with verticals of various capabilities. From previous experience, our machine learning models will learn on their own. Our chatbots can learn both in supervised and unmonitored settings.</p>
              </div>

              <div className="row pt-3 pb-3">
                <h4>Our AI Chatbot Development Services</h4>
                <hr />
                <p>Develop chatbots that are trained in specific sectors and domains, such as chatbot for customer support, healthcare, e-commerce, online food ordering, shipping, customer support, banking, and insurance, etc.</p>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="d-flex gap-3">
                    <Image src="/images/services/service-inner/system-integration.png" width={55} height={55} alt="	" />
                    <div className="context">
                      <h5>ERP Systems Integration</h5>
                      <p>Integrate chatbots with enterprise-wide ERP systems that deliver actionable business insights and are equipped with analytical capabilities.</p>
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <Image src="/images/services/service-inner/microsoft.png" width={55} height={55} alt="Microsoft Bot Development" />
                    <div className="context">
                      <h5>Microsoft Bot Development</h5>
                      <p>Conversational AI has allowed Chatbots to make the most of the Microsoft Platform and its integrated ecosystem with fewer data to learn more and manage complex responses.</p>
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <Image src="/images/services/service-inner/facebook.png" width={55} height={55} alt="Facebook Bot Development" />
                    <div className="context">
                      <h5>Facebook Bot Development</h5>
                      <p>Manage pre-sales inquiries, FAQs, customer service, and connect with millions of users effectively with intelligent Wit. AI-built Facebook Messenger bots.</p>
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <Image src="/images/services/service-inner/voice-enabled.png" width={55} height={55} alt="Voice-Enabled Chatbots" />
                    <div className="context">
                      <h5>Voice-Enabled Chatbots</h5>
                      <p>Awe your customers with Alexa, Siri, or any other Text to Speech (TTS) and Voice Recognition API personalized app built for your brand.</p>
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <Image src="/images/services/service-inner/chatbot.png" width={55} height={55} alt="Technologies from Chatbot" />
                    <div className="context">
                      <h5>Technologies from Chatbot</h5>
                      <p>We help customers embrace this technology and <strong>Custom AI chatbot development</strong> strategy for a cross-section of industries based on obtaining the first-mover advantage.</p>
                    </div>
                  </div>

                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="d-flex gap-3">
                    <Image src="/images/services/service-inner/banking.png" width={55} height={55} alt="Banking Bots" />
                    <div className="context">
                      <h5>Banking Bots</h5>
                      <p>To conduct banking-related problems such as customer service, grievances, personal assistant, ATM assistant, and as stock trading bots, safe and scalable chatbots.</p>
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <Image src="/images/services/service-inner/ecommerce.png" width={55} height={55} alt="E-Commerce Bots" />
                    <div className="context">
                      <h5>E-Commerce Bots</h5>
                      <p>Chatbots manage e-commerce issues such as complaints or questions related to payment, personalized product quest, as well as order monitoring.</p>
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <Image src="/images/services/service-inner/insurance-new.png" width={55} height={55} alt="Insurance Bots" />
                    <div className="context">
                      <h5>Insurance Bots</h5>
                      <p>Advanced AI bots administer insurance practices, advise, and resolve lawsuits, propose insurance plans, and sell them.</p>
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <Image src="/images/services/service-inner/hospitality.png" width={55} height={55} alt="Healthcare Bots" />
                    <div className="context">
                      <h5>Healthcare Bots</h5>
                      <p>Healthcare, health assistance, ambulance navigator, and online emergency manager related software.</p>
                    </div>
                  </div>

                  <div className="d-flex gap-3">
                    <Image src="/images/services/service-inner/travel.png" width={55} height={55} alt="	" />
                    <div className="context">
                      <h5>Travel & Hospitality Bots</h5>
                      <p>Bots can boost the experience of travel to handle updates, sightseeing destinations, as well as recommend local attractions.</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger pb-3">Benefits of AI Chatbot Development</h2>
                <div className="row pb-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Easy implementation</h6>
                    <p>Chatbots can be easily integrated with your current messaging channels, such as SMS, Facebook, etc., to serve your services on their client site.</p>

                    <h6>Enhanced internal connectivity</h6>
                    <p>For the internal use of any company, chatbots can be leveraged to interact efficiently with vendors, suppliers, and workers.</p>

                    <h6>Support from round-the-clock</h6>
                    <p>Chatbots operate 24/7, so it can provide consumers with quick answers while retaining a clear voice of the brand.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>A faster rate of answer</h6>
                    <p>The chatbot can act on their desires quickly and helps to collect data from clients and gain feedback to cause further interaction.</p>

                    <h6>Customized experience</h6>
                    <p>Chatbots will recognize each user and are likely to provide their needs and desires with a personalized experience.</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Steps in the life cycle of our Chatbot development?</h4>
                <hr />
                <p>When building chatbot applications, we follow the following methodology. Our chatbot developers make sure that at every stage, the chatbot creation works smoothly.</p>
                <div className="row pb-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Conversation Design</p>
                    <p className="mb-0"><FaHandPointRight /> Chatbot Architecture</p>
                    <p className="mb-0"><FaHandPointRight /> Natural Language Processing</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Processing Pipeline</p>
                    <p className="mb-0"><FaHandPointRight /> Deployment</p>
                    <p className="mb-0"><FaHandPointRight /> Integration</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Choose Tech2Globe?</h4>
                <p>Not only do we provide the Best chatbot development framework, but we also provide our customers with a great experience, and we plan to develop a chatbot for business. Our facilities include but are not restricted to:</p>
                <p className="mb-0"><FaHandPointRight /> Security of idea by having NDA signed</p>
                <p className="mb-0"><FaHandPointRight /> Initial sessions to discuss approach, characteristics, and pricing plans</p>
                <p className="mb-0"><FaHandPointRight /> With the project management tool, organizing the project in stages</p>
                <p className="mb-0"><FaHandPointRight /> Wireframing and prototyping to guarantee the optimal UI for the software</p>
                <p className="mb-0"><FaHandPointRight /> Free call for policies to optimize app functionality, schedule marketing, and monetize options</p>
                <p className="mb-0"><FaHandPointRight /> Procedures of scalable growth</p>
                <p className="mb-0"><FaHandPointRight /> Pre-engineered boilerplates are used to promote growth and provide cost-effective solutions</p>
                <p className="mb-0"><FaHandPointRight /> AI chatbots for small business</p>
                <p className="mb-0"><FaHandPointRight /> Effective communication is retained through Trello, Slack & Skype</p>
                <p className="mb-0"><FaHandPointRight /> Any work done is subject to automated quality assurance tests</p>
                <p className="mb-0"><FaHandPointRight /> The optimized and clean practice of coding</p>
                <p className="mb-0"><FaHandPointRight /> Code commitments to ensure transparency regularly</p>
                <p ><FaHandPointRight /> To ensure accountability, the standard code commits</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Hire Chatbot Developer from Tech2Globe</h4>
                <p>Tech2Globe&apos;s Chatbot developers are updated with emerging patterns, maintain efficient contact, and provide different expertise to build intriguing Chatbot solutions. Choose from a list of acceptable applicants, and let&apos;s get started.</p>
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
