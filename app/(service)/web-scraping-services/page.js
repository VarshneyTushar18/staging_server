import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";


export const metadata = {
   title:
    "Expert Data Extraction Services for Efficient Insights | Tech2Globe",

  description:
    "Tech2Globe provides reliable Data Extraction services through advanced Web Scraping techniques. Harness valuable insights for strategic decision-making with our expert solutions.",

  keywords: [
    "Web Scraping Services",
    "Web crawling and scraping services",
    "Data scraping services",
    "Web scrapping experts.",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/web-scraping-services",
  },

  openGraph: {
    title:
      "Expert Data Extraction Services for Efficient Insights | Tech2Globe",
    description:
      "Tech2Globe provides reliable Data Extraction services through advanced Web Scraping techniques. Harness valuable insights for strategic decision-making with our expert solutions.",
    url: "https://www.tech2globe.com/web-scraping-services",
    siteName: "Tech2Globe",
    type: "website",
  },

  twitter: {
    card: "summary",
    title:
      "Expert Data Extraction Services for Efficient Insights | Tech2Globe",
    description:
      "Tech2Globe provides reliable Data Extraction services through advanced Web Scraping techniques. Harness valuable insights for strategic decision-making with our expert solutions.",
  },
};


const pageHeaderData = {
  title: "Web Scraping",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Restaurant Menu Entry Services", path: "/restaurant-menu-entry-services" },
  { id: 2, name: "Financial Data Entry Services", path: "/financial-data-entry-services" },
  { id: 3, name: "Catalog Management", path: "/catalog-management-services" },
  { id: 4, name: "Data Processing Services", path: "/data-processing-services" },
  { id: 5, name: "Data Product Entry", path: "/product-data-entry-services" },
];

const usefullinks = [
  { id: 1, name: "Food Industries", path: "/food-industries-services" },
  { id: 2, name: "Non-Profit Organization", path: "/non-profit-organizations-services" },
  { id: 3, name: "Medical and Health", path: "/medical-and-health-services" },
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
    text: "Very professional and creative team. They patiently worked on changes I asked for and delivered on time. Thank you.",
    name: "Teliamed– Amazon Enhance Brand Content USA",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "They have excellent service and management, this is honest review after a month of experience with them, team is hardworking, knowledgeable and do every task on time. I hope they continue to deliver me same output.",
    name: "Roxel- Account Management India",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Excellent Team, good results in sales",
    name: "Andriana– Amazon Sponsored Ads USA",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Excellent service by Tech2globe, brilliant service and hardworking",
    name: "Neo Global- Vendor Account Management UK",
  },
  {
    id: 5,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Courteous, professional, quality work, best bang for your buck",
    name: "Medi Hub- Amazon Store Creations USA",
  },
];

const faqs = [
  {
    id: "One",
    question: "What kind of clients and industries have you worked for?",
    answer: `
        Tech2Globe have worked for an assortment of clients from industries such as medical, real estate, ecommerce, insurance, travel, education, banking, energy, personal care, motorsport, etc.
      `,
  },
  {
    id: "Two",
    question: "How experienced are you?",
    answer: `
        We have been serving global clients since last 10 years. In more than 10 years, we have delivered diverse complexity data projects successfully.
      `,
  },
  {
    id: "Three",
    question: "Where do you have your client base?",
    answer: `
        Our clients are based in USA, UK, Europe, Australia, South Africa, New Zealand, Malaysia and Japan. But we are happy to work with any client from anywhere in world.
      `,
  },
  {
    id: "Four",
    question: "What is your turnaround time?",
    answer: `
        At Tech2Globe, our clients set deadlines and we make efforts to meet goals. We have ample workforce with years of experience to manage small as well as large scale projects comfortably in deadlines recommended by clients.
      `,
  },
  {
    id: "Five",
    question: "Do you sign non-disclosure agreements and SLAs?",
    answer: `
       Yes. We sign non-disclosure agreements and service level agreements for every customer who outsources to Tech2Globe. Outsource to Tech2Globe and experience worry-free outsourcing.
      `,
  },  
];

const caseStudies = [
  {
    id: 1,
    title: "Data conversion services",
    image: "/images/services/service-inner/casestudies/Data conversion services.png",
    
    docLink: "/images/case-studies/Case-Study-Data-Conversion-Services.pdf",
  },
  {
    id: 2,
    title: "Data Mining on CRM",
    image: "/images/services/service-inner/casestudies/data-mining-on-crm-for-health-Industry.png",
    
    docLink: "/images/case-studies/Case-Study-Data-conversion-services-crm.pdf",
  },
  {
    id: 3,
    title: "Data Extraction Services",
    image: "/images/services/service-inner/casestudies/Data conversion services.png",
    
    docLink: "/images/case-studies/Case-Study-Data-Conversion-Services.pdf",
  },
  {
    id: 4,
    title: "Product data entry",
    image: "/images/services/service-inner/casestudies/Data conversion services.png",
    
    docLink: "/images/case-studies/Case-Study-Data-Conversion-Services.pdf",
  },
  {
    id: 5,
    title: "Final File Submission",
    image: "/images/services/service-inner/casestudies/Data conversion services.png",
    
    docLink: "/images/case-studies/Case-Study-Data-Conversion-Services.pdf",
  },
];

export default function WebScraping() {

  

  return (

    <>
      
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Web Scraping Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Web Scraping Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                
                <p>Data scraping or site data scraping task is basic necessity now daily for different purposes that might be re-usage of database or contents or web marketing or email promoting reason. Web data scraping is the procedure to scrape data from web and procedure in important format for additional utilization. Tech2Globe is talented in web data scraping services just as web data scraping application development.</p>

                <p>Our web data scraping, web data mining and web data extraction services are world class and accessible in various pieces of the globe. We have just bended off for ourselves a major part of the overall industry in USA, UK, Australia, Canada, Germany, Switzerland, France, Singapore, Hong Kong, Netherlands, Sweden and India. To our delight the market is as yet developing, the individuals who attempt our data scraping and web scraping services and like them are as yet expanding.</p>
                
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Popular Web Scraping Services</h2>
                <hr/>
                 <p className={Style.TwoCol}>
                  <p className="mb-0"><FaAngleRight/>Competitor product price comparison / monitoring</p>
                  <p className="mb-0"><FaAngleRight/>E-commerce sites (OsCommerce, Magento, CubeCart, Zen Cart, Yahoo, etc…)</p>
                  <p className="mb-0"><FaAngleRight/>Real Estate, Property, Investors data scraping</p>
                  <p className="mb-0"><FaAngleRight/>Bank rates, stock quotes and financial data mining</p>
                  <p className="mb-0"><FaAngleRight/>Amazon, ebay, craigslist, autotrader, cars, and many more…</p>
                  <p className="mb-0"><FaAngleRight/>Yelp, freeindex, kijiji, scoot, exhibitorsonline, whois, merchantcircle etc.</p>
                  <p className="mb-0"><FaAngleRight/>Coupon website data scraping and upgradation on own server.</p>                  
                </p>
                
                <p>Tech2Globe group has a portion of the preeminent experienced and well trained web crawling and scraping services experts to fulfill your requirements in speedy turnaround time. Hence, you can be sure that you will get valuable quality site data scraping, data processing and web data scrubber application when you outsource your business to us.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Tools</h2>
                <p>We use tools including the utilization JavaScript, jQuery, MooTools structure, and CAPTCHA challenge-reaction systems empowered sites. Additionally building adaptable crawlers, we likewise utilize an advanced observing system to guarantee smooth data scraping services, insignificant hitches, and superior crawling infrastructure.</p>
                
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Process</h2>
                <p>Web scraping services assume a crucial job in aggregating basic relevant data from over the web, consequently helping organizations keep awake to-date with the market benchmarks. Tech2Globe great site data scraping services step in to bear that responsibility.</p>

                <p>Our exhaustive site data scraping services support enterprises from numerous points of view.</p>

                <p>
                  <p className="mb-0"><FaAngleRight/>Harvest list and directory data from the web and transfer it to a format of your choice</p>
                  <p className="mb-0"><FaAngleRight/>Gain deeper product marketing and customer insights form blogs, forums, and review sites</p>
                  <p className="mb-0"><FaAngleRight/>Monitor competitor price, location, and services</p>
                  <p className="mb-0"><FaAngleRight/>Extract website data for competitive analysis and research</p>
                  <p className="mb-0"><FaAngleRight/>Research and analyze social media trends and customer behavior</p>
                  <p className="mb-0"><FaAngleRight/>Acquire real-time updates about exchanges, insurance, interest, mortgage rates, etc.</p>
                  <p className="mb-0"><FaAngleRight/>Automated keyword searches on prominent search engines like Google, Yahoo, Bing, etc.</p>
                  <p className="mb-0"><FaAngleRight/>Monitor web pages and provide content updates from your suppliers' and competitors’ website</p>
                  <p className="mb-0"><FaAngleRight/>Create RSS feeds, harvest photographs, PDFs, icons, etc.</p>
                  <p className="mb-0"><FaAngleRight/>Scrape product reviews and ratings, keywords, email addresses, etc.</p>
                </p>

                
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Stay Ahead of the Curve with Tech2Globe</h2>
                <p>When you hire web scrapping experts from Tech2Globe, we make it our mission to help you achieve your organizational goals quickly while maximizing favorable outputs for you. To learn more about our web scraping services and how they can help your agenda, kindly get in touch with us.</p>
                
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

      
      <CaseStudiesService caseStudies={caseStudies} />

      <FaqSection faqs={faqs} />

      <ClientSlider testimonials={testimonials} />



    </>
  )
};