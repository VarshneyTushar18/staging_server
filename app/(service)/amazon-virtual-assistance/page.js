import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";

export const metadata = {
    title: "Amazon Virtual Assistant Services | Best Amazon VA services",
    description:
        "Our Amazon virtual assistants are extremely adaptable, frequently addressing account performance and sharing notes about logistical delays with Experience 14 Years.",
    keywords:
        "Amazon Virtual Assistance, Amazon Virtual Assistance Services, Outsourcing Your Amazon Virtual Assistant, Amazon VA services",
    alternates: {
        canonical: "https://stagenew.tech2globe.tech/amazon-virtual-assistance",
    },
    openGraph: {
        title: "Amazon Virtual Assistant Services | Best Amazon VA services",
        description:
            "Our Amazon virtual assistants are extremely adaptable, frequently addressing account performance and sharing notes about logistical delays with Experience 14 Years.",
        siteName: "Tech2Globe web Solutions LLP",
        url: "https://stagenew.tech2globe.tech/amazon-virtual-assistance",
        type: "website",
    },
    twitter: {
        card: "Tech2Globe",
        title: "Amazon Virtual Assistant Services | Best Amazon VA services",
        description:
            "Our Amazon virtual assistants are extremely adaptable, frequently addressing account performance and sharing notes about logistical delays with Experience 14 Years.",
    },
};

export const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Can a virtual assistant access my personal information?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A virtual assistant can access some of your personal information, such as your calendar and contact list, but they are not able to access sensitive information like your credit card number."
            }
        },
        {
            "@type": "Question",
            "name": "What Is The Cost Of An Amazon Virtual Assistant?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The cost of hiring an Amazon expert is determined by your needs. The final cost will be determined by the task’s complexity and level of specialty, as well as the period for which you intend to engage Amazon VA services."
            }
        },
        {
            "@type": "Question",
            "name": "What Are The Duties Of Amazon Virtual Assistants?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Listing administration, order processing, image and title editing, SEO, PPC ad management, metric tracking, customer support services and feedback management, product data entry, and inventory management are among the most prevalent. It will also undertake other related functions as and when they are required."
            }
        }
    ]
};

const pageHeaderData = {
    title: "Amazon Virtual Assistance",
    description:
        "Get Amazon virtual assistants to run your store from start to finish.",
    buttonText: "Contact us",
    buttonLink: "/contact-us/",
    backgroundImage: "/images/services/amazon-virtual-assistant-banner.png", // your banner image
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

const faqs = [
    {
        id: "One",
        question: "Can a virtual assistant access my personal information?",
        answer: `
        A virtual assistant can access some of your personal information, such as your calendar and contact list, but they are not able to access sensitive information like your credit card number.
      `,
    },
    {
        id: "Two",
        question: "What Are The Duties Of Amazon Virtual Assistants?",
        answer: `
        Listing administration, order processing, image and title editing, SEO, PPC ad management, metric tracking, customer support services and feedback management, product data entry, and inventory management are among the most prevalent. It will also undertake other related functions as and when they are required.
      `,
    },
    {
        id: "Three",
        question: "What Is The Cost Of An Amazon Virtual Assistant?",
        answer: `
        The cost of hiring an Amazon expert is determined by your needs. The final cost will be determined by the task's complexity and level of specialty, as well as the period for which you intend to engage Amazon VA services.
      `,
    }
];

const portfolioClients = [
    {
        initials: "SA",
        gradient: "#0b2e58",
        client: "SilverLine Apparel",
        country: "USA",
        project: "Dedicated VA Account Management",
        desc: "US apparel seller that outsourced full Amazon backend operations to a dedicated VA, covering listings, FBA, and customer messages daily.",
        category: "Virtual Assistance",
        result: "Full Backend Managed",
        resultSub: "6 Days/Week",
    },
    {
        initials: "PS",
        gradient: "#0b2e58",
        client: "PetPal Supplies",
        country: "Australia",
        project: "VA for Customer Service",
        desc: "Australian pet supplies brand that improved seller feedback from 3.2 to 4.7 stars through dedicated VA support aligned to local business hours.",
        category: "Virtual Assistance",
        result: "98% Response Rate",
        resultSub: "Maintained",
    },
    {
        initials: "DO",
        gradient: "#0b2e58",
        client: "Desi Organics USA",
        desc: "US organic products seller that handed off full Amazon store management — 300+ SKUs, reviews, and support — to a skilled dedicated VA.",
        country: "USA",
        project: "Multi-ASIN Listing VA",
        category: "Virtual Assistance",
        result: "300+ SKUs",
        resultSub: "Managed",
    },
    {
        initials: "FB",
        gradient: "#0b2e58",
        client: "FreshBrew Coffee",
        country: "Canada",
        project: "VA + FBA Shipment Creation",
        category: "Virtual Assistance",
        result: "Zero Errors",
        resultSub: "Shipments",
    },
    {
        initials: "GB",
        gradient: "#0b2e58",
        client: "GlowStyle Beauty",
        country: "UK",
        project: "VA for Account Health Monitoring",
        category: "Virtual Assistance",
        result: "Account Health",
        resultSub: "Score 100%",
    },
];

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Our dedicated Tech2Globe VA handles everything from listing updates to customer messages to FBA shipment creation. It's like having a full-time Amazon employee at a fraction of the cost.",
        name: "Nathan Brooks | SilverLine Apparel",
        location: "USA",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe's VA team is incredibly professional and reliable. They manage our entire Amazon backend — 8 hours a day, 6 days a week. Response accuracy and turnaround times are exceptional.",
        name: "Olivia Harrison | PetPal Supplies",
        location: "Australia",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "I was overwhelmed managing my Amazon store alone. Tech2Globe assigned a VA who became fluent in my entire catalog in days. Order handling, reviews, and seller support — all handled flawlessly.",
        name: "Raj Patel | Desi Organics USA",
        location: "USA",
    },

];

export default function AmazonVirtualAssistance() {
    return (

        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb
                parentName="Services"
                pageName="Amazon Virtual Assistance"
            />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Amazon Virtual Assistance" imageSrc="/images/services/service-inner/amazon-virtual-assistant-top-banner2.jpg" />
                            <div className={Style.ContentDiv}>
                                <h3 className="pb-3">Experience efficient support with Amazon&apos;s Virtual Assistants</h3>
                                <p>Get Amazon virtual assistants to run your store from start to finish. Get prompt, cost-effective, and seamless assistance with inventory management, customer service, listing optimization, FBA administration, product photo editing , data entry, and other routine e-store maintenance tasks. Amazon VAs can also be hired for specialized duties such as product sourcing, Amazon Advertising, and Enhanced Brand Content. Our Amazon virtual assistant services are designed to give immediate business value while reducing redundancy. With Tech2Globe, you may take advantage of the most valuable Amazon VA services without any hidden information or terms of service!</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h2 className="text-danger"> Why Choose Tech2Globe For Amazon Virtual Assistance Services?</h2>
                                <p>Our Amazon virtual assistants are extremely adaptable, frequently addressing account performance and sharing notes about logistical delays, FBA inventory addition hold-ups, or any escalation funneled toward Refunds/Returns.</p>
                                <ul>
                                    <li>Experience Of More Than 14 Years</li>
                                    <li>Save Up To 60% On Costs</li>
                                    <li>Amazon Virtual Assistant Availability 24*7</li>
                                    <li>Over 5000 Global Clients</li>
                                    <li>300+ Employee Strength</li>
                                    <li>11000+ Successive Projects</li>
                                    <li>Complete Client Satisfaction</li>
                                    <li>Over 98% Client Retention Rate</li>
                                    <li>NDA-Guaranteed Data Security</li>
                                </ul>

                            </div>

                            <div className={Style.ContentDiv}>
                                <h3 className="pt-3"> FBA Virtual Assistant, Refunds / Returns: How Do We Process?</h3>
                                <hr />
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4`}>
                                            <div className={Style.ImgHolder}>
                                                <Image src="/images/services/service-inner/supply-optimization-tarnsparncy.png" alt="Order Tracking Management" width={100} height={100} />
                                            </div>
                                            <h5 className="fw-medium text-danger mb-2">Order Tracking Management</h5>
                                            <p className="text-muted medium">Order tracking can be time-consuming. When you hire our Amazon professional Virtual Assistants, you will receive daily assistance in keeping track of orders, shipment dates, invoice processing, refund/return line-up, and drop-shipping details.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4`}>
                                            <div className={Style.ImgHolder}>
                                                <Image src="/images/services/service-inner/engaging-customers-transparacny.png" alt="Processing FBA Orders" width={100} height={100} />
                                            </div>
                                            <h5 className="fw-medium text-danger mb-2">Processing FBA Orders</h5>
                                            <p className="text-muted medium">Withdrawing inventory from FBA, handling unfulfillable orders, and migrating inventory from non-Amazon sites to FBA centers, our extremely competent Amazon FBA virtual assistants are equipped to stock out packages that originate with FBA via Seller Central.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4`}>
                                            <div className={Style.ImgHolder}>
                                                <Image src="/images/services/service-inner/refunding-amazone-virtual.png" alt="Refunding and Returns" width={100} height={100} />
                                            </div>
                                            <h5 className="fw-medium text-danger mb-2">Refunding and Returns</h5>
                                            <p className="text-muted medium">Handling escalations is maybe the least discussed element of hiring Amazon Virtual Assistants. Creating case files and return and refund logs requires significant caution. Trust our Amazon marketplace experts to handle this delicately.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h3 className="pt-3 pb-3">Leverage These Benefits By Outsourcing Your Amazon Virtual Assistant Services To Tech2Globe</h3>
                                <p>Running an Amazon business entails juggling several obligations. One cannot be abandoned in favor of the other, which would load you and put you and your business off track. And that is where our professional Amazon Virtual Assistants come into the picture to help you.</p>
                                <div className="row">

                                    <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                        <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: 'red', padding: '15px 10px 10px 26px' }}>
                                            <h5 className="text-white fs-1" style={{ color: '#fff' }}>1</h5>
                                        </div>
                                        <div className="col-md-10 text-left pt-3">
                                            <h6 className="text-danger fw-semibold" style={{ fontSize: 22 }}>Make More Time For Your Business
                                            </h6>
                                            <p className="text-start">You can redirect your emphasis on important areas of your organization and develop them for better sustainability and profitability by outsourcing regular chores to our Amazon Virtual Assistants.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                        <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#ffc107', padding: '15px 10px 10px 26px' }}>
                                            <h5 className="text-white fs-1" style={{ color: '#fff' }}>2</h5>
                                        </div>
                                        <div className="col-md-10 text-left pt-3">
                                            <h6 className="text-danger fw-semibold" style={{ fontSize: 22 }}>Keep To Your Budget
                                            </h6>
                                            <p className="text-start">Hire Amazon virtual assistants inside your budget from Tech2Globe. You&apos;ll get the greatest services at the best prices thanks to our economies of scale and expert pricing.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                        <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#03a9f4', padding: '15px 10px 10px 26px' }}>
                                            <h5 className="text-white fs-1" style={{ color: '#fff' }}>3</h5>
                                        </div>
                                        <div className="col-md-10 text-left pt-3">
                                            <h6 className="text-danger fw-semibold" style={{ fontSize: 22 }}>Versatility
                                            </h6>
                                            <p className="text-start">We understand the diverse needs of Amazon sellers and provide experienced virtual assistants with a variety of skill sets and multitasking abilities.
                                            </p>
                                        </div>
                                    </div>

                                </div>
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

            <ClientPortfolio clients={portfolioClients} />

            <ClientSlider testimonials={testimonials} />

            <FaqSection faqs={faqs} />
        </>
    )
};
