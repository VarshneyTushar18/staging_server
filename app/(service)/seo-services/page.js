import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaAddressBook, FaAddressCard, FaAngleRight, FaBook, FaBuilding, FaDatabase, FaFile, FaHeartbeat, FaHome, FaIndustry, FaRegAddressCard, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import './custom.css';



export const metadata = {
    title:
        "SEO services | SEO services Delhi | SEO services India | Tech2Globe",

    description:
        "Tech2globe offers SEO Services Delhi, we have a well-qualified & experienced SEO expert that will improve your site ranking & also helps in generating more organic traffic",

    keywords: [
        "SEO India",
        "SEO Company India",
        "SEO Services India",
        "SEO India Firm",
        "SEO Services",
        "SEO Packages",
        "SEO Agency India",
        "SEO Expert India",
        "SEO Consultant India.",
    ],

    alternates: {
        canonical: "https://www.tech2globe.com/seo-services",
    },

    openGraph: {
        title:
            "SEO services | SEO services Delhi | SEO services India | Tech2Globe",
        description:
            "Tech2globe offers SEO Services Delhi, we have a well-qualified & experienced SEO expert that will improve your site ranking & also helps in generating more organic traffic",
        url: "https://www.tech2globe.com/seo-services",
        siteName: "Tech2Globe Web Solutions LLP",
        type: "website",
    },

    twitter: {
        card: "summary",
        title:
            "SEO services | SEO services Delhi | SEO services India | Tech2Globe",
        description:
            "Tech2globe offers SEO Services Delhi, we have a well-qualified & experienced SEO expert that will improve your site ranking & also helps in generating more organic traffic",
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
];

const faqs = [
    {
        id: "One",
        question: "Can I Monitor How Your SEO Company In New York Is Doing On My Project?",
        answer: `
        Yes, the majority of New York-based SEO agencies will give you regular updates on your progress that include information on your website's organic traffic, search engine rankings, and other important performance metrics. You may find areas for development and see how your SEO campaign is doing with the aid of these reports.
      `,
    },
    {
        id: "Two",
        question: "How Might Your Seo Company In New York Benefit My Business?",
        answer: `
        By enhancing your website's online visibility, boosting your search engine ranks, and generating more organic traffic, our SEO company in New York can benefit your organization. In the end, this can increase leads and sales for your company.
      `,
    },
    {
        id: "Three",
        question: "How Long Does It Take For Your SEO Services To Produce Results?",
        answer: `
        The complexity of the website, the level of industry competition, and the particular services being offered can all affect how long it takes to see results from our SEO services. We will provide you with a schedule for anticipated outcomes depending on the particular requirements and circumstances of your company.
      `,
    },
    {
        id: "Four",
        question: "What Are The Prices For Your SEO Services?",
        answer: `
        The price of SEO services varies according to a number of variables, such as the size and complexity of the website, the level of industry competitiveness, and the particular services required. However, we aim to provide budget-friendly plans and flexible payment choices designed to satisfy the demands of small businesses.
      `,
    },


];

const pageHeaderData = {
    title: "SEO Services",
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


export default function SEO() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can I Monitor How Your SEO Company In New York Is Doing On My Project?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the majority of New York-based SEO agencies will give you regular updates on your progress that include information on your website’s organic traffic, search engine rankings, and other important performance metrics. You may find areas for development and see how your SEO campaign is doing with the aid of these reports."
                }
            },
            {
                "@type": "Question",
                "name": "How Might Your Seo Company In New York Benefit My Business?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "By enhancing your website’s online visibility, boosting your search engine ranks, and generating more organic traffic, our SEO company in New York can benefit your organization. In the end, this can increase leads and sales for your company."
                }
            },
            {
                "@type": "Question",
                "name": "How Long Does It Take For Your SEO Services To Produce Results?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The complexity of the website, the level of industry competition, and the particular services being offered can all affect how long it takes to see results from our SEO services. We will provide you with a schedule for anticipated outcomes depending on the particular requirements and circumstances of your company."
                }
            },
            {
                "@type": "Question",
                "name": "What Are The Prices For Your SEO Services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The price of SEO services varies according to a number of variables, such as the size and complexity of the website, the level of industry competitiveness, and the particular services required. However, we aim to provide budget-friendly plans and flexible payment choices designed to satisfy the demands of small businesses."
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
            <Breadcrumb parentName="Services" pageName="Seo Services" />
            <BrandSection />

            <div className={Style.PageContent}>
                <div className="container pt-3 pb-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 text-center">
                            <ul className="d-flex list-unstyled justify-content-between">
                                <li><img src="images/services/service-inner/clientlogo/top-digital-marketing-2021.webp" alt="" className="img-fluid" /></li>
                                <li><img src="images/services/service-inner/clientlogo/top-small-business-seo-company-cluth-2021.webp" alt="" className="img-fluid" /></li>
                                <li><img src="images/services/service-inner/clientlogo/top-wordpress-developers-2021.webp" alt="" className="img-fluid" /></li>
                                <li><img src="images/services/service-inner/clientlogo/customer-choice-award-sitejabber-2018.webp" alt="" className="img-fluid" /></li>
                                <li><img src="images/services/service-inner/clientlogo/top-seo-services-company-goodfirms.webp" alt="" className="img-fluid" /></li>
                                <li><img src="images/services/service-inner/clientlogo/search-berg-trustpilot-reviews.webp" alt="" className="img-fluid" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                            <div className={Style.ContentDiv}>

                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
                                        <h4>About Our SEO Company In New York</h4>
                                        <p>Being a leading New York-based SEO firm Tech2Globe provides full digital marketing services to companies of all kinds. The business is committed to assisting customers in enhancing their online exposure, raising their search engine ranks, and boosting organic traffic to their websites by providing <Link href="/seo-for-small-business" className="text-decoration-underline fw-bold">SEO services for small businesses</Link>. Our team is made up of skilled SEO experts having experience of more than 14 years who are knowledgeable in all facets of search engine optimization (SEO). We approach SEO from a results-driven perspective, concentrating on enhancing our clients' online visibility and ultimately generating more leads and revenues.</p>

                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
                                        <img src="/images/services/service-inner/seo-digital-marketing.webp" className="img-fluid img-responsive" alt="dm1" />
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
                                        <img src="/images/services/service-inner/know-About-1.png" className="img-fluid img-responsive" alt="dm2" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3">
                                        <h4>Know More About Us</h4>
                                        <p>One feature that distinguishes our <strong>affordable SEO services for small businesses</strong> from other New York-based SEO agencies is our dedication to openness and communication. In order to establish trusting, long-lasting relationships with our clients, we think that open, honest communication is crucial. As a result, it places a high focus on keeping clients updated and involved at every stage of the SEO process.</p>
                                        <p>Recognizing the individuality of every organization, Tech2Globe collaborates closely with clients to create <strong>SEO services for small businesses</strong> that are unique to their needs and objectives. No matter how big or small your company is, Tech2Globe can assist you in achieving your SEO goals and expanding your internet presence.</p>

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
                                <h4 className="text-center ">How To Get In Touch With Us In Relation To SEO For Small Businesses?</h4>
                                <h4 className="text-center ">Call us at <Link href="tel:+15168585840">+1-516-858-5840</Link></h4>
                                <div className="text-center">
                                    <Link href="/contact-us" className="btn button-red">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-3">
                    <div className={Style.ContentDiv}>
                        <div className="container">
                            <h2 className="text-center">Affordable SEO Services For Small Businesses By Tech2Globe</h2>
                            <p className="text-center">Your online business will expand if you fully implement our <Link href="/technical-seo" className="text-decoration-underline">technical SEO services</Link> and raise your visibility in Google search results. Our SEO services provider company will additionally report on the positions of your page with respect to the employed keywords, SEO link building, and indexed pages on a weekly and monthly basis.</p>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="pricing-block text-center wow fadeinup">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <div className="icon-outer"><Image src="/images/services/service-inner/seo-dm.png" width={100} height={100} alt="SEO Techniques" /></div>
                                            </div>
                                            <div className="price-box">
                                                <div className="title"> SEO Techniques</div>
                                                <p>Our best SEO services in the USA give you all the details you need to know about your position in the search results, where you can make improvements, and how to get there. Every website is different, so we don't design similar solutions for them all. Our team of experienced SEO professionals will work with you to create a customized strategy that fits your business needs and budget. The information you need about your position in the search results.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="pricing-block blue text-center wow fadeinup">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <div className="icon-outer"><Image src="/images/services/service-inner/Off-Page-Keyword-seo.png" width={100} height={100} alt="Off-Page Keyword" /></div>
                                            </div>
                                            <div className="price-box">
                                                <div className="title"> Off-Page Keyword</div>
                                                <p>Our SEO company in New York always has the tools it needs to produce relevant content, increase your chances of appearing in search results by using keywords strategically, and use SEO services for small businesses to identify the information that your audience is actively looking for due to our off-page keyword research services. The main aim is to hire SEO company is to find keywords for goods and services.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="pricing-block yellow text-center wow fadeinup">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <div className="icon-outer"><Image src="/images/services/service-inner/link-building-seo.png" width={100} height={100} alt="Link Building" /></div>
                                            </div>
                                            <div className="price-box">
                                                <div className="title"> Link Building</div>
                                                <p>Our staff works with you by combining SEO for small business to send emails to website owners, evaluate your backlinks for problematic signals, and remove any links that can harm your ranking in search engines. We also give you thorough information on the state of your backlinks so you can monitor your development. Our affordable SEO services for small businesses can also assist you in creating fresh, high-quality backlinks that are pertinent to your website.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="pricing-block green text-center wow fadeinup">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <div className="icon-outer"><Image src="/images/services/service-inner/youtube-marketing-seo.png" width={100} height={100} alt="Youtube Marketing" /></div>
                                            </div>
                                            <div className="price-box">
                                                <div className="title"> Youtube Marketing</div>
                                                <p>This platform receives the most visitors of any other. You can still advertise your services on other people's videos to reach a large audience even if your company doesn't make many films. Additionally, you may utilize this platform to market your goods and services and cultivate connections with possible clients by using SEO for small business. By using YouTube, you may strengthen your company's internet reputation.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="pricing-block pink text-center wow fadeinup">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <div className="icon-outer"><Image src="/images/services/service-inner/content-dm.png" width={100} height={100} alt="Content Marketing" /></div>
                                            </div>
                                            <div className="price-box">
                                                <div className="title"> Content Marketing</div>
                                                <p>With a solid content strategy, we assist you with affordable SEO services for small businesses. We are aware that SEO services for small businesses are a long-term investment and that it needs a thorough approach to be effective. We'll examine your website, find areas for development, and create a content strategy to raise your search engine ranking with our technical SEO services. We'll keep an eye on the functionality of your website.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="pricing-block  text-center wow fadeinup">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <div className="icon-outer"><Image src="/images/services/service-inner/ppc-dm.png" width={100} height={100} alt="Pay Per Click" /></div>
                                            </div>
                                            <div className="price-box">
                                                <div className="title"> Pay Per Click</div>
                                                <p>Tech2Globe, a company providing SEO for small businesses, has been assisting brands all around the world with our cutting-edge PPC advertising solutions. We are one of the few SEO company in New York that has begun developing sophisticated digital technologies that understand search engine intricacy. We provide an affordable SEO services provider company that you can hire right away. You could cooperate if you're looking for the same services.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-3">
                    <div className="container">
                        <div className={Style.ContentDiv}>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-3">
                                    <img src="/images/services/service-inner/Group-37.webp" className="img-fluid img-responsive" alt="dm2" />
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 mt-3">
                                    <h4>Why Only Tech2Globe For Technical SEO Services?</h4>
                                    <p>With a variety of SEO services for small businesses available, Tech2Globe can accommodate the requirements of companies of all shapes and sizes. Services like keyword research, on-page optimization, link building, content production, analytics, and reporting are all included in its packages. The business can also alter its offerings to suit your unique requirements and objectives.</p>
                                    <p>The team of specialists in our organization maintains current trends and SEO standards in order to keep the clients ahead of the competition. Tech2Globe stands out from other SEO for small business in New York due to its dedication to remaining up-to-date with the most recent methods and strategies. We offer a variety of different digital marketing services in addition to SEO, such as PPC advertising, <Link href="/social-media-marketing" className="text-decoration-underline">social media marketing</Link>, email marketing, and more. Our objective is to offer clients a full range of <Link href="/digital-marketing-services" className="text-decoration-underline">digital marketing services</Link> that can assist them in achieving their objectives and expanding their enterprises.</p>
                                    <p>By selecting Tech2Globe as your SEO company in New York, you're collaborating with a group of professionals who are dedicated to your success. Our organization will put in an endless effort to support your online business growth by assisting you in achieving your SEO goals and increasing organic traffic to your website. Hire SEO company Tech2Globe, if you're seeking an SEO company in New York that can assist you in enhancing your online visibility, raising your search engine ranks, and bringing more organic traffic to your website. To find out more about our offerings and how they can support you in achieving your SEO goals, get in touch with us right away.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-3">
                    <div className={Style.ContentDiv}>
                        <div className="container">
                            <h4 className="text-center">We've partnered With</h4>
                            <p className="text-center">We are happy to have teamed with big and credible names in the industry!</p>
                            <div className="pt-3 pb-3">
                                <div className="container">
                                    <div className="row">

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
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-3">
                    <div className={Style.ContentDiv}>
                        <div className="container">
                            <h4 className="text-center">What Makes Tech4Globe An Ideal Choice For SEO Services For Small Businesses?</h4>

                            <p className="text-center">For small businesses who wish to enhance their online presence and increase organic website traffic, Tech2Globe offers reasonably priced SEO services. Our team of knowledgeable SEO experts is aware of the special difficulties that small businesses have, and we collaborate closely with our clients to create SEO for small businesses that are tailored to their particular requirements and objectives.</p>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow mb-3 h-100">
                                        <div className="text-center">
                                            <FaSearch style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5>Keyword Research</h5>
                                            <p>We carry out in-depth research to determine the keywords that are most pertinent to the target markets and businesses of our clients. This helps in the creation of content that is search engine optimized and raises the ranks of our client's websites.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow mb-3 h-100">
                                        <div className="text-center">
                                            <FaShoppingCart style={{ fontSize: "30px" }}  />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5>Ecommerce</h5>
                                            <p>Customer behaviour, technology integration, and competitive pressure all have an impact on how effectively your online store performs by providing exceptional user experiences for your digital marketing services across all touchpoints where clients are likely to contact you.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow mb-3 h-100">
                                        <div className="text-center">
                                            <FaFile style={{ fontSize: "30px" }}  />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5>On-Page Optimisation</h5>
                                            <p>We make our clients' websites user-friendly, straightforward to use, and search engine optimized. Title tags, meta descriptions, header tags, and other on-page components should all be optimized.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow mb-3 h-100">
                                        <div className="text-center">
                                            <FaFile style={{ fontSize: "30px" }}  />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5>Content Creation</h5>
                                            <p>We produce excellent, informative material that is search engine optimized and intended to interest and inform the target audiences of our companies.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow mb-3 h-100">
                                        <div className="text-center">
                                            <FaDatabase style={{ fontSize: "30px" }}  />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5>Analytics And Data</h5>
                                            <p>We often provide our clients with analytics and data so they can monitor their progress and see the outcomes of our work.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow mb-3 h-100">
                                        <div className="text-center">
                                            <FaUser style={{ fontSize: "30px" }}  />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5>Hire SEO company</h5>
                                            <p>Tech2Globe right away if you are a small business searching for reasonably priced SEO services that may enhance your internet presence and increase natural traffic to your website. Our team of knowledgeable SEO experts is prepared to support you in achieving your objectives and expanding your online business.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow mb-3 h-100">
                                        <div className="text-center">
                                            <FaBook style={{ fontSize: "30px" }}  />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5>An Analysis Of Our Projects</h5>
                                            <p>A digital marketing company called Tech2Globe offers the greatest technical SEO services to assist you in utilizing the best advertising strategies to advertise your business on a global scale. Looking at our most recent projects will allow you to see the successful work we've accomplished for our clients.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow mb-3 h-100">
                                        <div className="text-center">
                                            <FaBuilding style={{ fontSize: "30px" }}  />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5>Affordable SEO Services for Small Businesses</h5>
                                            <p>We offer a variety of services that are targeted to the demands of companies of different sizes and price ranges as part of our affordable SEO services for small businesses.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="EmailMarketingTestimonials">
                <ClientSlider testimonials={testimonials} />
            </div>
            <FaqSection faqs={faqs} />
            <CaseStudiesService caseStudies={caseStudies} />

        </>
    )
}