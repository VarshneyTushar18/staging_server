import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "Affordable PPC Packages for Maximum ROI at Minimum Cost",
  description: "Choose affordable PPC packages from Tech2Globe with certified PPC experts for small to large businesses. Get high ROI with free PPC audits, account setup, and ongoing management.",
  keywords: [
    "PPC Packages",
    "PPC Prices",
    "PPC Pricing",
    "Pay Per Click Packages",
  ],
  alternates: {
    canonical: "https://www.tech2globe.com/ppc-packages",
  },
  openGraph: {
    title: "Affordable PPC Services Packages | PPC Packages India",
    description: "Tech2Globe offers affordable PPC packages with certified experts. From PPC audits and account setup to ad management and campaign monitoring, we deliver measurable results.",
    url: "https://www.tech2globe.com/ppc-packages",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable PPC Services Packages | PPC Packages India",
    description: "Tech2Globe offers affordable PPC packages with certified experts. From PPC audits and account setup to ad management and campaign monitoring, we deliver measurable results.",
  },
};

const pageHeaderData = {
  title: "Affordable Pay Per Click (PPC) Packages",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};


const faqs = [
  {
    id: "One",
    question: "What are PPC packages?",
    answer: `
      PPC Packages, or Pay-Per-Click packages, are all-encompassing advertising solutions offered by Tech2Globe Web Solutions to assist businesses in driving targeted traffic to their websites. Our packages consist of an array of services curated to maximize the effectiveness of your online advertising campaigns. This campaign is a combination of different elements such as keyword research, ad creation, campaign management, and performance tracking.
    `,
  },
  {
    id: "Two",
    question: "How do I get started with your PPC packages?",
    answer: `
      It's simple to partner with us. Contact our team via our website or contact information, and we will set up a session to learn more about your business goals. Following that, we'll offer an appropriate PPC package and develop a customized plan that suits your interest. You can contact us via mail at <a href="mailto:info@tech2globe.com;">info@tech2globe.com.</a>
    `,
  },
  {
    id: "Three",
    question: "How much does a PPC package cost?",
    answer: `
      The pricing of our PPC packages is variable depending on your individual business goals, target audience, and campaign scope. Our pricing is flexible to be cost-effective, and we disclose upfront those details within our consultation process. However, we have three packages, namely Basic, Standard, and Premium, to choose from.
    `,
  },
  {
    id: "Four",
    question: "Do you provide ongoing campaign optimization and management?",
    answer: `
      Yes, we do provide continuous campaign optimisation, keyword adjustments, bid management, and ad performance optimisation as a part of our services to keep your campaigns effective and competitive.
    `,
  },
  {
    id: "Five",
    question: "What is the difference between started and growth PPC packages?",
    answer: `
      Our entry-level PPC package is intended for businesses that want to develop a strong online presence and earn first leads. In comparison, the growth PPC package is suitable for companies looking to extend their reach, boost conversions, and achieve more substantial results by utilizing advanced targeting tactics and greater ad spending.
    `,
  },
  {
    id: "Six",
    question: "What sets your PPC packages apart from your competitors?",
    answer: `
      Our PPC packages are differentiated by our team's significant knowledge, data-driven strategy, and commitment to generating measurable results. To help your business succeed, we focus on targeted design, clear reporting, and personalized support.
    `,
  },
  {
    id: "Seven",
    question: "How can PPC packages benefit my business?",
    answer: `
      PPC Packages can support your business by driving targeted and immediate traffic to its website. Furthermore, it fosters enhanced brand visibility and high-quality leads and provides measurable results. Additionally, you can manage your ad spend, track performance, and alter strategy for maximum ROI with our plans. This way, you can reach prospective consumers quickly.
    `,
  },
  {
    id: "Eight",
    question: "Are there any additional fees or hidden costs?",
    answer: `
      No, we believe in open and honest pricing. Our packages are all-inclusive, and we discuss any prospective costs up ahead to ensure there are no surprises. Clear communication and direct pricing are initial factors of trust that we firmly support.
    `,
  },
  {
    id: "Nine",
    question: "Can you customize PPC packages based on my specific business needs?",
    answer: `
      We understand the unique and different objectives of every business. Our experts can personalize PPC packages to your specific sector, goals, and budget, guaranteeing you get a tailored solution that matches your needs. After a proper consultation with our professionals, you can understand what strategies and funding would be most suitable for your business.
    `,
  },
  {
    id: "Ten",
    question: "How quickly can I expect to see results from the PPC campaigns? Can you target specific geographic locations with your PPC packages?",
    answer: `
      The result of the campaign is proportional to several elements such as competition, industry, and campaign scope. While some businesses see quick advantages, others may require several weeks to optimize and produce significant profits fully. Yes, our pay-per-click packages do contain geographic targeting options, utilizing which you can target your advertising to specific regions, cities, or nations, ensuring that you reach the proper audience. This way, you can optimize every penny spent on the services as per your requirement.
    `,
  },
  {
    id: "Eleven",
    question: "How do you determine the budget and ad spend for each package?",
    answer: `
    Our professional team assesses your business objectives, competition, and target audience to calculate the most appropriate budget and ad spend. After analyzing those aspects, we then make a project plan to maximize your investment results while remaining inside your financial comfort zone.
    `,
    },
  {
    id: "Twelve",
    question: "Can you target specific geographic locations with your PPC packages?",
    answer: `
      Yes, our pay-per-click packages do contain geographic targeting options, utilizing which you can target your advertising to specific regions, cities, or nations, ensuring that you reach the proper audience. This way, you can optimize every penny spent on the services as per your requirement.
    `,
  },
  {
    id: "Thirteen",
    question: "Does your package contain keyword research and ad copywriting services?",
    answer: `
      Yes, all of our PPC packages involve extensive keyword research to regulate the most relevant and effective terms for your campaign. Additionally, we offer expert ad copywriting solutions to help you create compelling and engaging ads that will increase clicks and conversions.
    `,
  },
  {
    id: "Fourteen",
    question: "Do you have any success stories or case studies from previous clients using your PPC packages?",
    answer: `
      Yes, we have a portfolio of success stories and case studies demonstrating how our PPC packages have assisted organizations in reaching their objectives. We'd be delighted to share these examples with you during our consultation.
    `,
  },
  {
    id: "Fifteen",
    question: "Will you track the return on investment (ROI) for my PPC campaigns?",
    answer: `
      Indeed! Tracking ROI is an essential component of our pay-per-click services. We employ modern analytics tools to observe important performance data, convert leads, and offer you thorough information on the success of your campaigns. With our reporting on performance metrics, you'll be able to determine the proficiency and results of our services.
    `,
  },
  {
    id: "Sixteen",
    question: "How do I know which PPC package is best suited for my business?",
    answer: `
      During our consultation, we'll review your business objectives, target audience, and budget to offer the best PPC package for your needs. Here, we'll lay out all the service offerings in the plan and advise you on the methods best suited for your business's online growth.
    `,
  },
  {
    id: "Seventeen",
    question: "Are there any long-term contracts or commitments?",
    answer: `
      We provide flexible terms and do not promote long-term contracts. Therefore, you can select a package that suits your objectives, and we offer opportunities for changes based on your changing business demands. If you want to discontinue, then you can easily do that by selecting short monthly plans.
    `,
  },
  {
    id: "Eighteen",
    question: "What kind of support and communication can I expect throughout the campaign?",
    answer: `
      Our team will provide you with regular updates, open communication, and devoted support. The project manager will provide comprehensive performance reports and is always accessible to answer your inquiries and resolve your problems. Although if you have any further queries or require clarification, please get in touch with our staff, and we will gladly assist you.
    `,
  },
];



export default function PpcPackages() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        name: "What are PPC packages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PPC packages, or Pay-Per-Click packages, are comprehensive advertising solutions designed to drive targeted traffic through keyword research, ad creation, campaign management, and performance tracking.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a PPC package cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PPC package pricing varies based on business goals, audience, and campaign scope. Tech2Globe offers flexible pricing with Basic, Standard, and Premium packages.",
        },
      },
      {
        "@type": "Question",
        name: "How can PPC packages benefit my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PPC packages deliver immediate targeted traffic, improve brand visibility, generate quality leads, and provide measurable ROI with full budget control.",
        },
      },
      {
        "@type": "Question",
        name: "Can PPC packages be customized?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our PPC experts customize packages based on your industry, goals, and budget to ensure the most effective strategy.",
        },
      },
      {
        "@type": "Question",
        name: "Do PPC packages include keyword research and ad copywriting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All PPC packages include in-depth keyword research and professional ad copywriting to maximize clicks and conversions.",
        },
      },
      {
        "@type": "Question",
        name: "Will you track ROI for PPC campaigns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We track ROI using advanced analytics tools and provide transparent performance reports.",
        },
      },
      {
        "@type": "Question",
        name: "Are there long-term contracts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We offer flexible monthly plans with no long-term commitments.",
        },
      },
      {
        "@type": "Question",
        name: "Can PPC campaigns target specific locations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our PPC packages support geographic targeting at city, regional, or country levels.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can I see results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Some businesses see immediate results, while others may need several weeks for optimization depending on competition and industry.",
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
      <Breadcrumb parentName="Services" pageName="Ppc Packages" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <p className="mb-5">Our high-impact PPC packages are tailored to maximize ROI and boost your online visibility. With comprehensive keyword research and advanced ad targeting, our experts ensure top ad placements and increased click-through rates. Benefit from dedicated account management and real-time performance reports to optimize your campaigns effectively. Dominate the competition with our cutting-edge PPC strategies and experience unmatched growth by driving maximum traffic and boosting conversions with expertly managed pay-per-click campaigns. Unlock your business's true potential with tailored ppc packages designed to elevate your brand above the competition. Don't miss out on high ppc packages designed for maximum impact. Choose our premium ppc packages to accelerate your business's success today!</p>
              </div>


              <div className={Style.ContentDiv}>
                <div class="table-responsive">
                  <table class="table table-striped packages-table">
                    <thead>
                      <tr>
                        <th class="path-th main-th" width="20%">
                          <h2>
                            Activity
                          </h2>
                        </th>
                        <th class="path-th grey" width="20%">
                          <h3>Startup
                          </h3>
                          <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                        </th>
                        <th class="path-th red" width="20%">
                          <h3>Medium
                          </h3>
                          <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                        </th>
                        <th class="path-th dark-grey" width="20%">
                          <h3>Growth
                          </h3>
                          <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                        </th>
                        <th class="path-th dark-grey" width="20%">
                          <h3>Customized
                          </h3>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="td-left">
                          <h3>Ad Budget</h3>
                        </td>
                        <td>
                          Upto $2,000
                        </td>
                        <td>
                          $2,000 - $5,000
                        </td>
                        <td>
                          $5,000 - $10,000
                        </td>
                        <td>
                          Above $10,000
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Networks (Google, Bing)</h3>
                        </td>
                        <td>
                          Any 1
                        </td>
                        <td>
                          Any 1
                        </td>
                        <td>
                          Both
                        </td>
                        <td>
                          -
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Ad Account Setup (One-Time)*</h3>
                        </td>
                        <td colspan="3" rowspan="2">
                          <button class="btn btn-light" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                        </td>
                        <td>
                          -
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Landing Page Creation*</h3>
                        </td>
                        <td>
                          -
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Est. Return on Investment (ROI)**</h3>
                        </td>
                        <td>
                          Upto 2X
                        </td>
                        <td>
                          2X - 3X
                        </td>
                        <td>
                          3X - 5X
                        </td>
                        <td>
                          -
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Minimum Duration</h3>
                        </td>
                        <td>
                          3 Months
                        </td>
                        <td>
                          3 Months
                        </td>
                        <td>
                          3 Months
                        </td>
                        <td>
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="5">Campaign Setup</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Campaign Creation</h3>
                        </td>
                        <td>
                          <span>Upto 2</span>
                        </td>
                        <td>
                          <span>Upto 4</span>
                        </td>
                        <td>
                          <span>Upto 8</span>
                        </td>
                        <td>
                          <span>-</span>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>No. of Keywords</h3>
                        </td>
                        <td>Upto 100 Keywords</td>
                        <td>100 - 200 Keywords</td>
                        <td>200 - 400 Keywords</td>
                        <td>Above 400 Keywords</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Search/Text Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>
                          -
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Display Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>
                          -
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Gmail Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>
                          -
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Remarketing Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>
                          -
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>App Installation Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>
                          -
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Conversion Tracking</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="5">Campaign Management</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Competitor Analysis</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>
                          -
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Keywords Optimization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>
                          -
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Landing Page Suggestion</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>
                          -
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>A/B Testing</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Ad Copy Optimization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Keyword Bid Optimization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>CTR Analysis</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>ROI Analysis</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><a href="https://tech2globe.com/contact-us" class="btn btn-danger">Contact Us</a></td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="5">Reporting</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Campaign Performance Report</h3>
                        </td>
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                        <td>Weekly</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Activity Report</h3>
                        </td>
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                        <td>Weekly</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Dedicated Resource</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><a href="https://tech2globe.com/contact-us" class="btn btn-danger">Contact Us</a></td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="5">Customer Support</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Email, Chat (WhatsApp, Skype, Slack)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Voice Support</h3>
                        </td>
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                        <td>Weekly</td>
                        <td><a href="https://tech2globe.com/contact-us" class="btn btn-danger">Contact Us</a></td>
                      </tr>
                    </tbody>
                  </table>
                  <small>*Additional Cost | **After 3 Months</small>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section >

      <FaqSection faqs={faqs} />


    </>
  )
};