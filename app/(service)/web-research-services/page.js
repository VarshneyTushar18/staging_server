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
import { FaAngleRight } from "react-icons/fa";


export const metadata = {
  title: "Outsource Web Research Services | Customized Web Research Solutions",

  description:
    "Tech2Globe offers a wide range of customized web research services to various industry verticals and specialties including lawful, real estate, fund, & banking & more.",

  keywords: [
    "Web Research Services",
    "Customized web research solutions",
    "Online web researches services",
    "Outsource web research services",
    "Internet research services",
    "Outsource internet research services",
    "Internet research company",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/web-research-services",
  },

  openGraph: {
    title: "Outsource Web Research Services | Customized Web Research Solutions",
    description:
      "Tech2Globe offers a wide range of customized web research services to various industry verticals and specialties including lawful, real estate, fund, & banking & more.",
    url: "https://www.tech2globe.com/web-research-services",
    type: "website",
    siteName: "Tech2Globe Web Solutions LLP",
  },

  twitter: {
    card: "summary_large_image",
    title: "Outsource Web Research Services | Customized Web Research Solutions",
    description:
      "Tech2Globe offers a wide range of customized web research services to various industry verticals and specialties including lawful, real estate, fund, & banking & more.",
  },
};

const pageHeaderData = {
  title: "Outsource Web Research Services",
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
        "We have experience of 10 years in data entry outsourcing field and have successfully accomplished various projects of clients across the world. We have wide experience of working on different types of data entry projects.
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

export default function WebResearchServices() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        name: "Since how long are you in the outsourcing field?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We have experience of 10 years in data entry outsourcing field and have successfully accomplished various projects of clients across the world. We have wide experience of working on different types of data entry projects.",
        },
      },
      {
        "@type": "Question",
        name: "How are fees structured – hourly rate or per-unit pricing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In general fees are charged on a per unit basis. This is the simplest for everyone to understand and assures you are not paying for inefficiencies. It is also easiest to audit when you receive each invoice. In very rare circumstances will consider an hourly billing.",
        },
      },
      {
        "@type": "Question",
        name: "How will I get the completed work files?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We assure the quality of final files are up to your standards and then send the files to you via email or through the online applications. Depending on the file size, we can also send the files or data via the secured FTP server.",
        },
      },
      {
        "@type": "Question",
        name: "What are your working hours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work from Monday to Saturday 07:00 AM IST to 11:30 PM IST. In case of work urgency and on the basis of client’s request, we also work on Sundays.",
        },
      },
      {
        "@type": "Question",
        name: "Does Tech2Globe work on weekends and holidays?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our data entry operators work different schedules, and many of them prefer weekends. Some holidays, particularly Thanksgiving and Christmas, are more challenging to achieve full production and may require incentivizing the operators.",
        },
      },
    ]
  };

  return (

    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Web Research Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Web Research Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p><strong>Outsource web research services</strong> for reliable data collection and analysis. Use our expertise to make better business decisions and plan effectively.</p>

                <p>Tech2Globe gives a rich exhibit of web research services to organizations over the globe, helping them increase simple access to data identified with existing and new clients, contenders, market, items and services, economy and significantly more. Housing a committed group of web researchers, data miners and information experts, we follow industry-best practices to gather business-basic data from a large number of online assets like business directories, industry distributions, social networking websites, sites and forums, news portals just as sites, determined by you.</p>

                <p>Tech2Globe is committed to provide customers precise, steady and reliable information through our <strong>online research services</strong> that encourages the decision-making procedure and improves deals and advertising efforts. Our specialists are adroit at drawing out basic data from the pool of unstructured data available over the web, guaranteeing it is authentic and up-to-date.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Dedicated Internet Research Services Catering to Unique Business Requirements</h2>

                <p>Tech2Globe offers a wide range of customized web research solutions to various industry verticals and specialties including lawful, real estate, fund and banking, banking, insurance, retail and advertising, educational institutions, car, and so on. We hold an abundance of involvement with managing worldwide customers situated in the USA, UK, Australia, Canada, Australia, and other European countries.</p>

                <p>When you outsource web research services to us, our specialists altogether dissect customer's prerequisites and quest the World Wide Web for important data that helps the customers in increasing more extravagant experiences into clients' buying patterns, competitors’ evaluating strategies and common business trends. Our <strong>internet research services</strong> assure you that you’ll receive meticulously curated insights as we are committed to deliver accurate, timely, and actionable information.</p>

                <p><strong>Our thorough set-up of web research services, include:</strong></p>

                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 h-100">
                      <div className="text-center">
                        <img src="/images/services/service-inner/data-mining.png" height="55px" width="55px" alt="Data Mining Services" />
                        <h6>Data Mining Services</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 h-100">
                      <div className="text-center">
                        <img src="/images/services/service-inner/globe-1.png" height="55px" width="55px" alt="Web Presence Audit" />
                        <h6>Web Presence Audit</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 h-100">
                      <div className="text-center">
                        <img src="/images/services/service-inner/workforces.png" height="55px" width="55px" alt="Business Data Research" />
                        <h6>Business Data Research</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 h-100">
                      <div className="text-center">
                        <img src="/images/services/service-inner/marketing-material.png" height="55px" width="55px" alt="Product & Services Research" />
                        <h6>Product & Services Research</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 h-100">
                      <div className="text-center">
                        <img src="/images/services/service-inner/competitor.png" height="55px" width="55px" alt="Competitor Profiling & Analysis" />
                        <h6>Competitor Profiling & Analysis</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 h-100">
                      <div className="text-center">
                        <img src="/images/services/service-inner/search.png" height="55px" width="55px" alt="Social Media Research / Monitoring" />
                        <h6>Social Media Research / Monitoring</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 h-100">
                      <div className="text-center">
                        <img src="/images/services/service-inner/market-icon.png" height="55px" width="55px" alt="Market Research" />
                        <h6>Market Research</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 h-100">
                      <div className="text-center">
                        <img src="/images/services/service-inner/education.png" height="55px" width="55px" alt="Academic Research" />
                        <h6>Academic Research</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 h-100">
                      <div className="text-center">
                        <img src="/images/services/service-inner/legal-icon.png" height="55px" width="55px" alt="Legal Research and Support" />
                        <h6>Legal Research and Support</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 h-100">
                      <div className="text-center">
                        <img src="/images/services/service-inner/analysis.png" height="55px" width="55px" alt="Conducting Survey & Analysis" />
                        <h6>Conducting Survey & Analysis</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 h-100">
                      <div className="text-center">
                        <img src="/images/services/service-inner/data-extraction.png" height="55px" width="55px" alt="Data Extraction Services" />
                        <h6>Data Extraction Services</h6>
                      </div>
                    </div>
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

          <div className="row mt-5">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

              <div className={Style.ContentDiv}>
                <h2 className="mt-4">Process for Web Research Services</h2>
                <p>At Tech2Globe, we give data simply in the wake of checking credibility, exactness, reasonableness, and backing.</p>

                <p className="mb-0"><FaAngleRight/> Product market research</p>
                <p className="mb-0"><FaAngleRight/> Reference material research</p>
                <p className="mb-0"><FaAngleRight/> Internet Research and Reporting</p>
                <p className="mb-0"><FaAngleRight/> Education and Business web research</p>
                <p className="mb-0"><FaAngleRight/> Management and organizational web research</p>
                <p><FaAngleRight/> Summarization of websites useful to both educators and students</p>

                <p>Internet research services at Tech2Globe are upgraded by the superb foundation and experienced staff. We enroll just individuals with a sharp eye for subtleties and a profound enthusiasm for research. Tech2Globe web research will enable you to plan, actualize, and manage on an everyday basis.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="mt-4">Benefits of Web Research</h2>
                <p>Nowadays, the internet gives a lot of information, however, useful information for businesses cannot be easily found. This is where <strong>internet research services</strong> come in. Businesses of all sizes need to conduct web research. It is the process of gathering data over the internet with an aim of enhancing the working of the business and incorporating the intelligence acquired. This information enables businesses to be aware of significant developments, enhance marketing, identify areas that need correction, and create relevant programs.</p>

                <p>Web research services use online review sites, <Link href="/social-media-marketing" className="fw-bold text-decoartion-underline">social media</Link>, and forums to understand how customers engage with a company. Using this information, firms can Personalize customer experiences, catering to each individual consumer's specific requirements and preferences and identifying potential partners to search for collaborators and suppliers that provide similar products and services.</p>

                <p>Businesses that need effective and competent data collection and analysis may find it useful to <strong>outsource web research services.</strong></p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="mt-4">Why Do You Need Web Research Services?</h2>
                <p>The need to <strong> outsource web research services</strong> arises when businesses require reliable data and expert analysis for better decision-making. The prime objective of this service is accuracy. Such services help companies stay competitive, make more informed decisions, and acquire essential insights into client behavior. With <strong>internet research services</strong>, any organization may remain current in the industry. Businesses that outsource market research duties to specialists may save time and money while gaining a competitive edge and making educated decisions based on trustworthy and accurate data. As firms rely more on data to fuel development and success, web research services will become increasingly crucial for all businesses.</p>

                <p>Businesses can <strong>outsource web research services</strong> to us so that they can get the benefits of a holistic approach that merges the macros, bots, tools, and human intelligence for data capture across different source types. We have experience in activities that cover a broad spectrum of industries, such as e-commerce, food and grocery, hospitality, social media, real estate, travel, and <Link href="/data-management-services" className="fw-bold text-decoartion-underline">data aggregation services</Link>. Through the use of our <strong>internet research services</strong>, companies can get precious information and be in the lead of today's competitive market arena.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="mt-4">How Can Outsource Web Research Services Boost Your Business?</h2>
                <p>Businesses often <strong>outsource web research services</strong> to the most reputable web research organizations to boost their productivity. There is a clear correlation between an organization's total efficiency and productivity and the higher quality of the research activity that takes place online. To save businesses time and money, web research service providers eliminate the need to recruit and educate a team of researchers, invest in expensive software, and equipment. This eliminates the need for firms to use costly software.</p>

                <p>Moreover, web research professionals have specialized skills in  <Link href="/data-mining-services" className="fw-bold text-decoartion-underline">data mining</Link>, data analysis, and market research. They also have access to innovative research tools and procedures, which allow them to collect and analyze data in a timely and trustworthy manner. Businesses can get insights that benefit their growth when they have such knowledge.</p>
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