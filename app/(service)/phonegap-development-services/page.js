import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";

export const metadata = {
  title: "PhoneGap App Development Services | PhoneGap App Development Company",
  description:
    "Tech2Globe is phoneGap app Development Company. We design & build customer-engaging apps for insurance, ecommerce, retail, or banking that will achieve your business goals.",
  keywords: [
    "Phone gap app development",
    "phone gap app development services",
    "phone gap mobile app development",
    "PhoneGap App Development Company"
  ],
  openGraph: {
    title: "PhoneGap App Development Services | PhoneGap App Development Company",
    description:
      "Tech2Globe is phoneGap app Development Company. We design & build customer-engaging apps for insurance, ecommerce, retail, or banking that will achieve your business goals.",
    url: "https://www.tech2globe.com/phonegap-development-services",
    siteName: "Tech2Globe",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PhoneGap App Development Services | PhoneGap App Development Company",
    description:
      "Tech2Globe is phoneGap app Development Company. We design & build customer-engaging apps for insurance, ecommerce, retail, or banking that will achieve your business goals."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/phonegap-development-services"
  }
};

const pageHeaderData = {
  title: "Phonegap Development Services",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "E-Commerce Development", path: "/e-commerce-development" },
  { id: 2, name: "Enterprise Portal Development", path: "/enterprise-portal-development" },
  { id: 3, name: "Content Management System", path: "/content-management-system" },
  { id: 4, name: "Web Application Development", path: "/web-application-development" },
  { id: 5, name: "Ruby On Rails Development", path: "/ruby-on-rails-development" },
  { id: 6, name: "Phonegap Development Services", path: "/phonegap-development-services" },
  { id: 7, name: "eCommerce Solutions", path: "/complete-ecommerce-solution-india" },
];

const sidebarSections = [
  { heading: "Resources", links: resources },
];

export default function PhonegapDevelopment() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Phonegap Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row pb-5">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Phonegap Development Services" imageSrc="/images/services/mobileandwebd-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <h3>Go With the PhoneGap Development Services for Enhanced Process</h3>
                <p>PhoneGap is the most excellent mobile-orientated apps improvement platforms. That is an open source cross-platform that enables the programmer system cross-applications for the entire cellular devices. It will often make use of CSS3, HTML5, and JavaScript. The hybrid software is a sort of app that has each local and internet functions. This suggests, it works on all of the browsers and offers local like enjoy. The web marketplace is expanding daily. It has come to be the large platform. Therefore, it&apos;s far a tough state of affairs for every commercial enterprise proprietor to establish the commercial enterprise in the virtual global efficaciously. For this reason, there&apos;s a demand for the powerful tool, like the hybrid app, which may be availed with the assist of PhoneGap utility improvement service companies. PhoneGap app improvement platform has emerged because of the quality framework within the application improvement industry. The growing demand for android, iOS, and home windows has created the scenario for a developer to code the more than one application for unique gadgets.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h3>App Services :</h3>
                <hr/>
                <p>Developing the equal software multiple times lead to the wastage of time and money of the developers. For that reason, various app improvement frameworks have been added within the market, where PhoneGap framework is gambling an essential position. The organizations which have taken the PhoneGap development service, are working prolifically within the online market. However, a few are still inside the doubt. Therefore, this blog provides the gain of PhoneGap software improvement service. It wills offer capabilities-rich utility. PhoneGap platform comes with the array of powerful local capabilities, accelerometer, inclusive of digital, compass, notification garage contact, and much more that may make the application powerful. It is a build app for all the systems. PhoneGap is like minded with extraordinary running systems, like iOS, Blackberry, Symbian, Bada, Ubuntu contact, Tizen, and much more. It will likely be clean for the business owner to make bigger the patron base due to the fact the PhoneGap utility can run on nearly all the platforms.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h3>Various features: :</h3>
                <hr/>
                <p>PhoneGap will take less time to the marketplace. The business proprietor can without difficulty distribute and market the PhoneGap application due to the fact it could be published on all of the application stores. Secondly, you could even market the app with the assist of seo method. It also booms the ROI and saves time. Through making funding in PhoneGap improvement carrier, the commercial enterprise owner can beautify ROI and keep the valuable time because with the assist of PhoneGap development the application advertising and marketing will become easy and this can generate the sales in minimal time for the enterprise proprietor. The PhoneGap programs have a sturdy and clean structure that makes it clean for the builders to control the utility. Moreover, if the users want to decorate the capabilities of application inside the destiny, then it is able to be effortlessly customized. Availing the PhoneGap application development carrier will now not disturb the workflow of the business, as a substitute, it will enhance the business and assist you in benefiting desirable popularity as well as a presence in the online market.</p>
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
    </>
  )
};