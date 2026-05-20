import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import FaqSection from "@/app/components/services/faqs/faqs";

export const metadata = {
  title: "Outsource Offline Data Entry Services | Offline Data Entry Company",
  description:
    "Tech2Globe offers the widest range of offline data entry services to businesses in all major languages - French, German & many more. Get free consultation today.",
  keywords:
    "Offline data entry services, Offline data entry company, Outsource offline data entry services.",
  openGraph: {
    title: "Outsource Offline Data Entry Services | Offline Data Entry Company",
    description:
      "Tech2Globe offers the widest range of offline data entry services to businesses in all major languages - French, German & many more. Get free consultation today.",
    url: "https://www.tech2globe.com/offline-data-entry-services",
    type: "website"
  },
  twitter: {
    card: "summary",
    description:
      "Tech2Globe offers the widest range of offline data entry services to businesses in all major languages - French, German & many more. Get free consultation today."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/offline-data-entry-services"
  }
};

const pageHeaderData = {
  title: "Offline Data Entry Services",
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
    question: "Do you sign non-disclosure agreements and SLAs?",
    answer: `
        Yes. We sign non-disclosure agreements and service level agreements for every customer who outsources to Tech2Globe.
      `,
  },
  {
    id: "Two",
    question: "Which sectors do you serve?",
    answer: `
        Now that you know about our different kind of services, you will also understand that these services are implemented for every sector that is willing to grow their business. We have worked with financial institutions, banks, healthcare, educational sectors, hospitality sectors and other businesses that are willing to enjoy different level of services.
      `,
  },
  {
    id: "Three",
    question: "How about security at Tech2Globe?",
    answer: `
        If security and privacy issues are stopping you from outsourcing, you can go ahead and start outsourcing to Tech2Globe as we ensure security, privacy & confidentiality at every level of the outsourcing process.
      `,
  },
  {
    id: "Four",
    question: "How can I be sure of high quality?",
    answer: `
        We have designed the workflow along with highly qualified QA professionals whose aim will be to deliver the premium quality services. You can also test and verify the quality of work throughout the course of the project.
      `,
  },
  {
    id: "Five",
    question: "I want to outsource to Tech2Globe. What should I do?",
    answer: `
        Just fill in our contact form, with the services that you need and details regarding your project and we will contact you shortly to take the outsourcing relationship to the next level.
      `,
  }
];

export default function OfflineDataEntry() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you sign non-disclosure agreements and SLAs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes. We sign non-disclosure agreements and service level agreements for every customer who outsources to Tech2Globe."
        }
      },
      {
        "@type": "Question",
        "name": "Which sectors do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Now that you know about our different kind of services, you will also understand that these services are implemented for every sector that is willing to grow their business. We have worked with financial institutions, banks, healthcare, educational sectors, hospitality sectors and other businesses that are willing to enjoy different level of services."
        }
      },
      {
        "@type": "Question",
        "name": "How about security at Tech2Globe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "If security and privacy issues are stopping you from outsourcing, you can go ahead and start outsourcing to Tech2Globe as we ensure security, privacy & confidentiality at every level of the outsourcing process."
        }
      },
      {
        "@type": "Question",
        "name": "How can I be sure of high quality?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "We have designed the workflow along with highly qualified QA professionals whose aim will be to deliver the premium quality services. You can also test and verify the quality of work throughout the course of the project."
        }
      },
      {
        "@type": "Question",
        "name": "I want to outsource to Tech2Globe. What should I do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Just fill in our contact form, with the services that you need and details regarding your project and we will contact you shortly to take the outsourcing relationship to the next level."
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
      <Breadcrumb parentName="Services" pageName="Offline Data Entry Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Offline Data Entry Services" imageSrc="/images/services/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>The advanced business landscape is commanded by digital technology, to such an extent that each organization, be it little or enormous depends intensely on digitized data entry. However, a lot of business-basic information is as yet being produced in non-digital form. You need to fall back by offline data entry services to process data from such sources.</p>
                <p>Outsource offline data entry services to Tech2Globe which offer simple access to information in electronic form at moderate costs. Tech2Globe is a trusted and reliable specialist organization situated in India, offering a wide scope of offline data input services to customers over the globe. Our organization offers the most serious costs to lead you through the merciless competitive world. Profit the advantages of offline data entry services at Tech2Globe and pick us your strong redistributing partner!</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">What we offer in Offline Data Entry?</h2>

                <p>Tech2Globe has experience with taking care of huge measures of offline data entry projects. We guarantee you that our offline data entry team will do every one of your data entry tasks according to guidelines and convey top notch results.</p>

                <p>Our <a href="online-data-entry-services" className="text-decoration-underline text-muted">data entry experts</a> will remove information from different online and disconnected sources, for example, print lists, hand-written documents, and so forth, and key in the information into MS Excel, MS Word, CSV records according to the necessity.</p>

                <ul>
                  <li>Offline data entry from handwritten documents</li>
                  <li>Offline data collection</li>
                  <li>Offline form filling</li>
                  <li>Offline database entry</li>
                  <li>Offline Invoice, bills data entry</li>
                </ul>

                <p>Utilizing an expert offline data entry company like Tech2Globe helps spare overheads and gives you an opportunity to concentrate on your increasingly basic business functions. We guarantee you that our offline data entry, Tech2Globe will complete all your offline data entry tasks according to directions and convey excellent outcomes.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Our Process for Offline Data Entry</h2>
                <hr/>
                <p>The procedure we follow in performing offline data input work is as per the following:</p>

                <div className={Style.ServiceCard}>
                  <div className="d-flex gap-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/input.png" alt="Get Offline Data" width={50} height={50} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>Get Offline Data</h5>
                      <p>Tech2Globe get data entry requirements from your staff and comprehend your requirement for offline data entry services to design a vital procedure.</p>
                    </div>
                  </div>
                </div>

                <div className={Style.ServiceCard}>
                  <div className="d-flex gap-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/data-entry-1.png" alt="" width={50} height={50} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>Perform Data Entry</h5>
                      <p>Our expert data entry operators will perform data entry with high devotion and precise outcomes alongside first class quality.</p>
                    </div>
                  </div>
                </div>

                <div className={Style.ServiceCard}>
                  <div className="d-flex gap-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/quality.png" alt="Quality Check Process" width={50} height={50} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>Quality Check Process</h5>
                      <p>Tech2Globe performs quality check rounds to guarantee your database is error free and profoundly dependable for future references.</p>
                    </div>
                  </div>
                </div>

                <div className={Style.ServiceCard}>
                  <div className="d-flex gap-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/customer-support.png" alt="" width={50} height={50} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>Expert Analysis</h5>
                      <p>After all, the quality check performance and important corrections done, our specialists have a random check the last record and get your approval for the same</p>
                    </div>
                  </div>
                </div>

                <div className={Style.ServiceCard}>
                  <div className="d-flex gap-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/verify.png" alt="" width={50} height={50} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>Submit Final Work</h5>
                      <p>We send you the last file after finishing of data entry work and QC with the assistance of our protected FTP servers to your organization</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className={Style.ContentDiv}>
                <div className="row mb-5">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="card shadow-sm p-3 mb-0 h-100 border border-danger d-flex justify-content-cente">
                      <h5 className="mb-0">Complete Suite of Our Offline Data Entry Services</h5>
                      <hr/>
                      <p className="mb-0">Tech2Globe offers the widest range of offline data entry services to businesses of all sizes. Apart from English, we provide offline data entry services in the entire major languages including, Spanish, German, French, and many more. All our services are ISO certified for quality and data security.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="card shadow-sm p-3 mb-0 h-100 border border-danger d-flex justify-content-cente">
                      <h5 className="mb-0">Tools we leverage in Offline Data Entry Services</h5>
                      <hr/>
                      <p className="mb-0">We have cutting-edge tools and equipment used for data entry services to get you through modest edge like Adobe Acrobat reader DC, Abbyy FineReader, Tesseract, OmniPage, Readiris, Docufree, Prizmo, and Soda PDF Premium.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Why Outsource Offline Data Entry Jobs to Tech2Globe?</h2>

                <p>There are many offline data entry companies in India. Yet, what makes Tech2Globe different? Our &apos;end-client end-reason&apos; approach is the thing that makes our offline data entry services unique in relation to other specialist organizations.</p>
                <p>Also, we don&apos;t move toward data entry as a career that anyone can do. We utilize a group of experienced individuals to deal with your offline data entry jobs. Likewise, our customized offline data entry services will ensure that your targets and objectives are met.</p>
                <p>Connect with our customer support group to know insights concerning our outsourcing offline data entry services at savvy data entry services, or request a quote today!</p>
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