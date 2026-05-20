import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaAddressBook, FaAddressCard, FaAngleRight, FaBook, FaBuilding, FaChartBar, FaCog, FaDatabase, FaEnvelope, FaFile, FaFileAlt, FaHeartbeat, FaHome, FaIndustry, FaInfo, FaLaptop, FaMagento, FaRegAddressCard, FaRegChartBar, FaRoad, FaSearch, FaServer, FaShoppingBasket, FaShoppingCart, FaUser } from "react-icons/fa";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import './custom.css';



export const metadata = {
    title:
        "Digital Marketing Packages | Digital Marketing Packages India",

    description:
        "Get 100% genuine results with Tech2Globe. We offer Digital marketing packages at very cost-effective rates for all types of business. Grow your business faster.",

    keywords: [
        "digital marketing services",
        "digital marketing packages",
        "seo packages",
        "digital marketing company",
        "digital marketing India",
        "digital marketing packages India.",
    ],

    alternates: {
        canonical: "https://www.tech2globe.com/digital-marketing-packages",
    },

    openGraph: {
        title:
            "Digital Marketing Packages | Digital Marketing Packages India",
        description:
            "Get 100% genuine results with Tech2Globe. We offer Digital marketing packages at very cost-effective rates for all types of business. Grow your business faster",
        url: "https://www.tech2globe.com/digital-marketing-packages",
        type: "website",
    },

    twitter: {
        card: "summary",
        title:
            "Digital Marketing Packages | Digital Marketing Packages India",
        description:
            "Get 100% genuine results with Tech2Globe. We offer Digital marketing packages at very cost-effective rates for all types of business. Grow your business faster",
    },
};


const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Our small company has benefited greatly from having Tech2Globe as a partner. Our online presence has increased thanks to their SEO services, which have also increased natural traffic to our website. Their staff of professionals is skilled, kind, and attentive to our demands.",
        name: "Balbir Kaur",

    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Since I have been working with Tech2Globe for a while, I have been really pleased with their SEO offerings. They have assisted me in boosting my website's traffic and search engine rankings. They always go above and beyond to make sure I am happy with their job and that their team is professional, experienced, and ready to do so.",
        name: "Genki",

    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Their SEO services have helped us raise our website's search engine ranks and increase website traffic, which has eventually increased our revenue and sales. Their team always goes above and beyond to make sure we are happy with their job and is courteous, professional, and responsive.",
        name: "Ahay",

    },
    {
        id: 4,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "They have excellent service and management, this is honest review after a month of experience with them, team is hardworking, knowledgeable and do every task on time. I hope they continue to deliver me same output.",
        name: "Roxel- Account Management India",

    },
    {
        id: 5,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Excellent Team, good results in sales",
        name: "GAndriana– Amazon Sponsored Ads USA",

    },
    {
        id: 6,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Excellent service by Tech2globe, brilliant service and hardworking",
        name: "Neo Global- Vendor Account Management UK",

    },
    {
        id: 7,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Courteous, professional, quality work, best bang for your buck",
        name: "Medi Hub- Amazon Store Creations USA",

    },
    {
        id: 8,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "TVery professional and creative team. They patiently worked on changes I asked for and delivered on time. Thank you.",
        name: "Teliamed– Amazon Enhance Brand Content USA",

    },
];

const faqs = [
    {
        id: "One",
        question: "What Are Digital Marketing Services Pricing?",
        answer: `
        To assist businesses in enhancing their online presence and expanding their consumer base, digital marketing agencies offer packages of services known as "digital marketing packages." Various services, including SEO, PPC, social media marketing, email marketing, and content marketing, may be included in these bundles.
      `,
    },
    {
        id: "Two",
        question: "What Services Are Included In Packages For Digital Marketing?",
        answer: `
        Depending on the package and the demands of the company, different digital marketing packages offer different services. However, the majority of packages include a mix of services for content marketing, social media marketing, email marketing, and PPC advertising. Other services like website design, influencer marketing, or video marketing may be included in some packages.
      `,
    },
    {
        id: "Three",
        question: "How Can I Determine Which Digital Marketing Pricing Is Best For My Company?",
        answer: `
        Your individual goals and available money should be taken into account when choosing the best digital marketing package for your company. Additionally, you should evaluate your present marketing initiatives and web presence to determine where you need to make improvements. Your business's needs and budget can be taken into account when choosing a package with the aid of our digital marketing agency.
      `,
    },
    {
        id: "Four",
        question: "How Long Does It Take For Digital Marketing Packages To Start Producing Results?",
        answer: `
        The type of digital marketing package you choose, the services it includes, and the objectives of your company will all affect how quickly you get results. However, the majority of digital marketing companies will provide you with a rough schedule for when you might anticipate seeing results.
      `,
    },


];

const pageHeaderData = {
    title: "Digital Marketing Packages",
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


export default function DigitalMarketPlacePackages() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What Are Digital Marketing Services Pricing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To assist businesses in enhancing their online presence and expanding their consumer base, digital marketing agencies offer packages of services known as digital marketing packages. Various services, including SEO, PPC, social media marketing, email marketing, and content marketing, may be included in these bundles."
                }
            },
            {
                "@type": "Question",
                "name": "How Can I Determine Which Digital Marketing Pricing Is Best For My Company?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Your individual goals and available money should be taken into account when choosing the best digital marketing package for your company. Additionally, you should evaluate your present marketing initiatives and web presence to determine where you need to make improvements. Your business’s needs and budget can be taken into account when choosing a package with the aid of our digital marketing agency."
                }
            },
            {
                "@type": "Question",
                "name": "What Services Are Included In Packages For Digital Marketing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Depending on the package and the demands of the company, different digital marketing packages offer different services. However, the majority of packages include a mix of services for content marketing, social media marketing, email marketing, and PPC advertising. Other services like website design, influencer marketing, or video marketing may be included in some packages."
                }
            },
            {
                "@type": "Question",
                "name": "How Long Does It Take For Digital Marketing Packages To Start Producing Results?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The type of digital marketing package you choose, the services it includes, and the objectives of your company will all affect how quickly you get results. However, the majority of digital marketing companies will provide you with a rough schedule for when you might anticipate seeing results."
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
            <Breadcrumb parentName="Services" pageName="Digital Marketing Packages" />
            <BrandSection />

            <div className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h2 className="text-center">About Our Agency Offering Digital Marketing Services Pricing</h2>
                            <div className={Style.ContentDiv}>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">

                                        <p>Tech2Globe is an expert digital marketing firm that has worked with businesses for more than 14 years by offering them the best digital marketing packages to assist them in achieving their online marketing objectives. A few of the services that our US-based company provides:</p>

                                        <div class="media why-should-content-bg bg-primary p-2 d-flex align-items-center">
                                            <div class="media-left media-icon-bg">
                                                <FaCog className="text-white" size={32} />
                                            </div>
                                            <div class="media-body">
                                                <p class="text-white mb-0">&nbsp; Web design and development</p>
                                            </div>
                                        </div>
                                        <div class="media why-should-content-bg bg-info p-2 d-flex align-items-center">
                                            <div class="media-left">
                                                <FaLaptop className="text-white" size={32} />
                                            </div>
                                            <div class="media-body">
                                                <p class="text-white mb-0">&nbsp;Pay-per-click (PPC) advertising</p>
                                            </div>
                                        </div>
                                        <div class="media why-should-content-bg bg-warning p-2 d-flex align-items-center">
                                            <div class="media-left">
                                                <FaChartBar className="text-white" size={32} />
                                            </div>
                                            <div class="media-body">
                                                <p class="text-white mb-0">&nbsp;Social media marketing</p>
                                            </div>
                                        </div>
                                        <div class="media why-should-content-bg bg-success p-2 d-flex align-items-center">
                                            <div class="media-left">
                                                <FaSearch className="text-white" size={32} />
                                            </div>
                                            <div class="media-body">
                                                <p class="text-white mb-0">&nbsp;Search engine optimization (SEO)</p>
                                            </div>
                                        </div>
                                        <div class="media why-should-content-bg bg-light p-2 d-flex align-items-center">
                                            <div class="media-left">
                                                <FaEnvelope className="" size={32} />
                                            </div>
                                            <div class="media-body">
                                                <p class="text-dark mb-0">&nbsp;Email marketing</p>
                                            </div>
                                        </div>
                                        <div class="media why-should-content-bg bg-danger p-2 d-flex align-items-center">
                                            <div class="media-left">
                                                <FaFileAlt className="text-white" size={32} />
                                            </div>
                                            <div class="media-body">
                                                <p class="text-white mb-0">&nbsp;Content marketing</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
                                        <img src="/images/services/service-inner/digital-marketing1.jpg" className="img-fluid img-responsive" alt="dm1" />
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <div className="row pt-5 pb-5">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
                                        <img src="/images/services/service-inner/digital-marketing4.jpg" className="img-fluid img-responsive" alt="dm2" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">

                                        <p>Tech2Globe aims to offer customers in the USA innovative and successful social media marketing packages that help them improve their online presence and connect with their target audience. Modern tools and software are used by the business to develop specialized digital marketing pricing that meets the specific requirements of each client.</p>
                                        <p>We believe in data-driven marketing, and to maximize results we analyze the effectiveness of our campaigns, modify our strategies using analytics and reporting tools as needed. As a renowned digital marketing agency, we serve different clients from several sectors such as healthcare, e-commerce , education and finance.</p>
                                        <p>If you are looking to boost online exposure and profitability, take a look at us because of our years of experience in digital marketing pricing and our commitment to excellence.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Style.SectionCream}>
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-3 pb-3">
                            <div className={Style.ContentDiv}>
                                <h2 className="text-center ">Social Media Marketing Packages Offered By Tech2Globe</h2>
                                <p className="text-center">As we mentioned earlier, Tech2Globe is a reputable digital marketing agency that provides various social media marketing packages pricing to help businesses improve their online presence and attract more customers. Our company has a group of experts who know how to apply the latest digital marketing techniques and strategies to help companies achieve their goals.Tech2Globe provides a variety of social media marketing packages tailored to the specific demands of different businesses. The following are the different packages offered by our agency:</p>
                                <p className="text-center"><strong>Search Engine Optimization (SEO) Packages</strong> Search engine optimization packages are available from Tech2Globe in several grades, including basic, standard, and advanced. Keyword research, on-page optimization, content production, link building, and monthly reporting are all included in these packages. Make sure to look at our social media marketing agency pricing by visiting our website.</p>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div class="pricingTable10 h-100 bg-light">
                                            <div class="pricingTable-header">
                                                <h3 class="heading">Social Media Marketing Packages</h3>
                                                <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                                            </div>
                                            <div class="pricing-content">
                                                <p>Tech2Globe offers social media marketing packages pricing that are intended to help companies grow their online presence and interact with their target markets. These packages include things like monthly reporting, content production, social media administration, and social media plan building.</p>
                                                <Link href="/social-media-marketing-packages" class="read">Click Here</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div class="pricingTable10 h-100 bg-light">
                                            <div class="pricingTable-header">
                                                <h3 class="heading">INFLUENCER MARKETING PACKAGES</h3>
                                                <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                                            </div>
                                            <div class="pricing-content">
                                                <p>Our influencer marketing agency gives your business unmatched access to technology and talent thanks to our more than seven years of experience and award-winning team of digital marketing experts.</p>
                                                <Link href="/social-media-marketing-packages" class="read">Click Here</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-3">
                    <div className={Style.ContentDiv}>
                        <div className="container">
                            <h2 className="text-center">Why Should You Pick Tech2Globe To Grow Your Business And Get The Best Digital Marketing Pricing?</h2>

                            <p className="text-center">For a number of reasons, Tech2Globe is a great option for companies looking to improve their online presence and take advantage of the finest digital marketing pricing.</p>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border border-warning bg-light p-3 shadow mb-3 h-100">
                                        <div className="text-center">
                                            <FaInfo style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5>Knowledge</h5>
                                            <p className="mb-0">Tech2Globe offers a staff of qualified and knowledgeable digital marketing specialists who are well-versed in the newest methods and tactics. They are skilled at creating specialized digital marketing packages that are adapted to the particular requirements of various firms.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border border-warning bg-light p-3 shadow mb-3 h-100">
                                        <div className="text-center">
                                            <FaShoppingBasket style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5>Affordability</h5>
                                            <p className="mb-0">Tech2Globe offers reasonable social media marketing packages pricing for companies of all sizes. Businesses can select a package that fits their budget by choosing from among those the agency offers at various pricing ranges.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border border-warning bg-light p-3 shadow mb-3 h-100">
                                        <div className="text-center">
                                            <FaRoad style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5>Results-Driven Method</h5>
                                            <p className="mb-0">Tech2Globe takes a results-oriented approach to digital marketing. To monitor campaign effectiveness and modify strategies for the best results, our agency uses analytics and reporting tools. Businesses will receive the best return on their investment thanks to this.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border border-warning bg-light p-3 shadow mb-3 h-100">
                                        <div className="text-center">
                                            <FaServer style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5>A Wide Range Of Services</h5>
                                            <p className="mb-0">SEO, PPC, social media marketing, content marketing, and email marketing are just a few of the many social media marketing agency pricing that Tech2Globe provides. Businesses can select a package that fits their unique requirements.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={Style.SectionCream}>
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-3 pb-3">
                            <div className={Style.ContentDiv}>
                                <h4 className="text-center mb-2 ">Contact Us For Social Media Marketing Packages</h4>
                                <h4 className="text-center mb-2">Call us at <Link href="tel:+15168585840">+1-516-858-5840</Link></h4>
                                <div className="text-center">
                                    <Link href="/contact-us" className="btn button-red">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-3">
                    <div className="container">
                        <div className={Style.ContentDiv}>
                            <div className="row">
                                <h2 className="text-center">What More About Our Digital Marketing Services Pricing?</h2>

                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">

                                    <p>Our digital marketing company is motivated, inventive, and eager to take chances that ultimately pay off for our clients. We are dedicated to being on the cutting edge because we think that innovation and originality are crucial for success in the ever-evolving field of digital marketing by providing the best social media marketing agency pricing. Our team is dedicated to creating practical solutions that support our clients in achieving their objectives and dominating their respective markets.</p>
                                    <p>We recognize the value of remaining current with the newest trends and best practices as a digital marketing agency. To learn from the top experts in the field, we are constantly looking for fresh information and attending conferences and events in the sector. For us to give our clients the best solutions available, staying on top of the latest trends is crucial.</p>
                                    <p>Every action we do demonstrates our dedication to creativity and innovation. We approach every job with an open mind and a fresh viewpoint, from creating unique digital marketing strategies to creating visually appealing campaigns. We put out great effort to ensure that our solutions are of the highest caliber since we feel that our customers deserve nothing less.</p>

                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
                                    <img src="/images/services/service-inner/digital-marketing7.jpg" className="img-fluid img-responsive" alt="dm2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Style.SectionCream}>
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-3 pb-3">
                            <div className={Style.ContentDiv}>
                                <h4 className="text-center mb-2 ">Our Projects That You Must Look For</h4>
                                <p className="text-center mb-2">Tech2Globe is a digital marketing company that offers the finest digital marketing packages to help you advertise your business globally by utilizing the best marketing strategies. You can look at our most recent projects to see the successful work we've done for our clients.</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-3">
                    <div className={Style.ContentDiv}>
                        <div className="container">
                            <h2 className="text-center">What Will You Get By Choosing Our Digital Marketing Packages?</h2>

                            <p className="text-center">Our services can assist your company in attracting more customers to your ecommerce site. The secret to your company's growth lies in its effective structure and excellent content. Higher rankings and increased visibility are made feasible by using new solutions. We have a team of qualified professionals with certifications from Google, Facebook, YouTube, and other platforms that are specially trained to carry out various digital marketing tasks.</p>
                            <div className="row mt-4">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow mb-3 h-100">
                                        <div className="text-left">
                                            <FaSearch style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className="context mt-2">
                                            <h5>Packages For Search Engine Optimization (SEO)</h5>
                                            <p>Our SEO team consists of professionals with a wealth of expertise and specialized training in SEO activities. Our social media marketing package pricing includes all SEO-related services, such as initial website review, on- and off-page optimization for local search engines, blog optimization, social media sharing, monthly reporting, and much more. These services help to raise the ranking of your website on SERPs globally and give your company a new way to reach out to more clients.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow mb-3 h-100">
                                        <div className="text-left">
                                            <FaChartBar style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className="context mt-2">
                                            <h5>Packages For Social Media Marketing (SMM)</h5>
                                            <p>Many large firms use social media these days to engage more consumers. They use social media platforms to present, introduce, or launch new goods or services. At Tech2Globe, we offer a specialized team of skilled social media professionals who can expand your company's visibility and consumer base. Our social media marketing agency pricing includes a variety of activities across numerous social media platforms. You can choose your channels based on your needs or the people you want to reach.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow mb-3 h-100">
                                        <div className="text-left">
                                            <FaUser style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className="context  mt-2">
                                            <h5>Packages For Guest Posting</h5>
                                            <p>We believe that guest posting is a fantastic approach to increasing the popularity or visibility of your brand or company. We have a distinct crew to handle guest posting tasks that are suitable for various business models and industries. Activities involved in guest posting include finding websites with high domain authority that are relevant to the client's industry, ensuring the website is authentic, getting the client's approval, and starting a dialogue. After everything is set up, we produce top-notch material tailored to the client's industry.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >



            <FaqSection faqs={faqs} />
            <CaseStudiesService caseStudies={caseStudies} />
            <div className="EmailMarketingTestimonials">
                <ClientSlider testimonials={testimonials} />
            </div>

        </>
    )
}