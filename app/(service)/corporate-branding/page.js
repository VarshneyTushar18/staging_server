import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";
import { FaHandPointRight } from "react-icons/fa";


export const metadata = {
  title: "Corporate Branding Solutions | Tech2globe Branding Agency for Business",
  description:
    "Corporate Branding solutions from a leading branding agency, Tech2globe, for corporate identity design –provide constructive branding solutions to define a business’s personality and we are here to do the exact same thing.",
  keywords:
    "Corporate Branding Solutions, Branding Agency, Corporate Identity Design, Business Branding Services",
  openGraph: {
    title: "Corporate Branding Solutions | Tech2globe Branding Agency for Business",
    description:
      "Corporate Branding solutions from a leading branding agency, Tech2globe, for corporate identity design –provide constructive branding solutions to define a business’s personality and we are here to do the exact same thing.",
    siteName: "Tech2Globe web Solutions LLP",
    url: "https://www.tech2globe.com/corporate-branding",
    type: "website"
  },
  twitter: {
    card: "Tech2Globe",
    title: "Corporate Branding Solutions | Tech2globe Branding Agency for Business",
    description:
      "Corporate Branding solutions from a leading branding agency, Tech2globe, for corporate identity design –provide constructive branding solutions to define a business’s personality and we are here to do the exact same thing."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/corporate-branding"
  }
};

const pageHeaderData = {
  title: "Corporate Branding Solutions",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "UI/UX Design Services", path: "/ui-ux-design-services" },
  { id: 2, name: "Front End Designing", path: "/front-end-development-company" },
  { id: 3, name: "Responsive Web Designing", path: "/responsive-web-design" },
  { id: 4, name: "Graphic Design", path: "/graphic-design-services" },
  { id: 5, name: "Corporate Branding", path: "/corporate-branding" },
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


export default function CorporateBranding() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Technologies" pageName="Corporate Branding" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Corporate Branding" imageSrc="/images/services/service-inner/ui-ux-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>The most important source in any company is the logo. It&apos;s not only a LOGO but the product or service&apos;s name, slogan, design scheme. Increase your brand value, or put it by working with our Branding Services, add more values to your brand. </p>
                <p>Tech2Globe will manage the corporate branding solution portfolio as a whole. You want an overall message when you use a corporate branding solution. Company branding is an important part of the overall marketing and advertising strategy of an organization. In Branding Identity, we at Tech2Globe are enthusiastic about leveraging innovation. </p>
                <p>Creating your Brand Identity starts from basic <strong>professional logo design services</strong> to an entire Design Services flag.Tech2Globe is a leading <strong>custom logo design and branding agency</strong> specializing in developing aesthetic brand identities and custom logo designs. We strive to provide professional yet niche-related branding services for our customers to convert their audiences into customers.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="mb-3">Our Corporate Branding Services</h4>
                <hr/>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/logo-design.png" width={55} height={55} alt="Logo Design / Identity of Brand" />
                      <div className="context">
                        <h5>Logo Design / Identity of Brand</h5>
                        <p>We design logos at Tech2Globe that are becoming the talk of the community. We take basic ideas and turn them into custom design logos that are purposeful.</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/business.png" width={55} height={55} alt="Business & Marketing" />
                      <div className="context">
                        <h5>Business & Marketing</h5>
                        <p>We believe in converting your company&apos;s stories into the best business advertising that can attract and convert potential customers.</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/web-design-black.png" width={55} height={55} alt="Development & Web Design" />
                      <div className="context">
                        <h5>Development & Web Design</h5>
                        <p>We give our designers complete freedom at Tech2Globe, not a standard website design business, so that they can come up with innovative & exclusive website designs.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/marketing.png" width={55} height={55} alt="Marketing Material Design" />
                      <div className="context">
                        <h5>Marketing Material Design</h5>
                        <p>We produce the best templates for marketing materials, including logos, posters, signage, packaging, and anything else that can make your brand impression.</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/seo.png" width={55} height={55} alt="Search Engine Optimization" />
                      <div className="context">
                        <h5>Search Engine Optimization</h5>
                        <p>We develop unique optimization strategies for each company and ensure that your website is well optimized to jump to higher ranks each time.</p>
                      </div>
                    </div>
                    <div className="d-flex gap-3">
                      <Image src="/images/services/service-inner/animation.png" width={55} height={55} alt="Explainer Videos Services" />
                      <div className="context">
                        <h5>Explainer Videos Services</h5>
                        <p>Animators, guided by perfection, can create videos that will be remembered for years: innovative videos that will be self-explanatory, storytelling.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="mt-3 mb-3">Build Corporate Branding Solutions With Tech2Globe</h4>
                <hr/>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Corporate Identity Creation</p>
                    <p className="mb-0"><FaHandPointRight /> Newsletter Design</p>
                    <p className="mb-0"><FaHandPointRight /> Interactive Presentations Design</p>
                    <p className="mb-0"><FaHandPointRight /> Designing PDF (Company Profile Creation)</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="mb-0"><FaHandPointRight /> Web Design & Development</p>
                    <p className="mb-0"><FaHandPointRight /> Label and Package Designs</p>
                    <p className="mb-0"><FaHandPointRight /> Brochures and Flyers</p>
                    <p className="mb-0"><FaHandPointRight /> Researching and designing Concepts & layouts</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Why Choose Tech2Globe</h4>
                <p>Tech2Globe is a different company from other <strong>Corporate Branding Companies.</strong> First, let our brand strategist understand your product, your consumer base, and product scope. After we become aware of this, we create a survey report because the best brands are our brand strategist&apos;s easy ones. On their capacity to be understood, brands flourish. Men, too, do.</p>
                <p>Tech2Globe is a <strong>Logo Design Company India</strong> specialist who is also one of India&apos;s top logo design companies that lets you make an unforgettable impression on your customers&apos; minds. Our <strong>best logo designers</strong> team creates outstanding logos that will make your brand stand out online and offline.</p>
                <p>We understand that website branding does not only produce a groovy website or logo with taglines that are worth remembering. Rather it is a consistent method of communicating and generating awareness of the products efficiently through brand identity design. Tech2Globe Corporate Branding Services help to influence the end customer&apos;s behavior and gain consistent trust in your company.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Are You Looking for the Best Designers for Corporate Branding Companies?</h4>
                <p>To focus on the logo, website, brochure, banners, and advertising, we go for challenging steps and search engine optimization techniques. We have managed multiple customer campaigns since our establishment, making their brand promotion successful at each turn.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>We Expertise in All Major Technologies</h2>
                <ul>
                  <li>Cake PHP Development</li>
                  <li>Nopcommerce Development </li>
                  <li>Joomla Development</li>
                  <li>Drupal Development</li>
                  <li>Responsive Web Design</li>
                  <li>Mailchimp Template Design</li>
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
