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
        "Accounts Receivable Services | Accounts Receivable process | Tech2Globe",

    description:
        "Tech2globe provides high-quality account receivable services to clients around the world at cost-effective price. ",

    keywords: [
        "Accounts Receivable Services",
        "Accounts Receivable process",
        "Outsourcing Accounts Receivable services",
    ],

    alternates: {
        canonical: "https://www.tech2globe.com/accounts-receivable-services",
    },

    openGraph: {
        title:
            "Accounts Receivable Services | Accounts Receivable process | Tech2Globe",
        description:
            "Tech2globe provides high-quality account receivable services to clients around the world at cost-effective price. ",
        url: "https://www.tech2globe.com/accounts-receivable-services",
        type: "website",
    },

    twitter: {
        card: "summary",
        title:
            "Accounts Receivable Services | Accounts Receivable process | Tech2Globe",
        description:
            "Tech2globe provides high-quality account receivable services to clients around the world at cost-effective price. ",
    },
};

const faqs = [
    {
        id: "One",
        question: "Do you have the infrastructure and technology in place to support my business processes?",
        answer: `
        Yes. We only use the greatest and most up-to-date software, technology, and infrastructure. You can save money by outsourcing since we employ the best software and technology available.
      `,
    },
    {
        id: "Two",
        question: "How do your agency get paid?",
        answer: `
        We typically charge a percentage of the total amount collected as our fee for a few specific services. While for some other services we also charge a flat fee or a combination of both.
      `,
    },
    {
        id: "Three",
        question: "What services do your AR agency offer?",
        answer: `
        Our accounts receivable agency typically offers a range of services, including invoicing, payment processing, credit and collections, and financial reporting. We also offer additional services such as dispute resolution, customer communication, and data management.
      `,
    },
    {
        id: "Four",
        question: "How do you protect my business's information?",
        answer: `
        Being the best in this business, Tech2Globe AR agency we always follow strict confidentiality policies in place to protect your business's information. We also use secure systems and processes to handle and transmit sensitive data.
      `,
    },


];

const pageHeaderData = {
    title: "Accounts Receivable Services",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};

const resources = [
    { id: 1, name: "Case Studies", path: "/case-studies" },
    { id: 2, name: "Our Clients", path: "/clients" },
    { id: 3, name: "Testimonial", path: "/testimonial" },
];

const usefullinks = [
  { id: 1, name: "Catalog Processing", path: "/catalog-processing-services" },
  { id: 2, name: "Data Conversion", path: "/data-conversion-services" },
  { id: 3, name: "Data Extraction", path: "/data-extraction-services" },
  { id: 4, name: "Document Processing", path: "/document-processing-services" },
  { id: 5, name: "Forms Processing", path: "/forms-processing-services" },
  { id: 6, name: "Insurance Claims Processing", path: "/insurance-claims-processing-services" },
  { id: 7, name: "Invoice Processing", path: "/invoice-processing-services" },
  { id: 8, name: "Order Processing", path: "/order-processing-services" },
  { id: 9, name: "Survey Forms Processing", path: "/survey-forms-processing" },
];


const sidebarSections = [
    { heading: "Resources", links: resources },
    { heading: "Useful Links", links: usefullinks },
];

const clients = [
    { src: "/images/services/service-inner/clientlogo/salesforce.jpg", alt: "Salesforce", title: "Salesforce" },
    { src: "/images/services/service-inner/clientlogo/jitterbit.jpg", alt: "Jitterbit", title: "Jitterbit" },
    { src: "/images/services/service-inner/clientlogo/informatica.jpg", alt: "Informatica", title: "Informatica" },
    { src: "/images/services/service-inner/clientlogo/attunity.jpg", alt: "Attunity", title: "Attunity" },
    { src: "/images/services/service-inner/clientlogo/snaplogic.jpg", alt: "Snaplogic", title: "Snaplogic" },
    { src: "/images/services/service-inner/clientlogo/tableau.jpg", alt: "Tableau", title: "Tableau" },
    { src: "/images/services/service-inner/clientlogo/slickpie.jpg", alt: "Slickpie", title: "Slickpie" },
    { src: "/images/services/service-inner/clientlogo/powerbi.jpg", alt: "PowerBI", title: "PowerBI" },
    { src: "/images/services/service-inner/clientlogo/kizeoform.jpg", alt: "Kizeoform", title: "Kizeoform" },
    { src: "/images/services/service-inner/clientlogo/kipa.jpg", alt: "Kipa", title: "Kipa" },

];

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Before we started Tech2Globe’s accounts receivable service a year ago, we were struggling to keep up with our invoicing and collections. Now, we have a dedicated team handling these tasks and our payment turnaround time has significantly improved.",

    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "One of the best things about Tech2Globe’s accounts receivable service is that it has freed up time for our team to focus on other important tasks. The team handles everything from invoicing to collections, which has allowed us to be more productive in other areas of our business.",

    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "We've been extremely happy with the service we've received from Tech2Globe’s team. They are professional, responsive, and always willing to go the extra mile to help us get paid on time.",

    },
];


export default function AccountsReceivable() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What services does your outbound call center agency offer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our outbound call center agency offers a variety of services, including lead generation, sales, market research, and appointment setting. We also provide telemarketing services and customer follow-up calls."
                }
            },
            {
                "@type": "Question",
                "name": "How do you handle call volume during peak periods?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We have a flexible staffing model that allows us to increase the number of agents on the floor during peak periods to ensure that we can handle high call volume. In addition, we have advanced call routing and queue management systems in place to minimize wait times for customers."
                }
            },
            {
                "@type": "Question",
                "name": "How do you ensure the quality of the leads generated by your agents?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use a combination of techniques to ensure that the leads generated by our agents are of high quality. This includes using targeted calling lists, providing training on effective lead generation techniques, and regularly monitoring and evaluating agent performance. We also provide our clients with detailed reports on the leads generated, including information on the contact’s name, phone number, email, and company name."
                }
            },
            {
                "@type": "Question",
                "name": "How do you ensure the security and confidentiality of customer data?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We take the security and confidentiality of customer data very seriously. All of our agents are required to sign confidentiality agreements and are trained on data protection best practices. In addition, we have robust data security systems in place to protect against unauthorized access and hacking attempts."
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
            <Breadcrumb parentName="Services" pageName="Accounts Receivable Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner imageSrc="/images/services/service-inner/accounts-receivable-services.jpg" />
                            <div className={Style.ContentDiv}>
                                <h2>Don't let overdue accounts drag down your business – Outsource to us!</h2>
                                <hr />
                            </div>



                            <div className={Style.ContentDiv}>
                                <h2>Best Accounts Receivable Services</h2>
                                <p>We believe Accounts receivable services should be outsourced to boost collection rates by producing faster payments and reducing customer support conversations. As a top accounts receivable solution provider, we assist you in optimizing your receivables in order to strengthen your working capital. We utilize a variety of electronic billing alternatives, standardized workflows, and compliant processes to reduce Days Sales Outstanding (DSO) and enhance collection. By combining our technology solutions with trained and qualified employees, we are able to offer measurable outcomes.</p>

                                <h2>What Professional Tools Do We Use For Our Accounts Receivable Services?</h2>
                                <p>Let us handle the accounts receivable stresses so you can focus on success!</p>
                                <p>Managing your cash flow is critical, and when it comes the obligation of only granting loans to credit-worthy customers. Take advantage of our cutting-edge <strong>accounts receivable management services</strong> tools, which is designed to assist you in monitoring and recovering client credit on time. Our proficient tools automates invoicing and collection operations, allowing you to handle your accounts receivable in a timely, efficient, and automated manner. We utilize the following financial software:</p>

                            </div>

                            <div className="pt-3 pb-3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <h2 className="main-heading mb-4 text-danger">
                                                Tools
                                            </h2>


                                            <div className="row d-flex justify-content-center">
                                                {clients.map((c, i) => (
                                                    <div key={i} className={Style.ClientOuter}>
                                                        <div className={Style.Clientlg}>
                                                            <Image
                                                                src={c.src}
                                                                alt={c.alt}
                                                                title={c.title}
                                                                width={145}
                                                                height={73}
                                                                style={{ objectFit: "contain" }}
                                                            />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={Style.ContentDiv}>
                                <h2>Steps Involved In Our Account Receivable Services Process</h2>

                                <p className="mb-4">The stages involved in our account receivable services may fluctuate depending on the size of the company.</p>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/create-credit-practices.png" className="img-responsive img-fluid" alt="Create Credit Practices" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Create Credit Practices</h4>
                                        <p className="text-start">Being your accounts receivable management partner, we first establish a credit application process. It will decide whether to give items on credit based on the applicant's creditworthiness. It is up to the organization to determine whether to extend credit to individual customers or other businesses.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/Invoicing-And-Billing.png" className="img-responsive img-fluid" alt="Customer Invoicing And Billing" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Customer Invoicing And Billing</h4>
                                        <p className="text-start">We then go for customer invoice and billing at the secondary stage! A receipt is a document that a customer receives after purchasing specified products or services. The receipt contains information such as the cost of the items/services rendered, the specifics of the same, and the payment date. Every invoice has a unique invoice number that may be easily retrieved. They are provided in either physical or electronic form, depending on the customer's preference. Most businesses prefer electronic invoices because they are more cost-effective and convenient.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/account-receivable-monitor.png" className="img-responsive img-fluid" alt="Account Receivable Monitor" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Account Receivable Monitor</h4>
                                        <p className="text-start">When we are done with invoicing, the following step is to track accounts receivable with the assistance of an Accounts Receivables Officer. Our professionals will review the payment that was deposited into the supplier's bank account, enter it into the AR system, and assign it to an invoice.
                                        </p>
                                    </div>

                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/account-receivable-accounting.png" className="img-responsive img-fluid" alt="Account Receivable Accounting" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Account Receivable Accounting</h4>
                                        <p className="text-start">Lastly, our team member establishes the due date for both bad and outstanding debts. Following the inspection of the unpaid bills by the official, the accounting department will create journal entries to document the transactions. Furthermore, the accounts department will be taking care for validating early reductions made.
                                        </p>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                            <div className={Style.StickyTop}>
                                <ServiceSidebar sections={sidebarSections} />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-5">
                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 text-center text-danger">What Makes Us The Most Reliable Accounts Receivable Partner?</h2>
                                <p className="text-center">Our team of skilled accounts receivable management services specialists can provide customized account-handling solutions based on your company's needs. Some of the reasons you should outsource accounts receivable to us include:</p>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                        <div className="carditemcall shadow-sm mb-3 h-100">
                                            <div className="text-center">
                                                <Image src="/images/services/service-inner/team-icon.png" width={100} height={100} alt="Best Quality Services" />
                                            </div>
                                            <div className="context text-center">
                                                <h5>Best Quality Services</h5>
                                                <p>To ensure that all of our deliverables are of the greatest quality, we use TQM and other quality improvement techniques.</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                        <div className="carditemcall shadow-sm mb-3 h-100">
                                            <div className="text-center">
                                                <Image src="/images/services/service-inner/budget.png" width={100} height={100} alt="Data Safety" />
                                            </div>
                                            <div className="context text-center">
                                                <h5>Data Safety</h5>
                                                <p>We assure data confidentiality by implementing strong data security procedures. This reduces the possibility of data breaches and misuse.</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                        <div className="carditemcall shadow-sm mb-3 h-100">
                                            <div className="text-center">
                                                <Image src="/images/services/service-inner/budget-management.png" width={100} height={100} alt="Rapid Turnaround Time" />
                                            </div>
                                            <div className="context text-center">
                                                <h5>Rapid Turnaround Time</h5>
                                                <p>Our accounts receivable services are rapid and assure speedier payments as a leading AR service provider.</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                        <div className="carditemcall shadow-sm mb-3 h-100">
                                            <div className="text-center">
                                                <Image src="/images/services/service-inner/budget-management.png" width={100} height={100} alt="Quick Information Access" />
                                            </div>
                                            <div className="context text-center">
                                                <h5>Quick Information Access</h5>
                                                <p>We combine print, postal, and electronic deliveries into a single source and enable instant access to all documents.</p>
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