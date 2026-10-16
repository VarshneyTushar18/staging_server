import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";
import {
  FaAmazon,
  FaCheckCircle,
  FaClipboardList,
  FaCogs,
  FaDatabase,
  FaLayerGroup,
  FaLightbulb,
  FaSearch,
  FaShoppingBag,
  FaShoppingCart,
  FaStore,
  FaSyncAlt,
  FaUpload,
  FaUsers,
} from "react-icons/fa";

export const metadata = {
  title: "Ecommerce Product Data Entry Services | Tech2Globe",
  description:
    "Outsource ecommerce product data entry services for product uploads, catalog conversion, categorization, data sourcing, updates, and bulk product management.",
  keywords: [
    "Product Data Entry Process",
    "Product Data Entry Solutions",
    "Ecommerce Product Data Entry Services",
    "Product Data Entry",
    "Product Data Entry Services",
    "Outsource Product Entry",
    "Data Entry Services"
  ],
  openGraph: {
    title: "Ecommerce Product Data Entry Services | Tech2Globe",
    siteName: "Tech2Globe web Solutions LLP",
    description:
      "Outsource ecommerce product data entry services for product uploads, catalog conversion, categorization, data sourcing, updates, and bulk product management.",
    url: "https://stagenew.tech2globe.tech/product-data-entry-services"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Product Data Entry Services | Tech2Globe",
    description:
      "Outsource ecommerce product data entry services for product uploads, catalog conversion, categorization, data sourcing, updates, and bulk product management."
  },
  alternates: {
    canonical: "https://stagenew.tech2globe.tech/product-data-entry-services"
  }
};

const pageHeaderData = {
  title: "Ecommerce Product Data Entry Services",
  description:
    "Tech2Globe provides ecommerce product data entry services for product catalog creation, product uploads, data sourcing, categorization, catalog conversion, and product information updates across websites, marketplaces, and ecommerce platforms.",
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
  { id: 4, name: "Catalog Processing", path: "/catalog-processing-services" },
  { id: 5, name: "Data Conversion", path: "/data-conversion-services" },
  { id: 6, name: "Data Extraction", path: "/data-extraction-services" },
  { id: 7, name: "Document Processing", path: "/document-processing-services" },
  { id: 8, name: "Forms Processing", path: "/forms-processing-services" },
  { id: 9, name: "Insurance Claims Processing", path: "/insurance-claims-processing-services" },
  { id: 10, name: "Invoice Processing", path: "/invoice-processing-services" },
  { id: 11, name: "Order Processing", path: "/order-processing-services" },
  { id: 12, name: "Survey Forms Processing", path: "/survey-forms-processing" },
];


const sidebarSections = [
  { heading: "Resources", links: resources },
  { heading: "Useful Links", links: usefulLinks },
];

const caseStudies = [
  {
    id: 1,
    title: "Product Data Entry",
    image: "/images/services/service-inner/data-processing-2-bn.jpg",
    description:
      "Company was approached by a client seeking assistance in creating a robust account database within their CRM portal....",
    docLink: "https://stagenew.tech2globe.tech/casestudies-docs1/Case%20Study-Product%20Data%20Entry.pdf",
  },
];


const portfolio = [
  {
    title: "Product Uploading",
    items: [
      {
        title: "Lacanvas",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.lacanvas.com/",
        img: "/images/services/portfolio-img/lacanvas.jpg",
      },
      {
        title: "Linkcycle",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.linkcycle.com/",
        img: "/images/services/portfolio-img/linkcycle.jpg",
      },
      {
        title: "Silver Goldinto Cash",
        tech: "PHP, Mysql",
        link: "http://www.silvergoldintocash.com/",
        img: "/images/services/portfolio-img/silvergoldintocash.jpg",
      },
      {
        title: "Travel Blue",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.travel-blue.com/",
        img: "/images/services/portfolio-img/travel-blue.jpg",
      },
      {
        title: "Windsor One",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.windsorone.com/",
        img: "/images/services/portfolio-img/windsorone.jpg",
      },
      {
        title: "Zphotoedit",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.zphotoedit.com/",
        img: "/images/services/portfolio-img/zphotoedit.jpg",
      },
      {
        title: "Luiolei",
        tech: "Technology: Asp.net, C#,SQL Server , Jquery.",
        link: "http://www.luiolei.com/",
        img: "/images/services/portfolio-img/luiolei.jpg",
      },
      {
        title: "Plaza Surf Sports",
        tech: "Technology: Asp.net, C#,SQL Server , Jquery.",
        link: "http://www.plazasurfsports.com/",
        img: "/images/services/portfolio-img/plazasurfsports.jpg",
      },
      {
        title: "Shopaloo",
        tech: "Technology: Asp.net, C#,SQL Server , Jquery.",
        link: "https://shopaloo.com/",
        img: "/images/services/portfolio-img/shopaloo.jpg",
      },
      {
        title: "Sports456",
        tech: "Magento",
        link: "http://www.sports456.com/",
        img: "/images/services/portfolio-img/sports456.jpg",
      },
    ],
  },
  {
    title: "Web Stores Design & Dev",
    items: [
      {
        title: "Consult for PPP",
        tech: "Asp.net, C#, SQL Server, Jquery",
        link: "https://consultforppp.com/",
        img: "/images/services/portfolio-img/consultforppp.jpg",
      },
      {
        title: "Devouttechs",
        tech: "Asp.net, C#, SQL Server, Jquery",
        link: "http://devouttechs.com/",
        img: "/images/services/portfolio-img/devouttechs.jpg",
      },
      {
        title: "Geturkart",
        tech: "Asp.net, C#, SQL Server, Jquery",
        link: "https://geturkart.com/",
        img: "/images/services/portfolio-img/geturkart.jpg",
      },
      {
        title: "Nopextensions",
        tech: "Asp.net, C#, SQL Server, Jquery",
        link: "http://nopextensions.com/",
        img: "/images/services/portfolio-img/nopextensions.jpg",
      },
      {
        title: "Shopaloo",
        tech: "Technology: Asp.net, C#,SQL Server , Jquery.",
        link: "https://shopaloo.com/",
        img: "/images/services/portfolio-img/shopaloo.jpg",
      },
      {
        title: "Sports456",
        tech: "Magento",

        link: "http://www.sports456.com/",
        img: "/images/services/portfolio-img/sports456.jpg",
      },
      {
        title: "Luiolei",
        tech: "Technology: Asp.net, C#,SQL Server , Jquery.",
        link: "http://www.luiolei.com/",
        img: "/images/services/portfolio-img/luiolei.jpg",
      },
      {
        title: "Plaza Surf Sports",
        tech: "NopCommerce",
        link: "http://www.plazasurfsports.com/",
        img: "/images/services/portfolio-img/plazasurfsports.jpg",
      },
    ],
  },
  {
    title: "Indian Ecomm MarketPlace",
    items: [
      {
        title: "Windsor One",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.windsorone.com/",
        img: "/images/services/portfolio-img/windsorone.jpg",
      },
      {
        title: "Zphotoedit",
        tech: "PHP, Mysql, Jquery",
        link: "http://www.zphotoedit.com/",
        img: "/images/services/portfolio-img/zphotoedit.jpg",
      },
      {
        title: "My Orthosoft",
        tech: "Cake PHP",
        link: "http://www.myorthosoft.com/",
        img: "/images/services/portfolio-img/myorthosoft.jpg",
      },
      {
        title: "Saleswarp",
        tech: "Cake PHP",
        link: "https://saleswarp.com/",
        img: "/images/services/portfolio-img/saleswarp.jpg",
      },
    ],
  },
  {
    title: "International Ecomm Marketplace",
    subTabs: [
      {
        title: "Shopify",
        items: [
          {
            title: "Shop Modern Accessory",
            tech: "Shopify",
            link: "http://shopmodernaccessory.com/",
            img: "/images/services/portfolio-img/shopmodernaccessory.jpg",
          },
          {
            title: "Donna Bella Jewelry",
            tech: "Shopify",
            link: "http://www.donnabellajewelry.dk/",
            img: "/images/services/portfolio-img/donnabellajewelry.jpg",
          },
          {
            title: "E-Panneur",
            tech: "Shopify",
            link: "http://e-panneur.ca/",
            img: "/images/services/portfolio-img/e-panneur.jpg",
          },
        ],
      },
      {
        title: "Magento",
        items: [
          {
            title: "Sports456",
            tech: "Magento",
            link: "http://www.sports456.com/",
            img: "/images/services/portfolio-img/sports456.jpg",
          },
          {
            title: "All Extreme",
            tech: "Magento",
            link: "http://www.allextreme.in/",
            img: "/images/services/portfolio-img/allextreme.jpg",
          },
          {
            title: "Shoesuite",
            tech: "Magento",
            link: "https://www.shoesuite.ie/",
            img: "/images/services/portfolio-img/shoesuite.jpg",
          },
          {
            title: "Atkins",
            tech: "Magento",
            link: "https://www.atkins.ie/",
            img: "/images/services/portfolio-img/atkins.jpg",
          },
        ],
      },
      {
        title: "BigCommerce",
        items: [
          {
            title: "Coovy Sports",
            tech: "BigCommerce",
            link: "https://coovysports.com/",
            img: "/images/services/portfolio-img/coovysports.jpg",
          },
        ],
      },
      {
        title: "NopCommerce",
        items: [
          {
            title: "Luiolei",
            tech: "Technology: Asp.net, C#,SQL Server , Jquery.",
            link: "http://www.luiolei.com/",
            img: "/images/services/portfolio-img/luiolei.jpg",
          },
          {
            title: "Plaza Surf Sports",
            tech: "Technology: Asp.net, C#,SQL Server , Jquery.",
            link: "http://www.plazasurfsports.com/",
            img: "/images/services/portfolio-img/plazasurfsports.jpg",
          },
          {
            title: "Home Turph",
            tech: "NopCommerce",
            link: "https://www.hometurph.com/",
            img: "/images/services/portfolio-img/hometurph.jpg",
          },
        ],
      },
    ],
  },
]


const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We had a backlog of over 15,000 products waiting to be listed on our website and marketplace channels. Tech2Globe's product data entry team cleared the entire backlog in three weeks with near-perfect accuracy. Every product had complete specifications, proper images, and well-written descriptions. The quality checks they run internally are thorough. We were so impressed we made them our long-term data entry partner.",
    name: "Sarah Connolly | ShopRight Online Ltd.",
    location: "Ireland",
},
{
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Accurate and fast product data entry is critical in our sports equipment business. Tech2Globe delivered on both. They handled complex product variants — sizes, colors, and compatibility specs — with precision. Our online store went live months ahead of schedule thanks to their efficiency. The team was responsive to feedback and made corrections immediately whenever needed. Highly professional.",
    name: "Sven Eriksson | ScandiSport A/S",
    location: "Denmark",
},
{
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Our product catalog contains thousands of electronics items with highly technical specifications. Tech2Globe's data entry team demonstrated excellent understanding of technical attributes and entered data accurately across our e-commerce platform. They maintained a 99.5% accuracy rate throughout the project. Communication was professional and the workflow was well-structured. We will continue working with them.",
    name: "Yuki Tanaka | TechMart Japan Co., Ltd.",
    location: "Japan",
},
{
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Entering product data for our handcrafted home décor items required attention to detail and a good aesthetic sensibility. Tech2Globe surprised us with the quality of their descriptions and the care they took with attribute mapping. Products went live looking polished and complete. Conversion rates on newly listed products were 18% higher than our previous listings. We are very pleased.",
    name: "Nadia Schneider | AlpineHome Décor AG",
    location: "Switzerland",
},
{
    id: 5,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We were launching a new e-commerce platform and needed thousands of products entered quickly and correctly. Tech2Globe's team worked efficiently, delivering high-quality data entry with accurate categories, pricing, and descriptions. They even flagged inconsistencies in our source data and helped us resolve them before going live. Their proactive approach saved us significant rework time. Excellent service.",
    name: "Adebayo Okonkwo | Lagos Superstore Online",
    location: "Nigeria",
},
];

const faqs = [
  {
    id: "One",
    question: "What are ecommerce product data entry services?",
    answer:
      "Ecommerce product data entry services involve entering, organizing, updating, categorizing, and maintaining product information for online stores and marketplaces.",
  },
  {
    id: "Two",
    question: "What information is included in product data entry?",
    answer:
      "Product data can include titles, descriptions, prices, SKUs, specifications, categories, attributes, images, variations, inventory information, and other product details.",
  },
  {
    id: "Three",
    question: "Can you handle bulk product data entry?",
    answer:
      'Yes. Product data entry workflows can be structured for large catalogs and bulk product projects. Tech2Globe\'s current portfolio includes projects involving tens of thousands of products and SKUs. <a href="/product-data-entry-services">Tech2Globe web Solutions LLP</a>',
  },
  {
    id: "Four",
    question: "Do you provide Amazon product data entry services?",
    answer:
      "Yes. Tech2Globe can support Amazon product catalog and data entry requirements, including product information, attributes, categories, and catalog updates.",
  },
  {
    id: "Five",
    question: "Do you provide Magento product data entry services?",
    answer:
      "Yes. Magento product data entry can include product information, attributes, categories, images, pricing, configurable products, and catalog updates.",
  },
  {
    id: "Six",
    question: "Can you update existing product catalogs?",
    answer:
      "Yes. Ongoing product data updates can include changes to prices, descriptions, specifications, images, categories, availability, and other catalog fields.",
  },
  {
    id: "Seven",
    question: "Can you work with multilingual product catalogs?",
    answer:
      'Yes. Tech2Globe provides multilingual product data support according to project requirements, including Spanish, German, French, and other languages. <a href="/product-data-entry-services">Tech2Globe web Solutions LLP</a>',
  },
];

const portfolioClients = [
  {
    initials: "USA",
    gradient: "#0b2e58",
    client: "US Retailer",
    country: "USA",
    project: "Bulk E-commerce Product Upload Initiative",
    desc: "Executed large-scale product data entry for US retailer launching on Shopify and Amazon, uploading 50,000+ products across both platforms.",
    category: "Shopify & Amazon Data Entry",
    result: "50,000+ SKUs entered • 99.6% accuracy",
},

{
    initials: "ES",
    gradient: "#0b2e58",
    client: "Spanish Retailer",
    country: "ES",
    project: "Multi-Language Product Catalog Entry",
    desc: "Managed multilingual product data entry for Spanish retailer expanding across six European markets with localized content and compliance.",
    category: "Multilingual Product Data Management",
    result: "30,000+ products • 98.9% accuracy",
},

{
    initials: "CA",
    gradient: "#0b2e58",
    client: "Canadian Healthcare Provider",
    country: "Canada",
    project: "Healthcare Product Catalog Database Population",
    desc: "Populated medical product database for Canadian healthcare provider ensuring regulatory compliance, accurate terminology, and zero-error processing.",
    category: "Specialized Medical Product Entry",
    result: "12,000+ medical products • 100% compliance",
},

{
    initials: "AU",
    gradient: "#0b2e58",
    client: "Australian Real Estate Platform",
    country: "Australia",
    project: "Real Estate Property Database Entry",
    desc: "Entered and optimized property listings for Australian real estate platform including details, images, and SEO-friendly descriptions at scale.",
    category: "Real Estate Listing Data Management",
    result: "25,000+ properties listed • 97.8% accuracy",
},

{
    initials: "BR",
    gradient: "#0b2e58",
    client: "Brazilian Fashion Retailer",
    country: "Brazil",
    project: "Fashion Retail Inventory System Population",
    desc: "Managed fashion inventory data entry for Brazilian retailer including product hierarchies, size/color variants, and structured catalog organization.",
    category: "Fashion E-commerce Data Entry",
    result: "45,000+ items • 180,000+ SKU variants",
},
];

const productDataFields = [
  "Product names and SKUs",
  "Product descriptions",
  "Product specifications",
  "Prices and discounts",
  "Product categories",
  "Product attributes",
  "Size and color variations",
  "Images and image URLs",
  "Inventory information",
  "Manufacturer details",
  "Shipping information",
  "Product metadata",
];

const serviceAccordionItems = [
  {
    id: "One",
    title: "Ecommerce Product Data Entry",
    paragraphs: [
      "We enter product information into ecommerce websites, online stores, and marketplace systems based on your specifications.",
      "Our team can work with product spreadsheets, supplier catalogs, PDFs, websites, images, databases, and other source formats to prepare and enter product information.",
    ],
  },
  {
    id: "Two",
    title: "Product Data Sourcing",
    paragraphs: [
      "When product information is available across different sources, our team can collect and organize the required details before entering them into your ecommerce system.",
      "This can include product descriptions, specifications, pricing information, images, attributes, and other catalog data.",
    ],
  },
  {
    id: "Three",
    title: "Product Categorization",
    paragraphs: [
      "Correct categorization helps customers find products more easily and keeps an ecommerce catalog organized.",
      "We can categorize products according to your existing taxonomy, marketplace requirements, product hierarchy, or predefined guidelines.",
    ],
  },
  {
    id: "Four",
    title: "Product Catalog Conversion",
    paragraphs: [
      "Businesses moving from one ecommerce platform or catalog format to another may need their product data converted into a new structure.",
      "Our team can help organize and convert product information while maintaining important fields, attributes, variations, and relationships.",
    ],
  },
  {
    id: "Five",
    title: "Product Catalog Indexing",
    paragraphs: [
      "Large catalogs can become difficult to manage when products are not organized consistently.",
      "We can support catalog indexing and structured product organization to help businesses maintain cleaner product databases.",
    ],
  },
  {
    id: "Six",
    title: "Product Data Updates",
    paragraphs: [
      "Product information changes regularly. Prices, specifications, descriptions, images, availability, and other details may need to be updated across an ecommerce catalog.",
      "Our team can provide ongoing product data updates according to your schedule and requirements.",
    ],
  },
  {
    id: "Seven",
    title: "Product Attribute and Variation Entry",
    paragraphs: [
      "Products with multiple sizes, colors, materials, models, or other variations require careful data entry.",
      "We can organize product attributes and variations according to your catalog structure to maintain consistency across product listings.",
    ],
  },
  {
    id: "Eight",
    title: "Amazon Product Data Entry Services",
    paragraphs: [
      "Managing product information on Amazon requires attention to product attributes, categories, variations, specifications, images, and other listing information.",
      "Our Amazon product data entry services can support sellers and retailers with product catalog preparation, product information entry, updates, categorization, and bulk catalog work.",
      "For large catalogs, structured data entry can also help reduce the manual workload involved in maintaining product information across marketplace listings.",
    ],
  },
  {
    id: "Nine",
    title: "Magento Product Data Entry Services",
    paragraphs: [
      "Magento stores can contain large product catalogs with multiple attributes, categories, configurable products, and variations.",
      "Our Magento product data entry services can support product creation, attribute entry, category assignment, pricing information, descriptions, images, and catalog updates.",
      "We can work according to your existing Magento catalog structure and product requirements.",
    ],
  },
];

const platforms = [
  { name: "Shopify", icon: <FaStore /> },
  { name: "Magento", icon: <FaShoppingCart /> },
  { name: "WooCommerce", icon: <FaShoppingBag /> },
  { name: "BigCommerce", icon: <FaStore /> },
  { name: "Amazon", icon: <FaAmazon /> },
  { name: "Walmart", icon: <FaShoppingCart /> },
  { name: "eBay", icon: <FaShoppingBag /> },
  { name: "PrestaShop", icon: <FaStore /> },
  { name: "cDiscount", icon: <FaShoppingCart /> },
  { name: "Other ecommerce platforms and marketplaces", icon: <FaLayerGroup /> },
];

const processSteps = [
  {
    icon: <FaSearch />,
    title: "1. Understand Your Product Data Requirements",
    text: "We first review your product fields, catalog structure, source files, platform requirements, product categories, variations, and formatting guidelines.",
  },
  {
    icon: <FaClipboardList />,
    title: "2. Collect and Organize Product Information",
    text: "Product information is gathered from the sources you provide or from approved data sources. The information is then organized according to the required product template.",
  },
  {
    icon: <FaUpload />,
    title: "3. Enter and Format Product Data",
    text: "Our team enters product information into the required spreadsheet, ecommerce platform, marketplace, or database. Fields are formatted according to your instructions and platform requirements.",
  },
  {
    icon: <FaDatabase />,
    title: "4. Categorize and Validate Products",
    text: "Products are assigned to the appropriate categories and reviewed for missing or inconsistent information.",
  },
  {
    icon: <FaCheckCircle />,
    title: "5. Quality Check",
    text: "Completed product data is reviewed for errors, formatting problems, missing fields, duplicate information, and other issues identified in the project guidelines.",
  },
  {
    icon: <FaSyncAlt />,
    title: "6. Upload and Maintain the Catalog",
    text: "After approval, the product data can be uploaded to the required ecommerce platform or marketplace. We can also provide ongoing updates and catalog maintenance.",
  },
];

const whyAccurateMatters = [
  {
    title: "Create Better Product Experiences",
    text: "Complete product information gives customers the details they need to compare products and make purchasing decisions.",
  },
  {
    title: "Maintain Consistent Catalogs",
    text: "Standardized product information helps keep large ecommerce catalogs organized across categories and platforms.",
  },
  {
    title: "Reduce Manual Work",
    text: "Outsourcing repetitive product data entry can reduce the workload for internal ecommerce teams.",
  },
  {
    title: "Support Large Catalog Operations",
    text: "Businesses with thousands of products can use dedicated product data entry support to manage catalog work more efficiently.",
  },
  {
    title: "Keep Product Information Updated",
    text: "Regular catalog updates help businesses maintain current prices, specifications, availability, and other product information.",
  },
];

const industryImages = [
  { name: "Retail", src: "/images/services/service-inner/retail.png", alt: "Retail" },
  { name: "Fashion", src: "/images/services/service-inner/textiles.png", alt: "Fashion" },
  { name: "Electronics", src: "/images/services/service-inner/media-&-entertainment.png", alt: "Electronics" },
  { name: "Healthcare", src: "/images/services/service-inner/health.png", alt: "Healthcare" },
  { name: "Automotive", src: "/images/services/service-inner/automotive.png", alt: "Automotive" },
  { name: "Real estate", src: "/images/services/service-inner/real-eastate.png", alt: "Real Estate" },
  { name: "Logistics", src: "/images/services/service-inner/delivery.png", alt: "Logistics" },
  { name: "Textiles", src: "/images/services/service-inner/textiles.png", alt: "Textiles" },
  { name: "Media and entertainment", src: "/images/services/service-inner/media-&-entertainment.png", alt: "Media and Entertainment" },
  { name: "Consumer products", src: "/images/services/service-inner/retail.png", alt: "Consumer Products" },
];

const whyChooseFocus = [
  "Accurate product information",
  "Structured catalog management",
  "Quality checks",
  "Large volume product processing",
  "Multilingual support",
  "Flexible project requirements",
  "Ecommerce platform support",
  "Ongoing catalog updates",
];

export default function ProductDataEntryServices() {

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.tech2globe.com/#organization",
        name: "Tech2Globe",
        url: "https://www.tech2globe.com/",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.tech2globe.com/#website",
        url: "https://www.tech2globe.com/",
        name: "Tech2Globe",
        publisher: {
          "@id": "https://www.tech2globe.com/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://tech2globe.com/product-data-entry-services#webpage",
        url: "https://tech2globe.com/product-data-entry-services",
        name: "Ecommerce Product Data Entry Services | Tech2Globe",
        description:
          "Outsource ecommerce product data entry services for product uploads, catalog conversion, categorization, data sourcing, updates, and bulk product management.",
        isPartOf: {
          "@id": "https://www.tech2globe.com/#website",
        },
        about: {
          "@id": "https://tech2globe.com/product-data-entry-services#service",
        },
        breadcrumb: {
          "@id": "https://tech2globe.com/product-data-entry-services#breadcrumb",
        },
        mainEntity: {
          "@id": "https://tech2globe.com/product-data-entry-services#service",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://tech2globe.com/product-data-entry-services#breadcrumb",
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
            name: "Ecommerce Product Data Entry Services",
            item: "https://tech2globe.com/product-data-entry-services",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://tech2globe.com/product-data-entry-services#service",
        name: "Ecommerce Product Data Entry Services",
        serviceType: [
          "Ecommerce product data entry",
          "Product data sourcing",
          "Product categorization",
          "Product catalog conversion",
          "Product catalog indexing",
          "Product data updates",
          "Product attribute and variation entry",
          "Amazon product data entry",
          "Magento product data entry",
        ],
        description:
          "Tech2Globe provides ecommerce product data entry services for product catalog creation, product uploads, data sourcing, categorization, catalog conversion, product information updates, and bulk product management across ecommerce websites, marketplaces, and platforms.",
        url: "https://tech2globe.com/product-data-entry-services",
        provider: {
          "@id": "https://www.tech2globe.com/#organization",
        },
        mainEntityOfPage: {
          "@id": "https://tech2globe.com/product-data-entry-services#webpage",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://tech2globe.com/product-data-entry-services#faq",
        url: "https://tech2globe.com/product-data-entry-services",
        isPartOf: {
          "@id": "https://tech2globe.com/product-data-entry-services#webpage",
        },
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer.replace(/<[^>]*>/g, ""),
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
      <Breadcrumb pageName="Product Data Entry Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="product data entry services" />
              <div className={Style.ContentDiv}>
                <h1 className={`${Style.headingText} pb-3`}>
                  Ecommerce Product Data Entry Services
                </h1>
                <p className="para-text">
                  Accurate product information is essential for running a successful ecommerce store. From product titles and descriptions to prices, specifications, images, categories, and variations, every detail needs to be entered correctly and maintained regularly.
                </p>
                <p className="para-text">
                  Tech2Globe provides <strong>ecommerce product data entry services</strong> for businesses that need reliable support with product catalog creation, product uploads, data sourcing, categorization, catalog conversion, and product information updates. Our team helps ecommerce businesses manage large product catalogs across websites, marketplaces, and ecommerce platforms.
                </p>
                <p className="para-text">
                  Whether you are launching a new store, migrating an existing catalog, or managing thousands of product listings, our product data entry team can handle the work according to your catalog structure and requirements.
                </p>

                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                  <span className={Style.HeadingIcon} aria-hidden="true">
                    <FaLightbulb />
                  </span>
                  What Are Ecommerce Product Data Entry Services?
                </h2>
                <p className="para-text">
                  Ecommerce product data entry involves collecting, organizing, entering, updating, and maintaining the information required to publish products on an online store or marketplace.
                </p>
                <p className="para-text">Depending on the project, product data can include:</p>
                <ul className={Style.ListColTwo}>
                  {productDataFields.map((field) => (
                    <li key={field}>{field}</li>
                  ))}
                </ul>
                <p className="para-text">
                  Accurate product data helps customers understand what they are buying and gives ecommerce businesses a more organized catalog.
                </p>

                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                  <span className={Style.HeadingIcon} aria-hidden="true">
                    <FaLayerGroup />
                  </span>
                  Our Product Data Entry Services
                </h2>
                <p className="para-text">
                  Tech2Globe provides a range of product data entry services that can be customized according to your catalog size, platform, industry, and workflow.
                </p>
                <div className={`${Style.PageAccordion} accordion`} id="accordionProductDataEntry">
                  {serviceAccordionItems.map((item, index) => {
                    const collapseId = `collapse${item.id}`;
                    const headingId = `heading${item.id}`;
                    const isFirst = index === 0;
                    return (
                      <div className={`${Style.AccordionItem} accordion-item`} key={item.id}>
                        <h2 className="accordion-header" id={headingId}>
                          <button
                            className={`${Style.AccordionButton} accordion-button${isFirst ? "" : " collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${collapseId}`}
                            aria-expanded={isFirst ? "true" : "false"}
                            aria-controls={collapseId}
                          >
                            {item.title}
                          </button>
                        </h2>
                        <div
                          id={collapseId}
                          className={`accordion-collapse collapse${isFirst ? " show" : ""}`}
                          aria-labelledby={headingId}
                          data-bs-parent="#accordionProductDataEntry"
                        >
                          <div className={`${Style.AccordionBody} accordion-body`}>
                            {item.paragraphs.map((paragraph, pIndex) => (
                              <p
                                key={pIndex}
                                className={`para-text${
                                  pIndex === item.paragraphs.length - 1 ? " mb-0" : ""
                                }`}
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                  <span className={Style.HeadingIcon} aria-hidden="true">
                    <FaShoppingCart />
                  </span>
                  Ecommerce Platforms We Support
                </h2>
                <p className="para-text">
                  Our product data entry workflows can be adapted for different ecommerce platforms and marketplaces.
                </p>
                <p className="para-text">Depending on your requirements, support can include:</p>
                <ul className={Style.PlatformList}>
                  {platforms.map((platform) => (
                    <li className={Style.PlatformItem} key={platform.name}>
                      <span aria-hidden="true">{platform.icon}</span>
                      <span>{platform.name}</span>
                    </li>
                  ))}
                </ul>
                <p className="para-text">
                  For platforms where Tech2Globe already provides dedicated product upload or marketplace services, we can connect the appropriate workflow instead of duplicating platform specific processes.
                </p>

                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                  <span className={Style.HeadingIcon} aria-hidden="true">
                    <FaCogs />
                  </span>
                  Our Product Data Entry Process
                </h2>
                <p className="para-text">
                  A structured process helps maintain product accuracy when working with large catalogs.
                </p>
                <div className="row">
                  {processSteps.map((step) => (
                    <div
                      className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3"
                      key={step.title}
                    >
                      <div className={Style.WaCardTwo}>
                        <div className={Style.CardIcon} aria-hidden="true">
                          {step.icon}
                        </div>
                        <div className={Style.WaCardBody}>
                          <h5>{step.title}</h5>
                          <p>{step.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className={`${Style.CtaBlock} text-center my-4 py-4`}>
                  <h3>Need Help With Product Data Entry?</h3>
                  <p className="mb-3">
                    Outsource your ecommerce product data entry and catalog management to Tech2Globe.
                  </p>
                  <a href="/contact-us" className={Style.CtaButton}>
                    Get a Free Quote
                  </a>
                </div>

                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                  <span className={Style.HeadingIcon} aria-hidden="true">
                    <FaCheckCircle />
                  </span>
                  Why Accurate Product Data Matters for Ecommerce
                </h2>
                <p className="para-text">
                  Product information directly affects how customers understand and evaluate products.
                </p>
                <p className="para-text">Accurate product data can help businesses:</p>
                <div className="row">
                  {whyAccurateMatters.map((item) => (
                    <div
                      className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3"
                      key={item.title}
                    >
                      <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                        <h5 className="fw-bold mb-2">{item.title}</h5>
                        <p className="text-muted medium mb-0">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                  <span className={Style.HeadingIcon} aria-hidden="true">
                    <FaDatabase />
                  </span>
                  Product Data Entry for Large Ecommerce Catalogs
                </h2>
                <p className="para-text">
                  Large catalogs require more than simply entering information into a spreadsheet.
                </p>
                <p className="para-text">
                  A catalog with thousands of products may contain multiple categories, variations, specifications, images, and product attributes. Maintaining consistency across these fields can become time consuming for an internal ecommerce team.
                </p>
                <p className="para-text">
                  Tech2Globe supports large scale product data projects and currently showcases project experience involving 50,000+ SKUs across Shopify and Amazon with a reported 99.6% accuracy rate, along with other catalog projects involving multilingual data and large product inventories.{" "}
                  <a href="/product-data-entry-services">Tech2Globe web Solutions LLP</a>
                </p>
                <p className="para-text">
                  Our workflows can be adapted for both one time catalog projects and ongoing product data management.
                </p>

                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                  <span className={Style.HeadingIcon} aria-hidden="true">
                    <FaUsers />
                  </span>
                  Multilingual Product Data Entry
                </h2>
                <p className="para-text">
                  Ecommerce businesses operating across multiple markets may need product information prepared in different languages.
                </p>
                <p className="para-text">
                  Tech2Globe provides multilingual product data support, including languages such as Spanish, German, French, and others, according to project requirements.{" "}
                  <a href="/product-data-entry-services">Tech2Globe web Solutions LLP</a>
                </p>
                <p className="para-text">
                  This can help businesses manage product catalogs when expanding into new markets or maintaining localized ecommerce stores.
                </p>

                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                  <span className={Style.HeadingIcon} aria-hidden="true">
                    <FaShoppingBag />
                  </span>
                  Industries We Support
                </h2>
                <p className="para-text">
                  Our product data entry and catalog support can be adapted for different industries, including:
                </p>
                <div className="row">
                  {industryImages.map((industry) => (
                    <div
                      className="col-lg-3 col-md-3 col-sm-6 col-xs-12 pb-3"
                      key={industry.name}
                    >
                      <div className={Style.ImageBox}>
                        <Image
                          src={industry.src}
                          alt={industry.alt}
                          width={55}
                          height={55}
                        />
                        <h5>{industry.name}</h5>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="para-text">
                  The exact workflow depends on the product type, catalog structure, data sources, and ecommerce platform.
                </p>

                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                  <span className={Style.HeadingIcon} aria-hidden="true">
                    <FaAmazon />
                  </span>
                  Why Choose Tech2Globe for Product Data Entry?
                </h2>
                <p className="para-text">
                  Tech2Globe combines ecommerce experience with structured data management workflows to support product catalogs of different sizes.
                </p>
                <p className="para-text">Our approach focuses on:</p>
                <ul>
                  {whyChooseFocus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="para-text">
                  The current page also documents examples of large product data projects, including 50,000+ SKUs for a US retailer, 30,000+ products for a multilingual European catalog, and 45,000+ fashion items with 180,000+ SKU variants.{" "}
                  <a href="/product-data-entry-services">Tech2Globe web Solutions LLP</a>
                </p>

                <div className={`${Style.CtaBlock} text-center my-4 py-4`}>
                  <h3>Ready to Manage Your Product Catalog More Efficiently?</h3>
                  <p className="mb-3">
                    Talk to our ecommerce data experts about your product data entry requirements.
                  </p>
                  <a href="/contact-us" className={Style.CtaButton}>
                    Talk to Our Experts
                  </a>
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
      <CaseStudiesService caseStudies={caseStudies} />
      <ClientSlider testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </>
  )
};
