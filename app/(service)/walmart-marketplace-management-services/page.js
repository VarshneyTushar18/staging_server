import Style from "./style.module.css";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";
import {
  FaStore,
  FaSearch,
  FaBullhorn,
  FaBoxes,
  FaTruck,
  FaChartLine,
  FaClipboardCheck,
  FaCogs,
  FaLightbulb,
  FaExpandArrowsAlt,
  FaRocket,
  FaBuilding,
  FaShoppingBag,
  FaCalendarCheck,
} from "react-icons/fa";

export const metadata = {
  title: "Walmart Marketplace Management Services | Tech2Globe",
  description:
    "Grow your Walmart sales with Walmart Marketplace Management Services from Tech2Globe. Optimize product listings, manage ads, and improve store performance.",
  keywords: [
    "Walmart Marketplace Management Services",
    "Walmart marketplace management",
    "Walmart product listings",
    "Walmart ads management",
    "Walmart seller account management",
  ],
  openGraph: {
    title: "Walmart Marketplace Management Services | Tech2Globe",
    siteName: "Tech2Globe Web Solutions LLP",
    description:
      "Grow your Walmart sales with Walmart Marketplace Management Services from Tech2Globe. Optimize product listings, manage ads, and improve store performance.",
    url: "https://stagenew.tech2globe.tech/walmart-marketplace-management-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Walmart Marketplace Management Services | Tech2Globe",
    description:
      "Grow your Walmart sales with Walmart Marketplace Management Services from Tech2Globe. Optimize product listings, manage ads, and improve store performance.",
  },
  alternates: {
    canonical: "https://stagenew.tech2globe.tech/walmart-marketplace-management-services",
  },
};

const pageHeaderData = {
  title: "Walmart Marketplace Management",
  description:
    "Stand out from your competitors by partnering with Tech2Globe. We offer Walmart Marketplace Management, handling everything from product listings and content production, to advertising and WFS integration to drive sales. With low marketing cost, wider customer reach, proven strategies and advantage of low competition.",
  buttonText: "Book Your Consultation",
  buttonLink: "/contact-us",
  backgroundImage: "/images/services/walmart.jpg",
};

const resources = [
  { id: 1, name: "Case Studies", path: "/case-studies" },
  { id: 2, name: "Clients", path: "/clients" },
  { id: 3, name: "Testimonial", path: "/testimonial" },
];

const usefulLinks = [
  { id: 4, name: "Walmart Advertising", path: "/walmart-advertisement" },
  { id: 5, name: "Walmart Account Management Services", path: "/walmart-account-management-services" },
  { id: 6, name: "Walmart Product Upload SEO", path: "/walmart-product-upload-seo" },
  { id: 7, name: "Amazon Marketing Services", path: "/amazon-marketing-services" },
  { id: 8, name: "eCommerce Marketplace Management", path: "/ecommerce-marketplace-management" },
  { id: 9, name: "Catalog Management", path: "/catalog-management-services" },
];

const sidebarSections = [
  { heading: "Resources", links: resources },
  { heading: "Useful Links", links: usefulLinks },
];

const whyNeedBenefits = [
  "Improve product listings to make them more useful to potential buyers.",
  "Identify relevant search terms to strengthen product discoverability.",
  "Monitor pricing, stock levels, and listing performance.",
  "Manage advertising campaigns with greater attention to budget efficiency.",
  "Track business performance and identify areas for improvement.",
  "Reduce the workload associated with routine marketplace operations.",
];

const coreServices = [
  {
    icon: <FaStore size={36} color="#234268" />,
    title: "Walmart Seller Account Setup and Optimization",
    intro:
      "Starting on Walmart Marketplace can involve several steps, from preparing business information to configuring your seller account and setting up product catalogs. An incomplete or incorrectly configured account can delay your launch or create operational difficulties.",
    body: [
      "We assist with seller account setup and optimization, helping you establish the foundation for selling on Walmart.",
    ],
    bullets: [
      "Guidance with seller account registration and onboarding.",
      "Seller Center configuration and account information.",
      "Product catalog preparation and initial uploads.",
      "Shipping, pricing, and other relevant account settings.",
      "Review of account requirements and applicable marketplace policies.",
    ],
    closing:
      "If you already have an active seller account, we can assess its current setup and identify areas that may need attention.",
  },
  {
    icon: <FaSearch size={36} color="#234268" />,
    title: "Walmart Product Listing Optimization",
    intro:
      "Your product listing is often the first detailed interaction a customer has with your product. If the title is unclear, the images are unhelpful, or important product details are missing, shoppers may choose another seller.",
    body: [
      "Our Walmart product listing optimization service focuses on making product pages informative, relevant, and easy to understand.",
    ],
    bullets: [
      "Product titles: Clear titles that describe the product and incorporate relevant search terms naturally.",
      "Product descriptions: Helpful information that explains product use, benefits, and important specifications.",
      "Key features: Concise bullet points that answer common buyer questions.",
      "Product images: Recommendations for clear, relevant images that demonstrate the product.",
      "Product attributes: Accurate specifications, categories, variations, and other required information.",
    ],
    closing:
      "By improving the quality and completeness of your listings, we aim to create a better shopping experience and support stronger conversion opportunities.",
  },
  {
    icon: <FaLightbulb size={36} color="#234268" />,
    title: "Walmart SEO and Keyword Research",
    intro:
      "How can customers discover your products when they search on Walmart? Product relevance, listing quality, and other marketplace factors influence how products appear in search results.",
    body: [
      "Our Walmart SEO services focus on understanding how shoppers search for your products and incorporating relevant keywords into your listings.",
    ],
    bullets: [
      "Researching relevant product keywords and search phrases.",
      "Reviewing competitor listings and product positioning.",
      "Optimizing product titles, descriptions, and attributes.",
      "Identifying missing product information and content opportunities.",
      "Monitoring listing performance and identifying further improvements.",
    ],
    closing:
      "We prioritize natural, customer-friendly content rather than unnecessary keyword repetition. Search optimization is an ongoing process, and rankings can vary depending on competition, relevance, availability, pricing, and other factors.",
  },
  {
    icon: <FaBullhorn size={36} color="#234268" />,
    title: "Walmart Advertising and PPC Management",
    intro:
      "Even well-optimized listings may need additional visibility to reach potential customers. Walmart Connect advertising can help eligible sellers promote products and reach shoppers during their purchasing journey.",
    body: [
      "Our Walmart advertising management services focus on building campaigns around your products, budget, and business objectives.",
    ],
    bullets: [
      "Campaign planning and structure.",
      "Sponsored Products and other suitable eligible ad formats.",
      "Keyword and targeting research.",
      "Bid and budget optimization.",
      "Search term and campaign performance analysis.",
      "Monitoring advertising spend, attributed sales, and return on ad spend (ROAS).",
    ],
    closing:
      "We use campaign data to identify relevant opportunities, reduce avoidable spending where possible, and improve budget allocation. Advertising performance depends on several factors, including product demand, competition, pricing, inventory, and listing quality. Our approach emphasizes ongoing analysis and optimization instead of promising guaranteed sales or rankings.",
  },
  {
    icon: <FaBoxes size={36} color="#234268" />,
    title: "Walmart Catalog and Inventory Management",
    intro:
      "Out-of-stock products, inaccurate inventory data, and catalog errors can interrupt sales and affect the customer experience. Managing these issues becomes more complex when your business sells multiple products or operates across several sales channels.",
    body: [
      "Our Walmart catalog and inventory management support helps you maintain more accurate product information and organized operations.",
    ],
    bullets: [
      "Product data uploads and catalog updates.",
      "SKU, category, and attribute management.",
      "Product variation and listing consistency checks.",
      "Inventory monitoring and stock discrepancy identification.",
      "Catalog error investigation and correction support.",
      "Inventory feed coordination, where applicable.",
    ],
    closing:
      "For businesses selling across multiple platforms, we can also help review opportunities to improve product data consistency between sales channels. The goal is to reduce avoidable listing and inventory issues while supporting smoother day-to-day account operations.",
  },
  {
    icon: <FaTruck size={36} color="#234268" />,
    title: "Walmart Order and Fulfillment Support",
    intro:
      "Reliable order processing and timely delivery are important parts of the customer experience. Delays, cancellations, and fulfillment problems can create additional work for sellers and affect customer satisfaction.",
    body: [
      "Our order and fulfillment support can help organize relevant marketplace workflows, depending on your existing logistics setup.",
      "This may include order monitoring, shipment coordination, tracking updates, returns-related workflow support, and inventory coordination.",
      "If you use Walmart Fulfillment Services (WFS), we can help review relevant product and inventory information and coordinate applicable operational tasks. If you fulfill orders independently, we can support processes aligned with your shipping arrangements and marketplace requirements.",
    ],
    bullets: [],
    closing:
      "The exact scope depends on your fulfillment model, account permissions, and operational needs.",
  },
  {
    icon: <FaChartLine size={36} color="#234268" />,
    title: "Walmart Account Performance Monitoring and Reporting",
    intro:
      "Making decisions without understanding your account performance can lead to wasted time and inefficient spending. Regular reporting helps you understand what is working, where problems are developing, and which improvements deserve attention.",
    body: [
      "Our Walmart account management services include performance monitoring and reporting based on available account data.",
    ],
    bullets: [
      "Sales trends and order performance.",
      "Product listing quality and visibility indicators.",
      "Advertising spend, conversions, and ROAS.",
      "Inventory availability and catalog issues.",
      "Pricing and competitor positioning.",
      "Potential opportunities for further optimization.",
    ],
    closing:
      "Reports can highlight completed activities, key observations, priority issues, and recommended next steps. This gives you a clearer view of your marketplace performance and helps you make informed business decisions.",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Account and Business Assessment",
    text: "We review your existing Walmart account, product catalog, business objectives, and operational challenges. For new sellers, the assessment focuses on launch requirements and initial priorities.",
  },
  {
    step: 2,
    title: "Research and Strategy Development",
    text: "We evaluate relevant keywords, competitors, product positioning, and advertising opportunities to develop a plan suited to your products and available resources.",
  },
  {
    step: 3,
    title: "Implementation and Optimization",
    text: "We work on agreed activities such as listing improvements, catalog updates, advertising setup, and account optimization.",
  },
  {
    step: 4,
    title: "Ongoing Monitoring",
    text: "We monitor available performance data to identify issues, evaluate progress, and determine where adjustments may be needed.",
  },
  {
    step: 5,
    title: "Reporting and Recommendations",
    text: "We share relevant findings and practical recommendations to support continuous improvement and future growth.",
  },
];

const whyChoose = [
  {
    icon: <FaCogs size={28} />,
    title: "Customized service plans",
    text: "We align the scope of work with your catalog size, account status, and business objectives.",
  },
  {
    icon: <FaClipboardCheck size={28} />,
    title: "Customer-focused listings",
    text: "We prioritize accurate product information and useful content that helps shoppers make purchasing decisions.",
  },
  {
    icon: <FaLightbulb size={28} />,
    title: "Data-informed optimization",
    text: "We use available account and campaign data to identify potential improvements.",
  },
  {
    icon: <FaBoxes size={28} />,
    title: "Organized account operations",
    text: "We help manage recurring tasks and address catalog or inventory issues.",
  },
  {
    icon: <FaChartLine size={28} />,
    title: "Performance visibility",
    text: "Reporting helps you understand account activities, challenges, and next steps.",
  },
  {
    icon: <FaExpandArrowsAlt size={28} />,
    title: "Flexible support",
    text: "You can seek assistance with selected activities or broader marketplace management, depending on your requirements.",
  },
];

const whoBenefits = [
  {
    icon: <FaRocket size={28} />,
    title: "New Walmart sellers",
    text: "Sellers who need help preparing their accounts and launching product listings.",
  },
  {
    icon: <FaBuilding size={28} />,
    title: "Established brands",
    text: "Brands looking to improve listing quality, visibility, and marketplace operations.",
  },
  {
    icon: <FaExpandArrowsAlt size={28} />,
    title: "Growing sellers",
    text: "Sellers managing large catalogs and increasing operational complexity.",
  },
  {
    icon: <FaChartLine size={28} />,
    title: "Businesses with low sales",
    text: "Sellers that need to investigate listing, pricing, advertising, or inventory challenges.",
  },
  {
    icon: <FaShoppingBag size={28} />,
    title: "Multi-channel retailers",
    text: "Retailers seeking more consistent product data and organized marketplace workflows.",
  },
];

const faqs = [
  {
    id: "One",
    question: "What are Walmart Marketplace Management Services?",
    answer:
      "Walmart Marketplace Management Services help sellers manage and improve their Walmart businesses. Depending on the agreed scope, these services can include account setup, product listing optimization, keyword research, advertising management, catalog maintenance, inventory coordination, and performance reporting.",
  },
  {
    id: "Two",
    question: "Can you help improve my Walmart product rankings?",
    answer:
      "Yes. We can review your product listings, keyword relevance, content quality, and other available performance indicators to identify optimization opportunities. However, search rankings are influenced by multiple marketplace factors, so specific positions cannot be guaranteed.",
  },
  {
    id: "Three",
    question: "Do you provide Walmart PPC and advertising management?",
    answer:
      "Yes. We can assist with campaign planning, targeting, bid optimization, budget monitoring, and performance reporting for suitable Walmart advertising formats. The strategy depends on your product range, advertising budget, objectives, and available campaign data.",
  },
  {
    id: "Four",
    question: "Can you manage an existing Walmart seller account?",
    answer:
      "Yes. We can assess your existing account and provide support with listing updates, catalog management, advertising, inventory-related workflows, and performance monitoring according to your requirements.",
  },
  {
    id: "Five",
    question: "How long does it take to see results from Walmart Marketplace Management?",
    answer:
      "The timeline depends on your starting point, product demand, listing condition, competition, inventory availability, and advertising investment. Some operational improvements can be implemented relatively quickly, while meaningful changes in organic visibility and sales performance may require ongoing optimization.",
  },
  {
    id: "Six",
    question: "How much do Walmart Marketplace Management Services cost?",
    answer:
      "Pricing depends on the number of products, account complexity, advertising requirements, and level of ongoing support. Contact our team to discuss your business needs and request a customized proposal.",
  },
];

const portfolioClients = [
  {
    initials: "CH",
    gradient: "#0b2e58",
    client: "Cobalt Home Essentials",
    country: "USA",
    project: "Marketplace Onboarding & Listings",
    desc: "Managed Walmart seller onboarding and initial bulk catalog upload.",
    category: "Marketplace Onboarding & Listings",
    result: "Approved & Live",
    resultSub: "Successful Onboarding",
  },
  {
    initials: "FB",
    gradient: "#0b2e58",
    client: "Ferncroft Baby Co.",
    country: "USA",
    project: "Listing SEO & Advertising",
    desc: "Optimized listings and managed sponsored ad placements for a baby brand.",
    category: "Listing SEO & Advertising",
    result: "Improved Organic Rankings",
    resultSub: "Core Keyword Growth",
  },
  {
    initials: "PF",
    gradient: "#0b2e58",
    client: "Pinegrove Furnishings",
    country: "Canada",
    project: "Catalog & Inventory Sync",
    desc: "Synced inventory feeds and corrected catalog mismatches across SKUs.",
    category: "Catalog & Inventory Sync",
    result: "Fewer Stock Errors",
    resultSub: "Improved Inventory Accuracy",
  },
  {
    initials: "ST",
    gradient: "#0b2e58",
    client: "Stonebridge Tools",
    country: "USA",
    project: "Account Management & Compliance",
    desc: "Ongoing account monitoring and policy compliance for a tools retailer.",
    category: "Account Management & Compliance",
    result: "Consistent Performance",
    resultSub: "Maintained Compliance Standing",
  },
  {
    initials: "WO",
    gradient: "#0b2e58",
    client: "Wrenfield Outdoor Living",
    country: "USA",
    project: "Store Management & Promotions",
    desc: "Managed seasonal promotions and storefront merchandising on Walmart.",
    category: "Store Management & Promotions",
    result: "Increased Visibility",
    resultSub: "Promotional Campaign Success",
  },
];

const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe manages our Walmart marketplace presence from end to end. Their team handles listing updates, order management, customer service, and performance monitoring. Our seller metrics are perfect and sales have grown consistently month over month.",
    name: "Robert J. Callahan | SunShine Nutrition",
    location: "USA",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Entering the Walmart marketplace was intimidating. Tech2Globe handled our entire onboarding, catalog setup, and ongoing management. We went from zero to 500+ active SKUs in under 6 weeks, and our store is already profitable.",
    name: "Ana Gutierrez | VivaCasa Home ",
    location: "Mexico",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Our Walmart marketplace was stagnant for months. Tech2Globe completely revamped our approach — optimizing our catalog, improving our seller score, and implementing a systematic review strategy. Sales jumped by 120% in the first quarter.",
    name: "Priya Kapoor | IndoStyle Fashion ",
    location: "India",
  },
];

export default function WalmartMarketplaceManagement() {
  const pageUrl = "https://www.tech2globe.com/walmart-marketplace-management-services";

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Walmart Marketplace Management Services",
        description:
          "Manage and optimize your Walmart seller account with product listing optimization, marketplace SEO, advertising management, catalog support, and performance monitoring.",
        mainEntity: {
          "@id": `${pageUrl}#service`,
        },
        hasPart: {
          "@id": `${pageUrl}#faq`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Walmart Marketplace Management Services",
        url: pageUrl,
        serviceType: "Walmart Marketplace Management",
        description:
          "Walmart Marketplace management support for sellers, including account setup, product listing optimization, keyword research, advertising management, catalog maintenance, inventory coordination, and performance reporting.",
        provider: {
          "@type": "Organization",
          name: "Tech2Globe",
          url: "https://www.tech2globe.com/",
        },
        audience: {
          "@type": "Audience",
          audienceType: "Walmart Marketplace sellers and eCommerce businesses",
        },
        areaServed: {
          "@type": "Place",
          name: "Worldwide",
        },
        category: "eCommerce Marketplace Management",
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        url: pageUrl,
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
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.tech2globe.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Walmart Marketplace Management",
            item: pageUrl,
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
      <Breadcrumb parentName="Services" pageName="Walmart Marketplace Management Services" />
      <BrandSection />

      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              {/* <ServiceBanner
                pageName="Walmart Marketplace Management Services"
                imageSrc="/images/services/walmart.jpg"
              /> */}

              <div id="overview" className={Style.ContentDiv}>
                <h2 className="text-danger">Walmart Marketplace Management Services to Grow Your Online Business</h2>
                <p>
                  Selling on Walmart Marketplace gives your business an opportunity to reach online
                  shoppers and expand your eCommerce presence. However, managing product listings,
                  improving search visibility, maintaining inventory, running advertising campaigns,
                  and tracking sales can become challenging as your business grows. Without a clear
                  strategy, even quality products may struggle to attract customers and generate
                  consistent sales.
                </p>
                <p>
                  At Tech2Globe, our Walmart Marketplace Management Services help businesses simplify
                  marketplace operations, improve product discoverability, and build a stronger
                  selling strategy. Whether you are launching your first products on Walmart or
                  looking to improve an existing seller account, we provide support tailored to your
                  business goals.
                </p>
                <p className="mb-0">
                  Our focus is to help you manage day-to-day marketplace activities more efficiently
                  while identifying opportunities to improve visibility, customer experience, and
                  sales performance.
                </p>
              </div>

              <div id="why-need" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">
                  Why Does Your Business Need Walmart Marketplace Management?
                </h2>
                <p>
                  Managing a Walmart seller account involves more than uploading products and waiting
                  for orders. Your products need accurate information, competitive pricing, relevant
                  keywords, reliable inventory, and a smooth purchasing experience.
                </p>
                <p>
                  Many sellers face challenges such as low product visibility, incomplete listings,
                  inconsistent sales, rising advertising costs, and inventory discrepancies. Handling
                  these activities internally can also take time away from product development and
                  business expansion.
                </p>
                <p>
                  Professional Walmart Marketplace Management Services help address these challenges
                  through a structured approach to account management, listing optimization,
                  advertising, and performance monitoring.
                </p>
                <p className="mb-2">With the right support, you can:</p>
                <ul className="ps-3">
                  {whyNeedBenefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mb-0">
                  The objective is to create a more organized, customer-focused, and scalable Walmart
                  selling experience.
                </p>
              </div>

              <div id="services" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Our Walmart Marketplace Management Services</h2>
                <p className="mb-4">
                  Every business has different products, operational requirements, and growth
                  objectives. Our services can be customized to address your current challenges and
                  support your next stage of marketplace growth.
                </p>
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
                        {service.bullets.length > 0 && (
                          <ul className="ps-3">
                            {service.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                        <p className="mb-0">{service.closing}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="process" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">
                  How Our Walmart Marketplace Management Process Works
                </h2>
                <p className="mb-4">
                  We follow a structured process designed around your current account status and
                  business priorities.
                </p>
                <div className={`row ${Style.ProcessGrid}`}>
                  {processSteps.map((step) => (
                    <div key={step.step} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                      <div className={Style.ProcessStep}>
                        <div className={Style.ProcessTop}>
                          <span className={Style.ProcessNumber}>{step.step}</span>
                          <span className={Style.ProcessLabel}>Step {step.step}</span>
                        </div>
                        <h5>{step.title}</h5>
                        <p className="mb-0">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 mb-0">
                  This process helps keep your marketplace activities organized while allowing the
                  strategy to evolve as your business needs change.
                </p>
              </div>

              <div id="why-choose" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">
                  Why Choose Tech2Globe for Walmart Marketplace Management?
                </h2>
                <p className="mb-4">
                  Choosing the right marketplace partner means finding a team that understands both
                  the operational and commercial sides of selling online. Tech2Globe provides
                  eCommerce support covering product catalog management, listing optimization,
                  marketplace SEO, advertising, and account performance analysis.
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
                  Our aim is to help you spend less time coordinating routine marketplace tasks and
                  more time focusing on your products, customers, and business strategy.
                </p>
              </div>

              <div id="who-benefits" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">
                  Who Can Benefit from Our Walmart Marketplace Management Services?
                </h2>
                <p className="mb-4">
                  Our services can be useful for different types of eCommerce businesses, including:
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
              </div>

              <div id="cta-copy" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">
                  Grow Your Walmart Business with the Right Management Strategy
                </h2>
                <p>
                  Growing on Walmart Marketplace requires a combination of accurate product
                  information, relevant search optimization, effective advertising, reliable
                  operations, and consistent performance monitoring.
                </p>
                <p>
                  With Tech2Globe&apos;s Walmart Marketplace Management Services, you can get support
                  for the activities that keep your seller account organized and help you identify
                  opportunities for improvement.
                </p>
                <p className="mb-0">
                  Whether you sell a small selection of products or manage a large catalog, the first
                  step is to identify your most important challenges and prioritize improvements
                  accordingly.
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
                <h2 className="text-white mb-3">
                  Ready to Grow Your Walmart Marketplace Business?
                </h2>
                <p className="text-white mb-4">
                  Contact Tech2Globe to discuss your goals and get a customized marketplace management
                  proposal.
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
