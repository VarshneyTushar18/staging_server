import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import FaqSection from "@/app/components/services/faqs/faqs";

export const metadata = {
  title: "Ecommerce SEO Packages @ Sales-Driven Ecommerce Plans",
  description:
    "Ecommerce SEO packages to boost your sales and enhance ROI. Tech2Globe experts use the latest ecommerce SEO techniques to improve your visibility on Google SERP.",
  keywords: ["ecommerce SEO packages", "ecommerce SEO prices"],
  alternates: {
    canonical: "https://www.tech2globe.com/ecommerce-seo-packages",
  },
  openGraph: {
    title: "Ecommerce SEO Packages @ Sales-Driven Ecommerce Plans",
    description:
      "Boost sales and ROI with ecommerce SEO packages.",
    url: "https://www.tech2globe.com/ecommerce-seo-packages",
    siteName: "Tech2Globe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce SEO Packages",
    description: "Boost your ecommerce visibility with SEO.",
  },
};

const pageHeaderData = {
  title: "Ecommerce SEO Packages & Pricing",
  backgroundImage: "/images/services/pack-banner.jpg",
  shortBanner: true
};


const caseStudies = [
  {
    "id": 1,
    "title": "Product Visibility & Drive Sales 0.1",
    "image": "/images/services/service-inner/untitled-design-20.png",
    "description": "The client has been in the lighting business since 2011, specializing...",
    "docLink": "https://tech2globe.com/casestudies-docs1/Case Study 2 - Sales Increase in different categories-converted.pdf"
  },
  {
    "id": 2,
    "title": "EBC and Storefront",
    "image": "/images/services/service-inner/ebca.png",
    "description": "Client deals in Health & Household items and Pet Supplies products on Amazon and wants...",
    "docLink": "https://tech2globe.com/casestudies-docs1/Case Study 3 - EBC and Storefront-converted.pdf"
  },
  {
    "id": 3,
    "title": "Amazon PPC",
    "image": "/images/services/service-inner/amazon-ppc.png",
    "description": "Clients came to us with a range of Amazon PPC management difficulties....",
    "docLink": "https://tech2globe.com/casestudies-docs1/Amazon PPC-converted.pdf"
  },
  {
    "id": 4,
    "title": "Product Visibility & Drive Sales",
    "image": "/images/services/service-inner/untitled-design-18.png",
    "description": "Client has been in the business of selling fine grooming products for over 15 years......",
    "docLink": "https://tech2globe.com/casestudies-docs1/Case Study 1 - Sales Increase in different categories-converted.pdf"
  },
  {
    "id": 5,
    "title": "e-Commerce Store for Luxury Goods",
    "image": "/images/services/service-inner/e-commerce-store-for-luxury-goods.png",
    "description": "It is the ultimate luxury fashion destination for the distribution and retail of Italian, French…",
    "docLink": "https://tech2globe.com/casestudies-docs1/E-Commerce Store for Luxury Goods-converted.pdf"
  },
  {
    "id": 6,
    "title": "Amazon Sale Boost",
    "image": "/images/services/service-inner/amazon-sale-boost.jpg",
    "description": "Find out the most important areas where our team required utmost attention to showcase the work from day one …",
    "docLink": "https://tech2globe.com/casestudies-docs1/amazon-india-case-study.pdf"
  },
  {
    "id": 7,
    "title": "About Drop shipping",
    "image": "/images/services/service-inner/about-drop-shipping.jpg",
    "description": "Drop shipping is an e-retail term where someone facilitates the selling and delivery of an online product without …",
    "docLink": "https://tech2globe.com/casestudies-docs1/Case-Study-Drop-Shipping.pdf"
  },
  {
    "id": 8,
    "title": "Migration from Sooq to Amazon.ae",
    "image": "/images/services/service-inner/migration-from-sooq-to-amazon-ae.jpg",
    "description": "Forgiving the best solution to our client and comprehensive support is our specialty which we successfully …",
    "docLink": "https://tech2globe.com/casestudies-docs1/Migration-from-Sooq-to-AmazonAE.pdf"
  },
  {
    "id": 9,
    "title": "e-Commerce Multivendor Store 1.0",
    "image": "/images/services/service-inner/e-commerce-multivendor-store-1-0.jpg",
    "description": "Our client approached us for Ecommerce services that included multi-vendor customized solutions along with …",
    "docLink": "https://tech2globe.com/casestudies-docs1/E-commerce version upgrade (1).pdf"
  },
  {
    "id": 10,
    "title": "e-Commerce Store Version Upgrade",
    "image": "/images/services/service-inner/e-commerce-store-version-upgrade.jpg",
    "description": "The previous version had issues with accepting payments via credit cards, so one of the improvement areas was to set …",
    "docLink": "https://tech2globe.com/casestudies-docs/E-commerce version upgrade.pdf"
  },
  {
    "id": 11,
    "title": "Promotion of 2 x Shopify Stores",
    "image": "/images/services/service-inner/promotion-of-2-x-shopify-stores.png",
    "description": "In 2.5 periods of month projects handling, we’ve generated more than 6,000 Facebook Page Followers on “Fashion & Cosmetic”…",
    "docLink": "https://tech2globe.com/casestudies-docs1/Promotion of 2 x Shopify Stores-converted.pdf"
  }
]


const faqs = [
  {
    id: "One",
    question: "Are Ecommerce SEO Packages Worth it?",
    answer: `
      Absolutely! In today's business landscape, the rage to excel online is everything. Thus, investing in SEO services for e-commerce is a wise investment to grow on the web. Tech2Golbe helps you to enhance organic traffic to your website, improve its search engine exposure, and increase revenue. Additionally, our Ecommerce SEO Packages are designed to boost your online visibility by optimizing your website and focusing on essential keywords, increasing conversion rates and revenue.
    `,
  },
  {
    id: "Two",
    question: "What if you are unable to deliver the results?",
    answer: `
      Our team of professionals is committed to providing every client with the finest outcomes possible. In the unusual event that we run into difficulties, we will review our plans and make the necessary changes to ensure advancement. With a 99% customer satisfaction rate and 7000+ successful projects, we try to stay within our commitments. Moreover, customer happiness is our top priority, and we'll work hard to address any issues and deliver the results you're hoping for.
    `,
  },
  {
    id: "Three",
    question: "What is the cost of your monthly Ecommerce SEO Packages?",
    answer: `
      The price of our monthly Ecommerce SEO packages varies based on the demands and objectives of your company. Furthermore, all our services are tailored to accommodate various budget limits. You may contact us via mail at info@tech2globe.com or connect with our team for more specific price information. We'll gladly provide a personalized quote matching your company's goals and budget constraints.
    `,
  },
  {
    id: "Four",
    question: "How frequently will I get an update on progress of work done on my website?",
    answer: `
      We value communication and customer relation transparency with our customers. Therefore, we ensure to regularly (weekly and monthly) update you on the status of the Ecommerce SEO campaign for your business. Furthermore, our experts will deliver thorough reports explaining the key performance indicators (KPIs) and our work's effect on your website's functionality.
    `,
  },
  {
    id: "Five",
    question: "Does your Ecommerce SEO Packages contain website content?",
    answer: `
      Yes, website content services are included in our Ecommerce SEO packages. As a leading web solution company, we are deeply aware of the significance of producing high-quality, SEO-friendly content for escalating online visibility. To increase your website's exposure and appeal to your target audience, our team of talented writers will create quality product descriptions, category pages content, and other crucial material.
    `,
  },
  {
    id: "Six",
    question: "Will you help me finalize the keywords best suited for my products?",
    answer: `
      Definitely! Every SEO campaign revolves around a few foundational aspects, and keywords are one of them. To find the most pertinent and effective keywords for your products, our team will undertake extensive keyword research. Additionally, we ensure to stay at the forefront of the industry by using tools like Google Keyword Planner, SEMRUSH, Helium 10, Ahrefs, and more. We aim to increase the possibility of conversions by deliberately directing qualified traffic to your website using these keywords.
    `,
  },
  {
    id: "Seven",
    question: "How should I determine which Ecommerce SEO Packages would be best suited ?",
    answer: `
      Several factors, including the online store's size, target market, and company goals, can help you in choosing the Ecommerce SEO package that best suits your interest. To offer the best plan that fits your needs and budget, our experts will analyze your website in-depth and discuss with you your goals and aspirations for the project.
    `,
  },
  {
    id: "Eight",
    question: "How will you measure the success of your Ecommerce SEO Campaign?",
    answer: `
      Regulating quality checks makes us more coherent in delivering results per clients' expectations. Utilizing a variety of performance measures, including organic traffic growth, keyword ranks, conversion rates, and revenue earned, we evaluate the effectiveness of our Ecommerce SEO campaigns. Our team makes data-driven decisions and tracks progress using sophisticated and latest analytics tools to ensure the campaign produces accurate results for your company.
    `,
  },
  {
    id: "Nine",
    question: "How long will it take for my website to generate sales?",
    answer: `
      The length of time it takes to generate sales through SEO varies depending on a number of variables. These factors include how competitive your business is, the keywords you use, how well-positioned your website is, and how your on-page and off-page are optimized. Although SEO is a long-term plan, you should start noticing changes in organic traffic and rankings within a few months. To have long-lasting benefits, you need to be persistent and patient.
    `,
  },
  {
    id: "Ten",
    question: "How would I know if you have expertise in Ecommerce SEO or Not?",
    answer: `
      We at Tech2Globe Web Solution have a history of developing Ecommerce SEO strategies for various clients across different industries. Our SEO specialists have years of experience and knowledge of the constantly changing search engine algorithms. Additionally, we have received glowing evaluations and recommendations from content customers, supporting our Ecommerce SEO knowledge. Please feel free to look through our client testimonials and portfolio to get a better sense of our talents.
    `,
  },
];


export default function EcommerceSeoPackages() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Ecommerce Seo Packages" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

              <div className={Style.ContentDiv}>
                <p className="mb-5 text-center">Our Ecommerce SEO packages are tailored to boost your online store's visibility and revenue. If you are struggling to drive traffic and generate sales on your ecommerce website then don’t fret with our comprehensive keyword research, on-page optimization, and technical SEO strategies, we'll ensure that your products rank higher in search engine results. Our team of experts will also optimize your product descriptions, implement effective link building campaigns, and provide regular performance reports. Don't miss out on potential customers; invest in our Ecommerce SEO packages today and watch your online store thrive.</p>
              </div>

              <div className={Style.ContentDiv}>
                <div class="table-responsive">
                  <table class="table table-striped packages-table">
                    <thead>
                      <tr>
                        <th class="path-th main-th" width="16.66%">
                          <h2>
                            Activity
                          </h2>
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
                          <h3>Custom
                          </h3>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="td-left">
                          <h3>Total Keywords</h3>
                        </td>
                        <td>
                          Upto 30
                        </td>
                        <td>
                          Upto 55
                        </td>
                        <td>
                          Upto 120
                        </td>
                        <td rowspan="5">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-normal">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Primary Focused Keywords</h3>
                        </td>
                        <td>
                          10
                        </td>
                        <td>
                          20
                        </td>
                        <td>
                          40
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Supporting Keywords</h3>
                        </td>
                        <td>
                          20
                        </td>
                        <td>
                          35
                        </td>
                        <td>
                          80
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Total Contextual Backlinks</h3>
                        </td>
                        <td>
                          5
                        </td>
                        <td>
                          20
                        </td>
                        <td>
                          35
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Total Traditional Backlinks</h3>
                        </td>
                        <td>
                          Upto 50
                        </td>
                        <td>
                          Upto 100
                        </td>
                        <td>
                          Upto 200
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Best Suited For*</h3>
                        </td>
                        <td>
                          Upto 25 Products
                        </td>
                        <td>
                          25-50 Products
                        </td>
                        <td>
                          50-80 Products
                        </td>
                        <td>Above 80</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Categories Targeted</h3>
                        </td>
                        <td>
                          2
                        </td>
                        <td>
                          5
                        </td>
                        <td>
                          10
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Conversion Growth**</h3>
                        </td>
                        <td>
                          2X
                        </td>
                        <td>
                          3X to 5X
                        </td>
                        <td>
                          5X to 8X
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Minimum Time Period*</h3>
                        </td>
                        <td>
                          3 Months
                        </td>
                        <td>
                          3 Months
                        </td>
                        <td>
                          6 Months
                        </td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="5">Initial Review &amp; Analysis Tasks</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Full Website Audit</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td rowspan="5">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-normal">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Backlink Analysis </h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Duplicate Content Check</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google Penalty Check</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>SEMRUSH Audit Report</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Keywords Research &amp; Analysis</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Baseline Ranking Report</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Keywords URL Mapping</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Competitor Analysis Report (No. of Competitor)</h3>
                        </td>
                        <td>
                          2
                        </td>
                        <td>
                          3
                        </td>
                        <td>
                          5
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Screaming Frog Report (Customized)</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Broken Links Check</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Shopping Cart Funnel Analysis &amp; Recommendation</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Mobile Usability Check</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="5">Ecommerce On Page Tasks</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>SEO Friendly URLs (URL Rewriting)</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td rowspan="5">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-normal">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Meta Tag, Header Tag, ALT, Title Tag Optimization</h3>
                        </td>
                        <td>
                          20
                        </td>
                        <td>
                          60
                        </td>
                        <td>
                          100
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Existing Website Content Optimization</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>New Page Creation</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Schema Markup Suggestions</h3>
                        </td>
                        <td>2</td>
                        <td>3</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Webmaster Tools - Crawl Error Resolution</h3>
                        </td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Website Page Load Optimization</h3>
                        </td>
                        <td>
                          Desktop
                        </td>
                        <td>
                          Desktop/Mobile
                        </td>
                        <td>
                          Desktop/Mobile
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Custom 404 Error Page Setup</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Internal Linking &amp; Anchor Text Optimization</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Robots.txt Creation &amp; Analysis</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>XML Sitemap Creation &amp; Analysis</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google Webmaster Setup</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google Analytics Set-up with Ecommerce Conversion Tracking</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Product Image Alt Tag Optimization</h3>
                        </td>
                        <td>
                          Up to 50
                        </td>
                        <td>
                          Up to 100
                        </td>
                        <td>
                          Up to 200
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Core Web Vital Analysis &amp; Recommendation</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>URL Canonicalization Check</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Navigation Analysis &amp; Recommendations</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Header &amp; Footer Optimization</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Product Optimization Suggestion (UI/UX)</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>E-E-A-T Suggestion</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Breadcrumb Implementation</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="5">Content Marketing</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Guest Blog Writing</h3>
                        </td>
                        <td>
                          2
                        </td>
                        <td>
                          5
                        </td>
                        <td>
                          10
                        </td>
                        <td rowspan="5">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-normal">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Article Writing &amp; Submission</h3>
                        </td>
                        <td>
                          3
                        </td>
                        <td>
                          10
                        </td>
                        <td>
                          15
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Press Release Writing &amp; Submission</h3>
                        </td>
                        <td>
                          0
                        </td>
                        <td>
                          1
                        </td>
                        <td>
                          2
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Blog Posting</h3>
                        </td>
                        <td>0</td>
                        <td>4</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Premium Guest Posting***</h3>
                        </td>
                        <td>Additional Charges</td>
                        <td>Additional Charges</td>
                        <td>Additional Charges</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="5">Off Page Optimization</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Content Curation/Syndication</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td rowspan="5">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-normal">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Social Bookmarking/Sharing</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Product Image Submissions</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Product Video Submissions (If Available)</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Classified Submissions</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img src="images/services/service-inner/clip_image002.gif" alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Coupons Distribution (If Available)</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img src="images/services/service-inner/clip_image002.gif" alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Coupons Distribution (If Available)</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img src="images/services/service-inner/clip_image002.gif" alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Competitor Links Analysis &amp; Creation</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img src="images/services/service-inner/clip_image002.gif" alt="" />
                        </td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="5">Ecommerce SEO Reporting </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google Analytics Report</h3>
                        </td>
                        <td>
                          Monthly
                        </td>
                        <td>
                          Bi-Weekly
                        </td>
                        <td>Weekly</td>
                        <td rowspan="5">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-normal">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Keyword Ranking Report</h3>
                        </td>
                        <td>
                          Monthly
                        </td>
                        <td>
                          Bi-Weekly
                        </td>
                        <td>
                          Weekly
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Progress Report</h3>
                        </td>
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                        <td>Weekly</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>SEO Activity Report</h3>
                        </td>
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                        <td>Weekly</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Action Plan</h3>
                        </td>
                        <td>
                          Quarterly
                        </td>
                        <td>
                          Quarterly
                        </td>
                        <td>
                          Monthly
                        </td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="5">Customer Support</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Email, Chat (What’sApp, Skype, Slack)</h3>
                        </td>
                        <td>
                          Monthly
                        </td>
                        <td>
                          Bi-weekly
                        </td>
                        <td>
                          Weekly
                        </td>
                        <td rowspan="5">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-normal">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>SEO Activity Report</h3>
                        </td>
                        <td>
                          Monthly
                        </td>
                        <td>
                          Bi-weekly
                        </td>
                        <td>
                          Weekly
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Monthly Progress Report</h3>
                        </td>
                        <td>
                          Monthly
                        </td>
                        <td>
                          Bi-weekly
                        </td>
                        <td>
                          Weekly
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google Analytics Report</h3>
                        </td>
                        <td>
                          Monthly
                        </td>
                        <td>
                          Bi-weekly
                        </td>
                        <td>
                          Weekly
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>*Product Variation is a Separate Product | **By the End of 6 Months | ***Niche Based High Quality Sites</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section >

      <FaqSection faqs={faqs} />

      <div className="PhotoEditCaseStudies">
        <CaseStudiesService caseStudies={caseStudies} />
      </div>


    </>
  )
};