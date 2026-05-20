import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";

export const metadata = {
  title:
    "Mobile app development services | Mobile app development company",

  description:
    "Tech2Globe, a mobile app Development Company. Our extensive experts delivering a full range of mobile app development services that are a perfect match for the client’s needs.",

  keywords: [
    "Mobile app development services",
    "Mobile app Development Company",
    "Mobile Application Developers",
    "Custom Mobile App Development Company",
    "Mobile Application Development Services",
    "Mobile App Design.",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/mobile-app-development",
  },

  openGraph: {
    title:
      "Mobile app development services, Mobile app Development Company, Mobile Application Developers, Custom Mobile App Development Company",
    description:
      "Tech2Globe, a mobile app Development Company. Our extensive experts delivering a full range of mobile app development services that are a perfect match for the client’s needs.",
    url: "https://www.tech2globe.com/mobile-app-development",
    type: "website",
  },

  twitter: {
    card: "summary",
    title:
      "Mobile app development services | Mobile app development company",
    description:
      "Tech2Globe, a mobile app Development Company. Our extensive experts delivering a full range of mobile app development services that are a perfect match for the client’s needs.",
  },
};

const pageHeaderData = {
  title: "Mobile App Development",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Android Apps Development", path: "/android-application-development-services" },
  { id: 2, name: "iPhone iPad Apps Development", path: "/iphone-ipad-application-development-services" },
  { id: 3, name: "Mobile Apps Development", path: "/mobile-application-development-services" },
  { id: 4, name: "Windows Apps Development", path: "/windows-application-development-services" },
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

export default function MobileAppDevelopment() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Mobile App Development" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Mobile App Development" imageSrc="/images/services/mobileandwebd-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Tech2Globe developing high-performance and powerful mobile application. We have in-built team to develop and deliver mobile application that helps business to increase ROI and suitable for completing each and every industry needs. Our professionals have far experienced to develop mobile application for Android, iOS and Windows for mobiles, tablets, iPad and for all the devices.</p>
                <p>At Tech2Globe, our mobile app developers are well qualified and have very rich experience in the field of developing mobile apps for every operating system. Our team is capable to deliver the effective product under an affordable price.</p>
                
              </div>

              <div className={Style.ContentDiv}>
                <h4>Services For Apps Developing</h4>
                <hr/>
                <h6>Android Mobile Apps Development</h6>
                <p>We have the most professional and experienced Android developers for the design, development, testing and deployment of android apps. Along with we have expertise in android software development kit (SDK), android media APIs, android security architecture and openGL, 3D graphics and other technologies.</p>
                <h6>iPhone Mobile Apps Development</h6>
                <p>Our iPhone mobile apps developers have wide experience in developing iOS based mobile application for iPhone and iPad. Our professionals hand over effective results that helps to reach out larger audience, boost sales and build brand & recognition.</p>
                <h6>Custom Mobile Apps Development</h6>
                <p>Our custom mobile apps development services that helps your business to generate more productivity. Our engineering team provides the adequate solutions to fulfill your all requirements.</p>
                <h6>Windows Mobile Apps Development</h6>
                <p>Windows is one of the most popular operating system across the globe. Tech2Globe’s windows mobile apps developers have expertise and supremacy over the windows apps development for mobiles and desktops as well. We have many satisfied clients from Australia, US, UK, UAE and other countries.</p>
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>
          </div>

        </div>
      </section>
      <ClientSlider testimonials={testimonials} />
    </>
  )
};