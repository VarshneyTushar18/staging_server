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
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaAngleRight, FaBullhorn, FaCogs, FaDesktop, FaExpandArrowsAlt, FaPenNib, FaRegDotCircle, FaSearch } from "react-icons/fa";

export const metadata = {
  title: "Guest Posting Service | Tech2globe",

  description:
    "Niche guest posting services where you approve the sites. Improve rankings with our manual guest post outreach link building. Only real sites with traffic.",

  keywords: "",

  alternates: {
    canonical: "https://www.tech2globe.com/guest-posting-services",
  },

  openGraph: {
    title: "Guest Posting Service| tech2globe",
    description:
      "Niche guest posting services where you approve the sites. Improve rankings with our manual guest post outreach link building. Only real sites with traffic.",
    url: "https://www.tech2globe.com/guest-posting-services",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Guest Posting Service| tech2globe",
    description:
      "Niche guest posting services where you approve the sites. Improve rankings with our manual guest post outreach link building. Only real sites with traffic.",
  },
};


const pageHeaderData = {
  title: "Guest Posting Services",
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

const faqs = [
  {
    id: "One",
    question: "What are guest posting services?",
    answer: `
        Guest posting/blogging is a white hat link development tactic and one of the most legitimate SEO strategies. It's fascinating to write a blog and then put it on someone else's site. This practice provides reciprocal benefits to both guest bloggers and the websites that host them.
      `,
  },
  {
    id: "Two",
    question: "What are the key elements of a successful tech guest post?",
    answer: `
        Considering tech guest posts, the main elements to make them successful are:
        <ul>
          <li>Define your purpose.</li>
          <li>Know your target audience.</li>
          <li>Research extensively.</li>
          <li>Create compelling headlines.</li>
          <li>Plan your structure.</li>
        </ul>  
      `,
  },
  {
    id: "Three",
    question: "Why are guest posts important for SEO?",
    answer: `
        Correct guest posting opportunities may help you establish high-quality backlinks, improve your website's search engine results, and attract more visitors over time. It's an effective method for broadening your audience and increasing your internet visibility.
      `,
  },
  {
    id: "Four",
    question: "How do I pitch a guest post to a tech blog?",
    answer: `
        If you're a decent writer, you don't need much expertise in writing about a specific topic to land a guest post on a large or semi-major website. Practice your research skills and look for sites related to your topic, read or go through their content and guidelines, and personalize your pitch to submit a guest post proposal to a technology blog.
      `,
  },
  {
    id: "Five",
    question: "Are there guest posting services specifically for the USA?",
    answer: `
        Our customized guest post service in the United States focuses on tactics that help generate targeted website traffic by reaching out to the appropriate audience within your specific business and area.
      `,
  },
  
];

export default function GuestPosting() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Guest Posting Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Guest Posting Services" imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg" />
              <div className={Style.ContentDiv}>
                <h2>Maximize Your SEO with Our Affordable Guest Posting Service</h2>
                <p>Guest posting/blogging services are a sort of white hat link building that is one of the most effective SEO strategies available. It's an intriguing notion to create a blog and have it published on someone else's website. It helps both the guest bloggers and the website that hosts the guest blogging. In other words, a guest posting service is a two-way street that aids in the development of relationships with other leaders in your sector while also increasing brand awareness.</p>

                <p>Why risk your profit margins when you can receive higher-quality guest post links for half the price with our cost-effective Guest Posting Service?</p>

                <p>Our specialization is obtaining contextual backlinks through high-quality guest posts. As an esteemed Guest Blogging Company in USA, our <strong>guest posting services</strong> include extensive research to discover high-relevancy bloggers for your clients. At the same time, our native writers develop your outreach material.</p>   

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger mt-4 mb-3">Key Features of Guest Posting Services</h4>
                <p>Are you thinking about hiring a professional Guest Blogging Services in USA? Examine the advantages listed below before making your decision :</p>
                <h6>ENHANCE YOUR RANKING</h6>
                 <p>The best Guest Posting Services can assist you in obtaining links from several well-known sites, which will help you enhance your search engine rating.</p>

                <h6>TRAFFIC OF GOOD QUALITY</h6>
                 <p>By using guest post outreach services focused on technology, you can gain relevant traffic to your website and expand your potential consumer base through <strong>guest post + technology</strong> initiatives.</p>

                <h6>BRAND RECOGNITION</h6>
                 <p>Guest blog posting services will provide your brand a lot of exposure by mentioning it on other blogs.</p>

                <h6>CREATING CONNECTIONS</h6>
                 <p>Our Guest Posting Service assists businesses and organizations in obtaining backlinks by engaging in <Link href="/link-building-services" className="fw-normal">high-quality link-building</Link> activities. It will improve your SEO ranking and give you more online clout.</p>

                <h6>CREDIBILITY</h6>
                 <p>Consumers are more interested in your company's online presence and appearance. Guest Posting Submissions enable you to publish blogs on a variety of websites, therefore increasing your credibility.</p>  

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger mt-4 mb-3">Benefits of Using Guest Posting Servicess</h4>
                
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
                        Thoroughly Vetted Sites
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
                          Not every site is added to our list of guest blogging sites. We check at things like solid domain authority, domain life, organic traffic, indexed pages, and traffic location, among other things. Aside from stats, we search for sites with good professional design and a genuine vibe.
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
                        Contextual Links

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
                          As a reliable <strong>guest posting agency</strong>, we don't just place your link anywhere in the blog since we know how important it is to do it the right way. We deliver relevant traffic, authority, and visibility to your business through contextual backlinks.
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
                        Creating In-Depth Content


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
                          We firmly think that content reigns supreme and hence are the best guest post service provider. We have a team of skilled writers who put your brand at the forefront of everything we do, from content ideas to conceptualization to development and conversion copywriting.
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
                        Expert Content Writers

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
                          With your backlinks, the professional and creative team of specialist article and blog writers will generate distinctive content after thoroughly studying about your brand. Then, it will go through a series of quality checks before being posted on the sites, and we will run it by you as part of our <strong>guest posting services USA</strong>.
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
                        Fast Turn-Around Time
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
                          Within a month, we finish the entire procedure, from investigation to posting. We have guest blogging specialists who can generate a large volume of unique links each month. We strive diligently to fulfill deadlines and deliver a smooth experience for you.
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
                        Keyword-Focused Content
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
                          The quality of the article, and the website it is placed on, along with your relevancy to the post's subject are all factors to consider while guest blogging. As a result, the work is simply relevant to your company as well as targeted to your goods and services.
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
                        A Distant Voice
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
                          We don't hire poor writers or make cookie-cutter material; instead, our guest articles are engaging and have a distinct, active voice that engages readers and provides them with helpful information while being precise and informative.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className={Style.ContentDiv}>
                  <h2 className="mt-4 mb-3">Guest Posting Services in the USA</h2>
                  <p>Our <strong>guest posting services USA</strong> elevate the brand visibility with precision. Here’s what we do:</p>

                  <p><strong>Rank Higher On Search Engines’ Result Page:</strong> One of the key aims of our guest blogging services is to help your company rank higher on the results page of your preferred search engine, especially through targeted tech guest posts. Guest blogging may help you enhance your Google ranking and exposure by assisting you in obtaining links from reputable sites that go back to your website or service pages.</p>

                  <p><strong>Expand Your Audience:</strong> You will expose your brand to a large and focused audience when you include a link to your site on another blogger's website. As a result, you may enhance your traffic volume, connect with qualified prospects, and expand your client base.</p>

                  <p><strong>Reach Receptive Leads:</strong> By using our service, you can be confident that a link to your site will be posted on relevant sites with readers who are already interested in and responsive to your products.</p>

                  <p><strong>Build Brand Awareness and Reputation:</strong> Our strategy will help your brand be featured on major websites and will help you improve brand authority, reputation, and recognition.</p>

                </div>

                <div className={Style.ContentDiv}>
                <h2 className="mt-4 mb-3">Future Trends in Guest Posting Services</h2>
                <p>With new Google Updates being released every month or so, ranking factors are changing. Getting people's attention has never been more difficult. You're up against a sea of stuff, and your message needs to stand out.</p>

                <p>Guest posting trends have evolved towards quality rather than quantity. For significant, long-term partnerships, it all comes down to generating quality, authoritative content. Being a certified <strong>guest posting agency</strong>, we stay ahead by embracing trends like <strong>guest post + technology</strong> because creating guest post collaborations and establishing long-term relationships with technology blogs can greatly enhance brand visibility.</p>

                <p>Other rising trends include a targeted strategy. It is beneficial to find platforms and blogs that are relevant to you and it makes it easier for you to understand the topic. Plus, this ensures your content reaches its target audience and improves engagement. Additionally, guest blogging is no longer limited to text-based content. Visual elements in your guest posts like infographics, images, and videos may improve the user experience as images catch attention of more readers, and boost the possibility of sharing content.</p>

                </div>


                <div className={Style.ContentDiv}>
                  <h4 className="text-danger mt-4 mb-3">Why Choose Our Services?</h4>
                  <p>Tech2Globe will not guarantee hundreds of articles in a matter of days; instead, we will provide a restricted number of well-written pieces on high-authority websites with actual SEO value. That's because we value quality above quantity when it comes to content development, and we live and breathe that attitude. You're getting more than just a guest blogging service when you work with Tech2Globe's High-Quality Guest Blogging Services - you're getting a better reputation, a loyal and engaged audience, and the power of excellence.</p>

                  <p>Because of our years of experience, we can provide affordable Guest Posting Services. The links and articles you receive are always of higher quality. Your website will regularly rank at the top of search engines in this manner. Our work method has been tested and it has given best outcomes every time. With Tech2Globe, you can now go through the same procedure that has helped hundreds of businesses succeed.</p>
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

      <div className="tbhideforportfolio">
        <PortfolioTabs data={portfolio} title={'Our Portfolio'} description={'For its lifetime Tech2Globe has delivered hundreds of cost effective and high-quality software solutions for a wide range of industries and domains including consumer and business software development, e-commerce, retail, manufacturing, real estate, community services and many others.'} />
      </div>

      <div className="PhotoEditCaseStudies">
        <CaseStudiesService caseStudies={caseStudies} />
      </div>

      <div className="EmailMarketingTestimonials">
        <ClientSlider testimonials={testimonials} />
      </div>

      <FaqSection faqs={faqs} />

    </>
  )
};