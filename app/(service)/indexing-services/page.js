import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaChartBar, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaLightbulb, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title:
    "Outsource Indexing Services | Document Indexing Services | Tech2Globe",
  description:
    "Tech2Globe is a trusted Outsourcing Company in India & our experts has delivered the best in class quality results for Document Indexing Services. Get in touch with us today.",
  keywords: [
    "Outsource indexing services",
    "data indexing services",
    "document indexing services",
    "Book indexing services",
    "professional indexing services"
  ],
  openGraph: {
    title:
      "Outsource Indexing Services | Document Indexing Services | Tech2Globe",
    description:
      "Tech2Globe is a trusted Outsourcing Company in India & our experts has delivered the best in class quality results for Document Indexing Services. Get in touch with us today.",
    url: "https://www.tech2globe.com/indexing-services",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Outsource Indexing Services | Document Indexing Services | Tech2Globe",
    description:
      "Tech2Globe is a trusted Outsourcing Company in India & our experts has delivered the best in class quality results for Document Indexing Services. Get in touch with us today."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/indexing-services"
  }
};

const pageHeaderData = {
  title: "Indexing Services",
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
  { heading: "Useful Links", links: usefullinks },
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
        Tech2Globe have experience of 10 years in archiving and indexing outsourcing services and have successfully talented various projects of clients across the world. We have wide experience of working on different types of data entry projects.
      `,
  },
  {
    id: "Two",
    question: " What is your Turnaround Time (TAT)?",
    answer: `
        The skilled and proficient team of data entry operators at Tech2Globe is known for delivering projects in fast turnaround time. We are providing the TAT based upon the volume of work, complexity of work and the project deadline.
      `,
  },
  {
    id: "Three",
    question: "Are your services cost-effective?",
    answer: `
        Yes. When you outsource to Tech2Globe you be assured of saving more than 40-50% of your operating costs. Although we provide our customers with cost-competitive services, we do not compromise on quality. Outsource now and get access to quality solutions while cutting down costs.
      `,
  },
  {
    id: "Four",
    question: "Do you have the good infrastructure and technology to support business processes?",
    answer: `
        Yes. We use the very best and the latest in software, technology and infrastructure. By outsourcing you can save on investing on expensive software and technology as we use the very best in both. All our office have best-of-breed infrastructure.
      `,
  },
  {
    id: "Five",
    question: "How do I sign-off a contract or work order?",
    answer: `
        You will have to fill in details in a given format and fax us a signed copy. Apart from this, you can also send us your work order as an email attachment.
      `,
  },
];

export default function IndexingServices() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        "name": "Since how long are you in the outsourcing field?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tech2Globe have experience of 10 years in archiving and indexing outsourcing services and have successfully talented various projects of clients across the world. We have wide experience of working on different types of data entry projects."
        }
      },
      {
        "@type": "Question",
        "name": "What is your Turnaround Time (TAT)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The skilled and proficient team of data entry operators at Tech2Globe is known for delivering projects in fast turnaround time. We are providing the TAT based upon the volume of work, complexity of work and the project deadline."
        }
      },
      {
        "@type": "Question",
        "name": "Are your services cost-effective?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. When you outsource to Tech2Globe you be assured of saving more than 40-50% of your operating costs. Although we provide our customers with cost-competitive services, we do not compromise on quality. Outsource now and get access to quality solutions while cutting down costs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you have the good infrastructure and technology to support business processes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We use the very best and the latest in software, technology and infrastructure. By outsourcing you can save on investing on expensive software and technology as we use the very best in both. All our office have best-of-breed infrastructure."
        }
      },
      {
        "@type": "Question",
        "name": "How do I sign-off a contract or work order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You will have to fill in details in a given format and fax us a signed copy. Apart from this, you can also send us your work order as an email attachment."
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
      <Breadcrumb parentName="Services" pageName="Indexing Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Indexing Services" />
              <div className={Style.ContentDiv}>
                <p>Indexing services are basic to keep the data of massive volume in helpful and simple to access format with the particular index accommodated every component independently. In India, there is an enormous ability pool of <Link href="/online-data-entry-services" className="text-decoration-underline fw-bold">data entry experts</Link> and professionals. We have a team of skilled and proficient data entry experts and professionals for doing your indexing or documented services at reasonable costs. Outsource indexing services to our particular group in Tech2Globe will change over your paper reports into a brilliant database where the recovery of your data gets simpler anytime and you can gain admittance to all of your documents from anyplace.</p>

                <p>We examine the data from your business documents and classes equivalent to your ideal labels to make the data accessible and simple recovery of past reports data. In the serious time, we will give you the center ability through our data indexing services by our talented specialists. Outsourcing proficient indexing services to Tech2Globe will save money on your budget and gives you best quality outcomes inside the base turnaround.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3 pb-3">Indexing Services we perform</h2>
                <ul className={Style.ListColTwo}>
                  <li>Scanning of hand written documents</li>
                  <li>Wide Format scanning and indexing</li>
                  <li>Microfilm and microfiche scanning and indexing</li>
                  <li>Aperture Card Scanning</li>
                  <li>Medical Record scanning and indexing</li>
                  <li>Film scanning and indexing</li>
                  <li>Photo Scanning</li>
                  <li>Technical and instruction manuals scanning and indexing</li>
                  <li>Legal case files scanning and indexing</li>
                  <li>Catalog scanning and indexing</li>
                  <li>Parts lists scanning and indexing</li>
                </ul>
                <p>At the start of a project we will assign you a project manager who will be in constant touch with you and thoroughly understand you requirements and expectations. We will provide you the finished project on a DVD or CD-ROM or you will have the option of downloading it from a secure FTP server.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Process</h2>
                <ul>
                  <li>Clients send in document indexing requirements</li>
                  <li>Documents analyzed, classified, and categorized with keywords</li>
                  <li>We produce a sample indexing service, and offer a price estimate</li>
                  <li>Project planning and delivery integrated into our process</li>
                  <li>Output given in web-based updates, or per client specifications</li>
                </ul>
                <p>Tech2Globe work with a range of indexing inputs, including scanned documents, handwritten data, and online resources. We will digitize and archive your data in such a way that you will be able to trace them from the database, with an ease. The document indexing services can be offered in the following digital format such as:</p>
                <ul>
                  <li>PDF</li>
                  <li>GIF</li>
                  <li>JPEG</li>
                  <li>TIFF</li>
                  <li>PNG</li>
                  <li>EPS</li>
                </ul>
                <p>We also offer the output in the format prescribed by the clients. Tech2Globe assure you an output of 99.95% accuracy and it will be delivered within the stipulated time.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Tools</h2>
                <p>Book indexing services needs to be able to search through unstructured and structured data, running many queries at the same time, if possible in real-time.</p>
                <ul>
                  <li>Lucene</li>
                  <li>Apache Solr</li>
                  <li>Elasticsearch</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Discuss Your Project with Us</h2>
                <p>Tech2Globe is a trusted outsourcing company in India and our experts has delivered the best in class quality results for document indexing services. Get in touch with us and feel free to contact us any time to discuss regarding your professional indexing services necessities. We will get you a free trial run to check the quality of our inexpensive indexing services.</p>
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