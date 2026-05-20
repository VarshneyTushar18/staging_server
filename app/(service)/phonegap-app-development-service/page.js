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
  title: "PhoneGap App Development Services Provider Company - Tech2Globe",
  description:
    "Planning to build a hybrid app for your business? Quintero Solutions offers PhoneGap App Development services with best user experience that reach out to a larger audience.",

  alternates: {
    canonical: "https://www.tech2globe.com/phonegap-app-development-service",
  },

  openGraph: {
    title: "PhoneGap App Development Services Provider Company - Tech2Globe",
    description:
      "Planning to build a hybrid app for your business? Quintero Solutions offers PhoneGap App Development services with best user experience that reach out to a larger audience.",
    url: "https://www.tech2globe.com/phonegap-app-development-service",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PhoneGap App Development Services Provider Company - Tech2Globe",
    description:
      "Planning to build a hybrid app for your business? Quintero Solutions offers PhoneGap App Development services with best user experience that reach out to a larger audience.",
  },
};

const pageHeaderData = {
  title: "Phonegap App Development Service",
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
      <Breadcrumb parentName="Technologies" pageName="Phonegap App Development Service" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Phonegap App Development Service" imageSrc="/images/services/mobile-application-banner-2.jpg" />
              <div className={Style.ContentDiv}>
                <p>PhoneGap is a cost-effective way of developing hybrid mobile apps using HTML5, CSS3, and JavaScript, which removes the need to write apps in complex languages like Objective-C and Java. PhoneGap enables the development of robust hybrid apps loaded with features, such as Vibration, GPS, Accelerometer, etc., that can seamlessly function across all major mobile platforms such as Android, iOS, Blackberry, and Windows.</p>

                <p>Tech2Globe provides PhoneGap Development Services that deliver various optimized features that help customers meet their business aims. With PhoneGap powered apps and Ionic (an advanced HTML5 platform for building smooth, mobile apps for your business), we can help you save money and time.</p>

                <p>Our experienced developers' team aims to deliver the most competitively priced solutions. We make sure you get stable, user-friendly and feature-rich cellular apps in a fast turnaround time when you recruit PhoneGap developers from us.</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className={Style.ContentDiv}>
                      <h4>PhoneGap features and benefits</h4>
                      <hr />
                      <p className="mb-0"><FaHandPointRight /> Current web technologies such as HTML and JavaScript can be reused with PhoneGap to build robust mobile applications.</p>

                      <p className="mb-0"><FaHandPointRight /> PhoneGap developers may use a single source code to use the device's native ability to run on multiple platforms.</p>

                      <p className="mb-0"><FaHandPointRight /> Mobile applications can be built faster and simpler without using Objective-C without HTML, CSS and JavaScript.</p>

                      <p className="mb-0"><FaHandPointRight /> MIT licence Free and Open Source project</p>

                      <p className="mb-0"><FaHandPointRight /> Supports geo-location, vibration, accelerometer, images, contacts etc.</p>

                      <p className="mb-0"><FaHandPointRight /> PhoneGap AIR Testing Simulator</p>

                      <p><FaHandPointRight /> Ios, iPhone, Symbian, Blackberry and Windows Mobile support all leading mobile platforms i.e.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={Style.ContentDiv}>
                <h4>PhoneGap Application Development Services We Offer</h4>
                <hr/>
                <p>We have a dedicated team of developers, programmers, UI/UX experts and testers who can offer PhoneGap with rich user interface and robust features for stable and cost-effective mobile application development. Any of the services we provide in PhoneGap creation applications:</p>

                <div className="row pb-3">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="card h-100">
                      <img src="images/services/service-inner/flutter-android-app-development.jpg" alt="PhoneGap App Development" className="img-fluid"/>
                      <div className="card-body text-center">
                        <h5>PhoneGap App Development</h5>
                        <p>Via HTML, CSS, JavaScript etc., our developers can create custom mobile and hybrid app. You can switch to the PhoneGap environment your current application too. Also, we use single coding to expand market penetration and enable consumers to use a more efficient app so that the app is uniform and stable.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="card h-100">
                      <img src="images/services/service-inner/consulting.jpg" alt="PhoneGap Consultation" className="img-fluid"/>
                      <div className="card-body text-center">
                        <h5>PhoneGap Consultation</h5>
                        <p>Tech2Globe is a pioneer in creating PhoneGap application with a wide range of consultants to support you using all PhoneGap software, plugins and third-party tools. By using the native SDKs, we will extend your existing web components. You can also use our experience to search for iOS, Windows, Android and mobile Web compatibility for your software.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="card h-100">
                      <img src="images/services/service-inner/respnsive.jpg" alt="PhoneGap Migration" className="img-fluid"/>
                      <div className="card-body text-center">
                        <h5>PhoneGap Migration</h5>
                        <p>If you want to create a solution that can run on many devices with the same set of codes, the development of the PhoneGap app is the best solution for you. With the PhoneGap platform, we will migrate your current mobile app so that you can start your application on all major mobile platforms.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Our Expertise in PhoneGap app Development</h4>
                <hr />
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/web-design.png" width={55} height={55} alt="Programming skills" />
                      <div className="context">
                        <h5>Programming skills</h5>
                        <p>Years of programming language experience for the unique development of mobile apps, including HTML5, CSS3 and JavaScript web technologies.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/business.png" width={55} height={55} alt="Business Experience" />
                      <div className="context">
                        <h5>Business Experience</h5>
                        <p>We create a streamlined and intuitive design, easy-to-use interface, customization of the interface, and safe and fast charge capabilities.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/mobile-app.png" width={55} height={55} alt="Mobile UI Design" />
                      <div className="context">
                        <h5>Mobile UI Design</h5>
                        <p>We create a streamlined and intuitive design, easy-to-use interface, customization of the interface, and safe and fast charge capabilities.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/optimization-icon.png" width={55} height={55} alt="App Optimization" />
                      <div className="context">
                        <h5>App Optimization</h5>
                        <p>In the design phases and intuition, we configure the PhoneGap applications for the highest classification and increase the download number of users.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Choose Tech2Globe?</h4>
                <p>Tech2Globe's PhoneGap developers have industry-wide experience in the PhoneGap platform and provide customers equipped with a variety of features with online and mobile items. The team from Mobiloitte uses JavaScript, CSS3 and web HTML5 technologies to bring native, including applications to iOS, Android and mobile Windows, both for a phone and a tablet, to process, handle and evaluate the real-world challenges.</p>

                <p className="mb-0"><FaHandPointRight /> 10+ years of PhoneGap application delivery</p>
                <p className="mb-0"><FaHandPointRight /> Experienced developers of PhoneGap</p>
                <p className="mb-0"><FaHandPointRight /> Code reuse best practices</p>
                <p className="mb-0"><FaHandPointRight /> Bugfree data Backup Testing Environment</p>
                <p className="mb-0"><FaHandPointRight /> Faster marketing time</p>
                <p className="mb-0"><FaHandPointRight /> Very much cheaper</p>
                <p><FaHandPointRight /> Native applications customized</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Hire PhoneGap App Developer from Tech2Globe</h4>
                <p>Tech2Globe is one of the best PhoneGap App Development Companies and has provided powerful PhoneGap-built multi-platform applications. Hire trustworthy and enthusiastic developers from us for PhoneGap and get creative mobile cross-platform applications.</p>
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
