import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaArrowLeft, FaArrowRight, FaBars, FaChartBar, FaChartLine, FaClock, FaCogs, FaCoins, FaCrosshairs, FaCube, FaDatabase, FaDesktop, FaDownload, FaEnvelope, FaEnvelopeOpen, FaEnvelopeSquare, FaFileInvoice, FaLaptop, FaLayerGroup, FaLightbulb, FaList, FaListAlt, FaPenNib, FaSearch, FaSearchDollar, FaShareAlt, FaShieldAlt, FaShoppingCart, FaSquare, FaStar, FaThumbsUp, FaUsers, FaUsersCog, FaUserTie } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
    title: "Top Minneapolis Digital Marketing Agency And Services",
    description:
        "Choose Minneapolis’s top digital marketing agency with 360° digital marketing services. ✔7000+ Successful Projects ✔300+ Experts. Enquire Now!",
    openGraph: {
        title: "Top Minneapolis Digital Marketing Agency And Services",
        description:
            "Choose Minneapolis’s top digital marketing agency with 360° digital marketing services. ✔7000+ Successful Projects ✔300+ Experts. Enquire Now!",
        url: "https://www.tech2globe.com/minneapolis-digital-marketing-agency",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Top Minneapolis Digital Marketing Agency And Services",
        description:
            "Choose Minneapolis’s top digital marketing agency with 360° digital marketing services. ✔7000+ Successful Projects ✔300+ Experts. Enquire Now!",
    },
    alternates: {
        canonical:
            "https://www.tech2globe.com/minneapolis-digital-marketing-agency",
    },
};

const pageHeaderData = {
    title: "Digital Marketing Agency Minneapolis",
    description:
        "Tech2Globe's Digital Marketing Agency Minneapolis is dedicated to empowering marketing and sales teams with unparalleled transparency, agility, and profound technical proficiency.",
    buttonText: "Contact us",
    buttonLink: "/contact-us",
    backgroundImage: "/images/skyscraper.jpg", // your banner image
};

const resources = [
    { id: 1, name: "Case Studies", path: "/case-studies" },
    { id: 2, name: "Clients", path: "/clients" },
    { id: 3, name: "Testimonial", path: "/testimonial" },
];

const sidebarSections = [
    { heading: "Resources", links: resources },
];


const caseStudies = [
    {
        "id": 1,
        "title": "On Bike Share",
        "image": "/images/onBikeSharecap.jpg",
        "description": "On Bike Share is located in Pawtucket, Rhode Island. Founded in 2012, On Bike Share is an eminent brand creating and distributing custom-branded bikes and automated cycle sharing systems in the US.",
        "docLink": "images/case-studies/case-study_ leveraging-digital-marketing-for-success-for-on-bike-share-brand.pdf"
    },
    {
        "id": 2,
        "title": "Traveler's Choice",
        "image": "/images/travel-luggage-post.jpg",
        "description": "Traveler's Choice is located in Pomona, California, East of Los Angeles. Founded in 1984, Traveler's Choice prides itself on manufacturing and distributing only the finest quality .",
        "docLink": "images/case-studies/Case-Study-Traveler's-Choice-V1.pdf"
    },
    {
        "id": 3,
        "title": "Filters4you Brand",
        "image": "/images/filterforu.jpg",
        "description": "Filter4You is based in Simpson, North Carolina. Since its inception in 2006, the brand has became a globally trusted name for selling filters for clean air and water consumption.",
        "docLink": "images/case-studies/case-study_ leveraging-digital-marketing-for-success-for-on-Filters4you-Brand.pdf"
    },
]

const faqs = [
    {
        id: "One",
        question: "What services do digital marketing agencies in Minneapolis offer?",
        answer: `
      <p><strong>Minneapolis Digital Marketing Services</strong> include a wide range of offerings such as search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, email marketing, website design and development, online reputation management, and analytics and reporting.</p>
    `,
    },
    {
        id: "Two",
        question: "What industries do Minneapolis digital marketing agencies specialize in?",
        answer: `
      <p>Tech2Globe’s <strong>Digital Marketing Agency Minneapolis</strong> provides services to every industry including healthcare, technology, retail, real estate, hospitality, finance, education, and manufacturing.</p>
    `,
    },
    {
        id: "Three",
        question: "How much does digital marketing services in Minneapolis cost?",
        answer: `
      <p>The cost of digital marketing services in Minneapolis can vary depending on several factors. Many digital marketing companies offer a set rate for all services, such as $150/hour or $175/hour.</p>
    `,
    },
    {
        id: "Four",
        question: "Do I need to sign a contract with a digital marketing agency in Minneapolis?",
        answer: `
      <p>However, effective marketing contracts are essential for <strong>Minneapolis digital marketing company</strong> success. Proper contracts between your marketing agency and the customer, independent freelancers, and subcontractors safeguard all parties, define expectations, and set boundaries.</p>
    `,
    },
    {
        id: "Five",
        question: "How do digital marketing agencies in Minneapolis measure success?",
        answer: `
      <p><strong>Digital marketing company Minneapolis</strong> measures success through various key performance indicators (KPIs) such as website traffic, leads generated, conversion rates, return on investment (ROI), customer acquisition cost (CAC), customer lifetime value (CLV), engagement metrics on social media platforms, and overall revenue growth.</p>
    `,
    },
];

export default function MinneapolisDigitalMarketingAgency() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb pageName="Minneapolis Digital Marketing Agency" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className={Style.ContentDiv}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div
                                            style={{
                                                position: "relative",
                                                width: "100%",
                                                height: 0,
                                                paddingTop: "56.25%",
                                                paddingBottom: 0,
                                                boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                                                marginBottom: "0.9em",
                                                overflow: "hidden",
                                                borderRadius: "8px",
                                                willChange: "transform",
                                            }}
                                        >
                                            <iframe
                                                loading="lazy"
                                                style={{
                                                    position: "absolute",
                                                    width: "100%",
                                                    height: "100%",
                                                    top: 0,
                                                    left: 0,
                                                    border: "none",
                                                    padding: 0,
                                                    margin: 0,
                                                }}
                                                src="https://www.canva.com/design/DAGAszNh5UQ/HWcYKBVllUG9tRidsx2dMg/watch?embed"
                                                allowFullScreen
                                                allow="fullscreen"
                                            />
                                        </div>

                                        <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGAszNh5UQ&#x2F;HWcYKBVllUG9tRidsx2dMg&#x2F;watch?utm_content=DAGAszNh5UQ&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">T2G - Digital Marketing Location Page - Video</a> by DigitalMarketing Tech2globe

                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <h3 className="pb-3">Why Hiring a Digital Marketing Agency in Minneapolis is the Key to Boosting Your Online Success</h3>
                                        <p>Have you ever considered why we need digital marketers to promote products worldwide? The sole reason is that a large number of new websites are published online each day. Everybody seeks to reach out for different needs, such as advertising new items and services. Educate the audience and increase leads and revenues.</p>
                                    </div>

                                </div>

                            </div>

                            <div className={Style.ContentDiv}>
                                <p>All of these may be actively done through Search Engine Optimization.</p>

                                <p>Hiring an experienced <strong>digital marketing company Minneapolis</strong>, such as Tech2Globe, can benefit you in several ways, such as providing expert advice while handling all your marketing needs without hiring different people for different jobs. We will also provide a team of people already prepared for all your marketing needs.</p>

                                <p>We have the resources and techniques to increase your brand's awareness, successfully engage your audience, and produce results. Experience the difference with our personalized strategy, and take your online success to new heights.</p>
                            </div>                          

                            <div className={Style.ContentDiv}>
                                <h2>The Benefits of Partnering with a Professional Digital Marketing Agency in Minneapolis</h2>
                                <p>Curious about the benefits of hiring a top-tier <strong>Minneapolis digital marketing agency</strong>? Let’s learn how you can propel your business to success with Tech2Globe services.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaLayerGroup /> Expertise and Experience</h4>
                                <p>We have years of expertise and understanding in helping firms reach their marketing objectives. From SEO to <a href="social-media-marketing"> social media marketing</a> we offer each service related to digital marketing. Just provide the name, and we've got you covered.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaPenNib /> Customized Strategies for Local Targeting</h4>
                                <p>To make things work, our <strong>Minneapolis digital marketing services</strong> have a tailored approach for each of its clients. The strategy primarily involves identifying your target audience and establishing clear goals. Not only for you but for us as well, it is crucial to determine an appropriate digital channel/channel to meet each specific requirement.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaUsers /> Cost-Effective Solutions:</h4>
                                <p>You may believe that doing <strong>digital marketing</strong> in-house is more cost-effective. However, compared to the salary, benefits, and training costs of recruiting an in-house staff, outsourcing to a digital marketing firm is generally less expensive.</p>

                                <p>Tech2Globe works with budgets of every size. We assist you in properly allocating your marketing budget for the greatest outcomes. This budget management guarantees you get the most out of your spending on marketing.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaChartLine /> Access to Cutting-Edge Tools and Technologies</h4>
                                <p>To make right decisions, strong analytics and reporting tools offer full campaign performance data. We optimize ad expenses for conducting efficient campaigns by using Google advertisements and social media advertisements. To find growth prospects and analyze categories we use tools like SEO and keyword research.</p>
                            </div>


                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
                                    <h2>Selecting the Right Digital Marketing Agency for your Business Needs in Minneapolis</h2>

                                    <p>Investing in the fake <strong>Minneapolis digital marketing agency</strong> could drain your finances while also harming your business image. Thus, selecting the correct agency is critical to ensuring success. Here are some tips you can follow:</p>

                                    <div className="row mt-3">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                            <div className="card h-100 p-3">
                                                <Image
                                                    src="/images/services/service-inner/import-data.png"
                                                    width={45}
                                                    height={45}
                                                    className="d-block"
                                                />
                                                <h4>Understand and clarify your needs.</h4>
                                                <p>To prevent wasting time, you must be prepared to go through a thorough preparation procedure. It would help if you thought clearly about the agency's function in achieving your company objectives. Whether expanding into new markets or redefining your brand, you must first identify and articulate your needs. Homework is crucial; if not completed honestly, the decision might backfire.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                            <div className="card h-100 p-3">
                                                <Image
                                                    src="/images/services/service-inner/analysis.png"
                                                    width={45}
                                                    height={45}
                                                    className="d-block"
                                                />
                                                <h4>Agency that understands your requirements.</h4>
                                                <p>Google, and you can find hundreds of thousands of agencies that meet your needs. You can specify the geography and search for the services offered by a specific agency. Please take note of the agencies and their respective websites. Browse websites to learn about an agency's beliefs and methods. Know their fundamental competencies and review their portfolios.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                            <div className="card h-100 p-3">
                                                <Image
                                                    src="/images/services/service-inner/send.png"
                                                    width={45}
                                                    height={45}
                                                    className="d-block"
                                                />
                                                <h4>Extensive Research</h4>
                                                <p>Once you've narrowed down the agencies, conducting significant research on them and understanding their backgrounds is critical. Talk to clients (if feasible) and learn about their experience. If you can locate case studies regarding an agency, investigate them thoroughly. Always search for substantial, long-lasting outcomes.</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                            <div className="card h-100 p-3">
                                                <Image
                                                    src="/images/services/service-inner/process.png"
                                                    width={45}
                                                    height={45}
                                                    className="d-block"
                                                />
                                                <h4>Strategy and audit report</h4>
                                                <p>A strategy and audit report will help you learn a <a href="digital-marketing-services"> digital marketing agency's</a> inventiveness and expertise. An audit report helps you understand an agency's marketing skills and suggests how you may enhance your marketing efforts. Consider your marketing objectives and request that the firms provide a research-based proposal to assist you in meeting your own Internet marketing goals.</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                            <div className="card h-100 p-3">
                                                <Image
                                                    src="/images/services/service-inner/undertaking.png"
                                                    width={45}
                                                    height={45}
                                                    className="d-block"
                                                />
                                                <h4> Know about your team</h4>
                                                <p>After researching, the next step is to meet with the agency's personnel. Meeting with the team is important because it allows you to observe how an agency works in their office. Before making a final decision, ask and explain any questions you have and seek confirmation.</p>
                                                <p>In your search for <strong>digital marketing services Minneapolis</strong>, consider partnering with Tech2Globe's experienced team, as we understand your business needs.</p>
                                            </div>
                                        </div>




                                    </div>

                                </div>
                            </div>


                            <div className="row pt-3">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
                                    <h2>Take Your Business to New Heights with a Digital Marketing Agency in Minneapolis</h2>

                                    <p>The top <strong>Minneapolis digital marketing company</strong>, Tech2Globe, works quickly to deliver outstanding outcomes and propel companies like yours into legendary growth.</p>

                                    <p>Our team of experts knows that one-size-fits-all approaches are ineffective. We customize our strategies to your company's objectives, ensuring maximum impact and clear results. As mentioned earlier, we offer <strong>digital marketing services Minneapolis</strong> ranging from <a href="search-engine-optimization">search engine optimization</a> (SEO) to pay-per-click (PPC) advertising and social media marketing.</p>

                                    <p>Because of our client-focused approach, you will never feel alone on your digital journey. Our friendly and knowledgeable support team is always ready to assist you with any inquiries, concerns, or technical issues.</p>


                                    <div className="row mt-3">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                            <div className="card h-100 p-3">
                                                <h4><FaShareAlt /> Search Engine Optimization (SEO)</h4>
                                                <p>Excellent website design is only the beginning. Potential clients search for what you have to offer; thus, you must be easily found. SEO then becomes relevant. Our team will research the keywords your rivals are aiming at, deliberately arrange them on your website, and apply tested SEO methods to improve your search result ranking.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                            <div className="card h-100 p-3">

                                                <h4><FaSearchDollar /> Social Media Optimization (SMO)</h4>
                                                <p>Social media channels, including Facebook, Twitter, and Instagram, are powerful means of reaching your audience. Although, effective management of these accounts can prove difficult. Our social media experts will take the front stage and produce interesting material that interacts with and inspires your followers. We will assist you in creating brand loyalty and have a strong social media presence.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                            <div className="card h-100 p-3">

                                                <h4> <FaPenNib /> Content Writing</h4>
                                                <p>Any great company depends on high-quality content. It builds your customer relationships, positions you as a leader in your field, and instructs your audience. Our services in content writing can assist you to reach all of this. We will produce interesting and instructive material fit for your target market.</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                            <div className="card h-100 p-3">
                                                <h4><FaCoins /> Pay-Per-Click (PPC)</h4>
                                                <p>Looking to target a specific demographic online? One excellent choice is pay-per-click (PPC) advertising. To make the most of your advertising budget, you can rely on our team of seasoned PPC experts. They will design targeted marketing campaigns to boost online success, raise brand awareness, and produce leads.</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                            <div className="card h-100 p-3">

                                                <h4><FaEnvelope /> Email Marketing</h4>
                                                <p>It takes both art and science to write emails that people want to read. We'll help you get people to sign up for your email list and make emails that stand out. Plus, we will make sure they have the most impact possible. As a result, you'll get more sales and leads from your emails.</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                            <div className="card h-100 p-3">

                                                <h4><FaList /> Online Reputation Management</h4>
                                                <p>It's impossible to function without ORM or online reputation management. With our assistance, you can establish and uphold a favorable reputation for your brand. We have experts who will craft a strong ORM strategy to ensure your brand stands out online and responds to any criticism.</p>
                                            </div>
                                        </div>



                                    </div>
                                    <p>Partner with us now to maximize your company's digital potential. Allow us to be your trusted counsel as we navigate the ever-changing landscape of digital marketing. Contact us for a free consultation to understand how we can transform your online presence into a profitable revenue source.</p>
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

            <CaseStudiesService caseStudies={caseStudies} />
            <FaqSection faqs={faqs} />
        </>
    )
};