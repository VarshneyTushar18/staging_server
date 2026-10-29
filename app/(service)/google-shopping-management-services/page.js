import Style from "./style.module.css";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";
import FaqSection from "@/app/components/services/faqs/faqs";
import {
  FaStore,
  FaDatabase,
  FaBullhorn,
  FaSearch,
  FaDollarSign,
  FaChartLine,
  FaSyncAlt,
  FaCogs,
  FaClipboardCheck,
  FaExpandArrowsAlt,
  FaTachometerAlt,
  FaCalendarCheck,
} from "react-icons/fa";

export const metadata = {
  title: "Google Shopping Management Services | Tech2Globe",
  description:
    "Grow your online sales with Google Shopping Management Services from Tech2Globe. Optimize product feeds, manage campaigns, and improve ad performance.",
  keywords: [
    "Google Shopping Management Services",
    "Google Shopping Ads Agency",
    "Shopping Ads Services",
    "Shopping Ads Agency",
    "Shopping Ads Company",
  ],
  alternates: {
    canonical: "https://stagenew.tech2globe.tech/google-shopping-management-services",
  },
  openGraph: {
    title: "Google Shopping Management Services | Tech2Globe",
    description:
      "Grow your online sales with Google Shopping Management Services from Tech2Globe. Optimize product feeds, manage campaigns, and improve ad performance.",
    url: "https://stagenew.tech2globe.tech/google-shopping-management-services",
    siteName: "Tech2Globe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Shopping Management Services | Tech2Globe",
    description:
      "Grow your online sales with Google Shopping Management Services from Tech2Globe. Optimize product feeds, manage campaigns, and improve ad performance.",
  },
};

const pageHeaderData = {
  title: "Google Shopping Management Services",
  description:
    "Plan, launch, manage, and optimize product advertising campaigns with Merchant Center setup, feed optimization, and performance reporting.",
  buttonText: "Book Your Consultation",
  buttonLink: "/contact-us",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true,
};

const resources = [
  { id: 1, name: "Case Studies", path: "/case-studies" },
  { id: 2, name: "Clients", path: "/clients" },
  { id: 3, name: "Testimonial", path: "/testimonial" },
];

const usefulLinks = [
  { id: 4, name: "Google Ads Management", path: "/google-ads-management" },
  { id: 5, name: "Performance Marketing Packages", path: "/performance-marketing-packages" },
  { id: 6, name: "SEO Services", path: "/seo-services" },
  { id: 7, name: "eCommerce SEO Services", path: "/ecommerce-seo-services" },
  { id: 8, name: "Amazon Advertising", path: "/amazon-advertising-services" },
  { id: 9, name: "Walmart Advertising", path: "/walmart-advertisement" },
];

const sidebarSections = [
  { heading: "Resources", links: resources },
  { heading: "Useful Links", links: usefulLinks },
];

const whatHelps = [
  "Improve the quality and accuracy of your product feed.",
  "Increase opportunities for relevant product visibility.",
  "Reach shoppers with stronger purchase intent.",
  "Organize campaigns around products and business priorities.",
  "Monitor advertising costs and campaign performance.",
  "Identify opportunities to improve conversions and return on ad spend.",
];

const coreServices = [
  {
    icon: <FaStore size={36} color="#234268" />,
    title: "Google Merchant Center Setup and Optimization",
    intro:
      "Google Merchant Center helps businesses upload and manage the product information used across Google's shopping experiences. If your account contains errors, missing attributes, or inaccurate product details, your products may face eligibility issues or fail to display as expected.",
    body: ["Our team helps you establish and maintain a reliable Merchant Center setup."],
    bullets: [
      "Merchant Center account setup and configuration.",
      "Product data source and feed integration.",
      "Website and account requirement checks.",
      "Product approval and disapproval monitoring.",
      "Troubleshooting feed errors and warnings.",
      "Review of shipping, tax, and return information where applicable.",
    ],
    closing:
      "We help identify issues that may affect product eligibility and work toward maintaining accurate product information in line with Google's requirements.",
  },
  {
    icon: <FaDatabase size={36} color="#234268" />,
    title: "Product Feed Optimization",
    intro:
      "Your product feed provides Google with essential information about the items you sell. Incomplete or unclear product data can make it harder for Google to match your products with relevant searches.",
    body: [
      "Our Google Shopping management team reviews your feed to improve product information and support better campaign organization.",
    ],
    bullets: [
      "Product titles: Clear, descriptive titles containing relevant product details.",
      "Product descriptions: Accurate information about features, specifications, and uses.",
      "Product images: Appropriate images that represent your products clearly.",
      "Product categories: Relevant categorization based on Google's product taxonomy.",
      "Product attributes: Correct information such as brand, GTIN, size, color, and availability, where applicable.",
      "Custom labels: Product segmentation based on factors such as margin, seasonality, price, or performance.",
    ],
    closing:
      "A well-maintained feed can help Google understand your products and support more relevant product exposure. Results also depend on competition, demand, pricing, landing page quality, and other factors.",
  },
  {
    icon: <FaBullhorn size={36} color="#234268" />,
    title: "Google Shopping Campaign Setup and Management",
    intro:
      "Launching a campaign without a clear structure can make it difficult to understand which products are generating sales and where your budget is going.",
    body: [
      "We plan and manage Shopping advertising campaigns based on your catalog, advertising goals, and available budget. Depending on your requirements, suitable options may include Performance Max campaigns and standard Shopping campaigns where available.",
    ],
    bullets: [
      "Campaign planning and setup.",
      "Product grouping and segmentation.",
      "Budget allocation and monitoring.",
      "Bidding strategy selection.",
      "Performance Max asset and audience signal planning, where relevant.",
      "Campaign adjustments based on available performance data.",
    ],
    closing:
      "We aim to create a campaign structure that makes it easier to evaluate results, identify high-potential products, and allocate resources according to your business priorities.",
  },
  {
    icon: <FaSearch size={36} color="#234268" />,
    title: "Google Shopping Keyword and Product Targeting Strategy",
    intro:
      "Although Shopping ads rely heavily on product feed information rather than conventional keyword targeting in the same way as Search campaigns, understanding how customers search for products remains important.",
    body: [
      "Our team researches relevant product search behavior, reviews available search term insights, and identifies opportunities to improve product relevance.",
      "This may involve optimizing product titles and descriptions, reviewing search term reports where available, and coordinating Shopping campaigns with relevant Search campaigns.",
      "We also assess product categories, brand information, and product attributes to help align your advertising with the right audience.",
    ],
    bullets: [],
    closing:
      "The goal is to attract shoppers who are more likely to find your products useful, rather than spending your budget on irrelevant clicks.",
  },
  {
    icon: <FaDollarSign size={36} color="#234268" />,
    title: "Google Shopping Budget and Bidding Optimization",
    intro:
      "Every eCommerce business has different profit margins, average order values, and advertising budgets. Spending more does not automatically mean generating more profitable sales.",
    body: [
      "Our Google Shopping Management Services include budget monitoring and bidding optimization to help you make informed decisions about campaign spending.",
    ],
    bullets: [
      "Advertising spend and cost per conversion.",
      "Conversion value and return on ad spend (ROAS).",
      "Product-level performance.",
      "Budget utilization and campaign limitations.",
      "Conversion tracking quality.",
      "Product margins and business priorities, when data is available.",
    ],
    closing:
      "Based on these insights, we can recommend budget adjustments, review bidding strategies, and identify products that may need additional attention. Our approach focuses on balancing growth opportunities with cost efficiency. Actual results depend on your market, products, website experience, and campaign data.",
  },
  {
    icon: <FaChartLine size={36} color="#234268" />,
    title: "Conversion Tracking and Performance Analysis",
    intro:
      "Clicks and impressions show how people interact with your ads, but they do not tell the complete story. To evaluate campaign effectiveness, you need reliable conversion tracking and meaningful performance reports.",
    body: [
      "We help review conversion measurement and analyze relevant Google Ads and analytics data, depending on your existing setup and access.",
    ],
    bullets: [
      "Impressions and clicks.",
      "Click-through rate (CTR).",
      "Average cost per click (CPC).",
      "Conversions and conversion rate.",
      "Cost per acquisition (CPA).",
      "Conversion value and ROAS.",
    ],
    closing:
      "These metrics help you understand whether campaigns are attracting relevant shoppers and contributing to your business objectives. We also look for tracking inconsistencies that could affect decision-making. Accurate measurement is essential for evaluating campaign performance and identifying meaningful optimization opportunities.",
  },
  {
    icon: <FaSyncAlt size={36} color="#234268" />,
    title: "Ongoing Campaign Optimization and Reporting",
    intro:
      "Google Shopping campaigns require regular monitoring because product demand, competitor pricing, seasonal trends, and inventory availability can change over time.",
    body: [
      "Our team reviews campaign performance and recommends adjustments based on the information available.",
      "Ongoing support may include product feed checks, campaign performance reviews, budget monitoring, bidding adjustments, and reporting.",
      "You receive insights into what is performing well, which areas require attention, and what actions may improve future results.",
    ],
    bullets: [],
    closing:
      "Our reporting approach helps you understand the impact of advertising activities without relying on clicks or impressions alone.",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Account Audit",
    text: "We review your Google Ads account, Merchant Center setup, product feed, conversion tracking, and existing campaign performance.",
  },
  {
    step: 2,
    title: "Strategy Development",
    text: "We identify opportunities based on your product catalog, target audience, budget, competition, and business objectives.",
  },
  {
    step: 3,
    title: "Setup and Implementation",
    text: "We configure the agreed campaign structure, address product feed issues, and implement relevant optimization recommendations.",
  },
  {
    step: 4,
    title: "Monitoring and Optimization",
    text: "We monitor performance data and adjust campaign elements where appropriate to improve efficiency and identify growth opportunities.",
  },
  {
    step: 5,
    title: "Reporting and Recommendations",
    text: "We provide performance insights and practical next steps to support ongoing campaign improvement.",
  },
];

const whyChoose = [
  {
    icon: <FaCogs size={28} />,
    title: "Customized strategies",
    text: "Campaign plans based on your catalog, budget, and objectives.",
  },
  {
    icon: <FaDatabase size={28} />,
    title: "Product feed expertise",
    text: "Attention to data accuracy, feed quality, and product eligibility.",
  },
  {
    icon: <FaTachometerAlt size={28} />,
    title: "Performance-focused management",
    text: "Decisions guided by available campaign and conversion data.",
  },
  {
    icon: <FaDollarSign size={28} />,
    title: "Budget-conscious optimization",
    text: "Ongoing evaluation of spending and potential efficiency improvements.",
  },
  {
    icon: <FaClipboardCheck size={28} />,
    title: "Transparent reporting",
    text: "Clear insights into campaign performance and recommended actions.",
  },
  {
    icon: <FaExpandArrowsAlt size={28} />,
    title: "Scalable support",
    text: "Management solutions that can adapt as your product catalog and advertising needs evolve.",
  },
];

const faqs = [
  {
    id: "One",
    question: "What are Google Shopping Ads?",
    answer:
      "Google Shopping Ads are product-based advertisements that display product images, titles, prices, and store information on Google. They help ecommerce businesses showcase their products to potential customers searching for relevant items.",
  },
  {
    id: "Two",
    question: "What services does a Google Shopping Ads agency provide?",
    answer:
      "A Google Shopping Ads agency can help with campaign setup, Google Merchant Center management, product feed optimization, bidding strategies, conversion tracking, budget management, and campaign performance reporting.",
  },
  {
    id: "Three",
    question: "How much do Google Shopping Ads management services cost?",
    answer:
      "The cost of Google Shopping Ads management services depends on factors such as campaign complexity, product catalogue size, advertising budget, and the level of ongoing optimization required. Businesses should request a customized quote based on their requirements.",
  },
  {
    id: "Four",
    question: "How can product feed optimization improve Google Shopping Ads performance?",
    answer:
      "Product feed optimization improves the quality and accuracy of product information, including titles, descriptions, images, pricing, and product categories. A well-maintained feed can help Google understand products and match them with relevant shopping searches.",
  },
  {
    id: "Five",
    question: "How long does it take to see results from Google Shopping Ads?",
    answer:
      "Initial campaign data may become available soon after ads begin serving, but meaningful performance evaluation typically requires sufficient traffic and conversion data. Results depend on competition, product pricing, website experience, budget, and campaign setup.",
  },
  {
    id: "Six",
    question: "How can I improve the ROAS of my Google Shopping campaigns?",
    answer:
      "You can work toward improving return on ad spend (ROAS) by optimizing product feeds, reviewing product-level performance, improving conversion tracking, adjusting bids and budgets, and prioritizing products based on profitability and sales data. Results vary by business and market conditions.",
  },
];

const portfolioClients = [
  {
    initials: "MS",
    gradient: "#0b2e58",
    client: "MotoShop France",
    country: "France",
    project: "Shopping Ads — Automotive Parts & Accessories",
    desc: "Audited Merchant Center, fixed feed errors, rebuilt campaign structure, and optimized bidding, transforming Shopping Ads into highest-performing paid channel.",
    category: "Shopping Ads",
    result: "ROAS increased to 6.8x in 60 days",
  },
  {
    initials: "GC",
    gradient: "#0b2e58",
    client: "GlowCart Beauty",
    country: "Singapore",
    project: "Shopping Ads — Beauty & Personal Care",
    desc: "Built Shopping Ads from scratch with optimized feed, structured campaigns, and bidding strategy, achieving strong ROAS and rapid paid channel growth.",
    category: "Shopping Ads",
    result: "5.1x ROAS in first 30 days",
  },
  {
    initials: "HC",
    gradient: "#0b2e58",
    client: "HomeCraft Switzerland",
    country: "CH",
    project: "Shopping Ads — Home Improvement & Tools",
    desc: "Rebuilt campaign structure, improved feed quality, expanded negatives, and optimized bidding to significantly boost ROAS and reduce wasted ad spend.",
    category: "Shopping Ads",
    result: "ROAS improved to 7.4x",
  },
  {
    initials: "FF",
    gradient: "#0b2e58",
    client: "FreshFarm Organics",
    country: "NZ",
    project: "Shopping Ads — Organic Food & Groceries",
    desc: "Launched optimized Shopping Ads with clean product feed, structured campaigns, and seasonal bidding strategies driving strong ROAS and new customers.",
    category: "Shopping Ads",
    result: "4.9x ROAS in 45 days",
  },
  {
    initials: "PW",
    gradient: "#0b2e58",
    client: "PetWorld UK",
    country: "UK",
    project: "Shopping Ads — Pet Supplies",
    desc: "Restructured Shopping campaigns, optimized product feed, and implemented smart bidding, significantly improving ROAS and scaling revenue efficiently.",
    category: "Shopping Ads",
    result: "ROAS improved to 5.2x",
  },
];

const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe's shopping ads team transformed our Google Shopping performance. They restructured our product feed, fixed attribute errors, and implemented smart bidding strategies that reduced our cost-per-click by 42% while increasing our conversion rate. Our ROAS improved from 2.1x to 5.4x within 90 days. An exceptional team.",
    name: "Oliver Kent | Director, PetWorld UK",
    location: "United Kingdom",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We had been running Shopping Ads in-house with poor results. Tech2Globe took over and immediately identified critical feed optimization opportunities we had missed. Their Performance Max campaign setup and daily bid adjustments generated a 67% increase in shopping revenue in the first month. I wish we had partnered with them sooner.",
    name: "Lucas Bernard | Head of Acquisition, MotoShop",
    location: "France",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe helped us launch and scale Google Shopping Ads for our beauty ecommerce store. Their product title and description optimization significantly improved our impression share, and their segmented campaign structure allowed precise budget control. We went from near-zero Shopping visibility to becoming a top advertiser in our niche within 4 months.",
    name: "Priya Kapoor | Founder, GlowCart",
    location: "Singapore",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "The Tech2Globe shopping ads team is thorough, data-driven, and results-oriented. They audited our entire campaign account, rebuilt the structure, and implemented custom labels to prioritize our best-margin products. Our overall shopping campaign ROAS went from 3x to 7x, and we significantly reduced wasted spend on low-converting SKUs.",
    name: "Thomas Huber | Digital Commerce Lead, HomeCraft",
    location: "Switzerland",
  },
  {
    id: 5,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We were intimidated by the complexity of Shopping Ads but Tech2Globe made the whole process seamless. Their feed setup, merchant center troubleshooting, and campaign optimization were all handled expertly. Within 60 days our Shopping Ads were our highest-performing paid channel, delivering a consistent 4.9x return. Couldn't be happier.",
    name: "Sarah McLean | Ecommerce Director, FreshFarm",
    location: "New Zealand",
  },
];

export default function ShoppingAdsServices() {
  const pageUrl = "https://www.tech2globe.com/google-shopping-management-services";

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Google Shopping Management Services",
        url: pageUrl,
        serviceType: "Google Shopping Ads Management",
        description:
          "Google Shopping management services for ecommerce businesses, including campaign setup, Google Merchant Center management, product feed optimization, bidding strategies, conversion tracking, budget management, and campaign performance reporting.",
        provider: {
          "@type": "Organization",
          name: "Tech2Globe",
          url: "https://www.tech2globe.com/",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Google Shopping Management Services" />
      <BrandSection />

      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner
                pageName="Google Shopping Management Services"
                imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg"
              />

              <div id="overview" className={Style.ContentDiv}>
                <h2 className="text-danger">Google Shopping Management Services to Grow Your eCommerce Sales</h2>
                <p>
                  Running an eCommerce business requires more than having great products and a
                  well-designed website. Your products also need to reach shoppers who are actively
                  searching for what you sell. Google Shopping Ads can help you showcase your products
                  across Google, allowing potential customers to view product images, prices, and other
                  relevant details before visiting your website.
                </p>
                <p>
                  However, managing Shopping campaigns can become complicated when you have hundreds of
                  products, changing inventory, competing sellers, and a limited advertising budget.
                  Poor product feed quality, irrelevant traffic, and inefficient bidding can make it
                  difficult to achieve consistent results.
                </p>
                <p>
                  At Tech2Globe, our Google Shopping Management Services help businesses plan, launch,
                  manage, and optimize product advertising campaigns. From Google Merchant Center setup
                  and product feed optimization to campaign management and performance reporting, we
                  focus on helping your business reach relevant shoppers and make better use of its
                  advertising budget.
                </p>
                <p className="mb-0">
                  Whether you are launching your first Shopping campaign or looking to improve an
                  existing account, our services are tailored to your product catalog, business goals,
                  and growth opportunities.
                </p>
              </div>

              <div id="what-are" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">What Are Google Shopping Management Services?</h2>
                <p>
                  Google Shopping Management Services involve managing the activities required to
                  advertise products through Google&apos;s shopping advertising solutions. These
                  services connect your product data with advertising campaigns so potential customers
                  can discover relevant products while searching online.
                </p>
                <p>
                  Unlike traditional text ads, Shopping ads can display product images, titles, prices,
                  store information, and other details that help shoppers compare options.
                </p>
                <p className="mb-2">Professional management can help you:</p>
                <ul className="ps-3">
                  {whatHelps.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mb-0">
                  The objective is to build a structured advertising strategy that supports your
                  eCommerce goals rather than simply generating clicks.
                </p>
              </div>

              <div id="services" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Our Google Shopping Ads Management Services</h2>
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

              <div id="process" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">
                  How Our Google Shopping Management Process Works
                </h2>
                <p className="mb-4">
                  We follow a structured process to build and improve campaigns according to your
                  business requirements.
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

              <div id="why-choose" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">
                  Why Choose Tech2Globe for Google Shopping Management?
                </h2>
                <p className="mb-4">
                  Choosing an advertising partner should be about more than launching campaigns. You
                  need a team that understands product data, campaign performance, and the commercial
                  goals behind your advertising investment. Tech2Globe offers tailored Google Shopping
                  management support focused on your business requirements.
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
                  Our goal is to help you make better-informed advertising decisions and build a more
                  organized approach to product promotion on Google.
                </p>
              </div>

              <div id="cta-copy" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">
                  Get Started with Google Shopping Management Services
                </h2>
                <p>
                  Your products deserve to reach shoppers who are actively looking for what you offer.
                  However, successful Shopping campaigns require accurate product information,
                  appropriate campaign structures, careful budget management, and regular performance
                  analysis.
                </p>
                <p>
                  With Tech2Globe&apos;s Google Shopping Management Services, you can get support
                  across the essential stages of product advertising, from Merchant Center setup and
                  feed optimization to campaign management and performance reporting.
                </p>
                <p>
                  Whether you want to launch new campaigns, improve existing performance, or scale your
                  eCommerce advertising, our team can help develop a strategy aligned with your
                  business needs.
                </p>
                <p className="mb-0">
                  Ready to improve your Google Shopping campaigns? Contact Tech2Globe to discuss your
                  goals and explore a tailored management plan for your eCommerce business.
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
                <h2 className="text-white mb-3">Ready to Improve Your Google Shopping Campaigns?</h2>
                <p className="text-white mb-4">
                  Contact Tech2Globe to discuss your goals and explore a tailored management plan for
                  your eCommerce business.
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
