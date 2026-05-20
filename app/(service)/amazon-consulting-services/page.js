import Style from "./style.module.css";
import Image from "next/image";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import "./custom.css";

export const metadata = {
  title: "Amazon Consulting Services | Amazon PPC, SEO & Account Growth",
  description:
    "Amazon Consulting Services. We help sellers optimize PPC, product listings, and accounts to increase sales and visibility on Amazon worldwide.",
  keywords: [
    "amazon consulting services",
    "amazon consulting service",
    "amazon services consulting",
    "amazon consultancy services",
    "amazon seller consulting services in india",
    "amazon consulting and services",
    "best amazon consulting service providers",
  ],
  openGraph: {
    title: "Amazon Consulting Services | Amazon PPC, SEO & Account Growth",
    siteName: "Tech2Globe web Solutions LLP",
    description:
      "Amazon Consulting Services. We help sellers optimize PPC, product listings, and accounts to increase sales and visibility on Amazon worldwide.",
    url: "https://tech2globe.com/amazon-consulting-services",
    images: [
      "https://tech2globe.com/images/tech2globe-consulting-banner-2.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Consulting Services | Amazon PPC, SEO & Account Growth",
    description:
      "Amazon Consulting Services. We help sellers optimize PPC, product listings, and accounts to increase sales and visibility on Amazon worldwide.",
    images: [
      "https://tech2globe.com/images/tech2globe-consulting-banner-2.jpg",
    ],
  },
  alternates: {
    canonical: "https://www.tech2globe.com/amazon-consulting-services",
  },
};

const pageHeaderData = {
    title: "Accelerate Your Brand Growth With The #1 Amazon Marketing Services",
    description:
        "Our Amazon marketing services agency specializes in driving sales, building brands, and engaging customers on the platform. Cost-per-click and cost-per-mile ad solutions can help you achieve your business goals.",
    buttonText: "Contact us",
    buttonLink: "#",
    backgroundImage: "/images/services/amazon-marketing-services-desktop-banner.png", // your banner image
};

const clients = [
    { src: "/images/clients/aqua-tech-water-proofing-logo.png", alt: "Waterproofing", title: "Waterproofing" },
    { src: "/images/clients/ba-logo.png", alt: "BA_logo", title: "BA_logo" },
    { src: "/images/clients/bluebird-solar.png", alt: "bluebird-solar", title: "bluebird-solar" },
    { src: "/images/clients/docib-logo.png", alt: "docib-logo", title: "docib-logo" },
    { src: "/images/clients/du-vert-paris.png", alt: "DuVert-Paris", title: "DuVert-Paris" },
    { src: "/images/clients/epos.png", alt: "Epos", title: "Epos" },
    { src: "/images/clients/focus.png", alt: "Focus", title: "Focus" },
    { src: "/images/clients/frontier.png", alt: "Frontier", title: "Frontier" },
    { src: "/images/clients/getkart.png", alt: "getkart1920X700", title: "getkart1920X700" },
    { src: "/images/clients/intas-logo.png", alt: "Intas_Logo", title: "Intas_Logo" },
    { src: "/images/clients/kodak-logo-logotype-wordmark.png", alt: "wordmark", title: "wordmark" },
    { src: "/images/clients/patanjali_logo.png", alt: "Patanjali_Logo", title: "Patanjali_Logo" },
    { src: "/images/clients/pickzon.png", alt: "Pickzon", title: "Pickzon" },
    { src: "/images/clients/tp-link.png", alt: "Tp-link", title: "Tp-link" },
    { src: "/images/clients/wooden-street-logo.png", alt: "street", title: "street" }
];


const caseStudies = [
    {
        "id": 1,
        "title": "Customer Business and Delivered",
        "image": "/images/services/service-inner/untitled-design-20.png",
        "description": "How Well We Understand Customer Business and Delivered Fruitful Results...",
        "docLink": "https://www.tech2globe.com/casestudies-docs1/Case%20Study%20-%20Ecommerce%20Consulting%20Services.pdf"
    },
    {
        "id": 2,
        "title": "Online Promotion Strategies",
        "image": "/images/services/service-inner/online-promotion-strategies.jpg",
        "description": "The client is USA based and he is a Neuroscientist by profession with over 15 years of basic and applied research experience in the same field...",
        "docLink": "https://www.tech2globe.com/casestudies-docs1/Case%20Study%20-%20showGlamour%20&%20LeMirch%20(1).pdf"
    },
]

const testimonials = [
    {
        id: 1,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "I am really impressed and satisfied with Tech2globe's customized amazon consulting services. It's amazing how they are so dedicated to their work.",
        name: "Sarah Johnson, Marketing Manager",
    },
    {
        id: 2,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "I had a very positive experience with Tech2globe's amazon service as they helped me to boost sales.",
        name: "Michael Smith, E-commerce Specialist",
    },
    {
        id: 3,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "The staff at Tech2globe are fulfilling their duties really well. I am pleased that they understood my goals and considered my suggestions.",
        name: "Emily Brown, Business Owner",
    },
    {
        id: 4,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "Having patience with your clients is a great quality, and I feel their team knows this very well. Highly recommended to others.",
        name: "David Martinez, Sales Directors",
    },
    {
        id: 5,
        quote: "/images/services/service-inner/quote-icon.png",
        text: "I am grateful to partner with Tech2Globe's services that brought clarity to my business strategy and Kudos to their dedicated team!",
        name: "Jennifer Wilson, CEO",
    },
];

const faqs = [
    {
        id: "One",
        question: "What is Amazon Consulting Services?",
        answer: `
        Amazon consulting services is a complete Amazon management service and your go-to reference for selling on Amazon. Amazon consulting has highly specialized Amazon seller services aimed at providing you with the Amazon expert assistance you want exactly when you need it.
      `,
    },
    {
        id: "Two",
        question: "Are there any prerequisites for hiring Amazon Consulting Services?",
        answer: `
        When it comes to hiring the top Amazon consultants for your company, much study and assessment are required. Examine their previous performance, price structure and competence, number of years in the company, range of services provided, and emphasis on good communication.
      `,
    },
    {
        id: "Three",
        question: "Why should I consider hiring Amazon Consulting Services?",
        answer: `
        You should hire Amazon consultants to analyze your items and branding. These services will work with you to identify your objectives and develop a thorough marketing plan. Tech2Globe is dedicated to assisting businesses in leveraging the strong Amazon platform. We use our knowledge of Amazon marketing services and Amazon AWS consulting to identify the most cost-effective strategies to boost your ROI and meet your company objectives.
      `,
    },
    {
        id: "Four",
        question: "How do I choose the right Amazon Consultant for my business?",
        answer: `
        Qualities to look out for to hire the right Amazon Consultant are:
        <ul>
        <li>Emphasize on powerful SEO strategy</li>
        <li>Immense and relevant work experience</li>
        <li>Pursues an individual approach</li>
        <li>Transparent pricing structure</li>
        <li>Compliance experts</li>
        <li>Quickly adapts to changes</li>
        </ul>
      `,
    },
    {
        id: "Five",
        question: "What specific services do Amazon Consultants offer?",
        answer: `
        Amazon consultants use Amazon seller account management approaches as well as Amazon vendor account management knowledge to generate lucrative results. Whether you require full-time help or monthly account audits, Tech2Globe's Amazon specialists will work around your requirements. You can expect extensive reporting and precise suggestions from our Amazon specialists.
      `,
    },
];

export default function AmazonConsulting() {
    return (
        <>
            <div className="">
                <img src="/images/services/service-inner/tech2globe-consulting-banner-6.png" alt="AMAZON PPC CONSULTING" className="img-fluid" />
            </div>
            <Breadcrumb pageName="Amazon Consulting Services" />
            <BrandSection />
            <section className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className={Style.ContentDiv}>
                                <h1 className="text-center text-danger pb-3">Amazon Consulting Services to Boost Your Sales</h1>
                                <p className="text-center">Are you struggling to grow your sales on Amazon? Our Amazon consulting services help sellers and vendors increase visibility, win the Buy Box, and improve profits. With expert strategies for PPC campaigns, product listings, account management, and global selling, we make Amazon growth simple and effective.</p>
                            </div>
                            <div className={Style.ContentDiv}>
                                <h2 className="text-center pt-3 pb-3">What Are Amazon Consulting Services?</h2>
                                <p className="text-center"><strong>Amazon consulting and services</strong> are designed to help online retailers better prepare for and protect themselves against seasonality and variability, which are even more difficult to deal with than physical stores.</p>
                                <p className="text-center">Our <strong>Amazon consulting services</strong> are customized according to your business and these solutions can handle your concerns accordingly. Collaboration, research on competitors, and Amazon&apos;s marketing strategy are all components incorporated into understanding your customer base and the factors influencing their purchasing decisions. Doing things on your own can be a challenging task. Therefore, our specialists are here to assist you in navigating Amazon and the future of online retail stores. Thus, find out how you can get Amazon consulting assistance of the highest quality in a short amount of time from our experts.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-3">
                            <div className={Style.ContentDiv}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3">
                                        <div className={`${Style.ColorIconBox} ${Style.ColorOne}`}>
                                            <div className="text-center">
                                                <img src="/images/services/service-inner/ppc-2.png" alt="AMAZON PPC CONSULTING" className="img-fluid" />
                                            </div>
                                            <h3>AMAZON PPC CONSULTING</h3>
                                            <p>Guessing how the products are searched on Amazon is now out of fashion. See which product is ranking high through which keywords and Running an effective Amazon campaign is the only way to Track your Amazon PPC results. Drive more traffic and sales! Now is the time to say goodbye to outdated methods and hello to customized Amazon Consulting Services.</p>
                                            <ul>
                                                <li>Controlling monthly ad spends</li>
                                                <li>Campaign setup</li>
                                                <li>Negative keyword research</li>
                                                <li>Ad creation</li>
                                                <li>Management of automatic and manual campaigns</li>
                                                <li>Sponsored product ads, sponsored brands (registered brands only), and product display ads (vendors only)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3">
                                        <div className={`${Style.ColorIconBox} ${Style.ColorTwo}`}>
                                            <div className="text-center">
                                                <img src="/images/services/service-inner/seo-1.png" alt="Amazon Consulting Agency" className="img-fluid" />
                                            </div>
                                            <h3>Amazon Consulting Agency</h3>
                                            <p>If you&apos;re interested in growing and scaling your Amazon businesses swiftly & efficiently, you&apos;re in the right place with our Amazon consulting agency. Moreover, our <strong>Amazon consulting agency</strong> can offer guaranteed Amazon product ranking increases, leading to higher profitability. SEO of Amazon products can easily be populated with the right content strategy & optimized listing.</p>
                                            <ul>
                                                <li>Amazon A9 bases seo</li>
                                                <li>Dedicated amazon marketing specialist</li>
                                                <li>In-depth keyword research</li>
                                                <li>Category and subcategory optimization</li>
                                                <li>Professional copywriting</li>
                                                <li>Inventory monitoring</li>
                                                <li>Competitor analysis</li>
                                                <li>User engagement analysis</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3">
                                        <div className={`${Style.ColorIconBox} ${Style.ColorThree}`}>
                                            <div className="text-center">
                                                <img src="/images/services/service-inner/list-2.png" alt="AMAZON PRODUCT LISTING CONSULTING" className="img-fluid" />
                                            </div>
                                            <h3>AMAZON PRODUCT LISTING CONSULTING</h3>
                                            <p>Our 15+ years of experience and uploading daily 500+ listings would be a plus in terms of making your products stand out from competitors. How well have my products been listed? We consult free for the product listing, and the rest of the decision is yours. Check out our cataloging samples for more details below and benefit from our <strong>Amazon Consulting Services:</strong></p>
                                            <ul>
                                                <li>SEO friendly amazon listing</li>
                                                <li>Choosing relevant category</li>
                                                <li>Basic listing with TAT up to 48 hrs for 10k products</li>
                                                <li>Method of listing are 1x1, flat files and listing loader</li>
                                                <li>Management of automatic and manual campaigns</li>
                                                <li>Listing in multiple language: German, French, Spanish, Italian, English</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3">
                                        <div className={`${Style.ColorIconBox} ${Style.ColorFour}`}>
                                            <div className="text-center">
                                                <img src="/images/services/service-inner/sales-boost-2.png" alt="AMAZON SALES BOOST CONSULTING" className="img-fluid" />
                                            </div>
                                            <h3>AMAZON SALES BOOST CONSULTING</h3>
                                            <p>It might be the time to explore the possibilities with <strong>Amazon Services Consulting</strong>. Amazon sales are not only possible with listing since it requires much of the extra important efforts which should be spot on and mainly could match with Amazon A9 algorithm. Doing PPC, optimizing content, and making your content SEO friendly are the bases, and then hitting the low BSR, getting feedback, and reviews are the vital factors.</p>
                                            <ul>
                                                <li>Competitive pricing</li>
                                                <li>Winning buy box</li>
                                                <li>Finding areas of improvement for current inventory</li>
                                                <li>Optimizing content and adding SEO friendly details</li>
                                                <li>Results in 10 days and guaranteed sales increase up to 30%</li>
                                                <li>Running Sponsored campaigns with less ACoS and focusing on high ROI</li>
                                                <li>Monitoring performance and boosting sales on all channels</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3">
                                        <div className={`${Style.ColorIconBox} ${Style.ColorFive}`}>
                                            <div className="text-center">
                                                <img src="/images/services/service-inner/product-seo-optimization-1.png" alt="AMAZON PRODUCT OPTIMIZATION CONSULTING" className="img-fluid" />
                                            </div>
                                            <h3>AMAZON PRODUCT OPTIMIZATION CONSULTING</h3>
                                            <p>We at Tech2globe work with you to optimize your Amazon products listing and content. As an <strong>Amazon consultant agency</strong>, we ensure your product to reach and attract more buyers which includes putting your products into the right category, adding most relevant content & filling more details in the edit mode of Amazon products.</p>
                                            <ul>
                                                <li>Optimized Amazon Title, Bullet points and Detailed HTML description</li>
                                                <li>Adding most relevant high sales velocity keywords</li>
                                                <li>Competitor benchmarking for analysis</li>
                                                <li>Tracking keyword ranking and increasing clicks and sessions</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3">
                                        <div className={`${Style.ColorIconBox} ${Style.ColorSix}`}>
                                            <div className="text-center">
                                                <img src="/images/services/service-inner/store-2.png" alt="AMAZON STORE CONSULTING" className="img-fluid" />
                                            </div>
                                            <h3>AMAZON STORE CONSULTING</h3>
                                            <p>Creating your own Amazon URL would be more exciting to all Brand owners as Amazon stores come with features of various pages designed using predefined modules and creating attractive Hero banner images. With <strong>Amazon consultancy services</strong> like Tech2globe, we believe in not only making Amazon stores effective but also SEO friendly by adding meta title, images alt, etc. + Amazon Store PPC.</p>
                                            <ul>
                                                <li>Create your own amazon URL</li>
                                                <li>Streamline products in better navigation</li>
                                                <li>Attractive hero image creation</li>
                                                <li>Logo creation</li>
                                                <li>Page creation and nesting child pag</li>
                                                <li>Adding relevant meta title</li>
                                                <li>Using maximum store module to keep it look classy</li>
                                                <li>Store optimization</li>
                                                <li>Uploading videos, big banners and deals pages</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3">
                                        <div className={`${Style.ColorIconBox} ${Style.ColorSeven}`}>
                                            <div className="text-center">
                                                <img src="/images/services/service-inner/lcatalog_icon-1.png" alt="AMAZON EBC/A+ CATALOGING CONSULTING" className="img-fluid" />
                                            </div>
                                            <h3>AMAZON EBC/A+ CATALOGING CONSULTING</h3>
                                            <p>Though Amazon EBC and a+ content will not affect your product SEO, however, 30% of customers are interested in buying products with attractive graphics. See tech2globe Amazon EBC portfolio for more details.</p>
                                            <ul>
                                                <li>Attractive and informative graphics</li>
                                                <li>Highlighting your brand for more visibility</li>
                                                <li>Adding keywords in all EBC images</li>
                                                <li>Preparing content</li>
                                                <li>Follow TAT 48 Hours</li>
                                                <li>2 Revisions/EBC</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3">
                                        <div className={`${Style.ColorIconBox} ${Style.ColorEight}`}>
                                            <div className="text-center">
                                                <img src="/images/services/service-inner/photography-3.png" alt="AMAZON PHOTOGRAPHY CONSULTING" className="img-fluid" />
                                            </div>
                                            <h3>AMAZON PHOTOGRAPHY CONSULTING</h3>
                                            <p>Want more visitors on your products? More Sales? 70% of the users make a purchase when they find Amazon infographic images and quality. Check Tech2globe Amazon infographics portfolio and client feedback.</p>
                                            <ul>
                                                <li>We help in product shoot of any category</li>
                                                <li>We edit images for amazon product ready</li>
                                                <li>Edit for white background</li>
                                                <li>Creating correct and high resolutions images</li>
                                                <li>Image imposing</li>
                                                <li>Cut outs</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3">
                                        <div className={`${Style.ColorIconBox} ${Style.ColorNine}`}>
                                            <div className="text-center">
                                                <img src="/images/services/service-inner/Reviews-icon-1.png" alt="AMAZON REVIEWS & RATINGS CONSULTING" className="img-fluid" />
                                            </div>
                                            <h3>AMAZON REVIEWS & RATINGS CONSULTING</h3>
                                            <p>Tech2Globe&apos;s <strong>Amazon consulting services</strong> help you in tracking fake reviews and taking down by asking Amazon seller support team by providing authentic proofs. Participating in the “Early Review Program” would help sellers and vendors to get genuine reviews. See our portfolio and check customer reviews on products.</p>
                                            <ul>
                                                <li>Seller Feedback & review request on each order</li>
                                                <li>Timely follow up</li>
                                                <li>Methods for feedback like: E-mail, calls</li>
                                                <li>Enrolling in Early Review Program (Seller Panel)</li>
                                                <li>Vine Program under Vendor Central</li>
                                                <li>Monitor third-party automated system</li>
                                                <li>Negative feedback removal request</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3">
                                        <div className={`${Style.ColorIconBox} ${Style.ColorTen}`}>
                                            <div className="text-center">
                                                <img src="/images/services/service-inner/images-3.png" alt="AMAZON ACCOUNT MANAGEMENT CONSULTING" className="img-fluid" />
                                            </div>
                                            <h3>AMAZON ACCOUNT MANAGEMENT CONSULTING</h3>
                                            <p>Our team has immense experience in managing both sellers and vendors account for daily account health management including various below services. We worked on different models, please contact us for more details.</p>
                                            <ul>
                                                <li>Products optimization</li>
                                                <li>Keywords optimization</li>
                                                <li>Campaign creation</li>
                                                <li>Product listing via GTIN exemption or UPC/EAN/JAN/ASIN</li>
                                                <li>Sales boost</li>
                                                <li>Image optimization</li>
                                                <li>Promotional activities</li>
                                                <li>Brand registration, category approval</li>
                                                <li>Dedicated resource for accounts</li>
                                                <li>Daily report and weekly Skype calls</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3">
                                        <div className={`${Style.ColorIconBox} ${Style.ColorEleven}`}>
                                            <div className="text-center">
                                                <img src="/images/services/service-inner/step-5.png" alt="AMAZON DROPSHIPPING CONSULTING" className="img-fluid" />
                                            </div>
                                            <h3>AMAZON DROPSHIPPING CONSULTING</h3>
                                            <p>Our team of drop shipping consultants can find suppliers, sellers and vendors on demand. We worked on B2B websites and found most selling Amazon products using various tools and list them on their Amazon account. Our team is able to generate a monthly $2000 profit.</p>
                                            <ul>
                                                <li>No cost for warehouse</li>
                                                <li>Finding reliable suppliers</li>
                                                <li>Finding most profitable products via 3P software like: Jungle Scout, Sellics</li>
                                                <li>Category and subcategory optimization</li>
                                                <li>Mentoring for cost benefits</li>
                                                <li>Setup drop-shipping and FBA</li>
                                                <li>User engagement analysis</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3">
                                        <div className={`${Style.ColorIconBox} ${Style.ColorTwelve}`}>
                                            <div className="text-center">
                                                <img src="/images/services/service-inner/download-1.png" alt="AMAZON BRAND PROTECTION CONSULTING" className="img-fluid" />
                                            </div>
                                            <h3>AMAZON BRAND PROTECTION CONSULTING</h3>
                                            <p>As part of our <strong>Amazon Consulting and Services</strong>, the Tech2globe team of Amazon works closely with sellers and vendors to help them get their brand registered by giving enough references of documents needed. Beyond that, we help sellers in finding other sellers who merge Amazon listings and use our seller brand for their own, and we appeal for Brand Infringement to take down the names of the different sellers.</p>
                                            <ul>
                                                <li>Brand gating</li>
                                                <li>Removal of counterfeit products</li>
                                                <li>Merging of duplicate listings</li>
                                                <li>Registering brand</li>
                                                <li>Item-level authentication</li>
                                                <li>Copyright & trademark infringement</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3">
                                        <div className={`${Style.ColorIconBox} ${Style.ColorThirteen}`}>
                                            <div className="text-center">
                                                <img src="/images/services/service-inner/globle-selling-1.png" alt="AMAZON GLOBAL SELLING CONSULTING" className="img-fluid" />
                                            </div>
                                            <h3>AMAZON GLOBAL SELLING CONSULTING</h3>
                                            <p>We help sellers to widen their wings of selling online in Amazon all marketplace. We help them from account launch till sale. With the help of Tech2lobe global selling help many sellers are now able to run their business successfully.</p>
                                            <ul>
                                                <li>Account setup</li>
                                                <li>Details of document required</li>
                                                <li>Tax details</li>
                                                <li>Bank account opening</li>
                                                <li>Product shipping</li>
                                                <li>Profitable product identification</li>
                                                <li>Dedicated support until seller/vendor is registered on other channels</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3">
                                        <div className={`${Style.ColorIconBox} ${Style.ColorFourteen}`}>
                                            <div className="text-center">
                                                <img src="/images/services/service-inner/images-2.png" alt="AMAZON BUY BOX CONSULTING" className="img-fluid" />
                                            </div>
                                            <h3>AMAZON BUY BOX CONSULTING</h3>
                                            <p>As one of the <strong>best Amazon Consulting Service Providers</strong>, Tech2globe&apos;s team helps sellers to get the Buy Box button within 2 days against their listing. We use competition analysis to help achieve the results in lesser turnaround time.</p>
                                            <ul>
                                                <li>Increasing product visibility</li>
                                                <li>Price competitive for Buy Box readiness</li>
                                                <li>Getting reviews and feedback</li>
                                                <li>Price automation</li>
                                                <li>Session reports and page views</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3">
                                        <div className={`${Style.ColorIconBox} ${Style.ColorFifteen}`}>
                                            <div className="text-center">
                                                <img src="/images/services/service-inner/profitable-3.png" alt="AMAZON PROFITABLE PRODUCTS CONSULTING" className="img-fluid" />
                                            </div>
                                            <h3>AMAZON PROFITABLE PRODUCTS CONSULTING</h3>
                                            <p>Finding profitable products to sell on Amazon is the biggest challenge for anyone who wants to start a business on Amazon. We at Tech2Globe use various methods to find the most suitable and highly demanded, trending products to sell on Amazon.</p>
                                            <ul>
                                                <li>Finding trending and best-selling products</li>
                                                <li>Measuring competition analysis</li>
                                                <li>Product hunting eligible for FBA Small and Light</li>
                                                <li>Using third-party tools like: Keepa Graph, AMZ Scout, etc.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-3">
                                        <div className={`${Style.ColorIconBox} ${Style.ColorSixteen}`}>
                                            <div className="text-center">
                                                <img src="/images/services/service-inner/suspend-2.png" alt="AMAZON SUSPENDED ACCOUNT CONSULTING" className="img-fluid" />
                                            </div>
                                            <h3>AMAZON SUSPENDED ACCOUNT CONSULTING</h3>
                                            <p>We helped over 100+ sellers already to get their suspended account reinterment between 5-7 days. We know how to create a Plan of Action (POA) which will impact the very first time when the Amazon seller supports team ground.</p>
                                            <ul>
                                                <li>Understanding suspension reasons before appealing</li>
                                                <li>Cross-checking criteria compliance with Amazon policies</li>
                                                <li>Removing intellectual property cases</li>
                                                <li>Handling brand infringement</li>
                                                <li>Appeal with Plan of Action (up to 3 revisions)</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={Style.ContentDiv}>
                <div className="container">
                    <h2 className="pt-5 pb-4 text-danger text-center">Why Choose Tech2globe for Amazon Seller Consulting</h2>
                    <div className={`${Style.IcoCardTwo} row`}>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className={`${Style.IcoCardBlock}`}>
                                <img src="/images/services/service-inner/user-headset.png" alt className="img-fluid mb-3" />
                                <h5>24 X 7 SUPPORT</h5>
                                <p>Our clients receive comprehensive support on all topics regarding Amazon. We&apos;re in constant communication with our clients via email, phone, and web conferencing. Tech2globe Amazon Consulting integrates services seamlessly into our clients&apos; businesses by working hand in hand with their internal employees.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className={`${Style.IcoCardBlock}`}>
                                <img src="/images/services/service-inner/rocket.png" alt className="img-fluid mb-3" />
                                <h5>SPEED - 40% Average Increase In Total Product Sales</h5>
                                <p>Whether you&apos;re entering the marketplace or a veteran seller on Amazon, Tech2globe Consulting gets your seller account up to speed fast. Clients are fully on-boarded, listed appropriately, and advertised on Amazon.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className={`${Style.IcoCardBlock}`}>
                                <img src="/images/services/service-inner/light-bulb-6.png" alt className="img-fluid mb-3" />
                                <h5>15+ YEARS OF EXPERTISE</h5>
                                <p>Having collaborated with a diverse range of businesses and sales models, including both 1P and 3P sellers, our <strong>Amazon Consulting Services</strong> possess deep insights into the nuances of these models. We help our clients accelerate in their current business model, pivot into a new one or operate hybrid models.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={Style.ContentDiv}>
                <div className="container pt-3 pb-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="shadow-lg">
                                <img src="/images/services/service-inner/tech2globe-consulting-banner-2.jpg" alt className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={Style.ContentDiv}>
                <h2 className="pt-3 pb-4 text-danger text-center">Major Categories We Work For</h2>
                <div className="container">
                    <div className="row">
                        <div className={`${Style.DesktopInner} col-md-12`}>
                            <div className={Style.inner}>
                                <div className={`${Style.commonInner} inner1`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/health-care.png" alt />
                                    </div>
                                    <div className={`${Style.Title} mx-auto`}>
                                        Healthcare
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner2`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/skin-care-1-1.png" alt />
                                    </div>
                                    <div className={`${Style.Title} mx-auto`}>
                                        Beauty
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner3`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/food.png" alt />
                                    </div>
                                    <div className={`${Style.Title} mx-auto`}>
                                        Food
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner4`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/home-1-1.png" alt />
                                    </div>
                                    <div className={`${Style.Title} mx-auto`}>
                                        Home &amp; Kitchen
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner9`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/sports-1.png" alt />
                                    </div>
                                    <div className={`${Style.Title} mx-auto`}>
                                        Sports
                                    </div>
                                </div>
                            </div>
                            <div className={Style.inner}>
                                <div className={`${Style.commonInner} inner5`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/fashion.png" alt />
                                    </div>
                                    <div className={`${Style.Title} mx-auto`}>
                                        Fashion
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner6`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/open-book-1.png" alt />
                                    </div>
                                    <div className={`${Style.Title} mx-auto`}>
                                        Kindle &amp; Books
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner7`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/elec.png" alt />
                                    </div>
                                    <div className={`${Style.Title} mx-auto`}>
                                        Electronics
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner8`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/software.png" alt />
                                    </div>
                                    <div className={`${Style.Title} mx-auto`}>
                                        Software
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner10`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/all-1.png" alt />
                                    </div>
                                    <div className={`${Style.Title} mx-auto`}>
                                        All
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${Style.MobileInner} col-md-12`}>
                            <div className={Style.inner}>
                                <div className={`${Style.commonInner} inner1`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/health-care.png" alt />
                                    </div>
                                    <div className={`${Style.Title} mx-auto`}>
                                        Healthcare
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner2`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/skin-care-1-1.png" alt />
                                    </div>
                                    <div className={`${Style.Title} mx-auto`}>
                                        Beauty
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner3`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/food.png" alt />
                                    </div>
                                    <div className={`${Style.Title} mx-auto`}>
                                        Food
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner4`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/home-1-1.png" alt />
                                    </div>
                                    <div className={`${Style.Title} mx-auto`}>
                                        Home &amp; Kitchen
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner9`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/sports-1.png" alt />
                                    </div>
                                    <div className={`${Style.Title} mx-auto`}>
                                        Sports
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner5`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/fashion.png" alt />
                                    </div>
                                    <div className={`${Style.Title} mx-auto`}>
                                        Fashion
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner6`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/open-book-1.png" alt />
                                    </div>
                                    <div className={`${Style.Title} mx-auto`}>
                                        Kindle &amp; Books
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner7`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/elec.png" alt />
                                    </div>
                                    <div className={`${Style.Title} mx-auto`}>
                                        Electronics
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner8`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/software.png" alt />
                                    </div>
                                    <div className={`${Style.Title} mx-auto`}>
                                        Software
                                    </div>
                                </div>
                                <div className={`${Style.commonInner} inner10`}>
                                    <div className={`${Style.img} mx-auto`}>
                                        <img src="/images/services/all-1.png" alt />
                                    </div>
                                    <div className={`${Style.Title} mx-auto`}>
                                        All
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-5 pb-3">
                <div className="container">
                    <div className="row">
                        <div className={`${Style.ContentImage} col-md-4`}>
                            <h3 className="text-center text-danger pb-3">Amazon Store</h3>
                            <img src="/images/services/service-inner/10-10.jpg" alt="Amazon Store" className="img-fluid pb-3" />
                            <img src="/images/services/service-inner/11-11.jpg" alt="Amazon Store" className="img-fluid pb-3" />
                            <img src="/images/services/service-inner/2-2.jpg" alt="Amazon Store" className="img-fluid pb-3" />
                            <img src="/images/services/service-inner/26-26.jpg" alt="Amazon Store" className="img-fluid pb-3" />
                        </div>

                        <div className={`${Style.ContentImage} col-md-4`}>
                            <h3 className="text-center text-danger pb-3">PPC Results</h3>
                            <img src="/images/services/service-inner/19-19.jpg" alt="PPC Results" className="img-fluid pb-3" />
                            <img src="/images/services/service-inner/20-20.jpg" alt="PPC Results" className="img-fluid pb-3" />
                            <img src="/images/services/service-inner/21-21.jpg" alt="PPC Results" className="img-fluid pb-3" />
                            <img src="/images/services/service-inner/22-22.jpg" alt="PPC Results" className="img-fluid pb-3" />
                            <img src="/images/services/service-inner/23-23.jpg" alt="PPC Results" className="img-fluid pb-3" />
                            <img src="/images/services/service-inner/24-24.jpg" alt="PPC Results" className="img-fluid pb-3" />
                        </div>

                        <div className={`${Style.ContentImage} col-md-4`}>
                            <h3 className="text-center text-danger pb-3">A+ Cataloguing</h3>
                            <img src="/images/services/service-inner/12-12.jpg" alt="A+ Cataloguing" className="img-fluid pb-3" />
                            <img src="/images/services/service-inner/14-14.jpg" alt="A+ Cataloguing" className="img-fluid pb-3" />
                            <img src="/images/services/service-inner/15-15.jpg" alt="A+ Cataloguing" className="img-fluid pb-3" />
                            <img src="/images/services/service-inner/16-16.jpg" alt="A+ Cataloguing" className="img-fluid pb-3" />
                            <img src="/images/services/service-inner/17-17.jpg" alt="A+ Cataloguing" className="img-fluid pb-3" />
                            <img src="/images/services/service-inner/18-18.jpg" alt="A+ Cataloguing" className="img-fluid pb-3" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-5 pb-3">
                <div className="container">
                    <div className="row">
                        <h2 className="main-heading mb-4 text-danger text-center">
                            Tech2globe Amazon Portfolio
                        </h2>
                        <div className="table-responsive">
                            <table className={`${Style.MyTable} table table-striped text-center table-bordered`}>
                                <thead>
                                    <tr>
                                        <th>Cataloguing</th>
                                        <th>EBC/A+</th>
                                        <th>Stores</th>
                                        <th>Infographic</th>
                                        <th>Rating & Reviews</th>
                                    </tr>
                                </thead>
                                <tbody className="mytbody">
                                    <tr>
                                        <td><a href="https://www.amazon.com/dp/B07M8VYY4L" className="mylink">https://www.amazon.com/dp/B07M8VYY4L</a>
                                        </td>
                                        <td><a href="https://www.amazon.com/dp/B07FM6DPMG" className="mylink">https://www.amazon.com/dp/B09J3PMRFX</a>
                                        </td>
                                        <td><a href="https://www.amazon.com/tulimed" className="mylink">https://www.amazon.com/lilcuddlers</a></td>
                                        <td><a href="https://www.amazon.in/dp/B01M06ICNA" className="mylink">https://www.amazon.in/dp/B01M06ICNA</a>
                                        </td>
                                        <td><a href="https://www.amazon.in/dp/B078HWPJSJ" className="mylink"> https://www.amazon.in/dp/B078HWPJSJ</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://www.amazon.co.uk/dp/B00IVNC114"
                                            className="mylink">https://www.amazon.co.uk/dp/B00IVNC114</a></td>
                                        <td><a href="https://www.amazon.in/dp/B07KKM37T4" className="mylink"> https://www.amazon.com/dp/B0753ZWYKX</a>
                                        </td>
                                        <td><a href="https://www.amazon.com/stores/page/A6347872-5FA2-4541-90CB-E2386113006F"
                                            className="mylink">https://www.amazon.com/stores/page/https://www.amazon.com/mysticsilver</a></td>
                                        <td><a href="https://www.amazon.co.uk/dp/B01N5227U7" className="mylink">https://www.amazon.co.uk/dp/B01N5227U7
                                        </a></td>
                                        <td><a href="https://www.amazon.co.uk/dp/B01BGBJ8Y0"
                                            className="mylink">https://www.amazon.co.uk/dp/B01BGBJ8Y0</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://www.amazon.de/dp/B07G8MT1C9" className="mylink">https://www.amazon.de/dp/B07G8MT1C9</a>
                                        </td>
                                        <td><a href="https://www.amazon.com/dp/B00E1P4BRS" className="mylink">https://www.amazon.com/dp/B097CXQWPN</a>
                                        </td>
                                        <td><a href="https://www.amazon.com/lemirch" className="mylink">https://www.amazon.com/aquaeasy </a></td>
                                        <td><a href="https://www.amazon.com/dp/B073DLZWX7" className="mylink">https://www.amazon.com/dp/B073DLZWX7
                                        </a></td>
                                        <td><a href="https://www.amazon.co.uk/dp/B00AYNRLFA" className="mylink">https://www.amazon.co.uk/dp/B00AYNRLFA
                                        </a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://www.amazon.in/dp/B078HWPJSJ" className="mylink">https://www.amazon.in/dp/B078HWPJSJ </a>
                                        </td>
                                        <td><a href="https://www.amazon.com/dp/B07C7Q2R6D" className="mylink">https://www.amazon.com/dp/B09NTR2F1B</a>
                                        </td>
                                        <td><a
                                            href="javascript:;">https://www.amazon.com/stores/Equi-Tape/page/49485A46-E078-43F8-95A2-1E75CE0B1B56?ref_=ast_bln</a>
                                        </td>
                                        <td><a href="https://www.amazon.com/dp/B07LBDGXQ3" className="mylink">https://www.amazon.com/dp/B07LBDGXQ3</a>
                                        </td>
                                        <td><a href="javascript:;">-</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://www.amazon.co.uk/dp/B00548P1DE" className="mylink">https://www.amazon.co.uk/dp/B00548P1DE
                                        </a></td>
                                        <td><a href="https://www.amazon.co.uk/dp/B019VE5S98"
                                            className="mylink">https://www.amazon.com/dp/B083HTQDJX</a></td>
                                        <td><a href="javascript:;">https://www.amazon.com/kostrseggr</a></td>
                                        <td><a href="https://www.amazon.fr/dp/B072FJXFBW" className="mylink">https://www.amazon.fr/dp/B072FJXFBW </a>
                                        </td>
                                        <td><a href="javascript:;">-</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://www.amazon.co.uk/dp/B01BGBJ8Y0" className="mylink">https://www.amazon.co.uk/dp/B01BGBJ8Y0
                                        </a></td>
                                        <td><a href="https://www.amazon.com/dp/B071FTW381" className="mylink">https://www.amazon.com/dp/B089CVC66G</a>
                                        </td>
                                        <td><a href="javascript:;">https://www.amazon.co.uk/bonsai2u</a></td>
                                        <td><a href="javascript:;">-</a></td>
                                        <td><a href="javascript:;">-</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="https://www.amazon.ae/dp/B07RGTTJ4V" className="mylink">https://www.amazon.ae/dp/B07RGTTJ4V </a>
                                        </td>
                                        <td><a href="https://www.amazon.com/dp/B07QTCFLFC" className="mylink">https://www.amazon.com/dp/B09NLJV1LT</a>
                                        </td>
                                        <td><a
                                            href="javascript:;">https://www.amazon.co.uk/stores/TranquilPlants/TranquilPlants/page/2B31F008-F9E0-4094-A34F-7BCE3C9504DF</a>
                                        </td>
                                        <td><a href="javascript:;">-</a></td>
                                        <td><a href="javascript:;">-</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            <div className="pt-5 pb-5">
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

            <CaseStudiesService caseStudies={caseStudies} />
            <ClientSlider testimonials={testimonials} />
            <FaqSection faqs={faqs} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <p>To hire an Amazon specialist, contact us at <a href="mailto:info@tech2globe.com;">info@tech2globe.com</a> or call us at <a href="tel:01143010700;">011 4301 0700</a>.</p>
                    </div>
                </div>
            </div>
        </>
    )
};