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
import { FaAngleRight } from "react-icons/fa";

export const metadata = {
  title: "Display Advertising Services | Tech2globe - Digital Marketing Agency",
  description:
    "Tech2globe is a display advertising company engaged in providing display adverting services that aware consumers of your products or services and generate sales and traffic.",

  openGraph: {
    title: "Display Advertising Services | Tech2globe - Digital Marketing Agency",
    description:
      "Tech2globe is a display advertising company engaged in providing display adverting services that aware consumers of your products or services and generate sales and traffic.",
    url: "https://www.tech2globe.com/display-advertising-services",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Display Advertising Services | Tech2globe - Digital Marketing Agency",
    description:
      "Tech2globe is a display advertising company engaged in providing display adverting services that aware consumers of your products or services and generate sales and traffic.",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/display-advertising-services",
  },
};

const pageHeaderData = {
  title: "Display Advertising Services",
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

export default function DisplayAdvertising() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Display Advertising Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <h2>Display Advertising Services</h2>
              <div className={Style.ContentDiv}>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <img src="/images/services/service-inner/display-advertising-services.jpg" alt="Display Advertising Services" className="img-fluid" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p>Display advertising is a style of marketing involving animations, pictures, logos, movies, and other visuals to express a commercial message visually. Advertisers frequently target audiences with potential to increase the impact of their advertisements. It is the most effective technique to increase your company's brand value in the marketplace.</p>

                    <p>Tech2Globe is the finest Display Ads Management Agency that places your brand in front of your customers through digital display ads. We combine strategy, innovation, and technological expertise to create display advertising that engages and converts. Our creative team meticulously designs customized display adverts and landing pages that resonate with your audience's interests and purpose to complement your paid media plan.</p>
                  </div>

                </div>

              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Should You Spend Money On Display Ads?</h4>
                <p>Here are some of the reasons why Display Advertising Services are essential for your company.</p>

                <div className={`${Style.PageAccordion} accordion`} id="accordionSection1">

                  {/* Accordion 1 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className={`${Style.AccordionButton} accordion-button`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Enhances Brand Recognition
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          Display advertising is claimed to successfully and quickly build brand recognition and trust for your firm. As long as it is exhibited with unique and suitable material, it is less intrusive than traditional advertising tactics.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion 2 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className={`${Style.AccordionButton} accordion-button`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        Visually Appealing
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          One of the most attractive features of <strong>Paid Display Advertising Services</strong> for your business is their aesthetic appeal. You may employ images, music, videos, and your company's identity to establish your marketing stance and capture people's attention with them.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion 3 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className={`${Style.AccordionButton} accordion-button`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        Promotion Of A High-Profile Website
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          Using profile site marketing, you can easily position your adverts on high-profile sites for a very low cost. Advertisements are displayed on websites. As a result of their interaction with such sites, users acquire confidence in them.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion 4 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className={`${Style.AccordionButton} accordion-button`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="true"
                        aria-controls="collapseFour"
                      >
                        Makes You More Visible
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          An Online Display Advertising Services Company will attempt to increase the presence of your internet business to improve its visibility. The advertising allows you to appear on sites that aren't performing well but are affiliated with your ad offer.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className={Style.ContentDiv}>

                <h4>Our Services For Display Advertising</h4>
                <p>We make your presence felt worldwide by providing world-class <strong>Display Advertising Services</strong> as a reputable display advertising firm.</p>

                <h6>Advertising In A Contextual Setting</h6>
                <p>Contextual advertising, also known as target advertising, is a method of displaying the appropriate information and advertisements on a website. We enable your ad to appear on a website supplied by an automated system.</p>
                <h6>Placement Of Ads</h6>
                <p>We focus on simplifying your ad's location to create leads when the ad placement strategy and structure are established. Our creative team generates advertisements with simple CTAs that increase CTR and increase brand awareness.</p>
                <h6>Browsing Categories Audience Targeting</h6>
                <p>We segment and analyze your ad audience to determine the best keyword and site position combinations to reach them. Following that, we screen and optimize your campaign with a constant focus on delivering outcomes.</p>
                <h6>Management Of Ads And Campaigns</h6>
                <p>Our <strong>Display Advertising Services & Management Company</strong> understand how a basic paid marketing ad can become complicated when several ads are in the works; therefore, we assist you in managing them in real-time.</p>
                <h6>Audit & Strategy For Display Ads</h6>
                <p>Before launching new campaigns, we undertake a complete and competitive audit to determine the efficacy of current and previous show activities. Based on this understanding and your company objectives, we design a detailed plan to reach those objectives.</p>
                <h6>Development Of Creative And Messaging</h6>
                <p>An effective display ad doesn't merely look tremendous and relies on luck to get the attention of your target audience. We design new creative and message strategies for your advertising based on your audience segmentation.</p>
                <h6>Interest-Based Marketing</h6>
                <p>Interest targeting, or in-market and <strong>Display Banner Advertising Services,</strong> allows you to target in-market customers who have never engaged with your brand before based on common interests.</p>

              </div>


              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Why Should You Use Us As Your Display Advertising Agency?</h4>
                <p>With a complete display advertising package, you can take your company to new heights. We use efficient display advertising solutions to assist startups and businesses improve their brand recognition and online sales. Our experts create eye-catching visual advertising for online distribution.</p>

                <p>Our Display Advertising Agency can assist you in reaching out to specific demographics on the websites. We always find new ways to reach out to an audience that has abandoned you. We assist you in long-term growth by providing effective Google Display Advertising Services and Solutions.</p>

                <p>We will cover everything from scheduling and cost to the best display ad networks as well as possible creative and strategic message. Because of our regular check-ins, you'll always have a pulse on the performance of your campaign, and we continually offer fresh ideas to the table with expert recommendations and testing possibilities. At every step of the journey, we value input and cooperation.</p>
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

      <div className="tbhideforportfolio">
        <PortfolioTabs data={portfolio} title={'Our Portfolio'} description={'For its lifetime Tech2Globe has delivered hundreds of cost effective and high-quality software solutions for a wide range of industries and domains including consumer and business software development, e-commerce, retail, manufacturing, real estate, community services and many others.'} />
      </div>

      <div className="PhotoEditCaseStudies">
        <CaseStudiesService caseStudies={caseStudies} />
      </div>

    </>
  )
};