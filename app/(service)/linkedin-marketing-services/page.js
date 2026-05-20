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
    title: "LinkedIn Marketing Services",
    description:
        "Grow your business through LinkedIn by joining us. We provide you with marketing services that will increase your brand’s popularity and create maximum engagement with prospective customers & partners. Our LinkedIn marketing agency will provide you with valuable insights and expertise to stay ahead and ensure that you maximize your revenue from your investments.<br/>Get a free proposal by filling out the contact form today.",
    buttonText: "Contact us",
    buttonLink: "/contact-us",
    backgroundImage: "/images/services/service-inner/linkedin-banner.jpg", // your banner image
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
        "question": "What are the benefits of working with the LinkedIn Marketing Agency?",
        "answer": "Working with LinkedIn marketing services helps B2B companies scale faster and with more efficiency. A LinkedIn marketing agency or LinkedIn Advertising agency can offer benefits like: Access to platform- specific expertise.,Cost savings vs building an in -house team., Faster go - to - market with expert execution., Personalized messaging and outreach., Strategy and content aligned with audience needs., Full - service support, higher quality engagement, and better lead conversion."
    },
    {
        "id": "Two",
        "question": "What industries are best for LinkedIn Ads?",
        "answer": "LinkedIn ads are particularly effective for industries that target a professional audience. These industries range from technology and software to healthcare, biotechnology, manufacturing, engineering, professional services, education, and more. LinkedIn Ads' advanced targeting features are tailored for B2B marketing, enabling precise engagement with key decision-makers and industry influencers."
    },
    {
        "id": "Three",
        "question": "What should I expect from a good LinkedIn advertising agency?",
        "answer": "A top LinkedIn advertising agency, like Tech2Globe, would deliver customized strategies that drive high quality leads through optimized profiles, engaging content and targeted ads. Expect data-driven analytics, personalized outreach and compelling visuals to boost brand credibility and engagement. With dedicated support and proven expertise, the agency ensures cost-effective, scalable solutions aligned with your business goals."
    },

];




export default function LinkedinMarketingServices() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Linkedin Marketing Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Linkedin Marketing Services" imageSrc={"/images/services/service-inner/digital-marketing-banner1.jpg"} />

                            <div className={Style.ContentDiv}>
                                <h4 className={Style.HeadTitle}><img src="/images/services/service-inner/question.png" /> Why choose to work with Tech2Globe?</h4>
                                <ul className="inner-list pb-2">
                                    <li>
                                        Our LinkedIn marketing agency creates strategies that are customized according to your needs.
                                    </li>

                                    <li>
                                        We prioritize your business goals, and targeting ad options and customize the campaigns to attract maximum conversion.
                                    </li>

                                    <li>
                                        Our LinkedIn marketing agency creates custom graphics, animations, and videos to provide a visual & creative edge.
                                    </li>

                                    <li>
                                        We put emphasis on creating quality content that puts you above and helps you stand out from your competitors.
                                    </li>

                                    <li>
                                        Our LinkedIn ads agency's team is a proven expert in creating visually appealing ads and content that drives conversions, leads, and revenues.
                                    </li>

                                    <li>
                                        We focus on generating quality leads through personalized interactions to boost sales.
                                    </li>

                                    <li>
                                        Our team will help you connect with and build strong business-to-business (B2B) and business-to-customer (B2C) relationships.
                                    </li>

                                    <li>
                                        We provide comprehensive reports to evaluate the campaign's success and devise future strategies.
                                    </li>

                                    <li>
                                        Our LinkedIn marketing agency is completely dedicated to providing full support, assistance, and smooth campaign execution for your brands.
                                    </li>
                                </ul>
                            </div>




                            <div className={Style.ContentDiv}>
                                <h4 className={Style.HeadTitle}><img src="/images/services/service-inner/services-icon.png" /> Services and Solutions provided by Tech2Globe.</h4>
                                <div className="row">
                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className="card text-center rounded h-100" style={{ background: '#edededc2' }}>
                                            <img src="images/services/service-inner/profile-optimization.jpg" className="img-fluid rounded">
                                            </img>
                                            <div className="card-body">
                                                <h5>Profile Optimization</h5>
                                                <p>Enhance your profile with SEO optimized headlines & summaries. Designing visually compelling graphics to boost brand awareness.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className="card text-center rounded h-100" style={{ background: '#edededc2' }}>
                                            <img src="images/services/service-inner/content-development.jpg" className="img-fluid rounded">
                                            </img>
                                            <div className="card-body">
                                                <h5>Content Development</h5>
                                                <p>Creating Articles, infographics posts, and videos consistently according to current trends. Customizing images, animations and editing for post visibility.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className="card text-center rounded h-100" style={{ background: '#edededc2' }}>
                                            <img src="images/services/service-inner/ads-management.jpg" className="img-fluid rounded">
                                            </img>
                                            <div className="card-body">
                                                <h5>Ads management</h5>
                                                <p>Delivering Sponsored content, Sponsored Inmail, PPC text ads, personalized ads and custom landing pages.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className="card text-center rounded h-100" style={{ background: '#edededc2' }}>
                                            <img src="images/services/service-inner/lead-generation.jpg" className="img-fluid rounded">
                                            </img>
                                            <div className="card-body">
                                                <h5>Lead Generation</h5>
                                                <p>Utilizing tools & features like Sales Navigator, Drip campaigns, Remarketing campaigns, personalized outreach & Lead generation forms to attract high conversions.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className="card text-center rounded h-100" style={{ background: '#edededc2' }}>
                                            <img src="images/services/service-inner/analyzing-reporting.jpg" className="img-fluid rounded">
                                            </img>
                                            <div className="card-body">
                                                <h5>Analyzing & Reporting</h5>
                                                <p>Optimizing content by analyzing engagement metrics, conversion tracking, account strength, CRM integration and providing you with monthly reports and analysis.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className="card text-center rounded h-100" style={{ background: '#edededc2' }}>
                                            <img src="images/services/service-inner/reputation-management.jpg" className="img-fluid rounded">
                                            </img>
                                            <div className="card-body">
                                                <h5>Reputation Management</h5>
                                                <p>Building trust through community engagement, messaging, comment responses, addressing feedback and showcasing testimonials.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4 className={Style.HeadTitle}><img src="/images/services/service-inner/growth-icon.png" /> Benefits of Working with a LinkedIn Marketing Agency</h4>

                                <p>
                                    LinkedIn is a social networking platform where businesses & professionals connect and network with each other to advance their businesses and careers. This makes it an attractive platform for businesses to put themselves on highlight and grow their businesses. LinkedIn marketing agency can provide marketing services that generate high-quality traffic and generate leads for your business.<br /><br />

                                    Our LinkedIn marketing services offer content marketing opportunities like articles, whitepapers, and videos posted 3-4 times a week. Our regular posting increases online visibility, increasing brand awareness. You will be provided with scalable solutions which are cost-effective and tailored according to the business's needs.<br /><br />

                                    LinkedIn marketing services can improve performance through data analysis and strategize future plans accordingly. You can utilize this opportunity for personalized outreach through comments, shares, and discussions for community engagement. You will be facilitated with improved B2B marketing for easier service promotion, relationship building, and strategic engagement. Your businesses can establish effective networking and partnerships, created through collaborations, joint ventures, and talent recruitment.
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