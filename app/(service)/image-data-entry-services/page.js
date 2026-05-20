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
  title:
    "Outsource Image Data Entry Services | Scanned Image Data Entry Service",

  description:
    "Tech2Globe can help when you need high-quality image data entry services. Our prepared image data entry specialists can deal with any volume of images in any organization. ",

  keywords: [
    "Outsource image data entry services",
    "Image data entry services",
    "Scanned image data entry.",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/image-data-entry-services",
  },

  openGraph: {
    title:
      "Outsource Image Data Entry Services | Scanned Image Data Entry Service",
    description:
      "Tech2Globe can help when you need high-quality image data entry services. Our prepared image data entry specialists can deal with any volume of images in any organization.",
    url: "https://www.tech2globe.com/image-data-entry-services",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary",
    title:
      "Outsource Image Data Entry Services | Scanned Image Data Entry Service",
    description:
      "Tech2Globe can help when you need high-quality image data entry services. Our prepared image data entry specialists can deal with any volume of images in any organization.",
  },
};

const pageHeaderData = {
  title: "Image Data Entry Services",
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
    question: "Can I cut down on my operational costs by outsourcing to Tech2Globe?",
    answer: `
        Yes. By teaming with us, you can reduce your current operating expenses by a whopping 40–65% without compromising on quality or timelines. In fact, you will soon see a marked increase in your ROI, as our services are accurate, are of impeccable quality, and are always delivered ahead of schedule.
      `,
  },
  {
    id: "Two",
    question: "How will communication take place between us?",
    answer: `
        Tech2Globe offers the larger and most cost-efficient answers for online and offline data entry. We execute a heavy diversity of online data entry services in numerous languages - English, German, Dutch, French, Spanish, Italian and many more that’s why we are called as bilingual operators.
      `,
  },
  {
    id: "Three",
    question: "Are your employees experienced, certified and qualified?",
    answer: `
        At Tech2Globe, we firmly believe in delivering quality services, so we hire only the best people. All our employees hold bachelors or master's degrees from reputed institutions, in business, engineering, computer science, commerce or the arts, and have a minimum of 2 to 5 years of experience. Our employees constantly upgrade their skills and knowledge through seminars and meetings.
      `,
  },
  {
    id: "Four",
    question: "Does Tech2Globe possess long-term viability?",
    answer: `
        Yes, we consider our long-term viability to be excellent. You need not have any reservations about teaming up with us, as we are completely debt-free. To ensure our viability, we always make it a point to sign outsourcing contracts or agreements.
      `,
  },
  {
    id: "Five",
    question: "What makes Tech2Globe unique?",
    answer: `
        Our 10 years of experience in outsourcing, combined with our low operating cost, flexibility, expertise, reliability, and integrity make us the best in the offshore market.
      `,
  },
  {
    id: "Six",
    question: "How can I benefit by working with Tech2Globe?",
    answer: `
        At Tech2Globe, we can assure you that your project will be completed on schedule, within budget and in accordance with international quality standards.
      `,
  },
];

export default function ImageDataEntry() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I cut down on my operational costs by outsourcing to Tech2Globe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. By teaming with us, you can reduce your current operating expenses by a whopping 40–65% without compromising on quality or timelines. In fact, you will soon see a marked increase in your ROI, as our services are accurate, are of impeccable quality, and are always delivered ahead of schedule."
        }
      },
      {
        "@type": "Question",
        "name": "How will communication take place between us?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tech2Globe offers the larger and most cost-efficient answers for online and offline data entry. We execute a heavy diversity of online data entry services in numerous languages - English, German, Dutch, French, Spanish, Italian and many more that’s why we are called as bilingual operators."
        }
      },
      {
        "@type": "Question",
        "name": "Are your employees experienced, certified and qualified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At Tech2Globe, we firmly believe in delivering quality services, so we hire only the best people. All our employees hold bachelors or master’s degrees from reputed institutions, in business, engineering, computer science, commerce or the arts, and have a minimum of 2 to 5 years of experience. Our employees constantly upgrade their skills and knowledge through seminars and meetings."
        }
      },
      {
        "@type": "Question",
        "name": "Does Tech2Globe possess long-term viability?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we consider our long-term viability to be excellent. You need not have any reservations about teaming up with us, as we are completely debt-free. To ensure our viability, we always make it a point to sign outsourcing contracts or agreements."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Tech2Globe unique?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our 10 years of experience in outsourcing, combined with our low operating cost, flexibility, expertise, reliability, and integrity make us the best in the offshore market."
        }
      },
      {
        "@type": "Question",
        "name": "How can I benefit by working with Tech2Globe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At Tech2Globe, we can assure you that your project will be completed on schedule, within budget and in accordance with international quality standards."
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
      <Breadcrumb parentName="Services" pageName="Image Data Entry Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Image Data Entry Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Businesses, regardless of their size, need to deal with a significant volume of image data regularly. If you need to sweep and convert a huge number of images into different formats, you need to hire a group of image data entry experts. Then you need to provide the group with appropriate software and hardware to process the information. Add to this the cost of employee benefits and foundation and the proposition ends up being a costly one. Tech2Globe diminishes this cost by up to 60% and delivers bespoke image data entry services with fast turnaround time.</p>

                <p>At Tech2Globe, we offer image data entry services to worldwide customers. We skillfully catch information from scanned images and key into any format of choice, in the most brief time periods. If you are searching for quality, cost-effective image data entry services, choose Tech2Globe.</p>

                <p>A leading provider of image data entry services we can help you with image capturing, image storage, image keying, and image retrieval services. Our prepared image data entry specialists can deal with any volume of images in any organization, including RTF, TIFF, PDF, GIF, and JPEG.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="mt-4">What we offer in Image Data Entry?</h2>
                <p>The image data entry services at Tech2Globe are finished by a team of experienced operators. The in-house developed software is utilized for the data entry which matches yields of two different operators in this manner guaranteeing close to error free data. Post data entry, a committed group of value checkers will check the information utilizing ISO 9001: 2008 certified processes.</p>
                <p><strong>We offer the accompanying image data entry services:</strong></p>
                <ul>
                  <li>Scanned image data entry services</li>
                  <li>Image entry into a spreadsheet/database</li>
                  <li>Catalog information entry</li>
                  <li>Image Sorting</li>
                  <li>Image Keying and Indexing</li>
                  <li>Image Storage and Retrieval</li>
                  <li>Book-entry</li>
                  <li>Handwritten/printed card entry</li>
                  <li>Legal document data entry</li>
                </ul>
                <p>As your outsourcing accomplice, we are focused on helping you understand the vision you have for your business.</p>
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
                <h2 className="mt-4">Our Process for Image Data Entry</h2>
                <hr/>
                <p>At Tech2Globe, our online data entry services are accessible at the most reasonable expenses. Digitized images are then sent to the clients as an email attachment or transferred by means of File Transfer Protocol (FTP) or Dropbox. Tech2Globe follow a stringent quality process that incorporates the accompanying steps –</p>
                <div className="row ">
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="card text-center  shadow rounded p-3 gap-3 mb-3 h-100">
                      <div className="text-center">
                        <Image src="/images/services/service-inner/user.png" width={55} height={55} alt="Customer Discussion" />
                      </div>
                      <div className="context">
                        <h5>Customer Discussion</h5>
                        <p>Tech2Globe business development manager gets a brief from the customer on the project requirement.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="card text-center  shadow rounded p-3 gap-3 mb-3 h-100">
                      <div className="text-center">
                        <Image src="/images/services/service-inner/info-1.png" width={55} height={55} alt="Info" />
                      </div>
                      <div className="context">
                        <h5>Info</h5>
                        <p>Customer moves samples (assuming any) to Tech2Globe, in a JPEG design by means of Dropbox or FTP (File Transfer Protocol)</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="card text-center  shadow rounded p-3 gap-3 mb-3 h-100">
                      <div className="text-center">
                        <Image src="/images/services/service-inner/data-entry-1.png" width={55} height={55} alt="Image Data Entry" />
                      </div>
                      <div className="context">
                        <h5>Image Data Entry</h5>
                        <p>Tech2Globe data entry specialists perform image data entry services utilizing customized software.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="card text-center  shadow rounded p-3 gap-3 mb-3 h-100">
                      <div className="text-center">
                        <Image src="/images/services/service-inner/output.png" width={55} height={55} alt="Final Output" />
                      </div>
                      <div className="context">
                        <h5>Final Output</h5>
                        <p>Final output sent to the customer through FTP or Dropbox.</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-5">Tech2Globe can help when you need high-quality image data entry services - activities of all sizes including 10,000+ pages every day, catching data from images in any format, storing images, keying data, and recovering images.</p>
                  <p>Contact Tech2Globe group today to talk about our customized and financially savvy image data entry services.</p>
                </div>
              </div>

               <div className={Style.ContentDiv}>
                <h3>Tools We Use in Image Data Entry</h3>
                <p>Our image data entry service additionally incorporates image resizing services which intend to resize the images by using the latest tools like Nuance Omnipage, Power PDF, Soda PDF and Presto PageManager to coordinate your undertaking prerequisites. We can deal with enormous volumes of advanced images to process.</p>
              </div>


              <div className={Style.ContentDiv}>
                <h3>Advantages of Tech2Globe Image Data Entry Services</h3>
                <p>We are a one-stop outsourcing provider offering advertising/promotional services, document conversions, market research surveys, illustration services, and image improvement also. Here is a concise overview of the advantages offered by FWS -</p>
                
                <div className="d-flex gap-2">
                  <div className="icon">
                    <img src="/images/services/service-inner/faster.png" alt="Faster Turnarounds" width="55" height="55" />
                  </div>
                  <div className="contentdiv">
                    <h5>Faster Turnarounds</h5>
                    <p className="mb-0">With Tech2Globe, you can get your image data entry work finished in quicker turnaround times without settling on quality and precision.</p>
                  </div>
                </div>
                 <hr/>

                 <div className="d-flex gap-2">
                  <div className="icon">
                    <img src="/images/services/service-inner/security-black.png" alt="Security" width="55" height="55" />
                  </div>
                  <div className="contentdiv">
                    <h5>Security</h5>
                    <p className="mb-0">Outsource image data entry services to Tech2Globe and remain guaranteed about the confidentiality and security of your significant information with Non-Disclosure Agreements (NDAs), File Transfer Protocols (FTP), and more.</p>
                  </div>
                </div>
                 <hr/>

                 <div className="d-flex gap-2">
                  <div className="icon">
                    <img src="/images/services/service-inner/pricing.png" alt="" width="55" height="55" />
                  </div>
                  <div className="contentdiv">
                    <h5>Reasonable costing</h5>
                    <p className="mb-0">We offer top notch cost effective image data entry services and offer Full-Time Equivalents (FTE), hourly rates, and customized pricing.</p>
                  </div>
                </div>
                 <hr/>

                 <div className="d-flex gap-2">
                  <div className="icon">
                    <img src="/images/services/service-inner/quality.png" alt="Quality Standards" width="55" height="55" />
                  </div>
                  <div className="contentdiv">
                    <h5>Quality Standards</h5>
                    <p className="mb-0">At Tech2Globe we stick to an exacting quality assurance method that incorporates - batch file quality review, image quality review, and quality control reports.</p>
                  </div>
                </div>
                 <hr/>

                 <div className="d-flex gap-2">
                  <div className="icon">
                    <img src="/images/services/service-inner/customer-support.png" alt="" width="55" height="55" />
                  </div>
                  <div className="contentdiv">
                    <h5>Customer Support</h5>
                    <p>At Tech2Globe, we give customer support services on a 24/7 premise.</p>
                  </div>
                </div>
                 <hr/>

                 <div className="d-flex gap-2">
                  <div className="icon">
                    <img src="/images/services/service-inner/workforces.png" alt="Skilled Workforces" width="55" height="55" />
                  </div>
                  <div className="contentdiv">
                    <h5>Skilled Workforces</h5>
                    <p>We have capable and talented personnel data management experts, with demonstrated work involvement with image entry from scanned images services.</p>
                  </div>
                </div>
                 <hr/>
              
                
               <p>Tech2Globe offers reasonable image data entry services. Partner with us today and experience bother free outsourcing. Call or email Tech2Globe and get a free statement inside one business day.</p>
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