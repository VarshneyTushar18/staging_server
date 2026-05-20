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
  title: "Social Media Research Services | Social media Research Company",

  description:
    "By Outsourcing Social Media Research Services you can spare more than 65% on working expenses. Our web research expert’s analysis your social channels to get helpful insights.",

  keywords: [
    "Social Media Research Services",
    "Outsourcing social media research services",
    "Remote/offshore Social media research services",
    "Social media research and insight services",
    "Social media Research Company.",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/social-media-research-services",
  },

  openGraph: {
    title: "Social Media Research Services | Social media Research Company",
    description:
      "By Outsourcing Social Media Research Services you can spare more than 65% on working expenses. Our web research expert’s analysis your social channels to get helpful insights.",
    url: "https://www.tech2globe.com/social-media-research-services",
    siteName: "Tech2Globe",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Social Media Research Services | Social media Research Company",
    description:
      "By Outsourcing Social Media Research Services you can spare more than 65% on working expenses. Our web research expert’s analysis your social channels to get helpful insights.",
  },
};

const pageHeaderData = {
  title: "Social Media Research Services",
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
  },

];

export default function SocialMediaResearch() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you sign non-disclosure agreements and SLAs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We sign non-disclosure agreements and service level agreements for every customer who outsources to Tech2Globe."
        }
      },
      {
        "@type": "Question",
        "name": "Which sectors do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Now that you know about our different kind of services, you will also understand that these services are implemented for every sector that is willing to grow their business. We have worked with financial institutions, banks, healthcare, educational sectors, hospitality sectors and other businesses that are willing to enjoy different level of services."
        }
      },
      {
        "@type": "Question",
        "name": "How about security at Tech2Globe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If security and privacy issues are stopping you from outsourcing, you can go ahead and start outsourcing to Tech2Globe as we ensure security, privacy & confidentiality at every level of the outsourcing process."
        }
      },
      {
        "@type": "Question",
        "name": "How can I be sure of high quality?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have designed the workflow along with highly qualified QA professionals whose aim will be to deliver the premium quality services. You can also test and verify the quality of work throughout the course of the project."
        }
      },
      {
        "@type": "Question",
        "name": "I want to outsource to Tech2Globe. What should I do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Just fill in our contact form, with the services that you need and details regarding your project and we will contact you shortly to take the outsourcing relationship to the next level."
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
      <Breadcrumb parentName="Services" pageName="Social Media Research Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Social Media Research Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Social media presents an extraordinary chance to organizations to connect with their target audience. Buyers are using social media to discuss their requirements and needs, different preferences, and these online conversations present an abundance of data that organizations can use for their potential benefit.</p>

                <p>Social media research refers to the act of analyzing and extricating data from <Link href="https://blog.tech2globe.com/top-brands-provide-great-social-media-services-for-their-clients/">social media channels</Link>, for example, Facebook, LinkedIn, Twitter, Google +, and Pinterest through a lot of tools and techniques to get, screen, and track purchaser behavior.</p>

                <p>Tech2Globe help organizations, brand managers, promoting and advanced marketing agencies in recognizing and examining important data from social media sites including yet not limited to Facebook, Twitter, LinkedIn, Google +, Pinterest, Tumblr, and so forth. The social media research services gave by Tech2Globe empowers you to strengthen your image worth and relationship with your clients. Our web research experts thoroughly analysis your online networking channels to get helpful data and insights.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="mt-2">Social Media Research Services by Tech2Globe</h2>

                <p>Social media is a powerful tool that empowers you to listen to what clients are stating about your image. Our research helps you review your online <Link href="/smo-services">social media presence</Link>, discussions and activities just as benchmark your brand's performance against that of contenders. Some of the specific services of our social media research group include:</p>
                <ul className={Style.TwoCol}>
                  <li>Brand Attribute Analysis</li>
                  <li>Competition Analysis</li>
                  <li>Social Customer Care Analysis</li>
                  <li>Social Engagement Analysis</li>
                  <li>Actionable Brand Insights</li>
                </ul>
                <p>Furthermore, by outsourcing social media research services to us you can spare more than 60-65% on working expenses. To give you risk free outsourcing experience, we follow strict data security and data secrecy policies.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Social Media Research - The Tech2Globe Process</h2>

                <div className="row pb-4">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card text-center shadow rounded p-3 gap-3 mb-3 h-100">
                      <div className="text-center">
                        <Image src="/images/services/service-inner/assignment.png" width={55} height={55} alt="Deciding the Data Set" />
                      </div>
                      <div className="context">
                        <h5>Deciding the Data Set</h5>
                        <p>We decide the particular subject, topic, and conversations that ought to be checked to make a focused on inquiry through customer expectation analysis.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card text-center shadow rounded p-3 gap-3 mb-3 h-100">
                      <div className="text-center">
                        <Image src="/images/services/service-inner/data-cleaning.png" width={55} height={55} alt="Data Set Cleansing" />
                      </div>
                      <div className="context">
                        <h5>Data Set Cleansing</h5>
                        <p>Despite well-defined target queries, it's workable for clamor to slip into your procured information. By cleaning that data set with explicit sub inquiries, expelling retweets, and reanalyzing unique discussions, we empower you to reveal disguised consumer insights.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card text-center shadow rounded p-3 gap-3 mb-3 h-100">
                      <div className="text-center">
                        <Image src="/images/services/service-inner/analysis.png" width={55} height={55} alt="Sample-Wise Analysis" />
                      </div>
                      <div className="context">
                        <h5>Sample-Wise Analysis</h5>
                        <p>To encourage deeper insights while keeping the social media research and analysis process reasonable, we experience the data set by breaking it into tests, sufficiently huge to create noteworthy results yet little enough to allow in-depth inspection.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card text-center shadow rounded p-3 gap-3 mb-3 h-100">
                      <div className="text-center">
                        <Image src="/images/services/service-inner/process.png" width={55} height={55} alt="Information Led Processing" />
                      </div>
                      <div className="context">
                        <h5>Information Led Processing</h5>
                        <p>By setting up categories, themes, channels, and groups, and utilizing a mix of manual and automated analysis procedure, we search over the whole informational collection to guarantee exact and reliable outcomes.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card text-center shadow rounded p-3 gap-3 mb-3 h-100">
                      <div className="text-center">
                        <Image src="/images/services/service-inner/customer-support.png" width={55} height={55} alt="Analysis and Reporting" />
                      </div>
                      <div className="context">
                        <h5>Analysis and Reporting</h5>
                        <p>Each revealed knowledge and its related facts, figures, and concerns are conveniently spread out in a report, delivered in the format preferred by the customer.</p>
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

          <div className="row">
            <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <h2>Our Social Media Research Tools</h2>
                <p>Other than exploring social media sites, for example, Facebook, Instagram, Twitter, LinkedIn, Google+, Pinterest, Tumblr, and so forth., Tech2Globe likewise research your industry-explicit sites, gatherings, news sources, inside and outside criticism, and video sharing sites, as YouTube, Vimeo, and so on. Social media monitor and market research services also use Google Trends, Google Survey, and other audience intelligence analysis and social listening tools to help online life research efforts, analyze drifts, and get insights.</p>

                <p>You can contact us whenever with inquiries in regards to your media monitoring or social media research outsourcing needs as our social media research company give 24×7 client support.</p>
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