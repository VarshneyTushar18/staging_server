import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";
import { FaAngleRight, FaHandPointRight } from "react-icons/fa";


export const metadata = {
  title: "Android App development company | Android application development services",

  description:
    "Tech2Globe is a top Android App Development Company providing Android application development services tailored to specific business requirements.",

  keywords: [
    "android app",
    "android application development",
    "android app development",
    "android application development company",
    "android application development services",
  ],

  alternates: {
    canonical:
      "https://www.tech2globe.com/android-application-development-services",
  },

  openGraph: {
    title:
      "Android App development company | Android application development services",
    description:
      "Tech2Globe is a top Android App Development Company providing Android application development services tailored to specific business requirements.",
    url: "https://www.tech2globe.com/android-application-development-services",
    siteName: "Tech2Globe",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Android App development company | Android application development services",
    description:
      "Tech2Globe is a top Android App Development Company providing Android application development services tailored to specific business requirements.",
  },
};

const pageHeaderData = {
  title: "Android Application Development Services",
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


export default function AndroidApplicationDevelopment() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Android Application Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Android Application Development Services" imageSrc="/images/services/mobile-application-banner-2.jpg" />
              <div className={Style.ContentDiv}>
                <p>Tech2Globe is a leading <strong>Android app development company</strong> that provides expertise for clients' different business needs.</p>


              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className={Style.ContentDiv}>
                      <h4>Android applications that integrate business-customer ties</h4>
                      <hr />

                      <p>As it has the largest number of users, the Android platform is the most effective application development platform, and this number is increasing at a rapid rate. In reality, today, there are millions of them all over the globe. No wonder there is a booming demand across the globe for Android production. On this site, companies want to create a strong presence so that they can communicate with the massive user base out there.</p>
                      <p>Tech2Globe is a name you can trust if you are looking for the best <strong>Android application development company</strong>. We have an impressive portfolio of several outstanding Android apps to our credit, apart from an industry presence of more than two decades. Our team consists of experienced Android professionals with expertise in the platform as well as all its versions. Our extensive platform expertise enables us to deliver a full range of <strong>Android app development services</strong> that are a perfect match for the needs of the client.</p>

                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Our Android application development services</h4>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card h-100">
                      <img src="images/services/service-inner/android-app-development.jpg" className="img-fluid" alt="Wireframe Modeling Solutions" />
                      <div className="card-body text-center">
                        <h5 className="card-title">Android App Development</h5>
                        <p className="card-text">A professional team of developers of Android apps is available to support your company with feature-rich and high-performance apps. Our team has comprehensive expertise and experience with the application and the latest technology for app creation.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card h-100">
                      <img src="images/services/service-inner/custom-android-apps.jpg" className="img-fluid" alt="Wireframe Modeling Solutions" />
                      <div className="card-body text-center">
                        <h5 className="card-title">Custom Android Apps</h5>
                        <p className="card-text">We specialize in custom Android apps that solve your company's unique needs and challenges. Connect with us to recruit experts from Android who understand your requirements and bring solutions to fit them.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card h-100">
                      <img src="images/services/service-inner/ui-ux-design.jpg" className="img-fluid" alt="Wireframe Modeling Solutions" />
                      <div className="card-body text-center">
                        <h5 className="card-title">Android UI/UX Design</h5>
                        <p className="card-text">To make an app effective, a great UI and UX matter the most. Hire Android programmers with the right design skills and capabilities to build outstanding UI designs and boost the app's user experience</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card h-100">
                      <img src="images/services/service-inner/enterprise-app-development.jpg" className="img-fluid" alt="Wireframe Modeling Solutions" />
                      <div className="card-body text-center">
                        <h5 className="card-title">Enterprise Android Apps</h5>
                        <p className="card-text">Get scalable and high-performing Android enterprise apps that fit into your enterprise ecosystem and also meet all your needs. With these applications, we make your company mobile-ready.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card h-100">
                      <img src="images/services/service-inner/app-testing.jpg" className="img-fluid" alt="Wireframe Modeling Solutions" />
                      <div className="card-body text-center">
                        <h5 className="card-title">Android App Testing</h5>
                        <p className="card-text">From the initial stage of development to its final deployment, our testers and QA experts still keep track of your <strong>Android app</strong>. Rest assured that you are going to get an impeccable app that empowers your business.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card h-100">
                      <img src="images/services/service-inner/app-maintenance.jpg" className="img-fluid" alt="Wireframe Modeling Solutions" />
                      <div className="card-body text-center">
                        <h5 className="card-title">Android Maintenance And Support</h5>
                        <p className="card-text">We keep it up and running over its lifetime, beyond just creating a flawless Android app for your company. Our team extends to repair and support services round-the-clock, on which customers can count.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Enterprises We Serve</h4>
                <hr></hr>
                <p>From innovative start-ups to existing businesses, we have rich experience working with customers. With our specialist <strong>Android app development</strong> services, we can turn the vision or concept of our client into a practical and strong app.</p>
                <div className="row pb-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaAngleRight /> M-commerce</p>
                    <p className="mb-0"><FaAngleRight /> Banking</p>
                    <p className="mb-0"><FaAngleRight /> Entertainment</p>
                    <p className="mb-0"><FaAngleRight /> News</p>
                    <p className="mb-0"><FaAngleRight />  Location-Based</p>
                    <p className="mb-0"><FaAngleRight />  Social networking</p>
                    <p className="mb-0"><FaAngleRight />  Productivity</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaAngleRight />  Apps migration to Android</p>
                    <p className="mb-0"><FaAngleRight /> Real Estate</p>
                    <p className="mb-0"><FaAngleRight /> Education</p>
                    <p className="mb-0"><FaAngleRight /> E-learning</p>
                    <p className="mb-0"><FaAngleRight /> Health, lifestyle, and fitness</p>
                    <p className="mb-0"><FaAngleRight /> Restaurant, food, and travel</p>
                  </div>
                </div>
              </div>




              <div className={Style.ContentDiv}>
                <h4>Our Process of Mobile Development</h4>
                <hr></hr>
                <div className="row pb-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><strong>Examine The Project</strong></p>
                    <p>Our android app programmers will take a deep dive into the project once we have all the information we need from you to make sure they understand the main details, including redundant data, schedules, scope, and any risks involved.</p>
                    <p className="mb-0"><strong>Create The Right Team</strong></p>
                    <p>At Tech2Globe, our <strong>android app developers</strong> have a broad range of talent. We can bring together a team with the right expertise to fulfil the particular needs of your specific project.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><strong>Take to work</strong></p>
                    <p>We will get to work designing an Android app that meets all your specifications with the scope defined and evaluated and the best team in place.</p>
                    <p className="mb-0"><strong>Distribute</strong></p>
                    <p>We'll provide your android app to you once the work is complete. Before the app launches, we'll make sure it has gone through QA and testing, and we'll be there if you need upgrades, maintenance, or extra support.</p>
                  </div>
                </div>
              </div>


              <div className={Style.ContentDiv}>
                <h4>Why Choose Tech2Globe As Your Android App Development Company?</h4>
                <hr></hr>
                <p>One of our core strengths is <strong>Android app development</strong>. To help your company expand exponentially, our expert A team of developers works hard to build intuitive apps. As they are trained professionals and have ample experience working in this area, our excellent Android development team develops the applications as soon as possible.</p>
                <p>We understand the demands of customers by serving multiple industries at once and try our best to satisfy their every need within their specified time limit. As a top provider of <strong>Android app development services,</strong> Tech2Globe extends our support even after the development process is completed by providing the best applications and support.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Begin Your Next Project with Tech2Globe</h4>
                <hr></hr>
                <p>Being an experienced <strong>Android application development</strong> business, we thoroughly research and implement our strategies within the set timeline to successfully deliver our projects.</p>

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
