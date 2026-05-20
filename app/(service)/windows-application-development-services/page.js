import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";

export const metadata = {
  title: "Windows Development Services | Windows App Development services",
  description:
    "Tech2Globe offers Windows App Development services by best phone developers. We are known for providing secure and results-driven Windows Phone Apps Development solutions.",
  keywords: [
    "windows mobile app development",
    "windows phone application development company",
    "windows mobile app developer",
    "Windows App Development services",
  ],
  openGraph: {
    title: "Windows Development Services | Windows App Development services",
    description:
      "Tech2Globe offers Windows App Development services by best phone developers. We are known for providing secure and results-driven Windows Phone Apps Development solutions",
    url: "https://www.tech2globe.com/windows-application-development-services",
    siteName: "Tech2Globe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Windows Development Services | Windows App Development services",
    description:
      "Tech2Globe offers Windows App Development services by best phone developers. We are known for providing secure and results-driven Windows Phone Apps Development solutions",
  },
  alternates: {
    canonical:
      "https://www.tech2globe.com/windows-application-development-services",
  },
};

const pageHeaderData = {
  title: "Windows Mobile Application Development",
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

export default function MobileApplicationDevelopment() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Windows Application Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row pb-5">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Windows Application Development Services" imageSrc="/images/services/mobileandwebd-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Supplying Cutting-Edge Windows Application Development for Your Long Period Mobility Plans a compact version operating system (OS) of the desktop, Windows Mobile has appeared as one of the finest or popular operating system for mobile industries across the World. The feature broadly accepted by the viewers is the scalability and many options offered by Windows.</p>
                <p>Tech2Globe has developed and designed some of the handpicked Windows mobile apps for a vast clientele and has continuously been known for supplying unequalled mobile web solutions. With a complete technical approach and perfect R&D services, we have supplied many customers across the AUS, US, UAE, UK & Europe marketplace. As per the demand of the Windows Mobile is rising constantly, we have enhanced our skills to match up the up-to-date trends of the business.</p>
                <p>Our Windows mobile application developers are also knowledgeable in migrating or porting Windows Mobile applications to another platform and provide app migration or porting services from Windows Mobile to another mobile platform.</p>
              </div>

              <div className={Style.ContentDiv}>
              <h3>We have developed iPhone application in following categories</h3>
              <hr />
              <ul className={Style.TwoCol}>
                <li>Augmented Reality Apps</li>
                <li>GPS Based Real Time Application</li>
                <li>Enterprise Application</li>
                <li>2D Gaming/Game Center Apps</li>
                <li>Address Book Based Applications</li>
                <li>In App Purchase, Push Notifications</li>
                <li>Barcode Scanner based Apps</li>
                <li>Location based Application</li>
                <li>Finance or Banking Application</li>
                <li>Calendar based Apps</li>
                <li>Video or Audio Streaming Apps</li>
                <li>Social Networking (Facebook or Twitter)</li>
                <li>City guide/ Compass Based Apps</li>
                <li>iAd based Apps, Admob</li>
              </ul>
              <p><Link href="mailto:info@tech2globe.com" className="text-decoration-underline text-muted">Contact us</Link> for Windows, iPad, iPhone, Mobile, Android Application Development Services.</p>
            </div>

            </div>
            
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>
          </div>
        </div>

        <ClientSlider testimonials={testimonials} />

      </section>
    </>
  )
};