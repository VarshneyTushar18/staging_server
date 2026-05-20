import Style from "./style.module.css";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import './custom.css';
import { FaCheck } from "react-icons/fa";


export const metadata = {
    title: "Hire Startup Consultants | Startup Consulting Services - Tech2globe",
    description:
        "Our Start-up consulting services help fast-growth businesses and entrepreneurs through every step of their journey to become global leaders.",
    alternates: {
        canonical: "https://www.tech2globe.com/startup-consulting",
    },
    openGraph: {
        title: "Hire Startup Consultants | Startup Consulting Services - Tech2globe",
        description:
            "Our Start-up consulting services help fast-growth businesses and entrepreneurs grow globally.",
        siteName: "Tech2Globe Web Solutions LLP",
        url: "https://www.tech2globe.com/startup-consulting",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hire Startup Consultants | Startup Consulting Services - Tech2globe",
        description:
            "Startup consulting services to help entrepreneurs scale and succeed globally.",
    },
};



export default function StartupConsulting() {
    return (
        <>
            <div className="jumbotron mb-0">
                <div className="jumbotron-background"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-start my-4">
                            <div className="row">
                                <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                                    <div className="row">
                                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h1 className="jumbotron-title fw-bold">Startup Consulting Services</h1>
                                            <p>Every other startup owner initially feels unsure and lost. Plus, operating on limited resources can be perplexing to choose the right direction. Hence, hiring consulting services for startups is a lucrative way to excel.</p>
                                        </div>

                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                            <a href="/contact-us" className="btn btn-danger d-none d-sm-block border-0">Let's Talk »</a>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="h-100 d-flex justify-content-center align-items-center">
                                        <div className="hero-image-container">
                                            <img src="images/services/service-inner/startup_consulting_banner-top-h.svg" className="img-fluid" alt="startup_consulting" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="partners-area d-none d-sm-block pt-5 pb-3">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
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

                </div>

            </div>
            <Breadcrumb pageName="Startup Consulting Services" />

            <div className={Style.PageContent}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <Image src="images/services/service-inner/project-prototyping.svg" alt="Startup Consulting Services" width={489} height={406} className="img-fluid" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <h2 className="text-danger">Startup Consulting Services</h2>
                            <hr />

                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                    <Image src="images/services/service-inner/improves-quality.svg" alt="Experienced team" width={80} height={80} className="img-fluid" />
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                    <h4>Experienced team</h4>
                                    <p>It's essential to have your startup consultant on hand to spot potential difficulties early on. You may successfully manage your startup business with the aid of a dependable team of experts, who can provide helpful counsel and additional experience for expanding your organization.</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                    <Image src="images/services/service-inner/user-involvement.svg" alt="Every step for achieving business objectives" width={80} height={80} className="img-fluid" />
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                    <h4>Every step for achieving business objectives</h4>
                                    <p>Flag off your potential success journey by working with experts to identify specific business steps. Plan a proper launch with your business startup consultants by ensuring that all the preliminary stages are complete. Professional startup consulting services provide temporarily added assistance to execute tasks and objectives to meet these business goals.</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                    <Image src="images/services/service-inner/reduce-time-cost.svg" alt="Comprehensive process" width={80} height={80} className="img-fluid" />
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                    <h4>Comprehensive process</h4>
                                    <p>Our business startup growth experts provides clients assistance in expanding their start-up businesses. If you join hands with us from the very beginning, the results will be of greater quality. We offer support to clients as needed during the crucial early phases of a startup.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-5 pb-5">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h2>Hire Startup Consultants To Scale Up Your Business</h2>
                            <p>Starting anything new is an overwhelming experience that comes with many unknowable aspects to take into account as an entrepreneur. Thus, it is no less than a challenge to getting started. Newer businesses can benefit from startup consulting firms providing fundamental servicer for business development. The certainty of success become clearer and increases by having access to expert assistance.</p>
                            <p>At Tech2Globe, we provide the knowledge and experience to guide you every step of the way to help you save capital, time, and effort. Our team of seasoned professionals have specialized skills in entrepreneurship mentoring and teaching. With practical instruction, we focus on achieving desired aspects and needs by working on specific activities in a scheduled time frame, which would be ineffective if ignored!</p>
                        </div>
                        <div className="container-time">
                            <div className="timeline-block timeline-block-right">
                                <div className="marker active">
                                    <FaCheck />
                                </div>
                                <div className="timeline-content">
                                    <h3>Strategic Planning</h3>
                                    <span>Analysis, data, and strategy are all tools that falls under the services for startups. Furthermore, consultants use these to assist customers properly. We’ll take you to the crucial milestones from the beginning of the business. With some trust and appropriate skills, it’s all possible. </span>
                                </div>
                            </div>
                            <div className="timeline-block timeline-block-left active">
                                <div className="marker">
                                    <FaCheck />
                                </div>
                                <div className="timeline-content">
                                    <h3>Research on Marketing and Sales</h3>
                                    <span>We extend our business startup consulting services by helping our clients with market and sales research. This is consequential process as it helps startups adopt a more results-oriented approach. From the initial phase, marketing and sales initiatives are improved for better outcomes.</span>
                                </div>
                            </div>
                            <div className="timeline-block timeline-block-right active">
                                <div className="marker active">
                                    <FaCheck />
                                </div>
                                <div className="timeline-content">
                                    <h3>Business Establishment</h3>
                                    <span>Creating a framework is crucial for every company. Furthermore, clients must create a legal framework for their company. Our consultants' recommendations will take you through the benefits and drawbacks of options including sole proprietorship, corporations, and LLCs. </span>
                                </div>
                            </div>
                            <div className="timeline-block timeline-block-left active">
                                <div className="marker">
                                    <FaCheck />
                                </div>
                                <div className="timeline-content">
                                    <h3>Structural Development</h3>
                                    <span>All startups have to execute multiple items and steps simultaneous. Our consultants will help you execute major critical steps in all stages of the business.</span>
                                </div>
                            </div>
                            <div className="timeline-block timeline-block-right active">
                                <div className="marker">
                                    <FaCheck />
                                </div>
                                <div className="timeline-content">
                                    <h3>Scaling</h3>
                                    <span>Our association and expertise can help you build a roadmap to scaling your startup and increasing overall revenue. The assistance of our developers and management consulting professionals is always there to boost your belief.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="startupbg my-5">
                    <div class="container">
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <h2 class="text-center">Tech2Globe has been a Prominent Part of Many Startups with Robust Expertise &amp; Consistent Implementation</h2>
                            <p class="pb-3 text-center">We have made endeavours that are our testament of how our startup consultants have assisted several startups in determining their future course. Tech2Globe have assisted them by developing strong business plans from inception and putting them into action. Our efforts have enabled those businesses to improve enterprise values for both investors and founders, maximizing their business valuation. We are a group of proficient startup consulting professionals with the necessary connections in the market. Moreover, we have a strong hold on effective tactics that can be used to transform firms into future-ready enterprises and ensure their success.</p>
                            <div class="row pt-2 mt-2">
                                <form id="contactForm" className={Style.Formbox}>
                                    <div className="row">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="mb-3">
                                                <label><strong>Name</strong></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your Name"
                                                    name="name"
                                                    value=""

                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="mb-3">
                                                <label><strong>Email</strong></label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Your Email ID"
                                                    name="mailid"
                                                    value=""

                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="mb-3">
                                                <label><strong>Phone</strong></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Your Phone Number"
                                                    name="phone"
                                                    value=""


                                                    minLength={10}
                                                    maxLength={13}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="mb-3">
                                                <label><strong>Country</strong></label>
                                                <select
                                                    className="form-control"
                                                    name="countrycode"
                                                    value=""

                                                    required
                                                >
                                                    <option value="">Select Country</option>
                                                    <option value="+1">+1 USA</option>
                                                    <option value="+44">+44 UK</option>
                                                    <option value="+91">+91 India</option>
                                                    {/* Add more country codes here */}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="mb-3">
                                                <label><strong>Comments</strong></label>
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Enter Your Text"
                                                    name="comment"
                                                    value=""
                                                    rows="5"
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Honeypot Field */}
                                    <input type="text" name="website" className="d-none" />

                                    {/* Cloudflare Turnstile */}
                                    <div
                                        className="cf-turnstile"
                                        data-sitekey="0x4AAAAAAAZkfkKo2ooZlFK4"
                                        data-theme="light"
                                    ></div>

                                    <button type="submit" className="btn btn-danger mt-3" id="contactFormSubmitBtn">
                                        Submit
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                <h2>Why Choose Tech2Globe For Comprehensive Startup Consulting Services?</h2>
                                <p>Tech2Globe is one of the leading startup consulting firms, primarily working in the USA, UK, Canada, India, and Dubai. With more than 14 years of industry experience, we have developed enormous expertise in increasing the performance and scalability standard for numerous firms. We work with startup businesses to assist them advance to the next stage of their development. Additionally, our knowledgeable and versed consultants can help you build capital investment strategies, improve operations, develop development strategies, and innovate company models.</p>
                            </div>
                        </div>
                        <div className="row pt-4">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
                                <Image src="/images/services/service-inner/one-01.svg" width={199} height={247} className="img-fluid mb-3" alt="startup-consulting-1" />
                                <h5>Successful Startup Scaling</h5>
                                <p>We are a world leader in assisting companies in scaling. By putting in place crucial infrastructure, we become their guiding light to support their ongoing expansion.</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
                                <Image src="/images/services/service-inner/one-02.svg" width={199} height={247} className="img-fluid mb-3" alt="Optimistic Approach" />
                                <h5>Optimistic Approach</h5>
                                <p>To meet our client’s needs and preferences, we make investments in the wellbeing of our experts. We encourage them to have a positive attitude at work and go above and beyond.</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
                                <Image src="/images/services/service-inner/one-03.svg" width={199} height={247} className="img-fluid mb-3" alt="Digital Arena Geeks" />
                                <h5>Digital Arena Geeks</h5>
                                <p>No process today is completed without the presence of technology. We firmly believe in providing marketing experts technological improvements which can result in significant changes for brands.</p>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
                                <Image src="/images/services/service-inner/one-04.svg" width={199} height={247} className="img-fluid mb-3" alt="Innovative Direction" />
                                <h5>Innovative Direction</h5>
                                <p>We constantly innovate and improve to offer you cutting-edge web design and online marketing services to draw organic target audience for your business.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-light pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                <h2>Tech2Globe a Helping Hand in a Startup Success Journey</h2>
                                <p>To give you a 360-degree view of the industry, we adhere to a framed process. We collaborate with aspiring business owners to transform their ideas into practical realities. Tech2Globe become the direction the startup owner require to move forward effectively. Moreover, to ensure you are always on the right path we exercise our extensive industry experience at every step.</p>
                                <p>As a general overview of the critical procedures we follow while working with your company, here are some examples:</p>
                                <h4>Premeditated Planning Approach</h4>
                                <p>While planning is essential to the outset of any effort, it takes on even greater importance when managing a startup. Additionally, outlining a success path for your business serves as the foundation of it.</p>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="bg-white my-3 p-3 border border-3 rounded h-100 border-warning pb-0">
                                    <div className="text-center">
                                        <Image src="/images/services/service-inner/working01.svg" alt="Planning Proposal" width={207} height={125} className="img-fluid" />
                                        <h3 class="fw-bold h5 py-3">Planning Proposal</h3>
                                    </div>
                                    <p>Our consultation can help you assess the capabilities of your business by learning about potential opportunities and limitations inside your new venture. Furthermore, to outline step-by-step operational activities for strategic expansion, a thorough structural view is required.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="bg-white my-3 p-3 border border-3 rounded h-100 border-warning pb-0">
                                    <div className="text-center">
                                        <Image src="/images/services/service-inner/working02.svg" alt="Cash Flow Administration" width={207} height={125} className="img-fluid" />
                                        <h3 class="fw-bold h5 py-3">Cash Flow Administration</h3>
                                    </div>
                                    <p>The cash flow operations are tailored by our business startup consultants after developing a methodical plan of action. This entails evaluating the sum of money required to fund the normal operations to ascertain the working capital of your company. The procedure facilitates the planning of an accurate budget for all future operational tasks.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="bg-white my-3 p-3 border border-3 rounded h-100 border-warning pb-0">
                                    <div className="text-center">
                                        <Image src="/images/services/service-inner/working03.svg" alt="Identifying the Target Market" width={207} height={125} className="img-fluid" />
                                        <h3 class="fw-bold h5 py-3">Identifying the Target Market</h3>
                                    </div>
                                    <p>Hire startup consultants like us to get your audience figures based on market research and competitive analysis. Our knowledgeable consultants work in tandem by keeping research and development as their primary principal. Additionally, we help you identify the target market for a subset of your company's intended market.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <div className="bg-white my-3 p-3 border border-3 rounded h-100 border-warning pb-0">
                                    <div className="text-center">
                                        <Image src="/images/services/service-inner/working04.svg" alt="Budgeting and Resource Division" width={207} height={125} className="img-fluid" />
                                        <h3 class="fw-bold h5 py-3">Budgeting and Resource Division</h3>
                                    </div>
                                    <p>Not only internal, a startup also consist for peripheral objectives, and each one needs to be given access to relevant resources. With their years of experience, our experts can allocate resources smartly and create a thorough budget for how the money will be used.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                <h2>Industries we serve <span className="text-danger text-decoration-underline">whom we cater to?</span></h2>
                                <p>Advanced technologies enable businesses to streamline and optimize their operations, leading to increased scalability. By automating processes, businesses can organize their operations and achieve greater efficiency. Tech2Globe provides top-notch technology solutions that support digital transformation, driving long-term growth and accelerating various processes.</p>
                            </div>
                            <div className="row pt-3">
                                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-center">
                                    <div className="card border-0 shadow p-3 rounded h-100">
                                        <div className="text-center">
                                            <Image src="/images/services/service-inner/Health-Care.svg" alt="Health Care" width={82} height={82} className="img-fluid object-fit-cover" />
                                        </div>
                                        <h6 className="pt-2 fw-normal">Health Care</h6>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-center">
                                    <div className="card border-0 shadow p-3 rounded h-100">
                                        <div className="text-center">
                                            <Image src="/images/services/service-inner/Real-Estate.svg" alt="Real Estate" width={82} height={82} className="img-fluid object-fit-cover" />
                                        </div>
                                        <h6 className="pt-2 fw-normal">Real Estate</h6>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-center">
                                    <div className="card border-0 shadow p-3 rounded h-100">
                                        <div className="text-center">
                                            <Image src="/images/services/service-inner/Food-Beverages.svg" alt="Food & Beverages" width={82} height={82} className="img-fluid object-fit-cover" />
                                        </div>
                                        <h6 className="pt-2 fw-normal">Food & Beverages</h6>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-center">
                                    <div className="card border-0 shadow p-3 rounded h-100">
                                        <div className="text-center">
                                            <Image src="/images/services/service-inner/Retail-E-Commerce.svg" alt="Retail & E-commerce" width={82} height={82} className="img-fluid object-fit-cover" />
                                        </div>
                                        <h6 className="pt-2 fw-normal">Retail & E-commerce</h6>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-center">
                                    <div className="card border-0 shadow p-3 rounded h-100">
                                        <div className="text-center">
                                            <Image src="/images/services/service-inner/travel-hospitality.svg" alt="Travel and Hospitality" width={82} height={82} className="img-fluid object-fit-cover" />
                                        </div>
                                        <h6 className="pt-2 fw-normal">Travel and Hospitality</h6>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-center">
                                    <div className="card border-0 shadow p-3 rounded h-100">
                                        <div className="text-center">
                                            <Image src="/images/services/service-inner/learning-management-icon.svg" alt="Education & Learning" width={82} height={82} className="img-fluid object-fit-cover" />
                                        </div>
                                        <h6 className="pt-2 fw-normal">Education & Learning</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-light pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"><span className="text-danger text-decoration-underline">Tools</span> AI</h2>
                            <div className="row pt-3">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                                    <div className="card p-3 shadow rounded border-0 h-100">
                                        <Image src="/images/services/service-inner/Chatbots.jpg" alt="Chatbot" width={1000} height={647} className="img-fluid object-fit-cover mb-3" />
                                        <h5 className="text-danger">Chatbots</h5>
                                        <p>Our experts help your startup business in taking customer engagement to another level with the use of conversational AI bots.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                                    <div className="card p-3 shadow rounded border-0 h-100">
                                        <Image src="/images/services/service-inner/email-automation.png" alt="Email Automation" width={1000} height={647} className="img-fluid object-fit-cover mb-3" />
                                        <h5 className="text-danger">Email Automation</h5>
                                        <p>You can be liberated from doing repetitive tasks with the help of automated email. This will ultimately help your consumers to learn more about your brand and will ease your work.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                                    <div className="card p-3 shadow rounded border-0 h-100">
                                        <Image src="/images/services/service-inner/Reporting-Automation.png" alt="Reporting Automation" width={1000} height={647} className="img-fluid object-fit-cover mb-3" />
                                        <h5 className="text-danger">Reporting Automation</h5>
                                        <p>This AI tool helps to produce reports within no time and reduces the hassles you intake. This advanced solution creates reliable and correct reports using your business data.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                <h2>Traditional Marketing</h2>
                                <p>No doubt that digital marketing has taken the world by storm. But traditional marketing still holds value in the sphere. All startups can benefit from classic PR campaigns such as print media, billboard signs, advertisements, and events if their budget allows. We understand the market structure and ecosystem and can help define cross-channel promotion strategies for every stage of your business, ensuring timely and effective distribution.</p>
                            </div>
                            <div className="row pt-3">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                                    <Image src="/images/services/service-inner/Printmedia.webp" alt="Print Media" width={640} height={640} className="img-fluid object-fit-cover" />
                                    <h4 className="text-danger pt-3">Print Media</h4>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                                    <Image src="/images/services/service-inner/billboard.jpg" alt="Billboard signs" width={640} height={640} className="img-fluid object-fit-cover" />
                                    <h4 className="text-danger pt-3">Billboard signs</h4>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 text-center">
                                    <Image src="/images/services/service-inner/events.jpg" alt="Events" width={640} height={640} className="img-fluid object-fit-cover" />
                                    <h4 className="text-danger pt-3">Events</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="BlogSection bg-light pt-5 pb-5">
                    <div className="container">
                        <div className="row pb-3">
                            <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                <h2>Startup consulting Blogs</h2>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-end">
                                <Link href="https://blog.tech2globe.com/" className="btn button-red rounded-0">View All</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <Image src="/images/services/service-inner/1646029551341-1.jpg" alt="Everything You Need to Know About Hiring One" width={1280} height={720} className="img-fluid mb-3" />
                                <h5 className="text-danger">Everything You Need to Know About Hiring One</h5>
                                <p className="mb-3">Starting a business can be fun but difficult. From coming up with a business plan to getting the right funding, there are a lot of things to think about. Startup consultants help with this. A startup...</p>
                                <Link href="https://blog.tech2globe.com/everything-you-need-know-before-hiring-starup-consultants/" className="btn button-red rounded-0 m-0">Read More</Link>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <Image src="/images/services/service-inner/Top-10-Reasons-Why-You-Need-To-Hire-A-Business-Consultant.jpg" alt="How Can Startups Companies Benefit..." width={1280} height={720} className="img-fluid mb-3" />
                                <h5 className="text-danger">How Can Startups Companies Benefit...</h5>
                                <p className="mb-3">For first-time business owners, starting a business can be a daunting endeavor. From making a business plan to getting money and launching your product or service, there are many things to think about...</p>
                                <Link href="https://blog.tech2globe.com/how-can-startups-companies-benefit-from-startup-consulting-services/" className="btn button-red rounded-0 m-0">Read More</Link>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <Image src="/images/services/service-inner/1658494819262_cleanup.png" alt="How to Choose the Right Consultant..." width={1280} height={720} className="img-fluid mb-3" />
                                <h5 className="text-danger">How to Choose the Right Consultant...</h5>
                                <p className="mb-3">An Amazon account suspension can be a nightmare for any seller’. You have worked hard to establish a successful business, and then suddenly, everything comes to a grinding halt.  During this...</p>
                                <Link href="https://blog.tech2globe.com/how-choose-right-consultant-for-your-startup-business/" className="btn button-red rounded-0 m-0">Read More</Link>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                <Image src="/images/services/service-inner/cover-image-why-an-it-consulting-company-can-help-you-hzcw.png" alt="Top 10 Startup Consulting Companies..." width={1280} height={720} className="img-fluid mb-3" />
                                <h5 className="text-danger">Top 10 Startup Consulting Companies...</h5>
                                <p className="mb-3">Since their business operations and organisational structure are still evolving, startups may need assistance along the way. Startup consulting companies are essential in the beginning since they give...</p>
                                <Link href="https://blog.tech2globe.com/top-10-startup-consulting-companies-that-you-should-know/" className="btn button-red rounded-0 m-0">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div >


        </>
    )
}