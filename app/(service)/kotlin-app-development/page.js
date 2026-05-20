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
  title: "Kotlin App Development Services | Hire Kotlin Developers",
  description:
    "We use best-in-class tools and state-of-the-art Kotlin application development services to make Android development faster. Hire kotlin app developers from us.",
  openGraph: {
    title: "Kotlin App Development Services | Hire Kotlin Developers",
    description:
      "We use best-in-class tools and state-of-the-art Kotlin application development services to make Android development faster. Hire kotlin app developers from us.",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/kotlin-app-development",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kotlin App Development Services | Hire Kotlin Developers",
    description:
      "We use best-in-class tools and state-of-the-art Kotlin application development services to make Android development faster. Hire kotlin app developers from us.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/kotlin-app-development",
  },
};

const pageHeaderData = {
  title: "Kotlin App Development Company",
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


export default function KotlinAppDevelopment() {
  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Kotlin App Development" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Kotlin App Development" imageSrc="/images/services/mobile-application-banner-2.jpg" />
              <div className={Style.ContentDiv}>
                <p>For Java audiences, Kotlin is the right choice, as it can easily be integrated with all Java-based products. It is designed specifically for the development of smartphones and even web applications and has practically no limitations in terms of its growth. Being a quick and concise programming language, it helps you to quickly and more easily build mobile Android apps. This reality gives Kotlin extra benefits to be enjoyed among the development community of Android.</p>
                <p>We use Kotlin at Tech2Globe to provide our customers with a quick process of <strong>Kotlin application development services </strong>that allows for speedier time-to-market and brings better business outcomes. For your specific requirements and needs, Tech2Globe provides you with on-demand Kotlin developers. You can rest assured that with our developers, you can get your project delivered with the highest quality parameters and deliverables.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>The best things to Choose Kotlin</h4>
                <hr />
                <p>Server Side Kotlin is used more expressively and succinctly to construct server-side applications. Programmers can deploy Kotlin apps on all Java web application hosts.</p>
                <p>Kotlin developers help them modify Kotlin code to JavaScript for JavaScript applications that require a server/client-side architecture. Our well-versed developers have experience in using Kotlin to create graphical components, create DOM components, and work with server-side technologies.</p>
                <p>Kotlin-Native enables the compilation of the Kotlin code into native binaries. It is specifically aimed at those platforms where virtual machines are not needed.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Get the Best Kotlin App Development Services</h4>
                <hr />
                <p>Tech2Globe is one of the leading <strong>Kotlin app development companies in India</strong> that provides outsource Kotlin app development services. Get the best from the world of <strong>Kotlin web development services</strong> from Tech2Globe.</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/app-dev.png" width={55} height={55} alt="App Development of Android with Kotlin" />
                      <div className="context">
                        <h5>App Development of Android with Kotlin</h5>
                        <p>When you want to create a stable Android app with robust backends and feature-rich frontends. Our software developers from Kotlin will bring their skills to the table to develop applications on their gadgets that Android users will like.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/optimization-icon.png" width={55} height={55} alt="Kotlin Application Optimization" />
                      <div className="context">
                        <h5>Kotlin Application Optimization</h5>
                        <p>Using our Kotlin development services, outdated apps can improve. By running an inside-out diagnosis of its code and architecture, Tech2Globe&apos;s analysts will grade the performance of your Android apps. Our Kotlin developers can address any current problems for optimum output in real-time.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/upgradation.png" width={55} height={55} alt="Kotlin Apps Upgrading" />
                      <div className="context">
                        <h5>Kotlin Apps Upgrading</h5>
                        <p>As the creation of Kotlin develops, the recent apps need an update to fit the new programming concepts and completely exploit the advantage of Kotlin. Our development team will allow you to update to the latest version of Kotlin effortlessly.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/consulting-icon-new.png" width={55} height={55} alt="Support and Maintenance" />
                      <div className="context">
                        <h5>Support and Maintenance</h5>
                        <p>We have it all in to keep your Android apps free from bugs, from necessary help to a complete redesign of Kotlin apps. Our dedicated team of maintenance specialists from Kotlin has valuable experience in running complicated diagnostics and can keep your software up-to-date.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Benefits of Hire Kotlin App Developers for Beginning Your Project</h4>
                <h6>Get the Customized Approach</h6>
                <p><strong>Hire top Kotlin app developers,</strong> who are just going to work on your project, and they are not continuing to focus on another project. Their work and resources have thoroughly invested in your Kotlin application, and in the end, such an approach will give you profound results.</p>
                <h6>Quick Responses to Any Problems</h6>
                <p>To respond to your requests, dedicated Kotlin developers will always be open. The highest priority for execution will be your texts and addresses. Such advantages make the development of your application more comfortable and quicker.</p>
                <h6>Get a business-oriented strategy</h6>
                <p>Dedicated resources indicate that you employ people who are experts in what they do. This way, you can get the perfect workforce to work on your project and make your company a robust and engaging Kotlin application.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Tech2Globe?</h4>
                <p>We have an experienced Kotlin team that has built amazing apps on Kotlin successfully and made our customers happy. They have achieved the full degree of customer satisfaction.</p>
                <p>As a top Kotlin app development company in India, we are aware of Kotlin&apos;s future and cross-platform, and thus create future-oriented applications that you can leverage for years.</p>
                <p>Connecting your business needs and priorities with the need for a customer to have a comfortable, responsive, satisfying digital experience.</p>
                <p>Our experts will assist you with the essential aspects that you will need to recognize when selecting Kotlin as an app development technology. We don&apos;t restrict our service to coding.</p>
                <p>Whether it&apos;s hiring Kotlin developers or delegating the entire project to us to be a <strong>leading Kotlin web development company</strong>  for discomfort, productive app development, we promise to support you and your company in the best possible way.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Begin Your New Project with Tech2Globe</h4>
                <p>We develop interactive mobile apps at Tech2Globe, and we also cover multiple platforms to do so.</p>
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
