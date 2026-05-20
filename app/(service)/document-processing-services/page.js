import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaBusinessTime, FaChartPie, FaCheckSquare, FaCogs, FaDatabase, FaFile, FaFileImport, FaFolderOpen, FaShieldAlt } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
    title: "Document Processing Outsourcing Services & Solution Company",
    description:
        "Optimize your business with expert document processing outsourcing services & solution company, ensuring accurate data handling, efficiency, and cost savings.",
    keywords: [
        "Document Processing Company",
        "Document Processing Services",
        "Document Processing Outsourcing",
        "Document Processing Outsourcing Solution"
    ],
    openGraph: {
        title: "Document Processing Outsourcing Services & Solution Company",
        siteName: "Tech2Globe Web Solutions LLP",
        description:
            "Optimize your business with expert document processing outsourcing services & solution company, ensuring accurate data handling, efficiency, and cost savings.",
        url: "https://www.tech2globe.com/document-processing-services"
    },
    twitter: {
        card: "summary_large_image",
        title: "Document Processing Outsourcing Services & Solution Company",
        description:
            "Optimize your business with expert document processing outsourcing services & solution company, ensuring accurate data handling, efficiency, and cost savings."
    },
    alternates: {
        canonical: "https://www.tech2globe.com/document-processing-services"
    }
};

const pageHeaderData = {
    title: "Document Processing Services for Accuracy, Speed & Security",
    description:
        "At Tech2Globe Web Solutions, we simplify complex data handling with intelligent document processing services. From admission forms and legal papers to medical claims and product catalogs, our experts digitize, process, and secure your documents with maximum accuracy. With 14+ years of experience and cutting-edge automation tools, we help businesses save time, reduce costs, and make data-driven decisions.",
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


const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe helped a lot with my scanned documents. They turned them into editable PDFs quickly and the team was easy to work with.",
        name: "Sarah Jones, Marketing Manager",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Needed help with a big stack of invoices. Their team did a good job entering the data accurately. Saved me a lot of time.",
        name: "Aditya Gupta, Finance Lead",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Their team cleaned up my reports well. They fixed the formatting and typos, and met my deadline. Makes them look much better now.",
        name: "David Miller, Project Manager",
    },
    {
        id: 4,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe helped me organize all my paperwork. They sorted and labeled everything so it's easy to find how..",
        name: "Priya Kapoor, Business Analyst",
    },
    {
        id: 5,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe converted my old files to the new format without any problems. I am grateful to the staff, who answered all my questions clearly.",
        name: "Michael Fernandez, IT Specialist",
    },
];

const faqs = [
    {
        id: "One",
        question: "How protected is my data with Tech2Globe?",
        answer: `
        Your data's security and confidentiality are our top priorities. We have established strict data security procedures such as secure infrastructure, access controls, and data encryption to protect your information.
      `,
    },
    {
        id: "Two",
        question: "How quickly can my documents be processed?",
        answer: `
        The amount and intricacy of the documents will affect how long it takes to process them. We work hard to provide quick turnaround times while preserving accuracy. We can provide you with an approximate time frame based on your particular needs.
      `,
    },
    {
        id: "Three",
        question: "Can you manage documents written in several languages?",
        answer: `
        Yes, members of our staff who speak multiple languages can process papers in different languages. As a part of our <strong>intelligent document processing</strong> solutions, we can manage a variety of linguistic needs.
      `,
    },
    {
        id: "Four",
        question: "What file types can I convert documents to using your service?",
        answer: `
        We accept various file types, including JPEG, PNG, Word, Excel, and PDF. We can meet your special format needs if you have any. Apart from that, we offer <strong>data conversion services</strong> for these file formats as well.
      `,
    },
    {
        id: "Five",
        question: "What is a document processing service?",
        answer: `
        To incorporate manual forms and analog data into regular business procedures, document processing transforms them into a digital version. Anyone can digitally recreate a document's original structure by extracting data from it using a document processing system.
      `,
    },
];

export default function DocumentProcessing() {

    const schemaData = [
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How protected is my data with Tech2Globe?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Your data’s security and confidentiality are our top priorities. We have established strict data security procedures such as secure infrastructure, access controls, and data encryption to protect your information."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How quickly can my documents be processed?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "The amount and intricacy of the documents will affect how long it takes to process them. We work hard to provide quick turnaround times while preserving accuracy. We can provide you with an approximate time frame based on your particular needs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you manage documents written in several languages?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "Yes, members of our staff who speak multiple languages can process papers in different languages. As a part of our intelligent document processing solutions, we can manage a variety of linguistic needs."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What file types can I convert documents to using your service?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                            "We accept various file types, including JPEG, PNG, Word, Excel, and PDF. We can meet your special format needs if you have any. Apart from that, we offer data conversion services for these file formats as well."
                    }
                }
            ]
        }
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb pageName="Document Processing Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="document processing services" />
                            <div className={Style.ContentDiv}>
                                <h2 className="pb-3">Business impacts of intelligent document processing</h2>
                                <p>The process of document processing entails gathering raw data from multiple sources and presenting it in either a visual or written manner. These data are transformed into relevant data by professionals using various conversion processes and analytical techniques for <strong>intelligent document processing</strong>. This enables enterprises to quickly make important decisions.</p>
                                <p>With growing businesses both internally and externally, outsourcing non-core but fundamental data handling tasks to <strong>document processing companies</strong> is an effective way to organise complex data. Our services collect, extract, digitise, and process data from various sources, then transform it into useful insights at cost-effective rates. If you are looking for smart solutions for your business, then you can <strong>outsource document processing</strong> to Tech2Globe Web Solutions. Additionally, you can connect with us for your other data requirements like <strong>data management services</strong>.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h2 className="pb-3">Our document processing services include:</h2>
                                <p>Get the <strong>automated document processing services</strong> listed below in accordance with the project requirements. We can further discuss the budget limitation based on your requirements and a defined turn around time. Our group of professionals provides the following <strong>document processing solutions</strong></p>
                                <ul className={Style.ListView}>
                                    <li>Business Document Processing</li>
                                    <li>Admission Forms Processing</li>
                                    <li>Application Forms Processing</li>
                                    <li>Research Documents Processing</li>
                                    <li>Legal Document Processing</li>
                                    <li>Property Papers Processing</li>
                                    <li>Medical Claims Processing</li>
                                    <li>Business Brochures Processing</li>
                                    <li>Notary Document Processing</li>
                                    <li>Product Catalogues Processing</li>
                                </ul>
                                <p>In case you are looking for something more specific for your business, you can reach out to us and we will curate a service plan that best suits your requirements.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                            <div className={Style.StickyTop}>
                                <ServiceSidebar sections={sidebarSections} />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5">
                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 text-center">Procedure We Follow in Our Document Processing Services</h2>
                                <p className="text-center pb-3"><strong>Processing documents</strong> is a task that requires attention to detail for effective results. You can trust Tech2Globe, a leading service provider of comprehensive business solutions for high-productivity <strong>document processing services</strong> and condensed results of the highest calibre. We follow the below procedure to ensure that all operations flow in a streamlined manner</p>
                                <div className="row pb-5 justify-content-center">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.IconBoxAlt} h-100`}>
                                            <div className={Style.IconHolder}>
                                                <FaFile />
                                            </div>
                                            <h3>Obtain The Files</h3>
                                            <p>Our team will obtain your data and previous records via our secure FTP worker systems in accordance with the project&apos;s document processing requirements.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.IconBoxAlt} h-100`}>
                                            <div className={Style.IconHolder}>
                                                <FaChartPie />
                                            </div>
                                            <h3>Process and Analyse</h3>
                                            <p>Then, based on the data accumulated, we evaluate the workload and choose the most suitable technique for record processing.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.IconBoxAlt} h-100`}>
                                            <div className={Style.IconHolder}>
                                                <FaFolderOpen />
                                            </div>
                                            <h3>Processing Documents</h3>
                                            <p>Using the top-notch and latest tools and software coupled with our expertise, we handle and digitise your data and paper with precision to acquire quality results and desired outputs.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.IconBoxAlt} h-100`}>
                                            <div className={Style.IconHolder}>
                                                <FaDatabase />
                                            </div>
                                            <h3>Document Quality Assessment</h3>
                                            <p>After completing the thorough processing, a few quality checks are initiated to obtain assurance before the final delivery of all files.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.IconBoxAlt} h-100`}>
                                            <div className={Style.IconHolder}>
                                                <FaFileImport />
                                            </div>
                                            <h3>Final File Delivery</h3>
                                            <p>The final stage is delivery, where we send updated document files through a secure system that allows clients to submit any necessary modifications or inquiries.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 text-center">Key Benefits of Document Processing Solutions</h2>
                                <p className="text-center pb-3">With the simple accessibility of cost-efficient infrastructure, equipment, and qualified workers at reasonable pricing, <strong>document processing services</strong> from Tech2Globe have several benefits. Some of the advantages of using <strong>document process outsourcing services</strong> are as follows</p>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className={Style.ImageBox}>
                                            <div className="d-flex align-items-center gap-3 mb-2">
                                                <FaBusinessTime />
                                                <h3>Time and Cost Savings</h3>
                                            </div>
                                            <p>You can save time and money by letting us handle your processing document requirements. Our experts, in addition to the latest and performance-oriented software, enable us to process your documents quickly and correctly. Thus, you focus on other crucial aspects of your business and responsibilities.</p>
                                        </div>

                                        <div className={Style.ImageBox}>
                                            <div className="d-flex align-items-center gap-3 mb-2">
                                                <FaCheckSquare />
                                                <h3>Accuracy and Quality</h3>
                                            </div>
                                            <p>In every step of our document processing services, accuracy and quality are our top priorities. Each document is carefully, thoroughly reviewed, and verified by our industry professionals to ensure accuracy and weed out mistakes. You can be certain of the dependability and consistency of your processed data by using our knowledge.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="text-center">
                                            <Image
                                                src="/images/services/service-inner/dpBenefits1.svg"
                                                alt="Key Benefits of Document Processing Solutions"
                                                width={477}
                                                height={436}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="text-center">
                                            <Image
                                                src="/images/services/service-inner/dpBenefits2.svg"
                                                alt="Key Benefits of Document Processing Solutions"
                                                width={477}
                                                height={436}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className={Style.ImageBox}>
                                            <div className="d-flex align-items-center gap-3 mb-2">
                                                <FaCogs />
                                                <h3>Enhanced Efficiency</h3>
                                            </div>
                                            <p>We can effectively handle large volumes of document data thanks to our streamlined procedures. We deploy automated document processing and validation procedures to increase output and decrease the need for manual work. With Tech2Globe, your productivity will rise, and your reaction times will decrease.</p>
                                        </div>

                                        <div className={Style.ImageBox}>
                                            <div className="d-flex align-items-center gap-3 mb-2">
                                                <FaShieldAlt />
                                                <h3>Data Security</h3>
                                            </div>
                                            <p>Maintaining your data&apos;s security and privacy is one of our services&apos; vital benefits. Your sensitive information is handled with the utmost care thanks to the strict data protection measures we follow. Our stringent access controls and data encryption technologies guarantee your papers&apos; security and integrity.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-5 text-center">Meet All Your Requirements With Us</h2>
                                <p className="text-center pb-3">Enjoy speedy and precise document handling with a variety of scalable processing choices. We simplify your process with budget-friendly solutions, letting you focus on key business tasks and freeing up internal resources.</p>
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <div className="mb-5">
                                            <h3>Extensive Experience</h3>
                                            <p>We thoroughly understand document processing thanks to our significant field experience. Our team is made up of knowledgeable people that are skilled at handling different document processing requirements and delivering accurate and reliable outcomes.</p>
                                        </div>
                                        <div className="mb-5">
                                            <h3>Modern Infrastructure</h3>
                                            <p>Tech2Globe has invested in cutting-edge infrastructure and technology to deliver <strong>intelligent document processing services</strong>. We can successfully manage challenging processing projects thanks to our state-of-the-art hardware and software.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <div className="text-center">
                                            <Image
                                                src="/images/services/service-inner/whyChoosedps1.1.svg"
                                                alt="Key Benefits of Document Processing Solutions"
                                                width={416}
                                                height={218}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <div className="mb-5">
                                            <h3>Industry-Specific Solutions</h3>
                                            <p>Recognising that every business is unique, we adapt our services to meet your needs. Thanks to our adaptable approach, we can customise our <strong>document processing solutions</strong> to match the goals and objectives of your firm.</p>
                                        </div>
                                        <div className="mb-5">
                                            <h3>Scalability</h3>
                                            <p>Whether you have a small volume of papers or require large-scale document processing, Tech2Globe can scale up its services to match your demands. We have the capability and resources to tackle projects of any size or complexity.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ClientSlider testimonials={testimonials} />
            <FaqSection faqs={faqs} />
        </>
    )
};