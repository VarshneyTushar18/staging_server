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
  title:
    "Financial data entry service provider",

  description:
    "We at Tech2Globe provide valid financial data entry services to business worldwide. Our financial data entry service help banks/institutes and accounting professionals.",

  keywords: [
    "finance data entry",
    "financial data entry service provider",
    "financial data entry services",
    "financial data entry outsourcing",
    "data entry services finance",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/financial-data-entry-services",
  },

  openGraph: {
    title:
      "Financial data entry service provider",
    description:
      "We at Tech2Globe provide valid financial data entry services to business worldwide. Our financial data entry service help banks/institutes and accounting professionals.",
    url: "https://www.tech2globe.com/financial-data-entry-services",
    type: "website",
  },

  twitter: {
    card: "summary",
    title:
      "Financial data entry service provider",
    description:
      "We at Tech2Globe provide valid financial data entry services to business worldwide. Our financial data entry service help banks/institutes and accounting professionals.",
  },
};

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
    question: "What are the typical payment options?",
    answer: `
        We prefer payment by check or directly transfer to our bank accounts. We are also accepting payments via Paypal.
      `,
  },
  {
    id: "Five",
    question: "In what all modes, communication is enabled?",
    answer: `
        You can opt for a communication of your choice- mail, chat, Google Duo, hangout, phone or Skype. We have multilingual people with us and hence language will never emerge as a barrier.
      `,
  },
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

const pageHeaderData = {
  title: "Financial Data Entry Services",
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

export default function FinancialDataEntry() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Financial Data Entry" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Financial Data Entry" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>

                <p className="mb-0">Tech2Globe is one of the best financial data entry service provider based in India. No matter may be your financial data entry service requirements – in progress or one-time; we offer 100% reliable and correct <Link href="/data-entry-services" className="text-decoration-underline fw-normal">data entry services</Link> at the most effective rate within the business.</p>
                <p>There will be plenty of pressure if you're thinking that regarding outsourcing the financial data entry service. Accuracy is that the name of the sport once it involves the talents required to be in some financial data entry experts or consultant. Tech2Globe has the experience in handling bulk of financial data and has the team of financial data experts that helps contour the information in least timeframe with quality results.</p>

                <p>Modern international market is extremely competitive whereby firms offer finance and information entry serious prioritization so as to own their internal Finance functions standardized, efficient and absolutely purposeful. Tech2Globe financial data entry service give data concerning the profitableness, efficiency, liquidity and stability of the corporate.</p>
                <p>If you're yearning for a specialised outsourcing firm which will do financial data entry services with absolute confidentiality and accuracy at lower prices, you have got reached right place for your financial data entry concern.</p>
                <p>A range of advanced tools and extremely seasoned in-house team captures your knowledge with the best degree of accuracy & speed at efficient rates.</p>

                <p><strong>Benefits of outsourcing financial data entry services to Tech2Globe:</strong></p>
                <p className="mb-0"><FaAngleRight />Data Integration Solutions</p>
                <p className="mb-0"><FaAngleRight />Our Strict Security Procedures</p>
                <p className="mb-0"><FaAngleRight />Superior Quality of Outputs</p>
                <p className="mb-0"><FaAngleRight />Delicate Delivery Timeframes</p>
                <p className="mb-0"><FaAngleRight />Data Security & Confidentiality</p>
                <p className="mb-0"><FaAngleRight />Experience in Flawless Data Entry</p>
                <p className="mb-0"><FaAngleRight />Round-the-Clock Operations</p>
                <p className="mb-0"><FaAngleRight />Meeting Compliance Deadlines</p>
                <p><FaAngleRight />Faster Turnaround Time</p>

                <p>If your company needs sound financial data entry services, then why not give Tech2Globe a call today? We provide competitive rates for all our services and guarantee your company will profit success from it. Our finance data entry knowledge has helped many financial institutes act over recent years and that we will provide you with the forefront too.</p>
                <p>Contact us to urge a lot of details for our knowledge or e-mail us now at <Link href="mailto:info@tech2globe.com">info@tech2globe.com</Link> to know how we will assist you together with your needs.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>

          </div>
        </div>




        <div className="container">
          <div className={Style.ContentDiv}>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h2>Our Process for Offline Data Entry</h2>
              <p>The procedure we follow in performing offline data input work is as per the following:</p>
              <hr />

              <div className="row pb-4 pt-3">
                <div className="col-12 mb-3">
                  <div className="card shadow border-0 rounded p-4 d-flex flex-row align-items-start gap-4">

                    <div className="text-center">
                      <Image src="/images/services/service-inner/import-data.png" width={55} height={55} alt="Get Offline Data" />
                    </div>
                    <div className="context">
                      <h5>Get Offline Data</h5>
                      <p>Tech2Globe get data entry requirements from your staff and comprehend your requirement for financial data entry services to design a vital procedure.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <div className="card shadow rounded border-0 p-4 d-flex flex-row align-items-start gap-4">

                    <div className="text-center">
                      <Image src="/images/services/service-inner/data-entry-1.png" width={55} height={55} alt="Perform Data Entry" />
                    </div>
                    <div className="context">
                      <h5>Perform Data Entry</h5>
                      <p>Our expert data entry operators will perform data entry with high devotion and precise outcomes alongside first class quality.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <div className="card shadow rounded border-0 p-4 d-flex flex-row align-items-start gap-4">

                    <div className="text-center">
                      <Image src="/images/services/service-inner/quality.png" width={55} height={55} alt="Quality Check Process" />
                    </div>
                    <div className="context">
                      <h5>Quality Check Process</h5>
                      <p>Tech2Globe performs quality check rounds to guarantee your database is error free and profoundly dependable for future references.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <div className="card shadow rounded border-0 p-4 d-flex flex-row align-items-start gap-4">

                    <div className="text-center">
                      <Image src="/images/services/service-inner/customer-support.png" width={55} height={55} alt="Expert Analysis" />
                    </div>
                    <div className="context">
                      <h5>Expert Analysis</h5>
                      <p>After all, the quality check performance and important corrections done, our specialists have a random check the last record and get your approval for the same.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-3">
                  <div className="card shadow rounded border-0 p-4 d-flex flex-row align-items-start gap-4">

                    <div className="text-center">
                      <Image src="/images/services/service-inner/submite.png" width={55} height={55} alt="Submit Final Work" />
                    </div>
                    <div className="context">
                      <h5>Submit Final Work</h5>
                      <p>We send you the last file after finishing of data entry work and QC with the assistance of our protected FTP servers to your organization.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="container">
              <div className={Style.ContentDiv}>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <h4>Complete Suite of Our Online Data Entry Services</h4>
                  <p>Tech2Globe offers the widest range of online data entry services to businesses of all sizes. Apart from English, we provide financial data entry services in the entire major languages including, Spanish, German, French, and many more. All our services are ISO certified for quality and data security.</p>
                  <h4>Online Data Entry Process Flow</h4>
                  <p>Tech2Globe believe in furnishing our customers with the best quality services inside a brief timeframe. Some of the key advances engaged with our procedure are listed here –</p>
                  <p className="mb-0"><FaAngleRight />Input files are obtained from a server, database, FTP, URL, etc.</p>
                  <p className="mb-0"><FaAngleRight />Data is entered into an online tool, like a CRM tool, a client based tool or a remote tool</p>
                  <p className="mb-0"><FaAngleRight />A QC check is done online</p>
                  <p className="mb-0"><FaAngleRight />If there are any errors, the changes are carried out</p>
                  <p className="mb-0"><FaAngleRight />The final files are saved, and client access provided</p>
                  <p><FaAngleRight />Subsequent client requested changes if any are made online</p>

                  <p>Tech2Globe is a main financial data entry service provider in India and a progression of other data management services to worldwide customers. Our exceptionally trained and experienced data entry specialists can assist you with finishing all of your information section needs inside brisk turnaround time.</p>

                  <h4>Tools we leverage in Online Data Entry Services</h4>
                  <p>We have cutting-edge tools and equipment used for data entry services in India to get you through modest edge like Adobe Acrobat reader DC, Abbyy FineReader, Tesseract, OmniPage, Readiris, Docufree, Prizmo, and Soda PDF Premium.</p>
                  <p>Get in touch with us today to know how you can get top-notch accounting data entry services company, assigned data entry experts, quick turnaround times and save up to 60%! Connect with Tech2Globe today!</p>
                </div>
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