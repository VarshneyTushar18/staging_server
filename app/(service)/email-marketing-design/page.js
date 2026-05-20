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

export const metadata = {
    title:
    "Design High-Performing Email Campaigns | Email Marketing | Tech2Globe",

  description:
    "Design high-performing email marketing campaigns with Tech2Globe. Our expert email designers create visually compelling, conversion-focused email templates that drive engagement.",

  keywords: [
    "email marketing design",
    "email campaign design",
    "email template design services",
    "email marketing services",
    "responsive email design",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/email-marketing-design",
  },

  openGraph: {
    title:
      "Design High-Performing Email Campaigns | Email Marketing | Tech2Globe",
    description:
      "Design high-performing email marketing campaigns with Tech2Globe. Our expert email designers create visually compelling, conversion-focused email templates that drive engagement.",
    url: "https://www.tech2globe.com/email-marketing-design",
    siteName: "Tech2Globe",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Design High-Performing Email Campaigns | Email Marketing | Tech2Globe",
    description:
      "Design high-performing email marketing campaigns with Tech2Globe. Our expert email designers create visually compelling, conversion-focused email templates that drive engagement.",
  },
};

const pageHeaderData = {
  title: "Email Marketing Design",
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
  { id: 8, name: "Life@Tech2Globe", path: "/life-at-tech2globe" },
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

export default function emailmarketing() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Email Marketing Design" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Email Marketing Design" imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg" />
              <div className={Style.ContentDiv}>
                <p>The design may make all the difference in the performance of your email branding – signatures, banners, and newsletters. With Tech2Globe, you can either let your imagination run wild with our simple design templates or brief us to create designs for you as part of our email marketing campaign services.</p>

                <p>It's not just being on-brand for email marketing design; it's also about getting results and using creativity to increase click-through rates. That's why Tech2Globe's expert designers are dedicated to ensuring that every email signature, banner, and newsletter design creates an impression that is simple to browse, and prompts action to engage your audience.</p>

                <p>We will produce campaign language and compelling clickable call-to-action (CTAs) in addition to creative design to guarantee that your email branding generates a direct critical response. It's what our experienced design team does every day, so we know what works (and what doesn't) to ensure that your email marketing design achieves the most excellent results.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger">Our Email Marketing Design Services :</h4>
                <p><strong>Designing An Email Signature </strong> Tech2Globe will take your email signatures to the next level, with the ability to integrate links to videos, documents, business card downloads, newsletter sign-ups, and much more. You can utilize our email template design service or brief our email designers to develop a unique signature for you. Our design services guarantee that your email signatures are on-brand with clear contact information and compelling calls-to-action, making email signature design a critical component of your more considerable marketing effort. Furthermore, all signatures in Tech2Globe's responsive email design are dynamically streamlined to suit the information contained. They are mobile-optimized to appear correctly and easy to use on any device. After all, 53% of emails are opened on mobile devices, so making sure your email marketing graphics are pixel-perfect is critical for your company.</p>

                <p><strong>Designing An Email Banner</strong> A branded email banner can create a big impression right away and serve as the perfect display for your email marketing design skills. With the flexibility to execute many targeted ads simultaneously, you can attractively present anything from powerful branding and critical marketing messaging to sign-ups and surveys on email banners. Most significantly, email banner designs should have prominent clickable calls-to-action that generate a trackable direct response, allowing you to assess the success of each banner and the campaign's ROI. Tech2Globe, like email signature design, offers banner templates as well as a custom design service. Tech2Globe features design solutions that will create impact, engagement, and interaction, whether you want to grow your brand profile or promote promotional offers strategically.</p>

                <p><strong>Design Of An Email Newsletter</strong> Our email marketing professionals assist you in creating attractive email newsletter templates, making it simple to convey your news and promote new offers and forthcoming events. Tech2Globe's email designers will produce an optimal newsletter design template for your brand, so all you have to do is add text and graphics. Our email designers will develop compelling templates for your newsletters, including HTML coding and uploading, for an even more personalized email newsletter design. Provide us with the content you want, and we'll take care of the rest.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger">Why Choose Our Services?</h4>
                <p>Tech2Globe can create completely responsive email templates that display your marketing information correctly on devices and screens of all sizes and shapes, from little phones to giant desktop displays. Our email designs are mobile-friendly, making them easy to read on any screen your target audience uses. Depending on the platform you're using, we can create HTML email templates or drag-and-drop responsive templates.</p>

                <p>Our email template design services can create appropriate templates to match your needs, allowing you to effortlessly incorporate your company's branding and the most recent marketing campaign messaging.</p>

                <p>We will design, develop, and manage a fully-bespoke email branding campaign for you, wholly focused on accomplishing your marketing objectives and combining with your other campaign media activities, both digital and conventional, as part of our full-service offering.</p>

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