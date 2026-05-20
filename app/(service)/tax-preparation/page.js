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
        "Best Tax Preparation Services of 2023 | Tech2globe ",

    description:
        "The best services will take the complexity out of doing your taxes. We rounded up the best tax preparation services based on cost, convenience, and more.",

    keywords:
        "Accounting Services | Accounting Services | Tech2globe ",

    alternates: {
        canonical: "https://www.tech2globe.com/tax-preparation",
    },

    openGraph: {
        title:
            "Best Tax Preparation Services of 2023 | Tech2globe ",
        description:
            "The best services will take the complexity out of doing your taxes. We rounded up the best tax preparation services based on cost, convenience, and more.",
        url: "https://www.tech2globe.com/tax-preparation",
        siteName: "Tech2Globe Web Solutions LLP",
        type: "website",
    },

    twitter: {
        card: "summary",
        title:
            "Best Tax Preparation Services of 2023 | Tech2globe ",
        description:
            "The best services will take the complexity out of doing your taxes. We rounded up the best tax preparation services based on cost, convenience, and more.",
    },
};


const faqs = [
    {
        id: "One",
        question: "What types of tax returns do you prepare?",
        answer: `
       Our tax preparation services agency can help you with a wide range of tax returns, including individual, business, nonprofit, and more. We have expertise in various areas and can work with you to determine the best approach for your needs.
      `,
    },
    {
        id: "Two",
        question: "How long does the tax preparation process take?",
        answer: `
        The length of the tax preparation process can vary depending on the complexity of your tax return and the amount of information we need to gather. We will work with you to determine a timeline that works best for your needs and does our best to complete your tax return as efficiently as possible.

      `,
    },
    {
        id: "Three",
        question: "Do I need to come into your office to have my taxes prepared?",
        answer: `
        Not necessarily. We understand that many of our clients are busy and may need more time to come into our office. We offer flexible tax preparation options, including gathering information remotely or scheduling virtual appointments.
      `,
    },
    {
        id: "Four",
        question: "What documents and information do I need to provide to prepare my taxes?",
        answer: `
        We will provide you with a list of the documents and information we need to prepare your tax return. This may include W-2 forms, 1099s, charitable donation receipts, and other financial documents. We will work with you to ensure we have everything we need to complete your tax return accurately.
      `,
    },

];

const pageHeaderData = {
    title: "Tax Preparation Services",
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
        text: "I was referred to Tech2Globe by a friend, and I'm so glad I gave them a try. They made preparing my taxes easy and stress-free, and I was pleasantly surprised by how much I could save. Their team was very knowledgeable, friendly, and accommodating – I will use them again. ",

    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "As a small business owner, I have a lot of questions when it comes to taxes. Tech2Globe has been incredibly helpful in answering all my questions and guiding me through the process. They take the time to explain things in a way that is easy to understand, and they always go above and beyond to ensure I'm getting the best possible outcome. I'm so grateful to have them as my go-to tax preparation team.",

    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "I've had a lot of experience with tax filing services, and Tech2Globe is the best I've worked with. They are efficient, thorough, and always willing to go the extra mile to ensure that my taxes are done correctly. I trust them to handle all my tax needs and highly recommend them to anyone.",

    },

];


export default function TaxPreparation() {

    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Tax Preparation" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner imageSrc="/images/services/service-inner/tax-preparation-services.jpg" />
                            <div className={Style.ContentDiv}></div>

                            <div className={Style.ContentDiv}>
                                <h2>Leave the tax headache to us, and let our professionals handle the nitty-gritty of tax season!</h2>
                                <p>Is peak tax season depleting your resources and leaving you with little or no time to focus on core functions? Are you looking for outsourced tax preparers and seasonal personnel to act as your extended arm during tax season?</p>
                                <p>Don't allow the stressful season of tax returns to overwhelm you! As a reliable <strong>tax preparation services</strong> provider, we assist you in optimizing capacity, organizing tax-related paperwork, and minimizing errors. Tech2Globe's tax preparation experts team works with small and big businesses, as well as CPAs and CPA firms.</p>
                            </div>

                            
                                <div className="row mt-5">

                                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                        <h2>Different Tax Preparation Services That We Offer:</h2>
                                        <p>Get the peace of mind you deserve with our tax services.</p>
                                        <p>Because of our extensive experience in both individual and commercial tax preparation services, we can quickly enhance speed and scale. We examine your balance sheets and categorize each item to ensure proper and timely filing of tax returns. Our secure portals route your needs to the appropriate tax professional, allowing you to complete your tax preparation on schedule. We also identify and interpret profit and loss items and the taxability and treatment of various accounts. We provide - thanks to our trained and qualified tax professionals.</p>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                        <img
                                            src="/images/services/service-inner/benifit.png"
                                            className="img-responsive"
                                            alt="benefits"
                                            width="300px"
                                            height="250px"
                                        />

                                    </div>
                                </div>
                            

                            
                                <div className="row mt-3">

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <h4>Federal Tax Filing Services</h4>
                                        <ul>
                                            <li>Personal Income Taxes.</li>
                                            <li>Income Taxes on 'C' Corporations.</li>
                                            <li>Income Taxes on 'S' Corporations.</li>
                                            <li>Income Taxes on Partnerships.</li>
                                            <li>Income Taxes on Fiduciaries.</li>
                                            <li>Taxes on Nonprofit Corporations.</li>
                                            <li>Taxes on the Use of Heavy Equipment.</li>
                                            <li>Preparation of Non-Resident Tax Returns.</li>
                                            <li>Preparation of Small Business Tax Returns.</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <h4>State Tax Return Services</h4>
                                        <ul>
                                            <li>Personal Income Taxes (for all states).</li>
                                            <li>Returns on Corporate Income.</li>
                                            <li>Returns on Partnership Income.</li>
                                            <li>Returns on Intangible Assets.</li>
                                            <li>Tax Returns in Material Form.</li>
                                            <li>Returns on Charters and Franchises.</li>
                                            <li>Taxes on capital gains.</li>
                                            <li>Preparation of Gift Tax Returns.</li>
                                        </ul>
                                    </div>
                                </div>
                        


                            <div className={Style.ContentDiv}>
                                <h2>How Do We Process Your Request?</h2>

                                <p className="mb-4">Keeping up with the ongoing changes in tax processing services allows us to provide compliant tax outsourcing services in a timely and effective manner!</p>
                                <p>Our alliances with reputable CPAs worldwide assist us in understanding the pulse of global finance, sensitizing our capabilities to the unique needs of foreign organizations, and devising an efficient tax preparation process flow that perfectly caters to our customer's needs.</p>
                                <p><strong>Our Tax Outsourcing Services Encompass A Multi-Step Process That Includes:</strong></p>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/initial-consultation.png" className="img-responsive img-fluid" alt="Initial Consultation" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Initial Consultation</h4>
                                        <p className="text-start">The client meets with us or our tax professional to discuss their tax preparation needs and provide any necessary documentation.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/data-gathering.png" className="img-responsive img-fluid" alt="Data Gathering" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Data Gathering</h4>
                                        <p className="text-start">We then, at the very next stage, gather all necessary documentation, such as tax forms, receipts, and financial statements.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/data-entry.png" className="img-responsive img-fluid" alt="Data Entry" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Data Entry</h4>
                                        <p className="text-start">The gathered documentation is entered into the tax preparation software.
                                        </p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/review-and-analysis.png" className="img-responsive img-fluid" alt="Review And Analysis" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Review And Analysis</h4>
                                        <p className="text-start">The gathered documentation is entered into the tax preparation software.
                                        </p>
                                    </div>
                                </div>
                                <hr />
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/preparing-returns.png" className="img-responsive img-fluid" alt="Cost Recovery" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Preparing Returns</h4>
                                        <p className="text-start">Using the entered data and any tax planning strategies identified, our tax professionals team then prepares the tax returns.
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
                            <h2 className="mt-5 mb-3">What Makes Tech2Globe the Best Tax Preparation Service Provider?</h2>
                            <p>As the cost of the mainland tax services grows, more accountants and businesses are looking to outsource tax processing to cut operational costs while enhancing efficiency and profits. To address this market demand, we offer tailored services utilizing cutting-edge tax software and technology such as Intuit's Lacerte, Creative Solutions' Ultratax, Intuit's ProSeries, ATX, and Drake.</p>
                        </div>
                        <div className={Style.ContentDiv}>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className={Style.ContentDiv}>
                                    <h4 className="mb-3">You Will Be Highly Benefited When You Choose To Work With Tech2Globe</h4>

                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                            <div className="payableCard red  h-100">
                                                <h6><Link href="/ecommerce-marketplace-management">Expertise</Link></h6>
                                                <p>Tax laws can be complex and confusing, and our tax preparers have the training and experience to navigate them effectively.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                            <div className="payableCard blue h-100">
                                                <h6><Link href="/digital-marketing-services">Accurate and Time Saving</Link></h6>
                                                <p>Tech2Globe will help you ensure the tax returns are complete and accurate, thereby saving you time and cost in the end.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                            <div className="payableCard yellow h-100">
                                                <h6><Link href="/amazon-consulting-services">Efficiency</Link></h6>
                                                <p>Our tax professionals can often complete your tax return more quickly than you could, freeing up your time to focus on other things.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                            <div className="payableCard skyblue h-100">
                                                <h6><Link href="/software-development">Convenience</Link></h6>
                                                <p>Many of our tax filing services offer online or mobile options, making it easy to file taxes from anywhere.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                            <div className="payableCard green h-100">
                                                <h6><Link href="">Managed By Professionals</Link></h6>
                                                <p>Our tax preparation service can give you peace of mind knowing that your taxes are handled by a professional.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <div className="EmailMarketingTestimonials">
                <ClientSlider testimonials={testimonials} />
            </div>
            <FaqSection faqs={faqs} />

        </>
    )
}