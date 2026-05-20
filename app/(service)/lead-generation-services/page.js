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
        "Best Lead Generation Services Agency & Specialists | Tech2globe",

    description:
        "Tech2globe is one among the best companies offers lead generation services and boost your sales result by converting customer interest into enquiry. We offers quality leads generation services with the help of specialists for businesses of all sizes.",

    keywords: "",

    alternates: {
        canonical: "https://www.tech2globe.com/lead-generation-services",
    },

    openGraph: {
        title:
            "Best Lead Generation Services Agency & Specialists | Tech2globe",
        description:
            "Tech2globe is one among the best companies offers lead generation services and boost your sales result by converting customer interest into enquiry. We offers quality leads generation services with the help of specialists for businesses of all sizes.",
        url: "https://www.tech2globe.com/lead-generation-services",
        siteName: "Tech2Globe",
        type: "website",
    },

    twitter: {
        card: "summary",
        title:
            "Best Lead Generation Services Agency & Specialists | Tech2globe",
        description:
            "Tech2globe is one among the best companies offers lead generation services and boost your sales result by converting customer interest into enquiry. We offers quality leads generation services with the help of specialists for businesses of all sizes.",
    },
};

const faqs = [
    {
        id: "One",
        question: "What services does your lead generation agency offer?",
        answer: `
        Our lead generation agency offers a variety of services, including outbound telemarketing, email marketing, social media marketing, and search engine optimization (SEO) to help businesses generate high-quality leads. We also provide detailed reports on the leads generated, including information on the contact's name, phone number, email, and company name.
      `,
    },
    {
        id: "Two",
        question: "How do you measure the success of a lead generation campaign?",
        answer: `
        We use a variety of metrics to measure the success of a lead generation campaign, including the number of leads generated, the conversion rate of those leads into paying customers, and the overall return on investment (ROI) for the campaign. We provide our clients with detailed reports on these metrics so they can see the results of their campaign in real-time.
      `,
    },
    {
        id: "Three",
        question: "How do you determine the target audience for a client's lead generation campaign?",
        answer: `
        We work closely with our clients to understand their target audience and identify key demographics such as age, location, job title, and industry. We use this information to create targeted lists of potential leads and develop messaging that is tailored to the specific audience.
      `,
    },
    {
        id: "Four",
        question: "How do you ensure the quality of the leads generated?",
        answer: `
        We use a combination of techniques to ensure that the leads generated are of high quality. This includes using targeted calling lists, providing training on effective lead generation techniques, and regularly monitoring and evaluating agent performance. We also provide our clients with detailed reports on the leads generated, including information on the contact's name, phone number, email, and company name.
      `,
    },
    
];

const pageHeaderData = {
    title: "Lead Generation Services",
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



export default function LeadGeneration() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What services does your lead generation agency offer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our lead generation agency offers a variety of services, including outbound telemarketing, email marketing, social media marketing, and search engine optimization (SEO) to help businesses generate high-quality leads. We also provide detailed reports on the leads generated, including information on the contact’s name, phone number, email, and company name."
                }
            },
            {
                "@type": "Question",
                "name": "How do you measure the success of a lead generation campaign?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use a variety of metrics to measure the success of a lead generation campaign, including the number of leads generated, the conversion rate of those leads into paying customers, and the overall return on investment (ROI) for the campaign. We provide our clients with detailed reports on these metrics so they can see the results of their campaign in real-time."
                }
            },
            {
                "@type": "Question",
                "name": "How do you determine the target audience for a client’s lead generation campaign?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We work closely with our clients to understand their target audience and identify key demographics such as age, location, job title, and industry. We use this information to create targeted lists of potential leads and develop messaging that is tailored to the specific audience."
                }
            },
            {
                "@type": "Question",
                "name": "How do you ensure the quality of the leads generated?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use a combination of techniques to ensure that the leads generated are of high quality. This includes using targeted calling lists, providing training on effective lead generation techniques, and regularly monitoring and evaluating agent performance. We also provide our clients with detailed reports on the leads generated, including information on the contact’s name, phone number, email, and company name."
                }
            }
        ]
    };

    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Lead Generation Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Lead Generation Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
                            <div className={Style.ContentDiv}></div>



                            <div className={Style.ContentDiv}>
                                <h2 className="text-danger">Generating Leads, Driving Results</h2>
                                <hr />
                                <p>Welcoming you to lead generation where the success of your business is contingent in your capability to communicate with and turn potential customers into buyers. With Tech2Globe lead generation solutions in the USA we recognize the importance of producing high-quality leads. Therefore, we have designed an array of B2B lead generation services that can aid you in that.</p>
                                <p>Our experienced team will assist you in identifying the ideal audience, create appealing messages, and use the most recent technologies to engage and reach potential customers. We have a proven record of accomplishment and our solutions are designed to assist you reach your goals for business and accelerate growth. Let us assist you to take the first step to an improved future by using our lead generation solutions.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2>Our Various Lead Generation Services</h2>
                                <hr />
                                <p>Tech2Globe is an all-in-one lead generation solution for the USA. We have the expertise and tools to deliver results. We can help you with everything from creating targeted email campaigns, to <Link href="/social-media-marketing-services" className="fw-normal text-decoration-underline">social media advertising</Link> strategies, to optimizing search engines and designing attractive lead-magnets. What makes us unique?</p>
                                <p>Tech2Globe USA's lead generation services understand that lead generation involves much more than simply gathering leads; our lead nurturing B2B lead generation services guide customers through the sales funnel to ensure they make an informed purchasing decision.</p>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/email-marketing-call-center.png" className="img-responsive img-fluid" alt="Email Marketing" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Email Marketing:</h4>
                                        <p className="text-start">For <Link href="/email-marketing-services" className="fw-normal text-decoration-underline">email marketing solutions</Link> we use data-based methods that enable us to send targeted and pertinent messages directly to potential customers - leading to higher conversions and relationships being built over time.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/social-media-marketing-call-center.png" className="img-responsive img-fluid" alt="Social Media Marketing" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Social Media Marketing:</h4>
                                        <p className="text-start">Our experts assist companies to realize the full potential of social media by developing appealing content and placing targeted advertisements on platforms like Facebook, Instagram and LinkedIn.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/content-marketing-call-center.png" className="img-responsive img-fluid" alt="Search Engine Optimization" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Search Engine Optimization (SEO):</h4>
                                        <p className="text-start">Whilst search engines do not index websites directly, our <Link href="/search-engine-optimization" className="fw-normal text-decoration-underline">SEO specialists</Link> can optimize them so they are search engine-friendly, making it easier for customers to locate yours online.
                                        </p>
                                    </div>

                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/pay-per-click-call-center.png" className="img-responsive img-fluid" alt="Pay-Per-Click" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Pay-Per-Click (PPC) Advertising:</h4>
                                        <p className="text-start">Our experts develop and manage <Link href="/search-engine-optimization" className="fw-normal text-decoration-underline"> Pay-Per-Click </Link> ad campaigns targeted for search engines and other sites, only charging when prospective customers click your ads.
                                        </p>
                                    </div>

                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/customer-acquisition-call-center.png" className="img-responsive img-fluid" alt="Lead Magnets" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Lead Magnets:</h4>
                                        <p className="text-start">Our content offerings such as whitepapers, ebooks and webinars serve as lead magnets that attract visitors and convert them into leads.
                                        </p>
                                    </div>

                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/customer-retention-call-center.png" className="img-responsive img-fluid" alt="Lead Development" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Lead Development:</h4>
                                        <p className="text-start">We employ automated email marketing campaigns that lead prospective customers towards our sales funnel and convert them into paying customers.
                                        </p>
                                    </div>

                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/web-design-development-call-center.png" className="img-responsive img-fluid" alt="Online Reputation Management" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Online Reputation Management:</h4>
                                        <p className="text-start">We maintain your business's online reputation by reviewing and responding to reviews written about it online. In addition, we aim to remove negative comments that appear.
                                        </p>
                                    </div>

                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/content-rpo-dm.png" className="img-responsive img-fluid" alt="Video Marketing" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Video Marketing</h4>
                                        <p className="text-start">We create engaging videos to tell your company’s story and convince potential customers to do business with you.
                                        </p>
                                    </div>

                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/influencer-marketing-dm.png" className="img-responsive img-fluid" alt="Influencer Marketing" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Influencer Marketing</h4>
                                        <p className="text-start">Our <Link href="https://blog.tech2globe.com/how-to-create-an-influencer-marketing-strategy/" className="fw-normal text-decoration-underline">Influencer Marketing solutions</Link> connect companies with influential individuals who can promote their services or products to a large and engaged public.
                                        </p>
                                    </div>

                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/Off-Page-Keyword-seo.png" className="img-responsive img-fluid" alt="Website Development" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Website Development</h4>
                                        <p className="text-start">Our web designers and developers will create a user-friendly and attractive website that accurately represents your company and meets the needs of your target audience.
                                        </p>
                                    </div>

                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/web-design-development-call-center.png" className="img-responsive img-fluid" alt="Optimizing landing page" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Optimizing landing page:</h4>
                                        <p className="text-start">Our proven lead generation strategies will successfully convert website visitors into paying customers, increasing sales. Our experts pride themselves on offering high-quality lead generation services from initial consultation through to the report detailing results of your campaign.
                                        </p>
                                    </div>

                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                </div>

                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Step-by-Step Lead Generation Process</h2>
                                <hr />
                                <p>Discover our detailed lead generation service process that allows us to generate leads for you and identify potential customers.</p>

                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: 'red', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>1</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">
                                        <strong style={{ fontSize: 19 }}>Target market Research
                                        </strong>
                                        <p className="text-start">Understanding your target audience is the first step toward developing effective lead generation techniques. Who are your customers? What types of people frequent your website? How would your product or service assist them? More understanding of clients allows us to generate content that is entertaining, informative, and will increase leads.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#ffc107', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>2</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">
                                        <strong style={{ fontSize: 19 }}>Creating Engaging Content
                                        </strong>
                                        <p className="text-start">Content is one of the most effective ways to generate leads. When you develop compelling, useful, and shareable content, you provide your clients with a solution to their problem. We focus on creating content in the form of blog entries, social media, photographs, infographics, flow charts, and eBooks.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#03a9f4', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>3</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">
                                        <strong style={{ fontSize: 19 }}>Promoting Content Across Business Channels
                                        </strong>
                                        <p className="text-start">After we've developed content, we'll distribute it through our business channels, i.e., on Facebook, Instagram, Twitter, LinkedIn, or wherever customers are most active. We'll enable present or future clients to locate service or product through Google searches or by skimming through social media.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#607d8b', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>4</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">
                                        <strong style={{ fontSize: 19 }}>Nurture Existing Leads
                                        </strong>
                                        <p className="text-start">Once a lead has subscribed to an email list or entered in the lead management system, it is time to focus on developing a long-term relationship with them. Carefully steer them through the sales funnel or persuade them to make a purchase. Send personalized emails encouraging them to try a free sample, download a product trial, or make another purchase.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#9c27b0', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>5</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">
                                        <strong style={{ fontSize: 19 }}>Score Leads
                                        </strong>
                                        <p className="text-start">Certain leads are more valuable than others. Our marketing and sales teams assess each lead to discover who will benefit the most from services. We pay attention to which leads are interacting with your company the most, whether by reading additional information or returning to your website on a regular basis.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#00764e', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>6</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">
                                        <strong style={{ fontSize: 19 }}>Evaluating Lead Generation Process
                                        </strong>
                                        <p className="text-start">We make sure that our lead generation techniques are as effective as possible, and we focus on constantly reviewing them. Our team Continuously assesses the process to determine where leads go cold and how to keep customers interested in business.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4 className="pt-5">Industries we cater to</h4>
                                <hr />
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
                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Benefits of Selecting Tech2Globe</h2>
                                <hr />
                                <p>We specialize in B2B lead generation solutions designed to attract and convert potential customers, so what are the advantages of choosing Tech2Globe Marketing as your lead generation service provider? Below we list just a few advantages you'll enjoy when working with us:</p>

                                <h5> 1) <span className="text-decoration-underline">Increased Sales</span></h5>
                                <p>Increase the number of qualified leads who are interested in your products or services, resulting in more sales and increased revenue.</p>
                                <hr />
                                <h5> 2) <span className="text-decoration-underline">Strong Customer Relations</span></h5>
                                <p>Our aim is to assist companies in creating trustful and long-lasting relationships with their customers by producing value through sending relevant, customized emails that convey essential content.</p>
                                <hr />
                                <h5> 3) <span className="text-decoration-underline">Increased Brand Awareness</span></h5>
                                <p>With our engaging content and targeted advertising services, we help businesses increase brand recognition online and expand their reach.</p>
                                <hr />
                                <h5> 4) <span className="text-decoration-underline">Methodology</span></h5>
                                <p>We begin by understanding your specific goals. Then, we apply lead generation strategies that not only surpass, but also meet those goals.</p>
                                <hr />
                                <h5> 5) <span className="text-decoration-underline"> An outstanding record of success</span></h5>
                                <p>We've had a long history of successes! We've assisted businesses just like yours create high-quality leads and significantly increase the conversion rate.</p>
                                <hr />
                                <h5> 6) <span className="text-decoration-underline">Experienced team</span></h5>
                                <p>Our lead generation team is passionate about getting results. They have a proven track record of generating high-quality leads that turn into paying customers for businesses.</p>
                                <hr />
                                <h5> 7) <span className="text-decoration-underline">Multiple Channels</span></h5>
                                <p>We communicate with potential customers through a variety of channels. This includes social media, email marketing <Link href="/content-marketing-services" className="fw-normal text-decoration-underline">SEO Content marketing</Link> PPC advertisements, as well as lead magnets.</p>
                                <hr />
                                <h5> 8) <span className="text-decoration-underline">Measurable results</span></h5>
                                <p>We monitor and analyze the effectiveness in our lead-generation strategies, to ensure that you see the tangible outcomes of our work.</p>
                                <hr />
                                <p>If you choose Tech2Globe marketing lead generation service company as your partner for lead generation, you will be able to trust that you're working with the team who is committed to your achievement. Contact us today to find out more about how we can assist your company to grow.</p>
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
            <FaqSection faqs={faqs} />

        </>
    )
}