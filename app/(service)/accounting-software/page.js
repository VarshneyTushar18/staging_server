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
        "Best Accounting Software Services | tech2globe  ",

    description:
        "To help you choose the right business accounting software services for your company, we have identified the best in each class.",

    keywords:
        "Accounting Services | Accounting Services | Tech2globe ",

    alternates: {
        canonical: "https://www.tech2globe.com/accounting-software",
    },

    openGraph: {
        title:
            "Best Accounting Software Services | tech2globe ",
        description:
            "To help you choose the right business accounting software services for your company, we have identified the best in each class.",
        url: "https://www.tech2globe.com/accounting-software",
        siteName: "Tech2Globe Web Solutions LLP",
        type: "website",
    },

    twitter: {
        card: "summary",
        title:
            "Best Accounting Software Services | tech2globe ",
        description:
            "To help you choose the right business accounting software services for your company, we have identified the best in each class.",
    },
};

const faqs = [
    {
        id: "One",
        question: "What features does the software offer?",
        answer: `
        Some standard features of our accounting software include the ability to create and send invoices, track expenses, manage payroll, generate financial reports, and track inventory. Different software packages may offer different sets of features, so it's essential to choose a package that meets the specific needs of your business.
      `,
    },
    {
        id: "Two",
        question: "How much does the software cost?",
        answer: `
        The cost of our accounting software can vary depending on the features and capabilities of the package. Primarily, our software is available on a subscription basis, while others are purchased outright. It's essential to carefully consider the needs of your business while choosing our packages that offer good value for your money.
      `,
    },
    {
        id: "Three",
        question: "Is the software easy to use?",
        answer: `
       Most of our modern accounting software is designed to be user-friendly and easy to navigate. We bring the best in this business and offer training resources and customer support to help users get up to speed.
      `,
    },
    {
        id: "Four",
        question: "Is the software compatible with my other business tool?",
        answer: `
        Tech2Globe's accounting software packages integrate with other business tools, such as customer relationship management (CRM) and point-of-sale (POS) systems. It's essential to check that the software you choose is compatible with the other tools you use to run your business.
      `,
    },


];

const pageHeaderData = {
    title: "Accounting Software Services",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};

const resources = [
    { id: 1, name: "Case Studies", path: "/case-studies" },
    { id: 2, name: "Our Clients", path: "/clients" },
    { id: 3, name: "Testimonial", path: "/testimonial" },
];

const usefulLinks = [
    { id: 4, name: "Inbound Call Center", path: "/inbound-call-center" },
    { id: 5, name: "Outbound Call Center", path: "/outbound-call-center-solutions" },
    { id: 6, name: "Telemarketing Services", path: "/telemarketing-services" },
    { id: 7, name: "Lead Generation Services", path: "/lead-generation-services" },
    { id: 8, name: "Customer Support Services", path: "/customer-support-services" },
    { id: 9, name: "Virtual Assistant Services", path: "/virtual-assistant-services" },
    { id: 10, name: "Call Center Monitoring", path: "/call-center-monitoring" },
    { id: 11, name: "Call Center Consulting Services", path: "/call-center-consulting" },
    { id: 12, name: "Super Agent Services", path: "/super-agent-services" },
];


const sidebarSections = [
    { heading: "Resources", links: resources },
    { heading: "Useful Links", links: usefulLinks },
];

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "I have used Tech2Globe Payroll Processing Services for the past five years and have always been extremely satisfied with their level of service. They handle our payroll calculations accurately and timely, and their customer service is always available to answer any questions. I highly recommend their Payroll Processing Services to businesses needing reliable and efficient payroll processing",

    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "I have been using Tech2Globe online payroll processing for the past year and have had a great experience. Their team is professional, responsive, and always goes above and beyond to meet our needs. Their online platform is easy to use and allows us to track and manage payroll in real time.",

    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "I have been very impressed with the level of service provided by Tech2Globe payroll processing services. They handle our payroll calculations accurately and ensure that our employees are paid on time. Their customer service is always available to answer any questions, and they have helped us stay compliant with changing tax laws and regulations.",

    },
];


export default function AccountingSoftware() {



    return (
        <>

            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Accounting Software" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner imageSrc="/images/services/service-inner/accounting-software-services.jpg" />
                            <div className={Style.ContentDiv}></div>



                            <div className={Style.ContentDiv}>

                                <p>Every organization can only become successful with an advanced Accounting software program. It can assist you in creating professional invoices, recording incoming and outgoing payments, identifying and following up on past-due receivables, streamlining tax administration, and running reports that examine your company's financial health and project for the future, depending on the program.</p>
                                <p>While preparing one of the most advanced accounting software systems, we evaluated some of the most popular platforms today to help you pick the finest accounting software for your business. We looked for inexpensive and simple accounting software with time-saving features like automated bank feeds, automatic payment reminders, and online invoicing and payment acceptance. Thus, we have developed software that provides comprehensive, customized, real-time financial reporting, which is critical for monitoring and understanding your company's finances.</p>

                            </div>

                            <div className={Style.ContentDiv}>
                                <h2>Why Should Your Business Have Accounting Software?</h2>

                                <p className="mb-4">Maximize your financial efficiency with our comprehensive Accounting software solution!</p>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 col-sm-2  col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/Increased-efficiency.png" className="img-responsive img-fluid" alt="Improved efficiency" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Improved efficiency</h4>
                                        <p className="text-start">Accounting software can automate many tasks, such as invoicing, payment processing, and financial reporting, which can save businesses time and increase efficiency.
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
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-5">
                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 text-center">Why Tech2Globe's Accounting Software</h2>
                                <p className="text-center">Gain valuable insights into your financial performance with our powerful analytics tools!</p>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                        <div className="carditemcall shadow-sm mb-3 h-100">
                                            <div className="text-center">
                                                <Image src="/images/services/service-inner/team-icon.png" width={100} height={100} alt="Accounting analytics powered by AI" />
                                            </div>
                                            <div className="context text-center">
                                                <h5>Accounting analytics powered by AI.</h5>
                                                <p>To receive recommendations on the best payment queues and methods, depreciation calculation methods, and more.</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                        <div className="carditemcall shadow-sm mb-3 h-100">
                                            <div className="text-center">
                                                <Image src="/images/services/service-inner/budget.png" width={100} height={100} alt="Advanced data security techniques" />
                                            </div>
                                            <div className="context text-center">
                                                <h5>Advanced data security techniques</h5>
                                                <p>Multi-layer encryption, intelligent fraud detection, vulnerability scanning, patching, etc. To restrict access to sensitive financial and commercial data, detect non-compliant or fraudulent transactions, and reduce the risk of malicious user activity.</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                        <div className="carditemcall shadow-sm mb-3 h-100">
                                            <div className="text-center">
                                                <Image src="/images/services/service-inner/budget-management.png" width={100} height={100} alt="Cloud computing" />
                                            </div>
                                            <div className="context text-center">
                                                <h5>Cloud computing</h5>
                                                <p>To reduce accounting software maintenance costs, enable speedier updates, and create an easily accessible platform for worldwide accounting process cooperation.</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                        <div className="carditemcall shadow-sm mb-3 h-100">
                                            <div className="text-center">
                                                <Image src="/images/services/service-inner/budget-management.png" width={100} height={100} alt="APIs and connectors that are simple to use" />
                                            </div>
                                            <div className="context text-center">
                                                <h5>APIs and connectors that are simple to use</h5>
                                                <p>To simplify the integration of accounting software with your critical back-office systems and required third-party applications.</p>
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