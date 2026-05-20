import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaArrowRight, FaChartBar, FaChartLine, FaClock, FaCogs, FaCrosshairs, FaCube, FaDatabase, FaDesktop, FaDownload, FaEnvelope, FaEnvelopeOpen, FaFileInvoice, FaLaptop, FaLayerGroup, FaLightbulb, FaList, FaPenNib, FaSearch, FaShieldAlt, FaShoppingCart, FaThumbsUp, FaUsers, FaUsersCog } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
    title: "Portland Digital Marketing Agency And Services",
    description:
        "Choose Portland’s top digital marketing agency with 360° digital marketing services. ✓7000+ Successful Projects ✓300+ Experts. Enquire Now!",
    openGraph: {
        title: "Portland Digital Marketing Agency And Services",
        description:
            "Choose Portland’s top digital marketing agency with 360° digital marketing services. ✓7000+ Successful Projects ✓300+ Experts. Enquire Now!",
        url: "https://www.tech2globe.com/portland-digital-marketing-agency",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Portland Digital Marketing Agency And Services",
        description:
            "Choose Portland’s top digital marketing agency with 360° digital marketing services. ✓7000+ Successful Projects ✓300+ Experts. Enquire Now!",
    },
    alternates: {
        canonical: "https://www.tech2globe.com/portland-digital-marketing-agency",
    },
};

const pageHeaderData = {
    title: "Understanding the Importance of a Digital Marketing Agency Portland",
    description:
        "Tech2Globe, a Portland Digital Marketing Agency, helps businesses of all sizes get more traffic, acquire more customers, and sell more stuff.",
    buttonText: "Contact us",
    buttonLink: "#",
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
    question: "What services do digital marketing agencies in Portland offer?",
    answer: `
      <p>These are a few services provided by our <strong>Digital Marketing Agency Portland</strong> that might support the expansion of your company in these contemporary, fast-paced times, including:</p>
      <div class="row">
        <div class="col-lg-6">
          <ul style="list-style: disc;">
            <li>Search Engine Optimisation Services</li>
            <li>Marketing Services for Search Engines</li>
            <li>Services for Web Development and Web Design</li>
            <li>Social Media Promotion Services</li>
            <li>Branding Assistance</li>
          </ul>
        </div>
        <div class="col-lg-6">
          <ul style="list-style: disc;">
            <li>Content Promotion Services</li>
            <li>Email Promotion Services</li>
            <li>Imaginary Services</li>
            <li>Marketing Services with AI</li>
            <li>Services for PPC Marketing</li>
          </ul>
        </div>
      </div>
    `,
  },
  {
    id: "Two",
    question: "How do I choose the right digital marketing agency in Portland for my business?",
    answer: `
      <p>The many factors to take into account when choosing a digital marketing agency:</p>
      <ul style="list-style: disc;">
        <li>Think about your objectives</li>
        <li>Establish a spending plan</li>
        <li>Investigate several choices</li>
        <li>Things to think about when selecting a digital marketing firm</li>
        <li>Select multiple potential customers</li>
        <li>Make as many inquiries as possible</li>
      </ul>
    `,
  },
  {
    id: "Three",
    question: "What industries do Portland digital marketing agencies specialize in?",
    answer: `
      <p>These are the few things that our <strong>Digital Marketing Company Portland</strong> specialize in:</p>
      <ul style="list-style: disc;">
        <li><strong>Email marketing</strong> is a proven, low-cost strategy with favorable ROI and higher connection levels than social media.</li>
        <li><strong>SEO</strong> is crucial for websites and blogs, enhancing traffic quality and determining ranking.</li>
        <li><strong>Content writing</strong> involves planning, development, promotion, and publication, impacting SEO ranking.</li>
        <li><strong>Social media marketing</strong> helps improve website exposure and reach the intended audience effectively.</li>
      </ul>
    `,
  },
  {
    id: "Four",
    question: "How much do digital marketing services in Portland cost?",
    answer: `
      <p>Your marketing goals and budget, among other business-specific factors, will determine how much <strong>Digital Marketing Services Portland</strong> will cost. As digital marketing continues to grow, more businesses are seeking to collaborate with trustworthy Internet marketing firms.</p>
    `,
  },
  {
    id: "Five",
    question: "How long does it take to see results from digital marketing efforts in Portland?",
    answer: `
      <p>In highly competitive businesses, results can take up to a year longer than the typical time of three to six months. While PPC techniques could produce results in a few days or weeks, campaign optimization for maximum ROI could take months.</p>
    `,
  },
  {
    id: "Six",
    question: "Do I need to sign a contract with a digital marketing agency in Portland?",
    answer: `
      <p>A <strong>digital marketing agency Portland</strong> contract binds the principal to agreements made by the agent and permits the agent to act on behalf of the principal. It is a legally binding agreement that safeguards both parties' rights.</p>
    `,
  },
  {
    id: "Seven",
    question: "How do digital marketing agencies in Portland measure success?",
    answer: `
      <p>Creating advertising content, securing funding, and maximizing clicks and conversions are all necessary for a successful campaign. Success is measured through goals like increased social media audience, email sign-ups, website traffic, consumer sentiment, digital presence, and brand exposure.</p>
    `,
  }
];

export default function PortlandDigitalMarketingAgency() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb pageName="Portland digital marketing agency" />
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
                                        <h2 className="pb-3">The Key Services Offered by a Top-rated Digital Marketing Agency Portland</h2>
                                        <p>Recently, there has been a significant shift in the Digital Marketing Services Portland environment, necessitating firms to modify their strategy to remain competitive. Businesses have had to modify their approaches in order to stay ahead of the curve as a result of the significant changes in the digital marketing landscape in recent years. Collaborating with a <a href="digital-marketing">digital marketing agency</a> is among the best approaches to do this. This strategy has various advantages, particularly given the state of business today.</p>
                                    </div>

                                </div>

                                <div className="row">
                                    <p>Producing fewer and more impactful creative assets is one of the main benefits of partnering with a <strong>Portland Digital Marketing Agency</strong>. They are subject-matter specialists who can provide precise, superior marketing collateral that will save your company tens of thousands of dollars.</p>
                                </div>

                                <div className={Style.ContentDiv}>
                                    <h2 className="mb-3">The services provided by Portland Digital Marketing Company are:</h2>
                                </div>

                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaLayerGroup /> Content Writing</h4>
                                <p>The substance of your website is vital since it drives traffic to your website and is the basis of your <strong>SEO strategy</strong>. Leave the writing of your content to Tech2Globe, and we'll do it expertly. We make sure to follow Google guidelines when creating content by keeping our content specialists up to date on current events and industry trends. In order to make your content easier to read, we create headlines that are compelling, include keywords that are very effective, and include images.</p>

                            </div>


                            <div className={Style.ContentDiv}>
                                <h4><FaEnvelope /> Email Marketing</h4>
                                <p>We understand your aim to increase sales by deeper customer connection. Our digital marketing agency located in Portland can assist with a robust email marketing strategy. We will create customized email campaigns supporting your company objectives and directly addressing your audience. Our staff will handle everything, including managing your email lists and tracking outcomes, producing engaging content, and designing visually striking layouts.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaPenNib /> Online Reputation Management (ORM)</h4>
                                <p>Your internet reputation and reviews have the power to make or break your success. Reputation management is made easy with our internet marketing agency's assistance. Our team can help you achieve more favorable reviews and streamline your <a href="online-reputation-management-services">online reputation management</a> (ORM) operations by using QR codes, two-way SMS marketing, and state-of-the-art software.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaUsers /> Social Media Marketing</h4>
                                <p>Ready to grow and use social media to reach new audiences? You can look up to <strong>Digital Marketing Agency</strong> Portland. We create social media campaigns that will engage your followers and help your business grow. Our digital marketing firm assesses the online activity of your clients, establishes your objectives, and benchmarks your competitors. We create paid advertising and social media brand management plans specifically for your company using data and analytics.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaChartLine /> Pay Per Click (PPC) Administration</h4>
                                <p>Make precise and fast contact with your customers by using a data-driven <a href="ppc-services">PPC</a> campaign. Our PPC Specialists give you peace of mind that your campaign is in capable hands. Our staff drafts precise ad copy, fine-tunes your bidding and device targeting techniques, and tracks your return on investment for every term. We also use seasonal trends to advertise your goods and generate a lot of traffic and leads.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaLaptop /> Search Engines Optimization(SEO)</h4>
                                <p>We can assist you in achieving better organic ranks and more exposure in search results by using meticulous keyword research and white-hat SEO techniques. In-depth keyword analysis, on-page and off-page optimization, and Google Search Console tracking are all done by our internet marketing firm. As part of your digital marketing solutions, these techniques enable us to draw in high-quality leads, traffic, and conversions.</p>
                            </div>

                            <div className={Style.ContentDiv}>
                                <h4><FaShoppingCart /> eCommerce Marketing</h4>
                                <p>For top-of-funnel traffic to your website, our internet marketing business offers eCommerce SEO and eCommerce PPC solutions. We improve your product pages, produce more product reviews, and tailor your marketing tactics to the specific requirements of your target audience.</p>
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
                            <h2>The Benefits of Hiring a Professional Digital Marketing Company Portland</h2>
                            <p>The industry of Portland digital marketing is expanding at a never-before-seen pace. Businesses in the United States spend over $110 billion on digital advertising.</p>

                            <p>Relying solely on your outdated advertising strategies is no longer sufficient to attract customers, as more businesses are devoting their time and funds to internet marketing.</p>

                            <p>Value-driven internet marketing services can help you boost revenue and create a strong digital foundation. You benefit from digital marketing because of the following:</p>

                            <ul>
                                <li>Save resources, money, and time</li>
                                <li>Develop the internet reputation of your brand</li>
                                <li>Get a large return on investment</li>
                                <li>Optimize the number of consumer touchpoints</li>
                                <li>Monitor the outcomes of your campaign</li>
                                <li>Encourage increased customer involvement</li>
                                <li>Make strategic adjustments based on data and analytics to promote long-term, profitable growth</li>
                                <li>Utilize targeted audience segmentation</li>
                                <li>Boost the conversion rates of your business</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row pt-3">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
                            <h2>Why Choose Our Digital Marketing Services Portland?</h2>
                            <p>Our <strong>Portland Digital Marketing Company</strong> is a multi-award-winning internet marketing firm offering targeted advertising solutions. Our main goal is to assist companies in maximizing conversion opportunities and client retention rates.</p>

                            <p>You can rely on us to dedicate ourselves entirely to the online success of your brand. Select <strong>Digital Marketing Service portland</strong>, to receive all of the above benefits in addition to a plethora of other digital marketing solutions:</p>

                            <div className="row mt-3">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                                    <div className="card h-100 p-3">
                                        <Image
                                            src="/images/services/service-inner/import-data.png"
                                            width={45}
                                            height={45}
                                            className="d-block"
                                        />
                                        <h4>Data-driven Digital Marketing Services</h4>
                                        <p>Data and research are crucial components of a successful business. We offer results-driven digital marketing services that help you deliver the right message on the right platform at the right time. For the purpose of producing current measurements and useful insights, we conduct a SWOT analysis of your brand.</p>
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
                                        <h4>Industry Experts</h4>
                                        <p>Professionals in digital marketing with over ten years of expertise in the field make up our <strong>Digital Marketing Company Portland</strong>. We create goal-oriented plans, stay up to date on the newest developments and trends, and make sure all of our campaigns adhere to search engine standards. We can assist you with Shopify SEO, Walmart Marketplace integration, and other digital marketing solutions.</p>
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
                                        <h4>Custom Digital Marketing Framework</h4>
                                        <p>Our internet marketing business approaches online marketing from all angles. We assess your present digital presence and marketing methods, establish key performance indicators (KPIs), pinpoint your brand's personality, and incorporate the consumer experience throughout the entire strategy-building process. By doing this, we maximize all of your digital touchpoints by developing a disciplined marketing strategy.</p>
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
                                        <h4>Competitive Pricing</h4>
                                        <p>Our internet marketing services are tailored to your industry's requirements, online requirements, and financial capabilities. We assist you in getting the necessary internet attention without going over budget in this way.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
                            <div className={Style.ContentDiv}>
                                <h2>The Success Stories of Businesses who Partnered with our Digital Marketing Agency Portland</h2>
                                <p>Since the company's establishment, we have continuously provided a wide range of excellent software solutions at reasonable prices. In addition, our knowledge and experience span a wide range of sectors and fields to assist any business. We have a long history of outstanding achievements in commercial software development, e-commerce, retail, manufacturing, real estate, consulting services, and other fields because of our unrelenting dedication to perfection.</p>

                                <p>One of our success stories include, Outdoor Nativity Store. They needed to be visible online, which is on social media and search engines. As part of a comprehensive SEO effort, Portland Digital Marketing Services, we assisted them in developing a continuous content plan and optimizing their website for mobile. We are assisting them in better positioning themselves for growth, even during the off-season.</p>

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