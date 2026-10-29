import Style from "./style.module.css";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";
import {
  FaStore,
  FaSearch,
  FaVideo,
  FaBullhorn,
  FaUsers,
  FaBroadcastTower,
  FaClipboardList,
  FaLightbulb,
  FaChartLine,
  FaCogs,
  FaComments,
  FaClipboardCheck,
  FaBuilding,
  FaRocket,
  FaShoppingBag,
  FaHandshake,
  FaExpandArrowsAlt,
  FaCalendarCheck,
} from "react-icons/fa";

export const metadata = {
  title: "TikTok Shop Management Services | Tech2Globe",
  description:
    "Grow your TikTok Shop with expert management services from Tech2Globe. Optimize product listings, manage ads, create engaging content, and boost sales.",
  openGraph: {
    title: "TikTok Shop Management Services | Tech2Globe",
    siteName: "Tech2Globe web Solutions LLP",
    description:
      "Grow your TikTok Shop with expert management services from Tech2Globe. Optimize product listings, manage ads, create engaging content, and boost sales.",
    url: "https://stagenew.tech2globe.tech/tiktok-shop-management-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "TikTok Shop Management Services | Tech2Globe",
    description:
      "Grow your TikTok Shop with expert management services from Tech2Globe. Optimize product listings, manage ads, create engaging content, and boost sales.",
  },
  alternates: {
    canonical: "https://stagenew.tech2globe.tech/tiktok-shop-management-services",
  },
};

const pageHeaderData = {
  title: "TikTok Shop Management Services",
  description:
    "Grow your brand with TikTok Shop Management Services from Tech2Globe. Get expert support for store setup, product listings, TikTok Ads, and creator marketing.",
  buttonText: "Book Your Consultation",
  buttonLink: "/contact-us",
  backgroundImage: "/images/services/data-mining-services-banner.jpg",
};

const resources = [
  { id: 1, name: "Case Studies", path: "/case-studies" },
  { id: 2, name: "Clients", path: "/clients" },
  { id: 3, name: "Testimonial", path: "/testimonial" },
];

const usefulLinks = [
  { id: 4, name: "Amazon Marketing Services", path: "/amazon-marketing-services" },
  { id: 5, name: "eCommerce Marketplace Management", path: "/ecommerce-marketplace-management" },
  { id: 6, name: "Shopify Development Company", path: "/shopify-development-company" },
  { id: 7, name: "Social Media Marketing", path: "/smo-services" },
  { id: 8, name: "Influencer Marketing", path: "/influencer-marketing-package" },
  { id: 9, name: "Catalog Management", path: "/catalog-management-services" },
];

const sidebarSections = [
  { heading: "Resources", links: resources },
  { heading: "Useful Links", links: usefulLinks },
];

const whyNeed = [
  {
    icon: <FaSearch size={28} />,
    title: "Improve product listings",
    text: "Improve product listings with relevant keywords and clear descriptions.",
  },
  {
    icon: <FaVideo size={28} />,
    title: "Create useful content",
    text: "Create content that explains product features and benefits.",
  },
  {
    icon: <FaBullhorn size={28} />,
    title: "Organize advertising",
    text: "Organize advertising campaigns around defined business objectives.",
  },
  {
    icon: <FaUsers size={28} />,
    title: "Coordinate creator partnerships",
    text: "Coordinate creator partnerships to introduce products to relevant audiences.",
  },
  {
    icon: <FaChartLine size={28} />,
    title: "Monitor store performance",
    text: "Monitor store performance and identify opportunities for improvement.",
  },
  {
    icon: <FaClipboardList size={28} />,
    title: "Support day-to-day operations",
    text: "Support day-to-day operations to maintain a smoother shopping experience.",
  },
];

const coreServices = [
  {
    icon: <FaStore size={36} color="#f15a29" />,
    title: "TikTok Shop Setup and Account Management",
    intro:
      "Launching a TikTok Shop involves more than creating an account. Businesses must meet the platform's eligibility requirements, submit the necessary verification information, configure their store, and prepare their product catalog.",
    body: [
      "Tech2Globe helps businesses organize the store setup process, including product catalog preparation, store configuration, and ongoing account management.",
    ],
    bullets: [
      "Assistance with store setup and onboarding requirements.",
      "Product catalog organization and data preparation.",
      "Product uploads and listing updates.",
      "Store information and pricing maintenance.",
      "Inventory coordination and availability monitoring.",
      "Routine account checks and operational support.",
    ],
    closing:
      "We also help identify issues that may affect the customer experience, such as incomplete product information or outdated listings. Store approval, available features, and launch timelines depend on TikTok's requirements, the seller's readiness, and the relevant market.",
  },
  {
    icon: <FaSearch size={36} color="#f15a29" />,
    title: "TikTok Product Listing Optimization",
    intro:
      "A product listing should help customers quickly understand what they are buying, why it may suit their needs, and which features make it relevant to them.",
    body: [
      "Poorly structured titles, incomplete descriptions, and unclear images can make product discovery and purchasing more difficult. TikTok's product listing guidance also recommends clear, descriptive titles and relevant keywords to improve product discoverability.",
      "Our TikTok Shop product listing services focus on making product information clear, useful, and aligned with customer search intent.",
    ],
    bullets: [
      "Keyword research for relevant product searches.",
      "Descriptive product titles and engaging descriptions.",
      "Accurate product specifications, variations, and attributes.",
      "Product categorization and catalog organization.",
      "Image and product information checks.",
      "Listing updates based on available performance insights.",
    ],
    closing:
      'For example, instead of using a vague title such as "Premium Bottle," a more descriptive title could be "Insulated Stainless Steel Water Bottle, 750 ml." The appropriate wording depends on the product\'s actual specifications. The goal is to help shoppers find relevant products and make informed purchasing decisions without keyword stuffing or misleading claims.',
  },
  {
    icon: <FaVideo size={36} color="#f15a29" />,
    title: "TikTok Content Strategy and Optimization",
    intro:
      "TikTok content plays an important role in product discovery. However, content that performs well for one audience or product category may not work equally well for another.",
    body: [
      "A useful content strategy begins with understanding customer questions, product benefits, common objections, and the type of content that makes a product easier to understand.",
      "Tech2Globe helps businesses plan content around their products and marketing objectives.",
    ],
    bullets: [
      "Short-form video concepts and content calendars.",
      "Video scripts, hooks, and calls to action.",
      "Product demonstrations and tutorials.",
      "Unboxing and product comparison concepts.",
      "Creative variations for testing different messages.",
      "Content performance analysis and recommendations.",
    ],
    closing:
      "For example, a skincare brand might demonstrate how to use a product as part of a routine, while a home organization brand might show how an item solves a common storage problem. Rather than relying entirely on trends, we focus on content that communicates genuine product value and gives viewers a clear reason to explore the product.",
  },
  {
    icon: <FaBullhorn size={36} color="#f15a29" />,
    title: "TikTok Shop Ads Management",
    intro:
      "Organic content can help businesses reach potential customers, but paid advertising may be useful when brands want to test specific audiences, promote products, or scale campaigns with measurable objectives.",
    body: [
      "Our TikTok advertising management services help businesses plan, launch, monitor, and optimize campaigns according to their goals and available budget.",
    ],
    bullets: [
      "Campaign planning and account setup.",
      "Audience and targeting strategy.",
      "Ad creative development and testing.",
      "Budget allocation and campaign monitoring.",
      "Conversion tracking checks, where supported.",
      "Performance reporting and optimization recommendations.",
    ],
    closing:
      "Depending on account eligibility and the advertising products available, campaigns may use formats such as in-feed video ads, Spark Ads, or eligible shopping-focused advertising solutions. We assess performance using relevant metrics, including impressions, click-through rate, cost per click, conversion rate, cost per acquisition, and return on ad spend. Advertising results depend on factors such as product demand, pricing, creative quality, competition, landing or product page experience, and campaign budget. Our approach is to identify what the data shows and refine campaigns accordingly rather than promise guaranteed results.",
  },
  {
    icon: <FaHandshake size={36} color="#f15a29" />,
    title: "TikTok Influencer and Affiliate Marketing",
    intro:
      "Customers often want to see how a product works before purchasing it. Relevant creator content can demonstrate product use, answer common questions, and introduce a brand to an audience that may be interested in its offerings.",
    body: [
      "Tech2Globe helps businesses plan and coordinate creator and affiliate marketing activities based on their products, target customers, and campaign objectives.",
    ],
    bullets: [
      "Identifying relevant creators for your product category.",
      "Reviewing audience relevance and available engagement data.",
      "Preparing campaign briefs and product messaging.",
      "Coordinating product demonstrations and content deliverables.",
      "Supporting affiliate campaign planning where available.",
      "Monitoring creator content and campaign performance.",
    ],
    closing:
      "For example, a fitness accessories brand might collaborate with fitness creators who demonstrate how its products fit into a workout routine. Creator selection should consider audience relevance, content quality, brand suitability, and campaign costs—not follower count alone. Partnerships and affiliate activities must also comply with applicable platform requirements and advertising disclosure rules.",
  },
  {
    icon: <FaBroadcastTower size={36} color="#f15a29" />,
    title: "TikTok Live Shopping Support",
    intro:
      "Live shopping gives eligible sellers an opportunity to demonstrate products, respond to customer questions, and present offers during a live session.",
    body: [
      "A successful live shopping event requires preparation. Businesses need to select suitable products, organize demonstrations, prepare talking points, and ensure that the shopping experience works as expected.",
    ],
    bullets: [
      "Live session planning and product selection.",
      "Run-of-show preparation and talking points.",
      "Product demonstration ideas.",
      "Promotional messaging and offer coordination.",
      "Calls to action and audience engagement planning.",
      "Post-event performance review.",
    ],
    closing:
      "For example, a home and kitchen brand could use a live session to demonstrate product features, compare available variations, and answer questions about everyday use. Live shopping performance can vary with audience size, product relevance, host presentation, offer quality, and session timing. Reviewing results helps businesses understand which products and approaches deserve further testing.",
  },
  {
    icon: <FaClipboardList size={36} color="#f15a29" />,
    title: "Order, Inventory, and Customer Experience Support",
    intro:
      "Marketing can generate interest, but operational problems may affect customer satisfaction and repeat purchases. Inaccurate inventory, delayed dispatch, incomplete order information, and unanswered customer questions can create avoidable difficulties.",
    body: [
      "Depending on the agreed scope, Tech2Globe can support operational tasks such as:",
    ],
    bullets: [
      "Monitoring product availability and inventory information.",
      "Coordinating order processing workflows.",
      "Reviewing order and shipping status information.",
      "Updating product details and store information.",
      "Supporting customer inquiry management.",
      "Identifying recurring operational issues for review.",
    ],
    closing:
      "The exact responsibilities depend on your store setup, fulfillment arrangement, integrations, and account permissions. Sellers remain responsible for meeting applicable marketplace policies and their legal obligations. A structured operational process helps connect marketing activity with the customer's experience after placing an order.",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Store and product audit",
    text: "We review the existing store, product listings, available performance data, operational setup, and current marketing activities to identify areas that need attention.",
  },
  {
    step: 2,
    title: "Strategy development",
    text: "We prioritize improvements based on your product category, target audience, budget, business goals, and available resources.",
  },
  {
    step: 3,
    title: "Implementation",
    text: "Depending on the agreed scope, we work on listings, content planning, advertising, creator coordination, and store operations.",
  },
  {
    step: 4,
    title: "Performance monitoring",
    text: "We review available data such as product views, clicks, conversions, advertising costs, revenue, and customer feedback to understand performance.",
  },
  {
    step: 5,
    title: "Continuous improvement",
    text: "We use these insights to recommend changes to product information, creative assets, campaign allocation, and operational processes.",
  },
];

const whoBenefits = [
  {
    icon: <FaBuilding size={28} />,
    title: "Small businesses",
    text: "Sellers who need assistance with setup, listings, and daily management.",
  },
  {
    icon: <FaRocket size={28} />,
    title: "Emerging ecommerce brands",
    text: "Businesses building awareness and testing product-market demand.",
  },
  {
    icon: <FaShoppingBag size={28} />,
    title: "Established retailers",
    text: "Brands seeking to expand their ecommerce presence through TikTok.",
  },
  {
    icon: <FaStore size={28} />,
    title: "Direct-to-consumer brands",
    text: "Businesses combining content, advertising, and product sales.",
  },
  {
    icon: <FaExpandArrowsAlt size={28} />,
    title: "Growing product sellers",
    text: "Merchants who need a more structured approach to catalog management, creator partnerships, and campaign optimization.",
  },
];

const whyChoose = [
  {
    icon: <FaCogs size={28} />,
    title: "Flexible service scope",
    text: "Choose support across store management, listing optimization, content, advertising, creator campaigns, and reporting based on your needs.",
  },
  {
    icon: <FaClipboardCheck size={28} />,
    title: "Clear workflows",
    text: "Our approach emphasizes clear workflows, relevant performance metrics, and consistent execution.",
  },
  {
    icon: <FaComments size={28} />,
    title: "Regular communication",
    text: "We keep communication open so you understand progress, priorities, and next steps.",
  },
  {
    icon: <FaLightbulb size={28} />,
    title: "Data-informed recommendations",
    text: "Recommendations are based on available performance data rather than one-size-fits-all tactics.",
  },
];

const faqs = [
  {
    id: "One",
    question: "What is included in TikTok Shop Management Services?",
    answer:
      "Services can include store setup, product listing optimization, content planning, advertising management, creator and affiliate coordination, live shopping support, operational assistance, and performance reporting. The final scope depends on your business requirements.",
  },
  {
    id: "Two",
    question: "Can you manage an existing TikTok Shop?",
    answer:
      "Yes. Businesses with an existing shop can request support for listing improvements, account operations, advertising, content, creator campaigns, or broader store management. The initial review helps identify the areas that need attention.",
  },
  {
    id: "Three",
    question: "How long does it take to set up a TikTok Shop?",
    answer:
      "The timeline depends on business verification, document readiness, product catalog preparation, integrations, and platform approval. Tech2Globe's existing service page estimates approximately 7–14 business days for a typical launch, subject to store readiness and integration requirements. This is an estimate, not a guaranteed approval timeline.",
  },
  {
    id: "Four",
    question: "Can you manage TikTok Shop ads separately?",
    answer:
      "Yes. Depending on your requirements, you can request advertising management without selecting a full-service package. Campaign access, available ad formats, tracking, and budget requirements should be confirmed before launch.",
  },
  {
    id: "Five",
    question: "How can TikTok Shop management help improve sales?",
    answer:
      "Management can address factors that influence sales, including listing quality, product discovery, content relevance, advertising efficiency, creator partnerships, and the purchasing experience. Actual results depend on your products, pricing, demand, competition, budget, and execution.",
  },
  {
    id: "Six",
    question: "Is TikTok Shop available in every country?",
    answer:
      "No. TikTok Shop is available only in supported markets, and eligibility requirements vary. Businesses should check the current Seller Center requirements for their country before planning a launch.",
  },
];

const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe helped us launch and scale our TikTok Shop from zero to six figures in revenue within three months. They handled everything — store setup, content strategy, creator outreach, and ad management. Their team understood TikTok's algorithm deeply and knew exactly how to create native content that converts. An absolute game-changer for our brand.",
    name: "Chloe Park | Founder, GlowLab",
    location: "United States",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We were hesitant about TikTok commerce but Tech2Globe gave us the confidence to dive in. They built our shop, matched us with relevant creators, and ran targeted TikTok ads that delivered 5x ROAS from the very first campaign. Their weekly performance reports kept us informed and their creative team kept our content fresh and trending.",
    name: "Ryan Walsh | Brand Manager, VibeWear",
    location: "United Kingdom",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe's TikTok Shop management services exceeded every expectation. They understood the nuances of the TikTok audience, created culturally relevant content, and set up live selling sessions that drove massive same-day sales spikes. Our TikTok Shop is now our fastest-growing sales channel globally. The team's energy and expertise are unmatched.",
    name: "Aiko Tanaka | Head of Digital Commerce, KawaiiBox",
    location: "Japan",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Managing TikTok Shop in-house was overwhelming until we brought in Tech2Globe. They took care of the entire ecosystem — from product feed optimization and creator briefing to ad funnel management and analytics. Within 6 weeks we saw a 4x increase in TikTok-attributed revenue. Their strategic approach to short-form content is truly impressive.",
    name: "Zoe Adams | Digital Director, TrendNest",
    location: "Australia",
  },
  {
    id: 5,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe is the best investment we made for our TikTok commerce expansion. They handled every detail — shop setup, listing SEO, influencer management, live streaming strategy, and performance ads. Their team was proactive in testing new formats and consistently delivered strong ROAS. Our TikTok Shop went from a side experiment to our primary growth driver.",
    name: "Marco Ferretti | CEO, LifeStyle Goods",
    location: "Italy",
  },
];

const portfolioClients = [
  {
    initials: "GL",
    gradient: "#0b2e58",
    client: "GlowLab Skincare",
    country: "USA",
    project: "TikTok Shop Management — Skincare & Beauty",
    desc: "Launched TikTok Shop, managed creators, ads, and live sessions, driving $180K revenue, strong ROAS, and rapid growth in 90 days.",
    category: "TikTok Shop Management",
    result: "$180K revenue in 90 days",
  },
  {
    initials: "VW",
    gradient: "#0b2e58",
    client: "VibeWear Streetwear",
    country: "UK",
    project: "TikTok Shop Management — Fashion & Apparel",
    desc: "Built TikTok Shop, influencer network, and Spark Ads strategy, scaling revenue 340% in 3 months with strong organic reach.",
    category: "TikTok Shop Management",
    result: "340% revenue growth in 3 months",
  },
  {
    initials: "KB",
    gradient: "#0b2e58",
    client: "KawaiiBox Japan",
    country: "Japan",
    project: "TikTok Shop Management — Lifestyle & Gifting",
    desc: "Managed dual-market TikTok Shop launch, creator campaigns, and live selling, driving record sales and strong subscription conversions.",
    category: "TikTok Shop Management",
    result: "Record live selling revenue day",
  },
  {
    initials: "TN",
    gradient: "#0b2e58",
    client: "TrendNest Lifestyle",
    country: "Australia",
    project: "TikTok Shop Management — Home & Lifestyle",
    desc: "Optimized listings, ads, and live commerce strategy, boosting CTR, conversions, and achieving industry-leading ROAS performance.",
    category: "TikTok Shop Management",
    result: "9.1% ad conversion rate",
  },
  {
    initials: "LG",
    gradient: "#0b2e58",
    client: "LifeStyle Goods Italia",
    country: "Italy",
    project: "TikTok Shop Management — Wellness & Lifestyle",
    desc: "Built full-funnel TikTok strategy with creators, ads, and live events, expanding to Europe and generating strong multi-market revenue.",
    category: "TikTok Shop Management",
    result: "€120K+ revenue in 5 months",
  },
];

export default function TiktokShopManagementServices() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://tech2globe.com/tiktok-shop-management-services#service",
        name: "TikTok Shop Management Services",
        url: "https://tech2globe.com/tiktok-shop-management-services",
        description:
          "Grow your brand with TikTok Shop Management Services from Tech2Globe. Get expert support for store setup, product listings, TikTok Ads, and creator marketing.",
        serviceType: "TikTok Shop Management",
        provider: {
          "@type": "Organization",
          name: "Tech2Globe",
          url: "https://tech2globe.com/",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://tech2globe.com/tiktok-shop-management-services",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://tech2globe.com/tiktok-shop-management-services#faq",
        url: "https://tech2globe.com/tiktok-shop-management-services",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://tech2globe.com/tiktok-shop-management-services#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://tech2globe.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "TikTok Shop Management Services",
            item: "https://tech2globe.com/tiktok-shop-management-services",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="TikTok Shop Management Services" />
      <BrandSection />

      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner
                pageName="TikTok Shop Management Services"
                imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg"
              />

              <div id="overview" className={Style.ContentDiv}>
                <h1>TikTok Shop Management Services to Grow Your Ecommerce Business</h1>
                <p>
                  Selling on TikTok Shop gives businesses an opportunity to connect with customers
                  through short-form videos, creator recommendations, live shopping, and in-app
                  product discovery. However, turning views and engagement into consistent sales
                  requires more than uploading products. Sellers need optimized listings, engaging
                  content, effective advertising, reliable order management, and ongoing performance
                  analysis.
                </p>
                <p>
                  Tech2Globe provides TikTok Shop Management Services to help brands manage their
                  stores, improve product visibility, connect with relevant creators, and develop a
                  structured ecommerce growth strategy. Whether you are launching a new store or
                  looking to improve an existing one, our services can be tailored to your business
                  goals, product category, and operational requirements.
                </p>
              </div>

              <div id="what-are" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">What Are TikTok Shop Management Services?</h2>
                <p>
                  TikTok Shop Management Services help businesses manage and optimize their stores on
                  TikTok. These services cover the essential activities involved in operating a shop,
                  from initial setup and product listing optimization to content planning,
                  advertising, creator collaborations, and performance monitoring.
                </p>
                <p>
                  Managing a TikTok Shop independently can become challenging when you need to
                  coordinate product information, marketing campaigns, inventory, orders, and customer
                  inquiries. A dedicated management partner can help organize these activities and
                  provide a consistent approach to store operations and growth.
                </p>
                <p className="mb-0">
                  With Tech2Globe, businesses can choose support for specific requirements or combine
                  multiple services into a comprehensive TikTok Shop management strategy.
                </p>
              </div>

              <div id="why-need" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Why Does Your Business Need TikTok Shop Management?</h2>
                <p>
                  TikTok allows shoppers to discover products through videos, recommendations,
                  creators, and search. This creates opportunities for brands to reach potential
                  customers while they are exploring products and content relevant to their interests.
                </p>
                <p>
                  However, product visibility does not automatically translate into purchases.
                  Customers need clear product information, engaging demonstrations, competitive
                  offers, and a convenient buying experience.
                </p>
                <p className="mb-4">
                  Professional TikTok Shop management can help your business address these
                  requirements by:
                </p>
                <div className="row">
                  {whyNeed.map((item) => (
                    <div key={item.title} className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <div className="card p-3 h-100 shadow-sm">
                        <div className="text-danger mb-2">{item.icon}</div>
                        <h5>{item.title}</h5>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 mb-0">
                  The objective is to build a more organized selling process while making informed
                  decisions based on actual performance data.
                </p>
              </div>

              <div id="services" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Our TikTok Shop Management Services</h2>
                <div className="row">
                  {coreServices.map((service, index) => (
                    <div key={service.title} className="col-lg-12 mb-4">
                      <div className={Style.CardBox}>
                        <div className="mb-2">{service.icon}</div>
                        <h5>
                          {index + 1}. {service.title}
                        </h5>
                        <p>{service.intro}</p>
                        {service.body.map((paragraph) => (
                          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                        ))}
                        <ul className="ps-3">
                          {service.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                        <p className="mb-0">{service.closing}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="process" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">How Do We Approach TikTok Shop Optimization?</h2>
                <p className="mb-4">
                  Our approach starts with understanding your current store and business objectives
                  rather than applying the same strategy to every seller.
                </p>
                <div className="row">
                  {processSteps.map((step) => (
                    <div key={step.step} className="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <div className={Style.ProcessStep}>
                        <span className={Style.ProcessNumber}>{step.step}</span>
                        <h5>{step.title}</h5>
                        <p className="mb-0">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 mb-0">
                  This process supports more informed decisions and helps businesses adapt as customer
                  behavior and store performance change.
                </p>
              </div>

              <div id="who-benefits" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Who Can Benefit from TikTok Shop Management Services?</h2>
                <p className="mb-4">
                  TikTok Shop management can be useful for different types of businesses, provided
                  their products and operations meet the platform&apos;s requirements.
                </p>
                <div className="row">
                  {whoBenefits.map((item) => (
                    <div key={item.title} className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <div className="card p-3 h-100 shadow-sm">
                        <div className="text-danger mb-2">{item.icon}</div>
                        <h5>{item.title}</h5>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 mb-0">
                  Service requirements vary by business size, product category, internal resources,
                  and growth stage. We can help determine which activities are most relevant to your
                  current priorities.
                </p>
              </div>

              <div id="why-choose" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Why Choose Tech2Globe for TikTok Shop Management?</h2>
                <p className="mb-4">
                  Managing a TikTok Shop involves several connected activities, and coordinating them
                  can require time, specialist knowledge, and consistent execution.
                </p>
                <div className="row">
                  {whyChoose.map((item) => (
                    <div key={item.title} className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <div className="card p-3 h-100 shadow-sm">
                        <div className="text-danger mb-2">{item.icon}</div>
                        <h5>{item.title}</h5>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 mb-0">
                  Before starting, we discuss your objectives, store readiness, required services,
                  reporting expectations, and responsibilities. This helps establish a practical scope
                  of work and a clearer understanding of how performance will be evaluated.
                </p>
              </div>

              <div id="cta-copy" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Grow Your TikTok Shop with a Clear Strategy</h2>
                <p>
                  Running a successful TikTok Shop requires coordination between product listings,
                  content, advertising, creators, and store operations. Improving one area can help,
                  but sustainable progress requires understanding how these activities work together.
                </p>
                <p>
                  Tech2Globe&apos;s TikTok Shop Management Services help businesses organize these
                  activities around their individual needs, identify improvement opportunities, and
                  make more informed decisions using performance data.
                </p>
                <p>
                  Whether you are preparing to launch your first shop or looking to improve an
                  existing one, our team can help you identify the right next steps.
                </p>
                <p className="mb-0">
                  Ready to explore your options? Contact Tech2Globe to discuss your TikTok Shop
                  requirements and request a personalized proposal.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className={`${Style.CtaSection} text-center mt-5 mb-3 p-5 rounded-3`}>
                <h2 className="text-white mb-3">Ready to Grow Your TikTok Shop?</h2>
                <p className="text-white mb-4">
                  Contact Tech2Globe to discuss your TikTok Shop requirements and request a
                  personalized proposal.
                </p>
                <div className={`${Style.BtnBlock} d-flex justify-content-center`}>
                  <Link href="/contact-us" className="button-red">
                    <span className="d-inline-flex align-items-center gap-2">
                      <FaCalendarCheck aria-hidden="true" />
                      Book Your Consultation
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientPortfolio clients={portfolioClients} />
      <ClientSlider testimonials={testimonials} />
      <div id="faqs">
        <FaqSection faqs={faqs} />
      </div>
    </>
  );
}
