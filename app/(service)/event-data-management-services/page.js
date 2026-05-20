import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";


export const metadata = {
  title: "Event Data Management services | Event Marketing Services | Tech2Globe",

  description: "Tech2Globe offers you a total range of Event Data Management Services for your marketing & limited time events including shows & meetings, speaking events & more.",

  keywords: [
    "Event Data Management services",
    "Trade Show Promotion Services",
    "Event Marketing Services",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/event-data-management-services",
  },

  openGraph: {
    title: "Event Data Management services | Event Marketing Services | Tech2Globe",
    description: "Tech2Globe offers you a total range of Event Data Management Services for your marketing & limited time events including shows & meetings, speaking events & more.",
    url: "https://www.tech2globe.com/event-data-management-services",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Event Data Management services | Event Marketing Services | Tech2Globe",
    description: "Tech2Globe offers you a total range of Event Data Management Services for your marketing & limited time events including shows & meetings, speaking events & more.",
  },
};

const pageHeaderData = {
  title: "Event Data Management",
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

const faqs = [
  {
    id: "One",
    question: "Since how long are you in the outsourcing field?",
    answer: `
        We have experience of 10 years in data entry outsourcing field and have successfully accomplished various projects of clients across the world. We have wide experience of working on different types of data entry projects.
      `,
  },
  {
    id: "Two",
    question: "How are fees structured – hourly rate or per-unit pricing?",
    answer: `
        In general fees are charged on a per unit basis. This is the simplest for everyone to understand and assures you are not paying for inefficiencies. It is also easiest to audit when you receive each invoice. In very rare circumstances will consider an hourly billing.
      `,
  },
  {
    id: "Three",
    question: "How will I get the completed work files?",
    answer: `
        We assure the quality of final files are up to your standards and then send the files to you via email or through the online applications. Depending on the file size, we can also send the files or data via the secured FTP server.
      `,
  },
  {
    id: "Four",
    question: "What are your working hours?",
    answer: `
        We work from Monday to Saturday 07:00 AM (Morning) IST to 11:30 AM (Night) IST. In case of work urgency and on the basis of client’s request, we also work on Sundays.
      `,
  },
  {
    id: "Five",
    question: "Does Tech2Globe work on weekends and holidays?",
    answer: `
        Yes. Our data entry operators work different schedules, and many of them prefer weekends. Some holidays, particularly Thanksgiving and Christmas, are more challenging to achieve full production and may entail to incentivize the operators.
      `,
  },
];

export default function EventDataManagement() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        name: "Since how long are you in the outsourcing field?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We have experience of 10 years in data entry outsourcing field and have successfully accomplished various projects of clients across the world. We have wide experience of working on different types of data entry projects.",
        },
      },
      {
        "@type": "Question",
        name: "How are fees structured – hourly rate or per-unit pricing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In general fees are charged on a per unit basis. This is the simplest for everyone to understand and assures you are not paying for inefficiencies. It is also easiest to audit when you receive each invoice. In very rare circumstances will consider an hourly billing.",
        },
      },
      {
        "@type": "Question",
        name: "How will I get the completed work files?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We assure the quality of final files are up to your standards and then send the files to you via email or through the online applications. Depending on the file size, we can also send the files or data via the secured FTP server.",
        },
      },
      {
        "@type": "Question",
        name: "What are your working hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work from Monday to Saturday 07:00 AM IST to 11:30 PM IST. In case of work urgency and on the basis of client’s request, we also work on Sundays.",
        },
      },
      {
        "@type": "Question",
        name: "Does Tech2Globe work on weekends and holidays?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our data entry operators work different schedules, and many of them prefer weekends. Some holidays, particularly Thanksgiving and Christmas, are more challenging to achieve full production and may entail incentivizing the operators.",
        },
      }
    ]
  };

  return (

    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Event Data Management Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Event Data Management Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Data related with an event begins well in front of the real event and proceeds with well past the farewell address.</p>

                <p>The potential for utilizing data and information pertaining to any event is enormous, as it envelops each part of the procedure, including arranging, budgeting, booking, enlistment, convenience; travel management, participant activities within the meeting, and estimation.</p>

                <p>Tech2Globe offers you a total range of event data management services for your marketing and limited time events including shows and meetings, speaking events, trade shows, online courses and so forth., beginning from making the mailing list, sending solicitations, consistently updating the responses in your CRM application, catching up with update emails, exposure prompts, calls, lastly ensuring that your possibilities, turn in.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Guarantee the success of your event with event data management services from Tech2Globe. We can assist you with:</h2>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <ul>
                      <li>Building target audience list</li>
                      <li>Creating and sending HTML email invitations</li>
                      <li>Mailing marketing collaterals and literature</li>
                      <li>Sending reminders and follow-ups on invitation either via email or phone</li>
                      <li>Scheduling booth appointments</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <ul>
                      <li>Following-up and setting-up appointments post event for lead generation</li>
                      <li>Prospecting and lead qualification</li>
                      <li>Delivering the event data in the file format of your choice</li>
                      <li>Updating the responses in the CRM/ERP</li>
                    </ul>
                  </div>
                </div>

                <p>If you are striving to expand the registration pace of your events, exhibitions, trade shows, meetings, webinars, and so forth. or make a pitch and impact the target audiences to get enrolled – we, at Tech2Globe can give a totally approved event/work advertising list across enterprises and geologies. Moreover, utilizing our trade show promotion services, we can likewise support you in revealing new possibilities for your events.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Event Data Marketing: Empower Your Business with the Tech2Globe Advantage</h2>
                <ul>
                  <li>Optimize Your Events</li>
                  <li>Make Better Business Decisions</li>
                  <li>Analyze Traffic, Interactions, and Engagement across Various Touchpoints</li>
                </ul>
                <p>Our data specialists analyze a few features of your marketing and promotional events to uncover what's best for your organization; utilize the latest technology stacks and procedures to improve communication with your target audience, and vigorously device strategies to upgrade the arrival on your events.</p>
                <p>In addition to a total scope of event data management services, Tech2Globe additionally offers a particular exhibit of advantages to your business.</p>
              </div>
            </div>


            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-3">
              <div className="card p-3 shadow-sm h-100">
                <img src="/images/services/service-inner/workforces.png" alt="10+ years of industry experience" width="55" height="55" />
                <h5>10+ years of industry experience</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-3">
              <div className="card p-3 shadow-sm h-100">
                <img src="/images/services/service-inner/verify.png" alt="Access to committed groups and task director" width="55" height="55" />
                <h5>Access to committed groups and task director</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-3">
              <div className="card p-3 shadow-sm h-100">
                <img src="/images/services/service-inner/recent.png" alt="Round-the-clock administration" width="55" height="55" />
                <h5>Round-the-clock administration</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-3">
              <div className="card p-3 shadow-sm h-100">
                <img src="/images/services/service-inner/quality.png" alt="ISO 9001:2015 affirmed for Quality Management System" width="55" height="55" />
                <h5>ISO 9001:2015 affirmed for Quality Management System</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-3">
              <div className="card p-3 shadow-sm h-100">
                <img src="/images/services/service-inner/security-privecy.png" alt="ISO 27001:2013 ensured for Data Security" width="55" height="55" />
                <h5>ISO 27001:2013 ensured for Data Security</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-3">
              <div className="card p-3 shadow-sm h-100">
                <img src="/images/services/service-inner/pricing.png" alt="Competitive pricing" width="55" height="55" />
                <h5>Competitive pricing</h5>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-3">
              <div className="card p-3 shadow-sm h-100">
                <img src="/images/services/service-inner/process.png" alt="Flexible outsourcing model" width="55" height="55" />
                <h5>Flexible outsourcing model</h5>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <h2>Talk about Your Project with Us</h2>
                <p>At Tech2Globe, we give a totally approved exchange and event marketing list to assist you with connecting with focused customers and high-value prospects through customized contact list data centered on your optimal audience across various businesses and geographies. To get familiar with how our extensive event data management services can add to your corporate deal achievement, if it's not too much trouble meet up with us.</p>
              </div>
            </div>
          </div>
        </div>

      </section >

      <FaqSection faqs={faqs} />

      <ClientSlider testimonials={testimonials} />

    </>
  )
};