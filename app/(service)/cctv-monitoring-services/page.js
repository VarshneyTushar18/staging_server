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
    title: "Best Outsource CCTV Monitoring Services for 24/7 Security",
    description:
        "Protect your property with Tech2Globe, one of the best outsource remote CCTV monitoring services companies, offering reliable 24/7 surveillance to monitor.",
    keywords: [
        "Best CCTV Monitoring Services",
        "CCTV Service Monitor",
        "CCTV Monitoring Companies",
        "Remote CCTV Monitoring Services",
        "Outsource CCTV Monitoring Services"
    ],
    openGraph: {
        title: "Best Outsource CCTV Monitoring Services for 24/7 Security",
        siteName: "Tech2Globe Web Solutions LLP",
        description:
            "Protect your property with Tech2Globe, one of the best outsource remote CCTV monitoring services companies, offering reliable 24/7 surveillance to monitor.",
        url: "https://www.tech2globe.com/cctv-monitoring-services"
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Outsource CCTV Monitoring Services for 24/7 Security",
        description:
            "Protect your property with Tech2Globe, one of the best outsource remote CCTV monitoring services companies, offering reliable 24/7 surveillance to monitor."
    },
    alternates: {
        canonical: "https://www.tech2globe.com/cctv-monitoring-services"
    }
};

const pageHeaderData = {
    title: "Best CCTV Monitoring Services",
    description:
        "Upscale your security with Tech2Globe's CCTV Monitoring Services. We monitor 24/7 to enhance your overall protection, peace of mind, and boost operations.",
    buttonText: "Contact us",
    buttonLink: "#",
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
        question: "What are remote CCTV monitoring services?",
        answer: `
        Using on-site IP security cameras, a remote CCTV monitoring service employs trained security personnel to remotely monitor buildings, sites, and other immovable and moveable assets through a network of cameras, therefore enhancing security.
      `,
    },
    {
        id: "Two",
        question: "What benefits might outsourcing CCTV monitoring services offer?",
        answer: `
        CCTV surveillance is crucial for all organisations in the modern world. The following are some advantages of <strong>remote CCTV monitoring services</strong>:
        <ul>
        <li>Avoid stealing from internal and external sources including vandalism, robbery, and burglary.</li>
        <li>Stop crimes like break-ins.</li>
        <li>Monitoring employee contacts with consumers to determine customer satisfaction.</li>
        <li>Gathering proof of misbehaviour in preparation for future legal action.</li>
        <li>Security for employees to prevent incidents like employee conflicts.</li>
        <li>Monitoring of delicate places like locker rooms and bank vaults.</li>
        </ul>
      `,
    },
    {
        id: "Three",
        question: "What about my privacy?",
        answer: `
        Being a <strong>CCTV monitoring company</strong>, one of the main objectives of our services is to keep customer information confidential. Your data is safeguarded from security breaches thanks to our security measures. The following are a few of our data security and privacy measures:
        <ul>
            <li>Access control at the document level</li>
            <li>Adding many layers of defence</li>
            <li>Educating staff members about protecting consumer data</li>
            <li>Establishing a strong password policy</li>
        </ul>
      `,
    },
    {
        id: "Four",
        question: "What will the price of these monitoring services be?",
        answer: `
        Our monitoring solutions are priced based on the unique needs of the client. Please contact us at <a href="mailto:info@tech2globe.com">info@tech2globe.com</a> with your requirements so we can provide you with a quote for our <strong>remote CCTV monitoring service</strong>.
      `,
    },
    {
        id: "Five",
        question: "What types of CCTV monitoring services are available?",
        answer: `
        Tech2Globe Web Solutions provides a full range of CCTV monitoring solutions adapted to your security level. Our state-of-the-art security surveillance system provides round-the-clock monitoring, remote access, intelligent analytics, and professional support through which we offer cost-efficient solutions for all sectors, such as commercial, residential, and industrial.
      `,
    },
];

export default function CctvMonitoring() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What are remote CCTV monitoring services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "Remote CCTV monitoring uses on-site IP cameras and trained security personnel to watch buildings, sites, and other assets through a connected camera network. This improves security by enabling real-time surveillance."
                }
            },
            {
                "@type": "Question",
                "name": "What benefits might outsourcing CCTV monitoring services offer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "Outsourced CCTV monitoring helps prevent vandalism, theft, and break-ins. It also tracks employee–customer interactions, gathers proof of misconduct, protects staff from conflicts, and monitors sensitive areas like vaults and locker rooms."
                }
            },
            {
                "@type": "Question",
                "name": "What about my privacy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "We prioritize data confidentiality. Our security practices include document-level access control, multi-layer protection, employee training on data safety, and strong password policies to safeguard customer information."
                }
            },
            {
                "@type": "Question",
                "name": "What will the price of these monitoring services be?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "Pricing depends on your specific requirements. Share your needs at info@tech2globe.com and we will prepare a custom quote for our remote CCTV monitoring services."
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