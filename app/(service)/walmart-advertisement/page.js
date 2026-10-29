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
  FaBullhorn,
  FaSearch,
  FaEye,
  FaUsers,
  FaDollarSign,
  FaChartLine,
  FaBoxOpen,
  FaTrademark,
  FaVideo,
  FaClipboardCheck,
  FaCogs,
  FaLightbulb,
  FaComments,
  FaTachometerAlt,
  FaCalendarCheck,
} from "react-icons/fa";

export const metadata = {
  title: "Walmart Advertising Agency | Tech2Globe",
  description:
    "Grow your sales with strategic Walmart advertising services from Tech2Globe. Manage Sponsored Products, Brands, and Videos with data-driven PPC optimization.",
  keywords: [
    "Walmart advertising agency",
    "Walmart advertising services",
    "Walmart PPC management",
    "Walmart Sponsored Products",
    "Walmart Sponsored Brands",
    "Walmart Sponsored Videos",
  ],
  openGraph: {
    title: "Walmart Advertising Agency | Tech2Globe",
    siteName: "Tech2Globe Web Solutions LLP",
    description:
      "Grow your sales with strategic Walmart advertising services from Tech2Globe. Manage Sponsored Products, Brands, and Videos with data-driven PPC optimization.",
    url: "https://stagenew.tech2globe.tech/walmart-advertisement",
  },
  twitter: {
    card: "summary_large_image",
    title: "Walmart Advertising Agency | Tech2Globe",
    description:
      "Grow your sales with strategic Walmart advertising services from Tech2Globe. Manage Sponsored Products, Brands, and Videos with data-driven PPC optimization.",
  },
  alternates: {
    canonical: "https://stagenew.tech2globe.tech/walmart-advertisement",
  },
};

const pageHeaderData = {
  title: "Walmart Advertising Agency",
  description:
    "Tech2Globe provides Walmart advertising services to help sellers and brands manage PPC campaigns, improve keyword targeting, optimize bids and budgets, monitor advertising performance, and identify opportunities to improve campaign efficiency.",
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
  { id: 4, name: "Walmart Account Management Services", path: "/walmart-account-management-services" },
  { id: 5, name: "Walmart Product Upload SEO", path: "/walmart-product-upload-seo" },
  { id: 6, name: "Amazon Advertising Services", path: "/amazon-advertising-services" },
  { id: 7, name: "Amazon PPC Services", path: "/amazon-ppc-services" },
  { id: 8, name: "eCommerce Marketplace Management", path: "/ecommerce-marketplace-management" },
  { id: 9, name: "TikTok Shop Management", path: "/tiktok-shop-management-services" },
];

const sidebarSections = [
  { heading: "Resources", links: resources },
  { heading: "Useful Links", links: usefulLinks },
];

const serviceIncludes = [
  "Walmart advertising account and campaign setup",
  "Keyword research and targeting strategy",
  "Sponsored Products, Sponsored Brands, and Sponsored Videos campaign management",
  "Advertising budget planning and bid optimization",
  "Search term analysis and negative keyword management",
  "Campaign performance monitoring",
  "Advertising cost and return analysis",
  "Regular reporting and improvement recommendations",
];

const whyNeed = [
  {
    icon: <FaEye size={28} />,
    title: "Improve Product Visibility",
    text: "Your products compete with other listings for attention. Walmart advertising can help eligible products appear in relevant search results, browse placements, and other available advertising positions. A carefully planned campaign helps you target shoppers searching for products related to your offerings. However, visibility also depends on factors such as relevance, bidding, product availability, and campaign eligibility.",
  },
  {
    icon: <FaUsers size={28} />,
    title: "Reach Relevant Shoppers",
    text: "Not every click has the same value. Targeting relevant search terms and products can help attract shoppers whose interests align with what you sell. Keyword research, search term analysis, and targeting adjustments can help reduce wasted spend and improve campaign relevance.",
  },
  {
    icon: <FaDollarSign size={28} />,
    title: "Manage Advertising Costs",
    text: "A high advertising budget does not automatically produce profitable sales. If bids are too aggressive or campaigns target irrelevant searches, costs can increase without delivering sufficient returns. A Walmart PPC management team can review spending patterns, adjust bids, evaluate keyword performance, and reallocate budgets based on campaign objectives and results.",
  },
  {
    icon: <FaChartLine size={28} />,
    title: "Make Decisions Using Performance Data",
    text: "Advertising reports can help you understand impressions, clicks, click-through rate (CTR), cost per click (CPC), conversions, advertising cost of sales (ACOS), and return on ad spend (ROAS). Analyzing these metrics together provides a clearer picture of campaign performance and helps identify where further optimization may be needed.",
  },
];

const campaignTypes = [
  {
    icon: <FaBoxOpen size={36} color="#f15a29" />,
    title: "Sponsored Products",
    paragraphs: [
      "Sponsored Products promote individual items across relevant Walmart search results and other shopping placements.",
      "These campaigns can be useful when your goal is to increase product discoverability and attract shoppers who are already searching for similar items.",
      "For example, a seller offering kitchen storage products may target relevant shopping searches to help eligible products reach customers considering similar purchases.",
      "Campaign performance depends on product relevance, listing quality, competition, bids, and other marketplace factors.",
    ],
  },
  {
    icon: <FaTrademark size={36} color="#f15a29" />,
    title: "Sponsored Brands",
    paragraphs: [
      "Sponsored Brands help eligible brands showcase their identity and selected products in prominent placements on Walmart's digital properties.",
      "These campaigns may be suitable for businesses looking to improve brand recognition, promote product collections, or introduce customers to a wider product range.",
      "They can complement Sponsored Products by giving shoppers additional opportunities to discover a brand while browsing or searching for relevant products.",
    ],
  },
  {
    icon: <FaVideo size={36} color="#f15a29" />,
    title: "Sponsored Videos",
    paragraphs: [
      "Sponsored Videos use short video creatives to demonstrate product features and benefits in relevant search placements.",
      "They can be useful when shoppers need a better understanding of how a product works, what makes it different, or how it fits into their everyday lives.",
      "For instance, a home improvement brand could use a short product demonstration to communicate practical features that may be difficult to explain through a product image alone.",
      "Availability and eligibility for particular campaign formats depend on Walmart's current requirements.",
    ],
  },
];

const processSteps = [
  {
    step: 1,
    title: "Understand Your Business Goals",
    text: "The first step is to understand your products, target customers, current advertising activity, and growth objectives. Are you trying to launch new products, increase sales of bestsellers, reduce advertising costs, or improve overall profitability? Your answers help determine the appropriate campaign structure and measurement approach.",
  },
  {
    step: 2,
    title: "Conduct an Advertising Audit",
    text: "If you already run Walmart advertising campaigns, reviewing your existing account can help identify what is working and where improvements may be needed. The audit may include campaign structure, keyword targeting, bidding, budget distribution, search term performance, conversions, and advertising costs.",
  },
  {
    step: 3,
    title: "Research Keywords and Competitors",
    text: "Keyword research helps identify relevant shopping searches and potential targeting opportunities. Competitor analysis can provide additional context about competing products, pricing, positioning, and marketplace activity. The purpose is to develop a targeting strategy aligned with your products and customers, not simply to copy competitors' campaigns.",
  },
  {
    step: 4,
    title: "Build the Campaign Structure",
    text: "Campaigns should be organized according to product groups, advertising objectives, targeting strategies, and budget requirements. Separating campaigns where appropriate can make it easier to evaluate performance and control spending. Automatic and manual targeting options can also serve different research and optimization purposes.",
  },
  {
    step: 5,
    title: "Optimize and Monitor Performance",
    text: "After campaigns begin generating data, performance should be reviewed regularly. Optimization may involve adjusting bids, refining targeting, excluding irrelevant search terms where supported, reallocating budgets, and prioritizing products with stronger performance.",
  },
  {
    step: 6,
    title: "Report Results and Recommend Improvements",
    text: "Clear reporting helps you understand where your advertising budget is going and what it is contributing. Reports can highlight spend, attributed sales, conversions, ACOS, ROAS, and opportunities for improvement.",
  },
];

const budgetFactors = [
  {
    title: "Product margins",
    text: "Understand how much profit remains after product costs and other selling expenses.",
  },
  {
    title: "Competition",
    text: "Competitive categories may require more investment to secure relevant advertising placements.",
  },
  {
    title: "Campaign objectives",
    text: "Product launches, brand visibility, and profitability-focused campaigns may need different approaches.",
  },
  {
    title: "Conversion performance",
    text: "Evaluate whether your product pages convert advertising traffic into orders.",
  },
  {
    title: "Testing requirements",
    text: "Allow sufficient budget to collect useful performance data before making major decisions.",
  },
];

const metrics = [
  {
    title: "Impressions",
    text: "Show how often your ads are displayed.",
  },
  {
    title: "Clicks",
    text: "Indicate how many times shoppers interact with your ads.",
  },
  {
    title: "Click-Through Rate (CTR)",
    text: "Measures the percentage of impressions that result in clicks.",
  },
  {
    title: "Cost Per Click (CPC)",
    text: "Shows the average cost paid for each advertising click.",
  },
  {
    title: "Advertising Cost of Sales (ACOS)",
    text: "Measures advertising spend as a percentage of attributed advertising sales.",
  },
  {
    title: "Return on Ad Spend (ROAS)",
    text: "Measures attributed advertising revenue generated per unit of advertising spend.",
  },
];

const whyChoose = [
  {
    icon: <FaCogs size={28} />,
    title: "Campaign planning and management",
    text: "Campaign planning and management based on your objectives.",
  },
  {
    icon: <FaSearch size={28} />,
    title: "Keyword research and targeting",
    text: "Keyword research and targeting improvements.",
  },
  {
    icon: <FaTachometerAlt size={28} />,
    title: "Budget and bid optimization",
    text: "Advertising budget monitoring and bid optimization.",
  },
  {
    icon: <FaChartLine size={28} />,
    title: "Performance analysis and reporting",
    text: "Campaign performance analysis and reporting.",
  },
  {
    icon: <FaLightbulb size={28} />,
    title: "Visibility recommendations",
    text: "Recommendations for improving product visibility and advertising efficiency.",
  },
  {
    icon: <FaClipboardCheck size={28} />,
    title: "Ongoing optimization",
    text: "Ongoing optimization based on available performance data.",
  },
];

const faqs = [
  {
    id: "One",
    question: "What does a Walmart Advertising Agency do?",
    answer:
      "A Walmart Advertising Agency helps sellers and brands plan, manage, and optimize advertising campaigns. Services may include keyword research, campaign setup, bid management, budget allocation, performance monitoring, and reporting.",
  },
  {
    id: "Two",
    question: "What types of Walmart ads can I run?",
    answer:
      "Depending on your eligibility and campaign objectives, available options may include Sponsored Products, Sponsored Brands, and Sponsored Videos. Each format serves different product discovery, sales, and brand awareness needs.",
  },
  {
    id: "Three",
    question: "How can I reduce my Walmart advertising costs?",
    answer:
      "Review keyword and search term performance, evaluate bids, improve targeting, and focus spending on campaigns aligned with your objectives. Also assess product listing quality and conversion performance, because advertising optimization alone may not resolve underlying product page issues.",
  },
  {
    id: "Four",
    question: "How long does it take to see results from Walmart advertising?",
    answer:
      "The timeline varies according to competition, budget, product demand, listing quality, and campaign performance. Initial data can help guide early optimizations, but reliable decisions may require additional time and sufficient conversion data.",
  },
  {
    id: "Five",
    question: "Can you manage my existing Walmart PPC campaigns?",
    answer:
      "Yes. Existing campaigns can be reviewed to identify opportunities involving targeting, bids, budgets, campaign structure, and performance measurement. The recommended approach depends on the account's current condition and business goals.",
  },
  {
    id: "Six",
    question: "How do I get started with Walmart advertising services?",
    answer:
      "Begin by discussing your products, current Walmart account performance, advertising goals, and budget. An initial review can help identify priorities and determine which campaign management services are appropriate for your business.",
  },
];

const portfolioClients = [
  {
    initials: "TZ",
    gradient: "#0b2e58",
    client: "TechZone USA",
    country: "USA",
    project: "PPC Campaign Rebuild & Optimization",
    desc: "US electronics retailer that boosted Walmart ROAS from 2.1x to 7.4x in 8 weeks through AI-driven bid management and full PPC account restructuring.",
    category: "Walmart Advertising",
    result: "ROAS improved from 2.1x to 7.4x",
    resultSub: "ROAS Growth",
  },
  {
    initials: "BL",
    gradient: "#0b2e58",
    client: "BrightLeaf Home",
    country: "UK",
    project: "Sponsored Products Launch Strategy",
    desc: "UK home brand that tripled ad-driven sales and cut CPC by 42% after Tech2Globe rebuilt its entire Walmart advertising strategy from scratch.",
    category: "Walmart Advertising",
    result: "3x ad-driven sales in 60 days",
    resultSub: "Sales Growth",
  },
  {
    initials: "MC",
    gradient: "#0b2e58",
    client: "MapleCart Retail",
    country: "Canada",
    project: "Full Funnel Ad Campaign Management",
    desc: "Canadian retail brand that achieved peak Walmart brand visibility through expertly managed Sponsored Products, Sponsored Brands, and display campaigns.",
    category: "Walmart Advertising",
    result: "CPC reduced by 42%",
    resultSub: "Cost Reduction",
  },
  {
    initials: "WW",
    gradient: "#0b2e58",
    client: "WinterWear Direct",
    country: "USA",
    project: "Seasonal Peak Ad Campaign",
    category: "Walmart Advertising",
    result: "Best Q4 ROAS ever recorded",
    resultSub: "Seasonal Success",
  },
  {
    initials: "NC",
    gradient: "#0b2e58",
    client: "NatureCare Labs",
    country: "Australia",
    project: "Brand Visibility & Display Ads",
    category: "Walmart Advertising",
    result: "+180% branded search impressions",
    resultSub: "Brand Awareness",
  },
];

const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe's Walmart advertising team is phenomenal. They restructured our entire PPC account, eliminated wasted ad spend, and boosted our ROAS from 2.1x to 7.4x in just 8 weeks. Their AI-driven bid management is something truly special.",
    name: "Michael T. Barnes | TechZone USA",
    location: "USA",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We were burning money on Walmart ads with no clear strategy. Tech2Globe audited our campaigns, rebuilt them from scratch, and implemented a data-driven approach. Our CPC dropped by 42% and sales from ads tripled within 2 months.",
    name: "Emma Harrington | BrightLeaf Home ",
    location: "UK",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Exceptional advertising management! Tech2Globe handles our Walmart Sponsored Products, Sponsored Brands, and display campaigns with precision. Our brand visibility on Walmart has never been higher, and our ad spend ROI keeps improving every month.",
    name: "Lucas Beaumont | MapleCart Retail ",
    location: "Canada",
  },
];

export default function WalmartAdvertising() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.tech2globe.com/walmart-advertisement#service",
        name: "Walmart Advertising Agency",
        url: "https://www.tech2globe.com/walmart-advertisement",
        description:
          "Tech2Globe provides Walmart advertising services to help sellers and brands manage PPC campaigns, improve keyword targeting, optimize bids and budgets, monitor advertising performance, and identify opportunities to improve campaign efficiency.",
        serviceType: "Walmart Advertising and PPC Management",
        provider: {
          "@type": "Organization",
          name: "Tech2Globe",
          url: "https://www.tech2globe.com/",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Walmart Advertising Services",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Walmart PPC Campaign Management",
            },
            {
              "@type": "OfferCatalog",
              name: "Walmart Keyword Research and Targeting",
            },
            {
              "@type": "OfferCatalog",
              name: "Walmart Sponsored Products Advertising",
            },
            {
              "@type": "OfferCatalog",
              name: "Walmart Sponsored Brands and Video Ads Management",
            },
            {
              "@type": "OfferCatalog",
              name: "Walmart Bid and Budget Optimization",
            },
            {
              "@type": "OfferCatalog",
              name: "Walmart Advertising Performance Reporting",
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tech2globe.com/walmart-advertisement#faq",
        url: "https://www.tech2globe.com/walmart-advertisement",
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
        "@id": "https://www.tech2globe.com/walmart-advertisement#breadcrumb",
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
            name: "Walmart Advertising Agency",
            item: "https://www.tech2globe.com/walmart-advertisement",
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
      <Breadcrumb parentName="Services" pageName="Walmart Advertising Agency" />
      <BrandSection />

      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              {/* <ServiceBanner
                pageName="Walmart Advertising"
                imageSrc="/images/services/walmart.jpg"
              /> */}

              <div id="overview" className={Style.ContentDiv}>
                <h1>
                  Walmart Advertising Agency: Grow Your Sales with Strategic Walmart Advertising
                  Services
                </h1>
                <p>
                  Selling products on Walmart Marketplace gives your business an opportunity to reach
                  customers who are actively shopping for everyday essentials, electronics, home
                  products, beauty items, and more. However, simply listing your products does not
                  guarantee visibility or consistent sales. With multiple sellers competing for
                  customer attention, your products need the right advertising strategy to stand out.
                </p>
                <p>
                  A professional Walmart Advertising Agency can help you plan, launch, and optimize
                  advertising campaigns based on your business goals. Whether you are launching a new
                  product, trying to increase sales of existing products, or improving advertising
                  profitability, the right strategy can help you make better use of your advertising
                  budget.
                </p>
                <p className="mb-0">
                  Tech2Globe offers Walmart advertising services designed to help sellers and brands
                  improve product visibility, manage advertising campaigns, and make data-driven
                  decisions for marketplace growth.
                </p>
              </div>

              <div id="what-are" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">What Are Walmart Advertising Services?</h2>
                <p>
                  Walmart advertising services involve planning, managing, and optimizing paid
                  campaigns to promote products on Walmart&apos;s digital marketplace. These services
                  help businesses connect with relevant shoppers, improve product discovery, and
                  measure the performance of their advertising investment.
                </p>
                <p>
                  If you are managing your Walmart store independently, handling advertising alongside
                  inventory, pricing, product listings, and customer requirements can become
                  challenging. An experienced advertising partner can help organize these activities
                  and identify opportunities for improvement.
                </p>
                <p className="mb-2">
                  Depending on your business needs, Walmart advertising management may include:
                </p>
                <ul className="ps-3">
                  {serviceIncludes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mb-0">
                  The objective is not simply to spend more on advertisements. It is to understand
                  which campaigns, products, and targeting strategies contribute to your business
                  goals.
                </p>
              </div>

              <div id="why-need" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">
                  Why Does Your Business Need a Walmart Advertising Agency?
                </h2>
                <p className="mb-4">
                  If your products are receiving impressions but generating few sales, or your
                  advertising costs are increasing without a corresponding improvement in revenue, you
                  may need a more structured campaign strategy. A Walmart advertising agency can help
                  address common challenges such as poor product visibility, irrelevant clicks,
                  inefficient bidding, and limited campaign insights.
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
              </div>

              <div id="campaigns" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">
                  Which Walmart Advertising Campaigns Are Right for You?
                </h2>
                <p className="mb-4">
                  The right campaign type depends on whether you want to increase product sales,
                  improve brand awareness, or demonstrate your products to potential customers.
                </p>
                <div className="row">
                  {campaignTypes.map((campaign, index) => (
                    <div key={campaign.title} className="col-lg-12 mb-4">
                      <div className={Style.CardBox}>
                        <div className="mb-2">{campaign.icon}</div>
                        <h5>
                          {index + 1}. {campaign.title}
                        </h5>
                        {campaign.paragraphs.map((paragraph) => (
                          <p key={paragraph.slice(0, 48)} className="mb-2">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="process" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Our Walmart PPC Management Process</h2>
                <p className="mb-4">
                  Effective advertising requires more than launching campaigns and increasing bids. A
                  structured process helps identify opportunities, monitor results, and make
                  improvements as performance data becomes available.
                </p>
                <div className="row">
                  {processSteps.map((step) => (
                    <div key={step.step} className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <div className={Style.ProcessStep}>
                        <span className={Style.ProcessNumber}>{step.step}</span>
                        <h5>{step.title}</h5>
                        <p className="mb-0">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="budget" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">How Much Should You Spend on Walmart Advertising?</h2>
                <p>
                  Your Walmart advertising budget depends on your product category, competition,
                  selling prices, margins, campaign objectives, and available funds.
                </p>
                <p className="mb-3">Before setting a budget, consider:</p>
                <div className="row">
                  {budgetFactors.map((item) => (
                    <div key={item.title} className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <div className="card p-3 h-100 shadow-sm">
                        <h5>{item.title}</h5>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3">
                  Start with a budget that your business can support, monitor results, and scale
                  carefully when the data justifies additional investment.
                </p>
                <p className="mb-0">
                  A sustainable advertising strategy should consider total business profitability
                  rather than judging success by advertising revenue alone.
                </p>
              </div>

              <div id="metrics" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">
                  How Do You Measure Walmart Advertising Performance?
                </h2>
                <p className="mb-4">
                  Understanding the right metrics helps you evaluate whether your campaigns are moving
                  toward your goals.
                </p>
                <div className="row">
                  {metrics.map((item) => (
                    <div key={item.title} className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <div className="card p-3 h-100 shadow-sm">
                        <h5>{item.title}</h5>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3">
                  For example, if you spend $500 on advertising and generate $2,000 in attributed
                  advertising sales, your ROAS is 4x and your ACOS is 25%.
                </p>
                <p className="mb-0">
                  However, these metrics should be interpreted together. A campaign with a strong ROAS
                  may still be unprofitable if product margins are low or other business costs are
                  high. Attribution windows and reporting definitions should also be considered when
                  evaluating results.
                </p>
              </div>

              <div id="why-choose" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">
                  Why Choose Tech2Globe for Walmart Advertising Services?
                </h2>
                <p className="mb-4">
                  Managing marketplace advertising requires ongoing attention to campaign data,
                  product performance, customer search behavior, and spending decisions. Tech2Globe
                  helps businesses approach Walmart advertising with a structured strategy focused on
                  their individual requirements.
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
                <p className="mt-3">
                  Whether you are beginning your Walmart advertising journey or looking to improve
                  existing campaigns, the approach should reflect your current challenges, available
                  budget, and long-term business priorities.
                </p>
                <p className="mb-0">
                  Results are influenced by several factors, including product demand, pricing,
                  competition, inventory availability, listing quality, and advertising investment. No
                  agency can guarantee specific sales or ROAS outcomes.
                </p>
              </div>

              <div id="cta-copy" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Get Started with Walmart Advertising Services</h2>
                <p>
                  Growing your business on Walmart requires more than generating clicks. Your
                  advertising strategy should connect relevant shoppers with suitable products while
                  keeping spending and profitability in focus.
                </p>
                <p>
                  With Tech2Globe&apos;s Walmart advertising services, you can work toward a more
                  organized campaign structure, better performance visibility, and ongoing
                  opportunities for optimization.
                </p>
                <p className="mb-0">
                  Ready to improve your Walmart advertising strategy? Contact Tech2Globe to discuss
                  your goals and identify the next steps for your business.
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
                <h2 className="text-white mb-3">Ready to Improve Your Walmart Advertising Strategy?</h2>
                <p className="text-white mb-4">
                  Contact Tech2Globe to discuss your goals and identify the next steps for your
                  business.
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
