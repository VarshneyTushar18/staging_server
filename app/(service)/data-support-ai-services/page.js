import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import { FaBrain, FaBullseye, FaChartBar, FaDatabase, FaHeadset, FaHourglass, FaListAlt, FaMedal, FaPaperPlane, FaRocketchat, } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";

export const metadata = {
  title: "AI-Based Data Support Services",
  description:
    "With Tech2Globe's AI-based Data Support Services, companies gain smarter data handling, predictive analytics, and automation to accelerate success.",
  keywords: [
    "AI-Based Data Support Services",
    "AI Data Management",
    "AI Data Processing Services",
    "AI Automation Solutions",
    "AI Data Analytics",
    "AI Data Entry Support"
  ],
  openGraph: {
    title: "AI-Based Data Support Services",
    siteName: "Tech2Globe Web Solutions LLP",
    description:
      "With Tech2Globe's AI-based Data Support Services, companies gain smarter data handling, predictive analytics, and automation to accelerate success.",
    url: "https://www.tech2globe.com/data-support-ai-services"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Based Data Support Services",
    description:
      "With Tech2Globe's AI-based Data Support Services, companies gain smarter data handling, predictive analytics, and automation to accelerate success."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/data-support-ai-services"
  }
};

const pageHeaderData = {
  title: "AI data support services",
  description:
    "Add intelligence to your business with data support services for an effective and efficient database.",
  buttonText: "Contact us",
  buttonLink: "#",
  backgroundImage: "/images/services/data-mining-services-banner.jpg", // your banner image
};

const resources = [
  { id: 1, name: "Case Studies", path: "/case-studies" },
  { id: 2, name: "Clients", path: "/clients" },
  { id: 3, name: "Testimonial", path: "/testimonial" },
];

const usefulLinks = [
  { id: 4, name: "Catalog Processing", path: "/catalog-processing-services" },
  { id: 5, name: "Data Conversion", path: "/data-conversion-services" },
  { id: 6, name: "Data Extraction", path: "/data-extraction-services" },
  { id: 7, name: "Document Processing", path: "/document-processing-services" },
  { id: 8, name: "Forms Processing", path: "/forms-processing-services" },
  { id: 9, name: "Insurance Claims Processing", path: "/insurance-claims-processing-services" },
  { id: 10, name: "Invoice Processing", path: "/invoice-processing-services" },
  { id: 11, name: "Order Processing", path: "/order-processing-services" },
  { id: 12, name: "Survey Forms Processing", path: "/survey-forms-processing" },
];


const sidebarSections = [
  { heading: "Resources", links: resources },
  { heading: "Useful Links", links: usefulLinks },
];


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
        tech: "PHP, Mysql, Jquery.",
        link: "https://windsorone.com/",
        img: "/images/services/portfolio-img/windsorone.jpg",
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
    title: "Web Stores Design & Dev",
    items: [
      {
        title: "Consult for PPP",
        tech: "Asp.net, C#, SQL Server, Jquery",
        link: "https://consultforppp.com/",
        img: "/images/services/portfolio-img/consultforppp.jpg",
      },
      {
        title: "Devouttechs",
        tech: "Asp.net, C#, SQL Server, Jquery",
        link: "http://devouttechs.com/",
        img: "/images/services/portfolio-img/devouttechs.jpg",
      },
      {
        title: "Geturkart",
        tech: "Asp.net, C#, SQL Server, Jquery",
        link: "https://geturkart.com/",
        img: "/images/services/portfolio-img/geturkart.jpg",
      },
      {
        title: "Nopextensions",
        tech: "Asp.net, C#, SQL Server, Jquery",
        link: "http://nopextensions.com/",
        img: "/images/services/portfolio-img/nopextensions.jpg",
      },
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


export default function DataAnalytics() {
  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb pageName="Data Support Ai Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Data Support Ai Services" imageSrc="/images/services/service-inner/data-support-for-ai-banner.jpg" />
              <div className={Style.ContentDiv}>
                <h3>How Does Data Support For AI Tools & Software Help To Achieve An Efficient Database?</h3>
                <p>Based on single-metric methods of assessing customer experience, companies can gain more real-time data on customer journeys through data support services for AI products. These insights can provide your business with a customized customer experience when linked to existing customer behavior.</p>
                <p>AI-powered softwares require quick and accurate data to provide a real-time customer behavior pattern. Here the role of data support services becomes important to get it done right.</p>
              </div>
              <div className={Style.ContentDiv}>
                <h4 className="pt-3 pb-3 text-danger">Top Benefits For Your Business That Can Take Advantage Of Our Data Support Services For AI Products</h4>

                <div className="row pb-5">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <div className="d-flex gap-3 align-items-center mb-2">
                        <FaHeadset />
                        <h5>Analyze Your Customers&apos; Needs</h5>
                      </div>
                      <p>It becomes challenging when companies do not conform to the customers&apos; wishes. Our data support can be an inspiring technology to help you find missing areas. Our qualitative data fetching service approach can help you find key customer needs and areas.</p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <div className="d-flex gap-3 align-items-center mb-2">
                        <FaDatabase />
                        <h5>Personalize Your Customers&apos; Data</h5>
                      </div>
                      <p>To create a real-time experience for your customer, you need to know what they care about and their routine. Our data support services can provide you with tons of organic user data in seconds. You can easily customize your service to offer relevant content by becoming familiar with what customers are looking for.</p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <div className="d-flex gap-3 align-items-center mb-2">
                        <FaBullseye />
                        <h5>Effective Marketing</h5>
                      </div>
                      <p>Hyper personalization can help you target specific customers to promote your product or services. It uses data and information and automation to target individuals, and it will send the right message to the right person in the right time zone.</p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <div className="d-flex gap-3 align-items-center mb-2">
                        <FaRocketchat />
                        <h5>Customer Feedback Analysis</h5>
                      </div>
                      <p>You get hundreds of customer messages daily, and deciding which is useful becomes difficult before anonymous messages. But our data support services will provide valuable patterned categories to analyze and separate data.</p>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <div className="d-flex gap-3 align-items-center mb-2">
                        <FaMedal />
                        <h5>Improves Quality Of Data</h5>
                      </div>
                      <p>If you have fast, data-driven technology, you&apos;ll have immediate results for customers. With our fast customer data support services, you can make more customers satisfied and happy by helping you improve the quality of your product or service.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-3">

              <div className={Style.ContentDiv}>
                <h3 className="pt-3 pb-4 text-danger">Our Data Support Services for AI Products Include:</h3>
                <div className="row pb-5">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <FaBrain />
                      <h5>AI Design Development</h5>
                      <p>We provide our data support services keeping optimized machine learning and algorithms in mind.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <FaChartBar />
                      <h5>Strategies for Big Data</h5>
                      <p>Our data support can adapt from big to even the smallest needs for AI products.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <FaPaperPlane />
                      <h5>Edge AI</h5>
                      <p>We follow an edge-first strategy to improve productivity and real-time functionality with our data support for AI products.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <FaListAlt />
                      <h5>Workflow</h5>
                      <p>Providing access to the most advanced solutions through our data support leads to better and more smooth workflows.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <FaHourglass />
                      <h5>Transformation</h5>
                      <p>Establishing and adopting a new model, opportunity, and growth strategy for driving business across the ​​journey.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h3 className="pt-3 text-danger">Why Choose Tech2Globe For Data Support Services?</h3>
                <p>Match your steps with the emerging world with Tech2Globe data support services at your side. We have the best-of-the-advanced methods to make your operations run smoothly. Also, our experts will assist you through the entire process and provide 24/7 support services to help you stay ahead of the competition.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PortfolioTabs data={portfolio} />
      <ClientSlider testimonials={testimonials} />

    </>
  )
};