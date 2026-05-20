import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "iPhone app development company | iOS development services | Tech2Globe",
  description:
    "Get experienced professionals IOS development services from reputed iPhone app Development Company. Our IOS Developers have hands-on experience of working on the latest tools.",
  keywords: [
    "iPhone app development",
    "ios development company",
    "iPhone app development services",
  ],
  openGraph: {
    title: "iPhone app development company | iOS development services | Tech2Globe",
    description:
      "Get experienced professionals IOS development services from reputed iPhone app Development Company. Our IOS Developers have hands-on experience of working on the latest tools.",
    url: "https://www.tech2globe.com/iphone-ipad-application-development-services",
    siteName: "Tech2Globe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iPhone app development company | iOS development services | Tech2Globe",
    description:
      "Get experienced professionals IOS development services from reputed iPhone app Development Company. Our IOS Developers have hands-on experience of working on the latest tools.",
  },
  alternates: {
    canonical:
      "https://www.tech2globe.com/iphone-ipad-application-development-services",
  },
};

const pageHeaderData = {
  title: "iPhone Mobile Application Development",
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
      <Breadcrumb parentName="Services" pageName="Iphone Ipad Application Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Iphone Ipad Application Development Services" imageSrc="/images/services/mobile-application-banner-2.jpg" />
              <div className={Style.ContentDiv}>
                <p>From the time it had appeared iOS gained a huge popularity and today, it is seen as the primary mobile platform with more than 800 million iOS sold till date and over 12,00,000 iOS – based apps deployed.</p>
                <p>With iOS (iPhone, iPad) the world is at your fingertips with its reach to millions of users of all nationalities and demographics using the Apple App Store.</p>
                <p>Whether you wish to acquire consumer-related information, increase brand awareness and engagement, extend your community reach with social media or raise your revenue through in-app purchases, our iPhone application development service with best mobile app developers is up to the task.</p>
                <p>Combined together, our iOS mobile app developers have been working with iOS and Objective C for a total of 2+ years. We have catered many clients across industries, developing and deploying business apps - free, commercial, or in-house applications to the market.</p>
                <p>Our iPhone Application Development services are well known for the love of a attractive design and we always update ourselves when it comes to the latest technologies and trends in the industry ensuring your custom iPhone app is both future centric and backward compatible with previous iOS devices. Furthermore, our considerable experience in working with the Apple Review Team gets our apps approved on the first upload.</p>
                <p>Our Custom iPhone App Development team has done it all: from delivering high tech apps to the hospitality sector to financial and business apps, so rest assured, you are in good hands.</p>
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