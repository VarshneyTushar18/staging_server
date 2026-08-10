import AIConsultingAusPage from "../components/ai-consulting-australia/AIConsultingAusPage";
import "./ai-consulting.css";

const PAGE_URL = "https://tech2globe.com.au/ai-consulting-australia";

export const metadata = {
  title:
    "AI Consulting Australia | AI Strategy, LLM Integration & Automation | Tech2Globe",
  description:
    "Tech2Globe is an AI consulting agency for Australian businesses — AI readiness audits, generative AI & LLM integration, workflow automation, AI governance and customer experience. Book a free AI Opportunity Audit.",
  keywords: [
    "AI Consulting Agency",
    "AI Consultant Australia",
    "AI Strategy Consulting",
    "AI Readiness Audit",
    "Generative AI Consulting",
    "AI Implementation Services",
    "Business Process Automation",
    "AI Workflow Automation",
    "LLM Integration Services",
    "AI Chatbot Development",
    "AI Governance & Compliance",
    "Data Strategy Consulting",
    "AI for Small Business",
    "Enterprise AI Consulting",
    "AI Customer Experience",
    "AI Opportunity Audit",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "AI Consulting Australia | Tech2Globe",
    description:
      "The AI consulting team that ships working systems, not slide decks. Free AI Opportunity Audit for Australian businesses.",
    url: PAGE_URL,
    siteName: "Tech2Globe",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consulting Australia | Tech2Globe",
    description:
      "AI readiness audits, strategy, LLM integration and workflow automation for Australian businesses.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "AI Consulting Australia | Tech2Globe",
      description:
        "Full-service AI consulting for Australian businesses — audits, strategy, LLM integration, automation and governance.",
      isPartOf: {
        "@type": "WebSite",
        name: "Tech2Globe",
        url: "https://tech2globe.com.au",
      },
    },
    {
      "@type": "ProfessionalService",
      name: "Tech2Globe AI Consulting",
      url: PAGE_URL,
      areaServed: ["Sydney", "Melbourne", "Brisbane", "Perth", "Australia"],
      serviceType: [
        "AI Consulting",
        "AI Strategy Consulting",
        "Generative AI Integration",
        "Workflow Automation",
        "AI Governance",
      ],
      provider: {
        "@type": "Organization",
        name: "Tech2Globe",
        url: "https://tech2globe.com.au",
      },
    },
  ],
};

export default function AIConsultingAustraliaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AIConsultingAusPage />
    </>
  );
}
