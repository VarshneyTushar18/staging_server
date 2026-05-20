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
  title: "Best Reputation Management Services Providers in 2023 | Tech2globe",
  description:
    "Ready to take control of your reputation? Choose from our list of top reputation management services (review management services, brand mention tools, and NPS).",
  keywords: "",

  openGraph: {
    title: "Best Reputation Management Services Providers in 2023 | Tech2globe",
    description:
      "Ready to take control of your reputation? Choose from our list of top reputation management services (review management services, brand mention tools, and NPS).",
    url: "https://www.tech2globe.com/corporate-reputation-management-services",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Best Reputation Management Services Providers in 2023 | Tech2globe",
    description:
      "Ready to take control of your reputation? Choose from our list of top reputation management services (review management services, brand mention tools, and NPS).",
  },

  alternates: {
    canonical:
      "https://www.tech2globe.com/corporate-reputation-management-services",
  },
};

const pageHeaderData = {
  title: "Corporate Reputation Management Services",
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

export default function CorporateReputationManagement() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Corporate Reputation Management Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Corporate Reputation Management Services" imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Corporate reputation management is a collection of commercial tactics used to influence consumer perceptions of a company. When choosing a firm in today's highly competitive industry, customers study previous customer reviews from the internet and social media platforms. It forces companies to engage in excellentCorporate Reputation Management Services to project a clear picture of their company and stand out from the competition.</p>

                <p>Companies typically seek such services when they notice that their internet image has been harmed, which eventually harms their brand image.</p>

                <p>The desire to improve a brand's online reputation leads them to seek out a respected digital marketing business, such as Tech2Globe, that provides online Corporate Reputation Management Services.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger">What Are The Benefits Of Reputation Management Services?</h4>
                <p>Following are some of the benefits of using Corporate Reputation Management Services:</p>

                <p className="mb-0">
                  <FaAngleRight /> Remove any bad feedback from your company&apos;s profile.
                </p>
                <p className="mb-0">
                  <FaAngleRight /> Make a positive internet presence.
                </p>
                <p className="mb-0">
                  <FaAngleRight /> Negative results will be removed from various social media networks.
                </p>
                <p className="mb-0">
                  <FaAngleRight /> Provide search engines with good suggestions.
                </p>
                <p className="mb-0">
                  <FaAngleRight /> Remove negative company reviews and unjustified complaints.
                </p>
                <p>
                  <FaAngleRight /> Increase the amount of good online material.
                </p>

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger">Tech2Globe's Corporate Reputation Management Strategies</h4>
                <div className="card bg-light p-3 mb-3 border-sm">
                  <p className="mb-0"><strong>Monitoring Of Remarks And Comments </strong>Your brand-related comments will be monitored and evaluated by our professional team. If they consist of negative comments, our team will create positive content on other websites to boost your internet profile.</p>
                </div>
                <div className="card bg-light p-3 mb-3 border-sm">
                  <p className="mb-0"><strong>Analysis Of Consumers Opinions</strong> We look at the perspectives of your consumers and how they engage with your brand. They will assist boost your brand's appeal and have a good impact on your users or consumers, resulting in increased ROI.</p>
                </div>
                <div className="card bg-light p-3 mb-3 border-sm">
                  <p className="mb-0"><strong>Analyze The Viewpoints Of Competitors</strong> We at Tech2Globe also keep an eye on your competitors. Before starting the process, our experts believe that you should first learn about your competition. This helps in learning where they stand in the market.</p>
                </div>
                <div className="card bg-light p-3 mb-3 border-sm">
                  <p className="mb-0"><strong>The Global Review's Analysis</strong> We analyze your company's reviews as a trustworthy <strong>Corporate Management Services</strong>. They may also assist you in increasing overall income and converting people to customers.</p>
                </div>
                <div className="card bg-light p-3 mb-3 border-sm">
                  <p className="mb-0"><strong>Making A Strategy Or Dealing With The Consequences</strong> We examine negative feedback and devise an excellent approach to address it. We offer a range of approaches and skills as well. We have certified high-skilled experts that can assist you in reaching new heights in your industry.</p>
                </div>
                <div className="card bg-light p-3 mb-3 border-sm">
                  <p className="mb-0"><strong>Remove Negative Corporate Reviews</strong> By reporting messages and profiles, we at Tech2Globe would be able to eliminate lousy company feedback. Our expert professionals possess the expertise and experience to help you revitalize your brand and produce favorable responses.</p>
                </div>
                <div className="card bg-light p-3 mb-3 border-sm">
                  <p className="mb-0"><strong>Increases Positive Web Content And Reviews</strong> We assist your firm in improving its site content as a vastly experienced organization. Our professionals will work with you to increase site content and feedback to help your business become more reliable in customers’.</p>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger">Why Should You Use Tech2Globe?</h4>
                <p>Through numerous internet profiles, our corporate brand management professionals at Tech2Globe thoroughly check the company's online presence and rectify any flaws with your brand identification. We are the best Corporate Management Services Service Provider and have simplified our procedures to improve your results while lowering our costs.</p>

                <p><strong>Personalized Strategy:</strong> We thoroughly examine your reputation and devise a customized approach to obtain best outcomes at the lowest possible cost.</p>
                <p><strong>Best Price:</strong> Our professionals employ the most cost-effective methods to eliminate harsh information and promote good content, resulting in quick and best outcomes!</p>
                <p><strong>Unparalleled Results:</strong> We deliver the best and reliable results to all our clients that makes them stand out from their competition.</p>
                <p><strong>Confidentiality That You Can Trust:</strong> You may rest sure that your reputation is in good hands with our team. We work under a non-disclosure agreement and keep all your work private and confidential.</p>
                <p><strong>Experience And Creativity:</strong> Tech2Globe is constantly evolving to keep up with Google's algorithm. We help you with our up-to-date services and management that is done by optimistic branding experts!</p>
                <p><strong>Excellent Customer Service:</strong> Our commitment is to assist you in achieving your goals! We work with our clients to establish a good internet presence. We provide you with regular updates and information of the process that we have undertaken to help your company get the best results.</p>
                <p>Tech2Globe, the best Corporate Management Services Service Provider, extensively analyzes your company's online presence and corrects any flaws with your brand identification across various online profiles. We improve your company's internet reputation by eliminating any negative reviews. We employ the right ideas and approaches to bring your brand to the forefront and assist you in obtaining genuine feedback.</p>

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