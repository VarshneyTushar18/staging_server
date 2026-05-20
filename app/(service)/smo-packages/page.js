import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "Best SMO Packages | Social Media Optimization Pricing",
  description: "Get the best SMO packages to build your brand presence with affordable social media optimization pricing. Free audit, proposal, and complimentary ads included.",
  keywords: [
    "SMO Packages",
    "SMO Prices",
    "SMO Pricing",
    "Social Media Optimization Packages",
  ],
  alternates: {
    canonical: "https://www.tech2globe.com/smo-packages",
  },
  openGraph: {
    title: "SMO Packages | SMO Packages India | SMO Services Packages",
    description: "Looking for SMO packages but worried about budget? Tech2Globe provides affordable SMO packages in India with guaranteed results to increase ROI.",
    url: "https://www.tech2globe.com/smo-packages",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMO Packages | SMO Packages India | SMO Services Packages",
    description: "Looking for SMO packages but worried about budget? Tech2Globe provides affordable SMO packages in India with guaranteed results to increase ROI.",
  },
};

const pageHeaderData = {
  title: "SMO Packages for Better Brand Presence",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};


const faqs = [
  {
    id: "One",
    question: "What Are SMO Packages?",
    answer: `
      The comprehensive social media optimization services provided by Tech2Globe Web Solution are our SMO packages. These services are designed to improve your social media engagement and online visibility, ultimately increasing traffic and visibility for your company or brand. Furthermore, these plans are an amalgamation of smart strategies to boost your brand presence.
    `,
  },
  {
    id: "Two",
    question: "How to use SMO in digital marketing?",
    answer: `
      Tech2Globe uses a planned method to use SMO in digital marketing efficiently. Moreover, we provide optimized content to accomplish your marketing goals, encourage deep engagement with your audience, improve social media accounts, and use data-driven strategies.
    `,
  },
  {
    id: "Three",
    question: "What does SMO service mean?",
    answer: `
      Social media optimization services entail a collection of tactics and strategies for utilizing social media sites to market your company. Moreover, these marketing solutions effectively build brand recognition and communicate with your target audiences. Tech2Globe's SMO services are centered on maximizing the impact of your business's social media presence.
    `,
  },
  {
    id: "Four",
    question: "What platforms are covered in your SMO packages?",
    answer: `
      Tech2Globe's SMO packages include but are not limited to, Facebook, Twitter, Instagram, LinkedIn, Pinterest, and YouTube. We also include a wide range of other well-known social media sites. Plus, we can adjust our strategies to meet both your company's objectives and the particular needs of each platform.
    `,
  },
  {
    id: "Five",
    question: "What is SMO vs SEO?",
    answer: `
      Search engine optimization (SEO) and social media optimization (SMO) are separate concepts related to digital marketing practices. SMO seeks to maximize your presence on social media platforms to connect with your audience and foster brand loyalty. SEO, on the other hand, primarily concentrates on enhancing your website's ranking on search engine results pages.
    `,
  },
  {
    id: "Six",
    question: "Will my social media followers increase through SMO?",
    answer: `
      Yes, our SMO services are made to naturally increase your social media following. We want to increase the number of followers who are truly interested in your business and goods by using tried-and-true strategies to engage your target demographic.
    `,
  },
  {
    id: "Seven",
    question: "How can SMO Benefit my business or brand?",
    answer: `
      Your company or brand can benefit significantly from SMO in several ways. It fosters better contact with your audience and helps raise brand awareness. Additionally, it drives targeted traffic to your website and boosts consumer engagement and loyalty. Social Media Optimization is essential for creating a positive brand perception and increasing your sales.
    `,
  },
  {
    id: "Eight",
    question: "Do you also write content for all social media posts?",
    answer: `
      Absolutely! Our skilled content writer at Tech2Globe will create engaging and optimized content for your social media postings. We try to hit the pain points in our writing that are specialized to appeal to your audience and fit your brand's personality.
    `,
  },
  {
    id: "Nine",
    question: "What is SMO and what are its benefits?",
    answer: `
      The practice of leveraging social media platforms to market your company and improve your online presence is known as social media optimization. Among its advantages are enhanced customer involvement, increased website traffic, brand visibility, and the chance to establish more personal connections with prospective clients. Furthermore, you can use various platforms to tell a brand story to make a transparent connection with the target audience.
    `,
  },
  {
    id: "Ten",
    question: "How often would you post on social media channels?",
    answer: `
      The quantity of posts you make on your social media accounts is determined by your particular package and your company's needs. To enhance engagement, our specialists will create a social media calendar and a content plan guaranteeing a regular and well-timed presence on targeted channels.
    `,
  },
  {
    id: "Eleven",
    question: "Will you also help me set up my social media profile?",
    answer: `
      As a part of our SMO services, we do support creating and optimizing your social media profiles. If you have existing profiles, then we can work on them as well. We'll make sure your profiles are thorough, aesthetically pleasing, and consistent with your business mission so that they make a good first impression on your audience.
    `,
  },
  {
    id: "Twelve",
    question: "Will you help in social media influencer collaboration?",
    answer: `
      We understand the power influencer marketing holds. Based on the niche and requirements of your business, our SMO specialists will assist in locating appropriate influencers and facilitating partnerships that promote your business and help it get in front of a wider and more specific audience.
    `,
  },
  {
    id: "Thirteen",
    question: "Do you also offer social media marketing services in your SMO package?",
    answer: `
      Social media marketing is undoubtedly an essential component of our SMO solutions. In addition to emphasizing social media optimization, we also utilize sponsored content and paid advertising to expand your audience and help you meet your marketing objectives.
    `,
  },
  {
    id: "Fourteen",
    question: "How will measure the success of my SMO Campaign?",
    answer: `
      We make data-driven decisions to ensure that our efforts for your business are successful. Furthermore, we support consistent communication with clients for feedback. To measure the success of your SMO Campaign, several metrics or detailed statistics and analytics that track key performance indicators (KPIs) are used. These include follower growth, engagement, website traffic, lead creation, and conversions delivered to you by our staff. You may evaluate the effectiveness of your SMO campaign using these insights, and you can use them to decide on future tactics with confidence.
    `,
  },
  {
    id: "Fifteen",
    question: "Will you assist in handling comments & messages on social media handles?",
    answer: `
      Definitely! The key step in building trust and loyalty with your audience depends on engagement and communication. Your followers will have a good and engaging online experience thanks to our team's active monitoring and responses to comments, messages, and inquiries posted on your social media accounts.
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


export default function SmoPackages() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Smo Packages" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <p className="mb-5">In today's digital landscape, a robust social media presence is vital for businesses seeking to thrive and excel. Harnessing the potential of Social Media Optimization (SMO) can elevate your brand to new heights, creating meaningful connections with your target audience and driving unparalleled growth. At Tech2Globe, we specialize in crafting tailored SMO packages that empower your brand to stand out amidst the noise. Our team of seasoned experts utilizes the latest SEO practices, cutting-edge tools, and data-driven strategies to maximize your brand's visibility, engagement, and conversions across popular social platforms. Unlock the true potential of your brand with our comprehensive SMO solutions and unleash a wave of success like never before.</p>
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
                          <h3>Advance
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
                          <h3>No. of Channels</h3>
                        </td>
                        <td>Any 1 (Facebook, Instagram, LinkedIn, YouTube, Twitter, Pinterest)</td>
                        <td>Any 2 (Facebook, Instagram,LinkedIn, YouTube, Twitter, Pinterest)</td>
                        <td>Any 3 (Facebook, Instagram, TikTok, LinkedIn, YouTube, Twitter, Pinterest)</td>
                        <td>Any 4 (Facebook, Instagram, TikTok, LinkedIn, YouTube, Twitter, Pinterest)</td>
                        <td rowspan="6"><a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-normal">Contact Us</a></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Monthly Unique Creatives Creation</h3>
                        </td>
                        <td>Upto 8</td>
                        <td>Upto 15</td>
                        <td>Upto 25</td>
                        <td>Upto 40</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Paid Campaigns</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Target Products/Pages</h3>
                        </td>
                        <td>Upto 5</td>
                        <td>Upto 10</td>
                        <td>Upto 15</td>
                        <td>Upto 25</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Taglines &amp; Unique Hashtag</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Engagement Growth</h3>
                        </td>
                        <td>2X</td>
                        <td>2X to 4X</td>
                        <td>2X to 4X</td>
                        <td>4X to 6X</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Social Media Marketing</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Facebook Ads* (Monthly Budget)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td>Upto $300</td>
                        <td>Upto $600</td>
                        <td>Upto $1000</td>
                        <td rowspan="6"><a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-normal">Contact Us</a></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Instagram Ads* (Monthly Budget)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>Upto $300</td>
                        <td>Upto $600</td>
                        <td>Upto $1000</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Post Boost*</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Conversion Tracking</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Influencers (Barter)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Influencers (Paid)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Initial Review and Analysis</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Profile Creation (If Necessary)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td rowspan="8"><a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-normal">Contact Us</a></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Profile Optimization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Target Audience Analysis</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Identify Hashtags</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Identify Business Goals</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Creating Social Media Calendar</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Follow Social Media Trends &amp; Memes</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Contests &amp; Giveaways</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td>1</td>
                        <td>1</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Facebook Management</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Facebook Page Optimization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td rowspan="23"><a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-normal">Contact Us</a></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Fan Page Creation (If Page Is Not Created)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Cover Image Creation &amp; Updation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Facebook Groups Joining</h3>
                        </td>
                        <td>5</td>
                        <td>10</td>
                        <td>15</td>
                        <td>25</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Facebook Post Sharing In Groups</h3>
                        </td>
                        <td>3 Post</td>
                        <td>5 Post</td>
                        <td>8 Post</td>
                        <td>12 Post</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Facebook Story Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Facebook Review Posting</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td>3</td>
                        <td>6</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Community Group Creation &amp; Management</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Competitor Analysis</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Facebook Tabs Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Facebook Influencer Research</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Messenger Marketing</h3>
                        </td>
                        <td>Up to 3</td>
                        <td>Up to 5</td>
                        <td>Up to 8</td>
                        <td>Up to 15</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Video Sharing (If Provided)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Identify Hashtags</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Facebook Pixel Updation For Ad Campaign</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="cross" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Facebook Shop Listing &amp; Management (Products)</h3>
                        </td>
                        <td>Upto 5</td>
                        <td>Upto 5</td>
                        <td>Upto 10</td>
                        <td>Upto 10</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Facebook Reporting</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="cross" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="cross" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Social Content Creation</h3>
                        </td>
                        <td>1/month</td>
                        <td>2/month</td>
                        <td>4/month</td>
                        <td>6/month</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Visual Content Presentation</h3>
                        </td>
                        <td>2</td>
                        <td>2</td>
                        <td>4</td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Content Seeding To Increase Visibility</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Joining Communities</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Respond To Direct Messages</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Respond To Comments &amp; Replies</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Instagram Management</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Profile Optimization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td rowspan="19">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-normal">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Convert Account In Professional/Business</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Instagram Thread Account Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Personalized Hashtags Research &amp; Use</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Target Instagram Followers Increase</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Customized Story Creation &amp; Updation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Competitor Analysis</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>IGTV Video Updation (Video Provided By Client)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Reel Updation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Personalized Highlights Covers Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Product Guide Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Content &amp; Giveaways</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Influencers Outreach</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Image Tagging</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Monthly Ads</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Comments &amp; Likes Management</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Respond To Direct Messages &amp; Mentions</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Respond To Comments &amp; Replies</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Instagram Analytics Management</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">TikTok Management</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Strategic Direction</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td rowspan="5">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-normal">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Creative Brief</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td>3</td>
                        <td>6</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>UGC Videos (Provided by Client)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td>1</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Content Ideation Session</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Video Posting (Provided by Client)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>

                      <tr>
                        <td class="full-row" colspan="6">LinkedIn Management</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Profile Optimization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td rowspan="12">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-normal">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Company Page Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Profile Pic &amp; Cover Page Updation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Competitor Analysis</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Video Posting (Provided by Client)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Community Group Creation &amp; Management</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Customized Story Updation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Follow Hashtags</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Joined Groups &amp; Discussions</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Build Profile Connections</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Company Page Followers Increase</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Linkedin Post Sharing</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>

                      <tr>
                        <td class="full-row" colspan="6">YouTube Management</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Channel Optimization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td rowspan="19">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-normal">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Channel Cover Image</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Video Optimization (Video Provided By Client)</h3>
                        </td>
                        <td>1</td>
                        <td>2</td>
                        <td>4</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Video Thumbnail Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Keyword Research</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Competitor Analysis</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check"  src="images/services/service-inner/clip_image003.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check"  src="images/services/service-inner/clip_image003.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check"  src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check"  src="images/services/service-inner/clip_image002.gif"/></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Adding Video Elements</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Add Subtitles/Video Transcript</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>YouTube Story Updates</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>YouTube Live Streaming Feature</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Community Updation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>YouTube Playlist Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check"  src="images/services/service-inner/clip_image003.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check"  src="images/services/service-inner/clip_image003.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check"  src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check"  src="images/services/service-inner/clip_image002.gif"/></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>YouTube Shorts Updation (Video Provided By Client)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check"  src="images/services/service-inner/clip_image003.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check"  src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check"  src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check"  src="images/services/service-inner/clip_image002.gif"/></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Youtube Subscribers Increase</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>YouTube Views</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Video Optimization &amp; Promotion</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check"  src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check"  src="images/services/service-inner/clip_image002.gif"/></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Comment Moderation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check"  src="images/services/service-inner/clip_image002.gif"/></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check"  src="images/services/service-inner/clip_image002.gif"/></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>YouTube Video Likes</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Video Backlinks</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>

                      <tr>
                        <td class="full-row" colspan="6">Twitter Management</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Profile Optimization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td rowspan="9">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-normal">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Tweets Posting</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Customized Cover Photo Creative Upload</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Retweets</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Follow Hashtag Trends</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Poll Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Follow Industry Related People</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Create Moments</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Twitter Analytics Reporting</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>

                      <tr>
                        <td class="full-row" colspan="6">Pinterest Management</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Profile Optimization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td rowspan="7">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-normal">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Business Account Convert</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Custom Pin Boards Creation</h3>
                        </td>
                        <td>2</td>
                        <td>4</td>
                        <td>6</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Video Updation (Video Provided By Client)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Story Updation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Website Verification</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Monthly Visitors Analysis</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>

                      <tr>
                        <td class="full-row" colspan="6">Content Posting Strategy</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Motivational Post (Twice A Week)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td rowspan="3">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-normal">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Business Post (Twice A Week)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Ques. &amp; Ans. / Image Sharing (Twice A Week)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                      </tr>

                      <tr>
                        <td class="full-row" colspan="6">Reporting</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Progress Report</h3>
                        </td>
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                        <td>Bi-Weekly</td>
                        <td>Weekly</td>
                        <td rowspan="2">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-normal">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Activity Report</h3>
                        </td>
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                        <td>Bi-Weekly</td>
                        <td>Weekly</td>
                      </tr>

                      <tr>
                        <td class="full-row" colspan="6">Customer Support</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Email, Chat (WhatsApp, Skype, Slack)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td rowspan="2">
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-normal">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Voice Support</h3>
                        </td>
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                        <td>Weekly</td>
                        <td>Weekly</td>
                      </tr>

                    </tbody>
                  </table>
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