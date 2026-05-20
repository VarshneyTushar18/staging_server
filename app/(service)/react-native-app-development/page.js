import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import { FaHandPointRight } from "react-icons/fa";


export const metadata = {
  title: "React Native App Development Company | React Development Services",
  description:
    "Tech2globe is a leading React Native App Development Company offering consulting services for both Android and iOS apps. Call now to hire experienced React Native App developers.",
  openGraph: {
    title: "React Native App Development Company | React Development Services",
    description:
      "Tech2globe is a leading React Native App Development Company offering consulting services for both Android and iOS apps. Call now to hire experienced React Native App developers.",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/react-native-app-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "React Native App Development Company | React Development Services",
    description:
      "Tech2globe is a leading React Native App Development Company offering consulting services for both Android and iOS apps. Call now to hire experienced React Native App developers.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/react-native-app-development",
  },
};

const pageHeaderData = {
  title: "React Native App Development",
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


export default function ReactNativeAppDevelopment() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="React Native App Development" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="React Native App Development" imageSrc="/images/services/mobile-application-banner-2.jpg" />
              <div className={Style.ContentDiv}>
                <p>Tech2Globe provides a wide variety of React Native web and <strong>React Native mobile app development services</strong> to businesses of various sizes, taking advantage of the ability of JavaScript open-source libraries, which reach across multiple industry zones. Our professional resources have mastered ReactJS development, pace with the trending technologies, to offer our esteemed customer base excellent React Native mobile development.</p>
                <p>This application has been mastered by our proficient React Native developers and has leveraged its ability in developing high-quality web and mobile apps. In several business domains, we have gathered provable knowledge, with companies ranging from small to large.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Services of React Native App Development offered by Tech2Globe.</h4>
                <hr />
                <h6>React Native Consulting</h6>
                <p>To understand your mobile app development goals, our experts get in touch with you. When we know the product objectives, we provide the entire project with React Native mobile app development services such as consultation, strategy, and set out a project to leverage React Native to create native-looking cross-platform applications.</p>

                <h6>React Native App Development</h6>
                <p><strong>Our React Native development services</strong> cover the entire range of development, from designing an intuitive UI, creating cross-platform mobile applications for Android, iOS, and other platforms to customizing the mobile device. For quick-paced development, our experts have a good understanding of the React Native API library.</p>

                <h6>React Native Migration</h6>
                <p>Our React <strong>Native app development company experts</strong> can rebuild your mobile application in all aspects, whether to redesign the current legacy mobile app or to migrate it to React Native with enhanced UI and UX.</p>

                <h6>React Native Team Development</h6>
                <p>By enhancing a team of React Native experts and adopting an outsourced production model, we become an extended arm for the customers. By hiring React Native developers as per your changing needs, you can quickly scale the teams up/down.</p>

                <h6>React Native Testing</h6>
                <p>Make sure there is a secure, flawless, and error-functioning app. Our <strong>React Native app development company&apos;s</strong> QA engineers meticulously test your app to find and uninstall any error.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Benefits of React Native Development</h4>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Flexibility of Application</h6>
                    <p>The process of React Native apps is a component-based method that enables reusability of code and also deployment for mobile and web platforms.</p>

                    <h6>Good Results</h6>
                    <p>React leverages the graphics processing unit (GPU) that results in a fast loading and high performance to Native Apps.</p>

                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Quickly View Changes</h6>
                    <p>React Native provides a quick Reload feature that allows you to make changes to code in real-time and see them in the application immediately.</p>

                    <h6>Improved Adaptability</h6>
                    <p>The style of GUI used in the React Native system makes updating or upgrading the software versatile for other React Native developers in the team.</p>

                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Our Expertise in React Native Development</h4>
                <hr />
                <p>We deliver end-to-end customized solutions for React Native across industry verticals. Our developers of React Native mobile apps are skilled with the latest technology, lean methods, and give the best possible solution for development needs. We build various technologies, such as:</p>
                <ul className={Style.TwoCol}>
                  <li>Retail</li>
                  <li>Telecommunications</li>
                  <li>Pharmaceuticals</li>
                  <li>Banking</li>
                  <li>Real Estate</li>
                  <li>Gaming</li>
                  <li>eCommerce</li>
                  <li>Education</li>
                  <li>Media</li>
                  <li>Travel</li>
                  <li>Sports</li>
                  <li>Restaurant</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Reason to Hire React Native Developers from Tech2Globe</h4>
                <p>Tech2Globe, the professional React Native app development company in India has a team of trained mobile app developers who use the full power of React Native to bring your vision to work accurately. Our team handles everything from concept validation to maintaining and funding application implementation and ensuring that you get the outcomes you have considered. Other factors that make us your one-stop destination for the creation of React Native applications are:</p>
                <h6>Efficacy of time & cost</h6>
                <p>With our experienced developers having the opportunity to reuse parts, there is a lot of time and money savings.</p>
                <h6>Client-Centric Focus</h6>
                <p>We guarantee a fully customer-centered approach and ensure that quality is providing our customers.</p>
                <h6>Different models for interaction</h6>
                <p>Based on what is most appropriate for the project, we have many hiring models that can be verified.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Hire React Native Developer from Tech2Globe</h4>
                <p>Our professional <strong>React Native, mobile app development services company</strong>, shows a testable range of smartphone/web apps that prove their expertise as your IT partner for single stops.</p>
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
