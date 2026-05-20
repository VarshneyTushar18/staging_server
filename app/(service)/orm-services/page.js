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
  title: "ORM Company | Online Reputation Management | Tech2globe",

  description:
    "Looking an ORM Company? Reputation is everything. We understand it &amp; so is our online reputation Management Services team. Hire ORM Services.",

  keywords: "",

  alternates: {
    canonical: "https://www.tech2globe.com/orm-services",
  },

  openGraph: {
    title: "ORM Company | Online Reputation Management | Tech2globe",
    description:
      "Looking an ORM Company? Reputation is everything. We understand it &amp; so is our online reputation Management Services team. Hire ORM Services.",
    url: "https://www.tech2globe.com/orm-services",
    siteName: "Tech2Globe",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "ORM Company | Online Reputation Management | Tech2globe",
    description:
      "Looking an ORM Company? Reputation is everything. We understand it &amp; so is our online reputation Management Services team. Hire ORM Services.",
  },
};

const pageHeaderData = {
  title: "How Our ORM Services Help Companies Grow",
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
    question: "What is Online Reputation Management (ORM)?",
    answer: `
        The process of monitoring, influencing, and enhancing an individual's or a corporation's reputation on the Internet is referred to as Online Reputation Management, or ORM for short. Because of the growth of online platforms like social media, company directories, and review websites, maintaining a favorable reputation on the Internet is becoming increasingly important.
      `,
  },
  {
    id: "Two",
    question: "Can ORM services remove negative content from the internet?",
    answer: `
        To manage negative reviews, remove them immediately or stack positive feedback on top. Respond professionally to negative comments, offering specific steps for a bad experience. Monitor brand mentions using listening tools to identify unintentional negative content. Clear misunderstandings and address fake negative reviews to maintain a positive brand reputation.
      `,
  },
  {
    id: "Three",
    question: "Why is ORM important for businesses?",
    answer: `
        Online reputation management (ORM) is a collection of tactics and technologies used to monitor, maintain, and improve your company's online image. Our <strong>reputation monitoring services</strong> watch over your online appearance and brand trustworthiness. In the highly linked world of Google search, your reputation precedes you from every direction. ORM ensures that your reputation shines brightly.
      `,
  },
  {
    id: "Four",
    question: "How can I measure the effectiveness of ORM efforts?",
    answer: `
        To analyze the effectiveness of your ORM efforts you need tools such as Google Analytics, Google Search Console, or SEMrush. With the help of these tools you can measure the organic traffic, bounce rate, dwell time, click-through rate, conversion rate, etc.
      `,
  },
  
];

export default function OrmServices() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Orm Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Orm Services" imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg" />
              <div className={Style.ContentDiv}>
                <p>As the <strong>best ORM service agency</strong> out there, we stand as your trusted partner to provide comprehensive <Link href="/digital-marketing-services" className="fw-normal">digital marketing solutions</Link>. We focus on enhancing your online reputation, ensuring you shine brightly in the digital sphere. Here’s how we can help:</p>

                <p>The practice of assessing, observing, following, and having productive dialogues about your brand, professional, and personal identities on the Internet is known as online reputation management. Online Reputation Management has become an integral part of any brand reputation management strategy. The most crucial thing a corporation can do is protect its brand image. Businesses are constantly falling prey to damaging fraud accusations that wreak havoc on their reputation.</p>

                <p>Negative comments damage your company's online reputation, harming your trustworthiness and leading to a significant loss of revenue, if not the entire organization.</p>

                <p>As an <strong>ORM service provider</strong>, it's critical to keep track of what others are saying about you online and address any inconsistencies. We have established ourselves as the premier Online Reputation Management company, having worked with customers worldwide. We understand that reputation management is about producing good feedback and overcoming bad feedback. It is also about creating a brand aligned with the company's fundamental values.</p>


              </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger">Benefits of Using ORM services</h4>
                <p>With the rise of digitization, businesses are devoting resources to expand their online presence since everyone is impacted by online marketing. Because the Internet is so widely available, more than 80% of organizations use digital marketing tactics to keep up with the digital world's trends. As an experienced <strong>ORM Service provider</strong>, we offer comprehensive solutions to manage your online reputation. You can enjoy the following advantages by partnering with our <strong>best ORM services company in USA</strong>.</p>

                <p>Increase Customer Trustworthiness: A good ORM approach assists in the development of trust and strengthens the emotional tie between the company and its customers. An online reputation management business aids positive evaluations and feedback on social media platforms. In this sense, it acts as word-of-mouth promotion, ensuring your company's trustworthiness.</p>

                <p>Removing Unfavorable Publicity: Negative reviews might hurt your company's reputation. It is one of the factors that contribute to low search engine rankings. You can overcome this problem by hiring Tech2Globe, the finest Online Reputation Management Services company. We help you to build positive links and ensure sharp content marketing, lowering your negative impression from the top of the search engine results page.</p>

                <p>Increased Exposure And Sales: On The Internet Expert Online Reputation Management Services can improve your website's exposure in search engines using intelligent strategies. As your exposure grows, so will your consumer base.</p>

                <p>Reporting: A weekly or monthly detailed ORM report is sent to our clients. This report highlights what we are doing to help them retain a positive internet reputation. It also assists them in determining what is beneficial to their internet reputation.</p>


              </div>


              <div className={Style.ContentDiv}>
                <h2>Why Choose Our ORM Services ?</h2>
                <p>We are a well-known <strong>best ORM services company in USA</strong> that provides dependable ORM services. We help you manage your online reputation and promote an excellent image for your company. We use a customer-centric methodology and provide each client with an industry-specific, bespoke digital strategy. Our professionals monitor continuously to keep track of your brand's online buzz. We have a great team of trained specialists with years of expertise.</p>

                <p>We've built many successful campaigns for hundreds of satisfied clients. Our professionals believe in providing clients with cost-effective solutions that generate a high return on investment. We use the most up-to-date trends and tactics to get the best results with our campaigns. We provide our clients with consistent reports to ensure they choose the most exemplary ORM partner for their needs.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger mb-4">Our Services For Online Reputation Management :</h4>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                    <div className="card p-3 gap-2 shadow-sm text-center h-100">
                      <div className="text-center">
                        <FaCogs className="fs-1 text-center" />
                      </div>
                      <h5>Handling of Crises</h5>
                      <p>We ensure that your brand has a competitive advantage over others by ensuring that our highly trained ORM team minimizes the impact of existing crises and upcoming crises. We focus on eliminating all kinds of crises while causing the least harm possible since we are the best online reputation management company.</p>
                    </div>
                  </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                    <div className="card p-3 gap-2 shadow-sm text-center h-100">
                      <div className="text-center">
                        <FaBullhorn  className="fs-1 text-center" />
                      </div>
                      <h5>Public relations strategy</h5>
                      <p>We are the best at public relations, and we will bring your business the attention it deserves. We will also assist you in earning and significantly improving your company's online reputation management services before your target audience.</p>
                    </div>
                  </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                    <div className="card p-3 gap-2 shadow-sm text-center h-100">
                      <div className="text-center">
                        <FaExpandArrowsAlt className="fs-1 text-center" />
                      </div>
                      <h5>Evaluation of Management</h5>
                      <p>By utilizing our cutting-edge services for review management, we can enhance how each user perceives your company. We will monitor the reviews for your company that have the potential to reduce your ratings and remove them in a good manner.</p>
                    </div>
                  </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                    <div className="card p-3 gap-2 shadow-sm text-center h-100">
                      <div className="text-center">
                        <FaPenNib className="fs-1 text-center" />
                      </div>
                      <h5>Google Autofill</h5>
                      <p>This is a really valuable quality to possess. Google Autofills can significantly influence your company's positive reputation. By providing only positive ideas, this feature boosts the likelihood of accomplishing your goals.</p>
                    </div>
                  </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                    <div className="card p-3 gap-2 shadow-sm text-center h-100">
                      <div className="text-center">
                        <FaDesktop className="fs-1 text-center" />
                      </div>
                      <h5>Online Monitoring</h5>
                      <p>When it comes to monitoring your internet reputation consistently, we use the most advanced digital instruments. Through our online reputation management services, we provide individualized solutions to bridge the gap between the quality of your services and the level of happiness your customers feel.</p>
                    </div>
                  </div>

                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                    <div className="card p-3 gap-2 shadow-sm text-center h-100">
                      <div className="text-center">
                        <FaSearch className="fs-1 text-center" />
                      </div>
                      <h5>Social Media Monitoring</h5>
                      <p>By working with us, you can improve and monitor your presence on social media. Using our extensive expertise and specialized social media monitoring technologies, we will analyze your brand and make it more engaging than it was previously.</p>
                    </div>
                  </div>          
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Protecting Your Brand Integrity: The Importance of ORM in Today's Digital World</h2>
                <p>ORM and its significance in digital marketing can be expressed for several reasons. It affects consumer actions, search engine results, brand reliability, and issues solving. Positive reviews/reputations are likely to encourage consumers, while negative reviews/disreputable images will likely discourage consumers.</p>

                <p>ORM works on increasing the ranking of websites in search engine results, establishes the reliability of the business or the personality online, and facilitates dealing with negative events. This, in turn, ensures that more and more customers and partners put their trust in the particular organization’s products or services.</p>

                <p>Online reputation management (ORM) has become an essential digital marketing component in the present business environment. People and businesses must take proactive measures to control their internet presence, which helps their reputation and maintains a favorable image. Understanding the relevance of ORM, we adopt successful tactics as an <strong>ORM service provider</strong>. We assist businesses in developing long-lasting credibility and trust among their target audience.</p>

              </div>


              <div className={Style.ContentDiv}>
                <h2>From Crisis Management to Brand Enhancement: How ORM Services Can Make a Difference</h2>
                <p>Online reputation management has an unbreakable link to crisis management. A tarnished online reputation may turn a little problem into a full-fledged disaster, whereas an efficient <strong>ORM Service provider</strong> like us can reduce the impact of a crisis. In addition, during a crisis, stakeholders such as consumers, investors, and partners use online platforms to assess a company's reaction. What individuals read, see, and hear online will affect their favorable or negative perceptions. Thus, preserving an internet reputation during a crisis becomes essential to a crisis communication plan.</p>

                <p>When it comes to brand enhancement, our <strong>reputation monitoring services</strong> include various strategies that help an organization present a favorable picture online. They are specifically built to maximize search engine results, <Link href="/smo-services" className="fw-normal">social media</Link>, and other online platforms. Outsourcing to a respectable <strong>ORM service agency</strong> is the major strategy. The services improve brand monitoring, which makes search regulation more practicable. ORM makes it easier for the firm to locate online, even when searching for similar content.</p>


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
                        Public Relations Firm
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
                          The internet reputation of a public relations firm is equally crucial. We provide them with the best <strong>Online Reputation Management Services</strong> available. It enables them to be more approachable to the general people, therefore improving their public image.
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
                        Government

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
                          In today's world, even the Government wants internet reputation management services. The opposition party is always attempting to smear the image of the ruling party. Our <strong>ORM Company in Delhi</strong> provides the Government with the best and most trusted online reputation management services available to address this issue.
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
                        Manufacturing


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
                          In the manufacturing industry, competitors are continuously seeking to smear others' internet reputations. Our <strong>Online Reputation Management Services</strong> assist the manufacturing businesses in boosting their online reputation and protecting it against bad reviews.
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
                        Lawyers ORM

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
                          Lawyers mainly rely on their reputation. Clients frequently look for a lawyer's web reviews before moving ahead to use their services. Lawyers can use our <strong>Online Reputation Management Services</strong> to keep their internet reputations in good shape.
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
                        Doctors ORM
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
                          With our Online Reputation Management Services, we assist your services by enhancing your online reputation and increasing your positive awareness among the audience.
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
                        Services For Brand Reputation Management
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
                          Brands must keep their internet reputation under control. We assist the company in promoting its positive image while also protecting it from the unwanted press. We track a brand's internet popularity daily.
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
                        ORM Hotel And Restaurant
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
                          The majority of customers choose hotels and restaurants based on reviews found on the Internet. Our internet reputation management services assist them in gaining favorable comments from recent customers, travel experts, food bloggers, and other bloggers.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>


                <div className={Style.ContentDiv}>
                  <h4 className="text-danger mt-5 mb-3">Why Choose Our ORM Services?</h4>
                  <p>Tech2Globe is a well-known <strong>Online Reputation Management Company in India</strong> that provides dependable ORM services. We help you by managing your online reputation and promoting an excellent image for your company. We use a customer-centric methodology and provide each client with an industry-specific, bespoke digital strategy. Our professionals do continuous real-time monitoring to keep track of your brand's online buzz. We have a great team of trained specialists with years of expertise.</p>

                  <p>We've built many successful campaigns for hundreds of satisfied clients throughout the years. At Tech2Globe, we believe in providing clients with cost-effective solutions that generate a high return on investment. To get the best results with our campaigns, we use the most up-to-date trends and tactics. We provide our clients with consistent reports to ensure that they choose the most exemplary ORM partner for their needs.</p>
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