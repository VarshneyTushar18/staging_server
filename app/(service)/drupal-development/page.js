import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Image from "next/image";
import { FaAngleRight, FaHandPointRight } from "react-icons/fa";
import Link from "next/link";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";

export const metadata = {
  title: "Drupal Development Services | Drupal Development Company | Tech2globe",
  description:
    "Get professional Drupal development services including Drupal web development, theme customization, and design. We make your website stand out and deliver the best outcomes.",
  keywords: [
    "Drupal Development Services",
    "Drupal Development Company",
    "Drupal Theme Developers",
    "Drupal Web Development Services",
    "Professional Drupal Design Services",
    "Drupal theme design and development"
  ],
  openGraph: {
    title: "Drupal Development Services | Drupal Development Company | Tech2globe",
    description:
      "Get professional Drupal development services including Drupal web development, theme customization, and design. We make your website stand out and deliver the best outcomes.",
    url: "https://www.tech2globe.com/drupal-development",
    siteName: "Tech2Globe web Solutions LLP",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Drupal Development Services | Drupal Development Company | Tech2globe",
    description:
      "Get professional Drupal development services including Drupal web development, theme customization, and design. We make your website stand out and deliver the best outcomes."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/drupal-development"
  }
};

const pageHeaderData = {
  title: "Drupal Theme Design And Development",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Joomla Development", path: "/joomla-development" },
  { id: 2, name: "Drupal Development", path: "/drupal-development" },
  { id: 3, name: "WordPress Development", path: "//wordpress-development" },
  { id: 4, name: "Shopify Development", path: "/shopify-development" },
  { id: 5, name: "BigCommerce Development", path: "/bigcommerce-development" },
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


export default function ResponsiveWebDesign() {

  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Drupal Development" />
      <BrandSection />

      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Drupal Development" imageSrc="/images/services/service-inner/custom-webdevelopment-banner.jpg" />
              <div className={Style.ContentDiv}>
                <p>Tech2Globe delivers world-class Drupal website development and unique Drupal website theme design at within your cost. We have industry Drupal experts for unmatchable Drupal theme design for your Drupal website and we are well-known for it.</p>

                <p>Our Development team have a huge experience in Drupal Development and understand accurately how it's put together so we can get "under the bonnet" if required to make websites perform accurately as needed.</p>

                <p>Your service or organisation is unique and Tech2Globe Drupal website themes are unique too. Understanding your website visitors and developing the perfect user-friendly journey is part of what makes the impeccable Drupal website theme. We get to know the whole thing we can about you, your organisation and your website traffic.</p>

                <p>In fact our Drupal website themes inherit maximum of their functionality from a base-theme. This line of method ensures a more robust framework and it continued community support as upcoming browser desires change.</p>

                <p>All our brand new Drupal website themes are developed and designed as HTML5 and CSS with more friendly, adaptive, responsive layout to contain viewports such as smartphones, tablets and other mobile phone devices. Inclusion and user-friendliness are also part of Tech2Globe design ethos.</p>

                <p>Our Drupal website theme source code part is standard-compliant, shapely, commented, and documented so it's very stress-free for anyone to make changes in the upcoming time.</p>

                <p>We are also able to develop Drupal website themes from existing graphic designs (like as Illustrator or Photoshop files). Tech2Globe’s World-class Support service: We value our clients and we are ready for any kind of support related to your website design and development.</p>

                <p>Please contact – <Link href="mailto:info@tech2globe.com" className="fw-bold text-decoration-underline">info@tech2globe.com</Link></p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>We Expertise in All <span className="text-danger">Major Technologies</span></h2>

                <p><FaAngleRight /> <Link href="/cake-php-development" className="text-decoration-none fw-normal">Cake Php Development </Link></p>
                <p><FaAngleRight /> <Link href="/nop-commerce-development-services" className="text-decoration-none fw-normal">Nopcommerce Development</Link> </p>
                <p><FaAngleRight /> <Link href="/joomla-development" className="text-decoration-none fw-normal">Joomla Development</Link></p>
                <p><FaAngleRight /> <Link href="/drupal-development" className="text-decoration-none fw-normal">Drupal Development </Link></p>
                <p><FaAngleRight /> <Link href="/responsive-web-design" className="text-decoration-none fw-normal">Reponsive Web Design </Link></p>
                <p><FaAngleRight /> <Link href="/mailchimp-template-design" className="text-decoration-none fw-normal">Mailchimp Template Design </Link></p>
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
