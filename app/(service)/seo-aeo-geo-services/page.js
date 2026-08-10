import Style from "./style.module.css";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";

export const metadata = {
  title: "SEO, AEO & GEO Services | AI Search Optimization - Tech2Globe",
  description:
    "Get found in AI search with Tech2Globe SEO, AEO, and GEO services. Optimize for ChatGPT, Perplexity, Google AI Overviews, featured snippets, and pipeline-driven organic growth.",
  keywords: [
    "SEO AEO GEO services",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "AI search optimization",
    "AEO services",
    "GEO services",
    "featured snippet optimization",
    "AI citation optimization",
  ],
  alternates: {
    canonical: "https://stagenew.tech2globe.tech/seo-aeo-geo-services",
  },
  openGraph: {
    title: "SEO, AEO & GEO Services | AI Search Optimization - Tech2Globe",
    description:
      "Get found in AI search with Tech2Globe SEO, AEO, and GEO services. Optimize for ChatGPT, Perplexity, Google AI Overviews, featured snippets, and pipeline-driven organic growth.",
    url: "https://stagenew.tech2globe.tech/seo-aeo-geo-services",
    siteName: "Tech2Globe",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "SEO, AEO & GEO Services | AI Search Optimization - Tech2Globe",
    description:
      "Get found in AI search with Tech2Globe SEO, AEO, and GEO services. Optimize for ChatGPT, Perplexity, Google AI Overviews, featured snippets, and pipeline-driven organic growth.",
  },
};

const faqs = [
  {
    id: "One",
    question: "What is Answer Engine Optimization (AEO)?",
    answer: `
        AEO is the practice of shaping your content so search engines and AI platforms can extract it as a direct answer. That includes featured snippets, People Also Ask boxes, voice results, and AI answer panels. For B2B brands, AEO means becoming the trusted response buyers see when they research solutions.
      `,
  },
  {
    id: "Two",
    question: "What is Generative Engine Optimization (GEO)?",
    answer: `
        GEO focuses on making your content citation-worthy for AI systems such as ChatGPT, Perplexity, Google Gemini, and Claude. It builds topical authority, entity strength, and content depth so generative models trust and reference your brand when they write answers.
      `,
  },
  {
    id: "Three",
    question: "How is AEO different from traditional SEO?",
    answer: `
        Traditional SEO aims to rank pages in organic results. AEO aims to be the answer itself — in snippets, PAA, and AI panels. SEO gets you onto the results page; AEO makes your brand the answer on that page.
      `,
  },
  {
    id: "Four",
    question: "How does GEO differ from AEO?",
    answer: `
        AEO targets structured answer formats inside search experiences (snippets, PAA, voice). GEO targets AI-generated responses across tools like ChatGPT and Perplexity. AEO is about being extracted; GEO is about being cited.
      `,
  },
  {
    id: "Five",
    question: "Can AEO and GEO work with our existing SEO program?",
    answer: `
        Yes — and they should. SEO builds the organic foundation, AEO captures direct-answer opportunities, and GEO drives AI citations. Tech2Globe runs all three as one search intelligence program tied to measurable business outcomes.
      `,
  },
  {
    id: "Six",
    question: "How do you measure AEO and GEO success?",
    answer: `
        We track snippet wins, PAA appearances, AI citation frequency, and voice presence. More importantly, we connect those wins to analytics and CRM signals so you see which visibility gains create qualified leads and pipeline — not just vanity rankings.
      `,
  },
  {
    id: "Seven",
    question: "How long does it take to see AEO and GEO results?",
    answer: `
        AEO gains such as featured snippets and PAA visibility can appear in about 4–8 weeks. GEO citations usually build over 3–6 months as authority compounds. Measurement and attribution begin from the start of the engagement.
      `,
  },
  {
    id: "Eight",
    question: "Is AEO/GEO relevant for B2B companies?",
    answer: `
        Especially so. B2B buyers increasingly research with AI tools before talking to sales. If your brand is not the answer those tools surface, a competitor often is. AEO and GEO matter most in complex, trust-driven purchase cycles.
      `,
  },
];

const pageHeaderData = {
  title: "SEO, AEO & GEO Services",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true,
};

const resources = [
  { id: 1, name: "SEO Services", path: "/seo-services" },
  { id: 2, name: "Technical SEO", path: "/technical-seo" },
  { id: 3, name: "Local SEO", path: "/local-seo" },
  { id: 4, name: "Content Marketing Services", path: "/content-marketing-services" },
  { id: 5, name: "Link Building Services", path: "/link-building-services" },
  { id: 6, name: "AI SEO Automation", path: "/ai-seo-automation" },
];

const usefullinks = [
  { id: 1, name: "SEO By Industry", path: "/seo-by-industry" },
  { id: 2, name: "ECommerce SEO Services", path: "/ecommerce-seo-services" },
  { id: 3, name: "SEO For Small Business", path: "/seo-for-small-business" },
  { id: 4, name: "Mobile SEO Services", path: "/mobile-seo-services" },
];

const sidebarSections = [
  { heading: "Related Services", links: resources },
  { heading: "SEO Solutions", links: usefullinks },
];

const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe helped us move beyond classic rankings into AI visibility. Within months we started winning featured snippets and seeing brand mentions in AI answers that previously only named competitors.",
    name: "Priya Nair | Head of Demand Gen, CloudForge",
    location: "United States",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Their AEO and GEO program connected content structure, schema, and authority building into one plan. We finally understand which search wins actually create demos — not just traffic spikes.",
    name: "Marcus Ellison | Marketing Director, SecurePath",
    location: "United Kingdom",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Excellent collaboration and clear reporting. Tech2Globe rebuilt our Q&A content architecture and strengthened entity signals. Organic quality improved and AI citation coverage expanded across key product topics.",
    name: "Elena Vargas | Growth Lead, MedStack Systems",
    location: "Canada",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We needed a partner who understood B2B search in the AI era. Tech2Globe delivered a unified SEO + AEO + GEO roadmap and executed it with discipline. Pipeline influence from organic search is noticeably stronger.",
    name: "Daniel Cho | VP Marketing, IndusOps Software",
    location: "Australia",
  },
];

const portfolioClients = [
  {
    initials: "CF",
    gradient: "#0b2e58",
    client: "CloudForge Analytics",
    country: "USA",
    project: "SEO + AEO — SaaS Platform Visibility",
    desc: "Restructured high-intent pages for snippets and PAA, added schema layers, and built topical clusters that improved AI answer presence for core solution queries.",
    category: "AEO & GEO",
    result: "2.4x growth in answer-box visibility",
  },
  {
    initials: "SP",
    gradient: "#0b2e58",
    client: "SecurePath Cyber",
    country: "UK",
    project: "GEO Authority Program — Cybersecurity",
    desc: "Built citation-worthy research content, entity mapping, and multi-platform presence to increase brand mentions across generative search experiences.",
    category: "GEO",
    result: "3x increase in AI brand citations",
  },
  {
    initials: "MS",
    gradient: "#0b2e58",
    client: "MedStack Systems",
    country: "Canada",
    project: "Unified Search Intelligence — Health Tech",
    desc: "Combined technical SEO foundations with AEO formatting and GEO authority content to improve organic quality and buyer-stage visibility.",
    category: "SEO + AEO + GEO",
    result: "185% rise in qualified organic sessions",
  },
  {
    initials: "IO",
    gradient: "#0b2e58",
    client: "IndusOps Software",
    country: "Australia",
    project: "Intent-to-Pipeline Search Program",
    desc: "Mapped intent clusters to journey stages, optimized for direct answers, and attributed snippet/citation wins to CRM pipeline outcomes.",
    category: "Search Intelligence",
    result: "41% more demo requests from organic",
  },
];

const caseStudies = [
  {
    id: 1,
    title: "Google Adword (Search Ads)",
    image: "/images/services/service-inner/casestudies/google-ads.jpg",
    description:
      "London Hampers is a UK based and family run business that provides and delivers food and drinkbased Hampers.....",
    docLink: "#",
  },
  {
    id: 2,
    title: "Search Engine Optimization",
    image: "/images/services/service-inner/casestudies/Untitled-design-(17).png",
    description:
      "The client is USA-based and he is a Neuroscientist by profession with over 15 years.....",
    docLink: "/images/case-studies/legal.png",
  },
  {
    id: 3,
    title: "Development And Marketing Of Consultancy Portal For Legal Advice",
    image: "/images/services/service-inner/casestudies/legal.png",
    description:
      "Our team helped the client to meet their organizational goals as result it impacts on conversion rate....",
    docLink:
      "/images/case-studies/Development-and-Marketing-of-Consultancy-Portal-for-Legal-Advice-converted.pdf",
  },
  {
    id: 4,
    title: "Consult for PPP",
    image: "/images/services/service-inner/casestudies/Untitled-design-(16).png",
    description:
      "The biggest challenge for us is – the business niche is complete new for us and first we need to understand....",
    docLink: "/images/case-studies/Case-Study-Consult-for-PPP-converted.pdf",
  },
  {
    id: 5,
    title: "Social Media Marketing .2",
    image: "/images/services/service-inner/casestudies/2.jpg",
    description:
      "This Social Media Marketing Case Study featured an Indian-based customer who has a “Home Furnishing” business, named: SASSOON FAB.",
    docLink: "/images/case-studies/Social-Media-Marketing-Case-Study.pdf",
  },
  {
    id: 6,
    title: "Guest Posting & Blog Writing",
    image: "/images/services/service-inner/casestudies/7.jpg",
    description:
      "This Case Study refers to our Guest Posting Services as well as Blog Writing Services for a client and showcased our unique approach to deliver...",
    docLink: "/images/case-studies/case-study-of-guest-posting-services.pdf",
  },
];

export default function SeoAeoGeoServices() {
  return (
    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="SEO, AEO & GEO Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner
                pageName="SEO, AEO & GEO Services"
                imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg"
              />

              <div className={Style.ContentDiv}>
                <h2>Your Buyers Ask AI Before They Call You. Are You the Answer?</h2>
                <p>
                  Today&apos;s B2B buyers research with ChatGPT, Perplexity, Google AI
                  Overviews, and voice assistants long before they fill a form. Tech2Globe
                  helps your brand show up in those AI-generated answers — and ties every
                  citation and snippet win back to qualified pipeline.
                </p>
                <p>
                  Our <strong>SEO, AEO &amp; GEO services</strong> combine classic organic
                  foundations with Answer Engine Optimization and Generative Engine
                  Optimization, so you win rankings, direct answers, and AI citations in one
                  coordinated program. Explore our broader{" "}
                  <Link href="/seo-services" className="fw-normal">
                    SEO services
                  </Link>{" "}
                  and{" "}
                  <Link href="/ai-seo-automation" className="fw-normal">
                    AI SEO automation
                  </Link>{" "}
                  offerings for end-to-end search growth.
                </p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Search Has Changed. Your Strategy Should Too.</h2>
                <p>
                  Traditional SEO still matters — but it is no longer enough on its own. AI
                  answers, zero-click results, and generative citations are reshaping how
                  buyers discover and trust vendors.
                </p>
                <div className={`row g-3 ${Style.CardGrid}`}>
                  <div className="col-md-4">
                    <div className={`${Style.CardBox} ${Style.StatCard}`}>
                      <div className={Style.StatValue}>60%+</div>
                      <h5>AI-Triggered Results</h5>
                      <p>
                        A large share of B2B queries now trigger AI-generated answers across
                        Google, Bing, and Perplexity-style experiences.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={`${Style.CardBox} ${Style.StatCard}`}>
                      <div className={Style.StatValue}>65%+</div>
                      <h5>Zero-Click Searches</h5>
                      <p>
                        Many searches never reach a website because AI provides the answer
                        directly on the results page.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={`${Style.CardBox} ${Style.StatCard}`}>
                      <div className={Style.StatValue}>100x</div>
                      <h5>Higher Trust Signal</h5>
                      <p>
                        Buyers often trust an AI-sourced brand citation far more than a paid
                        ad impression.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2>SEO vs AEO vs GEO: What&apos;s the Difference?</h2>
                <p>
                  Winning brands in 2026 do not pick one channel — they run all three as a
                  unified search intelligence strategy.
                </p>
                <div className={Style.TableWrap}>
                  <div className="table-responsive">
                    <table className={Style.CompareTable}>
                      <thead>
                        <tr>
                          <th></th>
                          <th>Traditional SEO</th>
                          <th>AEO</th>
                          <th>GEO</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Goal</th>
                          <td>Rank on SERPs</td>
                          <td>Be the direct answer</td>
                          <td>Be cited by AI engines</td>
                        </tr>
                        <tr>
                          <th>Target</th>
                          <td>Google organic</td>
                          <td>Featured snippets, PAA, voice</td>
                          <td>ChatGPT, Perplexity, Gemini, AI Overviews</td>
                        </tr>
                        <tr>
                          <th>Content Format</th>
                          <td>Long-form, keyword-rich</td>
                          <td>Q&amp;A structured, schema-marked</td>
                          <td>Authority-dense, entity-rich, citation-worthy</td>
                        </tr>
                        <tr>
                          <th>Metric</th>
                          <td>Rankings, traffic</td>
                          <td>Answer appearances, snippet wins</td>
                          <td>AI citations, brand mentions</td>
                        </tr>
                        <tr>
                          <th>Pipeline Impact</th>
                          <td>Indirect (clicks to leads)</td>
                          <td>Direct (answer to trust to lead)</td>
                          <td>Compound (AI trust to multi-touch)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2>AEO: Be the Direct Answer Your Buyers Find</h2>
                <p>
                  <strong>Answer Engine Optimization</strong> structures your content so
                  search engines and AI platforms can extract and display it as the answer.
                  When a buyer asks, “What is the best ABM platform for manufacturing?” —
                  AEO helps your brand appear in the answer box, not buried on page two.
                </p>
                <div className={`row g-3 ${Style.CardGrid}`}>
                  <div className="col-lg-6 col-md-6">
                    <div className={Style.FeatureCard}>
                      <div className={Style.FeatureIcon}>01</div>
                      <h5>Featured Snippet Optimization</h5>
                      <p>
                        We restructure high-potential pages to win position zero with clear
                        definitions, comparison tables, step-by-step formats, and concise
                        answer paragraphs engines can extract.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className={Style.FeatureCard}>
                      <div className={Style.FeatureIcon}>02</div>
                      <h5>Schema Markup &amp; Structured Data</h5>
                      <p>
                        FAQ, HowTo, Article, and Organization schema — a full structured-data
                        layer so engines understand intent and surface rich results.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className={Style.FeatureCard}>
                      <div className={Style.FeatureIcon}>03</div>
                      <h5>People Also Ask Targeting</h5>
                      <p>
                        We map PAA clusters in your category, create direct-answer content, and
                        format it so Google can pull your responses into expandable PAA boxes.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className={Style.FeatureCard}>
                      <div className={Style.FeatureIcon}>04</div>
                      <h5>Voice Search Optimization</h5>
                      <p>
                        We optimize for conversational queries and natural-language patterns so
                        voice assistants can deliver your brand as a concise spoken answer.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className={Style.FeatureCard}>
                      <div className={Style.FeatureIcon}>05</div>
                      <h5>Entity Optimization</h5>
                      <p>
                        We strengthen your brand entity across Knowledge Graph signals, industry
                        databases, and authoritative profiles so AI systems trust your content
                        more.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className={Style.FeatureCard}>
                      <div className={Style.FeatureIcon}>06</div>
                      <h5>Q&amp;A Content Architecture</h5>
                      <p>
                        Every priority page gets a question-answer layer — not just an FAQ —
                        so headings and sections answer buyer questions with authority.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2>GEO: Get Cited When AI Writes the Answer</h2>
                <p>
                  <strong>Generative Engine Optimization</strong> goes beyond classic search.
                  It makes your content the source AI models — ChatGPT, Perplexity, Gemini,
                  Claude — reference when they generate answers for your buyers. GEO is not
                  about gaming algorithms; it is about building the authority AI engines
                  choose to cite.
                </p>
                <div className={Style.SimpleList}>
                  <div className={Style.SimpleItem}>
                    <strong>AI Citation Monitoring</strong>
                    <span>
                      Track where your brand is cited across generative platforms — and which
                      high-value queries still leave you invisible.
                    </span>
                  </div>
                  <div className={Style.SimpleItem}>
                    <strong>Topical Authority Building</strong>
                    <span>
                      Build interconnected content clusters that establish your brand as the
                      definitive source AI engines trust.
                    </span>
                  </div>
                  <div className={Style.SimpleItem}>
                    <strong>Content Depth &amp; Authority Signals</strong>
                    <span>
                      Create research, proprietary data, expert quotes, and frameworks that
                      generative models weigh when selecting sources.
                    </span>
                  </div>
                  <div className={Style.SimpleItem}>
                    <strong>Entity Relationship Mapping</strong>
                    <span>
                      Strengthen product, people, and partnership signals so AI models build an
                      accurate knowledge graph of your business.
                    </span>
                  </div>
                  <div className={Style.SimpleItem}>
                    <strong>Multi-Platform Presence</strong>
                    <span>
                      Establish authoritative presence on forums, news, and community platforms
                      that generative systems reference.
                    </span>
                  </div>
                  <div className={Style.SimpleItem}>
                    <strong>AI-Readable Content Structure</strong>
                    <span>
                      Use clear headings, semantic HTML, and evidence-backed claims so AI models
                      can extract and cite accurately.
                    </span>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Most Agencies Optimize for Visibility. We Optimize for Revenue.</h2>
                <p>
                  Winning every snippet and AI citation means little if those wins never
                  reach pipeline. Tech2Globe connects Search Console, analytics, and CRM data
                  so you can see which AEO and GEO outcomes produce qualified opportunities.
                </p>
                <div className={`row g-3 ${Style.CardGrid}`}>
                  <div className="col-md-4">
                    <div className={Style.CardBox}>
                      <h5>Intent-to-Pipeline Mapping</h5>
                      <p>
                        Compare, pricing, solution, and definition clusters are linked to
                        journey stages so you know which answer wins create demos — and which
                        attract low-quality traffic.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={Style.CardBox}>
                      <h5>Evidence-Backed Recommendations</h5>
                      <p>
                        Every recommendation includes priority, confidence, and expected impact
                        so teams can act with clarity instead of guesswork.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={Style.CardBox}>
                      <h5>Weekly Decision Briefs</h5>
                      <p>
                        A focused set of high-leverage AEO/GEO actions each week, ranked by
                        impact and effort — decisions you can ship against, not unused reports.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Our Process: From AI Visibility Audit to Pipeline Attribution</h2>
                <div className={`row g-3 ${Style.CardGrid}`}>
                  <div className="col-lg-6 col-md-6">
                    <div className={Style.ProcessCard}>
                      <span className={Style.ProcessStep}>1</span>
                      <h5>AI Search Audit</h5>
                      <p>
                        We assess visibility across classic search, featured snippets, PAA,
                        voice, and AI-generated results — clarifying where you appear, where you
                        do not, and what is at stake.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className={Style.ProcessCard}>
                      <span className={Style.ProcessStep}>2</span>
                      <h5>Intent Cluster Mapping</h5>
                      <p>
                        We group demand into intent clusters and map each to buyer-journey
                        stages, prioritizing AEO/GEO opportunities with the strongest pipeline
                        potential — not just the highest volume.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className={Style.ProcessCard}>
                      <span className={Style.ProcessStep}>3</span>
                      <h5>Content Optimization &amp; Creation</h5>
                      <p>
                        Existing pages are optimized for AEO (schema, structure, Q&amp;A
                        format). New authority assets are built for GEO (research, frameworks,
                        entity-rich content) so every piece can be cited, not only ranked.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className={Style.ProcessCard}>
                      <span className={Style.ProcessStep}>4</span>
                      <h5>Measure, Attribute, Iterate</h5>
                      <p>
                        We track which snippet wins and AI citations connect to qualified
                        pipeline, then refine weekly. No vanity dashboards — clear actions based
                        on what is working.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2>SEO Alone Won&apos;t Cut It. Neither Will AEO or GEO Alone.</h2>
                <p>
                  The B2B companies winning now are not choosing between SEO, AEO, and GEO.
                  They run all three as one search intelligence system.
                </p>
                <div className={`row g-3 ${Style.CardGrid}`}>
                  <div className="col-md-4">
                    <div className={Style.PillarCard}>
                      <span className={Style.PillarLabel}>Foundation</span>
                      <h5>SEO</h5>
                      <p>
                        Builds organic rankings, traffic, and domain authority as the base
                        layer of search growth.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={Style.PillarCard}>
                      <span className={Style.PillarLabel}>Capture</span>
                      <h5>AEO</h5>
                      <p>
                        Captures direct-answer opportunities across snippets, PAA boxes, and
                        voice search.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={Style.PillarCard}>
                      <span className={Style.PillarLabel}>Authority</span>
                      <h5>GEO</h5>
                      <p>
                        Ensures your brand is cited when AI engines generate answers for your
                        buyers.
                      </p>
                    </div>
                  </div>
                </div>
                <p className={Style.SectionNote}>
                  Tech2Globe runs all three through one attribution layer, so you know what
                  produces revenue — not just what ranks. Pair this with{" "}
                  <Link href="/content-marketing-services" className="fw-normal">
                    content marketing
                  </Link>{" "}
                  and{" "}
                  <Link href="/technical-seo" className="fw-normal">
                    technical SEO
                  </Link>{" "}
                  for a complete search growth stack.
                </p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>AEO &amp; GEO for B2B Industries</h2>
                <p>
                  Buyers search differently by industry. We bring category context into every
                  engagement — from query language and compliance needs to sales-cycle length.
                </p>
                <div className={`row g-3 ${Style.CardGrid}`}>
                  <div className="col-md-6">
                    <div className={Style.IndustryCard}>
                      <span className={Style.IndustryDot}></span>
                      <span>AEO and GEO for Cybersecurity</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={Style.IndustryCard}>
                      <span className={Style.IndustryDot}></span>
                      <span>AEO and GEO for SaaS</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={Style.IndustryCard}>
                      <span className={Style.IndustryDot}></span>
                      <span>AEO and GEO for Manufacturing</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={Style.IndustryCard}>
                      <span className={Style.IndustryDot}></span>
                      <span>AEO and GEO for Health Tech &amp; Life Sciences</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={Style.IndustryCard}>
                      <span className={Style.IndustryDot}></span>
                      <span>AEO and GEO for IT Services</span>
                    </div>
                  </div>
                </div>
                <p className={Style.SectionNote}>
                  Looking for sector-specific SEO programs? Visit our{" "}
                  <Link href="/seo-by-industry" className="fw-normal">
                    SEO by industry
                  </Link>{" "}
                  solutions.
                </p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>What Sets Tech2Globe Apart?</h2>
                <div className={`row g-3 ${Style.CardGrid}`}>
                  <div className="col-md-6">
                    <div className={Style.DifferentiatorCard}>
                      <h5>Revenue Attribution, Not Vanity Metrics</h5>
                      <p>
                        Many agencies stop at snippet counts and AI mentions. We connect search
                        wins to lead and pipeline outcomes with clear evidence.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={Style.DifferentiatorCard}>
                      <h5>Unified SEO + AEO + GEO</h5>
                      <p>
                        We do not silo these disciplines. Every priority asset is optimized for
                        rankings, direct answers, and AI citations together.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={Style.DifferentiatorCard}>
                      <h5>B2B Industry Depth</h5>
                      <p>
                        We have run search programs across SaaS, manufacturing, FinTech,
                        cybersecurity, and life sciences — with an understanding of long cycles
                        and trust-driven buying.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className={Style.DifferentiatorCard}>
                      <h5>Evidence-Backed Execution</h5>
                      <p>
                        Recommendations come with priority, confidence, and business linkage.
                        We show the data before asking you to act.
                      </p>
                    </div>
                  </div>
                </div>
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

      <div className="PhotoEditCaseStudies">
        <CaseStudiesService caseStudies={caseStudies} />
      </div>

      <ClientSlider testimonials={testimonials} />

      <FaqSection faqs={faqs} />
    </>
  );
}
