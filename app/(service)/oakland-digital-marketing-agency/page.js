import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaArrowLeft, FaArrowRight, FaArrowsAltH, FaBars, FaChartBar, FaChartLine, FaClock, FaCogs, FaCoins, FaCrosshairs, FaCube, FaDatabase, FaDesktop, FaDownload, FaEnvelope, FaEnvelopeOpen, FaEnvelopeOpenText, FaEnvelopeSquare, FaFileInvoice, FaLaptop, FaLayerGroup, FaLightbulb, FaList, FaListAlt, FaListUl, FaPenNib, FaPlane, FaRegArrowAltCircleLeft, FaSearch, FaSearchDollar, FaShareAlt, FaShieldAlt, FaShoppingCart, FaSquare, FaStar, FaThumbsUp, FaUsers, FaUsersCog, FaUserTie } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
    title: "Oakland Digital Marketing Agency @Best Digital Services",
    description:
        "Choose Oakland’s top digital marketing agency with 360° digital marketing services. ✔7000+ Successful Projects ✔300+ Experts. Enquire Now!",
    alternates: {
        canonical:
            "https://www.tech2globe.com/oakland-digital-marketing-agency",
    },
    openGraph: {
        title: "Oakland Digital Marketing Agency @Best Digital Services",
        description:
            "Choose Oakland’s top digital marketing agency with 360° digital marketing services. ✔7000+ Successful Projects ✔300+ Experts. Enquire Now!",
        url: "https://www.tech2globe.com/oakland-digital-marketing-agency",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Oakland Digital Marketing Agency @Best Digital Services",
        description:
            "Choose Oakland’s top digital marketing agency with 360° digital marketing services. ✔7000+ Successful Projects ✔300+ Experts. Enquire Now!",
    },
};

const pageHeaderData = {
    title: "Oakland Digital Marketing Agency",
    description:
        "Tech2Globe is a full-service Oakland digital marketing agency. Boost your business with our expert digital marketing services and generate valuable leads.",
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
        question: "What services does Oakland Digital Marketing Agency offer?",
        answer: `
      <p>Tech2Globe, a leading Digital Marketing Company in Oakland, offers comprehensive services to boost your brand. From web marketing strategy development to SEO, PPC advertising, content creation, social media management, and <a href="/online-reputation-management-services" class="text-decoration-underline">reputation management</a>, and more.</p>
    `,
    },
    {
        id: "Two",
        question: "How can Oakland Digital Marketing Agency help my business?",
        answer: `
      <p>We can help you propel your business forward by implementing strategies, optimizing online presence, driving targeted traffic, and boosting your brand's visibility and profitability.</p>
    `,
    },
    {
        id: "Three",
        question: "What industries does Oakland Digital Marketing Agency specialize in?",
        answer: `
      <p>Tech2Globe Oakland Digital Marketing Agency specializes in catering to diverse industries, including but not limited to e-commerce, technology, healthcare, real estate, education, and hospitality.</p>
    `,
    },
    {
        id: "Four",
        question: "How experienced is the team at Oakland Digital Marketing Agency?",
        answer: `
      <p>Our team at Oakland digital marketing agency has extensive experience and expertise of more than 14 years in the ever-evolving digital marketing landscape. With a proven track record of success and a commitment to staying ahead of industry trends, we are well-equipped to drive your business towards its goals.</p>
    `,
    },
    {
        id: "Five",
        question: "What sets Oakland Digital Marketing Agency apart from other agencies?",
        answer: `
      <p>Our commitment to produce quantifiable results, customized attention to each client, unique techniques, and a collaborative mindset set us apart.</p>
    `,
    },
    {
        id: "Six",
        question: "How can I get started with Oakland Digital Marketing Agency?",
        answer: `
      <p>To get started with Oakland Digital Marketing Agency, reach out to our team for a consultation. We will assess your business needs, discuss your goals, and tailor a comprehensive digital marketing plan.</p>
    `,
    },
];

export default function OaklandDigitalMarketingAgency() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb pageName="Oakland Digital Marketing Agency" />
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
                                        <h3 className="pb-3">Digital Marketing Agency in Oakland</h3>
                                        <p>Today, in the landscape of <strong>Oakland digital marketing services</strong>, working with just any firm is insufficient. You must partner with a company that will not only listen to your company's goals and message but also assist in driving desired results so that your company receives the highest return on marketing investment. Not every <a href="digital-marketing" className="fw-normal">digital marketing agency</a> does this right.</p>
                                    </div>

                                </div>

                            </div>

                            <div className={Style.ContentDiv}>
                                <p>Our <strong>digital marketing agency in Oakland</strong> is fully equipped to assist your company with a comprehensive array of services. From developing local search strategies to implementing SEO strategies, managing paid search ad campaigns, executing targeted ad strategies, overseeing social media management, crafting custom web design, to handling reputation management and social strategy, we ensure your business thrives in the digital landscape. ​</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="text-danger">Boost Your Brand with Oakland Digital Marketing Services</h2>
                                <p>Explore the best <strong>Oakland digital marketing services</strong>! Elevate your online presence with our comprehensive solutions for success.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaLayerGroup /> Web Marketing Strategy Development</h4>
                                <p>Our experts offer developed and thoughtful marketing plans that will connect all the actions required for your firm to succeed. As a renowned digital marketing company in Oakland we have 14+ years of experience and it is ready to assist you in developing a plan that will help you achieve your search engine ranking goals.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaPenNib /> Web Design & Development</h4>
                                <p>We handle each of our web design projects with extreme caution since they are the lifeblood of your Oakland company and the main channel by which you will interact with customers. The design of your new, high-performance website contains carefully selected content, aesthetics that effectively convey your brand identity, improved UX, graphic design, and other features.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaUsers /> SEO Services</h4>
                                <p>A firm cannot reach its full earning potential without a solid Search Engine Optimization (SEO) strategy. SEO helps potential customers find your company on Google and other search engines. We have a tried-and-true approach for developing websites with high search rankings and steady organic visitor increases.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaChartLine /> Pay Per Click Advertising (PPC)</h4>
                                <p>A smart PPC campaign is a valuable addition to your online marketing arsenal. Increase your qualified leads fast and cost-effectively on Google, Facebook, LinkedIn, Bing, and other platforms. Our PPC advertising efforts produce tangible results in real-time.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaPenNib /> Content Marketing & Content Creation</h4>
                                <p>Content marketing, an important component of an effective SEO campaign, delivers six times more conversions than traditional marketing tactics. Our skilled internal staff of editors, copywriters, and SEO strategists will collaborate with you to develop tailored marketing strategies that boost your company's revenue.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaThumbsUp /> Social Media Marketing Services</h4>
                                <p>Social media management is more complicated than it seems. At Tech2Globe, we specialize in developing efficient outreach campaigns on the social media networks that are most relevant to your organization and target audience, providing top-tier <strong>Oakland digital marketing services</strong>.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaEnvelopeOpenText /> Reputation Management</h4>
                                <p>You must first build a positive reputation to develop in today's environment. At Tech2Globe, we offer tailored solutions to help you improve and manage your online reputation. We guarantee that your brand receives a warm welcome by conducting thorough audits, encouraging positive feedback, and reducing dangers.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaEnvelope /> Email Marketing</h4>
                                <p>All businesses can use our platform to get everything they need to succeed, whether big or small. A library of editable templates and automated campaigns are the first steps to effortless email marketing. Plus, gain valuable insights with detailed analytics to track engagement. We have advanced features like A/B testing to ensure content is better, segmentation to target specific groups, and mobile optimization to ensure emails look great on any device.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <p>Suppose your marketing plan has become old, and your bottom line is beginning to suffer. In that case, you should seek assistance from industry professionals. Tech2Globe is a next-generation <strong>Oakland digital marketing agency</strong>. Our competent team uses our talents and knowledge to create and implement tailored digital marketing solutions for our customers.</p>
                            </div>


                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                            <div className={Style.StickyTop}>
                                <ServiceSidebar sections={sidebarSections} />
                            </div>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                            <h2 className="mb-3 text-danger">Our Best Digital Marketing Services In Oakland</h2>
                            <p>Choosing us means choosing the Best <strong>digital marketing Agency in Oakland</strong>. Here’s some of the reasons why we can greatly benefit your business.</p>
                            <p><strong>Expertise :</strong> When working independently, there may be times when tasks go awry or require additional assistance. This can lead to waiting for answers or specific tasks. However, having a skilled team with years of experience can expedite tasks and understand the best methods for each client. They will not waste time trying different techniques until they find the right one for each individual.</p>

                            <p><strong>Time Saving :</strong> Working with a firm like ours saves you time because our workers are all industry experts. Furthermore, we handle every aspect of your campaign, including design, development, SEO, PPC management, <a href="#">social media marketing</a>, etc. Instead of researching different ways to market your product or service, use those hours to expand your business.</p>

                            <p><strong>Cost-saving :</strong> One issue with running a small business is that expenditures can quickly add up. Unexpected charges, such as website maintenance fees, domain name renewals, hosting services, and software licenses, are common along the route.</p>

                            <p>Outsourcing different aspects of your business saves you money. It decreases stress by reducing the need to keep track of all these details.</p>

                            <p><strong>Branding and Identity :</strong> Your brand identity should be consistent across several platforms and reflect your beliefs and goals. Our design teams develop unique products that represent your personality and goal statement.</p>

                            <p>These elements guarantee that your customers feel at ease while interacting with your brand, whether they visit your website or use your applications.</p>

                            <p><strong>Access to Resources :</strong> Because of a lack of resources, many businesses fail to reach their full potential. So, while you may assume you have enough people on board, you don’t. Our agency and freelancer network provides us access to a varied talent pool. We have graphic designers, web developers, copywriters, and video editors.</p>

                            <p><strong>Customer Service :</strong> Naturally, good customer service is essential to any successful business. However, most organizations do not give adequate customer service training to new workers. We take pride in providing excellent customer service through our highly trained professionals at Creative Media Group.</p>
                        </div>
                    </div>

                </div>
            </section >

            <CaseStudiesService caseStudies={caseStudies} />
            <FaqSection faqs={faqs} />
        </>
    )
};