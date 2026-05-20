import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaAngleRight } from "react-icons/fa";

export const metadata = {
  title: "Dashboard designing services | Dashboard designers | Tech2Globe",

  description:
    "Tech2globe Dashboard Designing services make a compact dashboard with perfect to expose group basic information and maintain a superior business. Get a free consultation today with us. ",

  keywords: [
    "Dashboard design services",
    "Dashboard designing services",
    "Dashboard designers .",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/dashboard-design-services",
  },

  openGraph: {
    title:
      "Dashboard designing services | Dashboard designers | Tech2Globe",
    description:
      "Tech2globe Dashboard Designing services make a compact dashboard with perfect to expose group basic information and maintain a superior business. Get a free consultation today with us.",
    url: "https://www.tech2globe.com/dashboard-design-services",
    siteName: "Tech2Globe",
    type: "website",
  },

  twitter: {
    card: "summary",
    title:
      "Dashboard designing services | Dashboard designers | Tech2Globe",
    description:
      "Tech2globe Dashboard Designing services make a compact dashboard with perfect to expose group basic information and maintain a superior business. Get a free consultation today with us.",
  },
};

const faqs = [
  {
    id: "One",
    question: "What is Tech2Globe all about?",
    answer: `
        Tech2Globe is a pioneer in outsourcing and has been providing technology-driven outsourcing solutions to global companies from last 10 years. When you outsource to Tech2Globe you can be assured of risk-free outsourcing. Several global customers have chosen to partner with us because apart from providing services we strive to meet the business targets of our customers.
      `,
  },
  {
    id: "Two",
    question: "Are your services cost-effective?",
    answer: `
        Yes. When you outsource to Tech2Globe you be assured of saving more than 40-50% of your operating costs.
      `,
  },
  {
    id: "Three",
    question: "What is your TAT?",
    answer: `
        If you want your services to be delivered within a fast turnaround time, then you have come to the right place. One of the benefits that we offer our customers is our quick TAT.
      `,
  },
  {
    id: "Four",
    question: "How about security at Tech2Globe?",
    answer: `
        If security and privacy issues are stopping you from outsourcing, you can go ahead and start outsourcing to Tech2Globe as we ensure security, privacy & confidentiality at every level of the outsourcing process.
      `,
  },
  {
    id: "Five",
    question: "If I outsource to Tech2Globe, how will I be paying you?",
    answer: `
        You can pay us either by check or by wire transfer. If you would like to make payments by any other mode, then you can contact one of our sales executives.
      `,
  },
];

const pageHeaderData = {
  title: "Dashboard Design",
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
    text: "Very professional and creative team. They patiently worked on changes I asked for and delivered on time. Thank you.",
    name: "Teliamed– Amazon Enhance Brand Content USA",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "They have excellent service and management, this is honest review after a month of experience with them, team is hardworking, knowledgeable and do every task on time. I hope they continue to deliver me same output.",
    name: "Roxel- Account Management India",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Excellent Team, good results in sales",
    name: "Andriana– Amazon Sponsored Ads USA",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Excellent service by Tech2globe, brilliant service and hardworking",
    name: "Neo Global- Vendor Account Management UK",
  },
  {
    id: 5,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Courteous, professional, quality work, best bang for your buck",
    name: "Medi Hub- Amazon Store Creations USA",
  },

];


export default function DashboardDesign() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Tech2Globe all about?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tech2Globe is a pioneer in outsourcing and has been providing technology-driven outsourcing solutions to global companies from last 10 years. When you outsource to Tech2Globe you can be assured of risk-free outsourcing. Several global customers have chosen to partner with us because apart from providing services we strive to meet the business targets of our customers."
        }
      },
      {
        "@type": "Question",
        "name": "Are your services cost-effective?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. When you outsource to Tech2Globe you be assured of saving more than 40-50% of your operating costs."
        }
      },
      {
        "@type": "Question",
        "name": "What is your TAT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you want your services to be delivered within a fast turnaround time, then you have come to the right place. One of the benefits that we offer our customers is our quick TAT."
        }
      },
      {
        "@type": "Question",
        "name": "How about security at Tech2Globe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If security and privacy issues are stopping you from outsourcing, you can go ahead and start outsourcing to Tech2Globe as we ensure security, privacy & confidentiality at every level of the outsourcing process."
        }
      },
      {
        "@type": "Question",
        "name": "If I outsource to Tech2Globe, how will I be paying you?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can pay us either by check or by wire transfer. If you would like to make payments by any other mode, then you can contact one of our sales executives."
        }
      }
    ]
  };

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Dashboard Design Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Dashboard Design Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>

                <p>Does your business have complex information however no real way to acquire significant bits of knowledge? Do you understand the information; however have no real way to see how you are performing against your objectives? A well-designed and compelling dashboard design services businesses with basic access to key business metrics.</p>
                <p>Work in conveying dashboard designing services, Tech2Globe helps enterprises in designing dashboard that covers all the basic information points and bolsters business people in settling on educated choices. Our dashboard designers make a compact dashboard with perfect and marketers to expose group basic information and maintain a superior business. The business experiences can help as far as knowing your business in a very intuitive way.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h2>What Tech2Globe Offer Dashboard Design Services?</h2>
                <p className="mb-0">We, at Tech2Globe, have a proficient group of experienced developers who strive to give you the top tier dashboard development services. We have all your dashboard requirements and needs secured. Our range of dashboard design services include:</p>
                <div className="row pb-2">
                  <div className="row g-4">

                    <div className="col-lg-3 col-md-3 col-sm-8">
                      <div className="card h-100 text-center shadow-sm border rounded-3 p-3">

                        <Image
                          src="/images/services/service-inner/address.png"
                          width={45}
                          height={45}
                          className="mb-3 d-block mx-auto"
                        />

                        <p className="mb-0">
                          Tracking association's performance with key performance indicators (KPIs),
                          business metrics and other basic information points.
                        </p>

                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-8">
                      <div className="card h-100 text-center shadow-sm p-3 border rounded-3">
                        <Image
                          src="/images/services/service-inner/search.png"
                          width={45}
                          height={45}
                          className="d-block mx-auto"
                        />
                        <p className=" mb-0 ">
                          Using "what if" analysis and visualizing trends to decide the effect of business change.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-8">
                      <div className="card h-100 text-center shadow-sm p-3 border rounded-3">
                        <Image
                          src="/images/services/service-inner/import-data.png"
                          width={45}
                          height={45}
                          className="d-block mx-auto"
                        />
                        <p className=" mb-0 ">
                          Collating chunks of data from reliable sources and gathering them in a single dashboard.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-8">
                      <div className="card h-100 text-center shadow-sm p-3 border rounded-3">
                        <Image
                          src="/images/services/service-inner/resume-icon.png"
                          width={45}
                          height={45}
                          className="d-block mx-auto"
                        />
                        <p className=" mb-0 ">
                          Creating a dashboard wireframe that presents proficient marking and styling on top of your project specifications.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-8">
                      <div className="card h-100 text-center shadow-sm p-3 border rounded-3">
                        <Image
                          src="/images/services/service-inner/workforces.png"
                          width={45}
                          height={45}
                          className="d-block mx-auto"
                        />
                        <p className=" mb-0 ">
                          Creating clear and basic representations that give clients a holistic overview of the business' present performance.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-8">
                      <div className="card h-100 text-center shadow-sm p-3 border rounded-3">
                        <Image
                          src="/images/services/service-inner/customer-support.png"
                          width={45}
                          height={45}
                          className="d-block mx-auto"
                        />
                        <p className=" mb-0 ">
                          Ensuring that the information is visualized clearly, leaving more effect on clients and prompting higher ROI for the project.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-8">
                      <div className="card h-100 text-center shadow-sm p-3 border rounded-3">
                        <Image
                          src="/images/services/service-inner/share.png"
                          width={45}
                          height={45}
                          className="d-block mx-auto"
                        />
                        <p className=" mb-0 ">
                          Sharing dashboard views over the web or through Microsoft Office and Adobe PDFs.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
                <p className="mt-4">As a part of dashboard designing services, we can design both, operational and logical dashboards as per your particular requirements.</p>

              </div>


            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <h2>Our Process for Dashboard Design Services</h2>
                <hr />

                <div className="row g-4 pb-4">

                  {/* Card 1 */}
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card h-100 text-center shadow-sm border rounded-3 p-4">

                      <Image
                        src="/images/services/service-inner/road-map.png"
                        width={55}
                        height={55}
                        alt="Roadmap and Implementation"
                        className="d-block mx-auto mb-3"
                      />

                      <h5 className="mb-2">
                        Roadmap and Implementation
                      </h5>

                      <p className="mb-0 lh-lg">
                        Our trained solution architects make an itemized roadmap for the usage of Data Visualization Tools and Business Intelligence solutions over your association.
                      </p>

                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card h-100 text-center shadow-sm border rounded-3 p-4">

                      <Image
                        src="/images/services/service-inner/development.png"
                        width={55}
                        height={55}
                        alt="Dashboard Development"
                        className="d-block mx-auto mb-3"
                      />

                      <h5 className="mb-2">
                        Dashboard Development
                      </h5>

                      <p className="mb-0 lh-lg">
                        Trust our data visualization experts to build broad dashboards that offer extensive and detailed data expected to increase noteworthy bits of knowledge.
                      </p>

                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card h-100 text-center shadow-sm border rounded-3 p-4">

                      <Image
                        src="/images/services/service-inner/workforces.png"
                        width={55}
                        height={55}
                        alt="Business Intelligence Expertise"
                        className="d-block mx-auto mb-3"
                      />

                      <h5 className="mb-2">
                        Business Intelligence Expertise
                      </h5>

                      <p className="mb-0 lh-lg">
                        Our BI specialists help you in utilizing the most recent business intelligence and{' '}
                        <Link href="/data-analytics-services">data analytics</Link> tools to settle on better and quicker choices for your business.
                      </p>

                    </div>
                  </div>

                </div>

                <p>
                  We, at Tech2Globe, have made a niche for ourselves in the field of cutting edge BI solutions that take organizations to the next level.
                </p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Tools we Leverage in Excel Data Entry</h4>
                <p>We are living in data-driven world. In this way, it's very amazing that 90% of the data present today was really made over the last two years. Companies these days are constantly gathering information as they are looking for possible customers. Identifying future clients requires data gathering, which is a herculean task since information is being made at the speed of light.</p>
                <ul>
                  <li>Adobe Acrobat reader DC</li>
                  <li>Abbyy FineReader</li>
                  <li>Tesseract</li>
                  <li>Readiris</li>
                  <li>OmniPage</li>
                  <li>Docufree</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Master in All Languages</h4>
                <p>Our dashboard designers are fluent in English, French, German, Spanish, Hindi, Arabic, Russian, and Bengali and are well-acquainted with idioms, phrases, vocabulary, and different accents, at par with any native speaker.</p>
                <p>It would be ideal if you keep in touch with us at info@tech2globe.com and our specialists will connect with you in touch with you shortly.</p>
              </div>
            </div>
          </div>
        </div>
      </section >


      <FaqSection faqs={faqs} />

      <div className="EmailMarketingTestimonials">
        <ClientSlider testimonials={testimonials} />
      </div>


    </>
  )
};