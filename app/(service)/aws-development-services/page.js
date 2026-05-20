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
  title: "AWS Development Services | Amazon Consulting Services - Tech2globe",
  description:
    "Tech2globe is a reliable AWS development company, We offer AWS cloud application development, migration, consulting, cloud BI & analytics, and managed cloud services on AWS.",

  openGraph: {
    title: "AWS Development Services | Amazon Consulting Services - Tech2globe",
    description:
      "Tech2globe is a reliable AWS development company, We offer AWS cloud application development, migration, consulting, cloud BI & analytics, and managed cloud services on AWS.",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/aws-development-services",
  },

  twitter: {
    card: "Tech2Globe",
    title: "AWS Development Services | Amazon Consulting Services - Tech2globe",
    description:
      "Tech2globe is a reliable AWS development company, We offer AWS cloud application development, migration, consulting, cloud BI & analytics, and managed cloud services on AWS.",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/aws-development-services",
  },
};

const pageHeaderData = {
  title: "AWS Development Services",
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
      <Breadcrumb parentName="Technologies" pageName="AWS Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="AWS Development Services" imageSrc="/images/services/emerging-technologies-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Would you like to set up your virtual office and connect anywhere, anytime? In cloud computing, Amazon Cloud Services contributes significantly to it. Amazon Web Services (AWS), which manages your application, provides reliable, adaptable and affordable cloud computing tools.</p>
                <p>Tech2Globe is a <strong>world-leading AWS Consulting Services & Development Company</strong> for AWS. Our qualified AWS consultants have extensive experience in developing business applications that are stable, scalable, and cloud-powered. We design your solution from scratch and find the best ways to build a cloud application with high performance.</p>
                <p>By transferring them across the cloud to help you achieve your business goals more efficiently, we are experienced in reengineering your critical application. With differentiated <strong>AWS development services</strong>, we are committed to adding value to your business. Unlike conventional cloud consultants, while assisting customers in the cloud immigration process, Tech2Globe takes a holistic approach.</p>
              </div>

              <div className="row pt-3 pb-3">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="d-flex gap-3">
                    <Image src="/images/services/service-inner/app-dev.png" width={55} height={55} alt="IoT Apps Development" />
                    <div className="context">
                      <h5>IoT Apps Development</h5>
                      <p>Build an atmosphere for IoT. Allow real-time interactions with your devices, properties, field staff and customers. Use high-performance IoT apps developed with AWS to take intelligent actions.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="d-flex gap-3">
                    <Image src="/images/services/service-inner/data-analytics.png" width={55} height={55} alt="Data Platform & Analytics" />
                    <div className="context">
                      <h5>Data Platform & Analytics</h5>
                      <p>Safely manage your AWS data—smart real-time & predictive insights to open. Build a single view of your data and make simple and straightforward business decisions.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="d-flex gap-3">
                    <Image src="/images/services/service-inner/platform-based.png" width={55} height={55} alt="Platform-based development" />
                    <div className="context">
                      <h5>Platform-based development</h5>
                      <p>Use AWS platform to develop entrepreneur applications (across Network, Mobile, IoT & Analytics). Scalable cloud-native applications boost time-to-market.</p>
                    </div>
                  </div>
                </div>

                 <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="d-flex gap-3">
                    <Image src="/images/services/service-inner/migration.png" width={55} height={55} alt="AWS Adoption & Migration" />
                    <div className="context">
                      <h5>AWS Adoption & Migration</h5>
                      <p>Make fast use of AWS and new technology to rebuild your legacy systems or engineer existing apps. You are using AWS easily to understand the advantages of cloud technology.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Our Expertise in AWS Development</h4>
                <hr />
                <p>For both businesses and small entrepreneurs, AWS is a great tool. <strong>AWS cloud consulting services</strong> are among the securest and most flexible in modern digital space, apart from being highly technical. Tech2Globe is here to bring AWS development and get from cloud computing to highly specialized cloud applications the best out of AWS infrastructure.</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>AWS Compute Service</h6>
                    <p>
                      Tech2Globe a valuable AWS development company is also a leader in cloud services in all fields by offering a genuinely revolutionary approach AWS partner programs to cloud computing. Tech2Globe will quickly help you find the ideas you need as a professional development business.
                    </p>

                    <h6>AWS Security</h6>
                    <p>
                      AWS can be entirely trusted by the implementation of a high level of safety. The safety level always meets the highest expectations as the architecture of AWS is evolving rapidly.
                    </p>

                    <h6>AWS Analytics Service and Monitoring</h6>
                    <p>
                      It&apos;s easy to work via AWS services thanks to various analytical resources. By incorporating a system of different variations, an unwanted element of the chain can be easily eliminated that seems ineffective. With efficient research and control systems, this can be easily calculated.
                    </p>

                    <h6>AWS Storage</h6>
                    <p>
                      Data storage of AWS is now one of the biggest on the cloud industry. Also, the shop you don&apos;t use requires no overpayment. A variety of intelligent solutions are available to fit your requirements.
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>AWS Migration</h6>
                    <p>These services allow all necessary information to be systematically migrated to the cloud. The selection of tools lets you pick the best data or app migration strategy.</p>

                    <h6>AWS Cloud Automation and Management</h6>
                    <p>AWS is popular in the IT industry due to the creative approach. Various features are built by AWS that makes so simple to use in combination of different operations.</p>

                    <h6>AWS Operations and Reports</h6>
                    <p>AWS Web Development offers numerous types of databases for the creation of virtually any cloud application. To handle the information you need, you can easily prepare the necessary report.</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Choose Tech2Globe?</h4>
                <hr />
                <p>Tech2Globe is a <strong>modern application development partner</strong> of AWS and a leader in the development of Amazon Web Service. Our <strong>Experienced AWS Developers</strong> have vast skills to help businesses leverage Amazon Web Services.</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Customer Satisfaction</h6>
                    <p>We have a specific account manager and project manager to make sure all aspects of your relationship with us match.</p>

                    <h6>VPC Configuration</h6>
                    <p>You can completely manage your networking services using the framework VPC (Virtual Private Cloud) of Amazon Web Service.</p>

                    <h6>Extensive Experience</h6>
                    <p>We are well aware that AMAZON offers several years of experience adjusting to the new wave of scalable applications.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Database Configuration</h6>
                    <p>For efficiency, durability and accessibility, we can configure both SQL and No-SQL databases.</p>

                    <h6>24/7 Technical Support</h6>
                    <p>Our channels of communication are 24-hour connecting you to the right team of experts so that your projects can be less complicated and more efficient.</p>.
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Build Your Business with Tech2Globe</h4>
                <hr />
                <p>With powerful AWS implementation techniques, Tech2Globe is a leading <strong>Amazon AWS partner company</strong> that offers end-to-end AWS consulting services and growth solutions to solve challenging market challenges.</p>
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
