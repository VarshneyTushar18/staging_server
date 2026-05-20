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
        "inbound call center solutions | Inbound Call Center Services",

    description:
        "At Tech2Globe, inbound call center solutions, we believe in    complete transparency and provide our customers with the information they need to make sound business decisions.",

    keywords: [
        "Inbound Call Center Services",
        "inbound call center solutions",
        "inbound call center outsourcing",
        "inbound call center service provider",
        "outsource inbound call center services",
        "inbound contact center services",
        "Inbound Call Center Price",
        "Inbound Call Center",
    ],

    alternates: {
        canonical: "https://www.tech2globe.com/inbound-call-center",
    },

    openGraph: {
        title:
            " inbound call center solutions | Inbound Call Center services  ",
        description:
            "At Tech2Globe, inbound call center solutions, we believe in    complete transparency and provide our customers with the information they need to make sound business decisions.",
        url: "https://www.tech2globe.com/inbound-call-center",
        siteName: "Tech2Globe Web Solutions LLP",
        type: "website",
    },

    twitter: {
        card: "summary",
        title:
            " inbound call center solutions | Inbound Call Center Services",
        description:
            "At Tech2Globe, inbound call center solutions, we believe in    complete transparency and provide our customers with the information they need to make sound business decisions.",
    },
};

const faqs = [
    {
        id: "One",
        question: "What services does your inbound call center agency offer?",
        answer: `
        Our inbound call center agency offers a wide range of services, including customer service, technical support, order processing, and appointment scheduling. We are also equipped to handle emergency and crisis management calls.
      `,
    },
    {
        id: "Two",
        question: "How do you handle call volume during peak periods?",
        answer: `
        We have a flexible staffing model that allows us to increase the number of agents on the floor during peak periods to ensure that we can handle high call volume. In addition, we have advanced call routing and queue management systems in place to minimize wait times for customers.
      `,
    },
    {
        id: "Three",
        question: "How do you ensure the quality of service provided by your agents?",
        answer: `
        We have a rigorous hiring process in place to select only the best agents for our team. In addition, we provide ongoing training and development opportunities to ensure that our agents are knowledgeable and up-to-date on the latest industry best practices. We also regularly monitor and evaluate agent performance to ensure that we are meeting our clients' expectations.
      `,
    },
    {
        id: "Four",
        question: "How do you ensure the security and confidentiality of customer data?",
        answer: `
        We take the security and confidentiality of customer data very seriously. All of our agents are required to sign confidentiality agreements and are trained on data protection best practices. In addition, we have robust data security systems in place to protect against unauthorized access and hacking attempts.
      `,
    },


];

const pageHeaderData = {
    title: "Inbound Call Center Solutions",
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
        text: "We've been using inbound call center solutions from Tech2Globe for a few years now, and it's been a great investment for our business. Not only has it helped improve customer satisfaction, but it's also allowed us to handle a much higher volume of calls without adding additional staff.",

    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Since implementing inbound call center solutions from Tech2Globe, we've seen a significant increase in customer satisfaction. Calls are answered promptly, and our customers are able to get the help they need quickly and easily. It's been a game-changer for our business.",

    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Choosing Tech2Globe has made a huge difference in the efficiency of our customer service team. With the ability to route calls to the appropriate agent and access to customer information, our team is able to resolve issues faster and provide better service overall.",

    },
];


export default function InboundCallCenter() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What services does your inbound call center agency offer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our inbound call center agency offers a wide range of services, including customer service, technical support, order processing, and appointment scheduling. We are also equipped to handle emergency and crisis management calls."
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
                "name": "How do you ensure the security and confidentiality of customer data?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We take the security and confidentiality of customer data very seriously. All of our agents are required to sign confidentiality agreements and are trained on data protection best practices. In addition, we have robust data security systems in place to protect against unauthorized access and hacking attempts."
                }
            },
            {
                "@type": "Question",
                "name": "How do you ensure the quality of service provided by your agents?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We have a rigorous hiring process in place to select only the best agents for our team. In addition, we provide ongoing training and development opportunities to ensure that our agents are knowledgeable and up-to-date on the latest industry best practices. We also regularly monitor and evaluate agent performance to ensure that we are meeting our clients’ expectations."
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
            <Breadcrumb parentName="Services" pageName="Inbound Call Center" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner imageSrc="/images/services/service-inner/inbound-call-center-service.jpg" />
                            <div className={Style.ContentDiv}></div>



                            <div className={Style.ContentDiv}>

                                <p>Providing top-quality customer service is essential to remain ahead in the highly competitive business world. This is where Tech2Globe's customer <Link href="/call-centre-services" className="fw-normal text-decoration-underline">call center services</Link> come in, as nothing is more important to us than customer satisfaction. This is because a business lifespan can only be extended by ensuring that clients are satisfied with the quality of support services and products. Customers require immediate responses to their concerns at all times; thus, collaborating with established inbound call centers is essential.</p>
                                <p>We utilize the latest technology and a proactive approach to ensure that every interaction with your customers is pleasant. Our outstanding customer service offers the right information so that you can give the same care to your clients. We provide the most flexible, responsive and ready-to-deploy outsourcing solutions.</p>

                            </div>

                            <div className={Style.ContentDiv}>
                                <h2>Professional Inbound Call Center Services</h2>

                                <p className="mb-4">Tech2Globe is a company that provides 360-degree business solutions, and our inbound call center services are based on full transparency. Our clients receive all the information needed to help them make the best business decision. We have years of expertise working with various inbound call center services.</p>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/technical-support-call-center.png" className="img-responsive img-fluid" alt="Technical Support" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Technical Support</h4>
                                        <p className="text-start">Our support services are provided for clients who encounter technical issues in their products or solutions. The support includes detecting and resolving issues related to hardware or software. We further provide instruction on how to use your product and respond to technical issues.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/customer-service-call-center.png" className="img-responsive img-fluid" alt="Customer Service" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Customer Service</h4>
                                        <p className="text-start">We offer assistance to customers experiencing issues or have concerns about either the product or service. It could be as simple as providing answers to concerns regarding capabilities and features, assisting with problems, and offering advice on how to utilize the product or service.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/sales-support-call.jpg" className="img-responsive img-fluid" alt="Sales Support" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Sales Support</h4>
                                        <p className="text-start">We provide assistance to those who are thinking of purchasing items or services. We can answer any questions about the characteristics and costs of the products including demonstrations, and aiding customers with placing orders.
                                        </p>
                                    </div>

                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/order-processing-call-center.jpg" className="img-responsive img-fluid" alt="Order Processing" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Order Processing</h4>
                                        <p className="text-start">Our team of experts oversees the process of processing orders made by customers, by collecting payment details and verifying the availability of the item and also providing the status of orders and updates on exchanges, returns, and exchanges.
                                        </p>
                                    </div>

                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/telephone-answering-call-center.jpg" className="img-responsive img-fluid" alt="Telephone Answering" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Telephone Answering</h4>
                                        <p className="text-start">Our staff handles any messages received from customers. We also direct calls to the appropriate department or agent in accordance with the requirement. This includes providing vital information to customers, responding to messages and routing calls when required.
                                        </p>
                                    </div>

                                </div>
                                <hr />
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/chat-support-call-center.jpg" className="img-responsive img-fluid" alt="Chat Support" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Chat Support</h4>
                                        <p className="text-start">We offer customer support via chat rooms on the internet, which let customers talk live with our agents and also answer questions and provide product recommendations and solutions to issues.
                                        </p>
                                    </div>

                                </div>
                                <hr />
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/email-support-call-center.jpg" className="img-responsive img-fluid" alt="Email Support" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Email Support</h4>
                                        <p className="text-start">Our team is in charge of handling inquiries and questions from customers which are sent via emails. We have a specialization in responding to queries from clients by offering assistance and details, and escalate issues as needed.
                                        </p>
                                    </div>

                                </div>
                                <hr />
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/social-media-management-call-center.jpg" className="img-responsive img-fluid" alt="Social Media Management" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Social Media Management</h4>
                                        <p className="text-start">We are able to respond to requests from customers as well as problems that are reported through platforms for social media. This involves keeping an eye on the social media accounts to find customer-related queries as well as responding to messages and comments, as well managing complaints from clients.
                                        </p>
                                    </div>

                                </div>
                                <hr />
                            </div>

                            <div className={Style.ContentDiv}>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className={Style.ContentDiv}>
                                        <h2 className="mb-3">Our Inbound Call Center Services Approach</h2>
                                        <p>Our Inbound Omnichannel Call Center Solutions have been specifically developed to offer customers a seamless approach to communications, regardless of the channel that the customer uses.</p>
                                        <p>At Tech2Globe, we believe that an omnichannel approach is essential for call center services that are inbound as it enables businesses to provide customers the same experience, no matter which method they choose to communicate with them. For example when a client begins to interact with a business via live chat and then shifts to a phone call then the business can keep the conversation within the same context and offer the same seamless experience.</p>
                                        <p>To make the most of their strategy businesses can utilize a variety of methods and tools offered by our team, for example:</p>

                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                                <div className="payableCard red  h-100">
                                                    <h6><Link href="/ecommerce-marketplace-management">Modern Technology and Automation Tools</Link></h6>
                                                    <p>Our professionals use top tools that businesses use to assist them in managing the huge amount of interactions with their customers. They can also provide fast and efficient customer support. Chatbots and automated email solutions can handle simple customer inquiries, while allowing humans to tackle more complicated problems.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                                <div className="payableCard blue h-100">
                                                    <h6><Link href="/digital-marketing-services">Agents with Training</Link></h6>
                                                    <p>High-end customer service requires skilled and knowledgeable personnel and that's what we offer. Our services help in improving processes by offering extensive training and assistance for their employees.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                                <div className="payableCard yellow h-100">
                                                    <h6><Link href="/amazon-consulting-services">Analytics and Data</Link></h6>
                                                    <p>We analyze our customer interactions and behavior through the information collected through our software, which collects all the information. This is extremely helpful for businesses to understand their customers' likes and preferences and make adjustments according to their requirements.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                                <div className="payableCard skyblue h-100">
                                                    <h6><Link href="/software-development">Continuous Improvement of Processes</Link></h6>
                                                    <p>You can improve business practices and wow your clients by ensuring an excellent and well-executed program. We do the smart work so that you can continuously analyze and enhance your procedures. We make sure that you consistently exceed expectations and provide outstanding customer service.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                                <div className="payableCard green h-100">
                                                    <h6><Link href="">Reliable Quality Assurance Measures</Link></h6>
                                                    <p>To ensure the best service quality, we help companies with things like conducting frequent customer surveys, reviewing employee performance, monitoring key performance indicators (KPIs) etc. These metrics provide useful information on improving the quality of the service and rewarding the best performing employees.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="mt-4 mb-2">We Follow A Precise Inbound Call Center Process Flow</h2>
                                <p>We combine customized floor management and scripts and data analytics to provide businesses with centralized service for call centers. Our agents handle calls with the strategic method of following the procedures.</p>


                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: 'red', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>1</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">

                                        <p className="text-start">If a client needs assistance, they will be greeted by a trained and knowledgeable agent.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#ffc107', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>2</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">

                                        <p className="text-start">Agents are attentive to customer's concerns or requests and are available to get more details.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#03a9f4', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>3</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">

                                        <p className="text-start">Our agent is connected to internal systems in order to verify any relevant information, which includes what is happening with an order as well as technical support sources.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#607d8b', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>4</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">

                                        <p className="text-start">If the issue can be resolved promptly, the agent will provide the assistance needed and end the call.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#9c27b0', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>5</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">

                                        <p className="text-start">If the problem requires further investigation or escalates, the agent gathers all the relevant details and escalates the issue to the appropriate department or team.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#00764e', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>6</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">

                                        <p className="text-start">The agent keeps the client informed about the progression of their complaint. The agent gives regular updates when needed.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#091014', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>7</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">

                                        <p className="text-start">If the issue has to be resolved, the agent will arrange a callback or a follow-up phone call with the client.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#673ab7', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>8</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">

                                        <p className="text-start">Through the entire process it is important to quickly and efficiently respond to any concerns or questions from customers to ensure you offer excellent customer service.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#8bc34a', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>9</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">

                                        <p className="text-start">To ensure the highest level of quality of our services, we've put in place various quality control measures in place like regular surveys of our clients and review of our agents' performance.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#ff0058', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>10</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">

                                        <p className="text-start">We're committed to constantly improving our processes in order to meet the demands of our clients more effectively.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 mb-3">Industries We Cater To</h2>

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
                                                    Home & Kitchen
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



                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                            <div className={Style.StickyTop}>
                                <ServiceSidebar sections={sidebarSections} />
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-5">
                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 text-center">Benefits Of Choosing Us As Your Inbound Call Center Service Provider</h2>
                                <p className="text-center">There are several advantages of choosing our customer service center</p>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                        <div className="carditemcall shadow-sm mb-3 h-100">
                                            <div className="text-left">
                                                <Image src="/images/services/service-inner/team-icon.png" width={100} height={100} alt="Document conversion" />
                                            </div>
                                            <div className="context">
                                                <h5>Automation and Advanced Technology</h5>
                                                <p>Modern technology and automation allow us to provide quick speed of response and an unbeatable experience, even in times of high volume of calls.</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                        <div className="carditemcall shadow-sm mb-3 h-100">
                                            <div className="text-left">
                                                <Image src="/images/services/service-inner/budget.png" width={100} height={100} alt="Document conversion" />
                                            </div>
                                            <div className="context">
                                                <h5>Customizable solutions</h5>
                                                <p>We provide fully customized solutions to meet the individual requirements and objectives of your company. Suppose you're looking to increase customer satisfaction, increase sales or streamline your customer service processes. In that case, We have the experience and resources to help you meet your goals.</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                        <div className="carditemcall shadow-sm mb-3 h-100">
                                            <div className="text-left">
                                                <Image src="/images/services/service-inner/budget-management.png" width={100} height={100} alt="Document conversion" />
                                            </div>
                                            <div className="context">
                                                <h5>Affordable Pricing</h5>
                                                <p>Our affordable price and flexible engagement model make it easy to reduce costs while still providing excellent service for your customers.</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                        <div className="carditemcall shadow-sm mb-3 h-100">
                                            <div className="text-left">
                                                <Image src="/images/services/service-inner/budget-management.png" width={100} height={100} alt="Document conversion" />
                                            </div>
                                            <div className="context">
                                                <h5>Scalability</h5>
                                                <p>As the most reputable inbound call center service provider, we can adjust to changes in your business requirements, such as shifts in the volume of calls and types of queries and issues that are handled, as well as the channels that are being utilized.</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                        <div className="carditemcall shadow-sm mb-3 h-100">
                                            <div className="text-left">
                                                <Image src="/images/services/service-inner/team-icon.png" width={100} height={100} alt="Document conversion" />
                                            </div>
                                            <div className="context">
                                                <h5>Multiple channels
                                                </h5>
                                                <p>Our team supports multiple channels of communication, including phone, email, live chat, and social media. This will allow your customers to choose the channel that is most convenient for them, and will help you to provide a consistent experience across all channels.</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                        <div className="carditemcall shadow-sm mb-3 h-100">
                                            <div className="text-left">
                                                <Image src="/images/services/service-inner/budget.png" width={100} height={100} alt="Document conversion" />
                                            </div>
                                            <div className="context">
                                                <h5>Quality assurance</h5>
                                                <p>To ensure the quality of our service, we offer robust quality assurance measures in place, such as regular customer surveys and agent performance reviews.</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                        <div className="carditemcall shadow-sm mb-3 h-100">
                                            <div className="text-left">
                                                <Image src="/images/services/service-inner/budget-management.png" width={100} height={100} alt="Document conversion" />
                                            </div>
                                            <div className="context">
                                                <h5>Continuous improvement</h5>
                                                <p>As the leading inbound call center service provider, we are committed to continuously improving our processes and service offerings to better meet the needs of our clients.</p>
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