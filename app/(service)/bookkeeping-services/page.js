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
        "Bookkeeping Services - Advantages, Types, Procedure | Tech2globe ",

    description:
        "Bookkeeping is a lengthy and diversified process, and it is very difficult for a businessperson to comply with the all the requirement and get it done by themselves.",

    keywords:
        "Bookkeeping Services - Advantages, Types, Procedure | Tech2globe ",

    alternates: {
        canonical: "https://www.tech2globe.com/bookkeeping-services",
    },

    openGraph: {
        title:
            "Bookkeeping Services - Advantages, Types, Procedure | Tech2globe ",
        description:
            "Bookkeeping is a lengthy and diversified process, and it is very difficult for a businessperson to comply with the all the requirement and get it done by themselves.",
        url: "https://www.tech2globe.com/bookkeeping-services",
        siteName: "Tech2Globe Web Solutions LLP",
        type: "website",
    },

    twitter: {
        card: "summary",
        title:
            "Bookkeeping Services - Advantages, Types, Procedure | Tech2globe ",
        description:
            "Bookkeeping is a lengthy and diversified process, and it is very difficult for a businessperson to comply with the all the requirement and get it done by themselves.",
    },
};

const faqs = [
    {
        id: "One",
        question: "Is it necessary to keep a record of all financial transactions?",
        answer: `
        The Income Tax Act requires mandatory audits in certain parts, which are only possible if records are kept following the law. Companies are governed by the Companies Act, which requires every company to make an annual return with the registrar of companies. It is needed even if there are losses or no income in a fiscal year. It assists individuals and businesses in keeping track of their costs, monitoring their revenues, and making sound financial decisions.
      `,
    },
    {
        id: "Two",
        question: "What is the difference between bookkeeping and accounting?",
        answer: `
        Bookkeeping is the process of recording and organizing financial transactions, while accounting is the process of interpreting, classifying, and summarizing financial data.
      `,
    },
    {
        id: "Three",
        question: "If I have a total of 2000 transactions for the year. What will the additional fees be?",
        answer: `
        We prepare books of account for up to 300 transactions as part of our package. If your company's transactions exceed 300, we will charge Rs.10 for each subsequent transaction. Our experts will assist you in selecting the best value plan for your needs.
      `,
    },
    {
        id: "Four",
        question: "How beneficial is using your bookkeeping service?",
        answer: `
        Outsourced bookkeeping services can help your business save time and money by outsourcing this task to professionals. We can also help to ensure that financial records are accurate and up-to-date, which is vital for tax compliance and making informed business decisions.
      `,
    },

];

const pageHeaderData = {
    title: "Bookkeeping Services",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};


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

    { heading: "Useful Links", links: usefulLinks },
];

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "I need more time or expertise to handle my bookkeeping as a small business owner. That's where Tech2Globe Bookkeeping comes in. They have been an invaluable resource for me, providing professional and accurate bookkeeping services that allow me to focus on running my business. I highly recommend them to anyone in need of top-notch bookkeeping support.",

    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "We rely on Tech2Globe's Bookkeeping to keep my finances organized and in order. Their team is always responsive and helpful, and we appreciate their professionalism and attention to detail. We highly recommend their services to anyone looking for high-quality bookkeeping support",

    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "I have been using Tech2Globe virtual bookkeeping services for the past year, which has been a game changer for my business. I highly recommend their services to any business owner looking to streamline their bookkeeping process.",

    },

];


export default function BookKeeping() {

    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Bookkeeping Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner imageSrc="/images/services/service-inner/bookkeeping-services.jpg" />
                            <div className={Style.ContentDiv}></div>



                            <div className={Style.ContentDiv}>
                                <h2>Trusted Bookkeeping Services For Businesses Of All Sizes!</h2>
                                <p>Bookkeeping works on the systematic record-keeping of a company's financial transactions. It is essential to running a business, providing an accurate and up-to-date record of a company's financial position. Bookkeeping services by Tech2Globe include the following:</p>
                                <ul>
                                    <li>Maintaining and reconciling bank statements.</li>
                                    <li>Recording and reconciling credit card statements.</li>
                                    <li>Providing support for budgeting and forecasting.</li>
                                    <li>Assisting with the preparation of tax returns.</li>
                                </ul>

                            </div>

                            <div className={Style.ContentDiv}>
                                <h2>Why Choose Tech2Globe For Outsourcing Bookkeeping Services?</h2>
                                <p>With our bookkeeping services, you can stay organised and on top of your finances!</p>
                                <p>Our professional bookkeeping services aim to lower our client's finance and accounting costs by assisting them with their management, accounting, and tax preparation requirements. Our specialized and competent online accounting services cover the whole area of bookkeeping, and customers can pick and choose what they need. We provide our customers' virtual back office for their bookkeeping and accounting needs, including set-up, support, maintenance, and advice.</p>
                                <p>Our service includes preparing and maintaining books of accounts at appropriate intervals based on the client's needs. We keep the books of accounts , online utilizing software such as Tally, Quick-book, and other cloud-based softwares only under USA rules and regulations. We are also fully equipped to keep the books of accounts per the client's individual business requirements. We devote a lot of effort to understanding the way and technique of business being conducted by the clients. Accordingly, we develop accounting systems so the client can focus on its primary business operations in due course.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2>How Might Bookkeeping Services Help Your Company?</h2>

                                <p className="mb-4">You may be asking why your company requires bookkeeping services in the first place, but you will be surprised once you experience it's worth!</p>
                                <p>Businesses, particularly those that operate on a small scale and are new, outsourced bookkeeping services since it can save them money. This is due to the high cost of employing an in-house accountant. Also, most small businesses can only afford one accountant, who must perform bookkeeping daily and create financial reports.</p>
                                <p><strong>Online bookkeeping services benefit your business in the following ways:</strong></p>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/manipulations-fin.png" className="img-responsive img-fluid" alt="No Manipulations" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">No Manipulations</h4>
                                        <p className="text-start">Virtual bookkeeping services are objective and reduce the danger of fraud. Because no personal prejudice is involved when using online bookkeeping services, your firm is less likely to be the victim of fraudulent actions.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/time-money-savings.png" className="img-responsive img-fluid" alt="Time And Money Savings" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Time And Money Savings</h4>
                                        <p className="text-start">Online bookkeeping services for small businesses save time and money because you don't have to deal with a bookkeeper as a small business owner.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/compiled-fin.png" className="img-responsive img-fluid" alt="Professionally Compiled" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Professionally Compiled</h4>
                                        <p className="text-start">Business owners that lack bookkeeping knowledge profit from outsourced bookkeeping services because professional and experienced bookkeepers handle them.
                                        </p>

                                    </div>

                                </div>
                                <hr />
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/Estimated-Profit.png" className="img-responsive img-fluid" alt="Estimated Profit Or Loss" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Estimated Profit Or Loss</h4>
                                        <p className="text-start">Online bookkeeping services by Tech2Globe also provide their customers with additional information, such as estimated profit or loss.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 mt-3">Know More About Our Professional Bookkeeping Services</h2>

                                <p>Allow us to handle the numbers so you can concentrate on developing your business!</p>
                                <div className="row">

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <h4>For Growing Businesses</h4>
                                        <ul>
                                            <li>Committed Bookkeeper.</li>
                                            <li>Highly Skilled Accountant.</li>
                                            <li>Bank and Credit Card Reconciliation.</li>
                                            <li>Accounts due and receivable.</li>
                                            <li>Payroll Calculation and Payment of TDS/PF/ESI.</li>
                                            <li>TDS Return Filing.</li>
                                            <li>GST Return Filing.</li>
                                            <li>Filing an Annual Tax Return.</li>
                                            <li>Reporting Financial Ratios.</li>
                                            <li>Inventory Control and Reconciliation.</li>
                                            <li>Budgeting for the Quarters/Years.</li>
                                            <li>CFO Advisory once a quarter.</li>
                                            <li>Tax Preparation.</li>
                                        </ul>


                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <h4>For Well Established Entities</h4>
                                        <ul>
                                            <li>Working full-time Committed Bookkeeper.</li>
                                            <li>Highly Skilled Accountant.</li>
                                            <li>Bank and Credit Card Reconciliation.</li>
                                            <li>Accounts due and receivable.</li>
                                            <li>Payroll Calculation and Payment of TDS/PF/ESI.</li>
                                            <li>TDS Return Filing.</li>
                                            <li>GST Return Filing.</li>
                                            <li>Filing an Annual Tax Return.</li>
                                            <li>Balance sheet and profit and loss statement.</li>
                                            <li>Reporting Financial Ratios.</li>
                                            <li>Inventory Control and Reconciliation.</li> 
                                            <li>Budgeting for the Quarters/Years.</li>                                             
                                        </ul>
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
            <div className="EmailMarketingTestimonials">
                <ClientSlider testimonials={testimonials} />
            </div>
            <FaqSection faqs={faqs} />

        </>
    )
}