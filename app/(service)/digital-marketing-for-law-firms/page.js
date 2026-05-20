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
    title: "Legal Marketing Agency | Digital Growth for Law Firms",
    description:
        "Drive qualified leads and grow your legal practice with targeted digital marketing. We specialize in SEO, PPC, and lead generation strategies tailored for law firms of all sizes.",


    alternates: {
        canonical: "https://www.tech2globe.com/digital-marketing-for-law-firms",
    },


    openGraph: {
        title: "Legal Marketing Agency | Digital Growth for Law Firms",
        description:
            "Boost your law firm’s online presence with expert SEO, PPC, and lead generation services designed specifically for legal professionals.",
        url: "https://www.tech2globe.com/digital-marketing-for-law-firms",
        type: "website",
    },


    twitter: {
        card: "summary_large_image",
        title: "Legal Marketing Agency | Digital Growth for Law Firms",
        description:
            "Targeted digital marketing solutions for law firms—SEO, PPC, and lead generation that delivers real results.",
    },
};




const pageHeaderData = {
    title: "Digital Marketing for Law Firms",
    description:
        "Grow your Firm Digitally",
    buttonText: "Contact us",
    buttonLink: "/contact-us",
    backgroundImage: "/images/law-bg.jpg", // your banner image
};




const resources = [
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
    { heading: "Resources", links: resources },
];








const faqs = [
    {
        id: "One",
        question: "Do law firms need digital marketing?",
        answer: `
      <p>In recent times, absolutely. Here's why:-</p>
      <ul>
        <li><strong>Clients search online -</strong> Most people look for legal help through online platforms.</li>
        <li><strong>Boosts visibility -</strong> SEO and ads help your firm appear in top search results.</li>
        <li><strong>Builds credibility -</strong> A strong online presence and reviews build trust.</li>
        <li><strong>Targets the right audience -</strong> Reach potential clients based on location, interests, and needs.</li>
        <li><strong>Cost-effective -</strong> More affordable than traditional ads, with better tracking.</li>
        <li><strong>Drives long-term growth -</strong> Consistent online efforts grow your brand and client base.</li>
      </ul>
    `,
    },
    {
        id: "Two",
        question: "What digital marketing services should law firms use?",
        answer: `
      <p>At Tech2Globe, we specialize in digital marketing for law firms and know where you should put your budget. A well-designed website with high-quality content is key. Paid advertising and SEO help your law firm get its content in front of the right people. Social media helps increase brand awareness of your firm.</p>
    `,
    },
    {
        id: "Three",
        question: "How much do lawyers spend on digital marketing?",
        answer: `
      <p>We offer customized digital marketing solutions, so budgets vary based on each law firm’s goals, market, and growth plans. As a general guideline, firms can allocate around 4% of their annual revenue to digital marketing. However, many law firms currently invest closer to 1%, according to industry surveys.</p>
    `,
    },
];




export default function DigitalMarketingForLawFirms() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb pageName="Digital Marketing For Law Firms" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Digital Marketing for Law Firms" imageSrc="/images/services/service-inner/digital-marketing-banner1.jpg" />
                            <div className={Style.ContentDiv}>
                                <p>
                                    In a digitally transformed landscape, law firms require sophisticated marketing strategies to sustain a competitive advantage. Our expertly crafted digital marketing services enable law firms to excel with exceptional returns on investment by providing <strong><em>improved visibility</em></strong>, precise <strong><em>audience targeting</em></strong>, and stronger <strong><em>client trust</em></strong>.
                                </p>




                                <p>
                                    We work with you to create specific digital strategies incorporating <strong>search engine optimization (SEO)</strong>, <em>targeted advertising</em>, and <strong>strategic social media campaigns</strong> tailored to your firm's vision and objectives. With unwavering transparency, we ensure every investment delivers measurable, impactful results, helping your firm become a leader in the competitive legal landscape.
                                </p>




                            </div>


                            <div className="row pt-3">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                    <h3 className="mb-3">Strategic Marketing Services</h3>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                    <div className={`${Style.ServiceCard} text-center`}>
                                        <div className={Style.IconWrap}>
                                            <img
                                                src="/images/services/service-inner/website-design-icon.png"
                                                alt="Website Design"
                                            />
                                        </div>


                                        <h3>Website Design</h3>


                                        <ul className="mb-0">
                                            <li>Professional Aesthetics</li>
                                            <li>Intuitive Navigation</li>
                                            <li>Optimized Functionality</li>
                                            <li>Clear Content Structure</li>
                                            <li>Mobile Responsiveness</li>
                                            <li>Conversion Focus Design</li>
                                            <li>SEO Friendly Architecture</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                    <div className={`${Style.ServiceCard} text-center`}>
                                        <div className={Style.IconWrap}>
                                            <img
                                                src="/images/services/service-inner/seo-icon.png"
                                                alt="SEO Optimized Content"
                                            />
                                        </div>


                                        <h3>SEO Optimized Content</h3>


                                        <ul>
                                            <li>Targeted Keyword Integration</li>
                                            <li>Local SEO Optimization</li>
                                            <li>High-Quality Practice Area Pages</li>
                                            <li>Legal Blogging</li>
                                            <li>Technical SEO Enhancements</li>
                                            <li>Ongoing SEO Audits &amp; Adjustments</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                    <div className={`${Style.ServiceCard} text-center`}>
                                        <div className={Style.IconWrap}>
                                            <img
                                                src="/images/services/service-inner/coins-icon.png"
                                                alt="Paid Advertising"
                                            />
                                        </div>


                                        <h3>Paid Advertising</h3>


                                        <ul>
                                            <li>Search Engine Advertising (PPC)</li>
                                            <li>Social Media Advertising</li>
                                            <li>Compelling Ad Copywriting</li>
                                            <li>Optimized Landing Pages</li>
                                            <li>A/B Testing &amp; Performance Optimization</li>
                                            <li>Legal Advertising Compliance</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                    <div className={`${Style.ServiceCard} text-center`}>
                                        <div className={Style.IconWrap}>
                                            <img
                                                src="/images/services/service-inner/social-media-icon-white.png"
                                                alt="Social Media"
                                            />
                                        </div>


                                        <h3>Social Media</h3>


                                        <ul>
                                            <li>Platform Strategy &amp; Setup</li>
                                            <li>Targeted Social Ads</li>
                                            <li>Engaging Content Creation</li>
                                            <li>Thought Leadership Campaigns</li>
                                            <li>Community Interaction</li>
                                            <li>Consistent Branding</li>
                                            <li>Ethical &amp; Legal Compliance</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                    <div className={`${Style.ServiceCard} text-center`}>
                                        <div className={Style.IconWrap}>
                                            <img
                                                src="/images/services/service-inner/legal-icon-white.png"
                                                alt="Legal Copywriting"
                                            />
                                        </div>


                                        <h3>Legal Copywriting</h3>


                                        <ul>
                                            <li>Jargon-Free Content</li>
                                            <li>Informative Practice Area Pages</li>
                                            <li>Expertise-Driven Messaging</li>
                                            <li>Client-Focused Language</li>
                                            <li>SEO Enhanced Writing</li>
                                            <li>Consistent Brand Voice</li>
                                            <li>Trust Building Narratives</li>
                                        </ul>
                                    </div>
                                </div>
                               
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                                    <div className={`${Style.ServiceCard} text-center`}>
                                        <div className={Style.IconWrap}>
                                            <img
                                                src="/images/services/service-inner/markting-icon.png"
                                                alt="Seasonal Marketing"
                                            />
                                        </div>


                                        <h3>Seasonal Marketing</h3>


                                        <ul>
                                            <li>Timely Content Creation</li>
                                            <li>Seasonal Social Media Campaigns</li>
                                            <li>Awareness Campaigns for Legal Trends</li>
                                            <li>Custom Graphics &amp; Visuals</li>
                                            <li>Promotion &amp; Campaign Planning</li>
                                            <li>Audience Engagement</li>
                                            <li>Multi-Channel Execution</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>




                            <div className="row pt-3">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                    <h3 className="mb-3">How Online Marketing Fuels Growth</h3>
                                </div>




                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/marketing-visibility-icon.png"
                                                alt="Increased Visibility"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Increased Visibility</h5>
                                                <p>Techniques like SEO, paid advertising, and social media marketing help law firms appear higher in search engine results, making it easier for potential clients to discover them online.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/Targeted-Marketing.png"
                                                alt="Targeted Marketing"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Targeted Marketing</h5>
                                                <p>Digital platforms enable firms to reach specific demographics, ensuring marketing efforts are focused on individuals actively seeking legal services or more likely to need them.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/Enhanced-Credibility-Icon.png"
                                                alt="Enhanced Credibility"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Enhanced Credibility</h5>
                                                <p>A professional website, high-quality content, and positive online reviews contribute to establishing the firm as a trustworthy and reputable legal service provider.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                        <div className={Style.WaCardTwo}>
                                            <img
                                                src="/images/services/service-inner/Stronger-Online-Reputation.png"
                                                alt="Stronger Online Reputation"
                                                width="100%"
                                            />
                                            <div className={Style.WaCardBody}>
                                                <h5>Stronger Online Reputation</h5>
                                                <p>Strategies like content marketing and online reputation management help build long-term trust and authority in the legal field.</p>
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




            <FaqSection faqs={faqs} />
        </>
    )
};