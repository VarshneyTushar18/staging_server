import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import Image from "next/image";
import Link from "next/link";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaAddressBook, FaAddressCard, FaAngleRight, FaCloud, FaDesktop, FaFileAlt, FaFilePowerpoint, FaHeartbeat, FaHome, FaIndustry, FaRegAddressCard, FaSearch, FaShoppingCart, FaUsers } from "react-icons/fa";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";


export const metadata = {
    title:
        "Strategic Digital Marketing Services - Tech2Globe",

    description:
        "Elevate your brand with our comprehensive digital marketing services. Drive traffic and conversions. Contact us for a tailored strategy today!",

    keywords: [
        "digital marketing services",
        "Digital marketing service",
        "digital marketing agency services",
        "digital marketing services near me",
        "best digital marketing services",
        "Digital marketing services company",
        "digital marketing consulting services",
        "digital marketing service provider",
        "digital marketing services in usa",
        "digital marketing services usa",
        "digital marketing services agency",
        "professional digital marketing services",
    ],

    alternates: {
        canonical: "https://www.tech2globe.com/digital-marketing-services",
    },

    openGraph: {
        title:
            "Digital Marketing Services | Digital Marketing Services India",
        description:
            "Get 100% genuine results with Tech2Globe. We offer Digital marketing services at very cost-effective rates for all types of business. Grow your business faster",
        url: "https://www.tech2globe.com/digital-marketing-services",
        type: "website",
    },

    twitter: {
        card: "summary",
        title:
            "Digital Marketing services | Digital Marketing services India",
        description:
            "Get 100% genuine results with Tech2Globe. We offer Digital marketing services at very cost-effective rates for all types of business. Grow your business faster",
    },
};

const faqs = [
    {
        id: "One",
        question: "What Makes Your Digital Marketing Agency A Trustworthy One?",
        answer: `
        From the information above, you've probably already deduced that we are knowledgeable in digital marketing. Due to our considerable experience in the area over the years and our expertise as an online marketing agency, we are highly competent in these abilities.
      `,
    },
    {
        id: "Two",
        question: "How Do You Assist Clients In Generating Leads?",
        answer: `
        Many organizations seek leads so that their marketing team can connect with potential customers. This is especially true for business to business companies, businesses that market expensive goods, businesses that use product demonstrations.
      `,
    },
    {
        id: "Three",
        question: " What Makes Your Company The Best Option In The USA?",
        answer: `
        Tech2Globe, an online marketing business, has built a strong reputation as a digital marketing agency in the USA over the course of its 14 years in the online marketing sector. Being the top digital marketing agency, we have gained the trust of our clients because we put their interests first. Before starting any project involving digital marketing, we carefully understand the client's company.
      `,
    },
    {
        id: "Four",
        question: "How Do You Choose Keywords For A Client's Page?",
        answer: `
        To select keywords, our SEO specialists employ a range of techniques. Additionally, we might make recommendations based on the keywords that a client wants to rank for.
      `,
    },


];

const pageHeaderData = {
    title: "Digital Marketing Services",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};



const caseStudies = [
    {
        "id": 1,
        "title": "Product Visibility & Drive Sales 0.1",
        "image": "/images/services/service-inner/untitled-design-20.png",
        "description": "The client has been in the lighting business since 2011, specializing...",
        "docLink": "https://tech2globe.com/casestudies-docs1/Case Study 2 - Sales Increase in different categories-converted.pdf"
    },
    {
        "id": 2,
        "title": "EBC and Storefront",
        "image": "/images/services/service-inner/ebca.png",
        "description": "Client deals in Health & Household items and Pet Supplies products on Amazon and wants...",
        "docLink": "https://tech2globe.com/casestudies-docs1/Case Study 3 - EBC and Storefront-converted.pdf"
    },
    {
        "id": 3,
        "title": "Amazon PPC",
        "image": "/images/services/service-inner/amazon-ppc.png",
        "description": "Clients came to us with a range of Amazon PPC management difficulties....",
        "docLink": "https://tech2globe.com/casestudies-docs1/Amazon PPC-converted.pdf"
    },
    {
        "id": 4,
        "title": "Product Visibility & Drive Sales",
        "image": "/images/services/service-inner/untitled-design-18.png",
        "description": "Client has been in the business of selling fine grooming products for over 15 years......",
        "docLink": "https://tech2globe.com/casestudies-docs1/Case Study 1 - Sales Increase in different categories-converted.pdf"
    },
    {
        "id": 5,
        "title": "e-Commerce Store for Luxury Goods",
        "image": "/images/services/service-inner/e-commerce-store-for-luxury-goods.png",
        "description": "It is the ultimate luxury fashion destination for the distribution and retail of Italian, French…",
        "docLink": "https://tech2globe.com/casestudies-docs1/E-Commerce Store for Luxury Goods-converted.pdf"
    },
    {
        "id": 6,
        "title": "Amazon Sale Boost",
        "image": "/images/services/service-inner/amazon-sale-boost.jpg",
        "description": "Find out the most important areas where our team required utmost attention to showcase the work from day one …",
        "docLink": "https://tech2globe.com/casestudies-docs1/amazon-india-case-study.pdf"
    },
    {
        "id": 7,
        "title": "About Drop shipping",
        "image": "/images/services/service-inner/about-drop-shipping.jpg",
        "description": "Drop shipping is an e-retail term where someone facilitates the selling and delivery of an online product without …",
        "docLink": "https://tech2globe.com/casestudies-docs1/Case-Study-Drop-Shipping.pdf"
    },
    {
        "id": 8,
        "title": "Migration from Sooq to Amazon.ae",
        "image": "/images/services/service-inner/migration-from-sooq-to-amazon-ae.jpg",
        "description": "Forgiving the best solution to our client and comprehensive support is our specialty which we successfully …",
        "docLink": "https://tech2globe.com/casestudies-docs1/Migration-from-Sooq-to-AmazonAE.pdf"
    },
    {
        "id": 9,
        "title": "e-Commerce Multivendor Store 1.0",
        "image": "/images/services/service-inner/e-commerce-multivendor-store-1-0.jpg",
        "description": "Our client approached us for Ecommerce services that included multi-vendor customized solutions along with …",
        "docLink": "https://tech2globe.com/casestudies-docs1/E-commerce version upgrade (1).pdf"
    },
    {
        "id": 10,
        "title": "e-Commerce Store Version Upgrade",
        "image": "/images/services/service-inner/e-commerce-store-version-upgrade.jpg",
        "description": "The previous version had issues with accepting payments via credit cards, so one of the improvement areas was to set …",
        "docLink": "https://tech2globe.com/casestudies-docs/E-commerce version upgrade.pdf"
    },
    {
        "id": 11,
        "title": "Promotion of 2 x Shopify Stores",
        "image": "/images/services/service-inner/promotion-of-2-x-shopify-stores.png",
        "description": "In 2.5 periods of month projects handling, we’ve generated more than 6,000 Facebook Page Followers on “Fashion & Cosmetic”…",
        "docLink": "https://tech2globe.com/casestudies-docs1/Promotion of 2 x Shopify Stores-converted.pdf"
    }
]


const portfolio = [
    {
        title: "CATALOGUING",
        items: [
            {
                title: "Indiasoft",
                link: "https://indiasoft.org/",
                img: "/images/services/service-inner/portfolio/indiasoft.png",
            },
            {
                title: "Creative Arcades",
                link: "https://creative-arcades.com/",
                img: "/images/services/service-inner/portfolio/creative-arcades.png",
            },
            {
                title: "Sol Strong LLC",
                link: "https://solstrongus.com/",
                img: "/images/services/service-inner/portfolio/sol-strong-llc.png",
            },
            {
                title: "SavoyActive",
                link: "https://savoyactive.com/",
                img: "/images/services/service-inner/portfolio/savoyactive.jpg",
            },
            {
                title: "CuddleBug",
                link: "https://www.cuddlebug.co/",
                img: "/images/services/service-inner/portfolio/cuddlebug.jpg",
            },
            {
                title: "Inseason Jewelry",
                link: "https://www.inseasonjewelry.com/",
                img: "/images/services/service-inner/portfolio/inseason-jewelry.jpg",
            },
        ],
    },
]


export default function DigitalMarketing() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How can Tech2Globe Web Solutions improve the efficiency of my claims processing procedures?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To streamline your claims processing operations, we use cutting-edge technologies, efficient workflows, and our extensive experience. Our services contribute to increased productivity, quicker turnaround times, more accuracy, and cost savings."
                }
            },
            {
                "@type": "Question",
                "name": "What about the security of my data?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We place a high priority on data security and to guarantee the confidentiality and integrity of your data, we have put in place strong security measures. Our systems abide by industry standards and follow pertinent laws."
                }
            },
            {
                "@type": "Question",
                "name": "Can you customise your services to my particular business needs?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Definitely! We are aware that every insurance provider has different requirements. Our adaptable services may be tailored to fit your unique needs, procedures, and systems."
                }
            },
            {
                "@type": "Question",
                "name": "How can I monitor the status of claims that you are handling?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide regular information and updates on the progress of processing claims. Our reliable management and documentation technologies provide simple tracking, guaranteeing transparency and visibility throughout the procedure."
                }
            },
            {
                "@type": "Question",
                "name": "What distinguishes Tech2Globe from other companies that offer claims processing services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "What sets us apart from other providers is our in-depth market knowledge, advanced technology capabilities, and committed staff. Additionally, we offer data protection, and client-oriented strategies to provide our customers with outstanding service and value."
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
            <Breadcrumb parentName="Services" pageName="Digital Marketing Services" />
            <BrandSection />
            <div className={Style.PageContent}>
                <div className="container pt-3 pb-5">
                    <div className="row">
                        <h2 className="text-danger text-center">Awards And Achievements</h2>
                        <hr />

                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 mb-4">
                            <div className="services-small-item">
                                <Image src="/images/services/service-inner/clientlogo/cer-1.png" alt="DMCA" width={145} height={73} className="img-fluid img-responsive" />
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 mb-4">
                            <div className="services-small-item">
                                <Image src="/images/services/service-inner/clientlogo/cer-2.png" alt="Hubspot" width={145} height={73} className="img-fluid img-responsive" />
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 mb-4">
                            <div className="services-small-item">
                                <Image src="/images/services/service-inner/clientlogo/cer-3.png" alt="Clutch" width={145} height={73} className="img-fluid img-responsive" />
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 mb-4">
                            <div className="services-small-item">
                                <Image src="/images/services/service-inner/clientlogo/cer-7.png" alt="ISO" width={145} height={73} className="img-fluid img-responsive" />
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 mb-4">
                            <div className="services-small-item">
                                <Image src="/images/services/service-inner/clientlogo/cer-5.png" alt="Red Herring" width={145} height={73} className="img-fluid img-responsive" />
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 mb-4">
                            <div className="services-small-item">
                                <Image src="/images/services/service-inner/clientlogo/cer-6.png" alt="Seo" width={145} height={73} className="img-fluid img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                            <div className={Style.ContentDiv}>
                                <h2 className="text-danger text-center">About Our Digital Marketing Agency In USA</h2>
                                <hr />
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 mt-3">

                                        <p>Tech2Globe has been a skilled digital marketing agency that has allowed different businesses achieve their online marketing aims for over 14 years. We provide various services like web design and development, pay-per-click (PPC) advertising, <Link href="/social-media-marketing" className="text-decoration-underline">social media marketing</Link>, email marketing, content marketing and search engine optimization (SEO).</p>
                                        <p>With a team of seasoned professionals, Tech2Globe works to provide clients with creative and effective digital marketing services in the USA that help them increase their online presence and connect with their target audience. The company uses state-of-the-art equipment and software to create tailored digital marketing plans that satisfy each client's unique needs.</p>

                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-3">
                                        <img src="/images/services/service-inner/dm-1.1.jpg" className="img-fluid img-responsive" alt="dm1" />
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-3">
                                        <img src="/images/services/service-inner/dm-2.2.jpg" className="img-fluid img-responsive" alt="dm2" />
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 mt-3">

                                        <p>Tech2Globe’s focus on data-driven marketing is one of the chief characteristics. We use reporting and analytics tools to track campaign effectiveness and adjust tactics as needed in order to secure optimal results. In this way, the company ensures that customers get measurable results and a good return on their investment.</p>
                                        <p>Healthcare, e-commerce, education, and finance are just some of the industries in which Tech2Globe has partnered with a wide range of clients. The firm is famous for providing high-quality services and guarantees lifelong associations with customers. Because it has extensive knowledge in the digital marketing arena and adheres to quality in all its processes, Tech2Globe remains a reputable partner for firms wishing to raise online visibility and revenue creation, being among the best digital marketers in town.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Style.SectionRed}>
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-3 pb-3">
                            <div className={Style.ContentDiv}>
                                <h4 className="text-center text-white">Contact Our Company For Digital Marketing Services</h4>
                                <h4 className="text-center text-white">Call us at <Link href="tel:+15168585840">+1-516-858-5840</Link></h4>
                                <div className="text-center pt-3">
                                    <Link href="/contact-us" className="btn btn-default bg-dark text-white">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-3">
                    <div className={Style.ContentDiv}>
                        <div className="container">
                            <h2 className="text-danger text-center">What Will You Get By Choosing Us?</h2>
                            <p className="text-center">As the best marketing agency in the world, we offer a range of digital marketing services in USA to help you reach your target audience, from content marketing to link building.</p>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4">
                                    <div className="card bg-light p-3 rounded card h-100">
                                        <div className="text-center">
                                            <FaSearch style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5 className="text-danger">SEO</h5>
                                            <p>To optimize your website for search engines, you can use our group of professionals to spot and fix any hiccups that may be blocking your path. You will get a complete report on every problem noted on your website.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4">
                                    <div className="card bg-light p-3 rounded card h-100">
                                        <div className="text-center">
                                            <FaCloud style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5 className="text-danger">PPC</h5>
                                            <p>We have Google Adwords certified professionals in the team who can help you manage different kinds of PPC campaigns like Facebook Ads and Google ads. We are also able to handle Instagram ads, dynamic remarketing, and other forms of PPC ads.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4">
                                    <div className="card bg-light p-3 rounded card h-100">
                                        <div className="text-center">
                                            <FaFileAlt style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5 className="text-danger">Content</h5>
                                            <p>Tech2Globe is the best digital marketing company in the USA; we make tailored content to meet specific needs and goals, which intends to engage and inform the target audience. The content we make has information, entertainment, and an engagement nature that calls upon the readers’ action.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4">
                                    <div className="card bg-light p-3 rounded card h-100">
                                        <div className="text-center">
                                            <FaDesktop style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5 className="text-danger">SMM</h5>
                                            <p>We provide a range of social media management services as a top digital marketing company in the USA to help clients with this, including developing and implementing social media campaigns, maintaining online reputation, and assessing the outcomes of their social media activity.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4">
                                    <div className="card bg-light p-3 rounded card h-100">
                                        <div className="text-center">
                                            <FaUsers style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5 className="text-danger">Online Reputation</h5>
                                            <p>Tech2Globe is a leading online reputation management and digital marketing company in the USA. We have been providing the best results and value for years. Our team of experts has the experience and knowledge to help you protect your online reputation.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4">
                                    <div className="card bg-light p-3 rounded card h-100">
                                        <div className="text-center">
                                            <FaDesktop style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5 className="text-danger">Influencer Marketing</h5>
                                            <p>With years of experience and an award-winning team of digital marketing specialists, our <Link href="/influencer-marketing-package" className="text-decoration-underline">influencer marketing services</Link> offer your company unprecedented access to technology and talent. Learn more about the revolutionary features of our influencer marketing packages by connecting with our experts.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Style.SectionBlue}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-3 pb-3">
                                <div className={Style.ContentDiv}>
                                    <h4 className="text-center text-white">Digital Marketing Packages</h4>
                                    <hr />
                                    <p className="text-center text-white">Our services can help your business to engage more traffic on your eCommerce. Effective structure and great content is the key to unlock your business growth. New solutions helps to get the higher rankings and enhance the visibility in more possible ways.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <h5 className="text-white">Influencer Marketing Packages</h5>
                                <ul className="text-white">
                                    <li>$ 299 /mo</li>
                                    <li>50GB Disk Space</li>
                                    <li>50 Email Accounts</li>
                                    <li>50GB Monthly Bandwidth</li>
                                    <li>10 Subdomains</li>
                                    <li>15 Domains</li>
                                </ul>
                                <Link href="/influencer-marketing-package" className="btn btn-default bg-dark text-white">Click Here</Link>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <h5 className="text-white">Seo Packages<br />&nbsp;</h5>
                                <ul className="text-white">
                                    <li>$ 399 /mo</li>
                                    <li>60GB Disk Space</li>
                                    <li>60 Email Accounts</li>
                                    <li>60GB Monthly Bandwidth</li>
                                    <li>15 Subdomains</li>
                                    <li>20 Domains</li>
                                </ul>
                                <Link href="/seo-packages" className="btn btn-default bg-dark text-white">Click Here</Link>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <h5 className="text-white">Social Media Marketing Packages</h5>
                                <ul className="text-white">
                                    <li>$ 399 /mo</li>
                                    <li>70GB Disk Space</li>
                                    <li>70 Email Accounts</li>
                                    <li>70GB Monthly Bandwidth</li>
                                    <li>20 Subdomains</li>
                                    <li>25 Domains</li>
                                </ul>
                                <Link href="/social-media-marketing-packages" className="btn btn-default bg-dark text-white">Click Here</Link>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <h5 className="text-white">PPC Packages<br />&nbsp;</h5>
                                <ul className="text-white">
                                    <li>$ 499 /mo</li>
                                    <li>80GB Disk Space</li>
                                    <li>80 Email Accounts</li>
                                    <li>80GB Monthly Bandwidth</li>
                                    <li>25 Subdomains</li>
                                    <li>30 Domains</li>
                                </ul>
                                <Link href="/ppc-packages" className="btn btn-default bg-dark text-white">Click Here</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Style.ContentDiv}>
                    <div className="container pt-5 pb-3">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-3">
                                <img src="/images/services/service-inner/dm-3.3.jpg" className="img-fluid img-responsive" alt="dm2" />
                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 mt-3">
                                <h3 className="text-danger">Unleash Your Business Potential with the Premier Digital Marketing Agency in the USA!</h3>
                                <hr />
                                <p>Our digital marketing agency is driven, imaginative, and willing to take chances that will eventually be profitable for our clients. We work hard to develop cutting-edge solutions that will assist our clients in achieving their objectives. We are constantly seeking fresh approaches to enhance our offerings and beat out the competition. We are passionate about what we do and take great satisfaction in being able to offer our clients the best solutions. We are innovative and willing to take chances for our clients. We constantly work to stay on the cutting edge and are willing to learn and develop.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Style.SectionRed}>
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-3 pb-3">
                            <div className={Style.ContentDiv}>
                                <h4 className="text-center text-white">Get The Perfect SEO Strategy For Your Business!</h4>
                                <h4 className="text-center text-white">Call us at <Link href="tel:+15168585840">+1-516-858-5840</Link></h4>
                                <div className="text-center pt-3">
                                    <Link href="/contact-us" className="btn btn-default bg-dark text-white">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-3">
                    <div className={Style.ContentDiv}>
                        <div className="container">
                            <h2 className="text-danger text-center">Unlocking Your Business Potential</h2>
                            <hr />
                            <p className="text-center">Selecting a digital marketing company for your business can require a sizable investment, but it can also be one that pays off over time. The following are some justifications for hiring us for digital marketing services for your company:</p>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow-sm mb-3 h-100">
                                        <div className="text-center">
                                            <img src="/images/services/service-inner/digital-1.jpg" className="img-fluid img-responsive" alt="Experience And Expertise" />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5><Link href="/seo-services">Experience And Expertise</Link></h5>
                                            <p>To optimize your website for search engines, you can use our group of professionals to spot and fix any hiccups that may be blocking your path. You will get a complete report on every problem noted on your website.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow-sm mb-3 h-100">
                                        <div className="text-center">
                                            <img src="/images/services/service-inner/digital-2.jpg" className="img-fluid img-responsive" alt="Cost-Effective" />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5><Link href="/ppc-services">Cost-Effective</Link></h5>
                                            <p>While it would seem like a smart idea to hire an internal marketing staff, doing so might be pricey. Along with paying for salaries, benefits, and overhead expenses, you also need to spend money on pricey marketing equipment and software.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow-sm mb-3 h-100">
                                        <div className="text-center">
                                            <img src="/images/services/service-inner/digital-3.jpg" className="img-fluid img-responsive" alt="Focus On Your Core Business Functions" />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5><Link href="/content-marketing-services">Focus On Your Core Business Functions</Link></h5>
                                            <p>As a business owner, you value your time and resources. You may focus on your core business operations, including product development and customer support, by outsourcing your marketing activities to a digital marketing company.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow-sm mb-3 h-100">
                                        <div className="text-center">
                                            <img src="/images/services/service-inner/digital-4.jpg" className="img-fluid img-responsive" alt="Experience And Expertise" />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5><Link href="/seo-services">Results That Are Measurable</Link></h5>
                                            <p>One of the main benefits of partnering with a top digital marketing agency is the opportunity to track outcomes. Our digital marketing agency tracks the effectiveness of your marketing activities using analytics and reporting tools and sends you regular updates.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow-sm mb-3 h-100">
                                        <div className="text-center">
                                            <img src="/images/services/service-inner/digital-5.jpg" className="img-fluid img-responsive" alt="Flexibility" />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5><Link href="/seo-services">Flexibility</Link></h5>
                                            <p>Our digital marketing agency in USA can give you the freedom to scale up or down your marketing efforts as your company's demands change. It is indeed sure that Tech2Globe can assist you in stepping up your marketing initiatives to reach your target audience.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow-sm mb-3 h-100">
                                        <div className="text-center">
                                            <img src="/images/services/service-inner/digital-6.jpg" className="img-fluid img-responsive" alt="Full-service digital marketing agency" />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5><Link href="/seo-services">Full-service digital marketing agency</Link></h5>
                                            <p>We would like to say that hiring us as your full-service digital marketing agency to handle your company's outsourcing needs will be the best as well as wise financial decision you might ever make.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Style.SectionRed}>
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-3 pb-3">
                            <div className={Style.ContentDiv}>
                                <h4 className="text-center text-white">Grow Your Business Online With Confidence!</h4>
                                <h4 className="text-center text-white">Call us at <Link href="tel:+15168585840">+1-516-858-5840</Link></h4>
                                <div className="text-center pt-3">
                                    <Link href="/contact-us" className="btn btn-default bg-dark text-white">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-3">
                    <div className={Style.ContentDiv}>
                        <div className="container">
                            <h3 className="text-danger text-center">What Makes Tech2Globe USA Your Agency for Digital Marketing?</h3>
                            <hr />
                            <p className="text-center">We are passionate, creative, and eager to take risks that will ultimately benefit our clients.</p>
                            <p className="text-center">We strive to create innovative solutions that will help our clients reach their goals. We are always looking for new ways to improve our services and stay ahead of the competition. We are passionate about our work and take pride in our ability to provide our clients with the best possible solutions. We are creative and take risks that will ultimately benefit our clients. We are eager to learn and grow, and strive to stay ahead of the curve.</p>
                            <br />
                            <iframe width="100%" height="550" src="https://www.youtube.com/embed/Xz5TzJWZ7h8" title="Gear Up Your Business By Digital Marketing Services With Tech2Globe | Best Digital Marketing Agency" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-3">
                    <div className={Style.ContentDiv}>
                        <div className="container">
                            <h2 className="text-danger text-center">The Sectors Tech2Globe Serve To The Clients</h2>
                            <hr />
                            <p className="text-center">For more than 14 years, we have successfully maintained the top rank in US digital marketing, with results that have been proven in a wide range of industries! Our digital marketing company serves the following sectors:</p>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow-sm mb-3 h-100">
                                        <div className="text-center">
                                            <FaHeartbeat style={{ fontSize: "30px" }} className="text-danger" />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5>Healthcare</h5>
                                            <p>Tech2Globe is your one-stop shop for everything related to healthcare marketing. We provide a comprehensive range of services as the top digital marketing agency, including website design, SEO, <Link href="/content-marketing" className="text-decoration-underline">content marketing</Link>, social media marketing, email marketing, and others.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow-sm mb-3 h-100">
                                        <div className="text-center">
                                            <FaShoppingCart style={{ fontSize: "30px" }} className="text-danger" />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5>Ecommerce</h5>
                                            <p>Customer behaviour, technology integration, and competitive pressure all have an impact on how effectively your online store performs by providing exceptional user experiences for your digital marketing services across all touchpoints where clients are likely to contact you.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow-sm mb-3 h-100">
                                        <div className="text-center">
                                            <FaHome style={{ fontSize: "30px" }} className="text-danger" />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5>Real Estate</h5>
                                            <p>Our results-driven web marketing agency specializes in lead creation for both B2B and B2C companies. Our digital marketing company has assisted more than 400 real estate clients. We employ a number of strategies, including SEO, PPC, content marketing, email marketing, and social media, to produce leads.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow-sm mb-3 h-100">
                                        <div className="text-center">
                                            <FaIndustry style={{ fontSize: "30px" }} className="text-danger" />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5>Food Industry</h5>
                                            <p>Tech2Globe, the industry leader in digital marketing, can offer all the elements your food website needs, including search engine optimization, traffic growth, client connection building, and more. We have a group of seasoned experts who are knowledgeable about the most recent digital marketing techniques.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>

            <div className="DM_Tabs">
                <PortfolioTabs data={portfolio} title={'Recent Projects'} description={'By utilizing the best marketing techniques, Tech2Globe, a digital marketing agency in the USA, helps you to advertise your company internationally. You can check out our recent projects to have a'} />
            </div>



            <FaqSection faqs={faqs} />
            <CaseStudiesService caseStudies={caseStudies} />

        </>
    )
}