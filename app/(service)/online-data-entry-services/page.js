import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import { FaHandPointRight } from "react-icons/fa";
import FaqSection from "@/app/components/services/faqs/faqs";

export const metadata = {
  title: "Best Online Data Entry Services - Tech2globe",
  description:
    "Tech2Globe is a pioneer in giving quality online data entry services. Our exceptionally trained specialists can assist you with finishing all your data section within time.",
  keywords:
    "Online data entry services, Outsource online data entry services, Online data entry services company, Data entry services in India.",
  openGraph: {
    title: "Best Online Data Entry Services - Tech2globe",
    description:
      "Tech2Globe is a pioneer in giving quality online data entry services. Our exceptionally trained specialists can assist you with finishing all your data section within time.",
    url: "https://www.tech2globe.com/online-data-entry-services",
    type: "website",
  },
  twitter: {
    card: "summary",
    description:
      "Tech2Globe is a pioneer in giving quality online data entry services. Our exceptionally trained specialists can assist you with finishing all your data section within time.",
  },
  alternates: {
    canonical: "https://www.tech2globe.com/online-data-entry-services",
  },
};

const pageHeaderData = {
  title: "Online Data Entry",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Restaurant Menu Entry Services", path: "/restaurant-menu-entry-services" },
  { id: 2, name: "Financial Data Entry Services", path: "/financial-data-entry-services" },
  { id: 3, name: "Catalog Management", path: "/catalog-management-services" },
  { id: 4, name: "Data Processing Services", path: "/data-processing-services" },
  { id: 5, name: "Data Product Entry", path: "/product-data-entry-services" },
];

const usefulLinks = [
  { id: 6, name: "Food Industries", path: "/food-industries-services" },
  { id: 7, name: "Non-profit Organization", path: "/non-profit-organizations-services" },
  { id: 8, name: "Medical And Health", path: "/medical-and-health-services" },
  { id: 9, name: "Translation Firms", path: "/translation-firms-services" },
];


const sidebarSections = [
  { heading: "Resources", links: resources },
  { heading: "Industries We Serve", links: usefulLinks },
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
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "https://www.luiolei.com/",
        img: "/images/services/portfolio-img/luiolei.jpg",
      },
      {
        title: "Plaza Surf Sports",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "http://www.plazasurfsports.com/",
        img: "/images/services/portfolio-img/plazasurfsports.jpg",
      },
      {
        title: "Shopaloo",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "https://shopaloo.com/",
        img: "/images/services/portfolio-img/shopaloo.jpg",
      },
      {
        title: "Sports456",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "https://www.sports456.com/",
        img: "/images/services/portfolio-img/sports456.jpg",
      }
    ],
  },
  {
    title: "Web Stores Design & Dev",
    items: [
      {
        title: "Consult for PPP",
        tech: "Asp.net, C#, SQL Server, Jquery.",
        link: "https://consultforppp.com/",
        img: "/images/services/portfolio-img/consultforppp.jpg",
      },
      {
        title: "Devouttechs",
        tech: "Asp.net, C#, SQL Server, Jquery.",
        link: "http://devouttechs.com/",
        img: "/images/services/portfolio-img/devouttechs.jpg",
      },
      {
        title: "Geturkart",
        tech: "Asp.net, C#, SQL Server, Jquery.",
        link: "https://geturkart.com/",
        img: "/images/services/portfolio-img/geturkart.jpg",
      },
      {
        title: "Nopextensions",
        tech: "Asp.net, C#, SQL Server, Jquery.",
        link: "http://nopextensions.com/",
        img: "/images/services/portfolio-img/nopextensions.jpg",
      },
      {
        title: "Shopaloo",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "https://shopaloo.com/",
        img: "/images/services/portfolio-img/shopaloo.jpg",
      },
      {
        title: "Sports456",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "https://www.sports456.com/",
        img: "/images/services/portfolio-img/sports456.jpg",
      },
      {
        title: "Luiolei",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "https://www.luiolei.com/",
        img: "/images/services/portfolio-img/luiolei.jpg",
      },
      {
        title: "Plaza Surf Sports",
        tech: "Asp.net, C#,SQL Server , Jquery.",
        link: "http://www.plazasurfsports.com/",
        img: "/images/services/portfolio-img/plazasurfsports.jpg",
      }
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
      {
        title: "Webmallng",
        tech: "PHP, Mysql, Jquery.",
        link: "https://www.webmallng.com/",
        img: "/images/services/portfolio-img/webmallng.jpg",
      },
      {
        title: "UnotechonLine",
        tech: "PHP, Mysql, Jquery.",
        link: "https://www.unotechonline.com/",
        img: "/images/services/portfolio-img/unotechonline.jpg",
      },
      {
        title: "Lacanvas",
        tech: "PHP, Mysql, Jquery.",
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
          {
            title: "Director Derblinds",
            tech: "Magento",
            link: "https://www.directorderblinds.co.uk/",
            img: "/images/services/portfolio-img/directorderblinds.jpg",
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
            tech: "NopCommerce",
            link: "http://www.luiolei.com/",
            img: "/images/services/portfolio-img/luiolei.jpg",
          },
          {
            title: "Plaza Surf Sports",
            tech: "NopCommerce",
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

const faqs = [
  {
    id: "One",
    question: "Can I enjoy cost-saving of operational expenses by outsourcing to your company?",
    answer: `
        Of course, you can. It has been testified by our customers that they have obtained a cost-saving ranging from 45 to 70% while keeping quality and timelines.
      `,
  },
  {
    id: "Two",
    question: "How do you ensure confidentiality of my data?",
    answer: `
        We know how crucial it is to safeguard your business sensitive and private information. Therefore, there are strict security measures in place to ensure that your data is kept completely secured.
      `,
  },
  {
    id: "Three",
    question: "What is legal aspect of outsourcing of any confidential data?",
    answer: `
        We are ready to sign Non-disclosure agreement (NDA) and confidentiality agreement in this regard.
      `,
  },
  {
    id: "Four",
    question: "In what all modes, communication is enabled?",
    answer: `
        You can opt for a communication of your choice- mail, chat, Google Duo, hangout, phone or Skype. We have multilingual people with us and hence language will never emerge as a barrier.
      `,
  }
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I enjoy cost-saving of operational expenses by outsourcing to your company?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Of course, you can. It has been testified by our customers that they have obtained a cost-saving ranging from 45 to 70% while keeping quality and timelines."
      }
    },
    {
      "@type": "Question",
      "name": "How do you ensure confidentiality of my data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "We know how crucial it is to safeguard your business sensitive and private information. Therefore, there are strict security measures in place to ensure that your data is kept completely secured."
      }
    },
    {
      "@type": "Question",
      "name": "What is legal aspect of outsourcing of any confidential data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "We are ready to sign Non-disclosure agreement (NDA) and confidentiality agreement in this regard."
      }
    },
    {
      "@type": "Question",
      "name": "In what all modes, communication is enabled?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "You can opt for a communication of your choice—mail, chat, Google Duo, Hangout, phone, or Skype. We have multilingual people with us and hence language will never emerge as a barrier."
      }
    }
  ]
};

export default function OnlineDataEntry() {
  return (

    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Online Data Entry Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Online Data Entry Services" imageSrc="/images/services/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>As an entrepreneur, you should reliably evaluate and rethink the best strategies for being competitive in your picked industry. Whether you have tens or a couple million records to digitize and physically enter, Tech2Globe offer you professional, accurate <a href="/data-entry-services" className="text-decoartion-underline fw-normal">data entry services</a> . Consolidating the top tier innovation we at present handle more than 200 million reports per year.</p>

                <p>Tech2Globe have been supporting companies with their data entry services all around since 10 years. With all around prepared data entry experts, we ensure precision in data entry; assist you with achieve cost-savings of over 40%, and make data entry outsourcing affordable. Tech2Globe offers moderate online data entry solutions in different areas and industries like land, eCommerce, legal, education, corporate, and so forth. Data entry specialists in our organization guarantee you of great, high security, and precise online data entry services at financially savvy costs.</p>

                <p>We give a wide scope of online data entry outsourcing services to SME&apos;s and significant organizations just as people</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Online Data Entry Services We Offer</h2>

                <p>Tech2Globe is a pioneer in giving quality online data entry services. Our group contains probably the most talented and experienced data entry specialists. We give high-quality services inside snappy turnaround time. Some of the key online data entry services we give incorporate</p>

                <ul className={Style.TwoCol}>
                  <li>Online data entry for product catalogs (onto web-based systems)</li>
                  <li>Data entry from hard/soft copy to any database format</li>
                  <li>Online data entry for e-books — data entry from e-books and e-magazine publications on the internet</li>
                  <li>Insurance claim forms online data entry</li>
                  <li>PDF document indexing</li>
                  <li>Online data capture services</li>
                  <li>Images online data entry</li>
                  <li>Online order entry and follow up</li>
                  <li>Web-based indexed document retrieval services, tools, and support</li>
                  <li>Online data entry for mailing lists/labels</li>
                  <li>Online data entry for legal documents</li>
                  <li>Online completion of surveys and survey forms</li>
                </ul>

                <p>The online data entry services give you a stage to include the information from different sources and gather the data on a specific web-based portal or electronic database. Outsource online data entry services will assist you with saving the desk work and move the information into digital form efficiently.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Complete Suite of Our Online Data Entry Services</h2>

                <p>Tech2Globe offers the widest range of online data entry services to businesses of all sizes. Apart from English, we provide online data entry services in the entire major languages including, Spanish, German, French, and many more. All our services are ISO certified for quality and data security.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Online Data Entry Process Flow</h2>

                <p>Tech2Globe believe in furnishing our customers with the best quality services inside a brief timeframe. This is possible by utilizing exceptionally smoothed out and precise data entry processes. Some of the key advances engaged with our procedure are listed here –</p>

                <ul>
                  <li>Input files are obtained from a server, database, FTP, URL, etc.</li>
                  <li>Data is entered into an online tool, like a CRM tool, a client based tool or a remote tool</li>
                  <li>A QC check is done online</li>
                  <li>If there are any errors, the changes are carried out</li>
                  <li>The final files are saved, and client access provided</li>
                  <li>Subsequent client requested changes if any are made online</li>
                </ul>

                <p>Tech2Globe is a main supplier of online data entry services in India and a progression of other <a href="/data-management-services" className="text-decoration-underline fw-normal">data management services</a> to worldwide customers. Our exceptionally trained and experienced data entry specialists can assist you with finishing all of your information section needs inside brisk turnaround time. We utilize probably the latest and best data entry tools and technologies while offering our types of assistance. All of our services and procedures are ISO certified and observe worldwide standard rules.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h2>Tools we leverage in Online Data Entry Services</h2>

                <p>We have cutting-edge tools and equipment used for data entry services in India to get you through modest edge like Adobe Acrobat reader DC, Abbyy FineReader, Tesseract, OmniPage, Readiris, Docufree, Prizmo, and Soda PDF Premium.</p>
                <p>Get in touch with us today to know how you can get top-notch online data entry services company, assigned data entry experts, quick turnaround times and save up to 60%! Connect with Tech2Globe today!</p>
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>
          </div>

        </div>
      </section>

      <FaqSection faqs={faqs} />

      <div className="StoreCreationTabs">
        <PortfolioTabs data={portfolio} />
      </div>
    </>
  )
};