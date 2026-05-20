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
import { FaAngleRight, FaBroom, FaCircleNotch, FaCrop, FaDesktop, FaLaptop, FaNewspaper, FaSmile, FaStar, FaTable } from "react-icons/fa";


export const metadata = {
    title: "Amazon Transparency Program | Transparency Program Amazon",

    description:
        "Ensure trust and authenticity on Amazon with Tech2Globe’s expert assistance in the Transparency Program. Safeguard your brand with our Amazon Transparency Program services.",

    keywords: [
        "Amazon Virtual Assistance",
        "Amazon Virtual Assistance Services",
        " Outsourcing Your Amazon Virtual Assistant",
        " Amazon VA services",
    ],

    alternates: {
        canonical: "https://www.tech2globe.com/amazon-transparency-program",
    },

    openGraph: {
        title: "Amazon Transparency Program | Transparency Program Amazon",
        description:
            "Ensure trust and authenticity on Amazon with Tech2Globe’s expert assistance in the Transparency Program. Safeguard your brand with our Amazon Transparency Program services.",
        url: "https://www.tech2globe.com/amazon-transparency-program",
        siteName: "Tech2Globe web Solutions LLP",
        type: "website",
    },

    twitter: {
        card: "summary",
        title: "Amazon Transparency Program | Transparency Program Amazon",
        description:
            "Ensure trust and authenticity on Amazon with Tech2Globe’s expert assistance in the Transparency Program. Safeguard your brand with our Amazon Transparency Program services.",
    },
};


const faqs = [
    {
        id: "One",
        question: "How fast can I get my labels?",
        answer: `
        You can get the print and shipment within 48 business hours. For your convenience, fast service is also available.
      `,
    },
    {
        id: "Two",
        question: "Can any retailer use Transparency labels?",
        answer: `
        Yes, new brand owners or ecommerce sites need to register for transparency for their brand at Amazon.
      `,
    },
    {
        id: "Three",
        question: "How much do labels cost?",
        answer: `
        Labels cost $10.25 – $18.25 per thousand labels, depending on the client's requirement. If you want to customize your transparency program, contact us.
      `,
    },
    {
        id: "Four",
        question: "Where is Transparency available?",
        answer: `
        Transparency is currently available in the United States, Canada, Germany, France, Italy, Spain, the United Kingdom, Japan, Australia, and India. Customers can use the Transparency app to verify the authenticity of products enrolled in Transparency anywhere Transparency has launched, as well as the Amazon Shopping app in the United States, Canada, Germany, France, Italy, Spain, the United Kingdom, Japan, and Australia.
      `,
    },

];

const pageHeaderData = {
    title: "Amazon Transparency Program",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};

export default function AmazonTransparencyProgram() {


    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How fast can I get my labels?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can get the print and shipment within 48 business hours. For your convenience, fast service is also available."
                }
            },
            {
                "@type": "Question",
                "name": "How much do labels cost?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Labels cost $10.25 – $18.25 per thousand labels, depending on the client’s requirement. If you want to customize your transparency program, contact us."
                }
            },
            {
                "@type": "Question",
                "name": "Can any retailer use Transparency labels?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, new brand owners or ecommerce sites need to register for transparency for their brand at Amazon."
                }
            },
            {
                "@type": "Question",
                "name": "Where is Transparency available?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Transparency is currently available in the United States, Canada, Germany, France, Italy, Spain, the United Kingdom, Japan, Australia, and India. Customers can use the Transparency app to verify the authenticity of products enrolled in Transparency anywhere Transparency has launched, as well as the Amazon Shopping app in the United States, Canada, Germany, France, Italy, Spain, the United Kingdom, Japan, and Australia."
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
            <Breadcrumb parentName="Services" pageName="Amazon Transparency Program" />
            <BrandSection />
            <div className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                            <div className={Style.ContentDiv}>
                                <h2 className="text-center">Start With Amazon Transparency Program Today.</h2>
                                <hr />
                                <p className="text-center pb-5">Your sales can get impacted if your customers leave negative reviews for the products. One fake review could make your Amazon selling account go down in seconds. Reviews authenticate your company’s website and sell without competition from counterfeiters. Third-party sellers and brand owners are eligible for the program. For example, if a third-party seller attempts to "hijack" a product by selling counterfeit items, their products will be blocklisted and not delivered to the customer. Use <strong>Amazon Transparency Program</strong> to improve your product SEO and organic ranking if you want your items to appear at the top of Amazon SERPs so that buyers don't confuse your brand with a counterfeited listing.</p>

                            </div>

                        </div>
                    </div>
                </div>

                <div className={Style.SectionYellow}>
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                            <div className={Style.ContentDiv}>
                                <h4 className="text-center text-white mt-4">Is Amazon Transparency Right For Your Products?</h4>
                                <div className="row mt-5">

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                        <div className="card border-0 p-3 shadow-sm mb-3 rounded-4 h-100">
                                            <div className="d-flex align-items-start">
                                                <div className={Style.TextLeft}>
                                                    <FaTable size={50} />
                                                </div>
                                                <div className={Style.Context}>
                                                    <h3>Differentiate Your Products</h3>
                                                    <p className="mb-0">Amazon transparency eliminates those products which are misleading your website's brand vision.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                        <div className="card border-0 p-3 shadow-sm mb-3 rounded-4 h-100">
                                            <div className="d-flex align-items-start">
                                                <div className={Style.TextLeft}>
                                                    <FaCircleNotch size={50} />
                                                </div>
                                                <div className={Style.Context}>
                                                    <h3>Minimize The Returns</h3>
                                                    <p className="mb-0">Brands always work to reduce the rate of refunds for counterfeit products.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                        <div className="card border-0 p-3 shadow-sm mb-3 rounded-4 h-100">
                                            <div className="d-flex align-items-start">
                                                <div className={Style.TextLeft}>
                                                    <FaStar size={50} />
                                                </div>
                                                <div className={Style.Context}>
                                                    <h3>Negative Reviews</h3>
                                                    <p className="mb-0">Always leave positive reviews for your product to ensure every customer is buying online.</p>
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
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-5 mb-5">
                        <div className={Style.ContentDiv}>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className={Style.ContentDiv}>
                                    <h4 className="text-center text-danger mb-5">Why partner with Tech4Globe for
                                        the amazon transparency program?</h4>

                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                            <div className={`${Style.ImageCard} mb-3 h-100`}>
                                                <img src="/images/services/service-inner/authenticity-transparnecy.png" alt="Authenticity" className="img-fluid img-responsive mb-3" />
                                                <h6 className="text-center fw-bold text-danger">Authenticity</h6>
                                                <p className="text-center">We'll ensure that all your units are authentic & shipped to the customers safely with a valid transparency code.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                            <div className={`${Style.ImageCard} mb-3 h-100`}>
                                                <img src="/images/services/service-inner/handshake-1.png" alt="Engaging Customers" className="img-fluid img-responsive mb-3" width={'100px'} />
                                                <h6 className="text-center fw-bold text-danger">Engaging Customers</h6>
                                                <p className="text-center">We connect with the post-purchase decisions of customers with an Amazon shopping app that allows them to scan Amazon transparency codes and access authentic content.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                            <div className={`${Style.ImageCard} mb-3 h-100`}>
                                                <img src="/images/services/service-inner/supply-optimization-tarnsparncy.png" alt="Supply Chain Optimization" className="img-fluid img-responsive mb-3" />
                                                <h6 className="text-center fw-bold text-danger">Supply Chain Optimization</h6>
                                                <p className="text-center">Tech2Globe has a team of experts excelling at the Amazon transparency program to help you gain additional crucial insights at the batch or lot level to get solutions with minimal disruption.</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={Style.SectionYellow}>
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-3 pb-3">
                            <div className={Style.ContentDiv}>
                                <h4 className="text-white text-center mb-5 mt-3"> Amazon Transparency Program Process</h4>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={`${Style.ImageCard} mb-3 h-100`}>
                                            <img src="/images/services/service-inner/choosing-products.png" alt="Choosing The Products" className="img-fluid img-responsive mb-3" width={'100px'} />
                                            <h6 className="text-center fw-bold text-danger">Choosing The Products</h6>
                                            <p className="text-center">Select the items in which you want to enroll.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={`${Style.ImageCard} mb-3 h-100`}>
                                            <img src="/images/services/service-inner/applying-code.png" alt="Applying Code" className="img-fluid img-responsive mb-3" width={'100px'} />
                                            <h6 className="text-center fw-bold text-danger">Applying Code</h6>
                                            <p className="text-center">Transparency codes must be applied to your selected items.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={`${Style.ImageCard} mb-3 h-100`}>
                                            <img src="/images/services/service-inner/Shipping.png" alt="Shipping" className="img-fluid img-responsive mb-3" width={'100px'} />
                                            <h6 className="text-center fw-bold text-danger">Shipping</h6>
                                            <p className="text-center">Only genuine goods are shipped after amazon transparency codes are scanned.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={`${Style.ImageCard} mb-3 h-100`}>
                                            <img src="/images/services/service-inner/authenticity-transparnecy.png" alt="Authenticity" className="img-fluid img-responsive mb-3" width={'100px'} />
                                            <h6 className="text-center fw-bold text-danger">Authenticity</h6>
                                            <p className="text-center">Customers can scan to prove the legitimacy of a product regardless of where they purchased it.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={`${Style.ImageCard} mb-3 h-100`}>
                                            <img src="/images/services/service-inner/Interaction.png" alt="Interaction" className="img-fluid img-responsive mb-3" width={'100px'} />
                                            <h6 className="text-center fw-bold text-danger">Interaction</h6>
                                            <p className="text-center">Use product data, photos, videos, promotions, and other media to interact with customers.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





            </div >

            <FaqSection faqs={faqs} />

        </>
    )
}