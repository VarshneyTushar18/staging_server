import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaHeadset, FaBullseye, FaUserTie, FaHandPointRight, FaArrowRight, FaAngleRight } from "react-icons/fa";

export const metadata = {
    title: "",
    description:
        "",
    keywords: [
        ""
    ],
    openGraph: {
        title: "",
        siteName: "Tech2Globe Web Solutions LLP",
        description:
            "",
        url: ""
    },
    twitter: {
        card: "summary_large_image",
        title: "",
        description:
            ""
    },
    alternates: {
        canonical: ""
    }
};

const pageHeaderData = {
    title: "Healthcare Data Mining Services",
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

const faqs = [
    {
        id: "One",
        question: "Since how long are you in the outsourcing field?",
        answer: `
        Tech2Globe have experience of 10 years in archiving and indexing outsourcing services and have successfully talented various projects of clients across the world. We have wide experience of working on different types of data entry projects.
      `,
    },
    {
        id: "Two",
        question: "What is your Turnaround Time (TAT)?",
        answer: `
        The skilled and proficient team of data entry operators at Tech2Globe is known for delivering projects in fast turnaround time. We are providing the TAT based upon the volume of work, complexity of work and the project deadline.
      `,
    },
    {
        id: "Three",
        question: "Are your services cost-effective?",
        answer: `
        Yes. When you outsource to Tech2Globe you be assured of saving more than 40-50% of your operating costs. Although we provide our customers with cost-competitive services, we do not compromise on quality. Outsource now and get access to quality solutions while cutting down costs.
      `,
    },
    {
        id: "Four",
        question: "Do you have the good infrastructure and technology to support business processes?",
        answer: `
        Yes. We use the very best and the latest in software, technology and infrastructure. By outsourcing you can save on investing on expensive software and technology as we use the very best in both. All our office have best-of-breed infrastructure.
      `,
    },

    {
        id: "Five",
        question: "How do I sign-off a contract or work order?",
        answer: `
        You will have to fill in details in a given format and fax us a signed copy. Apart from this, you can also send us your work order as an email attachment.
      `,
    },
];

export default function HealthcareDataMiningServices() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Healthcare Data Mining Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Healthcare Data Mining Services" imageSrc={"/images/services/service-inner/data-management-banner-1.jpg"} />

                            <div className={Style.ContentDiv}>

                                <p>We give high level of accuracy, timely deliveries, complete privacy and financially savvy healthcare data mining services for healthcare suppliers and back up plans. Our information mining groups utilize attempted and tried information extraction strategies to give you quality outcomes to specific set of data.</p>

                                <p>The healthcare data mining services providers at Tech2Globe have abilities to gather important data from almost all databases including Electronic Health Records (EHR), Electronic Medical Records (EMR), medical coverage claims, clinical imaging databases and others. We completely study explicit necessities of hospitals, clinics and doctors before executing any procedure. To help you in understanding useful patterns and trends, we total, process and analyze information from your current just as historical clinical records.</p>

                                <h2 className="mb-3">Healthcare Data Mining services</h2>
                                <hr />

                                <p>Tech2Globe is one of the complete healthcare data mining services providers, with 10+ long periods of industry experience. Our healthcare data mining services are intended to help human services suppliers, for example, emergency clinics, centers, pharmaceuticals, research associations, doctors, and insurance agencies and planned for expanding efficiencies while decreasing expenses simultaneously.</p>

                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="mb-0"> <FaAngleRight /> Web Data Extraction</p>
                                        <p className="mb-0"> <FaAngleRight /> Biomedical Data Aggregation</p>
                                        <p className=""> <FaAngleRight /> Healthcare Data Annotation</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p className="mb-0"> <FaAngleRight /> Document Processing</p>
                                        <p className="mb-0"> <FaAngleRight />  Relationship And Link Analysis</p>
                                        <p className=""> <FaAngleRight /> Data Support for AI/ML</p>
                                    </div>
                                </div>

                                <h2 className="mb-3">Process</h2>

                                <p>Our end to end healthcare data mining services empowers human services suppliers to improve client relationship the board and offer best treatment to their patients. Here is procedure of our health care data mining services:</p>

                                <p className="mb-0"> <FaAngleRight /> Mining critical information from clinical records</p>
                                <p className="mb-0"> <FaAngleRight /> Building predictive models by identifying patterns and trends</p>
                                <p className="mb-0"> <FaAngleRight /> Analyzing patient's profile, medical history, etc.</p>
                                <p className="mb-0"> <FaAngleRight /> Collating financial data and analyzing competitor standings</p>
                                <p className="mb-0"> <FaAngleRight /> Determining future trends and evaluating prevalent market situations</p>
                                <p className="mb-0"> <FaAngleRight /> Compiling and combining multiple datasets</p>
                                <p className="mb-0"> <FaAngleRight /> Summarizing reports for well-informed decisions</p>
                                <p> <FaAngleRight /> Organizing outcome in preferred file formats</p>

                                <p>Tech2Globe help healthcare institutions, assets, partners, members, and clinical experts in deciding viable clinical medicines, detecting fraud, verifying claims, directing preemptive analyses, and settling on all around educated choices.</p>

                                <h2>Tools</h2>
                                <p>Our <a href="data-mining-services" className="text-decoration-underline fw-bold">data mining</a> professionals have long periods of involvement in scalable healthcare data mining services; it encourages us to deal with any size of project with any complexity. To assist you with picking up business insights, we can examine significant information from large number of sources utilizing advanced tools like:</p>

                                <p className="mb-0"> <FaAngleRight /> Rapid Miner</p>
                                <p className="mb-0"> <FaAngleRight /> Orange</p>
                                <p className="mb-0"> <FaAngleRight /> Weka</p>
                                <p className="mb-0"> <FaAngleRight /> KNIME</p>
                                <p className="mb-0"> <FaAngleRight /> Sisense</p>
                                <p className="mb-0"> <FaAngleRight /> SQL Server Data Tools</p>
                                <p className="mb-0"> <FaAngleRight /> Apache Mahout</p>
                                <p> <FaAngleRight /> Rattle</p>

                                <p><strong>On head of mining enormous databases, for example, hospital EHRs, data mining techniques include:</strong></p>

                                <p className="mb-0"> <FaAngleRight /> web mining</p>
                                <p className="mb-0"> <FaAngleRight /> network approaches</p>
                                <p className="mb-0"> <FaAngleRight /> text mining</p>
                                <p className="mb-0"> <FaAngleRight /> natural language processing (NLP)</p>
                                <p className="mb-0"> <FaAngleRight /> machine learning</p>
                                <p className="mb-0"> <FaAngleRight /> predictive modeling</p>
                                <p className="mb-0"> <FaAngleRight /> relationship and link analysis</p>
                                <p> <FaAngleRight /> Statistical analysis</p>

                                <p>The healthcare industry has rich information sources, for example, electronic medical records, administrative reports and other benchmarking findings.</p>

                                <h4 className="mb-2">Talk about Your Project with Us</h4>

                                <p>When you hire healthcare data mining experts from Tech2Globe, we help your organization in benefiting as much as possible from your information and driving your retention and income considerably higher. With our services, you can diminish human services related assistance costs, distinguish the most probable findings instantaneously, measure treatment effectiveness, identify false medical claims, and improve the general effectiveness of healthcare facilities in your institution.</p>

                                <h4>Master in All Languages and Major Sectors</h4>

                                <p>Our transcriptionists are fluent in English, French, German, Spanish, Hindi, Arabic, Russian, and Bengali and are well-acquainted with idioms, phrases, vocabulary, and different accents, at par with any native speaker. Our group comprises of transcribers with particular information on different industry-explicit languages, empowering us to offer our low cost printed typing services to a wide scope of areas, including Media, Finance, NGO, Market Research, Academics Advertising, Healthcare, Retail, Education, Technology, Automotive, and numerous different sectors.</p>

                                <p>To find out about how we can support your business or outsource healthcare data mining services to Tech2Globe, reach us at info@tech2globe.com.</p>

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

            <FaqSection faqs={faqs} />



        </>
    )
};