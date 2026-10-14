import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";
import Link from "next/link";
import {
    FaHeadset,
    FaUserTie,
    FaComments,
    FaSearch,
    FaClipboardList,
    FaChartLine,
    FaUsers,
    FaStore,
    FaBullhorn,
    FaCogs,
    FaTasks,
    FaUserCheck,
    FaSyncAlt,
    FaExpandArrowsAlt,
    FaClock,
    FaLightbulb,
    FaHandshake,
    FaLayerGroup,
    FaTrophy,
    FaBuilding,
    FaDollarSign,
    FaRocket,
} from "react-icons/fa";

export const metadata = {
    title: "Virtual Assistant Services | Flexible Business Support",
    description:
        "Get reliable virtual assistant services for administrative, ecommerce, customer support, research and business tasks. Scale your team with Tech2Globe.",
    keywords: [
        "virtual assistant services",
        "virtual assistant outsourcing",
        "administrative virtual assistant",
        "ecommerce virtual assistant",
        "hire a virtual assistant",
        "executive virtual assistant",
    ],
    openGraph: {
        title: "Virtual Assistant Services | Flexible Business Support",
        siteName: "Tech2Globe Web Solutions LLP",
        description:
            "Get reliable virtual assistant services for administrative, ecommerce, customer support, research and business tasks. Scale your team with Tech2Globe.",
        url: "https://stagenew.tech2globe.tech/virtual-assistant-services",
    },
    twitter: {
        card: "summary_large_image",
        title: "Virtual Assistant Services | Flexible Business Support",
        description:
            "Get reliable virtual assistant services for administrative, ecommerce, customer support, research and business tasks. Scale your team with Tech2Globe.",
    },
    alternates: {
        canonical: "https://stagenew.tech2globe.tech/virtual-assistant-services",
    },
};

const pageHeaderData = {
    title: "Virtual Assistant Services for Growing Businesses",
    description:
        "Get reliable virtual assistant services for administrative, ecommerce, customer support, research and business tasks. Scale your team with Tech2Globe.",
    buttonText: "Get a Free Consultation",
    buttonLink: "/contact-us",
    backgroundImage: "/images/services/blue-linear-bg.png",
};

const resources = [
    { id: 1, name: "Case Studies", path: "/case-studies" },
    { id: 2, name: "Clients", path: "/clients" },
    { id: 3, name: "Testimonial", path: "/testimonial" },
];

const usefulLinks = [
    { id: 1, name: "Inbound Call Center", path: "/inbound-call-center" },
    { id: 2, name: "Outbound Call Center", path: "/outbound-call-center-solutions" },
    { id: 3, name: "Telemarketing Services", path: "/telemarketing-services" },
    { id: 4, name: "Lead Generation Services", path: "/lead-generation-services" },
    { id: 5, name: "Customer Support Services", path: "/customer-support-services" },
    { id: 6, name: "Call Center Monitoring", path: "/call-center-monitoring" },
    { id: 7, name: "Call Center Consulting Services", path: "/call-center-consulting" },
    { id: 8, name: "Super Agent Services", path: "/super-agent-services" },
];

const sidebarSections = [
    { heading: "Resources", links: resources },
    { heading: "Useful Links", links: usefulLinks },
];

const faqs = [
    {
        id: "One",
        question: "What is a virtual assistant?",
        answer: "A virtual assistant is a remote professional who provides administrative, operational, customer service, research, ecommerce, or other business support without working from the company's physical office.",
    },
    {
        id: "Two",
        question: "What services does a virtual assistant offer?",
        answer: "A virtual assistant can provide administrative support, email and calendar management, customer service, data entry, ecommerce assistance, research, lead generation, social media support, and other recurring business tasks.",
    },
    {
        id: "Three",
        question: "Why should I hire a virtual assistant?",
        answer: "Hiring a virtual assistant can help reduce repetitive work, provide flexible operational support, and allow your internal team to focus on more important business activities.",
    },
    {
        id: "Four",
        question: "How much do virtual assistant services cost?",
        answer: "Pricing depends on the type of work, required experience, workload, working hours, and level of support. A customized quote can provide a more accurate estimate based on your requirements.",
    },
    {
        id: "Five",
        question: "Can a virtual assistant work with my existing tools?",
        answer: "Yes. Virtual assistant workflows can be organized around the tools, platforms, communication channels, and processes used by your business, subject to the specific requirements of the project.",
    },
    {
        id: "Six",
        question: "Can I hire a virtual assistant for specific tasks?",
        answer: "Yes. You can outsource specific recurring tasks such as email management, data entry, research, customer support, ecommerce administration, scheduling, or lead research.",
    },
    {
        id: "Seven",
        question: "Can virtual assistants support ecommerce businesses?",
        answer: "Yes. Ecommerce virtual assistants can assist with product information, catalog administration, customer communication, research, marketplace tasks, and other operational activities.",
    },
    {
        id: "Eight",
        question: "How do I get started with Tech2Globe virtual assistant services?",
        answer: "Share your required tasks, workload, working hours, tools, and expected outcomes with our team. We can review your requirements and recommend an appropriate virtual assistant support model.",
    },
];

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "I was drowning in administrative tasks and needed reliable support without the cost of a full-time hire. Tech2Globe assigned me a virtual assistant who has been absolutely brilliant. She manages my calendar, handles email correspondence, prepares reports, and even coordinates with my clients. The quality of work is consistently high and she's always proactive. I now have 15+ hours per week freed up for strategic work.",
        name: "Natasha Patel | StratEdge Consulting Ltd.",
        location: "United Kingdom",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Our startup couldn't afford a large admin team but we desperately needed support. Tech2Globe's virtual assistant service was the perfect solution. The VA they assigned us is organized, communicates professionally in English and German, and takes initiative without needing constant direction. From travel booking and vendor coordination to preparing presentations, she handles everything flawlessly.",
        name: "Thomas Mueller | MuellerTech GmbH",
        location: "Germany",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "We engaged Tech2Globe for virtual assistant services to support our expanding operations. The VA assigned to us handled research, data compilation, supplier follow-ups, and document management with impressive efficiency. Communication was always clear and timely. The cost savings compared to hiring locally were substantial, and the quality exceeded our expectations. We have since expanded to two VAs.",
        name: "Ling Wei | SinoTrade International Ltd.",
        location: "China",
    },
    {
        id: 4,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "I run an e-commerce business with limited staff and I was spending too much time on repetitive tasks. Tech2Globe's virtual assistant took over product research, supplier communication, social media scheduling, and customer query routing. Within a month, I could see the impact clearly — more organized operations, faster turnaround, and more time for me to focus on sales strategy. Exceptional value.",
        name: "Isabella Martins | BrasilCommerce Ltda.",
        location: "Brazil",
    },
    {
        id: 5,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Outsourcing virtual assistant services to Tech2Globe was a smart move for our growing agency. Our VA manages client onboarding documentation, social media content scheduling, and project coordination across multiple accounts. She is detail-oriented, meets every deadline, and consistently delivers professional-quality work. Our agency's productivity has increased by over 30% since we started.",
        name: "David Kimani | Savannah Digital Agency",
        location: "Kenya",
    },
];

const portfolioClients = [
    {
        initials: "UK",
        gradient: "#0b2e58",
        client: "UK Technology Firm",
        country: "UK",
        project: "Executive Virtual Assistant Program",
        desc: "Provided virtual assistant support for UK tech firm executives managing scheduling, meetings, research, travel, and administrative coordination across time zones.",
        category: "Executive & Administrative Support",
        result: "3 executives supported 24/7 • 98% task completion",
    },
    {
        initials: "CA",
        gradient: "#0b2e58",
        client: "Canadian Customer Success Team",
        country: "Canada",
        project: "Customer Success Virtual Assistance",
        desc: "Supported Canadian customer success team managing enterprise accounts with scheduling, follow-ups, documentation, and basic troubleshooting tasks.",
        category: "Customer Support Administration",
        result: "50+ accounts managed • 94% client satisfaction",
    },
    {
        initials: "AU",
        gradient: "#0b2e58",
        client: "Australian E-commerce Business",
        country: "Australia",
        project: "E-commerce Back-Office Administration",
        desc: "Provided virtual administrative support for Australian e-commerce business handling refunds, inventory updates, reporting, and supplier coordination tasks.",
        category: "E-commerce Operations Support",
        result: "3,000+ monthly tasks • 99.7% accuracy",
    },
    {
        initials: "DE",
        gradient: "#0b2e58",
        client: "German Software Company",
        country: "Germany",
        project: "Sales Support Virtual Assistance Program",
        desc: "Deployed virtual assistants supporting German software sales team managing CRM, proposals, demos, prospect research, and pipeline operations.",
        category: "Sales Operations Support",
        result: "15 sales reps supported • 12% win rate increase",
    },
    {
        initials: "SG",
        gradient: "#0b2e58",
        client: "Startup Portfolio",
        country: "Singapore",
        project: "Startup Operations Virtual Assistant Network",
        desc: "Provided virtual assistant network for Singapore startup portfolio handling HR coordination, vendor management, research, and administrative support.",
        category: "Startup Operations Support",
        result: "8 startups supported • 50% capacity increase",
    },
];

const serviceAccordionItems = [
    {
        id: "One",
        title: "Administrative Virtual Assistant",
        paragraphs: [
            "Administrative virtual assistants can help with routine business tasks such as document organization, data entry, online research, file management, scheduling, and other administrative responsibilities.",
            "This support can help reduce the amount of repetitive work handled by your internal team.",
        ],
    },
    {
        id: "Two",
        title: "Executive Assistance",
        paragraphs: [
            "Executives and business owners often manage multiple priorities at the same time. A virtual assistant can provide support with calendars, meetings, travel research, documents, correspondence, and other organizational tasks.",
            "The goal is to help business leaders spend more time on strategic activities.",
        ],
    },
    {
        id: "Three",
        title: "Email and Calendar Management",
        paragraphs: [
            "Managing emails and appointments can become time consuming as a business grows.",
            "Our virtual assistants can help organize inboxes, manage calendars, schedule appointments, coordinate meetings, and maintain follow up schedules according to your instructions.",
        ],
    },
    {
        id: "Four",
        title: "Customer Support",
        paragraphs: [
            "A virtual assistant can help manage routine customer support activities through email, chat, or other approved communication channels.",
            "Tasks may include responding to common questions, organizing customer requests, updating records, and escalating issues that require specialized attention.",
        ],
    },
    {
        id: "Five",
        title: "Data Entry and Data Management",
        paragraphs: [
            "Our virtual assistants can support businesses with data entry, database updates, spreadsheet management, document processing, and other recurring data related tasks.",
            "This can be particularly useful for businesses that regularly handle large amounts of information.",
        ],
    },
    {
        id: "Six",
        title: "Ecommerce Support",
        paragraphs: [
            "Ecommerce businesses often need ongoing assistance with product information, order related tasks, customer communication, inventory updates, research, and marketplace operations.",
            "Our ecommerce virtual assistants can support these activities according to your processes and platform requirements.",
        ],
    },
    {
        id: "Seven",
        title: "Research and Lead Generation",
        paragraphs: [
            "Virtual assistants can support online research, prospect research, contact list preparation, lead research, competitor research, and other information gathering tasks.",
            "This can help sales and marketing teams spend more time on outreach and relationship building.",
        ],
    },
    {
        id: "Eight",
        title: "Social Media Support",
        paragraphs: [
            "Virtual assistants can assist with routine social media activities such as content scheduling, research, basic engagement, post organization, and administrative support.",
            "Strategic content creation and campaign management can be handled separately depending on your requirements.",
        ],
    },
];

export default function VirtualAssistantServices() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Virtual Assistant Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Virtual Assistant Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
                            <div className={Style.ContentDiv}>
                                <h1 className={`${Style.headingText} pb-3`}>
                                    Virtual Assistant Services for Growing Businesses
                                </h1>
                                <p className="para-text">
                                    Managing everyday business tasks can take valuable time away from your core operations. From managing emails and calendars to handling customer support, research, data entry, and ecommerce activities, repetitive administrative work can quickly become difficult to manage internally.
                                </p>
                                <p className="para-text">
                                    Tech2Globe provides professional <strong>virtual assistant services</strong> to help businesses delegate routine and specialized tasks to experienced remote support teams. Our virtual assistants can work as an extension of your team and provide flexible support based on your business requirements.
                                </p>
                                <p className="para-text">
                                    Whether you need ongoing administrative assistance, ecommerce support, customer service, lead generation, or help with daily business operations, our virtual assistant outsourcing services can be tailored to your workflow, workload, and goals.
                                </p>
                                <p className="para-text">
                                    <Link href="/contact-us" className={Style.CtaButton}>
                                        <FaComments aria-hidden="true" />
                                        &nbsp; Get a Free Consultation
                                    </Link>
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaHeadset />
                                    </span>
                                    Reliable Virtual Assistant Services for Businesses
                                </h2>
                                <p className="para-text">
                                    A virtual assistant can help businesses manage important tasks without requiring every responsibility to be handled by an internal employee.
                                </p>
                                <p className="para-text">
                                    Tech2Globe provides virtual assistant support for businesses that need reliable help with administrative, operational, customer facing, research, ecommerce, and other recurring tasks.
                                </p>
                                <p className="para-text">
                                    Our virtual assistants can work according to your processes, instructions, tools, and schedules. This allows you to delegate repetitive responsibilities while keeping your internal team focused on activities that require greater attention.
                                </p>
                                <p className="para-text">Our support can include:</p>
                                <ul>
                                    <li>Administrative assistance</li>
                                    <li>Email management</li>
                                    <li>Calendar management</li>
                                    <li>Appointment scheduling</li>
                                    <li>Data entry</li>
                                    <li>Customer support</li>
                                    <li>Ecommerce support</li>
                                    <li>Online research</li>
                                    <li>Lead generation</li>
                                    <li>Social media support</li>
                                    <li>Document management</li>
                                    <li>Executive assistance</li>
                                </ul>
                                <p className="para-text">
                                    The exact responsibilities can be adjusted according to your business needs.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaLayerGroup />
                                    </span>
                                    Our Virtual Assistant Services
                                </h2>
                                <p className="para-text">
                                    Tech2Globe offers virtual assistant services across different business functions. You can outsource a specific task, a group of recurring responsibilities, or ongoing virtual assistant support.
                                </p>

                                <div className={`${Style.PageAccordion} accordion`} id="accordionVaServices">
                                    {serviceAccordionItems.map((item, index) => {
                                        const collapseId = `collapse${item.id}`;
                                        const headingId = `heading${item.id}`;
                                        const isFirst = index === 0;
                                        return (
                                            <div className={`${Style.AccordionItem} accordion-item`} key={item.id}>
                                                <h2 className="accordion-header" id={headingId}>
                                                    <button
                                                        className={`${Style.AccordionButton} accordion-button${isFirst ? "" : " collapsed"}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#${collapseId}`}
                                                        aria-expanded={isFirst ? "true" : "false"}
                                                        aria-controls={collapseId}
                                                    >
                                                        {item.title}
                                                    </button>
                                                </h2>
                                                <div
                                                    id={collapseId}
                                                    className={`accordion-collapse collapse${isFirst ? " show" : ""}`}
                                                    aria-labelledby={headingId}
                                                    data-bs-parent="#accordionVaServices"
                                                >
                                                    <div className={`${Style.AccordionBody} accordion-body`}>
                                                        {item.paragraphs.map((paragraph, pIndex) => (
                                                            <p
                                                                key={pIndex}
                                                                className={`para-text${pIndex === item.paragraphs.length - 1 ? " mb-0" : ""}`}
                                                            >
                                                                {paragraph}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaBuilding />
                                    </span>
                                    Virtual Assistant Services by Business Function
                                </h2>
                                <p className="para-text">
                                    Businesses can use virtual assistant support for different operational requirements.
                                </p>
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}><FaClipboardList /></div>
                                            <h5 className="fw-bold mb-2">Business Administration</h5>
                                            <p className="text-muted medium mb-0">Support with scheduling, documents, email management, data entry, research, and daily administrative activities.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}><FaChartLine /></div>
                                            <h5 className="fw-bold mb-2">Sales Support</h5>
                                            <p className="text-muted medium mb-0">Assistance with lead research, prospect information, database updates, appointment coordination, and sales administration.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}><FaComments /></div>
                                            <h5 className="fw-bold mb-2">Customer Service</h5>
                                            <p className="text-muted medium mb-0">Support with customer inquiries, information requests, ticket organization, follow ups, and routine communication.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}><FaStore /></div>
                                            <h5 className="fw-bold mb-2">Ecommerce Operations</h5>
                                            <p className="text-muted medium mb-0">Support with product information, order related administration, marketplace tasks, customer communication, and catalog updates.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}><FaBullhorn /></div>
                                            <h5 className="fw-bold mb-2">Marketing Support</h5>
                                            <p className="text-muted medium mb-0">Assistance with research, social media administration, content organization, competitor research, and other marketing support activities.</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="para-text">
                                    This flexible approach allows businesses to use virtual assistants where they can provide the greatest operational value.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaCogs />
                                    </span>
                                    How Our Virtual Assistant Services Work
                                </h2>
                                <p className="para-text">
                                    We use a structured process to understand your requirements and align the right virtual assistant support with your workflow.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <div className={Style.CardIcon} aria-hidden="true"><FaSearch /></div>
                                            <div className={Style.WaCardBody}>
                                                <h5>Understand Your Requirements</h5>
                                                <p>We begin by understanding the tasks you want to delegate, required skills, expected workload, working hours, tools, and communication requirements.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <div className={Style.CardIcon} aria-hidden="true"><FaTasks /></div>
                                            <div className={Style.WaCardBody}>
                                                <h5>Define the Scope of Work</h5>
                                                <p>We establish the responsibilities, processes, deliverables, timelines, and communication expectations for the engagement.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <div className={Style.CardIcon} aria-hidden="true"><FaUserCheck /></div>
                                            <div className={Style.WaCardBody}>
                                                <h5>Assign the Right Support</h5>
                                                <p>Based on your requirements, we identify the appropriate virtual assistant capabilities and workflow for your business.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <div className={Style.CardIcon} aria-hidden="true"><FaSyncAlt /></div>
                                            <div className={Style.WaCardBody}>
                                                <h5>Set Up the Workflow</h5>
                                                <p>The virtual assistant becomes familiar with your instructions, tools, processes, and preferred methods of communication.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <div className={Style.CardIcon} aria-hidden="true"><FaClipboardList /></div>
                                            <div className={Style.WaCardBody}>
                                                <h5>Manage and Review Tasks</h5>
                                                <p>Tasks are completed according to the agreed workflow, with communication and review processes established according to the project.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <div className={Style.CardIcon} aria-hidden="true"><FaExpandArrowsAlt /></div>
                                            <div className={Style.WaCardBody}>
                                                <h5>Scale Support When Required</h5>
                                                <p>As your workload changes, the virtual assistant support model can be adjusted to accommodate additional responsibilities or increased task volume.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaLightbulb />
                                    </span>
                                    Why Outsource Virtual Assistant Services?
                                </h2>
                                <p className="para-text">
                                    Hiring a virtual assistant can provide businesses with additional operational support without requiring every recurring task to be managed internally.
                                </p>
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}><FaClock /></div>
                                            <h5 className="fw-bold mb-2">Reduce Administrative Work</h5>
                                            <p className="text-muted medium mb-0">Delegate repetitive responsibilities and give your internal employees more time for core business activities.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}><FaChartLine /></div>
                                            <h5 className="fw-bold mb-2">Improve Operational Efficiency</h5>
                                            <p className="text-muted medium mb-0">Structured virtual assistant support can help businesses keep recurring tasks organized and moving consistently.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}><FaUserTie /></div>
                                            <h5 className="fw-bold mb-2">Access Flexible Support</h5>
                                            <p className="text-muted medium mb-0">Businesses can use virtual assistant support for specific tasks, recurring responsibilities, or broader operational assistance.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}><FaExpandArrowsAlt /></div>
                                            <h5 className="fw-bold mb-2">Scale With Business Needs</h5>
                                            <p className="text-muted medium mb-0">Your support requirements may change as your business grows. A flexible outsourcing model allows virtual assistant responsibilities to evolve with those requirements.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}><FaRocket /></div>
                                            <h5 className="fw-bold mb-2">Focus on Core Business Activities</h5>
                                            <p className="text-muted medium mb-0">Delegating routine work can allow business owners and internal teams to spend more time on sales, strategy, customers, and growth.</p>
                                        </div>
                                    </div>
                                </div>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaHandshake />
                                    </span>
                                    Why Choose Tech2Globe as Your Virtual Assistant Partner?
                                </h2>
                                <p className="para-text">
                                    Tech2Globe combines remote support capabilities with structured workflows designed around individual business requirements.
                                </p>
                                <h3 className={`${Style.headingText} pt-2 pb-2`}>Experienced Support Teams</h3>
                                <p className="para-text">
                                    Our teams can support businesses with administrative, ecommerce, data, research, customer service, and other recurring responsibilities.
                                </p>
                                <h3 className={`${Style.headingText} pt-2 pb-2`}>Flexible Engagement</h3>
                                <p className="para-text">
                                    Virtual assistant support can be structured around your workload, task requirements, and preferred workflow.
                                </p>
                                <h3 className={`${Style.headingText} pt-2 pb-2`}>Multiple Business Functions</h3>
                                <p className="para-text">
                                    Instead of limiting support to administrative work, our virtual assistants can assist across sales, ecommerce, customer support, research, data management, and marketing operations.
                                </p>
                                <h3 className={`${Style.headingText} pt-2 pb-2`}>Process Driven Workflows</h3>
                                <p className="para-text">
                                    Clear instructions, defined responsibilities, communication processes, and quality reviews help keep recurring tasks organized.
                                </p>
                                <h3 className={`${Style.headingText} pt-2 pb-2`}>Scalable Support</h3>
                                <p className="para-text">
                                    As your workload changes, responsibilities and support requirements can be adjusted according to your business needs.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaDollarSign />
                                    </span>
                                    How Much Do Virtual Assistant Services Cost?
                                </h2>
                                <p className="para-text">
                                    The cost of virtual assistant services depends on several factors, including the type of tasks, required experience, workload, working hours, tools, and level of support required.
                                </p>
                                <p className="para-text">
                                    A virtual assistant handling routine administrative work may have different requirements from a specialist supporting ecommerce operations, customer service, lead generation, or executive functions.
                                </p>
                                <p className="para-text">
                                    Instead of using a one size fits all pricing model, Tech2Globe can assess your requirements and recommend a suitable support structure.
                                </p>
                                <p className="para-text">
                                    <Link href="/contact-us" className={Style.CtaButton}>
                                        <FaClipboardList aria-hidden="true" />
                                        &nbsp; Request a Virtual Assistant Quote
                                    </Link>
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaUsers />
                                    </span>
                                    Who Can Benefit From Virtual Assistant Services?
                                </h2>
                                <p className="para-text">
                                    Virtual assistant support can be useful for businesses that have recurring administrative or operational tasks but want to allocate their internal resources toward higher value activities.
                                </p>
                                <p className="para-text">Our services can support:</p>
                                <ul>
                                    <li>Startups</li>
                                    <li>Small and growing businesses</li>
                                    <li>Ecommerce companies</li>
                                    <li>Online retailers</li>
                                    <li>Agencies</li>
                                    <li>Professional service businesses</li>
                                    <li>Real estate companies</li>
                                    <li>Sales teams</li>
                                    <li>Marketing teams</li>
                                    <li>Enterprises</li>
                                </ul>
                                <p className="para-text">
                                    Whether you need help with one specific responsibility or ongoing operational support, the service can be structured around your requirements.
                                </p>

                                <h2 className={`${Style.headingText} pt-4 pb-3`}>
                                    <span className={Style.HeadingIcon} aria-hidden="true">
                                        <FaTrophy />
                                    </span>
                                    Get Reliable Virtual Assistant Support for Your Business
                                </h2>
                                <p className="para-text">
                                    Spend less time managing repetitive tasks and more time focusing on your customers, team, and business growth.
                                </p>
                                <p className="para-text">
                                    Tech2Globe provides flexible virtual assistant services designed around your business processes and operational requirements.
                                </p>
                                <p className="para-text">
                                    <Link href="/contact-us" className={Style.CtaButton}>
                                        <FaHeadset aria-hidden="true" />
                                        &nbsp; Talk to Our Virtual Assistant Experts
                                    </Link>
                                </p>
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
    );
}
