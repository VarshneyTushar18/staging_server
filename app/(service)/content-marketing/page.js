import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Image from "next/image";
import { FaAngleRight, FaHandPointRight } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title: "Content Marketing Services | SEO Content Creation | Tech2Globe",
  description:
    "Drive traffic, leads, and conversions with expert content marketing services. We offer SEO content creation, strategy, blogs, and scalable content solutions.",

  keywords: [
    "content marketing services",
    "seo content creation",
    "content marketing agency",
    "digital content marketing",
    "blog writing services",
    "seo copywriting services",
  ],

  openGraph: {
    title: "Content Marketing Services | SEO Content Creation | Tech2Globe",
    description:
      "Boost your brand visibility with result-driven content marketing services, including SEO content creation, strategy development, and high-quality publishing.",
    url: "https://www.tech2globe.com/content-marketing-services",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Content Marketing Services | SEO Content Creation | Tech2Globe",
    description:
      "Grow your online presence with professional content marketing services and SEO-focused content creation by Tech2Globe.",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/content-marketing-services",
  },
};

const pageHeaderData = {
  title: "Content Marketing",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "SEO On Page Services", path: "/seo-services" },
  { id: 2, name: "E-Commerce SEO Services", path: "/ecommerce-seo-services" },
  { id: 3, name: "Link building Services", path: "/link-building-services" },
  { id: 4, name: "PPC Management Services", path: "/ppc-management-services" },
  { id: 5, name: "Social media Marketing Services", path: "/social-media-marketing-services" },
  { id: 6, name: "Email Marketing Services", path: "/email-marketing-services" },
  { id: 7, name: "Online Reputation Management", path: "/online-reputation-management-services" },
  { id: 8, name: "Content Marketing", path: "/content-marketing" },
  { id: 9, name: "Guest Posting", path: "/guest-posting-services" },
];

const sidebarSections = [
  { heading: "Resources", links: resources },
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


export default function ContentMarketing() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Content Marketing" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Content Marketing" imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg" />
              <div className={Style.ContentDiv}>
                <h2>THINK. FEEL. CONTENT. Good Content is not storytelling. It’s telling your story well.</h2>
                <h4>Is content really works?</h4>
                <p>Content is like a never ending story</p>
                <p>Content Marketing is the form of strategic marketing focused on creating, publishing and distributing the valuable and unique content to attract the consumers. Whenever we read on the Internet to get the information or something else, it’s all the part of content management. Content helps to increasing your website ranking, connect SEO, ORM Link Building, Social Media and your whole marketing campaign. You can do by yourself, Yes! But if your content is not valuable, not unique and not effective that it will hardly affect your website and your marketing campaigns as well. Content Marketing specialist always focus to build great and unique content because “Content isn’t king, it creates the Empire”.</p>

                <p><strong>CONTENT HELPS TO BUILD BIGGER</strong> Unique and attractive content helps to grow your business longer and stronger in the eyes of customers, now days, people wants to get the whole description first before purchase any product or before hire you and it also helps to get higher rankings and more visibility of your business.</p>
                <p><strong>CONTENT HELPS TO BUILD BRAND AWARENESS</strong> Content marketing helps to increase your website traffic, it generates more valuable and quality audience and you can convert your audience into your customers. People didn’t aware your brand, content marketing helps to increase your brand awareness in the market and in the consumers as well to generate more productivity.</p>
                <p><strong>CONTENT HELPS TO ADDS VALUE</strong> Effective Content directly impact on consumer’s mind that your brand is trustable to trust. People wants to know more about your business, they follow your brand on social media to get more updates of any products or goods. It helps to increase your customers more.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h3>Content Services- Never Sleep</h3>
                <p><strong>BLOG & ARTICLES WRITING</strong> We have a team of professional content writers who have several years of experience in content writing. Give unique and effective results.</p>
                <p><strong>GUEST POSTS & INFORMATIONAL ARTICLES</strong> We create a high-quality guest post and informational articles which helps to generate more profits.</p>
                <p><strong>CONTENT RESEARCH</strong> Our team always ensure that before start working on content writing, we focus on well research & development content presents.</p>
                <p><strong>UNIQUE, EFFECTIVE & EFFICIENT</strong> We deliver the unique and effective content that will helps to enhance your brand awareness in given time period.</p>
                <p><strong>WEB CONTENT</strong> Enhance your online visibility, build quality customers, make a healthy relationship and boost your sales by our professionally web content work.</p>
                <p><strong>SEO</strong> With our SEO features gives your business high rankings and more conversion rates helps to enhance your visibility.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h3>Give your business new effective words!</h3>
                <p>Content Marketing is the way to enhance your consumers in more effective way. Our professional Content Writers give your business a new way of success and it will helps to setup a new identity of your business.</p>
                <p className="mb-0">- Build a strong Online Presence</p>
                <p className="mb-0">- Enhance Quality Traffic</p>
                <p className="mb-0">- Target more Consumers</p>
                <p className="mb-0">- Helps to Increase Productivity</p>
                <p className="mb-0">- Brand Awareness</p>
                <p>- Improve Rankings and Visibility</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>We Expertise in All Major Services</h2>
                <p className="mb-0"><Link href="/seo-services" className="text-decoration-none fw-normal"> - SEO On Page Services</Link></p>
                <p className="mb-0"><Link href="/ecommerce-seo-services" className="text-decoration-none fw-normal"> - E-Commerce SEO Services</Link></p>
                <p className="mb-0"><Link href="/link-building-services" className="text-decoration-none fw-normal"> - Link building Services</Link></p>
                <p><Link href="/ppc-management-services" className="text-decoration-none fw-normal">- PPC Management Services</Link></p>
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

      <ClientSlider testimonials={testimonials} />

    </>
  )
};
