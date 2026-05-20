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
  title: "PPC Management Services | Pay Per Click | PPC Services | Tech2Globe",
  description:
    "Tech2globe offers PPC management services. Get guaranteed results and increase ROI with our experienced and well qualified PPC experts. Boost traffic now.",
  keywords:
    "PPC Services in Delhi, Pay Per Click, PPC Services, PPC Management services, PPC Company",

  openGraph: {
    title: "PPC Management Services | Pay Per Click | PPC Services | Tech2Globe",
    description:
      "Tech2globe offers PPC management services. Get guaranteed results and increase ROI with our experienced and well qualified PPC experts. Boost traffic now.",
    url: "https://www.tech2globe.com/ppc-management-services",
    siteName: "Tech2Globe",
  },

  twitter: {
    card: "summary_large_image",
    title: "PPC Management Services | Pay Per Click | PPC Services | Tech2Globe",
    description:
      "Tech2globe offers PPC management services. Get guaranteed results and increase ROI with our experienced and well qualified PPC experts. Boost traffic now.",
  },

  alternates: {
    canonical: "https://www.tech2globe.com/ppc-management-services",
  },
};

const pageHeaderData = {
  title: "PPC Management Services",
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
      <Breadcrumb parentName="Services" pageName="PPC Management Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="PPC Management Services" imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg" />
              <div className={Style.ContentDiv}>
                <p> Whether you wish to expand your reach and get most out of your existing PPC Management campaigns, or you are beginning from the scratch, Tech2Globe is the Online Marketing Agency you’d want on your side.</p>
                <p>Tech2Globe believes in delivering the real value of online advertising. We build highly optimized PPC Management campaigns to deliver your advertising message to the targeted audience in the most effective manner so to raise your website traffic and sales.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Boost Lead Flow – Reach Nearly 80% of All Online Users</h4>
                <p>Ad innovation and advanced PPC Management allows you to reach prospects at all stages of the buying cycle. Our talented Pay Per Click Management professionals bring your targeted audience at the ideal place and time to increase lead generation rate and give optimum exposure to your products and services.</p>

                <h4>Remarketing – Attain Targeted Audience Who Have Already Visited Your Website</h4>
                <p>Remarketing campaigns allow you to deliver customized messages to audiences who have already visited your website. Our innovated remarketing campaigns have proven to be immensely successful for our existing customers, increasing conversions substantially.</p>

                <h4>Video Ads – Harness-The Power of Video Content</h4>
                <p>Video content is constantly building an empire of entertainment. Audiences are preferring video sharing sites to TV as entertainment destination and in a number of countries Video Sharing Websites attract more viewership than any other TV Channel. Our skilled professionals chalk out effective InStream Video Advertising campaign strategy or Text/Image Overlay as per the requirements of your business so you reach out to your targeted audience with an appealing message.</p>

                <h4>Website Optimizer – Test Variations of Landing Pages</h4>
                <p>A/B lading page tester and a detailed analysis thereafter enables us to create the most attractive and effective landing pages and direct the visitors to the best performing landing page.</p>

                <h4>Device Targeting – Target Devices Like iPhone, iPad and Smartphones</h4>
                <p>Our skilled team also creates mobile ads and ‘Click To Call’ ads so you can target mobile users.</p>

                <h4>Hyper Local Advertising – Notify customers when they are near your Business</h4>
                <p>On high end mobile devices, we assist you notifying the users about your business, address, phone number and location on Google maps when the user is near the business location which eventually increases your end sales.</p>

                <h4>Adwords Express – Advertise on Google Maps, Search and Mobile Devices</h4>
                <p>Leveraging Adwords Express, we assist you advertise your local business on Google platforms like Search, Google Maps and mobile devices. At Tech2Globe, We help setting up a targeted ad campaign so you can reach out to your local customers.</p>

                <p>Tech2Globe has established Pay-Per-Click team utilizing the most powerful bid gap management & ROI tracking systems.
                  Pay-Per-Click services include sophisticated content research, keyphrase development & integrated ROI tracking enabling cost-to-revenue analysis.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Through a Tech2Globe managed Pay-Per-Click (PPC) campaign you get:</h4>
                <ul>
                  <li className="mb-2"><strong>High ROI –</strong> Full ROI tracking identifies which keyphrases are effective to end sales / enquiry level. Strategic campaign management and elegance then cuts spend wastage & ensure maximum ROI.</li>
                  <li className="mb-2"><strong>CPA led results –</strong> Comprehensive CPA data enables neutralize to provide sales / enquiries on a CPA driven basis. Bids can be updated up to 24 times a day and ‘rules based’ bidding enables us to avoid bidding wars, take advantage of price gaps, and set time</li>
                  <li className="mb-2"><strong>based bids The Search Engines –</strong> Close relationships with search engines ensures rapid campaign implementation and updates, which consequently means instantaneous results.</li>
                  <li className="mb-2"><strong>Bid Management & Tracking Campaigns –</strong> Utilizing sophisticated campaign management tools Tech2Globe can adjust keyphrases according to pre-defined parameters.</li>
                  <li className="mb-2"><strong>In-Depth Reporting –</strong> You will have direct access to your online client area. This provides direct access to granular performance data on all keyphrases, ROI, CPA & sales figures in a custom-reporting format.</li>
                  <li className="mb-2"><strong>Experience –</strong> Tech2Globe has a wealth of experience in PPC Management. This knowledge & understanding gives Tech2Globe the proven ability to ensure your Pay-Per-Click campaign is a success and achieves target driven results. We also make sure that the money spent on PPC gives attractive return. Acquire Robust Online Presence! <Link href="/contact-us" className="text-decoration-underline fw-bold text-muted">Contact Now!</Link></li>
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
