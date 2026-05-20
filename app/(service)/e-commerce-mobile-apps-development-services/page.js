import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import { FaAngleRight, FaHandPointRight } from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  title: "eCommerce App Development Company, eCommerce Mobile App",
  description:
    "Tech2globe is the leading eCommerce app development company that provides custom eCommerce mobile app development solutions for Android and iOS users.",

  alternates: {
    canonical:
      "https://www.tech2globe.com/e-commerce-mobile-apps-development-services",
  },

  openGraph: {
    title: "eCommerce App Development Company, eCommerce Mobile App",
    description:
      "Tech2globe is the leading eCommerce app development company that provides custom eCommerce mobile app development solutions for Android and iOS users.",
    url:
      "https://www.tech2globe.com/e-commerce-mobile-apps-development-services",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "eCommerce App Development Company, eCommerce Mobile App",
    description:
      "Tech2globe is the leading eCommerce app development company that provides custom eCommerce mobile app development solutions for Android and iOS users.",
  },
};

const pageHeaderData = {
  title: "E-Commerce Mobile Apps Development Services",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "WooCommerce", path: "/woocommerce-development" },
  { id: 2, name: "Shopify", path: "/shopify-development-company" },
  { id: 3, name: "Volusion", path: "/volusion-development-services" },
  { id: 4, name: "Multivendor & B2B Solutions", path: "/multi-vendor-b2b-solution" },
  { id: 5, name: "E-Commerce Apps", path: "/e-commerce-mobile-apps-development-services" }
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

export default function MultiVendorB2bSolution() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="E Commerce Mobile Apps Development Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="E Commerce Mobile Apps Development Services" imageSrc="/images/services/cms-banner2.jpg" />

              <div className={Style.ContentDiv}>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/ecommerce.png" width={55} height={55} alt="E-Commerce Application Development" />
                      <div className="context">
                        <h5>E-Commerce Application Development</h5>
                        <p>Builds a mobile-centred application that supports the e-commerce model to provide end-users with exceptional facilities on-the-go.</p>
                      </div>
                    </div>

                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/responsive.png" width={55} height={55} alt="Responsive Shopping Website" />
                      <div className="context">
                        <h5>Responsive Shopping Website</h5>
                        <p>To increase the customer base, the shopping portal is accessible through various mobile platforms, such as tablets and smartphones.</p>
                      </div>
                    </div>

                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/web-plugin.png" width={55} height={55} alt="Plug-In & Module Development" />
                      <div className="context">
                        <h5>Plug-In & Module Development</h5>
                        <p>The ideally designed plug-in and high-end module optimize and enhance the functionality of the e-commerce application & website.</p>
                      </div>
                    </div>

                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/web-maintenance.png" width={55} height={55} alt="Maintenance & Support" />
                      <div className="context">
                        <h5>Maintenance & Support</h5>
                        <p>To ensure quiet maintenance of the application and website, the technical support team remains actively present round-the-clock in contact with the company.</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/web-development.png" width={55} height={55} alt="Custom E-Commerce Website Development" />
                      <div className="context">
                        <h5>Custom E-Commerce Website Development</h5>
                        <p>By customizing company websites with advanced structures, online retail architecture is enhanced according to today's business requirements.</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/online-shop.png" width={55} height={55} alt="Custom E-Commerce Website Design" />
                      <div className="context">
                        <h5>Custom E-Commerce Website Design</h5>
                        <p>By customizing company websites with advanced structures, online retail architecture is enhanced according to today's business requirements.</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/seo.png" width={55} height={55} alt="Web Development & Customization" />
                      <div className="context">
                        <h5>Web Development & Customization</h5>
                        <p>Upgrades e-commerce-oriented websites and apps to offer out-of-box services to balance trending aspects.</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/shopping-cart.png" width={55} height={55} alt="Shopping Cart Development" />
                      <div className="context">
                        <h5>Shopping Cart Development</h5>
                        <p>Provides beautifully crafted online carts that can operate on different platforms and feature all aspects that are business-centred.</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


              <div className={Style.ContentDiv}>
                <h4>Expertise of Tech2Globe</h4>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <p className="mb-0"><FaHandPointRight /> <strong>Choice of Platform</strong></p>
                    <p>We customize and make the store unique according to your business value, in addition to helping you determine the right and suitable platform.</p>

                    <p className="mb-0"><FaHandPointRight /> <strong>User Interface</strong></p>
                    <p>By anticipating what users might look for, we create those interface elements that are intuitive and easily navigated.</p>

                    <p className="mb-0"><FaHandPointRight /> <strong>Shopping Experience Tool</strong></p>
                    <p>For improved shopping experiences, quickly add to cart, wishlist, quick checkout, customizable online payment options, and more.</p>

                    <p className="mb-0"><FaHandPointRight /> <strong>Social Media Power</strong></p>
                    <p>Get the extensive benefits of social media through online product sharing on Twitter, Facebook, Instagram, and so on.</p>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <p className="mb-0"><FaHandPointRight /> <strong>Branding</strong></p>
                    <p>In less time, to encourage your brand name online, we provide a simple message, material, value, and social media.</p>

                    <p className="mb-0"><FaHandPointRight /> <strong>Protection</strong></p>
                    <p>Our protection initiatives include the industry's best practices, such as bug-free SSL certificates and daily updates.</p>

                    <p className="mb-0"><FaHandPointRight /> <strong>Optimization</strong></p>
                    <p>The website supported by us is designed for SEO, loads quick while surfing and reaches a wide range of clients.</p>

                    <p className="mb-0"><FaHandPointRight /> <strong>Reporting and Analytics</strong></p>
                    <p>For visitor monitoring, navigation analysis, traffic segmentation, and more, we deliver accurate analytics and interactive reporting.</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why choose Tech2Globe?</h4>
                <p>Tech2Globe provides custom solutions for eCommerce that fulfil your business needs. The size of your company, our <strong>eCommerce application development services</strong> offer value to your business; we ensure that your website consists of a thoughtful strategy and a comprehensive technology stack with a user-friendly user interface that provides your clients with an outstanding digital experience.</p>

                <p className="mb-0"><FaHandPointRight /> Ecommerce App Development Services</p>
                <p className="mb-0"><FaHandPointRight /> Full services to satisfy all your needs</p>
                <p className="mb-0"><FaHandPointRight /> 100% custom eCommerce website that suits your brand</p>
                <p className="mb-0"><FaHandPointRight /> Excellent help in addressing your business issues</p>
                <p className="mb-0"><FaHandPointRight /> Total accountability</p>
                <p className="mb-0"><FaHandPointRight /> With your team, we integrate</p>
                <p className="mb-0"><FaHandPointRight /> Project managers delegated</p>
                <p><FaHandPointRight /> No errors or hype in sales</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Technologies We Used</h4>
                <p className="mb-0"><FaHandPointRight /> PHP7</p>
                <p className="mb-0"><FaHandPointRight /> Volusion</p>
                <p className="mb-0"><FaHandPointRight /> WooCommerce</p>
                <p className="mb-0"><FaHandPointRight /> NopCommerce</p>
                <p className="mb-0"><FaHandPointRight /> jQuery</p>
                <p className="mb-0"><FaHandPointRight /> AJAX</p>
                <p><FaHandPointRight /> MySql</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Want Improvement in your business?</h4>
                <p>We will help you speed up your e-commerce progress. We not only help companies build e-commerce stores that provide them with a stable base but also ensure that they work through their evolution seamlessly. Experienced <strong>eCommerce app developers</strong> from Tech2Globe are top-notch fans of new technology.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>We Expertise in All <span className="text-danger">Major Technologies</span></h2>

                <p><FaAngleRight /> <Link href="/cake-php-development" className="text-decoration-none fw-normal">Cake PHP Development </Link></p>
                <p><FaAngleRight /> <Link href="/nop-commerce-development-services" className="text-decoration-none fw-normal">Nopcommerce Development</Link> </p>
                <p><FaAngleRight /> <Link href="/joomla-development" className="text-decoration-none fw-normal">Joomla Development</Link></p>
                <p><FaAngleRight /> <Link href="/drupal-development" className="text-decoration-none fw-normal">Drupal Development </Link></p>
                <p><FaAngleRight /> <Link href="/responsive-web-design" className="text-decoration-none fw-normal">Responsive Web Design</Link></p>
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
      </section>

      <ClientSlider testimonials={testimonials} />

    </>
  )
};