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

export const metadata = {
    title:
    "India  Most Trusted SEO Services Agency | SEO Company - Tech2globe",

  description:
    "Achieve #1 rankings with Tech2globe - Best SEO Agecny in India. Our seo company offer powerful SEO services that drive clicks, quality organic traffic, enquires, and sales. Call Now for Top of Google rankings.",

  keywords: [
    "SEO India",
    "SEO Company India",
    "SEO Services India",
    "SEO India Firm",
    "SEO Services",
    "SEO Packages",
    "SEO Agency India",
    "SEO Expert India",
    "SEO Consultant India.",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/search-engine-optimization",
  },

  openGraph: {
    title:
      "India Most Trusted SEO Services Agency | SEO Company - Tech2globe",
    description:
      "Achieve #1 rankings with Tech2globe - Best SEO Agecny in India. Our seo company offer powerful SEO services that drive clicks, quality organic traffic, enquires, and sales. Call Now for Top of Google rankings.",
    url: "https://www.tech2globe.com/search-engine-optimization",
    siteName: "Tech2Globe",
    type: "website",
  },

  twitter: {
    card: "summary",
    title:
      "India Most Trusted SEO Services Agency | SEO Company - Tech2globe",
    description:
      "Achieve #1 rankings with Tech2globe - Best SEO Agecny in India. Our seo company offer powerful SEO services that drive clicks, quality organic traffic, enquires, and sales. Call Now for Top of Google rankings.",
  },
};


const pageHeaderData = {
  title: "Search Engine Optimization",
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

export default function SearchEngineOptimization() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Search Engine Optimization" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Search Engine Optimization" imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg" />
              <div className={Style.ContentDiv}>
                <p>If you've ever wondered why certain websites rank higher than others, it's because they use the <strong>best SEO Services</strong> and techniques! Tech2Globe is India's most reputable <strong>SEO services provider</strong>, carefully selecting relevant keywords and creating a link-building strategy tailored to your demands and objectives.</p>

                <p className="mb-4">We assist you in obtaining relevant organic search engine traffic, and provide you with highest converting traffic generated through our digital marketing method.</p>                              
              </div>

              <div className={Style.ContentDiv}>
                <h4>Tech2Globe - India's Most Trusted SEO Services Agency</h4>
                <p>By enhancing your website's keyword ranks and organic traffic, search engine optimization (SEO) improves the quality and quantity of online traffic and your brand visibility. It's not only about search engines when it comes to SEO; it's also about the audience. You can get to know what actual people in target demographic are searching online, the phrases they use, the solutions they want, and the material they want to be provided with to meet their requirements, thanks to effective <strong>SEO services strategies</strong>.</p>

                <p className="mb-4">You'll be able to link your target audience with the solutions you supply if you know the answers to these questions. It is where we, Tech2Globe, as your Trusted <strong>SEO services provider</strong> in India, can assist you. Knowing the purpose of your audience is one component of SEO. The second component is supplying content that search engines can locate, understand, and index.</p>

                                
              </div>

              <div className={Style.ContentDiv}>
                <h4>The Significance Of SEO For Your Business</h4>
                <p>SEO has progressed to the point that it now encompasses all parts of website construction and content generation. We provide you with the best <strong>SEO services in India</strong>, and we make sure that everything is done correctly and efficiently. It contributes to a positive user experience for your target audience, increasing their trust in your brand. The fundamental purpose of using <strong>Organic SEO services in India</strong> is to exhibit your worth to search engines like Google, Bing, and others.</p>
                
                <p className="mb-4">When these search engines recognize the importance of your brand, your web pages will begin to rank well for relevant search terms. The value of SEO rests in its capacity to help your clients locate your brand and website quickly and easily. Our <strong>SEO expert</strong> will assist organizations in various ways to help them develop and accomplish their objectives.</p>
              </div> 

              <div className={Style.ContentDiv}>
                <h4>The Primary Source Of Organic Web Traffic Is SEO</h4>
                <p className="mb-4">Organic search is the cornerstone of every company's SEO strategy and website success. It's also an essential part of the sales funnel since it's one of the most critical factors in engaging or converting your target audience into a loyal customer base. Tech2Globe has a solid name in the industry and a fast-expanding clientele all over the world. We are now regarded by our clients as one of the top <strong>SEO agencies</strong>. We assist your brand in gaining excellent visibility and reach through <strong>On-page SEO services</strong> and search engines. It also aids in directing the majority of web traffic to your site from a variety of internet sources.</p>
              </div>  


              <div className={Style.ContentDiv}>
                <h4>Our SEO Service Packages</h4>
                <p>Long-term connections with clients and talented partners are essential to Tech2Globe. We strive for client happiness by focusing on quality, consistency, and reliability.</p>
               
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
                        SEO
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
                          Our <strong>best search engine optimization services</strong> will assist you in getting a high-ranking in-search results, which is way more effective than traditional advertising.
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
                         ORM
                                
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
                          Improve your ability to create Internet-based tactics that change or affect the public opinion of your company.
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
                        Marketing On Social Media
                                

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
                          A successful social media plan can help you grow and engage your audience. We assist with the establishment and maintenance of your social presence.
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
                         Management of PPC Campaigns
                                
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
                          Being one of the most cost-effective types of digital marketing, PPC advertisements offer your website immediate traffic and consumers.
                        </p>
                      </div>
                    </div>
                  </div>

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
                        Website Design and Development
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
                          We have complete knowledge of all aspects of web development and assist our clients in realizing their full potential.
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
                        CRO
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
                          Master the science and art of persuading a more significant percentage of your website visitors to become leads or customers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p>As the top-quality <strong>SEO services in India,</strong> we emphasize the adoption of white hat SEO techniques that aid in the establishment of businesses in their respective fields. Over the years, we've worked with various small, medium, and large businesses in India and around the world to get more market awareness, reach, and reputation. Tech2Globe is India's most reputed <strong>SEO agency</strong>, offering 360-degree marketing, on and <strong>OFF page SEO services</strong>, and affordable <strong>SEO services</strong>.</p>
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