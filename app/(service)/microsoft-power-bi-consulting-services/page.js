import Style from "./style.module.css";
import Image from "next/image";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import { FaBolt, FaBuilding, FaBullhorn, FaCertificate, FaChartBar, FaChartLine, FaCheckCircle, FaClock, FaCode, FaCogs, FaCube, FaDatabase, FaDollarSign, FaDownload, FaExchangeAlt, FaExclamationCircle, FaHeartbeat, FaLightbulb, FaMicrochip, FaProjectDiagram, FaScrewdriver, FaSearch, FaShieldAlt, FaShoppingCart, FaSun, FaTachometerAlt, FaTools, FaUsers, FaUsersCog, FaUserTie } from "react-icons/fa";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import BiConsultingSlider from "@/app/components/services/BiConsultingSlider/BiConsultingSlider";

export const metadata = {
    title: "Microsoft Power BI Consulting Services",
    description:
        "Tech2Globe specializes in Microsoft Power BI consulting services and BI consultancy to help businesses visualize, analyze, and optimize their data effectively.",
    keywords:
        "Microsoft Power BI Consulting Services, Microsoft Power BI consultants, Microsoft Power BI Solution, Power BI consulting services, Power BI consultants & Expert, Microsoft power BI partner",
    openGraph: {
        title: "Microsoft Power BI Consulting Services",
        description:
            "Tech2Globe specializes in Microsoft Power BI consulting services and BI consultancy to help businesses visualize, analyze, and optimize their data effectively.",
        url: "https://www.tech2globe.com/microsoft-power-bi-consulting-services",
        siteName: "Tech2Globe Web Solutions LLP",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Microsoft Power BI Consulting Services",
        description:
            "Tech2Globe specializes in Microsoft Power BI consulting services and BI consultancy to help businesses visualize, analyze, and optimize their data effectively."
    },
    alternates: {
        canonical: "https://www.tech2globe.com/microsoft-power-bi-consulting-services",
    },
};


export default function BiConsulting() {

    return (
        <>

            <div className={`${Style.ContentDiv}`}>
                <div className={Style.BiBanner}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 text-center m-auto">
                                <div className="ws-content-block">
                                    <img src="images/services/service-inner/microsoft-power-bi-light.png" alt="Microsoft Power BI"
                                        className="img-fluid bi-logo" />
                                    <h1>Unlock Actionable Business Insights with Expert Microsoft Power BI Consulting</h1>
                                    <div className={Style.BannerBtn}>
                                        <a href="/contact-us" className="button-red mt-2 mx-0">Get A Consultation</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Breadcrumb pageName="Microsoft Power Bi Consulting Services" />
            <BrandSection />
            <section className={Style.PageContent}>

                <div className={Style.ContentDiv}>
                    <div className={Style.BiServices}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className={`${Style.BgBlock} row justify-content-between m-0`}>
                                        <div className={`${Style.LeftBlock} col-lg-5 left-block p-0`}>
                                            <div className="position-sticky">
                                                <h2>Customized Microsoft Power BI Consulting Services for Smarter Growth</h2>
                                                <p>At Tech2Globe, we design Microsoft Power BI consulting solutions that align
                                                    perfectly with your business goals and data journey. Whether you’re just
                                                    starting with business intelligence or looking to enhance advanced analytics,
                                                    our experts deliver scalable, high-performance Power BI strategies that unlock
                                                    deeper insights, accelerate decision-making, and drive sustainable business
                                                    success.</p>
                                                <div className={Style.BiBtnBlock}>
                                                    <a href="/contact-us" className="button-red mt-2 mx-0 mb-4 mb-lg-3">Talk to Our
                                                        Power BI Specialists</a>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-lg-6 right-block p-0">

                                            <div className={`${Style.BiServiceCard} mb-4 mb-lg-5`}>
                                                <div className={Style.Icon}><FaChartLine /></div>
                                                <div className={Style.Title}>Power BI Strategy & Assessment</div>
                                                <div className={Style.Desc}>
                                                    Tech2Globe offers expert <strong>Power BI consulting services</strong> to
                                                    evaluate your current data ecosystem and design a customized analytics roadmap.
                                                    Our business intelligence strategies focus on improving dashboard performance,
                                                    delivering actionable insights, and empowering data-driven decision-making for
                                                    long-term growth.
                                                </div>
                                            </div>

                                            <div className={`${Style.BiServiceCard} mb-4 mb-lg-5`}>
                                                <div className={Style.Icon}><FaDatabase /></div>
                                                <div className={Style.Title}>Data Modeling & ETL Development</div>
                                                <div className={Style.Desc}>
                                                    We create scalable, high-performance <strong>Power BI data models</strong> that
                                                    ensure accuracy and reliability in reporting. Our team manages the entire ETL
                                                    (Extract, Transform, Load) process, seamlessly integrating data from multiple
                                                    sources to provide unified, trustworthy analytics that drive better business
                                                    outcomes.
                                                </div>
                                            </div>

                                            <div className={`${Style.BiServiceCard} mb-4 mb-lg-5`}>
                                                <div className={Style.Icon}><FaTachometerAlt /></div>
                                                <div className={Style.Title}>Dashboard & Report Development</div>
                                                <div className={Style.Desc}>
                                                    At Tech2Globe, we design visually compelling and interactive <strong>Power BI
                                                        dashboards and reports</strong> tailored to specific business functions. Our
                                                    focus on clarity, speed, and user experience ensures your teams gain instant
                                                    access to real-time insights—fueling smarter, faster decisions across
                                                    departments.
                                                </div>
                                            </div>

                                            <div className={`${Style.BiServiceCard} mb-4 mb-lg-5`}>
                                                <div className={Style.Icon}><FaExchangeAlt /></div>
                                                <div className={Style.Title}>Power BI Migration Services</div>
                                                <div className={Style.Desc}>
                                                    Our migration specialists help organizations move seamlessly from Excel,
                                                    Tableau, Qlik, or legacy BI tools to <strong>Microsoft Power BI</strong>. We
                                                    ensure a secure, efficient, and optimized migration process that enhances
                                                    accessibility, reduces dependency on outdated systems, and improves overall
                                                    analytics capabilities.
                                                </div>
                                            </div>

                                            <div className={`${Style.BiServiceCard} mb-4 mb-lg-5`}>
                                                <div className={Style.Icon}><FaCode /></div>
                                                <div className={Style.Title}>Embedded Power BI Solutions</div>
                                                <div className={Style.Desc}>
                                                    We embed interactive <strong>Power BI analytics</strong> directly into your
                                                    business applications, customer portals, or SaaS platforms. This enables
                                                    end-users to access real-time insights within their existing workflows—improving
                                                    productivity, customer experience, and decision-making without switching tools.
                                                </div>
                                            </div>

                                            <div className={`${Style.BiServiceCard} mb-4 mb-lg-5`}>
                                                <div className={Style.Icon}><FaTools /></div>
                                                <div className={Style.Title}>Power BI Optimization & Support</div>
                                                <div className={Style.Desc}>
                                                    Tech2Globe provides dedicated <strong>Power BI support and optimization</strong>
                                                    services to fine-tune performance, resolve technical issues, and adapt analytics
                                                    to evolving business needs. With continuous monitoring and expert guidance, we
                                                    ensure your Power BI environment remains scalable, secure, and future-ready.
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${Style.ContentDiv} ${Style.BiFeatures}`}>
                    <div className="container m-auto headesc text-center mb-5">
                        <h2>Why Partner with Tech2Globe for Microsoft Power BI Consulting Services?</h2>
                        <p>Turn complex data into strategic business intelligence—boost efficiency, uncover insights, and
                            maximize ROI with expert Power BI solutions.</p>
                    </div>

                    <div className="container">
                        <div className="row g-4">

                            <div className="col-md-6 col-lg-4">
                                <div className={`${Style.BiFeatureCard} h-100`}>
                                    <span className={Style.BiFeatureNumber}>1</span>
                                    <h3>Go Beyond Standard Dashboards</h3>
                                    <p>While Power BI&apos;s drag-and-drop features are useful, real business value comes from
                                        strategy. Our consultants design dashboards that deliver actionable insights, helping
                                        you make data-driven decisions—not just view charts.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className={`${Style.BiFeatureCard} h-100`}>
                                    <span className={Style.BiFeatureNumber}>2</span>
                                    <h3>Turn Raw Data into Business Intelligence</h3>
                                    <p>Most companies struggle with fragmented, siloed data. Tech2Globe&apos;s Power BI experts
                                        structure, clean, and model data to deliver accurate analysis and meaningful insights
                                        that guide smarter business strategies.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className={`${Style.BiFeatureCard} h-100`}>
                                    <span className={Style.BiFeatureNumber}>3</span>
                                    <h3>Scalable Architecture for Future Growth</h3>
                                    <p>As your data grows, performance often suffers. Our Power BI consulting services ensure
                                        reports, models, and architecture are optimized for speed, scalability, and
                                        enterprise-level performance—future-proofing your BI investment.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className={`${Style.BiFeatureCard} h-100`}>
                                    <span className={Style.BiFeatureNumber}>4</span>
                                    <h3>Faster Implementation, Faster ROI</h3>
                                    <p>We bring proven frameworks and industry best practices that accelerate Power BI
                                        deployment, reduce costs, and deliver measurable business value—helping you see results
                                        sooner.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className={`${Style.BiFeatureCard} h-100`}>
                                    <span className={Style.BiFeatureNumber}>5</span>
                                    <h3>Governance, Security & Compliance Built In</h3>
                                    <p>Data security is non-negotiable. Our consultants establish robust governance frameworks,
                                        secure access controls, and compliance protocols—ensuring data trust, transparency, and
                                        reliability at every level.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className={`${Style.BiFeatureCard} h-100`}>
                                    <span className={Style.BiFeatureNumber}>6</span>
                                    <h3>Future-Proof Business Intelligence</h3>
                                    <p>With evolving Microsoft updates and business demands, Power BI must adapt continuously.
                                        Tech2Globe ensures you stay ahead with advanced analytics, embedded BI, and the latest
                                        innovations aligned with your growth strategy.</p>
                                </div>
                            </div>

                        </div>
                        <div className={`${Style.FiBtnBlock} mt-3 text-center`}>
                            <a href="/contact-us" className="button-red mt-2 mx-0">Talk to Our Power BI Experts</a>
                        </div>
                    </div>
                </div>

                <div className={Style.ContentDiv}>
                    <div className="container m-auto text-center pt-5 mb-5">
                        <h2>In-House vs. Microsoft Power BI Consultants: Which is the Smarter Choice?</h2>
                        <p>Discover the key differences to maximize your <strong>business intelligence investment</strong> and
                            choose the right approach for long-term success.</p>
                    </div>

                    <div className="container">
                        <div className="table-responsive">
                            <table className={`${Style.ComparisonTable} table`}>
                                <thead>
                                    <tr>
                                        <th className={Style.CriteriaCol}>
                                            <h5>Criteria</h5>
                                        </th>
                                        <th className={Style.InhouseCol}>
                                            <h5>In-House Team</h5>
                                        </th>
                                        <th className={Style.ConsultantCol}>
                                            <h5>Power BI Consultant</h5>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className={Style.CriteriaCol}>Expertise</td>
                                        <td className={Style.InhouseCol}><FaExclamationCircle /> Generalist
                                            skills, limited to internal exposure</td>
                                        <td className={Style.ConsultantCol}><FaCheckCircle /> Specialized
                                            <strong>Power BI experts</strong> with cross-industry knowledge
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={Style.CriteriaCol}>Speed of Implementation</td>
                                        <td className={Style.InhouseCol}><FaExclamationCircle /> Slower due to
                                            steep learning curves and resource limits</td>
                                        <td className={Style.ConsultantCol}><FaCheckCircle /> Rapid deployment
                                            using proven <strong>Power BI frameworks</strong></td>
                                    </tr>
                                    <tr>
                                        <td className={Style.CriteriaCol}>Scalability</td>
                                        <td className={Style.InhouseCol}><FaExclamationCircle /> Struggles with
                                            complex data models and growing users</td>
                                        <td className={Style.ConsultantCol}><FaCheckCircle /> Enterprise-grade,
                                            scalable architecture built for growth</td>
                                    </tr>
                                    <tr>
                                        <td className={Style.CriteriaCol}>Customization &amp; UX</td>
                                        <td className={Style.InhouseCol}><FaExclamationCircle /> Limited to basic
                                            visuals and static reporting</td>
                                        <td className={Style.ConsultantCol}><FaCheckCircle /> Advanced,
                                            interactive dashboards optimized for usability</td>
                                    </tr>
                                    <tr>
                                        <td className={Style.CriteriaCol}>Tool Optimization</td>
                                        <td className={Style.InhouseCol}><FaExclamationCircle /> Underutilized
                                            features, missed opportunities</td>
                                        <td className={Style.ConsultantCol}><FaCheckCircle /> Full leverage of
                                            DAX, Power Query & embedded analytics</td>
                                    </tr>
                                    <tr>
                                        <td className={Style.CriteriaCol}>Migration Capability</td>
                                        <td className={Style.InhouseCol}><FaExclamationCircle /> Higher risk of
                                            data loss during transitions</td>
                                        <td className={Style.ConsultantCol}><FaCheckCircle /> Smooth migration
                                            from legacy tools with zero data loss</td>
                                    </tr>
                                    <tr>
                                        <td className={Style.CriteriaCol}>Ongoing Support &amp; Training</td>
                                        <td className={Style.InhouseCol}><FaExclamationCircle /> Ad-hoc support,
                                            minimal training resources</td>
                                        <td className={Style.ConsultantCol}><FaCheckCircle /> Continuous support,
                                            training, and team upskilling</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className={`${Style.ContentDiv} pt-5 pb-5`}>
                    <div className="container m-auto headesc text-center mb-5">
                        <h2>Custom Power BI Dashboards for Smarter Insights</h2>
                        <p>
                            Our Power BI experts create interactive dashboards that do more than show numbers.
                            Each one is designed with purpose—helping your teams monitor KPIs, uncover insights,
                            and make faster, data-backed decisions with confidence.
                        </p>
                    </div>

                    <div className="container">
                        <div className="row">

                            <div className="col-md-6 mb-4">
                                <div className={Style.DashboardCard}>
                                    <h5>Healthcare</h5>
                                    <p>
                                        Gain a complete view of patient care and hospital operations. This dashboard highlights
                                        admissions, diagnostics, staffing, bed management, and equipment usage—helping medical
                                        teams
                                        improve efficiency, compliance, and patient outcomes.
                                    </p>
                                    <img src="images/services/service-inner/health-dashboard.png" alt="Healthcare Dashboard" />
                                </div>
                            </div>

                            <div className="col-md-6 mb-4">
                                <div className={Style.DashboardCard}>
                                    <h5>Ecommerce</h5>
                                    <p>
                                        Monitor sales performance, product categories, returns, and customer behavior with this
                                        ecommerce
                                        dashboard. Track sales by region, subcategories, and yearly trends to uncover insights
                                        and improve
                                        marketing and inventory decisions.
                                    </p>
                                    <img src="images/services/service-inner/e-commerce-dashboard.png" alt="Ecommerce Dashboard" />
                                </div>
                            </div>

                            <div className="col-md-6 mb-4">
                                <div className={Style.DashboardCard}>
                                    <h5>Finance</h5>
                                    <p>
                                        Analyze key economic indicators such as inflation, GDP, imports, exports, and healthcare
                                        spending
                                        with this finance dashboard. Gain insights into global and country-level economic
                                        performance for
                                        smarter financial strategies and policy planning.
                                    </p>
                                    <img src="images/services/service-inner/inflation-dashboard.png" alt="Finance Dashboard" />
                                </div>
                            </div>

                            <div className="col-md-6 mb-4">
                                <div className={Style.DashboardCard}>
                                    <h5>Entertainment</h5>
                                    <p>
                                        Explore content trends across movies and TV shows with this entertainment dashboard.
                                        Track category
                                        distribution, release years, countries, and genres to understand viewer demand and
                                        production insights.
                                    </p>
                                    <img src="images/services/service-inner/netflix-dashboard.png" alt="Entertainment Dashboard" />
                                </div>
                            </div>


                        </div>
                    </div>

                    <div class={`${Style.DashBtnBlock} mt-3 text-center`}>
                        <a href="/contact-us" class="button-red mt-2 mx-0">
                            Get Your Custom Dashboard Today
                        </a>
                    </div>
                </div>

                <div className={`${Style.ContentDiv} pt-5 pb-5`}>
                    <div className="container m-auto headesc text-center mb-5">
                        <h2>Why Choose Tech2Globe for Microsoft Power BI Consulting Services?</h2>
                        <p>Your trusted partner to design, scale, and optimize a future-ready <strong>business intelligence
                            ecosystem</strong>.</p>
                    </div>

                    <div className="container">
                        <div className="row">

                            <div className={`${Style.FeatureBox} col-md-6 mb-3 h-100`}>
                                <div className={Style.FeatureIcon}>
                                    <FaUserTie />
                                </div>
                                <div>
                                    <div className={Style.FeatureTitle}>Proven BI Expertise Across Industries</div>
                                    <p>With extensive experience delivering <strong>Power BI consulting solutions</strong>,
                                        we&apos;ve worked with businesses in healthcare, retail, manufacturing, finance, and beyond.
                                        Our industry-specific insights ensure we build dashboards and reports that solve
                                        real-world challenges and generate measurable results.</p>
                                </div>
                            </div>

                            <div className={`${Style.FeatureBox} col-md-6 mb-3 h-100`}>
                                <div className={Style.FeatureIcon}>
                                    <FaProjectDiagram />
                                </div>
                                <div>
                                    <div className={Style.FeatureTitle}>End-to-End Microsoft Power BI Consulting</div>
                                    <p>From BI strategy and data modeling to dashboard development, optimization, and training,
                                        Tech2Globe manages the full <strong>Power BI implementation journey</strong>. Our goal:
                                        to maximize ROI and create scalable, future-proof business intelligence systems.</p>
                                </div>
                            </div>

                            <div className={`${Style.FeatureBox} col-md-6 mb-3 h-100`}>
                                <div className={Style.FeatureIcon}>
                                    <FaCertificate />
                                </div>
                                <div>
                                    <div className={Style.FeatureTitle}>Microsoft-Certified Power BI Experts</div>
                                    <p>Our team of certified consultants applies the latest Power BI features, governance best
                                        practices, and security standards. This ensures your business intelligence environment
                                        is robust, scalable, and adaptable to evolving needs.</p>
                                </div>
                            </div>

                            <div className={`${Style.FeatureBox} col-md-6 mb-3 h-100`}>
                                <div className={Style.FeatureIcon}>
                                    <FaSun />
                                </div>
                                <div>
                                    <div className={Style.FeatureTitle}>Tailored BI Solutions, Not Templates</div>
                                    <p>We don&apos;t believe in cookie-cutter dashboards. Every solution we create is customized to
                                        your KPIs, workflows, and business goals—delivering relevant, real-time insights that
                                        improve adoption and drive impact across teams.</p>
                                </div>
                            </div>

                            <div className={`${Style.FeatureBox} col-md-6 mb-3 h-100`}>
                                <div className={Style.FeatureIcon}>
                                    <FaBolt />
                                </div>
                                <div>
                                    <div className={Style.FeatureTitle}>Agile Delivery, Faster ROI</div>
                                    <p>Our agile methodology ensures rapid delivery without compromising quality. We roll out
                                        MVP dashboards quickly, then refine and scale—helping you see value faster while
                                        maintaining performance and governance.</p>
                                </div>
                            </div>

                            <div className={`${Style.FeatureBox} col-md-6 mb-3 h-100`}>
                                <div className={Style.FeatureIcon}>
                                    <FaChartLine />
                                </div>
                                <div>
                                    <div className={Style.FeatureTitle}>Collaboration & Knowledge Transfer</div>
                                    <p>We work closely with your internal teams, offering workshops, documentation, and hands-on
                                        <strong>Power BI training</strong>. This ensures your business gains not just
                                        dashboards, but long-term self-sufficiency and confidence in analytics.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={`${Style.FtBtnBlock} mt-3 text-center`}>
                        <a href="/contact-us" className="button-red mt-2 mx-0">
                            Experience the Tech2Globe Advantage</a>
                    </div>
                </div>

                <BiConsultingSlider />

                <div className={`${Style.ContentDiv} bg-dark text-light py-5`}>
                    <div className="container m-auto headesc text-center mb-5">
                        <h2 className="text-white">Industries We Empower with Power BI Consulting</h2>
                        <p className="text-white">Tech2Globe delivers <strong>Power BI analytics solutions</strong> tailored to
                            diverse industries—helping organizations unlock data-driven insights, optimize operations, and
                            achieve measurable growth.</p>
                    </div>

                    <div className="container">
                        <div className="row g-4">

                            <div className="col-md-6 col-lg-4">
                                <div className={`${Style.IndustryCard} card h-100 text-center p-4`}>
                                    <FaShoppingCart />
                                    <h3 className="fw-medium">Retail, CPG & E-Commerce</h3>
                                    <p>Leverage <strong>real-time retail analytics</strong> to track sales, customer behavior,
                                        and inventory. We empower brands to optimize pricing, promotions, and supply chain
                                        efficiency with data-driven strategies.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className={`${Style.IndustryCard} card h-100 text-center p-4`}>
                                    <FaHeartbeat />
                                    <h3 className="fw-medium">Healthcare</h3>
                                    <p>Improve patient care and operational efficiency with <strong>healthcare BI
                                        solutions</strong>. From patient outcomes to hospital workflows and compliance, our
                                        dashboards enable smarter, faster decisions.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className={`${Style.IndustryCard} card h-100 text-center p-4`}>
                                    <FaBuilding />
                                    <h3 className="fw-medium">Construction</h3>
                                    <p>Track budgets, schedules, and resource allocation with <strong>construction
                                        analytics</strong>. Our Power BI dashboards provide clear visibility into projects,
                                        minimizing risks and boosting profitability.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className={`${Style.IndustryCard} card h-100 text-center p-4`}>
                                    <FaDollarSign />
                                    <h3 className="fw-medium">Finance & Banking</h3>
                                    <p>Turn complex financial data into actionable insights. From risk management to compliance
                                        and portfolio tracking, our <strong>Power BI consulting for finance</strong> ensures
                                        transparency and agility.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className={`${Style.IndustryCard} card h-100 text-center p-4`}>
                                    <FaMicrochip />
                                    <h3 className="fw-medium">Technology & ISVs</h3>
                                    <p>Accelerate growth with <strong>analytics for SaaS & ISVs</strong>. We help tech providers
                                        gain product intelligence, monitor adoption, and reduce churn with real-time reporting
                                        and advanced BI solutions.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className={`${Style.IndustryCard} card h-100 text-center p-4`}>
                                    <FaBullhorn />
                                    <h3 className="fw-medium">Marketing & Sales</h3>
                                    <p>Unify campaign, lead, and revenue data into one view. Our <strong>marketing & sales BI
                                        dashboards</strong> help teams refine performance, measure ROI, and scale customer
                                        acquisition with precision.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={Style.ContentDiv}>
                    <div className="container m-auto headesc text-center pt-5 mb-5">
                        <h2>Technologies We Use for Microsoft Power BI Consulting Services</h2>
                        <p className="mb-2">Modern Data Stack Expertise to Power Your BI Initiatives</p>
                        <p>From real-time streaming to cloud warehousing, we integrate Power BI with leading technologies to
                            ensure agility, scalability, and performance.</p>
                    </div>

                    <div className="container d-flex flex-wrap justify-content-center align-items-center gap-3 pb-5">
                        <img src="images/services/bi-technologies/amazon-redshift.png" alt="Amazon Redshift integration with Power BI"
                            title="Amazon Redshift for scalable Power BI data warehousing" className="img-fluid" />

                        <img src="images/services/bi-technologies/aws.png" alt="AWS cloud services with Power BI"
                            title="AWS cloud integration for Power BI analytics" className="img-fluid" />

                        <img src="images/services/bi-technologies/google-big-query.png" alt="Google BigQuery integration with Power BI"
                            title="BigQuery for high-performance Power BI reporting" className="img-fluid" />

                        <img src="images/services/bi-technologies/delta-lake.png" alt="Delta Lake integration with Power BI"
                            title="Delta Lake for real-time Power BI data pipelines" className="img-fluid" />

                        <img src="images/services/bi-technologies/elastic-search.png" alt="Elasticsearch integration with Power BI"
                            title="Elasticsearch for advanced Power BI search and analytics" className="img-fluid" />

                        <img src="images/services/bi-technologies/hadoop.png" alt="Hadoop ecosystem integration with Power BI"
                            title="Hadoop for big data insights in Power BI" className="img-fluid" />

                        <img src="images/services/bi-technologies/kafka.png" alt="Apache Kafka integration with Power BI"
                            title="Kafka for real-time streaming analytics in Power BI" className="img-fluid" />

                        <img src="images/services/bi-technologies/nifi.png" alt="Apache NiFi integration with Power BI"
                            title="NiFi for automated data flows into Power BI" className="img-fluid" />

                        <img src="images/services/bi-technologies/snowflake.png" alt="Snowflake integration with Power BI"
                            title="Snowflake cloud data platform for Power BI" className="img-fluid" />

                        <img src="images/services/bi-technologies/apache-spark.png" alt="Apache Spark integration with Power BI"
                            title="Spark for fast data processing in Power BI" className="img-fluid" />
                    </div>
                </div>

                <div className={`${Style.ContentDiv} py-5 position-relative bg-light`}>
                    <div className="container m-auto headesc text-center mb-5">
                        <h2>Our Engagement Models</h2>
                        <p>
                            We offer flexible engagement models tailored to your goals—whether you need end-to-end delivery,
                            expert support, or strategic guidance.
                        </p>
                    </div>

                    <div className={Style.MovingBg}></div>

                    <div className="container engagement-models">
                        <div className="row g-4 justify-content-center">

                            <div className="col-md-6 col-lg-5">
                                <div className={`${Style.EnCard} card h-100 shadow-sm border-0 rounded-4 p-4`}>
                                    <div className="text-orange mb-3 fs-2" aria-label="Project Delivery Model">
                                        <FaProjectDiagram />
                                    </div>
                                    <h5 className="fw-bold">Project-Focused Power BI Delivery</h5>
                                    <p>
                                        Perfect for organizations with clear objectives and timelines.
                                        We handle everything—from requirements to deployment—ensuring quality outcomes
                                        with minimal internal effort.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-5">
                                <div className={`${Style.EnCard} card h-100 shadow-sm border-0 rounded-4 p-4`}>
                                    <div className="text-orange mb-3 fs-2" aria-label="Dedicated Experts Model">
                                        <FaUsersCog />
                                    </div>
                                    <h5 className="fw-bold">Dedicated Microsoft Power BI Experts</h5>
                                    <p>
                                        Need long-term expertise? Our certified BI professionals integrate
                                        seamlessly with your team, scaling resources as project needs grow.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-5">
                                <div className={`${Style.EnCard} card h-100 shadow-sm border-0 rounded-4 p-4`}>
                                    <div className="text-orange mb-3 fs-2" aria-label="Consulting & Advisory Model">
                                        <FaLightbulb />
                                    </div>
                                    <h5 className="fw-bold">Power BI Consulting & Advisory</h5>
                                    <p>
                                        Unsure where to start? We help define your BI roadmap, pick the right
                                        architecture, and coach teams with proven best practices for success.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-5">
                                <div className={`${Style.EnCard} card h-100 shadow-sm border-0 rounded-4 p-4`}>
                                    <div className="text-orange mb-3 fs-2" aria-label="Support & Optimization Model">
                                        <FaScrewdriver />
                                    </div>
                                    <h5 className="fw-bold">Power BI Support & Optimization</h5>
                                    <p>
                                        Already using Power BI? We fine-tune performance, resolve data issues,
                                        enhance dashboards, and upskill your team for maximum ROI.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={`${Style.ContentDiv} bg-dark text-light py-5`}>
                    <div className="container m-auto headesc text-center mb-5">
                        <h2 className="text-white">Get Started with Our Power BI Consulting Process</h2>
                    </div>

                    <div className="container">
                        <div className="row g-4">

                            <div className="col-md-6 col-lg-3">
                                <div className={`${Style.StepCard} card h-100 bg-dark text-light border-0 text-center`}>
                                    <div className={`${Style.ImageWrapper} mx-auto mb-3`}>
                                        <img src="/images/services/service-inner/contact-us.png"
                                            alt="Step 1: Contact us for Power BI consulting" className="img-fluid"
                                            title="Connect with Us" />
                                    </div>
                                    <h6 className="text-secondary">Step 1</h6>
                                    <h5 className={Style.TextOrange}>Connect with Us</h5>
                                    <p className="text-white">
                                        Schedule a discovery call so we can understand your current BI setup, reporting needs,
                                        and business goals.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3">
                                <div className={`${Style.StepCard} card h-100 bg-dark text-light border-0 text-center`}>
                                    <div className={`${Style.ImageWrapper} mx-auto mb-3`}>
                                        <img src="images/services/service-inner/project-plan.png"
                                            alt="Step 2: Power BI project planning and roadmap design" className="img-fluid"
                                            title="Assess & Plan" />
                                    </div>
                                    <h6 className="text-secondary">Step 2</h6>
                                    <h5 className={Style.TextOrange}>Assess & Plan</h5>
                                    <p className="text-white">
                                        Our BI experts review your data sources, challenges, and needs, then design the right
                                        roadmap and architecture.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3">
                                <div className={`${Style.StepCard} card h-100 bg-dark text-light border-0 text-center`}>
                                    <div className={`${Style.ImageWrapper} mx-auto mb-3`}>
                                        <img src="images/services/service-inner/dashboard.png"
                                            alt="Step 3: Build prototype Power BI dashboards with KPIs" className="img-fluid"
                                            title="Prototype Dashboards" />
                                    </div>
                                    <h6 className="text-secondary">Step 3</h6>
                                    <h5 className={Style.TextOrange}>Prototype Dashboards</h5>
                                    <p className="text-white">
                                        We build a quick dashboard prototype with key KPIs to validate design, usability, and
                                        performance.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-3">
                                <div className={`${Style.StepCard} card h-100 bg-dark text-light border-0 text-center`}>
                                    <div className={`${Style.ImageWrapper} mx-auto mb-3`}>
                                        <img src="images/services/service-inner/rocket-new.png"
                                            alt="Step 4: Full Power BI implementation and deployment" className="img-fluid"
                                            title="Full Implementation" />
                                    </div>
                                    <h6 className="text-secondary">Step 4</h6>
                                    <h5 className={Style.TextOrange}>Full Implementation</h5>
                                    <p className="text-white">
                                        From modeling and governance to deployment and training—we deliver scalable BI solutions
                                        that drive adoption.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



                <div className={`${Style.ContentDiv} py-5 bg-light`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className={`${Style.Headesc} text-center text-lg-start mb-5 position-sticky`}>
                                    <h2>Frequently Asked Questions about Power BI Consulting</h2>
                                    <p>Have questions? We&apos;ve answered the most common ones to help you better understand our
                                        Microsoft Power BI consulting services, process, and benefits.</p>
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <div className="accordion" id="faqAccordion">

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                1. What services are included in Microsoft Power BI consulting?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show"
                                            aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Power BI consulting typically covers dashboard development, data modeling, DAX
                                                optimization, integration with multiple data sources, and user training. At
                                                Tech2Globe, we go further by offering enterprise deployment, governance, and
                                                performance optimization.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                2. Why should I work with a dedicated Power BI consulting team?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                            data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                A dedicated Power BI consulting team ensures faster implementation, customized
                                                solutions, and ongoing support. They reduce risks, improve efficiency, and
                                                maximize ROI by aligning Power BI solutions with your business goals.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree" aria-expanded="false"
                                                aria-controls="collapseThree">
                                                3. How do I choose the right Power BI consulting partner?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse"
                                            aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Look for a partner with certified Power BI experts, proven client success
                                                stories, industry experience, and the ability to deliver secure, scalable BI
                                                solutions. Industry knowledge and customization are key factors.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour" aria-expanded="false"
                                                aria-controls="collapseFour">
                                                4. Can Power BI consulting services integrate with cloud-based data?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                            data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Yes. Our consultants integrate Power BI with leading cloud platforms like Azure,
                                                AWS, and Google Cloud to ensure seamless connectivity, scalability, and
                                                performance.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive" aria-expanded="false"
                                                aria-controls="collapseFive">
                                                5. Can you help with self-service BI adoption using Power BI?
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                            data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Absolutely. We empower business users with self-service analytics in Power BI
                                                while maintaining enterprise-level governance, security, and compliance.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSix">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                6. Which industries benefit most from Power BI consulting?
                                            </button>
                                        </h2>
                                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                            data-bs-parent="#faqAccordion">
                                            <div className="accordion-body">
                                                Industries such as healthcare, retail, finance, manufacturing, and logistics
                                                gain tremendous value by using Power BI for real-time reporting, predictive
                                                analytics, and strategic decision-making.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Style.ContentDiv}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className={`${Style.CtaSection} text-center mt-5 mb-3 p-5 rounded-3`}>
                                    <h2 className="text-white mb-3">Ready to Turn Your Data into Smarter Decisions?</h2>
                                    <p className="text-white mb-4">
                                        Partner with a trusted <strong>Microsoft Power BI consulting company</strong> that brings technical
                                        depth,
                                        industry expertise, and end-to-end execution capabilities. <br />
                                        <span className="fw-bold">Tech2Globe helps you unlock the full potential of Microsoft Power BI.</span>
                                    </p>
                                    <div className={`${Style.BtnBlock} d-flex flex-column flex-sm-row justify-content-center gap-3`}>
                                        <a href="/contact-us" className="button-red">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
};