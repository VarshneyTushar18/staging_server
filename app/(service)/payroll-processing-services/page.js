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
        "Payroll Processing Services | Tech2globe ",

    description:
        "We provide payroll processing for your business to simplify complex tasks and help you save time and money.",

    keywords:
        "Accounting Services | Accounting Services | Tech2globe ",

    alternates: {
        canonical: "https://www.tech2globe.com/payroll-processing-services",
    },

    openGraph: {
        title:
            "Payroll Processing Services | Tech2globe ",
        description:
            "We provide payroll processing for your business to simplify complex tasks and help you save time and money.",
        url: "https://www.tech2globe.com/payroll-processing-services",
        siteName: "Tech2Globe Web Solutions LLP",
        type: "website",
    },

    twitter: {
        card: "summary",
        title:
            "Payroll Processing Services | Tech2globe ",
        description:
            "We provide payroll processing for your business to simplify complex tasks and help you save time and money.",
    },
};


const faqs = [
    {
        id: "One",
        question: "Can a business switch from in-house payroll to a payroll processing service?",
        answer: `
        Yes, a business can switch from in-house payroll to a payroll processing service. Our process typically involves transitioning employee and payroll information to the new service and setting up procedures for collecting and submitting payroll information.
      `,
    },
    {
        id: "Two",
        question: "How do payroll processing services work?",
        answer: `
        Our payroll processing services typically work by collecting payroll information from businesses, including employee pay rates, hours worked, and deductions. We then calculate paychecks, prepare and file tax forms, and distribute payments to employees via direct deposit or paper checks. Also, we offer additional features such as online access to pay stubs and tax forms and support for tracking and reporting on employee hours worked.
      `,
    },
    {
        id: "Three",
        question: "Are your payroll processing services secure?",
        answer: `
        Without a doubt, Yes! Tech2Globe’s payroll processing services take security seriously and typically use various measures to protect sensitive employee and payroll information. These may include data encryption, secure servers, and restricted access to sensitive data.
      `,
    },
    {
        id: "Four",
        question: "How much do payroll processing services cost?",
        answer: `
        The cost of our payroll processing services can vary depending on the specific needs of a business. Some of our services charge a flat fee per employee per pay period, while others charge based on the number of payroll transactions or the level of service provided.
      `,
    },

];

const pageHeaderData = {
    title: "Payroll Processing Services",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};

const resources = [
    { id: 1, name: "Case Studies", path: "/case-studies" },
    { id: 2, name: "Our Clients", path: "/clients" },
    { id: 3, name: "Testimonial", path: "/testimonial" },

];

const usefulLinks = [
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
        text: "I have been very impressed with the level of service provided by Tech2Globe payroll processing services. They handle our payroll calculations accurately and ensure that our employees are paid on time. Their customer service is always available to answer any questions, and they have helped us stay compliant with changing tax laws and regulations. ",

    },

];


export default function PayrollProcessing() {

    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Payroll Processing Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner imageSrc="/images/services/service-inner/payroll-processing-services.jpg" />
                            <div className={Style.ContentDiv}></div>



                            <div className={Style.ContentDiv}>
                                <h2>Every business must simplify the complex process of accurately and timely preparing salaries for its employees for more prolonged success!</h2>
                                <p>How do you manage varying wage structures while accounting for reimbursements, loan advances, leaves, and other dynamic inputs? Can you handle all this while adhering to statutory and tax requirements (which change regularly)? If not, consider working with Tech2Globe.</p>
                                <p>To deliver end-to-end business payroll processing, we assure complete confidentiality while providing transparent employee communication, meeting legislative requirements, and performing fundamental payroll calculations.</p>
                            </div>


                            <div className={Style.ContentDiv}>
                                <h2>Why Does Your Business Need To Have Payroll Processing Services?</h2>

                                <p className="mb-4">Tech2Globe specializes in <strong>payroll management services</strong>, with 99% accuracy provided by a team of highly qualified chartered accountants focusing solely on the payroll.</p>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/Time-and-resource.png" className="img-responsive img-fluid" alt="Time Saving" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Time-saving</h4>
                                        <p className="text-start">Payroll processing can be time-consuming, especially if you have many employees. By outsourcing payroll processing to Tech2Globe, businesses can save time and focus on other essential tasks.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/Performance-Indicators.png" className="img-responsive img-fluid" alt="Accuracy" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Accuracy</h4>
                                        <p className="text-start">Payroll processing services are trained to handle payroll calculations and ensure that employee pay is accurate and timely. It helps to reduce errors and the risk of overpaying or underpaying employees.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/financial-modeling.png" className="img-responsive img-fluid" alt="Compliance" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Compliance</h4>
                                        <p className="text-start">Online payroll processing keeps up-to-date with changing tax laws and regulations. It can be the best option for businesses to stay compliant and avoid potential fines or penalties.
                                        </p>

                                    </div>

                                </div>
                                <hr />
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/cash-flow-management.png" className="img-responsive img-fluid" alt="Cost Effective" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Cost-effective</h4>
                                        <p className="text-start">Outsourcing payroll processing can save businesses money in the long run. It can be more cost-effective than hiring in-house staff or training existing employees to handle payroll.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/initial-consultation.png" className="img-responsive img-fluid" alt="Flexibility" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Flexibility</h4>
                                        <p className="text-start">Payroll processing services can be customized to meet the specific needs of a business. Our services allow companies to choose the level of support they need, whether it be full-service payroll or just assistance with particular tasks.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className={Style.ContentDiv}>
                                    <h2>Services You Can Take Advantage Of</h2>

                                    <p className="mb-4">With our payroll management services, we can provide every possible guidance and support to help businesses make a smooth transition.</p>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                        <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                            <img src="/images/services/service-inner/data-gathering.png" className="img-responsive img-fluid" alt="Paychecks" />
                                        </div>
                                        <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                            <h4 className="text-dark  fw-bold text-decoration-underline">Calculating And Distributing Paychecks To Employees</h4>
                                            <p className="text-start">Our payroll management services experts calculate paychecks based on employee pay rates, hours worked, and any applicable bonuses or commissions. The service then distributes pay to employees via direct deposit or paper checks.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <hr />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                        <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                            <img src="/images/services/service-inner/Pricing-Evaluation.png" className="img-responsive img-fluid" alt="Deduction" />
                                        </div>
                                        <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                            <h4 className="text-dark text-decoration-underline fw-bold">Deducting Taxes And Other Deductions From Employee Pay</h4>
                                            <p className="text-start">We calculate and deduct taxes and other deductions from employee pay, including federal and state income taxes, social security and Medicare taxes, and other required deductions.
                                            </p>

                                        </div>

                                    </div>
                                    <hr />

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                        <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                            <img src="/images/services/service-inner/Invoicing-And-Billing.png" className="img-responsive img-fluid" alt="Invoicing And Billing" />
                                        </div>
                                        <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                            <h4 className="text-dark  fw-bold text-decoration-underline">Preparing And Filing Tax Forms</h4>
                                            <p className="text-start">Our payroll processing services include preparing and filing tax forms on behalf of businesses, including W-2s for employees and 1099s for contractors. It helps companies to stay compliant with tax laws and avoid potential fines or penalties.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <hr />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                        <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                            <img src="/images/services/service-inner/preparing-returns.png" className="img-responsive img-fluid" alt="Employee Utilization" />
                                        </div>
                                        <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                            <h4 className="text-dark  fw-bold text-decoration-underline">Tracking And Reporting On Employee Utilization</h4>
                                            <p className="text-start">We offer tools to help businesses track and report on employee utilization. This can be especially useful for companies with hourly employees or those that need to follow time for billing or other purposes.
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
                                            <h4 className="text-dark  fw-bold text-decoration-underline">Providing Online Access To Pay Stubs And Tax Forms</h4>
                                            <p className="text-start">Tech2Globe offers online access to pay stubs and tax forms, which can be convenient for employees and more accessible for businesses to manage.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <hr />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                        <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                            <img src="/images/services/service-inner/financial-transactions.png" className="img-responsive img-fluid" alt="Financial Transactions" />
                                        </div>
                                        <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                            <h4 className="text-dark text-decoration-underline fw-bold">Handling Requests For Direct Deposit Or Paper Checks</h4>
                                            <p className="text-start">We can handle employee requests for direct deposit or paper checks and ensure that pay is distributed accurately and timely.
                                            </p>

                                        </div>

                                    </div>
                                    <hr />
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                        <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                            <img src="/images/services/service-inner/Increased-efficiency.png" className="img-responsive img-fluid" alt="Employee Inquiries" />
                                        </div>
                                        <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                            <h4 className="text-dark  fw-bold text-decoration-underline">Responding To Employee Inquiries About Pay Or Benefits</h4>
                                            <p className="text-start">For our payroll processing services, we have customer service teams available to answer employee questions about pay or benefits and help resolve any issues that may arise.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <hr />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                        <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                            <img src="/images/services/service-inner/laws-and-regulations.png" className="img-responsive img-fluid" alt="Tax Laws" />
                                        </div>
                                        <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                            <h4 className="text-dark  fw-bold text-decoration-underline">Staying Up-To-Date With Changing Tax Laws And Regulations</h4>
                                            <p className="text-start">We keep up-to-date with changing tax laws and regulations to help businesses stay compliant and avoid potential fines or penalties.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <hr />
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    </div>
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
                                    <h2 className="pt-5 text-danger text-center">We Have Served Across Almost All Industries</h2>

                                    <p className="text-center">Take the stress out of payroll with our Tech2Globe’s accurate and reliable payroll solutions!</p>

                                    <div className="row mt-5">
                                        <div className={Style.IndustryFlex}>
                                            <div className={Style.IndustryCard}>
                                                <div className={Style.Img}>
                                                    <Image src="/images/services/service-inner/health-care1.jpg" alt="Financial Services" width={500} height={250} className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className={Style.IndustryCard}>
                                                <div className={Style.Img}>
                                                    <Image src="/images/services/service-inner/non-profit.jpg" alt="Financial Services" width={500} height={250} className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className={Style.IndustryCard}>
                                                <div className={Style.Img}>
                                                    <Image src="/images/services/service-inner/food-services.jpg" alt="Financial Services" width={500} height={250} className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className={Style.IndustryCard}>
                                                <div className={Style.Img}>
                                                    <Image src="/images/services/service-inner/insurance.jpg" alt="Financial Services" width={500} height={250} className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className={Style.IndustryCard}>
                                                <div className={Style.Img}>
                                                    <Image src="/images/services/service-inner/translation-firm.jpg" alt="Financial Services" width={500} height={250} className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className={Style.IndustryCard}>
                                                <div className={Style.Img}>
                                                    <Image src="/images/services/service-inner/retail.jpg" alt="Financial Services" width={500} height={250} className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className={Style.IndustryCard}>
                                                <div className={Style.Img}>
                                                    <Image src="/images/services/service-inner/b2b.jpg" alt="Financial Services" width={500} height={250} className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className={Style.IndustryCard}>
                                                <div className={Style.Img}>
                                                    <Image src="/images/services/service-inner/education.jpg" alt="Financial Services" width={500} height={250} className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className={Style.IndustryCard}>
                                                <div className={Style.Img}>
                                                    <Image src="/images/services/service-inner/finance.jpg" alt="Financial Services" width={500} height={250} className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className={Style.IndustryCard}>
                                                <div className={Style.Img}>
                                                    <Image src="/images/services/service-inner/legal.jpg" alt="Financial Services" width={500} height={250} className="img-fluid" />
                                                </div>
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