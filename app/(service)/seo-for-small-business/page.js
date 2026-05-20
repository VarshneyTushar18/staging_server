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
import { FaAngleRight } from "react-icons/fa";

export const metadata = {
   title: "How to Find the Right SEO Service for Your Small Business ",

  description:
    "Understanding SEO is hard enough, let alone finding an agency you can trust. This post equips you with everything you need to know to get the right small business SEO services for your site—including what to look for, questions to ask, and terms to know.",

  keywords: "",

  alternates: {
    canonical: "https://www.tech2globe.com/seo-for-small-business",
  },

  openGraph: {
    title: "How to Find the Right SEO Service for Your Small Business",
    description:
      "Understanding SEO is hard enough, let alone finding an agency you can trust. This post equips you with everything you need to know to get the right small business SEO services for your site—including what to look for, questions to ask, and terms to know.",
    url: "https://www.tech2globe.com/seo-for-small-business",
    siteName: "Tech2Globe",
    type: "article",
  },

  twitter: {
    card: "summary",
    title: "How to Find the Right SEO Service for Your Small Business",
    description:
      "Understanding SEO is hard enough, let alone finding an agency you can trust. This post equips you with everything you need to know to get the right small business SEO services for your site—including what to look for, questions to ask, and terms to know.",
  },
};

const pageHeaderData = {
  title: "SEO Service For Small Business",
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
    question: "What is SEO and why is it important for my small business?",
    answer: `
        SEO stands for Search Engine Optimization and it is important for small businesses because your target audience is the audience that is most likely to interact with your content, purchase your products, and sign up for your services. Search engine optimization (SEO) helps you attract it. Customers will have an easier time finding what they are searching for on your website because it is designed to route people to the most essential product and landing pages on your website itself.
      `,
  },
  {
    id: "Two",
    question: " How can SEO help my business grow?",
    answer: `
        By increasing your online presence, local search engine optimization (SEO) helps you attract new consumers. Optimizing Google Maps and Google My Business may increase the number of direct calls, leads, and sales. We Optimize your website for localized phrases that will attract targeted visitors and improve leads.
      `,
  },
  {
    id: "Three",
    question: "Why are online reviews important for my SEO?",
    answer: `
        Because they serve as social proof of the quality of your company, reviews are an essential component of local search engine optimization (SEO). Your search engine results can be improved by reading positive reviews, which can bring in more clients. Regarding local search engine optimization, the number, frequency, and variety of reviews are crucial.
      `,
  },
  {
    id: "Four",
    question: "How much does SEO cost?",
    answer: `
        Comprehensive local search engine optimization services cost anything from $3,000 to $5,000 monthly. Most companies have budgets ranging from $500 to $10,000 every month. The hourly rate for SEO services ranges from $100 to $300 on average cost. Small companies should invest at least $500 monthly in search engine optimization (SEO) to see returns (Search Engine Journal).
      `,
  },
  {
    id: "Five",
    question: "How can I optimize my service pages for SEO?",
    answer: `
        To optimize a service page for SEO, start by selecting a keyword focus and using keyword tools to find relevant search terms. Then, take care of the on-page and technical SEO components, such as optimizing page titles, meta descriptions, headings, and image alt text. Internal linking to related content and including questions and answers can also improve user experience and SEO.
      `,
  },
];

export default function Seoforsmallbusiness() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Seo For Small Business" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Seo For Small Business" imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Our <strong>SEO Service for Small Business</strong> optimize your website and enhance online visibility. We ensure your site attracts more traffic from Google and other search engines.</p>

                              
              </div>

              <div className={Style.ContentDiv}>
                <h2>Comprehensive SEO Services for Small Businesses</h2>
                <p><strong>SEO service for a small business</strong> is essential for establishing a solid online presence and expanding your organization. SEO has no fast fixes or one-size-fits-all solutions, which is both art and part science. Finding affordable search engine optimization services may take a lot of work. That is why we are here to assist you.</p>

                <p>The internet business environment is fiercely competitive, increasing every day. Professional <Link href="/seo-services" className="fw-normal">SEO Services</Link> considering all aspects that affect your company's web visibility must continually compete online.</p>

                 <p>The benefits of a successful SEO strategy add up to more than the sum of the individual parts, from selecting the right target keywords to developing an effective linking strategy, developing a robust set of page titles and image tags, and keeping up with frequent changes from Google, Bing, and other search engines. We are well aware of this. And, without using any confusing geek jargon, we will assist you in better grasping what it means and how it pertains to expanding your business.</p>

                <p>Our affordable SEO services keep up with the fast changes in the internet world as SEO has progressed. We understand how the parts fit together and the possible influence on your company's web presence, from on-page content and business blogging to digital marketing, social media, online advertising, and content marketing, all while considering <strong>SEO for service based business</strong>.</p>

                 <p>SEO is an important component of establishing a solid online presence and expanding your organization. There are no fast fixes or one-size-fits-all solutions in SEO, which is both art and part science. Finding <strong>affordable search engine optimization services</strong> may be difficult. That is why, we are here to assist you.</p>

                <p>The internet business environment is fiercely competitive, and this is increasing every day. <strong>Professional SEO services</strong> that consider all aspects that affect your company's web visibility must continually compete in the online realm.</p>

                                
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger">Affordable SEO Service for Small Business</h4>
                <p>As a part of our <strong>small business SEO service</strong>, we exclusively work with clientele for whom we are confident in our ability to provide best outcomes. Therefore, before taking you on as a client, we conduct a preliminary audit. This audit determines the keywords you want to rank for, the strength of your competitors, and the resources available to you.</p>

                <h5>Researching Keywords</h5>
                <p>When it comes to <strong>SEO service for small business</strong>, one of the most common mistakes businesses make while making it easier for them to be found online is not targeting the right keywords. We undertake in-depth keyword analysis to find the most acceptable terms to bring your target clients to your platform.</p>

                <h5>Analysis Of Competitors</h5>
                <p>We examine your competitors' websites to see what keywords they value and what opportunities are available to you. We also use the authority of their website as a benchmark for where we need to take you ahead of.</p>

                <h5>Technical Improvements</h5>
                <p>We make sure that all of these <Link href="/technical-seo" className="fw-normal">technical seo</Link> parts are completed correctly so that your website has the maximum chance of appearing in the top list for your selected keywords.</p>

                <h5>On-Page Enhancement</h5>
                <p>Once we've determined the best keywords to target, we'll increase your traffic and direct your ideal consumers your way.</p>
                
                <h5>Off-Page Search Engine Optimization</h5>
                <p>We perform <strong>SEO for service based business</strong> to work smart and help them gain as many organic links as possible to help you outrank your competitors since Google counts each link to your site as a vote.</p>

              </div>  

              <div className={Style.ContentDiv}>
                <h2>Premier SEO for Service Based Business Local and Nationwide Success</h2>
                <p>We will deliver the best combination of <strong>SEO for service based business</strong>, whether you require local Search Engine Optimization (SEO) services or have a countrywide target market. We can help you get a competitive advantage by guiding you through this process.</p>

                <p>Ranking highly for the keywords your potential consumers use to discover you in major search engines like Google, Yahoo!, and Bing is the first step in establishing a solid web presence. We can help you develop a complete <Link href="/smo-services" className="fw-normal">SMO Service</Link> and digital marketing plan that will help you outrank your competitors in the search results, from technical SEO optimization for your website, keyword and competitive analysis, and link building.</p>

               </div> 

              <div className={Style.ContentDiv}>
                <h2>SEO for Service Based Business: Before You Start</h2>
                <p>Devise a <strong>small business SEO service</strong> strategy.</p>

                <h5>Focus on Your Target Keywords</h5>
                <p>Your keywords assist Google in deciding how relevant your site is to what the user is looking for. For example, if someone is looking for an air conditioner repairman on the coast, air conditioner repairs, or something similar, you must have all of the terms that they may Google on your site.</p>

                <h5>Get Ready for Crawling</h5>
                <p>Google "crawls" websites to discover keywords, then utilizes those keywords to determine how relevant your website is compared to other websites. On your website, you need to have material that is fresh, unique, relevant, and well-written. Additionally, it would help if you incorporated your keywords in the text. Putting critical information on photos is not a good idea because crawling cannot be done on them.</p>

                <h5>Meta Tags</h5>
                <p>It is essential to have meta tags since they affect how your website appears in search engine results pages (SERPs) and the number of people likely to click through to your website. Your traffic and engagement rates will be affected, affecting your search engine optimization and results. Meta tags are an essential component of an effective search engine optimization strategy.</p>

                <h5>List Your Business in Directories</h5>
                <p>Another <strong>SEO for service based business</strong> strategy is to be sure to be included in all of the critical business directories, such as Google Plus, but always utilize the same information from each directory. This will contribute to the development of valuable backlinks to your website and demonstrate to Google that you are authentic.</p>
                
                
                <h5>Consistently Share Authoritative Content</h5>
                <p>Google favors websites that are active and constantly updated. Therefore, it is essential to have a blog that is of good quality and is updated regularly. This can help you improve your SEO health very quickly. It is necessary to ensure that your keywords are judiciously distributed across all of the material, and you should also publish these blogs on your various social media sites.</p>

                             
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
                        Preliminary Examination
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
                          We exclusively work with clientele for whom we are confident in our ability to provide best outcomes. That's why, before we take you on as a client, we run a preliminary audit to determine the keywords you want to rank for, the strength of your competitors, and the resources available to you.
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
                         Researching Keywords
                                
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
                          When it comes to SEO, one of the most common mistakes businesses do while making it easier for them to be found online is not targeting the right keywords. We undertake in-depth keyword analysis to find the most acceptable terms to bring your target clients to your platform.
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
                        Analysis Of Competitors
                                

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
                          We examine your competitors' websites to see what keywords they value and what opportunities are available to you. We also use the authority of their website as a benchmark for where we need to take you ahead of.
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
                         Technical Improvements
                                
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
                          We make sure that all of these technical parts are completed correctly so that your website has the maximum chance of appearing in the top list for your selected keywords.
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
                        On-Page Enhancement
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
                          Once we've determined the best keywords to target, we'll increase your traffic and direct your ideal consumers your way.
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
                        Off-Page Search Engine Optimization
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
                          We work hard to gain you as many organic links as possible to help you outrank your competitors since Google counts each link to your site as a vote.
                        </p>
                      </div>
                    </div>
                  </div>
                <p>We will deliver the best combination of <strong>SEO services for small businesses</strong> for you, whether you require <Link href="/local-seo">local Search Engine Optimization (SEO) services</Link> or have a countrywide target market. We can help you get a competitive advantage by guiding you through this process.</p>

                <p>Ranking highly for the keywords your potential consumers use to discover you in major search engines like Google, Yahoo!, and Bing is the first step in establishing a solid web presence. Tech2Globe can help you develop a complete SEO and digital marketing plan that will help you outrank your competitors in the search results, from technical SEO optimization for your website to keyword and competitive analysis to link building.</p>
                </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger">Why Choose Us for Small Business SEO Service in the USA?</h4>
                <p>Because we collaborate with our customers to understand their objectives and needs before making any changes, we are the best choice for small business SEO services. We want to create a long-term plan that works with your marketing goals and contributes to your company's overall success rather than merely increasing traffic.</p>

                <p><strong>Small business SEO service</strong> includes a dedicated account manager. This account representative will be available at all times to answer questions, offer support, and connect with you. You can contact or email them and get a quick answer from a reliable person.</p>
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