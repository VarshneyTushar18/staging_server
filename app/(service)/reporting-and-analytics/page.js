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
import { FaAngleRight, FaChartBar, FaChartLine, FaChartPie, FaCheckSquare, FaClock, FaCogs, FaCube, FaDatabase, FaDesktop, FaDownload, FaEdit, FaHandPeace, FaHandPointRight, FaHands, FaLightbulb, FaProjectDiagram, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Faq from "@/app/(resources)/faq/page";

export const metadata = {

  title: "Reporting And Analytics Service for Businesses",

  description:
    "Maximize efficiency with Tech2Globe’s Reporting And Analytics Service for Businesses, providing intelligent reporting solutions to achieve sustainable success.",

  alternates: {
    canonical:
      "https://www.tech2globe.com/reporting-and-analytics",
  },

  openGraph: {
    title: "Reporting And Analytics Service for Businesses",

    description:
      "Maximize efficiency with Tech2Globe’s Reporting And Analytics Service for Businesses, providing intelligent reporting solutions to achieve sustainable success.",

    siteName: "Tech2Globe Web Solutions LLP",

    url: "https://www.tech2globe.com/reporting-and-analytics",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Reporting And Analytics Service for Businesses",

    description:
      "Maximize efficiency with Tech2Globe’s Reporting And Analytics Service for Businesses, providing intelligent reporting solutions to achieve sustainable success.",
  },
};

const pageHeaderData = {
  title: "Reporting And Analytics",
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

export default function ReportingAndAnalytics() {


  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb pageName="Reporting And Analytics" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Reporting And Analytics" imageSrc="/images/services/service-inner/data-support-for-ai-banner.jpg" />
              <div className={Style.ContentDiv}>

                <h2>Why Do You Need Reporting And Analytics Services For Your Business?</h2>

                <div className="card p-3 mb-3 shadow-sm">
                  <h5><FaClock fontSize={32} /> Complete Knowledge Of Past Patterns</h5>
                  <p className="mb-0">A solid marketing report compiles all outcomes, objectives, and historical information in one location.</p>
                </div>

                <div className="card p-3 mb-3 shadow-sm">
                  <h5><FaEdit fontSize={32} /> Evaluation Of Present Marketing Strategies</h5>
                  <p className="mb-0">A company or customer can use structured reports to determine whether the current marketing plan is effective and whether there is room for improvement.</p>
                </div>

                <div className="card p-3 mb-3 shadow-sm">
                  <h5><FaHands fontSize={32} /> You Have All The Critical Information In Your Hands</h5>
                  <p className="mb-0">Regular reporting and data analytics include an overview page, statistics for paid campaigns, social media, and organic website traffic. Monitoring campaign analytics can help marketers find valuable consumer behavioral insights and provide crucial lead information to their sales teams.</p>
                </div>

                <div className="card p-3 mb-3 shadow-sm">
                  <h5><FaDesktop fontSize={32} /> Monitoring Becomes Easier</h5>
                  <p className="mb-0">If you are spending money on marketing your company, you must monitor and evaluate how successful your campaigns generate leads and close sales.</p>
                </div>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Your Business Can Grow Uninterruptedly With Our Services</h2>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="card h-100 p-3  shadow-sm">
                      <FaCheckSquare fontSize={32} />
                      <h5>Reports compile the information into one convenient location for use</h5>
                      <p className="mb-0">Gathering, collecting, and analyzing data may determine how well your initiatives are doing. We'll assist you in setting up efficient systems for monitoring data so you can benefit from it.</p>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="card h-100 p-3  shadow-sm">
                      <FaChartBar fontSize={32} />
                      <h5>Analytics is used in the background</h5>
                      <p className="mb-0">You'll need to know what to do with that data to maximize the effectiveness of your digital marketing operations. We can provide you with the resources you need to determine effective campaigns and how to improve them.</p>
                    </div>
                  </div>

                  <div className="col-md-6  mb-3">
                    <div className="card h-100 p-3 shadow-sm">
                      <FaChartPie fontSize={32} />
                      <h5>Improved Operational Efficiency</h5>
                      <p className="mb-0">With our data support to your AI-KPO services, you can save time, achieve better result accuracy in your KPO services and increase the overall productivity of your business.</p>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="card h-100 p-3 shadow-sm">
                      <FaProjectDiagram fontSize={32} />
                      <h5>Use of full-stack analytics prevents you from passing up opportunities</h5>
                      <p className="mb-0">We can assist you in comparing and analyzing your marketing efforts to ascertain the actual return on investment you're receiving for your budget and make adjustments as necessary, thanks to our robust set of capabilities in digital marketing analytics.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Our Services Ranges</h2>
                <div className="row">
                  <div className="col-md-6">
                    <h5>Analytics for Web & Apps</h5>
                    <ul>
                      <li>Measurement Strategy</li>
                      <li>Audit of Web & App Analytics</li>
                      <li>Tag Management for Google</li>
                      <li>Setup for experiments and A/B testing</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>Advertising Cloud</h5>
                    <ul>
                      <li>Engineering Data</li>
                      <li>Database Management</li>
                      <li>Solution for Customized Data Visualization</li>
                      <li>Information Modeling Services</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>Solutions for Marketing Campaigns</h5>
                    <ul>
                      <li>Hacking digital growth</li>
                      <li>Conversion Rate Improvement</li>
                      <li>Campaign Evaluation</li>
                      <li>Insights on Attribution</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5>Scripted Reports</h5>
                    <ul>
                      <li>Business and Competition</li>
                      <li>Efficiency Evaluation</li>
                      <li>Alerts, anomalies, and exceptions</li>
                      <li>Temporal Comparison</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Why Tech2Globe For Reporting And Analytics?</h2>
                <p>At Tech2Globe, our reporting and data analysts create reports, dashboards, and visualizations that offer practical insights into your company using a contemporary set of technologies. We discover the full potential of your operations needed to make wise business decisions using cognitive analytics services. Our data scientists have a wealth of expertise in various sectors, including oil and gas, energy, utilities, mail and packaging, logistics, and operations.</p>

                <p>Also, our data engineering team can combine, purify, and link data from many sources.</p>

                <p>Setting up accurate analytics and reporting for your digital initiatives is essential. What good is it if you're not using the right messaging, target audiences, or online assets optimized for conversions? You must link your analytics with other digital marketing initiatives to see benefits from your digital efforts.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Ready To Bring The Difference In Your Business?</h2>
                <p>Various organizations, both large and small, have already improved their business using our data and analytics expertise globally.</p>

                <p>So, if you want to do the same, our professionals are ready to assist you.</p>
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