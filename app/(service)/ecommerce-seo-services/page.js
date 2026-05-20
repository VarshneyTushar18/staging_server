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
     title: "Ecommerce SEO Services | Ecommerce SEO Company in USA ",

  description:
    "Tech2globe can help you gain higher visibility and reach millions of customers in the USA. Contact the Best eCommerce SEO company today for ecommerce SEO services.",

  keywords: [
    "Ecommerce SEO services",
    "SEO Services for Ecommerce Sites",
    "Ecommerce SEO Services India",
    "Ecommerce SEO Company",
    "Ecommerce SEO Agency",
    "Best ecommerce SEO Company",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/ecommerce-seo-services",
  },

  openGraph: {
    title: "Ecommerce SEO Services | Ecommerce SEO Company in USA ",
    description:
      "Tech2globe can help you gain higher visibility and reach millions of customers in the USA. Contact the Best eCommerce SEO company today for ecommerce SEO services.",
    url: "https://www.tech2globe.com/ecommerce-seo-services",
    siteName: "Tech2Globe",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Ecommerce SEO Services | Ecommerce SEO Company in USA ",
    description:
      "Tech2globe can help you gain higher visibility and reach millions of customers in the USA. Contact the Best eCommerce SEO company today for ecommerce SEO services.",
  },
};

const faqs = [
  {
    id: "One",
    question: "Why is SEO important for eCommerce websites?",
    answer: `
        E-commerce SEO helps your website receive more visitors, which enhances your brand's visibility. Once a visitor visits your website naturally, you may utilize sponsored retargeting ads to contact them again. SEO remarketing is a very powerful tactic.
      `,
  },
  {
    id: "Two",
    question: "What should I look for in an eCommerce SEO company?",
    answer: `
        There are various elements to consider, but the most crucial stage is to be clear about your SEO goals and objectives. Choose an agency that works with your long-term goals, as links are a prime example of short-term gain and long-term loss.
      `,
  },
  {
    id: "Three",
    question: "How long does it take to see results from eCommerce SEO?",
    answer: `
        Generally, it takes roughly 4-6 months to see benefits from eCommerce SEO efforts. However, a new site can take over a year to show returns, but an existing site can see benefits in as little as 30-90 days.
      `,
  },
  {
    id: "Four",
    question: "What are eCommerce SEO packages?",
    answer: `
        SEO (Search Engine Optimisation) packages are pre-defined sets of services a firm or agency provides to increase a website's exposure and rating on search engines such as Google, Bing, and Yahoo. Choose the package that best corresponds with your SEO revenue objectives and budget.
      `,
  },
  {
    id: "Five",
    question: "What additional services can an eCommerce SEO agency provide?",
    answer: `
        We offer eCommerce SEO services, which include Keyword research, Local SEO, Technical optimization, PPC, content creation/Marketing automation, and Conversion Rate Optimization. Our strategies concentrate on making your business more visible on the internet and increasing sales and customer support is a top priority for us.
      `,
  },
];

const pageHeaderData = {
  title: "ECommerce SEO Services",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Restaurant Menu Entry Services", path: "/restaurant-menu-entry-services" },
  { id: 2, name: "Financial Data Entry Services", path: "/financial-data-entry" },
  { id: 3, name: "Catalog Management", path: "/catalog-management-services" },
  { id: 4, name: "Data Processing Services", path: "/data-processing-services" },
  { id: 5, name: "Data Product Entry", path: "/product-data-entry-services" },
];

const usefullinks = [
  { id: 1, name: "Food Industries", path: "/food-industries-services" },
  { id: 2, name: "Non-profit Organization", path: "/non-profit-organizations-services" },
  { id: 3, name: "Medical And Health", path: "/medical-and-health-services" },
  { id: 4, name: "Translation Firms", path: "/translation-firms-services" },
];

const sidebarSections = [
  { heading: "Resources", links: resources },
  { heading: "Industries We Serve", links: usefullinks },
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

export default function EcommerceSeo() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="ECommerce Seo Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="ECommerce Seo Services" imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg" />
              <div className={Style.ContentDiv}>
                <h2>Introduction to eCommerce SEO Company</h2>
                <p>SEO is among the most appropriate and cost-effective techniques to grow and increase your online business or website sales. When your brand ranks first in search results, more people will see you and contact you.</p>
                <p>At Tech2Globe, one of the <strong>Best Ecommerce SEO companies in USA</strong>, we recognize that every business is different. Therefore, we've designed an inbound marketing approach that makes it easy for your customers to find you. We can assist you if you are a retailer trying to create sales from your eCommerce website.</p>

                              
              </div>

              <div className={Style.ContentDiv}>
                <h2>Why Should You Consider an eCommerce SEO Service?</h2>
                <p>Having an E-commerce site alone will not solve your online business difficulties. It would be best to use famous search engines to promote your website. You should improve your website rating to gain internet visibility. An ongoing SEO plan made by an eCommerce SEO company is the only way to improve this rating.</p>

                <p>Ecommerce SEO is a service that will positively influence your business by bringing massive traffic to your website, allowing your company to develop and generate more profits than ever before each month and year. Tech2Globe is an eCommerce SEO agency that has established its name by delivering unique projects on time and within budget. We have multiple satisfied clients globally who attest to our best eCommerce SEO services USA. We guarantee to produce the most outstanding results for you, with enough traffic sent to your website based on your potential/target consumers' terms.</p>

                                
              </div>

              <div className={Style.ContentDiv}>
                <h2>Benefits of Hiring an eCommerce SEO Company</h2>
                
                <p className="mb-0"><strong>Augment your In-House Team: </strong> Our <strong>eCommerce SEO packages</strong> fill gaps in your marketing team’s skills, handle tasks they can't, and offer cost-effective, expert solutions. Instead of the high costs of in-house staffing, hire an agency with ready-to-work professionals.</p>
                
                <p className="mb-0"><strong>Increase Efficiency:</strong> Your business will acquire improved exposure, and your site traffic will reach new heights with the aid of a focused strategy. More quality leads will be generated due to the increased traffic, which will result in more significant sales.</p>
                
                <p className="mb-0"><strong>Efficient, Productive, and Consistent:</strong> We have worked with various companies across several sectors, so we can swiftly assess your demands and create plans to meet them. Our ability to provide high-quality work on schedule and under budget is directly proportional to the number of clients we have worked with.</p>
                
                <p className="mb-0"><strong>Know-how of Latest Marketing Trends:</strong> We stay up to date on the newest Google algorithm changes that may affect your website traffic. Comprehending adjustments in SEO best practices may be a full-time job in itself. It is in the best interests of an eCommerce SEO service to be as current as possible.</p>
                
                <p><strong>Assurance of Success:</strong> We understand the significance of a long-term client relationship. Helping you achieve the outcomes you expect benefits the agency and you. We can achieve a win-win situation by maintaining a positive working relationship.</p>

              </div>  

              <div className={Style.ContentDiv}>
              <h2>Why Choose Our eCommerce SEO Packages?</h2>
              <p>The professionals at <strong>our eCommerce SEO agency</strong> are committed to deliver the best results to boost sales and profits, and all of our <strong>eCommerce SEO packages</strong> are results-driven. We effectively cover every aspect of eCommerce SEO in our packages, so you never have to worry. Once you've decided on a strategy, a specialized SEO executive will handle the significant tasks to guarantee that your website does not overlook anything crucial.</p>
              <p>We are here to assist you with detailed research, competition tracking, broken link analysis, keyword mapping, Google penalty removal, and more. Our team handles everything that can quickly increase traffic and sales on your website. Whether you have just opened your online store or manage a small or medium-sized business, our packages may help you increase your online sales and customer retention.</p>

              <h4 className="mt-4">Our Ecommerce SEO Services :</h4>
              <p>Increase your eCommerce conversions by establishing trust with the help of our <strong>eCommerce SEO company</strong>.
              </p>
               <p><strong>Research And Optimization Of Keywords.</strong>Our ecommerce SEO experts US will create proper keyword strategies to boost your online exposure and generate more quality leads. We undertake customer and competition analyses to identify the most relevant keyword searches. Our eCommerce optimization team uses up-to- date technologies and information to analyze keyword search traffic and ranking issues.</p> 

               <p><strong>Local Search Engine Optimization.</strong>With our local best eCommerce SEO services, you can get your items in front of your target market. We can assist you with anything from <Link href="/orm-services" className="fw-normal">online reputation management</Link>, on-page and off-page optimization to<Link href="/local-seo" className="fw-normal">Google My Business </Link>(GMB) listings and local citation building. With the help of our <strong>eCommerce SEO consultant</strong> experts, you can enhance traffic to your online business.</p> 

               <p><strong>Technical SEO.</strong>With <Link href="/seo-services" className="fw-normal">SEO services</Link> for eCommerce, you can improve your site's usability. We construct and optimize your whole site structure using best Google practices. Our SEO specialists will implement schema markup, troubleshoot technical issues, boost your site's efficiency and responsiveness, and optimize your product detail pages.</p> 

               <p><strong>PPC For eCommerce.</strong>You can reach out to your target market and get qualified leads for your expanding company. Our Ecommerce SEO packages are designed to provide top-of-funnel traffic to your website and convert leads into purchases. We do in-depth keyword research and optimization, construct personalized landing pages, and produce ads that emphasizes your value offer.</p> 

               <p><strong>Content Writing.</strong>With the correct SEO site content, you can attract and convert clients. Our expert writers have experienced writing skills for various industries' online storefronts. Our team has experience in producing product pages and descriptions, review answers and guest posts, and other sorts of SEO and SMM content.</p> 

               <p><strong>Automated Email Marketing.</strong>Our experts use <Link href="/email-marketing-services" className="fw-normal">Email marketing</Link> automation to increase sales and revenue. We develop targeted emails based on customer interests and purchases as a renowned eCommerce SEO business. Our eCommerce SEO expert produces responsive, well-designed emails, tests email marketing campaigns, and stays with your loyal consumers.</p> 

               <p><strong>Optimization Of Conversion Rates.</strong> We track your marketing success by analyzing your campaign's key performance indicators (KPIs). Our team does intensive keyword research, site audits, and A/B split testing. We use these strategies to improve the conversion rates with the help of data-driven recommendations.</p> 
              </div>

            <div className={Style.ContentDiv}>
              <h2>Why Choose Us?</h2>
              <p>We assist eCommerce businesses of all sizes, from startups to multibillion-dollar corporations, planning, designing, developing, and marketing their goods to achieve accurate results. We have a track record of producing positive outcomes on most major eCommerce platforms and is enhanced by our customized <strong>eCommerce SEO packages</strong>.</p>
              <p>Give your consumers the ease of purchasing online 24*7 from anywhere in the world. Our unique Ecommerce SEO services are created to help your company stand out from the crowd and outperform the competition. Allow the best eCommerce search engine optimization agency in the USA to assist you in expanding your company's market reach and converting more leads into consumers.</p>

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