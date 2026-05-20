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
  title: "AR VR App Development Company | AR VR Development Services| Tech2globe",
  description:
    "Tech2globe offer multi-platform AR VR app development services for desktop & mobile. Contact our experts for most immersive AR VR software development solutions.",
  keywords:
    "AR VR App Development Company, AR VR Development Services, AR VR Software Development",
  openGraph: {
    title: "AR VR App Development Company | AR VR Development Services| Tech2globe",
    description:
      "Tech2globe offer multi-platform AR VR app development services for desktop & mobile. Contact our experts for most immersive AR VR software development solutions.",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/ar-vr-app-development-company",
    type: "website"
  },
  twitter: {
    card: "Tech2Globe",
    title: "AR VR App Development Company | AR VR Development Services| Tech2globe",
    description:
      "Tech2globe offer multi-platform AR VR app development services for desktop & mobile. Contact our experts for most immersive AR VR software development solutions."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/ar-vr-app-development-company"
  }
};

const pageHeaderData = {
  title: "AR VR App Development Company",
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


export default function ArVrAppDevelopment() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Ar Vr App Development Company" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Ar Vr App Development Company" imageSrc="/images/services/emerging-technologies-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Tech2Globe – A <strong>virtual reality & augmented reality app development company</strong> utilizes the unprecedented ability of technology for increased and to deliver the most impressive online and mobile experience. With AR and VR applications, we create unique and captivating experiences that add value to the customer sector.</p>
                <p>By leveraging the power of increased and virtual reality, we redefine the interaction between users and your app. With the new frameworks from Apple and Google such as ARKit and ARCore, Tech2Globe professional lets you bring your expanded and online app design to life. Our AR and VR apps deliver the next generation of functionality to connect with the real world more creatively and practically.</p>
                <p>Tech2Globe has demonstrated expertise in providing <strong>VR and AR development services</strong> for customers from various vertical industries. The next application will be produced in collaboration with our own UI/UX team, application developers, digital producers and 3D artists.</p>
                <p>Enhanced and augmented reality for mobile platforms is much more than regular games and videos. We are fortunate to have AR/VR technologically updated developers who enjoy what they do. With the innovative and responsible team of developers, the technology is designed and applied every day.</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className={Style.ContentDiv}>
                      <h4 className="pb-3">Our Valuable AR/VR Development Services</h4>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="card text-center mb-3 h-100">
                      <img className="card-img-top ls-is-cached lazyloaded" alt="Business and solutions" src="/images/services/service-inner/business-and-solutions.jpg" />
                      <div className="card-body">
                        <h5 className="card-title h5">Business and solutions</h5>
                        <p className="card-text mb-0">Our delicately designed AR VR solutions offer outstanding graphic and content quality. Create on your requirements virtual fitting rooms, lecture equipment or digital kiosks.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="card text-center mb-3 h-100">
                      <img className="card-img-top ls-is-cached lazyloaded" alt="Social media apps" src="/images/services/service-inner/social-media-apps.jpg" />
                      <div className="card-body">
                        <h5 className="card-title h5">Social media apps</h5>
                        <p className="card-text mb-0">You can use AR VR powered 3D technologies to create your social media applications. Our professional developers can provide immersive content and cater to your users by exploring new reality enterprises.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="card text-center mb-3 h-100">
                      <img className="card-img-top ls-is-cached lazyloaded" alt="Visualization solutions" src="/images/services/service-inner/visualization-solutions.jpg" />
                      <div className="card-body">
                        <h5 className="card-title h5">Visualization solutions</h5>
                        <p className="card-text mb-0">Regardless of what your desires are, we create practical and imaginative visualization solutions, whether data analysis, operations management, training, presentation, or visual storytelling.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="card text-center mb-3 h-100">
                      <img className="card-img-top ls-is-cached lazyloaded" alt="Custom AR/VR solutions" src="/images/services/service-inner/ar-vr-solutions.jpeg" />
                      <div className="card-body">
                        <h5 className="card-title h5">Custom AR/VR solutions</h5>
                        <p className="card-text mb-0">The custom AR-VR applications improve the user experience that can be easily applied in multiple industries with new dimensions of reality. Our applications are visually appealing and functional, built with native VR SDKs, Unity and Unreal Engine.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="card text-center mb-3 h-100">
                      <img className="card-img-top ls-is-cached lazyloaded" alt="Game development" src="/images/services/service-inner/game-development.jpg" />
                      <div className="card-body">
                        <h5 className="card-title h5">Game development</h5>
                        <p className="card-text mb-0">Each of the high-quality gaming solutions is embedded in improved usability and high-quality graphics. AI algorithms, ML, and other tools like ARKit, ARCore and Unity combine our expert reality developers to create the best possible games.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="card text-center mb-3 h-100">
                      <img className="card-img-top ls-is-cached lazyloaded" alt="VFX VR development" src="/images/services/service-inner/vfx-vr-development.jpg" />
                      <div className="card-body">
                        <h5 className="card-title h5">VFX VR development</h5>
                        <p className="card-text mb-0">We can work with VFX and 360-degree videos with AR VR technology app development. Our 3D artists and C++ graphic designers will create stunning products for the entertainment industry by combining excellent space knowledge in your products.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="card text-center mb-3 h-100">
                      <img className="card-img-top ls-is-cached lazyloaded" alt="Magic Leap and Hololens AR glass development" src="/images/services/service-inner/magic-heap-development.jpg" />
                      <div className="card-body">
                        <h5 className="card-title h5">Magic Leap and Hololens AR glass development</h5>
                        <p className="card-text mb-0">For Android, Magic Leap and Hololens, among others, our expert AR/VR engineers provide glass-looking services that offer enhanced or virtual reality capabilities. We guarantee that your users will sculpt, paint and build objects by an interactive AR/VR experience.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="card text-center mb-3 h-100">
                      <img className="card-img-top ls-is-cached lazyloaded" alt="Training and development modules" src="/images/services/service-inner/training.jpg" />
                      <div className="card-body">
                        <h5 className="card-title h5">Training and development modules</h5>
                        <p className="card-text mb-0">We can make studies fun and interactive with virtual 3D animated models created with AR VR technologies. Our training and development models in institutions provide your users with powerful mobile experience.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="card text-center mb-3 h-100">
                      <img className="card-img-top ls-is-cached lazyloaded" alt="3D UI design and development" src="/images/services/service-inner/3d-ui-design.png" />
                      <div className="card-body">
                        <h5 className="card-title h5">3D UI design and development</h5>
                        <p className="card-text mb-0">In combination with expressive designs, social UX and gamification, we can use advanced UI elements in your apps to allow your users to interact with higher resolution headsets such as Oculus, Vive, and PlayStation VR.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Our Expertise</h4>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Business and Enterprise Solutions</p>
                    <p className="mb-0"><FaHandPointRight /> Marketing and Promotional Tools</p>
                    <p className="mb-0"><FaHandPointRight /> Gaming Apps</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Training and Development Modules</p>
                    <p className="mb-0"><FaHandPointRight /> Visualization Solutions</p>
                    <p className="mb-0"><FaHandPointRight /> Social Experiences</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">How Tech2Globe help you?</h4>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Rich user experience:</h6>
                    <p>In real-time AR/VR-driven, businesses can simulate data, combine digital data and provide customers with real-time feedback immediately.</p>

                    <h6>Personalization:</h6>
                    <p>AR/VR creates value by offering a new business model and custom content as the fourth major boundary. This increases brand loyalty and contributes to profits.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Enhanced customer retention:</h6>
                    <p>AR VR applications provide accurate movements, head movement and voice to maximize interaction with correct UX designs. This guarantees greater customer loyalty.</p>

                    <h6>Easy visualization:</h6>
                    <p>Easy data viewing performs several tasks for your business. It helps to see workable progress products.</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Why choose Tech2Globe?</h4>
                <p><strong>As a top AR/VR application development company</strong>, we provide reliable <strong>augmented & virtual reality app development</strong> services that satisfy the targets.</p>
                <p>Our customer support delivers positive outcomes, which carry outstanding business success, as one of the leading <strong>AR/VR development companies</strong> in India.</p>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Highly Creative & Motivated Teams</p>
                    <p className="mb-0"><FaHandPointRight /> Your Ideas Are Safe With Us</p>
                    <p className="mb-0"><FaHandPointRight /> Result-Driven Approach</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> In-Depth Domain Knowledge</p>
                    <p className="mb-0"><FaHandPointRight /> Adherence to quality & security</p>
                    <p className="mb-0"><FaHandPointRight /> Innovation is ensured</p>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> DevOps Enablement</p>
                    <p className="mb-0"><FaHandPointRight /> Integrity & Transparency</p>
                    <p className="mb-0"><FaHandPointRight /> We Understand Business Needs</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Hire AR VR Developers from Tech2Globe</h4>
                <p>We know how to transform your dream vision into a concrete reality as expert developers of AR and VR. A key goal for us is to preserve individuality in the solution so that the design gets the best possible portrayal, and you can get an advantage over your competitors.</p>
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
