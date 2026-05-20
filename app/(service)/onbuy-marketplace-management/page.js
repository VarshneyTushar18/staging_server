import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import ServiceBanner from "@/app/components/services/ServiceBanner/ServiceBanner";
import ServiceSidebar from "@/app/components/services/ServiceSidebar/ServiceSidebar";
import CaseStudiesService from "@/app/components/services/ServiceCaseStudy/ServiceCaseStudy";
import PortfolioTabs from "@/app/components/services/portfolio/portfolio";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import FaqSection from "@/app/components/services/faqs/faqs";
import ClientSlider from "@/app/components/services/ClientSlider/ClientSlider";
import { FaAngleRight } from "react-icons/fa";

export const metadata = {
  title: "",

  description:
    "",

  keywords: [
    "",

  ],

  alternates: {
    canonical: "",
  },

  openGraph: {
    title:
      "",
    description:
      " ",
    url: "",
    siteName: "",
    type: "website",
  },

  twitter: {
    card: "summary",
    title:
      "",
    description:
      "",
  },
};

const pageHeaderData = {
  title: "Onbuy Marketplace Management",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};

const resources = [
  { id: 1, name: "Amazon Consulting Services", path: "/amazon-consulting-services" },
  { id: 2, name: "Flipkart", path: "/online-business-management-flipkart" },
  { id: 3, name: "Amazon India", path: "/online-business-management-amazon-in" },
  { id: 4, name: "eBay India", path: "/eBay-management" },
  { id: 5, name: "Snapdeal", path: "/online-business-management-snapdeal" },
  { id: 6, name: "ShopClues", path: "/online-business-management-shopclues" },
  { id: 7, name: "Paytm", path: "/online-business-management-paytm" },
  { id: 8, name: "Amazon Marketplaces", path: "/online-business-management-amazon-com" },
  { id: 9, name: "eBay Marketplaces", path: "/eBay-management" },
  { id: 10, name: "Sears", path: "/online-business-management-sears" },
  { id: 11, name: "Newegg", path: "/online-business-management-newegg" },
  { id: 12, name: "Rakuten", path: "/online-business-management-rakuten" },
];

const sidebarSections = [
  { heading: "Resources", links: resources }
];

const testimonials = [
  {
    id: 1,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "I was overwhelmed by the application form and seller verification process, but Tech2Globe handled it all. Their onboarding support saved me time and stress, allowing me to focus on growing my business.",
    name: "Ananya M., Home & Living Seller",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe’s OnBuy retail onboarding service is excellent. From catalog setup to compliance checks, their guidance made launching my store seamless. Their team really knows the marketplace inside out.",
    name: "Zack K., Fashion Retailer",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "They didn’t just help with OnBuy onboarding, they ensured I met all vendor requirements for other marketplaces, including Costco. Tech2Globe is a complete onboarding partner for serious sellers.",
    name: " Emma T., Global Vendor",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Tech2Globe made my OnBuy seller registration effortless. Their team guided me through every step, from account signup to verification. I launched my store without any delays and felt supported throughout the process.",
    name: "Twain L., UK Retailer",
  },
  {
    id: 5,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "The OnBuy vendor onboarding support from Tech2Globe was outstanding. They helped me understand all requirements and ensured my product listings were compliant. I highly recommend their services for any new seller.",
    name: "Rehman S., Electronics Vendor",
  },
];

const faqs = [
  {
    id: "One",
    question: "What is included in Tech2Globe’s OnBuy onboarding service?",
    answer: `
        Our service covers seller registration, account signup, seller verification, catalog setup, compliance checks, and ongoing support to ensure a smooth marketplace launch.
      `,
  },
  {
    id: "Two",
    question: "How long does the OnBuy seller setup process take?",
    answer: `
        Typically, the process takes 1–3 weeks, depending on the completeness of documents, verification, and account approval timelines.
      `,
  },
  {
    id: "Three",
    question: "Do you assist with the OnBuy seller application form?",
    answer: `
        Yes! We guide sellers through the application form, ensuring all details are accurate and increasing approval chances.
      `,
  },
  {
    id: "Four",
    question: "Can Tech2Globe help with OnBuy retail onboarding for multiple products?",
    answer: `
        Absolutely. We provide end-to-end support, from listing optimization to catalog management for multiple SKUs.
      `,
  },
  {
    id: "Five",
    question: "What does OnBuy seller verification involve?",
    answer: `
        Verification includes checking business details, documents, and compliance with OnBuy policies. Tech2Globe handles this process efficiently.
      `,
  },
  {
    id: "Six",
    question: "Will I get support after my OnBuy account is live?",
    answer: `
        Yes, we provide ongoing seller onboarding support, helping with performance, compliance, and operational challenges.
      `,
  },
  {
    id: "Seven",
    question: "Can Tech2Globe help fulfill vendor requirements for other marketplaces?",
    answer: `
        Definitely. We assist sellers in meeting all vendor requirements for platforms like Costco, Amazon, and eBay.
      `,
  },
  {
    id: "Eight",
    question: "Do I need prior experience selling online to use your services?",
    answer: `
        Not at all. Tech2Globe caters to beginners and experienced sellers alike, guiding you through every step of the OnBuy onboarding.
      `,
  },
];


export default function OnBuyMarketPlace() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Onbuy Marketplace Management" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner imageSrc="/images/services/service-inner/onbuy-banner.webp" />
              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Seamless OnBuy Onboarding. Start Selling, Scale Fast</h2>
                <p>Kickstart your expansion into the worldwide market with Tech2Globe. We simplify the process of selling on OnBuy between preparation and validation.</p>
                <p>The opportunity to sell on OnBuy may open new sources of income, but it is vital to start on the right path. Tech2Globe focuses on OnBuy onboarding solutions, which will enable the seller to confidently start their business without making the usual mistakes. Whether you are filling out your OnBuy seller registration process, or you are under the OnBuy seller account signup, you are assured that every process is smooth, compliant, and optimized to be approved.</p>
                <p>Our team does all the details: OnBuy seller validation, catalog management, product compliance, and operational advice. We also facilitate OnBuy retail onboarding and OnBuy vendor onboarding, hence you are able to concentrate on your business development, and we cater to the technical and procedural needs.</p>
                <p>In addition to onboarding, Tech2Globe assists sellers learn the rules of the marketplace, fulfilling performance expectations, and having an effective storefront. Our support will allow you to launch fast, eliminate delays, and expand successfully. We also assist businesses in meeting all the vendor requirements within the marketplace, such as Costco, so you are well prepared and ready to grow.</p>
                <p>Onboarding on OnBuy is not a problem with Tech2Globe as it is your initial step on the way to marketplace success.</p>

              </div>

              
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className={Style.ContentDiv}>
                      <h2 className="text-danger">OnBuy Marketing: A Smarter Way to Scale Your Brand</h2>
                      <h4>Reasons to select Tech2Globe as an OnBuy Seller Onboarding</h4>
                      <p>The idea of venturing into a new market can be very daunting, but Tech2Globe makes it very easy. Our specialists take sellers through OnBuy seller setup, and make sure your store is up to the standards of the platform. After filling out the OnBuy seller application form and verifying accounts, we support them throughout the process. We can use our experience to prevent the most common mistakes and ensure there are less delays and other mistakes that may lead businesses to register and start the live sales. Our strategy will save time, automate business workflows, and bring tranquility.</p>
                      <p>Tech2Globe will not simply assist with the process, but we will be with you throughout the process. OnBuy has custom seller onboarding assistance that entails catalog set-ups, compliance verifications, and operational readiness, making sure that your store is ready to succeed in the marketplace. It could be OnBuy vendor onboarding or OnBuy retail onboarding, but we just fit our services to your business requirements.</p>
                      <p>Under Tech2Globe, the sellers need to emphasize on growth, and we will take care of the technical and procedural aspects of the business and enable you to grow effectively. Besides, we will help you meet all the requirements of the vendors, including advanced platforms such as Costco, to remain in compliance and competitive.</p>
                    </div>
                  </div>
                </div>
              

              
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className={Style.ContentDiv}>
                      <h2 className="text-danger">OnBuy Marketplace Services Offered At Tech2Globe:</h2>
                      <h4>OnBuy Onboarding Services</h4>

                      <div className={`${Style.PageAccordion} accordion`} id="accordionSection1">

                        {/* Accordion 1 */}
                        <div className={`${Style.AccordionItem} accordion-item`}>
                          <h2 className="accordion-header" id="headingOne">
                            <button
                              className={`${Style.AccordionButton} accordion-button collapsed`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseOne"
                              aria-expanded="false"
                              aria-controls="collapseOne"
                            >
                              OnBuy Seller Registration
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                          >
                            <div className={`${Style.AccordionBody} accordion-body`}>
                              <p className="para-text">
                                Tech2Globe simplifies and makes the OnBuy seller registration hassle-free. We will take you through the application process one step at a time, and we are sure that all the forms are filled out correctly and handed in.
                                <p className="mb-0 mt-2"><strong>Key Benefits:</strong></p>
                                <ul>
                                  <li>Do not have delays in the approval of accounts.</li>
                                  <li>Simplified application procedure.</li>
                                  <li>A specialist's assistance with the documentation needed.</li>
                                </ul>
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Accordion 2 */}
                        <div className={`${Style.AccordionItem} accordion-item`}>
                          <h2 className="accordion-header" id="headingTwo">
                            <button
                              className={`${Style.AccordionButton} accordion-button collapsed`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              OnBuy Seller Account Signup

                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                          >
                            <div className={`${Style.AccordionBody} accordion-body`}>
                              <p className="para-text">
                                It is simpler to open your OnBuy seller account through Tech2Globe. Technical setup, account creation, and integration with your existing system are taken care of by us so that you do not have to worry about it when starting to make sales.
                              </p>
                              <p className="mb-0 mt-2"><strong>Hightlights:</strong></p>
                              <ul>
                                <li>Smooth account creation</li>
                                <li>Integration support</li>
                                <li>Access to the seller dashboard in real-time.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Accordion 3 */}
                        <div className={`${Style.AccordionItem} accordion-item`}>
                          <h2 className="accordion-header" id="headingThree">
                            <button
                              className={`${Style.AccordionButton} accordion-button collapsed`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseThree"
                              aria-expanded="false"
                              aria-controls="collapseThree"
                            >
                              OnBuy Seller Verification


                            </button>
                          </h2>
                          <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                          >
                            <div className={`${Style.AccordionBody} accordion-body`}>
                              <p className="para-text">
                                The validation is paramount in listing products and building trust. Tech2Globe also has OnBuy seller verification being done effectively so that your account is properly compliant with the marketplace terms.
                              </p>
                              <p className="mb-0 mt-2"><strong>Why It Matters:</strong></p>
                              <ul>
                                <li>Faster approval times</li>
                                <li>Miscellaneous causes of rejection.</li>
                                <li>Smooth and safe account creation.</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Accordion 4 */}
                        <div className={`${Style.AccordionItem} accordion-item`}>
                          <h2 className="accordion-header" id="headingFour">
                            <button
                              className={`${Style.AccordionButton} accordion-button collapsed`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              OnBuy Vendor Onboarding

                            </button>
                          </h2>
                          <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample"
                          >
                            <div className={`${Style.AccordionBody} accordion-body`}>
                              <p className="para-text">
                                Get even more retailers on board through the appropriate OnBuy vendor onboarding. We assist your business in signing up and starting operations, making sure that your store is up to all the standards of the vendors.
                              </p>
                              <p className="mb-0 mt-2"><strong>Our Support Includes:</strong></p>
                              <ul>
                                <li>Review of vendor documentation.</li>
                                <li>Product listing guidance</li>
                                <li>Compliance with the marketplace rules</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Accordion 5 */}
                        <div className={`${Style.AccordionItem} accordion-item`}>
                          <h2 className="accordion-header" id="headingFive">
                            <button
                              className={`${Style.AccordionButton} accordion-button collapsed`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFive"
                              aria-expanded="false"
                              aria-controls="collapseFive"
                            >
                              OnBuy Retail Onboarding
                            </button>
                          </h2>
                          <div
                            id="collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFive"
                            data-bs-parent="#accordionExample"
                          >
                            <div className={`${Style.AccordionBody} accordion-body`}>
                              <p className="para-text">
                                Tech2Globe offers OnBuy retail onboarding solutions to companies that wish to sell various products effectively. We maximize your storefront and listings to be seen.
                              </p>
                              <p className="mb-0 mt-2"><strong>Key Features:</strong></p>
                              <ul>
                                <li>Storefront configuration and optimization.</li>
                                <li>Catalog structuring</li>
                                <li>Increased product awareness.</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Accordion 6 */}
                        <div className={`${Style.AccordionItem} accordion-item`}>
                          <h2 className="accordion-header" id="headingSix">
                            <button
                              className={`${Style.AccordionButton} accordion-button collapsed`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSix"
                              aria-expanded="false"
                              aria-controls="collapseSix"
                            >
                              OnBuy Seller Application Form Support
                            </button>
                          </h2>
                          <div
                            id="collapseSix"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSix"
                            data-bs-parent="#accordionExample"
                          >
                            <div className={`${Style.AccordionBody} accordion-body`}>
                              <p className="para-text">
                                The OnBuy seller application form is not very easy to fill out. Tech2Globe will make sure that every section is filled in properly, which means an increase in the approval rates, and you can save some precious time.
                              </p>
                              <p className="mb-0 mt-2"><strong>We Help With:</strong></p>
                              <ul>
                                <li>Document preparation</li>
                                <li>Accurate form submission</li>
                                <li>Advice on approvals to be made.</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/* Accordion 7 */}
                        <div className={`${Style.AccordionItem} accordion-item`}>
                          <h2 className="accordion-header" id="headingSeven">
                            <button
                              className={`${Style.AccordionButton} accordion-button collapsed`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSeven"
                              aria-expanded="false"
                              aria-controls="collapseSeven"
                            >
                              OnBuy Seller Onboarding Helpdesk
                            </button>
                          </h2>
                          <div
                            id="collapseSeven"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSeven"
                            data-bs-parent="#accordionExample"
                          >
                            <div className={`${Style.AccordionBody} accordion-body`}>
                              <p className="para-text">
                                We have an all-inclusive OnBuy seller onboarding support to ensure that you do not feel caught up. Tech2Globe helps in technical, operational, and compliance issues during setup to go-live.
                              </p>
                              <p className="mb-0 mt-2"><strong>Services Include:</strong></p>
                              <ul>
                                <li>Account setup assistance</li>
                                <li>Listing optimization</li>
                                <li>Continuous marketplace guidance.</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
              </div>


            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">
              <div className={Style.StickyTop}>
                <ServiceSidebar sections={sidebarSections} />
              </div>
            </div>

            <div className="container">              
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5">
                  <h2 className="text-danger">Why Choose to Partner With Tech2globe for OnBuy Marketplace Management?</h2>
                  <h4>Our Proven OnBuy Seller Enablement Process</h4>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pt-3">
                      <img src="\images\services\service-inner\Preliminary Consultation-and-Evaluation.webp" className="img-fluid img-responsive" alt="Preliminary Consultation and Evaluation" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 pt-5">
                      <h4>Preliminary Consultation and Evaluation</h4>
                      <p>Any OnBuy journey to success is initiated by knowing your business objectives. Tech2Globe performs a detailed consultation to evaluate your needs, target audience, and product catalog. We determine the best strategy to use for OnBuy seller onboarding and identify the process that would be followed in registration, account creation, and verification of the vendor. It is also at this stage that we deem your suitability to global marketplaces such as Costco, where all the requirements of the vendors are stated. An onboarding strategy can be customized to your business and save you time and minimize the chance of making mistakes so that you can launch your business as quickly and as confidently as possible.</p>
                    </div>
                    <hr />
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pt-3">
                      <img src="\images\services\service-inner\Registration-Account-Setup.webp" className="img-fluid img-responsive" alt="Registration & Account Setup" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 pt-3">
                      <h4>Registration & Account Setup</h4>
                      <p>Tech2Globe will take you through the registration of the OnBuy seller account, seller account signup, and everything regarding the technical aspect of it. We fill out the OnBuy seller application form, authenticate documents, and file accounts to be approved. This will allow adhering to OnBuy policies, minimize the chances of being rejected, and limit the time to enter the market. Storefronts, payment systems, and inventory management tools are also configured by our team, and make your store fully operational at the beginning. We deal with the procedural complexities as the sellers concentrate on their products.</p>
                    </div>
                    <hr />
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pt-3">
                      <img src="\images\services\service-inner\Verification-Compliance.webp" className="img-fluid img-responsive" alt="Verification & Compliance" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 pt-3">
                      <h4>Verification & Compliance</h4>
                      <p>Operational readiness highly depends on verification. Tech2Globe handles verification of sellers in OnBuy, where all the documents, business information, and product listings are up to the standards of the marketplace. We will work with you in compliance checks, catalog validation, and policy adherence to avoid inefficiencies. Other operations audits of this stage are to ensure that your store is capable of taking orders, returns, and providing customer services effectively. With our help, you will be able to have a clean sheet and a solid reputation that will last you long in OnBuy since your account will be in excellent standing and in full compliance.</p>
                    </div>
                    <hr />
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pt-3">
                      <img src="\images\services\service-inner\Introduction-Support-and-Continued-Service.webp" className="img-fluid img-responsive" alt="Introduction Support, and Continued Service" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 pt-3">
                      <h4>Introduction Support, and Continued Service</h4>
                      <p>After account verification, Tech2Globe offers complete OnBuy seller onboarding services at launch. We provide optimization of listing, product visibility, and strategizing on the scaling of sales. Our team tracks the performance measures, corrects problems in time, and counsels on the best practices in the marketplace. Businesses that focus on larger platforms also get our help in meeting the demands of vendors such as Costco and making them cross-platform friendly. At Tech2Globe, you will not simply set up and leave OnBuy there, we are going to support you in terms of sustainable growth and market success.</p>
                    </div>                    
                </div>
              </div>
            </div>

          </div>
        </div>
      </section >



      <div className="EmailMarketingTestimonials">
        <ClientSlider testimonials={testimonials} />
      </div>
      <FaqSection faqs={faqs} />

    </>
  )
};