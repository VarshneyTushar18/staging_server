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
import { FaAngleRight, FaBroom, FaCrop, FaDesktop, FaLaptop, FaNewspaper, FaSmile } from "react-icons/fa";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";


export const metadata = {
    title: "Best Logistics Service Provider | Logistics Company & Solutions",

    description:
        "Logistics Company: Hire best logistics services provider for your every need. We offer top-notch logistics solutions with a team of dedicated professionals.",

    keywords: [
        "logistics services",
        "outsource logistics services",
        "logistics services in india",
        "outsourcing logistics services",
        "logistics for trucking companies",
        "logistics management",
        "freight payment processing",
        "freight payment & pre-audit",
    ],

    alternates: {
        canonical: "https://stagenew.tech2globe.tech/logistics-services",
    },

    openGraph: {
        title: "Best Logistics Service Provider | Logistics Company & Solutions",
        description:
            "Logistics Company: Hire best logistics services provider for your every need. We offer top-notch logistics solutions with a team of dedicated professionals.",
        url: "https://stagenew.tech2globe.tech/logistics-services",
        siteName: "Tech2Globe Web Solutions LLP",
        type: "website",
    },

    twitter: {
        card: "summary",
        title: "Best Logistics Service Provider | Logistics Company & Solutions",
        description:
            "Logistics Company: Hire best logistics services provider for your every need. We offer top-notch logistics solutions with a team of dedicated professionals.",
    },
};

const faqs = [
    {
        id: "One",
        question: "What is basic logistics service?",
        answer: `
        A basic logistics service that a <strong>logistics service provider</strong> must offer is warehousing and transportation, which involves the storage and management of goods before they are transported to their final destination.
      `,
    },
    {
        id: "Two",
        question: "What is the logistics service process?",
        answer: `
        <strong>Logistics services</strong> encompass all aspects of your supply chain, from manufacturer to end consumer. This process begins with the strategic planning, execution, and management of the smooth flow of goods and information from origin to destination, optimizing efficiency and customer satisfaction along the supply chain.
      `,
    },
    {
        id: "Three",
        question: "What Industries Do You Serve?",
        answer: `
        We provide services to a broad range of industries, including but not restricted to technology, manufacturing, healthcare, retail, and e-commerce.
      `,
    },
    {
        id: "Four",
        question: "How Can I Follow My Deliveries?",
        answer: `
        You can track the status and location of your shipments in real-time thanks to our sophisticated tracking system. You can reach our customer service team or use our web portal to access this information.
      `,
    },
    {
        id: "Five",
        question: "How Do You Guarantee The Security Of Cargo When It Is Being Transported?",
        answer: `
        To guarantee the security of your goods during transit, we collaborate with reputable carriers and use secure packing and handling procedures.
      `,
    },
    {
        id: "Six",
        question: "Can You Accommodate Varying Shipping Volumes Throughout The Year?",
        answer: `
        Absolutely! Our adaptable logistics solutions are created to grow with your company's demands, seamlessly absorbing seasonal spikes in shipping volume.
      `,
    },
    {
        id: "Seven",
        question: "Do You Offer Services For International Logistics?",
        answer: `
        Our robust global network enables us to provide international logistics services with a focus on timely delivery and customs compliance.
      `,
    },


];

const pageHeaderData = {
    title: "Logistics Services & Solutions",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe's logistics support services brought much-needed efficiency to our freight coordination workflows. Their team manages shipment tracking, carrier communication, documentation processing, and exception handling for our entire European distribution network. The reduction in manual errors has been remarkable and our clients regularly comment on improved delivery communication. A reliable and skilled logistics partner.",
        name: "Pieter van den Berg | EuroFreight Logistics B.V.",
        location: "Netherlands",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "We engaged Tech2Globe to support our back-office logistics operations and the results have been outstanding. Their team handles all our shipping documentation, customs data entry, and third-party carrier coordination. Turnaround times on documentation dropped by 60% and costly errors due to incorrect data became virtually non-existent. We highly recommend their logistics services to businesses of any size.",
        name: "Hannah Oduya | AfriShip Cargo Solutions",
        location: "South Africa",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Our cross-border shipping operations required meticulous documentation and coordination. Tech2Globe's logistics support team handled the complexity with ease — managing BOLs, customs invoices, and carrier updates efficiently. They also provided daily shipment status summaries that kept our internal team and clients informed at all times. Their work has raised the overall quality of our logistics operations.",
        name: "Marco Vitali | Italitrans Cargo S.r.l.",
        location: "Italy",
    },
    {
        id: 4,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Managing high volumes of export documentation was creating bottlenecks in our operations. Tech2Globe's dedicated logistics team stepped in and took complete ownership of our documentation workflow. They are accurate, fast, and extremely well-organized. Shipping delays due to documentation errors have fallen to nearly zero. The team also adapts well to regulatory changes, which is crucial in our industry.",
        name: "Mei Lin | AsiaPacific Freight Ltd.",
        location: "Taiwan",
    },
    {
        id: 5,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe supports our logistics operations across the GCC and has done a phenomenal job. Their back-office team handles carrier booking confirmations, shipment exceptions, and customs documentation with professionalism and accuracy. We've been able to expand our logistics capacity without proportionally increasing headcount. The cost savings and operational improvements have exceeded all expectations.",
        name: "Omar Al-Farsi | Gulf Route Trading LLC",
        location: "Oman",
    },
    
];

const portfolioClients = [
    {
        initials: "UK",
        gradient: "#0b2e58",
        client: "UK E-commerce Brand",
        country: "UK",
        project: "Global E-commerce Logistics Optimization",
        desc: "Optimized logistics for UK e-commerce brand managing 250,000+ monthly shipments across 5 warehouses, improving delivery speed and cost efficiency.",
        category: "Multi-Warehouse Fulfillment Management",
        result: "250,000 monthly shipments • 96% on-time delivery",
    },
    
    {
        initials: "HK",
        gradient: "#0b2e58",
        client: "Hong Kong Trading Company",
        country: "HK",
        project: "International Trade Logistics Support",
        desc: "Provided logistics support for Hong Kong trader serving 30+ countries managing customs, shipping coordination, and regulatory compliance efficiently.",
        category: "Cross-Border Trade Logistics",
        result: "30+ countries served • 99.2% customs success",
    },
    
    {
        initials: "IN",
        gradient: "#0b2e58",
        client: "Indian E-commerce Platform",
        country: "India",
        project: "Last-Mile Delivery Coordination Network",
        desc: "Established last-mile delivery network for Indian e-commerce platform across 60 cities coordinating couriers, tracking shipments, and optimizing routes.",
        category: "Urban Delivery Logistics",
        result: "500,000+ monthly deliveries • 94% delivery success",
    },
    
    {
        initials: "DE",
        gradient: "#0b2e58",
        client: "German Manufacturing Company",
        country: "Germany",
        project: "Supply Chain Visibility Platform Management",
        desc: "Managed supply chain visibility for German manufacturer tracking shipments, coordinating suppliers, and resolving logistics exceptions in real time.",
        category: "Supply Chain Operations",
        result: "100,000+ tracked shipments • 99.5% tracking accuracy",
    },
    
    {
        initials: "AU",
        gradient: "#0b2e58",
        client: "Australian Retailer",
        country: "Australia",
        project: "E-commerce Reverse Logistics Program",
        desc: "Established reverse logistics program for Australian retailer handling returns, inspections, refurbishment, and restocking with value recovery optimization.",
        category: "Returns & Reverse Logistics",
        result: "80,000+ annual returns • 95% recovery rate",
    },
];


export default function Logistics() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type":"Question",
                "name":"What industries do you serve?",
                "acceptedAnswer":{
                  "@type":"Answer",
                  "text":"We provide services to a broad range of industries, including but not restricted to technology, manufacturing, healthcare, retail, and e-commerce."
                }
              },
              {
                "@type":"Question",
                "name":"How do you guarantee the security of cargo when it is being transported?",
                "acceptedAnswer":{
                  "@type":"Answer",
                  "text":"To guarantee the security of your goods during transit, we collaborate with reputable carriers and use secure packing and handling procedures."
                }
              },
              {
                "@type":"Question",
                "name":"How can I follow my deliveries?",
                "acceptedAnswer":{
                  "@type":"Answer",
                  "text":"You can track the status and location of your shipments in real-time thanks to our sophisticated tracking system. You can reach our customer service team or use our web portal to access this information."
                }
              },
              {
                "@type":"Question",
                "name":"Can you accommodate varying shipping volumes throughout the year?",
                "acceptedAnswer":{
                  "@type":"Answer",
                  "text":"Absolutely! Our adaptable logistics solutions are created to grow with your company’s demands, seamlessly absorbing seasonal spikes in shipping volume."
                }
              },
              {
                "@type":"Question",
                "name":"Do you offer services for international logistics?",
                "acceptedAnswer":{
                  "@type":"Answer",
                  "text":"Our robust global network enables us to provide international logistics services with a focus on timely delivery and customs compliance."
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
            <Breadcrumb parentName="Services" pageName="Logistics Services" />
            <BrandSection />
            <div className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Logistics Services" imageSrc="/images/services/service-inner/data-management-banner-1.jpg" />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <img src="/images/services/service-inner/logistics-services.jpg" alt="Logistics Services" className={`${Style.LogImg} img-fluid img-responsive`}/>

                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                            <div className={Style.ContentDiv}>
                                <h2>What are the logistics services?</h2>
                                <p>Delays in operations and results can be common incompetencies due to poor <strong>state logistics services</strong>. You can outsource logistic services to us for quicker deliveries and precise paperwork to maintain your competitive edge. It cannot be easy to manage and regulate the movement of services, products, resources, and information from the provider to the end user.</p>
                                <p>At Tech2Globe, we offer <strong>pro logistic services</strong> to various global demographic clients, including logistic <Link href="/call-centre-services" className="text-decoration-underline fw-bold">BPO services</Link>, logistic data entry services, logistic back-office services, and freight billing processing services. We are familiar with our client's requirements, their industry, and all the independent processes they handle. Every task completed by our experts is done quickly and accurately. You can conveniently manage all the extensive or complex logistics-related operations by outsourcing these services, relieving you of all your burdens.</p>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-3">

                                    <div className={Style.ContentDiv}>
                                        <h2> Benefits Of Logistics Services</h2>
                                        <hr />
                                        <p>With more than 14 years of expertise in increasing the performance and scalability standards for numerous firms, Tech2Globe stands as a leading startup consultancy and provider of <strong>pro logistic services</strong>. We work with clients around the world to assist them advance to the next stage of their business development. In addition to many other things, our experts help them build capital investment strategies, improve operations, develop development strategies, and innovate company models. Here’s how you can benefit from our <strong>pro logistic services</strong>.</p>

                                        <div className="row mt-5">

                                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                                <div className="card p-3 shadow-sm mb-3 h-100">

                                                    <div className={Style.Context}>
                                                        <h4>1. Cost-Effectiveness:</h4>
                                                        <p>Our effective logistics solutions are made to cut down on expenses while still providing the best level of service.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                                <div className="card p-3 shadow-sm mb-3 h-100">

                                                    <div className={Style.Context}>
                                                        <h4>2. Customisation:</h4>
                                                        <p>We are aware that every organization has particular needs. In close collaboration with you, our team develops custom logistics plans that support your goals.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                                <div className="card p-3 shadow-sm mb-3 h-100">

                                                    <div className={Style.Context}>
                                                        <h4>3. Technology Integration:</h4>
                                                        <p>We use state-of-the-art technology to optimize logistical procedures, giving you real-time visibility and analytics to help you make smarter choices.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                                <div className="card p-3 shadow-sm mb-3 h-100">

                                                    <div className={Style.Context}>
                                                        <h4>4. Global Reach:</h4>
                                                        <p>Our <strong>logistics services</strong> cover a large geographic area, allowing you to expand your business confidently.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-5">
                        <div className={Style.ContentDiv}>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className={Style.ContentDiv}>
                                    <h2 className="text-danger text-center">Professional Assistance With Our Services Logistics</h2>
                                    <p className="text-center mb-4">As a leading <strong>logistics service provider</strong>, we provide top-notch logistic services that help companies improve operational efficiency and optimize supply chain and effectiveness. Furthermore, thanks to our extensive industry knowledge and devoted team of professionals, we can offer customized logistics solutions specifically designed to match the requirements of each client.</p>


                                    <div className="row" >
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                            <div className="card p-3 shadow-sm mb-3 h-100">
                                                <div className="text-center">
                                                    <Image src="/images/services/service-inner/improves-business-efficiency.svg" width={82} height={82} alt="Freight Bills Processing" />
                                                </div>
                                                <div className="context text-center mt-2">
                                                    <h5>Freight Bills Processing:</h5>
                                                    <p>To extract information from the bill of lading and produce correct freight invoices online in the required formats, Tech2Globe uses a streamlined procedure. We categorize and audit goods bills per rate contracts after matching bills of lading to goods bills.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                            <div className="card p-3 shadow-sm mb-3 h-100">
                                                <div className="text-center">
                                                    <Image src="/images/services/service-inner/Business-Opportunities.svg" width={82} height={82} alt="Inventory and Warehouse Management" />
                                                </div>
                                                <div className="context text-center mt-2">
                                                    <h5>Inventory and Warehouse Management:</h5>
                                                    <p>Our cutting-edge warehouses are outfitted with sophisticated inventory management systems that guarantee precise stock counts, effective order fulfillment, and easy product storage.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                            <div className="card p-3 shadow-sm mb-3 h-100">
                                                <div className="text-center">
                                                    <Image src="/images/services/service-inner/easy-to-use-1.svg" width={82} height={82} alt="Order Fulfillment" />
                                                </div>
                                                <div className="context text-center mt-2">
                                                    <h5>Order Fulfillment:</h5>
                                                    <p>Let us handle the process while you concentrate on expanding your company. We take care of all order processing, selection, packing, and shipping, so you don't have to worry about exceeding your client's expectations.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                            <div className="card p-3 shadow-sm mb-3 h-100">
                                                <div className="text-center">
                                                    <Image src="/images/services/service-inner/seo-friendly.svg" width={82} height={82} alt="Customs Brokerage and Compliance" />
                                                </div>
                                                <div className="context text-center mt-2">
                                                    <h5>Customs Brokerage and Compliance:</h5>
                                                    <p>It cannot be easy to navigate the intricate web of customs laws. Our knowledgeable customs brokerage team guarantees quick processing and adherence to all applicable regulatory requirements, minimizing delays and minimizing fines.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                            <div className="card p-3 shadow-sm mb-3 h-100">
                                                <div className="text-center">
                                                    <Image src="/images/services/service-inner/Business-Opportunities.svg" width={82} height={82} alt="Supply Chain Consulting" />
                                                </div>
                                                <div className="context text-center mt-2">
                                                    <h5>Supply Chain Consulting:</h5>
                                                    <p>Our supply chain professionals examine your current procedures and look for room for improvement. We assist you in creating a supply chain strategy that is more productive and economical using data-driven insights.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                            <div className="card p-3 shadow-sm mb-3 h-100">
                                                <div className="text-center">
                                                    <Image src="/images/services/service-inner/Business-Opportunities.svg" width={82} height={82} alt="E-commerce Logistics" />
                                                </div>
                                                <div className="context text-center mt-2">
                                                    <h5>E-commerce Logistics:</h5>
                                                    <p>We specialize in e-commerce logistics and are familiar with the unique needs of online enterprises. Our specialized solutions take into account the quick movement of goods to keep up with the changing e-commerce environment.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>




                <div className="container">
                    <div className={Style.ContentDiv}>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-5">
                            <h4 className="text-center">Global Logistics Services: Key Points for Optimize Your Supply Chain</h4>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-2 mb-4">
                                    <p className="fw-bold">Order Processing</p>
                                    <ul>
                                        <li>Order Capture And Validation</li>
                                        <li>Inventory Check And Allocation</li>
                                        <li>Credit Card Processing And Fraud Prevention</li>
                                        <li>Communication With Customers</li>
                                        <li>Order Fulfillment</li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-2 mb-4">
                                    <p className="fw-bold">Customer Service</p>
                                    <ul>
                                        <li>Processing your documents</li>
                                        <li>Forwarding freight</li>
                                        <li>Bill of lading</li>
                                        <li>Processing transaction</li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-2 mb-4">
                                    <p className="fw-bold">Sourcing/Procurement</p>
                                    <ul>
                                        <li>Supplier Selection and Management</li>
                                        <li>Sourcing Strategies</li>
                                        <li>Inventory Management</li>
                                        <li>Quality Control</li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mt-2 mb-4">
                                    <p className="fw-bold">Warehousing</p>
                                    <ul>
                                        <li>Management of your inventory</li>
                                        <li>IT services</li>
                                        <li>Processing all payments</li>
                                        <li>Invoicing</li>
                                        <li>Also includes third-party payment services</li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                <div className="container">
                    <div className={Style.ContentDiv}>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3">
                            <h2 className="text-center">Why Outsource States Logistics Services To Tech2Globe Web Solutions?</h2>
                            <p>Our commitment to offering top-notch logistics services makes Tech2Globe Web Solutions the perfect partner for companies wishing to optimize their supply chains, lower costs, and improve customer satisfaction. As a trusted <strong>logistics service provider</strong>, you can rely on us for the expansion and success of your organization with our knowledge, technology-driven solutions, and dedication to client success.</p>
                            <div className="row align-items-center">
                                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mt-3 mb-3">
                                    <h5>Experience and Expertise:</h5>
                                    <p>
                                        Tech2Globe Web Solutions has years of experience in the logistics sector and is skilled at addressing a variety of logistical difficulties.</p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 mt-3 mb-3">
                                    <img src="/images/services/service-inner/personalized-service.jpg" className="img-fluid img-responive" alt="Experience and Expertise" />
                                </div>
                                <hr />
                                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 mt-3 mb-3">
                                    <img src="/images/services/service-inner/listen-closely.jpg" className="img-fluid img-responive" alt="End-to-End Solutions" />
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mt-3 mb-3">
                                    <h5>End-to-End Solutions:</h5>
                                    <p>
                                        To make the logistics management process easier for you, we provide a full range of logistics services that cover every stage of the supply chain.</p>
                                </div>

                                <hr />
                                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mt-3 mb-3">
                                    <h5>Client-Centric Approach:</h5>
                                    <p>
                                        By emphasizing the demands of our clients, we are able to develop solutions that properly match their corporate goals.</p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 mt-3 mb-3">
                                    <img src="/images/services/service-inner/call-cente-services.jpg" className="img-fluid img-responive" alt="Client-Centric Approach" />
                                </div>
                                <hr />
                                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 mt-3 mb-3">
                                    <img src="/images/services/service-inner/working-hours.jpg" className="img-fluid img-responive" alt="Quality Control" />
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mt-3 mb-3">
                                    <h5>Quality Control:</h5>
                                    <p>
                                        We are dedicated to providing the best service possible, making sure that your shipments are handled with the utmost care.</p>
                                </div>

                                <hr />
                                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mt-3 mb-3">
                                    <h5>Innovative Solutions:</h5>
                                    <p>
                                        We continuously work to innovate and stay ahead in the quickly changing logistics industry, giving you the most up-to-date solutions for your logistics needs.</p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 mt-3 mb-3">
                                    <img src="/images/services/service-inner/Innovative-Solutions-tiny.jpg" className="img-fluid img-responive" alt="Innovative Solutions" />
                                </div>
                                <hr />
                                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 mt-3 mb-3">
                                    <img src="/images/services/service-inner/Transparency-and-Communication-tiny.jpg" className="img-fluid img-responive" alt="Transparency and Communication" />
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 mt-3 mb-3">
                                    <h5>Transparency and Communication:</h5>
                                    <p>
                                        You are always informed of the progress of your shipments thanks to our open communication channels, which also provide you control over your logistics procedures and peace of mind.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div >

            <ClientPortfolio clients={portfolioClients} />
           
                <ClientSlider testimonials={testimonials} />
            
            <FaqSection faqs={faqs} />

        </>
    )
}
