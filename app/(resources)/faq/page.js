import Style from "./style.module.css";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";

export const metadata = {
    title: "Digital Marketing FAQ: Your Ultimate Guide to Success - Tech2Globe",
    description:
        "Discover the ultimate guide to digital marketing success with Tech2Globe’s comprehensive FAQ. Get answers to your burning questions now!",
    keywords:
        "Software Development Company India, enterprise portal development, content management system, data management services, data processing services, catalog management services, complete marketplace management service, data entry services, data mining services, data conversion services, Indexing Services, data analytics services, photo editing services, Post Processing of Real Estate Images and photos, photo manipulation services, Image Clipping Services, Photo Enhancement Services, ecommerce solutions, oscommerce ecommerce, SEO Services and Packages. Nopcommerce and magento website development.",
    openGraph: {
        title: "Digital Marketing FAQ: Your Ultimate Guide to Success - Tech2Globe",
        description:
            "Discover the ultimate guide to digital marketing success with Tech2Globe’s comprehensive FAQ. Get answers to your burning questions now!",
        url: "https://www.tech2globe.com/faq",
        siteName: "Tech2Globe Web Solutions LLP",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Digital Marketing FAQ: Your Ultimate Guide to Success - Tech2Globe",
        description:
            "Discover the ultimate guide to digital marketing success with Tech2Globe’s comprehensive FAQ. Get answers to your burning questions now!",
        images: ["https://tech2globe.com/images/tech2globe.jpg"],
    },
    alternates: {
        canonical: "https://www.tech2globe.com/faq",
    },
};

const pageHeaderData = {
    title: "FAQ",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};

const mainfaqs = [
    {
        id: 1,
        question: "Q. What is Tech2Globe?",
        answer: "A. Tech2Globe is an IT Outsourcing Partner established in 2014 for providing complete IT solutions under an affordable price."
    },
    {
        id: 2,
        question: "Q. What type of services Tech2Globe provides?",
        answer: "A. Tech2Globe offers complete IT solutions services like- E-commerce/Open Source, Data Management Services, Software Development, Knowledge Process Outsourcing Services, Mobile Apps, Photo Editing Services, Oracle Products and Solutions, Digital Marketing and more."
    },
    {
        id: 3,
        question: "Q. What Payment methods do you accept?",
        answer: "A. We accept payments through PayPal, Wire Transfer and Credit Card. Our business representative project manager will give you detailed information on each of these methods."
    },
    {
        id: 4,
        question: "Q. How do I track the progress of my project?",
        answer: "A. At the end of each working day, the Project Manager supervising your project or programmer working on your project will send you a detailed report updating you on the progress of your project. We maintain easy accessibility and an open line of communication through VOIP, Email, or any other preferred mode of communication by you. Our quality control team keeps a check and closely monitors the work flow to enable you to get superior results all throughout."
    },
    {
        id: 5,
        question: "Q. Do you sign a confidentiality agreement/Non-disclosure agreement?",
        answer: "A. Yes, we do. We maintain utmost confidentiality with the proprietary information or business plans, ideas or strategies that you share with us during the course of your work."
    },
    {
        id: 6,
        question: "Q. What steps are involved in the creation of custom software for my business?",
        answer: "A. If new software, we’ll work with you through our per-project consulting process to size up your project and then move forward with a Research, Design and Planning engagement. After RDP, we’ll begin development of your software, you’ll be involved every step of the way."
    },
    {
        id: 7,
        question: "Q. Are you taking on new projects right now? What’s the timeline to get started?",
        answer: "A. Yes, we are always evaluating new projects. The pre-projects consulting process takes 2 weeks. Our research design and planning phase 4-6 weeks. Developing begins after that."
    },
    {
        id: 8,
        question: "Q. What are your hourly rates?",
        answer: "A. Our rates vary over time but we try to keep our blended rate between $7/hr- $25/hr (Also it will depend on the Requirement of the project)."
    },
    {
        id: 9,
        question: "Q. Why are your rates so much higher than other firms?",
        answer: "A. Experience, Speed of delivery, Track record, Demand, Talent, The overall software market."
    },
    {
        id: 10,
        question: "Q. Is your Infrastructure secure?",
        answer: "A. While no one is ever entirely secure, we take pride in the fact that none of our clients have ever been taken down by an attack and that our network has never been breached."
    }
];


export default function Faq() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is Tech2Globe?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "Tech2Globe is a IT Outsourcing Partner established in 2014 for providing complete IT solutions under an affordable price."
                }
            },
            {
                "@type": "Question",
                "name": "What type of services Tech2Globe provides?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "Tech2Globe offers complete IT solutions services like- E-commerce/Open Source, Data Management Services, Software Development, Knowledge Process Outsourcing Services, Mobile Apps, Photo Editing Services, Oracle Products and Solutions, Digital Marketing and more."
                }
            },
            {
                "@type": "Question",
                "name": "What Payment methods do you accept?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "We accept payments through PayPal, Wire Transfer and Credit Card. Our business representative / project manager will give you detailed information on each of these methods."
                }
            },
            {
                "@type": "Question",
                "name": "How do I track the progress of my project?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "At the end of each working day, the Project Manager supervising your project or programmer working on your project will send you a detailed report updating you on the progress of your project. We maintain easy accessibility and an open line of communication through VOIP, Email, or any other preferred mode of communication by you. Our quality control team keeps a check and closely monitors the work flow to enable you to get superior results all throughout."
                }
            },
            {
                "@type": "Question",
                "name": "Do you sign a confidentiality agreement/Non-disclosure agreement?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "Yes, we do. We maintain utmost confidentiality with the proprietary information or business plans, ideas or strategies that you share with us during the course of your work."
                }
            },
            {
                "@type": "Question",
                "name": "What steps are involved in the creation of custom software for my business?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "If new software, we’ll work with you through our per-project consulting process to size up your project and then move forward with a Research, Design and Planning engagement. After RDP, we’ll begin development of your software, you’ll be involved every step of the way."
                }
            },
            {
                "@type": "Question",
                "name": "Are you taking on new projects right now? What’s the timeline to get started?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "Yes, we are always evaluating new projects. The pre projects consulting process takes 2 weeks. Our research design and planning phase 4-6 weeks. Developing begins after that."
                }
            },
            {
                "@type": "Question",
                "name": "What are your hourly rates?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "Our rates vary over time but we try to keep our blended rate between $7/hr- $25/hr (Also it will depend on the Requirement of the project)"
                }
            },
            {
                "@type": "Question",
                "name": "Why are your rates so much higher than other firms?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "Experience. Speed of delivery. Track record. Demand. Talent. The overall software market."
                }
            },
            {
                "@type": "Question",
                "name": "Is your Infrastructure secure?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "While no one is ever entirely secure, we take pride in the fact that none of our clients have ever been taken down by an attack and that our network has never been breached."
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
            <Breadcrumb
                parentName="Resources"
                pageName="Faq"
            />
            <section className="FaqSection pt-4 pb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="inner-page-heading-2">
                                <h2 className="pb-3 text-danger">
                                    Frequently Asked Questions
                                </h2>
                            </div>
                        </div>

                        <div className="col-md-12 inner-pages-faqs-a">
                            <div id="faq" className="row" role="tablist" aria-multiselectable="true">
                                {mainfaqs.map((faq) => (
                                    <div key={faq.id} className="col-lg-12">
                                        <div className={Style.Panel}>

                                            <div
                                                className={Style.PanelHeading}
                                                role="tab"
                                                id={`question${faq.id}`}
                                            >
                                                <h3 className={Style.PanelTitle}>
                                                    <a
                                                        className="collapsed fw-medium d-flex justify-content-between align-items-center"
                                                        data-bs-toggle="collapse"
                                                        data-bs-parent="#faq"
                                                        href={`#answer${faq.id}`}
                                                        aria-expanded="false"
                                                        aria-controls={`answer${faq.id}`}
                                                    >
                                                        {faq.question}

                                                        <div className={Style.FaqIcon}>
                                                            <span className={Style.Plus}>+</span>
                                                            <span className={Style.Minus}>−</span>
                                                        </div>
                                                    </a>
                                                </h3>
                                            </div>

                                            <div
                                                id={`answer${faq.id}`}
                                                className="panel-collapse collapse"
                                                role="tabpanel"
                                                aria-labelledby={`question${faq.id}`}
                                            >
                                                <div className={Style.PanelBody}>
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: faq.answer,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}