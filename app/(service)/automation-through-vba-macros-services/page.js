import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "Automation Through VBA Macros Services | VBA Services - Tech2Globe",
  description:
    "Get Automation Through VBA Macros Services with Tech2Globe. Our VBA consultants utilize VBA code and automation practices to help expand your productivity.",

  keywords: [
    "automation through vba macros services",
    "vba macros services",
    "vba automation services",
    "vba consulting services",
  ],

  alternates: {
    canonical: "https://www.tech2globe.com/automation-through-vba-macros-services",
  },

  openGraph: {
    title: "Automation Through VBA Macros Services | VBA Services - Tech2Globe",
    description:
      "Get Automation Through VBA Macros Services with Tech2Globe. Our VBA consultants utilize VBA code and automation practices to help expand your productivity.",
    url: "https://www.tech2globe.com/automation-through-vba-macros-services",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Automation Through VBA Macros Services | VBA Services - Tech2Globe",
    description:
      "Get Automation Through VBA Macros Services with Tech2Globe. Our VBA consultants utilize VBA code and automation practices to help expand your productivity.",
  }
};

const pageHeaderData = {
  title: "Magento Development Company",
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
  { heading: "Industries We Serve", links: usefullinks },
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


export default function MagentoDevelopmentCompany() {
  return (

    <>
      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Magento Development Company" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner pageName="Magento Development Company" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
              <div className={Style.ContentDiv}>
                <p>Utilizing Excel's automation tools, you can achieve variety of steps - like bringing in CSV files, including headers, moving segments, formatting text, and more - with a single click. As master Excel automation with VBA consultants, we all together break down the system you have set up, assess the issues you are facing, and create strategies that will deliver the results you need. Tech2Globe have reliably given powerful, quality solutions for customers of all sizes in an assortment of industries, including business, government agencies and banking institutions.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Advantages of Using Tech2Globe Excel Automation</h4>
                <p>In addition to sparing time and diminishing the effort expended with Tech2Globe, there are advantages to mechanizing tasks in Excel. Before we build up any VBA Macros automation solution, we work inseparably with customers to understand their individual objectives and the difficulties they are facing. These incorporate the following:</p>
                <ul>
                  <li>Normalized document formats and steady outcomes</li>
                  <li>Better reporting</li>
                  <li>No programming information required (if macros or include add-ins are utilized)</li>
                  <li>Integration with applications, for example, Microsoft Word, PowerPoint MS Outlook</li>
                  <li>Ability to complete work when somebody is out of the office</li>
                </ul>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Tech2Globe Have Expert Microsoft Excel Consultants</h4>
                <p>Your business could altogether profit by automating lot of the time-consuming and redundant procedures, and our accomplished excel macros and VBA consultants will utilize VBA code and automation practices to assist you with expanding your productivity and make your business forms simpler.</p>

                <p>Tech2Globe give excel consulting services and training on the best way to make dashboards to disentangle your information, by utilizing powerful information perception instruments. With our Excel consultancy services, you are getting direct help from experts who have the experience consulting with businesses of all sizes and industries.</p>
              </div>

              <div className={Style.ContentDiv}>
                <h4>Why Tech2Globe as Excel Automation and VBA Services?</h4>
                <p>Tech2Globe has master Microsoft Excel advisors. We are here to support you.</p>
                <ul>
                  <li>At Tech2Globe we are trained excel consultants and we give expert Excel Consulting support services to business.</li>
                  <li>We do so either on location or remotely, whichever meets your requirements and financial plan.</li>
                  <li>Tech2Globe can deal with a project basis or hourly basis just as working full time or part time, whichever is required.</li>
                  <li>When it comes to being expert excel automation and VBA specialists you can say we composed the book on it, truly.</li>
                </ul>
                <p>If you want leading VBA consulting services for your business, get in touch with us now.</p>
              </div>

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>
          </div>

        </div>
      </section >

      <ClientSlider testimonials={testimonials} />


    </>
  )
};