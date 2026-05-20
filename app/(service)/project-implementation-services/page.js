import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaAngleRight, FaChartBar, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaHandPointRight, FaLightbulb, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Faq from "@/app/(resources)/faq/page";

export const metadata = {
  title: "Project Implementation Services",
  description:
    "Drive efficiency with Tech2Globe’s Project Implementation Services, offering customized strategies to deliver projects on time and within budget.",

  openGraph: {
    title: "Project Implementation Services",
    description:
      "Drive efficiency with Tech2Globe’s Project Implementation Services, offering customized strategies to deliver projects on time and within budget.",
    url: "https://www.tech2globe.com/project-implementation-services",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Project Implementation Services",
    description:
      "Drive efficiency with Tech2Globe’s Project Implementation Services, offering customized strategies to deliver projects on time and within budget.",
  },

  alternates: {
    canonical:
      "https://www.tech2globe.com/project-implementation-services",
  },
};

const pageHeaderData = {
  title: "Project Implementation Services",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};


const usefullinks = [
  { id: 1, name: "AI Data Support For KPO Services", path: "/data-support-kpo-ai-services" },
  { id: 2, name: "AI Data Support Services", path: "/data-support-ai-services" },
  { id: 3, name: "Chat Support Services For AI Products", path: "/chat-support-services" },
  { id: 4, name: "Customer Data Migration Services", path: "/data-migration-services" },
  { id: 5, name: "Customer Onboarding Services", path: "/customer-onboarding-services" },
  { id: 6, name: "Project Implementation Services", path: "/project-implementation-services" },
  { id: 7, name: "Reporting And Analytics", path: "/reporting-and-analytics" },
  { id: 8, name: "Virtual Assistant Services", path: "/virtual-assistant-services" },
  { id: 9, name: "Voice Support For AI Products", path: "/voice-support-for-ai-products" },
];


const sidebarSections = [
  { heading: "Useful Links", links: usefullinks },
];

const portfolio = [
  {
    title: "Product Uploading",
    items: [
      {
        title: "Lacanvas",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.lacanvas.com/",
        img: "/images/services/portfolio-img/lacanvas.jpg",
      },
      {
        title: "Linkcycle",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.linkcycle.com/",
        img: "/images/services/portfolio-img/linkcycle.jpg",
      },
      {
        title: "Silver Goldinto Cash",
        tech: "PHP, Mysql",
        link: "http://www.silvergoldintocash.com/",
        img: "/images/services/portfolio-img/silvergoldintocash.jpg",
      },
      {
        title: "Travel Blue",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.travel-blue.com/",
        img: "/images/services/portfolio-img/travel-blue.jpg",
      },
      {
        title: "Windsor One",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.windsorone.com/",
        img: "/images/services/portfolio-img/windsorone.jpg",
      },
      {
        title: "Zphotoedit",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.zphotoedit.com/",
        img: "/images/services/portfolio-img/zphotoedit.jpg",
      },
      {
        title: "Luiolei",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "https://www.luiolei.com/",
        img: "/images/services/portfolio-img/luiolei.jpg",
      },
      {
        title: "Plaza Surf Sports",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "http://www.plazasurfsports.com/",
        img: "/images/services/portfolio-img/plazasurfsports.jpg",
      },
      {
        title: "Shopaloo",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "https://shopaloo.com/",
        img: "/images/services/portfolio-img/shopaloo.jpg",
      },
      {
        title: "Sports456",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "https://www.sports456.com/",
        img: "/images/services/portfolio-img/sports456.jpg",
      }
    ],
  },
  {
    title: "Web Stores Design & Dev",
    items: [
      {
        title: "Consult for PPP",
        tech: "Asp.net, C#, SQL Server, Jquery.",
        link: "https://consultforppp.com/",
        img: "/images/services/portfolio-img/consultforppp.jpg",
      },
      {
        title: "Devouttechs",
        tech: "Asp.net, C#, SQL Server, Jquery.",
        link: "http://devouttechs.com/",
        img: "/images/services/portfolio-img/devouttechs.jpg",
      },
      {
        title: "Geturkart",
        tech: "Asp.net, C#, SQL Server, Jquery.",
        link: "https://geturkart.com/",
        img: "/images/services/portfolio-img/geturkart.jpg",
      },
      {
        title: "Nopextensions",
        tech: "Asp.net, C#, SQL Server, Jquery.",
        link: "http://nopextensions.com/",
        img: "/images/services/portfolio-img/nopextensions.jpg",
      },
      {
        title: "Shopaloo",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "https://shopaloo.com/",
        img: "/images/services/portfolio-img/shopaloo.jpg",
      },
      {
        title: "Sports456",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "https://www.sports456.com/",
        img: "/images/services/portfolio-img/sports456.jpg",
      },
      {
        title: "Luiolei",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "https://www.luiolei.com/",
        img: "/images/services/portfolio-img/luiolei.jpg",
      },
      {
        title: "Plaza Surf Sports",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "http://www.plazasurfsports.com/",
        img: "/images/services/portfolio-img/plazasurfsports.jpg",
      }
    ],
  },
  {
    title: "Indian Ecomm MarketPlace",
    items: [
      {
        title: "Windsor One",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.windsorone.com/",
        img: "/images/services/portfolio-img/windsorone.jpg",
      },
      {
        title: "Zphotoedit",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.zphotoedit.com/",
        img: "/images/services/portfolio-img/zphotoedit.jpg",
      },
      {
        title: "My Orthosoft",
        tech: "Cake PHP",
        link: "http://www.myorthosoft.com/",
        img: "/images/services/portfolio-img/myorthosoft.jpg",
      },
      {
        title: "Saleswarp",
        tech: "Cake PHP",
        link: "https://saleswarp.com/",
        img: "/images/services/portfolio-img/saleswarp.jpg",
      },
      {
        title: "Webmallng",
        tech: "PHP, Mysql, Jquery.",
        link: "https://www.webmallng.com/",
        img: "/images/services/portfolio-img/webmallng.jpg",
      },
      {
        title: "UnotechonLine",
        tech: "PHP, Mysql, Jquery.",
        link: "https://www.unotechonline.com/",
        img: "/images/services/portfolio-img/unotechonline.jpg",
      },
      {
        title: "Lacanvas",
        tech: "PHP, Mysql, Jquery.",
        link: "http://www.lacanvas.com/",
        img: "/images/services/portfolio-img/lacanvas.jpg",
      },
      {
        title: "Linkcycle",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.linkcycle.com/",
        img: "/images/services/portfolio-img/linkcycle.jpg",
      },
      {
        title: "Silver Goldinto Cash",
        tech: "PHP, Mysql",
        link: "http://www.silvergoldintocash.com/",
        img: "/images/services/portfolio-img/silvergoldintocash.jpg",
      },
      {
        title: "Travel Blue",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.travel-blue.com/",
        img: "/images/services/portfolio-img/travel-blue.jpg",
      },
    ],
  },
  {
    title: "International Ecomm Marketplace",
    subTabs: [
      {
        title: "Shopify",
        items: [
          {
            title: "Shop Modern Accessory",
            tech: "Shopify",
            link: "http://shopmodernaccessory.com/",
            img: "/images/services/portfolio-img/shopmodernaccessory.jpg",
          },
          {
            title: "Donna Bella Jewelry",
            tech: "Shopify",
            link: "http://www.donnabellajewelry.dk/",
            img: "/images/services/portfolio-img/donnabellajewelry.jpg",
          },
          {
            title: "E-Panneur",
            tech: "Shopify",
            link: "http://e-panneur.ca/",
            img: "/images/services/portfolio-img/e-panneur.jpg",
          },
        ],
      },
      {
        title: "Magento",
        items: [
          {
            title: "Sports456",
            tech: "Magento",
            link: "http://www.sports456.com/",
            img: "/images/services/portfolio-img/sports456.jpg",
          },
          {
            title: "All Extreme",
            tech: "Magento",
            link: "http://www.allextreme.in/",
            img: "/images/services/portfolio-img/allextreme.jpg",
          },
          {
            title: "Shoesuite",
            tech: "Magento",
            link: "https://www.shoesuite.ie/",
            img: "/images/services/portfolio-img/shoesuite.jpg",
          },
          {
            title: "Atkins",
            tech: "Magento",
            link: "https://www.atkins.ie/",
            img: "/images/services/portfolio-img/atkins.jpg",
          },
          {
            title: "Director Derblinds",
            tech: "Magento",
            link: "https://www.directorderblinds.co.uk/",
            img: "/images/services/portfolio-img/directorderblinds.jpg",
          },
        ],
      },
      {
        title: "BigCommerce",
        items: [
          {
            title: "Coovy Sports",
            tech: "BigCommerce",
            link: "https://coovysports.com/",
            img: "/images/services/portfolio-img/coovysports.jpg",
          },
        ],
      },
      {
        title: "NopCommerce",
        items: [
          {
            title: "Luiolei",
            tech: "NopCommerce",
            link: "http://www.luiolei.com/",
            img: "/images/services/portfolio-img/luiolei.jpg",
          },
          {
            title: "Plaza Surf Sports",
            tech: "NopCommerce",
            link: "http://www.plazasurfsports.com/",
            img: "/images/services/portfolio-img/plazasurfsports.jpg",
          },
          {
            title: "Home Turph",
            tech: "NopCommerce",
            link: "https://www.hometurph.com/",
            img: "/images/services/portfolio-img/hometurph.jpg",
          },
        ],
      },
    ],
  },
]

const caseStudies = [
  {
    id: 1,
    title: "e-Commerce Store Version Upgrade",
    image: "/images/services/service-inner/e-commerce-store-version-upgrade.jpg",
    description:
      "The previous version had issues with accepting payments via credit cards, so one of the improvement areas was to set …",
    docLink: "https://www.tech2globe.com/casestudies-docs/E-commerce%20version%20upgrade.pdf",
  },
  {
    id: 2,
    title: "e-Commerce Multivendor Store",
    image: "/images/services/service-inner/e-commerce-multivendor-store-1-0.jpg",
    description:
      "Our client approached us for Ecommerce services that included multi-vendor customized solutions along with …",
    docLink: "https://www.tech2globe.com/casestudies-docs1/E-commerce%20version%20upgrade%20(1).pdf",
  },
  {
    id: 3,
    title: "e-Commerce Multivendor Store",
    image: "/images/services/service-inner/portfolio/4.jpg",
    description:
      "Our client approached us for Ecommerce services that included multi-vendor customized solutions along with …",
    docLink: "https://www.tech2globe.com/casestudies-docs1/E-commerce%20version%20upgrade%20(1).pdf",
  },
  {
    id: 4,
    title: "Migration from Sooq to Amazon.ae",
    image: "/images/services/service-inner/migration-from-sooq-to-amazon-ae.jpg",
    description:
      "Forgiving the best solution to our client and comprehensive support is our specialty which we successfully …",
    docLink: "https://www.tech2globe.com/casestudies-docs1/E-Commerce%20Store%20for%20Luxury%20Goods-converted.pdf",
  },
  {
    id: 5,
    title: "About Drop shipping",
    image: "/images/services/service-inner/about-drop-shipping.jpg",
    description:
      "Drop shipping is an e-retail term where someone facilitates the selling and delivery of an online product without …",
    docLink: "https://www.tech2globe.com/casestudies-docs1/Case%20Study%202%20-%20Sales%20Increase%20in%20different%20categories-converted.pdf",
  },
  {
    id: 6,
    title: "Amazon Sale Boost",
    image: "/images/services/service-inner/amazon-sale-boost.jpg",
    description:
      "Find out the most important areas where our team required utmost attention to showcase the work from day one …",
    docLink: "https://www.tech2globe.com/casestudies-docs1/amazon-india-case-study.pdf",
  },

]

const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "They have excellent service and management, this is honest review after a month of experience with them, team is hardworking, knowledgeable and do every task on time. I hope they continue to deliver me same output.",
    name: "Roxel- Account Management India",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Excellent Team, good results in sales",
    name: "Andriana- Amazon Sponsored Ads USA",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Excellent service by Tech2globe, brilliant service and hardworking",
    name: "Neo Global- Vendor Account Management UK",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Courteous, professional, quality work, best bang for your buck",
    name: " Medi Hub- Amazon Store Creations USA",
  },
  {
    id: 5,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Very professional and creative team. They patiently worked on changes I asked for and delivered on time. Thank you.",
    name: "Teliamed- Amazon Enhance Brand Content USA",
  },
];

const faqs = [
  {
    question:
      "What would be the timeline for the delivery of your services?",
    answer:
      "We ensure that it does not take over 4-6 weeks to complete the entire procedure. To make it more precise, you can visit our site where you can find out how in the past we have performed timely execution of our services.",
  },
  {
    question:
      "What level of professional project implementation services does Tech2Globe provide?",
    answer:
      "We at Tech2Globe can assure you of the professionalism that we follow. We have never let our customers with the single thought of getting complained about our work ethics. And this is what we feel is the best part about us that differentiates us from the rest. For better understanding of our previous projects, you may visit our website, where you may find sample projects and testimonials for satisfaction.",
  },
  {
    question: "Do you have any unique project workflow?",
    answer:
      "Our team comes with admin, mid, and senior-level engineering to give the proper expertise for the job. We have a wide range of employees with varying experience and knowledge.",
  },
  {
    question:
      "Can I get the same engineer that worked on a previous project?",
    answer:
      "We'll do our best! Working with Tech2Globe can be a memorable experience as all our engineers are experts in their field and follow a strict process to complete the project correctly. We will appoint the best engineer for your project based on the requirements. However, later you request one, we will discuss the related issue.",
  },
  {
    question:
      "Can I rely on your services if I do have a specific deadline?",
    answer:
      "We understand that any technological project's successful and timely implementation is critical. We will be open and honest about the resources and timelines available for your project. We'll never make promises we can't keep, and we'll work hard to detect and discuss any circumstances that could compromise your deadline. Tech2Globe has completed thousands of successful technological projects, and you'll receive transparency and communication while working with us.",
  },
];

export default function ProjectImplementationServices() {


  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb pageName="Project Implementation Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Project Implementation Services" imageSrc="/images/services/service-inner/data-support-for-ai-banner.jpg" />
              <div className={Style.ContentDiv}>

                <h3>Why Do You Need Project Implementation Services?</h3>

                <p>Successful implementation of well-crafted strategies is undoubtedly the most important tool to achieve exceptional results. Even when the instructions for implementing changes are clear, it can be difficult to distribute the gap as all resources may exceed current business activities. And here you can hire a partner who has worked in the industry for years.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Project Implementation Services With Tech2Globe</h2>
                <p>Tech2Globe helps in the implementation and transformation process by planning and executing large-scale programs. We also address minimum qualification gaps with our on-site consultants and executives.</p>

                <p>We have worked on project implementation in various industries and locations to assist our clients avoiding mistakes, unforeseen delays, and financial losses and ensuring flawless execution of projects and their critical objectives.</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="text-danger">How Do We Do It?</h2>
                    <div className="card p-3 mb-3 shadow-sm">
                      <h5>Project Plan & System Installation</h5>
                      <p className="mb-3">The first phase of our project implementation services comes where we first make a complete plan for the given project and its required system setup. This step includes:</p>
                      <ul className="ps-4">
                        <li>Agreement on a project plan and conducting methods</li>
                        <li>Timetable estimation</li>
                        <li>Installation of database (RDBMS) and application software</li>
                      </ul>
                    </div>

                    <div className="card p-3 mb-3 shadow-sm">
                      <h5>Requirement Analysis, Specifications, & Customisations</h5>
                      <p className="mb-0">Our Project Managers will work closely with your team to establish and document key project priorities with their detailed specifications. We also engage with all relevant project members to identify contingencies and risks and develop communication and growth plans.</p>
                    </div>

                    <div className="card p-3 mb-3 shadow-sm">
                      <h5>Pilot Testing</h5>
                      <p className="mb-0">To train a selected group of people to efficiently detect bugs and provide feedback before full deployment of the system.</p>
                    </div>

                    <div className="card p-3 mb-3 shadow-sm">
                      <h5>Final Test & Delivery</h5>
                      <p className="mb-0">Having successfully conducted the entire process, we ensure that we provide our clients with the best results within a pre-determined time frame.</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Why Tech2Globe For Project Implementation Services?</h2>
                <p>We collaborate with you to create and document project success criteria and a technical design. Our incredible team consisting of a professional team of project managers develops and implements a project plan to achieve specific objectives.</p>

                <p>We can work independently or in collaboration with you, regardless of the size of your business. You'll end up with quick time-to-value, a consistent methodology and documentation, and we'll be with you every step of the way to ensure the success of your next project.</p>
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

      <FaqSection faqs={faqs} />


      <PortfolioTabs data={portfolio} title={'Our Portfolio'} description={''} />


      <div className="PhotoEditCaseStudies">
        <CaseStudiesService caseStudies={caseStudies} />
      </div>

      <ClientSlider testimonials={testimonials} />


    </>
  )
};