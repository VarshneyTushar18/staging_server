import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Image from "next/image";
import Link from "next/link";


export const metadata = {
    title:
        "Live Chat Support Services |Outsorce Chat support Services",

    description:
        "Tech2Globe a leading outsourcing company in India,offers cost effective Live Chat Support Services to customers.We offered 24x7 chat support services  to your customers.",

    keywords: [
        "Live Chat",
        "Help Desk",
        "Support Desk",
        "Online Live Chat",
        "customer contact center",
        "online chat support",
        "live chat support outsourcing",
        "technical chat support services.",
    ],

    alternates: {
        canonical: "https://www.tech2globe.com/chat-support-services",
    },

    openGraph: {
        title:
            "Live Chat Support Services | Outsource Chat support Services",
        description:
            "Tech2Globe a leading outsourcing company in India,offers cost effective Live Chat Support Services to customers.We offered 24x7 chat support services to your customers.",
        url: "https://www.tech2globe.com/chat-support-services",
        siteName: "Tech2Globe",
        type: "website",
    },

    twitter: {
        card: "summary",
        title:
            "Live Chat Support Services | Outsource Chat support Services",
        description:
            "Tech2Globe a leading outsourcing company in India,offers cost effective Live Chat Support Services to customers.We offered 24x7 chat support services to your customers.",
    },
};

const pageHeaderData = {
    title: "Chat Support Services For AI Products",
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



export default function ChatSupport() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Chat Support Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Chat Support Services" imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg" />
                            <div className={Style.ContentDiv}></div>



                            <div className={Style.ContentDiv}>

                                <p>With <strong>Chat support for your AI</strong> products, you can make your business intelligent and technologically advanced.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4>Why OPT for chat support services?</h4>
                                <hr />
                                <p><strong>Chat support services</strong> have been employed by businesses and their customer service teams for years to improve their customer experience with advanced <Link href="/customer-support" className="fw-normal text-decoration-underline">customer support</Link>, and optimise conversion funnels. Chat support is not the way to conveniently connect with your customers but also helps you know your customers more closely to improve the quality of your product or service.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4>What differentiates our chat support services for AI products from the rest?</h4>
                                <hr />

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/cloud-contact-call-center.png" className="img-responsive img-fluid" alt="Phone Assistance" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">More convenient</h4>
                                        <p className="text-start">You have a better way of communicating with your customers if you're going with our <strong>chat support services</strong>. It allows your customers to connect easily without finding the number or searching for any helpline. We make your customers' queries sorted and handled via live chat.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/contact-center-remodeling-call-center.png" className="img-responsive img-fluid" alt="Email Support" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Instantly build and integrate</h4>
                                        <p className="text-start">You want to give your customer the best experience; therefore, you must have a fast and robust service to help them. Waiting is not your customer's job; thus, we ensure that your customer will get solutions instantly within seconds.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start gap-3">
                                    <div className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-none d-sm-block" style={{ border: '2px dotted #e5e2e2', padding: 10 }}>
                                        <img src="/images/services/service-inner/contact-restructuring-services.png" className="img-responsive img-fluid" alt="Live Chat Assistance" />
                                    </div>
                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left">
                                        <h4 className="text-dark text-decoration-underline fw-bold">Stay ahead of the competition</h4>
                                        <p className="text-start">Our <strong>chat support services for AI products</strong> will make your users believe in your brand. During the live chat, we follow a quick turnaround time that is probably a fraction of a second that ultimately leaves a positive impression.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <hr />
                                </div>

                            </div>

                            <div className={Style.ContentDiv}>
                                <h4>The process of our call center consulting services</h4>

                                <p>We are one of the few offshore <Link href="/call-center-consulting" className="fw-normal text-decoration-underline">call center consulting</Link> providers who provide insightful counsel on how to improve agent activity, how to align the organization with the business, and how to manage SLAs more quickly. Our call center solutions provide the greatest tools, methods, and processes for increasing the value of your brand.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4>Experience an incredible and advanced chat support service</h4>

                                <p>Leaving all the traditional ways of answering customer questions, we now have chat support services, a more personalized and advanced way of giving users help and support.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4 className="pt-3">We offer our services to multiple industries</h4>
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
                                                    Travel &Tourism
                                                </div>
                                            </div>
                                            <div className={`${Style.commonInner} inner3`}>
                                                <div className={`${Style.img} mx-auto`}>
                                                    <img src="/images/services/food.png" alt />
                                                </div>
                                                <div className={`${Style.title} mx-auto`}>
                                                    Ecommerce
                                                </div>
                                            </div>
                                            <div className={`${Style.commonInner} inner4`}>
                                                <div className={`${Style.img} mx-auto`}>
                                                    <img src="/images/services/home-1-1.png" alt />
                                                </div>
                                                <div className={`${Style.title} mx-auto`}>
                                                    Real estate
                                                </div>
                                            </div>
                                            <div className={`${Style.commonInner} inner9`}>
                                                <div className={`${Style.img} mx-auto`}>
                                                    <img src="/images/services/sports-1.png" alt />
                                                </div>
                                                <div className={`${Style.title} mx-auto`}>
                                                    Automobiles
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
                                <h4>Experience An Incredible And Advanced Chat Support Service</h4>

                                <p>Leaving all the traditional ways of answering customer questions, we now have chat support services, a more personalized and advanced way of giving users help and support.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4>Why Tech2Globe For Chat Support Services For AI Products?</h4>

                                <p>As technology advances, users are willing to get responded faster; therefore, Tech2Globe gives you frictionless chat support. By hiring Tech2Globe for <strong>chat support</strong>, your customer support services can be enhanced and modified, and your users can enjoy a seamless and more responsive website experience as we know that companies are competing to achieve maximum customer satisfaction rates. To increase your brand's scalability, we have years of expertise in making brands look user-friendly with our chat support services without breaking pockets.</p>
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


        </>
    )
}