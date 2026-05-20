import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import { FaHandPointRight } from "react-icons/fa";
import Image from "next/image";


export const metadata = {
  title: "iPhone App Development Services",

  description:
    "Build powerful apps with Tech2Globe’s iPhone App Development Services, delivering seamless performance, sleek design, and cutting-edge features",

  openGraph: {
    title: "iPhone App Development Services",
    description:
      "Build powerful apps with Tech2Globe’s iPhone App Development Services, delivering seamless performance, sleek design, and cutting-edge features",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/iphone-app-development-services",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "iPhone App Development Services",
    description:
      "Build powerful apps with Tech2Globe’s iPhone App Development Services, delivering seamless performance, sleek design, and cutting-edge features",
  },

  alternates: {
    canonical:
      "https://www.tech2globe.com/iphone-app-development-services",
  },
};

const pageHeaderData = {
  title: "IPhone App Development Services",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Android App", path: "/android-application-development-services" },
  { id: 2, name: "iPhone App", path: "/iphone-app-development-services" },
  { id: 3, name: "iPads App", path: "/ipad-app-development-company" },
  { id: 4, name: "React Native App", path: "/react-native-app-development" },
  { id: 5, name: "Ionic App", path: "/ionic-app-development-company" },
  { id: 6, name: "Flutter App", path: "/product-data-entry-services" },
  { id: 7, name: "Kotlin App", path: "/flutter-app-development-services" },
  { id: 8, name: "PhoneGap App", path: "/phonegap-app-development-service" },
  { id: 9, name: "Xamarin App", path: "/xamarin-mobile-app-development" },
  { id: 10, name: "Hybrid App", path: "/hybrid-mobile-app-development" },
  { id: 11, name: "Mobile App Designing", path: "/mobile-application-design-services" },
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


export default function IphoneAppDevelopment() {
  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Iphone App Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Iphone App Development Services" imageSrc="/images/services/mobile-application-banner-2.jpg" />
              <div className={Style.ContentDiv}>
                <p>Apple's iOS, a well-known operating system, controls different modules, such as the iPad Touch, iPhone, and iPad, etc. and provides users with innovative technologies and optimal user experience. Moreover, as it has integrated search support, gesture recognition, iCloud compatibility, cellular connectivity with VPN support etc. the advantages associated with this OS are endless, all of which makes it the second most common operating system.</p>

                <p>We offer popular and hassle-free iOS iPhone app development services as a leading iOS iPhone application development company, using efficient solution solutions. Our development process includes validated and cutting-edge methodologies and techniques that enable us to remain one of the leading <strong>iPhone application development companies</strong>.Hire Our Qualified Developers to Grow Your Business</p>

                <p>Tech2Globe guarantees the best results for a diverse customer base from start-ups to businesses across the globe via Hire dedicated service to quickly and efficiently celebrate great results. Our team of iOS experts not only support in completing development tasks but also in providing various development services to achieve your business goals and objectives. To turn your dream project into reality, get in touch with our experts!</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>iPhone App Development Services</h4>
                <hr />
                <p><strong>Custom iPhone Application Development</strong> <br />With customized iOS app creation, we have an exceptional team who can bring it to life.</p>

                <p><strong>Native iPhone Application Development</strong> <br />Built and created for iOS in Swift, so it always means exceptional standards.</p>

                <p><strong>Updates and Patching</strong> <br />Keep your app running smoothly with our team's patches and updates</p>

                <p><strong>iOS Application Development</strong> <br />Our iOS experts can handle multi-threaded environments, create advanced analytics, and provide architectural and technical leadership in the development of your core application. From whiteboard through store release, we use our recorded best practices and knowledge of leading the entire lifecycle of application app creation.</p>

                <p><strong>iOS Application Testing</strong> <br />Our <strong>iOS app developers’</strong> team is well trained with optimization and manual testing tools, including the test system for XCode, and follows top-notch best practices to boost the application's performance and debug all possible problems.</p>

                <p><strong>iOS Application Maintenance</strong> <br />Our iOS maintenance model aims to track applications in real-time, reduce risks of applications, increase availability, and decrease the total time spent on keeping the applications up and running.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Tech2Globe's Expertise</h4>
                <hr />
                <div className="row pb-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight />  iOS Kit (SDK)</p>
                    <p className="mb-0"><FaHandPointRight />  MapKit</p>
                    <p className="mb-0"><FaHandPointRight />  Xcode IDE Accelerometer</p>
                    <p className="mb-0"><FaHandPointRight />  Objective C / Swift</p>
                    <p className="mb-0"><FaHandPointRight />  AFNetworking</p>
                    <p className="mb-0"><FaHandPointRight />  OpenGL ES & Unity 3D</p>
                    <p className="mb-0"><FaHandPointRight />  AV Foundation Framework</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight />   Autolayout Engine</p>
                    <p className="mb-0"><FaHandPointRight />  Core Location</p>
                    <p className="mb-0"><FaHandPointRight />  UIKitDynamics</p>
                    <p className="mb-0"><FaHandPointRight />  Node JS socket</p>
                    <p className="mb-0"><FaHandPointRight />  XCTest Core Graphics</p>
                    <p className="mb-0"><FaHandPointRight />  XCUITest</p>
                    <p className="mb-0"><FaHandPointRight />  Memory Management</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Solution We Build With iPhone</h4>
                <hr />
                <div className="row pb-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight />  Enterprise apps</p>
                    <p className="mb-0"><FaHandPointRight />  Apps for E-commerce</p>
                    <p className="mb-0"><FaHandPointRight />  Mobile games</p>
                    <p className="mb-0"><FaHandPointRight />  Apps for Wearable / IoT</p>
                    <p className="mb-0"><FaHandPointRight />  Apps for Multimedia</p>
                    <p className="mb-0"><FaHandPointRight />  Apps for VoIP</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight />  Social networking</p>
                    <p className="mb-0"><FaHandPointRight />  Apps from iBeacon</p>
                    <p className="mb-0"><FaHandPointRight />  Apps for Services</p>
                    <p className="mb-0"><FaHandPointRight />  Location-Based apps</p>
                    <p className="mb-0"><FaHandPointRight />  Connectivity</p>
                    <p className="mb-0"><FaHandPointRight />  AR / VR apps</p>
                  </div>
                </div>
              </div>


              <div className={Style.ContentDiv}>
                <h4>Our iPhone Development Process</h4>
                <p>By implementing interactive and collaborative project management systems to develop the most competent, robust, and highly scalable web & mobile solutions with the highest quality requirements, we provide the highest level of customer support.</p>

                <p><strong>Post Your Project Requirements</strong> <br />Our analysts will review the specifications of your project thoroughly and pick the most qualified developers ideally suited to your project.</p>

                <p><strong>Discuss Project Details with Our Experts</strong> <br />In no time, our experts will contact you to address your project-related questions and to provide the best solution for developing your project.</p>

                <p><strong>Select Terms Timeline Activity</strong> <br />You can select the collaboration deadlines for your project execution based on the project consultation given by our experts.</p>

                <p><strong>Securely Pay Online and Start</strong> <br />Make payments through our 100 percent safe online system, and within 24 hours, our team will start your project immediately.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Choose Tech2Globe for Successful iPhone App Development Services?</h4>
                <p>With more than 10+ years of work and proven expertise in iOS development, we build feature-rich, personalized, hybrid, & native iOS apps for various iOS devices such as tvOS, iPhone, Smart Watch, etc., as a 10-year software & mobile app development business. Also, we manage everything to give you timely delivery and a price proportional to your budget, from design and production to maintenance and support. Other advantages you get from us are:</p>

                <p className="mb-0"><FaHandPointRight /> Strong analytical experience using both SWIFT & Objective C and SDK/tools in iOS development; XCODE, Cocoa touch.</p>
                <p className="mb-0"><FaHandPointRight /> Services & solutions for off-shore iOS app growth.</p>
                <p className="mb-0"><FaHandPointRight /> Efficient iPhone app development services & creation of iPad apps.</p>
                <p className="mb-0"><FaHandPointRight /> Optimization for app stores.</p>
                <p className="mb-0"><FaHandPointRight /> Our social media applications simplify connectivity and globally bind individuals.</p>
                <p className="mb-0"><FaHandPointRight /> Expert assistance, technical support 24/7, & reporting regularly.</p>
                <p className=""><FaHandPointRight /> Apps that are user-friendly, easy to use, and readily downloadable.</p>


              </div>

              <div className={Style.ContentDiv}>
                <h4>Build Your New Project with Tech2Globe.</h4>
                <p>In India, Tech2Globe is a leading iOS app development company offering offshore iOS application development services for growing companies with the means to achieve optimum productivity.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">We Expertise in All Major Technologies</h2>
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
