import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import FaqSection from "@/app/components/services/faqs/faqs";
import { FaBroom, FaDesktop, FaLaptop, FaNewspaper, FaSmile } from "react-icons/fa";
import "./custom.css";

export const metadata = {
  title: "Performance Marketing Packages @Enhanced ROI & Conversions",
  description:
    "Performance Marketing Packages to grow your business faster online. ✔ROI Based Packages ✔Free Audit & Plans ✔7000+ Successful Projects ✔Certified Experts",
  keywords: [
    "Performance Marketing Packages",
    "Performance Marketing Prices",
    "Performance Marketing Pricing",
  ],
  alternates: {
    canonical: "https://www.tech2globe.com/performance-marketing-packages",
  },
  openGraph: {
    title: "Performance Marketing Packages @Enhanced ROI & Conversions",
    description:
      "Performance Marketing Packages to grow your business faster online.",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/performance-marketing-packages",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing Packages @Enhanced ROI & Conversions",
    description:
      "Performance marketing packages to boost ROI and conversions.",
  },
};

const caseStudies = [
  {
    "id": 1,
    "title": "Social Media Marketing",
    "image": "/images/services/service-inner/casestudies/multi-vendor-platforms-(1).jpg",
    "description": "The Social Media Marketing Case Study features a customer US based Software Company, asked us to build traffic and nurture a Facebook and Twitter...",
    "docLink": ""
  },
  {
    "id": 2,
    "title": "Digital Marketing - SEO",
    "image": "/images/services/service-inner/casestudies/10.jpg",
    "description": "Outdoor Nativity Store needed to be where the eyes are, and they happen to be on search engines and social media. We helped them optimize their site...",
    "docLink": ""
  },
  {
    "id": 3,
    "title": "Guest Posting & Blog",
    "image": "/images/services/service-inner/casestudies/7.jpg",
    "description": "This Case Study refers to our Guest Posting Services as well as Blog Writing Services for a client and showcased our unique approach to deliver...",
    "docLink": ""
  },
]


const faqs = [
  {
    id: "One",
    question: "What are Performance Marketing Packages?",
    answer: `
      Performance Marketing Packages are comprehensive bundles of digital marketing services tailored to enhance your brand's online performance. They combine strategies like SEO, targeted advertising, and content creation to drive measurable results.
    `,
  },
  {
    id: "Two",
    question: "How are the advertising budgets managed?",
    answer: `
      We allocate your advertising budget strategically across platforms that align with your target audience. Our experts continuously monitor and optimize campaigns to ensure maximum return on your investment.
    `,
  },
  {
    id: "Three",
    question: "How do these packages benefit my business?",
    answer: `
      Our packages are designed to boost your brand's visibility, engagement, and conversion rates. By employing data-driven techniques and strategic planning, we help you achieve better ROI and sustainable growth in the digital landscape.
    `,
  },
  {
    id: "Four",
    question: "Can I track the progress of my campaigns?",
    answer: `
      Certainly. We provide regular reports detailing the performance of your campaigns. These reports include key metrics, insights, and progress toward your goals, allowing you to stay informed and engaged in the process.
    `,
  },
  {
    id: "Five",
    question: " Can I customize a package according to my business needs?",
    answer: `
      Absolutely! We understand that every business is unique. Our experts will work closely with you to understand your goals and tailor a package that aligns perfectly with your requirements and budget.
    `,
  },
  {
    id: "Six",
    question: "Will I have a dedicated point of contact?",
    answer: `
      Yes, each client is assigned a dedicated account manager who will be your main point of contact. They will guide you through the process, answer your questions, and ensure that your campaigns are on track.
    `,
  },
  {
    id: "Seven",
    question: " How long does it take to see results?",
    answer: `
      Results can vary based on factors like your industry, competition, and chosen package. Generally, you can start seeing improvements within a few months, with more significant growth over time as the strategies take full effect.
    `,
  },
  {
    id: "Eight",
    question: "What happens if my business goals evolve over time?",
    answer: `
      We understand that businesses grow and change. Your dedicated account manager will work with you to adapt your strategies and packages according to your evolving goals, ensuring that your marketing efforts remain aligned with your vision.
    `,
  },
  {
    id: "Nine",
    question: "Are the packages suitable for startups as well as established businesses?",
    answer: `
      Yes, our packages cater to businesses of all sizes. Whether you're a startup aiming for rapid growth or an established brand looking to maintain dominance, our strategies can be adapted to suit your specific stage and goals.
    `,
  },
  {
    id: "Ten",
    question: "How do I get started with your performance marketing packages?",
    answer: `
      Getting started is easy. Simply reach out to us through our contact page, and one of our experts will get in touch with you to discuss your needs, goals, and the best package options for your business. For any further questions or clarifications, don't hesitate to contact our support team. We're here to help you achieve digital marketing success with our Performance Marketing Packages.
    `,
  },
];


export default function PerformanceMarketingPackages() {

  return (
    <>

      <section className="PerformanceMarketingBanner" style={{ background: "linear-gradient(72.3deg, rgb(29, 7, 64) 8.5%, rgb(253, 105, 139) 92.2%)" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
              <h1 className="text-white">Affordable Performance Marketing Packages</h1>
              <p className="text-white">Get your hands on USA’s highest-rated performance marketing agency. Boost your ROI today!</p>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
              <Image src="/images/services/service-inner/Performances-marketing-bgpng.png" alt="" width={602} height={515} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      {/* <Breadcrumb parentName="Services" pageName="Ecommerce Seo Packages" /> */}
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">

              <div className={Style.ContentDiv}>
                <h3 className="text-center mb-3">❝ Unleash Your Potential: Energize Growth through our Performance Marketing Services! ❞</h3>
                <p className="mb-5 text-center">Our tailored performance marketing packages offer a scalable approach to your company’s online presence. We will ensure that your message reaches its intended audience. This is made feasible by optimizing SEO, targeting social media marketing efforts, and implementing content-driven PPC techniques. Improve your company's performance and generate tangible results by utilizing our comprehensive packages geared to capitalize on today's digital world. Our personalized solutions result in greater productivity, conversion rates, and ROI. Let us set out to increase your marketing efforts and achieve unprecedented growth.</p>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row pt-3">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <h3>Redefining Startups From Zero To Hero<br />
                      Take A Look At The Brands Who Scored Their Revenue With Us</h3>
                  </div>
                </div>
                <div className="row pt-3 pb-5">
                  <div className="text-center">
                    <Image src="/images/services/service-inner/Marketing-Clients-des.png" width={1115} height={288} className="img-fluid" alt="Logo1" />
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <h2 className="text-danger">Comprehensive Digital Approach</h2>
                    <p>Partner with us to leap high in the market</p>
                  </div>
                </div>

                <div className="row pb-5">
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 shadow bg-light h-100">
                      <div className="">
                        <Image src="/images/services/service-inner/Customizable-solutions.png" width={95} height={95} alt="Simplified Lead Generation" />
                      </div>
                      <h4 className="fw-medium">Simplified Lead Generation</h4>
                      <p>We are specialized in creating targeted campaigns with our performance marketing services to capture high-quality leads that convert into customers and drive sales growth.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 shadow bg-light h-100">
                      <div className="">
                        <Image src="/images/services/service-inner/advanced-technology.png" width={95} height={95} alt="Ignite Digital Marketing Awareness" />
                      </div>
                      <h4 className="fw-medium">Ignite Digital Marketing Awareness</h4>
                      <p>Learn how we work from the core to give your brand recognition with marketing awareness.</p>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 shadow bg-light h-100">
                      <div className="">
                        <Image src="/images/services/service-inner/Efficiency.png" width={95} height={95} alt="Boosting Ecommerce Sales" className="img-fluid" />
                      </div>
                      <h4 className="fw-medium">Boosting Ecommerce Sales</h4>
                      <p>As a performance marketing agency, we offer you cutting-edge technologies and industries' best strategies with a promise to take your sales as high as possible.</p>
                    </div>
                  </div>
                </div>
              </div>


              <div className={Style.ContentDiv}>
                <div className="row justify-content-center">
                  <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 text-center">
                    <h2>Want To Hasten Up Traffic To Your Website?
                      Partner With Tech2Globe And See What More You'll Get</h2>
                    <p>Get a chance to stand out from your competitors and build a brand that everyone admires</p>
                  </div>
                </div>
                <div className="row justify-content-center mb-5">
                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="card p-3 shadow bg-light h-100">
                      <div className="text-center">
                        <Image src="/images/services/service-inner/seo-p.png" width={65} height={65} alt="SEO" />
                      </div>
                      <h4 className="text-center">SEO</h4>
                      <p className="text-center">With proven experts and the best leading tools, we help your business score a place in the online market, boost ranking and get desired results. We deal in</p>
                      <h6 className="text-danger">Start with…</h6>
                      <ul className="text-left">
                        <li><Link href="seo-services" className="text-decoration-none fw-normal"> On-page SEO</Link></li>
                        <li><Link href="link-building-services" className="text-decoration-none fw-normal">Off-page SEO</Link></li>
                        <li><Link href="local-seo" className="text-decoration-none fw-normal">Local SEO</Link></li>
                        <li><Link href="ecommerce-seo-services" className="text-decoration-none fw-normal">Ecommerce SEO</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="card p-3 shadow bg-light h-100">
                      <div className="text-center">
                        <Image src="/images/services/service-inner/google-ad-p.png" width={65} height={65} alt="Google Ads" />
                      </div>
                      <h4 className="text-center">Google Ads</h4>
                      <p className="text-center">From thinking beforehand to implementing it, we work to provide a customized advertising campaign that reaches your target audience.</p>
                      <h6 className="text-danger">Start with…</h6>
                      <ul className="text-left">
                        <li><Link href="paid-search-advertising-services" className="text-decoration-none fw-normal"> Search ads</Link></li>
                        <li><Link href="display-advertising-services" className="text-decoration-none fw-normal">Display ads</Link></li>
                        <li><Link href="shopping-ads-services" className="text-decoration-none fw-normal"> Shopping ads</Link></li>
                        <li><Link href="youtube-advertising-services" className="text-decoration-none fw-normal"> Video ads</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="card p-3 shadow bg-light h-100">
                      <div className="text-center">
                        <Image src="/images/services/service-inner/Social-Media-p.png" width={65} height={65} alt="Social Media" />
                      </div>
                      <h4 className="text-center">Social Media</h4>
                      <p className="text-center">A chance to learn about our performance marketing company to get customized strategies, loyal following and creative content.</p>
                      <h6 className="text-danger">Start with…</h6>
                      <ul className="text-left">
                        <li><Link href="influencer-marketing-agency" className="text-decoration-none fw-normal"> Influencers marketing</Link></li>
                        <li><Link href="orm-services" className="text-decoration-none fw-normal">Community management</Link></li>
                        <li><Link href="smo-services" className="text-decoration-none fw-normal"> SMO</Link></li>
                        <li><Link href="content-marketing-services" className="text-decoration-none fw-normal">Content Creation</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <div className="card p-3 shadow bg-light h-100">
                      <div className="text-center">
                        <Image src="/images/services/service-inner/flexible-engagement.png" width={65} height={65} alt="Reputation" />
                      </div>
                      <h4 className="text-center">Reputation</h4>
                      <p className="text-center">With performance marketing services, you can get a positive image online. Our taste-and-tested methods can enhance your presence.</p>
                      <h6 className="text-danger">Start with…</h6>
                      <ul className="text-left">
                        <li>Brand recognition</li>
                        <li>Place in market</li>
                        <li>Stand out from competitors</li>
                        <li>Great hold of business</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 text-center">
                    <Image src="/images/services/service-inner/bussines-image.jpg" width={744} height={372} className="h-75 object-fit-cover img-fluid rounded border" alt="Performance Marketing" />
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-12 col-xs-11">
                    <h3>When Nothing Looks Right, Our Unmatched Quality Services Are The Top Option For Your Business</h3>
                    <p>As a globally recognized agency, we serve top-notch performance marketing services in the USA that deliver actual results. To understand their needs, we work closely with our clients and develop organized plans to take their businesses to another height. Our commitment is to provide quality work with full utilization of all resources to give your customer satisfaction with our services.</p>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-12 col-xs-11">
                    <h3>Dominate Your Business With Our Vast Choices Of Services; Get Measurable Results And Achieve Your Marketing Goal Today</h3>
                    <p>With our highly professional experts and their ideas to take your sales in the sky, we provide a helping hand:</p>
                    <ul>
                      <li>Search Engine Marketing.</li>
                      <li>Pay-Per-Click Advertising.</li>
                      <li>Affiliate Marketing.</li>
                      <li>Social Media Advertising.</li>
                      <li>Email Marketing.</li>
                    </ul>
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 text-center">
                    <Image src="/images/services/service-inner/dasbord-progress.png" width={744} height={372} className="img-fluid rounded border" alt="Performance Marketing" />
                  </div>
                </div>
              </div>


              <div className={Style.ContentDiv}>
                <div className="row mt-5">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <h3 className="mb-3">Our Approach</h3>
                    <p>Our services go beyond simply managing your performance marketing campaigns. We provide a range of services that provide a 360 degree understanding of the work we are doing together and how we work with our clients to unlock growth.</p>
                  </div>
                </div>
                <div className="row pt-3 pb-5">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 text-center">
                      <div className={Style.CardIcon}>
                        <FaLaptop size={50} />
                      </div>
                      <h4>Evolution</h4>
                      <p>We have been in the industry for almost a decade now, taking the ultimate goal in mind, to deliver undoubtedly performance marketing services to our clients and work on the best marketing technologies. We want to adopt every source to give you a better tomorrow.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 text-center">
                      <div className={Style.CardIcon}>
                        <FaBroom size={50} />
                      </div>
                      <h4>Flexibility</h4>
                      <p>Over the years of great experience as a performance marketing company, we have learned to work according to the flexible yet creative needs of our clients. As every client is different, their perspective to see their own business is also unique.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 text-center">
                      <div className={Style.CardIcon}>
                        <FaNewspaper size={50} />
                      </div>
                      <h4>Ownership</h4>
                      <p>With the benefit of delivering measurable results, we organize every tactic and tools to increase your business's sales. Additionally, when you are measuring your sales, leads, per click it allows you to have a clear view of how their efforts are paying and then take further decisions accordingly.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-3">
                    <div className="card p-3 text-center">
                      <div className={Style.CardIcon}>
                        <FaSmile size={50} />
                      </div>
                      <h4>Connectivity</h4>
                      <p>One of the services, affiliate marketing is helpful for collaboration, because it involves collaboration and partnering with other businesses to promote your products, services and pay when the sale is made. It gives a sense of satisfaction to both parties involved in the processes.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <h3>Comparison</h3>
                    <p>Know what makes us better from others</p>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="pricing  featured h-100">
                      <div class="listing-badges">
                        <span class="featured">Featured</span>
                      </div>
                      <div class="price-header">
                        <div class="title">Tech2Globe</div>
                      </div>
                      <div class="content">
                        <ul class="icon-list text-start">
                          <li>No compromise in providing quality performance marketing services.</li>
                          <li>Exclusive strategies and pre-campaign research for unbeatable results.</li>
                          <li>As clutch certified top digital marketing agency, we deliver a range of performance marketing services.</li>
                        </ul>
                        <div class="button"><Link href="/contact-us" class="btn btn-outline pricing-btn fw-medium text-decoration-none">Get Started</Link></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="pricing h-100">
                      <div class="price-header price-header-2">
                        <div class="title">Other Agencies</div>
                      </div>
                      <div class="content">
                        <ul class="icon-list text-start">
                          <li>Hampering services by outsourcing them.</li>
                          <li>With the "package" type, services can bring your business to a loss.
                          </li>
                          <li>Using inaccurate tools that showcases unprofessional and inactiveness towards their work.</li>
                          <li>Working with an uncertified or sidetracked performance marketing agency might take your business low in the market. </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <h2 className="text-center mb-3">Performance Marketing Suggestions</h2>
                <div class="table-responsive">
                  <table class="table table-striped packages-table">
                    <thead>
                      <tr>
                        <th class="path-th main-th" width="16.66%">
                          <h2>Activity</h2>
                        </th>
                        <th class="path-th grey" width="16.66%">
                          <h3>Startup
                          </h3>
                          <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                        </th>
                        <th class="path-th red" width="16.66%">
                          <h3>Medium
                          </h3>
                          <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                        </th>
                        <th class="path-th dark-grey" width="16.66%">
                          <h3>Growth
                          </h3>
                          <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                        </th>
                        <th class="path-th dark-grey" width="16.66%">
                          <h3>Custom</h3>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="td-left">
                          <h3>Keyword Target (Primary)</h3>
                        </td>
                        <td>Upto 50</td>
                        <td>Upto 100</td>
                        <td>Upto 150</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Keyword Tracking (Real Time)</h3>
                        </td>
                        <td>Upto 100</td>
                        <td>Upto 200</td>
                        <td>Upto 300</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>ROI</h3>
                        </td>
                        <td>Upto 2X</td>
                        <td>3X - 4X</td>
                        <td>4X - 6X</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Best Suited For*</h3>
                        </td>
                        <td>Small Business/Single Location</td>
                        <td>Leads Based Business</td>
                        <td>E-commerce Business</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>ROI Factors</h3>
                        </td>
                        <td>Ranking+Traffc+Sales/Leads</td>
                        <td>Ranking+Social Media Presence+Traffc+Sales/Leads</td>
                        <td>Ranking+Social Media Presence+Traffc+Sales/Leads</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Minimum Duration</h3>
                        </td>
                        <td>3 Months</td>
                        <td>3 Months</td>
                        <td>6 Months</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Marketing Channels</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Search Engine Optimization (SEO)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Content Marketing</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Social Media Optimization (SMO)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Social Media Marketing (SMM)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Pay Per Click (PPC)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Email Marketing</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Conversion Rate Optimization (CRO)
                          </h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="cross" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Intial Review &amp; Analysis</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Technical Website Audit</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Competitor Analysis</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Backlinks Analysis</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Keyword Research &amp; Mapping</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Inventory Exclusion</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Website Duplicate Content Check</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google Penalty Check</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google Ads Account Analysis</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Social Media Analysis</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">On Page Optimization</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>On Page Optimization</h3>
                        </td>
                        <td>Upto 50 Pages</td>
                        <td>Upto 100 pages</td>
                        <td>Upto 200 Pages</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Meta Tags Optimization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Header Tags Optimization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Website Content Optimization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Internal Linking Optimization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Schema Implementation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Images Alt Tag Optimization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google Analytic Setup &amp; Integration</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google Webmaster Setup</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Robots.txt Optimization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Sitemap Optimization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Mobile Usability Check</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>URL Canonicalization Check</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Navigation Analysis &amp; Recommendations</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>E-E-A-T Suggestion</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Breadcrumb Implementation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Content Marketing</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Guest Blog Writing</h3>
                        </td>
                        <td>3</td>
                        <td>5</td>
                        <td>10</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Article Writing &amp; Submission</h3>
                        </td>
                        <td>7</td>
                        <td>15</td>
                        <td>20</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Q&amp;A Submissions (Quora)</h3>
                        </td>
                        <td>5</td>
                        <td>10</td>
                        <td>15</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Press Release Writing &amp; Submission</h3>
                        </td>
                        <td>0</td>
                        <td>1</td>
                        <td>2</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Blog Posting</h3>
                        </td>
                        <td>0</td>
                        <td>4</td>
                        <td>8</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Premium Guest Posting*</h3>
                        </td>
                        <td>Additional Charges</td>
                        <td>Additional Charges</td>
                        <td>Additional Charges</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Local SEO Optimization</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google My Business Setup</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Bing Local Listing Setup</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Local Business Listings</h3>
                        </td>
                        <td>0</td>
                        <td>5</td>
                        <td>10</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Local Company Profile Creation</h3>
                        </td>
                        <td>0</td>
                        <td>5</td>
                        <td>10</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Review Postings</h3>
                        </td>
                        <td>0</td>
                        <td>10</td>
                        <td>20</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Social Media</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>No. of Channels</h3>
                        </td>
                        <td>Any 1
                          (Facebook, Instagram, LinkedIn, YouTube, Twitter, Pinterest)
                        </td>
                        <td>Any 2
                          (Facebook, Instagram,LinkedIn, YouTube, Twitter, Pinterest)
                        </td>
                        <td>Any 3
                          (Facebook, Instagram, TikTok, LinkedIn, YouTube, Twitter, Pinterest)
                        </td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Creating Social Media Calendar</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Profile Creation (If Necessary)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Profile Optimization</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Target Audience Analysis</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Identify Hashtags</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Identify Business Goals</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Follow Social Media Trends &amp; Memes</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Contests &amp; Giveaways</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Facebook Ads* (Monthly Budget)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td>Upto $300</td>
                        <td>Upto $600</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Instagram Ads* (Monthly Budget)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td>Upto $300</td>
                        <td>Upto $600</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Post Boost*</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Influencers (Barter)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Influencers (Paid)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Google Ads (PPC)</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Ad Budget*</h3>
                        </td>
                        <td>Upto $2,000</td>
                        <td>$2,000 - $4,000</td>
                        <td>$4,000 - $8,000</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Networks (Google, Bing)</h3>
                        </td>
                        <td>Any 1</td>
                        <td>Any 1</td>
                        <td>Both</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Competitor Analysis</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Keywords Analysis</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Search Advertising</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Display Advertising</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Remarketing</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Landing Page Suggestion</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Conversion Tracking Setup</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Shopping Ads</h3>
                        </td>
                        <td>*If Applicable</td>
                        <td>*If Applicable</td>
                        <td>*If Applicable</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Ad Copies Creation</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Bid Strategy &amp; Adjustments</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Ads A/B Testing</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Email Marketing</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Monthly Email Distribution</h3>
                        </td>
                        <td>Upto 5,000</td>
                        <td>Upto 10,000</td>
                        <td>Upto 15,000</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Custom Template</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Target Customer Keywords, Area</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Campaign Run</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Setup &amp; Tracking/Monitoring</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google Analytics Setup &amp; Monitoring</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google Webmasters Setup &amp; Monitoring</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Google Adwords Conversion Code Setup</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Goal Conversion Setup &amp; Tracking In Analytics</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Reporting</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Performance Report</h3>
                        </td>
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                        <td>Weekly</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Activity Report</h3>
                        </td>
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                        <td>Weekly</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="full-row" colspan="6">Customer Support</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Dedicated Account Manager</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image003.gif" alt="check" src="images/services/service-inner/clip_image003.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Email, Chat (WhatsApp, Skype, Slack)</h3>
                        </td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td><img class="lazyloaded" data-src="images/services/service-inner/clip_image002.gif" alt="check" src="images/services/service-inner/clip_image002.gif" /></td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3>Voice Support</h3>
                        </td>
                        <td>Monthly</td>
                        <td>Bi-Weekly</td>
                        <td>Weekly</td>
                        <td>-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section >

      <div className="PhotoEditCaseStudies">
        <CaseStudiesService caseStudies={caseStudies} />
      </div>

      <FaqSection faqs={faqs} />


    </>
  )
};