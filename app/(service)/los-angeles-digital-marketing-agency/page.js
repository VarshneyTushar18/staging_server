import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaArrowLeft, FaArrowRight, FaBars, FaChartBar, FaChartLine, FaClock, FaCogs, FaCrosshairs, FaCube, FaDatabase, FaDesktop, FaDownload, FaEnvelope, FaEnvelopeOpen, FaEnvelopeSquare, FaFileInvoice, FaLaptop, FaLayerGroup, FaLightbulb, FaList, FaListAlt, FaPenNib, FaSearch, FaShieldAlt, FaShoppingCart, FaSquare, FaStar, FaThumbsUp, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
    title: "Best Digital Marketing Agency and Services in Los Angeles",
    description:
        "Choose the top digital marketing agency in Los Angeles with 360° digital marketing services. ✔7000+ Successful Projects ✔300+ Experts. Enquire Now!",

    openGraph: {
        title: "Best Digital Marketing Agency and Services in Los Angeles",
        description:
            "Choose the top digital marketing agency in Los Angeles with 360° digital marketing services. ✔7000+ Successful Projects ✔300+ Experts. Enquire Now!",
        url: "https://www.tech2globe.com/los-angeles-digital-marketing-agency",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Best Digital Marketing Agency and Services in Los Angeles",
        description:
            "Choose the top digital marketing agency in Los Angeles with 360° digital marketing services. ✔7000+ Successful Projects ✔300+ Experts. Enquire Now!",
    },

    alternates: {
        canonical:
            "https://www.tech2globe.com/los-angeles-digital-marketing-agency",
    },
};

const pageHeaderData = {
    title: "Digital Marketing Agency Los Angeles",
    description:
        "Tech2globe: Your efficient Los Angeles digital marketing agency, delivering results, value, and brand integrity with lean, smart strategies.",
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
        question: "What services do digital marketing agencies in Los Angeles offer?",
        answer: `
      <p>When you hire a <strong>Los Angeles Digital Marketing Company</strong>, you are opting for several benefits such as search engine optimization (SEO), social media marketing, pay-per-click (PPC) advertising, content marketing, email marketing, website design and development, analytics and reporting, and more.</p>
    `,
    },
    {
        id: "Two",
        question: "How do I choose the right digital marketing agency in Los Angeles for my business?",
        answer: `
      <p>A best digital marketing company is the one that helps businesses promote their products/services online through various digital channels, provide better solutions, keep you updated, and generate revenue.</p>
    `,
    },
    {
        id: "Three",
        question: "What industries do Los Angeles digital marketing agencies specialize in?",
        answer: `
      <p>The digital marketing agencies in Los Angeles specialize in different kinds of industries, such as technology, entertainment, hospitality, healthcare, fashion, retail, etc. They tailor their strategies and tactics to meet the goals of businesses operating within these sectors.</p>
    `,
    },
    {
        id: "Four",
        question: "How much do digital marketing services in Los Angeles cost?",
        answer: `
      <p>The cost of hiring a <strong>Los Angeles digital marketing agency</strong> depends on the company and project size, with an average spending of 10-20%. A mid-level company with 25-100 employees offers predictable costs and easier trust building.</p>
    `,
    },
    {
        id: "Five",
        question: "How long does it take to see results from digital marketing efforts in Los Angeles?",
        answer: `
      <p>It depends on the work, strategy, and goals set forth, as well as various factors such as industry competition, target audience, budget, and the specific tactics employed.</p>
    `,
    },
    {
        id: "Six",
        question: "Do I need to sign a contract with a digital marketing agency in Los Angeles?",
        answer: `
      <p>It's common for a <strong>digital marketing company Los Angeles</strong> to require a contract, but it ultimately depends on the agency. Contracts help outline the terms of service, expectations, and responsibilities for both parties involved.</p>
    `,
    },
    {
        id: "Seven",
        question: "How do digital marketing agencies in Los Angeles measure success?",
        answer: `
      <p>Digital marketing agencies in Los Angeles typically measure success through various metrics. This process may include website traffic, conversion rates, engagement on social media platforms, lead generation, or ROI. They tailor their approach based on the specific goals and objectives of their clients, <strong>utilizing digital marketing services Los Angeles</strong> to analyze campaigns.</p>
    `,
    }
];

export default function LosAngelesDigitalMarketingAgency() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb pageName="Los Angeles Digital Marketing Agency" />
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
                                        <h3 className="pb-3">Importance of Digital Marketing Services Los Angeles</h3>
                                        <p><strong>Los Angeles Digital Marketing Services</strong> offers small business owners a crucial solution to their marketing dilemmas. One of the numerous issues that small company owners ask themselves is whether they should engage a digital marketing firm. The answer is yes. Digital marketing companies are masters at what they do. They understand how to go in-depth, do keyword research, monitor social media trends, and guarantee that your content is precisely what Google's engines are looking for.</p>
                                    </div>

                                </div>

                                <div className="row">
                                    <p>Digital marketing may help your organization get a competitive advantage by generating new leads, consolidating your brand's online footprint, and increasing income. A premier <strong>Los Angeles digital marketing company</strong>, can help you reach all of these objectives and more. Tech2Globe’s <a href="digital-marketing-services" className="fw-normal text-decoration-underline">digital marketing services</a>, which are powered by our expert technicians and customer-first mindset, are certain to take your brand's growth to the next level.</p>
                                </div>

                                <div className={Style.ContentDiv}>
                                    <h2 className="mb-3">Types of Services Offered By Digital Marketing Agency Los Angeles</h2>
                                    <p>Here’s what you get by opting for <strong>Los Angeles digital marketing services:</strong></p>
                                </div>

                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaSearch /> Search Engine Optimization – SEO</h4>
                                <p>It's not enough to have a great website. When people are ready to buy, we ensure they can find you online. We generate effective SEO campaigns by performing competitive keyword research, expert placement, and using robust SEO techniques. These campaigns make you more visible and improve your ranking for competitive keywords.</p>

                            </div>


                            <div className={Style.ContentDiv}>
                                <h4><FaListAlt /> Social Media Management</h4>
                                <p>Social media sites like Facebook, Twitter, and Instagram have benefited millions of companies. Managing and growing social media accounts is difficult without the correct social media management. Our talented social media experts will go above and beyond to engage, motivate, and impact your audience as a devoted Indian social media management company.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaPenNib /> Content Writing</h4>
                                <p>Content provides valuable money for every business, and we can help you maximize its value. With our content marketing solution, we want to establish you as a thought leader in your field and strengthen the relationship you have with your consumers.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaEnvelopeSquare /> Email Marketing</h4>
                                <p>Emails that people want to read are a science and an art, and we know how to make them! We will take care of everything, beginning with creating an email list and continuing through the creation of eye-catching emails and optimizing emails to produce tangible results.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaArrowLeft /> Pay-Per-Click</h4>
                                <p>Our pay-per-click advertising firm works with a variety of industry players and marketing experts to improve leads, raise brand recognition. We know what PPC is, how it works efficiently for many stakeholders, and what it takes to achieve online success.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaBars /> Online Reputation Management</h4>
                                <p>With our assistance, you can overcome unfavorable reputations and build a positive image for your products, services, and brands. We place a major emphasis on building an ORM system that is extremely secure, reliable, and scalable.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <p>That’s not all that our <strong>Los Angeles digital marketing services</strong> cover. We also offer brand building, content and website personalization, messaging and positioning, and more.</p>
                            </div>


                            <div className="row pt-5">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">

                                    <h2>Why Choose a Professional Digital Marketing Company Los Angeles</h2>

                                    <p>Here are some reasons why choosing a professional <strong>Digital Marketing Company Los Angeles</strong>, such as Tech2Globe, can be your best decision:</p>


                                    <ul>
                                        <li>You feel that exceptional creativity is a commercial benefit.</li>
                                        <li>You want to collaborate with folks who like what they do.</li>
                                        <li>You want to support your brand with high-quality work that works harder.</li>
                                        <li>You want a completely autonomous agency that can move as swiftly as you need to.</li>
                                    </ul>


                                    <p>As cliché as it may sound, you can't get there if you don't know where you're going. Consider us your marketing map. We have a tried-and-true client procedure that will get you from where you are to where you want to go while never leaving you puzzled about what comes next.</p>
                                </div>
                            </div>

                            <div className="row pt-3">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
                                    <h2>How to Choose the Right Digital Marketing Agency Los Angeles</h2>
                                    <p>Ask following questions to your <strong>digital marketing agency Los Angeles</strong> and choose the right agency:</p>

                                    <div className="row mt-3">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                            <div className="card h-100 p-3">
                                                <Image
                                                    src="/images/services/service-inner/import-data.png"
                                                    width={45}
                                                    height={45}
                                                    className="d-block"
                                                />
                                                <h4>About Services</h4>
                                                <p>The first question you should ask. It would be a waste of time and money to sign up with an agency only to discover that it did not meet your needs. The ideal option is to work with an agency that specializes in a variety of digital marketing services.</p>
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
                                                <h4>About Bills</h4>
                                                <p>Most organizations provide numerous billing methods, allowing you to select what best suits your needs. For example- pay a retainer up in advance and receive a certain amount of hours performed each month. If you choose this method, be careful to inquire what is included in those hours.</p>
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
                                                <h4>Communication</h4>
                                                <p>The ideal agency will be able to cater to your communication style. You may want to chat on the phone once a day to see how the project is progressing. You may prefer an email once a week with updates on your progress.</p>
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
                                                <h4>Preview</h4>
                                                <p>It is your business, and you should be able to preview what will be uploaded before the digital marketing agency does so. You must ensure that the material reflects your brand's voice. Avoid agencies that will not allow you to view the work before it is uploaded.</p>
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
                                                <h4>Results</h4>
                                                <p>To ensure a return on investment, it's crucial to have practical expectations and avoid agencies that promise instant results. SEO takes time to work, so results may not be immediate. Instead, consider a social media campaign with a sale offer for more immediate results. The right agency will be truthful about their services.</p>
                                            </div>
                                        </div>

                                    </div>
                                    <p>At Tech2globe, we prioritize transparency, tailored communication, and tangible results. We'll address all your inquiries and keep you informed every step of the way.</p>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
                            <div className={Style.StickyTop}>
                                <ServiceSidebar sections={sidebarSections} />
                            </div>
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">

                            <p><strong>Clutch Names Tech2Globe as Top Los Angeles Digital Marketing Agency 2024</strong></p>

                            <p>Clutch, the esteemed B2B market research and reviews company, has recognized Tech2Globe as a top agency in Los Angeles for 2024, highlighting our excellence in the following categories:</p>


                            <ul className={Style.TwoCol}>
                                <li>Digital Marketing Company</li>
                                <li>International SEO</li>
                                <li><a href="ppc-services">PPC Company</a></li>
                                <li>Social Media Marketing Company</li>
                                <li>TikTok Advertising Company</li>
                                <li>Instagram Influencer Marketing Company</li>
                                <li>YouTube Influencer Marketing Company</li>
                                <li><a href="technical-seo">Technical SEO</a></li>
                                <li>Bing Advertising Company</li>
                                <li>Facebook Advertising Company</li>
                            </ul>


                            <p>Agencies earn this distinction through various criteria, including their market presence and, crucially, client feedback. Tech2Globe proudly boasts a stellar 5.0 rating on Clutch.</p>
                        </div>
                    </div>


                    <div className="row pt-3">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
                            <div className={Style.ContentDiv}>
                                <h2>Partner with a Leading Digital Marketing Agency</h2>
                                <p>If you want to save time, consider hiring a <strong>Digital Marketing Company Los Angeles</strong>. Suppose you attempt to manage your marketing campaign on your own. In that case, you will spend hours upon hours conducting keyword research, learning how to make your material Google-friendly, and ensuring it is intriguing enough to attract an audience.</p>

                                <p>Hiring a marketing firm is advantageous since it grants you access to insights. Tracking the success of your marketing plan might be difficult because marketing is not your area of expertise. When you deal with a marketing firm, you'll learn about your data insights in a clear, simple format that you can grasp.</p>

                                <p>Now that you've learned about all of the advantages of working with a digital marketing firm in Los Angeles, it's time to start. Tech2Globe is ready to help you with the marketing skills your company needs.</p>

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