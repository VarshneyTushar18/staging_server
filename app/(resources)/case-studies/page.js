import Style from "./style.module.css";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import CaseStudiesClient from "@/app/components/caseStudies/CaseStudiesClient";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";


export const metadata = {
  title: "Case Studies: Tech2globe, the top multi-processing IT Company",
  description:
    "Browse our portfolio of case studies below to learn the difference we made to our clients through our integrated services and solutions, and how we can help you.",

  keywords: [],

  openGraph: {
    title: "Case Studies: Tech2globe, the top multi-processing IT Company",
    description:
      "Browse our portfolio of case studies below to learn the difference we made to our clients through our integrated services and solutions, and how we can help you.",
    url: "https://www.tech2globe.com/case-studies",
    siteName: "Tech2Globe",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Case Studies: Tech2globe, the top multi-processing IT Company",
    description:
      "Browse our portfolio of case studies below to learn the difference we made to our clients through our integrated services and solutions, and how we can help you.",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/case-studies",
  },
};

const pageHeaderData = {
  title: "Case Studies",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const casestudies = [
  {
    title: "Ecommercessss",
    items: [
      {
        title: "Online Business Growth",
        description:
          "This client is a well-established online retailer who sells a broad selection of items ranging from electrical equipment to gardening tools and more.",
        slug: "/case-studies/online-business-growth",
      },
    ],
  },

  {
    title: "Software Development",
    items: [
      {
        title: "Custom CRM Development",
        description:
          "Built a scalable CRM system to automate workflows and improve internal business operations.",
        slug: "/case-studies/custom-crm",
      },
    ],
  },

  {
    title: "Graphic Designing",
    items: [
      {
        title: "Brand Identity Design",
        description:
          "Created complete brand identity including logo, typography, color systems, and marketing creatives.",
        slug: "/case-studies/brand-identity",
      },
    ],
  },

  {
    title: "Data Management",
    items: [
      {
        title: "Enterprise Data Structuring",
        description:
          "Streamlined and structured enterprise data systems for better analytics and operational efficiency.",
        slug: "/case-studies/data-structuring",
      },
    ],
  },

  {
    title: "Digital Marketing",
    items: [
      {
        title: "Performance Marketing Campaign",
        description:
          "Executed ROI-driven paid media campaigns across Google and social platforms.",
        slug: "/case-studies/performance-marketing",
      },
    ],
  },
];

export default function CaseStudies() {
  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />

      <Breadcrumb
        parentName="Resources"
        pageName="Case Studies"
      />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

              <div className="StoreCreationTabs MainPortfolioTabs CaseStudiesTabs">
                <CaseStudiesClient />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
