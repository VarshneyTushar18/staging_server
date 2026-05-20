import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import { FaChartBar, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaLightbulb, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";

export const metadata = {
  title: "Outsource Ecommerce Product Data Entry Solutions Services",
  description:
    "Simplify product management using the best outsource ecommerce product data entry solutions services to handle high-volume data entry with an efficient process.",
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
    title: "Outsource Ecommerce Product Data Entry Solutions Services",
    siteName: "Tech2Globe web Solutions LLP",
    description:
      "Simplify product management using the best outsource ecommerce product data entry solutions services to handle high-volume data entry with an efficient process.",
    url: "https://www.tech2globe.com/product-data-entry-services"
  },
  twitter: {
    card: "summary_large_image",
    title: "Outsource Ecommerce Product Data Entry Solutions Services",
    description:
      "Simplify product management using the best outsource ecommerce product data entry solutions services to handle high-volume data entry with an efficient process."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/product-data-entry-services"
  }
};

const pageHeaderData = {
  title: "E-Commerce Product Data Entry Services",
  description:
    "Every one of the products listed on the online business site should be categorized precisely and the right data must be entered for customers to see them. Accurate data entry is of most extreme significance to get all the product details set up.",
  buttonText: "Contact us",
  buttonLink: "#",
  backgroundImage: "/images/services/data-mining-services-banner.jpg", // your banner image
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
    docLink: "https://www.tech2globe.com/casestudies-docs1/Case%20Study-Product%20Data%20Entry.pdf",
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
    text: "They took care of uploading all our product information onto our website, saving us tons of time. Their team is accurate and detail-oriented, ensuring our listings are complete and optimized.",
    name: "Sarah Jones, Marketing Manager",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We recently launched a new product line and needed help getting everything online fast. Tech2Globe’s product data entry services were perfect. They handled all the product details, descriptions, and images, and got us up and running quickly. A big thanks to their team",
    name: "David Kim, CEO",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Their team understands the importance of accurate product information and optimizes our listings for search engines. This has led to a significant increase in website traffic and sales. They have become a valuable partner for our e-commerce business!",
    name: "Dr. Lee Garcia, Head of E-commerce",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We are impressed by their ability to handle our large product catalog. They can handle different product formats and ensure consistency across all platforms. Their team is responsive and always available to answer questions.",
    name: "Michael Hernandez, Product Manager",
  },
  {
    id: 5,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Their service is flexible and can handle any size product inventory. They ensure our product listings are accurate and up-to-date, which keeps our customers happy. We're glad we found them!",
    name: " Emily Garcia, Marketing & Sales Associate",
  },
];

const faqs = [
  {
    id: "One",
    question: "Are your services cost-effective?",
    answer: `
        Yes, our services are cost-effective. When you outsource to Tech2Globe then it will decrease you 50-70% of your operational cost. Although we provide our customers with cost-competitive services, we do not compromise on quality.
      `,
  },
  {
    id: "Two",
    question: " What is your TAT?",
    answer: `
        Turn-around Time depends upon the size of the project. Although we offer our customers is our quick TAT. So outsource to Tech2Globe for the fast turn-around time or quick delivery of the project.
      `,
  },
  {
    id: "Three",
    question: "Do you sign non-disclosure agreements?",
    answer: `
        Yes, we sign non-disclosure agreements for every customer who outsources to Tech2Globe. Outsource to Tech2Globe and experience worry-free outsourcing.
      `,
  },
  {
    id: "Four",
    question: "How can I outsource to Tech2Globe? What I need to do?",
    answer: `
        Just fill the form below our executive will get back to you or you can mail your details on info@tech2globe.com
      `,
  },
  {
    id: "Five",
    question: "Do you have the adequate infrastructure and technology to support my business processes?",
    answer: `
        Yes. Tech2Globe use the very best and the latest in software, technology and infrastructure. By outsourcing you can save on investing on expensive software and technology as we use the very best in both. All our office have best-of-breed infrastructure.
      `,
  },
];

export default function BulkProductUpload() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are your services cost-effective?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our services are cost-effective. When you outsource to Tech2Globe then it will decrease you 50-70% of your operational cost. Although we provide our customers with cost-competitive services, we do not compromise on quality."
        }
      },
      {
        "@type": "Question",
        name: "What is your TAT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Turn-around Time depends upon the size of the project. Although we offer our customers is our quick TAT. So outsource to Tech2Globe for the fast turn-around time or quick delivery of the project."
        }
      },
      {
        "@type": "Question",
        name: "Do you sign non-disclosure agreements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we sign non-disclosure agreements for every customer who outsources to Tech2Globe. Outsource to Tech2Globe and experience worry-free outsourcing."
        }
      },
      {
        "@type": "Question",
        name: "How can I outsource to Tech2Globe? What I need to do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Just fill the form below our executive will get back to you or you can mail your details on info@tech2globe.com"
        }
      },
      {
        "@type": "Question",
        name: "Do you have the adequate infrastructure and technology to support my business processes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Tech2Globe use the very best and the latest in software, technology and infrastructure. By outsourcing you can save on investing on expensive software and technology as we use the very best in both. All our office have best-of-breed infrastructure."
        }
      }
    ]
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
                <p>Every one of the products listed on the online business site should be categorized precisely and the right data must be entered for customers to see them. Accurate data entry is of most extreme significance to get all the product details set up. Tech2Globe is one of the main online catalog creation and e-commerce data entry specialist organizations who can offer the heartiest help for your e-commerce platform. The experts at Tech2Globe are knowledgeable in offering exact and precise <strong>e-commerce product data entry services</strong> to the various retailers.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3 pb-3">What we offer on Product Data Entry?</h2>
                <p>Having an in-house product data entry team for your e-commerce wants is a costly affair, in this way employing a third-party specialist organization like Tech2Globe bodes well. Tech2Globe has been in the information the board business for very nearly two decades now. Some of the key e-commerce product data upload services we offer incorporate -</p>
                <ul className={Style.ListColTwo}>
                  <li>E-Commerce Product Data Entry</li>
                  <li>E-Commerce Product Data Sourcing</li>
                  <li>E-Commerce Catalog Conversion</li>
                  <li>E-Commerce Catalog Indexing and Developing</li>
                  <li>Updating Product Data</li>
                  <li>Product Categorization</li>
                  <li>Product Data Sourcing</li>
                </ul>
                <p>We have years of experience to deal with the huge volume of product data entry services at the most minimal cost with experienced product data entry specialists who give you bother free and precise, product data entry services. So, outsource product data entry services to Tech2Globe as we promise you better outcomes and yield inside the guaranteed time limit.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Our Process for Product Data Entry</h4>
                <p>If you have an eCommerce business, it is of most extreme significance to update the product information showed on the site.</p>
                <ul>
                  <li>Adding the product details to the eCommerce site</li>
                  <li>Updating the current data every once in a while</li>
                  <li>Product details, for example, feature or cost aren&apos;t consistent, thus, you have to keep an update</li>
                  <li>Gathering basic information from digitized catalogs</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Complete Suite of Our Product Data Entry Services</h4>
                <p>Tech2Globe offers the widest range of online data product entry services to businesses of all sizes. Apart from English, we provide online data entry services in the entire major languages including, Spanish, German, French, and many more. All our services are ISO certified for quality and data security.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Tools we leverage in Product Data Entry</h4>
                <p>We have cutting-edge tools and equipment used for data entry services in India to get you through modest edge like Adobe Acrobat reader DC, Abbyy FineReader, Tesseract, OmniPage, Readiris, Docufree, Prizmo, and Soda PDF Premium.</p>
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Industries We Provide Data Entry Services</h4>
                <p>Our experience in the data entry area has given us a few chances to work with customers from various enterprises. Global e-commerce companies have profited by product data entry companies due to cost-effective services. Some of the key verticals we give our quality services to incorporate -</p>

                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <Image
                        src="/images/services/service-inner/health.png"
                        alt="Healthcare"
                        width={55}
                        height={55}
                      />
                      <h5>Healthcare</h5>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <Image
                        src="/images/services/service-inner/automotive.png"
                        alt="Automotive"
                        width={55}
                        height={55}
                      />
                      <h5>Automotive</h5>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <Image
                        src="/images/services/service-inner/insurance.png"
                        alt="Insurance"
                        width={55}
                        height={55}
                      />
                      <h5>Insurance</h5>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <Image
                        src="/images/services/service-inner/brokerage.png"
                        alt="Customs Brokerage"
                        width={55}
                        height={55}
                      />
                      <h5>Customs Brokerage</h5>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <Image
                        src="/images/services/service-inner/education.png"
                        alt="Education"
                        width={55}
                        height={55}
                      />
                      <h5>Education</h5>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <Image
                        src="/images/services/service-inner/energy-&-utilities.png"
                        alt="Energy & Utilities"
                        width={55}
                        height={55}
                      />
                      <h5>Energy & Utilities</h5>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <Image
                        src="/images/services/service-inner/textiles.png"
                        alt="Textiles"
                        width={55}
                        height={55}
                      />
                      <h5>Textiles</h5>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <Image
                        src="/images/services/service-inner/real-eastate.png"
                        alt="Real Estate"
                        width={55}
                        height={55}
                      />
                      <h5>Real Estate</h5>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <Image
                        src="/images/services/service-inner/delivery.png"
                        alt="Logistics"
                        width={55}
                        height={55}
                      />
                      <h5>Logistics</h5>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <Image
                        src="/images/services/service-inner/customer-support.png"
                        alt="Telecommunication"
                        width={55}
                        height={55}
                      />
                      <h5>Telecommunication</h5>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <Image
                        src="/images/services/service-inner/media-&-entertainment.png"
                        alt="Media & Entertainment"
                        width={55}
                        height={55}
                      />
                      <h5>Media & Entertainment</h5>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 pb-3">
                    <div className={Style.ImageBox}>
                      <Image
                        src="/images/services/service-inner/retail.png"
                        alt="Retail"
                        width={55}
                        height={55}
                      />
                      <h5>Retail</h5>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudiesService caseStudies={caseStudies} />
      <PortfolioTabs data={portfolio} />
      <ClientSlider testimonials={testimonials} />
      <FaqSection faqs={faqs} />
    </>
  )
};