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
    "Best Google Remarketing services | Advanced Google Remarketing - Tech2Globe",

  description:
    "Unlock the power of advanced Google Remarketing with Tech2Globe’s best-in-class services. Maximize ROI and drive conversions effectively.",

  alternates: {
    canonical: "https://www.tech2globe.com/remarketing-services",
  },

  openGraph: {
    title:
      "Best Google Remarketing services | Advanced Google Remarketing - Tech2Globe",
    description:
      "Unlock the power of advanced Google Remarketing with Tech2Globe’s best-in-class services. Maximize ROI and drive conversions effectively.",
    url: "https://www.tech2globe.com/remarketing-services",
    siteName: "Tech2Globe",
    type: "website",
  },

  twitter: {
    card: "summary",
    title:
      "Best Google Remarketing services | Advanced Google Remarketing - Tech2Globe",
    description:
      "Unlock the power of advanced Google Remarketing with Tech2Globe’s best-in-class services. Maximize ROI and drive conversions effectively.",
  },
};

const pageHeaderData = {
  title: "Remarketing Services",
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

export default function Remarketing() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Remarketing Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Remarketing Services" imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg" />
              <div className={Style.ContentDiv}>
                <p>According to statistics, 98 percent of visitors to your website will depart without purchasing anything. It implies developing successful techniques for analyzing why these visitors left. Enticing them to return to your site in the future to make a purchase is critical to the profitability of your organization. Tech2Globe recognizes the significance of having your remarketing plan reflect your brand and objectives. With knowledge from all aspects of <Link href="/digital-marketing-services" className="fw-normal">digital marketing</Link>, we will be your devoted and reliable partner in achieving your business goals. Tech2Globe recognizes the significance of having your remarketing plan reflect your brand and objectives.</p>

                <p>With knowledge from all aspects of <Link href="/digital-marketing-services" className="fw-normal">digital marketing</Link>, we will be your devoted and reliable partner in achieving your business goals. Our <strong>Google Remarketing Agency</strong> offers dynamic remarketing services that produce outstanding results for our client's businesses. You can reach your company goals while staying within your budget with our industry-leading <strong>Google Remarketing services</strong>. Our team brings its knowledge and experience together to create remarketing strategies that increase sales, leads, and income.</p>

                              
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger">What Are The Benefits Of Remarketing Services?</h4>
                <p>With remarketing ad campaigns, you may reach out to clients who have either switched to another brand or forgotten your name. You may even target clients who have only visited your website's front page once. This type of marketing maintains your brand in front of potential customers looking for your products and services. To stay in front of your competition in today's fast-paced digital market, it's critical to be visible around your targeted audience.</p>

                <p>You receive the most significant marketing experience and results with our extensive remarketing knowledge. Tech2Globe is a top Remarketing Services Company in India that provides you with immediate access to some of the industry's most competent marketers. Our professionals assist you with real-time success in your business, thanks to their skills and expertise. We'll show you some innovative methods to utilize remarketing to your advantage. We focus on developing your brand's identity in the virtual world with our innovative remarketing services. Our Google Remarketing services are available to help you with :</p>

                <p><strong>Increase Conversions</strong> Many visitors do not immediately make a purchase. Retargeting can re-engage customers and increase conversion rates.</p>

                <p><strong>Increase Brand Awareness</strong> The most straightforward approach is using Google Remarketing to significantly enhance your brand's exposure with photographs that may appeal to your clients.</p>

                <p><strong>Reach Target Audience </strong> As an <strong>Adwords Remarketing Agency</strong>, we can generate highly targeted advertisements delivered to appropriate users depending on their interest.
</p>

                <p><strong>Right Positioning</strong> Because of the defined time points, these ads are viewed by those who are likely to buy your product or service. It pops up to them after they switch from your website.</p>

                <p><strong>Get Free Conversions</strong>Some people notice our advertisements but do not click on them; instead, they visit our websites directly. This is known as "View-through conversions.”</p>

                                
              </div>

              

              <div className={Style.ContentDiv}>
                <h4 className="text-danger mb-3">Our Services For Remarketing :</h4>
               
               
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
                        Google AdWords
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
                          We have a big team of Remarketing campaign professionals who assist you with Google Adwords, which aims to reach the most potential audience and encourage them to revisit your website.
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
                         AdRolls Services
                                
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
                         Our team is an expert in the field of adroll advertisements. Many platforms, such as Google, Yahoo, and Bing, are accessible for this advertising procedure.
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
                        User Retargeting
                                

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
                          Our remarketing team focuses on retargeting people who have previously visited your website. The retargeting strategy is used to turn customers into leads.
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
                        Video Remarketing
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
                          Using Google and YouTube remarketing technologies, we create films to show your products and services to those who visited your site. Tech2Globe is a top <strong>Retargeting and Remarketing agency</strong> in India that has assisted several companies in recapturing the attention of their most valued customers.
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
                         Search Remarketing
                                
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
                          We create remarketing ads for customers who have previously visited your websites. On search engines, search remarketing is the most effective technique to target the largest possible audience. We have a team of talented ad campaign designers who can create effective search remarketing advertisements for your company.
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
                        Display Remarketing
                                

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
                          The most well-known type of marketing is display remarketing, which should be considered in every digital advertising strategy. Different platforms, such as YouTube, Facebook, Instagram, Twitter, and blogging sites, all carry display adverts.
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
                        Dynamic Remarketing
                                

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
                          With our dynamic remarketing services, we are bringing remarketing to the next level. It is the practice of retargeting items and services to clients who have already visited your website or downloaded your mobile app. It's more akin to retargeting clients who have expressed an interest in your goods and services.
                        </p>
                        <p className="para-text">
                          We are the top <strong>Remarketing Agency in Delhi NCR</strong>, and we use innovative digital marketing services to drive customers to the bottom of your sales funnel.
                        </p>  
                      </div>
                    </div>
                  </div>

                </div>

              
              <div className={Style.ContentDiv}>
                <h4 className="text-danger mt-3">Why Choose Us?</h4>
                <p>In India, Tech2Globe is a renowned <strong>Google Remarketing Services</strong> provider. We work to grow your company's sales and revenue. Our staff concentrates on creating high-quality leads and keeping your company at the forefront of people's minds. We offer a marketing team that will plan, create, implement, and track your campaigns.</p>

                <p>To provide you with a tailored experience, our team creates specific remarketing tactics. We leverage cutting-edge marketing trends and technology to help you achieve tremendous economic success. Our <strong>Remarketing Agency</strong> provides our consumers with best results at the most affordable costs.</p>
                          
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

    </>
  )
};