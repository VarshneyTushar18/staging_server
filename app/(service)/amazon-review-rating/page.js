import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import { FaChartBar, FaChartLine, FaHandshake, FaLightbulb, FaSearch, FaShieldAlt, FaUsers } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Link from "next/link";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import ClientPortfolio from "@/app/components/services/ClientPortfolio/ClientPortfolio";

export const metadata = {
    title:
        "Amazon Review and Rating Management Guide",

    description:
        "How to Effectively Manage your Amazon Reviews & Rating to Accelerate Sales with Tech2Globe",

    keywords: [
        "Amazon Review And Rating Services",
        "Amazon Review Services",
        "Amazon Rating Services",
        "Amazon Marketing Services",
    ],

    alternates: {
        canonical: "https://stagenew.tech2globe.tech/amazon-review-rating",
    },

    openGraph: {
        title:
            "Amazon Review and Rating Management Guide",
        description:
            "How to Effectively Manage your Amazon Reviews & Rating to Accelerate Sales with Tech2Globe",
        url: "https://stagenew.tech2globe.tech/amazon-review-rating",
        siteName: "Tech2Globe",
        type: "website",
    },

    twitter: {
        card: "summary",
        title:
            "Amazon Review and Rating Management Guide",
        description:
            "How to Effectively Manage your Amazon Reviews & Rating to Accelerate Sales with Tech2Globe",
    },
};

const pageHeaderData = {
    title: "Amazon Review And Rating",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};

const resources = [
    { id: 1, name: "Portfolio", path: "/portfolio" },
    { id: 2, name: "Case Studies", path: "/case-studies" },
    { id: 3, name: "Testimonial", path: "/testimonial" },
];

const usefulLinks = [
    { id: 4, name: "SEO On Page Services", path: "/seo-services" },
    { id: 5, name: "E-Commerce SEO Services", path: "/ecommerce-seo-services" },
    { id: 6, name: "Link building Services", path: "/link-building-services" },
    { id: 7, name: "PPC Management Services", path: "/ppc-management-services" },
    { id: 8, name: "Social media Marketing Services", path: "/social-media-marketing-services" },
    { id: 9, name: "Email Marketing Services", path: "/email-marketing-services" },
    { id: 10, name: "Online Reputation Management", path: "/online-reputation-management-services" },
    { id: 11, name: "Content Marketing", path: "/content-marketing" },
    { id: 12, name: "Guest Posting", path: "/guest-posting-services" }
];


const sidebarSections = [
    { heading: "Resources", links: resources },
    { heading: "Useful Links", links: usefulLinks },
];


const faqs = [
    {
        id: "One",
        question: "What are Amazon review and rating services?",
        answer: `
        Amazon review and rating services are professional solutions that help sellers acquire, monitor and manage customer feedback on their Amazon listings through ethical, policy-compliant methods. A reputable Amazon review management company like Tech2Globe uses approved strategies to improve your product's rating and review count — without resorting to paid, fake or incentivised reviews that violate Amazon's terms.
      `,
    },
    {
        id: "Two",
        question: "How does an Amazon review management service work?",
        answer: `
        An Amazon review management service supports sellers through the entire feedback lifecycle — from identifying the right moment to request reviews, to monitoring incoming feedback, responding to concerns and analysing trends to continuously improve your review profile. Tech2Globe's service covers all of these areas using a structured, compliant approach.
      `,
    },
    {
        id: "Three",
        question: "Is it legal to use review services for Amazon?",
        answer: `
        Yes — Amazon review services are completely legal when they operate within Amazon's Terms of Service. Legal services focus on encouraging authentic reviews from real buyers using approved request mechanisms, product sampling programmes and community engagement. Illegal practices include buying reviews, incentivising positive feedback or using fake reviewer networks.
      `,
    },
    {
        id: "Four",
        question: "Can Amazon review services help increase my sales?",
        answer: `
        Yes. Genuine reviews and higher star ratings directly improve click-through rates, conversion rates and organic rankings — all of which contribute to higher sales volumes. A well-managed Amazon review profile is one of the highest-ROI investments an Amazon seller can make.
      `,
    },
    {
        id: "Five",
        question: "What is the risk of buying Amazon reviews?",
        answer: `
        Attempting to buy Amazon reviews is a violation of Amazon's Terms of Service and carries severe consequences — including the permanent removal of reviews, listing suppression and account suspension. At Tech2Globe, we never recommend or use such practices. Our methods are 100% compliant and designed for long-term, sustainable growth.
      `,
    },
    {
        id: "Six",
        question: "How long does it take to see results from Amazon review services?",
        answer: `
        Results vary depending on your current review volume, product category and the strategies deployed. Most sellers begin seeing measurable improvements in review velocity and ratings within 4 to 8 weeks of implementing a structured, ethical review management strategy.
      `,
    },
    {
        id: "Seven",
        question: "Do you offer Amazon review services for sellers across all categories?",
        answer: `
        Yes. Tech2Globe provides Amazon review and rating management services for sellers across all major product categories on Amazon India and international marketplaces. Our team adapts its strategy to the specific characteristics and buyer behaviour patterns of each product category.
      `,
    },
    {
        id: "Eight",
        question: "What is the best way to improve my Amazon product rating?",
        answer: `
        The most effective and sustainable way to improve your Amazon product rating is a combination of delivering high product quality, leveraging Amazon's official review request feature, enrolling in the Vine programme (if eligible), and consistently engaging with customer feedback. Tech2Globe can design and execute this entire strategy on your behalf.
      `,
    },
    {
        id: "Nine",
        question: "How do you monitor Amazon customer reviews?",
        answer: `
        We use professional Amazon review monitoring tools that track incoming reviews in real time, alert you to new feedback and provide sentiment analysis across your listing portfolio. This allows for fast, informed responses to both positive and negative reviews — strengthening your seller reputation continuously.
      `,
    },
    {
        id: "Ten",
        question: "What makes Tech2Globe different from other Amazon review agencies?",
        answer: `
        Tech2Globe combines deep Amazon marketplace expertise, a fully ethical and compliant approach and a data-driven review management strategy that delivers measurable, lasting results. We prioritise long-term account health and brand reputation over short-term shortcuts — making us a trusted partner for serious Amazon sellers in India and globally.
      `,
    },
];


const portfolio = [
    {
        title: "CATALOGUING",
        items: [
            {
                title: "Alvish",
                link: "https://www.amazon.com/dp/B07M8VYY4L",
                img: "/images/services/portfolio-img/alvish.jpg",
            },
            {
                title: "Teliaoils",
                link: "https://www.amazon.co.uk/dp/B00IVNC114/",
                img: "/images/services/portfolio-img/teliaoils.jpg",
            },
            {
                title: "Joe Kitchen",
                link: "https://www.amazon.de/dp/B07G8MT1C9",
                img: "/images/services/portfolio-img/joejis-kitchen.jpg",
            },
            {
                title: "Elegent",
                link: "https://www.amazon.in/dp/B078HWPJSJ",
                img: "/images/services/portfolio-img/elegant.jpg",
            },
            {
                title: "Jabra",
                link: "https://www.amazon.co.uk/dp/B00548P1DE",
                img: "/images/services/portfolio-img/jabra.jpg",
            },
            {
                title: "Logitech",
                link: "https://www.amazon.co.uk/dp/B01BGBJ8Y0",
                img: "/images/services/portfolio-img/logitech.jpg",
            },
        ],
    },
    {
        title: "EBC/A+",
        items: [
            {
                title: "Hopwater",
                link: "https://www.amazon.com/dp/B07FM6DPMG",
                img: "/images/services/portfolio-img/hopwater.jpg",
            },
            {
                title: "Djmate",
                link: "https://www.amazon.in/dp/B07KKM37T4",
                img: "/images/services/portfolio-img/djmate.jpg",
            },
            {
                title: "Glomania",
                link: "https://www.amazon.com/dp/B00E1P4BRS",
                img: "/images/services/portfolio-img/glomania.jpg",
            },
            {
                title: "Greenyi",
                link: "https://www.amazon.com/dp/B07C7Q2R6D",
                img: "/images/services/portfolio-img/greenyi.jpg",
            },
            {
                title: "Lesenz",
                link: "https://www.amazon.co.uk/dp/B019VE5S98",
                img: "/images/services/portfolio-img/lesenz.jpg",
            },
            {
                title: "K-Linda",
                link: "https://www.amazon.com/dp/B071FTW381",
                img: "/images/services/portfolio-img/k-linda.jpg",
            },
            {
                title: "CHZ",
                link: "https://www.amazon.com/dp/B07QTCFLFC",
                img: "/images/services/portfolio-img/chz.jpg",
            },
        ],
    },
    {
        title: "STORES",
        items: [
            {
                title: "Tulimed",
                link: "https://www.amazon.com/tulimed",
                img: "/images/services/portfolio-img/tulimed-store.jpg",
            },
            {
                title: "Weavely",
                link: "https://www.amazon.com/stores/page/A6347872-5FA2-4541-90CB-E2386113006F",
                img: "/images/services/portfolio-img/weavely-store.jpg",
            },
            {
                title: "Le Mirch",
                link: "https://www.amazon.com/lemirch",
                img: "/images/services/portfolio-img/le-mirch-store.jpg",
            },
        ],
    },
    {
        title: "INFOGRAPHIC",
        items: [
            {
                title: "Demarkt",
                link: "https://www.amazon.co.uk/dp/B01N5227U7",
                img: "/images/services/portfolio-img/demarkt.jpg",
            },
            {
                title: "Maxboost",
                link: "https://www.amazon.com/dp/B073DLZWX7",
                img: "/images/services/portfolio-img/maxboost.jpg",
            },
            {
                title: "Mpow",
                link: "https://www.e-panneur.ca/",
                img: "/images/services/portfolio-img/mpow.jpg",
            },
            {
                title: "720° Dgree",
                link: "https://www.amazon.fr/dp/B072FJXFBW",
                img: "/images/services/portfolio-img/720-dgree.jpg",
            },
        ]
    },
    {
        title: "RATING & REVIEWS",
        items: [
            {
                title: "Elegent",
                link: "https://www.amazon.in/dp/B078HWPJSJ",
                img: "/images/services/portfolio-img/elegant.jpg",
            },
            {
                title: "Logitech",
                link: "https://www.amazon.co.uk/dp/B01BGBJ8Y0",
                img: "/images/services/portfolio-img/logitech.jpg",
            },
            {
                title: "Belkin",
                link: "https://www.amazon.co.uk/dp/B00AYNRLFA",
                img: "/images/services/portfolio-img/belkin.jpg",
            },
        ],
    }
]


const portfolioClients = [
    {
        initials: "BB",
        gradient: "#0b2e58",
        client: "BritBotanicals",
        country: "UK",
        project: "Review Recovery Strategy",
        desc: "UK botanicals brand that improved overall product rating from 3.4 to 4.6 stars in 90 days through compliant ethical review management strategies.",
        category: "Review & Rating",
        result: "3.4 → 4.6 stars in 90 days",
        resultSub: "Rating Improvement",
    },
    {
        initials: "GP",
        gradient: "#0b2e58",
        client: "GermanPure Health",
        country: "Germany",
        project: "Negative Review Crisis Response",
        desc: "German health brand that fully recovered its rating after Tech2Globe professionally managed a surge of negative reviews caused by a logistics issue.",
        category: "Review & Rating",
        result: "Rating fully restored",
        resultSub: "Crisis Recovery",
    },
    {
        initials: "PM",
        gradient: "#0b2e58",
        client: "PureMaple Canada",
        country: "Canada",
        project: "Review Generation Program",
        desc: "Canadian maple brand that doubled its review count in four months using Amazon's Request a Review feature and compliant post-purchase communication sequences.",
        category: "Review & Rating",
        result: "2x review count in 4 months",
        resultSub: "Review Growth",
    },
    {
        initials: "ZO",
        gradient: "#0b2e58",
        client: "ZenOrganics USA",
        country: "USA",
        project: "Review Monitoring + Response",
        category: "Review & Rating",
        result: "100% review response rate",
        resultSub: "Engagement Coverage",
    },
    {
        initials: "KF",
        gradient: "#0b2e58",
        client: "KidsFirst Toys",
        country: "Australia",
        project: "Multi-ASIN Review Strategy",
        category: "Review & Rating",
        result: "+500 verified reviews added",
        resultSub: "Review Expansion",
    },
];

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe implemented ethical review management strategies that significantly improved our overall rating from 3.4 to 4.6 stars in just 90 days. Their approach is fully compliant with Amazon's policies. Outstanding results.",
        name: "Emma Watson | BritBotanicals",
        location: "UK",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "We had a flood of negative reviews due to a logistics issue. Tech2Globe helped us manage the situation — responding professionally, resolving customer issues, and deploying compliant review recovery strategies. Rating fully restored.",
        name: "Lucas Weber | GermanPure Health",
        location: "Germany",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe's review management program doubled our review count within 4 months using Amazon's Request a Review feature and post-purchase communication sequences. Completely policy-compliant and highly effective.",
        name: "Michelle Tremblay | PureMaple Canada",
        location: "Canada",
    },
];


export default function AmazonReviewRating() {
    return (

        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Amazon Review Rating" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Amazon Review Rating" imageSrc="/images/services/service-inner/amazon-virtual-assistant-top-banner2.jpg" />
                            <div className={Style.ContentDiv}>
                                <h2>Drive More Sales with Expert Amazon Review &amp; Rating Services</h2>
                                <p>Strengthen your Amazon presence, build buyer confidence and grow revenue with Tech2Globe&apos;s professional Amazon Review and Rating Services. As a leading Amazon review management company in India, we help sellers and brands acquire genuine, policy-compliant Amazon reviews that improve search rankings, increase conversions and establish long-term marketplace credibility.</p>
                                <p>Our ethical, result-focused approach to Amazon review and rating management is built on transparent strategies, real customer engagement and full compliance with Amazon&apos;s guidelines — so your business grows safely and sustainably.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/stars.png" alt="" className={Style.InnerIcon} /> Amazon Product Review and Rating Management Services</h5>
                                <p>On Amazon, your product&apos;s rating and review count are among the most powerful factors influencing both rankings and purchase decisions. Shoppers trust peer feedback more than any advertisement, and Amazon&apos;s algorithm rewards listings that consistently gather high-quality, verified feedback.</p>
                                <p>Tech2Globe&apos;s Amazon product review and rating service uses smart, compliant strategies to help sellers build a credible review profile, monitor feedback trends and respond proactively to customer concerns. We use advanced tools to track your Amazon product rating, analyse review quality and identify opportunities to strengthen your overall reputation.</p>
                                <p>Unlike risky shortcuts like paid or fake Amazon reviews, our methodology is grounded in genuine customer outreach, ethical post-purchase follow-up and Amazon-approved engagement techniques.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-3"><img src="/images/services/service-inner/list.png" alt="" className={Style.InnerIcon} /> Why Do Amazon Reviews and Ratings Matter for Your Business?</h5>
                                <p>Amazon customer reviews and star ratings are far more than just social proof — they are a core growth lever for any seller operating on the platform. Here is why they matter:</p>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ConsCard} h-100 p-4 border rounded bg-white text-center`}>
                                            <div className={`${Style.IcoHolder} d-inline-flex justify-content-center align-items-center bg-primary text-white rounded-circle`}>
                                                <FaShieldAlt />
                                            </div>
                                            <h5 className="mb-3">They Build Instant Trust</h5>
                                            <p className="mb-0 text-muted">Buyers browsing Amazon make purchasing decisions in seconds. A strong rating and a healthy volume of authentic reviews instantly signals product quality and seller reliability, reducing hesitation and increasing add-to-cart rates.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ConsCard} h-100 p-4 border rounded bg-white text-center`}>
                                            <div className={`${Style.IcoHolder} d-inline-flex justify-content-center align-items-center bg-warning text-white rounded-circle`}>
                                                <FaChartLine />
                                            </div>
                                            <h5 className="mb-3">They Directly Influence Amazon Rankings</h5>
                                            <p className="mb-0 text-muted">Amazon&apos;s A9 and A10 algorithms factor in review velocity, rating scores and review quality when determining search result placements. Products with consistently strong Amazon ratings rank higher organically, delivering more visibility without additional ad spend.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ConsCard} h-100 p-4 border rounded bg-white text-center`}>
                                            <div className={`${Style.IcoHolder} d-inline-flex justify-content-center align-items-center bg-danger text-white rounded-circle`}>
                                                <FaChartBar />
                                            </div>
                                            <h5 className="mb-3">They Improve Conversion Rates</h5>
                                            <p className="mb-0 text-muted">Higher ratings and more detailed, helpful reviews convert browsers into buyers. Research consistently shows that products with 4-star ratings and above dramatically outperform those with sparse or low-rated feedback in click-through and purchase rates.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ConsCard} h-100 p-4 border rounded bg-white text-center`}>
                                            <div className={`${Style.IcoHolder} d-inline-flex justify-content-center align-items-center bg-primary text-white rounded-circle`}>
                                                <FaUsers />
                                            </div>
                                            <h5 className="mb-3">They Strengthen Seller Reputation</h5>
                                            <p className="mb-0 text-muted">Beyond individual products, a positive review ecosystem contributes to your overall Amazon seller feedback score — making your account more resilient, trusted and competitive across all your listings.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/place.png" alt="" className={Style.InnerIcon} /> Explore Our Other Review and Rating Services:</h5>
                                <ul>
                                    <li className="mb-2"><Link href="/flipkart-review-services" className="text-decoration-none fw-normal">Flipkart Review Services</Link></li>
                                    <li className="mb-2"><Link href="/google-reviews-services" className="text-decoration-none fw-normal">Google Reviews Services</Link></li>
                                    <li className="mb-2"><Link href="/myntra-review-services" className="text-decoration-none fw-normal">Myntra Review Services</Link></li>
                                    <li className="mb-2"><Link href="/nykaa-review-services" className="text-decoration-none fw-normal">Nykaa Review Services</Link></li>
                                    <li className="mb-2"><Link href="/meesho-review-services" className="text-decoration-none fw-normal">Meesho Review Services</Link></li>
                                    <li className="mb-2"><Link href="/trustpilot-review-services" className="text-decoration-none fw-normal">Trustpilot Review Services</Link></li>
                                    <li><Link href="/jiomart-review-services" className="text-decoration-none fw-normal">JioMart Review Services</Link></li>
                                </ul>
                            </div>



                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/lightbulb.png" alt="" className={Style.InnerIcon} /> How to Get Amazon Reviews Legally and Effectively</h5>
                                <p>Many sellers are tempted by quick-fix options like buying Amazon reviews, but these tactics violate Amazon&apos;s Terms of Service and carry serious risks including listing removal and permanent account suspension. The safest and most effective path to a strong review profile is through Amazon-approved methods.</p>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img src="/images/services/service-inner/badge.png" alt="Deliver an Outstanding Product Experience" width="100%" />
                                            <div className={Style.WaCardBody}>
                                                <h5>Deliver an Outstanding Product Experience</h5>
                                                <p>The foundation of any successful review strategy is a product that genuinely impresses customers. High product quality paired with excellent packaging and accurate listing descriptions naturally motivates buyers to leave positive, unsolicited feedback.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img src="/images/services/service-inner/positive-review.png" alt="Use Amazon's Official 'Request a Review' Feature" width="100%" />
                                            <div className={Style.WaCardBody}>
                                                <h5>Use Amazon&apos;s Official &apos;Request a Review&apos; Feature</h5>
                                                <p>Amazon provides sellers with a built-in mechanism to request feedback from verified purchasers after a completed transaction. Leveraging this tool within the allowed timeframe is one of the safest and most reliable ways to grow your verified review count.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img src="/images/services/service-inner/stars-1.png" alt="Enrol in Amazon's Vine Programme" width="100%" />
                                            <div className={Style.WaCardBody}>
                                                <h5>Enrol in Amazon&apos;s Vine Programme</h5>
                                                <p>For brand-registered sellers, the Amazon Vine programme connects products with trusted, experienced reviewers who provide honest, detailed feedback. This is an approved, structured pathway to building an early review base for new or updated listings.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img src="/images/services/service-inner/users.png" alt="Build Community Engagement" width="100%" />
                                            <div className={Style.WaCardBody}>
                                                <h5>Build Community Engagement</h5>
                                                <p>Maintaining an active presence on social media and brand-related forums creates a loyal customer community whose members are far more likely to voluntarily share their Amazon experiences through genuine reviews.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img src="/images/services/service-inner/handshake.png" alt="Monitor, Respond and Improve" width="100%" />
                                            <div className={Style.WaCardBody}>
                                                <h5>Monitor, Respond and Improve</h5>
                                                <p>Actively managing Amazon customer feedback — responding to concerns, resolving issues publicly and continuously improving your product — sends trust signals to both buyers and Amazon&apos;s algorithm, reinforcing your credibility over time.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-3"><img src="/images/services/service-inner/stars.png" alt="" className={Style.InnerIcon} /> Key Benefits of Strong Amazon Ratings and Reviews</h5>
                                <p>Investing in a legitimate Amazon review and rating improvement strategy delivers compounding long-term benefits across your entire Amazon operation:</p>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaHandshake />
                                            </div>
                                            <h5 className="fw-bold mb-2">Greater product credibility with first-time buyers</h5>
                                            <p className="text-muted medium mb-0">Shoppers trust Amazon listings with a high volume of authentic, detailed reviews far more than sparse or unverified ones.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaSearch />
                                            </div>
                                            <h5 className="fw-bold mb-2">Higher organic search rankings</h5>
                                            <p className="text-muted medium mb-0">Strong rating metrics feed Amazon&apos;s algorithm, improving your product&apos;s position in competitive search results — reducing reliance on expensive PPC advertising.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaChartLine />
                                            </div>
                                            <h5 className="fw-bold mb-2">Improved conversion and sales velocity</h5>
                                            <p className="text-muted medium mb-0">Every additional star and every additional review increases the probability a visitor completes a purchase, directly improving your revenue per impression.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaShieldAlt />
                                            </div>
                                            <h5 className="fw-bold mb-2">Better Amazon seller account health</h5>
                                            <p className="text-muted medium mb-0">A positive feedback track record improves your overall seller standing, reducing the risk of performance-related restrictions.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-3">
                                        <div className={`${Style.ServiceCard} text-center p-4 border rounded h-100 bg-white`}>
                                            <div className={Style.Icon}>
                                                <FaLightbulb />
                                            </div>
                                            <h5 className="fw-bold mb-2">Sustainable competitive advantage</h5>
                                            <p className="text-muted medium mb-0">Genuine, organic review growth creates a moat that competitors cannot replicate quickly — especially if they rely on risky or black-hat review methods.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/clicker.png" alt="" className={Style.InnerIcon} /> What Makes an Effective Amazon Product Review?</h5>
                                <p>At Tech2Globe, our approach to Amazon review management is built around encouraging genuine, well-structured customer feedback. Here is what constitutes a high-quality Amazon product review:</p>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img src="/images/services/service-inner/liked.png" alt="Authenticity Above All" width="100%" />
                                            <div className={Style.WaCardBody}>
                                                <h5>Authenticity Above All</h5>
                                                <p>Effective reviews reflect real purchase and usage experiences. Authentic voices — mentioning specific use cases, honest assessments of strengths and weaknesses — build far more buyer trust than generic, promotional language.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img src="/images/services/service-inner/info.png" alt="Specific Product Details" width="100%" />
                                            <div className={Style.WaCardBody}>
                                                <h5>Specific Product Details</h5>
                                                <p>Reviewers who mention exact product features, performance benchmarks, dimensions, or real-world usability observations provide the kind of actionable information that genuinely helps future buyers make informed decisions.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img src="/images/services/service-inner/stars.png" alt="Balanced Perspectives" width="100%" />
                                            <div className={Style.WaCardBody}>
                                                <h5>Balanced Perspectives</h5>
                                                <p>Reviews that acknowledge minor limitations alongside overall satisfaction appear more credible and are less likely to be flagged or dismissed by prospective buyers. Balance is a trust signal.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img src="/images/services/service-inner/clicker.png" alt="Clear, Accessible Language" width="100%" />
                                            <div className={Style.WaCardBody}>
                                                <h5>Clear, Accessible Language</h5>
                                                <p>Reviews written in straightforward, conversational language that any buyer can understand — regardless of technical background — are read more, rated as helpful more often and carry more weight with Amazon&apos;s algorithm.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img src="/images/services/service-inner/product-campaign.png" alt="Photo and Video Evidence" width="100%" />
                                            <div className={Style.WaCardBody}>
                                                <h5>Photo and Video Evidence</h5>
                                                <p>Reviews accompanied by photos or short videos showing the product in actual use are consistently rated as the most helpful by Amazon buyers and are given additional prominence in the review display — strengthening both credibility and conversion impact.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/customer-acatalog.png" alt="" className={Style.InnerIcon} /> Why Amazon Sellers Choose Tech2Globe for Review Management:</h5>
                                <ul>
                                    <li className="mb-2">Enhanced brand credibility through verified, genuine feedback</li>
                                    <li className="mb-2">Improved organic rankings driven by consistent review quality</li>
                                    <li className="mb-2">Increased sales via higher conversion rates on review-rich listings</li>
                                    <li className="mb-2">Active customer engagement strategies that encourage voluntary feedback</li>
                                    <li className="mb-2">Full compliance with Amazon&apos;s Terms of Service at every step</li>
                                    <li>Time-saving, end-to-end review management handled by experts</li>
                                </ul>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h5 className="pt-3 pb-2"><img src="/images/services/service-inner/customer-acatalog.png" alt="" className={Style.InnerIcon} /> Our Amazon Review and Rating Services</h5>
                                <div className={`${Style.PageAccordion} accordion`} id="accordionReviewServices">
                                    <div className={`${Style.AccordionItem} accordion-item`}>
                                        <h2 className="accordion-header" id="headingReviewOne">
                                            <button className={`${Style.AccordionButton} accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseReviewOne" aria-expanded="true" aria-controls="collapseReviewOne">
                                                Verified Review Acquisition
                                            </button>
                                        </h2>
                                        <div id="collapseReviewOne" className="accordion-collapse collapse show" aria-labelledby="headingReviewOne" data-bs-parent="#accordionReviewServices">
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="mb-0">We help Amazon sellers build a genuine, policy-compliant review base using approved outreach methods. Our strategies are designed to generate authentic verified feedback that strengthens your listing&apos;s credibility — without any risk of account penalties.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${Style.AccordionItem} accordion-item`}>
                                        <h2 className="accordion-header" id="headingReviewTwo">
                                            <button className={`${Style.AccordionButton} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseReviewTwo" aria-expanded="false" aria-controls="collapseReviewTwo">
                                                Amazon Product Testing Campaigns
                                            </button>
                                        </h2>
                                        <div id="collapseReviewTwo" className="accordion-collapse collapse" aria-labelledby="headingReviewTwo" data-bs-parent="#accordionReviewServices">
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="mb-0">We facilitate ethical product sampling programmes that put your items in the hands of real buyers who provide honest, detailed feedback — generating quality reviews that reflect genuine usage experiences.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${Style.AccordionItem} accordion-item`}>
                                        <h2 className="accordion-header" id="headingReviewThree">
                                            <button className={`${Style.AccordionButton} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseReviewThree" aria-expanded="false" aria-controls="collapseReviewThree">
                                                Review Monitoring and Analytics
                                            </button>
                                        </h2>
                                        <div id="collapseReviewThree" className="accordion-collapse collapse" aria-labelledby="headingReviewThree" data-bs-parent="#accordionReviewServices">
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="mb-0">Using advanced Amazon review tracking tools, we monitor your rating trends, identify patterns in customer sentiment and provide actionable insights to improve product quality and listing performance.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${Style.AccordionItem} accordion-item`}>
                                        <h2 className="accordion-header" id="headingReviewFour">
                                            <button className={`${Style.AccordionButton} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseReviewFour" aria-expanded="false" aria-controls="collapseReviewFour">
                                                Amazon Seller Feedback Management
                                            </button>
                                        </h2>
                                        <div id="collapseReviewFour" className="accordion-collapse collapse" aria-labelledby="headingReviewFour" data-bs-parent="#accordionReviewServices">
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="mb-0">Beyond individual product reviews, we manage your overall Amazon seller feedback score — tracking ratings, addressing negative feedback and implementing best practices to maintain a high-performing seller profile.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${Style.AccordionItem} accordion-item`}>
                                        <h2 className="accordion-header" id="headingReviewFive">
                                            <button className={`${Style.AccordionButton} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseReviewFive" aria-expanded="false" aria-controls="collapseReviewFive">
                                                Customer Engagement Strategy
                                            </button>
                                        </h2>
                                        <div id="collapseReviewFive" className="accordion-collapse collapse" aria-labelledby="headingReviewFive" data-bs-parent="#accordionReviewServices">
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="mb-0">We build structured post-purchase communication flows that encourage satisfied buyers to share their experience — using Amazon-approved touchpoints to maximise voluntary, authentic review generation.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${Style.AccordionItem} accordion-item`}>
                                        <h2 className="accordion-header" id="headingReviewSix">
                                            <button className={`${Style.AccordionButton} accordion-button collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseReviewSix" aria-expanded="false" aria-controls="collapseReviewSix">
                                                Review Quality Optimisation
                                            </button>
                                        </h2>
                                        <div id="collapseReviewSix" className="accordion-collapse collapse" aria-labelledby="headingReviewSix" data-bs-parent="#accordionReviewServices">
                                            <div className={`${Style.AccordionBody} accordion-body`}>
                                                <p className="mb-0">Our team analyses the quality and content of existing reviews to identify gaps, address recurring concerns and ensure your review profile communicates the right trust signals to both Amazon&apos;s algorithm and prospective buyers.</p>
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
            </section >


            {/* <div className="StoreCreationTabs">
                <PortfolioTabs data={portfolio} title={'Our Amazon Portfolio'} description={'With over 500+ clients across the world, Tech2globe has delivered hundreds of cost effective and high-quality solutions for a wide range of industries and domains including consumer and business development, e-Commerce, retail, manufacturing & many others.'} />
            </div> */}

            <ClientPortfolio clients={portfolioClients} />
            <ClientSlider testimonials={testimonials} />

            <FaqSection faqs={faqs} />

        </>
    )
};
