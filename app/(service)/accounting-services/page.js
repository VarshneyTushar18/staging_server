import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Image from "next/image";

import FaqSection from "@/app/components/services/faqs/faqs";
import Link from "next/link";


export const metadata = {
     title:
    "Accounting Services | Accounting Services | Tech2globe ",

  description:
    "Tech2globe accounting service provides the support, objectivity and expertise businesses need to succeed within the context of an ever-changing business landscape.",

  keywords:
    "Accounting Services | Accounting Services | Tech2globe ",

  alternates: {
    canonical: "https://www.tech2globe.com/accounting-services",
  },

  openGraph: {
    title:
      "Accounting Services | Accounting Services | Tech2globe ",
    description:
      "Tech2globe accounting service provides the support, objectivity and expertise businesses need to succeed within the context of an ever-changing business landscape.",
    url: "https://www.tech2globe.com/accounting-services",
    siteName: "Tech2Globe Web Solutions LLP",
    type: "website",
  },

  twitter: {
    card: "summary",
    title:
      "Accounting Services | Accounting Services | Tech2globe ",
    description:
      "Tech2globe accounting service provides the support, objectivity and expertise businesses need to succeed within the context of an ever-changing business landscape.",
  },
};

const faqs = [
    {
        id: "One",
        question: "Do you offer ongoing support, or do you only handle one-time projects?",
        answer: `
        Yes, being the most credible accounting agency, we offer all sorts of ongoing support to businesses; you can rest assured about this. It is best to discuss your specific needs with our accounting professionals to determine the best fit for your business.
      `,
    },
    {
        id: "Two",
        question: "Will the accounts receivable service have access to my business's financial information?",
        answer: `
        Yes, our accounts receivable service will typically have access to your business's financial information in order to manage your accounts receivable effectively. This may include invoices, payment histories, and other financial data.
      `,
    },
    {
        id: "Three",
        question: "How often will I receive updates from the accounts receivable service?",
        answer: `
        The frequency of updates for our accounts receivable service will depend on the specific service and the terms of your agreement. Some of our services may provide daily or weekly updates, while others may offer less frequent updates. Be sure to clarify the update schedule with us before signing an agreement.
      `,
    },
    {
        id: "Four",
        question: "Can I cancel my accounts receivable service at any time?",
        answer: `
        The terms for canceling your accounts receivable service agreement will depend on the specific terms of your agreement. We may have flexible cancellation policies but still be sure that you clear your situation before canceling.
      `,
    },

];

const pageHeaderData = {
    title: "Accounting Services",
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
        text: "Tech2Globe's Outsourced finance and accounting services have been a valuable resource for my business. Not only do they handle all of my accounting needs with precision and accuracy, but they also take the time to explain things in a way that I can understand. I highly recommend their services to anyone needing professional and reliable accounting support.",

    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "As a non-profit organization, we must have a reliable and trustworthy accounting team. Tech2Globe has exceeded our expectations in every way! They are always available to answer our questions, provide financial guidance, and help us make informed decisions.",

    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "I have been using Tech2Globe's Accounting for the past few years, and I am consistently impressed with their service and expertise. They have helped me navigate complex tax laws and regulations and have always been available to answer my questions and provide guidance. I highly recommend their services to any business owner looking for top-notch accounting support.",

    },

];


export default function Accounting() {

    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Accounting Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner imageSrc="/images/services/service-inner/accounting-services.jpg" />
                            <div className={Style.ContentDiv}></div>



                            <div className={Style.ContentDiv}>
                                <h2>Leave your accounting worries to us – we'll handle the details so you can focus on growing your business.</h2>
                                <p>If you are a new or established business keeping track of your finances is crucial in making business-related decisions. Here, accounting services can help! Accounting is the practice of keeping track of your revenues and expenses. The role of our accounting experts is to provide precise financial guidance and strategies based on the company's financial position. You can trust us to provide the quality and amount of work we promised you when we began the process.</p>                               
                            </div>

                         
                            <div className={Style.ContentDiv}>
                                <h3>Why Do Businesses Need Accounting Services?</h3>

                                <p className="mb-4">We're much more than accountants as we strive to become your financial advisors as well as business partners!</p>
                                
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/financial-transactions.png" className="img-responsive img-fluid" alt="Financial Transactions" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">To accurately track and record financial transactions</h4>
                                        <p className="text-start">Accounting is essential for businesses to keep track of their finances like expenses, sales and investments. This is essential to comply with tax laws and also for making well-informed business decision-making.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/financial-statements.png" className="img-responsive img-fluid" alt="Financial Statements" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">To prepare financial statements</h4>
                                        <p className="text-start">Online bookkeeping services for small businesses save time and money because you don't have to deal with a bookkeeper as a small business owner.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/business-decisions.png" className="img-responsive img-fluid" alt="Business Decisions" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">To make informed business decisions</h4>
                                        <p className="text-start">By analyzing financial data, businesses can make informed decisions about allocating resources and planning for the future. For example, a company might invest in new equipment or expand into a new market based on its financial performance.
                                        </p>

                                    </div>

                                </div>
                                <hr />
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/laws-and-regulations.png" className="img-responsive img-fluid" alt="Laws and Regulations" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">To comply with laws and regulations</h4>
                                        <p className="text-start">Businesses must follow specific accounting standards and regulations, such as Generally Accepted Accounting Principles (GAAP) in the US. Accounting services can help companies to ensure that they comply with these requirements.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                </div>
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
                                    <h2 className="mt-5 text-center">Different Types Of Outsourced Accounting Services Available</h2>

                                    <p className="text-center">The financial experts you can trust are available to assist you in today's market that is highly competitive.</p>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                            <div className="payableCard red  h-100">
                                                <h6><Link href="/ecommerce-marketplace-management">Bookkeeping</Link></h6>
                                                <p>Bookkeeping is the process of recording a business's financial transactions. These services include documenting how money comes and goes out from business, such as client and vendor payments. While bookkeepers used to keep track of this information in physical books, the majority of the work is done using digital software.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                            <div className="payableCard blue h-100">
                                                <h6><Link href="/digital-marketing-services">Auditing</Link></h6>
                                                <p>Auditing is the process of reviewing and verifying the accuracy of a company's financial records. The audit can be performed internally by workers of the corporation or externally by a certified public accounting (CPA) firm. Generally, auditing is done by an independent third party and is used to ensure that a company's financial statements are accurate and reliable.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                            <div className="payableCard yellow h-100">
                                                <h6><Link href="/amazon-consulting-services">Tax Preparation</Link></h6>
                                                <p>Tax preparation is the process of preparing tax returns, often income tax returns, for someone other than the taxpayer and usually for a fee. It can be a difficult procedure, but it's essential for companies to adhere to the rules and laws of taxation. The service helps people comprehend the complexity of preparing their tax return and ensure that they claim all credits and deductions.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                            <div className="payableCard skyblue h-100">
                                                <h6><Link href="/software-development">Financial consulting</Link></h6>
                                                <p>Financial consulting involves providing advice and guidance to businesses on financial matters. This can include creating financial projections, developing budgeting strategies, and identifying areas for cost savings.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                            <div className="payableCard green h-100">
                                                <h6><Link href="">Payroll</Link></h6>
                                                <p>Payroll involves processing a company's employee salaries and wages and withholding and remitting taxes. Accounting services can help businesses manage their payroll accurately and efficiently.</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                            <div className="payableCard voilet h-100">
                                                <h6><Link href="/photo-editing-services">Financial planning</Link></h6>
                                                <p>Financial planning involves creating a long-term plan for managing a company's financial resources. This can include setting financial goals, creating a budget, and developing a financial strategy.</p>
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