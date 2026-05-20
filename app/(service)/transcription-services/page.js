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
  title: "Outsource Transcription Services | Professional Transcription Services",
  description:
    "Our professional transcription services come up with 99% accuracy guarantee for good audio. Get high quality-services at affordable rates with quick turnaround time with us.",
  keywords:
    "Transcription Services, Online transcription services, Transcription services online, Outsource transcription services, Best transcription services, Professional transcription services.",
  openGraph: {
    title: "Outsource Transcription Services | Professional Transcription Services",
    description:
      "Our professional transcription services come up with 99% accuracy guarantee for good audio. Get high quality-services at affordable rates with quick turnaround time with us.",
    url: "https://www.tech2globe.com/transcription-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outsource Transcription Services | Professional Transcription Services",
    description:
      "Our professional transcription services come up with 99% accuracy guarantee for good audio. Get high quality-services at affordable rates with quick turnaround time with us.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/transcription-services",
  },
};

const pageHeaderData = {
  title: "Transcription Services",
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
        question: "Do I need a minimum commitment?",
        answer: `
        Yes, since we will be dedicated a specific staff member as your account manager and will be allocating resources for your project, we can only make this possible with a monthly commitment.
      `,
    },
    {
        id: "Two",
        question: "How will I communicate with you?",
        answer: `
        We prefer communication through our client project management dashboard. However, in the case of an emergency, you can also contact us via email, hangout, Skype and telephone.
      `,
    },
    {
        id: "Three",
        question: "What is the turnaround time?",
        answer: `
        Every customer support ticket is replied to within 24 hours. In emergency situations, your issue will be made a top level priority.
      `,
    },
    {
        id: "Four",
        question: "What is your level of experience with diverse industry verticals?",
        answer: `
        As we have been around for a decade and a half, we are experienced with a great variety of industry verticals.
      `,
    },
    {
        id: "Five",
        question: "In which parts of the world are your clients based?",
        answer: `
        We have clients all over the world. However, the majority of them are located in UK, US, Australia and countries of Continental Europe.
      `,
    },
];

export default function TranscriptionServices() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need a minimum commitment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, since we will be dedicated a specific staff member as your account manager and will be allocating resources for your project, we can only make this possible with a monthly commitment."
        }
      },
      {
        "@type": "Question",
        "name": "How will I communicate with you?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We prefer communication through our client project management dashboard. However, in the case of an emergency, you can also contact us via email, hangout, Skype and telephone."
        }
      },
      {
        "@type": "Question",
        "name": "What is the turnaround time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every customer support ticket is replied to within 24 hours. In emergency situations, your issue will be made a top level priority."
        }
      },
      {
        "@type": "Question",
        "name": "What is your level of experience with diverse industry verticals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As we have been around for a decade and a half, we are experienced with a great variety of industry verticals."
        }
      },
      {
        "@type": "Question",
        "name": "In which parts of the world are your clients based?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have clients all over the world. However, the majority of them are located in UK, US, Australia and countries of Continental Europe."
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
      <Breadcrumb parentName="Services" pageName="Transcription Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Transcription Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>The internet has altered the manner in which businesses operate. With the rise in new media channels, for example, social networks, online videos and audios, it is currently possible to arrive at your clients quicker. Numerous firms use audio and video to connect with partners and decision makers – through both online and disconnected media. For businesses, textual communication despite everything remains the main method to impart to audiences and has a bigger utilization rate when compared to audio / video formats.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h3>Online Transcription Services by Tech2Globe</h3>
                <p>Sponsored by a profoundly qualified group of transcriptionists, editors and project managers and upheld by the latest in information systems, we are well equipped to take on your transcription services. From simple online dictation services to complex occupations including media transcription, we spread an expansive range of services.</p>
                <p>Here&apos;s a list of the transcription services that we provide:</p>
                <ul className={Style.TwoCol}>
                  <li>Legal transcription services</li>
                  <li>Media transcription services</li>
                  <li>Business transcription services</li>
                  <li>Financial transcription services</li>
                  <li>Audio / Video transcription services</li>
                </ul>
                <p>At Tech2Globe, we relieve your security worries by ensuring that our document sharing strategies are GDPR compliant, permit settings for granular permissions, and grant notifications and activity logs to recognize unapproved access.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h3>Process</h3>
                <p>An overview of transcription just describes a three level procedure, which are Dictation, Video, and Transcribing. However, there are just three procedures extensively; file requires a detailed level of value check before delivery.</p>
                <p>The three step quality procedure for online transcription services guarantees steady quality delivery in the world of transcription.</p>
                <ul>
                  <li>As an initial step the voice files are received or downloaded by means of FTP or through made sure about channel joins which must not be broken while downloading. Downloaded documents will be distributed for file to a group of value transcribers.</li>
                  <li>The second level of value process is proofreading. It is just here, that the file will be under transcript for wrongly spelt words, topping off of the spaces, checking for like sounding words, and for punctuation and paragraphing.</li>
                  <li>The third level of value process is editing, and this is the key procedure in deciding the nature of the transcribed file. It is just at this level, an editor listens to the entire document again alongside the file and alters it till it happens to 100% exact and does the final check for the organizing as to customer details.</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h3>Tools</h3>
                <p>Transcription services online discover application with organizations as well as generally received by non-business functions, for example, healthcare, universities, and popular media and so on. Here are our five picks of the best free transcription software you can discover online.</p>
                <ul>
                  <li>OTranscribe</li>
                  <li>Express Scribe</li>
                  <li>The FTW Transcriber</li>
                  <li>Inqscribe</li>
                  <li>Transcribe</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h3>Online transcription – a good investment</h3>
                <p>Outsourcing has emerged as a positive choice for organizations hoping to complete files rapidly at a lower cost and at a quality that is at standard if worse than local companies. It additionally liberates you of the time expected to spend on running a backed function.</p>
                <p>Tech2Globe has worked with organizations around the globe in effectively helping them in their file requirements for more than 10 years. With our experience with taking a shot at different areas of transcription, we can be your ideal partner in online best transcription services.</p>
                <p>If you are searching for a partner who has the correct blend of experience and ability in taking up your file requirements, Tech2Globe is the right vendor.</p>
                <p>Contact us to outsource transcription services.</p>
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

      <FaqSection faqs={faqs} />

      <ClientSlider testimonials={testimonials} />

    </>
  )
};