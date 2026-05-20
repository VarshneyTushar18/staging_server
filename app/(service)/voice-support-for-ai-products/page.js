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
import { FaAngleRight, FaBars, FaBrain, FaChartBar, FaChartLine, FaChartPie, FaCheckSquare, FaClock, FaCogs, FaCube, FaDatabase, FaDesktop, FaDownload, FaEdit, FaHandPeace, FaHandPointRight, FaHands, FaHeadphones, FaLightbulb, FaPaperPlane, FaPlane, FaProjectDiagram, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Faq from "@/app/(resources)/faq/page";

export const metadata = {
  title: "Voice Support Service for AI-based Products",
  description:
    "Boost customer loyalty with Tech2Globe’s Voice Support Service for AI-based Products, offering responsive, scalable, and AI-driven voice solutions.",

  openGraph: {
    title: "Voice Support Service for AI-based Products",
    description:
      "Boost customer loyalty with Tech2Globe’s Voice Support Service for AI-based Products, offering responsive, scalable, and AI-driven voice solutions.",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/voice-support-for-ai-products",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Voice Support Service for AI-based Products",
    description:
      "Boost customer loyalty with Tech2Globe’s Voice Support Service for AI-based Products, offering responsive, scalable, and AI-driven voice solutions.",
  },

  alternates: {
    canonical:
      "https://www.tech2globe.com/voice-support-for-ai-products",
  },
};

const pageHeaderData = {
  title: "Voice Support For AI Products",
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

export default function VoiceSupportForAIProducts() {


  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb pageName="Voice Support For AI Products" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Voice Support For AI Products" imageSrc="/images/services/service-inner/data-support-for-ai-banner.jpg" />
              <div className={Style.ContentDiv}>

                <h2>Why Go For Voice Support Services?</h2>

                <p>You can use voice support features for your AI based customer services to meet the demands and expectations of your customers. We have come up with voice support to interact with your consumers and answer all the common questions and concerns they have in mind. We don't rush to call until we're sure we've got the references and details.</p>
                <p>Tech2Globe Voice Support empowers your business with a rising revenue mark as you can now focus more on your other business opportunities. It also helps you show personalized recommendations to your customers based on their history and preferences.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Our Voice Support Services Makes Your Conversations Smooth</h2>
                <p>Use our services for your various purposes, which include:</p>
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className="card h-100 p-3  shadow-sm">
                      <h5><FaHeadphones fontSize={32} /> Support For Omnichannel Journeys With Ultra Modern Voice Support</h5>
                      <p className="mb-0">We provide easy digital interactions using Natural Language Processing (NLP) to help customers ease up their journey over voice or digital channels.</p>
                    </div>
                  </div>

                  <div className="col-md-12 mb-3">
                    <div className="card h-100 p-3  shadow-sm">
                      <h5><FaDatabase fontSize={32} /> We Follow The Industry Standards</h5>
                      <p className="mb-0">We combine voice support features with powerful agents to ensure that your customers experience the right service every time.</p>
                    </div>
                  </div>

                  <div className="col-md-12  mb-3">
                    <div className="card h-100 p-3 shadow-sm">

                      <h5><FaHandPointRight fontSize={32} /> No Unnecessary Lengthy Or Exorbitant Contract</h5>
                      <p className="mb-0">We do not prefer vendor lock-in to maximize their existing investment until we find it necessary.</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Why Should You Work With Tech2Globe For Voice Support Services?</h2>
                <p>For the best possible customer experience, our voice support services will help you learn more about consumer needs and use technology effectively on your behalf. To ensure the success of your outsourced voice support work and the expansion of your organization, we only deploy the best and industry specific experts. When you choose us for voice support services, you will get what you want from the list of benefits below.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">The Process Of Our Voice Support Includes These Steps:</h2>
                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li>Integration Of Content</li>
                      <li>Building The Voice Support</li>
                      <li>Deploying The Necessity</li>
                      <li>Connecting The Devices</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Highlights Of Our Voice Support Services</h2>
                <div className="row pt-3">
                  <div className="col-md-6 mb-3">
                    <div className="card h-100 p-3 shadow-sm">
                      <FaBrain fontSize={32} />
                      <h5>We Don't Put Customers On Hold</h5>
                      <p className="mb-0">We make our contact automated and accessible with our 24-hours online voice support. Your customers will not have to wait for their turn.</p>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="card h-100 p-3 shadow-sm">
                      <FaBars fontSize={32} />
                      <h5>We Make Conversations More Personalized</h5>
                      <p className="mb-0">We recognize our customers' choices and conversate with them accordingly. We believe in customers' satisfaction; we provide easy implementations using natural language understanding to grasp the customers' areas of interest.</p>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="card h-100 p-3 shadow-sm">
                      <FaPaperPlane fontSize={32} />
                      <h5>Best And True Information To The Customers</h5>
                      <p className="mb-0">We also provide relevant information to the users for a seamless experience. To this end, we build a smart voice support system with natural language understanding features and built-in dialogue management.</p>
                    </div>
                  </div>
                </div>
              </div>


              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Get Connected With Us Today To Avail Our Services</h2>
                <p>To connect with us, you can request for a demo to see how our voice support system for AI products works for your business. We are available 24/7 for our customers, making it easy for them to have a seamless experience while interacting with customers.</p>
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

      <PortfolioTabs data={portfolio} title={'Our Portfolio'} description={''} />


      <div className="PhotoEditCaseStudies">
        <CaseStudiesService caseStudies={caseStudies} />
      </div>

      <ClientSlider testimonials={testimonials} />


    </>
  )
};