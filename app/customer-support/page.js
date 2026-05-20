import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import BrandSection from "../components/home/BrandSection/BrandSection";
import Breadcrumb from "../components/breadcrumbs/breadcrumbs";
import PageHeader from "../components/services/PageHeader/PageHeader";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import Image from "next/image";
import Style from "./style.module.css";

export const metadata = {
    title: "Customer Support Services 27*7 - Tech2Globe",
    description:
        "Tech2Globe provides 24/7 customer support services, ensuring prompt assistance and satisfaction. Trust our team for reliable support around the clock.",
    openGraph: {
        title: "Customer Support Services 27*7 - Tech2Globe",
        description:
            "Tech2Globe provides 24/7 customer support services, ensuring prompt assistance and satisfaction. Trust our team for reliable support around the clock.",
        url: "https://www.tech2globe.com/customer-support",
        siteName: "Tech2Globe",
    },
    alternates: {
        canonical: "https://www.tech2globe.com/customer-support",
    },
};

const pageHeaderData = {
    title: "Customer Support",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};

const resources = [
    { id: 1, name: "Case Studies", path: "/case-studies" },
    { id: 2, name: "Clients", path: "/clients" },
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
        text: "Tech2Globe's customer support services have been a lifesaver for my business. Their team is highly skilled and always available to help me with any issues I have. They have also been very proactive in identifying potential problems before they occur and have helped me save a lot of time and money. I highly recommend Tech2Globe to any business looking for a reliable and efficient customer support outsourcing provider.",
        name: "Samantha Lee, Small Business Owner",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "I have been working with Tech2Globe for several months now, and I am extremely impressed with their customer support services. The team is knowledgeable, responsive, and always willing to go the extra mile to help me with any issues I have. I highly recommend Tech2Globe to any business looking to improve their customer support operations.",
        name: "Alex Thompson, Amazon Seller",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe's customer support services have been a lifesaver for my business. Their team is highly skilled and always available to help me with any issues I have. They have also been very proactive in identifying potential problems before they occur and have helped me save a lot of time and money. I highly recommend Tech2Globe to any business looking for a reliable and efficient customer support outsourcing provider.",
        name: "Rahul Sharma, E-commerce Entrepreneur.",
    },
];

const faqs = [
    {
        id: "One",
        question: "What types of support does your inbound customer support agency offer?",
        answer: `
        Our inbound customer support agency offers a wide range of support services including technical support, troubleshooting, product information, and account management. We also offer specialized services such as billing support and account recovery.
      `,
    },
    {
        id: "Two",
        question: "How do you ensure the quality of your agents' performance?",
        answer: `
        We ensure the quality of our agents' performance through regular training and performance evaluations. We also have a quality assurance team that monitors calls and provides feedback to agents. Additionally, we use call recording and call analysis software to track and improve the performance of our agents.
      `,
    },
    {
        id: "Three",
        question: "How do you handle and resolve customer complaints?",
        answer: `
        We have a dedicated customer complaint team that handles and resolves customer complaints in a timely and efficient manner. Our agents are trained to listen actively and empathize with the customer, and to take the necessary steps to resolve the complaint and ensure customer satisfaction. We also have a complaint escalation process in place to ensure that any unresolved complaints are brought to the attention of the appropriate department or management team.
      `,
    },
    {
        id: "Four",
        question: "What measures do you have in place to protect customer data?",
        answer: `
        We take customer data protection very seriously and have several measures in place to ensure the security of customer data. This includes using secure servers and encryption for data storage, implementing strict access controls, and regularly monitoring and auditing our systems for vulnerabilities. We also have strict data privacy policies in place that all of our agents must adhere to.
      `,
    }
];

export default function CustomerSupport() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb pageName="Customer Support" />
            <BrandSection />

            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <Image
                                src="/images/customer-support/call-center-banner-outbound.jpg"
                                alt="Customer Support"
                                width={1200}
                                height={330}
                                className="img-fluid mb-3"
                            />

                            <div className={Style.ContentDiv}>
                                <h2>Ensuring a positive client experience at every turn</h2>
                                <p>We take pleasure in offering our esteemed clients prompt and effective answers since we recognize that in today&apos;s fast-paced world, time is of the utmost. Our staff of extensively skilled experts is on hand 24/7 to help you with any and all of your needs, no matter how big or small. We guarantee that every call is handled quickly and with the greatest degree of client satisfaction thanks to our state-of-the-art technology. With our call center support services, our team is prepared to handle any kind of inquiry or problem, no matter how basic or complicated. Our goal is to ensure that each and every interaction with customers is nothing less than exceptional. Give us a try for your call center requirements and see the Tech2Globe difference.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2>Our Varying Levels of Customer Service</h2>
                                <p>The goal of Tech2Globe&apos;s customer support services is to give clients and customers all the help they need with their goods and services. To guarantee client happiness, we supply a variety of activities and support in the event that clients run into issues or have inquiries.</p>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/customer-support/telephone-answering-call-center.jpg" className="img-responsive img-fluid" alt="Phone Assistance" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Phone Assistance</h4>
                                        <p className="text-start">Customers who would like assistance can speak with a representative by calling Tech2Globe&apos;s customer care number. The company&apos;s support crew is trained to address a broad range of difficulties pertaining to the products and services it offers, and they are accessible around-the-clock.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/customer-support/email-support-call-center.jpg" className="img-responsive img-fluid" alt="Email Support" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Email Support</h4>
                                        <p className="text-start">Customers can contact us via our customer service email address and will receive an answer. Our customer service staff responds to inquiries promptly - usually within a few hours.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/customer-support/chat-support-call-center.jpg" className="img-responsive img-fluid" alt="Live Chat Assistance" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Live Chat Assistance</h4>
                                        <p className="text-start">Clients can seek immediate help via live chat. With this feature that is available around all hours, customers can contact customer service representatives and get immediate assistance.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/customer-support/appointment-setting-call-center.png" className="img-responsive img-fluid" alt="Self-assistance Resources" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Self-assistance Resources</h4>
                                        <p className="text-start">Customers can avail of a range of self-service support options from us, including knowledge bases, user guides, and FAQs, to find responses to the most frequently asked questions regarding your business.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/customer-support/social-media-management-call-center.jpg" className="img-responsive img-fluid" alt="Social Media Support" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Social Media Support</h4>
                                        <p className="text-start">Customers can connect with you to get assistance using your social media accounts. Our customer service representatives monitor your social media accounts and are available to answer any questions clients may have.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/customer-support/account-management-call-center.png" className="img-responsive img-fluid" alt="Account management" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Account management</h4>
                                        <p className="text-start">To help clients manage their accounts as well as navigate the various offerings offered by the company We offer the services of account management. This covers billing as well as keeping track of the account information, and providing services that are tailored to the specific needs of each client.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/customer-support/training-education-call-center.png" className="img-responsive img-fluid" alt="Instruction and Training" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Instruction and Training</h4>
                                        <p className="text-start">To help customers learn how to utilize your products or services effectively Our call center support services provide training and instruction. Webinars, tutorials, and training sessions in person can be classified under this category.
                                        </p>
                                    </div>
                                </div>

                                <p>Together, these allow us to offer our customers efficient and professional customer service services. Our support team of devoted specialists is available to assist clients with any questions or issues they may face. These services are available 24 hours a day and customers can seek assistance at any time they require it.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h3 className="fw-medium pt-3">Our Detailed Procedure for Offering Customer Support Services</h3>
                                <p>Our methodical customer care procedure at Tech2Globe is made to guarantee that your clients are constantly happy with their experience.</p>

                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: 'red', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>1</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">
                                        <strong style={{ fontSize: 19 }}>State Your Objectives
                                        </strong>
                                        <p className="text-start">We assist you in precisely defining the aims and objectives you want to accomplish with our customer service initiatives.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#ffc107', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>2</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">
                                        <strong style={{ fontSize: 19 }}>Agent Training
                                        </strong>
                                        <p className="text-start">Our representatives go through extensive training on handling various types of encounters and best practices for customer service.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#03a9f4', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>3</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">
                                        <strong style={{ fontSize: 19 }}>Put in place call monitoring and assessment
                                        </strong>
                                        <p className="text-start">To make sure our agents are giving you great customer service, we constantly watch and assess their interactions.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#607d8b', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>4</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">
                                        <strong style={{ fontSize: 19 }}>Examine and enhance
                                        </strong>
                                        <p className="text-start">To improve the effectiveness of our customer support activities, we evaluate and optimize the data collected from call monitoring.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#9c27b0', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>5</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">
                                        <strong style={{ fontSize: 19 }}>Remain in contact
                                        </strong>
                                        <p className="text-start">We maintain a relationship with our clients and apply their input to enhance our customer support initiatives.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#00764e', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>6</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">
                                        <strong style={{ fontSize: 19 }}>Evaluate and monitor results
                                        </strong>
                                        <p className="text-start">To assess the effectiveness of our customer care initiatives, we monitor and measure important performance metrics like call volume and customer satisfaction.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#091014', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>7</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">
                                        <strong style={{ fontSize: 19 }}>Reporting and Interpretation
                                        </strong>
                                        <p className="text-start">We create reports on a regular basis and examine the information to spot patterns, trends, and opportunities for development.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#673ab7', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>8</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">
                                        <strong style={{ fontSize: 19 }}>Assurance of quality
                                        </strong>
                                        <p className="text-start">We assess our agents&apos; performance on a regular basis and provide them with feedback to help them do better.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Industries We Cater To</h2>
                                <div className="row pb-3">
                                    <div className="col-md-12">
                                        <div className={Style.inner}>
                                            <div className={`${Style.commonInner} inner1`}>
                                                <div className={`${Style.img} mx-auto`}>
                                                    <img src="/images/services/health-care.png" alt />
                                                </div>
                                                <div className={`${Style.title} mx-auto`}>
                                                    Healthcare
                                                </div>
                                            </div>
                                            <div className={`${Style.commonInner} inner2`}>
                                                <div className={`${Style.img} mx-auto`}>
                                                    <img src="/images/services/skin-care-1-1.png" alt />
                                                </div>
                                                <div className={`${Style.title} mx-auto`}>
                                                    Beauty
                                                </div>
                                            </div>
                                            <div className={`${Style.commonInner} inner3`}>
                                                <div className={`${Style.img} mx-auto`}>
                                                    <img src="/images/services/food.png" alt />
                                                </div>
                                                <div className={`${Style.title} mx-auto`}>
                                                    Food
                                                </div>
                                            </div>
                                            <div className={`${Style.commonInner} inner4`}>
                                                <div className={`${Style.img} mx-auto`}>
                                                    <img src="/images/services/home-1-1.png" alt />
                                                </div>
                                                <div className={`${Style.title} mx-auto`}>
                                                    Home &amp; Kitchen
                                                </div>
                                            </div>
                                            <div className={`${Style.commonInner} inner9`}>
                                                <div className={`${Style.img} mx-auto`}>
                                                    <img src="/images/services/sports-1.png" alt />
                                                </div>
                                                <div className={`${Style.title} mx-auto`}>
                                                    Sports
                                                </div>
                                            </div>
                                        </div>
                                        <div className={Style.inner2}>
                                            <div className={`${Style.commonInner} inner5`}>
                                                <div className={`${Style.img} mx-auto`}>
                                                    <img src="/images/services/fashion.png" alt />
                                                </div>
                                                <div className={`${Style.title} mx-auto`}>
                                                    Fashion
                                                </div>
                                            </div>
                                            <div className={`${Style.commonInner} inner6`}>
                                                <div className={`${Style.img} mx-auto`}>
                                                    <img src="/images/services/open-book-1.png" alt />
                                                </div>
                                                <div className={`${Style.title} mx-auto`}>
                                                    Kindle &amp; Books
                                                </div>
                                            </div>
                                            <div className={`${Style.commonInner} inner7`}>
                                                <div className={`${Style.img} mx-auto`}>
                                                    <img src="/images/services/elec.png" alt />
                                                </div>
                                                <div className={`${Style.title} mx-auto`}>
                                                    Electronics
                                                </div>
                                            </div>
                                            <div className={`${Style.commonInner} inner8`}>
                                                <div className={`${Style.img} mx-auto`}>
                                                    <img src="/images/services/software.png" alt />
                                                </div>
                                                <div className={`${Style.title} mx-auto`}>
                                                    Software
                                                </div>
                                            </div>
                                            <div className={`${Style.commonInner} inner10`}>
                                                <div className={`${Style.img} mx-auto`}>
                                                    <img src="/images/services/all-1.png" alt />
                                                </div>
                                                <div className={`${Style.title} mx-auto`}>
                                                    All
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h3 className="fw-medium pt-3">The Advantages of Selecting Tech2Globe&apos;s Customer Support Services</h3>
                                <p className="pb-3">We are aware of how crucial lead generation is to companies of all sizes and in all sectors. We provide a variety of business-to-business lead generation services in order to assist you in attracting and converting potential clients. For your lead generating needs, though, why would you pick Tech2Globe as your marketing lead generation services provider? Here are a few advantages of collaborating with us.</p>


                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-12 col-sm-12 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Economical</h4>
                                        <p className="text-start mb-0">Hiring a full-time customer care staff may be more expensive than outsourcing call center support services to Tech2Globe. You can use resources more wisely and save money by doing this.</p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-12 col-sm-12 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Obtaining access to knowledgeable experts</h4>
                                        <p className="text-start mb-0">Our devoted staff of customer service representatives is quite knowledgeable and talented. We have a plethora of expertise and are prepared to tackle a variety of problems pertaining to customer service.</p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-12 col-sm-12 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Availability Round the Clock</h4>
                                        <p className="text-start mb-0">Our customer support services are available around-the-clock, so clients can get help whenever they need it. Businesses that have clients from multiple time zones or with diverse work schedules can especially benefit from this.</p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-12 col-sm-12 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Proactive Assistance</h4>
                                        <p className="text-start mb-0">With a proactive approach to customer care, our call center support services spot any problems before they arise and provide customized solutions that are ideal for your company. By preventing issues before they arise, this can help the business save time and money.</p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-12 col-sm-12 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Scalability</h4>
                                        <p className="text-start mb-0">Our customer support services are scalable, which means that your business can adjust the number of customer support representatives as per their need. This allows you to adapt to changes in demand and keep the cost under control.</p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-12 col-sm-12 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Data Security</h4>
                                        <p className="text-start mb-0">Our team takes customer data security very seriously and provides robust security measures that keep the customer&apos;s data safe and secure.</p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-12 col-sm-12 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Personalized Touch</h4>
                                        <p className="text-start mb-0">We take the time to understand the unique needs of your business and tailor their support accordingly, ensuring that you receive customized solutions that work best for you.</p>
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

            <ClientSlider testimonials={testimonials} />
            <FaqSection faqs={faqs} />
        </>
    )
}