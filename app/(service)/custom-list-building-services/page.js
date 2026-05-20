import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import FaqSection from "@/app/components/services/faqs/faqs";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";


export const metadata = {
  title: "Custom List Building Services | B2B list building service | Tech2Globe",
  description:
    "Tech2Globe offers you the most ideal method of streamlining your list enhancement initiative with Custom List Building Services. With our B2B list building services, you can boost marketing efforts & reduce customer acquisition cost.",
  keywords:
    "Custom List Building Services, B2B list building services, List building company.",

  openGraph: {
    title: "Custom List Building Services | B2B list building service | Tech2Globe",
    description:
      "Tech2Globe offers you the most ideal method of streamlining your list enhancement initiative with Custom List Building Services. With our B2B list building services, you can boost marketing efforts & reduce customer acquisition cost.",
    url: "https://www.tech2globe.com/custom-list-building-services",
    siteName: "Tech2Globe",
  },

  twitter: {
    card: "summary_large_image",
    title: "Custom List Building Services | B2B list building service | Tech2Globe",
    description:
      "Tech2Globe offers you the most ideal method of streamlining your list enhancement initiative with Custom List Building Services. With our B2B list building services, you can boost marketing efforts & reduce customer acquisition cost.",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/custom-list-building-services",
  },
};

const pageHeaderData = {
  title: "Custom List Building",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};


const resources = [
  { id: 1, name: "Restaurant Menu Entry Services", path: "/restaurant-menu-entry-services" },
  { id: 2, name: "Financial Data Entry Services", path: "/financial-data-entry-services" },
  { id: 3, name: "Catalog Management", path: "/catalog-management-services" },
  { id: 4, name: "Data Processing Services", path: "/data-processing-services" },
  { id: 5, name: "Data Product Entry", path: "/product-data-entry-services" },
];

const usefulLinks = [
  { id: 6, name: "Food Industries", path: "/food-industries-services" },
  { id: 7, name: "Non-profit Organization", path: "/non-profit-organizations-services" },
  { id: 8, name: "Medical And Health", path: "/medical-and-health-services" },
  { id: 9, name: "Translation Firms", path: "/translation-firms-services" },
];


const sidebarSections = [
  { heading: "Resources", links: resources },
  { heading: "Industries We Serve", links: usefulLinks },
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
    question: "Can I enjoy cost-saving of operational expenses by outsourcing to your company?",
    answer: `
        Of course, you can. It has been testified by our customers that they have obtained a cost-saving ranging from 45 to 70% while keeping quality and timelines.
      `,
  },
  {
    id: "Two",
    question: "How do you ensure confidentiality of my data?",
    answer: `
        We know how crucial it is to safeguard your business sensitive and private information. Therefore, there are strict security measures in place to ensure that your data is kept completely secured.
      `,
  },
  {
    id: "Three",
    question: "What is legal aspect of outsourcing of any confidential data?",
    answer: `
        We are ready to sign Non-disclosure agreement (NDA) and confidentiality agreement in this regard.
      `,
  },
  {
    id: "Four",
    question: "How is Quality Control (QC) done on data?",
    answer: `
        Through validation and online data verification QC is done.
      `,
  },
  {
    id: "Five",
    question: "What are the typical payment options?",
    answer: `
        We prefer payment by check or directly transfer to our bank accounts. We are also accepting payments via Paypal.
      `,
  },
  {
    id: "Six",
    question: "In what all modes, communication is enabled?",
    answer: `
        You can opt for a communication of your choice- mail, chat, Google Duo, hangout, phone or Skype. We have multilingual people with us and hence language will never emerge as a barrier.
      `,
  },
];

export default function CustomListBuilding() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I enjoy cost-saving of operational expenses by outsourcing to your company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Of course, you can. It has been testified by our customers that they have obtained a cost-saving ranging from 45 to 70% while keeping quality and timelines."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure confidentiality of my data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We know how crucial it is to safeguard your business sensitive and private information. Therefore, there are strict security measures in place to ensure that your data is kept completely secured."
        }
      },
      {
        "@type": "Question",
        "name": "What is legal aspect of outsourcing of any confidential data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are ready to sign Non-disclosure agreement (NDA) and confidentiality agreement in this regard."
        }
      },
      {
        "@type": "Question",
        "name": "How is Quality Control (QC) done on data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Through validation and online data verification QC is done."
        }
      },
      {
        "@type": "Question",
        "name": "What are the typical payment options?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We prefer payment by check or direct bank transfer. We also accept payments via Paypal."
        }
      },
      {
        "@type": "Question",
        "name": "In what all modes, communication is enabled?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can opt for your preferred mode—mail, chat, Google Duo, Hangout, phone or Skype. We have multilingual team members, so language will never be a barrier."
        }
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
      <Breadcrumb parentName="Services" pageName="Custom List Building Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Custom List Building Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p> Tech2Globe offers you the most ideal method of streamlining your list enhancement initiative, with a particular custom list building service. This procedure involves, building another possibility database for your marketing dependent on your objective rules. With an immense database of business contact records and a smart mechanization motor, we pull out the information that you require dependent on your specification.</p>
                <p>Tech2Globe makes that a thing of past. Furnished with a profound comprehension of the different areas and cutting-edge technology, we are ideally situated to convey world-class B2C and B2B list building services and make exceptionally focused on modified sales list that take care of business, yet supplant customer desires on different fronts.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Custom List Building Process</h2>
                <p>When you give the ideal target criteria to us, we key-in these rules to our system in logical format. If you haven&apos;t settled the target audience, our specialists can assist you with recognizing your target criteria as well. When the standards are taken care of to the system, the system with the assistance of the backend motor concentrates the ideal contact records. We additionally source contact records from different online accomplice and membership assets.</p>
                <p>We then confirm these records for the emails, run the permission pass and afterward convey the records to you.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">List building tools</h2>
                <p>Building and managing customer relationships is essential for generating new leads and conversions for your business, and <Link href="/email-marketing-services" className="text-muted">email marketing</Link> is one of the best ways to achieve this. Below are some best tools:</p>
                <ul className={Style.TwoCol}>
                  <li>OptinMonster</li>
                  <li>Optimizely</li>
                  <li>Unbounce</li>
                  <li>Facebook Lead Ads</li>
                  <li>Rafflecopter</li>
                  <li>WooBox</li>
                  <li>LinkedIn Pulse</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Ready to Take the Leap</h2>
                <p>We, at Tech2Globe, understand that choosing custom list building services is a critical decision for your business, which is why we are always happy to answer any questions or concerns you may have. To learn more about our B2B list building services or discuss your requirement, fill out our contact form and we will take it from there. You can also write to us at sales@tech2globe.com.</p>
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

      <FaqSection faqs={faqs} />
      <ClientSlider testimonials={testimonials} />

    </>
  )
};
