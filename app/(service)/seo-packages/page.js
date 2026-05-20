import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "Best SEO Packages | Result Driven Affordable SEO Plan",
  description: "Choose the best SEO packages from Tech2Globe to improve your visibility on Google SERPs. Backed by 14+ years of SEO experience, latest techniques, and a free quote.",
  keywords: [
    "SEO Packages",
    "SEO Prices",
    "SEO Pricing",
  ],
  alternates: {
    canonical: "https://www.tech2globe.com/seo-packages",
  },
  openGraph: {
    title: "SEO Packages | SEO Packages India | SEO Services Packages",
    description: "Looking for SEO packages but worried about budget? Tech2Globe provides affordable SEO packages in India with guaranteed results to boost ROI.",
    url: "https://www.tech2globe.com/seo-packages",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Packages | SEO Packages India | SEO Services Packages",
    description: "Looking for SEO packages but worried about budget? Tech2Globe provides affordable SEO packages in India with guaranteed results to boost ROI.",
  },
};

const pageHeaderData = {
  title: "SEO Packages & Pricing",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};


const faqs = [
  {
    id: "One",
    question: "What Are SEO Packages?",
    answer: `
      Tech2Globe Web Solution's SEO Packages are all-inclusive collections of search engine optimization services. These packages consist of top-of-the-line SEO strategies to increase the visibility of your website on search engines, increase organic traffic, and strengthen your online presence. Furthermore, each package offers various services specifically designed to address various corporate goals and objectives. The packages represent all those factors and tasks we follow to ensure your website or content is optimized for search engines.
    `,
  },
  {
    id: "Two",
    question: "What should be included in SEO Packages to get good results?",
    answer: `
      Our SEO packages often contain a variety of services, including technical SEO, performance tracking, link building, content development, keyword research, on-page optimization, and link building. This all-encompassing strategy increases the likelihood of producing large and long-lasting effects. However, you may refer to our different packages to get a complete idea of our offerings and all the strategies and tasks we'll be performing.
    `,
  },
  {
    id: "Three",
    question: "What are monthly SEO Packages?",
    answer: `
      We have three major Monthly SEO Packages: Startup, Medium, and Growth. All these packages have different service inclusions and SEO solutions. These services offer continuing assistance with SEO and initiatives to raise the rankings and functionality of your website on search engines. Apart from that, we have a custom plan option, where we can quote you a package based on the objective requirements of your business.
    `,
  },
  {
    id: "Four",
    question: "Will I be able to change my SEO Packages later on?",
    answer: `
      Yes, your SEO Package can be upgraded or downgraded as necessary. We know that the search engine performance of a company can change over time. To adapt the package to fit your changing goals, our staff will work directly with you to recommend the best practices and solutions.
    `,
  },
  {
    id: "Five",
    question: "Is Monthly SEO Necessary to see results?",
    answer: `
      SEO is a consistent effort to make your place in SERPs. These practices are required to reap significant results from SEO. Monthly SEO packages guarantee that your website maintains its competitiveness and responds to changes in search engine algorithms, increasing the likelihood of long-lasting and sustainable results.
    `,
  },
  {
    id: "Six",
    question: "What does your custom SEO Package contain?",
    answer: `
      Our custom SEO packages are made to fit your needs and price range. For the greatest results for your company, it combines on-page and off-page optimization, content development, local SEO, content marketing, and other specialized services, depending on your demands. Additionally, you can plan out the services based on whether you are a new company or an existing business looking to enhance their visibility.
    `,
  },
  {
    id: "Seven",
    question: "Do your SEO Packages contain website content?",
    answer: `
      Yes, the web content services are part of our SEO packages. To raise your website's search engine rankings and successfully engage your audience, our writers will produce high-quality, SEO-friendly material, including blog posts, articles, and optimized product/service descriptions.
    `,
  },
  {
    id: "Eight",
    question: "How should I determine which SEO Packages would be best suited for my business?",
    answer: `
      Our industry experts will thoroughly analyze your website, industry, competitors, and company objectives. Based on the findings of this assessment, we will suggest the SEO Package that best suits your goals. Moreover, we will try to match your budget constraints while yielding desirable results.
    `,
  },
  {
    id: "Nine",
    question: "What do SEO Experts Do?",
    answer: `
      At Tech2Globe Web Solution, our SEO specialists have in-depth expertise and experience optimizing websites for search engines. Furthermore, to boost rankings and increase organic traffic to your website, they do in-depth keyword research, carry out on-page and off-page optimizations, monitor website performance, analyze data, and implement strategies. Additionally, our experts follow the advanced strategies required to make your business stand out from the competition.
    `,
  },
  {
    id: "Ten",
    question: "How long will it take for my website to see results?",
    answer: `
      The time it takes for SEO results to appear varies based on several variables, including the business competition, the existing performance of the website, and the SEO package you have chosen. Although some progress can be seen in the early stages, lasting changes frequently require a couple of months. Our team will send you regular status reports to keep you updated on the process.
    `,
  },
];

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


export default function SeoPackages() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Seo Packages" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <p className="mb-5">Are you having trouble getting your website noticed online? Tech2Globe can help you! With our SEO services, we can help you make your website stand out in search results, increase organic traffic and improve your overall visibility. Our SEO specific packages include everything you need, from keyword research to on-page optimization. We also handle monthly content creation, link building, and reporting. Our experts will design an action plan tailored to your company's goals.</p>
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
                          <h3>Startup</h3>
                          <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                        </th>
                        <th class="path-th red" width="16.66%">
                          <h3>Medium</h3>
                          <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                        </th>
                        <th class="path-th dark-grey" width="16.66%">
                          <h3>Growth                  </h3>
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
                          <h3>Total Keywords</h3>
                        </td>
                        <td>
                          Upto 30
                        </td>
                        <td>
                          Upto 50
                        </td>
                        <td>
                          Upto 100
                        </td>
                        <td rowspan="8">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-medium">Contact Us</a>
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
                          30
                        </td>
                        <td>
                          60
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Total Contextual Backlinks</h3>
                        </td>
                        <td>
                          10
                        </td>
                        <td>
                          30
                        </td>
                        <td>
                          50
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Total Traditional Backlinks</h3>
                        </td>
                        <td>50</td>
                        <td>100</td>
                        <td>200</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Service/Blog Page Targeted</h3>
                        </td>
                        <td>Upto 10</td>
                        <td>Upto 25</td>
                        <td>Upto 50</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Organic Ranking Growth Top 10 (%)**</h3>
                        </td>
                        <td>
                          20-25%
                        </td>
                        <td>
                          25-40%
                        </td>
                        <td>
                          40-60%
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Minimum Time Period</h3>
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
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Backlink Analysis </h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
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
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
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
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>SEMRUSH Audit Report</h3>
                        </td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Keywords Research &amp; Analysis</h3>
                        </td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Baseline Ranking Report</h3>
                        </td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Keywords URL Mapping</h3>
                        </td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Competitor Analysis Report (No. of Competitor)</h3>
                        </td>
                        <td> 2</td>
                        <td> 3</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Screaming Frog Report (Customized)</h3>
                        </td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Broken Links Check</h3>
                        </td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Mobile Usability Check</h3>
                        </td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="5">On Page Tasks</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>SEO Friendly URLs (URL Rewriting)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td rowspan="5">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Meta Tag, Header Tag, ALT, Title Tag Optimization*</h3>
                        </td>
                        <td>
                          Upto 20
                        </td>
                        <td>
                          Upto 50
                        </td>
                        <td>
                          Upto 100
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
                          <h3>Webmaster Tools - Crawl Error Resolution</h3>
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
                          <h3>Website Page Load Optimization</h3>
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img src="images/services/service-inner/clip_image002.gif" alt="" />
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
                          <img src="images/services/service-inner/clip_image002.gif" alt="" />
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
                          <h3>Google Analytics Setup</h3>
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
                          <h3>Image Alt Tag Optimization</h3>
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
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img src="images/services/service-inner/clip_image002.gif" alt="" />
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
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-medium">Contact Us</a>
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
                          <h3>Q&amp;A Submissions (Quora)</h3>
                        </td>
                        <td>
                          5
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
                        <td>
                          0
                        </td>
                        <td>
                          4
                        </td>
                        <td>
                          8
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Premium Guest Posting***</h3>
                        </td>
                        <td>
                          Additional Charges
                        </td>
                        <td>
                          Additional Charges
                        </td>
                        <td>
                          Additional Charges
                        </td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="5">Off Page Optimization</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Content Curation/Syndication</h3>
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
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Social Bookmarking</h3>
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
                          <h3>Social Sharing</h3>
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
                          <h3>PPT/PDF Submission</h3>
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
                          <h3>Web 2.0 Profile Creation</h3>
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
                        <td class="full-row" colspan="5">Local Optimization</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google My Business Setup</h3>
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
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Bing Local Listing Setup</h3>
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
                          <h3>Local Business Listings</h3>
                        </td>
                        <td>
                          0
                        </td>
                        <td>
                          50
                        </td>
                        <td>
                          10
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Local Company Profile Creation</h3>
                        </td>
                        <td>
                          0
                        </td>
                        <td>
                          50
                        </td>
                        <td>
                          10
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Review Postings</h3>
                        </td>
                        <td>
                          0
                        </td>
                        <td>
                          10
                        </td>
                        <td>
                          20
                        </td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="5">SEO Reporting</td>
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
                        <td>
                          Weekly
                        </td>
                        <td rowspan="5">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-medium">Contact Us</a>
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
                          <h3>SEO Activity Report</h3>
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
                          <h3>Action Plan</h3>
                        </td>
                        <td>
                          Quarterly
                        </td>
                        <td>
                          Quarterly
                        </td>
                        <td>
                          Quarterly
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
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td rowspan="4">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Voice Support</h3>
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
                          <h3>Project Dashboard</h3>
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
                          <h3>Monthly SEO Consulting (Hrs)</h3>
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
                      </tr>
                    </tbody>
                  </table>
                  <p>**By the End of 6 Months | **Top 10 Organic Keywords is for the SOV and not the keywords count | ***Niche Based High Quality Sites</p>
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