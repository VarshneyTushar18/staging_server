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
import { FaAngleRight, FaChartBar, FaCheckSquare, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaGlobe, FaHandPointRight, FaIndustry, FaLightbulb, FaMedal, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Faq from "@/app/(resources)/faq/page";

export const metadata = {
  title: "data-support-kpo-ai-services",

  description:
    "With Tech2Globe’s AI-based Data Support Services, companies gain smarter data handling, predictive analytics, and automation to accelerate success",

  alternates: {
    canonical:
      "https://www.tech2globe.com/data-support-kpo-ai-services",
  },

  openGraph: {
    title: "data-support-kpo-ai-services",

    description:
      "With Tech2Globe’s AI-based Data Support Services, companies gain smarter data handling, predictive analytics, and automation to accelerate success",

    url:
      "https://www.tech2globe.com/data-support-kpo-ai-services",

    siteName: "Tech2Globe Web Solutions LLP",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "data-support-kpo-ai-services",

    description:
      "With Tech2Globe’s AI-based Data Support Services, companies gain smarter data handling, predictive analytics, and automation to accelerate success",
  },
};

const pageHeaderData = {
  title: "AI Data Support for KPO Services",
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


export default function DataSupportKpoAiServices() {


  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb pageName="Data Support Kpo Ai Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Data Support Kpo Ai Services" imageSrc="/images/services/service-inner/data-support-for-ai-banner.jpg" />
              <div className={Style.ContentDiv}>

                <h2>Why Does AI Based KPO Need Data Support Experts?</h2>

                <p><strong>AI data support experts</strong> gather the best practices and the latest technologies to create innovative and self-automated tools to work on your client's projects. If you want to create new strategic value for your products to increase ROI and save cost, then going with <strong>AI based KPO data support experts</strong> is the right choice!</p>

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger">We Are Capable Of Providing You The Non Parallel AI Data Support For Your KPO Services</h4>
                <p>You can avail of our services to leverage several advantages, including:</p>
                <div className="card h-100 p-3 mb-3  shadow-sm">
                  <h5><FaLightbulb fontSize={32} /> Innovation Driven</h5>
                  <p className="mb-0">Our data support gives you a smart and comprehensively innovative approach to help your business meet the needs of customers.</p>
                </div>


                <div className="card h-100 p-3 mb-3 shadow-sm">
                  <h5>
                    <FaIndustry fontSize={32} /> We Cover Almost Every Industry
                  </h5>
                  <p className="mb-0">
                    We provide our complete data support for AI KPO services
                    in areas like business research, marketing research,
                    business, technical analysis, and more.
                  </p>
                </div>

                <div className="card h-100 p-3 mb-3 shadow-sm">
                  <h5>
                    <FaMedal fontSize={32} /> Data Experts Make The Final Checks
                  </h5>
                  <p className="mb-0">
                    We have a team of data support experts that ensure the
                    consistency and quality of the services provided.
                  </p>
                </div>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger pt-3 pb-3">What Makes Our Data Support Services Best Among Others?</h2>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="card h-100 p-3 shadow-sm">
                      <h5><FaCheckSquare fontSize={32} /> Cost-Efficient</h5>
                      <p className="mb-0">We provide <strong>data support for AI KPO services</strong> from decades of experience with new impacts and better ways. Ultimately, these include the latest technologies that can reduce your administrative costs with improved performance. Also, our experts help you with lower staffing and training costs.</p>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="card h-100 p-3 shadow-sm">
                      <h5><FaGlobe fontSize={32} /> Improved Working In Other Domains</h5>
                      <p className="mb-0">Our services allow you sufficient time to focus on other key areas, such as data entry, billing, analysis reports, or documentation services. We carefully handle all these to meet state-of-the-art results.</p>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="card h-100 p-3 shadow-sm">
                      <h5><FaChartBar fontSize={32} /> Improved Operational Efficiency</h5>
                      <p className="mb-0">With our data support to your AI-KPO services, you can save time, achieve better result accuracy in your KPO services and increase the overall productivity of your business.</p>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="card h-100 p-3 shadow-sm">
                      <h5><FaLightbulb fontSize={32} /> Focus On Business Core</h5>
                      <p className="mb-0">We spend valuable time improving customer satisfaction and achieving high standards with our data support services.</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="text-danger mb-3">Why Should You Switch To Tech2Globe For Data Support Experts For Your AI KPO Services?</h2>
                    <p className="mb-0"><strong>Our Motto!</strong></p>
                    <p className="mb-3">We serve to transform operations as our <strong>data support experts</strong> are capable enough to let you achieve your business goals.</p>

                    <h5 className="mb-3">How Beneficial Is It For You?</h5>

                    <p>Our <strong>data support for AI KPO services</strong> comes with modernisation & platform management which ultimately enables businesses to outperform in the market.</p>

                    <p>Our global expertise, combined with the latest knowledge from partners and hyperscalers, prepares your business for AI. We keep our services updated with automated workflows and state-of-the-art <strong>AI data support</strong> systems.</p>

                    <p>To kickstart with our new project, we mix dependable, modular, and scalable solutions with your current KPO services structure.</p>

                    <h5 className="mb-3">The Process Of Our AI Data Support For KPO Services Includes The Below Steps :</h5>

                    <p>We include expert technical knowledge while processing AI support for your KPO services:</p>

                    <ul>
                      <li>Identifying client issues</li>
                      <li>Considering and gaining knowledge from the data gathered</li>
                      <li>Providing specific and appropriate AI solutions</li>
                      <li>Offer immediate assistance</li>
                      <li>Observing the number of customers complaints and concerns.</li>
                      <li>Reporting submission post project completion</li>
                    </ul>

                    <h5 className="mb-3">Key Highlights Of Our AI Data Support For KPO Services :</h5>

                    <ul>
                      <li>Seamless Service</li>
                      <li>Industry Standards</li>
                      <li>Advanced Technology</li>
                      <li>Improved Quality</li>
                      <li>Best AI Support</li>
                      <li>Strong Technical And Professional Expertise</li>
                    </ul>

                  </div>

                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h3 className="text-danger">Get Connected With Us Today!</h3>
                <p>To connect with us, you can request a demo to see how our <strong>AI data support experts</strong> work for your business. We are there for our customers 24/7, making it easier for you to have a seamless experience when you perform KPO services.</p>
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