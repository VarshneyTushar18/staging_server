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
    title: "YouTube Marketing Services",
    description:
        "Grow your brand with YouTube Marketing Services via Tech2Globe. We offer high quality video promotion on YouTube. Your brand will be enhanced visually through targeted videos and campaigns, boosting your popularity. Discover how your brand’s views, subscribers and sales increase by partnering with us!",
    buttonText: "Contact us",
    buttonLink: "/contact-us",
    backgroundImage: "/images/services/service-inner/yt-banner.jpg", // your banner image
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
        "question": "How does YouTube Marketing Service works?",
        "answer": "YouTube marketing services work by creating engaging videos that resonate with your target audience. These videos are optimized with keywords and relevant tags to boost visibility in search results. By leveraging YouTube ads and Search Engine Optimisation (SEO) strategies, you can reach a broader audience. Engaging content, consistency, and understanding YouTube's algorithms are key to success, driving views, subscribers, and conversions."
    },
    {
        "id": "Two",
        "question": "How successful is YouTube video marketing?",
        "answer": "YouTube marketing services can be exceptionally successful when executed effectively. With over 2.5 billion logged-in monthly users, it offers an extensive reach. Many businesses have seen substantial growth in their online presence, brand engagement, and conversion rates by leveraging YouTube's vast user base. YouTube's versatile ad formats and targeting options enhance engagement and conversions. Coupled with analytics, it allows businesses to track success, adapt strategies, and maximize ROI, making YouTube video marketing services a potent tool for brand growth and engagement."
    },
    {
        "id": "Three",
        "question": "How can I measure my channel's success?",
        "answer": "YouTube offers a free, self-service viewership analytics and reporting tool called YouTube Analytics. It tells you how many people watch your videos, how frequently, and how they revealed your videos. Use this tool and strategies your YouTube video marketing."
    },
];




export default function YoutubeMarketingServices() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Youtube Marketing Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Youtube Marketing Services" imageSrc={"/images/services/service-inner/digital-marketing-banner1.jpg"} />

                            <div className={Style.ContentDiv}>
                                <h4 className={Style.HeadTitle}><img src="/images/services/service-inner/question.png" /> Why Use Tech2Globe for YouTube Marketing Services?</h4>
                                <div className="row pb-5">
                                    <div className="col-md-6">
                                        <img src="images/services/service-inner/yt.jpg" className="img-fluid rounded" />
                                    </div>
                                    <div className="col-md-6">
                                        At Tech2Globe, Our YouTube marketing agency's focus is on quality, to provide valuable and engaging content. We don't just create content, we tell a story. Our expert team is extensively experienced in navigating across YouTube's algorithm. We use SEO keywords to optimize your videos so that they appear higher in search results, increasing your brand's visibility. We help you create content that attracts viewers, helping you reach newer audiences and building loyal followers. Our YouTube marketing agency help you engage and connect with your followers through likes, comments and polls to get feedback. You can showcase your products and services to attract traffic and guide them to your website and online store. Then all you have to do is sit back and track your success, see which content works best and make smart marketing choices.
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4 className={Style.HeadTitle}><img src="/images/services/service-inner/services-icon.png" /> Tech2Globe's YouTube Marketing Services</h4>
                                <div className="row">
                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Channel Creation</h5>

                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Customized Channel Layout
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Profile Optimization
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Playlist Organization Placement
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Brand Consistency Keywords
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Mobile Optimzation Reports
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Intial Video Setup Targeting
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>SEO & Content Creation</h5>

                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Keyword Research
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Title Optimization
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Videos & Shorts Creation
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Editing
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Script & Subtitles
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Thumbnail Creation
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Video Description
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Tag Research
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; End Screens and Cards
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Ads & Promotion</h5>

                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Ad Formats
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Campaign Setup
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Video Syndication
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Influencer Collaboration
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Ad Optimization
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Analytics</h5>

                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Performance Metrics</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; YT Studio Insights</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Custom Reports</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Competitor Analysis</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Optimization Recommendations</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; A/B Testing</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Ad Formats</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Audience Targeting</h5>
                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Demographic Targeting</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Interest Based Targeting</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Keyword Targeting</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Custom Audiences</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Remarketing</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Localized Targeting</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Affinity and In-Marketing Audiences</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Monetization</h5>

                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Channel Monetization Setup</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Ad Revenue Optimization</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Content Strategy for Monetization</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Membership and Super Chat</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Merchandise Integration</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Affiliate Marketing</li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Sponsorship Guidance</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4 className={Style.HeadTitle}><img src="/images/services/service-inner/benefits-icon.png" /> Benefits</h4>
                                <p>YouTube is the second largest search engine encompassing 1/3rd of the whole internet. It has over 2.5 billion monthly users all across the world. Our YouTube marketing agency can help you tap into this vast ocean of audiences. Stats shows about 68% of YouTube users watch videos to make purchase decisions. With our YouTube advertising agency, we can increase conversion through appealing content and targeted Ads. Mobile Ads on YouTube are approx. 84% more likely to grab user’s attention than TV ads. Our YouTube advertising agency can customize ads and campaigns for mobile user audiences. Partner with our YouTube advertising agency to utilize your budget with customized targeting and analytics, delivering measurable results for your brands.</p>
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