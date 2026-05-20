import Style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/app/components/services/PageHeader/PageHeader";
import Breadcrumb from "@/app/components/breadcrumbs/breadcrumbs";
import BrandSection from "@/app/components/home/BrandSection/BrandSection";
import { FaAddressCard, FaAmazon, FaArrowsAltH, FaArrowUp, FaBox, FaBoxes, FaBoxOpen, FaBroom, FaBuilding, FaChartLine, FaCog, FaCogs, FaCommentDots, FaComments, FaConnectdevelop, FaDatabase, FaDesktop, FaFingerprint, FaGlobe, FaHandshake, FaHeadset, FaLaptop, FaMedal, FaNewspaper, FaPaste, FaRegBuilding, FaSmile, FaStar, FaStore, FaTag, FaTruck, FaTruckMoving, FaUserCheck, FaUserCircle, FaWarehouse } from "react-icons/fa";
import "./custom.css";

export const metadata = {
  title: "Amazon Dropshipping Services India - Tech2Globe",
  description:
    "Tech2Globe is one of the best Amazon Dropshipping companies, offering comprehensive solutions for Amazon Dropshipping automation.",
  keywords: [
    "Amazon Dropshipping India",
    "dropshipping on amazon india",
    "Amazon Dropshipping services",
  ],
  alternates: {
    canonical: "https://www.tech2globe.com/amazon-dropshipping",
  },
  openGraph: {
    title: "Amazon Dropshipping Services India - Tech2Globe",
    description:
      "Tech2Globe offers comprehensive Amazon Dropshipping automation solutions.",
    siteName: "Tech2Globe Web Solutions LLP",
    url: "https://www.tech2globe.com/amazon-dropshipping",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazon Dropshipping Services India - Tech2Globe",
    description:
      "Tech2Globe provides automated Amazon dropshipping solutions.",
  },
};

const pageHeaderData = {
  title: "Amazon Dropshipping Services",
  backgroundImage: "/images/skyscraper.jpg",
  shortBanner: true
};


export default function AmazonDropshipping() {

  return (
    <>

      <PageHeader pageHeaderData={pageHeaderData} />
      <Breadcrumb parentName="Services" pageName="Amazon Dropshipping Services" />
      <BrandSection />
      <section className={Style.PageContent}>
        <div className="container">
          <div className="row">

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Image src="/images/services/service-inner/dropshipping-shortbn.jpg" width={1000} height={667} className="img-responsive img-fluid border rounded object-fit-cover h-100" alt="Amazon Dropshipping" />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h2>What is Dropshipping and How Can Tech2Globe Help You?</h2>
              <p>Dropshipping on Amazon lets you offer goods straight to consumers without keeping inventory. An order placed results in the goods being delivered straight from the supplier to the client, therefore providing a low-risk, hassle-free business strategy.</p>

              <p>At Tech2Globe, we specialize in assisting companies in starting and expanding Amazon dropshipping outlets. From first setup to driving continuous sales, we take care of everything to ensure your company runs well. We can help you with niche selection, supplier sourcing, product research, store setup, product listing optimization, order fulfillment, customer support, and marketing & promotion.</p>

              <p>By partnering with Tech2Globe, you can focus on growing your business while we handle the complexities of dropshipping.</p>

              <Link href="contact-us" className="button-red m-0">Contact Us</Link>
            </div>

          </div>

          <div className="row pt-5">
            <h2 className="text-center mb-3">How Tech2Globe Sets Up Your Amazon Dropshipping Business</h2>
            <p className="mb-5 text-center">At Tech2Globe, we ensure that your Amazon dropshipping business is built on a solid foundation, optimized for success from day one. Our approach is systematic and tailored to your specific needs. Here’s a detailed breakdown of our process:</p>
          </div>

          <div className="row pt-3 pb-3">
            <h3 className="mb-3">1. Market Research and Niche Selection</h3>
            <p>Our team researches the market extensively to find profitable niches appropriate for your business's objectives. We examine demand patterns, present trends, and degree of competitiveness to pinpoint product categories with great potential for profitability. Understanding product demand and target consumers helps us to select a niche that brings effective competition and scaling by providing growth potential while avoiding oversaturated markets:</p>
            <div className="row nichesection">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card p-3 h-100">
                  <div class="con-icon-box d-flex align-items-center gap-4">
                    <div class="icon-box-s2 bg-danger p-2">
                      <FaDatabase className="text-white" size={28} />
                    </div>
                    <h5>Data-driven Insights</h5>
                  </div>
                  <div class="content pt-2">
                    <p class="mb-0">Advanced analytics technologies let us evaluate product demand, seasonal
                      trends, and
                      new market prospects generated by data.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card p-3 h-100">
                  <div class="con-icon-box d-flex align-items-center gap-4">
                    <div class="icon-box-s2 bg-danger p-2">
                      <FaChartLine className="text-white" size={28} />
                    </div>
                    <h5>Competitor Analysis</h5>
                  </div>
                  <div class="content pt-2">
                    <p class="mb-0">Reviewing rivals in your niche helps you to identify areas your company may cover, therefore strengthening your competitive advantage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card p-3 h-100">
                  <div class="con-icon-box d-flex align-items-center gap-4">
                    <div class="icon-box-s2 bg-danger p-2">
                      <FaConnectdevelop className="text-white" size={28} />
                    </div>
                    <h5>Buyer Persona Development</h5>
                  </div>
                  <div class="content pt-2">
                    <p class="mb-0">Development of your buyer persona can assist you to better match your marketing plans and product offers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="row pt-3 pb-3">
            <h3 className="mb-3">2. Supplier Sourcing</h3>
            <p>Through industry-leading tools such Doba, Inventory Source, Alibaba, AliExpress, and SaleHoo, we link your brand with trustworthy suppliers. We also carefully review vendors to make sure they have a history of prompt delivery, high quality products, and reasonable rates. Our aim is to build a constant supply chain of products fit for Amazon's rigorous standards for quality and shipment.</p>
            <div className="row nichesection">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card p-3 h-100">
                  <div class="con-icon-box d-flex align-items-center gap-4">
                    <div class="icon-box-s2 bg-danger p-2">
                      <FaUserCheck className="text-white" size={28} />
                    </div>
                    <h5>Supplier Verification</h5>
                  </div>
                  <div class="content pt-2">
                    <p class="mb-0">We assess the dependability of every provider depending on their delivery speed, refund policies, and product quality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card p-3 h-100">
                  <div class="con-icon-box d-flex align-items-center gap-4">
                    <div class="icon-box-s2 bg-danger p-2">
                      <FaHandshake className="text-white" size={28} />
                    </div>
                    <h5>Price Negotiation</h5>
                  </div>
                  <div class="content pt-2">
                    <p class="mb-0">Our team negotiates pricing with suppliers to get the best available rates, therefore optimizing your profit margins.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card p-3 h-100">
                  <div class="con-icon-box d-flex align-items-center gap-4">
                    <div class="icon-box-s2 bg-danger p-2">
                      <FaGlobe className="text-white" size={28} />
                    </div>
                    <h5>Global Sourcing</h5>
                  </div>
                  <div class="content pt-2">
                    <p class="mb-0">We identify the greatest fit for your business model whether your preferred local suppliers for quick shipment or overseas suppliers for reasonably priced goods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="row pt-3 pb-3">
            <h3 className="mb-3">3. Amazon Store Configuration</h3>
            <p>Handling the Amazon Seller account setup process, Tech2Globe ensures accuracy and efficiency. We create a welcoming showroom that captures your brand and attracts possible clients. From title optimization to image uploading, our team of business experts manages product listings. This careful arrangement provides an aesthetically pleasing, easily navigable store, hence optimizing conversions.</p>
            <div className="row nichesection">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card p-3 h-100">
                  <div class="con-icon-box d-flex align-items-center gap-4">
                    <div class="icon-box-s2 bg-danger p-2">
                      <FaAmazon className="text-white" size={28} />
                    </div>
                    <h5>Amazon Seller Account Registration</h5>
                  </div>
                  <div class="content pt-2">
                    <p class="mb-0">We walk you through registering your Amazon Seller account so that all required papers and information is accurately entered.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card p-3 h-100">
                  <div class="con-icon-box d-flex align-items-center gap-4">
                    <div class="icon-box-s2 bg-danger p-2">
                      <FaStore className="text-white" size={28} />
                    </div>
                    <h5>Storefront Design</h5>
                  </div>
                  <div class="content pt-2">
                    <p class="mb-0">Our team designs a branded, appealing storefront fit for your company that captures your target demographic.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card p-3 h-100">
                  <div class="con-icon-box d-flex align-items-center gap-4">
                    <div class="icon-box-s2 bg-danger p-2">
                      <FaMedal className="text-white" size={28} />
                    </div>
                    <h5>Quality Visuals</h5>
                  </div>
                  <div class="content pt-2">
                    <p class="mb-0">To draw in possible consumers, we make sure every product image is professional, complying with Amazon's policies, and clear.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="row pt-3 pb-3">
            <h3 className="mb-3">4. Fulfillment and Shipping Optimization</h3>
            <p>Dropshipping shipping is optimized by our e-commerce professionals to ensure fast and effective consumer goods delivery. Working with vendors, we select the best solutions that satisfy Amazon's needs—including Prime eligibility—by considering This simplifies the fulfillment process, faster delivery times, and improves customer satisfaction, thus improving reviews, lowering returns, and higher product ratings.</p>
            <div className="row nichesection">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card p-3 h-100">
                  <div class="con-icon-box d-flex align-items-center gap-4">
                    <div class="icon-box-s2 bg-danger p-2">
                      <FaTruck className="text-white" size={28} />
                    </div>
                    <h5>Shipping Partner Selection</h5>
                  </div>
                  <div class="content pt-2">
                    <p class="mb-0">We find for your company the most dependable and reasonably priced shipping options available.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card p-3 h-100">
                  <div class="con-icon-box d-flex align-items-center gap-4">
                    <div class="icon-box-s2 bg-danger p-2">
                      <FaBoxOpen className="text-white" size={28} />
                    </div>
                    <h5>Amazon Fulfillment Guidelines</h5>
                  </div>
                  <div class="content pt-2">
                    <p class="mb-0">Our experts make sure your company satisfies all of Amazon's shipping and fulfillment criteria, including rapid delivery choices like Amazon Prime.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card p-3 h-100">
                  <div class="con-icon-box d-flex align-items-center gap-4">
                    <div class="icon-box-s2 bg-danger p-2">
                      <FaComments className="text-white" size={28} />
                    </div>
                    <h5>Tracking and Communication</h5>
                  </div>
                  <div class="content pt-2">
                    <p class="mb-0">We keep consumers updated about their order status at all levels by means of real-time tracking tools and contact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-5">
            <h2 className="text-center mb-3">Our Powerful Product Sourcing Tools for Dropshipping Success</h2>
            <p className="mb-5 text-center">Using a range of industry-leading techniques, Tech2Globe ensures that your Amazon dropship company has the greatest products and suppliers. These instruments let us effectively find premium products, simplify inventory control, and keep a lucrative company model. Each tool is absolutely essential for the setup and running of your dropship company:</p>

            <div className="row justify-content-center toolcontainer">
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="card dashed-border h-100">
                  <div className="img-container">
                    <img src="/images/services/service-inner/clientlogo/doba-logo1.png" alt="Product Research and Supplier Vetting" className="img-fluid object-fit-contain" />
                  </div>
                  <div className="text-center txt14">
                    <p>Expanding Your Supplier Network.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="card dashed-border h-100">
                  <div className="img-container">
                    <img src="/images/services/service-inner/clientlogo/inventry-source.png" alt="Automating Inventory and Order Management" className="img-fluid object-fit-contain" />
                  </div>
                  <div className="text-center txt14">
                    <p>Automating Inventory and Order Management.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="card dashed-border h-100">
                  <div className="img-container">
                    <img src="/images/services/service-inner/clientlogo/alibaba-logo.png" alt="Direct Access to Manufacturers" className="img-fluid object-fit-contain" />
                  </div>
                  <div className="text-center txt14">
                    <p>Direct Access to Manufacturers.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="card dashed-border h-100">
                  <div className="img-container">
                    <img src="/images/services/service-inner/clientlogo/salehoo-logo.png" alt="Finding Verified, High-Quality Suppliers." className="img-fluid object-fit-contain" />
                  </div>
                  <div className="text-center txt14">
                    <p>Finding Verified, High-Quality Suppliers.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="card dashed-border h-100">
                  <div className="img-container">
                    <img src="/images/services/service-inner/clientlogo/wholesale-logo.png" alt="Comprehensive Dropshipping Platform for Product Discovery." className="img-fluid object-fit-contain" />
                  </div>
                  <div className="text-center txt14">
                    <p>Comprehensive Dropshipping Platform for Product Discovery.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="card dashed-border h-100">
                  <div className="img-container">
                    <img src="/images/services/service-inner/clientlogo/Sprocket-logo.png" alt="Helps find fast-shipping, high-quality products from US/EU suppliers" className="img-fluid object-fit-contain" />
                  </div>
                  <div className="text-center txt14">
                    <p>Helps find fast-shipping, high-quality products from US/EU suppliers.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="card dashed-border h-100">
                  <div className="img-container">
                    <img src="/images/services/service-inner/clientlogo/auto_ds-logo.png" alt="Automates product sourcing, listing, and order fulfillment" className="img-fluid object-fit-contain" />
                  </div>
                  <div className="text-center txt14">
                    <p>Automates product sourcing, listing, and order fulfillment.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="card dashed-border h-100">
                  <div className="img-container">
                    <img src="/images/services/service-inner/clientlogo/dropshingspy-logo.png" alt="Finds trending products with competitor insights" className="img-fluid object-fit-contain" />
                  </div>
                  <div className="text-center txt14">
                    <p>Finds trending products with competitor insights.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="card dashed-border h-100">
                  <div className="img-container">
                    <img src="/images/services/service-inner/clientlogo/dsers-logo.png" alt="AliExpress partner for bulk ordering and product recommendations" className="img-fluid object-fit-contain" />
                  </div>
                  <div className="text-center txt14">
                    <p>AliExpress partner for bulk ordering and product recommendations.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="card dashed-border h-100">
                  <div className="img-container">
                    <img src="/images/services/service-inner/clientlogo/niche-scraper-logo.png" alt="Uncovers winning products and analyzes competitors." className="img-fluid object-fit-contain" />
                  </div>
                  <div className="text-center txt14">
                    <p>Uncovers winning products and analyzes competitors.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="card dashed-border h-100">
                  <div className="img-container">
                    <img src="/images/services/service-inner/clientlogo/zendrop-logo.png" alt="Provides fast shipping and branded dropshipping services." className="img-fluid object-fit-contain" />
                  </div>
                  <div className="text-center txt14">
                    <p>Provides fast shipping and branded dropshipping services.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="card dashed-border h-100">
                  <div className="img-container">
                    <img src="/images/services/service-inner/clientlogo/ecomhunt-logo.png" alt="Offers daily winning products with marketing insights." className="img-fluid object-fit-contain" />
                  </div>
                  <div className="text-center txt14">
                    <p>Offers daily winning products with marketing insights.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="card dashed-border h-100">
                  <div className="img-container">
                    <img src="/images/services/service-inner/clientlogo/findniche-logo.png" alt="Identifies top-performing products and niches." className="img-fluid object-fit-contain" />
                  </div>
                  <div className="text-center txt14">
                    <p>Identifies top-performing products and niches.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="card dashed-border h-100">
                  <div className="img-container">
                    <img src="/images/services/service-inner/clientlogo/oberlo-logo.png" alt="Imported AliExpress products to Shopify (discontinued but influential)." className="img-fluid object-fit-contain" />
                  </div>
                  <div className="text-center txt14">
                    <p>Imported AliExpress products to Shopify (discontinued but influential).</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="card dashed-border h-100">
                  <div className="img-container">
                    <img src="/images/services/service-inner/clientlogo/intelligynce-logo.png" alt="Analyzes top-selling competitor products across platforms." className="img-fluid object-fit-contain" />
                  </div>
                  <div className="text-center txt14">
                    <p>Analyzes top-selling competitor products across platforms.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div className="card dashed-border h-100">
                  <div className="img-container">
                    <img src="/images/services/service-inner/clientlogo/junglescout.png" alt="Product research tool, mainly for Amazon, useful for dropshipping too." className="img-fluid object-fit-contain" />
                  </div>
                  <div className="text-center txt14">
                    <p>Product research tool, mainly for Amazon, useful for dropshipping too.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-5">
            <h2 className="text-center mb-3">How We Integrate These Tools Into Your Dropshipping Setup</h2>
            <p className="mb-5 text-center">Each of these tools is carefully selected and integrated into your Amazon dropshipping business based on your unique needs and business model. Here’s how we do it:</p>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card h-100 shadow">
                  <div class="img  w-100 ">
                    <img class="card-img-top h-100 w-100 object-fit-cover" src="/images/services/service-inner/productResearchandSupplierVetting.jpg" alt="Product Research and Supplier Vetting" />
                  </div>
                  <div class="card-body  text-center">
                    <h5 class="card-title">Product Research and Supplier Vetting</h5>
                    <p class="card-text">We connect you with trustworthy suppliers by means of Doba, Alibaba, and SaleHoo. This way you not only have great profitability but also exceptional quality of the products you acquire.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card h-100 shadow">
                  <div class="img  w-100 ">
                    <img class="card-img-top  h-100 w-100 object-fit-cover" src="/images/services/service-inner/inventoryandOrderManagement.jpg" alt="Inventory and Order Management" />
                  </div>
                  <div class="card-body text-center">
                    <h5 class="card-title">Inventory and Order Management</h5>
                    <p class="card-text">Inventory Source and Wholesale2B automatically syncs inventory and order management, thereby enabling real-time tracking of stock levels and orders and hence helping to avoid hand mistakes and delays.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card h-100 shadow">
                  <div class="img  w-100 ">
                    <img class="card-img-top  h-100 w-100 object-fit-cover" src="/images/services/service-inner/seamlessStoreIntegration.jpg" alt="Seamless Store Integration" />
                  </div>
                  <div class="card-body text-center">
                    <h5 class="card-title">Seamless Store Integration</h5>
                    <p class="card-text">All tools link with your Amazon store for seamless operations. From procurement to fulfillment, every stage of the process is simplified for best profit possibility and efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-5">
            <div className="lg-img mb-5">
              <Image src="/images/services/service-inner/documentsAndLegalCompliance.jpg" width={1294} height={248} className="img-responsive img-fluid border rounded object-fit-cover h-100 " alt="Documents and Legal Compliance for Amazon Dropshipping" />
            </div>
            <h2 className="mb-3">Documents and Legal Compliance for Amazon Dropshipping</h2>
            <p>Maintaining seamless operations and compliance with both Amazon's regulations and local laws depends on following the necessary documentation and legal formalities when building an Amazon dropship company. We walk you through every stage of the process at Tech2Globe so that your company is effectively and correctly set up.</p>
            <p>The key documentation and legal requirements for launching your Amazon dropshipping company are broken out here in great detail:</p>
          </div>


          <div className="row pt-3 pb-3">
            <h4 className="mb-3">Amazon Seller Account Setup</h4>
            <p>Establishing a Seller Account is the first and most important action in starting Amazon sales. Several legal and administrative criteria are involved in this process to authenticate your company and ensure it runs according to Amazon policies.</p>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card shippingcard h-100 p-3 ">
                  <div class="d-flex align-items-center gap-4 icon-con-box">
                    <div class="p-2">
                      <FaFingerprint className="text-danger" size={28} />
                    </div>
                    <h5>Identity Verification</h5>
                  </div>
                  <p class="pt-2">To verify your identity, Amazon may request formal documents such as government-issued ID, proof of address, and personal details. This step verifies your account and prevents fraud.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card shippingcard h-100 p-3 ">
                  <div class="d-flex align-items-center gap-4 icon-con-box">
                    <div class="p-2">
                      <FaAddressCard className="text-danger" size={28} />
                    </div>
                    <h5>Business Registration</h5>
                  </div>
                  <p class="pt-2">You may need to supply a business registration certificate, depending on your location and business type. For tax and legal purposes, sole proprietors, LLCs, and corporations need adequate documentation. Tech2Globe helps you compile and submit this documentation.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card shippingcard h-100 p-3 ">
                  <div class="d-flex align-items-center gap-4 icon-con-box">
                    <div class="p-2">
                      <FaBuilding className="text-danger" size={28} />
                    </div>
                    <h5>Banking Information</h5>
                  </div>
                  <p class="pt-2">Please give your bank account details to receive payments from Amazon. Link your bank account to your business and follow Amazon's payment processing instructions. Tech2Globe streamlines financial documents so you can get payments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-3 pb-3">
            <h4 className="mb-3">Supplier Contracts</h4>
            <p>In a dropship business, establishing legally enforceable agreements with your suppliers is really essential. These agreements define your working relationship's conditions and support your interests protection.</p>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card shippingcard h-100 p-3 ">
                  <div class="d-flex align-items-center gap-4 icon-con-box">
                    <div class="p-2">
                      <FaHandshake className="text-danger" size={28} />
                    </div>
                    <h5>Pricing Agreement</h5>
                  </div>
                  <p class="pt-2">Product pricing should be explicitly defined in supplier contracts, including bulk discounts or negotiated rates. This ensures transparency and minimizes unexpected cost adjustments that can lower profit margins.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card shippingcard h-100 p-3 ">
                  <div class="d-flex align-items-center gap-4 icon-con-box">
                    <div class="p-2">
                      <FaArrowsAltH className="text-danger" size={28} />
                    </div>
                    <h5>Shipping and Return Policies</h5>
                  </div>
                  <p class="pt-2">The contract should outline the supplier's shipping terms, including delivery schedules and return policies. Suppliers must follow Amazon's tight delivery criteria if they sell Prime-eligible products or FBA items.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card shippingcard h-100 p-3 ">
                  <div class="d-flex align-items-center gap-4 icon-con-box">
                    <div class="p-2">
                      <FaStar className="text-danger" size={28} />
                    </div>
                    <h5>Quality Control and Warranty</h5>
                  </div>
                  <p class="pt-2">To maintain your business reputation, incorporate quality control and warranty clauses in supplier agreements. This ensures high-quality items and defines defect and return policies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-3 pb-3">
            <h4 className="mb-3">Shipping and Fulfillment Agreements</h4>
            <p>Following Amazon's shipping and fulfillment policies is absolutely essential for Amazon dropship compliance. This is especially crucial if you are enrolled in FBA or Amazon Prime, where dependable and quick delivery is the first concern.</p>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card shippingcard h-100 p-3 ">
                  <div class="d-flex align-items-center gap-4 icon-con-box">
                    <div class="p-2">
                      <FaTag className="text-danger" size={28} />
                    </div>
                    <h5>Amazon Prime Requirements</h5>
                  </div>
                  <p class="pt-2">If you sell Prime-eligible products, your suppliers must meet Amazon's
                    strict shipping criteria, such as same-day or two-day delivery. To comply, your
                    supplier fulfillment agreements should reflect these standards. Tech2Globe helps you
                    ensure suppliers satisfy these standards.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card shippingcard h-100 p-3 ">
                  <div class="d-flex align-items-center gap-4 icon-con-box">
                    <div class="p-2">
                      <FaBoxOpen className="text-danger" size={28} />
                    </div>
                    <h5>Fulfillment by Amazon (FBA)</h5>
                  </div>
                  <p class="pt-2">Amazon's Fulfillment by Amazon (FBA) program requires additional packaging, labeling, and shipping standards for businesses using its fulfillment facilities. We ensure your vendors understand and can comply with these criteria.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div class="card shippingcard h-100 p-3 ">
                  <div class="d-flex align-items-center gap-4 icon-con-box">
                    <div class="p-2">
                      <FaPaste className="text-danger" size={28} />
                    </div>
                    <h5>Shipping Documentation</h5>
                  </div>
                  <p class="pt-2">Compliance with shipping documents is crucial to avoid delays and customs difficulties. Invoices, packing slips, and commercial documents are needed for foreign orders.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-5">
            <h2 className="mb-3">Fast and Efficient Setup – Our Turnaround Time</h2>
            <p className="mb-5">Time is vital in the cutthroat world of e-commerce, as Tech2Globe is aware. Therefore, we have simplified our procedures to ensure your Amazon dropshipping company is working as fast and effectively as possible.</p>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div class="card h-100 shadow">
                  <div class="img  w-100 ">
                    <img class="card-img-top h-100 w-100 object-fit-cover" src="/images/services/service-inner/efficientSetup1.jpg" alt="Niche and Supplier Research: 7-10 Business Days" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Niche and Supplier Research: 7-10 Business Days</h5>
                    <p class="card-text">Comprehensive market research in the process's first phase helps you find
                      the most profitable niches and ideal suppliers for your dropshipping company. We have used
                      premium product sourcing methods such as Doba, Alibaba, and SaleHoo over the past three to
                      five days in search of highly sought-after items with solid profit margins. We aim to enable you to join a market with excellent chances for success.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div class="card h-100 shadow">
                  <div class="img  w-100 ">
                    <img class="card-img-top h-100 w-100 object-fit-cover" src="/images/services/service-inner/efficientSetup2.jpg" alt="Amazon Account Setup: 1-2 Weeks" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Amazon Account Setup: 1-2 Weeks</h5>
                    <p class="card-text">Creating your Amazon Seller account requires critical actions, including business registration, identification confirmation, and financial information connection. Tech2Globe ensures timely submission of all required papers and works effectively to ensure that account approval's accurate timeline depends on Amazon's verification process. Usually, this phase lasts one to two weeks.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div class="card h-100 shadow">
                  <div class="img  w-100 ">
                    <img class="card-img-top h-100 w-100 object-fit-cover" src="/images/services/service-inner/efficientSetup3.webp" alt="Product Listings and Storefront Design: 1-2 Weeks" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Product Listings and Storefront Design: 1-2 Weeks</h5>
                    <p class="card-text">We then create your Amazon shop and list your items once your Seller account is available. Per Amazon's top standards, our staff ensures that your shop is aesthetically pleasing and intuitive. To draw in possible customers, we expertly maximize your product listings using SEO-friendly keywords, excellent photos, and strong descriptions. Usually takes one to two weeks for this technique.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div class="card h-100 shadow">
                  <div class="img  w-100 ">
                    <img class="card-img-top h-100 w-100 object-fit-cover" src="/images/services/service-inner/efficientSetup4.webp" alt="Total Time to Launch: 3-4 Weeks" />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title" style={{ fontSize: "19px" }}>Total Time to Launch: 3-4 Weeks</h5>
                    <p class="card-text">The Tech2Globe team makes sure that the whole procedure is finished in three to four weeks, from initial niche research to final integration and launch of your dropshipping store. Our dedication to precision and efficiency lets you start developing your Amazon dropshipping company immediately and creating sales.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-5">
            <h2 className="mb-3">Driving Sales for Your Amazon Dropshipping Store</h2>
            <p className="mb-3">Using tested techniques, Tech2Globe helps you draw in and convert clients, therefore promoting steady development for your Amazon dropshipping company. Here's how we accomplish this:</p>
            <div className="row drivingsection">
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div class="card h-100 p-2">
                  <div class="icon">
                    <FaCog />
                  </div>
                  <Link class="fw-bold fs-5 text-decoration-underline" href="/amazon-copywriting" target="_blank">Product
                    Optimization</Link>
                  <p>We design high-converting product listings that ensure your products stand out by carefully
                    choosing names, descriptions, and photos.</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div class="card h-100 p-2">
                  <div class="icon">
                    <FaCog />
                  </div>
                  <Link class="fw-bold fs-5 text-decoration-underline" href="/amazon-seo-listing-optimization" target="_blank">Amazon SEO</Link>
                  <p>Our staff uses cutting-edge SEO strategies to raise your product rankings in Amazon search results, improving exposure and traffic.</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div class="card h-100 p-2">
                  <div class="icon">
                    <FaCog />
                  </div>
                  <Link class="fw-bold fs-5 text-decoration-underline" href="/amazon-ppc-services" target="_blank">PPC Advertising</Link>
                  <p>Targeted Amazon PPC campaigns meant to generate qualified visitors to your store while maximizing your ROI are managed by PPC Advertising.</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div class="card h-100 p-2">
                  <div class="icon">
                    <FaCog />
                  </div>
                  <Link class="fw-bold fs-5 text-decoration-underline" href="/amazon-review-rating" target="_blank">Review and Reputation Management</Link>
                  <p>We help to develop trust, strengthen the standing of your store, and raise visibility by means of consumer comments and reviews.</p>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div class="card h-100 p-2">
                  <div class="icon">
                    <FaCog />
                  </div>
                  <Link class="fw-bold fs-5 text-decoration-underline" href="/amazon-marketing-services" target="_blank">Promotions and Discounts</Link>
                  <p>Customized promos and discounts are set up by us to draw clients, boost sales, and support returning business.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-5 pb-5">
            <h2 className="text-center mb-3">Comprehensive Account and Dropshipping Management</h2>
            <p className="mb-5 text-center">Tech2Globe offers a range of ongoing services to ensure your Amazon dropshipping business runs smoothly and efficiently:</p>

            <div className="row pt-3">
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div class="card h-100 p-2 text-center shadow position-relative">
                  <div class="icon-box bg-danger position-absolute">
                    <FaWarehouse />
                  </div>
                  <h5 class="mt-4 pt-3 pb-2">Inventory Management</h5>
                  <p>We keep an eye on stock levels to avoid stockouts or overselling, therefore ensuring your
                    consumers' flawless shopping experience.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div class="card h-100 p-2 text-center shadow position-relative">
                  <div class="icon-box bg-danger position-absolute">
                    <FaBoxes />
                  </div>
                  <h5 class="mt-4 pt-3 pb-2">Order Fulfilled</h5>
                  <p>Our automated systems perform prompt shipping to your clients and handle order placement with suppliers, therefore minimizing delays and mistakes.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div class="card h-100 p-2 text-center shadow position-relative">
                  <div class="icon-box bg-danger position-absolute">
                    <FaHeadset />
                  </div>
                  <h5 class="mt-4 pt-3 pb-2">Customer Service</h5>
                  <p>We help to keep high customer satisfaction ratings by helping with the speedy resolution of problems and management of client questions.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div class="card h-100 p-2 text-center shadow position-relative">
                  <div class="icon-box bg-danger position-absolute">
                    <FaChartLine />
                  </div>
                  <h5 class="mt-4 pt-3 pb-2">Performance Tracking</h5>
                  <p>We routinely evaluate the success of your store, looking at sales, returns, and comments to help you keep improving and maximize outcomes.
                  </p>
                </div>
              </div>
            </div>

          </div>


          <div className="row align-items-center">

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Image src="/images/services/service-inner/businesswomenholdinglaptop.webp" width={600} height={600} className="img-responsive img-fluid  object-fit-cover" alt="Start Your Amazon Dropshipping Business today!" />
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <h2>Join us to Start Your Amazon Dropshipping Business today!</h2>
              <p>Let Tech2Globe assist you in the establishment and expansion of your Amazon dropshipping store. You are just a single step away from creating a profitable online business with our dedication to your success, tools, and expertise.</p>
              <Link href="contact-us" className="button-red m-0">Contact Us</Link>
            </div>

          </div>

        </div>



      </section >

    </>
  )
};