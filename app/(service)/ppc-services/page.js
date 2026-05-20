import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaBusinessTime, FaChartPie, FaCheckSquare, FaCogs, FaDatabase, FaDollarSign, FaFile, FaFileImport, FaFolderOpen, FaMapPin, FaPaperPlane, FaShieldAlt, FaShoppingBag } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";

export const metadata = {
    title: "Professional PPC Management & Campaign Services That Deliver",
    description:
        "Drive more leads and conversions with professional PPC management & campaign services, tailored to boost traffic, engagement, and business growth efficiently.",
    keywords: [
        "PPC Campaign Service",
        "Professional PPC Management Services"
    ],
    openGraph: {
        title: "Professional PPC Management & Campaign Services That Deliver",
        siteName: "",
        description:
            "Drive more leads and conversions with professional PPC management & campaign services, tailored to boost traffic, engagement, and business growth efficiently.",
        url: "https://www.tech2globe.com/ppc-services"
    },
    twitter: {
        card: "summary_large_image",
        title: "Professional PPC Management & Campaign Services That Deliver",
        description:
            "Drive more leads and conversions with professional PPC management & campaign services, tailored to boost traffic, engagement, and business growth efficiently."
    },
    alternates: {
        canonical: "https://www.tech2globe.com/ppc-services"
    }
};

const pageHeaderData = {
    title: "PPC Services",
    description:
        "Tech2globe, USA-Based digital marketing company has been providing a wide range of services to businesses of all sizes in the USA and other countries for more than 14 years.",
    buttonText: "Contact us",
    buttonLink: "#",
    backgroundImage: "/images/services/skyscraper.jpg",
    overlay: true
};

const faqs = [
    {
        id: "One",
        question: "Why aren't my PPC advertisements at the top of the SERP?",
        answer: `
      As the best PPC management services agency, we think that if your ad is outside of the top three,
      it is ranked lower. The quality score and CPC are the two most important drivers of ad rank.
      Your low ad position might be due to one of two reasons. Increase your keyword bids if you want
      your advertising to appear at the top of search results. If you earn poor results, you must improve
      your click-through rate through ad text testing.
    `,
    },
    {
        id: "Two",
        question: "What causes my CPC to rise?",
        answer: `
      As the best PPC management services agency, we think that if your ad is outside of the top three,
      it is ranked lower. The quality score and CPC are the two most important drivers of ad rank.
      Your low ad position might be due to one of two reasons. Increase your keyword bids if you want
      your advertising to appear at the top of search results. If you earn poor results, you must improve
      your click-through rate through ad text testing.
    `,
    },
    {
        id: "Three",
        question: "How long-term PPC benefits my business?",
        answer: `
      Hiring a PPC Advertising Agency provides several benefits to your company and promotes growth.
      It yields immediate and measurable results. Small companies that want to boost their online presence
      can turn to a seasoned PPC service provider to get the exposure they need. Furthermore, it is the
      quickest way to initiate advertising campaigns and get results.

      You can track the performance of your campaign and see where every dollar is going. The comprehensive
      analysis includes costs, clicks, visitors, profit or loss, and countless other critical elements.
      With increased exposure, engagement, recognition, and ROI, your organization may achieve well-deserved growth.
    `,
    },
    {
        id: "Four",
        question: "Where on search result pages does my PPC advertising show up?",
        answer: `
      You may use Google Advertisements to display your PPC advertisements on Google's SERP as well as on
      partner websites that participate in Google Ads through the AdSense programme. Furthermore, Bing Advertisements
      users can enable advertisers to display their PPC advertising immediately next to search results on Bing's SERP,
      Yahoo, MSN, and other Microsoft and Yahoo Internet domains. We can assist you with this as the top PPC Advertising Agency.
    `,
    },
];

const caseStudies = [
    {
        id: 1,
        title: "Product Visibility & Drive Sales 0.1",
        image: "/images/services/service-inner/untitled-design-20.png",
        description: "The client has been in the lighting business since 2011, specializing...",
        docLink: "https://tech2globe.com/casestudies-docs1/Case Study 2 - Sales Increase in different categories-converted.pdf",
    },
    {
        id: 2,
        title: "EBC and Storefront",
        image: "/images/services/service-inner/ebca.png",
        description: "Client deals in Health & Household items and Pet Supplies products on Amazon and wants...",
        docLink: "https://tech2globe.com/casestudies-docs1/Case Study 3 - EBC and Storefront-converted.pdf",
    },
    {
        id: 3,
        title: "Amazon PPC",
        image: "/images/services/service-inner/amazon-ppc.png",
        description: "Clients came to us with a range of Amazon PPC management difficulties....",
        docLink: "https://tech2globe.com/casestudies-docs1/Amazon PPC-converted.pdf",
    },
    {
        id: 4,
        title: "Product Visibility & Drive Sales",
        image: "/images/services/service-inner/untitled-design-18.png",
        description: "Client has been in the business of selling fine grooming products for over 15 years......",
        docLink: "https://tech2globe.com/casestudies-docs1/Case Study 1 - Sales Increase in different categories-converted.pdf",
    },
    {
        id: 5,
        title: "e-Commerce Store for Luxury Goods",
        image: "/images/services/service-inner/e-commerce-store-for-luxury-goods.png",
        description: "It is the ultimate luxury fashion destination for the distribution and retail of Italian, French…",
        docLink: "https://tech2globe.com/casestudies-docs1/E-Commerce Store for Luxury Goods-converted.pdf",
    },
    {
        id: 6,
        title: "Amazon Sale Boost",
        image: "/images/services/service-inner/amazon-sale-boost.jpg",
        description: "Find out the most important areas where our team required utmost attention to showcase the work from day one …",
        docLink: "https://tech2globe.com/casestudies-docs1/amazon-india-case-study.pdf",
    },
    {
        id: 7,
        title: "About Drop shipping",
        image: "/images/services/service-inner/about-drop-shipping.jpg",
        description: "Drop shipping is an e-retail term where someone facilitates the selling and delivery of an online product without …",
        docLink: "https://tech2globe.com/casestudies-docs1/Case-Study-Drop-Shipping.pdf",
    },
    {
        id: 8,
        title: "Migration from Sooq to Amazon.ae",
        image: "/images/services/service-inner/migration-from-sooq-to-amazon-ae.jpg",
        description: "Forgiving the best solution to our client and comprehensive support is our specialty which we successfully …",
        docLink: "https://tech2globe.com/casestudies-docs1/Migration-from-Sooq-to-AmazonAE.pdf",
    },
    {
        id: 9,
        title: "e-Commerce Multivendor Store 1.0",
        image: "/images/services/service-inner/e-commerce-multivendor-store-1-0.jpg",
        description: "Our client approached us for Ecommerce services that included multi-vendor customized solutions along with …",
        docLink: "https://tech2globe.com/casestudies-docs1/E-commerce version upgrade (1).pdf",
    },
    {
        id: 10,
        title: "e-Commerce Store Version Upgrade",
        image: "/images/services/service-inner/e-commerce-store-version-upgrade.jpg",
        description: "The previous version had issues with accepting payments via credit cards, so one of the improvement areas was to set …",
        docLink: "https://tech2globe.com/casestudies-docs/E-commerce version upgrade.pdf",
    },
    {
        id: 11,
        title: "Promotion of 2 x Shopify Stores",
        image: "/images/services/service-inner/promotion-of-2-x-shopify-stores.png",
        description: "In 2.5 periods of month projects handling, we’ve generated more than 6,000 Facebook Page Followers on “Fashion & Cosmetic”…",
        docLink: "https://tech2globe.com/casestudies-docs1/Promotion of 2 x Shopify Stores-converted.pdf",
    },
];


export default function PpcServices() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Why aren't my PPC advertisements at the top of the SERP?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "As the best PPC management services agency, we think that if your ad is outside of the top three, it is ranked lower. The quality score and CPC are the two most important drivers of ad rank. Your low ad position might be due to one of two reasons. Increase your keyword bids if you want your advertising to appear at the top of search results. If you earn poor results, you must improve your click-through rate through ad text testing."
                }
            },
            {
                "@type": "Question",
                name: "How long-term PPC benefits my business?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Hiring a PPC Advertising Agency provides several benefits to your company and promotes growth. It yields immediate and measurable results. Small companies that want to boost their online presence can turn to a seasoned PPC service provider to get the exposure they need. Furthermore, it is the quickest way to initiate advertising campaigns and get results. You can track the performance of your campaign and see where every dollar is going. The comprehensive analysis includes costs, clicks, visitors, profit or loss, and countless other critical elements. With increased exposure, engagement, recognition, and ROI, your organization may achieve well-deserved growth."
                }
            },
            {
                "@type": "Question",
                name: "What causes my CPC to rise?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "As the best PPC management services agency, we think that if your ad is outside of the top three, it is ranked lower. The quality score and CPC are the two most important drivers of ad rank. Your low ad position might be due to one of two reasons. Increase your keyword bids if you want your advertising to appear at the top of search results. If you earn poor results, you must improve your click-through rate through ad text testing."
                }
            },
            {
                "@type": "Question",
                name: "Where on search result pages does my PPC advertising show up?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You may use Google Advertisements to display your PPC advertisements on Google’s SERP as well as on partner websites that participate in Google Ads through the AdSense programme. Furthermore, Bing Advertisements users can enable advertisers to display their PPC advertising immediately next to search results on Bing’s SERP, Yahoo, MSN, and other Microsoft and Yahoo Internet domains. We can assist you with this as the top PPC Advertising Agency."
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
            <Breadcrumb pageName="PPC Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 pb-5">
                            <ul className={Style.partners}>
                                <li><img src="/images/services/top-digital-marketing-2021.webp" width={165} alt="Customer Choice Award Sitejabber" className="partner" /></li>
                                <li><img src="/images/services/top-small-business-seo-company-cluth-2021.webp" width={165} alt="Top Small Business SEO Company Clutch" className="partner" /></li>
                                <li><img src="/images/services/top-wordpress-developers-2021.webp" width={165} alt="Top Wordpress Developers Clutch" className="partner" /></li>
                                <li><img src="/images/services/customer-choice-award-sitejabber-2018.webp" width={165} alt="Top SEO Services CompanyGoodFirms" className="partner" /></li>
                                <li><img style={{ marginTop: '-4px' }} src="/images/services/top-seo-services-company-goodfirms.webp" width={165} alt="Top SEO Services CompanyGoodFirms" className="partner" /></li>
                                <li><img src="/images/services/search-berg-trustpilot-reviews.webp" width={165} alt="Search Berg Trustpilot Reviews" className="partner" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                            <h2 className="main-heading text-danger h4 fw-bold py-3 mb-0">Best Pay Per Click Service Company in India </h2>
                            <p className="text-justify">We can assure you that your business will gain a lot from the greatest PPC Campaign
                                Management Services that generate real leads!</p>
                            <p>Our PPC management services in digital marketing provide innumerable benefits to your company, such
                                as increased traffic, leads, and conversions. Using PPC effectively, we will provide your organization with a
                                measurable result regardless of return on investment and assist you in meeting your long-term business goals.
                            </p>
                            <p>Tech2Globe, the most qualified PPC Advertising Agency in Digital Marketing, enables entrepreneurs in reaching
                                their targeted audience and establishing their brands. Each business model is special in its own way, with its
                                own set of services, aims, and aspirations, and as a top PPC marketing agency, we know how to execute them to
                                reap the maximum benefits. As a result, rather than using a template approach, we alter digital marketing
                                strategies and PPC campaigns to fit your company&apos;s individual requirements and provide personalized PPC
                                management services.</p>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                            <img src="/images/services/PPC-side-banner.webp" className="img-responsive img-fluid" alt="PPC-Services" />
                        </div>
                    </div>
                    <div>
                        <div className="col-md-12 text-center">
                            <h2 className="main-heading text-danger h4 fw-bold py-3 mb-0"> PPC Campaign Management Services</h2>
                            <p>If you&apos;re ready to use PPC to grow your business, we are the right ones to approach. Contact us now, and
                                we&apos;ll show you how our PPC marketing agency can help you accomplish your goals!</p>
                        </div>
                        <div className="outerBox">
                            <div className="row">
                                {/* pricing block */}
                                <div className={`${Style.pricingBlock} col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 wow fadeinup`}>
                                    <div className={Style.innerBox}>
                                        <div className={Style.iconBox}>
                                            <div className={Style.iconOuter}><img src="/images/services/paid-advertisement-ppc.png" alt="ppc-Services" className="img-responsive" /></div>
                                        </div>
                                        <div className={Style.priceBox}>
                                            <div className={Style.title}>Paid Search Advertisement</div>
                                            <p><a href="/paid-search-advertising-services" className="text-decoration-underline">Paid search
                                                advertising</a> is the most common and effective PPC service. This is the ad type that most
                                                advertisers begin with while experimenting with PPC advertising. These ads are triggered by a user’s
                                                search query and are targeted to the user’s location, device, and other factors. Paid search ads are
                                                typically sold on a cost-per-click (CPC) basis, meaning that the advertiser pays each time a user
                                                clicks on their ad.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* pricing block */}
                                <div className={`${Style.pricingBlock} col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 wow fadeinup`} data-wow-delay="400ms">
                                    <div className={Style.innerBox}>
                                        <div className={Style.iconBox}>
                                            <div className={Style.iconOuter}><img src="/images/services/display-advertisements-ppc.png" alt="ppc-Services" className="img-responsive" /></div>
                                        </div>
                                        <div className={Style.priceBox}>
                                            <div className={Style.title}>Display Advertisements</div>
                                            <p>Display ads by the best PPC management services agency is another kind of paid advertising in which
                                                you offer your goods or services to online visitors as they browse. The best Pay Per Click Service
                                                Companies in India will help you create effective ads that will reach your target audience and
                                                generate leads. We will also help you optimize your campaigns to ensure that you are getting the most
                                                out of your budget.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* pricing block */}
                                <div className={`${Style.pricingBlock} col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 wow fadeinup`} data-wow-delay="800ms">
                                    <div className={Style.innerBox}>
                                        <div className={Style.iconBox}>
                                            <div className={Style.iconOuter}><img src="/images/services/retargeting-ads-ppc.png" alt="ppc-Services" className="img-responsive" /></div>
                                        </div>
                                        <div className={Style.priceBox}>
                                            <div className={Style.title}>Retargeting Ads</div>
                                            <p>A remarketing campaign targets individuals who have already visited your website with ads. Because
                                                the visitor has already expressed interest in your business, remarketing is the ideal PPC solution. It
                                                is typically used to re-engage clients who are about to leave the sales process in order to funnel,
                                                upsell, or cross-sell more items to your present customers. Picture advertisements are regularly
                                                offered to visitors while they explore Google Display .</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="container">
                <div className="row">
                    <div className="col-sm-12 mt-2 text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.3s">
                                    <h2 className="main-heading text-danger h4 fw-bold py-3 mb-0">Best Pay Per Click Service Company in India
                                        Provided To You At Tech2Globe</h2>
                                    <p>You should start with PPC management services as soon as possible to grow your business manifold. </p>
                                </div>
                            </div>
                            <div className="row mt-3 ppc-service-Container-parent">
                                <div className="col-md-6 col-sm-6 col-12 wow fadeInUp mb-3" data-wow-delay="0.4s">
                                    <div className={Style.singleServiecsBlock}>
                                        <FaPaperPlane className="fa-2x fas" />
                                        <h3 className="main-heading text-danger h4 fw-bold py-3 mb-0"><a>PPC Marketing</a></h3>
                                        <p>When it comes to pay per click service companies in India, there are various moving elements. Email
                                            marketing, social media marketing, and search engine optimization, all play an important part here.
                                            However, if you&apos;re not using pay-per-click (PPC) advertising, you&apos;re passing on a powerful tool that
                                            may help your business generate leads and revenue. It is, nevertheless, valuable since it allows you
                                            to engage with your target audience when they are preparing to buy. Tech2Globe delivers PPC campaign
                                            management services designed to support your company&apos;s organic growth.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-12 wow fadeInUp mb-3" data-wow-delay="0.5s">
                                    <div className={Style.singleServiecsBlock}>
                                        <FaMapPin className="fa-2x fas" />
                                        <h3 className="main-heading text-danger h4 fw-bold py-3 mb-0"><a>Conversion Tracking</a></h3>
                                        <p>If you&apos;re ready to use PPC to grow your business, we can help. Contact us right now, and we&apos;ll show
                                            you how our PPC advertising agency may help you achieve your goals. Beginning with keyword research
                                            and analysis, we devote all our efforts to identify relevant keywords that will successfully bring
                                            traffic to your site. Our finest PPC services professionals provide campaign reports that clearly
                                            define what has to be done to increase the campaign&apos;s success.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-12 wow fadeInUp mb-3" data-wow-delay="0.6s">
                                    <div className={Style.singleServiecsBlock}>
                                        <FaDollarSign className="fa-2x fas" />
                                        <h3 className="main-heading text-danger h4 fw-bold py-3 mb-0"><a>Cost Management</a></h3>
                                        <p>We develop a cost model to evaluate the cost of each design choice as part of our PPC campaign
                                            management services. This model includes the cost of resources, overhead, and other costs associated
                                            with the design choice. We also consider the cost of any additional services or products that may be
                                            required to complete the project. Finally, we provide a detailed report of our cost evaluation for
                                            each design choice. This report includes a breakdown of the cost of each component, a comparison of
                                            the cost of each design choice, and a recommendation of the most cost-effective design choice.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-12 wow fadeInUp mb-3" data-wow-delay="0.6s">
                                    <div className={Style.singleServiecsBlock}>
                                        <FaShoppingBag className="fa-2x fas" />
                                        <h3 className="main-heading text-danger h4 fw-bold py-3 mb-0"><a>Google Shopping Ads</a></h3>
                                        <p>Tech2Globe, a PPC management services agency, has over 14 years of expertise. Our team of over
                                            hundreds of PPC professionals will maximize the efficiency of your Google Shopping feed efforts.
                                            Tech2Globe team has demonstrated its skill with Google Ads, met the required ad spend, and increased
                                            our agency&apos;s clientele and revenue. Over the previous 14 years, we have generated over a million leads
                                            and hundreds of millions of dollars for our clients through our PPC management services.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-5 pt-0" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="center-heading">
                                <h2 className="main-heading text-danger text-center h4 fw-bold py-3 mb-0">Our Certifications &amp; Recognitions</h2>
                                <p className="text-center">As a recognized PPC marketing agency, we combine expertise with industry-backed certifications to deliver exceptional results. Our credentials speak for our commitment to quality and performance.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2 col-sm-6">
                            <a href="#" className={Style.servicesSmallItem}>
                                <div className="center">
                                    <img src="/images/services/cer-1.png" className="img-responsive img-fluid" alt="ppc-services" />
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <a href="#" className={Style.servicesSmallItem}>
                                <div className="center">
                                    <img src="/images/services/cer-2.png" className="img-responsive img-fluid" alt="ppc-services" />
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <a href="#" className={Style.servicesSmallItem}>
                                <div className="center">
                                    <img src="/images/services/cer-3.png" className="img-responsive img-fluid" alt="ppc-services" />
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <a href="#" className={Style.servicesSmallItem}>
                                <div className="center">
                                    <img src="/images/services/cer-7.png" className="img-responsive img-fluid" alt="ppc-services" />
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <a href="#" className={Style.servicesSmallItem}>
                                <div className="center">
                                    <img src="/images/services/cer-5.png" className="img-responsive img-fluid" alt="ppc-services" />
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <a href="#" className={Style.servicesSmallItem}>
                                <div className="center">
                                    <img src="/images/services/cer-6.png" className="img-responsive img-fluid" alt="ppc-services" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <FaqSection faqs={faqs} />
            <CaseStudiesService caseStudies={caseStudies} />
        </>
    )
};