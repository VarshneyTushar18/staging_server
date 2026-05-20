import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";

export const metadata = {
  title: "Complete Ecommerce Solution Services | Sell Online | Ecommerce Web Store",
  description:
    "Are you looking for a complete e-commerce solution? Tech2Globe experts manage your business by focusing on conversion techniques that meet your specific objectives.",
  keywords: [
    "end to end ecommerce solutions india",
    "complete ecommerce solution",
    "ecommerce solutions",
    "sell online",
    "ecommerce web store"
  ],
  openGraph: {
    title: "Complete Ecommerce Solution Services | Sell Online | Ecommerce Web Store",
    description:
      "Are you looking for a complete e-commerce solution? Tech2Globe experts manage your business by focusing on conversion techniques that meet your specific objectives.",
    url: "https://www.tech2globe.com/complete-ecommerce-solution-india",
    siteName: "Tech2Globe",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Ecommerce Solution Services | Sell Online | Ecommerce Web Store",
    description:
      "Are you looking for a complete e-commerce solution? Tech2Globe experts manage your business by focusing on conversion techniques that meet your specific objectives."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/complete-ecommerce-solution-india"
  }
};

const pageHeaderData = {
  title: "Complete Ecommerce Solution",
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

export default function CompleteEcommerceSolution() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Complete Ecommerce Solution India" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row pb-5">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Complete Ecommerce Solution India" imageSrc="/images/services/mobileandwebd-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Tech2Globe has bunch of people, specialized in End to End E-Commerce for the day-to-day management and operation of a E-Commerce website. Online Store owners spend a lot of time interacting with developers for day-to-day for their e-commerce activities, so we have built up a clear picture of what it takes to be effective. Bear in mind that – day-to-day – there’s going to be a lot of ongoing change and updates, working in the E-Commerce Admin Panel and managing e-commerce processes operationally (as opposed to strategic or conceptual activities).</p>
                <p>We have been working with 30+ businesses tirelessly to give them the tools, resources and support to be successful (& self-sufficient) with their E-Commerce websites. Some clients get on extremely well, others find it hard: Hiring a dedicated E-Commerce administrator will help Store owners on their main focus of business rather than spending day and night in administrating websites.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h3>Detailed responsibilities would include:</h3>
                <ul>
                  <li>Update product information and content on the website</li>
                  <li>Create banners, images, promotions etc. for display on the website (using products like Photoshop)</li>
                  <li>Update content managed areas (copy & artwork)</li>
                  <li>Manage website configuration & parameters (e.g., payment options, stock management)</li>
                  <li>Investigate and report any operational/technical issues arising</li>
                  <li>Scope and document ongoing website functional projects/improvements</li>
                  <li>Test and deploy functional projects/improvements</li>
                  <li>Liaise with e-commerce agency regarding the day-to-day management of the website</li>
                  <li>Liaise with internal resources regarding the day-to-day management of the website</li>
                  <li>Evaluate approaches & strategies to improve website sales conversions & customer engagement</li>
                  <li>Understand and develop sources of traffic (and the factors that influence it): email, SEO, PPC, affiliates, social media, catalogues etc.</li>
                  <li>Liaise with agencies or in-house teams to implement and support campaigns</li>
                  <li>Investigate, evaluate and assess new ways of generating additional traffic/orders</li>
                  <li>Produce reports to analyse the performance of all online marketing campaigns and promotions (via reports, analytics, surveys etc.)</li>
                  <li>To meet and exceed all agreed performance objectives (sales, conversions, engagement)</li>
                  <li>Continuous improvement of customer satisfaction</li>
                  <li>Meet internal service levels for website activity and management</li>
                  <li>Maintaining an excellent level of service to the business</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h3>Role of E-Commerce administrator will be:</h3>
                <hr />
                <ul>
                  <li>Generate and update website content (products, content, promotions)</li>
                  <li>Work with agencies / Digital Marketing Manager to build traffic & sales via the website</li>
                  <li>Plan, define and implement website changes and functional improvements</li>
                  <li>Maintain and update the online marketing plan for the website</li>
                  <li>Monitor key performance indicators on the website and develop plans to improve them</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h3>They will have below traits for the online store:</h3>
                <hr />
                <ul>
                  <li>Understanding of the disciplines required to drive traffic to retail websites (PPC, email marketing, link generation, online PR, SEO, offline marketing and PR, affiliate programmes, etc.)</li>
                  <li>Understanding of order management and customer fulfilment in an e-commerce context</li>
                  <li>Experience using packages like Excel and Photoshop</li>
                  <li>Computer literate with an understanding of basic web technologies (FTP, browsers, basic HTML, data files)</li>
                  <li>Familiar with data management</li>
                  <li>Previous experience with website or e-commerce CMS</li>
                  <li>Basic understanding of Google products such as Webmaster Tools & Analytics (desirable)</li>
                  <li>Experience with Magento (a plus)</li>
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
    </>
  )
};