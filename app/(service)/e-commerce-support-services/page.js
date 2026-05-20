import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaChartBar, FaClock, FaCogs, FaCube, FaDatabase, FaDownload, FaLightbulb, FaSearch, FaShieldAlt, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "E-Commerce Support Services | E-Commerce Support Specialists",

  description:
    "Outsource eCommerce support services to Tech2Globe. Our eCommerce specialists help manage business tasks efficiently and drive consistent online sales growth.",

  keywords: [
    "E-Commerce Support Services",
    "eCommerce Website Support Specialist",
    "E-Commerce support team",
    "E-Commerce support specialists",
    "eCommerce Website Support experts",
    "eCommerce maintenance services",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/e-commerce-support-services",
  },

  openGraph: {
    title: "E-Commerce Support Services | E-Commerce Support Specialists",
    description:
      "Outsource eCommerce support services to Tech2Globe. Our eCommerce specialists help manage business tasks efficiently and drive consistent online sales growth.",
    url: "https://www.tech2globe.com/e-commerce-support-services",
    siteName: "Tech2Globe",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Support Services | E-Commerce Support Specialists",
    description:
      "Outsource eCommerce support services to Tech2Globe. Our eCommerce specialists help manage business tasks efficiently and drive consistent online sales growth.",
  },
};

const pageHeaderData = {
  title: "E-Commerce Support Services",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};


const resources = [
  { id: 1, name: "Restaurant Menu Entry Services", path: "/restaurant-menu-entry-services" },
  { id: 2, name: "Financial Data Entry Services", path: "/financial-data-entry" },
  { id: 3, name: "Catalog Management", path: "/catalog-management-services" },
  { id: 4, name: "Data Processing Services", path: "/data-processing-services" },
  { id: 5, name: "Data Product Entry", path: "/product-data-entry-services" },
];

const usefullinks = [
  { id: 1, name: "Food Industries", path: "/food-industries-services" },
  { id: 2, name: "Non-profit Organization", path: "/non-profit-organizations-services" },
  { id: 3, name: "Medical And Health", path: "/medical-and-health-services" },
  { id: 4, name: "Translation Firms", path: "/translation-firms-services" },
];



const sidebarSections = [
  { heading: "Resources", links: resources },
  { heading: "Useful Links", links: usefullinks },
];


const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "They have excellent service and management, this is honest review after a month of experience with them, team is hardworking, knowledgeable and do every task on time. I hope they continue to deliver me same output.",
    name: "Roxel- Account Management India",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Excellent Team, good results in sales",
    name: "Andriana- Amazon Sponsored Ads USA",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Excellent service by Tech2globe, brilliant service and hardworking",
    name: "Neo Global- Vendor Account Management UK",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Courteous, professional, quality work, best bang for your buck",
    name: " Medi Hub- Amazon Store Creations USA",
  },
  {
    id: 5,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Very professional and creative team. They patiently worked on changes I asked for and delivered on time. Thank you.",
    name: "Teliamed- Amazon Enhance Brand Content USA",
  },
];

const faqs = [
  {
    id: "One",
    question: "Do I need a minimum commitment?",
    answer: `
        Yes, since we will be dedicated a specific staff member as your account manager and will be allocating resources for your project, we can only make this possible with a monthly commitment.
      `,
  },
  {
    id: "Two",
    question: " How will I communicate with you?",
    answer: `
        We prefer communication through our client project management dashboard. However, in the case of an emergency, you can also contact us via email, hangout, Skype and telephone.
      `,
  },
  {
    id: "Three",
    question: "What is your turnaround time?",
    answer: `
        Every customer support ticket is replied to within 24 hours. In emergency situations, your issue will be made a top level priority.
      `,
  },
  {
    id: "Four",
    question: "What is your level of experience with diverse industry verticals?",
    answer: `
        As we have been around for a decade and a half, we are experienced with a great variety of industry verticals.
      `,
  },
  {
    id: "Five",
    question: "In which parts of the world are your clients based?",
    answer: `
        YWe have clients all over the world. However, the majority of them are located in UK, US, Australia and countries of Continental Europe.
      `,
  },
];

export default function ecommercesupport() {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        "name": "Do I need a minimum commitment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes. As we dedicate a specific account manager and allocate resources for your project, a monthly commitment is required.",
        },
      },
      {
        "@type": "Question",
        "name": "How will I communicate with you?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "We primarily communicate through our client project management dashboard. In urgent cases, you may also reach us via email, Google Hangouts, Skype, or telephone.",
        },
      },
      {
        "@type": "Question",
        "name": "What is the turnaround time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "All customer support tickets are responded to within 24 hours. Emergency issues are handled with top priority.",
        },
      },
      {
        "@type": "Question",
        "name":
          "What is your level of experience with diverse industry verticals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "With over 15 years of experience, we have successfully supported clients across a wide range of industry verticals.",
        },
      },
      {
        "@type": "Question",
        "name":
          "In which parts of the world are your clients based?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Our clients are located worldwide, with a strong presence in the UK, US, Australia, and across Continental Europe.",
        },
      },
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="E Commerce Support Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="E Commerce Support Services" />
              <div className={Style.ContentDiv}>
                <h2>E-Commerce Support Services for Your Online Business Success</h2>
                <p>Keeping up a consistent volume of sales is the essential target of an online seller. With <strong>E-Commerce support specialists</strong> at Tech2Globe, it is only possible to accomplish this if there is strong back-office support. Tech2Globe provides plenty of eCommerce technical support services so that your business can work suitably and you can appreciate expanded income through sales. At Tech2Globe, we never feel worn out on improving your site and your conversion rate.</p>
                <p>E-commerce support services offer the level of specialized help you expect, from addressing all of your questions and concerns to troubleshooting unexpected glitches, updating non-working links, smoothing out content, and constantly testing your site's functionality. Our point is to ensure that the experience of any potential or returning client is smooth, uncomplicated, and as easy to use as could reasonably be expected.</p>

              </div>

              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Customized E-Commerce Support Services for Better Conversion</h2>
                <p>With Tech2Globe you get the chance to use industry know- how and experience of our eCommerce website support specialist. Our <strong>E-Commerce support services</strong> have been intended to enhance your change and customer retention rates. Our complete set of eCommerce back office support related tasks include:</p>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12  mb-3">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body text-center">
                        <img src="images/services/service-inner/amazon_icon.png"  alt="Amazon Product Listing" />
                        <h5 className="card-title text-danger py-3 mb-2">Amazon Product Listing</h5>
                        <p className="card-text mb-2">Delivering a rich array of <Link href="/product-data-entry-services">Amazon product data entry services</Link>, Tech2Globe supports online retailers in growing their business online.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12  mb-3">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body text-center">
                        <img src="images/services/service-inner/ebay.png"  alt="EBay Product Listing" />
                        <h5 className="card-title text-danger py-3 mb-2">EBay Product Listing</h5>
                        <p className="card-text mb-2">Our eBay <Link href = "/product-data-entry-services">product data entry</Link> specialists regularly manage and update product catalogs, and aim at developing a centralized shopping destination and make informed purchase decisions.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12  mb-3">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body text-center">
                        <img src="images/services/service-inner/magento.png"  alt="Magento Product Listing" />
                        <h5 className="card-title text-danger py-3 mb-2">Magento Product Listing</h5>
                        <p className="card-text mb-2">We can handle high-volume and complex <Link href="/magento-product-upload-services">Magento product upload </Link> projects, right from collating product details from various sources to keying-in and updating them in the product catalog.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12  mb-3">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body text-center">
                        <img src="images/services/service-inner/shopify.png"  alt="Shopify Data Entry" />
                        <h5 className="card-title text-danger py-3 mb-2">Shopify Data Entry</h5>
                        <p className="card-text mb-2">Whether you are selling physical and digital products or services, Tech2Globe can help you manage your online store with utmost accuracy. As part of our <strong>Ecommerce maintenance services</strong>, we ensure that your Shopify store is consistently updated and running smoothly.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12  mb-3">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body text-center">
                        <img src="images/services/service-inner/output.png"  alt="Magento Product Upload" />
                        <h5 className="card-title text-danger py-3 mb-2">Magento Product Upload</h5>
                        <p className="card-text mb-2">Over the last decade Tech2Globe has become identical with quick and accurate Magento Data Entry Services. It's the capable and skilled team of Magento specialists that is behind this tag.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12  mb-3">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body text-center">
                        <img src="images/services/service-inner/writing.png"  alt="Product Description Writing" />
                        <h5 className="card-title text-danger py-3 mb-2">Product Description Writing</h5>
                        <p className="card-text mb-2">When you outsource product description writing services to us, we initiate with a deep thoughtfulness of your target market so as to create precise, informative & engaging content that achieves your specific requirements and interests.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12  mb-3">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body text-center">
                        <img src="images/services/service-inner/review.png"  alt="Product Review Writing" />
                        <h5 className="card-title text-danger py-3 mb-2">Product Review Writing</h5>
                        <p className="card-text mb-2">Trusted by thousands of eCommerce store owners across the globe, Tech2Globe's <strong>E-commerce support specialists</strong> are renowned providers of product description writing services.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12  mb-3">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body text-center">
                        <img src="images/services/service-inner/photography.png"  alt="Product Photography Post Processing" />
                        <h5 className="card-title text-danger py-3 mb-2">Product Photography Post Processing</h5>
                        <p className="card-text mb-2">Tech2Globe holds specialization in offering product photo editing services for various industry segments, viz., apparels and accessories, jewelry, furniture, real estate, etc.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12  mb-3">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body text-center">
                        <img src="images/services/service-inner/order.png"  alt="Order & Inventory Management" />
                        <h5 className="card-title text-danger py-3 mb-2">Order & Inventory Management</h5>
                        <p className="card-text mb-2">As part of <strong>E-commerce support services</strong>, we help our clients in processing a number of customer orders with utmost accuracy, right from the moment orders are placed through to fulfillment, timely invoicing, and payment.</p>
                      </div>
                    </div>
                  </div>
                </div>




                <p>Here the skill of our e-commerce support team ends up being of great help. They are capable at taking care of client queries on telephone, email and online talk.</p>

              </div>
              <div className={Style.ContentDiv}>
                <h2 className="pt-3">Ecommerce support services are must have, know why</h2>
                <p>To us, it is essential to deliver you outstanding customer experiences and <strong>E-Commerce support services</strong>. This pushes sales and increases brand loyalty. Understanding the challenges of managing a profitable online store, we offer a full range of support services to help you focus on growth and simplify your operations.</p>
                <p>We have <strong>E-commerce support specialists</strong> who are experts in customer service, order fulfillment, and a host of other back-end duties. By contracting with us to handle these tasks, you can free up internal resources and guarantee that your clients get professional, timely help, which will build confidence and satisfaction.</p>
                <p>These little details together create a more “humanized” experience. The majority of happy clients will also tell others about their wonderful experiences, which will naturally increase brand loyalty.</p>
                <p>Therefore, let us take care of the administrative work while you concentrate on expanding your company and meeting or exceeding client expectations.</p>

              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>

          </div>

          <div className="row pt-3">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Our Experts Understand You and Speak Multilingual Languages</h4>
                <p>Tech2globe provide help through well trained, capable and devoted e-commerce support specialists that is willing to lend you a hand to cut through the language barrier like German, French, Korean, English, Thai, Hindi, Chinese, etc. so that you can convey your opinions through e-mail and chat support.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Process for E-Commerce Support Services</h4>
                <p>When you outsource eCommerce store support tasks to Tech2Globe, our confirmed group turns into a virtual expansion of your group, working nonstop, to provide you with an exceptional, secure and optimized online presence.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Tools we leverage in Tech2Globe</h4>
                <p>We transcribe files from a wide assortment of digital and non-digital formats which incorporate MP3, MP4, WAV, AVI, FLV, WMV, MPEG4, MOV, WMA, FLAC, Word/Excel/Access records, and even the older organizations like DSS, CD, DVD, Cassettes, VHS tapes, and so on. We utilize these tools: OTranscribe, Express Scribe, The FTW Transcriber, Inqscribe, and Transcribe.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Master in All Languages and Major Sectors</h4>
                <p>Our transcriptionists are fluent in English, French, German, Spanish, Hindi, Arabic, Russian, and Bengali and are well-acquainted with idioms, phrases, vocabulary, and different accents, at par with any native speaker. Our group comprises of transcribers with particular information on different industry-explicit languages, empowering us to offer our low cost printed typing services to a wide scope of areas, including Media, Finance, NGO, Market Research, Academics Advertising, Healthcare, Retail, Education, Technology, Automotive, and numerous different sectors.</p>
                <p>For more data or to talk about your requirements, if you don't mind send an email to info@tech2globe.com or utilize the contact page.</p>
                <ul>
                  <li>Agreement is signed & the first month of service is started</li>
                  <li>A dedicated account manager is assigned to you & you are introduced to your team</li>
                  <li>Your account is configured in our client dashboard where you can begin uploading tasks</li>
                  <li>Time is logged in our client dashboard for every task you assign</li>
                  <li>Enjoy easy access to check on jobs & time logs at any time during the month</li>
                  <li>Upon completion of the first month a detailed hours report & invoice is sent to you for review</li>
                  <li>If there are any concerns or adjustments that need to be made regarding hours logged and tasks completed, we will resolve them immediately</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <h4 className="pt-3">Tools we use in E-Commerce Support Services</h4>
                <p>Tech2Globe will go about as extended hands to your in-house staff to convey eCommerce support services to you. Utilizing the latest tools and innovation, we will execute each task with improved exactness and spare time just as cash. Our e-commerce eCommerce website support experts ensure you get sufficient opportunity to sale with the basic business tasks without settling on back-end efficiency.</p>
                <ul>
                  <li>Zendesk</li>
                  <li>Freshdesk</li>
                  <li>Intercom</li>
                </ul>
                <p>Get in touch with us today to discover how Tech2Globe “eCommerce maintenance services” can empower your business to accomplish process efficiencies and quickened development.</p>
              </div>
            </div>
          </div>        </div>
      </section>


      <FaqSection faqs={faqs} />
      <ClientSlider testimonials={testimonials} />
    </>
  )
};