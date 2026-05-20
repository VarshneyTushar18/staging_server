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
  title: "Outsourcing Lead Qualification Services | Sales Lead Qualification",
  description:
    "Outsource lead qualification services to discover qualified prospects and help build long-lasting relationships with potential customers. Contact us today to streamline your sales process.",

  keywords: [
    "outsourcing lead qualification services",
    "lead qualification strategy",
    "lead qualification services cost",
    "sales lead qualification",
  ],

  openGraph: {
    title: "Outsourcing Lead Qualification Services | Sales Lead Qualification",
    description:
      "Outsource lead qualification services to discover qualified prospects and help build long-lasting relationships with potential customers. Call us today.",
    url: "https://www.tech2globe.com/lead-qualification-services",
    siteName: "Tech2Globe",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Outsourcing Lead Qualification Services | Sales Lead Qualification",
    description:
      "Outsource lead qualification services to discover qualified prospects and help build long-lasting relationships with potential customers. Call us today.",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/lead-qualification-services",
  },
};

const pageHeaderData = {
  title: "Lead Qualification",
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
    question: "Are your services cost-effective?",
    answer: `
        Yes. When you outsource to Tech2Globe you be assured of saving more than 40-50% of your operating costs.
      `,
  },
  {
    id: "Two",
    question: "How about security at Tech2Globe?",
    answer: `
        If security and privacy issues are stopping you from outsourcing, you can go ahead and start outsourcing to Tech2Globe as we ensure security, privacy & confidentiality at every level of the outsourcing process.
      `,
  },
  {
    id: "Three",
    question: "Does Tech2Globe possess long-term viability?",
    answer: `
        Yes, we consider our long-term viability to be excellent. You need not have any reservations about teaming up with us, as we are completely debt-free.
      `,
  },
  {
    id: "Four",
    question: "What modes of payment do you accept?",
    answer: `
        Once the project is completed and you are satisfied with the results, you can pay us either by wire transfer or by check.
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

export default function LeadQualification() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are your services cost-effective?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. When you outsource to Tech2Globe you can expect to save around 40–50% of your operating costs."
        }
      },
      {
        "@type": "Question",
        "name": "How about security at Tech2Globe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If security and privacy are concerns, you can outsource confidently — we ensure security, privacy, and confidentiality at every level of our processes."
        }
      },
      {
        "@type": "Question",
        "name": "Does Tech2Globe possess long-term viability?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we consider our long-term viability to be excellent. You need not have any reservations about teaming up with us, as we are fully focused on stable, sustainable growth."
        }
      },
      {
        "@type": "Question",
        "name": "What modes of payment do you accept?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Once the project is completed and you are satisfied with the results, you can pay via wire transfer or by check."
        }
      },
      {
        "@type": "Question",
        "name": "How can I benefit by working with Tech2Globe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At Tech2Globe, we ensure your project is completed on schedule, within budget, and in accordance with international quality standards."
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
      <Breadcrumb parentName="Technologies" pageName="Lead Qualification Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Lead Qualification Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Ideally, to guarantee the best outcomes, you would be giving it 100% each time you give a sales presentation, whether you give it 3 times or 30 times in a day. In any case, you&apos;re no machine and can&apos;t hope to give every single lead a similar elevated level of attention and courting without fail.</p>
                <p>This is the reason you need ONLY QUALIFIED LEADS to present to. Channel out the weeds and leave just the reasonable leads. When you realize you&apos;re shooting for the correct end goal, you wouldn&apos;t see any problems with doing as well as you possibly can constantly, giving you a superior possibility at closing the deal right as it so happens.</p>
                <p>Tech2Globe is a specialist provider of lead qualification services in India. We can assist you with securing more leads, broaden your image&apos;s capabilities, and develop your business, without having to locally available any extra resources.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Our Lead Qualification Services</h2>
                <p>Leads have a short timeframe of realistic usability and require a marketing campaign to change over them. At Tech2Globe, we have space ability on lead qualification services where our answers will essentially lessen the expense per contact while expanding the volume of qualified leads. Our lead qualification strategy will assist you with classify, qualify, channel, manage, affix, and follow-up on leads. Our lead qualification services incorporate –</p>
                <ul className={Style.TwoCol}>
                  <li>Web Enquiries</li>
                  <li>Company Database</li>
                  <li>Inbound Calls</li>
                  <li>Contact Us Forms</li>
                  <li>Request for Quote</li>
                  <li>Online Referral Sources</li>
                  <li>Whitepaper Downloads</li>
                  <li>eBook Downloads</li>
                  <li>Case Study Downloads</li>
                  <li>News Stories</li>
                  <li>Webinars</li>
                  <li>Events & Tradeshows</li>
                  <li>Demo Downloads</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Our Lead Qualification Services Process</h2>
                <p>Our reliable lead qualification services process is worked in a manner to focus on your possibility profile inside your allocated budget. It includes the following 8 procedures -</p>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="p-3 rounded border  shadow-sm text-start h-100">
                      <Image src="/images/services/service-inner/import-data.png" width={55} height={55} alt="Requirement Gathering" />
                      <h4>Requirement Gathering</h4>
                      <p>From the start, our lead qualification services cost will distinguish your careful requirements and get into an agreement.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="p-3 rounded border  shadow-sm text-start h-100">
                      <Image src="/images/services/service-inner/list-black.png" width={55} height={55} alt="Formation of Client List" />
                      <h4>Formation of Client List</h4>
                      <p>We will make a broad list of the customers, which will give you the genuinely necessary rest to extend your business.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="p-3 rounded border  shadow-sm text-start h-100">
                      <Image src="/images/services/service-inner/assignment.png" width={55} height={55} alt="Content and Sales Collateral" />
                      <h4>Content and Sales Collateral</h4>
                      <p>We will make the call contents, manuals, and FAQs.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="p-3 rounded border  shadow-sm text-start h-100">
                      <Image src="/images/services/service-inner/arriving.png" width={55} height={55} alt="Arriving at Prospects" />
                      <h4>Arriving at Prospects</h4>
                      <p>We will arrive at the possibilities through different channels, including email, <Link href="/social-media-marketing-services"  className="fw-bold text-muted text-decoration-underline">social media</Link>, mobile, and so on.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="p-3 rounded border  shadow-sm text-start h-100">
                      <Image src="/images/services/service-inner/undertaking.png" width={55} height={55} alt="Qualifying the Leads" />
                      <h4>Qualifying the Leads</h4>
                      <p>When the leads are caught through different marketing channels, we will qualify the quality leads according to your requirements.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="p-3 rounded border  shadow-sm text-start h-100">
                      <Image src="/images/services/service-inner/nurture.png" width={55} height={55} alt="Nurture Prospects" />
                      <h4>Nurture Prospects</h4>
                      <p>Our master group will use lead scoring and sales lead qualification tools to address the possibility&apos;s necessity.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="p-3 rounded border  shadow-sm text-start h-100">
                      <Image src="/images/services/service-inner/verify.png" width={55} height={55} alt="Manage and Monitor Leads" />
                      <h4>Manage and Monitor Leads</h4>
                      <p>If the possibility gives any sign of interest, we will keep on sustaining them. Also, when they arrive at a development level, we will hand them over to you.</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                    <div className="p-3 rounded border  shadow-sm text-start h-100">
                      <Image src="/images/services/service-inner/customer-support.png" width={55} height={55} alt="Lead Qualification Report" />
                      <h4>Lead Qualification Report</h4>
                      <p>We will send week by week/monthly reports to assist you with finding the holes and make your campaign successful.</p>
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

          <div className="row pt-5">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <h2>Tools</h2>
                <p>With regards to making and creating drives, one of the most significant lead qualification devices is cold calling. Tech2Globe has some expertise in B2B outbound cold pitching. With Tech2Globe’s demonstrated call community stage in your corner, lead qualification isn&apos;t about gets all of a sudden.</p>
                <p>Outsource lead qualification services which will help in discovering qualifying prospects as well as help our customers in building an enduring bond with the leads. Additionally, we can support to strategically pitch or up-sell your products and services. Connect with us today for a dependable, practical, and proficient lead qualification services.</p>
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
