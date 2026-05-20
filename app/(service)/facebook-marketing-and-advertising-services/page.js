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
    title: "Facebook Marketing And Advertising Services",
    description:
        "",
    buttonText: "Contact us",
    buttonLink: "/contact-us",
    backgroundImage: "/images/services/service-inner/fb-banner.jpg", // your banner image
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
        "question": "Why Choose our Facebook Advertising Agency?",
        "answer": "Tech2globe is a leading Facebook advertising agency. We create successful stories through strategic ad planning, creative design and data driven optimization. By partnering with us you can unlock the full potential of your Facebook campaigns."
    },

];




export default function FacebookMarketingAndAdvertisingServices() {
    return (
        <>
            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Facebook Marketing And Advertising Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <ServiceBanner pageName="Facebook Marketing And Advertising Services" imageSrc={"/images/services/service-inner/digital-marketing-banner1.jpg"} />

                            <div className={Style.ContentDiv}>
                                <h4 className={Style.HeadTitle}><img src="/images/services/service-inner/question.png" /> Why Use Facebook Marketing Services for Businesses in India?</h4>
                                <div className="row align-items-center pb-5">
                                    <div className="col-md-6">
                                        <img src="images/services/service-inner/fb-marketing.jpg" className="img-fluid rounded" />
                                    </div>
                                    <div className="col-md-6">
                                        India has over 400+ million active Facebook users. This entails diverse demographics and regional language support. We offer Facebook marketing services, which adapt to the local consumer preferences and are unique and market oriented. Our Facebook marketing agency creates content and campaigns which are customized precisely to reach the targeted audience and to maximize community engagement. We partner with your business to understand your plans and create Facebook advertising services that enhance your brand across the country.
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className={Style.ContentDiv}>
                                <h4 className={Style.HeadTitle}><img src="/images/services/service-inner/growth-icon.png" /> Expert Facebook Advertising Services to Fuel Growth.</h4>
                                <div className="row align-items-center pb-5">
                                    <div className="col-md-6">
                                        <img src="images/services/service-inner/fb-advertising.jpg" className="img-fluid rounded" />
                                    </div>
                                    <div className="col-md-6">
                                        Our Facebook advertising services are delivered by the professionals who are experienced in Facebook's advertising landscape. By planning strategically and proper tool utilization, we ensure the campaigns are efficient and successful while also delivering high revenue and reduce spending simultaneously. Our Facebook advertising agency creates ads which are visually appealing graphically, appeals to specific audience and are uniquely aligned with brand's identity.
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className={Style.ContentDiv}>
                                <h4 className={Style.HeadTitle}><img src="/images/services/service-inner/business-icon.png" /> How Our Facebook Marketing Services Boost Small and Large Businesses?</h4>
                                <div className="row align-items-center pb-5">
                                    <div className="col-md-6">
                                        <img src="images/services/service-inner/business-img.jpg" className="img-fluid rounded" />
                                    </div>
                                    <div className="col-md-6">
                                        India's massive internet user base makes Facebook a suitable platform for reaching potential customers. Our Facebook Marketing Services offer affordable price range, making it attractive for both big and small businesses, allowing them to reach both urban and rural population very easily. Our Facebook marketing services increase online visibility, helping businesses stand out from their competition and take advantage of various festivals and seasons to attract customers and boost their sales.
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className={Style.ContentDiv}>
                                <h4 className={Style.HeadTitle}><img src="/images/services/service-inner/business-icon.png" /> What's Included in Our Facebook Marketing Services</h4>
                                <div className="row align-items-center pb-3">
                                    <div className="col-md-6">
                                        <img src="images/services/service-inner/marketing-service-img.jpg" className="img-fluid rounded" />
                                    </div>
                                    <div className="col-md-6">
                                        Our Facebook Marketing Services offer demographic targeting (age, gender and location), user's interest based targeting, customised according to the audiences, based on consumer data and retargeting the existing customers.<br /><br />

                                        The Ad Formats include personalized image ads, video ads and carousel ads to highlight product ranges, cultural customization with Indian aesthetics, optimized for mobile. Brand's logos and color schemes are consist for recognition.
                                    </div>
                                </div>
                            </div>



                            <div className={Style.ContentDiv}>
                                <p>Copywriting tone and voice which aligns with brand's personality, clear and concise messaging and focusing on cultural nuances like regional languages, local slangs and festivals.</p>

                                <p>To identify the most effective items for achieving goals, we use testing elements such as:-</p>
                                <div className="row">
                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.processCard}>
                                            <div className={Style.iconWrap}>
                                                <img src="images/services/service-inner/ab-testing.png" alt="A/B Testing"></img>
                                            </div>
                                            <p className="mb-0">A/B Testing - comparing different images, videos, ad formats, audiences and ads placements.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.processCard}>
                                            <div className={Style.iconWrap}>
                                                <img src="images/services/service-inner/analytics-tools.png" alt="A/B Testing"></img>
                                            </div>
                                            <p className="mb-0">Analytics Tools - Facebook Pixel, ads manager reports and other third party tools.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.processCard}>
                                            <div className={Style.iconWrap}>
                                                <img src="images/services/service-inner/metrics.png" alt="A/B Testing"></img>
                                            </div>
                                            <p className="mb-0">Key Metrics - reach & impressions, engagement, conversions and return on ad spend.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 pt-3 pb-3">
                                        <div className={Style.processCard}>
                                            <div className={Style.iconWrap}>
                                                <img src="images/services/service-inner/consulting1.png" alt="A/B Testing"></img>
                                            </div>
                                            <p className="mb-0">Consulting and sharing reports with the clients to strategize development plans for support, monitoring and optimization.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr />

                            <div className={Style.ContentDiv}>
                                <h4 className={Style.HeadTitle}><img src="/images/services/service-inner/start-icon.png" /> Get Started With Our Facebook Advertising Agency Today.</h4>
                                <div className="row align-items-center pb-3">
                                    <div className="col-md-6">
                                        <img src="images/services/service-inner/fb-image.jpg" className="img-fluid rounded" />
                                    </div>
                                    <div className="col-md-6">
                                        Start your success story today by filling out the contact form. Schedule a consultation to discuss your business goals and your budget. Receive a proposal of customized service plans and cost details. Select the plan which suits your needs the most and launch your campaign. Then sit back and track your success.
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