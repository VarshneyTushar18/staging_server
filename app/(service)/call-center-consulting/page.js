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
        "Call Center Consulting Services | Best call center agency",

    description:
        "We are a leading offshore call center consulting provider, with our 14 years of experience offering a wide range of services to international clients ",

    keywords: "",

    alternates: {
        canonical: "https://www.tech2globe.com/call-center-consulting",
    },

    openGraph: {
        title:
            "Call Center Consulting Services | Best call center agency",
        description:
            "We are a leading offshore call center consulting provider, with our 14 years of experience offering a wide range of services to international clients ",
        url: "https://www.tech2globe.com/call-center-consulting",
        siteName: "Tech2Globe Web Solutions LLP",
        type: "website",
    },

    twitter: {
        card: "summary",
        title:
            "Call Center Consulting Services | Best call center agency",
        description:
            "We are a leading offshore call center consulting provider, with our 14 years of experience offering a wide range of services to international clients ",
    },
};

const faqs = [
    {
        id: "One",
        question: "What does your call center consulting service help with?",
        answer: `
        Our call center consulting service helps businesses improve the efficiency and effectiveness of their call center operations by providing expert advice and support. This may include identifying areas for improvement, implementing performance tracking systems, and developing strategies to enhance customer service and increase efficiency.
      `,
    },
    {
        id: "Two",
        question: "What are the benefits of using a call center consulting service?",
        answer: `
        Some potential benefits of using a call center consulting service include access to expertise, customized solutions, improved efficiency, and enhanced customer service.
      `,
    },
    {
        id: "Three",
        question: "How does your call center consulting service work?",
        answer: `
        The specifics of how Tech2Globe’s call center consulting service works will depend on the specific needs and goals of the business. However, common activities that a call center consulting service may undertake include analyzing current operations, identifying areas for improvement, developing and implementing performance tracking systems, and providing guidance and support to help the business achieve its goals.
      `,
    },
   
];

const pageHeaderData = {
    title: "Call Center Consulting Services",
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
        text: "We want to thank Tech2Globe for your hard work and the countless hours you have given to our organization. You have all of the advantages that come with working with a service provider like them, especially companies with limited budgets.",

    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "I wholeheartedly endorse Tech2Globe, they are simple to work with and the procedure was simple to begin. We were able to meet and choose the consultants who we thought would be the best fit for our campaign.",

    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "After a long research and experimenting, we got a reliable name Tech2Globe in the market who has been assisting us for over 2 years. Handing all of these strenuous tasks was way difficult. We are happy to partner with them!",

    },
];


export default function CallCenterConsulting() {
    
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Call Center Consulting" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner imageSrc="/images/services/service-inner/call-center-consulting-services.jpg" />
                            <div className={Style.ContentDiv}></div>



                            <div className={Style.ContentDiv}>
                                <h2>Call Center Consulting Support Services</h2>

                                <p>Now you can have comprehensive call center solutions that can cover all of your organization's call center activities, such as support quality monitoring, recruitment, hiring, workforce management, and onboarding. Do you wish to expand your business while maintaining complete control over all call center activities? If so, outsource <strong>call center consulting services</strong> to us and let us optimize your facility's customer and sales operations with our skilled call center services.</p>
                                <p>We are one of the top leading providers of call center consulting services. We have helped various major corporations build effective action plans for their call centers and overhauled their call center objectives with our 14 years of experience in offering call center business consulting solutions.</p>

                            </div>

                            <div className={Style.ContentDiv}>
                                <h2>Solutions That Are All-Inclusive Professional Call Center Service Providers</h2>

                                <p className="mb-4">We are an expert call center consulting partner with a team of project managers, senior consultants, and subject matter experts who can deliver real-time solutions. They can assist you revitalize and boost consumer engagement while also expanding your business. You can avail our services to get the following <strong>call center consulting services</strong></p>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/cloud-contact-call-center.png" className="img-responsive img-fluid" alt="Cloud Contact Center Services" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Cloud Contact Center Services</h4>
                                        <p className="text-start">We use cloud-based technologies to develop solutions that improve multi-channel customer assistance. Our services, which include phone calls, chats, social media, and email, can help you process and resolve customer enquiries, complaints, and comments more efficiently.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/contact-center-remodeling-call-center.png" className="img-responsive img-fluid" alt="Contact Center Remodeling" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark  fw-bold text-decoration-underline">Contact Center Remodeling</h4>
                                        <p className="text-start">With our tailored services, we help businesses improve their customer experience, efficiency, and scalability. With ur contact center modernisation services, you are able to increase resolution speed, decrease resolution times, and boost first contact resolution rates.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/contact-restructuring-services.png" className="img-responsive img-fluid" alt="Contact Center Restructuring Services" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Contact Center Restructuring Services</h4>
                                        <p className="text-start">Among our contact center transformation and support services are cutting-edge cloud-based solutions that streamline and future-proof our clients' contact center operations. To provide excellent customer assistance, we optimize processes, tools, and agent participation.
                                        </p>
                                    </div>

                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/business-continuity-planning.png" className="img-responsive img-fluid" alt="Business Continuity Planning" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Business Continuity Planning</h4>
                                        <p className="text-start">We create customized business continuity strategies for businesses in a variety of industries to ensure that their operations continue to run smoothly even amid unexpected disruptions. Contingencies are included into our complete business continuity strategies for organizational assets, functions, resources, and key decision makers.
                                        </p>
                                    </div>

                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/sales-support-call-center.png" className="img-responsive img-fluid" alt="Business Process as a Service" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Business Process as a Service</h4>
                                        <p className="text-start">With our comprehensive BPaaS, we assist enterprises in migrating their critical IT functions to the cloud. We combine business process outsourcing and cloud computing technology to produce tailored enterprise-grade solutions for implementing IT-reliant business processes.
                                        </p>
                                    </div>

                                </div>
                                <hr/>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="mt-4 mb-2">The Process Of Our Call Center Consulting Services</h2>
                                <p>We are one of the few offshore call center consulting providers who provide insightful counsel on how to improve agent activity, how to align the organization with the business, and how to manage SLAs more quickly. Our call center solutions provide the greatest tools, methods, and processes for increasing the value of your brand.</p> 
                                <p>Our process flow for providing the best service possible is as follows</p>

                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: 'red', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>1</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">
                                        <strong style={{ fontSize: 19 }}>Analysis of Requirements
                                        </strong>
                                        <p className="text-start">Our full examination of your business involves an evaluation of your present business procedure as well as an assessment of call-flow variability.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#ffc107', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>2</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">
                                        <strong style={{ fontSize: 19 }}>Strategy Creation
                                        </strong>
                                        <p className="text-start">We intend to create a 360-degree development roadmap to assist you in strategizing all of the call center processes, metrics, and agents.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#03a9f4', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>3</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">
                                        <strong style={{ fontSize: 19 }}>Strategy Implementation
                                        </strong>
                                        <p className="text-start">We assist you in the implementation of tools, technologies, and systems at your facility. We can assist you in developing technical, functional, or support processes in your organization.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#607d8b', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>4</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">
                                        <strong style={{ fontSize: 19 }}>Thorough Training
                                        </strong>
                                        <p className="text-start">When the tools, systems, and process modifications are planned and implemented, we assist in the development of training modules at your call center site.
                                        </p>
                                    </div>
                                </div>
                                <div className="round-circle-container col-md-12 border-bottom pb-2 d-flex justify-content-start align-items-center gap-3">
                                    <div className="col-md-2 coloredRound" style={{ border: '2px dotted #e5e2e2', borderRadius: '50%', width: 80, height: 80, backgroundColor: '#9c27b0', padding: '15px 10px 10px 26px' }}>
                                        <h5 className="text-white fs-1" style={{ color: '#fff' }}>5</h5>
                                    </div>
                                    <div className="col-md-10 text-left pt-3">
                                        <strong style={{ fontSize: 19 }}>Additional Assistance
                                        </strong>
                                        <p className="text-start">We provide query support 24 hours a day, six days a week, and our highly dedicated workforce delivers unified support across several channels.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            

                             <div className={Style.ContentDiv}>
                                <h2 className="pt-3">Other Call Center Services That You Can Leverage From Us</h2>

                                <p>Across many channels and platforms, we provide consolidated customer support, sales support, and inbound/outbound services.</p>

                                <h4 className="text-decoration-underline">Inbound Call Centers</h4>
                                <p>By taking client calls, answering questions, and providing technical support, our professional agents help organizations streamline their support procedures.</p>
                                <hr/>
                                <h4 className="text-decoration-underline">Outbound Call Centers</h4>
                                <p>We assist businesses with customer acquisition, sales, marketing, and any other offshore call center consulting they require for growth.</p>
                                <hr/>
                                <h4 className="text-decoration-underline"> Customer Support</h4>
                                <p>Our agents will answer queries, provide troubleshooting answers, and assist your customers with product maintenance or upgrades.</p>
                                <hr/>
                                <h4 className="text-decoration-underline">Support for Call Center Monitoring</h4>
                                <p>We provide quality control services in the form of call center monitoring to ensure high-quality calls. We will record and analyze calls in order to discover and resolve any problems.</p>
                                <hr/>
                                <h4 className="text-decoration-underline">Lead Generation</h4>
                                <p>We provide comprehensive lead generating services to businesses, including B2B, local, soft leads, and more.</p>                                
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
                            
                            <div className={Style.ContentDiv}>
                                <h4 className="pt-3">Why Choose Tech2Globe For Offshore Call Center Consulting?</h4>

                                <p>Our call center business consulting method is designed so that we can determine the best course of action to improve your company's operations and build the best technology and processes.</p>
                                <p>We are a leading offshore call center consulting provider, offering a wide range of services to international clients. Our call center experts are well-trained and can implement the most effective strategy to revitalize your facility.</p>
                                <ul>
                                    <li>We work to improve your customer service strategy.</li>
                                    <li>You can improve the efficiency of support services with our help.</li>
                                    <li>We implement strict quality control methods for calls.</li>
                                </ul>
                                <p>At Tech2Globe, we believe in creating long-term relationships as well as providing support through call center consultancy. Contact us immediately for best efficient, and cost-effective call center consulting services.</p>
                            
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