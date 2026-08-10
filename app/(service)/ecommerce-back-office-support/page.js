import Style from "./style.module.css";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import FaqSection from "@/app/components/services/faqs/faqs";
import {
  FaAmazon,
  FaBook,
  FaFileInvoiceDollar,
  FaMoneyCheckAlt,
  FaMoneyBillWave,
  FaChartLine,
  FaBalanceScale,
  FaCalculator,
  FaClipboardCheck,
  FaUsers,
  FaTachometerAlt,
  FaExpandArrowsAlt,
  FaShieldAlt,
  FaUserCheck,
  FaCogs,
  FaLayerGroup,
  FaShoppingBag,
  FaStore,
  FaBuilding,
  FaSyncAlt,
  FaClock,
  FaGlobe,
} from "react-icons/fa";
import { SiShopify, SiWoo, SiWalmart, SiEbay, SiEtsy, SiBigcommerce } from "react-icons/si";

export const metadata = {
  title: "eCommerce Accounting & Bookkeeping Services | Tech2Globe",
  description:
    "Outsource ecommerce accounting and bookkeeping services to get accurate books, cleaner reconciliations, clear cash flow visibility, and audit-ready financial reporting.",
  keywords: [
    "ecommerce accounting services",
    "ecommerce bookkeeping services",
    "marketplace reconciliation",
    "accounts payable management",
    "accounts receivable management",
    "cash flow forecasting",
    "financial reporting services",
    "shopify accounting",
    "amazon bookkeeping",
  ],
  alternates: {
    canonical: "https://stagenew.tech2globe.tech/ecommerce-accounting-bookkeeping-services",
  },
  openGraph: {
    title: "eCommerce Accounting & Bookkeeping Services | Tech2Globe",
    description:
      "Outsource ecommerce accounting and bookkeeping services to get accurate books, cleaner reconciliations, clear cash flow visibility, and audit-ready financial reporting.",
    url: "https://stagenew.tech2globe.tech/ecommerce-accounting-bookkeeping-services",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Accounting & Bookkeeping Services | Tech2Globe",
    description:
      "Outsource ecommerce accounting and bookkeeping services to get accurate books, cleaner reconciliations, clear cash flow visibility, and audit-ready financial reporting.",
  },
};

const pageHeaderData = {
  title: "eCommerce Accounting & Bookkeeping Services",
  description:
    "Build audit-ready books with dedicated ecommerce accountants for bookkeeping, reconciliation, AP/AR, reporting, and cash flow planning across every sales channel.",
  buttonText: "Talk to Our Experts",
  buttonLink: "/contact-us",
  backgroundImage: "/images/skyscraper.jpg",
};

const usefulLinks = [
  { id: 1, name: "Bookkeeping Services", path: "/bookkeeping-services" },
  { id: 2, name: "Accounts Reconciliation", path: "/accounting-services" },
  { id: 3, name: "Accounts Payable Services", path: "/accounts-payable-services" },
  { id: 4, name: "Accounts Receivable Services", path: "/accounts-receivable-services" },
  { id: 5, name: "Financial Reporting Services", path: "/financial-analysis-services" },
  { id: 6, name: "Invoice Processing Services", path: "/invoice-processing-services" },
  { id: 7, name: "Accounting Services", path: "/accounting-services" },
  { id: 8, name: "Payroll Processing Services", path: "/payroll-processing-services" },
];

const sidebarSections = [
  { heading: "eCommerce Accounting Services", links: usefulLinks },
];

const coreServices = [
  {
    icon: <FaBook size={36} color="#f15a29" />,
    title: "eCommerce Bookkeeping",
    path: "/bookkeeping-services",
    description:
      "Maintain clean, up-to-date books across storefronts and marketplaces so your ledgers stay reliable and decision-ready.",
    bullets: [
      "Transaction recording from store, marketplace, and gateway data",
      "COGS, shipping, ads, and operations categorization",
      "Digital receipt and invoice organization",
      "Monthly closing and ledger validation",
      "Books aligned for audit readiness",
    ],
  },
  {
    icon: <FaClipboardCheck size={36} color="#f15a29" />,
    title: "Accounts Reconciliation",
    path: "/accounting-services",
    description:
      "Reconcile settlements, bank records, and internal ledgers to catch discrepancies early and maintain accurate financial statements.",
    bullets: [
      "Bank and credit card reconciliation",
      "Payment gateway and marketplace payout matching",
      "Refund, return, and chargeback verification",
      "Fee and holdback validation",
      "Exception tracking and correction support",
    ],
  },
  {
    icon: <FaMoneyBillWave size={36} color="#f15a29" />,
    title: "Accounts Payable (AP) Management",
    path: "/accounts-payable-services",
    description:
      "Streamline vendor payment operations while keeping control over due dates, approvals, and spend visibility.",
    bullets: [
      "Vendor invoice capture and validation",
      "Payment scheduling and due date monitoring",
      "Purchase and expense posting",
      "Vendor ledger maintenance",
      "Outstanding payable reporting",
    ],
  },
  {
    icon: <FaMoneyCheckAlt size={36} color="#f15a29" />,
    title: "Accounts Receivable (AR) Management",
    path: "/accounts-receivable-services",
    description:
      "Improve receivable visibility and cash realization with structured billing, tracking, and follow-up processes.",
    bullets: [
      "Customer and wholesale invoice management",
      "Cross-channel payment tracking",
      "Aging report preparation",
      "Overdue payment follow-up support",
      "Credit notes and adjustment handling",
    ],
  },
  {
    icon: <FaChartLine size={36} color="#f15a29" />,
    title: "Financial Reporting",
    path: "/financial-analysis-services",
    description:
      "Generate structured financial reports that clearly show profitability, cost movement, and channel performance.",
    bullets: [
      "P&L, balance sheet, and cash flow reporting",
      "Channel-wise and region-wise financial views",
      "Comparative month-over-month performance analysis",
      "Investor and lender-ready report formatting",
      "Defined reporting cadence and review",
    ],
  },
  {
    icon: <FaBalanceScale size={36} color="#f15a29" />,
    title: "Marketplace Payment Analysis",
    path: "/accounting-services",
    description:
      "Translate complex payout statements into usable profitability insights so you can see real net margin by channel.",
    bullets: [
      "Settlement and deduction analysis",
      "Commission and advertising cost impact tracking",
      "Chargeback and return impact identification",
      "Marketplace-wise profitability snapshots",
      "Budget planning support based on payout patterns",
    ],
  },
  {
    icon: <FaCalculator size={36} color="#f15a29" />,
    title: "Cash Flow Planning & Forecasting",
    path: "/financial-analysis-services",
    description:
      "Forecast inflows and outflows around sales cycles, inventory spend, and marketplace settlements to avoid liquidity stress.",
    bullets: [
      "Cash movement mapping by cycle",
      "Peak season and campaign cash planning",
      "Working capital requirement visibility",
      "Inventory and marketing spend projections",
      "Rolling forecast updates",
    ],
  },
  {
    icon: <FaFileInvoiceDollar size={36} color="#f15a29" />,
    title: "CFO Advisory Support",
    path: "/invoice-processing-services",
    description:
      "Access senior financial guidance for strategy, budgeting, and profitability without building a full in-house CFO function.",
    bullets: [
      "Financial planning aligned to growth goals",
      "Margin and cost-structure analysis",
      "KPI and executive reporting support",
      "Budget review and optimization",
      "Investment and expansion advisory",
    ],
  },
];

const benefits = [
  { icon: <FaTachometerAlt size={28} />, title: "Better Margin Visibility", text: "See true net profitability after fees, ads, returns, and fulfillment costs." },
  { icon: <FaClipboardCheck size={28} />, title: "Audit-Ready Books", text: "Maintain reconciled, structured records prepared for review throughout the year." },
  { icon: <FaClock size={28} />, title: "Faster Month-End Close", text: "Use documented workflows to shorten closing cycles and reduce backlog." },
  { icon: <FaUsers size={28} />, title: "Dedicated eCommerce Accountants", text: "Work with specialists experienced in marketplace-heavy accounting environments." },
  { icon: <FaExpandArrowsAlt size={28} />, title: "Scalable Financial Operations", text: "Handle growth seasons and channel expansion without overloading your internal team." },
  { icon: <FaCogs size={28} />, title: "Controlled Reconciliation Process", text: "Track and resolve transaction-level mismatches before they impact reporting." },
  { icon: <FaGlobe size={28} />, title: "Omnichannel Coverage", text: "Consolidate data across Shopify, Amazon, Walmart, eBay, and more." },
  { icon: <FaBalanceScale size={28} />, title: "Actionable Financial Intelligence", text: "Use reporting and forecasts for informed planning and better cash decisions." },
];

const industries = [
  { icon: <FaShoppingBag size={32} />, title: "D2C Brands", text: "Owned storefronts with high transaction velocity and tight margin monitoring needs." },
  { icon: <FaStore size={32} />, title: "Marketplace Sellers", text: "Amazon, Walmart, eBay, and multichannel sellers with complex payout structures." },
  { icon: <FaLayerGroup size={32} />, title: "Omnichannel Retailers", text: "Businesses selling via marketplaces, websites, and offline channels." },
  { icon: <FaBuilding size={32} />, title: "Wholesale & B2B", text: "Bulk invoicing, longer payment cycles, and receivable controls." },
  { icon: <FaSyncAlt size={32} />, title: "Subscription Businesses", text: "Recurring revenue models requiring precise deferred and periodic accounting." },
  { icon: <FaShoppingBag size={32} />, title: "Dropshipping Operations", text: "Supplier-driven cost models that require frequent reconciliation and tracking." },
  { icon: <FaUsers size={32} />, title: "CPA & Accounting Firms", text: "Partner firms needing dedicated ecommerce accounting execution support." },
  { icon: <FaGlobe size={32} />, title: "eCommerce Aggregators", text: "Portfolio operators requiring brand-level and consolidated financial visibility." },
];

const platforms = [
  { name: "Shopify", icon: <SiShopify size={40} /> },
  { name: "Amazon", icon: <FaAmazon size={40} /> },
  { name: "WooCommerce", icon: <SiWoo size={40} /> },
  { name: "Magento", icon: <FaShoppingBag size={40} /> },
  { name: "Walmart", icon: <SiWalmart size={40} /> },
  { name: "eBay", icon: <SiEbay size={40} /> },
  { name: "Etsy", icon: <SiEtsy size={40} /> },
  { name: "BigCommerce", icon: <SiBigcommerce size={40} /> },
];

const processSteps = [
  { step: 1, title: "Discovery & Financial Audit", text: "Review your channels, chart of accounts, and current reconciliation workflow." },
  { step: 2, title: "Platform & Data Setup", text: "Connect storefront, marketplace, and banking data with secure accounting access." },
  { step: 3, title: "SOP Alignment", text: "Define treatment rules for fees, payouts, returns, chargebacks, and adjustments." },
  { step: 4, title: "Trial Reconciliation", text: "Run a pilot close cycle and resolve historical mismatches before full rollout." },
  { step: 5, title: "Steady-State Bookkeeping", text: "Manage daily entries, AP/AR operations, and periodic reconciliations." },
  { step: 6, title: "Reporting & Forecasting", text: "Deliver scheduled financial reports and rolling cash flow projections." },
  { step: 7, title: "Continuous Improvement", text: "Refine processes as channel mix, volumes, and reporting needs evolve." },
];

const whyChoose = [
  { icon: <FaUserCheck size={28} />, title: "Specialized eCommerce Accountants", text: "Teams understand channel-specific accounting realities, not generic bookkeeping." },
  { icon: <FaShieldAlt size={28} />, title: "Secure Financial Data Handling", text: "Controlled access, confidentiality protocols, and secure operational practices." },
  { icon: <FaUsers size={28} />, title: "Dedicated Point of Contact", text: "Get consistent communication and priority-based delivery management." },
  { icon: <FaClipboardCheck size={28} />, title: "Quality-Controlled Reporting", text: "Reconciliation and report checks are built into recurring delivery cycles." },
  { icon: <FaExpandArrowsAlt size={28} />, title: "Flexible Engagement Models", text: "Hire specific roles or a complete outsourced accounting pod as needed." },
  { icon: <FaCogs size={28} />, title: "Tool Compatibility", text: "Work within your preferred systems and integrations for smooth handover." },
  { icon: <FaClock size={28} />, title: "Predictable Timelines", text: "Defined schedules for close, reconciliation, and management reporting." },
  { icon: <FaLayerGroup size={28} />, title: "End-to-End Coverage", text: "Bookkeeping, AP/AR, reporting, and planning through one partner." },
];

const faqs = [
  {
    id: "One",
    question: "What is included in your ecommerce accounting and bookkeeping services?",
    answer:
      "Our services cover day-to-day bookkeeping, account reconciliations, AP/AR management, marketplace settlement analysis, financial reporting, and cash flow planning. You can start with one function or choose end-to-end coverage.",
  },
  {
    id: "Two",
    question: "Can you support businesses selling on multiple channels?",
    answer:
      "Yes. We consolidate financial data from marketplaces, storefronts, payment processors, and banking feeds while preserving channel-wise visibility for reporting and analysis.",
  },
  {
    id: "Three",
    question: "How do you handle payout and reconciliation mismatches?",
    answer:
      "We reconcile settlement statements with your books and bank records at transaction level, identify mismatches such as missing payouts or fee discrepancies, and resolve them before close cycles.",
  },
  {
    id: "Four",
    question: "Do you provide dedicated resources?",
    answer:
      "Yes. Depending on your requirement, we assign dedicated bookkeepers, accountants, or a managed team with a single point of contact for day-to-day coordination.",
  },
  {
    id: "Five",
    question: "Can you help with cash flow planning and strategic reporting?",
    answer:
      "Yes. Along with bookkeeping, we provide cash flow projections, profitability analysis, and management reporting to support budgeting, growth decisions, and capital planning.",
  },
];

const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Their team gave us a clear view of actual margins after fees, refunds, and ads. Month-end closes are now faster and far more reliable.",
    name: "D2C Brand CFO – USA",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Marketplace reconciliations used to consume our internal bandwidth. With Tech2Globe, payout mismatches are resolved quickly and reports are decision-ready.",
    name: "Marketplace Seller – UK",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We outsourced AP, AR, and bookkeeping to one team and finally gained control over cash planning across channels and seasons.",
    name: "Omnichannel Retailer – Australia",
  },
];

export default function EcommerceBackOfficeSupport() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "eCommerce Accounting & Bookkeeping Services",
        description:
          "End-to-end ecommerce accounting and bookkeeping support including reconciliation, AP/AR management, reporting, and cash flow planning.",
        provider: {
          "@type": "Organization",
          name: "Tech2Globe Web Solutions LLP",
          url: "https://www.tech2globe.com",
        },
        url: "https://stagenew.tech2globe.tech/ecommerce-accounting-bookkeeping-services",
        serviceType: "eCommerce Accounting and Bookkeeping",
        areaServed: "Worldwide",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "eCommerce Accounting Services",
          itemListElement: usefulLinks.map((link) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: link.name,
              url: `https://stagenew.tech2globe.tech${link.path}`,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer.replace(/<[^>]*>/g, "").trim(),
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
      <Breadcrumb parentName="Services" pageName="eCommerce Accounting & Bookkeeping Services" />
      <BrandSection />

      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner
                pageName=""
                imageSrc="/images/ecommerce-accounting-bookkeeping-services.webp"
              />

              <div id="overview" className={Style.ContentDiv}>
                <h2>eCommerce Accounting Support Built for Multi-Channel Growth</h2>
                <p>
                  Accurate ecommerce accounting goes beyond recording gross sales and routine expenses.
                  Every channel has unique fee structures, settlement timelines, deductions, and
                  reconciliation rules that directly affect your real profitability.
                </p>
                <p>
                  Tech2Globe delivers end-to-end <strong>ecommerce accounting and bookkeeping services</strong> that
                  consolidate your marketplace and storefront transactions into clean, verified books.
                  We track platform fees, payout deductions, returns, chargebacks, and operational costs
                  so your reports reflect true net margins.
                </p>
                <p>
                  Whether you sell on Shopify, Amazon, Walmart, eBay, or multiple channels, our team
                  follows structured workflows to keep your records audit-ready and financially actionable.
                </p>
              </div>

              <div id="services" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Our eCommerce Accounting & Bookkeeping Services</h2>
                <p className="mb-4">
                  Full-spectrum accounting support for online businesses, available as modular services or
                  a unified managed function.
                </p>
                <div className="row">
                  {coreServices.map((service) => (
                    <div key={service.title} className="col-lg-6 col-md-6 col-sm-12 mb-4">
                      <div className={Style.CardBox}>
                        <div className="mb-2">{service.icon}</div>
                        <h5>
                          <Link href={service.path}>{service.title}</Link>
                        </h5>
                        <p>{service.description}</p>
                        <ul className="ps-3 mb-0">
                          {service.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="benefits" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Why Brands Outsource eCommerce Accounting</h2>
                <p className="mb-4">
                  Outsourcing helps finance teams improve control, reporting quality, and scalability
                  without expanding in-house overhead.
                </p>
                <div className="row">
                  {benefits.map((item) => (
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

              <div id="industries" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Industries We Support</h2>
                <p className="mb-4">
                  Outsourced accounting and bookkeeping support tailored to diverse ecommerce operating models.
                </p>
                <div className="row">
                  {industries.map((item) => (
                    <div key={item.title} className="col-lg-3 col-md-4 col-sm-6 mb-3">
                      <div className={Style.IconBox}>
                        {item.icon}
                        <h5 className="mt-2">{item.title}</h5>
                        <p className="mb-0 small">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="platforms" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Platforms We Work With</h2>
                <p className="mb-4">
                  We support accounting workflows across major ecommerce ecosystems and marketplace channels.
                </p>
                <div className="row">
                  {platforms.map((platform) => (
                    <div key={platform.name} className="col-lg-3 col-md-4 col-sm-6 mb-3">
                      <div className={Style.IconBox} title={platform.name}>
                        {platform.icon}
                        <h5 className="mt-2">{platform.name}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="process" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Our Process</h2>
                <p className="mb-4">
                  A structured onboarding-to-optimization framework designed for financial accuracy and consistency.
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
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Why Choose Tech2Globe</h2>
                <p className="mb-4">
                  Ecommerce brands trust us for accounting execution that combines channel expertise, process rigor, and dependable delivery.
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
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Explore Our Accounting Services</h2>
                <p className="mb-3">
                  Explore related services under ecommerce accounting and finance operations.
                </p>
                <div className="row">
                  {usefulLinks.map((link) => (
                    <div key={link.id} className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <div className="card p-3 shadow-sm h-100">
                        <Link href={link.path} className="text-decoration-none">
                          {link.name}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div id="contact" className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className={`${Style.CtaSection} text-center mt-5 mb-3 p-5 rounded-3`}>
                <h2 className="text-white mb-3">Ready to Strengthen Your eCommerce Finance Function?</h2>
                <p className="text-white mb-4">
                  Partner with Tech2Globe for bookkeeping, reconciliation, AP/AR, and financial reporting
                  managed by a dedicated ecommerce accounting team.
                </p>
                <div className={`${Style.BtnBlock} d-flex justify-content-center`}>
                  <Link href="/contact-us" className="button-red">
                    Talk to Our Experts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="faqs">
        <FaqSection faqs={faqs} />
      </div>

      <div className="EmailMarketingTestimonials">
        <ClientSlider testimonials={testimonials} />
      </div>
    </>
  );
}
