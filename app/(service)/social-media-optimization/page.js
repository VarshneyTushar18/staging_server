import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaAddressBook, FaAddressCard, FaAngleRight, FaBook, FaBuilding, FaDatabase, FaFile, FaHeartbeat, FaHome, FaIndustry, FaPencilAlt, FaRegAddressCard, FaSearch, FaShare, FaShoppingCart, FaStar, FaUser, FaVolumeUp } from "react-icons/fa";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import './custom.css';



export const metadata = {
    title:
        "#1 Social Media Optimization Company For Branding | Tech2globe",

    description:
        "Are you looking to work with a top-rated social media optimization company? Tech2globe helps to boost customers’ businesses effectively on various social networks.",

    keywords: [
        "Social Media Optimization Services",
        "Social Media Optimization Agency",
        "SMO Services Company",
        "social media optimization company",
        "Professional SMO Services",
        "Top Social Media Optimization Agency",
        "Social Media Optimization",
    ],

    alternates: {
        canonical: "https://www.tech2globe.com/social-media-optimization",
    },

    openGraph: {
        title:
            "#1 Social Media Optimization Company For Branding | Tech2globe",
        description:
            "Are you looking to work with a top-rated social media optimization company? Tech2globe helps to boost customers’ businesses effectively on various social networks.",
        url: "https://www.tech2globe.com/social-media-optimization",
        siteName: "Tech2Globe web Solutions LLP",
        type: "website",
    },

    twitter: {
        card: "summary",
        title:
            "#1 Social Media Optimization Company For Branding | Tech2globe",
        description:
            "Are you looking to work with a top-rated social media optimization company? Tech2globe helps to boost customers’ businesses effectively on various social networks.",
    },
};


const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Our small company has benefited greatly from having Tech2Globe as a partner. Our online presence has increased thanks to their SEO services, which have also increased natural traffic to our website. Their staff of professionals is skilled, kind, and attentive to our demands.",
        name: "Balbir Kaur",

    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Since I have been working with Tech2Globe for a while, I have been really pleased with their SEO offerings. They have assisted me in boosting my website's traffic and search engine rankings. They always go above and beyond to make sure I am happy with their job and that their team is professional, experienced, and ready to do so.",
        name: "Genki",

    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Their SEO services have helped us raise our website's search engine ranks and increase website traffic, which has eventually increased our revenue and sales. Their team always goes above and beyond to make sure we are happy with their job and is courteous, professional, and responsive.",
        name: "Ahay",

    },
];

const faqs = [
    {
        id: "One",
        question: "How can I be assured of my social media management strategies?",
        answer: `
        Your social media marketing USA plan will include a detailed, organized summary of each post or post category tailored to your company's social media platform. This breakdown will display each post, its content, and when it will be published. Because photos and digital graphics are so important online, your plan will contain an image template so that all your photographs fit your corporate branding. If you have pictures or graphics that you would want to use, we will integrate them into your plan.
      `,
    },
    {
        id: "Two",
        question: "Why should I hire Tech2Globe for social media management services?",
        answer: `
        We are a major social media optimization company in the USA. Our team ensures that they will build your brand's internet presence successfully. We can assist you in interacting directly with your clients on social media. With the assistance of our committed team, we provide you with various social media optimization services at reasonable prices. Yes, it takes time to write posts, design graphics, develop a content strategy, integrate the plan with your products and services, respond to queries and comments, and so on. You've attempted to post regularly, but it takes too long. You understand that social media is a full-time job.
      `,
    },
    {
        id: "Three",
        question: "Why should I outsource social media management services?",
        answer: `
        Outsourcing to the best social media optimization company can be incredibly beneficial if you still determine how or where to begin promoting your business online. We can assist you in developing an effective Social Media strategy. SMO services company will save you a lot of time and ensure you provide the finest content possible to promote your brand.
      `,
    },
    {
        id: "Four",
        question: "What platforms can you take charge of?",
        answer: `
        Twitter, Facebook fan page, Facebook group, Instagram, and Pinterest are currently available for any brand. LinkedIn can also be controlled on a case-by-case basis in some circumstances. This is because LinkedIn is only utilized as a professional network and is not used the same way as other sites.
      `,
    },


];

const pageHeaderData = {
    title: "Social Media Optimization Services",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};



const caseStudies = [
  {
    "id": 1,
    "title": "Google Adword (Search Ads)",
    "image": "/images/services/service-inner/casestudies/google-ads.jpg",
    "description": "London Hampers is a UK based and family run business that provides and delivers food and drinkbased Hampers.....",
    "docLink": "#"
  },
  {
    "id": 2,
    "title": "Search Engine Optimization",
    "image": "/images/services/service-inner/casestudies/Untitled-design-(17).png",
    "description": "The client is USA-based and he is a Neuroscientist by profession with over 15 years.....",
    "docLink": "/images/case-studies/legal.png"
  },
  {
    "id": 3,
    "title": "Development And Marketing Of Consultancy Portal For Legal Advice",
    "image": "/images/services/service-inner/casestudies/legal.png",
    "description": "Our team helped the client to meet their organizational goals as result it impacts on conversion rate....",
    "docLink": "/images/case-studies/Development-and-Marketing-of-Consultancy-Portal-for-Legal-Advice-converted.pdf"
  },
  {
    "id": 4,
    "title": "Consult for PPP",
    "image": "/images/services/service-inner/casestudies/Untitled-design-(16).png",
    "description": "The biggest challenge for us is – the business niche is complete new for us and first we need to understand....",
    "docLink": "/images/case-studies/Case-Study-Consult-for-PPP-converted.pdf"
  },
  {
    "id": 5,
    "title": "Social Media Marketing .2",
    "image": "/images/services/service-inner/casestudies/2.jpg",
    "description": "This Social Media Marketing Case Study featured an Indian-based customer who has a “Home Furnishing” business, named: SASSOON FAB.",
    "docLink": "/images/case-studies/Social-Media-Marketing-Case-Study.pdf"
  },
  {
    "id": 6,
    "title": "Guest Posting & Blog Writing",
    "image": "/images/services/service-inner/casestudies/7.jpg",
    "description": "This Case Study refers to our Guest Posting Services as well as Blog Writing Services for a client and showcased our unique approach to deliver...",
    "docLink": "/images/case-studies/case-study-of-guest-posting-services.pdf"
  }
]


export default function SocialMediaOptimization() {

    return (
        <>

            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Social Media Optimization" />
            <BrandSection />

            <div className={Style.PageContent}>
                <div className="container pt-3 pb-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 text-center">
                            <ul className="d-flex list-unstyled justify-content-between">
                                <li><img src="images/services/service-inner/clientlogo/top-digital-marketing-2021.webp" alt="" className="img-fluid" /></li>
                                <li><img src="images/services/service-inner/clientlogo/top-small-business-seo-company-cluth-2021.webp" alt="" className="img-fluid" /></li>
                                <li><img src="images/services/service-inner/clientlogo/top-wordpress-developers-2021.webp" alt="" className="img-fluid" /></li>
                                <li><img src="images/services/service-inner/clientlogo/customer-choice-award-sitejabber-2018.webp" alt="" className="img-fluid" /></li>
                                <li><img src="images/services/service-inner/clientlogo/top-seo-services-company-goodfirms.webp" alt="" className="img-fluid" /></li>
                                <li><img src="images/services/service-inner/clientlogo/search-berg-trustpilot-reviews.webp" alt="" className="img-fluid" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                            <div className={Style.ContentDiv}>

                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 mt-3">
                                        <h2>Best Social Media Marketing Agency</h2>
                                        <p>We know how to create endless opportunities with our restless efforts! We channel, nurture, and convert followers into committed customers. Do your strategies come up short of your goals? This might be because now social media is preferred more than ever; social media is a medium that requires all of your resources: a clear strategy, complete commitment, and a well-defined budget. If any of these elements are missing, your strategies may not reach their full potential. Additionally, it is important to ensure that your strategies are tailored to your target audience and that you are consistently monitoring and evaluating your progress to ensure that your strategies are effective. Tech2Globe having experience of over 14 years and consistently delivering satisfying results, believes better marketing always leads to smooth business expansion. As the top social media optimization agency, we integrate social media strategies into your marketing plan to maximize your online visibility with the professional SMO services, like Instagram or Facebook management services. We can help you create a comprehensive social media strategy that will help you reach your goals. We will help you identify your target audience, create content that resonates with them, and develop a plan to engage with them. We will also help you track and measure your progress, so you can make adjustments as needed.</p>

                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-3">
                                        <img src="/images/services/service-inner/mo-side-banner.webp" className="img-fluid img-responsive" alt="Social Media Optimization" />
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <div className="row mt-4 mb-3">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-3">
                                        <img src="/images/services/service-inner/know-About-1.png" className="img-fluid img-responsive" alt="dm2" />
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 mt-3">
                                        <h2>Why Do Businesses Need Social Media Management?</h2>
                                        <p>With our social media marketing services, we help you with the visibility of social media profiles to stay on top of emerging themes and develop an agile social media marketing plan.</p>
                                        <p>Social media management is essential to a company's core strategy. Social media management involves creating and managing content on social media platforms such as Facebook, Twitter, Instagram, and YouTube. It also includes monitoring conversations, responding to customer inquiries, and engaging with customers. Social media management helps companies build relationships with their customers, increase brand awareness, and drive sales. Companies can stay up to date on industry trends, build relationships with influencers, and increase customer loyalty.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-3">
                    <div className={Style.ContentDiv}>
                        <div className="container">
                            <h2 className="text-center mb-3">How do Social Media Platforms Help With Better Social Presence?</h2>
                            <p className="text-center mb-4">As the top social media optimization agency, we provide comprehensive, cutting-edge solutions to help you scale your business on every social media platform!</p>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="pricing-block text-center wow fadeinup ">
                                        <div className="inner-box h-100">
                                            <div className="icon-box">
                                                <div className="icon-outer"><Image src="/images/services/service-inner/facebook-marketing-smo.png" width={100} height={100} alt="Facebook Marketing" /></div>
                                            </div>
                                            <div className="price-box">
                                                <div className="title"> Facebook Marketing</div>
                                                <p>Advertising on Facebook can swiftly bring your professional practices to the attention of a new audience. As a top social media optimization agency, we personalize your ad to potential clients interested in your product or service based on their interests, gender, or even region using data from Facebook. Facebook's advertising platform has developed over time; users can now execute a marketing campaign or run advertisements.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="pricing-block blue text-center wow fadeinup ">
                                        <div className="inner-box h-100">
                                            <div className="icon-box">
                                                <div className="icon-outer"><Image src="/images/services/service-inner/youTube-marketing-smo.png" width={100} height={100} alt="YouTube Marketing" /></div>
                                            </div>
                                            <div className="price-box">
                                                <div className="title"> YouTube Marketing</div>
                                                <p>YouTube receives far more traffic than any other. Even if you make a few videos for your company, you may still reach a large audience by advertising your services on other people's videos. YouTube has a larger traffic pool; you're almost certain to find potential clients if you appeal to their wants. By implementing YouTube marketing with the help of the best social media optimization company, you are also strengthening your company's internet authority.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="pricing-block yellow text-center wow fadeinup h-100">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <div className="icon-outer"><Image src="/images/services/service-inner/linkedIn-marketing-smo.png" width={100} height={100} alt="LinkedIn Marketing" /></div>
                                            </div>
                                            <div className="price-box">
                                                <div className="title"> LinkedIn Marketing</div>
                                                <p>LinkedIn is a great platform for networking, job searching, and professional development. It is also a great platform for marketing, as it allows you to reach a large audience of professionals. You can use LinkedIn to promote your business, products, services, and events. The platform offers a variety of tools and features to help you create and manage your campaigns. We as your social media marketing in USA target.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4 ">
                                    <div className="pricing-block green text-center wow fadeinup h-100 ">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <div className="icon-outer"><Image src="/images/services/service-inner/instagram-marketing-smo.png" width={100} height={100} alt="Instagram Marketing" /></div>
                                            </div>
                                            <div className="price-box">
                                                <div className="title"> Instagram Marketing</div>
                                                <p>Instagram is a visually appealing social media platform with recent features like reels. This social app now has over 800 million active users. However, Instagram is more than just a platform having a collection of beautiful photos and videos; many businesses now use the app as part of their digital marketing strategy. Still, being the top social media optimization agency, we refrain from over-posting and uploading irrelevant content. It creates a harmful impact on your audience!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4 ">
                                    <div className="pricing-block pink text-center wow fadeinup h-100">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <div className="icon-outer"><Image src="/images/services/service-inner/twitter-marketing-smo.png" width={100} height={100} alt="Twitter Marketing" /></div>
                                            </div>
                                            <div className="price-box">
                                                <div className="title"> Twitter Marketing</div>
                                                <p>Twitter marketing can be enhanced by launching cross-channel campaigns centered on the best social media optimization company. Tech2Globe social media services team can help you to create a comprehensive social media strategy that will help you to reach your target audience, build relationships, and increase brand awareness on Twitter. We can help you to create content that resonates with your target audience, optimize your social media profiles, and create campaigns that will help you to reach your goals.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="pricing-block  text-center wow fadeinup h-100">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <div className="icon-outer"><Image src="/images/services/service-inner/pinterest-marketing-smo.png" width={100} height={100} alt="Pinterest Marketing" /></div>
                                            </div>
                                            <div className="price-box">
                                                <div className="title"> Pinterest Marketing</div>
                                                <p>Pinterest marketing services can benefit your brand because the platform rapidly becomes a search powerhouse for individuals worldwide. The network currently has over 175 million active users who use the enticing pin boards based on their particular niche of interest. Tech2Globe is the perfect option for leveraging the potential of Pinterest to increase the ROI of your brand.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className={Style.SectionYellow}>
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-3 pb-3">
                            <div className={Style.ContentDiv}>
                                <h4 className="text-center mb-3">Get The Best <span className="text-danger">Perfect SEO Strategy </span>For Your Business!
                                </h4>
                                <h4 className="text-center mb-3">Call us at <Link href="tel:+15168585840">+1-516-858-5840</Link></h4>
                                <div className="text-center">
                                    <Link href="/contact-us" className="btn button-red mb-3">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-3">
                    <div className={Style.ContentDiv}>
                        <div className="container">
                            <h2 className="text-center">Our Social Media Management Services</h2>

                            <p className="text-center mb-4">We create compelling social media campaigns to reach and engage the correct audience across several social channels.</p>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow mb-3 h-100">
                                        <div className="text-center">
                                            <FaShare style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5 className="mt-2 mb-2">Social Media Marketing</h5>
                                            <p>Tech2Globe, the best social media optimization company services provider, has accomplished everything from launching a brand on social media to developing a long-term growth strategy for our clients. Our competence lies in creating enticing content that can boost your brand on social media, such as creating posts, graphics, videos, GIFs, blogs, etc. Using various tools and technical methodologies, we enable ideas to go viral and get the trending charts, but also the brains of the target audience. ​</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow mb-3 h-100">
                                        <div className="text-center">
                                            <FaStar style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5 className="mt-2 mb-2">Online Brand Reputation</h5>
                                            <p>Managing your internet reputation entails giving your business the finest online presence possible. These services ensure that when clients (and potential leads) look for your company online, they first come across good reviews. Tech2Globe provides the best social media optimization services and uses various tactics to remove unfavorable articles and reviews from the first few pages of search results for businesses with harmful content online. Your internet reviews can be managed through online reputation management to ensure they are favorable.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow mb-3 h-100">
                                        <div className="text-center">
                                            <FaVolumeUp style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5 className="mt-2 mb-2">Influencer Marketing</h5>
                                            <p>From social media integrations to influencer-led IPs, our teams excel at approaching influencer marketing strategy and digital content. We use statistics and our knowledge to create unique social media optimization services. Using our technology, we can categorize, find, and choose the ideal influencers based on relevancy, authenticity, brand safety, predictive performance, and other critical data criteria. This extensive data enables us to quantify the influencer loop and provide the highest return on investment.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow mb-3 h-100">
                                        <div className="text-center">
                                            <FaPencilAlt style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5 className="mt-2 mb-2">Social Media Content Writing</h5>
                                            <p>Nothing works better than content to guide your company through the confusing marketing maze. You get the best content for all your social media needs, and we, as a top social media optimization services provider, help you incredibly in this fiercely competitive market. The content is the most crucial component, whether you work in B2B or B2C. We create content that is optimized for search engines and is designed to drive traffic to your website.</p>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            
            <FaqSection faqs={faqs} />
            <CaseStudiesService caseStudies={caseStudies} />

        </>
    )
}