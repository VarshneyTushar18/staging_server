import Style from "./style.module.css";
import Image from "next/image";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import Link from "next/link";

export const metadata = {
    title: "Amazon PPC Services | Tech2Globe PPC Management & Ad Optimization",
    description:
        "Amazon PPC Services to lower ACoS and increase sales. Tech2Globe offers PPC management, smart bidding, ad optimization, and reporting for Amazon sellers.",
    openGraph: {
        title: "Amazon PPC Services | Tech2Globe PPC Management & Ad Optimization",
        description:
            "Amazon PPC Services to lower ACoS and increase sales. Tech2Globe offers PPC management, smart bidding, ad optimization, and reporting for Amazon sellers.",
        url: "https://www.tech2globe.com/amazon-ppc-services",
    },
    twitter: {
        card: "summary_large_image",
        title: "Amazon PPC Services | Tech2Globe PPC Management & Ad Optimization",
        description:
            "Amazon PPC Services to lower ACoS and increase sales. Tech2Globe offers PPC management, smart bidding, ad optimization, and reporting for Amazon sellers.",
    },
    alternates: {
        canonical: "https://www.tech2globe.com/amazon-ppc-services",
    },
};

const pageHeaderData = {
    title: "Amazon PPC Service",
    description:
        "Advertise smarter on Amazon with Tech2Globe’s full-cycle PPC management. Our Amazon PPC experts help you lower your Advertising Cost of Sale (ACoS), improve product visibility, and increase conversions with tailored ad campaigns.",
    buttonText: "Contact us",
    buttonLink: "#",
    backgroundImage: "/images/services/amazon-ppc-services-banner.jpg",
};


const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Tech2Globe's PPC services boosted our online sales significantly. They have great team that provides clear reports, as well as excellent results.",
        name: "John Doe - Marketing Manager",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Having PPC expertise, they offer professional service. They helped us increase our leads and conversions.",
        name: "Jane Smith - Digital Marketing Director",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "With their PPC services we were able to improve our ad performance and receive detailed insights. We are happy with the results!",
        name: "Mike Johnson - E-commerce Specialist",
    },
    {
        id: 4,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "They are extremely knowledgeable on all matters PPC. Everyone I have come in contact with is friendly and willing to assist.",
        name: "Emily Brown - Business Owner",
    },
    {
        id: 5,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "They do an excellent job of closely monitoring our campaign to ensure we stay on track. They optimize our campaign’s performance to its full potential.",
        name: "David Wilson - Online Retail Manager",
    },
];


const faqs = [
    {
        id: "One",
        question: "What are Amazon PPC services?",
        answer: `
      Amazon's advertising platform offers <strong>Amazon PPC services</strong> to help businesses promote their items on the Amazon marketplace. 
      PPC (pay-per-click) allows vendors to pay only when a potential consumer clicks on their ad.
    `,
    },
    {
        id: "Two",
        question: "How much does Amazon PPC cost?",
        answer: `
      The typical cost of <strong>Amazon PPC Services USA</strong> ranges between USD 0.10 and USD 6.00 per click. 
      This depends on your product category, competition, and campaign goals. 
      Understanding these expenses helps you optimize your ad spend and achieve better results on the Amazon platform.
    `,
    },
    {
        id: "Three",
        question: "How do I choose the right Amazon PPC Service Company?",
        answer: `
      To choose the right Amazon PPC Service Company, consider factors such as their experience, track record, and client testimonials. 
      Look for a firm that understands your business goals, provides transparent reporting, 
      and has a solid approach to keyword research, ad optimization, and campaign management.
    `,
    },
    {
        id: "Four",
        question: "Is Amazon PPC good?",
        answer: `
      Yes. PPC advertising offers numerous advantages and is essential for any firm selling on Amazon. 
      It provides valuable performance metrics, allows flexible budgeting, and helps you gauge how effective your advertising truly is.
    `,
    },
    {
        id: "Five",
        question: "How long does it take to run Amazon PPC?",
        answer: `
      Generally, it takes a few days to several weeks for an Amazon PPC campaign to show results. 
      However, with well-managed and optimized efforts, you can begin seeing measurable outcomes within days.
    `,
    },
    {
        id: "Six",
        question: "Who can use Amazon PPC?",
        answer: `
      Amazon PPC is available for all third-party vendors on the Amazon platform. 
      It enables sellers to set up campaigns for their product ads, paying only when a potential buyer clicks on the advertisement.
    `,
    },
];
const caseStudies = [
    {
        id: 1,
        title: "Amazon PPC",
        image: "/images/services/service-inner/amazon-ppc.png",
        description:
            "Clients came to us with a range of Amazon PPC management difficulties. Among them were poor search term management, bids, insufficient...",
        docLink: "https://www.tech2globe.com/casestudies-docs1/Amazon%20PPC-converted.pdf",
    },
    {
        id: 2,
        title: "Amazon PPC Campaigns",
        image: "/images/services/service-inner/amazon-sale-boost.jpg",
        description:
            "Clients often approach us with challenges in managing their Amazon PPC campaigns effectively....",
        docLink: "https://www.tech2globe.com/casestudies-docs1/amazon-ppc-case-study.pdf",
    },
];


export default function AmazonPPCServices() {

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is Amazon PPC management?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "Amazon PPC management refers to the process of managing and optimizing pay-per-click campaigns on Amazon. It includes keyword research, choosing ad types, setting bids, and tracking performance to increase traffic and sales."
                }
            },
            {
                "@type": "Question",
                "name": "Why should I hire your company for Amazon PPC management?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "We are an experienced Amazon advertising agency with PPC experts who create and optimize campaigns that boost traffic, improve sales, and maximize ROI. We stay updated on Amazon's PPC trends and best practices."
                }
            },
            {
                "@type": "Question",
                "name": "How do you determine the right keywords for my campaigns?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "We perform detailed keyword research using Amazon search data, competitor analysis, and industry tools to find the most relevant and high-performing keywords for your products."
                }
            },
            {
                "@type": "Question",
                "name": "Can you manage my entire Amazon account, or just PPC?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "We offer complete Amazon account management including PPC, Sponsored Products, inventory management, product listing optimization, and more. We handle as much or as little as you need."
                }
            },
            {
                "@type": "Question",
                "name": "How often do you provide campaign performance reports?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text":
                        "We provide regular, detailed performance reports and schedule check-ins to review metrics and make needed adjustments for better campaign results."
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
            <Breadcrumb parentName="Services" pageName="Amazon Ppc Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className={Style.partnersArea}>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-md-12 col-md-offset-1  d-none d-sm-block">
                                <ul className={Style.partners}>
                                    <li><img src="/images/clients/hp.png" alt="tool-logo" width="300px" className={Style.partner} /></li>
                                    <li><img src="/images/clients/nike.png" alt="tool-logo" width="300px" className={Style.partner} /></li>
                                    <li><img src="/images/clients/amazon-usa.png" alt="tool-logo" width="300px" className={Style.partner} /></li>
                                    <li><img src="/images/clients/mahmayi.png" alt="tool-logo" width="300px" className={Style.partner} /></li>
                                    <li><img src="/images/clients/abrams.png" alt="tool-logo" width="300px" className={Style.partner} /></li>
                                    <li><img src="/images/clients/creative-arcades.png" alt="tool-logo" width="300px" className={Style.partner} /></li>
                                    <li><img src="/images/clients/legend-logo_140x.png" alt="tool-logo" width="300px" className={Style.partner} /></li>
                                    <li><img src="/images/clients/ss-mediacl.png" alt="tool-logo" width="300px" className={Style.partner} /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-center">Achieve Success with Our Amazon PPC Management Services

                    </h2>
                    <hr />
                    <p className="text-center">Boost Your Amazon Sales With Tech2Globe&apos;s Custom Amazon PPC Campaigns.

                    </p>
                    <p className="text-center">Creating a profitable PPC campaign and increasing your Amazon sales takes time, so sellers new to PPC advertising on Amazon should be patient. Finding the optimal approach to managing your <strong>Amazon PPC Management</strong> campaigns is more like a long run than a quick fix because it requires implementation of different strategies.
                    </p>
                    <p className="text-center">Lots of things go into making a PPC campaign work, like making sure your product listings are optimized so that people who click on your ad are more likely to buy. Moreover, picking the right keywords so that your ads are seen by Amazon customers who are most likely to buy your product. Because of this, more and more sellers on the Amazon marketplace are opting to work with an Amazon PPC management company instead of doing it themselves. On the other hand, an Amazon wholesale seller can do everything for you on Amazon, such as shipping, marketing, and advertising your products.
                    </p>
                    <p className="text-center">Optimization of <Link href="/amazon-seo-listing-optimization" className="text-decoration-underline fw-normal">Amazon listings</Link> and Amazon PPC campaigns are the forte of <strong>Amazon PPC Management Services</strong>. Our expertise and experience save you the trouble of learning by doing the trial and error that usually goes into making a good PPC campaign. Plus, you can save a lot of time because you won&apos;t have to manage and optimize the campaigns by yourself.
                    </p>
                    <div className="d-flex justify-content-center pb-5"><a href="/contact-us" className="btn btn-danger rounded-pill">Start Now</a></div>
                    <div className="row col-sm-12 mb-5 d-flex justify-content-center pb-5">
                        <div className="row justify-content-center">
                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12 text-left mb-4">
                                <div className="card h-100 p-3 shadow-sm">
                                    <h3 className={`${Style.headingText} text-danger`}>Improve Product Visibility
                                    </h3>
                                    <p className="text-left">Shine on with customized PPC for Amazon campaigns from Tech2Globe. Our Amazon experts use advanced digital marketing methods to attract the right consumers by highlighting the uniqueness of your brand. Our motive is not just to make you visible but also to make you stand out!
                                    </p>
                                    <img src="/images/services/amazon-sponsored-products.png" className="img-responsive" alt />
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12 text-left mb-4">
                                <div className="card h-100 p-3 shadow-sm">
                                    <h3 className={`${Style.headingText} text-danger`}>Boost Brand Awareness
                                    </h3>
                                    <p className="text-left">Build your brand&apos;s recognition on Amazon with our innovative PPC for <Link href="/amazon-account-management" className="text-decoration-underline fw-normal">Amazon management services</Link>. We&apos;ll raise your brand&apos;s awareness by creating targeted campaigns, which will highlight your company&apos;s unique selling features.
                                    </p>
                                    <img src="/images/services/amazon-sponsored-brands.png" className="img-responsive" alt />
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12 text-left mb-4">
                                <div className="card h-100 p-3 shadow-sm">
                                    <h3 className={`${Style.headingText} text-danger`}>Elevate Product Listings
                                    </h3>
                                    <p className="text-left">Take your product listings to new heights with Tech2Globe&apos;s customized Amazon advertising campaigns. As an Amazon PPC service company, our team of experts implements innovative <a href="/digital-marketing-services" className="text-decoration-underline">digital marketing</a> strategies to optimize your product listings and create eye-catching ads, driving more sales on the platform as a result.
                                    </p>
                                    <img src="/images/services/amazon-sponsored-display-ads.png" className="img-responsive" alt />
                                </div>
                            </div>
                            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12 text-left mb-4">
                                <div className="card h-100 p-3 shadow-sm">
                                    <h3 className={`${Style.headingText} text-danger`}>Strengthen Brand Recognition
                                    </h3>
                                    <p className="text-left">If you are tired of blending into the background, then our creative ad campaigns are here to assist you. We will be your guide to tell your story in a way that grabs attention, sets you apart from the competition, and positions you as a leader in your industry. Partner with our <strong>Amazon PPC Management</strong> service experts and drive sales through compelling advertising strategies.
                                    </p>
                                    <img src="/images/services/Strengthen-Brand-Recognition.png" className="img-responsive" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row col-sm-12 mb-5  text-center content d-flex justify-content-center pb-5">
                        <h2 className="main-heading text-center"><span style={{ color: '#c8020f' }}>Discover </span> <span style={{ color: '#080405' }}>The Power Of Amazon PPC Management Services
                        </span></h2>
                        <p className="text-center">The Innovative Platform To Unlock Your Business&apos;s Full Potential On Amazon
                        </p>
                        <div className="row">
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
                                <div className={`${Style.itemBox} h-100`}>
                                    <h5 className="text-white fs-1">$ 1M</h5>
                                    <p className={`${Style.itemText} text-white text-center`}>Unparalleled ad optimization</p>
                                </div>
                            </div>

                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
                                <div className={`${Style.itemBox} h-100`}>
                                    <h5 className="text-white fs-1">10X</h5>
                                    <p className={`${Style.itemText} text-white text-center`}>Maximized ROI</p>
                                </div>
                            </div>

                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-4">
                                <div className={`${Style.itemBox} h-100`}>
                                    <h5 className="text-white fs-1">Fixed Price</h5>
                                    <p className={`${Style.itemText} text-white text-center`}>Driven exponential growth</p>
                                </div>
                            </div>
                        </div>

                        <p>Tech2Globe&apos;s Amazon PPC specialist can help you make your items discoverable and convert listing visits into active consumers. To compete on Amazon and reach the most customers, businesses must look beyond the organic SEO approach. Here&apos;s where our Amazon PPC Services USA may help. With well-executed PPC management campaigns, we raise product awareness, sales, and customer acquisition and provide you with a competitive advantage in the market.
                        </p>
                    </div>
                    <div className="pb-5">
                        <h2 className="text-center">How It Works: Unleashing The Power Of Amazon PPC Management Experts</h2>
                        <hr />
                        <p className="text-center">Get ready, because now is the time to take your Amazon business to the next level of success with our expert <strong>Amazon PPC Management</strong> team. Our Team Of Dedicated <Link href="/ppc-services" className="text-decoration-underline fw-normal">PPC Experts</Link> Will Go Above And Beyond To Deliver Exceptional Results.
                        </p>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-6 stepstyle mb-4">
                                <div className="card p-3 shadow-sm h-100">
                                    <h5 className="fs-1" style={{ color: '#c9000b' }}>1.</h5>
                                    <strong>Boost Sales and Increase Profits
                                    </strong>
                                    <p>Our Amazon PPC agency is focused on maximizing your profitability. Through <strong>Amazon PPC Management</strong> creative strategies we work smartly to increase conversions and ensure that you earn more for each advertising cycle.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 stepstyle mb-4">
                                <div className="card p-3 shadow-sm h-100">
                                    <h5 className="fs-1" style={{ color: '#c9000b' }}>2.</h5>
                                    <strong>Increase Visibility of your Amazon Business
                                    </strong>
                                    <p>As a team of <Link href="/amazon-marketing-services" className="text-decoration-underline fw-normal">Amazon advertising</Link> experts, our focus is to constantly search for the latest tools and strategies and give your amazon advertising campaign the edge. We work to bring your product among interested buyers and increase its reach.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 stepstyle mb-4">
                                <div className="card p-3 shadow-sm h-100">
                                    <h5 className="fs-1" style={{ color: '#c9000b' }}>03.</h5>
                                    <strong>Maximize Your Advertising Budget with Smart Bidding
                                    </strong>
                                    <p>Every penny counts in advertising, and no one knows this better than us. This is the prime reason why our team regularly monitors the bidding strategies and accordingly makes the adjustments to ensure you&apos;re getting the best returns.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 stepstyle mb-4">
                                <div className="card p-3 shadow-sm h-100">
                                    <h5 className="fs-1" style={{ color: '#c9000b' }}>04.</h5>
                                    <strong>Stay Update with Regular Tracking and Reporting
                                    </strong>
                                    <p>We will keep you updated with the regular reports. These reports are easy to understand and will give you correct information about how your Amazon PPC management is doing. This way, you can keep track of the progress, and make the right decisions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pb-5">
                        <h2 className="main-heading text-center mt-3 py-5">Major Categories <span> We Work For Amazon PPC Service</span></h2>
                        <div className={Style.inner}>
                            <div className={`${Style.commonInner} inner1`}>
                                <div className={`${Style.img} mx-auto`}>
                                    <img src="/images/services/health-care.png" alt />
                                </div>
                                <div className={`${Style.title} mx-auto`}>
                                    Healthcare
                                </div>
                            </div>
                            <div className={`${Style.commonInner} inner2`}>
                                <div className={`${Style.img} mx-auto`}>
                                    <img src="/images/services/skin-care-1-1.png" alt />
                                </div>
                                <div className={`${Style.title} mx-auto`}>
                                    Beauty
                                </div>
                            </div>
                            <div className={`${Style.commonInner} inner3`}>
                                <div className={`${Style.img} mx-auto`}>
                                    <img src="/images/services/food.png" alt />
                                </div>
                                <div className={`${Style.title} mx-auto`}>
                                    Food
                                </div>
                            </div>
                            <div className={`${Style.commonInner} inner4`}>
                                <div className={`${Style.img} mx-auto`}>
                                    <img src="/images/services/home-1-1.png" alt />
                                </div>
                                <div className={`${Style.title} mx-auto`}>
                                    Home &amp; Kitchen
                                </div>
                            </div>
                            <div className={`${Style.commonInner} inner9`}>
                                <div className={`${Style.img} mx-auto`}>
                                    <img src="/images/services/sports-1.png" alt />
                                </div>
                                <div className={`${Style.title} mx-auto`}>
                                    Sports
                                </div>
                            </div>
                        </div>
                        <div className={Style.inner}>
                            <div className={`${Style.commonInner} inner5`}>
                                <div className={`${Style.img} mx-auto`}>
                                    <img src="/images/services/fashion.png" alt />
                                </div>
                                <div className={`${Style.title} mx-auto`}>
                                    Fashion
                                </div>
                            </div>
                            <div className={`${Style.commonInner} inner6`}>
                                <div className={`${Style.img} mx-auto`}>
                                    <img src="/images/services/open-book-1.png" alt />
                                </div>
                                <div className={`${Style.title} mx-auto`}>
                                    Kindle &amp; Books
                                </div>
                            </div>
                            <div className={`${Style.commonInner} inner7`}>
                                <div className={`${Style.img} mx-auto`}>
                                    <img src="/images/services/elec.png" alt />
                                </div>
                                <div className={`${Style.title} mx-auto`}>
                                    Electronics
                                </div>
                            </div>
                            <div className={`${Style.commonInner} inner8`}>
                                <div className={`${Style.img} mx-auto`}>
                                    <img src="/images/services/software.png" alt />
                                </div>
                                <div className={`${Style.title} mx-auto`}>
                                    Software
                                </div>
                            </div>
                            <div className={`${Style.commonInner} inner10`}>
                                <div className={`${Style.img} mx-auto`}>
                                    <img src="/images/services/all-1.png" alt />
                                </div>
                                <div className={`${Style.title} mx-auto`}>
                                    All
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-5">
                        <h5 className="text-center mb-3">The Secret Ingredient of Tech2Globe Services Experts
                        </h5>
                        <div className="row">
                            <div className="col-md-4 text-center mb-4">
                                <div className="card h-100 p-3 d-flex justify-content-center align-items-center">
                                    <img src="/images/services/cashier.v2.svg" className="p-ppc__list2-icon loading loaded mx-auto" loading="lazy" width={60} height={60} alt="Icon 7." aria-hidden="true" />
                                    <span className="text-bold" style={{ fontSize: 25 }}><strong>The Amazon Alchemy</strong></span>
                                    <p className="text-center">Revolutionizing Advertising Campaigns and Strategy for Sellers</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center mb-4">
                                <div className="card h-100 p-3 d-flex justify-content-center align-items-center">
                                    <img src="/images/services/amazone-ppc-monitor-graph.svg" className="p-ppc__list2-icon loading loaded mx-auto" loading="lazy" width={60} height={60} alt="Icon 8." aria-hidden="true" />
                                    <span className="text-bold" style={{ fontSize: 25 }}><strong>Dominate Your Niche</strong> </span>
                                    <p className="text-center">Outsmarting Competitors in Amazon Categories</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center mb-4">
                                <div className="card h-100 p-3 d-flex justify-content-center align-items-center">
                                    <img src="/images/services/amazone-ppc-dollar-in-circle.svg" className="p-ppc__list2-icon loading loaded mx-auto" loading="lazy" width={60} height={60} alt="Icon 9." aria-hidden="true" />
                                    <span className="text-bold" style={{ fontSize: 25 }}><strong>The Power of Perception</strong></span>
                                    <p className="text-center"> Elevating Brand Recognition with Sales and Lower ACoS</p>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive mt-3">
                            <table className="table table-bordered">
                                <thead>
                                    <tr className="table-light" style={{ backgroundColor: '#ffffff', fontWeight: 800 }}>
                                        <th>Time period</th>
                                        <th>Clicks</th>
                                        <th>Cost per Click</th>
                                        <th>Click Through Rate</th>
                                        <th>Time ACOS</th>
                                        <th>Conversions</th>
                                        <th>Sales Revenue</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>4 months before Tech2globe Services</td>
                                        <td>36,700</td>
                                        <td>$2.02</td>
                                        <td>0.22%</td>
                                        <td>40.53%</td>
                                        <td>7.370</td>
                                        <td>$183.235.09</td>
                                    </tr>
                                    <tr>
                                        <td>4 months after Tech2globe Services</td>
                                        <td>62,482</td>
                                        <td>$1.87</td>
                                        <td>0.38%</td>
                                        <td>37.01%</td>
                                        <td>13.110</td>
                                        <td>$314.247.55</td>
                                    </tr>
                                    <tr className="table-success" style={{ backgroundColor: '#4caf5042 !important' }}>
                                        <td>Percentage change</td>
                                        <td>+70%</td>
                                        <td>-7%</td>
                                        <td>+73%</td>
                                        <td>-8.68%</td>
                                        <td>+78%</td>
                                        <td>+72%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-4" style={{ backgroundColor: '#e9f3fc' }}>
                    <div>
                        <h3 className="text-danger text-center">Amazon PPC Services Case Studies</h3>
                        <div className={`${Style.galleryContainer} pb-5 pt-3 container mx-auto`}>
                            <div className={`${Style.tzGallery}`}>
                                <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                                        <a className="lightbox" href="images/services/amazon-map-pricing-surveillance.png">
                                            <img src="images/services/amazon-map-pricing-surveillance.png" alt="Bridge" className="img-fluid" />
                                        </a>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-4">
                                        <a className="lightbox" href="images/services/amazon-map-pricing-surveillance-1.png">
                                            <img src="images/services/amazon-map-pricing-surveillance-1.png" alt="Park" className="img-fluid" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <CaseStudiesService caseStudies={caseStudies} />

            <ClientSlider testimonials={testimonials} />
            <FaqSection faqs={faqs} />
        </>
    )
};