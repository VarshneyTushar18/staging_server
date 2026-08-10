import ShopifyLandingPage from "@/app/components/shopify-landing/ShopifyLandingPage";
import "./shopify-landing.css";

const PAGE_URL = "https://tech2globe.com.au/shopify-agency-sydney";

export const metadata = {
  title:
    "Shopify Development Agency Sydney | Custom Shopify & Shopify Plus Experts | Tech2Globe",
  description:
    "Tech2Globe designs, builds and scales Shopify and Shopify Plus stores for growing brands — custom themes, migrations, SEO, CRO and free Shopify store audits. Local AEST support.",
  keywords: [
    "Shopify Development Agency",
    "Shopify Developer",
    "Shopify Plus Partner",
    "Shopify Website Design",
    "Shopify Store Migration",
    "Shopify App Development",
    "Shopify SEO",
    "Custom Shopify Theme Development",
    "Shopify Ecommerce Agency",
    "Shopify Conversion Rate Optimisation",
    "Headless Shopify Development",
    "Shopify Plus Development",
    "AfterPay Shopify Integration",
    "Ecommerce Website Development",
    "Shopify Store Audit",
    "Shopify Support",
    "Shopify Agency Sydney",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title:
      "Shopify Development Agency Sydney | Tech2Globe — Stores That Actually Sell",
    description:
      "Design, build and scale Shopify & Shopify Plus stores. Book a free Shopify store audit from Tech2Globe.",
    url: PAGE_URL,
    siteName: "Tech2Globe",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Agency Sydney | Tech2Globe",
    description:
      "Custom Shopify development, Plus solutions, migrations, SEO & CRO. Book a free store audit.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Shopify Development Agency Sydney | Tech2Globe",
      description:
        "Shopify development agency for custom themes, Shopify Plus, migrations, SEO, CRO and ongoing support — local AEST team.",
      isPartOf: {
        "@type": "WebSite",
        name: "Tech2Globe",
        url: "https://tech2globe.com.au",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${PAGE_URL}#service`,
      name: "Tech2Globe Shopify Development Agency",
      url: PAGE_URL,
      image: "https://tech2globe.com.au/images/tech2globe-logo.png",
      description:
        "Shopify development agency specializing in custom Shopify & Shopify Plus theme development, store migration, app integration, SEO, CRO and headless commerce.",
      areaServed: ["Sydney", "Melbourne", "Brisbane", "Perth", "Australia"],
      serviceType: [
        "Shopify Development",
        "Shopify Plus Development",
        "Shopify Store Migration",
        "Shopify SEO",
        "Shopify CRO",
        "Headless Shopify Development",
      ],
      provider: {
        "@type": "Organization",
        name: "Tech2Globe",
        url: "https://tech2globe.com.au",
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you only work with local businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No — our team understands the local retail market and builds Shopify stores for brands nationally and internationally. Being local simply means we build with local payment methods, shipping expectations and compliance requirements in mind from day one.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a custom Shopify store cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pricing depends on scope — a custom theme build, app integrations, and migration complexity all factor in. We provide a fixed-scope quote after your free store audit so there are no surprise costs partway through the build.",
          },
        },
        {
          "@type": "Question",
          name: "Can you migrate our existing store to Shopify without losing our SEO rankings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Migration includes a full redirect map, metadata transfer and structured data rebuild so search rankings and historic order data carry across cleanly.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with Shopify Plus for larger or wholesale brands?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — we support Shopify Plus builds including multi-currency storefronts, B2B/wholesale channels and custom checkout scripting for scaling retailers.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a typical Shopify build take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A standard custom store typically takes 6-10 weeks from strategy to launch; Shopify Plus and headless builds can run 10-16 weeks depending on integration complexity.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer ongoing support after launch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — our retainer clients get local AEST business-hours support, theme updates, and proactive load testing ahead of EOFY and Black Friday/Cyber Monday sale periods.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer a free store audit before we commit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — every engagement starts with a free Shopify store and conversion audit so you can see exactly where the gaps are before deciding to work with us.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ShopifyLandingPage />
    </div>
  );
}
