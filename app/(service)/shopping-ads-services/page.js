import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import { FaAngleRight } from "react-icons/fa";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";

export const metadata = {
  title: "Google Shopping Ads Agency | Shopping Ads Services | Tech2globe",

  description:
    "Make sure you get your products seen with Google Shopping. Get more information about Tech2globe Google Ads management.",

  keywords: [
    "Google Shopping Ads Agency",
    "Shopping Ads Services",
    "Shopping Ads Agency",
    "Shopping Ads Company",
  ],

  alternates: {
    canonical: "https://stagenew.tech2globe.tech/shopping-ads-services",
  },

  openGraph: {
    title: "Google Shopping Ads Agency | Shopping Ads Services | Tech2globe",
    description:
      "Make sure you get your products seen with Google Shopping. Get more information about Tech2globe Google Ads management.",
    url: "https://stagenew.tech2globe.tech/shopping-ads-services",
    siteName: "Tech2Globe",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Google Shopping Ads Agency | Shopping Ads Services | Tech2globe",
    description:
      "Make sure you get your products seen with Google Shopping. Get more information about Tech2globe Google Ads management.",
  },
};

const pageHeaderData = {
  title: "Shopping Ads Services",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "About Tech2Globe", path: "/about-us" },
  { id: 2, name: "Infrastructure", path: "/infrastructure" },
  { id: 3, name: "Values", path: "/values" },
  { id: 4, name: "Associations Ascription", path: "/associations-ascription" },
  { id: 5, name: "Clients", path: "/clients" },
  { id: 6, name: "CSR Initiatives", path: "/csr-initiatives" },
  { id: 7, name: "Our Team", path: "/our-team" },
  { id: 8, name: "Life@Tech2globe", path: "/life-at-tech2globe" },
  { id: 9, name: "Career", path: "/career" },
];

const sidebarSections = [
  { heading: "Resources", links: resources }
];

const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe's shopping ads team transformed our Google Shopping performance. They restructured our product feed, fixed attribute errors, and implemented smart bidding strategies that reduced our cost-per-click by 42% while increasing our conversion rate. Our ROAS improved from 2.1x to 5.4x within 90 days. An exceptional team.",
    name: "Oliver Kent | Director, PetWorld UK",
    location: "United Kingdom",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We had been running Shopping Ads in-house with poor results. Tech2Globe took over and immediately identified critical feed optimization opportunities we had missed. Their Performance Max campaign setup and daily bid adjustments generated a 67% increase in shopping revenue in the first month. I wish we had partnered with them sooner.",
    name: "Lucas Bernard | Head of Acquisition, MotoShop",
    location: "France",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe helped us launch and scale Google Shopping Ads for our beauty ecommerce store. Their product title and description optimization significantly improved our impression share, and their segmented campaign structure allowed precise budget control. We went from near-zero Shopping visibility to becoming a top advertiser in our niche within 4 months.",
    name: "Priya Kapoor | Founder, GlowCart",
    location: "Singapore",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "The Tech2Globe shopping ads team is thorough, data-driven, and results-oriented. They audited our entire campaign account, rebuilt the structure, and implemented custom labels to prioritize our best-margin products. Our overall shopping campaign ROAS went from 3x to 7x, and we significantly reduced wasted spend on low-converting SKUs.",
    name: "Thomas Huber | Digital Commerce Lead, HomeCraft",
    location: "Switzerland",
  },
  {
    id: 5,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We were intimidated by the complexity of Shopping Ads but Tech2Globe made the whole process seamless. Their feed setup, merchant center troubleshooting, and campaign optimization were all handled expertly. Within 60 days our Shopping Ads were our highest-performing paid channel, delivering a consistent 4.9x return. Couldn't be happier.",
    name: "Sarah McLean | Ecommerce Director, FreshFarm",
    location: "New Zealand",
  },
];


const portfolio = [
  {
    title: "CATALOGUING",
    items: [
      {
        title: "SavoyActive",
        tech: "Instagram",
        link: "https://savoyactive.com/",
        img: "/images/services/portfolio-img/savoyactive.jpg",
      },
      {
        title: "CuddleBug",
        tech: "Guest Blogging",
        link: "https://www.cuddlebug.co/",
        img: "/images/services/portfolio-img/cuddlebug.jpg",
      },
      {
        title: "Inseason Jewelry",
        tech: "Guest Blogging",
        link: "https://www.inseasonjewelry.com/",
        img: "/images/services/portfolio-img/inseason-jewelry.jpg",
      },
      {
        title: "Swan Club",
        tech: "SEO + SMM + Content",
        link: "https://www.swanclub.com/",
        img: "/images/services/portfolio-img/swan-club.jpg",
      },
      {
        title: "NopExtension",
        tech: "SEO + SMM + Content",
        link: "https://www.facebook.com/NopExtensions/",
        img: "/images/services/portfolio-img/nopextensions-1.jpg",
      },
      {
        title: "Seo2Topp",
        tech: "SEO + SMM + Content",
        link: "https://www.facebook.com/seo2topp/",
        img: "/images/services/portfolio-img/seo2topp.jpg",
      },
      {
        title: "Geturkart",
        tech: "SEO + SMM + Content",
        link: "https://www.facebook.com/geturkart/",
        img: "/images/services/portfolio-img/geturkart-1.jpg",
      },
      {
        title: "Sassoon",
        tech: "SMM",
        link: "https://www.facebook.com/mysassoon/",
        img: "/images/services/portfolio-img/sassoon.jpg",
      },
      {
        title: "ZphotoEditing",
        tech: "SEO + SMM + Content",
        link: "https://www.facebook.com/zphotoedit.PhotoEditingCompany/",
        img: "/images/services/portfolio-img/zphotoediting.jpg",
      },
      {
        title: "Devout Techs",
        tech: "SEO + SMM + Content",
        link: "https://www.facebook.com/devouttechnologies/",
        img: "/images/services/portfolio-img/devout-techs.jpg",
      },
      {
        title: "Wonder Herbs",
        tech: "Facebook Page",
        link: "https://www.facebook.com/Wonderherbsayurveda/",
        img: "/images/services/portfolio-img/wonder-herbs-ayurveda.jpg",
      },
      {
        title: "Home Furnisher",
        tech: "Facebook Page",
        link: "https://www.facebook.com/HomestyleFurnisher/",
        img: "/images/services/portfolio-img/home-style-furnisher.jpg",
      },


    ],
  }
]

const caseStudies = [
  {
    "id": 1,
    "title": "Google Adword (Search Ads)",
    "image": "/images/services/service-inner/casestudies/google-ads.jpg",
    "description": "London Hampers is a UK based and family run business that provides and delivers food and drinkbased Hampers.....",
    "docLink": "#"
  },
  {
    "id": 2,
    "title": "Search Engine Optimization",
    "image": "/images/services/service-inner/casestudies/Untitled-design-(17).png",
    "description": "The client is USA-based and he is a Neuroscientist by profession with over 15 years.....",
    "docLink": "/images/case-studies/legal.png"
  },
  {
    "id": 3,
    "title": "Development And Marketing Of Consultancy Portal For Legal Advice",
    "image": "/images/services/service-inner/casestudies/legal.png",
    "description": "Our team helped the client to meet their organizational goals as result it impacts on conversion rate....",
    "docLink": "/images/case-studies/Development-and-Marketing-of-Consultancy-Portal-for-Legal-Advice-converted.pdf"
  },
  {
    "id": 4,
    "title": "Consult for PPP",
    "image": "/images/services/service-inner/casestudies/Untitled-design-(16).png",
    "description": "The biggest challenge for us is – the business niche is complete new for us and first we need to understand....",
    "docLink": "/images/case-studies/Case-Study-Consult-for-PPP-converted.pdf"
  },
  {
    "id": 5,
    "title": "Social Media Marketing .2",
    "image": "/images/services/service-inner/casestudies/2.jpg",
    "description": "This Social Media Marketing Case Study featured an Indian-based customer who has a “Home Furnishing” business, named: SASSOON FAB.",
    "docLink": "/images/case-studies/Social-Media-Marketing-Case-Study.pdf"
  },
  {
    "id": 6,
    "title": "Guest Posting & Blog Writing",
    "image": "/images/services/service-inner/casestudies/7.jpg",
    "description": "This Case Study refers to our Guest Posting Services as well as Blog Writing Services for a client and showcased our unique approach to deliver...",
    "docLink": "/images/case-studies/case-study-of-guest-posting-services.pdf"
  }
]

const portfolioClients = [
  {
    initials: "MS",
    gradient: "#0b2e58",
    client: "MotoShop France",
    country: "France",
    project: "Shopping Ads — Automotive Parts & Accessories",
    desc: "Audited Merchant Center, fixed feed errors, rebuilt campaign structure, and optimized bidding, transforming Shopping Ads into highest-performing paid channel.",
    category: "Shopping Ads",
    result: "ROAS increased to 6.8x in 60 days",
  },
  {
    initials: "GC",
    gradient: "#0b2e58",
    client: "GlowCart Beauty",
    country: "Singapore",
    project: "Shopping Ads — Beauty & Personal Care",
    desc: "Built Shopping Ads from scratch with optimized feed, structured campaigns, and bidding strategy, achieving strong ROAS and rapid paid channel growth.",
    category: "Shopping Ads",
    result: "5.1x ROAS in first 30 days",
  },
  {
    initials: "HC",
    gradient: "#0b2e58",
    client: "HomeCraft Switzerland",
    country: "CH",
    project: "Shopping Ads — Home Improvement & Tools",
    desc: "Rebuilt campaign structure, improved feed quality, expanded negatives, and optimized bidding to significantly boost ROAS and reduce wasted ad spend.",
    category: "Shopping Ads",
    result: "ROAS improved to 7.4x",
  },
  {
    initials: "FF",
    gradient: "#0b2e58",
    client: "FreshFarm Organics",
    country: "NZ",
    project: "Shopping Ads — Organic Food & Groceries",
    desc: "Launched optimized Shopping Ads with clean product feed, structured campaigns, and seasonal bidding strategies driving strong ROAS and new customers.",
    category: "Shopping Ads",
    result: "4.9x ROAS in 45 days",
  },
  {
    initials: "PW",
    gradient: "#0b2e58",
    client: "PetWorld UK",
    country: "UK",
    project: "Shopping Ads — Pet Supplies",
    desc: "Restructured Shopping campaigns, optimized product feed, and implemented smart bidding, significantly improving ROAS and scaling revenue efficiently.",
    category: "Shopping Ads",
    result: "ROAS improved to 5.2x",
  },

];

export default function ShoppingAdsServices() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Shopping Ads Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Shopping Ads Services" imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg" />
              <div className={Style.ContentDiv}>
                <p>For eCommerce businesses, Google Shopping is one of the most successful forms of promotion. These Smart Shopping campaigns allow you to target the most important customers – those already looking for the things you provide.</p>

                <p>It also enables you to sell your items directly on Google in a more appealing way than ordinary text ads. Unlike text advertising, shopping ads offer a product image, title, specifications, and price, among other things. It's no surprise that this advertising converts at a greater rate.</p>

                <p>Unlike text advertising, shopping ads offer a product image, title, specifications, and price, among other things. It's no surprise that this advertising converts at a greater rate.</p>


              </div>


              <div className={Style.ContentDiv}>
                <h4 className="text-danger mb-3">Why Should You Use Google Shopping?</h4>
                <p>Why should your company market its items on Google Shopping? Below are a few of the most important advantages.</p>


                <div className={`${Style.PageAccordion} accordion`} id="accordionSection1">

                  {/* Accordion 1 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className={`${Style.AccordionButton} accordion-button collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        Increased Google Visibility
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          Google Shopping advertisements frequently show at the top of the SERPs for product-related searches, so these are the first thing customers see. Their visual appearance also stands out from the text-focused elements that make up the remainder of the SERP.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion 2 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className={`${Style.AccordionButton} accordion-button collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        A More Widespread Presence

                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          SERP may have many Shopping ads from a single shop. Shopping advertising, text advertisements, and organic search results from your website can all appear on the same SERP. Shopping ads provide you an additional opportunity to reach Google users and can help you get more visitors from a single search phrase.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion 3 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className={`${Style.AccordionButton} accordion-button collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Qualified Leads


                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          You may reach out to leads who are actively looking for items similar to yours with <strong>Google Shopping Ads Services</strong>. You may also provide visitors with the information they need to make a purchase directly in your Shopping ad, assisting leads in making a purchasing choice before they visit your website.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion 4 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className={`${Style.AccordionButton} accordion-button collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Data Accessibility
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          Google Shopping also makes it simple to obtain extensive information on the performance of your advertising. This information can aid in the improvement of your marketing campaigns and the identification of your most popular goods. You can find out how many hits you get on adverts for various items, for example - Filter your product view to obtain this information. Benchmarking data may also be used to see how your campaigns compare to those of your competitors.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className={Style.ContentDiv}>
                  <h4 className="text-danger mb-3">What Are The Benefits Of Using Our Google Shopping Management Services?</h4>


                  <div className={`${Style.PageAccordion} accordion`} id="accordionSection1">

                    {/* Accordion 5 */}
                    <div className={`${Style.AccordionItem} accordion-item`}>
                      <h2 className="accordion-header" id="headingFive">
                        <button
                          className={`${Style.AccordionButton} accordion-button collapsed`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          Development of Google Shopping Ads
                        </button>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample"
                      >
                        <div className={`${Style.AccordionBody} accordion-body`}>
                          <p className="para-text">
                            First, we make sure you are ready to launch <strong>Smart Shopping campaigns</strong>. We'll do all the necessary set ups and link your Google Merchant Center and Google AdWords accounts if you don't already have them so we can start with your shopping campaign.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Accordion 6 */}
                    <div className={`${Style.AccordionItem} accordion-item`}>
                      <h2 className="accordion-header" id="headingSix">
                        <button
                          className={`${Style.AccordionButton} accordion-button collapsed`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          Budget For Google Shopping Ads

                        </button>
                      </h2>
                      <div
                        id="collapseSix"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample"
                      >
                        <div className={`${Style.AccordionBody} accordion-body`}>
                          <p className="para-text">
                            We create a marketing budget to help you reach your goals in the most efficient way possible. To do so, we'll assist you in determining how much money you need to pay for every click and how much money you need to spend per day.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Accordion 7 */}
                    <div className={`${Style.AccordionItem} accordion-item`}>
                      <h2 className="accordion-header" id="headingSeven">
                        <button
                          className={`${Style.AccordionButton} accordion-button collapsed`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSeven"
                          aria-expanded="false"
                          aria-controls="collapseSeven"
                        >
                          Placement of Google Shopping Ads


                        </button>
                      </h2>
                      <div
                        id="collapseSeven"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingSeven"
                        data-bs-parent="#accordionExample"
                      >
                        <div className={`${Style.AccordionBody} accordion-body`}>
                          <p className="para-text">
                            It is the stage where we decide where your adverts will appear. Google shopping advertisements are linked to a product-related keyword, but the location in which they appear is equally essential for conversion effectiveness. We will focus Google searches within a fixed mile radius of your location if you're a local business.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Accordion 8 */}
                    <div className={`${Style.AccordionItem} accordion-item`}>
                      <h2 className="accordion-header" id="headingEight">
                        <button
                          className={`${Style.AccordionButton} accordion-button collapsed`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseEight"
                          aria-expanded="false"
                          aria-controls="collapseEight"
                        >
                          Reporting on Google Shopping Ads
                        </button>
                      </h2>
                      <div
                        id="collapseEight"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingEight"
                        data-bs-parent="#accordionExample"
                      >
                        <div className={`${Style.AccordionBody} accordion-body`}>
                          <p className="para-text">
                            Google will present you with a large quantity of data and results once your Google shopping advertisements have time to run and be seen by individuals browsing for your items, which might be overwhelming. You don't need to be concerned; our <strong>Google Shopping Ads Agency</strong> specialists have everything under control. These data can tell us all we need to know about a product, down to its color and brand name.
                          </p>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>


                <div className={Style.ContentDiv}>
                  <h4 className="text-danger mt-3">Why Should You Choose Our Google Shopping Services?</h4>
                  <p>Do you want to boost the performance of your Google Shopping campaigns?</p>

                  <p>Here are some of the reasons why Tech2Globe is the best Google Shopping Ads Agency.</p>

                  <p><FaAngleRight /> We have years of digital marketing experience. Our digital marketing professionals have the knowledge and expertise to help you get the most out of your Google Shopping feed campaigns.</p>

                  <p><FaAngleRight />Tech2Globe is a Google Premier Partner, which means our team has proved Google Ads abilities and knowledge, exceeded ad spend criteria and increased our agency's customer base and income.</p>

                  <p>When you work with Tech2Globe, we'll learn about your company and your objectives. We will then create a personalized approach tailored to your company's specific requirements. You will also be assigned a dedicated account representative who will work with you during your campaigns, offer frequent updates, and answer your questions. We also give frequent, honest reports on the progress of your efforts. You may view campaign statistics, and your account representative will keep you up to speed with frequent reports and consultations.</p>

                  <p>We understand how multiple channels operate together and can give you a comprehensive Internet marketing plan since we provide a full array of online marketing services. We put a premium on delivering tangible outcomes for our clients.</p>

                  <p>Are you ready to raise your internet presence, website traffic, and sales? Tech2Globe's <strong>Google Shopping Management Services</strong> can assist you!</p>
                </div>

              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>

          </div>
        </div>
      </section >
      {/* 
      <div className="tbhideforportfolio">
        <PortfolioTabs data={portfolio} title={'Our Portfolio'} description={'For its lifetime Tech2Globe has delivered hundreds of cost effective and high-quality software solutions for a wide range of industries and domains including consumer and business software development, e-commerce, retail, manufacturing, real estate, community services and many others.'} />
      </div> */}

      <ClientPortfolio clients={portfolioClients} />

      <div className="PhotoEditCaseStudies">
        <CaseStudiesService caseStudies={caseStudies} />
      </div>




      <ClientSlider testimonials={testimonials} />


    </>
  )
};
