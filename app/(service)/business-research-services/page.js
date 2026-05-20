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
  title: "Business Research Services | Business Research Specialist | Tech2Globe",
  description:
    "Contact Tech2Globe to find out about full scope of Business Research Services. Our research and analysis team works away at the task according to your directions. Call us today.",
  keywords:
    "Business Research services, Business Research company, business research specialists, business research experts.",
  openGraph: {
    title: "Business Research Services | Business Research Specialist | Tech2Globe",
    siteName: "",
    description:
      "Contact Tech2Globe to find out about full scope of Business Research Services. Our research and analysis team works away at the task according to your directions. Call us today.",
    url: "https://www.tech2globe.com/business-research-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Research Services | Business Research Specialist | Tech2Globe",
    description:
      "Contact Tech2Globe to find out about full scope of Business Research Services. Our research and analysis team works away at the task according to your directions. Call us today.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/business-research-services",
  },
};

const pageHeaderData = {
  title: "Business Research",
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
        question: "Are your services cost-effective?",
        answer: `
        Yes. When you outsource to Tech2Globe you be assured of saving more than 40-50% of your operating costs.
      `,
    },
    {
        id: "Two",
        question: "How about security at Tech2Globe?",
        answer: `
        If security and privacy issues are stopping you from outsourcing, you can go ahead and start outsourcing to Tech2Globe as we ensure security, privacy & confidentiality at every level of the outsourcing process. We employ the very best in security measures to assure our customers that their confidential data will be kept completely secure.
      `,
    },
    {
        id: "Three",
        question: "Does Tech2Globe possess long-term viability?",
        answer: `
        Yes, we consider our long-term viability to be excellent. You need not have any reservations about teaming up with us, as we are completely debt-free. To ensure our viability, we always make it a point to sign outsourcing contracts or agreements.
      `,
    },
    {
        id: "Four",
        question: "What modes of payment do you accept?",
        answer: `
        Once the project is completed and you are satisfied with the results, you can pay us either by wire transfer or by check. If you wish to pay us through any other method, you can let our customer support team know, and they will guide you appropriately.
      `,
    },
    {
        id: "Five",
        question: "How can I benefit by working with Tech2Globe?",
        answer: `
        At Tech2Globe, we can assure you that your project will be completed on schedule, within budget and in accordance with international quality standards.
      `,
    },
];

export default function BusinessResearch() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are your services cost-effective?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. When you outsource to Tech2Globe you be assured of saving more than 40-50% of your operating costs."
        }
      },
      {
        "@type": "Question",
        "name": "How about security at Tech2Globe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If security and privacy issues are stopping you from outsourcing, you can go ahead and start outsourcing to Tech2Globe as we ensure security, privacy & confidentiality at every level of the outsourcing process. We employ the very best in security measures to assure our customers that their confidential data will be kept completely secure."
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
        "name": "What modes of payment do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once the project is completed and you are satisfied with the results, you can pay us either by wire transfer or by check. If you wish to pay us through any other method, you can let our customer support team know, and they will guide you appropriately."
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
      <Breadcrumb parentName="Services" pageName="Business Research Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Business Research Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>With a massive increase in competition over the global marketplace, organizations need to understand their clients better and get significant industry insights, not exclusively to make key, operational, and tactical decisions, yet in addition to bring a deeper dive into their business sectors. With a full range of business research services, we give you simply that!</p>
                <p>Tech2Globe, holding 10+ years of experience with the knowledge process outsourcing (KPO) industry, supports worldwide customers in taking their organizations forward with far reaching business research services and analytics. As a main business research company, we give significant bits of knowledge to enable our customers to understand the objective market, consumer behavior, market trends, industry improvements, competitors, and merchants and partners, therefore helping them chalk out future business systems and gain competitive advantage.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h3>Services We Offer For Business Research Services</h3>
                <p>To guarantee you take advantage of your business research decisions, we offer the following services and answers for our clients:</p>
                <ul className={Style.TwoCol}>
                  <li>Business Intelligence Dashboard Creation</li>
                  <li>Media Research</li>
                  <li>Business Market Research</li>
                  <li>Business Development Support</li>
                  <li>Trend Analysis</li>
                  <li>Perceptual Mapping Services</li>
                  <li>Primary &amp; Secondary Research</li>
                  <li>Business Competitor Analysis</li>
                  <li>Industry Profiling</li>
                  <li>Company Profiling Services</li>
                  <li>Competitive Business Analysis Services</li>
                </ul>
                <p>Our actionable insights add value of our research reports. Business solutions differ at each phase of a business - at the launch of your business, during the activities stage and at the development stage. Tech2Globe helps you at each phase of your business!</p>
              </div>

              <div className={Style.ContentDiv}>
                <h3>Business Research Process We Follow at Tech2Globe</h3>
                <hr />
                <p>By outsourcing your business research necessities to Tech2Globe, you get a partner who understands the significance of business research for the development of your organization.</p>
                <ul>
                  <li>Send us your query by filling our &quot;contact us&quot; form</li>
                  <li>We will connect with you inside 24 working hours</li>
                  <li>Share your requirement details with our business manager</li>
                  <li>Our business manager guarantees that our research and analysis group understands the specific idea of your necessity</li>
                  <li>Our research and analysis team works away at the task according to your directions</li>
                  <li>When the task is finished, we share the final copy to you in your favored format</li>
                </ul>
                <p>Contact Tech2Globe to find out about our full scope of business research services. Our business research specialists will guarantee that you have the information expected to settle on the correct choices for your company.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h3>Tools we use in Business Research Services</h3>
                <p>Using tools like SWOT and PESTEL analysis, we can determine where your best opportunities lie and what changes you can and should make to best position yourself against the competition.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h3>Our Experts Know All Languages</h3>
                <p>Tech2Globe offers the larger and most cost-efficient answers for online and offline data entry. We execute a heavy diversity of <Link href="/data-entry-services" className="text-decoration-underline text-muted">online data entry services</Link> in numerous languages - English, German, Dutch, French, Spanish, Italian and many more that’s why we are called as bilingual operators.</p>
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