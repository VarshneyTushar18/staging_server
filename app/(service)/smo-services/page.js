import Style from "./style.module.css";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaAddressBook, FaAddressCard, FaAngleRight, FaBook, FaBuilding, FaDatabase, FaFile, FaHeartbeat, FaHome, FaIndustry, FaPhone, FaQuestionCircle, FaRegAddressCard, FaSearch, FaShoppingCart, FaSpeakerDeck, FaStar, FaUser, FaVolumeOff, FaVolumeUp } from "react-icons/fa";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import './custom.css';



export const metadata = {
    title:
        "SMO Services | Best Social Media Optimization Company| Tech2globe ",

    description:
        "Get new followers and engage existing followers on your social media profiles with our top quality social media services now. Hire us for SMO Services",

    keywords: "",

    alternates: {
        canonical: "https://www.tech2globe.com/smo-services",
    },

    openGraph: {
        title:
            "SMO Services | Best Social Media Optimization Company| Tech2globe ",
        description:
            "Get new followers and engage existing followers on your social media profiles with our top quality social media services now. Hire us for SMO Services",
        url: "https://www.tech2globe.com/smo-services",
        siteName: "Tech2Globe Web Solutions LLP",
        type: "website",
    },

    twitter: {
        card: "summary",
        title:
            "SMO Services | Best Social Media Optimization Company| Tech2globe ",
        description:
            "Get new followers and engage existing followers on your social media profiles with our top quality social media services now. Hire us for SMO Services",
    },
};


const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "They helped us create engaging content and optimize our profiles for better reach. We saw a significant increase in followers and website traffic. They gave us a way to connect more customers!",
        name: "Sarah Jones, Marketing Manager",

    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "We partnered with Tech2Globe to improve our social media engagement. Their team developed a targeted strategy and managed our platforms efficiently. Now we have more meaningful interactions with our audience.",
        name: "David Kim, CEO",

    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Their team is up-to-date with understanding the latest social media trends and using them to our advantage. They helped us run targeted campaigns and measure results effectively. We've seen a significant improvement in brand awareness and customer loyalty.",
        name: "Dr. Lee Garcia, Head of Social Media",

    },
    {
        id: 4,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Their team is always available to respond to comments and messages, keeping our customers happy. A valuable partner for our social media marketing!",
        name: "Michael Hernandez, Social Media Manager",

    },
    {
        id: 5,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Their team handles everything from content creation to posting and engagement. They freed up our time to focus on other areas of our business, while still keeping our social media presence strong. We highly recommend them!",
        name: "Emily Garcia, Marketing & Sales Associate",

    },
];

const faqs = [
    {
        id: "One",
        question: "How much should I spend on social media marketing?",
        answer: `
        The amount you spend on your business’s social media marketing depends upon 3 important things: Goals, budget, and industry. However, considering standard industry benchmarks, most companies aiming for positive ROI spend 5–15% of their annual revenue on marketing. If you are starting, it may be wise to outsource tasks that require specific expertise or that take up most of your time, such as content creation, graphic design, or social media management.
      `,
    },
    {
        id: "Two",
        question: "How does SMO benefit my business?",
        answer: `
        SMO has numerous advantages that can benefit both the brand/business that has already established itself in the market and startups that are just beginning their journey. For example, our SMO team's well-implemented strategy with engaging content, targeted outreach, and effective analytics can help your business with increasing brand awareness, driving website traffic, enhancing customer engagement, building a loyal community and more.
      `,
    },
    {
        id: "Three",
        question: "What are the tools used for SMO?",
        answer: `
        SMO is a strategy that requires tools that are software/platforms useful for increasing online presence and reach on different social media platforms. The top social media optimization tools 2024 that can be useful for this purpose are Canva, Hootsuite, analytics dashboards, Buffer, SocialOomph, and BuzzSumo. Each of these tools has different features and functionalities, but they share a similar objective, i.e., to enhance engagement.
      `,
    },
    {
        id: "Four",
        question: "Can SMO help me generate leads?",
        answer: `
        Yes, SMO can help you generate leads through targeted social media campaigns and engaging content. For instance, if you run a clothing business, SMO can help with promoting your latest collections through eye-catching posts. If you are the owner of a health product wanting to increase brand awareness, SMO can leverage influencer marketing or social media ads to reach your target audience.
      `,
    },
    {
        id: "Five",
        question: "How can Social Media be used to manage online reputation effectively?",
        answer: `
         Online reputation is a reflection of how your brand is perceived by customers and the public. Managing it is crucial for building trust, enhancing credibility, and fostering customer loyalty. Here, social media plays an important role. Our SMO services employ strategies that foster engagement and connection with audiences, maintaining a positive online reputation. This will help you and your business have a strong presence and a favorable image among your customers and stakeholders.
      `,
    },
    {
        id: "Six",
        question: "Is marketing on TikTok worth it?",
        answer: `
        Yes, marketing on TikTok can be very helpful for companies that want to reach a lot of people, especially younger users. TikTok's formula also gives new material more weight, which increases your reach. The site also has a lot of influential people from different businesses, which makes it easier to form partnerships. Lastly, TikTok has millions of busy users around the world, making it a great way to reach a wide range of people.
      `,
    },
    {
        id: "Seven",
        question: "Do you help get unpaid or paid verified badges on Instagram?",
        answer: `
        Yes, our services offer unpaid verified badges to those with Instagram profile pages having organic reach, a good ratio of engagement to followers, and other similar factors. On the other hand, our paid verified badges are for businesses or individuals seeking expedited verification, i.e., those who want to establish their credibility and gain visibility quickly.
      `,
    },
    {
        id: "Eight",
        question: "Can TikTok marketing help me drive sales?",
        answer: `
        TikTok marketing is the act of pushing goods or services on the TikTok website to get people to use them and buy them. Because of this, one of TikTok's goals is to help companies reach many people and drive sales. The app has many users, and 71.2% of those users say they buy something after seeing it on the app. TikTok users want honest, funny, and relatable content, so it's essential to make content that people want to watch.
      `,
    },
    {
        id: "Nine",
        question: "Do you manage TikTok as it's Banned in some countries?",
        answer: `
        Yes, we do manage Tiktok. As part of our business services, we can make exciting material that fits your brand, plan for audience growth, and look at success metrics to make sure our marketing plan is working. We also focus on using other tools to keep the company visible and reach people, even in places where TikTok isn't available.
      `,
    },
    {
        id: "Ten",
        question: "How can I handle negative comments on my social media page?",
        answer: `
        You can deal with mean comments on your social media page by being polite, quickly addressing the issues, and, if necessary, taking the conversation offline. If you need professional help, though, our services include a proactive approach where we watch your brand's image, handle crises, and come up with custom responses to protect it.
      `,
    },
    {
        id: "Eleven",
        question: "How can Facebook help me generate leads?",
        answer: `
        Over 2.9 billion people use Facebook, making it a powerful platform. Targeted advertising and lead creation forms are some of the tools and methods that it uses to help businesses find new customers. For instance, if you own a restaurant in your area, our team can find food lovers nearby and reach out to them. This personalized method makes it more likely that you'll get leads and turn them into loyal customers.
      `,
    },
    {
        id: "Twelve",
        question: "Can I sell directly through Pinterest?",
        answer: `
        Yes, you can use product pins to sell things right on Pinterest. In order to do that, you can:
        <ul>
        <li>Sign up for a business account. This will give you access to the data and ads you need to sell things on Pinterest.</li>
        <li>Make your account stand out by making sure your bio is optimized and your picture is a high-resolution brand or headshot.</li>
        <li>Set up a link to your website and make sure it works. Then, confirm that it is accurate.</li>
        <li>Link your online store—Link your Pinterest business account to your online store and use Pinterest catalogs to sync your goods.</li>
        <li>Use the tools on Pinterest to get people to visit your store. You can use promoted pins, rich pins, Pinterest SEO, and Pinterest Ads.</li>
        </ul>
      `,
    },
    {
        id: "Thirteen",
        question: "How can I target specific audiences on Pinterest?",
        answer: `
        Pinterest is an excellent platform for businesses to get ideas, motivation, and products because most of the people who use it are active and looking for things. Pinterest isn't just a social network; it's also a way to find new things to look at. Along with that, here are some things you can do on Pinterest to successfully reach the people you want to cater to:
        <ul>
        <li>you can use keyword-rich descriptions.</li>
        <li>Create engaging pins, and leverage Pinterest Ads.</li>
        </ul>
      `,
    },
    {
        id: "Fourteen",
        question: "How can Snapchat benefit my business?",
        answer: `
        Snapchat is a fun app, but it can also make you money by letting you promote goods and services. As a way for businesses to connect with younger people, it works well. For example, if you want to sell gym gear or beauty products, Snapchat can help you reach new customers by giving you creative material. However, to reach more of your target audience, ads, content, promotions, influencer partnerships, and strategic campaigns are required.
      `,
    },


];

const pageHeaderData = {
    title: "SMO Services",
    backgroundImage: "/images/skyscraper.jpg",
    shortBanner: true
};



const caseStudies = [
    {
        "id": 1,
        "title": "Social Media Marketing",
        "image": "/images/services/service-inner/casestudies/social-media-marketing.jpg",
        "description": "This Social Media Marketing Case Study featured an Indian based customer who has a “Home Furnishing” business, named: SASSOON FAB....",
        "docLink": "/images/case-studies/Social-Media-Marketing-Case-Study.pdf"
    },
    {
        "id": 2,
        "title": "Blog Promotion",
        "image": "/images/services/service-inner/casestudies/blog-promotion1.jpg",
        "description": "The Social Media Marketing Case Study features a customer US based Software Company, asked us to build traffic and nurture a Facebook and Twitter Community for his blog....",
        "docLink": "/images/case-studies/Social-Media-Marketing-Case-Study-Blog.pdf"
    },
    {
        "id": 3,
        "title": "Consult for PPP",
        "image": "/images/services/service-inner/casestudies/consult-for-ppp.jpg",
        "description": "The client is the Retired Indian Government Officer and collaboration with more retired middle level as well as junior level officers wanted to launched the “Consult for PPP....",
        "docLink": "/images/case-studies/Consult-for-PPP.pdf"
    },
    {
        "id": 4,
        "title": "Levering Social Media",
        "image": "/images/services/service-inner/casestudies/social-media-food-marketing.jpg",
        "description": "Tech2Globe had the privilege of partnering with our esteemed client, Frontier, to enhance their digital presence ....",
        "docLink": "/images/case-studies/Levering-Social-Media-Marketing-for-Success-of-Food-Brand (3).pdf"
    },
    {
        "id": 5,
        "title": "Leveraging Ecommerce Brand",
        "image": "/images/services/service-inner/casestudies/travel-luggage-post.jpg",
        "description": "The Brand is located in Pomona, California, East of Los Angeles. Founded in 1984, they prides themself on manufacturing...",
        "docLink": "/images/case-studies/Case Study-Traveler-Choice-Social-Media .pdf"
    },

]

const clients = [
    { src: "/images/services/service-inner/clientlogo/unacademy.png", alt: "unacademy", title: "Unacademy" },
    { src: "/images/services/service-inner/clientlogo/cantabil.png", alt: "cantabil", title: "Cantabil" },
    { src: "/images/services/service-inner/clientlogo/wooden-street.png", alt: "wooden-street", title: "wooden-street" },
    { src: "/images/services/service-inner/clientlogo/go-mechanic.png", alt: "go-mechanic", title: "go-mechanic" },
    { src: "/images/services/service-inner/clientlogo/frontier.png", alt: "frontier", title: "frontier" },
    { src: "/images/services/service-inner/clientlogo/wow.png", alt: "wow", title: "wow" },
    { src: "/images/services/service-inner/clientlogo/creative-arcades.png", alt: "creative-arcades", title: "creative-arcades" },
    { src: "/images/services/service-inner/clientlogo/shikhar-group.png", alt: "shikhar-group", title: "shikhar-group" },
    { src: "/images/services/service-inner/clientlogo/athena1.png", alt: "athena1", title: "athena1" },
    { src: "/images/services/service-inner/clientlogo/cozymom-logo1.png", alt: "cozymom", title: "cozymom" },
    { src: "/images/services/service-inner/clientlogo/ecomm-guru-logo1.png", alt: "ecomm-guru", title: "ecomm-guru" },
    { src: "/images/services/service-inner/clientlogo/eLITE_Gourmet_logo.png", alt: "eLITE_Gourmet_logo", title: "eLITE_Gourmet_logo" },
    { src: "/images/services/service-inner/clientlogo/freshmistLogo.png", alt: "freshmistLogo", title: "freshmistLogo" },
    { src: "/images/services/service-inner/clientlogo/grit-fit-logo1.png", alt: "grit-fit", title: "grit-fit" },
    { src: "/images/services/service-inner/clientlogo/hyperchiller-logo.png", alt: "hyperchiller", title: "hyperchiller" },
    { src: "/images/services/service-inner/clientlogo/kamari.png", alt: "kamari", title: "kamari" },
    { src: "/images/services/service-inner/clientlogo/legend-footware-logo1.png", alt: "legend-footware", title: "legend-footware" },
    { src: "/images/services/service-inner/clientlogo/mrsyruplogo1.png", alt: "mrsyrup", title: "mrsyrup" },
    { src: "/images/services/service-inner/clientlogo/ms-logo-retina-with-tm.png", alt: "ms-logo", title: "ms-logo" },
    { src: "/images/services/service-inner/clientlogo/sassoon-logo1.png", alt: "sassoon", title: "sassoon" },
    { src: "/images/services/service-inner/clientlogo/travelchoiselogo1.png", alt: "travelchoise", title: "travelchoise" },
];


export default function SMO() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How can I be assured of my social media management strategies?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Your social media marketing USA plan will include a detailed, organized summary of each post or post category tailored to your company’s social media platform. This breakdown will display each post, its content, and when it will be published. Because photos and digital graphics are so important online, your plan will contain an image template so that all your photographs fit your corporate branding. If you have pictures or graphics that you would want to use, we will integrate them into your plan."
                }
            },
            {
                "@type": "Question",
                "name": "Why should I hire Tech2Globe for social media services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We are a major social media optimization company in the USA. Our team ensures that they will build your brand’s internet presence successfully. We can assist you in interacting directly with your clients on social media. With the assistance of our committed team, we provide you with various social media optimization services at reasonable prices. Yes, it takes time to write posts, design graphics, develop a content strategy, integrate the plan with your products and services, respond to queries and comments, and so on. You’ve attempted to post regularly, but it takes too long. You understand that social media is a full-time job."
                }
            },
            {
                "@type": "Question",
                "name": "Why should I outsource social media management services?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Outsourcing to the best social media optimization company can be incredibly beneficial if you still determine how or where to begin promoting your business online. We can assist you in developing an effective Social Media strategy. SMO services company will save you a lot of time and ensure you provide the finest content possible to promote your brand."
                }
            },
            {
                "@type": "Question",
                "name": "What platforms can you take charge of?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Twitter, Facebook fan page, Facebook group, Instagram, and Pinterest are currently available for any brand. LinkedIn can also be controlled on a case-by-case basis in some circumstances. This is because LinkedIn is only utilized as a professional network and is not used the same way as other sites."
                }
            }
        ]
    };


    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <PageHeader pageHeaderData={pageHeaderData} />
            <Breadcrumb parentName="Services" pageName="Smo Services" />
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
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h2 className="text-danger">About Our Social Media Optimization Agency</h2>
                            <p>Tech2Globe is a social media optimization company that focuses on assisting businesses of all sizes in achieving their social media marketing objectives. A variety of social media services, including the formulation of social media strategies, the creation of content, the management of online communities, the use of social media advertising, and advanced analytics and reporting, are provided by our team of seasoned social media specialists.</p>
                            <p>Being an SMO services company, we are aware that every company is different, and we tackle social media optimization in a tailored manner. Our team works closely with each client to fully grasp their unique requirements and objectives before creating a thorough social media marketing strategy specifically designed to achieve their goals.</p>
                            <p>Our main goal is to assist businesses in getting the most out of their social media initiatives by raising brand awareness, enhancing engagement, and boosting traffic and revenue. To provide our clients with tangible results, we implement professional SMO services, recent social media trends, and best practices.</p>

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
                                        <h4 className="text-danger">Best SMO Company In The USA, Tech2Globe</h4>
                                        <p>Our company is aware of the numerous options social media provides for businesses to turn followers into devoted patrons. Our team of passionate experts cultivates engagement to promote outcomes. It's possible that social media has taken on greater importance than ever before if your existing techniques aren't helping you achieve your objectives. A clear strategy, total dedication, and a well-defined budget are necessary to fully realize its potential. If any of these components are absent, your social media marketing efforts may not be as successful.</p>
                                        <p>Additionally, it's essential to continuously modify your techniques to suit your target audience. To make sure your tactics are successful and produce the desired results, regular monitoring and assessment are required. We can assist you in creating a thorough social media marketing strategy that addresses your unique requirements and objectives and generates the most value for your company.</p>
                                        <p>Better marketing, in our opinion, paves the way for seamless corporate growth. To increase your online visibility, we combine our professional SMO services, such as Instagram or Facebook management services, into your marketing strategy. And what makes us the best SMO company? And what makes us the best SMO company? We can help you create a thorough social media plan that will allow you to accomplish your goals. Our team will work with you to determine your target market, develop content that appeals to them, and develop an engagement strategy. We will also help you track and assess your progress so that you may make any necessary corrections.</p>

                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-3">
                                        <img src="/images/services/service-inner/smo-services-side-banner.png" className="img-fluid img-responsive" alt="SMO-1" />
                                    </div>
                                </div>
                            </div>

                            <div className={Style.ContentDiv}>
                                <div className="row mt-4">
                                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-3">
                                        <img src="/images/services/service-inner/know-About-1.png" className="img-fluid img-responsive" alt="dm2" />
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 mt-3">
                                        <h4 className="text-danger">What Is The Need For Social Media Optimization Services?</h4>
                                        <p>Our social media optimization agency is centered on enhancing your social media profiles' exposure, keeping up with new trends, and creating nimble social media marketing strategies.</p>
                                        <p>Social media management is the cornerstone of a business's social media strategy. It includes the production of material and its administration on numerous social media sites, including Facebook, Twitter, Instagram, and YouTube. In order to develop solid relationships also entails keeping an eye on dialogues, replying to consumer inquiries, and engaging with customers. Management of social media is essential to boosting brand recognition, boosting revenue, and boosting client loyalty. Businesses may improve their overall social media presence, connect with influencers, and keep current on industry trends with the help of social media management.</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-3">
                    <div className={Style.ContentDiv}>
                        <div className="container">
                            <h4 className="text-center text-danger">Affordable SEO Services For Small Businesses By Tech4Globe</h4>
                            <p className="text-center">As the top social media optimization agency, we provide comprehensive, cutting-edge solutions to help you scale your business on every social media platform!</p>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="pricing-block fb text-center wow fadeinup">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <div className="icon-outer"><Image src="/images/services/service-inner/facebook-marketing-smo.png" width={100} height={100} alt="Facebook Marketing" /></div>
                                            </div>
                                            <div className="price-box">
                                                <div className="title"> Facebook Marketing</div>
                                                <p>Facebook advertising can quickly draw a new audience to your professional practices. As a leading social media optimization company, we target prospective customers interested in your product or service based on their interests, gender, or even geography utilizing information from Facebook. With the growth of Facebook's advertising platform, users may now launch marketing campaigns and run adverts.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="pricing-block rd text-center wow fadeinup">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <div className="icon-outer"><Image src="/images/services/service-inner/youTube-marketing-smo.png" width={100} height={100} alt="YouTube Marketing" /></div>
                                            </div>
                                            <div className="price-box">
                                                <div className="title"> YouTube Marketing</div>
                                                <p>More people visit YouTube than any other website. Even if you just produce a small number of films for your business, you can still advertise your services to a sizable audience by appearing on other people's videos. Because there is more traffic on YouTube, if you cater to their needs, you will almost certainly attract customers. Using the best social media optimization agency to perform YouTube marketing will also increase the online authority of your business.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="pricing-block fb text-center wow fadeinup">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <div className="icon-outer"><Image src="/images/services/service-inner/linkedIn-marketing-smo.png" width={100} height={100} alt="Link Building" /></div>
                                            </div>
                                            <div className="price-box">
                                                <div className="title">LinkedIn Marketing</div>
                                                <p>LinkedIn is a fantastic resource for professional development, job searching, and networking. It is also a fantastic platform for marketing because it gives you access to a sizable professional audience. LinkedIn can be used to advertise your company, goods, services, and events. You can design and manage your campaigns with the aid of the platform's many features and capabilities. We serve as your US-based social media marketing target.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="pricing-block vt text-center wow fadeinup">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <div className="icon-outer"><Image src="/images/services/service-inner/instagram-marketing-smo.png" width={100} height={100} alt="Instagram Marketing" /></div>
                                            </div>
                                            <div className="price-box">
                                                <div className="title"> Instagram Marketing</div>
                                                <p>With recent additions like reels, Instagram is an aesthetically pleasing social media platform. Over one billion people are currently using this social media platform. Instagram, however, is much more than just a website with a gallery of lovely images and videos; many companies now use the app as a component of their digital marketing plan. Nevertheless, being the best social media optimization company, we avoid posting excessive amounts of unrelated information. It has a negative effect on your viewers!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="pricing-block blk text-center wow fadeinup">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <div className="icon-outer"><Image src="/images/services/service-inner/twitter-marketing-smo.png" width={100} height={100} alt="X (Twitter) Marketing" /></div>
                                            </div>
                                            <div className="price-box">
                                                <div className="title"> X (Twitter) Marketing</div>
                                                <p>Launching cross-channel campaigns centered on the top social media optimization business can improve X (formerly known as Twitter) marketing. The social media services team at Tech2Globe can assist you in developing a thorough social media plan that will enable you to connect with your target audience on X, forge connections, and raise brand awareness. We can assist you with developing campaigns that will help you achieve your objectives, optimizing your social media profiles, and producing material that appeals to your target audience.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="pricing-block rd text-center wow fadeinup">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <div className="icon-outer"><Image src="/images/services/service-inner/pinterest-marketing-smo.png" width={100} height={100} alt="Pinterest Marketing" /></div>
                                            </div>
                                            <div className="price-box">
                                                <div className="title"> Pinterest Marketing</div>
                                                <p>Because the platform quickly develops into a global search powerhouse, Pinterest marketing services can help your brand. The network currently has over 175 million users who are active and use the appealing pin boards according to their individual areas of interest. Tech2Globe is the ideal choice for maximizing Pinterest's potential to raise your brand's ROI.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="pricing-block blk text-center wow fadeinup">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <div className="icon-outer"><Image src="/images/services/service-inner/tik-tok-smo.png" width={100} height={100} alt="TikTok Marketing" /></div>
                                            </div>
                                            <div className="price-box">
                                                <div className="title"> TikTok Marketing</div>
                                                <p>Tech2Globe's Social Media Optimization (SMO) services take your brand viral on TikTok. Our expert team helps you craft and source engaging short-form videos that resonate with dynamic platform users. We'll develop a strategic content calendar, identify trending challenges and hashtags, and even connect you with relevant influencers to amplify your reach. From product demonstrations to user-generated content campaigns, we'll create buzz and drive brand awareness on the world's fastest-growing social platform.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-4">
                                    <div className="pricing-block yellow text-center wow fadeinup">
                                        <div className="inner-box">
                                            <div className="icon-box">
                                                <div className="icon-outer"><Image src="/images/services/service-inner/snapchat-smo.png" width={100} height={100} alt="Snapchat Marketing" /></div>
                                            </div>
                                            <div className="price-box">
                                                <div className="title"> Snapchat Marketing</div>
                                                <p>Don’t miss the vibrant Snapchat community! Our experts will help you unlock the potential of this networking platform. We’ll guide you through complex snaps and stories using filters, augmented reality features, and interactive elements to engage your audience on a deeper level. From behind-the-scenes to unique product launches, we will develop creative campaigns that spark conversation and build brand loyalty among highly engaged people. Let Tech2Globe help you harness the unique power of Snapchat and engage with your audience in a fun and dynamic way.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-3">
                    <div className="container">
                        <div className={Style.ContentDiv}>
                            <div className="row">
                                <h4 className="text-center text-danger">A Closer Examine Of Our Projects For Social Media Optimisation</h4>
                                <p className="text-center">With the help of the most cost-effective professional SMO services from Tech2Globe, you can employ the best marketing techniques to promote your business on a global scale. Tech2Globe is a <Link href="/digital-marketing-services" className="text-decoration-underline">digital marketing company</Link>. You may witness the effective work we've done for our clients by looking at our most recent projects.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Style.SectionYellow}>
                    <div className="container">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-3 pb-3">
                            <div className={Style.ContentDiv}>
                                <h2 className="text-center mb-3">Get The <span className="text-danger">Perfect SEO Strategy </span> For Your Business!</h2>
                                <h2 className="text-center mb-3"><FaPhone className="text-danger" /> <Link href="tel:+15168585840">+1-516-858-5840</Link></h2>
                                <div className="text-center">
                                    <Link href="/contact-us" className="btn button-red">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-3">
                    <div className={Style.ContentDiv}>
                        <div className="container">
                            <h2 className="text-center text-danger">Our Social Media Management Services</h2>

                            <p className="text-center mb-4">We create compelling social media campaigns to reach and engage the correct audience across several social channels.</p>
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow mb-3 h-100">
                                        <div className="text-center">
                                            <FaVolumeOff style={{ fontSize: "30px" }} />
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
                                            <h5>Online Brand Reputation</h5>
                                            <p>Managing your internet reputation entails giving your business the finest online presence possible. These services ensure that when clients (and potential leads) look for your company online, they first come across good reviews. Tech2Globe provides the best social media optimization services and uses various tactics to remove unfavorable articles and reviews from the first few pages of search results for businesses with harmful content online. Your internet reviews can be managed through <Link href="/online-reputation-management-services" className="text-decoration-underline">online reputation management</Link> to ensure they are favorable.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow mb-3 h-100">
                                        <div className="text-center">
                                            <FaVolumeUp style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5>Influencer Marketing</h5>
                                            <p>From social media integrations to influencer-led IPs, our teams excel at approaching <Link href="/influencer-marketing-package" className="text-decoration-underline">influencer marketing</Link> strategy and digital content. We use statistics and our knowledge to create unique social media optimization services. Using our technology, we can categorize, find, and choose the ideal influencers based on relevancy, authenticity, brand safety, predictive performance, and other critical data criteria. This extensive data enables us to quantify the influencer loop and provide the highest return on investment.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-4">
                                    <div className="card border-0 p-3 shadow mb-3 h-100">
                                        <div className="text-center">
                                            <FaQuestionCircle style={{ fontSize: "30px" }} />
                                        </div>
                                        <div className="context text-center mt-2">
                                            <h5>Social Media Content Writing</h5>
                                            <p>Nothing works better than content to guide your company through the confusing marketing maze. You get the best content for all your social media needs, and we, as a top social media optimization services provider, help you incredibly in this fiercely competitive market. The content is the most crucial component, whether you work in B2B or B2C. We create content that is optimized for search engines and is designed to drive traffic to your website.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-3">
                    <div className={Style.ContentDiv}>
                        <div className="container">
                            <h2 className="text-center text-danger">FEATURED IN</h2>

                            <div className="pt-3 pb-3">
                                <div className="container">
                                    <div className="row">

                                        <div className="services-small-item">
                                            <Image src="/images/services/service-inner/clientlogo/t2g-your-story.png" alt="Your Story" width={145} height={73} className="img-fluid img-responsive" />
                                        </div>

                                        <div className="services-small-item">
                                            <Image src="/images/services/service-inner/clientlogo/t2g-behance.png" alt="Behance" width={145} height={73} className="img-fluid img-responsive" />
                                        </div>

                                        <div className="services-small-item">
                                            <Image src="/images/services/service-inner/clientlogo/t2g-themenifest.png" alt="Themenifest" width={145} height={73} className="img-fluid img-responsive" />
                                        </div>

                                        <div className="services-small-item">
                                            <Image src="/images/services/service-inner/clientlogo/t2g-clutch.png" alt="Clutch" width={145} height={73} className="img-fluid img-responsive" />
                                        </div>

                                        <div className="services-small-item">
                                            <Image src="/images/services/service-inner/clientlogo/t2g-researchgate.png" alt="Researchgate" width={145} height={73} className="img-fluid img-responsive" />
                                        </div>

                                        <div className="services-small-item">
                                            <Image src="/images/services/service-inner/clientlogo/t2g-goodfirms.png" alt="Goodfirms" width={145} height={73} className="img-fluid img-responsive" />
                                        </div>

                                        <div className="services-small-item">
                                            <Image src="/images/services/service-inner/clientlogo/t2g-social-media-today.png" alt="Social Media Today" width={145} height={73} className="img-fluid img-responsive" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-3 pb-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <h2 className="main-heading mb-4 text-danger text-center">
                                            Our Clients
                                        </h2>


                                        <div className="row d-flex justify-content-center">
                                            {clients.map((c, i) => (
                                                <div key={i} className={Style.ClientOuter}>
                                                    <div className={Style.Clientlg}>
                                                        <Image
                                                            src={c.src}
                                                            alt={c.alt}
                                                            title={c.title}
                                                            width={145}
                                                            height={73}
                                                            style={{ objectFit: "contain" }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CaseStudiesService caseStudies={caseStudies} />
            <div className="EmailMarketingTestimonials">
                <ClientSlider testimonials={testimonials} />
            </div>
            <FaqSection faqs={faqs} />


        </>
    )
}