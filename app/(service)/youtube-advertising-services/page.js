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
  title: "YouTube Advertising Services | YouTube Marketing Agency",
  description:
    "YouTube advertising services from Tech2globe can help your company reach new leads and grow. Learn more about our YouTube ad services now!",

  alternates: {
    canonical: "https://www.tech2globe.com/youtube-advertising-services",
  },

  openGraph: {
    title: "YouTube Advertising Services | YouTube Marketing Agency",
    description:
      "YouTube advertising services from Tech2globe can help your company reach new leads and grow. Learn more about our YouTube ad services now!",
    url: "https://www.tech2globe.com/youtube-advertising-services",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "YouTube Advertising Services | YouTube Marketing Agency",
    description:
      "YouTube advertising services from Tech2globe can help your company reach new leads and grow. Learn more about our YouTube ad services now!",
  },
};

const pageHeaderData = {
  title: "YouTube Advertising Services in USA to Boost Your Brand Presence",
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
        "id": "One",
        "question": "What services do YouTube marketing companies offer?",
        "answer": "YouTube marketing companies offer services that help your content’s rank better and best. Generally, the <strong>youtube marketing services in USA</strong> include Generating Keywords & Title, Creating Your Personalized YouTube Channel, #Tag Research and Card Addition in Videos, Audio/Video To Text (Transcription), and more."
    },
    {
        "id": "Two",
        "question": "How do YouTube advertising agencies help with promoting content?",
        "answer": "Several strategies help promote content, especially YouTube ads. Target advertising is a powerful tool that drives traffic to your website or promotes specific products. Our experts link your ads to relevant landing pages, which increases brand visibility and generates conversions."
    },
    {
        "id": "Three",
        "question": "What are the benefits of working with a YouTube marketing agency?",
        "answer": "Using knowledge of a YouTube marketing agency you can ensure that marketing strategies are accurate and work well. A skilled YouTube firm like ours has a lot of experience as we try out different campaigns and video forms for a huge amount of time, with advertising budgets of thousands of dollars."
    },
    {
        "id": "Four",
        "question": "How do YouTube marketing companies charge for their services?",
        "answer": "How much a YouTube ad campaign costs is based on your goals and funds. There is, however, a $0.10 cost per view for a YouTube video ad. This means you will get $100 every 1,000 times your ad is seen."
    },
    {
        "id": "Five",
        "question": "How do I choose the best YouTube marketing agency for my business?",
        "answer": "Selecting the best YouTube marketing agency becomes easy when you know your goals, needs, and budget. It is vital to check out the Agency’s reputation. You may check their reviews on various platforms. Also, ask them about their process and tools. For instance, they can help you with keywords, SEO research and more."
    },
    {
        "id": "Six",
        "question": "What are some key metrics used to measure the success of YouTube marketing campaigns?",
        "answer": "The core performance of your YouTube campaign depends upon views, view rate, Avg. cost-per-view CPV. Views and view rate showcases the number of engagement on your video ads divided by the number of times your ad is shown. The other factors include reach, frequency and clicks."
    },
    {
        "id": "Seven",
        "question": "How can I ensure effective collaboration with a YouTube marketing company?",
        "answer": "Communication is the key. Explain all your requirements and objectives to ensure effective collaboration with a YouTube marketing company. Regularly check-in and track progress together. At Tech2Globe, we can help by creating data-driven strategies and managing your YouTube channel for optimal reach."
    },
    {
        "id": "Eight",
        "question": "How long does it typically take to see results from YouTube marketing efforts?",
        "answer": "You must wait six months for an excellent digital marketing or SEO plan to show results. Usually, you will have to wait twelve months to see the results you like. If you can't afford a campaign lasting 6 to 12 months, consider not starting one."
    },
];


export default function YoutubeAdvertising() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Youtube Advertising Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Youtube Advertising Services" imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Audience refinement, video optimization, and more, Tech2globe, your premier <strong>YouTube marketing agency</strong>, manages every aspect of your advertising campaign.</p>

                <p>Being a distinguished <strong>YouTube marketing agency</strong>, we understand the immense popularity of this influential video platform. YouTube is the most famous and widely used video platform on the internet, the second most popular search engine after Google, and the second most popular social networking platform after Facebook. Unlike other social media platforms, YouTube uses videos to provide users with an appealing and instantly identifiable experience. Over 500 hours of videos posted every minute on YouTube has made the term "video" synonymous with the platform. YouTube, now a Google company, has matured into a major advertising platform.</p>

                <p><strong>You can directly communicate with customers and vice versa as a social media channel with the help of this platform.</strong></p>

                <p><strong>With the support of our expert YouTube Ads Agency team, you can raise awareness and attract the correct traffic to your site. Tech2Globe, as a full-service YouTube Advertising Company, can handle everything your company needs to promote on YouTube, from campaign development to ad creation.</strong></p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger">Choosing the Perfect Best YouTube Video Marketing Agency: Your Comprehensive Guide</h4>
                <p>Choosing the <strong>best YouTube marketing agency</strong> is crucial for maximizing your brand's visibility and engagement on the platform. It can be difficult with countless options available to choose from, which is why it's essential to partner with a reputable <strong>YouTube ad agency</strong> that understands your goals and can deliver you excellent results.</p>

                <p>There are several things you should look at while searching for the <strong>best agency for your business</strong>, consider its experience, expertise, and track record before deciding on the right one. Contact agencies that are experts in YouTube advertising and have good experience in creating ad videos that your target audience will love.</p>

                <p>Furthermore, look up different <strong>YouTube marketing companies</strong> to see how their services, prices, and client reviews measure up to each other. By looking for the best agency, you can ensure your brand gets the attention and exposure it deserves on the world's biggest video platform.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger">YouTube Marketing Services: Boost Your Brand's Visibility</h4>
                <p>Needless to say, video is the most engaging media accessible on the internet today. It enables you to foster an emotional connection between your brand and your customers. It is really effective, and by following a few guidelines, you may quickly generate videos yourself at a minimal cost. Improving brand visibility is an important task, which can be performed effectively by <strong>YouTube marketing companies.</strong></p>

                <p>An experienced <strong>YouTube ad agency</strong> improves brand visibility by bringing the brand to a larger audience and building brand familiarity. It also helps a business stand out from competitors, especially if the competition requires more attention in video marketing.</p>

                <p>The role of a <strong>YouTube advertising agency</strong> is to help you engage actively with your viewers through comments, live streams, and community posts. Use SEO strategies like optimized video titles, descriptions, and tags to enhance discoverability. Maintain consistent branding across all your videos, and ensure your content reflects your brand's values and message.</p>

                <h5>Achieve Online Success with a Top YouTube Marketing Company</h5>
                <p>How often do you get tired of your YouTube channel not moving forward even though you have put so much energy and time into making amazing content? You're not alone. There are millions of creators trying to make it in the so-called "million" crowd, thus making it very hard for a creator to break through. That's where a leading <strong>YouTube marketing company</strong> you can get assistance from.</p>

                <p>Experts at a <strong>YouTube advertising agency</strong> are responsible for maintaining the brand identity, including logos, colors, and the introduction of the brand. Besides, they use the site's statistics to look into how well your YouTube videos are performing on a regular basis. Aid in audience retention, conversion rates, and viewing time are the other components that push online success. The collection of this data is useful for improving future content and making plans.</p>

                <p>If you believe that doing all this is too hard, be sure to remember Tech2Globe. We are the <strong>best YouTube marketing agency</strong> for these reasons. We know the methods and plans that we have used and our ideas help you be successful.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger">Why Do You Need YouTube Ads for Your Business?</h4>
                <p>YouTube Advertising for Agencies is quickly becoming a popular choice among marketers. Here's why you should consider partnering with a reputable <strong>YouTube marketing company</strong> for your brand's success.</p>

                <p>YouTube marketing services are less expensive than other types of sponsored advertising, such as social and paid commercials. The CPV (cost per view) is substantially cheaper than the CPC (cost per click) of Google AdWords. YouTube advertising, in our experience, costs a fifth of the price of other ad networks.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger">Our YouTube Advertising Services</h4>
                <p>Do you wish to advertise on YouTube to increase your internet visibility? At Tech2Globe, one of the best <strong>YouTube Marketing Services in USA</strong>, we will assist you with all areas of your YouTube Advertising Services.</p>

                <p>Tech2Globe offers YouTube Ads Management Services to organizations all around the world. We'll help you with every step of video production for your company, including expert copywriting for video scripts, on-site shoot advice, design, and filming. We specialize in the development of video graphics and generate and distribute high-quality videos.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger">What Is The Process Of Our YouTube Marketing Agency?</h4>
                <p>Our <strong>Video Marketing Agency</strong> professionals at Tech2Globe understand that there is no such thing as a one-size-fits-all plan. Because each organization is different, the strategy and procedure must be appropriately adjusted. In general, as a YouTube marketing firm, we will assess your website traffic, select the best online platforms to invest in, and maintain the consistency of your video marketing efforts and their outcomes regularly.</p>

                <p>Our YouTube marketing team collaborates to develop and implement a multi-faceted strategy for generating more leads and converting them into customers. Overall, our YouTube marketers will listen, create, launch, and expand your online presence with <strong>YouTube video optimization.</strong></p>
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