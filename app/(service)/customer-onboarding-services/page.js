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
import { FaAngleRight, FaBars, FaChalkboardTeacher, FaChartBar, FaCheckSquare, FaClock, FaCog, FaCogs, FaCube, FaDatabase, FaDownload, FaFilter, FaHandHolding, FaHandPointRight, FaHands, FaLightbulb, FaScrewdriver, FaSearch, FaShieldAlt, FaSlidersH, FaUnlock, FaUserFriends, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "AI Based Customer Onboarding Services",
  description:
    "Simplify client journeys with Tech2Globe’s AI Based Customer Onboarding Services, designed to deliver faster, smarter, and more personalized onboarding.",

  openGraph: {
    title: "AI Based Customer Onboarding Services",
    description:
      "Simplify client journeys with Tech2Globe’s AI Based Customer Onboarding Services, designed to deliver faster, smarter, and more personalized onboarding.",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/customer-onboarding-services",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Based Customer Onboarding Services",
    description:
      "Simplify client journeys with Tech2Globe’s AI Based Customer Onboarding Services, designed to deliver faster, smarter, and more personalized onboarding.",
  },

  alternates: {
    canonical:
      "https://www.tech2globe.com/customer-onboarding-services",
  },
};

const pageHeaderData = {
  title: "Customer Onboarding Services",
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


export default function CustomerOnboardingServices() {


  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb pageName="Customer Onboarding Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Customer Onboarding Services" imageSrc="/images/services/service-inner/data-support-for-ai-banner.jpg" />
              <div className={Style.ContentDiv}>

                <h3>Why Do AI Based Customer Onboarding Services Need To Have Data Support?</h3>

                <p>Precise data support makes the entire management of your Artificial Intelligence based customer onboarding relatively easy. Since most of the revenue comes from your existing potential customers, you can provide them with the security complaint facility of the Know Your Customer (KYC) policy.</p>

                <p>These services have been specifically tailored to deliver maximum results and help with:</p>

                <ul className="ps-4">
                  <li>Centralizing client data</li>
                  <li>Processing forms</li>
                  <li>Demonstrate the value of your products</li>
                </ul>
                <p>These data support services are highly customizable as per your business requirements.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="text-danger">Our Data Support For Customer Onboarding Services Make Your Customer Experience Easier</h4>
                <p>Our services are useful for multiple purposes, such as:</p>

                <div className="card p-3 mb-3 shadow-sm">
                  <h5><FaCheckSquare fontSize={32} /> Customer Engagement</h5>
                  <p className="mb-3">The data support we provide can be extremely beneficial for your customer onboarding services in terms of customer engagement. Your customer onboarding services become more capable of handling SaaS tools more comfortably for users to reach their goals swiftly. With precise information, you can work on real-time insights of your clients.</p>
                </div>

                <div className="card p-3 mb-3 shadow-sm">
                  <h5><FaFilter fontSize={32} /> Conversion Rate</h5>
                  <p className="mb-3">Our data support helps you increase the conversion rate of your onboarding services with the least effort, keeping your potential or new customers engaged throughout the process.</p>
                </div>

                <div className="card p-3 mb-3 shadow-sm">
                  <h5><FaHandHolding fontSize={32} /> Technology Adoption</h5>
                  <p className="mb-3">We frequently introduce new features in our data support as new demands are made by businesses for their AI based customer onboarding services and create value for them.</p>
                </div>
              </div>
              <br /><br />





            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>

          </div>

          <div className="row">
            <div className="col-md-12">

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="text-danger mb-3">Some Potential Benefits Of Our Data Support For AI Customer Onboarding Services</h2>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="card p-3 mb-3 shadow-sm">
                          <FaCog fontSize={28} />
                          <h5>Timely Execution</h5>
                          <p className="mb-0">It provides smooth and end-to-end processing so your customer goals can be fulfilled on time.</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card p-3 mb-3 shadow-sm">
                          <FaChartBar fontSize={28} />
                          <h5>Gain Customer Loyalty</h5>
                          <p className="mb-0">It constitutes multi-channel solutions that are phenomenal and dynamic to impress your customers.</p>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="card p-3 mb-3 shadow-sm">
                          <FaScrewdriver fontSize={28} />
                          <h5>Swift and Cost-Effective</h5>
                          <p className="mb-0">It is fully automated, so there is no requirement for extra man work. It is cost-effective and has robust modifications that are flexible for any business.</p>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="card p-3 mb-3 shadow-sm">
                          <FaChalkboardTeacher fontSize={28} />
                          <h5>Complete Ownership</h5>
                          <p className="mb-0">It comes up with seamless integration for user-centric onboarding and you will get to work on ownership and accountability of your customers.</p>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="card p-3 mb-3 shadow-sm">
                          <FaUnlock fontSize={28} />
                          <h5>Data Security</h5>
                          <p className="mb-0">Maximum safety of the customers data is ensured for best practices for customer onboarding.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Why Do You Need Tech2Globe’s Data Support For Your AI Based Customer Onboarding Services?</h2>
                <p>Our data support helps you with various aspects of customer onboarding services like:</p>
                <ul className="ps-4">
                  <li>We can help you to gather a great amount of useful data every single second. We can tell your customers about the products you offer and how valuable they are to them.</li>
                  <li>Using our best expertise in data management for AI services, we can create and maintain sales and revenue reports of your products or services.</li>
                  <li>We have a specialized team of experts in customer onboarding services that guide us to be accurate throughout the process.</li>
                </ul>

                <h4 className="mb-3">The Process Of Customer Onboarding Services Includes These Steps</h4>
                <ul className={Style.ListColTwo}>
                  <li>Data Support Request</li>
                  <li>Analyzing The Business Nature, Requirements, And Other Corners</li>
                  <li>Documentations</li>
                  <li>Account Set-Up</li>
                  <li>Communication</li>
                </ul>

                <h4 className="mb-3">We Cover These Areas Under Customer Onboarding Services</h4>
                <ul className={Style.ListColTwo}>
                  <li>Ecommerce And Retail Market</li>
                  <li>Hospitality And Healthcare</li>
                  <li>Banking And Finance</li>
                  <li>Security And Concerns</li>
                  <li>Cryptocurrency</li>
                  <li>Insurance</li>
                  <li>Online Gaming</li>
                </ul>

              </div>

              <div className={Style.ContentDiv}>
                <h4 className="mb-3">Highlights Of Our Data Support For AI Based Customer Onboarding Services</h4>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="card p-3 h-100  shadow-sm">
                      <h5><FaUserFriends /> Client Engagement</h5>
                      <p>We engage clients based on continuous feedback and deliver solutions as per the requirement changes. We offer top solutions to them to build a positive impact on the AI customer onboarding business.</p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-3">
                    <div className="card p-3 h-100 shadow-sm">
                      <h5><FaSlidersH /> Effective Development Approach</h5>
                      <p>Our team has skilled professionals with experience working with an agile mindset to maximize your functional capabilities.</p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-3">
                    <div className="card p-3 h-100  shadow-sm">
                      <h5><FaSearch /> Performance Analysis And Enhancement</h5>
                      <p>With our data support for your customer onboarding services, you may also get performance metrics to meet the sudden changes and improvements required. It is not just random but comes with thoroughly checked security standards.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h3 className="text-danger">Get Connected With Us!</h3>
                <p>To connect with us, you can request a demo to see how our data support works for the customer onboarding services. We are here for our customers 24/7, making it easier for them to have a seamless experience during business operations.</p>
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