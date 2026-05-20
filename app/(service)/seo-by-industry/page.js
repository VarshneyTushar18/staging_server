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
    "SEO By Industry | Industry-Based SEO Services in India - Tech2Globe",

  description:
    "Tech2Globe provides industry-based SEO services in India, delivering customized SEO strategies tailored to specific business sectors to improve rankings, traffic, and lead generation.",

  keywords: [
    "SEO by industry",
    "industry based SEO services",
    "SEO services in India",
    "sector specific SEO",
    "custom SEO strategies",
    "enterprise SEO services",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/seo-by-industry",
  },

  openGraph: {
    title:
      "SEO By Industry | Industry-Based SEO Services in India - Tech2Globe",
    description:
      "Tech2Globe provides industry-based SEO services in India, delivering customized SEO strategies tailored to specific business sectors to improve rankings, traffic, and lead generation.",
    url: "https://www.tech2globe.com/seo-by-industry",
    siteName: "Tech2Globe",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "SEO By Industry | Industry-Based SEO Services in India - Tech2Globe",
    description:
      "Tech2Globe delivers industry-based SEO services in India with customized strategies designed to improve visibility, rankings, and qualified organic traffic.",
  },
};

const pageHeaderData = {
  title: "Seo By Industry",
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
    text: "Excellent service Quality by Ritu & Chavy.. Quick to revert on any queries or issues. Delivery time to be bettered or improved a bit though .",
    name: "SHAFIN - Head of Partner Manager",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "It's a best agency we find for handling our e commerce marketplaces, all staff are friendly and expert in their work, we recommend TECH 2 GLOBE to achieve your business goals timely and efficiently.",
    name: "NITIN MEHTA - Head of Partner Manager",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Very co operative staff, managing my account very well.",
    name: "GENKI - Head of Partner Manager",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Hardworking team with the main target of growing your business. We have just started working and the team is warm and instantly available for all confusions and help in establishing your Amazon business.",
    name: "SHUBHESH GOEL - Director of Partner Management",
  },
  {
    id: 5,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "I was very happy with the services and quality of work. Their team was open to feedback and flexible in meeting needs.",
    name: "DAVID - Director of Partner Management",
  },
  {
    id: 6,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "I have received the photos back from many jobs and they are always great! The editing service was cost-effective, and Tech2Globe Web Solutions was friendly to work with.",
    name: "ASHLEY MEYER - Owner",
  },
  {
    id: 7,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "I got to know them as an extension of our team, without the normal complications involved with large BPO firms.",
    name: "LAURA HACKETT - Customer Service Manager (Berlin, Germany)",
  },
  {
    id: 8,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Very professional and great service provider. Happy with the ecommerce services.",
    name: "SARAH S. - Ecommerce Business Owner",
  },
  {
    id: 9,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "The team is so good in their work, they maintain professionalism while working and they guide you whenever you got stuck in your ecom business.",
    name: "AKSHAY - Marketing Manager",
  },
  {
    id: 10,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Very much enjoyed working with Tech2Globe. The responsiveness was amazing and they were helpful as they developed Enhanced Brand Content for my product listing. I would definitely work with them again in the future.",
    name: "REVIAN - United Kingdom",
  },
  {
    id: 11,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2globe is a great company that provides high-quality services. They work very closely with our management and are on continuous communication and collaboration with our team. They have helped us increase our sales and optimize our processes. The overall experience has been amazing so far.",
    name: "ALEX - London",
  },
  {
    id: 12,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "I m very much satisfied with the Tech2Globe team they assigned me. All the team members are very knowledgeable about everything and their quality of work is very impressive.",
    name: "MEGHA SARPAL - Sales & Marketing",
  },
  {
    id: 13,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "This is my very first time I availed of service from Tech2Globe and amazed by the quality of service they have provided. I have been running my Amazon business for over a year now and have worked with many service providers before. For the very first time, I realized that I have invested with a proper vendor with 100% worth of my money. I am definitely a returning customer for all my Amazon service needs and I highly recommend Tech2Globe.",
    name: "BIBHUDATTA MISHRA - Sales & Marketing",
  },
  {
    id: 14,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "I was extremely satisfied with the infographics created for my company! They were very timely and communications were excellent! We even spoke by phone on occasion. I would highly recommend this company and I plan to use them again for future projects e.g. listing creation, optimization, etc. Thank you, Anurag!",
    name: "WILLIAM NEWSOME - Project Manager",
  },
  {
    id: 15,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "The team is very professional and genuine. Our direct interaction is with Sahil and he is very proactive in his deliverables. He always suggests great ideas and strategies.",
    name: "KRISHAN KUMAR DIXIT - Sales & Marketing",
  },
  {
    id: 16,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Thank you so much for the amazing services. Now I can proudly say that I am the owner of an eCommerce website.",
    name: "SRI RANGATHAM - CEO",
  },
  {
    id: 17,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Quality work from a team that know what they are doing. We wrestled with Google Products for weeks before Tech2globe got involved. They solved in the issues in just a few hours. Looking forward to working together again.",
    name: "RICHARD FOSTER TEST - Sales & Marketing",
  },
  {
    id: 18,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We commend your quick actions to our requests and appreciate your eagerness to learn our processes and standards. It is almost more than 6 Months we are engaged with Tech2Globe and from first week we have been receiving numerous compliments on our website. Our company is really happy to hire Full Time Equivalent (FTE) professionals at Tech2globe",
    name: "BOBBY - USA",
  },
  {
    id: 19,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "I have been outsourcing IT work for a couple of years to offshore locations and have worked with many solutions companies, but by far I have found Tech2Globe to be the best. Their product development strategies were incredible and far exceeded my expectations.",
    name: "MICHAEL BURNS OFFSHORE - IT Consultant (USA)",
  },
  {
    id: 20,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2globe possesses strong knowledge of how to outsource and offshore business process and IT services and make the initiative successful.",
    name: "BRADLEY SMITH - Delivery Manager",
  },
  {
    id: 21,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "These guys deliver on what they promise, although a little later than expected by both parties.",
    name: "ALISA - Thailand",
  },
  {
    id: 22,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "When we decided to relocate our data entry service outside of Germany, we wanted to find the best partner in term of ongoing communication and ethic.",
    name: "MOWGLI MONTIER - Germany",
  },
  {
    id: 23,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "I used to work with Tech2Globe as a part of the takeaway company. The team in India was very devoted and focused on the mutual success.",
    name: "EWELINA ŻELAZKO - Germany",
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

export default function SeoByIndustry() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Seo By Industry" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Seo By Industry" imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Search engine optimization may be performed on any website, as well as a specific company website. This method is sometimes referred to as industry-specific SEO or SEO-by-industry. In general, every website on the internet is concerned with a specialized or industry-based area of operation. Still, the concept of using the same SEO strategies, regulations, and guidelines is entirely incorrect and sometimes fallacious. We use <strong>Industry SEO Services India</strong>, abbreviated as ISEO, to work for a specific organization and categorize businesses following their need and requirements.</p>

                <p>Tech2Globe is one of the most well-known SEO and <Link href="/digital-marketing-services" className= "fw-normal">digital marketing companies</Link>, offering comprehensive online solutions that will provide your company with an efficient technological solution. Our exceptional <strong>SEO by industry package</strong> may provide you with all you want for SEO in your specific sector.</p>

                
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger">Our SEO By Industry Services</h4>
                <p>It is currently a well-known reality that the whole marketing process take place on the internet. Companies who wish to flourish in their fields and become the best in their specific sector should prioritize strengthening their online presence. Another well-known truth is that the search engines are the roving ships of the ocean known as the internet.</p>

                <p>Companies that want to make significant progress on the ladder of success must effectively use search engines and maintain a solid online presence. We at Tech2Globe are fully aware of these facts. We are glad to assist individuals and businesses in establishing a solid online presence and making the most effective use of search engines. When you <strong>outsource SEO Services in India</strong> to us, our expert team will help your business thrive.</p>

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
                        SEO For Travel
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
                          For entrepreneurs that manage tours and travel firms, our industry-specific SEO solutions will be critical in growing their business on a large scale.
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
                        Hospitality SEO
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
                          Restaurant and hotel businesses may benefit from our hospitality SEO services. These standard services give such businesses a much-needed boost in popularity.
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
                        SEO For eCommerce

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
                          eCommerce shops will be unable to expand if they do not use industry-specific SEO solutions. It is important to take professional <Link href="/ecommerce-seo-packages" className= "fw-normal">SEO for eCommerce services</Link> from an experienced team.
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
                        SEO For Healthcare
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
                          Dental clinics, hospitals, and nursing homes, all benefit from our healthcare SEO services.
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
                        SEO For Real Estate
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
                          At Tech2Globe, you can rely on our highly effective and optimal SEO solutions. We study property sites online and several other vital combinations of various SEO tools using keyword management.
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
                        SEO For Hardware
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
                          When it comes to optimizing specific hardware, our <strong>SEO by industry services</strong> will be beneficial. We offer the knowledge and expertise to assist you in expanding your online presence.
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
                        SEO For Telecommunications
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
                          Today's businesses rely significantly on connection. As a result, telecommunications may easily play a crucial part in a wide range of corporate processes.
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
                        SEO For Pharmaceuticals
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
                          The primary thing that counts in medicine is that people be healthy. Those who take medicine need to be sure they're getting it from the right place. Our SEO for pharmaceuticals allows to increase the visibility and make your name for reliable.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion 9 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingNine">
                      <button
                        className={`${Style.AccordionButton} accordion-button collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseNine"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                      >
                        SEO For Software
                      </button>
                    </h2>
                    <div
                      id="collapseNine"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingNine"
                      data-bs-parent="#accordionExample"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          We also give <strong>SEO by industry services</strong> to businesses that offer software as a service or physical software items. Software SEO is not a simple process. Taking that initial step takes a lot of guts and a lot of experience. On the other hand, our experts are well-versed in their fields and understand that the only thing that matters is the end product.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion 10 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingTen">
                      <button
                        className={`${Style.AccordionButton} accordion-button collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTen"
                        aria-expanded="false"
                        aria-controls="collapseTen"
                      >
                         SEO For Non-Profits
                      </button>
                    </h2>
                    <div
                      id="collapseTen"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTen"
                      data-bs-parent="#accordionExample"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          Not everyone is a fan of non-profit SEO. To share the same goal as a non-profit organization, it takes a lot of devotion and willpower. Tech2Globe has already shown itself in the industry, having helped several non-profit groups improve their online presence. As a result, if you are a non-profit organization looking to get the most out of the internet, we are here to help you.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion 11 */}
                  <div className={`${Style.AccordionItem} accordion-item`}>
                    <h2 className="accordion-header" id="headingEleven">
                      <button
                        className={`${Style.AccordionButton} accordion-button collapsed`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEleven"
                        aria-expanded="false"
                        aria-controls="collapseEleven"
                      >
                         SEO For Retail
                      </button>
                    </h2>
                    <div
                      id="collapseEleven"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingEleven"
                      data-bs-parent="#accordionExample"
                    >
                      <div className={`${Style.AccordionBody} accordion-body`}>
                        <p className="para-text">
                          Retail SEO is one of the most demanding tasks that an SEO firm can do. The only thing that counts is the appropriate audience that is identified and converted. Our experts have adequate expertise and experience dealing with the issues that emerge when performing retail SEO.
                        </p>
                      </div>
                    </div>
                  </div>


                </div>

              </div>


              <div className={Style.ContentDiv}>
                <h4 className="text-danger">Why Choose Us?</h4>
                <p>Tech2Globe has a year of expertise with <strong>SEO by industry services</strong>. We have worked on many projects simultaneously and were grateful for the timely completion of all of them. We are the most well-known and trusted name in the market. We've worked on various specialty blogs and websites, conducting considerable research and generating unrivaled success outcomes. You can visit our website or call/email us for additional information about our <strong>Industries-based <Link href="/seo-services">SEO Services</Link> in India;</strong> we would be happy to assist you.</p>

                

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

      <div className="EmailMarketingTestimonials">
        <ClientSlider testimonials={testimonials} />
      </div>

    </>
  )
};