import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";

export const metadata = {
  title: "Online Reputation Management Services | ORM Services | Tech2Globe",
  description:
    "Protect your brand with our finest and experienced online reputation management services. Our consultants can bring your reputation on track so you'll get the best outcome.",
  keywords:
    "brand reputation management, online reputation management services packages, online reputation management services india, online reputation management service",

  openGraph: {
    title: "Online Reputation Management Services | ORM Services | Tech2Globe",
    description:
      "Protect your brand with our finest and experienced online reputation management services. Our consultants can bring your reputation on track so you'll get the best outcome.",
    url: "https://www.tech2globe.com/online-reputation-management-services",
    siteName: "Tech2Globe",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online Reputation Management Services | ORM Services | Tech2Globe",
    description:
      "Protect your brand with our finest and experienced online reputation management services. Our consultants can bring your reputation on track so you'll get the best outcome.",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/online-reputation-management-services",
  },
};

const pageHeaderData = {
  title: "Online Reputation Management Services",
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


export default function PPCManagement() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Online Reputation Management Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Online Reputation Management Services" imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg" />
              <div className={Style.ContentDiv}>
                <h2>Strengthen your Brand image! Start to build a Strong & Positive Digital Presence</h2>
                <p>Online Reputation Management derives from your brand’s image in an online world. ORM services helps to protect your brand’s image from negative comments, reviews and feedback, ORM services helps to enhance your and your brand’s image by using different types of techniques. Tech2Globe offers the best Online Reputation Management (ORM) services that will 100% enhance your brand reputation in the eyes of consumers.</p>
                <p>Our professionals content writers, search engine optimization experts and experienced digital marketers helps to grow your brand awareness in more positive way and protect your business from unwanted negative signals and convert your positive reputation to get more customers and more productivity as well.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why ORM is important?</h4>
                <p>Maintain a positive reputation is required for every business and even for the individual. A single negative comments could ruin your whole journey and it badly destroy your business. Tech2Globe gives you complete solutions of all your needs to build a strong online presence. The ORM industry statistics will help you to understand why ORM is important:-</p>
                <ul>
                  <li className="mb-2">97% of consumers read online reviews</li>
                  <li className="mb-2">85% consumers trust on online reviews</li>
                  <li className="mb-2">64% of consumers trust search engine results</li>
                  <li className="mb-2">74% of consumers have greater trust in a company if they read positive reviews</li>
                  <li className="mb-2">About 87% of customers comparison shop for every purchase</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h4>What We Offer</h4>
                <p>Services that enhance your brand credibility in an online world</p>
                <ul>
                  <li className="mb-2"><strong>Protecting Online Reputation </strong> Tech2Globe give you and your business 100% protection from misconducting comments, reviews and feedback.</li>
                  <li className="mb-2"><strong>Online Brand Audit </strong> Analysis your whole brand to find out unfavorable things and make a plan to improve.</li>
                  <li className="mb-2"><strong>Content Management </strong> Our experienced content writers writing positive content about your brand and your business and publish.</li>
                  <li className="mb-2"><strong>SEO</strong> Generate positive SEO content which helps to enhance your brand image on first page SERP’s.</li>
                  <li className="mb-2"><strong>Online Reviews & Forums</strong> Maintaining online positive reviews and forums given by the customers.</li>
                  <li className="mb-2"><strong>Improve Ratings & Reviews</strong> Our ORM services improves your ratings and reviews in an online world and helps to enhance your brand image.</li>
                </ul>

              </div>


              <div className={Style.ContentDiv}>
                <h4 className="pt-3">We Expertise in All Major Services</h4>
                <ul>
                  <li className="mb-2"><Link href="/seo-services" className="text-decoration-none fw-normal">SEO On Page Services</Link></li>
                  <li className="mb-2"><Link href="/ecommerce-seo-services" className="text-decoration-none fw-normal">E-Commerce SEO Services</Link></li>
                  <li className="mb-2"><Link href="/link-building-services" className="text-decoration-none fw-normal">Link building Services</Link></li>
                  <li> <Link href="/ppc-management-services" className="text-decoration-none fw-normal">PPC Management Services</Link></li>
                </ul>
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
