import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "Local SEO Packages to Grow Local Presence Online",
  description: "The Local SEO Packages offered by us cater to growing your business’s local presence through advanced Local SEO techniques. Growth-oriented and affordable plans.",
  keywords: [
    "Local SEO Packages",
    "Local SEO Prices",
  ],
  alternates: {
    canonical: "https://www.tech2globe.com/local-seo-packages",
  },
  openGraph: {
    title: "Local SEO Packages to Grow Local Presence Online",
    description: "The Local SEO Packages offered by us cater to growing your business’s local presence through advanced Local SEO techniques. Growth-oriented and affordable plans.",
    url: "https://www.tech2globe.com/local-seo-packages",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Packages to Grow Local Presence Online",
    description: "The Local SEO Packages offered by us cater to growing your business’s local presence through advanced Local SEO techniques. Growth-oriented and affordable plans.",
  },
};

const pageHeaderData = {
  title: "Local SEO Packages",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};


const faqs = [
  {
    id: "One",
    question: "What is the average cost of local SEO?",
    answer: `
      The cost of local SEO Packages can vary depending on several variables, including the project's complexity, how competitive your target keywords are, and the scale of your company. We provide reasonable pricing with clear details for the best return on your investment. To know more, you may contact us via info@tech2globe.com; our experts will give you a quote based on your objectives.
    `,
  },
  {
    id: "Two",
    question: "How long does it take for my local listing to generate calls?",
    answer: `
      The time it takes for your local listing to start generating calls might vary depending on a number of variables, including the level of industry competition, the effectiveness of your local SEO efforts, and the general state of the internet market. While it can take a few weeks for some firms to begin getting calls, it might take a few months for others.
    `,
  },
  {
    id: "Three",
    question: "Is local SEO profitable?",
    answer: `
      Absolutely! Local SEO is a very profitable digital marketing technique for businesses aiming to attract local clients. Furthermore, you can raise your visibility among potential local customers by optimizing your online presence for local search. This customized strategy increases your company's conversion rates, foot traffic, and income.
    `,
  },
  {
    id: "Four",
    question: "Why should I trust you?",
    answer: `
      We at Tech2Globe Web Solution are proud of our vast experience and successful track record in executing local SEO campaigns for a large number of delighted clients. Our team of devoted experts keeps up with the most recent SEO trends and best practices to give your company a competitive edge in the online market. We prioritize communication, transparency, and quantifiable results to establish enduring trust with our clients.
    `,
  },
  {
    id: "Five",
    question: "How do I start local SEO?",
    answer: `
      With Tech2Globe Web Solution by your side, getting started with local SEO is simple. You will be led step-by-step through the procedure by our industry experts. Get in touch with us through our website contact page, and we'll arrange a meeting to learn about your company's needs and ambitions. After that, we'll create a customized local SEO package & strategy to improve your internet visibility and get more clients to your door.
    `,
  },
  {
    id: "Six",
    question: "Will you manually build local citations?",
    answer: `
      Absolutely, yes! A key component of our local SEO strategy is manual citation creation. We recognize the value of precise and consistent citations for your company on a variety of platforms. Each source is carefully created and verified by a member of our staff to ensure accuracy. This has a beneficial effect on your local search rankings and raises your online trustworthiness.
    `,
  },
  {
    id: "Seven",
    question: "Will you personalize my local SEO package?",
    answer: `
      We understand that every company is different and has specific needs. For this reason, we provide individualized local SEO packages to ensure you get the best outcomes. Our experts will analyze your company, the competitors, and your target demographic to create a unique plan that properly fits your objectives and spending limit.
    `,
  },
  {
    id: "Eight",
    question: "How much time will it take to get the top Google Maps ranking?",
    answer: `
      The time it takes to rank well on Google Maps can vary based on many factors, like your competitors, the status of your web presence at the moment, and how well your local SEO strategies are working. Our team will put much effort into enhancing your business listing, increasing visibility, and raising local ranks. Even though we cannot give you a certain timeline, we can guarantee that our well-honed techniques will produce noticeable outcomes and improve your company's Google Maps rating.
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


export default function LocalSeoPackages() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Local SEO Packages" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <p className="text-center mb-5">Choose our tailored Local SEO packages to Dominate local search results and attract more customers to your doorstep. Our expert team ensures your business stands out in the crowd, leveraging the power of local keywords and advanced optimization techniques. Maximize your online visibility and boost organic traffic with our comprehensive Local SEO services. From on-page optimization to Google My Business setup and citation building, we've got you covered. Elevate your local presence today and watch your business flourish. Discover the potential of our Local SEO package and conquer your neighborhood market.</p>
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
                          <h3>Total Keywords (Local Keywords)</h3>
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
                        <td rowspan="8">
                          <a href="https://tech2globe.com/contact-us" class="btn button-red mt-2 mx-0 fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Target</h3>
                        </td>
                        <td>
                          Local SERP + Google Maps
                        </td>
                        <td>
                          Local SERP + Google Maps
                        </td>
                        <td>
                          Local SERP + Google Maps
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Best Suited For (Professional, Institutes, service providers &amp; more)</h3>
                        </td>
                        <td>
                          Business with 1 Location
                        </td>
                        <td>
                          Business with 2 Locations
                        </td>
                        <td>
                          Business with 4 Locations
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Expected Conversion</h3>
                        </td>
                        <td>
                          Ranking on Google Maps + Lead Call
                        </td>
                        <td>
                          Ranking on Google Maps + Lead Call
                        </td>
                        <td>
                          Ranking on Google Maps/Bing Maps + Lead Call
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
                          15
                        </td>
                        <td>
                          25
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Total Traditional Backlinks</h3>
                        </td>
                        <td>
                          50
                        </td>
                        <td>
                          90
                        </td>
                        <td>
                          200
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Conversion Growth**</h3>
                        </td>
                        <td>
                          2X
                        </td>
                        <td>
                          2X to 3X
                        </td>
                        <td>
                          3X to 6X
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Minimum Time Period***</h3>
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
                        <td class="full-row" colspan="7">Initial Review &amp; Analysis Tasks</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Full Website Audit</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td rowspan="8">
                          <a href="https://tech2globe.com/contact-us" class="btn button-red mt-2 mx-0 fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>GMB Audit</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Duplicate Content Check</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google Penalty Check</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Local Keywords Research &amp; Analysis</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Baseline Ranking Report</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
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
                        <td class="full-row" colspan="5">On-Page Tasks</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Number of Locations Covered</h3>
                        </td>
                        <td>
                          1
                        </td>
                        <td>
                          2
                        </td>
                        <td>
                          3
                        </td>
                        <td rowspan="20">
                          <a href="https://tech2globe.com/contact-us" class="btn button-red mt-2 mx-0 fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>SEO Friendly URLs (URL Rewriting)</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Header (H1) Tags Optimization</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Existing Website Content Optimization</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>New Page Creation</h3>
                        </td>
                        <td><img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Schema Markup Suggestions</h3>
                        </td>
                        <td> <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td> <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td> <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Webmaster Tools - Crawl Error Resolution</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Website Page Load Optimization</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Internal Linking &amp; Anchor Text Optimization</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Robots.txt Creation &amp; Analysis</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>XML Sitemap Creation &amp; Analysis</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google Webmaster Setup</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google Analytics Setup</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Image Alt Tag Optimization</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Local Page Analysis &amp; Recommendation</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>URL Canonicalization Check</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Call Button Tracking</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Adding Local Address to Website</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google Map Embeds</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>KML Sitemap Creation</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="5">Local Search Optimization</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google My Business Profile Setup &amp; Verification</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td rowspan="7">
                          <a href="https://tech2globe.com/contact-us" class="btn button-red mt-2 mx-0 fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>GBP Optimization</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>GBP Description Optimization</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>GBP Image/Video Upload &amp; Optimization (If Provided)</h3>
                        </td>
                        <td><img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Customer Review/Ratings</h3>
                        </td>
                        <td><img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Bing &amp; Yahoo Listings</h3>
                        </td>
                        <td><img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Listing on (Yelp, Yellow Pages, Foursquare, etc).</h3>
                        </td>
                        <td><img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
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
                        <td>10</td>
                        <td rowspan="4">
                          <a href="https://tech2globe.com/contact-us" class="btn button-red mt-2 mx-0 fw-medium">Contact Us</a>
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
                          <h3>Blog Posting</h3>
                        </td>
                        <td>0</td>
                        <td>4</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Premium Local Press Release</h3>
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
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td rowspan="6">
                          <a href="https://tech2globe.com/contact-us" class="btn button-red mt-2 mx-0 fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Directory Submission</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Classifieds Submission</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>GBP Links Syndication</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>GBP Timeline Posting</h3>
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                        <td>
                          <img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" />
                        </td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="5">SEO Reporting</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google Analytics Report</h3>
                        </td>
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                        <td>Weekly</td>
                        <td rowspan="5">
                          <a href="https://tech2globe.com/contact-us" class="btn button-red mt-2 mx-0 fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Keyword Ranking Report</h3>
                        </td>
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                        <td>Weekly</td>
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
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                        <td>Weekly</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="5">Customer Support</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Email, Chat (What’sApp, Skype, Slack)</h3>
                        </td>
                        <td><img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class=" ls-is-cached lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td rowspan="5">
                          <a href="https://tech2globe.com/contact-us" class="btn button-red mt-2 mx-0 fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Voice Support</h3>
                        </td>
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                        <td>Weekly</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Project Dashboard</h3>
                        </td>
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                        <td>Weekly</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Monthly SEO Consulting (Hrs)</h3>
                        </td>
                        <td>2</td>
                        <td>5</td>
                        <td>10</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-center">*Product Variation is a Separate Product | **By the End of 6 Months | ***Niche Based High Quality Sites</p>
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