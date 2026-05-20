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
  title: "Ecommerce Product Research Services | Market Research - Tech2Globe",
  description:
    "Tech2Globe specialists use new product launch research to deliver end-to-end product research services, from product launch analysis to product packaging insights. Contact us now.",
  keywords:
    "Product research services, Ecommerce product research services, Market research services",
  alternates: {
    canonical: "https://www.tech2globe.com/product-research-services",
  },

  openGraph: {
    title: "Ecommerce Product Research Services | Market Research - Tech2Globe",
    description:
      "Tech2Globe specialists use new product launch research to deliver end-to-end product research services, from product launch analysis to product packaging insights. Contact us now.",
    url: "https://www.tech2globe.com/product-research-services",
    siteName: "Tech2Globe",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Product Research Services | Market Research - Tech2Globe",
    description:
      "Tech2Globe specialists use new product launch research to deliver end-to-end product research services, from product launch analysis to product packaging insights. Contact us now."
  }
};

const pageHeaderData = {
  title: "Product Research Services",
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
    question: "How long are you serving in the outsourcing industry?",
    answer: `
        Tech2Globe is serving the outsourcing industry with data entry services from last 10 years and had accomplished many projects of data entry work of global clients. Our team of data entry operators is highly experienced in data entry projects and work with full dedication to achieve the targets.
      `,
  },
  {
    id: "Two",
    question: "What is OCR software which you use?",
    answer: `
        OCR, or optical character recognition, is software that finds and identifies all characters (numbers, letters, punctuation, etc.) in an image, pdf or other document like Adobe Acrobat Pro DC, ABBYY Fine Reader, ReadIris, Soda PDF, Presto PageManager and Creaceed Prizmo.
      `,
  },
  {
    id: "Three",
    question: "Can I cut down on my operational costs by outsourcing to Tech2Globe?",
    answer: `
        Yes. By teaming with us, you can reduce your current operating expenses by a whopping 40–65% without compromising on quality or timelines. In fact, you will soon see a marked increase in your ROI, as our services are accurate, are of impeccable quality, and are always delivered ahead of schedule.
      `,
  },
  {
    id: "Four",
    question: "How can I be assured of high quality in my project?",
    answer: `
        Tech2Globe have a specially designed workflow along with highly qualified QA professionals whose aim is to deliver only premium quality services. You can test and verify the quality of our work throughout the course of the project.
      `,
  },
  {
    id: "Five",
    question: "Can we get a trial of your outsourcing services?",
    answer: `
        Yes, Tech2Globe provides a free trial run for outsourcing services such as data entry, transcription, data processing, web research, etc. to showcase the quality driven service results offered by our experts. You can get the free trial today!
      `,
  },
];

export default function ProductResearch() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long are you serving in the outsourcing industry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tech2Globe has been serving the outsourcing industry for over 10 years, successfully completing numerous global data entry projects. Our experienced team works with dedication to meet all project targets."
        }
      },
      {
        "@type": "Question",
        "name": "What is the OCR software you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OCR (Optical Character Recognition) identifies characters in images, PDFs, and documents. We use advanced tools such as Adobe Acrobat Pro DC, ABBYY FineReader, ReadIris, Soda PDF, Presto PageManager, and Creaceed Prizmo."
        }
      },
      {
        "@type": "Question",
        "name": "Can I cut down my operational costs by outsourcing to Tech2Globe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can reduce operational expenses by 40–65% without compromising on quality or timelines. Our accurate and high-quality services boost your ROI significantly."
        }
      },
      {
        "@type": "Question",
        "name": "How can I be assured of high quality in my project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tech2Globe follows a structured workflow and has highly qualified QA professionals who ensure premium quality services. You can monitor and verify quality throughout the project."
        }
      },
      {
        "@type": "Question",
        "name": "Can we get a trial of your outsourcing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Tech2Globe provides a free trial run for services such as data entry, transcription, data processing, and web research, allowing you to evaluate quality firsthand."
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
      <Breadcrumb parentName="Services" pageName="Product Research Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Product Research Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Significant level of innovation and in-depth knowledge on what is being offered by contenders are goals for organizations to succeed. To fulfill this need, Tech2Globe gives a full set-up of product and research services to worldwide customers with the point of helping them increase a serious edge in the market.</p>
                <p>From understanding the needs and requirements of the objective market (directing product research services to keeping a tab on the launch of new products/ services by contenders) our product research and service research services contain them all. Our specialists study the opposition just as the new product or service to discover how it will function in the market.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Product Research Services</h2>
                <p>We make productized reports that feature patterns and patterns saw among clients, product design research and service procedure, proposals to improve bundling and other aspects, just as client incentive. Our specialists use new product launch research to give end-to-end product and research services, directly from product launch research through to product packaging and product testing.</p>
                <ul className={Style.TwoCol}>
                  <li>New product launch research</li>
                  <li>Product design research</li>
                  <li>Target market research</li>
                  <li>Product concept testing</li>
                  <li>Product innovation services</li>
                  <li>Product packaging research</li>
                  <li>Product testing</li>
                </ul>
                <p>As part of services specific research which is more subjective in nature, we brainstorm for new service ideas, assess competitor’s strategy, determine customer’s expectations and help you customize the service spectrum as per the target audience.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Our Market Research Process</h2>
                <p>Tech2Globe customized research process is structured by our clients&apos; objectives, setting up research parameters before starting information assortment to guarantee our group assembles just appropriate information, keeping costs lined up with your business&apos;s budget.</p>
                <p>Furthermore, we offer senior analysts and sector specialists for product design research and association any place information requires further understanding, and quick ends. Get basic data, target experiences in regards to universal market patterns and leads, contender examination, and substantially more, and with Tech2Globe exact market research services.</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h2>Our Market Research Process</h2>
                    <ul className={Style.TwoCol}>
                      <li>Anova/Ancova</li>
                      <li>Association Analysis</li>
                      <li>Canonical Correlation</li>
                      <li>Chaid</li>
                      <li>Cluster Analysis</li>
                      <li>Conjoint Analysis</li>
                      <li>Cross-Tabulation</li>
                      <li>Discriminant Analysis</li>
                      <li>Factor Analysis</li>
                      <li>Linear Regression</li>
                      <li>Manova/Mancova</li>
                      <li>Markov Chains</li>
                      <li>Multidimensional Scaling</li>
                      <li>Neural Nets</li>
                      <li>Non-linear Regression</li>
                      <li>SEM</li>
                      <li>Time Series Analysis</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h2>Contact Tech2Globe Today</h2>
                    <p>By offering cost savings as high as 40-45%, world class quality deliverables, strict adherence to deadlines, and access to high-quality research and analytical personnel, we guarantee that you will be completely satisfied with your services.</p>
                    <p>Connect with Tech2Globe dependable research team for professional, cost-effective international product research and development that adhere to your business&apos;s unique specifications. Our courteous staff is ready to assist you today!</p>
                  </div>
                </div>
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
