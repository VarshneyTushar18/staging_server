import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "Mobile App Development services | Mobile Apps Development Company",
  description:
    "Tech2globe is a Mobile App Development Company in India working for brands across the globe. We provides topnotch, savvy, money making mobile apps for your business.",
  keywords: [
    "mobile app development company",
    "mobile app development services",
    "mobile app development services",
    "mobile app development company in india",
  ],
  openGraph: {
    title: "Mobile App Development services | Mobile Apps Development Company",
    description:
      "Tech2globe is a Mobile App Development Company in India working for brands across the globe. We provides topnotch, savvy, money making mobile apps for your business.",
    url: "https://www.tech2globe.com/mobile-application-development-services",
    siteName: "Tech2Globe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development services | Mobile Apps Development Company",
    description:
      "Tech2globe is a Mobile App Development Company in India working for brands across the globe. We provides topnotch, savvy, money making mobile apps for your business.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/mobile-application-development-services",
  },
};

const pageHeaderData = {
  title: "Mobile Application Development",
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


export default function MobileApplicationDevelopment() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Mobile Application Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Mobile Application Development Services" imageSrc="/images/services/mobileandwebd-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Tech2Globe delivers world-class mobile app development services for local and Global clients. We prepare cost-effective, money making and motivated mobile apps development for your business.</p>
                <p>Mobile App Development: Now today&apos;s world there is a growing technology boom, with wireless networks take over each or controlling aspect of life, the Mobile Technology solutions Business is still coming of age. Companies are still to leverage the complete potential of Mobile <strong>Technology</strong>. The convergence of the wireless, digital media, advertising industries, and entertainment has led to a circumstance where people are seeing or expecting progressively more out of their mobile devices.</p>
                <p><strong>Tech2Globe</strong> a Mobile app development center of India conveys advanced wireless solutions that in budget, enhancement productivity, and create new revenues for clients. At Tech2Globe, Our mobile app developers are dedicated, committed and enthused by an ambition to constantly make a mark in the mobile and wireless business. We spread our expertise to deliver personalized mobile phone development and programming solutions.</p>
                <p>Our expert mobile app developers deliver cost-effective solutions by isolating components in an application that clog development, and resolves the problem, with real and world-class techniques. We have wide-ranging expertise in making real-time mobile resident apps on various platforms such as Symbian, J2ME, and iPhone, Google Android, Windows Mobile and Palm OS.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Let Tech2Globe Guide You</h2>
                <hr/>
                <p>We understand you might be confused when selecting among mobile app development and mobile web development. It is an essential that the ending development meets the objectives of a business. A Mobile Web app developer needs to major technology - be it an iPhone, Blackberry, Android or Windows development. That’s why we are ready to help you choose what you want and give you a suitable product that you will love. After all, technology is very important to your business! That’s why we are delivering leading-edge Technology to Globe - TECH2GLOBE</p>
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
    </>
  )
};