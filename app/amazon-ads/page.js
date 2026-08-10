import { FaAmazon, FaChartLine, FaCheck, FaCheckCircle, FaFireAlt, FaHandPointRight, FaTrophy } from "react-icons/fa";
import "./custom.css";
import Image from "next/image";
import TestimonialSlider from "../components/landingpage/TestimonialSlider";
import HeroReviewSlider from "../components/landingpage/HeroReviewSlider";
import AmazonForm from "../components/landingpage/amazonform";
import PpcTabsSection from "../components/landingpage/PpcTabsSection";
import VideoTestimonialSlider from "../components/landingpage/VideoTestimonialSlider";
import Script from "next/script";

/* Create a headtag and keywords for the page */
export const metadata = {
    title: "Amazon & Marketplace Growth Partner for D2C Brands | Tech2Globe",
    description:
      "Full-service PPC, DSP and marketplace management for established D2C brands scaling on Amazon, Flipkart and Nykaa.",
  
    keywords: [
      "Amazon ads agency",
      "marketplace growth partner",
      "D2C Amazon PPC",
    ],
}

const trustBadges = [
    { src: "/images/landingpage/advanced-partner.webp", alt: "Amazon Advanced Partner", width: 220, height: 180 },
    { src: "/images/landingpage/verified-partner.webp", alt: "Amazon Verified Partner", width: 220, height: 180 },
    { src: "/images/landingpage/clutch_2024.webp", alt: "Clutch", width: 160, height: 170 },
    { src: "/images/landingpage/g2.webp", alt: "G2", width: 160, height: 170 },
    { src: "/images/landingpage/trustpilot.webp", alt: "Trustpilot", width: 160, height: 170 },
];

const heroFeaturedLogos = [
    { src: "/images/landingpage/clients/ugreen.png", alt: "Ugreen", category: "Electronics" },
    { src: "/images/landingpage/clients/wooden-street.png", alt: "Wooden Street", category: "Home & Furniture" },
    { src: "/images/landingpage/clients/swiss-arabian.png", alt: "Swiss Arabian", category: "Fragrance" },
    { src: "/images/landingpage/clients/vanshveda.png", alt: "Vanshveda", category: "Ayurveda & Wellness" },
    { src: "/images/landingpage/clients/ms-glamour.png", alt: "MS Glamour", category: "Apparel" },
];

const testimonials = [
    {
        name: "Vanshveda",
        role: "D2C Ayurveda Brand",
        initials: "VV",
        color: "#51cf66",
        review:
            "+51% sales and ACOS down 63% in 90 days. Tech2Globe finally gave us one team owning Amazon, Flipkart and Nykaa together.",
    },
    {
        name: "Wooden Street",
        role: "D2C Home & Furniture Brand",
        initials: "WS",
        color: "#f59f00",
        review:
            "+56% sales growth with ACOS down 41%. Their senior strategist runs our marketplace P&L like an in-house growth team.",
    },
    {
        name: "Swiss Arabian",
        role: "Premium Fragrance Brand",
        initials: "SA",
        color: "#845ef7",
        review:
            "300%+ sales growth while ACOS fell 14.38%. Reporting tied to revenue — not vanity metrics — changed how we scale ad spend.",
    },
    {
        name: "Ugreen",
        role: "Consumer Electronics Brand",
        initials: "UG",
        color: "#ff6b6b",
        review:
            "Dedicated account team, MAP monitoring and Brand Registry support. Exactly what a scaling D2C brand needs from a partner.",
    },
    {
        name: "MS Glamour",
        role: "Apparel & Fashion Brand",
        initials: "MG",
        color: "#4dabf7",
        review:
            "Custom growth plan on the first call, then a clear 30/60/90-day roadmap. No rotating support queue — a real partnership.",
    },
];

const enterprisePartnership = [
    {
        title: "Dedicated Senior Strategist",
        desc: "A named senior strategist and account team — not a rotating support queue.",
    },
    {
        title: "All Marketplaces, One Roof",
        desc: "Amazon, Flipkart, Nykaa, quick-commerce and DSP managed under one growth team.",
    },
    {
        title: "Brand Safety & Control",
        desc: "MAP / price monitoring, Brand Registry and A+ content to protect your brand equity.",
    },
    {
        title: "Revenue-Tied Reporting",
        desc: "Monthly and quarterly business reviews tied to revenue and profit — not vanity metrics.",
    },
    {
        title: "30 / 60 / 90-Day Roadmap",
        desc: "Structured onboarding with a clear growth roadmap — not ad-hoc tweaks.",
    },
];

const caseStudies = [
    {
        image: "/images/landingpage/amazon-map-pricing-surveillance.webp",
        brand: "Vanshveda",
        category: "D2C Ayurveda Brand",
        title: "+51% Sales, ACOS Down 63% in 90 Days",
    },
    {
        image: "/images/landingpage/case-study-2.webp",
        brand: "Wooden Street",
        category: "D2C Home & Furniture Brand",
        title: "+56% Sales Growth, ACOS Down 41%",
    },
    {
        image: "/images/landingpage/case-study-3.webp",
        brand: "Swiss Arabian",
        category: "Premium Fragrance Brand",
        title: "+300% Sales Growth, ACOS Down 14.38%",
    },
];

const clientLogos = [
    { src: "/images/landingpage/clients/abrams.png", alt: "Abrams" },
    { src: "/images/landingpage/clients/aniise.png", alt: "Aniise" },
    { src: "/images/landingpage/clients/ankit-toys-games.png", alt: "Ankit Toys Games" },
    { src: "/images/landingpage/clients/arar.png", alt: "Arar" },
    { src: "/images/landingpage/clients/bluebird.png", alt: "Bluebird" },
    { src: "/images/landingpage/clients/frontier.png", alt: "Frontier" },
    { src: "/images/landingpage/clients/in-season-jewelry.png", alt: "In Season Jewelry" },
    { src: "/images/landingpage/clients/liberty-house-toys.png", alt: "Liberty House Toys" },
    { src: "/images/landingpage/clients/lifetree.png", alt: "Lifetree" },
    { src: "/images/landingpage/clients/ms-glamour.png", alt: "MS Glamour" },
    { src: "/images/landingpage/clients/swiss-arabian.png", alt: "Swiss Arabian" },
    { src: "/images/landingpage/clients/the-good-pea.png", alt: "The Good Pea" },
    { src: "/images/landingpage/clients/ugreen.png", alt: "Ugreen" },
    { src: "/images/landingpage/clients/vanshveda.png", alt: "Vanshveda" },
    { src: "/images/landingpage/clients/wooden-street.png", alt: "Wooden Street" },
];

const faqData = [
    {
        id: "faq1",
        question: "How soon can I get a growth plan?",
        answer:
            "After you book a call, our team prepares a custom marketplace growth plan and presents it with a strategist — typically within a few business days.",
    },
    {
        id: "faq2",
        question: "What size brands do you work with?",
        answer:
            "We specialise in brands already generating consistent marketplace revenue, looking to scale profitably across Amazon and other marketplaces.",
    },
    {
        id: "faq3",
        question: "Do you manage Amazon DSP?",
        answer: "Yes, we offer full-service DSP campaign management.",
    },
];

export default function AmazonAds() {

    return (
        <>

            <header className="d2c_navbar sticky-top">
                <div className="container">

                    <nav className="navbar navbar-expand-lg px-0 py-0" id="d2c_main_nav">

                        <a className="navbar-brand"><Image src="/images/landingpage/logo.png" width={180} height={53} className="img-fluid" alt="Logo" priority /></a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span><i className="fas fa-bars"></i></span>
                        </button>

                        <div className="collapse navbar-collapse js-clone-nav justify-content-end">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">about</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#service">service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#whychooseus">Why Choose Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#partnership">Partnership</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#casestudies">Case Studies</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#testimonial">testimonial</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#home" className="btn d-block d-lg-none">Book a Growth Strategy Call</a>
                                </li>
                            </ul>
                        </div>

                    </nav>

                    <div className="collapse navbar-collapse d2c_mobile_view" id="navbarSupportedContent">
                        <div className="show_width container">
                            <div className="text-right">
                                <button className="navbar-toggler d2c_cross_btn p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span><i className="fa fa-times"></i></span>
                                </button>
                            </div>

                            <div className="navbar px-0 d2c_mobile_view_body"><div className="navbar-nav ml-auto">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#home">home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about">about</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#service">service</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#whychooseus">Why Choose Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#partnership">Partnership</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#casestudies">Case Studies</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#testimonial">testimonial</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#home" className="btn d-block d-lg-none">Book a Growth Strategy Call</a>
                                    </li>
                                </ul>
                            </div></div>
                        </div>
                    </div>

                </div>
            </header>

            <div className="d2c_hero_bg">


                <section className="d2c_hero_wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 pe-5">
                                <h1>The Amazon &amp; Marketplace Growth Partner for <span>Established D2C Brands</span></h1>
                                <p>Full-service PPC, DSP and marketplace management for brands scaling on Amazon, Flipkart and Nykaa — managed by a dedicated, in-house team. ₹1B+ in marketplace revenue driven for 2000+ brands.</p>
                                <div className="d2c_form_points">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul>
                                                <li><FaCheck size={25} /> Dedicated senior strategist</li>
                                                <li><FaCheck size={25} /> Omnichannel marketplace growth</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul>
                                                <li><FaCheck size={25} /> Brand safety &amp; MAP control</li>
                                                <li><FaCheck size={25} /> Revenue-tied reporting</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-cta-row mb-3">
                                    <a href="#home" className="btn">Book a Growth Strategy Call</a>
                                    <a href="#home" className="btn btn-hero-secondary">Get a Custom Growth Plan</a>
                                </div>

                                <div className="hero-brand-proof mb-3">
                                    <p className="hero-brand-proof__label mb-2">Trusted by established D2C brands across wellness, apparel, home &amp; electronics</p>
                                    <div className="brand-logo-grid hero-brand-logos">
                                        {heroFeaturedLogos.map((logo) => (
                                            <div key={logo.alt} className="brand-logo-grid__cell" title={logo.category}>
                                                <Image src={logo.src} width={300} height={150} alt={logo.alt} className="img-fluid" />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="hero-trust-badges mb-3">
                                    {trustBadges.map((badge) => (
                                        <div key={badge.alt} className="hero-trust-badges__item">
                                            <Image src={badge.src} width={badge.width} height={badge.height} alt={badge.alt} className="img-fluid" />
                                        </div>
                                    ))}
                                </div>

                                <HeroReviewSlider />
                                <div className="highlight-points">
                                    <ul>
                                        <li><small>⭐</small> Trusted by <span>2000+</span> Amazon Brands </li>
                                        <li><small>💰</small> Driven <span>₹1B+</span> Marketplace Revenue</li>
                                        <li><small>📈</small> Average <span>63%</span> Sales Growth in 90 Days</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-lg-5 mb-4 mb-lg-0">
                                <div className="formblock" id="home">
                                    <h2 className="d2c_title position-relative mb-3">Book a <span>Growth Strategy</span> Call</h2>
                                    <p className="mb-3">Get a custom marketplace growth plan, presented on a call with a strategist.</p>

                                    <AmazonForm />

                                    <hr />
                                    <div className="d2c_form_points">
                                        <ul>
                                            <li> <FaCheck size={25} /> Custom Growth Plan on a Call</li>
                                            <li> <FaCheck size={25} /> Omnichannel Opportunity Review</li>
                                            <li> <FaCheck size={25} /> Brand-Level PPC &amp; DSP Strategy</li>
                                            <li> <FaCheck size={25} /> Senior Strategist, Not a Queue</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <PpcTabsSection />

            <section className="enterprise-partnership py-5" id="partnership">
                <div className="container">
                    <h3 className="d2c_sub_title text_start text-md-center position-relative">Enterprise <span>Partnership</span></h3>
                    <h2 className="d2c_title text_start text-md-center position-relative mb-4">
                        Built for Brands That Need More Than <span>Ad Management</span>
                    </h2>
                    <p className="text_start text-md-center mb-5">
                        Established D2C brands pay a premium for partnership — dedicated teams, omnichannel control, brand safety and a process that scales profitably.
                    </p>
                    <div className="row g-4">
                        {enterprisePartnership.map((item) => (
                            <div key={item.title} className="col-md-6 col-lg-4">
                                <div className="enterprise-partnership__card h-100">
                                    <FaCheckCircle size={22} className="text-success mb-2" />
                                    <h3>{item.title}</h3>
                                    <p className="mb-0">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <a href="#home" className="btn">Get a Custom Growth Plan on a Call</a>
                    </div>
                </div>
            </section>

            <section className="d2c_testimonial_wrapper" id="testimonial">
                <div className="container">
                    <h3 className="d2c_sub_title text_start text-md-center position-relative">Brand <span>Results</span>
                    </h3>
                    <h2 className="d2c_title text_start text-md-center position-relative">Named Results From Brands
                        Like Yours<span></span></h2>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-3">
                            <div className="row justify-content-center">

                                <VideoTestimonialSlider />
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <TestimonialSlider testimonials={testimonials} />
                        </div>

                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-12 pt-5">
                            <div className="clients_wrapper" style={{ position: "relative" }}>
                                <div className="clients_wrapper_header">
                                    <h2 className="d2c_title text_start text-md-center position-relative">Brands scaling across Amazon, Flipkart &amp; Nykaa
                                    </h2>
                                </div>

                                <div className="clients_wrapper_body">
                                    <ul>
                                        {clientLogos.map((logo) => (
                                            <li key={logo.alt}>
                                                <Image src={logo.src} width={300} height={150} alt={logo.alt} className="img-fluid" />
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <div className="d2c_blog_bg_wrapper">
                <section className="d2c_blog_wrapper" id="casestudies">
                    <div className="container">
                        <h3 className="d2c_sub_title text_start text-md-center position-relative">Case <span>Studies</span></h3>
                        <h2 className="d2c_title text_start text-md-center position-relative">Named Brand <span>Case Studies</span>
                        </h2>
                        <p className="text_start text-md-center mb-4">Real numbers from established D2C brands we manage on marketplaces.
                        </p>
                        <div className="row justify-content-center">
                            {caseStudies.map((study, index) => (
                                <div key={study.brand} className={`col-lg-8 ${index < caseStudies.length - 1 ? "mb-4 mb-lg-0" : ""}`}>
                                    <div className={`d2c_card_wrapper d2c_blog_card ${index < caseStudies.length - 1 ? "mb-4" : ""}`}>
                                        <Image src={study.image} width={1438} height={718} className="img-fluid w-100" alt={`${study.brand} case study`} />
                                        <div className="d2c_card_body">
                                            <p className="text-white text-center mb-1">{study.brand} · {study.category}</p>
                                            <h4 className="text-white text-center">{study.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>


            <div className="d2c_shade_bg_wrapper">
                <section className="d2c_service_wrapper oldservice" id="service">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-7 text-center">
                                <h3 className="d2c_sub_title position-relative">Our <span>Services</span></h3>
                                <h2 className="d2c_title position-relative">Dominate <span>Marketplaces</span> with Full-Service
                                    Growth
                                </h2>
                                <p className="text-white pb-5">Amazon, Flipkart, Nykaa, quick-commerce and DSP — managed by one dedicated in-house team.</p>
                            </div>
                        </div>
                        <div className="row align-items-center">

                            <div className="col-xl-6 mb-4 mb-xl-0">
                                <div className="row">
                                    <div className="col-md-10">
                                        <ul>
                                            <li><FaHandPointRight /> Amazon PPC &amp; DSP</li>
                                            <li><FaHandPointRight /> Amazon SEO</li>
                                            <li><FaHandPointRight /> AI-powered Market Insights</li>
                                            <li><FaHandPointRight /> Competitor Targeting Strategies</li>
                                            <li><FaHandPointRight /> Advanced Amazon Advertising</li>
                                            <li><FaHandPointRight /> Inventory &amp; Demand Planning</li>
                                            <li><FaHandPointRight /> U.S.-based Experts</li>

                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className="col-xl-6">

                                <Image src="/images/landingpage/amazon-dsp-image.webp" width={2560} height={1625} alt="AmazonDSP" className="img-fluid rounded-3 bwlight" />

                            </div>

                        </div>

                        <div className="cta_section text-center">
                            <h3 className="text-center pb-3">Speak with our Amazon experts and unlock new levels of growth!</h3>
                            <div className="btn-block-cta">
                                <a href="#home" className="btn">
                                    Book a Growth Strategy Call
                                </a>
                            </div>
                            <div className="cmt text-center">
                                <Image src="/images/landingpage/Stars.webp" width={1157} height={217} alt="Stars" className="img-fluid" />
                                <p>Trusted by <strong>2000+ Amazon Brands</strong></p>
                            </div>
                        </div>


                    </div>
                </section>


                <section className="d2c_feature_wrapper">
                    <div className="container">
                        <div className="row">
                            <h2 className="d2c_title position-relative text-center">How Our <span>Amazon Growth</span> Process
                                Works</h2>


                            <div className="timeline pt-4">
                                <div className="step">
                                    <div className="circle-wrapper">
                                        <div className="outer-circle">
                                            <div className="inner-circle">
                                                <div className="icon">1</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="bottom-text">
                                        <h3>Growth<br /> Strategy Call</h3>
                                        <p>Get a custom marketplace growth plan presented by a senior strategist.</p>
                                    </div>
                                </div>


                                <div className="step">
                                    <div className="circle-wrapper">
                                        <div className="outer-circle">
                                            <div className="inner-circle">
                                                <div className="icon">2</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="bottom-text">
                                        <h3>Keyword &amp; Competitor Analysis</h3>
                                        <p>Identify profitable keywords and analyze competitors strategies</p>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="circle-wrapper">
                                        <div className="outer-circle">
                                            <div className="inner-circle">
                                                <div className="icon">3</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="bottom-text">
                                        <h3>Campaign<br /> Optimization</h3>
                                        <p>Launch &amp; optimize campaigns for maximum ROI.</p>
                                    </div>
                                </div>

                                <div className="step">
                                    <div className="circle-wrapper">
                                        <div className="outer-circle">
                                            <div className="inner-circle">
                                                <div className="icon">4</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <div className="bottom-text">
                                        <h3>Scale<br /> Profitably</h3>
                                        <p>Increase sales and profitability through continuous optimization.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <div className="d2c_team_bg_wrapper">

                <section className="d2c_team_wrapper whychooseus" id="whychooseus">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="d2c_title  position-relative">Why Choose <span>Tech2Globe</span>
                                </h2>
                            </div>
                            <div className="col-md-6">
                                <p className="text-center desc-title mb-3">We&apos;re the trusted Amazon growth partner that delivers
                                    exceptional results.</p>
                            </div>


                        </div>


                        <div className="row">
                            <div className="col-md-6">
                                <div className="d2c_card_wrapper text-center mb-3">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="d2c_icon_wrapper">
                                            <FaTrophy size={32} className="text-white" />
                                        </div>
                                        <div className="d2c_detail">
                                            <h3>Proven Track Record</h3>
                                            <p>Over <span>₹1B+</span> in marketplace revenue driven for our clients</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="d2c_card_wrapper text-center mb-3">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="d2c_icon_wrapper">
                                            <FaAmazon size={32} className="text-white" />
                                        </div>
                                        <div className="d2c_detail">
                                            <h3>Amazon Experts</h3>
                                            <p><span>12+ Years</span> of maximizing Amazon success</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="d2c_card_wrapper d2c_service_card text-center position-relative">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="d2c_icon_wrapper">
                                            <FaChartLine size={32} className="text-white" />
                                        </div>
                                        <div className="d2c_detail">
                                            <h3>Full-Spectrum Strategies</h3>
                                            <p>Customized solutions for <span>PPC, SEO &amp; growth</span> </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6">
                                <div className="row justify-content-center featured-on">
                                    <div className="col-md-4 text-center">
                                        <Image src="/images/landingpage/g2.webp" width={300} height={320} alt="G2" className="img-fluid p-3 width80" />
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <Image src="/images/landingpage/clutch_2024.webp" width={300} height={320} alt="Clutch" className="img-fluid p-3 width80" />
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <Image src="/images/landingpage/trustpilot.webp" width={300} height={320} alt="Trustpilot" className="img-fluid p-3 width80" />
                                    </div>

                                    <div className="col-md-4">
                                        <div className="award-block text-center">
                                            <Image src="/images/landingpage/advanced-partner.webp" width={131} height={109} alt="advanced-partner" className="img-fluid" />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="award-block text-center">
                                            <Image src="/images/landingpage/verified-partner.webp" width={133} height={109} alt="verified-partner" className="img-fluid" />
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="award-block text-center">
                                            <Image src="/images/landingpage/spn-verified-partner.webp" width={133} height={109} alt="spn-verified-partner" className="img-fluid" />
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            <section className="compare-section py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="row">
                                <div className="col-lg-6 offset-0 offset-lg-3 px-2 px-md-5">
                                    <h3 className="d2c_sub_title text-start text-md-center position-relative">Why Tech2Globe <span>Wins</span>
                                    </h3>
                                    <h2 className="d2c_title text-start text-md-center position-relative">Superior Strategies <span>Proven Results</span>
                                    </h2>
                                </div>
                            </div>

                            <div className="compare-wrapper">

                                <div className="compare-row">
                                    <div className="compare-left">Competitor <i className="fas fa-times-circle"></i></div>
                                    <div className="compare-right">
                                        <Image src="/images/landingpage/logo-t2g.png" width={180} height={53} alt="tech2globe" className="img-fluid" />
                                    </div>
                                </div>

                                <div className="compare-row">
                                    <div className="compare-left">One-size-fits-all strategies</div>
                                    <div className="compare-right">
                                        <strong>Dedicated Amazon Specialists</strong>
                                        <span>Work with experts focused solely on Amazon growth, including PPC, SEO, and
                                            DSP.</span>
                                    </div>
                                </div>

                                <div className="compare-row">
                                    <div className="compare-left">Limited expertise</div>
                                    <div className="compare-right">
                                        <strong>Data-Driven Strategy</strong>
                                        <span>Campaigns are optimized using performance data, keyword insights, and
                                            competitor analysis.</span>
                                    </div>
                                </div>

                                <div className="compare-row">
                                    <div className="compare-left">Offshore support teams</div>
                                    <div className="compare-right">
                                        <strong>No Outsourcing</strong>
                                        <span>Your account is handled by in-house Amazon experts for quality and
                                            consistency.</span>
                                    </div>
                                </div>

                                <div className="compare-row">
                                    <div className="compare-left">Slow, reactive scaling</div>
                                    <div className="compare-right">
                                        <strong>Transparent Reporting</strong>
                                        <span>Get clear reports and insights on performance and budget usage.</span>
                                    </div>
                                </div>

                                <div className="compare-row">
                                    <div className="compare-left">No proven results</div>
                                    <div className="compare-right">
                                        <strong>Proven Results With Global Brands</strong>
                                        <span>Helping 2000+ established brands scale marketplace revenue with omnichannel PPC and DSP strategies.</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="cta_section text-center">
                                <h3 className="text-center pb-3">Grow Your <span>Amazon Business</span> With Proven Strategies
                                    That Deliver Results</h3>
                                <div className="btn-block-cta">
                                    <a href="#home" className="btn">
                                        Book a Growth Strategy Call
                                    </a>
                                </div>
                                <div className="cmt text-center">
                                    <Image src="/images/landingpage/Stars.webp" width={1157} height={217} alt="Stars" className="img-fluid" />
                                    <p>Trusted by <strong>2000+ Amazon Brands</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="d2c_about_wrapper" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="d2c_img_container position-relative me-0 me-lg-5">
                                <div className="d2c_img_wrapper">
                                    <Image src="/images/landingpage/about_one.jpg" width={392} height={441} className="img-fluid w-100 rounded-3" alt="About Upper Image" />
                                </div>
                                <div className="d2c_img_wrapper">
                                    <Image src="/images/landingpage/about_two.jpg" width={371} height={419} className="img-fluid w-100 rounded-3" alt="About Down Image" />
                                </div>
                                <Image src="/images/landingpage/about_shade.png" width={582} height={513} alt="About Background Image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="d2c_sub_title position-relative">About <span>Tech2Globe</span></h3>
                            <h2 className="d2c_title position-relative">Leaders in Marketplace Growth &amp; Global <span>E-Commerce
                                Solutions</span> </h2>
                            <p className="mb-3">Tech2Globe is a leading marketplace growth partner. For over a decade, we&apos;ve
                                helped 2000+ D2C brands scale profitably across Amazon, Flipkart and Nykaa. We combine
                                dedicated strategists with transparent, revenue-tied reporting to deliver
                                exceptional results.</p>
                            <ul>
                                <li><FaHandPointRight /> 2000+ Satisfied Clients Worldwide</li>
                                <li><FaHandPointRight /> 12+ Years of Experience</li>
                                <li><FaHandPointRight /> ₹1B+ Marketplace Revenue Driven</li>
                            </ul>
                            <a href="#home" className="btn">Get Started</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="d2c_service_wrapper newservice">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-8 mb-4 mb-xl-0">
                            <div className="text-center">
                                <h2 className="d2c_title position-relative">Get a Custom Marketplace <span>Growth Plan</span>
                                </h2>
                                <p>Avoid costly mistakes and uncover ways to increase sales &amp; profit — reviewed on a call with a strategist.</p>
                            </div>
                        </div>

                        <div className="col-xl-5 mb-4 mb-xl-0">
                            <div className="row">
                                <div className="col-md-10">
                                    <ul>
                                        <li className="mb-3"><FaHandPointRight />  Ad Optimization
                                            Opportunities</li>
                                        <li className="mb-3"><FaHandPointRight /> Keyword Targeting
                                            Enhancements</li>
                                        <li className="mb-3"><FaHandPointRight /> Custom PPC Growth Strategy
                                        </li>
                                        <li><FaHandPointRight /> Competitor PPC Insights</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <Image src="/images/landingpage/ppc-health-image.webp" width={2560} height={1625} alt="PPC Health Check" className="img-fluid bwlight" />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="cta_section pt-5 text-center">
                                <div className="btn-block-cta">
                                    <a href="#home" className="btn">
                                        Get a Custom Growth Plan
                                    </a>
                                </div>
                                <div className="cmt text-center">
                                    <small>No spam. No obligation. Just a brand-specific growth plan on a call.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-8 col-xl-8">
                            <h2 className="text-center faq-title">
                                Frequently Asked Questions
                            </h2>

                            <div className="accordion" id="faqAccordion">
                                {faqData.map((item, index) => (
                                    <div className="accordion-item" key={item.id}>
                                        <h2 className="accordion-header">
                                            <button
                                                className={`accordion-button ${index !== 0 ? "collapsed" : ""
                                                    }`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#${item.id}`}
                                                aria-expanded={index === 0}
                                                aria-controls={item.id}
                                            >
                                                {item.question}
                                            </button>
                                        </h2>

                                        <div
                                            id={item.id}
                                            className={`accordion-collapse collapse ${index === 0 ? "show" : ""
                                                }`}
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">{item.answer}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <footer className="d2c_footer_wrapper">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-8 mb-5 mb-lg-0 text-center">
                            <Image src="/images/landingpage/footer_logo.png" width={300} height={89} className="d2c_footer_logo img-fluid mb-4"
                                alt="Footer Logo" />
                            <p>Tech2Globe Web Solutions is a renowned solution-provider that was established in 2014 with
                                superior quality of our services, we have managed to carve out a coveted position for
                                ourselves in this fiercely competitive sector.</p>
                            <div className="award_wrapper d-flex justify-content-center gap-2">
                                <div className="award-block">
                                    <Image src="/images/landingpage/advanced-partner.webp" width={131} height={109} alt="advanced-partner" className="img-fluid" />
                                </div>
                                <div className="award-block">
                                    <Image src="/images/landingpage/verified-partner.webp" width={133} height={109} alt="verified-partner" className="img-fluid" />
                                </div>
                                <div className="award-block">
                                    <Image src="/images/landingpage/spn-verified-partner.webp" width={133} height={109} alt="spn-verified-partner"
                                        className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d2c_copy_wrapper">
                        <h4 className="text-center">© 2026 Tech2Globe | All Right Reserved</h4>
                    </div>

                </div>

            </footer>

            <div className="sticky_button">
                <a href="#home" className="btn">
                    Book a Growth Strategy Call
                </a>
                <div className="cmt text-center">
                    <Image src="/images/landingpage/Stars.webp" width={1157} height={217} alt="Stars" className="img-fluid" />
                    <p>Trusted by <strong>2000+ Amazon Brands</strong></p>
                </div>
            </div>

            <div className="whatsapp-icon-wrapper">
                <a href="https://wa.me/919899675039?text=Hi%2C%20I%20want%20to%20book%20a%20growth%20strategy%20call%20for%20our%20brand." target="_blank">
                    <Image src="/images/landingpage/whatsapp-icon.png" width={40} height={40} alt="Whatsapp" className="img-fluid whatsapp-icon" />
                </a>
            </div>
        </>
    )
}