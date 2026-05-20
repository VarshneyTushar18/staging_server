import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaArrowLeft, FaArrowRight, FaArrowsAltH, FaBars, FaChartBar, FaChartLine, FaClock, FaCogs, FaCoins, FaCrosshairs, FaCube, FaDatabase, FaDesktop, FaDownload, FaEnvelope, FaEnvelopeOpen, FaEnvelopeOpenText, FaEnvelopeSquare, FaFileInvoice, FaLaptop, FaLayerGroup, FaLightbulb, FaList, FaListAlt, FaListUl, FaPenNib, FaPlane, FaRegArrowAltCircleLeft, FaSearch, FaSearchDollar, FaSearchLocation, FaShareAlt, FaShieldAlt, FaShoppingCart, FaSignal, FaSquare, FaStar, FaThumbsUp, FaUsers, FaUsersCog, FaUserTie } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
    title: "Top Miami Digital Marketing Agency And Services",
    description:
        "Choose Miami’s top digital marketing agency with 360° digital marketing services. ✔7000+ Successful Projects ✔300+ Experts ✔Free Audit. Enquire Now!",
    openGraph: {
        title: "Top Miami Digital Marketing Agency And Services",
        description:
            "Choose Miami’s top digital marketing agency with 360° digital marketing services. ✔7000+ Successful Projects ✔300+ Experts ✔Free Audit. Enquire Now!",
        url: "https://www.tech2globe.com/miami-digital-marketing-agency",
        siteName: "Miami Digital Marketing Agency",
        images: [
            {
                url: "https://www.tech2globe.com/images/new-page-images/tech2globe-logo.png",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Top Miami Digital Marketing Agency And Services",
        description:
            "Choose Miami’s top digital marketing agency with 360° digital marketing services. ✔7000+ Successful Projects ✔300+ Experts ✔Free Audit. Enquire Now!",
    },
    alternates: {
        canonical:
            "https://www.tech2globe.com/miami-digital-marketing-agency",
    },
};

const pageHeaderData = {
    title: "Miami Digital Marketing Agency",
    description:
        "Tech2Globe, a leading Miami digital marketing agency, is happy to offer complete digital marketing strategies and solutions in Miami. We offer website building, web design to improve the user experience, establishing SEO and PPC campaigns, and more. For the past 14 years, we've effectively increased our clients' profits.",
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
        question:
            "What are some key services offered by digital marketing agencies in Miami?",
        answer: `
      <p>Digital marketing agencies in Miami offer a range of key services, including search engine optimization (SEO), social media marketing (SMM), pay-per-click (PPC) advertising, website design and development, content creation, email marketing, and analytics and reporting.</p>
    `,
    },
    {
        id: "Two",
        question:
            "How can a business determine if a Miami digital marketing agency is the right fit for their needs?",
        answer: `
      <p>To decide whether a Miami digital marketing firm is a good fit, businesses should consider different characteristics, such as desired services, track record, transparency, customer testimonials, and alignment with corporate goals. Tech2Globe has all the qualities of a perfect digital marketing agency, making it the best choice for organizations looking for effective digital marketing solutions.</p>
    `,
    },
    {
        id: "Three",
        question:
            "What are the advantages of hiring a digital marketing agency in Miami over handling marketing in-house?",
        answer: `
      <p>There are several advantages of hiring a digital marketing agency as in an agency, you'll be exposed to new approaches and have more resources to keep up with them. You don't just get one expert; you get a team of professionals in a variety of fields, including SEO, social media marketing, and PPC ad management.</p>
    `,
    },
    {
        id: "Four",
        question:
            "What are some emerging trends in digital marketing that Miami companies should be aware of?",
        answer: `
      <p>Digital Marketing Trends are the fundamental changes in the digital marketing landscape that have occurred. New technologies, marketing strategies, and other changes affect how marketers communicate with their target audience. The emerging trends in digital marketing that Miami companies should be aware of include Metaverse, video commerce and online commerce.</p>
    `,
    },
    {
        id: "Five",
        question:
            "How can a Miami digital marketing company help a small business establish its online presence?",
        answer: `
      <p>A <strong>Miami digital marketing company</strong> can help small companies in reaching new consumers, engaging with existing ones, promoting their products or services, establishing their online presence through services like website design, SEO, PPC advertising, content creation, social media marketing, and local SEO.</p>
    `,
    },
];

export default function MiamiDigitalMarketingAgency() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb pageName="Miami Digital Marketing Agency" />
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
                                        <p>Miami is famous for its stunning white sand beaches and world-class attractions; it also has a thriving tech community. With the fast pace of the city and the diversity of tourists, many entrepreneurs are asking for more investment. This makes it more difficult for new and small businesses to compete against others, but Tech2Globe is here to assist!</p>

                                        <p>With a proven track record and dedication to providing superior Miami digital marketing services our Miami-based <a class="fw-normal" href="digital-marketing">digital marketing Company</a> offers adaptable and scalable solutions to assist companies in meeting their objectives. ​</p>
                                    </div>

                                </div>

                            </div>

                            <div className={Style.ContentDiv}>
                                <h2 className="text-danger">Miami Digital Marketing Services</h2>
                                <p>Looking to elevate your online presence in Miami? Turn to Tech2Globe, the premier <strong>Miami Digital Marketing Company</strong>, for digital marketing.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaLayerGroup /> Web Marketing Strategy Development</h4>
                                <p>Developed and thoughtful marketing plans will connect all the actions required for your firm to succeed. Our full-service <strong>Miami digital marketing agency</strong> has over fourteen years of industry expertise. It is ready to assist you in developing a plan that will help you achieve your search engine ranking goals.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaPenNib /> Web Design & Development</h4>
                                <p>We take great care while handling all of our web design projects because they are the driving force of your Miami business and the primary means by which you will communicate directly with clients. The design of your new, high-performance website includes carefully picked content, aesthetics that accurately express your brand identity, increased UX, graphic design, and other elements.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaUsers /> SEO Services</h4>
                                <p>A company cannot achieve its maximum earning potential without a good <a className="fw-normal" href="search-engine-optimization">Search Engine Optimization</a> (SEO) plan. SEO lets potential clients locate your business on Google and other search engines. We have a tried-and-true process for creating websites with high search rankings and consistent organic visitor growth.</p>
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
                                <p>Social media management is more complex than it appears. At Tech2Globe, our staff is proficient in creating effective outreach programs on the social media networks that are most relevant to your company and target demographic, offering top-notch <strong>Miami digital marketing services</strong>.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaEnvelope /> Email Marketing</h4>
                                <p>Email marketing is often used by every business. It’s a great way to share deals, send polite reminders about lost shopping carts, and build long-lasting relationships with customers. Allow us to walk you through the details of this marketing strategy, explaining why this basic tool is so effective.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaSearchLocation /> Local SEO</h4>
                                <p>Local services are highly sought after, and businesses need local SEO services to grow. We offer local SEO services to improve Google Business listings, optimize Google Maps placement, increase location pages, and register websites with industry-specific directories. This ensures businesses appear in search results and attract potential customers.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaSignal /> Reputation Management</h4>
                                <p>Many businesses rely on their reputation to succeed or fail. To advance in today's world, you must first establish a good reputation. Tech2Globe provides customized solutions to help you enhance and maintain your internet reputation. We will ensure that your brand has a great welcome by conducting rigorous audits, promoting positive evaluations, and eliminating hazards.</p>
                            </div>

                            <div className="row pt-3">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                    <h2 className="mb-3 text-danger">Why Tech2globe Stands Out as Your Premier Choice for Miami Digital Marketing Services</h2>
                                    <p>Tech2Globe is one of the few internet marketing businesses in Miami and abroad that guarantees results. That is because our staff understands what it takes to increase our clients' income. With in-house expertise in content, PPC, SEO, and other online marketing skills, we are confident in our ability to boost quality traffic, leads, and revenue for our clients. From the start, we are devoted to your success, serving as your full-service <strong>Miami digital marketing company</strong> and partner.</p>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100 p-3">
                                            <Image
                                                src="/images/services/service-inner/import-data.png"
                                                width={45}
                                                height={45}
                                                className="d-block"
                                            />
                                            <h4>Client-Centric Approach</h4>
                                            <p>People keep coming back to us and even recommend our <strong>Miami digital marketing services</strong> to others because we care about their business. We value your needs equally, and our commitment to excellence leads to repeat business and enthusiastic referrals, which may be why you're here.</p>
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
                                            <h4>Results-Driven</h4>
                                            <p>We are focused on finding the best possible solution and delivering results to our partners. We're not into repeating useless numbers and statistics. We want our partners to understand how we met their objectives and present them new growth prospects based on actual data and thorough studies.</p>
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
                                            <h4>Honesty and Integrity</h4>
                                            <p>You may have heard the quote, “ Success without integrity is Failure.” We place a high importance on honesty and integrity throughout the process. We do not lie to our clients. We never leave customers in the dark and only provide services to help them reach their goals.</p>
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
                                            <h4>Proven Track Record</h4>
                                            <p>Over the years, Tech2Globe has consistently implemented innovative and successful digital marketing solutions. We've helped Miami companies of all sizes and specializations outperform their competitors and produce more money.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100 p-3">
                                            <Image
                                                src="/images/services/service-inner/quality.png"
                                                width={45}
                                                height={45}
                                                className="d-block"
                                            />
                                            <h4>Team of Experts</h4>
                                            <p>Success depends on a good and efficient team. Our professional Miami digital marketing team actively gives our partners unique solutions. The group often goes the additional mile to keep all campaigns on track.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className="card h-100 p-3">
                                            <Image
                                                src="/images/services/service-inner/input.png"
                                                width={45}
                                                height={45}
                                                className="d-block"
                                            />
                                            <h4>Transparent Reporting</h4>
                                            <p>When you work together with us, you know exactly where you stand. Every month, your personal account manager will provide you with a complete report on the status of your digital marketing campaign, and you will have full access to all of your data via our online client portal.</p>
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

            <CaseStudiesService caseStudies={caseStudies} />
            <FaqSection faqs={faqs} />
        </>
    )
};