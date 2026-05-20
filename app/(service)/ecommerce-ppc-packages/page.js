import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "Ecommerce PPC Packages | Maximum Sales at Minimum Cost",
  description: "Ecommerce PPC packages designed to drive maximum product sales at minimum cost. Affordable ecommerce PPC pricing with free PPC audits, account setup, and expert management.",
  keywords: [
    "Ecommerce PPC Packages",
    "Ecommerce PPC Prices",
    "Ecommerce PPC Pricing",
    "Ecommerce Pay Per Click Packages",
  ],
  alternates: {
    canonical: "https://www.tech2globe.com/ecommerce-ppc-packages",
  },
  openGraph: {
    title: "Ecommerce PPC Packages | Maximum Sales at Minimum Cost",
    description: "Ecommerce PPC packages to drive maximum sales at minimum cost. Affordable ecommerce PPC pricing with free PPC audits, account setup, and expert campaign management.",
    url: "https://www.tech2globe.com/ecommerce-ppc-packages",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce PPC Packages | Maximum Sales at Minimum Cost",
    description: "Ecommerce PPC packages to drive maximum sales at minimum cost. Affordable ecommerce PPC pricing with free PPC audits, account setup, and expert campaign management.",
  },
};

const pageHeaderData = {
  title: "Affordable Ecommerce PPC Packages",
  backgroundImage: "/images/services/ecommerce-ppc-packages-11-8-2023.jpg",
  shortBanner: true
};


const faqs = [
  {
    id: "One",
    question: "What are Ecommerce PPC Packages, and how can they benefit my online store?",
    answer: `
      Ecommerce PPC Packages are a component of Tech2Globe's comprehensive solutions, designed to advertise and increase the visibility of your online store while driving targeted traffic through pay-per-click (PPC) campaigns. These include strategic planning and the placement of adverts on different internet platforms, which will dramatically increase your company's exposure, attract new consumers, and eventually increase sales.
    `,
  },
  {
    id: "Two",
    question: "How quickly can I expect to see results and increased sales from the PPC campaigns?",
    answer: `
      The success of your marketing is proportional to other elements such as competition and market circumstances. However, you may expect to see significant returns within a few weeks of launching your advertising. If you have an existing business with a PPC presence, when compared to new ecommerce sites, you will experience more effective outcomes in this situation.
    `,
  },
  {
    id: "Three",
    question: "How does Ecommerce PPC advertising work, and which platforms do you use?",
    answer: `
      Ecommerce PPC advertising entails producing attractive ads and targeting relevant business keywords. Your adverts are displayed when users search for certain phrases and words on sites such as Google and social media networks. Based on your target demographic and company goals, we optimize popular platforms such as Google Ads, Facebook Ads, and others.
    `,
  },
  {
    id: "Four",
    question: "Can I customize the Ecommerce PPC Packages to suit my specific business needs?",
    answer: `
      We believe that every firm is unique, and that goals change as the company grows. As a result, our programs can be tailored to your exact needs and interests. A simple consultation with our specialists will help you achieve what your company deserves.
    `,
  },
  {
    id: "Five",
    question: "What is the difference between startup and growth Ecommerce PPC Packages?",
    answer: `
      Our Startup Ecommerce PPC Package is designed for new enterprises who have recently entered the internet market and are seeking profitable ways to advertise themselves. This bundle is excellent for building a fundamental web presence. For businesses with an existing PPC presence, the Growth Ecommerce PPC Package strives to broaden your reach by optimizing ads to maximize profits.
    `,
  },
  {
    id: "Six",
    question: "Do you have experience working with Ecommerce businesses in my industry?",
    answer: `
      We have a vast portfolio of experience working with various ecommerce firms in various industries. Our experience and subject matter expertise enable us to tailor tactics to the specifics of your sector.
    `,
  },
  {
    id: "Seven",
    question: "How do you determine the budget and ad spend for my Ecommerce PPC campaigns?",
    answer: `
      We evaluate your brand's objectives, competition, target demographic, and industry benchmarks to develop an appropriate budget and ad spend. You can also engage with our specialists to learn about everything that coincides with your goals and maximizes performance.
    `,
  },
  {
    id: "Eight",
    question: "Are there any long-term contracts or commitments required?",
    answer: `
      Based on your needs and budget, we provide both short-term and long-term solutions. Monthly subscriptions to our packages provide greater freedom, whereas long-term contracts include additional benefits and specialized services.
    `,
  },
  {
    id: "Nine",
    question: "Can you target specific products or categories with the PPC campaigns?",
    answer: `
      Yes, our Ecommerce PPC campaigns are excellent tools that can be shaped or fine-tuned to target any specific product, service, or category, allowing you to direct your advertising efforts where they are most effective.
    `,
  },
  {
    id: "Ten",
    question: "How do I get started with your Ecommerce PPC Packages?",
    answer: `
      That is extremely straightforward! To begin, please contact us via our website or the contact information shown below, and our experienced teams will walk you through the process. Send us your requests and questions at <a href="mailto:info@tech2globe.com;">info@tech2globe.com</a> , and we'll set up a session to better understand your business.
    `,
  },
  {
    id: "Eleven",
    question: "How do you ensure my ads reach the right audience and potential buyers?",
    answer: `
      We employ the analysis after examining the audience's demographics, consumer interests, and behavior. This data connects our ad targeting technique, ensuring that your adverts are seen by relevant and prospective potential purchasers.
    `,
  },
  {
    id: "Twelve",
    question: "Can you target specific geographic locations with the Ecommerce PPC campaigns?",
    answer: `
      We can completely target any specific geographic location to ensure your adverts reach the most relevant and correct audience in that region. With targeted advertising, you'll be able to increase returns for your online store and grow your business.
    `,
  },
  {
    id: "Thirteen",
    question: "Do you offer keyword research and ad copywriting services?",
    answer: `
      Yes, as part of our services, we offer detailed keyword research and skilled ad composition. Both of these factors are critical in identifying high-performing keywords and creating captivating ad text that promotes clicks and conversions.
    `,
  },
  {
    id: "Fourteen",
    question: "Do you provide ongoing campaign optimization and management?",
    answer: `
      We do, in fact, provide ongoing campaign monitoring, optimization, and management to ensure the effectiveness of your campaigns. Furthermore, our PPC specialist will devise detailed tactics to optimize the ad campaign for optimal results.
    `,
  },
  {
    id: "Fifteen",
    question: "Can I track the return on investment (ROI) for my Ecommerce PPC campaigns?",
    answer: `
      You certainly can. We give comprehensive reports that reveal key performance data including clicks, ROI, and conversions, allowing you to assess the efficiency of your campaigns.
    `,
  },
  {
    id: "Sixteen",
    question: "What sets your Ecommerce PPC Packages apart from your competitors?",
    answer: `
      We have always believed that data is a powerful factor in the development of modern enterprises. Thus, in addition to specialized solutions, clear pricing, and a team of experts focused on accomplishing your unique goals, Tech2Globe employs data-driven techniques.
    `,
  },
  {
    id: "Seventeen",
    question: "Are there any additional fees or hidden costs in your Ecommerce PPC Packages?",
    answer: `
      No, our Ecommerce PPC Packages are all-inclusive and transparent. Tech2Globe believes in upfront pricing with no surprises. These elements are critical for establishing trust between clients and us.
    `,
  },
  {
    id: "Eighteen",
    question: "How can I measure the success and effectiveness of the Ecommerce PPC campaigns?",
    answer: `
      We offer comprehensive performance analysis and reporting on key parameters such as conversions, clicks, ROI, and more. This comprehensive analysis enables you to correctly assess the success and efficiency of your efforts.
    `,
  },
];



export default function EcommercePpcPackages() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Ecommerce Ppc Packages" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <p className="mb-5">Elevate your online store's success with our high-performance Ecommerce PPC packages. Our premium Ecommerce PPC packages are designed to drive targeted traffic and boost conversions. Our expert team crafts targeted ads to attract qualified leads, increase conversions, and maximize your ROI. From keyword research to conversion tracking, we handle it all to ensure your business thrives. With transparent Ecommerce PPC pricing, choose a package that suits your needs and budget. Turbocharge your sales and dominate the Ecommerce market with our result-oriented PPC solutions today!"</p>
              </div>


              <div className={Style.ContentDiv}>
                <div class="table-responsive">
                  <table class="table table-striped packages-table">
                    <thead>
                      <tr>
                        <th class="path-th main-th" width="16.66%">
                          <h2>Activity</h2>
                        </th>
                        <th class="path-th grey" width="16.66%">
                          <h3>Startup
                          </h3>
                          <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                        </th>
                        <th class="path-th red" width="16.66%">
                          <h3>Medium
                          </h3>
                          <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                        </th>
                        <th class="path-th dark-grey" width="16.66%">
                          <h3>Growth
                          </h3>
                          <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                        </th>
                        <th class="path-th dark-grey" width="16.66%">
                          <h3>Custom</h3>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
              
                      <tr>
                        <td class="td-left">
                          <h3>Ad Budget</h3>
                        </td>
                        <td>Upto $2,500</td>
                        <td>$2,500 - $5,000</td>
                        <td>$5,000 - $10,000</td>
                        <td>Above $10,000</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Products Detail Page (PDP)*</h3>
                        </td>
                        <td>Upto 20</td>
                        <td>Upto 50</td>
                        <td>Upto 100</td>
                        <td>Above 100</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google Merchant Setup**</h3>
                        </td>
                        <td rowspan="3" colspan="3">                  <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                        </td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Ad Account Setup (One-Time)**</h3>
                        </td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Landing Page Creation**</h3>
                        </td>
                        <td>-</td>
                      </tr>
                     
                      <tr>
                        <td class="td-left">
                          <h3>Feed Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Feed Optimization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Est. Return on Investment (ROI)***</h3>
                        </td>
                        <td>Upto 2X</td>
                        <td>2X - 3X</td>
                        <td>3X - 5X</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Minimum Duration</h3>
                        </td>
                        <td>3 Months</td>
                        <td>3 Months</td>
                        <td>3 Months</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Campaign Setup</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Networks (Google, Bing)</h3>
                        </td>
                        <td>Any 1</td>
                        <td>Any 1</td>
                        <td>Both</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Campaign Creation</h3>
                        </td>
                        <td>Upto 2</td>
                        <td>Upto 4</td>
                        <td>Upto 8</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Search Campaign</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Display Remarketing Campaign</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Standard Shopping</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Performance Max Campaign</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Advanced Remarketing Setup
                          </h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Campaign Management</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Competitor Analysis</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Asset Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Product Listings</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Audience Signal</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Inventory Exclusion</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>ROI Analysis</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Campaign Measurement &amp; Tracking</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Analytics Setup</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Tag Manager Setup</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Flow Chart Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Goal Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Funnel Visualization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Reporting</td>
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
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Customer Support</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Email, Chat (WhatsApp, Skype, Slack)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif"/></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Voice Support</h3>
                        </td>
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                        <td>Weekly</td>
                        <td>-</td>
                      </tr>
                    </tbody>
                  </table>
                  <p>*Product Landing Pages | **Additional Cost | ***Minimum 3 Months</p>
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