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
  title: "Mobile Application Design Services - Tech2Globe",
  description:
    "Tech2Globe offers professional mobile application design services, crafting intuitive and visually appealing interfaces for seamless user experiences.",

  openGraph: {
    title: "Mobile Application Design Services - Tech2Globe",
    description:
      "Tech2Globe offers professional mobile application design services, crafting intuitive and visually appealing interfaces for seamless user experiences.",
    url: "https://www.tech2globe.com/mobile-application-design-services",
    type: "website",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/mobile-application-design-services",
  },
};

const pageHeaderData = {
  title: "Mobile Application Design Services",
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


export default function MobileApplicationDesign() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Mobile Application Design Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Mobile Application Design Services" imageSrc="/images/services/mobile-application-banner-2.jpg" />
              <div className={Style.ContentDiv}>
                <p>Today's world is driving mobile apps. Mobile apps lead us to all walks of life through collaboration, sharing, networking, shopping and Internet surfing.</p>

                <p>Applications are currently crucial for the success of every <strong>mobile app design company</strong>. It determines how well the digital marketing strategies of the organization are positioned. However, on the other hand, organizations have their task to beat their competition and differentiate themselves in the crowd.</p>

                <p>Our team has 10 years' experience in the area of <strong>custom app design services</strong>. Tech2Globe is taking steps in that. Let us develop your visions, goals and ambitions into your company's most important, interactive mobile application, not only helping you cut the competition but also building up your brand.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Our Well-Known Mobile Application Design Services</h4>
                <p>At Tech2Globe, we are confident of our extensive analysis, affordable Mobile application design services and professional use of UI/UX detailing for our business applications. Our services include -</p>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/ui-design-icon.png" width={55} height={55} alt="App UI Design" />
                      <div className="context">
                        <h5>App UI Design</h5>
                        <p>Wireframes, design, prototype, and our resources for mobile app design provide an excellent experience. We give mobile app design services for your organization a customized approach to the creation of a mobile app. And that without disrupting the entire budget for your project.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/social-media-icon.png" width={55} height={55} alt="Social Media App Design" />
                      <div className="context">
                        <h5>Social Media App Design</h5>
                        <p>For users of different platforms, we create social networking apps while leveraging the advantages of your business in social media. With our social media application designs, we help you interact and communicate efficiently with your target audience.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/ios-app-dev-icon.png" width={55} height={55} alt="iOS App Design" />
                      <div className="context">
                        <h5>iOS App Design</h5>
                        <p>Our mobile app designers are designed to scale whether it's an iPhone, iPad or Apple watch. We build your iOS app that suits every size screen with a validated design strategy and state-of-the-art technologies. Also, our iOS app designs allow you to win the competition.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/hybrid.png" width={55} height={55} alt="Application Redesign" />
                      <div className="context">
                        <h5>Hybrid App Design</h5>
                        <p>Your mobile app runs on every platform without hampering the user experience with our hybrid mobile app designs. All you have to do is to share with us your concept idea, and we will take care of the rest.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/redesign.png" width={55} height={55} alt="Hybrid App Design" />
                      <div className="context">
                        <h5>Application Redesign</h5>
                        <p>Don't you like the mobile app UI? Do you want to change the look to make your mobile app fast, easy to use and enjoyable? We have innovative heads that help you facelift your app with user-friendly design as a personalized mobile application design company.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className={Style.ContentDiv}>
                      <h4>Our Expertise in Mobile Application Design Services</h4>
                      <p className="mb-0"><strong>Enhanced brand visibility</strong></p>
                      <p>We build incredible, customer-friendly mobile app designs. Users feel linked to your brand and always visit the app to boost the exposure of your brand.</p>

                      <p className="mb-0"><strong>Stronger brand building</strong></p>
                      <p>Tech2Globe excels with the brilliant architecture that offers app users remarkable experience in providing a fantastic user interface. Provide visually enticing designs to users that boost the customer base.</p>

                      <p className="mb-0"><strong>Increased conversion rate</strong></p>
                      <p>Encourage users to long-term engagement with your app through smart navigation and meaningful navigation. High-end <strong>Mobile app UI design</strong> transforms visitors into customers and increases sales.</p>

                      <p>We know how people communicate with websites and mobile applications, enabling yet productive user flows and enticing concepts. The shortest path to customer loyalty is new but clean and straightforward <strong>Mobile UI design services</strong> and UI and UX style.</p>

                      <div className="row pb-3">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <p className="mb-0"><FaAngleRight /> User-friendly and responsive UI</p>
                          <p className="mb-0"><FaAngleRight /> UX Personalized</p>
                          <p className="mb-0"><FaAngleRight /> Page Speed Optimized</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                          <p className="mb-0"><FaAngleRight /> Smooth navigation</p>
                          <p className="mb-0"><FaAngleRight /> Coherent formatting styles</p>
                          <p className="mb-0"><FaAngleRight /> Extensive visualization capabilities</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>


              <div className={Style.ContentDiv}>
                <h4>Why Choose Tech2Globe for Mobile Application Design?</h4>
                <p>Our research approach enables us to create the most efficient <strong>web and Mobile App Design and development services solutions</strong> for your specific business requirements. Tech2Globe, a trustable <strong>Mobile app design company</strong> pay close attention to each step in the development of mobile applications, from your product view to prototyping to user testing.</p>
                <div className="row pb-3">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><strong>Project Definition</strong></p>
                    <p>Each project begins with careful elicitation of requirements. We identify business priorities and match product preferences.</p>
                    <p className="mb-0"><strong>Research</strong></p>
                    <p>We examine your competitors, your target audience, and the market first to find the most successful design solutions.</p>
                    <p className="mb-0"><strong>Ideation</strong></p>
                    <p>Our team develops the structure of the product after extensive analysis and creates solutions to resolve company priorities and customer problems.</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><strong>Prototyping</strong></p>
                    <p>At this point, our development of wireframe, guide and clickable prototypes will turn our team into concrete prototypes.</p>
                    <p className="mb-0"><strong>Testing and Evaluation</strong></p>
                    <p>Finally, we perform usability tests to verify the overall user interaction with the product.</p>
                  </div>
                </div>
              </div>


              <div className={Style.ContentDiv}>
                <h4>Get the Best Services from Tech2Globe</h4>
                <p>Tech2Globe a vast <strong>app design company India</strong> creating unique business development services with responsive user interfaces, user interactions, and visual templates, we will improve customer interaction exponentially.</p>
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
