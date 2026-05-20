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
    title: "X Marketing Services",
    description:
        "We set up your brand's profile on X to enhance visibility and brand's credibility with optimized keywords.",
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
        "question": "How do I get started with Tech2Globe's X marketing services",
        "answer": "Getting started is very easy. Simply contact us to discuss your goals and we will assign our X marketing team to create a customised strategy according to it. We will begin with profile audit, strategy development, and a customized plan to drive results to increase engagement and conversions."
    },
    {
        "id": "Two",
        "question": "What industries does Tech2Globe serve for X marketing",
        "answer": "Tech2Globe serves a wide range of industries including e-commerce, food, travel, technology, home appliances, and more. Our customized approach ensures that our twitter marketing strategy is tailored to the requirements of your specific industry."
    },
    {
        "id": "Three",
        "question": "How long does it takes to see results from X marketing",
        "answer": "It varies according to the goals and requirements of the specific industry. Our data driven strategies often deliver initial improvements in engagements and visibility within weeks. For instance, clients have reported a 50% followers increase and over 3x times within the first few months of our campaigns."
    },

];




export default function XMarketingServices() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="X Marketing Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="X Marketing Services" imageSrc={"/images/services/service-inner/digital-marketing-banner1.jpg"} />

                            <div className={Style.ContentDiv}>
                                <h4 className={Style.HeadTitle}><img src="/images/services/service-inner/question.png" /> Why Marketing on X is Essential?</h4>
                                <p><strong>X marketing</strong>, earlier referred as Twitter advertising, is the global center of conversation and social engagement.</p>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start align-items-center gap-3 mb-fx">

                                    <div
                                        className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-sm-block"
                                        style={{
                                            border: "2px dotted #e5e2e2",
                                            padding: "10px",
                                        }}
                                    >
                                        <img
                                            src="/images/services/service-inner/global-reach.jpg"
                                            className="img-responsive img-fluid"
                                            alt="Global reach to diverse audience"
                                        />
                                    </div>

                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left pt-3">
                                        <h4
                                            style={{
                                                color: "#c6010b",
                                                fontSize: "18px",
                                            }}
                                        >
                                            <strong>Global Reach to Diverse Audience</strong>
                                        </h4>

                                        <p className="text-start">
                                            With enormous amount of netizens from various countries, age,
                                            gender, and interests, gives businesses access to worldwide market.
                                        </p>
                                    </div>

                                </div>

                                <hr />

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start align-items-center gap-3 mb-fx">

                                    <div
                                        className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-sm-block"
                                        style={{
                                            border: "2px dotted #e5e2e2",
                                            padding: "10px",
                                        }}
                                    >
                                        <img
                                            src="/images/services/service-inner/real-time-engagement-with-users.jpg"
                                            className="img-responsive img-fluid"
                                            alt="Realtime Engagement With Users"
                                        />
                                    </div>

                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left pt-3">
                                        <h4
                                            style={{
                                                color: "#c6010b",
                                                fontSize: "18px",
                                            }}
                                        >
                                            <strong>Realtime Engagement With Users</strong>
                                        </h4>

                                        <p className="text-start">
                                            X enables real time engagement unlike traditional media platforms, allowing businesses to get involved in trending topics, engage with customers and showcase their brands.
                                        </p>
                                    </div>

                                </div>

                                <hr />

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start align-items-center gap-3 mb-fx">

                                    <div
                                        className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-sm-block"
                                        style={{
                                            border: "2px dotted #e5e2e2",
                                            padding: "10px",
                                        }}
                                    >
                                        <img
                                            src="/images/services/service-inner/audience-targeting-on-x.jpg"
                                            className="img-responsive img-fluid"
                                            alt="Audience Targeting on X"
                                        />
                                    </div>

                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left pt-3">
                                        <h4
                                            style={{
                                                color: "#c6010b",
                                                fontSize: "18px",
                                            }}
                                        >
                                            <strong>Audience Targeting on X</strong>
                                        </h4>

                                        <p className="text-start">
                                            With advanced targeting features on X, brands can customize content to suit the relevant customers. Detailed analysis based on age, gender, interests, and behavior, allows businesses to tailor the content to resonate with the right customers.
                                        </p>
                                    </div>

                                </div>

                                <hr />

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start align-items-center gap-3 mb-fx">

                                    <div
                                        className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-sm-block"
                                        style={{
                                            border: "2px dotted #e5e2e2",
                                            padding: "10px",
                                        }}
                                    >
                                        <img
                                            src="/images/services/service-inner/Ad-Formats.jpg"
                                            className="img-responsive img-fluid"
                                            alt="Ad Formats"
                                        />
                                    </div>

                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left pt-3">
                                        <h4
                                            style={{
                                                color: "#c6010b",
                                                fontSize: "18px",
                                            }}
                                        >
                                            <strong>Ad Formats</strong>
                                        </h4>

                                        <p className="text-start">
                                            X advertising offers customizable ad budgets and optimizing tools that will maximize the return on investment and is suitable for all types of businesses, whether a startup or established enterprise.
                                        </p>
                                    </div>

                                </div>

                                <hr />

                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex justify-content-start align-items-center gap-3 mb-fx">

                                    <div
                                        className="col-md-2 col-sm-2 col-xs-3 wpb_single_image d-sm-block"
                                        style={{
                                            border: "2px dotted #e5e2e2",
                                            padding: "10px",
                                        }}
                                    >
                                        <img
                                            src="/images/services/service-inner/consumer-insight.jpg"
                                            className="img-responsive img-fluid"
                                            alt="Consumer Insight"
                                        />
                                    </div>

                                    <div className="col-md-10 col-sm-10 col-xs-12 text-left pt-3">
                                        <h4
                                            style={{
                                                color: "#c6010b",
                                                fontSize: "18px",
                                            }}
                                        >
                                            <strong>Consumer Insight</strong>
                                        </h4>

                                        <p className="text-start">
                                            X provides data on consumer behavior enabling businesses to understand market outlook by monitoring trends, hashtags and conversations. This makes marketing on X essential due to scale, precision, and efficiency.
                                        </p>
                                    </div>

                                </div>

                                <br /><br />


                            </div>




                            <div className={Style.ContentDiv}>
                                <h4 className={Style.HeadTitle}><img src="/images/services/service-inner/services-icon.png" />Our Services</h4>
                                <div className="row">
                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Profile Setup & Optimization</h5>
                                            <p>We set up your brand's profile on X to enhance visibility and brand's credibility with optimized keywords. Using visually appealing page setup, bio, handle, and links to website to establish brand's identity and professional setup for better marketing.</p>

                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; X-Page Setup
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Cover/Profile Photo Design
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; X Page Audit
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Content Creation</h5>
                                            <p>Our <strong>X Marketing Services</strong> includes crafting innovative, engaging, relevant and trending content that attracts audience. With creative posts, visually appealing graphics, trending hashtags, and SEO optimized keywords to boost visibility, increased search ranking and reaching wider audience.</p>


                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Creating Posts
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; SEO Optimized Posts
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Strategy Development</h5>
                                            <p>We develop <strong>X Marketing Strategies</strong> by conducting in-depth analysis of competitors' content, community engagement, post frequencies, and objectives to identify <strong>Key Performance Indicators (KPIs)</strong>. By creating optimum and high-impact strategies, we will put your brand to stand out and connect with the market's user community.</p>

                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Social Media Strategy
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Strategy Development
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Competitor Analysis
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Audience Targeting & Engagement</h5>
                                            <p>We will market outreach programs to maximize impact of X marketing campaigns to direct resources towards high-value audience. With precision marketing, we will focus on engaging with specific groups based on age, gender, location, interests and customer behavior for retargeting.</p>

                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Demographic Targeting
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Interest Targeting
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Retargeting
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Ad Campaign Management</h5>
                                            <p>Our <strong>X Marketing Services</strong> involves creating compelling <strong>X ads</strong> that grab attention and regularly testing and optimizing them to identify what's appealing to the audience. By optimizing budget to ensure correct ad spend, we will ensure that the campaigns achieve verifiable results from enhanced website traffic to improved sales performances.</p>

                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Ad Copywriting
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; A/B Testing
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Ongoing Campaign Management
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Budget Optimization
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.WaListCard}>
                                            <h5>Monitoring & Reporting</h5>
                                            <p>We will track your user interactions (likes, retweets, comments), mentions, and trending hashtags to address customer feedback and understand market sentiment. With detailed reporting, we will provide you with thorough analysis on campaign performance, conversion rate, and audience demographics to boost ROI and scale businesses.</p>

                                            <ul className={Style.ExpList}>
                                                <li><FaArrowRight />&nbsp;&nbsp; Regular Social Media Monitoring
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Performance Tracking
                                                </li>
                                                <li><FaArrowRight />&nbsp;&nbsp; Regular Reporting
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4 className={Style.HeadTitle}><img src="/images/services/service-inner/growth-icon.png" /> Process</h4>
                                <div className="row pt-3 pb-3">
                                    <div className="col-md-4 mb-3">
                                        <div className={Style.NumCard}>
                                            <div className={Style.NumTitle} style={{ backgroundColor: '#c1222c' }}>1</div>
                                            <h3>Planning &amp; Research</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <div className={Style.NumCard}>
                                            <div className={Style.NumTitle} style={{ backgroundColor: '#ffc107' }}>2</div>
                                            <h3>Strategizing</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <div className={Style.NumCard}>
                                            <div className={Style.NumTitle} style={{ backgroundColor: '#03a9f4' }}>3</div>
                                            <h3>Target Research</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <div className={Style.NumCard}>
                                            <div className={Style.NumTitle} style={{ backgroundColor: '#607d8b' }}>4</div>
                                            <h3>Ad Customization</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <div className={Style.NumCard}>
                                            <div className={Style.NumTitle} style={{ backgroundColor: '#9c27b0' }}>5</div>
                                            <h3>Budget & Bidding</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <div className={Style.NumCard}>
                                            <div className={Style.NumTitle} style={{ backgroundColor: '#00764e' }}>6</div>
                                            <h3>Launching Campaign</h3>
                                        </div>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <div className={Style.NumCard}>
                                            <div className={Style.NumTitle} style={{ backgroundColor: '#000000' }}>7</div>
                                            <h3>Tracking Performance</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className={Style.ContentDiv}>
                                <h4 className={Style.HeadTitle}><img src="/images/services/service-inner/question.png" /> Why Choose Tech2globe for X Marketing?</h4>

                                <div className="row align-items-center pt-3">
                                    <div className="col-md-6">
                                        <img src="images/services/service-inner/social-media-experts.jpg" alt="Social Media Experts" className="img-fluid rounded pb-3" />
                                    </div>
                                    <div className="col-md-6">
                                        <h5>Social Media Experts</h5>
                                        <p>Our X marketing company is proficient in marketing on x. We have deeper understandings of X trends, algorithms and best practices to develop engaging content, boosting audience engagement. We have achieved over 50% increase in followers on X for several brands.</p>
                                    </div>
                                </div>

                                <div className="row align-items-center pt-3">

                                    <div className="col-md-6 order-2 order-md-1">
                                        <h5>Custom X Marketing Services</h5>
                                        <p>
                                            We will customise content to according to your needs and business goals.
                                            Our services include profile setup, content creation, targeting,
                                            competitor analysis, optimized keywords and posts to maximize reach on X.
                                            We have given over 70% increase in e-commerce sales for our past clients.
                                        </p>
                                    </div>

                                    <div className="col-md-6 order-1 order-md-2">
                                        <img
                                            src="images/services/service-inner/custom-x-marketing-services.jpg"
                                            alt="Custom X Marketing Services"
                                            className="img-fluid rounded  pb-3"
                                        />
                                    </div>

                                </div>

                                <div className="row align-items-center pt-3">
                                    <div className="col-md-6">
                                        <img src="images/services/service-inner/detailed-reporting.jpg" alt="Detailed Reporting" className="img-fluid rounded pb-3" />
                                    </div>
                                    <div className="col-md-6">
                                        <h5>Detailed Reporting</h5>
                                        <p>We provide detailed analysis on key metrics such as views, clicks, comments, engagement and conversions. To enhance campaign optimization, we track keyword performance, audience behavior and competitor's content and accumulate maximum return on investment (ROI). Our clients have reported more than 3x times increase in organic traffic due to our data-driven insights.</p>
                                    </div>
                                </div>

                                <div className="row align-items-center pt-3">

                                    <div className="col-md-6 order-2 order-md-1">
                                        <h5>Compliant Practices</h5>
                                        <p>
                                            Our X marketing agency strictly adhere to ethical and platform compliant marketing strategies. We make sure to avoid manipulative techniques to protect brand's reputation. Our posts are SEO optimized and our X ads are aligned with its algorithms. Our clients have commended our white-hat tactics used for their businesses.
                                        </p>
                                    </div>

                                    <div className="col-md-6 order-1 order-md-2">
                                        <img
                                            src="images/services/service-inner/compliant-practices.jpg"
                                            alt="Compliant Practices"
                                            className="img-fluid rounded  pb-3"
                                        />
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

            <FaqSection faqs={faqs} />

        </>
    )
};