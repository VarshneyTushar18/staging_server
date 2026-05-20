import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import FaqSection from "@/app/components/services/faqs/faqs";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";

export const metadata = {
  title: "Influencer Marketing Packages | Influencer Marketing Packages India",
  description: "Tech2Globe offers cost-effective influencer marketing packages in India for all types of businesses. Transparent influencer marketing pricing with measurable results.",
  keywords: [
    "Influencer Marketing Packages",
    "Influencer Marketing Packages India",
    "Influencer Marketing Services",
    "Influencer Marketing Company",
  ],
  alternates: {
    canonical: "https://www.tech2globe.com/influencer-marketing-package",
  },
  openGraph: {
    title: "Influencer Marketing Packages | Influencer Marketing Packages India",
    description: "Explore cost-effective influencer marketing packages in India. Tech2Globe delivers result-driven influencer campaigns for brands of all sizes.",
    url: "https://www.tech2globe.com/influencer-marketing-package",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing Packages | Influencer Marketing Packages India",
    description: "Tech2Globe provides affordable influencer marketing packages with transparent pricing and measurable ROI for your brand.",
  },
};

const pageHeaderData = {
  title: "Influencer Marketing Packages",
  backgroundImage: "/images/services/ecommerce-ppc-packages-11-8-2023.jpg",
  shortBanner: true
};


const faqs = [
  {
    id: "One",
    question: "What are the most effective channels for influencer marketing?",
    answer: `
      There are so many social channels through which influencer marketing campaigns can be run. The choice of the channel depends on the product category. For example, Pinterest and Instagram work best for a visual representation of products and services whereas Twitter and LinkedIn work best for business or literature categories which require less visual representation. The choice of channel is made to target a larger audience for your brand with the best display of your brand story.
    `,
  },
  {
    id: "Two",
    question: "Is influencer marketing appropriate for every company irrespective of size and domain?",
    answer: `
      If your consumers are on social media, then influencer marketing can work best for your company. ( At times it becomes challenging to run an influencer marketing campaign for every product and service categories but at Tech2Globe our influencer marketing experts understand the client’s needs and formulate customized strategies and guide our clients thoroughly before running any campaign on micro influencer platform in India. )
    `,
  },
  {
    id: "Three",
    question: "Is Influencer Marketing and content marketing the same?",
    answer: `
       Influencer marketing targets a larger audience via social media influencers in India, USA, UK, etc. to show the content related to your brand, whereas content marketing involves developing content for every platform and channel that is relevant for a clearly defined audience
    `,
  },
  {
    id: "Four",
    question: "Is influencer marketing is meant only for tapping a larger audience?",
    answer: `
      Certainly not! All influencer marketing companies run the campaign to display quality content and not quantity. Since influencer marketing uses social media channels that is why the larger audience is targeted automatically. At Tech2Globe our team of influencer marketing specialists aims to run result oriented high-quality influencer marketing campaign to establish an effective connection between a brand and its users.
    `,
  },
  {
    id: "Five",
    question: "Is an influencer Marketing campaign budget-friendly?",
    answer: `
      At Tech2Globe we provide tailor-made influencer marketing plans to suit all kinds of budget categories. At any point in time influencer marketing is a better alternative and highly effective channel to do brand communication and its results last longer than traditional marketing practices.
    `,
  },
  {
    id: "Six",
    question: "How much does influencer marketing cost?",
    answer: `
      Costs for influencer marketing vary wildly and will depend on the specific influencers you want to use. Some major influencers charge $150k for a single sponsored post, while smaller ones might charge $200 for ten. By working out what your aims for the project are and ensuring you track results to work out ROI, you can decide what budget you want to allocate.
    `,
  },
  {
    id: "Seven",
    question: "What are micro-influencers?",
    answer: `
      Micro-influencers are influencers with small audiences and followings. While they are not well-known, they are often very connected and involved with their area and being influential within it.There is not set definition, but you would not expect a micro-influencer to have followers in the tens of thousands (although you can define an influencer as ‘micro’ relative to their area).While micro-influencers do not have the reach of the bigger names, they still have a lot of value and are often more genuine and discerning with promotion.
    `,
  },
  {
    id: "Eight",
    question: "How Safe Is Influencer Marketing?",
    answer: `
      At Tech2globe we are committed to ensuring a completely safe and secure user experience. Our content-upfront model ensures that brands are able to assess the content quality and influencers prior to finalizing the collaboration.<br/><br/>Our influencers database has an individual rating based on the quality of their content, their followers, and their social engagement to calculate the expected impact they may have on your brand or business. This is to make sure you have all the information before choosing an influencer to represent your brand or business.
    `,
  },
  {
    id: "Nine",
    question: "What Type of Content Can I Expect from Influencers?",
    answer: `
      Tech2globe influencers are renowned for producing beautifully crafted content, on-brand, on demand. But it’s up to you to inspire them! You get out what you put in, so it’s important to be clear about what it is that you expect from our influencers so they can put their creativity to work. You can request anything you like: pics, clips, boomerangs, stop-motion vids, and illustrations – even latte art! The sky’s the limit.
    `,
  },
  {
    id: "Ten",
    question: "What Type of Content Can I Expect from Influencers?",
    answer: `
      With advertising, you create a paid promotion for a chosen audience. With influencer marketing, you market your products and services via an influencer to that influencer’s network. Research shows that people trust influencers more than they trust advertising. So, using advertising can be less effective than influencer marketing in reaching your target audience. While both advertising and influencer marketing can increase site traffic, people are more likely to buy your products based on an influencer’s recommendation than an ad.
    `,
  },
  {
    id: "Eleven",
    question: "Is influencer marketing appropriate for every niche market?",
    answer: `
      With influencer marketing, some niches work better than others. Popular niches include fashion, beauty, travel, food, technology, entertainment, family, and fitness. But that doesn’t mean you can’t use this marketing tactic in other niches. As long as there are people who are influential with the audiences you want to reach, influencer marketing is worth considering. Since people perceive influencers as trustworthy, using influencer marketing can be an excellent way to spread the word about your business, products, and services.
    `,
  },
  {
    id: "Twelve",
    question: "How can I measure the success of an influencer marketing campaign?",
    answer: `
      There are multiple ways to measure the success of an influencer marketing campaign, and they all involve analytics. For example, you can create special links for your influencers to use (similar to affiliate marketing) and track referral from these links in Google Analytics. You can also measure likes and shares via a social media analytics tool. And you can use goals in Google Analytics to see when people who follow an influencer’s link buy your products or services.
    `,
  },

];



export default function InfluencerMarketingPackage() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Influencer Marketing Package" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className={Style.ContentDiv}>
                <h2 className="text-center">What Do Tech2Globe Influencer Marketing Services Include?</h2>
                <p className="text-center">With more than 7 years of experience and an award-winning team of digital marketing specialists, our influencer marketing services offer your company unprecedented access to technology and talent. Learn more about the revolutionary features of our influencer marketing packages.</p>
                <p className="text-center">Many brands are still challenged on how to make influencer marketing a smart, long-term investment that impacts sales? We know we can help. As a leading global influencer marketing agency, Socially Powerful guarantees results that will outperform traditional marketing channels. A full-service extension of your team, we design and implement bespoke macro or micro-influencer marketing programs with a focus on achieving ROI. So, whether you are looking for influencer marketing service to help grow brand awareness, drive app downloads, or drive sales, our team of social scientists will build a strategy catered to you and your business goals and KPIs. At Tech2Globe, we share and publish our influencer marketing prices online. Below, you can see our complete pricing table for our influencer marketing services, providing your team a full view on our influencer marketing management plans.</p>
              </div>


              <div className={Style.ContentDiv}>
                <div class="table-responsive">
                  <table class="table table-striped table-bordered packages-table">
                    <tbody>
                      <tr>
                        <td class="full-row" colspan="7">Our Influencer Marketing Packages</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td><strong>Nano</strong></td>
                        <td><strong>Micro</strong></td>
                        <td><strong>Mid-tier</strong></td>
                        <td><strong>Macro</strong></td>
                        <td><strong>Mega</strong></td>
                        <td><strong>Celebrities</strong></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3><strong>Followers</strong></h3>
                        </td>
                        <td>
                          1K - 10K
                        </td>
                        <td>
                          10K - 50K
                        </td>
                        <td>
                          50K - 500K
                        </td>
                        <td>
                          500K - 1M
                        </td>
                        <td>
                          Above 1M +
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3><strong>Our Influencer Research Fees</strong></h3>
                        </td>
                        <td colspan="5" rowspan="3">
                          <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3><strong>Our Management Fee</strong></h3>
                        </td>
                        <td>
                          <a href="https://tech2globe.com/contact-us" class="btn btn-danger fw-medium">Contact Us</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3><strong>Script Writing &amp; Concept </strong></h3>
                        </td>
                        <td></td>
                      </tr>
                      <tr>
                        <td class="td-left">
                          <h3><strong>Influencer’s Fee</strong></h3>
                        </td>
                        <td colspan="5" class="bg-white">
                          It depends upon various factors like their popularity and engagement, we will let you know their fee after sharing the scope of work with them.
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className={Style.ContentDiv}>
                <div className="container pt-5 pb-5">
                  {/* <h2 className="text-danger text-center mb-3">Hello</h2>
                  {description && <p className="text-center">Testing</p>} */}

                  {/* ==== Main Tabs ==== */}
                  <ul className={`${Style.InfluencerTab} nav nav-tabs mb-4`}>
                    <li className="nav-item">
                      <a className="nav-link active" data-bs-toggle="tab" href="#tab1">Instagram Influencer</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" data-bs-toggle="tab" href="#tab2">YouTube Influencer</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" data-bs-toggle="tab" href="#tab3">Twitter Influencer</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" data-bs-toggle="tab" href="#tab4">Snapchat Influencer</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" data-bs-toggle="tab" href="#tab5">TikTok Influencer</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" data-bs-toggle="tab" href="#tab6">Telegram Influencer</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" data-bs-toggle="tab" href="#tab7">B2B Influencer</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" data-bs-toggle="tab" href="#tab8">Amazon Influencer</a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" data-bs-toggle="tab" href="#tab9">Facebook Influencer</a>
                    </li>



                  </ul>

                  {/* ==== Tab Content ==== */}
                  <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab1">
                      <div class="table-responsive">
                        <table class="table table-striped table-bordered packages-table">
                          <tbody>
                            <tr>
                              <td class="full-row" colspan="6">Instagram Infleuncer Marketing Deliverables</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><strong>Any 2</strong></td>
                              <td><strong>Any 3</strong></td>
                              <td><strong>Any 4</strong></td>
                              <td><strong>Any 5</strong></td>
                              <td><strong>ALL</strong></td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Reels</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Post</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Text Reviews</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Video Reviews</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Story</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Highlights</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Bio Link</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="tab2">
                      <div class="table-responsive">
                        <table class="table table-striped table-bordered packages-table">
                          <tbody>
                            <tr>
                              <td class="full-row" colspan="6">Youtube Infleuncer Marketing Deliverables</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><strong>Any 2</strong></td>
                              <td><strong>Any 3</strong></td>
                              <td><strong>Any 4</strong></td>
                              <td><strong>Any 5</strong></td>
                              <td><strong>ALL</strong></td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Shorts</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Integrated Video</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Dedicated Video</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="tab3">
                      <div class="table-responsive">
                        <table class="table table-striped table-bordered packages-table">
                          <tbody>
                            <tr>
                              <td class="full-row" colspan="6">Twitter Influencer Marketing Packages</td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Followers</strong></h3>
                              </td>
                              <td>1000 followers </td>
                              <td>10000 followers </td>
                              <td>100000 followers</td>
                              <td>1,000,000 followers</td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Influencer Research Fees</strong></h3>
                              </td>
                              <td rowspan="4" colspan="4">                <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Management Fee</strong></h3>
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Influencer Fee</strong></h3>
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Script Writing &amp; Concept</strong></h3>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="tab4">
                      <div class="table-responsive">
                        <table class="table table-striped table-bordered packages-table">
                          <tbody>
                            <tr>
                              <td class="full-row" colspan="6">Snapchat Infleuncer Marketing Package</td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Followers</strong></h3>
                              </td>
                              <td>1,000–4,999</td>
                              <td>5,000–9,999 </td>
                              <td>10,000–19,999</td>
                              <td>20,000–49,999</td>
                              <td>50,000–100,000</td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Influencer Research Fees</strong></h3>
                              </td>
                              <td rowspan="4" colspan="5">                <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Management Fee</strong></h3>
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Influencer Fee</strong></h3>
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Script Writing &amp; Concept</strong></h3>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>


                    <div className="tab-pane fade" id="tab5">
                      <div class="table-responsive">
                        <table class="table table-striped table-bordered packages-table">
                          <tbody>
                            <tr>
                              <td class="full-row" colspan="7">Our Influencer Marketing Packages</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><strong>Nano</strong></td>
                              <td><strong>Micro</strong></td>
                              <td><strong>Mid-tier</strong></td>
                              <td><strong>Macro</strong></td>
                              <td><strong>Mega</strong></td>
                              <td><strong>Celebrities</strong></td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Followers</strong></h3>
                              </td>
                              <td>
                                1000-10,000
                              </td>
                              <td>
                                10,000-50,000
                              </td>
                              <td>
                                50,000-500,000
                              </td>
                              <td>
                                500,000- 1000,000
                              </td>
                              <td>
                                1000,000 +
                              </td>
                              <td></td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Influencer Research Fees</strong></h3>
                              </td>
                              <td rowspan="5" colspan="5">
                                <button class="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Management Fee</strong></h3>
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Influencer Fee</strong></h3>
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Second Price list </strong></h3>
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Script Writing &amp; Concept</strong></h3>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="tab6">
                      <div class="table-responsive">
                        <table class="table table-striped table-bordered packages-table">
                          <tbody>
                            <tr>
                              <td class="full-row" colspan="7">Telegram Infleuncer Marketing Package</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><strong>BASIC PACKAGE</strong></td>
                              <td><strong>STANDARD PACKAGE</strong></td>
                              <td><strong>PREMIUM PACKAGE</strong></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><strong>audience</strong></td>
                              <td><strong>audience</strong></td>
                              <td><strong>audience</strong></td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Category</strong></h3>
                              </td>
                              <td>
                                1k
                              </td>
                              <td>
                                3k
                              </td>
                              <td>
                                5k
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>crypto</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>mlm</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>telegram</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>affiliate link</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>affiliate link</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Influencer Fee</strong></h3>
                              </td>
                              <td colspan="3">
                                <button class="btn btn-light" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="tab7">
                      <div class="table-responsive">
                        <table class="table table-striped table-bordered packages-table">
                          <tbody>
                            <tr>
                              <td class="full-row" colspan="7">B2B Infleuncer Marketing Package</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><strong>Nano</strong></td>
                              <td><strong>Micro</strong></td>
                              <td><strong>Mid-tier</strong></td>
                              <td><strong>Macro</strong></td>
                              <td><strong>Mega</strong></td>
                              <td><strong>Celebrities</strong></td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Followers</strong></h3>
                              </td>
                              <td>
                                1K - 10K
                              </td>
                              <td>
                                10K - 50K
                              </td>
                              <td>
                                50K - 500K
                              </td>
                              <td>500K - 1M</td>
                              <td>Above 1M +</td>
                              <td></td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Views / Reach</strong></h3>
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Influencer Research Fees</strong></h3>
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Management Fee</strong></h3>
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Influencer Fee</strong></h3>
                              </td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Script Writing &amp; Concept</strong></h3>
                              </td>
                              <td colspan="5">
                                <button class="btn btn-light" data-bs-toggle="modal" data-bs-target="#pricingModal">View Price</button>
                              </td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="tab8">
                      <div class="table-responsive">
                        <table class="table table-striped table-bordered packages-table">
                          <tbody>
                            <tr>
                              <td class="full-row" colspan="7">Amazon Marketing Deliverables</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><strong>Any 1</strong></td>
                              <td><strong>Any 2</strong></td>
                              <td><strong>Any 3</strong></td>
                              <td><strong>Any 4</strong></td>
                              <td><strong>Any 5</strong></td>
                              <td><strong>ALL</strong></td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Amazon Influencer Storefronts</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>YouTube Amazon Influencers
                                </strong>
                                </h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Amazon Live Influencers</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Blog Amazon Influencers</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt="" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="tab9">
                      <div class="table-responsive">
                        <table class="table table-striped table-bordered packages-table">
                          <tbody>
                            <tr>
                              <td class="full-row" colspan="6">Facebook Infleuncer Marketing Deliverables</td>
                            </tr>
                            <tr>
                              <td></td>
                              <td><strong>Any 2</strong></td>
                              <td><strong>Any 3</strong></td>
                              <td><strong>Any 4</strong></td>
                              <td><strong>Any 5</strong></td>
                              <td><strong>ALL</strong></td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Reels</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Post</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Text Reviews</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Video Reviews</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Story</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Highlights</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                            </tr>
                            <tr>
                              <td class="td-left">
                                <h3><strong>Bio Link</strong></h3>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                              <td>
                                <img src="images/services/service-inner/clip_image002.gif" alt=""/>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section >



      <FaqSection faqs={faqs} />


    </>
  )
};