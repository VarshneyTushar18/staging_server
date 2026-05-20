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
  title: "Outsource Audio Transcription Services | Video Transcription Services",
  description:
    "Our audio transcription services can translate with 100% accuracy. We have built a three-step transcription process to guarantee that you get a superior quality transcription.",
  keywords: [
    "Audio and Video Transcription Services",
    "Audio transcription services",
    "Outsource audio transcription services",
    "Audio/video transcription services"
  ],
  openGraph: {
    title: "Outsource Audio Transcription Services | Video Transcription Services",
    description:
      "Our audio transcription services can translate with 100% accuracy. We have built a three-step transcription process to guarantee that you get a superior quality transcription.",
    url: "https://www.tech2globe.com/audio-transcription-services",
    siteName: "Tech2Globe web Solutions LLP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Outsource Audio Transcription Services | Video Transcription Services",
    description:
      "Our audio transcription services can translate with 100% accuracy. We have built a three-step transcription process to guarantee that you get a superior quality transcription."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/audio-transcription-services"
  }
};

const pageHeaderData = {
  title: "Audio Transcription Services",
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

export default function AudioTranscriptionServices() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Since how long are you in the outsourcing field?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "We have experience of 10 years in data entry outsourcing field and have successfully accomplished various projects of clients across the world. We have wide experience of working on different types of data entry projects."
        }
      },
      {
        "@type": "Question",
        "name": "How are fees structured – hourly rate or per-unit pricing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "In general fees are charged on a per unit basis. This is the simplest for everyone to understand and assures you are not paying for inefficiencies. It is also easiest to audit when you receive each invoice. In very rare circumstances we will consider an hourly billing."
        }
      },
      {
        "@type": "Question",
        "name": "How will I get the completed work files?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "We assure the quality of final files are up to your standards and then send the files to you via email or through online applications. Depending on the file size, we can also send the files or data via a secured FTP server."
        }
      },
      {
        "@type": "Question",
        "name": "What are your working hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "We work from Monday to Saturday 07:00 AM IST to 11:30 PM IST. In case of work urgency and on the basis of client request, we also work on Sundays."
        }
      },
      {
        "@type": "Question",
        "name": "Does Tech2Globe work on weekends and holidays?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes. Our data entry operators work different schedules, and many of them prefer weekends. Some holidays, particularly Thanksgiving and Christmas, may require incentivizing operators to achieve full production."
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
      <Breadcrumb parentName="Services" pageName="audio transcription services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Audio Transcription Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>If you work a radio station, make a broadcast, own an entertainment show, or direct meetings, conferences, seminars, lectures, films, and so on., and afterward you should transcribing your audio content. Whether you have a conventional crowd or the one which listens to your programs online, you will get immense benefits from audio transcription services, which can enable you, to convey your content on a more extensive stage or search the transcribed files later.</p>
                <p>At Tech2Globe, we offer audio and video transcription services for business associations, educational institutes, legal foundations, and media outlets. Our skilled staff can change over your interviews, lectures, courses, conference calls, podcasts, movies, and so forth into precise and error-free records that are easy to read.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Audio Transcription Services We Offer</h2>
                <p>Whether you are making a video series, closing business events & seminars, hosting delegates in your meetings, broadcasting news program, or working a radio talk show, our audio transcription experts can transcribe your audio content to message whenever. Some of the audio transcription services that we offer include –</p>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="d-flex shadow rounded p-3 gap-3 mb-3">
                      <Image src="/images/services/service-inner/system-integration.png" width={55} height={55} alt="Conversion	" />
                      <div className="context">
                        <h5>Conversion</h5>
                        <p>Our master audio transcriptionists listen to the sound gave and set up the underlying transcripts.</p>
                      </div>
                    </div>

                    <div className="d-flex shadow rounded p-3 gap-3 mb-3">
                      <Image src="/images/services/service-inner/system-integration.png" width={55} height={55} alt="Proofreading" />
                      <div className="context">
                        <h5>Proofreading</h5>
                        <p>The transcripts are edited by confirmed editors who tune in to whole sound document and right any grammatical mistakes, unclear words, errors, or omissions.</p>
                      </div>
                    </div>

                    <div className="d-flex shadow rounded p-3 gap-3 mb-3">
                      <Image src="/images/services/service-inner/system-integration.png" width={55} height={55} alt="Ready-to-Publish Transcriptions" />
                      <div className="context">
                        <h5>Ready-to-Publish Transcriptions</h5>
                        <p>When mentioned by customers, we get ready ready-to-publish transcriptions of speeches, conferences, lectures, seminars, and so forth. Such transcriptions are altered by our specialists to make the goal increasingly understood and presentable.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p>Other audio/video transcription services We Offer</p>
                <ul className={Style.TwoCol}>
                  <li>Music Transcription Services</li>
                  <li>Voice Transcription Services</li>
                  <li>Dictation Transcription Services</li>
                  <li>WMA Transcription Services</li>
                  <li>MP3 & MP4 Transcription Services</li>
                  <li>Radio Show Transcription Services</li>
                </ul>
                <p>At Tech2Globe, we relieve your security worries by ensuring that our document sharing strategies are GDPR compliant, permit settings for granular permissions, and grant notifications and activity logs to recognize unapproved access.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h3>Audio Transcription Process at Tech2Globe</h3>
                <p>Tech2Globe execute severe quality control quantifies and give transcription to a wide range of audios. Our audio transcriptionists can translate with 100% accuracy. At Tech2Globe, we have built up a one of a kind three-step transcription process to guarantee that you get a superior quality transcript.</p>
                <div className="row pb-4">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="d-flex shadow rounded p-3 gap-3 mb-3 h-100">
                      <Image src="/images/services/service-inner/system-integration.png" width={55} height={55} alt="Verbatim Transcriptions	" />
                      <div className="context">
                        <h5>Verbatim Transcriptions</h5>
                        <p>These transcriptions incorporate each phrase, idiom, or false start made by the speaker. They are basically utilized for explicit legal purposes and by insurance companies.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="d-flex shadow rounded p-3 gap-3 mb-3 h-100">
                      <Image src="/images/services/service-inner/system-integration.png" width={55} height={55} alt="Proofreading" />
                      <div className="context">
                        <h5>Proofreading</h5>
                        <p>The transcripts are edited by confirmed editors who tune in to whole sound document and right any grammatical mistakes, unclear words, errors, or omissions.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="d-flex shadow rounded p-3 gap-3 mb-3 h-100">
                      <Image src="/images/services/service-inner/system-integration.png" width={55} height={55} alt="Final Transcript" />
                      <div className="context">
                        <h5>Final Transcript</h5>
                        <p>The last transcript is again edited by the Quality Supervisor and is sent to you in the desired format.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Audio Transcription Tools We Leverage</h2>
                <p>Tech2Globe utilize the best transcription tools and software to guarantee that you get precise audio transcription services. A portion of the tools we use –
                  <ul>
                    <li>Audiotranskription</li>
                    <li>Dragon</li>
                    <li>Expressscribe</li>
                    <li>Trint</li>
                    <li>Transcribeme</li>
                    <li>Temi</li>
                    <li>Scribie</li>
                  </ul>
                </p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Outsource Audio Transcription Services to Tech2Globe</h2>
                <p>Tech2Globe is the leading provider of audio transcription services in India, offering an assortment of other transcription services to clients around the world. We have effectively executed a few audio transcription projects for our customers, read other <Link href="/transcription-services"></Link>transcription success stories. If you need to realize how to record audio for transcription, read our very much researched article on this subject.</p>
                <p>Outsource audio transcription services to us for your different transcription needs. Simply fill in our inquiry form and our customer service representatives will connect with you in 24 hours.</p>
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