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
  title: "Blockchain Development Services | Best Blockchain Services -Tech2globe",
  description:
    "Tech2globe, as a leading Blockchain Development Company, has multidisciplinary expertise in various custom Blockchain development services. Our global network services, expertly matched to fit your most urgent business needs, on demand.",

  openGraph: {
    title: "Blockchain Development Services | Best Blockchain Services -Tech2globe",
    description:
      "Tech2globe, as a leading Blockchain Development Company, has multidisciplinary expertise in various custom Blockchain development services. Our global network services, expertly matched to fit your most urgent business needs, on demand.",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/blockchain-development-services",
  },

  twitter: {
    card: "Tech2Globe",
    title: "Blockchain Development Services | Best Blockchain Services -Tech2globe",
    description:
      "Tech2globe, as a leading Blockchain Development Company, has multidisciplinary expertise in various custom Blockchain development services. Our global network services, expertly matched to fit your most urgent business needs, on demand.",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/blockchain-development-services",
  },
};

const pageHeaderData = {
  title: "Blockchain Development Services",
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


export default function BlockChainDevelopment() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Blockchain Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Blockchain Development Services" imageSrc="/images/services/emerging-technologies-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>This digital era calls for safer business ideas, and it&apos;s simple with Blockchain technology. <strong>BlockChain development companies</strong> try to order Blockchain technology for company efficiency enhancement and safety stabilization.</p>
                <p>We understand the value of the technology, and we treat all the appropriate BlockChain solutions with the highest standard, as an experienced <strong>BlockChain development company</strong>. Through our blockchain development services, we have never skipped the use of authentic and holistic customers experience.</p>
                <p>As an industry-leading development company in India, with our premium <strong>BlockChain development services</strong> & solutions, we turn your business/industry processes into highly safe, scalable and transparent growth.</p>
                <p>Tech2Globe skills enhance the capabilities of business applications, smart contracts, solutions and BlockChain-based business networks in BlockChain service sectors. We use various tools, technologies, and protocols to build BlockChain applications safe and reliable. We collaborate with you to ensure full service and development at every level.</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className={Style.ContentDiv}>
                      <h4>Our Blockchain Development Services</h4>
                      <hr />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className={Style.ContentDiv}>
                      <h6>Enterprise Blockchain Solutions</h6>
                      <p>For different industries & businesses, we deliver the best <strong>BlockChain app development services</strong>. Our team of BlockChain experts creates and produces a BlockChain industry-specific ecosystem that can reshape the business with greater transparency and immutability.</p>

                      <h6>BlockChain AI Development</h6>
                      <p>Simplifying the AI BlockChain business brings about improvement in current transactions. As AI is now used in virtually all industries to handle the machine for decision-making and data security, our experts have used skillful methodologies to further develop the BlockChain environment by incorporating trendy AI BlockChain. We have tailored AI services, BlockChain solutions to improve business security and privacy.</p>

                      <h6>P2P Lending Blockchain Platform</h6>
                      <p>Our developers have BlockChain solutions to lend to borrowers, boost security and trust and accept crypto payments. We offer advanced peer-to-peer lending with intelligent contracts that allow users to quickly loan and loan money.</p>

                      <h6>Smart Contract Development & Audit</h6>
                      <p>Tech2Globe, a <strong>BlockChain development services company</strong> for the development of intelligent contracts starts with the unique design, auditing, development, and optimization of coded enterprise contracts to support process automation. Our smart contract audit service ensures that smart contracts are working in compliance with business requirements.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className={Style.ContentDiv}>
                      <h6>Cryptocurrency Development</h6>
                      <p>With creative ideas and their many years of experience in addressing specific issues, our experts have an unsurpassed crypto-solving approach that boosts our demand on the niche market. Also, our revolutionary security features configured by our experts bring revolutions in the financial industry.</p>

                      <h6>BlockChain Consulting Services</h6>
                      <p>We have a comprehensive insight and enable our customers to recognize their organization&apos;s future BlockChain technology. Our team will research the feasibility of the project, BlockChain platforms and tools to develop the best solution for BlockChain.</p>

                      <h6>Hyperledger Development</h6>
                      <p>Hyperledger is a BlockChain development where you will address open-source BlockChain problems and their resources to boost the collaboration for distributed ledgers. We can supply Hyperledger BlockChain for all companies.</p>

                      <h6>Create Your Blockchain</h6>
                      <p>Contribute your business concept with our technological guidelines, which aim to integrate leading technologies. Use our best-in-class script and pay only for the BlockChain feature used without investment in advance. We are shaping the business landscape with emerging technology in the form of BlockChain.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Our Expertise in BlockChain Development Services</h4>

                <ul className={Style.ThreeCol}>
                  <li>Supply chain</li>
                  <li>Healthcare </li>
                  <li>Insurance</li>
                  <li>E-commerce</li>
                  <li>Gaming</li>
                  <li>Identity Management</li>
                  <li>Digital Records</li>
                  <li>Voting</li>
                  <li>Finance Management</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Choose Tech2Globe for Blockhain development services?</h4>
                <p>Tech2Globe is the leading <strong>custom BlockChain development & outsourcing Company in India</strong> to deliver the best BlockChain solutions across all industries to boost your business. We use an established and knowledgeable team of BlockChain developers to use BlockChain solutions that fulfill all the needs of your business</p>

                <p className="mb-0"><FaHandPointRight /> High security and transparency</p>
                <p className="mb-0"><FaHandPointRight /> Valuable developers of BlockChain.</p>
                <p className="mb-0"><FaHandPointRight /> Personalized and creative solutions</p>
                <p className="mb-0"><FaHandPointRight /> Professional support up-to-date</p>
                <p><FaHandPointRight /> New development plan BlockChain</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Hire BlockChain Developers from Tech2Globe</h4>
                <p><strong>Hire BlockChain Developer India</strong> from us, who are there to give you the fastest possible time with the highest quality BlockChain services. All of our work is aimed at achieving maximum customer satisfaction.</p>
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
