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
  title: "Flutter App Development Services | Tech2Globe",
  description:
    "We offer flutter app development services to build scalable and highly functional mobile applications. Hire our flutter app developers.",

  alternates: {
    canonical: "https://www.tech2globe.com/flutter-app-development-services",
  },

  openGraph: {
    title: "Flutter App Development Services | Tech2Globe",
    description:
      "We offer flutter app development services to build scalable and highly functional mobile applications. Hire our flutter app developers.",
    url: "https://www.tech2globe.com/flutter-app-development-services",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Flutter App Development Services | Tech2Globe",
    description:
      "We offer flutter app development services to build scalable and highly functional mobile applications. Hire our flutter app developers.",
  },
};

const pageHeaderData = {
  title: "Flutter App Development Services",
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


export default function PhonegapAppDevelopment() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Flutter App Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Flutter App Development Services" imageSrc="/images/services/mobile-application-banner-2.jpg" />
              <div className={Style.ContentDiv}>
                <p>In today&apos;s dynamic and ever-evolving Mobile app environment, application development frameworks like Flutter are gaining immense popularity. And, growth-hungry companies are at the forefront of developing intuitive, user-friendly mobile apps rapidly to expand their market and generate new revenue streams. Flutter is a Dart language free and open-source framework.</p>
                <p>Flutter is an open-source, multifunctional app development platform that supports desktop applications to build iOS, Android, and Web applications. Our Flutter app developers at Tech2Globe use this platform to code once and deliver consistency on any computer with a screen (including Raspberry Pi). We help you build usable, visually appealing and computer-topping cross-platform apps as a leading Flutter development service provider.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Tech2Globe’s service of Flutter</h4>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/mobile-app.png" width={55} height={55} alt="Custom Flutter App Development" />
                      <div className="context">
                        <h5>Custom Flutter App Development</h5>
                        <p>In developing applications that fit your business needs, Tech2Globe, a leading <strong>Flutter Application Development Company</strong> has a highly experienced team of developers who follow a pragmatic approach.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/web-maintenance.png" width={55} height={55} alt="Support & Maintenance" />
                      <div className="context">
                        <h5>Support & Maintenance</h5>
                        <p>Our Flutter Development services provides regular technical assistance to ensure your mobile App runs smoothly.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/computer.png" width={55} height={55} alt="API Development & Integration" />
                      <div className="context">
                        <h5>API Development & Integration</h5>
                        <p>Our team will help you develop and deploy REST APIs to fulfil the unique requirements of your product.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/consulting-icon-new.png" width={55} height={55} alt="Flutter App Consulting" />
                      <div className="context">
                        <h5>Flutter App Consulting</h5>
                        <p>Do you want to see if Flutter is the right choice? Our consultants will help the right plan and roadmap in Flutter.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Flutter framework development services include:</h4>
                <hr />

                <div className="row pb-3">
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                    <div className="card h-100">
                      <img src="images/services/service-inner/flutter-android-app-development.jpg" alt="Flutter Android App Development" className="img-fluid" />
                      <div className="card-body text-center">
                        <h5>Flutter Android App Development</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                    <div className="card h-100">
                      <img src="images/services/service-inner/ios-app-development.jpg" alt="Flutter iOS App Development" className="img-fluid" />
                      <div className="card-body text-center">
                        <h5>Flutter iOS App Development</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                    <div className="card h-100">
                      <img src="images/services/service-inner/web-development.jpg" alt="Flutter Web Dev. Services" className="img-fluid" />
                      <div className="card-body text-center">
                        <h5>Flutter Web Dev. Services</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                    <div className="card h-100">
                      <img src="images/services/service-inner/game-development.jpg" alt="Flutter Game Development" className="img-fluid" />
                      <div className="card-body text-center">
                        <h5>Flutter Game Development</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Benefits of Flutter Apps</h4>
                <hr />

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Single Codebase</h6>
                    <p>Write Flutter code once and use both Android and iOS with the same principle. This single codebase allows you to construct an application for both platforms quickly.</p>
                    <h6>Fabricate Widgets</h6>
                    <p>With a flutter application, the software can be easily customised since it has many widgets and implementations built-in for iOS and Android.</p>
                    <h6>Faster and Better Native Performance</h6>
                    <p>Flutter is one of the best hybrid frameworks to use, provided that there is no website view, and JavaScript is linked and executes javascript.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Hot Reload</h6>
                    <p>Show the instant output using this Flutter and instantly reflect the improvisation of the App&apos;s results.</p>
                    <h6>Responsible Framework</h6>
                    <p>Flutter will manually rephrase UI content and update state factors. Furthermore, Flutter offers a fantastic look and feel to make the job easier.</p>
                    <h6>Faster Testing</h6>
                    <p>The developers would previously perform a long phase of testing and use two different platforms, but only one test is needed with Flutter for both platforms to make testing faster and more effective.</p>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                  </div>
                </div>

              </div>

              <div className={Style.ContentDiv}>
                <h4>Flutter App Development Process</h4>
                <hr />

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Customer Debriefing</h6>
                    <p>We spend good time trying to absorb what you like. This significant move allows us to understand the App – its goal, its expectations, and its performance. Our advisors work proactively with you to assist you in choosing the way you want to live your vision.</p>
                    <h6>Team Curation</h6>
                    <p>We select a team of Flutter developers that suits your project entirely after completing the concept for your project. If the backend software development work of your project is needed, we also have it covered.</p>
                    <h6>UX Designing</h6>
                    <p>The design basis and the wireframes are created for each app screen. The flow of your App is decided, and a rich user experience is prioritized at all phases.</p>
                    <h6>UI Translation</h6>
                    <p>When the layout is set, a prototype of your application is built for your customer by our development team. When we make the user interface of your App, we use official brand guidelines and colour codes.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>The Finishing Touch</h6>
                    <p>This is where our application designs joy. We spend time smoothing the rough corners to give the final brilliance of your App.</p>
                    <h6>Testing</h6>
                    <p>Our quality control team ensures that our products are of a high standard. The App is checked for loopholes or bugs that are automatically patched many times.</p>
                    <h6>Launch</h6>
                    <p>Our quality control team ensures that our products are of a high standard. The App is checked for loopholes or bugs that are automatically patched many times.</p>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

                  </div>
                </div>

              </div>

              <div className={Style.ContentDiv}>
                <h4>Why should you choose Tech2Globe for Flutter App Development?</h4>
                <p>As a top <strong>Flutter App Development Company India</strong> Tech2Globe gives 100% good result from 10 years.</p>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Native Performance</h6>
                    <p>Our app developers use Dart and Flutter&apos;s compatibility widget to deliver 60 fps, both on iOS and Android mobile platforms, to deliver a native output.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Less Time to Market</h6>
                    <p>We know how to build the Flutter application using the right software. Our team uses Flutter&apos;s hot reload functionality to create the UI in debug mode, add features, fix bug fixes and do much more in much less time.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Scalable & Future Ready</h6>
                    <p>We are concerned about app scalability. We are a stable architecture that our developers build so that your application runs well on high traffic. Whether introducing new functionality or compatibility with the latest hardware and software, we code the apps keeping potential updates in mind.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h6>Test-Driven Development</h6>
                    <p>Our engineers work with a given test-driven method and utilise the debug and inspection capabilities of Flutter during the development of applications.</p>
                  </div>
                </div>

              </div>

              <div className={Style.ContentDiv}>
                <h4>Hire Flutter App Developer from Tech2Globe</h4>
                <p>With the expressive, versatile use of the frame, we build your Flutter Applications.</p>
              </div>



              <div className={Style.ContentDiv}>
                <h2>We Expertise in All <span className="text-danger">Major Technologies</span></h2>

                <p><FaAngleRight /> <Link href="/cake-php-development" className="text-decoration-none fw-normal">Cake PHP Development </Link></p>
                <p><FaAngleRight /> <Link href="/nop-commerce-development-services" className="text-decoration-none fw-normal">Nopcommerce Development</Link> </p>
                <p><FaAngleRight /> <Link href="/joomla-development" className="text-decoration-none fw-normal">Joomla Development</Link></p>
                <p><FaAngleRight /> <Link href="/drupal-development" className="text-decoration-none fw-normal">Drupal Development </Link></p>
                <p><FaAngleRight /> <Link href="/responsive-web-design" className="text-decoration-none fw-normal">Responsive Web Design</Link></p>
                <p><FaAngleRight /> <Link href="/mailchimp-template-design" className="text-decoration-none fw-normal">Mailchimp Template Design </Link></p>

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
