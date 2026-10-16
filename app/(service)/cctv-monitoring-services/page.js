import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
    title: "CCTV Monitoring Services | AI-Enhanced 24/7 Remote Surveillance & Security",
    description:
        "Protect your premises round the clock with Tech2Globe's AI-enhanced CCTV monitoring services. Our intelligent surveillance system combines real-time video analysis with expert human monitoring to detect threats before they escalate.",
    keywords: [
        "Best CCTV Monitoring Services",
        "CCTV Service Monitor",
        "CCTV Monitoring Companies",
        "Remote CCTV Monitoring Services",
        "Outsource CCTV Monitoring Services"
    ],
    openGraph: {
        title: "CCTV Monitoring Services | AI-Enhanced 24/7 Remote Surveillance & Security",
        siteName: "Tech2Globe Web Solutions LLP",
        description:
            "Protect your premises round the clock with Tech2Globe's AI-enhanced CCTV monitoring services. Our intelligent surveillance system combines real-time video analysis with expert human monitoring to detect threats before they escalate.",
        url: "https://stagenew.tech2globe.tech/cctv-monitoring-services"
    },
    twitter: {
        card: "summary_large_image",
        title: "CCTV Monitoring Services | AI-Enhanced 24/7 Remote Surveillance & Security",
        description:
            "Protect your premises round the clock with Tech2Globe's AI-enhanced CCTV monitoring services. Our intelligent surveillance system combines real-time video analysis with expert human monitoring to detect threats before they escalate."
    },
    alternates: {
        canonical: "https://stagenew.tech2globe.tech/cctv-monitoring-services"
    }
};

const pageHeaderData = {
    title: "Best CCTV Monitoring Services",
    description:
        "Upscale your security with Tech2Globe's CCTV Monitoring Services. We monitor 24/7 to enhance your overall protection, peace of mind, and boost operations.",
    buttonText: "Book Your Consultation",
    buttonLink: "/contact-us",
    backgroundImage: "/images/services/data-mining-services-banner.jpg", // your banner image
};

const resources = [
    { id: 1, name: "Restaurant Menu Entry Services", path: "/restaurant-menu-entry-services" },
    { id: 2, name: "Financial Data Entry Services", path: "/financial-data-entry-services" },
    { id: 3, name: "Catalog Management", path: "/catalog-management-services" },
    { id: 4, name: "Data Processing Services", path: "/data-processing-services" },
    { id: 5, name: "Data Product Entry", path: "/product-data-entry-services" },
];

const usefulLinks = [
    { id: 6, name: "Food Industries", path: "/food-industries-services" },
    { id: 7, name: "Non-profit Organization", path: "/non-profit-organizations-services" },
    { id: 8, name: "Medical And Health", path: "/medical-and-health-services" },
    { id: 9, name: "Translation Firms", path: "/translation-firms-services" },
];


const sidebarSections = [
    { heading: "Resources", links: resources },
    { heading: "Industries We Serve", links: usefulLinks },
];


const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe's CCTV monitoring services have given me peace of mind, knowing that our premises are secure 24/7.",
        name: "Sarah Patel, Small Business Owner",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "The best customer service with down to earth team, who are always willing to help.",
        name: "Michael Thompson, Property Manager",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "They are professionala and reliable, providing excellent surveillance for my property. I highly recommend for security.",
        name: "Emily Johnson, Homeownersss",
    },
    {
        id: 4,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "The process to remote review is simple and straight forward. If you struggle with tech they are a phone call away and I'am impressed with their friendly customer service.",
        name: " Aarav Gupta, Warehouse Manager",
    },
    {
        id: 5,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "They truly set the standard for monitoring services. Their advanced technology and dedicated team ensure that our property is always under watchful eyes.",
        name: "Olivia Smith, Office Manager",
    },
];

const faqs = [
    {
        id: "One",
        question: "What are CCTV monitoring services?",
        answer:
            "CCTV monitoring services involve monitoring live video feeds from security cameras to help protect properties, people, and assets. Professional monitoring teams can identify suspicious activities, track potential security threats, and alert the relevant personnel when an incident occurs. Tech2Globe provides remote CCTV monitoring solutions with 24/7 monitoring, technical support, and surveillance reporting.",
    },
    {
        id: "Two",
        question: "How does 24/7 CCTV monitoring work?",
        answer:
            "24/7 CCTV monitoring uses security cameras, network connectivity, and monitoring systems to provide continuous surveillance of your property. Trained monitoring personnel review camera feeds and identify suspicious activities. When a potential security issue is detected, alerts can be shared with designated contacts according to the agreed response procedure. Continuous monitoring helps businesses maintain security coverage beyond regular working hours.",
    },
    {
        id: "Three",
        question: "What are remote CCTV monitoring services?",
        answer:
            "Remote CCTV monitoring services allow security cameras to be monitored from an off-site location rather than relying entirely on personnel being physically present at the property. Using connected CCTV systems, monitoring teams can review live footage, identify unusual activities, and provide alerts when necessary. Remote monitoring can also include video documentation, technical support, and routine system checks.",
    },
    {
        id: "Four",
        question: "What are the benefits of outsourcing CCTV monitoring?",
        answer:
            "Outsourcing CCTV monitoring can help businesses improve surveillance coverage, reduce the workload on internal teams, and access dedicated monitoring expertise. It can support the early identification of suspicious activities, help deter theft and vandalism, and provide video records for incident reviews. Outsourced monitoring can also offer flexible service arrangements based on a property's security requirements and operating hours.",
    },
    {
        id: "Five",
        question: "What types of properties can use CCTV monitoring services?",
        answer:
            "CCTV monitoring services can support a wide range of properties, including commercial buildings, offices, retail stores, warehouses, factories, construction sites, residential properties, parking facilities, restaurants, schools, and vacant premises. The monitoring approach can be tailored to the property's layout, security risks, camera coverage, and operational requirements.",
    },
    {
        id: "Six",
        question: "Can CCTV monitoring services provide real-time alerts?",
        answer:
            "Yes. CCTV monitoring systems can provide real-time alerts when suspicious activity or a potential security incident is detected. Depending on the system configuration, alerts may be triggered through monitoring personnel or intelligent video analytics and shared with designated contacts. Alert types and response procedures depend on the available technology and the service arrangement.",
    },
    {
        id: "Seven",
        question: "How does remote CCTV monitoring help improve security?",
        answer:
            "Remote CCTV monitoring helps improve security by maintaining surveillance coverage, identifying suspicious behaviour, and enabling quicker notification of potential incidents. It can help businesses monitor entrances, restricted areas, equipment, and other important locations. Recorded footage and incident reports can also support investigations and security reviews. Regular system checks and technical support help maintain reliable monitoring operations.",
    },
    {
        id: "Eight",
        question: "How much do CCTV monitoring services cost?",
        answer:
            "The cost of CCTV monitoring services depends on factors such as the number of cameras, property size, monitoring hours, security requirements, video analytics features, and the level of technical support required. Tech2Globe offers tailored monitoring solutions based on individual business needs. Contact our team with your requirements to discuss suitable options and request a customized quote.",
    },
];

export default function CctvMonitoring() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://www.tech2globe.com/#organization",
                name: "Tech2Globe",
                url: "https://www.tech2globe.com/",
            },
            {
                "@type": "WebSite",
                "@id": "https://www.tech2globe.com/#website",
                url: "https://www.tech2globe.com/",
                name: "Tech2Globe",
                publisher: {
                    "@id": "https://www.tech2globe.com/#organization",
                },
            },
            {
                "@type": "WebPage",
                "@id": "https://www.tech2globe.com/cctv-monitoring-services#webpage",
                url: "https://www.tech2globe.com/cctv-monitoring-services",
                name: "CCTV Monitoring Services",
                isPartOf: {
                    "@id": "https://www.tech2globe.com/#website",
                },
                about: {
                    "@id": "https://www.tech2globe.com/cctv-monitoring-services#service",
                },
                breadcrumb: {
                    "@id": "https://www.tech2globe.com/cctv-monitoring-services#breadcrumb",
                },
                mainEntity: {
                    "@id": "https://www.tech2globe.com/cctv-monitoring-services#service",
                },
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.tech2globe.com/cctv-monitoring-services#breadcrumb",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: "https://www.tech2globe.com/",
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "CCTV Monitoring Services",
                        item: "https://www.tech2globe.com/cctv-monitoring-services",
                    },
                ],
            },
            {
                "@type": "Service",
                "@id": "https://www.tech2globe.com/cctv-monitoring-services#service",
                name: "CCTV Monitoring Services",
                serviceType: [
                    "24/7 CCTV monitoring",
                    "Remote CCTV monitoring",
                    "Real-time security alerts",
                ],
                url: "https://www.tech2globe.com/cctv-monitoring-services",
                provider: {
                    "@id": "https://www.tech2globe.com/#organization",
                },
                mainEntityOfPage: {
                    "@id": "https://www.tech2globe.com/cctv-monitoring-services#webpage",
                },
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.tech2globe.com/cctv-monitoring-services#faq",
                url: "https://www.tech2globe.com/cctv-monitoring-services",
                isPartOf: {
                    "@id": "https://www.tech2globe.com/cctv-monitoring-services#webpage",
                },
                mainEntity: faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                    },
                })),
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb pageName="CCTV Monitoring Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="CCTV Monitoring Services" />
                            <div className={Style.ContentDiv}>
                                <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                        <Image
                                            src="/images/services/service-inner/cctv_monitoring_tiny.jpg"
                                            alt="24/7 Real-Time CCTV Monitoring for Quick Action and Protection"
                                            width={224}
                                            height={400}
                                            className={Style.ImageOne}
                                        />
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                        <h2 className="pb-3">24/7 Real-Time CCTV Monitoring for Quick Action and Protection</h2>
                                        <p>Tech2Globe Web Solutions is the profound CCTV Monitoring Company providing reliable business solutions. We offer advanced remote CCTV monitoring services and surveillance solutions. These are created to meet your unique security needs through the optimization of technology and a dedicated team of experts.</p>
                                        <p>Security has become extremely important in the world we live in today. Tech2Globe offers continuous surveillance through live CCTV camera monitoring to protect your home, office, or other facilities at all times. Our commitment is to provide you with an exceptional CCTV monitoring experience through the use of IP technology to simplify the entire process, 24/7 monitoring, tailored solutions, and expert support. To discover more about our services and start on the path to a safer tomorrow, contact us right away. You have access to top-tier entry services, call center services, and other options.</p>
                                    </div>
                                </div>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3">What Makes Us the Preferred CCTV Monitoring Company?</h2>
                                <p>As a leading <strong>CCTV monitoring company</strong> with extensive experience, we understand the importance of protecting your business or home from any misconduct activity. That&apos;s why clients choose us. Our systems use the latest technology to respond swiftly to emergencies, acting as a powerful deterrent that effectively stops intruders on your premises.</p>

                                <p>Intruders can receive individualized warnings before committing a crime by integrating your CCTV with public address systems. While you&apos;re away, our remote monitoring can give you the utmost peace of mind. Additionally, we are extremely concerned with our response times because our values revolve around providing world-class and technologically innovative service. We keep the customers&apos; needs first in all that we do.</p>

                                <p><strong>Beyond Observation:</strong> We offer more than complete monitoring and take great care of it. We double-check everything digitally and physically frequently to guarantee it is operating properly.</p>

                                <p><strong>At Your Service:</strong> An assigned Key Account Manager will help you with anything you need. Our tech support team is here 24/7 to help if anything goes wrong.</p>

                                <p>Now is the perfect time to take action and <strong>outsource CCTV monitoring services</strong> to us. With our expertise, you can ensure that your property is always protected.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 pb-3">Remote CCTV Monitoring Services We Offer</h2>
                                <p>Experience in a <strong>CCTV monitoring agency</strong> is crucial. With over 15 years of experience, we offer security camera monitoring for commercial & non-commercial properties, and we ensure our clients have an alert set of eyes around their property around the clock. Using the best software, we offer remote access to clients so they can check the efficiency of our services any time they want. Real-time video surveillance, threat monitoring, intruder tracking, and alerting of organizations are all features of our remote CCTV monitoring services.</p>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <Image
                                            src="/images/services/service-inner/video.jpg"
                                            alt="Key Benefits of Document Processing Solutions"
                                            width={55}
                                            height={55}
                                        />
                                        <h5>Monitoring and Alert Systems</h5>
                                        <p>Our attentive staff of security experts is constantly watching the video feed from your cameras as part of our remote CCTV monitoring services. Furthermore, our system instantly notified us of any questionable activity, enabling us to take action immediately.</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <Image
                                            src="/images/services/service-inner/cc-tv.jpg"
                                            alt="Key Benefits of Document Processing Solutions"
                                            width={55}
                                            height={55}
                                        />
                                        <h5>Regular Maintenance</h5>
                                        <p>We provide routine maintenance services to keep your CCTV system operating at its best. Our professionals undertake regular hardware checks, software updates, and inspections to guarantee that your surveillance system runs correctly.</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <Image
                                            src="/images/services/service-inner/testing-1.jpg"
                                            alt="Key Benefits of Document Processing Solutions"
                                            width={55}
                                            height={55}
                                        />
                                        <h5>Video Documentation</h5>
                                        <p>As one of the leading <strong>CCTV monitoring companies</strong>, we record all video feeds for future reference and produce detailed reports. Our team ensures these reports include key information, such as the camera used, the zone, timestamps, and any other relevant CCTV data. This data is then analyzed to identify areas for improvement.</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <Image
                                            src="/images/services/service-inner/mentenance.jpg"
                                            alt="Key Benefits of Document Processing Solutions"
                                            width={55}
                                            height={55}
                                        />
                                        <h5>Technical Support</h5>
                                        <p>Our dedicated technical support team is available round-the-clock to provide assistance and address any technical issues that may arise. We strive to deliver promptness and reliability.</p>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 pb-3">Key Applications of CCTV Monitoring</h2>
                                <p>As a certified <strong>CCTV monitoring agency</strong>, we use the most advanced technology and capabilities available, and we offer live security camera monitoring solutions to meet your needs.</p>
                                <ul>
                                    <li>Secure backups and documentation are provided for high-quality surveillance recordings. If necessary, they can be used in any contractual, civil, and criminal legal actions.</li>
                                    <li>Systems for surveillance can be connected to other software programmes for call trees, personal identification, crisis management, and other purposes.</li>
                                    <li>For on-site inspections and lone employees, monitoring software can be connected with onsite access control and perimeter alarm systems.</li>
                                </ul>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="pt-3 pb-3">What is CCTV Monitoring Used for?</h2>
                                <p>Expert monitoring and CCTV surveillance are beneficial in situations where anything unfortunate can take place. Furthermore, circumstances like health and safety, asset security, and unauthorized intrusion of people requires effective administration. The following place can make best use of CCTV remote monitoring services:</p>
                                <ul>
                                    <li>Commercial assets</li>
                                    <li>Private residences</li>
                                    <li>Industrial sites</li>
                                    <li>Constructions sites</li>
                                    <li>Factories</li>
                                    <li>Restaurants</li>
                                    <li>Banks and ATMs</li>
                                    <li>Warehouses</li>
                                    <li>Vacant properties</li>
                                    <li>Retail stores</li>
                                    <li>Parking lots</li>
                                    <li>Security agencies</li>
                                    <li>Universities/Schools</li>
                                </ul>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h3 className="pt-3 pb-3">Why Choose Tech2Globe Web Solutions for CCTV Monitoring Services?</h3>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="d-flex gap-4">
                                            <div className="ImageHolder">
                                                <Image
                                                    src="/images/services/service-inner/24-hours.png"
                                                    alt="24/7 Monitoring"
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                            <div className="ContentHolder">
                                                <h5>24/7 Monitoring</h5>
                                                <p>
                                                    We realise that security threats might appear at any time, thus we conduct 24/7 monitoring.
                                                    Because of this, our experts are available around-the-clock, assuring constant monitoring and
                                                    rapid response to any suspicious behaviour. Furthermore, our professionals watching the
                                                    real-time video feed ensures prompt response and lowers the possibility of potential problems.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tailored Solutions */}
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="d-flex gap-4">
                                            <div className="ImageHolder">
                                                <Image
                                                    src="/images/services/service-inner/solution.png"
                                                    alt="Tailored Solutions"
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                            <div className="ContentHolder">
                                                <h5>Tailored Solutions</h5>
                                                <p>
                                                    We support providing customised services to meet our client’s unique security needs. To
                                                    create a CCTV monitoring system that meets your demands, goals, and budget, our experts will
                                                    work closely with you to understand your objectives. Whether you require live CCTV camera
                                                    monitoring or surveillance of your residential property, we can help.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Remote Access */}
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="d-flex gap-4">
                                            <div className="ImageHolder">
                                                <Image
                                                    src="/images/services/service-inner/remote-control.png"
                                                    alt="Remote Access"
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                            <div className="ContentHolder">
                                                <h5>Remote Access</h5>
                                                <p>
                                                    You may view your cameras&apos; live video feed from anywhere at any time with our services. You
                                                    may remotely monitor your property using our secure online and mobile services, providing you
                                                    peace of mind even when you are away. This access builds the trust of our clients making us a
                                                    reliable CCTV monitoring company.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Smart Analytics */}
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="d-flex gap-4">
                                            <div className="ImageHolder">
                                                <Image
                                                    src="/images/services/service-inner/smart-contracts.png"
                                                    alt="Smart Analytics"
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                            <div className="ContentHolder">
                                                <h5>Smart Analytics</h5>
                                                <p>
                                                    Our CCTV solutions go beyond conventional video surveillance with intelligent analytics. We
                                                    use clever analytics that can identify unusual conduct or potential security breaches and
                                                    notify you of them. These cutting-edge capabilities improve security and proactive threat
                                                    identification, including facial recognition, licence plate recognition, and object
                                                    tracking.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Professional Assistance */}
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="d-flex gap-4">
                                            <div className="ImageHolder">
                                                <Image
                                                    src="/images/services/service-inner/tech-support.png"
                                                    alt="Professional Assistance"
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                            <div className="ContentHolder">
                                                <h5>Professional Assistance</h5>
                                                <p>
                                                    At Tech2Globe Web Solutions, we take great satisfaction in offering top-notch customer
                                                    service. Our qualified experts are ready 24/7 to answer any questions or resolve any concerns
                                                    you may have. Furthermore, we are with you on every step of the way, from system integration
                                                    to troubleshooting and maintenance, we are here to help.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Cost-Effective Solutions */}
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="d-flex gap-4">
                                            <div className="ImageHolder">
                                                <Image
                                                    src="/images/services/service-inner/bars.png"
                                                    alt="Cost-Effective Solutions"
                                                    width={50}
                                                    height={50}
                                                />
                                            </div>
                                            <div className="ContentHolder">
                                                <h5>Cost-Effective Solutions</h5>
                                                <p>
                                                    We are aware of how important it is to be economical without sacrificing quality. Our CCTV
                                                    remote monitoring services are made to provide outstanding value for your money. We ensure
                                                    that you get the most out of your surveillance system without going over budget by providing
                                                    affordable pricing, flexible packages, and long-term maintenance plans.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${Style.CtaBlock} text-center my-4 py-4`}>
                                <h3>Need Reliable 24/7 CCTV Monitoring?</h3>
                                <p className="mb-3">
                                    Protect your property with remote CCTV monitoring, real-time surveillance, and professional monitoring support.
                                </p>
                                <a href="/contact-us" className={Style.CtaButton}>
                                    Get a Free Quote
                                </a>
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
};
