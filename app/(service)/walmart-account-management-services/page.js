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
  FaLightbulb,
  FaBoxes,
  FaTruck,
  FaBullhorn,
  FaShieldAlt,
  FaCogs,
  FaChartLine,
  FaClipboardCheck,
  FaExpandArrowsAlt,
  FaRocket,
  FaBuilding,
  FaIndustry,
  FaExclamationTriangle,
  FaShoppingBag,
  FaCalendarCheck,
} from "react-icons/fa";

export const metadata = {
  title: "Walmart Account Management Services | Tech2Globe",
  description:
    "Simplify your Walmart business with expert Walmart Account Management Services from Tech2Globe. Optimize listings, manage operations, and support business growth.",
  openGraph: {
    title: "Walmart Account Management Services | Tech2Globe",
    siteName: "Tech2Globe Web Solutions LLP",
    description:
      "Simplify your Walmart business with expert Walmart Account Management Services from Tech2Globe. Optimize listings, manage operations, and support business growth.",
    url: "https://stagenew.tech2globe.tech/walmart-account-management-services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Walmart Account Management Services | Tech2Globe",
    description:
      "Simplify your Walmart business with expert Walmart Account Management Services from Tech2Globe. Optimize listings, manage operations, and support business growth.",
  },
  alternates: {
    canonical: "https://stagenew.tech2globe.tech/walmart-account-management-services",
  },
};

const pageHeaderData = {
  title: "Walmart Account Management Services",
  description:
    "Simplify your Walmart business with expert Walmart Account Management Services from Tech2Globe. Optimize listings, manage operations, and support business growth.",
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
  { id: 5, name: "Walmart Marketplace Management", path: "/walmart-marketplace-management-services" },
  { id: 6, name: "Walmart Product Upload SEO", path: "/walmart-product-upload-seo" },
  { id: 7, name: "Amazon Marketing Services", path: "/amazon-marketing-services" },
  { id: 8, name: "eCommerce Marketplace Management", path: "/ecommerce-marketplace-management" },
  { id: 9, name: "Catalog Management", path: "/catalog-management-services" },
];

const sidebarSections = [
  { heading: "Resources", links: resources },
  { heading: "Useful Links", links: usefulLinks },
];

const coreServices = [
  {
    icon: <FaStore size={36} color="#234268" />,
    title: "Walmart Seller Account Setup and Optimization",
    intro:
      "Setting up and maintaining your seller account correctly is an important step toward building a reliable marketplace business. Incomplete business information, incorrect settings, or catalog setup issues can create unnecessary delays.",
    body: [
      "Our team can assist with account setup requirements, Seller Center configuration, product information preparation, and relevant operational settings. For existing sellers, an account review can help identify areas that need improvement.",
    ],
    bullets: [],
    closing:
      "The objective is to establish an organized account structure that supports day-to-day operations and future business expansion.",
  },
  {
    icon: <FaSearch size={36} color="#234268" />,
    title: "Product Listing Optimization",
    intro:
      "Customers need clear and relevant information before deciding to purchase a product. Incomplete titles, weak descriptions, missing attributes, or unsuitable images can make it harder for shoppers to understand what you offer.",
    body: ["Our Walmart listing management support can include:"],
    bullets: [
      "Product title and description optimization",
      "Keyword research and placement",
      "Product specifications and attribute completion",
      "Image and content recommendations",
      "Category and catalog data review",
      "Identification of listing errors and missing information",
    ],
    closing:
      "The focus is to make product pages more informative, relevant to customer searches, and easier to navigate. Listing improvements can support discoverability and purchasing decisions, although rankings and sales depend on several factors.",
  },
  {
    icon: <FaLightbulb size={36} color="#234268" />,
    title: "Walmart SEO and Keyword Research",
    intro:
      "If shoppers cannot easily find your products, even a strong product offering may struggle to generate consistent sales. Walmart SEO helps improve the relevance and quality of product listings for marketplace searches.",
    body: [
      "Tech2Globe can research relevant search terms, review competing listings, and identify opportunities to improve product titles, descriptions, and attributes. The strategy should reflect what customers are searching for rather than simply repeating keywords throughout the content.",
      "Keyword research can also help identify gaps in your existing catalog and opportunities to improve how products are presented. Performance should be monitored over time to understand which changes are contributing to better visibility and customer engagement.",
    ],
    bullets: [],
    closing: "",
  },
  {
    icon: <FaBoxes size={36} color="#234268" />,
    title: "Inventory and Catalog Management",
    intro:
      "Inventory problems can affect both customer satisfaction and business performance. Products that become unavailable may miss sales opportunities, while excess stock can tie up working capital.",
    body: [
      "Our team can assist with catalog updates, inventory monitoring, stock-level reviews, and identifying potential availability issues. Sellers can use this information to plan replenishment and maintain more consistent product availability.",
      "For businesses managing large catalogs, organized product data is equally important. Accurate product attributes, variations, pricing information, and availability records help reduce inconsistencies and make catalog maintenance easier.",
    ],
    bullets: [],
    closing:
      "Inventory planning should be coordinated with suppliers, warehouse capacity, sales trends, and expected demand.",
  },
  {
    icon: <FaTruck size={36} color="#234268" />,
    title: "Walmart Order and Fulfillment Support",
    intro:
      "Reliable order fulfillment is an important part of the customer experience. Delays, cancellations, tracking problems, and incorrect order information can affect seller performance.",
    body: [
      "Tech2Globe can help coordinate relevant order management activities, review operational issues, and support fulfillment processes according to your business arrangement.",
      "Depending on your setup, this may include monitoring order status, reviewing shipping information, coordinating with fulfillment partners, and identifying recurring processing issues. Sellers using Walmart Fulfillment Services (WFS) may have different operational responsibilities from those fulfilling orders themselves.",
    ],
    bullets: [],
    closing:
      "The goal is to help you maintain an organized process and address problems before they become recurring challenges.",
  },
  {
    icon: <FaBullhorn size={36} color="#234268" />,
    title: "Walmart Advertising and PPC Management",
    intro:
      "Product listings may need additional promotion to reach relevant shoppers in competitive categories. Walmart Connect advertising can help eligible sellers promote their products through available advertising placements.",
    body: [
      "Our Walmart advertising support can include campaign planning, keyword selection, bid management, budget monitoring, search-term analysis, and performance reporting.",
      "Campaigns should be evaluated using metrics such as advertising spend, attributed sales, conversion rate, cost per click, and return on ad spend (ROAS). These metrics help identify which products and campaigns deserve further attention.",
      "Rather than increasing budgets without a clear reason, the strategy should focus on understanding performance, reducing inefficient spending where possible, and allocating budgets according to business objectives.",
    ],
    bullets: [],
    closing:
      "Advertising results vary according to product demand, competition, pricing, available inventory, campaign settings, and other factors.",
  },
  {
    icon: <FaShieldAlt size={36} color="#234268" />,
    title: "Account Health and Performance Monitoring",
    intro:
      "Managing a Walmart seller account also involves monitoring operational performance and resolving issues that could affect the customer experience.",
    body: [
      "Our account management process can include reviewing relevant seller performance indicators, identifying listing errors, tracking unresolved issues, and helping prioritize corrective actions.",
      "Important areas to monitor may include cancellation rates, on-time delivery, valid tracking, returns, customer feedback, and listing quality. Walmart maintains seller performance standards, so sellers should regularly review their Seller Center dashboards and applicable policies.",
    ],
    bullets: [],
    closing:
      "Early identification of problems helps businesses make informed decisions and maintain more consistent marketplace operations. Any account restrictions or policy-related concerns should be addressed according to Walmart's official procedures.",
  },
];

const whyChoose = [
  {
    icon: <FaCogs size={28} />,
    title: "Customized service scope",
    text: "Choose support for listing optimization, catalog management, advertising, inventory oversight, or broader account operations based on your priorities.",
  },
  {
    icon: <FaChartLine size={28} />,
    title: "Data-informed decisions",
    text: "Use available performance reports and marketplace data to identify issues, review progress, and prioritize improvements.",
  },
  {
    icon: <FaClipboardCheck size={28} />,
    title: "Operational efficiency",
    text: "Reduce the manual workload involved in routine account activities and product data maintenance.",
  },
  {
    icon: <FaBoxes size={28} />,
    title: "Coordinated marketplace management",
    text: "Connect listing quality, inventory availability, advertising, and fulfillment considerations within a more organized approach.",
  },
  {
    icon: <FaExpandArrowsAlt size={28} />,
    title: "Support for different business stages",
    text: "Whether you are preparing to launch or managing an established store, the service scope can be adapted to your current needs and resources.",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Account Review",
    text: "We review the relevant account information, product catalog, listing quality, inventory processes, advertising activity, and available performance data to understand your current position.",
  },
  {
    step: 2,
    title: "Identify Improvement Opportunities",
    text: "Based on the review, we identify issues and opportunities involving product content, catalog accuracy, advertising efficiency, stock availability, and operational performance.",
  },
  {
    step: 3,
    title: "Develop a Management Plan",
    text: "We prioritize activities according to your business objectives, available resources, product requirements, and immediate operational needs.",
  },
  {
    step: 4,
    title: "Implement Agreed Improvements",
    text: "Depending on the agreed scope and account permissions, the team works on relevant listing updates, catalog maintenance, campaign adjustments, and operational tasks.",
  },
  {
    step: 5,
    title: "Monitor and Refine",
    text: "We review available performance data, track completed actions, and identify areas that may require further attention. The plan can be adjusted as your business and marketplace conditions change.",
  },
];

const whoBenefits = [
  {
    icon: <FaRocket size={28} />,
    title: "New marketplace brands",
    text: "Brands entering the Walmart marketplace for the first time.",
  },
  {
    icon: <FaBuilding size={28} />,
    title: "Established sellers",
    text: "Established sellers managing large product catalogs.",
  },
  {
    icon: <FaIndustry size={28} />,
    title: "Manufacturers and wholesalers",
    text: "Manufacturers and wholesalers expanding into online retail.",
  },
  {
    icon: <FaExclamationTriangle size={28} />,
    title: "Sellers with listing issues",
    text: "Businesses struggling with listing errors or inconsistent product data.",
  },
  {
    icon: <FaBullhorn size={28} />,
    title: "Advertising-focused sellers",
    text: "Sellers seeking structured advertising and performance monitoring.",
  },
  {
    icon: <FaShoppingBag size={28} />,
    title: "Growing ecommerce businesses",
    text: "Growing ecommerce businesses that need help managing routine marketplace operations.",
  },
];

const faqs = [
  {
    id: "One",
    question: "What are Walmart account management services?",
    answer:
      "Walmart account management services help sellers manage their marketplace operations, including product listings, inventory, advertising, order tracking, and performance monitoring.",
  },
  {
    id: "Two",
    question: "What does Walmart full-service management include?",
    answer:
      "It can include seller account setup, product listing optimization, keyword research, advertising campaigns, inventory monitoring, order management, and performance reporting.",
  },
  {
    id: "Three",
    question: "How can I improve my product visibility on Walmart Marketplace?",
    answer:
      "You can improve visibility by optimizing product titles, descriptions, images, and relevant keywords. Running targeted ads and maintaining accurate inventory can also help attract potential customers.",
  },
  {
    id: "Four",
    question: "Can you help set up a new Walmart seller account?",
    answer:
      "Yes, professional support can help with account setup, Seller Center configuration, product uploads, shipping settings, and other onboarding requirements.",
  },
  {
    id: "Five",
    question: "Do you provide Walmart advertising and PPC management?",
    answer:
      "Yes, support can include campaign setup, keyword targeting, bid optimization, budget monitoring, and performance analysis to help improve advertising efficiency.",
  },
  {
    id: "Six",
    question: "How do you help sellers manage inventory and orders?",
    answer:
      "Inventory and order management involves monitoring stock levels, tracking orders, coordinating fulfillment, and identifying potential stock shortages to support smooth store operations.",
  },
];

const portfolioClients = [
  {
    initials: "HB",
    gradient: "#0b2e58",
    client: "HomeBase Essentials",
    country: "USA",
    project: "End-to-End Store Growth Plan",
    desc: "US home essentials brand that achieved 84% revenue growth in 90 days through complete Walmart store management and AI-powered listing optimization.",
    category: "Account Management",
    result: "+84% Revenue in 90 days",
    resultSub: "Revenue Growth",
  },
  {
    initials: "NP",
    gradient: "#0b2e58",
    client: "NorthPeak Outdoors",
    country: "Canada",
    project: "Walmart AI Listing + PPC Overhaul",
    desc: "Canadian outdoor brand that doubled its Walmart revenue in 5 months by outsourcing full account management including PPC and inventory oversight.",
    category: "Account Management",
    result: "Revenue doubled in 5 months",
    resultSub: "Sales Growth",
  },
  {
    initials: "OB",
    gradient: "#0b2e58",
    client: "OutbackBrand Co.",
    country: "Australia",
    project: "Full Account Takeover & Scaling",
    desc: "Australian brand that turned its Walmart store consistently profitable and fast-scaling through Tech2Globe's AI-powered full service management approach.",
    category: "Account Management",
    result: "3x monthly orders",
    resultSub: "Order Growth",
  },
  {
    initials: "CH",
    gradient: "#0b2e58",
    client: "CleanHome Direct",
    country: "UK",
    project: "Store Health & Performance Recovery",
    category: "Account Management",
    result: "Account health score 100%",
    resultSub: "Account Recovery",
  },
  {
    initials: "GG",
    gradient: "#0b2e58",
    client: "GlobalGoods Hub",
    country: "Germany",
    project: "Inventory + Fulfillment Management",
    category: "Account Management",
    result: "Zero stockout incidents",
    resultSub: "Inventory Success",
  },
];

const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe took complete ownership of our Walmart store and the results were beyond our expectations. Within 90 days, our sales grew by 84% and our listings ranked on the first page for our core keywords. Truly a world-class team.",
    name: "David R. Thornton | HomeBase Essentials",
    location: "UK",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We handed our entire Walmart account to Tech2Globe and never looked back. From listing optimization and PPC to inventory management and performance analytics — everything is handled professionally. Our revenue doubled in 5 months.",
    name: "Sarah Mitchell | NorthPeak Outdoors ",
    location: "Canada",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe's full service management is the best investment we made for our Walmart business. Their AI-powered approach to growth is unlike anything we had experienced before. Our store is now consistently profitable and scaling fast.",
    name: "James O'Sullivan | OutbackBrand Co.",
    location: "Australia",
  },
];

export default function WalmartManagement() {
  const pageUrl = "https://www.tech2globe.com/walmart-account-management-services";

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Walmart Account Management Services",
        description:
          "Manage your Walmart marketplace business with support for account setup, product listing optimization, advertising, inventory management, order tracking, and performance reporting.",
        mainEntity: {
          "@id": `${pageUrl}#service`,
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Walmart Account Management Services",
        serviceType: "Walmart Marketplace Account Management",
        url: pageUrl,
        description:
          "Tech2Globe provides Walmart account management services, including seller account setup, product listing optimization, keyword research, advertising and PPC management, inventory monitoring, order management, and performance reporting.",
        provider: {
          "@type": "Organization",
          name: "Tech2Globe",
          url: "https://www.tech2globe.com/",
        },
        audience: {
          "@type": "Audience",
          audienceType: "Walmart Marketplace sellers and e-commerce businesses",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Walmart Account Management Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Walmart Seller Account Setup and Optimization",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Walmart Product Listing Optimization",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Walmart Advertising and PPC Management",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Walmart Inventory and Order Management",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Walmart Account Performance Reporting",
              },
            },
          ],
        },
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
            name: "Walmart Account Management Services",
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
      <Breadcrumb parentName="Services" pageName="Walmart Account Management Services" />
      <BrandSection />

      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              {/* <ServiceBanner
                pageName="Walmart Account Management Services"
                imageSrc="/images/services/walmart.jpg"
              /> */}

              <div id="overview" className={Style.ContentDiv}>
                <h2 className="text-danger">Walmart Account Management Services to Grow Your Marketplace Business</h2>
                <p>
                  Selling on Walmart Marketplace offers businesses an opportunity to reach online
                  shoppers, but managing a successful store requires more than uploading products.
                  Sellers need accurate listings, effective inventory management, timely order
                  processing, competitive pricing, advertising, and regular performance monitoring.
                  Handling all these activities independently can become challenging as your catalog
                  and order volume grow.
                </p>
                <p className="mb-0">
                  Tech2Globe provides Walmart Account Management Services to help businesses manage
                  their marketplace operations, improve product visibility, and build a more
                  organized selling process. Whether you are launching a new store or looking to
                  improve an existing account, the right management strategy can help you address
                  operational challenges and identify opportunities for growth.
                </p>
              </div>

              <div id="what-are" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">What Are Walmart Account Management Services?</h2>
                <p>
                  Walmart account management involves managing and optimizing the activities required
                  to operate a seller account effectively. It includes product catalog management,
                  listing optimization, inventory monitoring, order support, advertising coordination,
                  and performance analysis.
                </p>
                <p>
                  For sellers, the goal is to simplify daily operations while improving the shopping
                  experience. Instead of spending hours handling individual tasks, you can work with
                  an experienced team to manage important account activities and focus on broader
                  business priorities.
                </p>
                <p className="mb-0">
                  Tech2Globe offers support based on your business requirements, product catalog, and
                  current marketplace challenges. The scope can be customized for sellers who need
                  assistance with specific tasks or more comprehensive account management.
                </p>
              </div>

              <div id="services" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">
                  What Services Are Included in Walmart Account Management?
                </h2>
                <p className="mb-4">
                  Every Walmart business has different requirements. Some sellers need help
                  correcting product listings, while others require ongoing support across their
                  entire marketplace operation.
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
                        {service.closing ? <p className="mb-0">{service.closing}</p> : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="sales" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">
                  How Can Account Management Help Improve Walmart Sales?
                </h2>
                <p>
                  Sales performance depends on several connected factors. Better product content may
                  improve customer understanding, while effective advertising can increase exposure to
                  relevant shoppers. Inventory availability and reliable fulfillment also influence
                  whether customers can complete their purchases successfully.
                </p>
                <p>
                  A coordinated management approach helps address these areas together rather than
                  treating each task separately.
                </p>
                <p>
                  For example, if a product receives impressions but few clicks, its title, image,
                  price, and competitive positioning may need review. If it receives clicks but
                  generates few orders, the product page, customer expectations, pricing, reviews, and
                  delivery details may require further investigation.
                </p>
                <p className="mb-0">
                  Performance data can help identify possible causes and guide the next steps.
                  However, no service provider can guarantee a specific ranking, sales volume, or
                  revenue increase because marketplace results depend on factors beyond account
                  management alone.
                </p>
              </div>

              <div id="why-choose" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">
                  Why Choose Tech2Globe for Walmart Account Management?
                </h2>
                <p className="mb-4">
                  Managing an online marketplace requires time, structured processes, and ongoing
                  attention to changing business needs. Tech2Globe provides marketplace support
                  designed around your catalog, operational requirements, and growth objectives.
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
                  The right approach begins with understanding your existing account, identifying
                  operational gaps, and developing a practical action plan.
                </p>
              </div>

              <div id="process" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Our Process for Managing Your Walmart Account</h2>
                <p className="mb-4">
                  A structured process helps keep account activities organized and makes it easier to
                  evaluate progress.
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
              </div>

              <div id="who-benefits" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">
                  Who Can Benefit from Walmart Account Management Services?
                </h2>
                <p className="mb-4">
                  These services can support a range of businesses selling or preparing to sell on
                  Walmart Marketplace, including:
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
                  The most suitable service scope depends on your current account condition, catalog
                  size, internal team capacity, and business goals.
                </p>
              </div>

              <div id="cta-copy" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Get Expert Support for Your Walmart Business</h2>
                <p>
                  Managing a Walmart store involves many connected responsibilities, from keeping
                  product information accurate to monitoring advertising performance and maintaining
                  reliable fulfillment processes. Without a clear system, these activities can become
                  difficult to coordinate as your business grows.
                </p>
                <p>
                  Tech2Globe&apos;s Walmart Account Management Services can help you organize these
                  responsibilities, identify improvement opportunities, and build a more structured
                  approach to marketplace operations.
                </p>
                <p>
                  If you want to improve your existing account or need support managing your growing
                  product catalog, start by discussing your current challenges and business objectives
                  with our team.
                </p>
                <p className="mb-0">
                  Contact Tech2Globe today to discuss your Walmart account management requirements and
                  explore a service plan tailored to your business.
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
                <h2 className="text-white mb-3">Ready to Simplify Your Walmart Account Management?</h2>
                <p className="text-white mb-4">
                  Contact Tech2Globe to discuss your requirements and explore a service plan tailored
                  to your business.
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
