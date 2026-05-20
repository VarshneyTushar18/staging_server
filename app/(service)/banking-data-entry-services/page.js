import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";

export const metadata = {
  title: "Banking Data Entry Services | Banking Data Entry Services In India",
  description:
    "Tech2Globe provides online & offline Banking Data Entry Services to various industries. Banking data entry plays an essential role in financial organizations.",
  keywords: [
    "Banking data entry services in India",
    "banking data entry service providers",
    "outsource banking data entry services"
  ],
  openGraph: {
    title: "Banking Data Entry Services | Banking Data Entry Services In India",
    description:
      "Tech2Globe provides online & offline Banking Data Entry Services to various industries. Banking data entry plays an essential role in financial organizations.",
    url: "https://www.tech2globe.com/banking-data-entry-services",
    siteName: "Tech2Globe",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Banking Data Entry Services | Banking Data Entry Services In India",
    description:
      "Tech2Globe provides online & offline Banking Data Entry Services to various industries. Banking data entry plays an essential role in financial organizations."
  },
  alternates: {
    canonical: "https://www.tech2globe.com/banking-data-entry-services"
  }
};
const pageHeaderData = {
    title: "Banking Data Entry Services",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};

const resources = [
    { id: 1, name: "Bulk Product Upload Services", path: "/bulk-product-upload-services" },
    { id: 2, name: "Chat Support Services", path: "/chat-support-services" },
    { id: 3, name: "Banking Data Entry Services", path: "/banking-data-entry-services" },
    { id: 4, name: "IT Staffing Services", path: "/it-staffing" },
];

const sidebarSections = [
    { heading: "Resources", links: resources },
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


export default function BankingDataEntry() {
    return (

        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Banking Data Entry Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Banking Data Entry Services" imageSrc="/images/services/data-management-banner-1.jpg" />
                            <div className={Style.ContentDiv}>
                                <h2>Improve Your Business Level With The Help Of Banking Data Entry Services</h2>
                                <p>Are you worrying about business improvement? The banking data entry plays essential role and critical system of different financial organizations, investment industries and banks. It is vital region that assist in creating report require to sent to particular investors, corporate clients and various industries. Now, many of the experienced business enterprise enroll in the banking data entry industry to meet their needs for what they expend. It also assists to observe significant finances that enter and funds being cashed out by customers and clients. You have to get in touch with only reliable firm and you can get whatever you expect in the business improvement or earning profits. Mainly, the firm which experienced in the data entry services assists entire banking sectors as well as financial institutes to benefit their business activities. The firm also assists by saving plenty of valuable money, effort and time and offers challenging benefits while compared to others in the same field. By the use of outsourcing bank data entry services possible to deliver high excellence in the right time forever.</p>

                                <p>The <Link href="/data-entry-services" className="text-decoration-underline text-muted">data entry services</Link> are one of the top and leading fields to deliver much industry experience to the business proprietors. The experienced firm also works with the contemporary financial software tools completely take care on entire banking along with related services exactly. The team of experienced experts undertakes broad scope of banking projects on any volume and achieves satisfactory results in the required period or turn around in the time. The firm also take care the banking projects and financial sheets improve systems that can create exact financial reports on regular basis, quarterly, monthly as well as yearly basis. The banking sectors also engage in the following data as suggested on diverse pay slips, documents and other vouchers. The expert alsoassist enter data in the exact records and directly access database from these mentioned vouchers and slips exactly without error. Make sure to complete correctness and the professional will soon verify every entry in the records of the database. The expert also performs small scale check and inspects figures randomly. The expert also specialize on both online and <Link href="/offline-data-entry-services" className="text-decoration-underline text-muted">offline data entry</Link> task. The main aim of offering data entry task has to meet the customer task and finish before the given deadline.</p>

                                <p>The expert focus on providing solutions to customer as contemporary and cater to entire business <Link href="/data-management-services" className="text-decoration-underline text-muted">data management</Link> goals and deliver instant outputs at affordable price. The expert also deliver exact data entry at different format like online sources, pdf format, manually written documents, direct database or excel scanned images according to specific requirements. The experts spend their entire time in analyzing entire data and give exact solutions all the time. Some of the beneficial advantages on choosing professional data entry firm in the following.</p>

                                <ul>
                                  <li>They also spend less time but give superior value.</li>
                                  <li>The storage costs for whatever the document format also reduced.</li>
                                  <li>The infrastructural premium essentially decreased.</li>
                                  <li>The data available from at anytime and anyplace.</li>
                                  <li>Businesses and companies also bring the data with backed up.</li>
                                </ul>

                                <p>Before you engage with the firm you have to ensure the entire details and offering benefits to you. The professionals are forever right person to make your deal with full satisfaction and give lot of opportunity to achieve real success. Get ready to meet your bright future only with the expert assistance.</p>
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

            <ClientSlider testimonials={testimonials} />

        </>
    )
};