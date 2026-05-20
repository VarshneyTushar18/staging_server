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
  title: "Outsource PDF Data Entry Services | PDF Conversion Services",
  description:
    "Tech2Globe has expertise in giving PDF data entry services at 60% cutting rates, with having huge experience. we offer dependable, financially savvy PDF data entry services.",
  keywords:
    "PDF Data Entry Services, Outsource PDF data entry services, PDF conversion services, PDF to excel data entry services.",
  openGraph: {
    title: "Outsource PDF Data Entry Services |PDF Conversion Services- Tech2globe",
    description:
      "Tech2Globe has expertise in giving PDF data entry services at 60% cutting rates, with having huge experience. we offer dependable, financially savvy PDF data entry services.",
    url: "https://www.tech2globe.com/pdf-data-entry-services",
    type: "website"
  },
  twitter: {
    card: "summary",
    description:
      "Tech2Globe has expertise in giving PDF data entry services at 60% cutting rates, with having huge experience. we offer dependable, financially savvy PDF data entry services."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/pdf-data-entry-services"
  }
};

const pageHeaderData = {
  title: "PDF Data Entry",
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
    question: "Since how long are you in the outsourcing field?",
    answer: `
        Tech2Globe have experience of 10 years in data entry outsourcing field and have successfully accomplished various projects of clients across the world.
      `,
  },
  {
    id: "Two",
    question: "How is Quality Control (QC) done on data?",
    answer: `
        Through validation and online data verification QC is done.
      `,
  },
  {
    id: "Three",
    question: "Which format does you preferred to accept the input data?",
    answer: `
        We receive data from customer mostly via e-mails, hard copy, electronic copy, courier, fax, and web links and through secure FTP server. We are capable to accept any data format you have.
      `,
  },
  {
    id: "Four",
    question: "How can I send my files to Tech2Globe?",
    answer: `
        You can send us the files through secured FTP servers wherein we can provide you login details of the site. You can also send us by web-based applications, as an attachment via email or even by courier or shipping the work files.
      `,
  },
  {
    id: "Five",
    question: "Do you offer a free trial of your services?",
    answer: `
        Yes, Tech2Globe offer free trial run to give you the sample of our high quality services without any obligation to give any further work assignment. We revise the sample work until you are satisfied with our services.
      `,
  }
];

export default function PdfDataEntry() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Since how long are you in the outsourcing field?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tech2Globe have experience of 10 years in data entry outsourcing field and have successfully accomplished various projects of clients across the world."
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
        "name": "Which format does you preferred to accept the input data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We receive data from customer mostly via e-mails, hard copy, electronic copy, courier, fax, and web links and through secure FTP server. We are capable to accept any data format you have."
        }
      },
      {
        "@type": "Question",
        "name": "How can I send my files to Tech2Globe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can send us the files through secured FTP servers wherein we can provide you login details of the site. You can also send us by web-based applications, as an attachment via email or even by courier or shipping the work files."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer a free trial of your services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Tech2Globe offer free trial run to give you the sample of our high quality services without any obligation to give any further work assignment. We revise the sample work until you are satisfied with our services."
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
      <Breadcrumb parentName="Services" pageName="Pdf Data Entry Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Pdf Data Entry Services" imageSrc="/images/services/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Looking and retrieval of data are become repetitive and complex relying upon the idea of PDF files. PDF data entry services become the most coherent and decisive activity. Tech2Globe has expertise in giving PDF data entry services at 60% cutting rates. With having huge experience, we offer dependable, financially savvy, high quality and accurate PDF data entry services to our important customers.</p>

                <p>To make your PDF documents editable, searchable, and in proper valuable ways simply outsource your PDF data entry, PDF form entry projects to us and we allot express typists, computer operators, and gifted report formatting experts to get data from your PDF documents.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>What we offer in PDF Data Entry?</h2>

                <p>At Tech2Globe, we spent significant time in PDF data entry and data capturing from PDF conversion services. From the most recent quite a long while, we have been helping a diverse range of businesses including real estate, eCommerce, producing, healthcare, financial, banking, job portals, and so forth. Following is a list of PDF data entry services, we give:</p>

                <ul className={Style.TwoCol}>
                  <li>Copying / Pasting from PDF documents</li>
                  <li>PDF to MS Excel data entry</li>
                  <li>Data Entry into online databases from PDF files</li>
                  <li>Keying from scanned PDF documents</li>
                  <li>Handwritten PDF data entry</li>
                  <li>Extracting valuable data from companies PDF documents</li>
                  <li>PDF document indexing</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Our Process for PDF Data Entry</h2>
                <hr />
                <p>Our company in India follows a schematic method to perform PDF data entry services and has a strong team of data entry operators that follow the procedure as below:</p>

                <div className={Style.ServiceCard}>
                  <div className="d-flex gap-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/pdf.png" alt="Gather PDF Files" width={50} height={50} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>Gather PDF Files</h5>
                      <p>Our data entry specialists will gather required data in PDF files for your PDF to excel data entry services and PDF to word data section work with specifications of your task.</p>
                    </div>
                  </div>
                </div>

                <div className={Style.ServiceCard}>
                  <div className="d-flex gap-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/data-entry-1.png" alt="PDF Data Entry Process" width={50} height={50} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>PDF Data Entry Process</h5>
                      <p>When we know your PDF data entry requirements, Tech2Globe perform PDF to excel or PDF to word data entry work with high exactness and quality through our best tools of trend setting innovation.</p>
                    </div>
                  </div>
                </div>

                <div className={Style.ServiceCard}>
                  <div className="d-flex gap-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/word.png" alt="" width={50} height={50} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>Word or Excel File Formatting</h5>
                      <p>According to your business necessities, our organization based specialists will perform formatting with different formats for your MS Excel and MS Word documents capably.</p>
                    </div>
                  </div>
                </div>

                <div className={Style.ServiceCard}>
                  <div className="d-flex gap-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/quality.png" alt="" width={50} height={50} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>3 Tier Quality Check Round</h5>
                      <p>To guarantee the best quality services at serious costs, specialists at Tech2Globe do a severe quality check to deliver superior quality outcomes with high accuracy guaranteed.</p>
                    </div>
                  </div>
                </div>

                <div className={Style.ServiceCard}>
                  <div className="d-flex gap-3">
                    <div className={Style.ServiceCardIcon}>
                      <Image src="/images/services/service-inner/verify.png" alt="" width={50} height={50} />
                    </div>
                    <div className={Style.ServiceCardContent}>
                      <h5>Final File Submission</h5>
                      <p>Our customer support team will send you the final file of the word and excel inside the deadlines through our protected FTP server to meet your business requirements confidentially.</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className={Style.ContentDiv}>
                <h5>Our Experts Understand You and Speak Multilingual Languages</h5>
                <p>Tech2globe provide help through well trained, capable and devoted staff that is willing to lend you a hand to cut through the language barrier like German, French, Korean, English, Thai, Hindi, Chinese, etc. so that you can convey your opinions through e-mail and chat support.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h5>Tools We Use for PDF Data Entry</h5>
                <p>Our experts use advanced tools and the best methods to deliver exceptional outcomes that will help your business to achieve the desired goals like ABBYY Fine Reader, ReadIris, Power PDF, ABBYYPDF Transformer, Soda PDF, Presto PageManager, Creaceed Prizmo, Evernote/Microsoft OneNote.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h6 className="pb-3">Outsource PDF data entry services and ensure:</h6>

                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="p-3 rounded border  shadow-sm d-flex align-items-center justify-content-center flex-column text-center h-100">
                      <Image src="/images/services/service-inner/pricing.png" alt="Reasonable pricing scheme which suits your budget" width={55} height={55} />
                      <h6 className="mb-0">Reasonable pricing scheme which suits your budget</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="p-3 rounded border  shadow-sm d-flex align-items-center justify-content-center flex-column text-center h-100">
                      <Image src="/images/services/service-inner/24-hours-black.png" alt="24/7 client support services" width={55} height={55} />
                      <h6 className="mb-0">24/7 client support services</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="p-3 rounded border  shadow-sm d-flex align-items-center justify-content-center flex-column text-center h-100">
                      <Image src="/images/services/service-inner/quality.png" alt="High precision and quality norm" width={55} height={55} />
                      <h6 className="mb-0">High precision and quality norm</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="p-3 rounded border  shadow-sm d-flex align-items-center justify-content-center flex-column text-center h-100">
                      <Image src="/images/services/service-inner/security-black.png" alt="Assured security and confidentially of your exact data" width={55} height={55} />
                      <h6 className="mb-0">Assured security and confidentially of your exact data</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="p-3 rounded border  shadow-sm d-flex align-items-center justify-content-center flex-column text-center h-100">
                      <Image src="/images/services/service-inner/workforces.png" alt="Skilled workforce" width={55} height={55} />
                      <h6 className="mb-0">Skilled workforce</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="p-3 rounded border  shadow-sm d-flex align-items-center justify-content-center flex-column text-center h-100">
                      <Image src="/images/services/service-inner/faster.png" alt="Faster TAT" width={55} height={55} />
                      <h6 className="mb-0">Faster TAT</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="p-3 rounded border  shadow-sm d-flex align-items-center justify-content-center flex-column text-center h-100">
                      <Image src="/images/services/service-inner/removing.png" alt="Remove management headaches" width={55} height={55} />
                      <h6 className="mb-0">Remove management headaches</h6>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="p-3 rounded border  shadow-sm d-flex align-items-center justify-content-center flex-column text-center h-100">
                      <Image src="/images/services/service-inner/hundred-percent.png" alt="100% consumer loyalty" width={55} height={55} />
                      <h6 className="mb-0">100% consumer loyalty</h6>
                    </div>
                  </div>
                </div>

                <p>Our effective group of trained PDF data entry experts can deal with little or immense volumes of work and convey it to before your schedule. Pick Tech2Globe as your PDF data entry services partner and experience bother free outsourcing.</p>
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