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
  title: "Amazon FBA Support",
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
  { id: 9, name: "eBay Marketplaces", path: "/online-business-management-ebay-com" },
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
    text: "Their expertise saved our operations team countless hours. The recovered value alone justified the partnership, but the clarity they brought to our data was just as valuable.",
    name: "Enterprise Amazon Seller, USA",
  },
  {
    id: 2,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "We were surprised by how much revenue had been slipping through the cracks. Tech2Globe handled everything from analysis to follow-ups, and the results were visible within weeks. Their process was clear, organized, and completely stress-free for our team.",
    name: "Private Label Seller, USA",
  },
  {
    id: 3,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Managing reimbursements was something we always postponed because of the complexity. Tech2Globe stepped in and brought structure to the process. Their attention to detail and consistent monitoring made a real difference in our monthly numbers.",
    name: "Amazon Brand Owner, UK",
  },
  {
    id: 4,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "What stood out was transparency. We always knew what was being reviewed and why. Tech2Globe didn’t overpromise, they simply delivered steady, measurable results.",
    name: "E-commerce Manager, Canada",
  },
  {
    id: 5,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "As our catalog grew, tracking fulfillment issues became impossible. Tech2Globe scaled with us and helped us recover losses we didn’t even know existed. Their team understands Amazon’s systems extremely well.",
    name: "Multi-Category Seller, Europe",
  },
  {
    id: 6,
    quote: "/images/services/service-inner/quote-icon.png",
    text: "Working with Tech2Globe gave us peace of mind. Instead of reacting to issues, we now have a proactive system in place that protects our revenue long term.",
    name: "FBA Seller, Australia",
  },
];

const faqs = [
  {
    id: "One",
    question: "What does Tech2Globe help Amazon sellers with?",
    answer: `
        Tech2Globe assists sellers in identifying and resolving fulfillment-related discrepancies within their Amazon FBA operations. This includes reviewing inventory movement, returns, and fulfillment data to ensure sellers recover value from eligible cases while staying compliant with Amazon’s policies.
      `,
  },
  {
    id: "Two",
    question: "Do I need to manage claims myself?",
    answer: `
        No. Tech2Globe manages the entire process on your behalf, from identifying eligible cases to handling documentation and follow-ups. Sellers can remain focused on running their business while we take care of the operational details.
      `,
  },
  {
    id: "Three",
    question: "How do you identify reimbursement opportunities?",
    answer: `
        Our team analyzes multiple Amazon reports, including inventory adjustments, return activity, and shipment records. This data-driven approach allows us to detect discrepancies that may otherwise go unnoticed.
      `,
  },
  {
    id: "Four",
    question: "Is the process compliant with Amazon’s rules?",
    answer: `
        Yes. Tech2Globe stays up to date with Amazon’s reimbursement guidelines and ensures all actions align with current policies. Compliance is a core part of our process.
      `,
  },
  {
    id: "Five",
    question: "How long does it take to see results?",
    answer: `
        Timelines vary depending on case type and Amazon’s response times. However, many sellers begin seeing recoveries within the first few weeks of engagement.
      `,
  },
  {
    id: "Six",
    question: "Can this service work for high-volume sellers?",
    answer: `
        Absolutely. Tech2Globe’s approach is designed to scale, making it suitable for both growing sellers and large operations managing extensive catalogs.
      `,
  },
  {
    id: "Seven",
    question: "Will I have visibility into what’s being reviewed?",
    answer: `
        Yes. We provide regular updates and clear reporting so you always know what cases are being handled and what outcomes have been achieved.
      `,
  },
  {
    id: "Eight",
    question: "How do I get started with Tech2Globe?",
    answer: `
        Getting started is simple. Once onboarded, our team begins analyzing your fulfillment data and identifying opportunities, ensuring a smooth and efficient start to the process.
      `,
  },
];


export default function AmazonFBASupport() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Amazon Fba Support" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <ServiceBanner imageSrc="/images/services/service-inner/amazon-fba-banner.webp" />
              <div className={Style.ContentDiv}>
                <h2 className="text-danger">Recover What You’ve Earned with Smarter Amazon FBA Support</h2>
                <p>Turn Amazon mistakes into regained income with the expert-driven solutions offered by Tech2Globe.</p>
                <p>Operating an Amazon FBA business would be putting your inventory, returns, and customer fulfilment into the hands of complex systems. Although Amazon manages these processes at scale, missing stock, broken products, or unsolved returns are more frequent than most sellers may think. These problems can silently kill profits over a period of time.</p>
                <p>Tech2Globe assists sellers in re-owning their losses by recognizing reimbursable losses and proceeding with the process with accuracy. Our team audits the data on fulfillment, inventory, and returns to identify discrepancies that can be reimbursed. Then we deal with the paperwork and reporting that is needed in order to solve these cases effectively.</p>
                <p>We do not use manual inspections or automated systems, but rather, blend professional inspection with the systematic recovery strategy. Starting with inventory-related problems to inconsistencies in returns, our services will guide the seller throughout all its development. The outcome is increased visibility, better cash flow</p>
                
              </div>

                                                      
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className={Style.ContentDiv}>
                      <h2 className="text-danger">Why Reimbursement Management Matters for Amazon Sellers</h2>
                      <p>Amazon handles millions of orders in a day, and with such scale, gaps in the operations are inevitable. There can be loss of inventory during transfers, item returns that end up not being restocked, or damaged goods being written off inaccurately. It is true that in most cases, the sellers have a right to be compensated, in case these problems are pointed out and addressed properly.</p>
                      <p>The problem is that the opportunity for reimbursement is usually hidden in the complicated documents and confined to the rigid schedules. A good number of sellers are either not available to seize these opportunities or are not in a position to pursue them on a regular basis. Professional support will be a difference here.</p>
                      <p>We support the sellers by keeping a very close watch on the fulfillment activity and sending cases of concern to them. As much as it may be inventory discrepancy or return losses, we make sure that every qualified case is reviewed and that it is handled in a responsible way. When sellers outsource this process, it removes the stress of operation, lessens the lost recoveries, and allows them to sustain healthier margins without interfering with their daily running of business.</p>
                      <p>The Tech2Globe provides the following marketplace services to Walmart:</p>
                      <h4>Tech2Globe Amazon FBA Reimbursement Services</h4>

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
                              Lost Inventory Recovery
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
                                Loss of inventory may happen at various points within the fulfillment chain in Amazon, when receiving, internal transfer, or storage. These losses do not necessarily manifest themselves unless the sellers look into reports carefully. We monitor the changes in our reviews inventory by balancing movement data and the logs of adjustments to track the lost products in the custody of Amazon. Our team will then be ready to prepare the correct documentation and control communication once the problem is confirmed to be valid.
                                <p className="mb-0 mt-2"><strong>What this covers:</strong></p>
                                <ul>
                                  <li>Units lost in handling at the warehouse.</li>
                                  <li>Lost inventory following transfers.</li>
                                  <li>Stock lowering for unclear reasons.</li>
                                </ul>
                                <p>This service assists sellers in selling inventory that would otherwise be written off at a high level to enhance the overall account profitability without interfering with the daily operations.</p>
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
                              Customer Return Discrepancy Review

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
                                Customers can be refunded, but the product cannot get back or is delivered in a condition that cannot be sold. We assess the value of reports on returns in order to make sure that the returns are duly recorded. In the event of finding inconsistencies, we take the required measures to get reimbursed.
                              </p>
                              <p>This service delves into cases where sellers incur losses as a result of processing gaps as opposed to customers. We verify every single return lifecycle to enable sellers to secure money on refunded orders.</p>
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
                              Damaged Inventory Compensation


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
                                During their storage or treatment in the fulfillment centers, products may get damaged. In the event that it occurs in the control of Amazon, vendors can be compensated. To establish responsibility and eligibility, our reviews destroy and dispose of records.
                              </p>
                              <p className="mb-0 mt-2"><strong>Key areas reviewed:</strong></p>
                              <ul>
                                <li>Warehouse-handling damage</li>
                                <li>Transit-related breakage</li>
                                <li>Wrongly categorized unsellable products.</li>
                              </ul>
                              <p>Our process is systematic and based on the valid cases pursued without compromising the policy.</p>
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
                              Inbound Shipment Discrepancy Analysis

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
                                Missing or miscounted units are often received in inbound shipments. These variances would mostly go unnoticed unless shipping plans are compared with receiving reports. Tech2Globe conducts quality analysis regarding shipments to detect shortages and discrepancies.
                              </p>
                              <p>After confirming the discrepancies, we deal with the documentation and communication necessary to resolve the problem. This is done through this service, which guarantees the sellers of the mistakes that may arise in the process of receiving and also assists in keeping records of the inventory distribution in the fulfillment centers and in their right place.</p>                              
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
                              Fee & Billing Accuracy Review 
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
                                Wrong charges may lead to a decrease in profit margins in the long run. Our reviews fulfillment, storage and other FBA-related charges to determine possible inaccuracies.
                              </p>
                              <p>In case of discrepancies, we take the right measures to rectify them using the right channels. This service assists the sellers in keeping clear financial records and they are not charged for services that have been wrongly applied to their account.</p>
                              
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
                              Claim Management, Policy Compliant
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
                                The Amazon reimbursement policies are also dynamic, and the old methods of claims are no longer effective. We keep in touch with the latest policies so that the cases are always submitted properly.
                              </p>
                              <p>We minimize claim rejections and faulty delays by adhering to the requirements of the platforms. Sellers gain an easier time and better chances of success without the hassle of watching the changes in policies on their own.</p>
                              
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
                              Constant Reimbursement Surveillance
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
                                Reimbursement opportunities are presented at every stage of stock movement at fulfillment centers. We offer continuous surveillance to detect emerging cases when they happen.
                              </p>
                              <p>Instead of responding to cases, this dynamic service will make sure that the deserving cases are handled within the mandated timeframes. Sellers are enjoying a stable recovery process and long-term cover against hidden losses.</p>
                              
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
                  <h2 className="text-danger">How Tech2Globe Creates Long-Term Value</h2>
                  
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pt-3">
                      <img src="\images\services\service-inner\In-Depth-Account-Data-Evaluation.webp" className="img-fluid img-responsive" alt="In-Depth-Account-Data-Evaluation" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 pt-3">
                      <h5>In-Depth Account & Data Evaluation</h5>
                      <p>Every successful recovery effort begins with a clear understanding of how your Amazon account operates. We start by conducting a detailed evaluation of your fulfillment activity, inventory movement, and historical performance data. This step allows us to identify patterns, recurring issues, and potential recovery opportunities that may not be visible at a surface level.</p>
                      <p>We examine how products flow through fulfillment centers, how returns are processed, and where discrepancies commonly occur. By building this data-driven foundation, we ensure our efforts are focused on areas that deliver the greatest financial impact.</p>
                      <p>This evaluation phase also helps sellers gain better visibility into operational gaps, enabling smarter decision-making beyond reimbursements. Rather than relying on assumptions, our process is guided by verified data, ensuring accuracy, clarity, and meaningful outcomes from the start.</p>
                    </div>
                    <hr />
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pt-3">
                      <img src="\images\services\service-inner\Structured-Compliant-Claim-Execution.webp" className="img-fluid img-responsive" alt="Structured & Compliant Claim Execution" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 pt-3">
                      <h5>Structured & Compliant Claim Execution</h5>
                      <p>Submitting claims without a clear structure often results in delays, rejections, or unresolved cases. We follow a disciplined execution framework designed to align with Amazon’s current policies and documentation standards.</p>
                      <p>Each case is carefully prepared with the right data, supporting evidence, and proper formatting before submission. Our team tracks every claim through its lifecycle, ensuring timely follow-ups and clear responses to Amazon’s requests.</p>
                      <p>This structured approach reduces friction and prevents unnecessary back-and-forth. Sellers benefit from higher success rates without needing to monitor case progress themselves. By focusing on accuracy and compliance, Tech2Globe ensures reimbursement efforts are efficient, professional, and aligned with platform expectations.</p>
                    </div>
                    <hr />
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pt-3">
                      <img src="\images\services\service-inner\High-level-Audit-and-Tracking-Systems.webp" className="img-fluid img-responsive" alt="High-level Audit and Tracking Systems" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 pt-3">
                      <h5>High-level Audit and Tracking Systems</h5>
                      <p>Proper vendor recovery audit of Amazon is the foundation of financial recovery, and Tech2Globe has developed superior audit and tracking systems that provide the highest level of accuracy. Our systems ensure that all revenue opportunities are not missed as our systems are systematic in reviewing shipment records, invoices, chargebacks, and shortages. We make the process more accurate by automating some elements and using them together with professional analysis, which results in faster recovery and complete transparency.</p>
                      <p>Such systems are also used to check the Amazon vendor reimbursement status, track the outcomes of the dispute, and create actionable insights to prevent such occurrences in the future. Vendors have a clear insight on the claims, recoveries, and outstanding reimbursement, which makes them make informed decisions.</p>
                      <p>With the combination of technology and expertise, we can prompt all vendors to recover the maximum amount of money, reduce the loss of revenues, and adhere to the rules and regulations of Amazon. Financial recovery is not a case of luck and chance since our audit and tracking systems turn it into a regular, dependable prospect.</p>
                    </div>
                    <hr />
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pt-3">
                      <img src="\images\services\service-inner\Scalable Solutions-to-Brands-on-Growth-1.webp" className="img-fluid img-responsive" alt="Scalable Solutions to Brands on the Growth" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 pt-3">
                      <h5>Scalable Solutions to Brands on the Growth</h5>
                      <p>We offer scalable solutions to Amazon vendors that are appropriate to any size of business. With the increase in your brand, the confusing aspects of vendor claim management, chargeback disputes, and reimbursement procedures increase. Our services are automatically scaled to accommodate the growing volume of transactions, a variety of SKUs, and more complex disputes without interference with accuracy or efficiency.</p>
                      <p>Our mission is to recover money owed to the Amazon vendors, shortage claims, and overcharge recoveries, which means that growing brands will not lose money because of technical issues with work. With professional analysis, automatic tracing, and customer support, Tech2Globe enables the vendors to concentrate on strategic expansion instead of being driven by administrative issues.</p>
                      <p>Scalable solutions will turn us into more than a service provider, a long-term partner towards long-term economic well-being. Vendors are assured that regardless of the volume and complexity of their operations, their Amazon vendor income will always be completely insured and maximized.</p>
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