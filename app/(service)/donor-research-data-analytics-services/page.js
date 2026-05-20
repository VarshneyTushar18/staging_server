import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";

export const metadata = {
  title: "Donor Research & Data Analytics Services | Donor Research Services",
  description:
    "Get Donor Research & Data Analytics Services with Tech2Globe. Our donor analysis experts provide fast and convenient donor data transfer for thousands of clients worldwide.",
  keywords: [
    "Donor Research & Data Analytics Services",
    "Donor Research Services",
    "donor data analysis",
    "nonprofit data analytics"
  ],
  openGraph: {
    title: "Donor Research & Data Analytics Services | Donor Research Services",
    description:
      "Get Donor Research & Data Analytics Services with Tech2Globe. Our donor analysis experts provide fast and convenient donor data transfer for thousands of clients worldwide.",
    url: "https://www.tech2globe.com/donor-research-data-analytics-services",
    siteName: "Tech2Globe",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Donor Research & Data Analytics Services | Donor Research Services",
    description:
      "Get Donor Research & Data Analytics Services with Tech2Globe. Our donor analysis experts provide fast and convenient donor data transfer for thousands of clients worldwide."
  },
  alternates: {
    canonical:
      "https://www.tech2globe.com/donor-research-data-analytics-services"
  }
};

const pageHeaderData = {
  title: "Donor Research Data Analytics",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Restaurant Menu Entry Services", path: "/restaurant-menu-entry-services" },
  { id: 2, name: "Financial Data Entry Services", path: "/financial-data-entry" },
  { id: 3, name: "Catalog Management", path: "/catalog-management-services" },
  { id: 4, name: "Data Processing Services", path: "/data-processing-services" },
  { id: 5, name: "Data Product Entry", path: "/product-data-entry-services" },
];

const usefullinks = [
  { id: 1, name: "Food Industries", path: "/food-industries-services" },
  { id: 2, name: "Non-profit Organization", path: "/non-profit-organizations-services" },
  { id: 3, name: "Medical And Health", path: "/medical-and-health-services" },
  { id: 4, name: "Translation Firms", path: "/translation-firms-services" },
];

const sidebarSections = [
  { heading: "Resources", links: resources },
  { heading: "Industries We Serve", links: usefullinks },
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

export default function DonorResearchDataAnalytics() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Donor Research Data Analytics Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Donor Research Data Analytics Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>The success of your fundraising efforts is directly dependent upon how your fundraising database is structured and the accuracy of your data. Donor prospect research software usually integrates with nonprofit CRM to manage the relationships with the donors and with fundraising intelligence software, as well as nonprofit accounting to process and track payments, gifts, donations, etc. Our donor <Link href="/donor-research-data-analytics-services" className="text-decoration-underline text-muted">analytics services</Link> experts specialize in fundraising data conversion and enhancement.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h3>Convert & Enhance Your Donor Database</h3>
                <p>Tech2Globe has donor analysis experts which provides fast, reliable, and convenient donor data transfer for thousands of clients worldwide. We have the experience and technique to transfer your donor and gift data from your current file formats and software programs to donor perfect. Whether you are moving a simple table from Excel or moving megabytes of data from a variety of software packages, our donor research services will save you time and money.</p>
                <p>In addition to the importing of client data, our donor data conversion services often include:</p>
                <ul>
                  <li>Combining Fundraising Databases.</li>
                  <li>List Enhancement.</li>
                  <li>Establishing Consistent Coding of Donors.</li>
                  <li>Other Database Cleanup.</li>
                </ul>
                <p>The cost of <strong>fundraising data analytics</strong> is based on the volume of records, quality of data, and services to be performed and Tech2Globe offers affordable rates.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h3>Worked for Organizations of All Sizes</h3>
                <p>Whether you&apos;re running a local social services organization or part of the advancement team at Tech2Globe, we have donor research services that will assist you with raising more significant gifts, quicker.</p>
                <ul>
                  <li>For Nonprofits</li>
                  <li>For Education</li>
                  <li>For Healthcare</li>
                  <li>For Arts and Culture</li>
                  <li>For Faith-Based</li>
                  <li>For Community Foundations</li>
                </ul>
              </div>

               <div className={Style.ContentDiv}>
                <h3>Why Choose Tech2Globe Experts?</h3>
                <p>Utilizing Tech2Globe donor prospect research services, that are a part of key solutions, client’s access tenured raising fundraising experts with long periods of experience helping nonprofits drive productivity across programs. Their master abilities can be applied toward almost any task that requires a practiced vital asset. Our mission is to enable not-for-profit organizations and help them as they improve the world a spot. From Tech2Globe’s group of specialists, you can anticipate:</p>
                <ul>
                  <li>Dedicated time with strategic counseling resources</li>
                  <li>Identification of industry best practices</li>
                  <li>Tactical, project-level proposals</li>
                  <li>Strategic focusing on and investment suggestions</li>
                  <li>Usage plan</li>
                </ul>
                <p>With many years of dedicated presence and ability, Tech2Globe is the world&apos;s definite raising fundraising expert. The present most significant nonprofit prospect research influence Tech2Globe to find, reach, and connect new supporters; hold and extend the engraving of their current supporter base; and update their procedures to work all the more effectively.</p>
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