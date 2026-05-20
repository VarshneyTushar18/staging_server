import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import FaqSection from "@/app/components/services/faqs/faqs";


export const metadata = {
    title:
        "Account payable services | Outsource Accounts Payable Services",

    description:
        "Account payable services by tech2globe offer end-to-end account payable BPO services to clients globally. We analyze, detect, investigate, and inspection every fraud",

    keywords: [
        "Account payable services",
        "Outsource Accounts Payable Services",
        "Data Capture & Processing",
        " Accounts Payable process ",
    ],

    alternates: {
        canonical: "https://www.tech2globe.com/accounts-payable-services",
    },

    openGraph: {
        title:
            "Account payable services | Outsource Accounts Payable Services",
        description:
            "Account payable services by tech2globe offer end-to-end account payable BPO services to clients globally. We analyze, detect, investigate, and inspection every fraud",
        url: "https://www.tech2globe.com/accounts-payable-services",
        siteName: "Tech2Globe",
        type: "website",
    },

    twitter: {
        card: "summary",
        title:
            "Account payable services | Outsource Accounts Payable Services",
        description:
            "Account payable services by tech2globe offer end-to-end account payable BPO services to clients globally. We analyze, detect, investigate, and inspection every fraud",
    },
};


const faqs = [
    {
        id: "One",
        question: "How does your accounts payable service work?",
        answer: `
        Our accounts payable service typically gets started when our clients outsource their services with an immediate impact. We then handle all aspects of the outsource accounts payable services, including reviewing and approving invoices, reconciling vendor statements, and making payments to vendors. Some of our accounts payable services also offer additional services such as spend management and vendor management.
      `,
    },
    {
        id: "Two",
        question: "How much does your account's payable service cost?",
        answer: `
        The cost of our accounts payable service may vary depending on the specific services being offered or asked for. For some accounts payable services, we charge a flat fee; in others, we charge a percentage of the invoices processed. It's important for businesses to carefully consider the costs and benefits of different accounts payable services before making a decision.
      `,
    },
    {
        id: "Three",
        question: "Why would a business use your accounts payable service?",
        answer: `
        Several reasons a business might choose to use our accounts payable service. Some businesses may need more resources or expertise to manage their accounts payable in-house, while others want to outsource this function to focus on their core business operations. Our accounts payable service can also help a business improve its cash flow management and reduce the risk of errors or fraud.
      `,
    },
    {
        id: "Four",
        question: "Are there any risks to using Tech2Globe's accounts payable services?",
        answer: `
        As with any outsourcing arrangement, there are risks to using an accounts payable service. These can include the risk of data breaches or loss of confidential information, as well as the risk of errors or fraud. But we know how to carefully evaluate the security and reliability of any accounts payable service before agreeing. So, you do not have to think much about this.
      `,
    },

];

const pageHeaderData = {
    title: "Accounts Payable Services",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};

const resources = [
    { id: 1, name: "Case Studies", path: "/case-studies" },
    { id: 2, name: "Our Clients", path: "/clients" },
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
        text: "We've been using Tech2Globe Accounts Payable Services for the past few months, and we've been extremely satisfied with their level of service. Their team is always available to answer our questions and address any concerns, and they have helped us greatly improve the accuracy and efficiency of our Accounts payable process. We highly recommend their services to any business looking to improve its accounts payable operations.",

    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "We've been using Tech2Globe Accounts Payable Services for the past year, which has completely streamlined outsource accounts payable services. Their team is incredibly efficient and professional, and we've seen a significant decrease in late payment fees since partnering with them. We highly recommend their services to businesses looking to improve their accounts payable efficiency.",

    },
     {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "We switched to Tech2Globe accounts payable outsourcing services, which was our best decision all year. Their team is knowledgeable and responsive and always goes above and beyond to help us with any issues. Our accounts payable process is now completely automated, and we've seen a significant increase in accuracy and efficiency.",

    },

];


export default function AccountsPayable() {

    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Accounts Payable Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner imageSrc="/images/services/service-inner/accounts-payable-services.jpg" />
                            <div className={Style.ContentDiv}></div>



                            <div className={Style.ContentDiv}>
                                <h2>We help maximize efficiency and minimize risk with our professional accounts payable process.</h2>
                                <p>Accounts payable (AP) has developed from a tactical, transaction-focused procedure to a strategic business function that optimizes working capital, allows for better business savings, and aids in the improvement of supplier relationships.</p>
                                <p>Tech2Globe works with Fortune 500 and Global 2000 companies to transform their <strong>accounts payable process</strong> and increase business value by optimizing working capital and reducing operating costs, increasing control and transparency, increasing efficiency through standardization, and saving money.</p>

                            </div>

                            <div className={Style.ContentDiv}>
                                <h2>Why Choose Tech2Globe’s Account Payable Services?</h2>

                                <p className="mb-4">Be its in-depth analysis and comprehensive accounts payable solutions; we have solutions for all your financial problems!</p>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/Scanning-Documents.png" className="img-responsive img-fluid" alt="Scanning Documents" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Scanning Of Documents And Mails</h4>
                                        <p className="text-start">Tech2Globe's mailroom and invoice scanning services assist you in centralizing the receipt of all invoices, whether paper, fax, or digital. Using best-in-class imaging technology and unique reference codes, your invoices are transformed into digital format. Our <strong>accounts payable outsourcing services</strong> allow your resources to focus on more strategic efforts by relieving them of time-consuming and labor-intensive paperwork and data entry.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/Invoice-Data.png" className="img-responsive img-fluid" alt="Invoice Data" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Capturing And Matching Invoice Data</h4>
                                        <p className="text-start">Our automatic invoice data capture technique, which employs OCR technology, ensures precise invoice data extraction. All standard invoice data and additional important information are gathered and submitted to your ERP system. Quality checks at multiple levels assure error-free data capture and compliance.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/invoice-exceptions.png" className="img-responsive img-fluid" alt="Invoice Exceptions" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Management Of Invoice Exceptions</h4>
                                        <p className="text-start">Invoicing exceptions and errors can cause payment delays to suppliers, impede your working capital, and result in the loss of early payment discount opportunities. Tech2Globe recognizes and manages these invoice exceptions while collaborating with your requestors/buyers and suppliers to resolve and expedite payments.
                                        </p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/processing-invoices.png" className="img-responsive img-fluid" alt="Processing Invoices" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Payment Processing For Invoices</h4>
                                        <p className="text-start">Tech2Globe offers payment processing solutions to assist you in making on-time invoice payments by optimizing payment runs based on due dates and turnaround periods specified in your contract. Using our revolutionary, cloud-based source-to-pay software platform, you can improve cash flow and produce significant savings for your company by capturing early payment discounts.
                                        </p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/Cost-Recovery.png" className="img-responsive img-fluid" alt="Cost Recovery" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Invoice Auditing And Cost Recovery</h4>
                                        <p className="text-start">Our experts review the invoices and vendor statements included in the scope to discover and validate any cost recovery opportunities, identify the main causes of differences, and assist you in reconciling and making financial recoveries. We provide a plan of action to optimize your contracts and payment terms, improve your procure-to-pay process, promote compliance, and prevent future leaks.
                                        </p>
                                    </div>
                                </div>
                                <hr />
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="mt-3">Why Does Your Business Need Accounts Payable Services From Our Expert Agency?</h2>

                                <p className="mb-4">We eliminate the headache of your accounts payable management.</p>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/Time-and-resource.png" className="img-responsive img-fluid" alt="Time And Resource" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Time and resource savings</h4>
                                        <p className="text-start">Managing and processing accounts payable can be a time-consuming task. By leveraging our accounts payable outsourcing services, your business can free up time and resources to focus on other areas.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/cash-flow-management.png" className="img-responsive img-fluid" alt="Cash Flow Management" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Improved cash flow management</h4>
                                        <p className="text-start">Our accounts payable service can ensure that payments are made on time, which helps to improve cash flow management and prevent late fees.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/Increased-efficiency.png" className="img-responsive img-fluid" alt="Increased Efficiency" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Increased efficiency</h4>
                                        <p className="text-start">We can streamline and automate the payment process, increasing efficiency and reducing errors.
                                        </p>
                                    </div>

                                </div>
                                <hr />
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/supplier-relationships.png" className="img-responsive img-fluid" alt="Supplier Relationships" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Improved supplier relationships</h4>
                                        <p className="text-start">You can maintain good relationships with your suppliers and avoid any potential disputes by making timely payments.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/enhanced-security.png" className="img-responsive img-fluid" alt="Enhanced Security" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Enhanced security</h4>
                                        <p className="text-start">Our professional accounts payable service provides additional security measures to protect against fraud and errors.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/increased-accuracy.png" className="img-responsive img-fluid" alt="Increased Accuracy" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Increased accuracy</h4>
                                        <p className="text-start">Our experts improve the accuracy of payment processing, which can reduce the risk of mistakes and errors.
                                        </p>
                                    </div>

                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                            <div className={Style.StickyTop}>
                                <ServiceSidebar sections={sidebarSections} />
                            </div>
                        </div>
                        <div className={Style.ContentDiv}>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className={Style.ContentDiv}>
                                    <h2 className="mt-5 mb-3">Additional Services You May Take Advantage Of</h2>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                            <div className="payableCard red  h-100">
                                                <h6><Link href="/ecommerce-marketplace-management">Invoice processing</Link></h6>
                                                <p>This involves reviewing and verifying invoices to ensure that the goods or services have been received and the amounts are correct.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                            <div className="payableCard blue h-100">
                                                <h6><Link href="/digital-marketing-services">Payment management</Link></h6>
                                                <p>This involves scheduling and making payments to suppliers promptly.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                            <div className="payableCard yellow h-100">
                                                <h6><Link href="/amazon-consulting-services">Expense management</Link></h6>
                                                <p>This includes tracking and managing company expenses and reconciling expenses with invoices.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                            <div className="payableCard skyblue h-100">
                                                <h6><Link href="/software-development">Reporting</Link></h6>
                                                <p>Our accounts payable services provide detailed reports on the company's accounts payable, including outstanding balances, payment history, and other relevant information.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                            <div className="payableCard green h-100">
                                                <h6><Link href="">Fraud prevention</Link></h6>
                                                <p>We can help identify and prevent fraudulent activity, such as submitting fake invoices.</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                            <div className="payableCard voilet h-100">
                                                <h6><Link href="/photo-editing-services">International payments</Link></h6>
                                                <p>If a company does business with suppliers in other countries, we help them to facilitate cross-border payments.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="EmailMarketingTestimonials">
                <ClientSlider testimonials={testimonials} />
            </div>
            <FaqSection faqs={faqs} />

        </>
    )
}