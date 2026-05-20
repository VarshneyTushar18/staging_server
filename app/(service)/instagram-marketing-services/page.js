import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import { FaHeadset, FaBullseye, FaUserTie, FaHandPointRight, FaArrowRight } from "react-icons/fa";

export const metadata = {
    title: "",
    description:
        "",
    keywords: [
        ""
    ],
    openGraph: {
        title: "",
        siteName: "Tech2Globe Web Solutions LLP",
        description:
            "",
        url: ""
    },
    twitter: {
        card: "summary_large_image",
        title: "",
        description:
            ""
    },
    alternates: {
        canonical: ""
    }
};

const pageHeaderData = {
    title: "Instagram Marketing Services",
    description:
        "Boost your brand in the rapidly evolving digital world through Instagram marketing services. It is key to connecting with your audience and growing your brands. As a leading Instagram marketing agency, Tech2Globe can enhance your brand's online visibility, attract new followers, and maximize your return on investment (ROI). Our data-driven campaign will ensure your brand's success and sustaining growth.",
    buttonText: "Contact us",
    buttonLink: "/contact-us",
    backgroundImage: "/images/services/service-inner/insta-banner.jpg", // your banner image
};

const usefulLinks = [
    { id: 1, name: "About Tech2Globe", path: "/about-us" },
    { id: 2, name: "Infrastructure", path: "/infrastructure" },
    { id: 3, name: "Values", path: "/values" },
    { id: 4, name: "Associations Ascription", path: "/associations-ascription" },
    { id: 5, name: "Clients", path: "/clients" },
    { id: 6, name: "CSR Initiatives", path: "/csr-initiatives" },
    { id: 7, name: "Our Team", path: "/our-team" },
    { id: 8, name: "Life@Tech2globe", path: "/life-at-tech2globe" },
    { id: 9, name: "Career", path: "/career" },
];



const sidebarSections = [
    { heading: "Useful Links", links: usefulLinks },
];

const faqs = [
    {
        "id": "One",
        "question": "Why is Instagram Marketing Services important for Businesses?",
        "answer": "Instagram has high user engagement rate which makes it optimal platform for building brand awareness and attracting more customers. By sharing visually appealing posts & stories, businesses can connect with audiences, showcasing their products and services, and stay on top."
    },
    {
        "id": "Two",
        "question": "How can I use Instagram to promote my brand?",
        "answer": "Define your goals. For example, you want lead generation, brand visibility, target audience, etc. Then share consistent, high-quality content like reels & stories. Partnering with Instagram marketing agency like Tech2Globe will optimize your profiles, run targeted ads, and engage with your followers regularly. We combine customized strategies, data-driven optimization, and creative content to deliver measurable results."
    },
    {
        "id": "Three",
        "question": "How do Instagram Advertising benefits my business?",
        "answer": "Instagram ads offer precise targeting, affordable ad formats, and high engagement, driving traffic and conversions. Out Instagram marketing services optimize campaigns to reduce costs and increase lead quality."
    },
    {
        "id": "Four",
        "question": "How often should I post on Instagram?",
        "answer": "At least 3-4 times a week is recommended. Posting stories everyday can maximize visibility and engagement. Our Instagram marketing agency creates schedules to post content regularly."
    },

];




export default function InstagramMarketingServices() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Instagram Marketing Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Instagram Marketing Services" imageSrc={"/images/services/service-inner/digital-marketing-banner1.jpg"} />

                            <div className={Style.ContentDiv}>
                                <h4 className={Style.HeadTitle}><img src="/images/services/service-inner/question.png" /> Why Do Instagram Advertising and Marketing?</h4>
                                <div className="row align-items-center pb-5">
                                    <div className="col-md-6">
                                        <img src="images/services/service-inner/insta.jpg" className="img-fluid rounded" />
                                    </div>
                                    <div className="col-md-6">
                                        Instagram has 1 billion+ monthly active users and among them over 200 million check out at least one business profile every day. This gives businesses like fashion, travel, food, art and craft industries an opportunity to reach more audiences and getting more followers.<br /><br />Over 62% users says that they became more interested in the product after seeing it on Instagram. Users give feedback and reviews which the general audience trust even more. This helps with brand's online reputation, customers feel familiarity and trust the products. This presents an excellent opportunity for brands to increase sales and revenues for their investments.
                                    </div>
                                </div>
                            </div>




                            <div className={Style.ContentDiv}>
                                <h4 className={Style.HeadTitle}><img src="/images/services/service-inner/services-icon.png" /> Services</h4>
                                <div className="row">
                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Profile Optimization</h5>
                                            <p>Optimizing your profile to rank higher in searches, enhance brand identity, and drive traffic, easier navigation and regional discoverability with</p>

                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; SEO-Optimized Bio
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Branded Visuals
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; CTA links
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Story Highlights
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Keyword research
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Content Development</h5>
                                            <p>Developing content which is customised to brand voice, showcase industry's expertise, capture audience's attention, create high engagement and wider reach through:</p>

                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Engaging Posts
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Reels & Stories
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Hashtag research
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Consistent posts
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Tailored posts
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Ads & Marketing</h5>
                                            <p>Design campaigns to acquire details, generate leads, higher conversion, boost click-through rates, amplify reach, and maximize ROI through:</p>

                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Targeted Ad campaigns
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Lead Ads
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Custom landing pages
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Personalized ads
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Influencer collabs
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Ad spend
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Analytics & Reports</h5>
                                            <p>Delivering detailed reports with recommendations, highlighting successes, challenges and optimization strategies by using tools like Instagram Insight, Google Analytics, and CRM systems to:</p>

                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Track metrics (likes, comments, shares)
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; ROI analysis
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Third-party integration
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Regular reports
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Audience insights
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Monitoring & Management</h5>
                                            <p>Regular monitoring ad performance, community engagement, audience feedback, posting consistency, optimizing content visibility, identifying opportunities to stay ahead of your competition.</p>

                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Campaign oversight
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Content scheduling
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Feedback response
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Optimize content visibility
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Competitor monitoring
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Audience Targeting</h5>
                                            <p>Creating strategies according to the customers' need, relevance, and interests to drive conversion through:</p>

                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Demographic targeting
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Remarketing
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Hashtag targeting
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Regional targeting
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Influencer audience leverage
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <hr />

                            <div className={Style.ContentDiv}>
                                <h4 className={Style.HeadTitle}><img src="/images/services/service-inner/question.png" /> Why Work with Tech2Globe?</h4>

                                <p>
                                    At Tech2Globe, we have a team of experts dedicated to provide you with full service management. Our Instagram marketing agency can deliver original and high-quality Instagram content. Our deeper understanding of the platform will put you forward as a leading brand.<br /><br />

                                    We take data driven approach for marketing. By data analysis, A/B testing and CRM integration, our Instagram marketing agency create strategies to target audience, customize ads, optimize content, reduce cost, and maximize ROI.<br /><br />

                                    You will be provide with cost effective packages tailored to your needs. Whether you are a small or a large business, we will provide you with customised solutions aligned with your brand. Our Instagram marketing services are dedicated to your goals and helping you to achieve your dreams.
                                </p>

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

            <FaqSection faqs={faqs} />

        </>
    )
};