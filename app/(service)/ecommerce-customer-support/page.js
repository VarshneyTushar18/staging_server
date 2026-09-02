import Style from "./style.module.css";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "Ecommerce Customer Support Services | Outsource eCommerce Customer Service",
  description:
    "Outsource ecommerce customer support to Tech2Globe. Get live chat, email, phone, and multi-channel support for your online store with 24/7 human-assisted service.",
  keywords: [
    "Ecommerce Customer Support",
    "Outsource eCommerce Customer Service",
    "eCommerce Customer Support Services",
    "Live Chat Support for Online Stores",
    "Multi-Channel Customer Support",
    "eCommerce Email Support Services",
  ],
  alternates: {
    canonical: "https://stagenew.tech2globe.tech/ecommerce-customer-support",
  },
  openGraph: {
    title: "Ecommerce Customer Support Services | Outsource eCommerce Customer Service",
    description:
      "Outsource ecommerce customer support to Tech2Globe. Get live chat, email, phone, and multi-channel support for your online store with 24/7 human-assisted service.",
    url: "https://stagenew.tech2globe.tech/ecommerce-customer-support",
    siteName: "Tech2Globe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Customer Support Services | Outsource eCommerce Customer Service",
    description:
      "Outsource ecommerce customer support to Tech2Globe. Get live chat, email, phone, and multi-channel support for your online store with 24/7 human-assisted service.",
  },
};

const pageHeaderData = {
  title: "Ecommerce Customer Support",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true,
};

const resources = [
  { id: 1, name: "Case Studies", path: "/case-studies" },
  { id: 2, name: "Clients", path: "/clients" },
  { id: 3, name: "Testimonial", path: "/testimonial" },
];

const usefulLinks = [
  { id: 4, name: "Customer Support", path: "/customer-support" },
  { id: 5, name: "Chat Support Services", path: "/chat-support-services" },
  { id: 6, name: "E-Commerce Support Services", path: "/e-commerce-support-services" },
  { id: 7, name: "Virtual Assistant Services", path: "/virtual-assistant-services" },
  { id: 8, name: "Inbound Call Center", path: "/inbound-call-center" },
  { id: 9, name: "Ecommerce Marketplace Management", path: "/ecommerce-marketplace-management" },
  { id: 10, name: "Ecommerce Back Office Support", path: "/ecommerce-back-office-support" },
];

const sidebarSections = [
  { heading: "Resources", links: resources },
  { heading: "Useful Links", links: usefulLinks },
];

const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe transformed our post-purchase support across Amazon and Shopify. Response times dropped from hours to minutes, and our CSAT climbed to 93% within two months. Their agents understand ecommerce workflows and handle returns, tracking, and product queries with real expertise.",
    name: "Rachel Whitmore | UrbanStyle Retail Ltd.",
    location: "United Kingdom",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We outsourced our entire ecommerce customer support function to Tech2Globe during peak holiday season. They scaled instantly, managed email and live chat across three marketplaces, and kept resolution times under 4 hours even at maximum volume. Outstanding partner.",
    name: "Marco Bellini | ModaDirect Italia",
    location: "Italy",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Our Shopify store needed 24/7 chat support without building an in-house team. Tech2Globe deployed trained agents within a week, integrated with our helpdesk, and reduced cart abandonment by 22%. Professional, responsive, and genuinely invested in our growth.",
    name: "Priya Sharma | GlowNest Beauty Co.",
    location: "India",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Managing customer queries across eBay, Etsy, and our own website was overwhelming our small team. Tech2Globe consolidated everything into one support workflow. Ticket backlog cleared, negative reviews dropped, and repeat purchase rate improved significantly.",
    name: "James O'Brien | CraftWorks Marketplace",
    location: "Ireland",
  },
  {
    id: 5,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe's multi-channel ecommerce support covers email, social media, and marketplace messages with consistent brand voice. Their reporting on CSAT, resolution time, and common issues helps us improve products and policies every month.",
    name: "Amara Diallo | AfriShop Online",
    location: "South Africa",
  },
];

const portfolioClients = [
  {
    initials: "UK",
    gradient: "#0b2e58",
    client: "UK Custom Print Brand",
    country: "UK",
    project: "Full-Funnel eCommerce Support Across eBay, Etsy, Amazon & Shopify",
    desc: "Delivered omnichannel customer support for a UK print-on-demand brand managing order tracking, returns, product guidance, and marketplace messaging across four sales channels.",
    category: "Multi-Channel eCommerce Support",
    result: "40% faster resolution • 91% CSAT",
  },
  {
    initials: "US",
    gradient: "#0b2e58",
    client: "US Online Retailer",
    country: "USA",
    project: "24/7 Live Chat & Email Support Program",
    desc: "Implemented round-the-clock live chat and email support for a high-volume US ecommerce store, handling checkout queries, shipping updates, and post-purchase assistance.",
    category: "Live Chat & Email Support",
    result: "18% lower cart abandonment • 2-min chat response",
  },
  {
    initials: "AU",
    gradient: "#0b2e58",
    client: "Australian Marketplace Seller",
    country: "Australia",
    project: "Marketplace Customer Service Expansion",
    desc: "Scaled customer support for an Australian seller on Amazon and Walmart, managing buyer messages, A-to-Z claims, returns, and product inquiry resolution at peak season volume.",
    category: "Marketplace Support Services",
    result: "95% SLA compliance • 4.7/5 buyer rating",
  },
  {
    initials: "CA",
    gradient: "#0b2e58",
    client: "Canadian Fashion Ecommerce",
    country: "Canada",
    project: "Social Media & Chat Support Integration",
    desc: "Unified social media monitoring and live chat support for a Canadian fashion brand, protecting brand reputation and converting social inquiries into sales.",
    category: "Social & Chat Support",
    result: "35% more social conversions • 89% CSAT",
  },
  {
    initials: "DE",
    gradient: "#0b2e58",
    client: "German Electronics Store",
    country: "Germany",
    project: "Technical Product Assistance Support",
    desc: "Provided technical setup and troubleshooting support for a German electronics ecommerce store, reducing returns and improving product satisfaction through expert guidance.",
    category: "Technical Product Support",
    result: "28% fewer returns • 87% first-contact resolution",
  },
];

const faqs = [
  {
    id: "One",
    question: "What channels does your ecommerce customer support cover?",
    answer:
      "We provide support across live chat, email, phone, social media, and marketplace buyer messages—including Amazon, eBay, Etsy, Walmart, and Shopify storefronts. All channels can be managed under one unified workflow.",
  },
  {
    id: "Two",
    question: "Can you integrate with our existing helpdesk or CRM?",
    answer:
      "Yes. Our team works with Zendesk, Freshdesk, Intercom, Help Scout, Zoho Desk, Salesforce Service Cloud, Gladly, Kustomer, LiveAgent, and other ticketing platforms. We adapt to your systems rather than forcing a migration.",
  },
  {
    id: "Three",
    question: "How quickly can you onboard and go live?",
    answer:
      "Most ecommerce support programs launch within 5–10 business days, including agent training on your products, policies, brand voice, and platform workflows. Peak-season deployments can be accelerated when needed.",
  },
  {
    id: "Four",
    question: "Do you offer 24/7 ecommerce customer support?",
    answer:
      "Yes. We provide 24/7, 24/5, and business-hours coverage models depending on your store traffic patterns, time zones, and seasonal demand. Coverage scales up or down as your business grows.",
  },
  {
    id: "Five",
    question: "How do you measure and report support quality?",
    answer:
      "We track response time, resolution time, CSAT, first-contact resolution, ticket volume trends, and channel-specific metrics. You receive regular performance reports and can access dashboards for real-time visibility.",
  },
];

const keyOfferings = [
  {
    image: "/images/customer-support/chat-support-call-center.jpg",
    alt: "Live Chat Support for Online Stores",
    title: "Live Chat Support for Online Stores",
    description:
      "Real-time, human-powered assistance on your ecommerce website. Our trained associates are available around the clock to resolve queries, guide shoppers through their journey, and reduce cart abandonment.",
    bullets: [
      "Order tracking and status updates",
      "Product information and recommendations",
      "Post-purchase support and FAQ resolution",
      "Return, refund, and checkout assistance",
    ],
  },
  {
    image: "/images/customer-support/email-support-call-center.jpg",
    alt: "Email Support Services",
    title: "Email Support Services",
    description:
      "Efficient management of growing customer email volumes with personalized responses, escalation protocols, and CRM integration for complete customer history at every touchpoint.",
    bullets: [
      "Customized email templates for brand consistency",
      "High-volume email handling during peak periods",
      "Automated responses for common queries",
      "Analysis of recurring issues for FAQ and product improvement",
    ],
  },
  {
    image: "/images/customer-support/appointment-setting-call-center.png",
    alt: "Virtual Assistant Services",
    title: "Virtual Assistant Services",
    description:
      "Dedicated ecommerce virtual assistants who adopt your brand voice, build deep product knowledge, and act as a consistent point of contact for complex customer issues.",
    bullets: [
      "Personalized one-on-one customer interactions",
      "Proactive follow-ups on open inquiries",
      "Handling complex orders and special requests",
      "Monitoring customer interaction trends",
    ],
  },
  {
    image: "/images/customer-support/telephone-answering-call-center.jpg",
    alt: "Multi-Channel Customer Support",
    title: "Multi-Channel Customer Support",
    description:
      "Consistent, high-quality assistance across email, phone, chat, and social media—whether you sell on marketplaces or run your own online store.",
    bullets: [
      "Unified support with consistent brand messaging",
      "Cross-channel ticket management",
      "Channel-specific response strategies",
      "Omnichannel analytics and reporting",
    ],
  },
  {
    image: "/images/customer-support/training-education-call-center.png",
    alt: "Technical Product Assistance Support",
    title: "Technical Product Assistance Support",
    description:
      "Expert guidance for complex products—installation, setup, troubleshooting, and compatibility checks—so customers fully utilize purchases and returns decline.",
    bullets: [
      "Initial product setup and configuration help",
      "Advanced feature explanations",
      "Software update and firmware assistance",
      "Escalation protocols for complex technical issues",
    ],
  },
  {
    image: "/images/customer-support/social-media-management-call-center.jpg",
    alt: "Social Media Customer Support",
    title: "Customer Support for Social Media Platforms",
    description:
      "Monitor and respond on Facebook, Instagram, and other social channels. Protect your brand reputation with prompt engagement and proactive issue management.",
    bullets: [
      "Monitoring brand mentions across social platforms",
      "Quick response to social media inquiries",
      "Crisis management and reputation protection",
      "Social listening and trend analysis reporting",
    ],
  },
];

const humanAssistedPoints = [
  {
    number: "01",
    color: "#e53935",
    title: "Resolve complex issues automation cannot handle",
    text: "Assign human experts to nuanced, context-specific problems that chatbots and scripted flows fail to resolve effectively.",
  },
  {
    number: "02",
    color: "#fb8c00",
    title: "Deliver personalized interactions customers value",
    text: "Skilled agents provide the empathetic, tailored service shoppers still expect during high-stakes purchase decisions.",
  },
  {
    number: "03",
    color: "#03a9f4",
    title: "Leverage deep domain knowledge",
    text: "Subject matter specialists bring product and industry expertise to handle sophisticated ecommerce inquiries with confidence.",
  },
  {
    number: "04",
    color: "#607d8b",
    title: "Optimize costs without heavy AI investment",
    text: "A balanced humans-in-the-loop model avoids expensive AI infrastructure while maintaining service quality at scale.",
  },
  {
    number: "05",
    color: "#00764e",
    title: "Manage unique customer scenarios",
    text: "Trained professionals handle edge cases, escalations, and sensitive situations with judgment and care.",
  },
];

export default function EcommerceCustomerSupport() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Ecommerce Customer Support" />
      <BrandSection />

      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner
                pageName="Ecommerce Customer Support"
                imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg"
              />

              <div className={Style.ContentDiv}>
                <h2>Human-Assisted eCommerce Customer Support Across Every Touchpoint</h2>
                <p>
                  Your online store is open around the clock—weekends, holidays, and peak shopping seasons included. But when shoppers hit snags during checkout, shipping, or returns, slow or inconsistent support can cost you sales and reviews. Seasonal surges can overwhelm in-house teams, and delayed responses leave customers dissatisfied enough to abandon carts.
                </p>
                <p>
                  Tech2Globe&apos;s <strong>ecommerce customer support services</strong> bridge that gap with trained specialists who resolve issues across email, chat, phone, social media, and marketplace channels. With sharp problem-solving skills and ecommerce domain knowledge, our team reduces negative feedback and keeps buyers moving through your purchase journey.
                </p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Why Outsource eCommerce Customer Support to Tech2Globe?</h2>
                <p>
                  Partner with us to strengthen every stage of the customer journey while you focus on product, marketing, and growth:
                </p>
                <ul>
                  <li>Respond to high volumes of customer queries instantly</li>
                  <li>Address key questions on products, delivery, returns, and policies</li>
                  <li>Monitor and manage multiple online channels with fast response times</li>
                  <li>Track CSAT, resolution time, response time, and feedback to improve service quality continuously</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Outsource eCommerce Customer Support: Our Key Offerings</h2>
                <p>
                  Provide instant answers and personalized service through every channel. Avoid bad publicity, increase repeat purchases, and build loyalty with outsourced <Link href="/customer-support">customer support</Link> tailored for online retailers:
                </p>

                {keyOfferings.map((offering) => (
                  <div key={offering.title}>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                      <div
                        className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block"
                        style={{ border: "2px dotted #e5e2e2", padding: 10 }}
                      >
                        <img
                          src={offering.image}
                          className="img-responsive img-fluid"
                          alt={offering.alt}
                        />
                      </div>
                      <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                        <h4 className="text-dark text-decoration-underline fw-bold">{offering.title}</h4>
                        <p className="text-start">{offering.description}</p>
                        <ul>
                          {offering.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <hr />
                    </div>
                  </div>
                ))}
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">We Support and Manage Customer Interactions Through</h2>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title text-danger">Platforms &amp; Marketplaces</h5>
                        <ul className="mb-0">
                          <li>Amazon, eBay, Walmart, and other marketplaces</li>
                          <li>Magento, WooCommerce, and Shopify stores</li>
                          <li>Social media management and monitoring tools</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title text-danger">Systems &amp; Software</h5>
                        <ul className="mb-0">
                          <li>CRM systems and customer history integration</li>
                          <li>Email customer support software</li>
                          <li>Ticketing system integration and workflow support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Support Through Your Preferred Customer Support Software</h2>
                <p>
                  Whether you use industry-leading platforms or niche solutions, our team delivers consistent service through your chosen tools. We adapt to your existing systems and handle day-to-day support operations while you grow your ecommerce business.
                </p>
                <p>Our expertise includes:</p>
                <ul className={Style.ListColTwo}>
                  <li>Zendesk</li>
                  <li>Freshdesk</li>
                  <li>Intercom</li>
                  <li>Help Scout</li>
                  <li>Kayako</li>
                  <li>Zoho Desk</li>
                  <li>Salesforce Service Cloud</li>
                  <li>Gladly</li>
                  <li>Kustomer</li>
                  <li>LiveAgent</li>
                </ul>
                <p>
                  From Zendesk chat and ticket management to Freshdesk workflows and Intercom messaging, we support the full stack of tools modern ecommerce brands rely on.
                </p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Deliver Human-Assisted Customer Support With Tech2Globe</h2>
                <p>
                  Automated systems and chatbots often fall short on personalized experiences and complex issues. Tech2Globe bridges that gap with domain experts who resolve queries seamlessly—our humans-in-the-loop approach ensures satisfaction where automation alone may fail.
                </p>

                {humanAssistedPoints.map((point) => (
                  <div
                    key={point.number}
                    className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3"
                  >
                    <div
                      className="col-md-2 coloredRound"
                      style={{
                        border: "2px dotted #e5e2e2",
                        borderRadius: "50%",
                        width: 80,
                        height: 80,
                        backgroundColor: point.color,
                        padding: "15px 10px 10px 18px",
                      }}
                    >
                      <h5 className="text-white fs-5" style={{ color: "#fff" }}>{point.number}</h5>
                    </div>
                    <div className="col-md-10 text-left pt-3">
                      <strong style={{ fontSize: 19 }}>{point.title}</strong>
                      <p className="text-start">{point.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Connect With Us</h2>
                <p>
                  To learn more about our <strong>ecommerce customer support services</strong> or discuss your project requirements, write to us at{" "}
                  <a href="mailto:info@tech2globe.com">info@tech2globe.com</a> or visit our{" "}
                  <Link href="/contact-us">contact page</Link>.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientPortfolio clients={portfolioClients} />
      <ClientSlider testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </>
  );
}
