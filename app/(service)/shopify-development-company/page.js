import Style from "./style.module.css";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ShopifyQuoteFab from "@/app/components/landingpage/ShopifyQuoteFab";
import ShopifyIntakeHashRedirect from "@/app/components/landingpage/ShopifyIntakeHashRedirect";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";
import {
  FaPaintBrush,
  FaStore,
  FaPalette,
  FaScrewdriver,
  FaSearch,
  FaVial,
  FaSyncAlt,
  FaPuzzlePiece,
  FaMobileAlt,
  FaShoppingCart,
  FaTachometerAlt,
  FaExpandArrowsAlt,
  FaCogs,
  FaUsers,
  FaComments,
  FaClipboardCheck,
  FaTshirt,
  FaHeart,
  FaHome,
  FaUtensils,
  FaCar,
  FaShoppingBag,
  FaCalendarCheck,
} from "react-icons/fa";

export const metadata = {
  title: "Shopify Development Company for Custom eCommerce Solutions | Tech2Globe",
  description:
    "Build a successful online store with expert Shopify development services. Tech2Globe provides store development, custom themes, migration, integrations, maintenance, and SEO implementation.",
  keywords: [
    "shopify development company",
    "shopify app development company",
    "shopify web development company",
    "shopify website development company",
    "shopify development company india",
    "shopify development company in india",
    "best shopify development company",
    "shopify development company in usa",
    "best shopify development companies",
  ],
  openGraph: {
    title: "Shopify Development Company for Custom eCommerce Solutions | Tech2Globe",
    siteName: "Tech2Globe web Solutions LLP",
    description:
      "Build a successful online store with expert Shopify development services. Tech2Globe provides store development, custom themes, migration, integrations, maintenance, and SEO implementation.",
    url: "https://stagenew.tech2globe.tech/shopify-development-company",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Development Company for Custom eCommerce Solutions | Tech2Globe",
    description:
      "Build a successful online store with expert Shopify development services. Tech2Globe provides store development, custom themes, migration, integrations, maintenance, and SEO implementation.",
  },
  alternates: {
    canonical: "https://stagenew.tech2globe.tech/shopify-development-company",
  },
};

const pageHeaderData = {
  title: "Shopify Development Company",
  description:
    "Shopify development services including store development, custom theme development, migration, integrations, maintenance, and SEO implementation.",
  buttonText: "Book Your Consultation",
  buttonLink: "/shopify-development-company/questionnaire",
  backgroundImage: "/images/services/data-mining-services-banner.jpg",
};

const resources = [
  { id: 1, name: "Case Studies", path: "/case-studies" },
  { id: 2, name: "Clients", path: "/clients" },
  { id: 3, name: "Testimonial", path: "/testimonial" },
];

const usefulLinks = [
  { id: 4, name: "eCommerce Development", path: "/e-commerce-development" },
  { id: 5, name: "Shopify Product Upload", path: "/shopify-product-upload-services" },
  { id: 6, name: "SEO Services", path: "/seo-services" },
  { id: 7, name: "BigCommerce Development", path: "/bigcommerce-development-services" },
  { id: 8, name: "WooCommerce Development", path: "/woocommerce-development-services" },
  { id: 9, name: "Magento Development", path: "/magento-development-services" },
];

const sidebarSections = [
  { heading: "Resources", links: resources },
  { heading: "Useful Links", links: usefulLinks },
];

const challenges = [
  {
    icon: <FaSearch size={28} />,
    title: "Poor website navigation",
    text: "Customers struggle to find products, categories, or important information.",
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: "Limited mobile usability",
    text: "Pages or shopping features do not work smoothly on smartphones and tablets.",
  },
  {
    icon: <FaShoppingCart size={28} />,
    title: "Slow or confusing checkout",
    text: "Unnecessary steps make it harder for customers to complete purchases.",
  },
  {
    icon: <FaPalette size={28} />,
    title: "Limited customization",
    text: "Standard themes may not support your brand identity or specific business requirements.",
  },
  {
    icon: <FaPuzzlePiece size={28} />,
    title: "Disconnected business systems",
    text: "Inventory, shipping, customer data, or other tools may require better integration.",
  },
  {
    icon: <FaExpandArrowsAlt size={28} />,
    title: "Difficulty scaling",
    text: "Your store needs additional features as your product catalogue and customer base grow.",
  },
];

const coreServices = [
  {
    icon: <FaStore size={36} color="#f15a29" />,
    title: "Shopify Store Development",
    description:
      "Launching a new online store requires careful planning, from selecting a suitable theme to organizing products and configuring essential features.",
    paragraphs: [
      "Our Shopify store development services cover store setup, website structure, product categories, navigation, page layouts, and essential eCommerce functionality. We work according to your requirements to create a store that reflects your brand and makes shopping straightforward for your customers.",
      "Whether you operate a small business, a growing retail brand, or an established eCommerce company, the development process should align with your current needs and future plans.",
    ],
  },
  {
    icon: <FaPalette size={36} color="#f15a29" />,
    title: "Custom Shopify Theme Development",
    description:
      "Your website design influences how customers perceive your brand and interact with your products. If standard themes do not meet your requirements, custom Shopify theme development can help create a more distinctive shopping experience.",
    paragraphs: [
      "We help customize storefront layouts, product pages, category pages, and other website elements according to your design preferences and business goals.",
      "The focus is on creating a consistent brand experience while maintaining usability, mobile responsiveness, and compatibility with the features your store needs.",
    ],
  },
  {
    icon: <FaPaintBrush size={36} color="#f15a29" />,
    title: "Shopify Website Redesign",
    description:
      "An outdated website can make it difficult for customers to navigate your products or understand your offerings. A redesign can help improve the overall shopping experience without losing sight of your existing business requirements.",
    paragraphs: [
      "Our Shopify website redesign approach may include reviewing your current layout, identifying navigation problems, improving product presentation, simplifying customer journeys, and updating the visual design.",
      "Before making changes, we consider your existing store structure and relevant SEO requirements to help reduce unnecessary disruption to search visibility.",
    ],
  },
  {
    icon: <FaCogs size={36} color="#f15a29" />,
    title: "PSD to Shopify Conversion",
    description:
      "Do you already have a website design prepared by your design team? PSD to Shopify conversion helps turn approved design files into a functional Shopify storefront.",
    paragraphs: [
      "The process involves translating design elements into responsive website layouts and implementing the required store functionality. The objective is to maintain the intended visual appearance while ensuring that customers can browse products and interact with the store effectively across different screen sizes.",
    ],
  },
  {
    icon: <FaSyncAlt size={36} color="#f15a29" />,
    title: "Shopify Store Migration",
    description:
      "Moving your online store from another eCommerce platform can be challenging, especially when you need to preserve product information, customer records, order history, and search engine visibility.",
    paragraphs: [
      "Our Shopify migration services can help plan and execute the transition based on your existing platform and data requirements.",
      "Depending on your project, migration may include product and collection data, customer information, order records, URL mapping, redirects, and essential integrations. We also recommend testing important store functions before launch.",
      "A migration plan should identify data limitations, platform dependencies, and potential risks before the transfer begins.",
    ],
  },
  {
    icon: <FaPuzzlePiece size={36} color="#f15a29" />,
    title: "Shopify App and Third-Party Integration",
    description:
      "Your business may rely on multiple tools to manage payments, shipping, inventory, marketing, customer support, or accounting. Integrating suitable applications can reduce manual work and improve operational efficiency.",
    paragraphs: [
      "We help assess integration requirements and implement compatible apps or third-party connections according to your store's needs.",
      "Before adding an app, we consider its functionality, compatibility, cost, and potential effect on store performance. The aim is to support your operations without introducing unnecessary complexity.",
    ],
  },
  {
    icon: <FaScrewdriver size={36} color="#f15a29" />,
    title: "Shopify Store Maintenance and Support",
    description:
      "Launching a website is only one part of running an online store. Over time, you may need updates, bug fixes, content changes, troubleshooting, and improvements to existing functionality.",
    paragraphs: [
      "Our Shopify store maintenance services help address these ongoing requirements. Depending on your agreed scope, support may include resolving technical issues, updating store content, reviewing functionality, and checking important customer journeys.",
      "Regular maintenance can help you identify problems earlier and keep your store aligned with changing business requirements.",
    ],
  },
  {
    icon: <FaSearch size={36} color="#f15a29" />,
    title: "Shopify SEO Implementation",
    description:
      "A well-designed store also needs to be discoverable by potential customers. Shopify SEO implementation helps improve the technical and on-page foundations that search engines use to understand your website.",
    paragraphs: [
      "Relevant activities may include optimizing page titles and meta descriptions, organizing headings, improving internal linking, reviewing product and collection pages, managing redirects, and identifying technical SEO issues.",
      "SEO improvements should be planned alongside website development rather than treated as an afterthought. Search visibility depends on several factors, including competition, content quality, website authority, and technical performance, so specific ranking results cannot be guaranteed.",
    ],
  },
  {
    icon: <FaVial size={36} color="#f15a29" />,
    title: "Shopify Quality Assurance and Testing",
    description:
      "Before your store goes live, it is important to check that the main features work as expected.",
    paragraphs: [
      "Our testing process can cover responsive layouts, product variations, navigation, forms, cart functionality, checkout flows, payment configurations, and relevant integrations.",
      "We also recommend checking broken links, important redirects, and key SEO elements before launch. The exact testing scope depends on your project's complexity and the functionality being implemented.",
    ],
  },
];

const whyChoose = [
  {
    icon: <FaTachometerAlt size={28} />,
    title: "Business-focused development",
    text: "We consider your business objectives, customer expectations, and operational requirements when planning your Shopify store.",
  },
  {
    icon: <FaCogs size={28} />,
    title: "Customized solutions",
    text: "We adapt the development scope to your needs, whether you require a new store, theme customization, migration, or technical improvements.",
  },
  {
    icon: <FaClipboardCheck size={28} />,
    title: "End-to-end support",
    text: "Our services cover key stages of the store lifecycle, from development and testing to maintenance and SEO implementation.",
  },
  {
    icon: <FaExpandArrowsAlt size={28} />,
    title: "Scalable store structure",
    text: "We consider future requirements so that your store can be extended as your product range, traffic, and operational needs evolve.",
  },
  {
    icon: <FaComments size={28} />,
    title: "Communication and coordination",
    text: "Clear communication helps you understand project progress, discuss changes, and resolve questions throughout the engagement.",
  },
  {
    icon: <FaUsers size={28} />,
    title: "Quality-focused delivery",
    text: "We emphasize functional testing and review to help ensure that the delivered store meets the agreed requirements.",
  },
];

const industries = [
  {
    icon: <FaTshirt size={32} />,
    title: "Fashion and apparel",
    text: "Product variants, size guides, collections, and easy product discovery.",
  },
  {
    icon: <FaHeart size={32} />,
    title: "Health and beauty",
    text: "Clear product information, organized categories, and repeat-purchase experiences.",
  },
  {
    icon: <FaHome size={32} />,
    title: "Home and lifestyle",
    text: "Detailed product pages, useful imagery, and intuitive category navigation.",
  },
  {
    icon: <FaUtensils size={32} />,
    title: "Food and beverage",
    text: "Clear product descriptions, delivery information, and appropriate ordering workflows.",
  },
  {
    icon: <FaCar size={32} />,
    title: "Automotive and accessories",
    text: "Product specifications, compatibility information, and organized product filtering.",
  },
  {
    icon: <FaShoppingBag size={32} />,
    title: "Retail and eCommerce",
    text: "Flexible catalogue management, integrated business tools, and scalable storefront functionality.",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Requirement discovery",
    text: "We discuss your business objectives, target customers, products, design preferences, budget, timeline, and required functionality.",
  },
  {
    step: 2,
    title: "Planning and design",
    text: "We establish the website structure, page requirements, user journeys, and visual direction before development begins.",
  },
  {
    step: 3,
    title: "Store development",
    text: "Our team implements the approved design, configures relevant Shopify features, and develops agreed custom functionality or integrations.",
  },
  {
    step: 4,
    title: "Testing and review",
    text: "We review the store against the agreed requirements, check important shopping flows, and address identified issues.",
  },
  {
    step: 5,
    title: "Launch and handover",
    text: "Once the store is approved, we coordinate the launch, provide relevant handover information, and clarify any agreed post-launch support.",
  },
  {
    step: 6,
    title: "Ongoing improvement",
    text: "After launch, you can identify opportunities to improve usability, technical performance, content, and store functionality as your business develops.",
  },
];

const pricingFactors = [
  "Number of pages, products, and collections.",
  "Theme selection and customization requirements.",
  "Custom functionality and app integrations.",
  "Migration and data-cleaning requirements.",
  "Design complexity and testing scope.",
  "Ongoing maintenance and support needs.",
];

const caseStudies = [
  {
    id: 1,
    title: "Shopify website for Buxaz",
    image: "/images/services/service-inner/buxaz-case-study.png",
    description:
      "We believe amazing products should be sold in amazing stores. We are accredited Shopify Experts with a proven track....",
    docLink: "https://stagenew.tech2globe.tech/casestudies-docs1/Buxaz%20case%20study.pdf",
  },
  {
    id: 2,
    title: "nopCommerce platform",
    image: "/images/services/service-inner/nopcommerce-development.jpg",
    description:
      "Besteleasy.nl based on Netherlands and offers best quality electronic gadgets in the entire location of Europe, especially wireless speakers, data cables & headphones.....",
    docLink:
      "https://stagenew.tech2globe.tech/casestudies-docs1/Case%20Study%20-%20Besteleasy.nl%20(FINAL%20CASE%20STUDY).pdf",
  },
  {
    id: 3,
    title: "Textiles Shopify Store",
    image: "/images/services/service-inner/workshop-internal-employees-400x300.png",
    description:
      "Vichitra Collection based on New Delhi, India and offers best quality traditional textiles and arts outlet. Company established in 1996 and running their business offline.....",
    docLink: "https://stagenew.tech2globe.tech/casestudies-docs1/Case%20Study%20-%20VichitraCollection.pdf",
  },
  {
    id: 4,
    title: "Shopify Multi Currency Checkout",
    image: "/images/services/service-inner/promotion-of-2-x-shopify-stores.png",
    description:
      "This website is a well-established brand in the USA, and they are dealing into women beauty & grooming products. They owned 100% women-oriented products....",
    docLink:
      "https://stagenew.tech2globe.tech/casestudies-docs1/Case%20Study_%20Shopify%20Multi%20Currency%20Checkout%20.pdf",
  },
  {
    id: 5,
    title: "Rebuilt & Redesign",
    image: "/images/services/service-inner/OnlineBusinessGrowth.png",
    description:
      "Ellie Bianca is a proudly Canadian, all-natural, environmentally sustainable, socially conscious, luxury skin care....",
    docLink: "https://stagenew.tech2globe.tech/casestudies-docs1/ellie%20bianca.pdf",
  },
];

const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe built our Shopify store from the ground up and the results have been phenomenal. Their team customized a premium theme, integrated our inventory system, and set up automated email flows. Within 60 days of launch, our conversion rate doubled. Their Shopify developers truly understand what drives ecommerce performance.",
    name: "Emily Hartmann | PureLeaf Organics",
    location: "Australia",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We needed a Shopify Plus store capable of handling flash sales with thousands of concurrent users. Tech2Globe delivered a rock-solid solution with custom checkout scripts, advanced discount logic, and multi-language support. The platform handled our biggest sale event without a single hiccup. Incredibly talented development team.",
    name: "Carlos Mendez | Vivo Sports International",
    location: "Mexico",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe migrated our WooCommerce store to Shopify seamlessly, with zero data loss and minimal downtime. They redesigned the entire customer journey and integrated our local courier APIs. Sales increased by 38% in the first quarter post-migration. The team was professional, patient, and always available for questions.",
    name: "Rachel O'Brien | Celtic Craft House",
    location: "Ireland",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe developed a custom Shopify storefront for our furniture brand with 3D product visualization and a room builder tool. The bespoke Shopify app they built to connect with our ERP system was flawless. Our average order value increased by 27% after launch. We are extremely satisfied with their technical capabilities and creative approach.",
    name: "Kenji Nakamura | Nakamura Home Living",
    location: "Japan",
  },
];

const faqs = [
  {
    id: "One",
    question: "How do I choose the best Shopify Development Company?",
    answer:
      "Look for a company that understands your business requirements, demonstrates relevant development experience, communicates clearly, and provides a defined project scope. Review its portfolio, technical capabilities, testing process, and support arrangements before making a decision.",
  },
  {
    id: "Two",
    question: "Can you build a custom Shopify store for my business?",
    answer:
      "Yes. Shopify stores can be customized through theme development, tailored layouts, app integrations, and additional functionality, depending on your requirements and Shopify's technical limitations.",
  },
  {
    id: "Three",
    question: "Can you migrate my existing website to Shopify?",
    answer:
      "Yes. Migration planning can cover product data, collections, customer records, order information, URL redirects, and integrations where supported. The exact scope depends on your existing platform and the data that can be transferred.",
  },
  {
    id: "Four",
    question: "How long does Shopify website development take?",
    answer:
      "The timeline depends on the number of pages, design requirements, custom features, integrations, migration complexity, and feedback cycles. A clear project scope helps establish a realistic schedule before development begins.",
  },
  {
    id: "Five",
    question: "Will my Shopify store work on mobile devices?",
    answer:
      "Mobile responsiveness is an important part of Shopify store development. We consider different screen sizes, navigation, product presentation, and shopping functionality during implementation and testing.",
  },
  {
    id: "Six",
    question: "Can Shopify development improve my website's SEO?",
    answer:
      "Development can improve technical foundations, page structure, mobile usability, and other elements that support SEO. However, organic rankings also depend on content quality, competition, authority, and other search factors.",
  },
  {
    id: "Seven",
    question: "Do you provide Shopify store maintenance after launch?",
    answer:
      "Maintenance can be arranged according to your support requirements. Depending on the agreed scope, it may include bug fixes, updates, troubleshooting, content changes, and functionality checks.",
  },
  {
    id: "Eight",
    question: "Can you integrate third-party tools with Shopify?",
    answer:
      "Yes, where compatible integrations or suitable custom solutions are available. Requirements may include shipping, inventory, payment, accounting, marketing, or customer support systems. Feasibility should be confirmed before development.",
  },
];

const portfolioClients = [
  {
    initials: "PO",
    gradient: "#0b2e58",
    client: "PureLeaf Organics",
    country: "Australia",
    project: "Custom Shopify Store Development & Conversion Optimization",
    desc: "Custom Shopify storefront with Klaviyo automation and Shopify Markets setup for international sales.",
    category: "Shopify Development",
    result: "2X Conversion Rate",
    resultSub: "Within 60 Days",
  },
  {
    initials: "VS",
    gradient: "#0b2e58",
    client: "Vivo Sports International",
    country: "Mexico",
    project: "Shopify Plus Flash Sale Infrastructure & Custom Checkout",
    desc: "Shopify Plus implementation with custom checkout scripts and multilingual storefront deployment.",
    category: "Shopify Development",
    result: "$480K Revenue",
    resultSub: "In 6 Hours",
  },
  {
    initials: "CC",
    gradient: "#0b2e58",
    client: "Celtic Craft House",
    country: "Ireland",
    project: "WooCommerce to Shopify Migration & UX Redesign",
    desc: "Complete migration to Shopify with storefront redesign and courier API integrations.",
    category: "Shopify Development",
    result: "38% Increase",
    resultSub: "Sales Growth",
  },
  {
    initials: "NH",
    gradient: "#0b2e58",
    client: "Nakamura Home Living",
    country: "Japan",
    project: "Custom Shopify App Development & 3D Product Visualization",
    desc: "Built a 3D product viewer and custom ERP sync app for seamless inventory and order management.",
    category: "Shopify Development",
    result: "27% Increase",
    resultSub: "Average Order Value",
  },
  {
    initials: "BP",
    gradient: "#0b2e58",
    client: "Bloom & Petal Co.",
    country: "USA",
    project: "Shopify Subscription Commerce & Retention Automation",
    desc: "Subscription commerce setup with Recharge Payments and automated retention workflows.",
    category: "Shopify Development",
    result: "3.2X Growth",
    resultSub: "Customer LTV",
  },
];

export default function ShopifyDevelopment() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://tech2globe.com/shopify-development-company#webpage",
        url: "https://tech2globe.com/shopify-development-company",
        name: "Shopify Development Company",
        description:
          "Shopify development services including store development, custom theme development, migration, integrations, maintenance, and SEO implementation.",
        inLanguage: "en",
        mainEntity: {
          "@id": "https://tech2globe.com/shopify-development-company#service",
        },
        breadcrumb: {
          "@id": "https://tech2globe.com/shopify-development-company#breadcrumb",
        },
      },
      {
        "@type": "Service",
        "@id": "https://tech2globe.com/shopify-development-company#service",
        name: "Shopify Development Services",
        serviceType: [
          "Shopify Store Development",
          "Custom Shopify Theme Development",
          "Shopify Store Migration",
          "Shopify Store Maintenance",
          "Shopify SEO Implementation",
          "Shopify Quality Assurance and Testing",
          "Shopify App and Third-Party Integration",
        ],
        url: "https://tech2globe.com/shopify-development-company",
        description:
          "Tech2Globe provides Shopify development services to help businesses build, customize, migrate, maintain, and improve their eCommerce stores.",
        provider: {
          "@type": "Organization",
          name: "Tech2Globe",
          url: "https://www.tech2globe.com/",
        },
        mainEntityOfPage: {
          "@id": "https://tech2globe.com/shopify-development-company#webpage",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://tech2globe.com/shopify-development-company#breadcrumb",
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
            name: "Shopify Development Company",
            item: "https://tech2globe.com/shopify-development-company",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://tech2globe.com/shopify-development-company#faq",
        url: "https://tech2globe.com/shopify-development-company",
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
      <Breadcrumb parentName="Services" pageName="Shopify Development Company" />
      <BrandSection />

      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner
                pageName="Shopify Development Company for Custom eCommerce Solutions"
                imageSrc="/images/services/service-inner/cms-banner2.jpg"
              />

              <div id="overview" className={Style.ContentDiv}>
           
                <h2>Build a Successful Online Store with Expert Shopify Development Services</h2>
                <p>
                  Are you planning to launch an online store or improve the performance of your
                  existing eCommerce website? Choosing the right Shopify Development Company can help
                  you create a professional online shopping experience that meets your business needs
                  and supports long-term growth.
                </p>
                <p>
                  Your online store is more than a place to display products. It should help customers
                  find what they need, understand your offerings, complete purchases easily, and return
                  for future orders. A well-developed Shopify store brings together attractive design,
                  smooth navigation, mobile responsiveness, secure payment options, and efficient store
                  management.
                </p>
                <p>
                  At Tech2Globe, we provide Shopify development services tailored to your business
                  requirements. Whether you are starting a new eCommerce business, redesigning an
                  existing store, or planning to expand your online operations, our approach focuses on
                  creating a user-friendly and scalable shopping experience.
                </p>
                <p>
                  Our team works to understand your goals, target audience, product range, and
                  operational requirements before recommending a suitable development solution.
                </p>
              </div>

              <div id="why-need" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">
                  Why Does Your Business Need Shopify Website Development Services?
                </h2>
                <p>
                  Managing an online business involves more than uploading products and accepting
                  payments. Your website must provide a consistent experience across devices while
                  supporting your marketing, inventory, order management, and customer service
                  activities.
                </p>
                <p className="mb-4">
                  Professional Shopify website development services can help address common challenges
                  such as:
                </p>
                <div className="row">
                  {challenges.map((item) => (
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
                  With a structured development approach, your Shopify store can better support
                  customer expectations and day-to-day business operations.
                </p>
              </div>

              <div id="services" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Our Shopify Development Services</h2>
                <p className="mb-4">
                  Every eCommerce business has different goals. We offer a range of Shopify development
                  solutions to help businesses create, customize, maintain, and improve their online
                  stores.
                </p>
                <div className="row">
                  {coreServices.map((service, index) => (
                    <div key={service.title} className="col-lg-6 col-md-6 col-sm-12 mb-4">
                      <div className={Style.CardBox}>
                        <div className="mb-2">{service.icon}</div>
                        <h5>
                          {index + 1}. {service.title}
                        </h5>
                        <p>{service.description}</p>
                        {service.paragraphs.map((paragraph) => (
                          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="why-choose" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">
                  Why Choose Tech2Globe as Your Shopify Development Company?
                </h2>
                <p className="mb-4">
                  Choosing a development partner involves more than comparing prices. You need a team
                  that understands your requirements, communicates clearly, and can deliver a solution
                  that fits your business.
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
                  The right development partner should also explain the proposed scope, timelines,
                  dependencies, and ongoing costs before work begins.
                </p>
              </div>

              <div id="industries" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Shopify Development for Different Industries</h2>
                <p className="mb-4">
                  Shopify can support businesses across various product categories, but each industry
                  has different customer expectations and operational needs.
                </p>
                <div className="row">
                  {industries.map((item) => (
                    <div key={item.title} className="col-lg-4 col-md-6 col-sm-12 mb-3">
                      <div className={Style.IconBox}>
                        {item.icon}
                        <h5 className="mt-2">{item.title}</h5>
                        <p className="mb-0 small">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 mb-0">
                  We tailor the development scope to the business model, products, and functionality
                  required rather than applying the same solution to every store.
                </p>
              </div>

              <div id="process" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Our Shopify Development Process</h2>
                <p className="mb-4">
                  A transparent development process helps you understand what happens at each stage and
                  what information your team needs to provide.
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
                  Project timelines depend on design complexity, integrations, data migration, and the
                  availability of required content and approvals.
                </p>
              </div>

              <div id="pricing" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">How Much Do Shopify Development Services Cost?</h2>
                <p>
                  The cost of Shopify development depends on the size and complexity of your project. A
                  basic store setup generally requires less work than a custom storefront with
                  specialized functionality, third-party integrations, or a migration from another
                  platform.
                </p>
                <p className="mb-2">Factors that influence pricing include:</p>
                <ul className="ps-3 mb-0">
                  {pricingFactors.map((factor) => (
                    <li key={factor}>{factor}</li>
                  ))}
                </ul>
              </div>

              <div id="cta-copy" className={Style.ContentDiv}>
                <h2 className="text-danger pt-3">Ready to Build or Improve Your Shopify Store?</h2>
                <p>
                  Your eCommerce website should make it easier for customers to discover your products,
                  understand your brand, and complete their purchases. Whether you need a new Shopify
                  store, a custom design, a platform migration, or ongoing technical support, choosing
                  the right development approach can help you build a stronger foundation for your
                  online business.
                </p>
                <p>
                  Tech2Globe works with businesses to plan and develop Shopify solutions based on their
                  goals, technical requirements, and customer needs.
                </p>
                <p>
                  Contact Tech2Globe to discuss your Shopify development requirements and receive a
                  project proposal tailored to your business.
                </p>
                <p>
                  To receive a relevant estimate, prepare a brief outlining your business goals,
                  required features, existing platform, preferred timeline, and budget range.
                </p>
                <p className="mb-0">
                  At Tech2Globe, the proposed scope should be aligned with your requirements so you can
                  understand what is included before committing to a project.
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
                <h2 className="text-white mb-3">Ready to Build or Improve Your Shopify Store?</h2>
                <p className="text-white mb-4">
                  Partner with Tech2Globe for Shopify store development, custom themes, migration,
                  integrations, and ongoing support.
                </p>
                <div className={`${Style.BtnBlock} d-flex justify-content-center`}>
                  <Link href="/shopify-development-company/questionnaire" className="button-red">
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
      <CaseStudiesService caseStudies={caseStudies} />
      <ClientSlider testimonials={testimonials} />
      <div id="faqs">
        <FaqSection faqs={faqs} />
      </div>
      <ShopifyIntakeHashRedirect />
      <ShopifyQuoteFab />
    </>
  );
}
